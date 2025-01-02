import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronRight,
  Circle,
  HelpCircle,
  Info,
  Mail,
  MoreVertical,
  Plus,
  Search,
  Settings,
  Star,
  User,
  X,
} from 'lucide-react';

export function IconShowcase() {
  const icons = [
    { icon: AlertCircle, name: 'AlertCircle' },
    { icon: ArrowRight, name: 'ArrowRight' },
    { icon: Check, name: 'Check' },
    { icon: ChevronRight, name: 'ChevronRight' },
    { icon: Circle, name: 'Circle' },
    { icon: HelpCircle, name: 'HelpCircle' },
    { icon: Info, name: 'Info' },
    { icon: Mail, name: 'Mail' },
    { icon: MoreVertical, name: 'MoreVertical' },
    { icon: Plus, name: 'Plus' },
    { icon: Search, name: 'Search' },
    { icon: Settings, name: 'Settings' },
    { icon: Star, name: 'Star' },
    { icon: User, name: 'User' },
    { icon: X, name: 'X' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {icons.map(({ icon: Icon, name }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center p-4 bg-card rounded-lg space-y-2"
        >
          <Icon className="h-6 w-6" />
          <span className="text-sm">{name}</span>
        </div>
      ))}
    </div>
  );
}