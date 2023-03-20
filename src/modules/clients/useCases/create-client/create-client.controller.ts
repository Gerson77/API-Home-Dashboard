import { Request, Response } from "express";
import { IClientRepository } from "../../repositories/client.repository";
import { CreateClientUseCase } from "./create-client.usecase";

export class CreateClientController {
    constructor(private clientRepository: IClientRepository) {}

    async handle(request: Request, response: Response){
        try {
            const data = request.body
            const clientUseCase = new CreateClientUseCase(this.clientRepository)
            const result = await clientUseCase.execute(data)
            return response.json(result)
        }catch(err: any) {
            return response.status(401).json(err.message)
        }
    }
}