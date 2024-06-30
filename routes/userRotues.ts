import { Router } from "express";

import { fetchUserData, updateUserData } from "../controller/api";

import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.get("/", (_, res) => {
  res.send("Welcome to EBUDDY Backend Repo!");
});
router.get("/fetch-user-data", fetchUserData);
router.use(authenticate);
router.put("/update-user-data/:id", updateUserData);

export default router;
