import { prismaClient } from "../../../../databases/prisma.config";
import { User } from "../../entities/user.entity";
import { IUserRepository } from "../user.repository";

export class UserPrismaRepository implements IUserRepository {
  async updateDataUser(id: string, data: User): Promise<User | null> {
    const user = await prismaClient.user.update({
      where: {
        id: id
      },
      data,
    })
    return user
  }

  async deleteUser(id: string): Promise<User | null> {
    const deleteUser = await prismaClient.user.delete({
      where: {
        id: id
      }
    })
    return deleteUser
  }
  
  async findById(id: string): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: {
        id: id
      }
    })
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async save(data: User): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    return user;
  }

  async findAllUser(): Promise<User[]> {
    return await prismaClient.$queryRaw`
          SELECT "id", "name", "email", "isAdmin" from users
     `;
  }

}
