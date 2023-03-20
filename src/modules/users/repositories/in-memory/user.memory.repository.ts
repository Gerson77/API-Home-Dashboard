import { User } from "../../entities/user.entity";
import { IUserRepository } from "../user.repository";

export class UserMemoryRepository implements IUserRepository {
  users: User[];

  constructor() {
    this.users = [];
  }

  async deleteUser(id: string): Promise<User | null> {
    const userId = this.users.find((user) => user.id === id);

    if (userId) {
      const user = this.users.indexOf(userId);
      this.users.slice(user, 1);
    }

    return userId || null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async updateDataUser(id: string, data: User): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);

    if (user) {
      this.users.push(data);
      return data;
    }
    return user || null;
  }

  async save(data: User) {
    this.users.push(data);
    return data;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  async findAllUser(): Promise<User[]> {
    const users = this.users;
    return users;
  }
}
