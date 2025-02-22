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
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Overlay pour mobile/tablet */}
      {sidebarVisible && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      {/* Sidebar avec son propre scroll */}
      <aside className={`
        fixed lg:relative
        h-screen
        bg-gray-800
        transition-all duration-300
        ${sidebarVisible ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-[280px] shrink-0
        z-50 lg:z-0
        shadow-xl lg:shadow-none
      `}>
        <div className="h-full overflow-y-auto">
          <DashboardSidebar onClose={() => setSidebarVisible(false)} />
        </div>
      </aside>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <DashboardHeader 
          onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
          className="shrink-0 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        />
        
        {/* Zone de contenu scrollable */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Color Control Bar - Fixe en bas */}
        <div className="shrink-0 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="max-w-7xl mx-auto p-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex gap-4 items-center w-full lg:w-auto">
                <label className="text-sm font-medium dark:text-white whitespace-nowrap">Colors:</label>
                <input
                  type="range"
                  min="2"
                  max="7"
                  value={colorCount}
                  onChange={(e) => setColorCount(parseInt(e.target.value))}
                  className="flex-1 lg:w-48"
                />
                <span className="text-sm dark:text-white">{colorCount}</span>
              </div>
              
              <div className="flex gap-2 overflow-x-auto w-full lg:w-auto">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:ml-auto">
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
                <button
                  onClick={regeneratePalette}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-gray-100 dark:text-white rounded-lg transition-colors"
                >
                  Generate Random Palette
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </AuthGuard>
  );
}