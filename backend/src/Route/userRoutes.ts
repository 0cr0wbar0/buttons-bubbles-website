import { Router } from "express";
import { createAccount , changePassword, forgotPassword} from "../Controllers/userController.js";

const router = Router();

router.post("/", createAccount);
router.post("/change-password", changePassword);
router.post("/forgot-password", forgotPassword);


export default router;