import { Request, Response } from "express";
import listUserIdService from "../../services/users/listUserId.service";

const listUserIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await listUserIdService(id);
    return res.json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
};
export default listUserIdController;
