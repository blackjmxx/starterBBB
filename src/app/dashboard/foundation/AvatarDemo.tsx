'use client';

import { Avatar, AvatarBadge, AvatarGroup } from '@/aria-component/avatar';
import { CheckIcon } from '@/aria-component/icons';
import { Card } from '@/components/ui/card';

export default function AvatarDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Avatars basiques</h2>
        <Card className="p-4">
          <div className="flex flex-wrap gap-4">
            {/* Avatar avec image */}
            <Avatar
              src="https://i.pravatar.cc/300?img=1"
              alt="John Doe"
            />
            
            {/* Avatar avec initiales (cas d'erreur de chargement d'image) */}
            <Avatar
              src="invalid-url"
              alt="Marie Dupont"
            />

            {/* Avatar avec initiales directement */}
            <Avatar
              alt="Robert Martin"
            />
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Avatars avec badges</h2>
        <Card className="p-4">
          <div className="flex flex-wrap gap-4">
            <Avatar
              src="https://i.pravatar.cc/300?img=2"
              alt="Sophie Bernard"
            >
              <AvatarBadge
                badge={
                  <div className="size-full rounded-full bg-success">
                    <CheckIcon className="size-3 text-white" />
                  </div>
                }
              />
            </Avatar>

            <Avatar
              src="https://i.pravatar.cc/300?img=3"
              alt="Lucas Martin"
            >
              <AvatarBadge
                badge={
                  <div className="size-full rounded-full bg-danger" />
                }
              />
            </Avatar>

            <Avatar
              alt="Emma Petit"
            >
              <AvatarBadge
                badge={
                  <div className="size-full rounded-full bg-warning" />
                }
              />
            </Avatar>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Groupe d'avatars</h2>
        <Card className="p-4">
          <div className="space-y-4">
            {/* Groupe standard */}
            <AvatarGroup>
              <Avatar
                src="https://i.pravatar.cc/300?img=4"
                alt="User 1"
              />
              <Avatar
                src="https://i.pravatar.cc/300?img=5"
                alt="User 2"
              />
              <Avatar
                src="invalid-url"
                alt="User 3"
              />
              <Avatar
                alt="User 4"
              />
            </AvatarGroup>

            {/* Groupe avec chevauchement inversé */}
            <AvatarGroup reverseOverlap>
              <Avatar
                src="https://i.pravatar.cc/300?img=6"
                alt="Member 1"
              />
              <Avatar
                src="https://i.pravatar.cc/300?img=7"
                alt="Member 2"
              />
              <Avatar
                src="https://i.pravatar.cc/300?img=8"
                alt="Member 3"
              />
            </AvatarGroup>
          </div>
        </Card>
      </div>
    </div>
  );
}