import { JWTToken } from "../../../../infra/shared/token/jwt.token";
import { IUserRepository } from "../../repositories/user.repository";

type UserRequestToken = {
  token: string;
  email: string;
};

export class ValidateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserRequestToken) {
    if (!data.token) {
      throw new Error("Token invalido!");
    }

    const verifyToken = new JWTToken().validate(data.token);

    if (!verifyToken) {
      throw new Error("Token invalido!");
    }

    const user = await this.userRepository.findByEmail(data.email);

    return {
      id: user?.id,
      email: user?.email,
      name: user?.name,
      password: user?.password,
    };
  }
}
