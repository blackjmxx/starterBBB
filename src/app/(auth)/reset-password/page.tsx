import { Metadata } from 'next';
import { ResetPasswordForm } from '@/modules/auth/components/forms/ResetPasswordForm';
import { AuthCard } from '@/modules/auth/components/ui/AuthCard';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset your password',
};

export default function ResetPasswordPage() {
  return (
    <AuthCard
      header={
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Reset password
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to receive a password reset link
          </p>
        </div>
      }
    >
      <ResetPasswordForm />
    </AuthCard>
  );
}