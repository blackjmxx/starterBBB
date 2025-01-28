import { Tag, TagGroup } from '@/aria-component/tag-group';
import { AlertCircle, Check, Clock, X } from 'lucide-react';
import { useState } from 'react';

const Chip = () => {
  const [tags, setTags] = useState([
    { id: '1', label: 'Filled', type: 'filled' },
    { id: '2', label: 'Outlined', type: 'outlined' },
    { id: '3', label: 'Soft', type: 'soft' }
  ]);

  const colors = [
    { name: 'default', class: 'bg-gray-100 text-gray-800' },
    { name: 'primary', class: 'bg-blue-100 text-blue-800' },
    { name: 'success', class: 'bg-green-100 text-green-800' },
    { name: 'warning', class: 'bg-yellow-100 text-yellow-800' },
    { name: 'error', class: 'bg-red-100 text-red-800' }
  ];

  const statuses = [
    { label: 'Completed', icon: Check, color: 'success' },
    { label: 'Pending', icon: Clock, color: 'warning' },
    { label: 'Error', icon: AlertCircle, color: 'error' }
  ];

  const handleRemove = (id: string) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Variants</h3>
        <TagGroup>
          {tags.map((tag) => (
            <Tag key={tag.id} className={`${tag.type === 'outlined' ? 'border border-gray-300' : ''} ${tag.type === 'soft' ? 'bg-gray-100' : ''}`}>
              {tag.label}
            </Tag>
          ))}
        </TagGroup>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Colors</h3>
        <TagGroup>
          {colors.map((color) => (
            <Tag key={color.name} className={color.class}>
              {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
            </Tag>
          ))}
        </TagGroup>
      </div>

      {/* With Icon */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">With Icon</h3>
        <TagGroup>
          {statuses.map((status) => (
            <Tag key={status.label} className={colors.find(c => c.name === status.color)?.class}>
              <status.icon className="w-4 h-4 mr-1" />
              {status.label}
            </Tag>
          ))}
        </TagGroup>
      </div>

      {/* Deletable */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Deletable</h3>
        <TagGroup>
          {tags.map((tag) => (
            <Tag 
              key={tag.id} 
              className={`${tag.type === 'outlined' ? 'border border-gray-300' : ''} ${tag.type === 'soft' ? 'bg-gray-100' : ''} flex items-center`}
            >
              {tag.label}
              <button
                onClick={() => handleRemove(tag.id)}
                className="ml-1 p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <X className="w-3 h-3" />
              </button>
            </Tag>
          ))}
        </TagGroup>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`import { TagGroup, Tag } from '@/aria-component/tag-group';

// Basic Tag
<TagGroup>
  <Tag>Basic</Tag>
</TagGroup>

// Colored Tag
<TagGroup>
  <Tag className="bg-blue-100 text-blue-800">
    Primary
  </Tag>
</TagGroup>

// With Icon
<TagGroup>
  <Tag className="bg-green-100 text-green-800">
    <CheckIcon className="w-4 h-4 mr-1" />
    Completed
  </Tag>
</TagGroup>

// Deletable
<TagGroup>
  {tags.map((tag) => (
    <Tag key={tag.id} className="flex items-center">
      {tag.label}
      <button onClick={() => handleRemove(tag.id)} className="ml-1 p-1">
        <X className="w-3 h-3" />
      </button>
    </Tag>
  ))}
</TagGroup>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Chip;