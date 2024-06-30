import { Response } from "express";

const ApiSuccess = (res: Response, message: string, data: any, status?: number) => {
  const currentStatus = status || 200;

  res.status(currentStatus).json({
    ok: true,
    message,
    data,
  });
};

export default ApiSuccess;
