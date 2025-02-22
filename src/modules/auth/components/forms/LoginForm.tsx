'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../../schemas/auth.schema';
import { useAuthStore } from '../../store/auth.store';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo') || '/dashboard';

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      
      // Stockage du token dans un cookie sécurisé
      document.cookie = `auth_token=${data.remember ? '1' : '0'}; path=/; secure; samesite=strict`;
      
      router.push(returnTo);
    } catch (error) {
      console.error('Login failed:', error);
      // Gérer l'erreur...
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <div className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="dark:text-gray-200">Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="dark:text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="dark:text-gray-200">Password</FormLabel>
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="dark:text-red-400" />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    id="remember"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    className="dark:border-gray-600"
                  />
                </FormControl>
                <FormLabel htmlFor="remember" className="text-sm dark:text-gray-200">
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />

          <Link
            href="/auth/reset-password"
            className="text-sm text-primary hover:underline dark:text-primary-400"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className={cn(
            "w-full",
            "dark:bg-primary-600 dark:hover:bg-primary-700 dark:text-white"
          )}
          disabled={isLoading}
          onClick={form.handleSubmit(onSubmit)}
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>

        <p className="text-sm text-center text-muted-foreground dark:text-gray-400">
          Don't have an account?{' '}
          <Link
            href="/auth/register"
            className="text-primary hover:underline dark:text-primary-400"
          >
            Sign up
          </Link>
        </p>
      </div>
    </Form>
  );
}