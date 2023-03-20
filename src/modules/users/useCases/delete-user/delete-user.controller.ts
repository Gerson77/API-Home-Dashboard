import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/user.repository";
import { DeleteUserUseCase } from "./delete-user.usecase";

export class DeleteUserController {
    constructor(private userRepository: IUserRepository) {}

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params
            const deleteUserUseCase = new DeleteUserUseCase(this.userRepository)
            await deleteUserUseCase.execute(id)
            return response.json({ message: 'User delete success!' }).end()
        }catch(err: any) {
            return response.status(400).json(err.message) 
        }
    }
}