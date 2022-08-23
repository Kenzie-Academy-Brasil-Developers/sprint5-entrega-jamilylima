import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";

const listUserIdService = async (id:string) => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find()

    const user = users.find(user => user.id === id)

    if (!user) {
        return 'User not found'
    }

    return user

};

export default listUserIdService;
