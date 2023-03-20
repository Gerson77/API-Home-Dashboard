import { IUserRepository } from "../../repositories/user.repository";

export class GetUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute(id: string){
        if(!id){
            throw new Error('User does not exists')
        }
        
        const user = await this.userRepository.findById(id)
        
        if(!user) {
            throw new Error('User does not exists')
        }

        return user
    }
}