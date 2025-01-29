import { Description, Label } from '@/aria-component/field';
import { List, ListItem } from '@/aria-component/list';
import { TransferList } from '@/aria-component/transfer-list';
import React, { Key, useState } from 'react';

const fruits = [
  { id: '1', name: 'Pomme' },
  { id: '2', name: 'Banane' },
  { id: '3', name: 'Orange' },
  { id: '4', name: 'Fraise' },
  { id: '5', name: 'Kiwi' }
];

const vegetables = [
  { id: '1', name: 'Carotte' },
  { id: '2', name: 'Tomate' },
  { id: '3', name: 'Poivron' },
  { id: '4', name: 'Brocoli' },
  { id: '5', name: 'Courgette' }
];

const ListDemo: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set([]));
  const [transferSelectedKeys, setTransferSelectedKeys] = useState<Set<Key>>(new Set([]));
  const [sourceItems] = useState(fruits);
  const [destinationItems, setDestinationItems] = useState<typeof fruits>([]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">List et TransferList Demo</h2>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Liste basique</h3>
        <div className="max-w-md">
          <List aria-label="Liste de fruits">
            {fruits.map((fruit) => (
              <ListItem key={fruit.id}>{fruit.name}</ListItem>
            ))}
          </List>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Liste avec sélection</h3>
        <div className="max-w-md">
          <List 
            aria-label="Liste avec sélection"
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            {vegetables.map((vegetable) => (
              <ListItem key={vegetable.id}>{vegetable.name}</ListItem>
            ))}
          </List>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Liste avec description</h3>
        <div className="max-w-md">
          <List aria-label="Liste avec description">
            <Label>Fruits</Label>
            <Description>Sélectionnez vos fruits préférés</Description>
            {fruits.map((fruit) => (
              <ListItem key={fruit.id}>{fruit.name}</ListItem>
            ))}
          </List>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Liste désactivée</h3>
        <div className="max-w-md">
          <List 
            aria-label="Liste désactivée"
            isDisabled
          >
            {fruits.map((fruit) => (
              <ListItem key={fruit.id}>{fruit.name}</ListItem>
            ))}
          </List>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">TransferList basique</h3>
        <div className="max-w-2xl">
          <TransferList
            aria-label="TransferList d'éléments"
            sourceItems={sourceItems}
            destinationItems={destinationItems}
            selectedKeys={transferSelectedKeys}
            onSelectionChange={setTransferSelectedKeys}
            onItemsChange={setDestinationItems}
          >
            <Label>Transfert d'éléments</Label>
            <Description>Déplacez les éléments entre les listes</Description>
          </TransferList>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">TransferList avec états</h3>
        <div className="space-y-4 max-w-2xl">
          <TransferList
            aria-label="TransferList désactivée"
            sourceItems={sourceItems}
            destinationItems={destinationItems}
            selectedKeys={transferSelectedKeys}
            onSelectionChange={setTransferSelectedKeys}
            onItemsChange={setDestinationItems}
            isDisabled
          >
            <Label>TransferList désactivée</Label>
          </TransferList>

          <TransferList
            aria-label="TransferList en lecture seule"
            sourceItems={sourceItems}
            destinationItems={destinationItems}
            selectedKeys={transferSelectedKeys}
            onSelectionChange={setTransferSelectedKeys}
            onItemsChange={setDestinationItems}
            isReadOnly
          >
            <Label>TransferList en lecture seule</Label>
          </TransferList>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">TransferList avec filtres</h3>
        <div className="max-w-2xl">
          <TransferList
            aria-label="TransferList avec filtres"
            sourceItems={sourceItems}
            destinationItems={destinationItems}
            selectedKeys={transferSelectedKeys}
            onSelectionChange={setTransferSelectedKeys}
            onItemsChange={setDestinationItems}
            allowFiltering
          >
            <Label>TransferList avec recherche</Label>
            <Description>Utilisez la barre de recherche pour filtrer les éléments</Description>
          </TransferList>
        </div>
      </div>
    </div>
  );
};

export default ListDemo;