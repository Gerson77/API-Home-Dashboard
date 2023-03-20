import { User } from "../entities/user.entity";

type UserUpdate = {
  name: string;
  email: string;
  password: string;
};

export interface IUserRepository {
  save(data: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findAllUser(): Promise<User[]>;

  findById(id: string): Promise<User | null>;
  updateDataUser(id: string, data: UserUpdate): Promise<User | null>;
  
  deleteUser(id: string): Promise<User | null>
}
