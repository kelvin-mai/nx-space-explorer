import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '@space-explorer/types';
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
    const payload: UserModel = { id, email };
    const secret = this.configService.get('jwtSecret');
    return jwt.sign(payload, secret);
  }

  createUser(email: string) {
    return this.userRepo.create({ email }).save();
  }

  getUserByEmail(email: string) {
    return this.userRepo.findOne({ email });
  }

  private createTripUpdateError(message: string, launches: number[]) {
    return { success: false, message, launches };
  }

  async hasTrip(id: number, email: string) {
    const user = await this.getUserByEmail(email);
    return user.trips.includes(id);
  }

  async addTrips(ids: number[], email: string) {
    try {
      const user = await this.getUserByEmail(email);
      const totalTrips = user.trips ? user.trips.concat(ids) : ids;
      user.trips = Array.from(new Set(totalTrips));
      await user.save();
      return {
        success: true,
        message: `Successfully added trips with ids: ${ids.join(',')}`,
        launches: ids,
      };
    } catch (err) {
      return this.createTripUpdateError(`Error: ${err}`, ids);
    }
  }

  async removeTrips(id: number, email: string) {
    try {
      const user = await this.getUserByEmail(email);
      if (!user.trips.includes(Number(id))) {
        return this.createTripUpdateError(
          'Cannot cancel trip that is not booked',
          [id]
        );
      }
      user.trips = user.trips.filter((t) => t !== Number(id));
      await user.save();
      return {
        success: true,
        message: `Successfully removed trip with id: ${id}`,
        launches: [id],
      };
    } catch (err) {
      return this.createTripUpdateError(`Error: ${err}`, [id]);
    }
  }
}
