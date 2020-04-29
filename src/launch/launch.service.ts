import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

import { LaunchResponse } from './launch.models';
import { Observable } from 'rxjs';

@Injectable()
export class LaunchService {
  apiUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpService) {}

  private toLaunch(launch: any): LaunchResponse {
    return ({
      id: launch.flight_number || 0,
      site: launch.launch_site && launch.launch_site.site_name,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
    } as unknown) as LaunchResponse;
  }

  getAllLaunches(): Observable<LaunchResponse[]> {
    return this.http
      .get(`${this.apiUrl}/launches`)
      .pipe(map(({ data }) => data.map(l => this.toLaunch(l))));
  }

  getLaunchById(id: number): Observable<LaunchResponse> {
    return this.http
      .get(`${this.apiUrl}/launches/${id}`)
      .pipe(map(({ data }) => this.toLaunch(data)));
  }
}
