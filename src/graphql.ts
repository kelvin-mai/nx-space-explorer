
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
    site?: Mission;
    rocket?: Rocket;
    isBooked: boolean;
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

export interface IQuery {
    launches(): Launch[] | Promise<Launch[]>;
    launch(id: string): Launch | Promise<Launch>;
    me(): User | Promise<User>;
}

export interface IMutation {
    bookTrips(launchIds: string[]): TripUpdateResponse | Promise<TripUpdateResponse>;
    cancelTrip(launchId: string): TripUpdateResponse | Promise<TripUpdateResponse>;
    login(email?: string): string | Promise<string>;
}

export interface TripUpdateResponse {
    success: boolean;
    message?: string;
    launches?: Launch[];
}

export interface User {
    id: string;
    email: string;
    trips: Launch[];
}
