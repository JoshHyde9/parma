import { Router } from "express";

export const reviewRouter = Router();

reviewRouter.get("/", (_, res) => {
  res.json({ message: "Hello from review route" });
});
