import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ComponentItem {
  name: string;
  icon: LucideIcon;
}

interface ComponentSectionProps {
  title: string;
  items: ComponentItem[];
}

export function ComponentSection({ title, items }: ComponentSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors cursor-pointer"
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}