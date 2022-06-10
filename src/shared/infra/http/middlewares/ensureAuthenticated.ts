import { NextFunction, Request, Response } from "express";
import axios from "axios";

import { AppError } from "@shared/errors/AppError";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { data } = await axios
      .get(`${process.env.FLAT_AUTH_BASE_URL}/flatmatch/token/authenticate`, {
        headers: {
          "authorization": `Bearer ${token}`
        }
      });

    request.user = {
      id: data.data._id
    }
    
    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
