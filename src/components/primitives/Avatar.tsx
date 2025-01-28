import { Avatar, AvatarBadge, AvatarGroup } from '@/aria-component/avatar';
import { Bell, User } from 'lucide-react';

const AvatarDemo = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const;
  const sizeClasses: Record<typeof sizes[number], string> = {
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12',
    xl: 'size-16'
  };
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
        alt: 'John Doe'
      }
    },
    {
      type: 'icon',
      props: {
        alt: 'User Icon',
        children: <AvatarBadge badge={<User className="size-full" />} />
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
                className={sizeClasses[size]}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Size example"
              />
              <p className="mt-2 block text-sm text-muted-foreground">
                {size}
              </p>
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
              <Avatar className={sizeClasses.lg} {...variant.props} />
              <p className="mt-2 block text-sm capitalize">
                {variant.type}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rounded Avatars */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Rounded Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar
            className={`${sizeClasses.lg} rounded-full`}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Rounded Avatar"
          />
          <Avatar
            className={`${sizeClasses.lg} rounded-md`}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Rounded Avatar"
          />
          <Avatar
            className={`${sizeClasses.lg} rounded-none`}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Rounded Avatar"
          />
        </div>
      </div>

      {/* Avatar with Badge */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Avatar with Badge</h3>
        <div className="flex items-center gap-4">
          <Avatar className={sizeClasses.lg} alt="Avatar with Badge">
            <AvatarBadge badge={<Bell className="size-full" />} />
          </Avatar>
          <Avatar
            className={sizeClasses.lg}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Avatar with Badge"
          >
            <AvatarBadge badge={<div className="bg-green-500 border-2 border-white w-full h-full rounded-full" />} />
          </Avatar>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Group</h3>
        <AvatarGroup>
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 1" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 2" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 3" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 4" />
          <Avatar alt="User 5">+2</Avatar>
        </AvatarGroup>
      </div>

      {/* Avatar Groups with Reverse Overlap */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Group with Reverse Overlap</h3>
        <AvatarGroup className="flex-row-reverse justify-end">
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 1" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 2" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 3" />
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 4" />
          <Avatar alt="User 5">+2</Avatar>
        </AvatarGroup>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`import { Avatar, AvatarBadge, AvatarGroup } from '@/aria-component/avatar';

// Basic Avatar
<Avatar src="path/to/image.jpg" alt="User Name" />

// Avatar with Badge
<Avatar src="path/to/image.jpg" alt="User Name">
  <AvatarBadge badge={<div className="bg-green-500 w-full h-full rounded-full" />} />
</Avatar>

// Avatar Group
<AvatarGroup>
  <Avatar src="path/to/image1.jpg" alt="User 1" />
  <Avatar src="path/to/image2.jpg" alt="User 2" />
  <Avatar src="path/to/image3.jpg" alt="User 3" />
</AvatarGroup>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default AvatarDemo;