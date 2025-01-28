import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication pages for the application',
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Left side - Auth form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="https://devadory.com/wp-content/uploads/2024/02/Devadory-all_noir-e1706877474819.png"
              alt="Logo"
              sizes='100vw'
              priority
            />
          </div>
          {children}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-card">
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="max-w-xl">
              <h2 className="mb-6">
                Welcome to Flashcards App
              </h2>
              <p>
                Your personalized learning journey starts here. Create, study, and master your flashcards with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}