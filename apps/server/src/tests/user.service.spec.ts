import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UserService } from '../app/user/user.service';
import { UserEntity } from '../app/user/user.entity';

const testConfig = () => ({
  jwtSecret: 'secret',
});

const users: Partial<UserEntity>[] = [
  {
    id: '1',
    admin: false,
    email: 'user@mail.com',
    trips: [],
  },
  {
    id: '2',
    admin: true,
    email: 'admin@mail.com',
    trips: [],
  },
];

const oneUser = users[0];

describe('UserService', () => {
  let service: UserService;
  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: [testConfig],
        }),
      ],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            create: jest.fn().mockResolvedValue(oneUser),
            findOne: jest.fn().mockResolvedValue(oneUser),
          },
        },
      ],
    }).compile();

    service = app.get<UserService>(UserService);
  });
  it('should find user by email', async () => {
    const result = await service.getUserByEmail('user@mail.com');
    expect(result).toEqual(oneUser);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
