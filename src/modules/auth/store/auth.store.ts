import { create } from 'zustand';
import { IAuthState, AuthStatus, IUser, AuthError } from '../types/auth.types';
import { authService } from '../services/auth.service';

interface AuthStore extends IAuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName?: string, lastName?: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  setError: (error: AuthError | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  status: AuthStatus.IDLE,
  user: null,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ status: AuthStatus.LOADING, error: null });
      const response = await authService.login({ email, password });
      set({ 
        status: AuthStatus.AUTHENTICATED, 
        user: response.user,
        error: null 
      });
    } catch (error) {
      set({ 
        status: AuthStatus.ERROR, 
        error: error as AuthError,
        user: null 
      });
      throw error;
    }
  },

  register: async (email: string, password: string, firstName?: string, lastName?: string) => {
    try {
      set({ status: AuthStatus.LOADING, error: null });
      const response = await authService.register({ 
        email, 
        password, 
        firstName, 
        lastName 
      });
      set({ 
        status: AuthStatus.AUTHENTICATED, 
        user: response.user,
        error: null 
      });
    } catch (error) {
      set({ 
        status: AuthStatus.ERROR, 
        error: error as AuthError,
        user: null 
      });
      throw error;
    }
  },

  logout: async () => {
    try {
      set({ status: AuthStatus.LOADING, error: null });
      await authService.logout();
      set({ 
        status: AuthStatus.UNAUTHENTICATED, 
        user: null,
        error: null 
      });
    } catch (error) {
      set({ 
        status: AuthStatus.ERROR, 
        error: error as AuthError 
      });
      throw error;
    }
  },

  checkAuth: async () => {
    try {
      set({ status: AuthStatus.LOADING, error: null });
      const user = await authService.getCurrentUser();
      set({ 
        status: user ? AuthStatus.AUTHENTICATED : AuthStatus.UNAUTHENTICATED,
        user,
        error: null 
      });
    } catch (error) {
      set({ 
        status: AuthStatus.UNAUTHENTICATED, 
        user: null,
        error: error as AuthError 
      });
    }
  },

  setError: (error: AuthError | null) => {
    set({ error });
  },
}));