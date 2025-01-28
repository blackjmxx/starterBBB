"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface LayoutContextType {
  currentLayout: string;
  setCurrentLayout: (layout: string) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [currentLayout, setCurrentLayout] = useState('default');

  useEffect(() => {
    const savedLayout = localStorage.getItem('currentLayout') || 'default';
    setCurrentLayout(savedLayout);
  }, []);

  const updateLayout = (newLayout: string) => {
    setCurrentLayout(newLayout);
    localStorage.setItem('currentLayout', newLayout);
  };

  return (
    <LayoutContext.Provider value={{ currentLayout, setCurrentLayout: updateLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}