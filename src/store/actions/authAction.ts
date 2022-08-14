import { login } from '@src/services/authService';
import { SetAuthorization } from '@store/models/personalDataReducer';
import { setAuthorization } from '@store/reducer/personalDataReducer';
import { Dispatch } from 'react';

export const actionLogin = async (dispatch:Dispatch<SetAuthorization>, username:string, password:string):Promise<boolean> => {
    try {
        const response = await login(username, password);
        const { auth } = response.data;
        dispatch(setAuthorization(auth));
        return auth;
    } catch {
        return false;
    }
};