import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/users.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly usersService: UsersService) {}

  async signUp(userInfo: Partial<User>): Promise<Partial<User>> {
    const userCreated = await this.usersService.createUser(userInfo);
    const { rol, ...user } = userCreated;
    return user;
  }
}
