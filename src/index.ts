import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (_, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
