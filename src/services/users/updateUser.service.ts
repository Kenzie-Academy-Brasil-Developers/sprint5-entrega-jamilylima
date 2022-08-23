import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users.interfaces";

const UpdateUserService = async (
  id: string,
  { name, email, password, age }: IUserRequest
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  await userRepository.update(id, {
    name,
    email,
    password,
    age,
    updated_at:new Date()
  });
  const users = await userRepository.findOneBy({ id });

  if (!users) {
    throw new Error("User not found");
  }

  return users;
};

export default UpdateUserService;
