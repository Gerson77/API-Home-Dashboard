import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { UserPrismaRepository } from "../../repositories/prisma/user.prisma.repository";
import { CreateUserUseController } from "./create-user.controller";

const userPrismaRepository = new UserPrismaRepository()
const passwordCrypto = new PasswordBcrypt()
const createUserController = new CreateUserUseController(userPrismaRepository, passwordCrypto)

export { createUserController }