'use client';
import React, { useState } from 'react';
import { Coffee } from 'lucide-react';
import { usePalette } from '@/context/PaletteContext';
import { useTheme } from '@/context/ThemeContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { cookies } from 'next/headers';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = usePalette();
  const { theme } = useTheme();
  const router = useRouter();

  const primaryColor = colors[2];
  const secondaryColor = colors[3];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === 'password') {
      // Stockage côté client
      localStorage.setItem('isAuthenticated', 'true');
      
      // Stockage dans les cookies pour le middleware
      document.cookie = 'isAuthenticated=true; path=/';
      
      // Force un rafraîchissement de la navigation
      router.refresh();
      router.push('/dashboard');
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="flex flex-col items-center">
        <Coffee className="h-12 w-12" style={{ color: primaryColor }} />
        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">
          Connexion à Nkunu
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2"
              style={{ 
                borderColor: primaryColor,
                focusRingColor: primaryColor 
              }}
              placeholder="vous@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2"
              style={{ 
                borderColor: primaryColor,
                focusRingColor: primaryColor 
              }}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link href="/forgot-password" className="font-medium hover:opacity-80 transition-opacity" 
               style={{ color: secondaryColor }}>
              Mot de passe oublié ?
            </Link>
          </div>
          <div className="text-sm">
            <Link href="/register" className="font-medium hover:opacity-80 transition-opacity" 
               style={{ color: secondaryColor }}>
              Créer un compte
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2.5 px-4 border-0 rounded-lg shadow-sm text-sm font-medium text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: primaryColor }}
        >
          Se connecter
        </button>
      </form>
    </div>
  );
} 