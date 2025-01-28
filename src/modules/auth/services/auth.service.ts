import { IAuthProvider, AuthError } from '../providers';
import { MockAuthProvider } from '../providers/mock';
import {
  ILoginCredentials,
  IRegistrationData,
  IPasswordResetRequest,
  IPasswordResetConfirm,
  IAuthResponse,
  IUser
} from '../types/auth.types';

class AuthService {
  private provider: IAuthProvider;

  constructor() {
    // Initialize with mock provider for development
    this.provider = new MockAuthProvider();
  }

  /**
   * Set custom auth provider
   */
  setProvider(provider: IAuthProvider) {
    this.provider = provider;
  }

  /**
   * Login user
   */
  async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
    try {
      const response = await this.provider.login(credentials);
      this.handleAuthSuccess(response);
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Register new user
   */
  async register(data: IRegistrationData): Promise<IAuthResponse> {
    try {
      const response = await this.provider.register(data);
      this.handleAuthSuccess(response);
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Request password reset
   */
  async requestPasswordReset(data: IPasswordResetRequest): Promise<void> {
    try {
      await this.provider.requestPasswordReset(data);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Confirm password reset
   */
  async confirmPasswordReset(data: IPasswordResetConfirm): Promise<void> {
    try {
      await this.provider.confirmPasswordReset(data);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<IUser | null> {
    try {
      return await this.provider.getCurrentUser();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      await this.provider.logout();
      this.handleLogout();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleAuthSuccess(response: IAuthResponse) {
    // Store token in localStorage or secure cookie
    localStorage.setItem('auth_token', response.token);
  }

  private handleLogout() {
    // Clear stored auth data
    localStorage.removeItem('auth_token');
  }

  private handleError(error: unknown): Error {
    if (error instanceof AuthError) {
      return error;
    }
    if (error instanceof Error) {
      return new AuthError(error.message, 'AUTH_UNKNOWN_ERROR');
    }
    return new AuthError('An unknown error occurred', 'AUTH_UNKNOWN_ERROR');
  }
}

// Export singleton instance
export const authService = new AuthService();