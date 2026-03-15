import passport from "passport";
import { Request, Response, NextFunction } from 'express';
import {sendLoginSuccessEmail} from "../Utils/email.js";


// Login user controller
const loginController = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", async (err: any, user: any, info: any) => {
    
    if (err) return res.status(500).json(err);

    //if user doesnt exist
    if (!user) return res.status(400).json(info);

    req.login(user, async  (err) => {
      if (err) return res.status(500).json(err);
      
      // Send response with user data
      res.json({ message: "Logged in successfully", user });

      try {
        // Send login success email
        await sendLoginSuccessEmail(user.email, user.name);
      } catch (error) {
        console.error("Error sending login success email:", error);
        res.status(500).json({ error: "An error occurred while sending the login success email." });
      }
    });
  })(req, res, next);
};

export default loginController;