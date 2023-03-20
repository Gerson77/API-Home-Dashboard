import { Router } from "express";
import { userRouter } from "./user.routes";
import { clientRouter } from "./client.routes";

const router = Router();

router.use(userRouter);
router.use(clientRouter);

export { router };
