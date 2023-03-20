import { IClientRepository } from "../../repositories/client.repository";

type ClientRequest = {
  name: string;
  email: string;
  phone: string;
  status: boolean;
};

export class UpdateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(data: ClientRequest, clientId: string) {
    const client = await this.clientRepository.findById(clientId);

    if (!client) {
      throw new Error("Client does not exists");
    }

    const clientUpdate = await this.clientRepository.updateStatusClient({
      ...data,
      id: client.id,
    });
    return clientUpdate;
  }
}
