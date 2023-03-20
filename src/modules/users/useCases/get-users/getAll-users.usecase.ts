import { IUserRepository } from "../../repositories/user.repository";

export class GetUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute(){
        const users = await this.userRepository.findAllUser()
        return users
    }
}