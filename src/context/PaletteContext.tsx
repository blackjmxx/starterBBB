'use client';
import React, { createContext, useContext, useState } from 'react';

interface PaletteContextType {
  colors: string[];
  setPalette: (colors: string[]) => void;
}

const PaletteContext = createContext<PaletteContextType>({
  colors: [],
  setPalette: () => {}
});

export function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<string[]>([
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF'
  ]);

  const setPalette = (newColors: string[]) => {
    setColors(newColors);
    // Optionnel : Sauvegarder dans localStorage ou envoyer au serveur
    localStorage.setItem('palette', JSON.stringify(newColors));
  };

  return (
    <PaletteContext.Provider value={{ colors, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
}

export function usePalette() {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('usePalette must be used within a PaletteProvider');
  }
  return context;
}