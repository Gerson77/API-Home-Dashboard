import { Client } from "../../entities/client.entity"
import { IClientRepository } from "../../repositories/client.repository"

type ClientRequest = {
    name: string
    email: string
    phone: string
}

export class CreateClientUseCase {
    constructor(private clientRepository: IClientRepository) {}

    async execute(data: ClientRequest){
        const client = await Client.create(data) 
        
        if(!data.name || !data.email || !data.phone){
            throw new Error('Campo vázio não é permitido')
        }

        const emailExists = await this.clientRepository.findByEmail(data.email)

        if(emailExists) {
            throw new Error('Email já cadastrado. Aguarde pelo nosso retorno!')
        }

        const createClient = await this.clientRepository.save(client)
        return createClient 
    }
}