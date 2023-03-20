import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/user.repository";
import { GetUserUseCase } from "./getAll-users.usecase";

export class GetAllUserController {
    constructor(private userRepository: IUserRepository){}

    async handle(request: Request, response: Response){
        const listUsers = new GetUserUseCase(this.userRepository)
        try {
            const result = await listUsers.execute()
            return response.json(result)
        }catch(err: any) {
            return response.status(401).json(err.message)
        }
    }
}