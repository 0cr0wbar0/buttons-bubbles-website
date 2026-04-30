import { Router } from "express";
import { createAccount , changePassword, forgotPassword, resetPassword} from "../Controllers/userController.js";
import { isAuthenticated } from "../Middleware/auth.js";


const router = Router();

router.post("/", createAccount);
router.post("/change-password", isAuthenticated, changePassword);
router.post("/forgot-password",  forgotPassword);
router.post("/reset-password",  resetPassword);


export default router;