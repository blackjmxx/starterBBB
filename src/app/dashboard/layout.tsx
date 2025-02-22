'use client';
import { DashboardHeader } from '@/components/dashboard/Header';
import { DashboardSidebar } from '@/components/dashboard/Sidebar';
import { usePalette } from '@/context/PaletteContext';
import '@/styles/dashboard.css';
import { useState, useEffect } from 'react';
import { AuthGuard } from '@/guard/auth-guard';

function generateRandomColor(): string {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function generateRandomPalette(count: number): string[] {
  return Array.from({ length: count }, () => generateRandomColor());
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorCount, setColorCount] = useState(6);
  const { colors, setPalette } = usePalette();
  const [layout, setLayout] = useState('default');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Détecter la taille de l'écran et ajuster la visibilité de la sidebar
  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth >= 768); // 768px est le breakpoint standard pour mobile
    };

    // Initialiser l'état
    handleResize();

    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const regeneratePalette = () => {
    const newPalette = generateRandomPalette(colorCount);
    setPalette(newPalette);
  };

  return (
    // <AuthGuard>
    <div className={`flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors layout-${layout}`}>
      <div className="flex flex-1">
        {/* Overlay pour fermer la sidebar sur mobile */}
        {sidebarVisible && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarVisible(false)}
          />
        )}
        <div className={`transition-all duration-300 ${
          sidebarVisible 
            ? 'md:w-64 w-64'
            : 'w-0'
        } ${
          sidebarVisible && 'md:relative fixed inset-y-0 left-0 z-50'
        } overflow-hidden`}>
          <DashboardSidebar onClose={() => setSidebarVisible(false)} />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
          <main className="flex-1 p-4 -mt-4 overflow-auto">
            {children}
          </main>
        </div>
      </div>

      {/* Color Control Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <label className="text-sm font-medium dark:text-white">Colors:</label>
            <input
              type="range"
              min="2"
              max="7"
              value={colorCount}
              onChange={(e) => setColorCount(parseInt(e.target.value))}
              className="w-48"
            />
            <span className="text-sm dark:text-white">{colorCount}</span>
          </div>
          <div className="flex gap-4">
            {colors.map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-lg"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium dark:text-white">Layout:</span>
              <select
                value={layout}
                onChange={(e) => setLayout(e.target.value)}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-2 py-1"
              >
                <option value="default">Default</option>
                <option value="compact">Compact</option>
                <option value="expanded">Expanded</option>
              </select>
            </div>
          </div>
          <button
            onClick={regeneratePalette}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-gray-100 dark:text-white rounded-lg transition-colors"
          >
            Generate Random Palette
          </button>
        </div>
      </div>
    </div>
    // </AuthGuard>
  );
}