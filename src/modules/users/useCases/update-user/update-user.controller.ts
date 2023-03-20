import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/user.repository";
import { UpdateUserUseCase } from "./update-user.usecase";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

export class UpdateUserController {
    constructor(private userRespository: IUserRepository,private passwordCrypto: IPasswordCrypto) {}

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params
            const { name, email, password } = request.body
            const updateUserUseCase = new UpdateUserUseCase(this.userRespository, this.passwordCrypto)
            const result = await updateUserUseCase.execute({ id, name, email, password } )
            return response.json(result)
        } catch (err: any) {
            return response.status(404).json(err.message)
        }
    }
}