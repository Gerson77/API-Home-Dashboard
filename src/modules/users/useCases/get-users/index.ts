import { UserPrismaRepository } from "../../repositories/prisma/user.prisma.repository";
import { GetAllUserController } from "./getAll-users.controller";

const userRepository = new UserPrismaRepository()
const getUserAllController = new GetAllUserController(userRepository)

export { getUserAllController }