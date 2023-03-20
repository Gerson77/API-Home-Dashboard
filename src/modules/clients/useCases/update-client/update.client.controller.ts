import { Request, Response } from "express";
import { IClientRepository } from "../../repositories/client.repository";
import { UpdateClientUseCase } from "./update-client.usecase";

export class UpdateClientController {
  constructor(private clientRepository: IClientRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = request.body;

      const useCase = new UpdateClientUseCase(this.clientRepository);
      const result = await useCase.execute(data, id);
      return response.json(result);
    } catch (err: any) {
      return response.status(404).json(err.message);
    }
  }
}
