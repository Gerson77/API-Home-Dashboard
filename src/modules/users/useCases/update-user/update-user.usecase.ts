import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";
import { IUserRepository } from "../../repositories/user.repository";

type UpdateUserRequest = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export class UpdateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordCrypto: IPasswordCrypto
  ) {}

  async execute({ id, name, email, password }: UpdateUserRequest) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User already exists");
    }

    const emailExists = await this.userRepository.findByEmail(email);

    if (
      emailExists &&
      emailExists?.email !== user.email &&
      emailExists?.email !== email
    ) {
      throw new Error("This email is already in use");
    }

    const removeSpace = (value: string): string => {
      return value.replace(/\s+/g, " ").trim();
    };

    const nameUser = removeSpace(name);
    name = nameUser;

    if (nameUser.length < 3) {
      name = user.name;
    }

    const emailUser = removeSpace(email);
    email = emailUser;

    if (emailUser.length < 12) {
      email = user.email;
    }

    const passwordUser = removeSpace(password);
    password = passwordUser;

    if (passwordUser.length < 5) {
      throw new Error("Password invalid");
    }

    const passwordHashed = await this.passwordCrypto.hash(password);
    password = passwordHashed;

    const updatedDataUser = await this.userRepository.updateDataUser(user.id, {
      name,
      email,
      password,
    });

    return updatedDataUser;
  }
}
