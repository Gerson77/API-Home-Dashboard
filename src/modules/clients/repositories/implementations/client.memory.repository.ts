import { Client } from "../../entities/client.entity";
import { IClientRepository } from "../client.repository";

export class ClientMemoryRepository implements IClientRepository {
  clients: Client[];

  constructor() {
    this.clients = [];
  }

  async findById(id: string): Promise<Client | null> {
    return this.clients.find((client) => client.id === id) || null;
  }

  async updateStatusClient(data: Client): Promise<Client> {
    const index = this.clients.findIndex((client) => client.id === data.id);

    const client = this.clients[index];
    this.clients[index] = {
      ...client,
      status: data.status,
    };

    data = this.clients[index];

    return data
  }

  async findByEmail(email: string): Promise<Client | null> {
    return this.clients.find((client) => client.email === email) || null;
  }

  async findAllClient(): Promise<Client[]> {
    return this.clients;
  }

  async save(data: Client): Promise<Client> {
    this.clients.push(data);
    return data;
  }
}
