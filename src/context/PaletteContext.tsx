import React, { createContext, useContext } from 'react';

interface PaletteContextType {
  colors: string[];
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export function PaletteProvider({ children, colors }: { children: React.ReactNode; colors: string[] }) {
  return (
    <PaletteContext.Provider value={{ colors }}>
      {children}
    </PaletteContext.Provider>
  );
}

export function usePalette() {
  const context = useContext(PaletteContext);
  if (context === undefined) {
    throw new Error('usePalette must be used within a PaletteProvider');
  }
  return context;
}