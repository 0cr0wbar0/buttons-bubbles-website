import express from "express";
import session from "express-session";
import passport from "./Config/passport.js";



// Import routes
import userRoutes from "./Route/createUserRoutes.js";
import loginRoutes from "./Route/loginRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET  || "session_secret_here",
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/register", userRoutes);
app.use("/login", loginRoutes);








// Start the server
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("server is running");
});



app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});