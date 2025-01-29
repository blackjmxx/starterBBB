'use client';

import { Button } from '@/aria-component/button';
import { TextField } from '@/aria-component/text-field';

const SimpleLoginForm = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
      <div className="w-full max-w-sm space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Simple Login
        </h2>
        <TextField
          label="Email"
          type="email"
          placeholder="Enter your email"
          className="w-full"
        />
        <Button className="w-full" size="lg">
          Continue with Email
        </Button>
      </div>
    </div>
  );
};

const TwoColumnLogin = () => {
  return (
    <div className="min-h-[400px] flex bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
      {/* Form side */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-sm space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Two Column Login
          </h2>
          <TextField
            label="Email"
            type="email"
            placeholder="name@example.com"
            className="w-full"
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="w-full"
          />
          <Button className="w-full" size="lg">
            Sign in
          </Button>
        </div>
      </div>
      {/* Image side */}
      <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80')" }}>
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Welcome Back</h3>
            <p>Sign in to continue your journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MutedBackgroundLogin = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Muted Background Login
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Please sign in to your account
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm space-y-4">
          <TextField
            label="Email"
            type="email"
            placeholder="name@example.com"
            className="w-full"
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="w-full"
          />
          <Button className="w-full" size="lg">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

const ImageBackgroundLogin = () => {
  return (
    <div 
      className="min-h-[400px] flex items-center justify-center rounded-lg overflow-hidden relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative w-full max-w-md p-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            Image Background Login
          </h2>
          <TextField
            label="Email"
            type="email"
            placeholder="name@example.com"
            className="w-full"
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="w-full"
          />
          <Button className="w-full" size="lg" variant="outline">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function AuthenticationDemo() {
  return (
    <div className="space-y-8 p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Authentication Demo
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Simple Email Login
          </h3>
          <SimpleLoginForm />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Two Column Layout
          </h3>
          <TwoColumnLogin />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Muted Background
          </h3>
          <MutedBackgroundLogin />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Image Background
          </h3>
          <ImageBackgroundLogin />
        </div>
      </div>
    </div>
  );
}