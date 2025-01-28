import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '../store/auth.store';
import { AuthStatus } from '../types/auth.types';

export function useAuth(requireAuth: boolean = true) {
  const router = useRouter();
  const pathname = usePathname();
  const { status, user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (status === AuthStatus.LOADING) return;

    if (requireAuth && status === AuthStatus.UNAUTHENTICATED) {
      router.push(`/auth/login?from=${pathname}`);
    } else if (!requireAuth && status === AuthStatus.AUTHENTICATED) {
      router.push('/dashboard');
    }
  }, [status, requireAuth, router, pathname]);

  return {
    isLoading: status === AuthStatus.LOADING,
    isAuthenticated: status === AuthStatus.AUTHENTICATED,
    user,
    status,
  };
}