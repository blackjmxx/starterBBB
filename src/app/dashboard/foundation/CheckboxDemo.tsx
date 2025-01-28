'use client';

import { Checkbox as AriaCheckbox } from '@/aria-component/checkbox';
import { useState } from 'react';

export default function CheckboxDemo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold mb-4">Checkbox Démonstration</h2>
        
        {/* Checkbox basique */}
        <div className="flex items-center gap-4">
          <AriaCheckbox>
            Checkbox basique
          </AriaCheckbox>
        </div>

        {/* Checkbox contrôlé */}
        <div className="flex items-center gap-4">
          <AriaCheckbox 
            isSelected={isChecked}
            onChange={setIsChecked}
          >
            Checkbox contrôlé (État: {isChecked ? 'Coché' : 'Non coché'})
          </AriaCheckbox>
        </div>

        {/* Checkbox désactivé */}
        <div className="flex items-center gap-4">
          <AriaCheckbox 
            isDisabled
          >
            Checkbox désactivé
          </AriaCheckbox>
        </div>

        {/* Checkbox désactivé et coché */}
        <div className="flex items-center gap-4">
          <AriaCheckbox 
            isDisabled
            isSelected={true}
          >
            Checkbox désactivé et coché
          </AriaCheckbox>
        </div>
      </div>
    </div>
  );
}