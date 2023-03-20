import { ClientPrismaRepository } from "../../repositories/implementations/client.prisma.repository";
import { CreateClientController } from "./create-client.controller";

const clientPrismaRepository = new ClientPrismaRepository()
const createClientController = new CreateClientController(clientPrismaRepository)

export { createClientController }