import React, { useState } from 'react';
import { Coffee } from 'lucide-react';
import { usePalette } from '../context/PaletteContext';
import { useTheme } from '../context/ThemeContext';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { colors } = usePalette();
  const { theme } = useTheme();

  // Couleurs primaire et secondaire du thème
  const primaryColor = colors[2];   // Couleur primaire
  const secondaryColor = colors[3]; // Couleur secondaire

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock de la réinitialisation du mot de passe
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <Coffee className="h-12 w-12" style={{ color: primaryColor }} />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">
            Mot de passe oublié
          </h2>
        </div>
        {!submitted ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2"
                style={{ borderColor: primaryColor, focusRingColor: primaryColor }}
                placeholder="vous@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="text-sm text-center">
              <a href="/login" className="font-medium hover:opacity-80 transition-opacity" 
                 style={{ color: secondaryColor }}>
                Retour à la connexion
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border-0 rounded-lg shadow-sm text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: primaryColor }}
            >
              Réinitialiser le mot de passe
            </button>
          </form>
        ) : (
          <div className="mt-8 text-center">
            <p className="text-green-600 dark:text-green-400">
              Si un compte existe avec cette adresse email, vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.
            </p>
            <div className="mt-4">
              <a href="/login" className="font-medium hover:opacity-80 transition-opacity" 
                 style={{ color: secondaryColor }}>
                Retour à la connexion
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 