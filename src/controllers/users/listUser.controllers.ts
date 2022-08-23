import { Request, Response } from 'express'
import listUsersService from '../../services/users/listUsersService'

const listUsersController = async (req: Request, res: Response) => {
    try {
        const users = await listUsersService()
        return res.json(users)
    } catch (error) {
        if (error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}
export default listUsersController
