import { List, ListItem } from '@/components/ui/list';
import { Mail, MoreVertical, Phone, Star } from 'lucide-react';

const ListDemo = () => {
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
        <List variant="basic">
          {basicItems.map((item, index) => (
            <ListItem key={index} variant="basic">
              {item}
            </ListItem>
          ))}
        </List>
      </div>

      {/* List with Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">List with Icons</h3>
        <List variant="icon">
          {[
            { icon: Mail, label: 'Messages', count: 3 },
            { icon: Star, label: 'Favorites', count: 12 },
            { icon: Phone, label: 'Recent Calls', count: 5 }
          ].map((item, index) => (
            <ListItem
              key={index}
              variant="icon"
              icon={item.icon}
              count={item.count}
            >
              {item.label}
            </ListItem>
          ))}
        </List>
      </div>

      {/* Complex List */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Complex List</h3>
        <List variant="complex">
          {complexItems.map((item, index) => (
            <ListItem
              key={index}
              variant="complex"
              avatar={item.avatar}
              title={item.name}
              email={item.email}
              phone={item.phone}
              location={item.location}
            >
              <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <MoreVertical className="h-5 w-5" />
              </button>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ListDemo;