import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, File } from 'lucide-react';

interface TreeNode {
  id: string;
  label: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
}

const TreeView = () => {
  const [expanded, setExpanded] = useState<string[]>(['1']);

  const treeData: TreeNode[] = [
    {
      id: '1',
      label: 'Documents',
      type: 'folder',
      children: [
        {
          id: '1.1',
          label: 'Projects',
          type: 'folder',
          children: [
            { id: '1.1.1', label: 'project1.doc', type: 'file' },
            { id: '1.1.2', label: 'project2.pdf', type: 'file' }
          ]
        },
        { id: '1.2', label: 'report.pdf', type: 'file' }
      ]
    },
    {
      id: '2',
      label: 'Pictures',
      type: 'folder',
      children: [
        { id: '2.1', label: 'vacation.jpg', type: 'file' },
        { id: '2.2', label: 'family.jpg', type: 'file' }
      ]
    },
    { id: '3', label: 'notes.txt', type: 'file' }
  ];

  const toggleNode = (nodeId: string) => {
    setExpanded(prev =>
      prev.includes(nodeId)
        ? prev.filter(id => id !== nodeId)
        : [...prev, nodeId]
    );
  };

  const renderNode = (node: TreeNode, level: number = 0) => {
    const isExpanded = expanded.includes(node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} style={{ marginLeft: `${level * 20}px` }}>
        <div
          className={`flex items-center py-1 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
            isExpanded ? 'bg-gray-50 dark:bg-gray-800' : ''
          }`}
        >
          {hasChildren ? (
            <button
              onClick={() => toggleNode(node.id)}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>
          ) : (
            <span className="w-6" />
          )}
          {node.type === 'folder' ? (
            <Folder className="h-4 w-4 text-blue-500 mr-2" />
          ) : (
            <File className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          )}
          <span className="text-sm text-gray-700 dark:text-gray-300">{node.label}</span>
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {node.children!.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Basic Tree View */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Tree View</h3>
        <div className="border rounded-lg dark:border-gray-700 p-4">
          {treeData.map(node => renderNode(node))}
        </div>
      </div>

      {/* Custom Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Custom Icons</h3>
        <div className="border rounded-lg dark:border-gray-700 p-4">
          <div className="flex items-center py-1 px-2">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
              <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </button>
            <div className="h-4 w-4 bg-blue-500 rounded mr-2" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Custom Icon</span>
          </div>
        </div>
      </div>

      {/* Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">With Selection</h3>
        <div className="border rounded-lg dark:border-gray-700 p-4">
          <div className="flex items-center py-1 px-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
              <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </button>
            <Folder className="h-4 w-4 text-blue-500 mr-2" />
            <span className="text-sm text-blue-600 dark:text-blue-400">Selected Item</span>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Tree View
<TreeView
  data={[
    {
      id: '1',
      label: 'Parent',
      children: [
        { id: '1.1', label: 'Child' }
      ]
    }
  ]}
/>

// With Custom Icons
<TreeView
  data={data}
  icons={{
    folder: CustomFolderIcon,
    file: CustomFileIcon
  }}
/>

// With Selection
<TreeView
  data={data}
  selectable
  onSelect={(selectedIds) => {
    console.log(selectedIds);
  }}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TreeView;