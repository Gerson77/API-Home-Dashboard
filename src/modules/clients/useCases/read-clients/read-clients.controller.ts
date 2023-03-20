import { Request, Response } from "express";
import { IClientRepository } from "../../repositories/client.repository";
import { ReadClientsUseCase } from "./read-clients.usecase";

export class ReadClientsController {
    constructor(private clientRepository: IClientRepository){}

    async handle(request: Request, response: Response){
        const listClient = new ReadClientsUseCase(this.clientRepository)
        try {
            const clientUseCase = await listClient.execute()
            return response.json(clientUseCase)
        }catch(err: any) {
            return response.status(401).json(err.message)
        }
    }
}