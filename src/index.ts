import express from "express";

// Routes
import { saladRouter } from "./routes/salad";
import { chipsRouter } from "./routes/chips";
import { reviewRouter } from "./routes/review";
import { toppingRouter } from "./routes/topping";

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/salad", saladRouter);
app.use("/chips", chipsRouter);
app.use("/review", reviewRouter);
app.use("/topping", toppingRouter);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
