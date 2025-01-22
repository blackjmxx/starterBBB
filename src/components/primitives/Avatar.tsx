import { Avatar, AvatarGroup } from '@/components/ui/Avatar';
import { User } from 'lucide-react';

const AvatarDemo = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'];
  const variants = [
    {
      type: 'image',
      props: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'Avatar'
      }
    },
    {
      type: 'initials',
      props: {
        initials: 'JD'
      }
    },
    {
      type: 'icon',
      props: {
        icon: User
      }
    }
  ];

  return (
    <div className="space-y-8">
      {/* Size Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Sizes</h3>
        <div className="flex items-center gap-4">
          {sizes.map(size => (
            <div key={size} className="text-center">
              <Avatar
                size={size}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Size example"
              />
              <span className="mt-2 block text-sm text-muted-foreground">
                {size}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Type Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Types</h3>
        <div className="flex items-center gap-4">
          {variants.map((variant, index) => (
            <div key={index} className="text-center">
              <Avatar size="lg" {...variant.props} />
              <span className="mt-2 block text-sm text-muted-foreground capitalize">
                {variant.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Group</h3>
        <AvatarGroup max={4}>
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 1" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 2" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 3" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 4" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 5" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 6" />
        </AvatarGroup>
      </div>
    </div>
  );
};

export default AvatarDemo;