import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, appSlug  } = req.body;

    const user = await registerUser(email, password, appSlug);

    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, appSlug  } = req.body;

    const data = await loginUser(email, password, appSlug);

    res.json(data);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};