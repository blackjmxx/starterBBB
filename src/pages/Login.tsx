import { Coffee } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldError, Input, Label, TextField } from '../aria-component/field';
import { Form } from '../aria-component/form';
import { usePalette } from '../context/PaletteContext';
import { useTheme } from '../context/ThemeContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = usePalette();
  const { theme } = useTheme();
  const navigate = useNavigate();

  // Couleurs primaire et secondaire du thème
  const primaryColor = colors[2];   // Couleur primaire
  const secondaryColor = colors[3]; // Couleur secondaire

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <Coffee className="h-12 w-12" style={{ color: primaryColor }} />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">
            Connexion à Nkunu
          </h2>
        </div>
        <Form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <TextField>
              <Label>Email</Label>
              <Input
                type="email"
                required
                placeholder="vous@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: primaryColor }}
              />
              <FieldError />
            </TextField>
            <TextField>
              <Label>Mot de passe</Label>
              <Input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: primaryColor }}
              />
              <FieldError />
            </TextField>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="/forgot-password" className="font-medium hover:opacity-80 transition-opacity" 
                 style={{ color: secondaryColor }}>
                Mot de passe oublié ?
              </a>
            </div>
            <div className="text-sm">
              <a href="/register" className="font-medium hover:opacity-80 transition-opacity" 
                 style={{ color: secondaryColor }}>
                Créer un compte
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2.5 px-4 border-0 rounded-lg shadow-sm text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: primaryColor }}
          >
            Se connecter
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login; 