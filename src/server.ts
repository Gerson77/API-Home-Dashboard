import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log("Server is running => PORT: 3000");
});
