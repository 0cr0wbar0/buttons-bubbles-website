import { Router } from "express";
import { createAccount } from "../Controllers/createUserController.js";

const router = Router();

router.post("/createAccount", createAccount);

export default router;