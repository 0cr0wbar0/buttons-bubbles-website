import express from "express";
import userRouter from "./modules/user.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT ?? "3000";

app.use("/users", userRouter);

app.get("/", (_req, res) => {
  res.send("Hello from Express");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
