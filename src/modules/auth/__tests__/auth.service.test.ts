import { describe, it, expect, beforeEach, vi } from 'vitest';
import { authService } from '../services/auth.service';
import { MockAuthProvider } from '../providers/mock';
import { AuthError } from '../providers';

describe('AuthService', () => {
  beforeEach(() => {
    // Reset the service with a fresh mock provider
    authService.setProvider(new MockAuthProvider());
    // Clear localStorage
    localStorage.clear();
  });

  describe('login', () => {
    it('should successfully login with valid credentials', async () => {
      const credentials = {
        email: 'test@example.com',
        password: 'password',
      };

      const response = await authService.login(credentials);
      
      expect(response.user).toBeDefined();
      expect(response.token).toBeDefined();
      expect(localStorage.getItem('auth_token')).toBe(response.token);
    });

    it('should throw AuthError with invalid credentials', async () => {
      const credentials = {
        email: 'test@example.com',
        password: 'wrong-password',
      };

      await expect(authService.login(credentials)).rejects.toThrow(AuthError);
    });
  });

  describe('register', () => {
    it('should successfully register a new user', async () => {
      const userData = {
        email: 'new@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
      };

      const response = await authService.register(userData);
      
      expect(response.user).toBeDefined();
      expect(response.user.email).toBe(userData.email);
      expect(response.token).toBeDefined();
      expect(localStorage.getItem('auth_token')).toBe(response.token);
    });

    it('should throw AuthError when registering with existing email', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
      };

      await expect(authService.register(userData)).rejects.toThrow(AuthError);
    });
  });

  describe('password reset', () => {
    it('should successfully request password reset', async () => {
      const email = 'test@example.com';
      
      await expect(authService.requestPasswordReset({ email })).resolves.not.toThrow();
    });

    it('should throw AuthError when requesting reset for non-existent user', async () => {
      const email = 'nonexistent@example.com';
      
      await expect(authService.requestPasswordReset({ email })).rejects.toThrow(AuthError);
    });
  });

  describe('logout', () => {
    it('should successfully logout user', async () => {
      // First login
      await authService.login({
        email: 'test@example.com',
        password: 'password',
      });
      
      expect(localStorage.getItem('auth_token')).toBeDefined();
      
      // Then logout
      await authService.logout();
      
      expect(localStorage.getItem('auth_token')).toBeNull();
    });
  });
});