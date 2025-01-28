import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { ResetPasswordForm } from '../../components/forms/ResetPasswordForm';
import { authService } from '../../services/auth.service';

vi.mock('../../services/auth.service', () => ({
  authService: {
    requestPasswordReset: vi.fn(),
  },
}));

describe('ResetPasswordForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the email input and submit button', () => {
    render(<ResetPasswordForm />);
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument();
  });

  it('validates required email', async () => {
    render(<ResetPasswordForm />);
    
    const submitButton = screen.getByRole('button', { name: /send reset link/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(<ResetPasswordForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByRole('button', { name: /send reset link/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid email', async () => {
    (authService.requestPasswordReset as jest.Mock).mockResolvedValue(undefined);
    
    render(<ResetPasswordForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    const submitButton = screen.getByRole('button', { name: /send reset link/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(authService.requestPasswordReset).toHaveBeenCalledWith({
        email: 'test@example.com',
      });
    });
  });

  it('shows success message after submission', async () => {
    (authService.requestPasswordReset as jest.Mock).mockResolvedValue(undefined);
    
    render(<ResetPasswordForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    const submitButton = screen.getByRole('button', { name: /send reset link/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/check your email/i)).toBeInTheDocument();
      expect(screen.getByText(/try again/i)).toBeInTheDocument();
    });
  });

  it('handles reset request error', async () => {
    (authService.requestPasswordReset as jest.Mock).mockRejectedValue(
      new Error('User not found')
    );
    
    render(<ResetPasswordForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    const submitButton = screen.getByRole('button', { name: /send reset link/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(screen.queryByText(/check your email/i)).not.toBeInTheDocument();
    });
  });
});