import { NextFunction, Request, Response } from "express";

import admin from "../config/firebaseConfig";
import ApiError from "../entities/ApiError";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return ApiError(res, "Unauthorized", 401);
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    // req.user = decodedToken;
    next();
  } catch (error) {
    return ApiError(res, "Unauthorized", 401);
  }
};
