// services/api.ts

import axios from 'axios';
import { AuthResponse } from '../types';

const API_URL = 'http://localhost:8000/api'; // Ganti URL ini sesuai dengan API Laravel Anda

export const getCsrfToken = async (): Promise<string> => {
  const response = await axios.get(`${API_URL}/csrf-token`, {
    withCredentials: true, // Pastikan ini diatur agar cookie CSRF dikirim
  });
  return response.data.csrfToken; // Periksa nama field CSRF token dari response.data
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const csrfToken = await getCsrfToken();
  const response = await axios.post<AuthResponse>(`${API_URL}/login`, {
    email,
    password
  }, {
    headers: {
      'X-CSRF-TOKEN': csrfToken,
    },
    withCredentials: true, // Pastikan ini diatur agar cookie CSRF dikirim
  });
  return response.data;
};

export const logout = async (token: string): Promise<void> => {
  const csrfToken = await getCsrfToken();
  await axios.post(
    `${API_URL}/logout`,
    {},
    {
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true, // Pastikan ini diatur agar cookie CSRF dikirim
    }
  );
};
