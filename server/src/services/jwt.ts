import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const generateTokenForUser = (user: User) => {
  const payload = {
    id: user?.id,
    email: user?.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}