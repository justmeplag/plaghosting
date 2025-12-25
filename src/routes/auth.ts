import { Router } from "express";
import { query } from "../db";
import { hash, compare, signToken } from "../auth";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const pwHash = await hash(password);
  await