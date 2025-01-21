import React from 'react';
import { ChevronRight, Star, MoreVertical, Mail, Phone, MapPin } from 'lucide-react';

const List = () => {
  const basicItems = ['Inbox', 'Sent', 'Drafts', 'Trash'];
  
  const complexItems = [
    {
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '+1 234 567 890',
      location: 'San Francisco, CA',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      phone: '+1 345 678 901',
      location: 'New York, NY',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Emma Davis',
      email: 'emma.davis@example.com',
      phone: '+1 456 789 012',
      location: 'Austin, TX',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Basic List */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic List</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg divide-y dark:divide-gray-700">
          {basicItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
            >
              <span className="text-sm font-medium dark:text-white">{item}</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* List with Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">List with Icons</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg divide-y dark:divide-gray-700">
          {[
            { icon: Mail, label: 'Messages', count: 3 },
            { icon: Star, label: 'Favorites', count: 12 },
            { icon: Phone, label: 'Recent Calls', count: 5 }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium dark:text-white">{item.label}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Complex List */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Complex List</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg divide-y dark:divide-gray-700">
          {complexItems.map((item, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-medium dark:text-white">{item.name}</h4>
                    <div className="mt-1 space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Mail className="h-4 w-4" />
                        {item.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Phone className="h-4 w-4" />
                        {item.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic List
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
</List>

// With Icons
<List>
  <ListItem
    icon={<MailIcon />}
    label="Messages"
    count={3}
  />
</List>

// Complex List
<List>
  <ListItem
    avatar="/path/to/avatar.jpg"
    title="User Name"
    description="user@example.com"
    actions={<MoreVerticalIcon />}
  />
</List>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default List;