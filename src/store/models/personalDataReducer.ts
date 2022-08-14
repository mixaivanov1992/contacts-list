import { AuthResponse } from "./authResponse";

export type PersonalDataState = AuthResponse;

export enum PersonalDataActionType{
    SET_AUTHORIZATION = 'SET_AUTHORIZATION'
}

export interface SetAuthorization {
    type: PersonalDataActionType.SET_AUTHORIZATION,
    auth: boolean
}

export type PersonalDataAction = SetAuthorization;