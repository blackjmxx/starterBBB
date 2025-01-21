import React from 'react';
import { usePalette } from '../context/PaletteContext';

const Loader: React.FC = () => {
  const { colors } = usePalette();
  const primaryColor = colors[2];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4" 
           style={{ borderColor: primaryColor }}>
      </div>
    </div>
  );
};

export default Loader; 