/**
 * Authentication related types and interfaces
 */

export interface IUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface IRegistrationData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface IPasswordResetRequest {
  email: string;
}

export interface IPasswordResetConfirm {
  token: string;
  newPassword: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export type AuthError = {
  code: string;
  message: string;
  field?: string;
};

export enum AuthStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
  ERROR = 'error'
}

export interface IAuthState {
  status: AuthStatus;
  user: IUser | null;
  error: AuthError | null;
}