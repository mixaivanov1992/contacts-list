import { AuthResponse } from '@store/models/authResponse';
import { AxiosResponse } from 'axios';
import $api from '@src/http';

export async function login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { username, password });
}
