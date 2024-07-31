// types/index.ts
export interface User {
    id: number;
    email: string;
    password: string; // Menambahkan properti password
    name?: string;
    // tambahkan properti lain sesuai dengan struktur data API Anda
  }
  
  export interface AuthResponse {
    token: string;
    user: User;
  }
  