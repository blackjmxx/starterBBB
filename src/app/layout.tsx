'use client';

import colorConfig from '@/config/colors.json';
import { LayoutProvider } from '@/context/LayoutContext';
import { PaletteProvider } from '@/context/PaletteContext';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/accents.css';
import '@/styles/index.css';
import '@/styles/initials.css';
import { ColorConfig } from '@/types/colors';
import { AuthProvider } from '@/context/auth/jwt/auth-provider';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = colorConfig as ColorConfig;
  const activeTheme = config.themes.find(theme => theme.name === config.activeTheme);
  const colors = activeTheme ? activeTheme.colors : config.themes[0].colors;

  return (
    <html lang="fr">
      <body>
        <AuthProvider>
        <ThemeProvider>
          <PaletteProvider initialColors={colors}>
            <LayoutProvider>
              {children}
            </LayoutProvider>
            </PaletteProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}