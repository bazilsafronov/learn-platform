import express from "express";

const PORT = 3000;

const app = express();

app.get("/signup", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
