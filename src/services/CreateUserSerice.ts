import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, password, admin } : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Incorrect e-mail !")
        }

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if (userAlreadyExists) {
            throw new Error("User exists already !");
        }

        const user = usersRepository.create({
            name,
            email,
            password,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };