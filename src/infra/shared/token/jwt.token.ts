import { User } from "../../../modules/users/entities/user.entity";
import { IToken } from "./token";
import { sign, verify } from 'jsonwebtoken'
import { createHmac } from 'crypto'

export class JWTToken implements IToken {
    private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN || '';
    private TOKEN_SECRET_CRYPTO = createHmac('sha256', this.TOKEN_SECRET).digest('base64')

    create({email, id, isAdmin}: User): string {
        const token = sign({ 
            user: {
                email,
                isAdmin,
                id
            }
         }, this.TOKEN_SECRET_CRYPTO, {
            subject: id,
            expiresIn: '45m'
        })

        return token
    }

    validate(token: string): boolean {
        try {
            verify(token, this.TOKEN_SECRET_CRYPTO)
            return true
        }catch(err: any) {
            return false
        }
    }
}
