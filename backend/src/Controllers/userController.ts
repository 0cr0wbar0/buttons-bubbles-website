import bcrypt from "bcrypt";
import { Request, Response } from "express";
import {
  findUserByEmail,
  createUser,
  updateUserPassword
} from "../Models/userModel.js";
import {
  sendNewAccountEmail,
  sendTemporaryPasswordEmail
} from "../Utils/email.js";

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
      address
    });

    // Send email
    await sendNewAccountEmail(email, name);

    return res.status(201).json({
      newUser,
      message: "User registered successfully."
    });
  } catch (error) {
    console.error("Error creating account:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the account." });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  const { email, oldPassword, newPassword } = req.body;

  if (!email || !oldPassword || !newPassword) {
    return res
      .status(400)
      .json({ error: "Email, old password, and new password are required." });
  }

  try {
    // Check if user exists
    const existingUser = await findUserByEmail(email);

    if (existingUser.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    // Get user data
    const user = existingUser[0];

    // Verify old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Old password is incorrect." });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password
    await updateUserPassword(email, hashedPassword);

    return res.status(200).json({ message: "Password changed successfully." });
  } catch (error) {
    console.error("Error changing password:", error);
    res
      .status(500)
      .json({ error: "An error occurred while changing the password." });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }
  try {
    // Check if user exists
    const existingUser = await findUserByEmail(email);

    if (existingUser.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    // Get user data
    const user = existingUser[0];

    // Generate a temporary password
    const tempPassword = Math.random().toString(36).slice(-8);

    // Hash the temporary password
    const hashedTempPassword = await bcrypt.hash(tempPassword, 10);

    // Update user's password with the temporary password
    await updateUserPassword(email, hashedTempPassword);

    // Send email with the temporary password
    await sendTemporaryPasswordEmail(email, user.name, tempPassword);

    return res
      .status(200)
      .json({ message: "Temporary password sent to email." });
  } catch (error) {
    console.error("Error in forgot password:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
};
