import { sign } from "jsonwebtoken";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";
import { IToken } from "../../../../infra/shared/token/token";
import { IUserRepository } from "../../repositories/user.repository";

type AuthenticaRequest = {
  email: string;
  password: string;
};

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordCrypto: IPasswordCrypto,
    private token: IToken
  ) {}

  async execute({ email, password }: AuthenticaRequest) {
    if (!email || !password) {
      throw new Error("email/password incorrect");
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email/password incorrect");
    }

    const comparePasswordEquals = await this.passwordCrypto.compare(
      password,
      user.password
    );

    if (!comparePasswordEquals) {
      throw new Error("Email/password incorrect");
    }

    const tokenGenerated = this.token.create(user);

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token: tokenGenerated,
    };
  }
}
