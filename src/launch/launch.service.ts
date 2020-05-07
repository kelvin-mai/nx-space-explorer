import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LaunchModel, SpacexLaunch } from './launch.models';

@Injectable()
export class LaunchService {
  apiUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpService) {}

  private toLaunch(launch: SpacexLaunch): LaunchModel {
    return {
      id: String(launch.flight_number || 0),
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
    };
  }

  getAllLaunches(): Observable<LaunchModel[]> {
    return this.http
      .get<SpacexLaunch[]>(`${this.apiUrl}/launches`)
      .pipe(map(({ data }) => data.map(this.toLaunch)));
  }

  getLaunchById(id: number): Observable<LaunchModel> {
    return this.http
      .get<SpacexLaunch>(`${this.apiUrl}/launches/${id}`)
      .pipe(map(({ data }) => this.toLaunch(data)));
  }
}
