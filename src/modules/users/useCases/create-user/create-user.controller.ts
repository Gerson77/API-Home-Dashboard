import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/user.repository";
import { CreateUserUseCase } from "./create-user.usecase";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

export class CreateUserUseController {
    constructor(private userRepository: IUserRepository, private passwodCrypto: IPasswordCrypto) {}

    async handle(request: Request, response: Response){
        try{
            const data = request.body
            const useCase = new CreateUserUseCase(this.userRepository, this.passwodCrypto)
            const result = await useCase.execute(data)
            return response.json(result)
        }catch(err: any) {
            return response.status(400).json(err.message)
        }
    }
}