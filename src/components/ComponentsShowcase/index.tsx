import React, { useState } from 'react';
import { usePalette } from '../../context/PaletteContext';
import {
  AccordionDemo as Accordion,
  Alert,
  AutoComplete,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  DataGrid,
  DatePicker,
  Dialog,
  Drawer,
  List,
  Menu,
  Pagination,
  Popover,
  Progress,
  Radio,
  Rating,
  Slider,
  Stepper,
  Switch,
  Table,
  Tabs,
  TextField,
  Timeline,
  Tooltip,
  TransferList,
  TreeView
} from '../../components/primitives';

const ComponentsShowcase: React.FC = () => {
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
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold dark:text-white">Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(componentGroups).map(([groupName, components]) => (
            <div key={groupName} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                {groupName}
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(components).map((compName) => (
                  <button
                    key={compName}
                    onClick={() => setActiveComponent(compName)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                      activeComponent === compName
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {compName}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl">
        {ActiveComponent && <ActiveComponent colors={colors} />}
      </div>
    </div>
  );
};

export default ComponentsShowcase;