import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { findUserByEmail, createUser } from "../Models/userModel.js";
import {sendNewAccountEmail} from "../Utils/email.js";

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
    await sendNewAccountEmail(email, name);

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