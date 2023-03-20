import { Router } from "express";
import { createClientController } from "../modules/clients/useCases/create-client";
import { ensureAuthenticate } from "../infra/shared/http/middleware/ensure-authenticate.middleware";
import { readClientController } from "../modules/clients/useCases/read-clients";
import { updateClientController } from "../modules/clients/useCases/update-client";

const clientRouter = Router();

clientRouter.post("/client", async (request, response) => {
  await createClientController.handle(request, response);
});

clientRouter.get("/clients", ensureAuthenticate, async (request, response) => {
  await readClientController.handle(request, response);
});

clientRouter.put(
  "/client/:id",
  ensureAuthenticate,
  async (request, response) => {
    await updateClientController.handle(request, response);
  }
);

export { clientRouter };
