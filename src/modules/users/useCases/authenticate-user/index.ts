import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { JWTToken } from "../../../../infra/shared/token/jwt.token";
import { UserPrismaRepository } from "../../repositories/prisma/user.prisma.repository";
import { AuthenticateUserController } from "./authencicate-user.controller";

const userPrismaRepository = new UserPrismaRepository()
const passwordBrypt = new PasswordBcrypt()
const token = new JWTToken()
const authenticateUserController = new AuthenticateUserController(userPrismaRepository, passwordBrypt, token)


export { authenticateUserController }