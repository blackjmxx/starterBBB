import { User, LucideIcon } from 'lucide-react';

const Avatar = () => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-20 h-20 text-lg'
  };

  // Définir le type pour les variants
  type Variant = {
    type: 'image' | 'initials' | 'icon';
    src?: string;
    text?: string;
    icon?: LucideIcon;
  }

  const variants: Variant[] = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      type: 'initials',
      text: 'JD'
    },
    {
      type: 'icon',
      icon: User
    }
  ];

  return (
    <div className="space-y-8">
      {/* Size Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Sizes</h3>
        <div className="flex items-center gap-4">
          {Object.entries(sizes).map(([size, classes]) => (
            <div key={size} className="text-center">
              <div
                className={`${classes} rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden`}
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Type Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Types</h3>
        <div className="flex items-center gap-4">
          {variants.map((variant, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {variant.type === 'image' && (
                  <img
                    src={variant.src}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                )}
                {variant.type === 'initials' && (
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    {variant.text}
                  </span>
                )}
                {variant.type === 'icon' && variant.icon && (
                  <variant.icon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                )}
              </div>
              <span className="mt-2 text-sm text-gray-500 dark:text-gray-400 capitalize">
                {variant.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Group */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Group</h3>
        <div className="flex -space-x-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center ring-2 ring-white dark:ring-gray-800 overflow-hidden"
            >
              {i === 3 ? (
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">+3</span>
              ) : (
                <img
                  src={`https://images.unsplash.com/photo-${1472099645785 + i}-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                  alt={`Avatar ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Image Avatar
<Avatar
  src="path/to/image.jpg"
  alt="User name"
  size="md"
/>

// Initials Avatar
<Avatar
  initials="JD"
  size="md"
/>

// Icon Avatar
<Avatar
  icon={<UserIcon />}
  size="md"
/>

// Avatar Group
<AvatarGroup max={4}>
  <Avatar src="user1.jpg" />
  <Avatar src="user2.jpg" />
  <Avatar src="user3.jpg" />
  <Avatar src="user4.jpg" />
  <Avatar src="user5.jpg" />
</AvatarGroup>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Avatar;