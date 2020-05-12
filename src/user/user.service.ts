import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';

import { User } from '@/graphql';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  createToken({ id, email }: UserEntity) {
    const user: User = { id, email, trips: [] };
    return jwt.sign(user, 'secret');
  }

  createUser(email: string) {
    return this.userRepo.create({ email }).save();
  }

  getUserByEmail(email: string) {
    return this.userRepo.findOne({ email });
  }
}
