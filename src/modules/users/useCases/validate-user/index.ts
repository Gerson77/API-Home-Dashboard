import { UserPrismaRepository } from "../../repositories/prisma/user.prisma.repository";
import { ValidateUserController } from "./validate-user.controller";

const userPrismaRepository = new UserPrismaRepository();
const validateUserController = new ValidateUserController(userPrismaRepository);

export { validateUserController };
