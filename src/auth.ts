import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signToken = (payload: any) =>
  jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "2h" });

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.JWT_SECRET!);

export const hash = (pwd: string) => bcrypt.hash(pwd, 10);
export const compare = (pwd: string, hashStr: string) => bcrypt.compare(pwd, hashStr);