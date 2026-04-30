import passport from "passport";
import { Request, Response, NextFunction } from 'express';
import {sendLoginSuccessEmail} from "../Utils/email.js";


// Login user controller
const loginController = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", async (err: any, user: any, info: any) => {

    if (err) return res.status(500).json(err);
    if (!user) return res.status(400).json(info);

    req.login(user, async (err) => {
      if (err) return res.status(500).json(err);

      try {
        await sendLoginSuccessEmail(user.email, user.name);
      } catch (error) {
        console.error("Email error:", error);
      }

      // ✅ SEND RESPONSE ONLY AFTER LOGIN IS COMPLETE
      return res.json({
        message: "Logged in successfully",
        user
      });
    });

  })(req, res, next);
};

export default loginController;