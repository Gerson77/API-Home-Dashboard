import { UserPrismaRepository } from "../../repositories/prisma/user.prisma.repository";
import { DeleteUserController } from "./delete-user.controller";

const userPrismaRepository = new UserPrismaRepository()
const deleteUserController = new DeleteUserController(userPrismaRepository)

export { deleteUserController }