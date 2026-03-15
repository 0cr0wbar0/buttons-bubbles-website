import express from "express";
import userRoutes from "./Route/createUserRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api", userRoutes);







// Start the server
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("server is running");
});



app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});