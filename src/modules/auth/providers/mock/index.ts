import { 
  IAuthProvider, 
  AuthError 
} from '../index';
import {
  IAuthResponse,
  ILoginCredentials,
  IRegistrationData,
  IPasswordResetRequest,
  IPasswordResetConfirm,
  IUser
} from '../../types/auth.types';

/**
 * Mock implementation of Auth Provider for development
 */
export class MockAuthProvider implements IAuthProvider {
  private mockUser: IUser = {
    id: '1',
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  private mockToken = 'mock-jwt-token';
  private isAuthenticated = false;

  async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (credentials.email === 'test@example.com' && credentials.password === 'password') {
      this.isAuthenticated = true;
      return {
        user: this.mockUser,
        token: this.mockToken
      };
    }

    throw new AuthError('Invalid credentials', 'AUTH_INVALID_CREDENTIALS');
  }

  async register(data: IRegistrationData): Promise<IAuthResponse> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (data.email === 'test@example.com') {
      throw new AuthError('Email already exists', 'AUTH_EMAIL_EXISTS', 'email');
    }

    const newUser: IUser = {
      id: Math.random().toString(36).substr(2, 9),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.isAuthenticated = true;
    return {
      user: newUser,
      token: this.mockToken
    };
  }

  async requestPasswordReset(data: IPasswordResetRequest): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (data.email !== 'test@example.com') {
      throw new AuthError('User not found', 'AUTH_USER_NOT_FOUND', 'email');
    }
  }

  async confirmPasswordReset(data: IPasswordResetConfirm): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (data.token !== 'valid-token') {
      throw new AuthError('Invalid or expired token', 'AUTH_INVALID_TOKEN');
    }
  }

  async getCurrentUser(): Promise<IUser | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.isAuthenticated ? this.mockUser : null;
  }

  async logout(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.isAuthenticated = false;
  }
}