import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import { PaletteProvider } from '@/context/PaletteContext';
import colorConfig from '@/config/colors.json';
import { ColorConfig } from '@/types/colors';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Nkunu',
  description: 'Application de gestion',
};

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
        <ThemeProvider>
          <PaletteProvider colors={colors}>
            {children}
          </PaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 