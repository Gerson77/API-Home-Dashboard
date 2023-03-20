import { IUserRepository } from "../../repositories/user.repository";

export class DeleteUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute(id: string){
        const user = await this.userRepository.findById(id)

        if(!user) {
            throw new Error('User is not exists!')
        }

        await this.userRepository.deleteUser(id)

        return true

    }
}