import { prismaClient } from "../../../../databases/prisma.config";
import { Client } from "../../entities/client.entity";
import { IClientRepository } from "../client.repository";

export class ClientPrismaRepository implements IClientRepository {
  async findById(id: string): Promise<Client | null> {
    return prismaClient.client.findUnique({
      where: {
        id: id
      }
    })
  }
  async updateStatusClient(data: Client): Promise<Client> {
    const client = await prismaClient.client.update({
      where: {
        id: data.id,
      },
      data: {
        status: data.status
      }
    });
    return client;
  }

  async findByEmail(email: string): Promise<Client | null> {
    return prismaClient.client.findUnique({
      where: {
        email: email,
      },
    });
  }

  async save(data: Client): Promise<Client> {
    const client = await prismaClient.client.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    });
    return client;
  }

  async findAllClient(): Promise<Client[]> {
    return prismaClient.client.findMany();
  }
}
