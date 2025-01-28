import { Metadata } from 'next';
import { LoginForm } from '@/modules/auth/components/forms/LoginForm';
import { AuthCard } from '@/modules/auth/components/ui/AuthCard';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <AuthCard
      header={
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground dark:text-white">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground dark:text-gray-300">
            Enter your credentials to access your account
          </p>
        </div>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}