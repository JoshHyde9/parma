import { Router } from "express";

export const chipsRouter = Router();

chipsRouter.get("/", (_, res) => {
  res.json({ message: "Hello from chips route" });
});
