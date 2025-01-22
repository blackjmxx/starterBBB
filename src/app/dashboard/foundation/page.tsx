'use client';
import { useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import Button from '@/components/primitives/Button';
import Checkbox from '@/components/primitives/Checkbox';
import Radio from '@/components/primitives/Radio';
import Switch from '@/components/primitives/Switch';
import TextField from '@/components/primitives/TextField';
import AutoComplete from '@/components/primitives/AutoComplete';
import Slider from '@/components/primitives/Slider';
import Table from '@/components/primitives/Table';
import DataGrid from '@/components/primitives/DataGrid';
import List from '@/components/primitives/List';
import Timeline from '@/components/primitives/Timeline';
import TreeView from '@/components/primitives/TreeView';
import Breadcrumbs from '@/components/primitives/Breadcrumbs';
import Menu from '@/components/primitives/Menu';
import Tabs from '@/components/primitives/Tabs';
import Pagination from '@/components/primitives/Pagination';
import Stepper from '@/components/primitives/Stepper';
import Alert from '@/components/primitives/Alert';
import Dialog from '@/components/primitives/Dialog';
import Drawer from '@/components/primitives/Drawer';
import Progress from '@/components/primitives/Progress';
import Rating from '@/components/primitives/Rating';
import Tooltip from '@/components/primitives/Tooltip';
import Avatar from '@/components/primitives/Avatar';
import Badge from '@/components/primitives/Badge';
import Chip from '@/components/primitives/Chip';
import Popover from '@/components/primitives/Popover';
import TransferList from '@/components/primitives/TransferList';
import Accordion from '@/components/primitives/Accordion';
export default function FoundationPage() {
  const { colors } = usePalette();
  const [activeComponent, setActiveComponent] = useState('Button');

  const componentGroups = {
    'Input Controls': {
      Button,
      Checkbox,
      Radio,
      Switch,
      TextField,
      AutoComplete,
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
      Breadcrumbs,
      Menu,
      Tabs,
      Pagination,
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
      Avatar,
      Badge,
      Chip,
      Popover,
      TransferList,
      Accordion
    }
  };

  // Créer un objet plat de tous les composants
  const allComponents = Object.values(componentGroups).reduce((acc, group) => ({
    ...acc,
    ...group
  }), {});

  const ActiveComponent = allComponents[activeComponent as keyof typeof allComponents];

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
                  onClick={() => setActiveComponent(name)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    activeComponent === name
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
        <ActiveComponent />
      </div>
    </div>
  );
} 