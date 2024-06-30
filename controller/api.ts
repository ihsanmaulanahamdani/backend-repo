import { Request, Response } from "express";

import { db } from "../config/firebaseConfig";

import ApiError from "../entities/ApiError";
import ApiSuccess from "../entities/ApiSuccess";

import { IUser } from "../repository/userCollection";

const userCollection = "users";

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    await db.collection(userCollection).doc(id).set(payload);

    const updatedUserData = (
      await db.collection(userCollection).doc(id).get()
    ).data();

    ApiSuccess(res, "Update user data", updatedUserData);
  } catch (error) {
    if (error instanceof Error) {
      ApiError(res, error.message);
    }
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const usersSnapshot = await db.collection(userCollection).get();
    const userData = usersSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as IUser[];

    ApiSuccess(res, "Get all user data", userData);
  } catch (error) {
    if (error instanceof Error) {
      ApiError(res, error.message);
    }
  }
};
