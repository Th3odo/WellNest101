export type UserRole = 'patient' | 'therapist' | 'admin';

export interface User {
  email: string;
  role: UserRole;
  displayName?: string;
}