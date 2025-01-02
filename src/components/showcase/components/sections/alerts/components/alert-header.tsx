import { CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { AlertStyle } from '../types';

interface AlertHeaderProps {
  selectedStyle: AlertStyle;
  onStyleChange: (style: AlertStyle) => void;
}

export function AlertHeader({ selectedStyle, onStyleChange }: AlertHeaderProps) {
  return (
    <CardHeader className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <CardTitle className="text-xl sm:text-2xl">Alerts</CardTitle>
        <Select 
          value={selectedStyle} 
          onValueChange={(value) => onStyleChange(value as AlertStyle)}
        >
          <SelectTrigger className="w-full sm:w-32">
            <SelectValue placeholder="Select style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="filled">Filled</SelectItem>
            <SelectItem value="outlined">Outlined</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </CardHeader>
  );
}