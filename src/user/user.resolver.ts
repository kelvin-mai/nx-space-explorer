import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from './auth.gaurd';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  @UseGuards(new AuthGuard())
  me(@Context('user') user: UserEntity) {
    return user;
  }

  @Mutation()
  async login(@Args('email') email: string) {
    let user = await this.userService.getUserByEmail(email);
    if (!user) {
      user = await this.userService.createUser(email);
    }
    return this.userService.createToken(user);
  }
}
