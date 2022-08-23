import { IUserRequest } from '../../interfaces/users.interfaces'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/users.entity'
import { hash } from 'bcryptjs'

const createUserService = async ({email, name, password,age}: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    if(!password){
        throw new Error("Password is a required field")
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        age,
        created_at:new Date(),
        updated_at:new Date()
    })

    await userRepository.save(user)

    return user

}

export default createUserService