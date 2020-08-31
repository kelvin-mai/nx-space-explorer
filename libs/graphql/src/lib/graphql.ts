
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum PatchSize {
    SMALL = "SMALL",
    LARGE = "LARGE"
}

export interface Launch {
    id: string;
    site?: string;
    mission?: Mission;
    rocket?: Rocket;
    isBooked?: boolean;
}

export interface Rocket {
    id: string;
    name?: string;
    type?: string;
}

export interface Mission {
    name?: string;
    missionPatch?: string;
}

export interface LaunchConnection {
    cursor?: string;
    hasMore: boolean;
    launches: Launch[];
}

export interface IQuery {
    launches(pageSize?: number, cursor?: string): LaunchConnection | Promise<LaunchConnection>;
    launch(id: string): Launch | Promise<Launch>;
    me(): User | Promise<User>;
}

export interface User {
    id: string;
    email: string;
    trips?: Launch[];
}

export interface IMutation {
    login(email: string): string | Promise<string>;
    bookTrips(launchIds: string[]): TripUpdateResponse | Promise<TripUpdateResponse>;
    cancelTrip(launchId: string): TripUpdateResponse | Promise<TripUpdateResponse>;
}

export interface TripUpdateResponse {
    success: boolean;
    message?: string;
    launches?: Launch[];
}
