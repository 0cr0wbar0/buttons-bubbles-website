import { Router } from "express";
import { createAccount } from "../Controllers/userController.js";

const router = Router();

router.post("/", createAccount);

export default router;