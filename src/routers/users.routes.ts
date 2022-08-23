import { Router } from 'express'
import createUserController from '../controllers/users/createUser.controllers';
import deleteUserController from '../controllers/users/deleteUser.Controllers';
import listUsersController from '../controllers/users/listUser.controllers';
import listUserIdController from '../controllers/users/listUserId.controllers';
import updateUserController from '../controllers/users/updateUser.controllers';

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.get('/:id', listUserIdController)
userRoutes.delete('/:id', deleteUserController)
userRoutes.patch('/:id',updateUserController)

export default userRoutes;