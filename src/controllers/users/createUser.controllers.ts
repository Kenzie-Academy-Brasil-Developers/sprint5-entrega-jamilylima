import { Request, Response } from 'express'
import { IUserRequest } from '../../interfaces/users.interfaces'
import createUserService from '../../services/users/createUser.service'


const createUserController = async (req: Request, res: Response) => {
    try {
        const { email, age, name, password }: IUserRequest = req.body
        const {password:notPassword, ...user } = await createUserService({email, age, name, password})
        return res.status(201).json(user)
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                error: error.message,
                message: "error user"
            })
        }
    }
}

export default createUserController
