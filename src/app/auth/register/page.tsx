import { Metadata } from 'next';
import { RegisterForm } from '@/modules/auth/components/forms/RegisterForm';
import { AuthCard } from '@/modules/auth/components/ui/AuthCard';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create a new account',
};

export default function RegisterPage() {
  return (
    <AuthCard
      header={
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details to get started
          </p>
        </div>
      }
    >
      <RegisterForm />
    </AuthCard>
  );
}