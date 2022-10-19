import { Router } from "express";

export const saladRouter = Router();

saladRouter.get("/", (_, res) => {
  res.json({ message: "Hello from salad route" });
});
