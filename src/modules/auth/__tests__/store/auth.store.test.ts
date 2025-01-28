import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useAuthStore } from '../../store/auth.store';
import { AuthStatus } from '../../types/auth.types';
import { authService } from '../../services/auth.service';

// Mock auth service
vi.mock('../../services/auth.service', () => ({
  authService: {
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
    getCurrentUser: vi.fn(),
  },
}));

describe('AuthStore', () => {
  beforeEach(() => {
    useAuthStore.setState({
      status: AuthStatus.IDLE,
      user: null,
      error: null,
    });
    vi.clearAllMocks();
  });

  describe('login', () => {
    it('should update store on successful login', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockResponse = {
        user: mockUser,
        token: 'mock-token',
      };

      (authService.login as any).mockResolvedValue(mockResponse);

      const { login } = useAuthStore.getState();
      await login('test@example.com', 'password');

      const state = useAuthStore.getState();
      expect(state.status).toBe(AuthStatus.AUTHENTICATED);
      expect(state.user).toEqual(mockUser);
      expect(state.error).toBeNull();
    });

    it('should handle login error', async () => {
      const mockError = new Error('Invalid credentials');
      (authService.login as any).mockRejectedValue(mockError);

      const { login } = useAuthStore.getState();
      
      try {
        await login('test@example.com', 'wrong-password');
      } catch (error) {
        const state = useAuthStore.getState();
        expect(state.status).toBe(AuthStatus.ERROR);
        expect(state.user).toBeNull();
        expect(state.error).toBeDefined();
      }
    });
  });

  describe('checkAuth', () => {
    it('should update store with current user', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (authService.getCurrentUser as any).mockResolvedValue(mockUser);

      const { checkAuth } = useAuthStore.getState();
      await checkAuth();

      const state = useAuthStore.getState();
      expect(state.status).toBe(AuthStatus.AUTHENTICATED);
      expect(state.user).toEqual(mockUser);
    });

    it('should handle no authenticated user', async () => {
      (authService.getCurrentUser as any).mockResolvedValue(null);

      const { checkAuth } = useAuthStore.getState();
      await checkAuth();

      const state = useAuthStore.getState();
      expect(state.status).toBe(AuthStatus.UNAUTHENTICATED);
      expect(state.user).toBeNull();
    });
  });

  describe('logout', () => {
    it('should clear auth state on logout', async () => {
      // Set initial authenticated state
      useAuthStore.setState({
        status: AuthStatus.AUTHENTICATED,
        user: { id: '1', email: 'test@example.com', createdAt: new Date(), updatedAt: new Date() },
        error: null,
      });

      (authService.logout as any).mockResolvedValue(undefined);

      const { logout } = useAuthStore.getState();
      await logout();

      const state = useAuthStore.getState();
      expect(state.status).toBe(AuthStatus.UNAUTHENTICATED);
      expect(state.user).toBeNull();
      expect(state.error).toBeNull();
    });
  });
});