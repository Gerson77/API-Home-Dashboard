import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { UserPrismaRepository } from "../../repositories/prisma/user.prisma.repository";
import { UpdateUserController } from "./update-user.controller";

const userPrismaRepository = new UserPrismaRepository()
const passwordBcrypt = new PasswordBcrypt()
const updateUserController = new UpdateUserController(userPrismaRepository, passwordBcrypt)

export { updateUserController }