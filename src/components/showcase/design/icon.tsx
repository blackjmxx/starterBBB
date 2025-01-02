import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as icons from 'lucide-react';

export function IconShowcase() {
  const commonIcons = [
    'AlertCircle',
    'ArrowRight',
    'Check',
    'ChevronRight',
    'Circle',
    'HelpCircle',
    'Info',
    'Mail',
    'MoreVertical',
    'Plus',
    'Search',
    'Settings',
    'Star',
    'User',
    'X',
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Icons</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {commonIcons.map((name) => {
            const Icon = icons[name as keyof typeof icons];
            return (
              <div
                key={name}
                className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg space-y-2"
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}