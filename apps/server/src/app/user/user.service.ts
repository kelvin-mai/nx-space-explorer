import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';

import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private configService: ConfigService
  ) {}

  createToken({ id, email }: UserEntity) {
    const payload = { id, email };
    const secret = this.configService.get('jwtSecret');
    return jwt.sign(payload, secret);
  }

  createUser(email: string) {
    return this.userRepo.create({ email }).save();
  }

  getUserByEmail(email: string) {
    return this.userRepo.findOne({ email });
  }
}
