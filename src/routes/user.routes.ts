import { Router } from "express";
import { createUserController } from "../modules/users/useCases/create-user";
import { authenticateUserController } from "../modules/users/useCases/authenticate-user";
import { ensureAuthenticate } from "../infra/shared/http/middleware/ensure-authenticate.middleware";
import { getUserAllController } from "../modules/users/useCases/get-users";
import { updateUserController } from "../modules/users/useCases/update-user";
import { deleteUserController } from "../modules/users/useCases/delete-user";
import { getUserController } from "../modules/users/useCases/get-user";
import { validateUserController } from "../modules/users/useCases/validate-user";

const userRouter = Router();

userRouter.post("/login", async (request, response) => {
  await authenticateUserController.handle(request, response);
});

userRouter.get("/users", ensureAuthenticate, async (request, response) => {
  await getUserAllController.handle(request, response);
});

userRouter.get("/user/:id", ensureAuthenticate, async (request, response) => {
  await getUserController.handle(request, response);
});

userRouter.post("/users", ensureAuthenticate, async (request, response) => {
  await createUserController.handle(request, response);
});

userRouter.put("/user/:id", ensureAuthenticate, async (request, response) => {
  await updateUserController.handle(request, response);
});

userRouter.delete(
  "/user/:id",
  ensureAuthenticate,
  async (request, response) => {
    await deleteUserController.handle(request, response);
  }
);

userRouter.post("/validate", async (request, response) => {
  await validateUserController.handle(request, response);
});
export { userRouter };
