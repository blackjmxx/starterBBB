import { redirect } from 'next/navigation';

export default function Home() {
  const isAuthenticated = typeof window !== 'undefined' ? 
    localStorage.getItem('isAuthenticated') === 'true' : false;

  if (isAuthenticated) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
} 