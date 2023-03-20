import { ClientPrismaRepository } from "../../repositories/implementations/client.prisma.repository";
import { UpdateClientController } from "./update.client.controller";

const clientPrismaRepository = new ClientPrismaRepository();
const updateClientController = new UpdateClientController(
  clientPrismaRepository
);

export { updateClientController };
