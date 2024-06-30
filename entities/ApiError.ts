import { Response } from "express";

const ApiError = (res: Response, message: string, status?: number) => {
  const currentStatus = status || 500;

  res.status(currentStatus).json({
    ok: false,
    message,
    data: null,
  });
};

export default ApiError;
