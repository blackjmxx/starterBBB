import { Cell, Column, Row, Table, TableHeader } from '@/aria-component/table';
import React, { useMemo, useState } from 'react';
import { SortDescriptor, TableBody } from 'react-aria-components';

const basicRows = [
  { id: 1, name: 'Documents', date: '18/03/2023', type: 'Dossier' },
  { id: 2, name: 'Images', date: '02/08/2021', type: 'Dossier' },
  { id: 3, name: 'rapport.txt', date: '18/01/2023', type: 'Document texte' }
];

const detailedRows = [
  { id: 1, name: 'Jeux', date: '07/06/2020', type: 'Dossier', size: '2.1 GB' },
  { id: 2, name: 'Programme', date: '07/04/2021', type: 'Dossier', size: '1.8 GB' },
  { id: 3, name: 'system.sys', date: '20/11/2010', type: 'Fichier système', size: '250 KB' },
  { id: 4, name: 'log.txt', date: '18/01/2016', type: 'Document texte', size: '123 KB' }
];

const TableDemo: React.FC = () => {
  const [basicSortDescriptor, setBasicSortDescriptor] = useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending'
  });

  const [detailedSortDescriptor, setDetailedSortDescriptor] = useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending'
  });

  const sortedBasicItems = useMemo(() => {
    return basicRows.slice().sort((a, b) => {
      const column = basicSortDescriptor.column as keyof typeof basicRows[0];
      const result = String(a[column]).localeCompare(String(b[column]));
      return basicSortDescriptor.direction === 'ascending' ? result : -result;
    });
  }, [basicSortDescriptor]);

  const sortedDetailedItems = useMemo(() => {
    return detailedRows.slice().sort((a, b) => {
      const column = detailedSortDescriptor.column as keyof typeof detailedRows[0];
      const result = String(a[column]).localeCompare(String(b[column]));
      return detailedSortDescriptor.direction === 'ascending' ? result : -result;
    });
  }, [detailedSortDescriptor]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Table Demo</h2>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Basique</h3>
        <div className="max-w-4xl">
          <Table
            aria-label="Table basique"
            sortDescriptor={basicSortDescriptor}
            onSortChange={setBasicSortDescriptor}
          >
            <TableHeader>
              <Column id="name" isRowHeader allowsSorting>Nom</Column>
              <Column id="type" allowsSorting>Type</Column>
              <Column id="date" allowsSorting>Date de modification</Column>
            </TableHeader>
            <TableBody items={sortedBasicItems}>
              {(item) => (
                <Row>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.type}</Cell>
                  <Cell>{item.date}</Cell>
                </Row>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Avec sélection multiple</h3>
        <div className="max-w-4xl">
          <Table
            aria-label="Table avec sélection"
            selectionMode="multiple"
            sortDescriptor={basicSortDescriptor}
            onSortChange={setBasicSortDescriptor}
          >
            <TableHeader>
              <Column id="name" isRowHeader allowsSorting>Nom</Column>
              <Column id="type" allowsSorting>Type</Column>
              <Column id="date" allowsSorting>Date de modification</Column>
            </TableHeader>
            <TableBody items={sortedBasicItems}>
              {(item) => (
                <Row>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.type}</Cell>
                  <Cell>{item.date}</Cell>
                </Row>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Table détaillée</h3>
        <div className="max-w-4xl">
          <Table
            aria-label="Table détaillée"
            selectionMode="multiple"
            sortDescriptor={detailedSortDescriptor}
            onSortChange={setDetailedSortDescriptor}
          >
            <TableHeader>
              <Column id="name" isRowHeader allowsSorting>Nom</Column>
              <Column id="type" allowsSorting>Type</Column>
              <Column id="date" allowsSorting>Date de modification</Column>
              <Column id="size" allowsSorting>Taille</Column>
            </TableHeader>
            <TableBody items={sortedDetailedItems}>
              {(item) => (
                <Row>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.type}</Cell>
                  <Cell>{item.date}</Cell>
                  <Cell>{item.size}</Cell>
                </Row>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sélection simple</h3>
        <div className="max-w-4xl">
          <Table
            aria-label="Table avec sélection simple"
            selectionMode="single"
            sortDescriptor={basicSortDescriptor}
            onSortChange={setBasicSortDescriptor}
          >
            <TableHeader>
              <Column id="name" isRowHeader allowsSorting>Nom</Column>
              <Column id="type" allowsSorting>Type</Column>
              <Column id="date" allowsSorting>Date de modification</Column>
            </TableHeader>
            <TableBody items={sortedBasicItems}>
              {(item) => (
                <Row>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.type}</Cell>
                  <Cell>{item.date}</Cell>
                </Row>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TableDemo;