import { IClientRepository } from "../../repositories/client.repository";

export class ReadClientsUseCase {
    constructor(private clientRepository: IClientRepository){}

    async execute(){
        const clients = await this.clientRepository.findAllClient()
        return clients
    }
}