import bcrypt from "bcrypt";

const salt = 12;

export async function passwordHash(password: string): Promise<string> {
  return bcrypt.hash(password, salt);
}

export async function passwordVerify(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
