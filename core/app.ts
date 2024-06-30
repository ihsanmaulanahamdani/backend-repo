import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import userRouter from "../routes/userRotues";

app.use("/", userRouter);

export default app;
