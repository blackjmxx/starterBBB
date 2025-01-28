import { 
  IAuthResponse, 
  ILoginCredentials, 
  IRegistrationData, 
  IPasswordResetRequest, 
  IPasswordResetConfirm,
  IUser 
} from '../types/auth.types';

/**
 * Authentication provider interface
 */
export interface IAuthProvider {
  /**
   * Authenticate user with credentials
   */
  login(credentials: ILoginCredentials): Promise<IAuthResponse>;
  
  /**
   * Register new user
   */
  register(data: IRegistrationData): Promise<IAuthResponse>;
  
  /**
   * Request password reset
   */
  requestPasswordReset(data: IPasswordResetRequest): Promise<void>;
  
  /**
   * Confirm password reset
   */
  confirmPasswordReset(data: IPasswordResetConfirm): Promise<void>;
  
  /**
   * Get current authenticated user
   */
  getCurrentUser(): Promise<IUser | null>;
  
  /**
   * Logout current user
   */
  logout(): Promise<void>;
}

export class AuthError extends Error {
  constructor(
    message: string,
    public code: string,
    public field?: string
  ) {
    super(message);
    this.name = 'AuthError';
  }
}