'use client';
import DefaultLayout from '@/components/dashboard/layouts/DefaultLayout';
import SidebarLayout from '@/components/dashboard/layouts/SidebarLayout';
import TopNavLayout from '@/components/dashboard/layouts/TopNavLayout';
import {
  Accordion,
  Alert,
  Badge,
  Chip,
  Dialog,
  Drawer,
  Popover,
  Progress,
  Rating,
  Slider,
  Stepper,
  Tabs,
  Timeline,
  Tooltip,
  TreeView
} from '@/components/primitives';
import { usePalette } from '@/context/PaletteContext';
import { useState } from 'react';
import AuthenticationDemo from './AuthenticationDemo';
import AutoCompleteDemo from './AutoCompleteDemo';
import AvatarDemo from './AvatarDemo';
import BreadcrumbsDemo from './BreadcrumbsDemo';
import ButtonDemo from './ButtonDemo';
import CardsDemo from './CardsDemo';
import CheckboxDemo from './CheckboxDemo';
import ClipboardDemo from './ClipboardDemo';
import DatePickerDemo from './DatePickerDemo';
import HeaderDemo from './HeaderDemo';
import InputsDemo from './InputsDemo';
import ListDemo from './ListDemo';
import MenuDemo from './MenuDemo';
import RadioDemo from './RadioDemo';
import { SideBarDemo } from './SideBarDemo';
import SwitchDemo from './SwitchDemo';
import TableDemo from './TableDemo';
import TextFieldDemo from './TextFieldDemo';
import TransferListDemo from './TransferListDemo';

export default function FoundationPage() {
  const { colors } = usePalette();
  const [activeComponent, setActiveComponent] = useState('ButtonDemo');
  const [activeDashboardLayout, setActiveDashboardLayout] = useState('DefaultLayout');

  const componentGroups = {
    'Dashboard Layouts': {
      DefaultLayout: DefaultLayout,
      SidebarLayout: SidebarLayout,
      TopNavLayout: TopNavLayout
    },
    'Input Controls': {
      ButtonDemo: ButtonDemo,
      CheckboxDemo: CheckboxDemo,
      RadioDemo: RadioDemo,
      SwitchDemo: SwitchDemo,
      TextFieldDemo: TextFieldDemo,
      AutoCompleteDemo: AutoCompleteDemo,
      Slider: Slider,
      DatePickerDemo: DatePickerDemo,
      InputsDemo: InputsDemo
    },
    'Data Display': {
      TableDemo: TableDemo,
      ListDemo: ListDemo,
      Timeline: Timeline,
      TreeView: TreeView
    },
    'Navigation': {
      BreadcrumbsDemo: BreadcrumbsDemo,
      HeaderDemo: HeaderDemo,
      MenuDemo: MenuDemo,
      Tabs: Tabs,
      Stepper: Stepper,
      SideBarDemo: SideBarDemo
    },
    'Feedback': {
      Alert: Alert,
      Dialog: Dialog,
      Drawer: Drawer,
      Progress: Progress,
      Rating: Rating,
      Tooltip: Tooltip
    },
    'Elements': {
      AuthenticationDemo: AuthenticationDemo,
      AvatarDemo: AvatarDemo,
      Badge: Badge,
      CardsDemo: CardsDemo,
      Chip: Chip,
      Popover: Popover,
      TransferListDemo: TransferListDemo,
      Accordion: Accordion
    },
    'Utilities': {
      ClipboardDemo: ClipboardDemo
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