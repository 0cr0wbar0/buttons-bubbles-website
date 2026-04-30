import bcrypt from "bcrypt";
import crypto from "crypto";
import { Request, Response } from "express";
import { findUserByEmail, createUser, updateUserPassword ,findUserByHashedToken, saveResetToken , findUserByResetToken, clearResetToken} from "../Models/userModel.js";
import {sendNewAccountEmail, sendPasswordResetEmail} from "../Utils/email.js";

export const createAccount = async (req: Request, res: Response) => {
  const { name, email, password, dob, address } = req.body;

  if (!name || !email || !password || !dob || !address) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if user exists
    const existingUser = await findUserByEmail(email);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "User already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await createUser({
      name,
      email,
      password: hashedPassword,
      dob,
      address,
    });

    // Send email
   try {
  await sendNewAccountEmail(email, name);
} catch (err) {
  console.error("Email failed:", err);
}

    return res.status(201).json({
      newUser,
      message: "User registered successfully.",
    });
  } catch (error) {
    console.error("Error creating account:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the account." });
  }
};


export const changePassword = async (req: Request, res: Response) => {
  const {  oldPassword, newPassword } = req.body;

  const user = req.user as any; 

    if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }


  if ( !oldPassword || !newPassword) {
    return res.status(400).json({ error: " old password, and new password are required." });
  }

  try {
  const freshUserArr = await findUserByEmail(user.email);
const freshUser = freshUserArr[0];



    // Verify old password
   const isMatch = await bcrypt.compare(oldPassword, freshUser.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Old password is incorrect." });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password
    await updateUserPassword(user.email, hashedPassword);

    return res.status(200).json({ message: "Password changed successfully." });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ error: "An error occurred while changing the password." });
  }

}


export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {

    // Check if user exists
    const userArr = await findUserByEmail(email);

    if (userArr.length === 0) {
      return res.status(200).json({
        message: "If the account exists, a reset email has been sent.",
      });
    }

    const user = userArr[0];

    // Generate reset token
    const token = crypto.randomBytes(32).toString("hex");

      // Hash token
   const hashedToken = crypto
  .createHash("sha256")
  .update(token)
  .digest("hex");

     // Store token + expiry (15 mins)
    await saveResetToken(user.email, hashedToken, Date.now() + 15 * 60 * 1000);


  // send reset link 
    const resetLink = `https://${process.env.HOST}/reset-password?token=${token}`;


    // Send email with the temporary password
    await sendPasswordResetEmail(email, user.name, resetLink);

   return res.status(200).json({
      message: " a reset email has been sent.",
    });

  }catch (error) {
    console.error("Error in forgot password:", error);
    res.status(500).json({ error: "server errror." });
  }
    

}




export const resetPassword = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({
      error: "Token and new password are required.",
    });
  }

  try {
    // hash incoming token same way
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const userArr = await findUserByHashedToken(hashedToken);

    if (userArr.length === 0) {
      return res.status(400).json({ error: "Invalid or expired token." });
    }

    const user = userArr[0];

    if (!user.reset_token_expiry || user.reset_token_expiry < Date.now()) {
      return res.status(400).json({ error: "Token expired." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await updateUserPassword(user.email, hashedPassword);
    await clearResetToken(user.email);

    return res.status(200).json({
      message: "Password reset successful.",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};