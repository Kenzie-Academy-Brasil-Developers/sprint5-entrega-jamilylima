import { Request, Response } from "express";
import UpdateUserService from "../../services/users/updateUser.service";
import { IUserRequest } from "../../interfaces/users.interfaces";

const updateUserController = async (req: Request, res: Response) => {
  try {

    const {name,email,password, age}: IUserRequest = req.body
    const {id} = req.params;

    const user = await UpdateUserService(id, {name,email,password,age});

    return res.status(200).json({
      user,
      message: "User updated!"
    });
      
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default updateUserController;
