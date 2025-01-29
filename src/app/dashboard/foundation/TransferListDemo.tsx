import { TransferList, TransferListItem } from '@/aria-component/transfer-list';
import React, { useState } from 'react';
import { Selection } from 'react-aria-components';

const technologies: TransferListItem[] = [
  { id: '1', name: 'React' },
  { id: '2', name: 'Vue.js' },
  { id: '3', name: 'Angular' },
  { id: '4', name: 'Svelte' },
  { id: '5', name: 'Next.js' }
];

const frameworks: TransferListItem[] = [
  { id: '6', name: 'Laravel' },
  { id: '7', name: 'Django' },
  { id: '8', name: 'Express' },
  { id: '9', name: 'Spring Boot' },
  { id: '10', name: 'Ruby on Rails' }
];

const colors: TransferListItem[] = [
  { id: '11', name: 'Rouge' },
  { id: '12', name: 'Bleu' },
  { id: '13', name: 'Vert' },
  { id: '14', name: 'Jaune' },
  { id: '15', name: 'Orange' }
];

const TransferListDemo: React.FC = () => {
  // État pour la liste basique
  const [basicSelectedKeys, setBasicSelectedKeys] = useState<Selection>(new Set([]));
  const [basicTargetItems, setBasicTargetItems] = useState<TransferListItem[]>([]);

  // État pour la liste avec recherche
  const [searchSelectedKeys, setSearchSelectedKeys] = useState<Selection>(new Set([]));
  const [searchTargetItems, setSearchTargetItems] = useState<TransferListItem[]>([]);

  // État pour la liste avec états
  const [stateSelectedKeys, setStateSelectedKeys] = useState<Selection>(new Set([]));
  const [stateTargetItems, setStateTargetItems] = useState<TransferListItem[]>([]);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">TransferList Demo</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basique</h3>
        <TransferList
          sourceItems={technologies.filter(item => 
            !basicTargetItems.find(target => target.id === item.id)
          )}
          targetItems={basicTargetItems}
          selectedKeys={basicSelectedKeys}
          onSelectionChange={setBasicSelectedKeys}
          onItemsChange={setBasicTargetItems}
          sourceLabel="Technologies disponibles"
          targetLabel="Technologies sélectionnées"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Avec recherche</h3>
        <TransferList
          sourceItems={frameworks.filter(item => 
            !searchTargetItems.find(target => target.id === item.id)
          )}
          targetItems={searchTargetItems}
          selectedKeys={searchSelectedKeys}
          onSelectionChange={setSearchSelectedKeys}
          onItemsChange={setSearchTargetItems}
          sourceLabel="Frameworks disponibles"
          targetLabel="Frameworks sélectionnés"
          allowSearch
          searchPlaceholder="Rechercher un framework..."
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">États</h3>
        <div className="space-y-8">
          <TransferList
            sourceItems={colors.filter(item => 
              !stateTargetItems.find(target => target.id === item.id)
            )}
            targetItems={stateTargetItems}
            selectedKeys={stateSelectedKeys}
            onSelectionChange={setStateSelectedKeys}
            onItemsChange={setStateTargetItems}
            sourceLabel="Désactivé"
            targetLabel="Non modifiable"
            isDisabled
          />

          <TransferList
            sourceItems={colors.filter(item => 
              !stateTargetItems.find(target => target.id === item.id)
            )}
            targetItems={stateTargetItems}
            selectedKeys={stateSelectedKeys}
            onSelectionChange={setStateSelectedKeys}
            onItemsChange={setStateTargetItems}
            sourceLabel="Lecture seule"
            targetLabel="Non modifiable"
            isReadOnly
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Avec styles personnalisés</h3>
        <TransferList
          sourceItems={technologies.filter(item => 
            !basicTargetItems.find(target => target.id === item.id)
          )}
          targetItems={basicTargetItems}
          selectedKeys={basicSelectedKeys}
          onSelectionChange={setBasicSelectedKeys}
          onItemsChange={setBasicTargetItems}
          sourceLabel="Source personnalisée"
          targetLabel="Destination personnalisée"
          className="border rounded-lg p-4 bg-background"
          searchFieldProps={{
            className: "bg-background"
          }}
          actionButtonProps={{
            className: "bg-primary text-primary-foreground"
          }}
          allowSearch
        />
      </div>
    </div>
  );
};

export default TransferListDemo;