import { Request, Response } from "express";
import { ValidateUserUseCase } from "./validate-user.usecase";
import { IUserRepository } from "../../repositories/user.repository";

export class ValidateUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const data = request.body;
      const validateUserUseCase = new ValidateUserUseCase(this.userRepository);
      const result = await validateUserUseCase.execute(data);
      return response.json(result);
    } catch (err: any) {
      return response.status(401).json(err.message);
    }
  }
}
