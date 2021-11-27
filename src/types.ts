export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface CreatedUser {
  name: string;
  username: string;
  email: string;
}

export interface updatedUser {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
}