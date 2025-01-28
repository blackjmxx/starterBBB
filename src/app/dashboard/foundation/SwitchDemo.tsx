import { Switch, SwitchField, SwitchGroup } from '@/components/primitives';
import React from 'react';

const SwitchDemo: React.FC = () => {
  return (
    <div className="space-y-8 p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Démonstration des Interrupteurs</h2>

      {/* Notification Email basique */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Notification Email</h3>
        <SwitchField>
          <Switch>
            Recevoir des notifications par email
          </Switch>
          <div data-ui="description" className="text-sm text-gray-500">
            Activez pour être informé par email quand vous n'êtes pas connecté
          </div>
        </SwitchField>
      </div>

      {/* États désactivés */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">État désactivé</h3>
        <SwitchField>
          <Switch isDisabled>
            Notification Email
          </Switch>
          <div data-ui="description" className="text-sm text-gray-500">
            Fonctionnalité temporairement désactivée
          </div>
        </SwitchField>
      </div>

      {/* État lecture seule */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">État lecture seule</h3>
        <SwitchField>
          <Switch isReadOnly>
            Notification Email
          </Switch>
          <div data-ui="description" className="text-sm text-gray-500">
            Ce paramètre ne peut pas être modifié
          </div>
        </SwitchField>
      </div>

      {/* Placement des libellés */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Positionnement du libellé</h3>
        <div className="flex flex-col gap-4">
          <Switch labelPlacement="end">Droite (par défaut)</Switch>
          <Switch labelPlacement="start">Gauche</Switch>
        </div>
      </div>

      {/* Groupes de switches */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Synchronisation des données</h3>
        <SwitchGroup>
          <div className="text-sm font-medium mb-2">Applications</div>
          <div className="space-y-2">
            <Switch>Favoris</Switch>
            <Switch>Extensions</Switch>
            <Switch>Historique</Switch>
            <Switch>Paramètres</Switch>
          </div>
        </SwitchGroup>
      </div>

      {/* Groupe avec descriptions */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Audience et tagging</h3>
        <SwitchGroup>
          <div className="mb-4">
            <div className="text-sm font-medium">Gestion de la confidentialité</div>
            <div className="text-sm text-gray-500">
              Contrôlez les informations visibles par les autres utilisateurs
            </div>
          </div>
          <div className="space-y-4">
            <SwitchField>
              <Switch>
                Protéger vos publications
              </Switch>
              <div data-ui="description" className="text-sm text-gray-500">
                Rend vos posts visibles uniquement par vos abonnés
              </div>
            </SwitchField>

            <SwitchField>
              <Switch isDisabled>
                Protéger vos vidéos
              </Switch>
              <div data-ui="description" className="text-sm text-gray-500">
                Empêche le téléchargement de vos vidéos
              </div>
            </SwitchField>

            <SwitchField>
              <Switch>
                Taggage photo
              </Switch>
              <div data-ui="description" className="text-sm text-gray-500">
                Autorise le taggage automatique dans les photos
              </div>
            </SwitchField>
          </div>
        </SwitchGroup>
      </div>
    </div>
  );
};

export default SwitchDemo;