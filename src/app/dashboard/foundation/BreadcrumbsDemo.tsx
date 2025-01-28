'use client';

import { Breadcrumb, Breadcrumbs } from '@/aria-component/breadcrumbs';
import { Card } from '@/components/ui/card';

export default function BreadcrumbsDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Fil d'Ariane basique</h2>
        <Card className="p-4">
          <Breadcrumbs>
            <Breadcrumb href="/">Accueil</Breadcrumb>
            <Breadcrumb href="/produits">Produits</Breadcrumb>
            <Breadcrumb>Électronique</Breadcrumb>
          </Breadcrumbs>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Fil d'Ariane avec plusieurs niveaux</h2>
        <Card className="p-4">
          <Breadcrumbs>
            <Breadcrumb href="/">Accueil</Breadcrumb>
            <Breadcrumb href="/categories">Catégories</Breadcrumb>
            <Breadcrumb href="/categories/tech">Technologies</Breadcrumb>
            <Breadcrumb href="/categories/tech/phones">Téléphones</Breadcrumb>
            <Breadcrumb>iPhone 15</Breadcrumb>
          </Breadcrumbs>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Fil d'Ariane dans un contexte</h2>
        <Card className="p-4">
          <div className="space-y-4">
            <Breadcrumbs>
              <Breadcrumb href="/dashboard">Dashboard</Breadcrumb>
              <Breadcrumb href="/dashboard/settings">Paramètres</Breadcrumb>
              <Breadcrumb>Profil</Breadcrumb>
            </Breadcrumbs>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-medium">Page de Profil</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Contenu de la page avec le fil d'Ariane ci-dessus
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}