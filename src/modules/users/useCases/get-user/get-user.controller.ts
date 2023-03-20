import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/user.repository";
import { GetUserUseCase } from "./get-user.usecase";

export class GetUserController {
    constructor(private userRepository: IUserRepository) {}

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params
            const getUserUseCase = new GetUserUseCase(this.userRepository)
            const result = await getUserUseCase.execute(id)
            return response.json(result)
        }catch(err: any) {
            return response.status(404).json(err.message)
        }
    }
}