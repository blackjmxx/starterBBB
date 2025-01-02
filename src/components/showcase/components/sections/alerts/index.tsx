import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertHeader } from './components/alert-header';
import { AlertList } from './components/alert-list';
import { AlertWithActionsList } from './components/alert-with-actions-list';
import { alertsData } from './data';
import type { AlertStyle } from './types';

export function AlertComponents() {
  const [selectedStyle, setSelectedStyle] = useState<AlertStyle>('standard');

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <AlertHeader 
        selectedStyle={selectedStyle}
        onStyleChange={setSelectedStyle}
      />
      <CardContent className="grid gap-4 p-4 sm:p-6">
        <AlertList 
          alerts={alertsData}
          selectedStyle={selectedStyle}
        />
        <AlertWithActionsList 
          selectedStyle={selectedStyle}
        />
      </CardContent>
    </Card>
  );
}