'use client';

import { Avatar, AvatarBadge, AvatarGroup } from '@/aria-component/avatar';
import { CheckIcon } from '@/aria-component/icons';
import { Card } from '@/components/ui/card';

export default function AvatarDemo() {
  return (
    <div className="space-y-8">
      {/* Différentes tailles */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Tailles d'avatars</h2>
        <Card className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar
              src="https://i.pravatar.cc/300?img=1"
              alt="John Doe"
              className="size-6"
            />
            <Avatar
              src="https://i.pravatar.cc/300?img=2"
              alt="Jane Smith"
              className="size-8"
            />
            <Avatar
              src="https://i.pravatar.cc/300?img=3"
              alt="Bob Wilson"
              className="size-10"
            />
            <Avatar
              src="https://i.pravatar.cc/300?img=4"
              alt="Alice Brown"
              className="size-12"
            />
            <Avatar
              src="https://i.pravatar.cc/300?img=5"
              alt="Charlie Davis"
              className="size-16"
            />
          </div>
        </Card>
      </div>

      {/* Formes différentes */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Formes d'avatars</h2>
        <Card className="p-4">
          <div className="flex flex-wrap gap-4">
            {/* Carré (par défaut) */}
            <Avatar
              src="https://i.pravatar.cc/300?img=6"
              alt="David Square"
            />
            {/* Rond */}
            <Avatar
              src="https://i.pravatar.cc/300?img=7"
              alt="Eva Circle"
              className="rounded-full"
            />
            {/* Carré arrondi personnalisé */}
            <Avatar
              src="https://i.pravatar.cc/300?img=8"
              alt="Frank Custom"
              className="rounded-xl"
            />
          </div>
        </Card>
      </div>

      {/* Avatars avec initiales */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Avatars avec initiales</h2>
        <Card className="p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Noms simples (2 lettres)</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Avatar
                    alt="Jean Dupont"
                    src="invalid-url"
                  />
                  <span className="text-sm text-gray-500">JD</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar
                    alt="Marie Bernard"
                    src="invalid-url"
                  />
                  <span className="text-sm text-gray-500">MB</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Noms composés</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Avatar
                    alt="Jean-Pierre Dubois"
                    src="invalid-url"
                  />
                  <span className="text-sm text-gray-500">JD</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar
                    alt="Anne-Marie Lambert"
                    src="invalid-url"
                  />
                  <span className="text-sm text-gray-500">AL</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Noms courts et spéciaux</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Avatar
                    alt="Li Wu"
                    src="invalid-url"
                  />
                  <span className="text-sm text-gray-500">LW</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar
                    alt="Zoé O Connor"
                    src="invalid-url"
                  />
                  <span className="text-sm text-gray-500">ZO</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar
                    alt="d'Artagnan"
                    src="invalid-url"
                  />
                  <span className="text-sm text-gray-500">DA</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Variations de couleurs */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Variations de couleurs</h2>
        <Card className="p-4">
          <div className="flex flex-wrap gap-4">
            <Avatar
              alt="Rouge User"
              className="bg-red-100 text-red-600"
              src="invalid-url"
            />
            <Avatar
              alt="Bleu User"
              className="bg-blue-100 text-blue-600"
              src="invalid-url"
            />
            <Avatar
              alt="Vert User"
              className="bg-green-100 text-green-600"
              src="invalid-url"
            />
            <Avatar
              alt="Purple User"
              className="bg-purple-100 text-purple-600"
              src="invalid-url"
            />
            <Avatar
              alt="Orange User"
              className="bg-orange-100 text-orange-600"
              src="invalid-url"
            />
          </div>
        </Card>
      </div>

      {/* Avatars avec badges */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Avatars avec badges</h2>
        <Card className="p-4">
          <div className="flex flex-wrap gap-4">
            <Avatar
              src="https://i.pravatar.cc/300?img=9"
              alt="Sophie Bernard"
              className="size-12"
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
              src="https://i.pravatar.cc/300?img=10"
              alt="Lucas Martin"
              className="size-12"
            >
              <AvatarBadge
                badge={
                  <div className="size-full rounded-full bg-danger" />
                }
              />
            </Avatar>

            <Avatar
              alt="Emma Petit"
              className="size-12"
            >
              <AvatarBadge
                badge={
                  <div className="size-full rounded-full bg-warning" />
                }
              />
            </Avatar>

            {/* Badge avec taille personnalisée */}
            <Avatar
              src="https://i.pravatar.cc/300?img=11"
              alt="Thomas Grand"
              className="size-16"
            >
              <AvatarBadge
                badge={
                  <div className="size-full rounded-full bg-info">
                    <span className="text-white text-xs">3</span>
                  </div>
                }
              />
            </Avatar>
          </div>
        </Card>
      </div>

      {/* Groupe d'avatars */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Groupe d'avatars</h2>
        <Card className="p-4">
          <div className="space-y-4">
            {/* Groupe standard */}
            <div>
              <h3 className="text-sm font-medium mb-2">Standard</h3>
              <AvatarGroup>
                <Avatar
                  src="https://i.pravatar.cc/300?img=12"
                  alt="User 1"
                />
                <Avatar
                  src="https://i.pravatar.cc/300?img=13"
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
            </div>

            {/* Groupe avec chevauchement inversé */}
            <div>
              <h3 className="text-sm font-medium mb-2">Chevauchement inversé</h3>
              <AvatarGroup reverseOverlap>
                <Avatar
                  src="https://i.pravatar.cc/300?img=14"
                  alt="Member 1"
                  className="size-12"
                />
                <Avatar
                  src="https://i.pravatar.cc/300?img=15"
                  alt="Member 2"
                  className="size-12"
                />
                <Avatar
                  src="https://i.pravatar.cc/300?img=16"
                  alt="Member 3"
                  className="size-12"
                />
              </AvatarGroup>
            </div>

            {/* Groupe avec tailles mixtes */}
            <div>
              <h3 className="text-sm font-medium mb-2">Tailles mixtes</h3>
              <AvatarGroup>
                <Avatar
                  src="https://i.pravatar.cc/300?img=17"
                  alt="Member 4"
                  className="size-14"
                />
                <Avatar
                  src="https://i.pravatar.cc/300?img=18"
                  alt="Member 5"
                  className="size-12"
                />
                <Avatar
                  src="https://i.pravatar.cc/300?img=19"
                  alt="Member 6"
                  className="size-10"
                />
              </AvatarGroup>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}