'use client';
import DefaultLayout from '@/components/dashboard/layouts/DefaultLayout';
import SidebarLayout from '@/components/dashboard/layouts/SidebarLayout';
import TopNavLayout from '@/components/dashboard/layouts/TopNavLayout';
import {
  Accordion,
  Alert,
  Badge,
  Chip,
  DataGrid,
  Dialog,
  Drawer,
  List,
  Menu,
  Popover,
  Progress,
  Rating,
  Slider,
  Stepper,
  Table,
  Tabs,
  Timeline,
  Tooltip,
  TransferList,
  TreeView
} from '@/components/primitives';
import { usePalette } from '@/context/PaletteContext';
import { useState } from 'react';
import AutoCompleteDemo from './AutoCompleteDemo';
import AvatarDemo from './AvatarDemo';
import BreadcrumbsDemo from './BreadcrumbsDemo';
import ButtonDemo from './ButtonDemo';
import CheckboxDemo from './CheckboxDemo';
import ClipboardDemo from './ClipboardDemo';
import RadioDemo from './RadioDemo';
import SwitchDemo from './SwitchDemo';
import TextFieldDemo from './TextFieldDemo';

export default function FoundationPage() {
  const { colors } = usePalette();
  const [activeComponent, setActiveComponent] = useState('ButtonDemo');
  const [activeDashboardLayout, setActiveDashboardLayout] = useState('DefaultLayout');

  const componentGroups = {
    'Dashboard Layouts': {
      DefaultLayout,
      SidebarLayout,
      TopNavLayout
    },
    'Input Controls': {
      ButtonDemo,
      CheckboxDemo,
      RadioDemo,
      SwitchDemo,
      TextFieldDemo,
      AutoCompleteDemo,
      Slider
    },
    'Data Display': {
      Table,
      DataGrid,
      List,
      Timeline,
      TreeView
    },
    'Navigation': {
      BreadcrumbsDemo,
      Menu,
      Tabs,
      Stepper
    },
    'Feedback': {
      Alert,
      Dialog,
      Drawer,
      Progress,
      Rating,
      Tooltip
    },
    'Elements': {
      AvatarDemo,
      Badge,
      Chip,
      Popover,
      TransferList,
      Accordion
    },
    'Utilities': {
      ClipboardDemo
    }
  };

  // Créer un objet plat de tous les composants
  const allComponents = Object.values(componentGroups).reduce((acc, group) => ({
    ...acc,
    ...group
  }), {});

  const ActiveComponent = allComponents[activeComponent as keyof typeof allComponents] as React.ComponentType<any>;
  const ActiveDashboardLayout = componentGroups['Dashboard Layouts'][activeDashboardLayout as keyof typeof componentGroups['Dashboard Layouts']] as React.ComponentType<any>;

  return (
    <div className="space-y-8">
      {/* Navigation des composants */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {Object.entries(componentGroups).map(([groupName, components]) => (
          <div key={groupName} className="flex-none">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{groupName}</h3>
            <div className="flex flex-col gap-1">
              {Object.keys(components).map(name => (
                <button
                  key={name}
                  onClick={() => {
                    if (groupName === 'Dashboard Layouts') {
                      setActiveDashboardLayout(name);
                    } else {
                      setActiveComponent(name);
                      setActiveDashboardLayout(''); // Reset dashboard layout when selecting a component
                    }
                  }}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    (groupName === 'Dashboard Layouts' ? activeDashboardLayout : activeComponent) === name
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Affichage du composant actif */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        {activeDashboardLayout ? (
          <ActiveDashboardLayout>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Dashboard Content</h2>
              <p>This is a placeholder for the dashboard content. The layout you've selected is applied to this content.</p>
            </div>
          </ActiveDashboardLayout>
        ) : (
          <ActiveComponent />
        )}
      </div>
    </div>
  );
}