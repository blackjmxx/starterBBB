import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ImageButton } from './image-button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const defaultImages = [
  {
    url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
    title: 'Food & Dining',
    description: 'Explore culinary delights',
  },
  {
    url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814',
    title: 'Lifestyle',
    description: 'Live your best life',
  },
  {
    url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    title: 'Travel',
    description: 'Discover new places',
  },
];

export function ImageButtonGroup() {
  const [layout, setLayout] = useState<'row' | 'column'>('row');
  const [height, setHeight] = useState<'sm' | 'md' | 'lg'>('md');
  const [hoverEffect, setHoverEffect] = useState<'zoom' | 'fade' | 'slide'>('zoom');

  const heights = {
    sm: 'min-h-[150px] sm:min-h-[200px]',
    md: 'min-h-[200px] sm:min-h-[300px]',
    lg: 'min-h-[250px] sm:min-h-[400px]',
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Select value={layout} onValueChange={(value) => setLayout(value as 'row' | 'column')}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Layout" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="row">Row</SelectItem>
            <SelectItem value="column">Column</SelectItem>
          </SelectContent>
        </Select>

        <Select value={height} onValueChange={(value) => setHeight(value as 'sm' | 'md' | 'lg')}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Height" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="md">Medium</SelectItem>
            <SelectItem value="lg">Large</SelectItem>
          </SelectContent>
        </Select>

        <Select value={hoverEffect} onValueChange={(value) => setHoverEffect(value as 'zoom' | 'fade' | 'slide')}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Effect" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="zoom">Zoom</SelectItem>
            <SelectItem value="fade">Fade</SelectItem>
            <SelectItem value="slide">Slide</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className={cn(
        'grid gap-4',
        layout === 'row' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      )}>
        {defaultImages.map((image) => (
          <ImageButton
            key={image.title}
            image={image}
            className={heights[height]}
            effect={hoverEffect}
          />
        ))}
      </div>
    </div>
  );
}