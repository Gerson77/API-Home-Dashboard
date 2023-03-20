import { UserPrismaRepository } from "../../repositories/prisma/user.prisma.repository";
import { GetUserController } from "./get-user.controller";

const userPrismaRepository = new UserPrismaRepository();
const getUserController = new GetUserController(userPrismaRepository);

export { getUserController };
