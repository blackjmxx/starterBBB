import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { avatarImages, letterAvatars, onlineStatuses } from './data';
import { AvatarGroup } from './components/avatar-group';
import { AvatarWithStatus } from './components/avatar-with-status';
import { avatarVariants } from './styles';
import { Folder } from 'lucide-react';

const colorVariants = [
  { name: 'default', textColor: 'text-foreground' },
  { name: 'primary', textColor: 'text-white' },
  { name: 'secondary', textColor: 'text-white' },
  { name: 'info', textColor: 'text-white' },
  { name: 'success', textColor: 'text-white' },
  { name: 'warning', textColor: 'text-white' },
  { name: 'error', textColor: 'text-white' }
] as const;

export function AvatarComponents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Avatars</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {/* Image Avatars */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Image Avatars</h3>
          <div className="flex flex-wrap gap-4">
            {avatarImages.map((avatar, index) => (
              <Avatar key={`image-${index}-${avatar.name}`}>
                <AvatarImage src={avatar.src} alt={avatar.name} />
                <AvatarFallback>
                  {avatar.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </section>

        {/* Letter Avatars */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Letter Avatars</h3>
          <div className="flex flex-wrap gap-4">
            {letterAvatars.map(({ letter, color }, index) => (
              <Avatar key={`letter-${index}-${letter}-${color}`} className={`bg-${color}`}>
                <AvatarFallback className={color === 'default' ? '' : 'text-white'}>
                  {letter}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </section>

        {/* Icon Avatars */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Icon Avatars</h3>
          <div className="flex flex-wrap gap-4">
            {colorVariants.map(({ name, textColor }) => (
              <Avatar key={`icon-${name}`} className={`bg-${name}`}>
                <Folder className={cn('h-5 w-5', textColor)} />
              </Avatar>
            ))}
          </div>
        </section>

        {/* Variants */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Variants</h3>
          <div className="flex flex-wrap gap-4">
            {['circular', 'rounded', 'square'].map((variant) => (
              <Avatar 
                key={`variant-${variant}`}
                className={avatarVariants({ 
                  variant: variant as 'circular' | 'rounded' | 'square' 
                })}
              >
                <Folder className="h-5 w-5" />
              </Avatar>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Sizes</h3>
          <div className="flex flex-wrap items-end gap-4">
            {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
              <Avatar 
                key={`size-${size}`}
                className={avatarVariants({ size: size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' })}
              >
                <AvatarImage src={avatarImages[0].src} alt={avatarImages[0].name} />
                <AvatarFallback>
                  {avatarImages[0].name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </section>

        {/* Avatar Groups */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Avatar Groups</h3>
          <div className="space-y-4">
            <AvatarGroup 
              avatars={avatarImages} 
              max={3}
              spacing="sm"
            />
            <AvatarGroup 
              avatars={avatarImages} 
              max={4}
              spacing="md"
            />
            <AvatarGroup 
              avatars={avatarImages} 
              max={5}
              spacing="lg"
            />
          </div>
        </section>

        {/* With Status */}
        <section>
          <h3 className="text-lg font-semibold mb-4">With Status</h3>
          <div className="flex flex-wrap gap-4">
            {onlineStatuses.map((status) => (
              <AvatarWithStatus
                key={`status-${status}`}
                src={avatarImages[0].src}
                name={avatarImages[0].name}
                status={status}
              />
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  );
}