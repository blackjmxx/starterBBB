import React from 'react';
import { Icon } from '@iconify/react';

interface IconsProps {
  colors?: string[];
}

const Icons: React.FC<IconsProps> = ({ colors = ['#4B5563'] }) => {
  const icons = [
    { 
      icon: 'solar:smart-home-angle-bold-duotone',
      name: 'Smart Home',
      category: 'Navigation'
    },
    { 
      icon: 'solar:user-hand-up-bold',
      name: 'User Profile',
      category: 'User'
    },
    { 
      icon: 'solar:settings-minimalistic-bold',
      name: 'Settings',
      category: 'System'
    },
    { 
      icon: 'solar:bell-bing-bold',
      name: 'Notifications',
      category: 'Communication'
    },
    { 
      icon: 'solar:inbox-unread-bold',
      name: 'Inbox',
      category: 'Communication'
    },
    { 
      icon: 'solar:heart-bold',
      name: 'Favorite',
      category: 'Actions'
    },
    { 
      icon: 'solar:star-fall-bold',
      name: 'Star Fall',
      category: 'Actions'
    },
    { 
      icon: 'solar:magnifer-bold',
      name: 'Search',
      category: 'Actions'
    },
    { 
      icon: 'solar:calendar-mark-bold',
      name: 'Calendar',
      category: 'Date'
    },
    { 
      icon: 'solar:file-corrupted-bold',
      name: 'Document',
      category: 'Files'
    },
    { 
      icon: 'solar:folder-with-files-bold',
      name: 'Folder',
      category: 'Files'
    },
    { 
      icon: 'solar:gallery-wide-bold',
      name: 'Gallery',
      category: 'Media'
    },
    { 
      icon: 'solar:camera-minimalistic-bold',
      name: 'Camera',
      category: 'Media'
    },
    { 
      icon: 'solar:play-stream-bold',
      name: 'Video',
      category: 'Media'
    },
    { 
      icon: 'solar:music-notes-bold',
      name: 'Music',
      category: 'Media'
    },
    { 
      icon: 'solar:chat-square-like-bold',
      name: 'Chat',
      category: 'Communication'
    },
    { 
      icon: 'solar:chart-2-bold',
      name: 'Analytics',
      category: 'Data'
    },
    { 
      icon: 'solar:cloud-storage-bold',
      name: 'Cloud',
      category: 'Storage'
    },
    { 
      icon: 'solar:download-square-bold',
      name: 'Download',
      category: 'Actions'
    },
    { 
      icon: 'solar:upload-square-bold',
      name: 'Upload',
      category: 'Actions'
    },
    { 
      icon: 'solar:lock-password-bold',
      name: 'Security',
      category: 'Security'
    },
    { 
      icon: 'solar:shield-keyhole-bold',
      name: 'Protection',
      category: 'Security'
    },
    { 
      icon: 'solar:map-point-wave-bold',
      name: 'Location',
      category: 'Maps'
    },
    { 
      icon: 'solar:call-chat-bold',
      name: 'Phone',
      category: 'Communication'
    },
    { 
      icon: 'solar:share-circle-bold',
      name: 'Share',
      category: 'Social'
    },
    { 
      icon: 'solar:pen-new-square-bold',
      name: 'Edit',
      category: 'Actions'
    },
    { 
      icon: 'solar:trash-bin-trash-bold',
      name: 'Delete',
      category: 'Actions'
    },
    { 
      icon: 'solar:refresh-circle-bold',
      name: 'Refresh',
      category: 'Actions'
    },
    { 
      icon: 'solar:add-circle-bold',
      name: 'Add',
      category: 'Actions'
    },
    { 
      icon: 'solar:minus-circle-bold',
      name: 'Remove',
      category: 'Actions'
    }
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800/50 rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {icons.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg space-y-3 hover:shadow-lg transition-shadow"
          >
            <Icon 
              icon={item.icon} 
              className="w-10 h-10"
              style={{ color: colors[index % colors.length] }}
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.name}</span>
            <div className="flex flex-col items-center gap-1">
              <code className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{item.icon}</code>
              <span className="text-xs text-gray-400">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;