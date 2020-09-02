import { Test } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';

import { LaunchService } from '../app/launch/launch.service';
import { RAW_SPACEX_LAUNCHES } from './launch.fixture';

const allLaunchesResponse: AxiosResponse = {
  data: RAW_SPACEX_LAUNCHES,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

const oneLaunchResponse: AxiosResponse = {
  data: RAW_SPACEX_LAUNCHES[3],
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

describe('AppService', () => {
  let service: LaunchService;
  let httpService: HttpService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [LaunchService],
    }).compile();

    service = app.get<LaunchService>(LaunchService);
    httpService = app.get<HttpService>(HttpService);
  });

  describe('getAllLaunches', () => {
    it('works with default parameters', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockImplementation(() => of(allLaunchesResponse));
      const result = await service.getAllLaunches().toPromise();
      expect(result.hasMore).toEqual(true);
      expect(result.cursor).toEqual('11');
      expect(result.launches.length).toEqual(10);
    });

    it('works with specified pageSize of 4', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockImplementation(() => of(allLaunchesResponse));
      const result = await service.getAllLaunches(4).toPromise();
      expect(result.hasMore).toEqual(true);
      expect(result.cursor).toEqual('5');
      expect(result.launches.length).toEqual(4);
    });

    it('works with specified pageSize of 4 and cursor of 5', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockImplementation(() => of(allLaunchesResponse));
      const result = await service.getAllLaunches(4, '5').toPromise();
      expect(result.hasMore).toEqual(true);
      expect(result.cursor).toEqual('9');
      expect(result.launches.length).toEqual(4);
    });
  });

  describe('getLaunchById', () => {
    it('returns correct data', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockImplementation(() => of(oneLaunchResponse));
      const result = await service.getLaunchById(4).toPromise();
      expect(result).toEqual({
        id: '4',
        site: 'Kwajalein Atoll',
        mission: {
          name: 'RatSat',
          missionPatchSmall: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
          missionPatchLarge: 'https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png',
        },
        rocket: { id: 'falcon1', name: 'Falcon 1', type: 'Merlin C' },
      });
    });
  });
});
