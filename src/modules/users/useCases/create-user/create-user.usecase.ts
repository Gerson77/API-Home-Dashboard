import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto"
import { User } from "../../entities/user.entity"
import { IUserRepository } from "../../repositories/user.repository"

type UserRequest = {
    name: string
    email: string
    password: string
}

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository, private passwordCrypto: IPasswordCrypto) {}

    async execute(data: UserRequest) {
        const user = await User.create(data)

        if(!data.email || !data.password) {
            throw new Error("Username/password is requiered.")
        }

        const existsUsername = await this.userRepository.findByEmail(data.email)

        if(existsUsername) {
            throw new Error('Usuário já existe!')
        }

        const passwordHashed = await this.passwordCrypto.hash(data.password)
        user.password = passwordHashed
        
        const userCreated = await this.userRepository.save(user)
        return userCreated
    }
}