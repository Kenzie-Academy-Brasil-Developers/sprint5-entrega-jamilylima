import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users.entity"
    
    
    const deleteUserService = async (id: string) => {
    
        const userRepository = AppDataSource.getRepository(User) 
    
        const users = await userRepository.find()
    
        const user = users.find(user => user.id === id)
    
        await userRepository.delete(user!.id)
    
        return true
    }
    
    export default deleteUserService