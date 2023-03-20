import { ClientPrismaRepository } from "../../repositories/implementations/client.prisma.repository";
import { ReadClientsController } from "./read-clients.controller";

const clientPrismaRepository = new ClientPrismaRepository()
const readClientController = new ReadClientsController(clientPrismaRepository)

export { readClientController }