import { Client } from "../entities/client.entity";

export interface IClientRepository {
    save(data: Client): Promise<Client>
    findByEmail(email: string): Promise<Client | null>
    findById(id: string): Promise<Client | null>
    findAllClient(): Promise<Client[]>

    updateStatusClient(data: Client): Promise<Client>
}