import { User } from '@core/entities/User';

export interface UsersRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findById(userId: string): Promise<User>;
  findByTitle(userName: string): Promise<User>;
  updateByTitle(
    userName: string,
    newUser: User,
  ): Promise<User>;
  deleteByTitle(userName: string): Promise<User>;
}
