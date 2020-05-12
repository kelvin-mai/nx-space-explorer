import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { User } from '@/graphql';
import { AuthGuard } from './auth.gaurd';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  @UseGuards(new AuthGuard())
  me(@Context('user') user: User) {
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
