import { Button } from '@/components/ui/button';
import { 
  Home,
  Settings,
  Users,
  FileText,
  HelpCircle,
  Mail,
  Bell,
  Calendar,
  BarChart2
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '#' },
  { icon: Users, label: 'Users', href: '#' },
  { icon: FileText, label: 'Documents', href: '#' },
  { icon: Calendar, label: 'Calendar', href: '#' },
  { icon: BarChart2, label: 'Analytics', href: '#' },
  { icon: Bell, label: 'Notifications', href: '#' },
  { icon: Mail, label: 'Messages', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
  { icon: HelpCircle, label: 'Help', href: '#' },
];

export function DrawerContent() {
  return (
    <div className="p-4 space-y-2">
      {menuItems.map(({ icon: Icon, label, href }) => (
        <Button
          key={label}
          variant="ghost"
          className="w-full justify-start gap-2"
          asChild
        >
          <a href={href}>
            <Icon className="h-4 w-4" />
            {label}
          </a>
        </Button>
      ))}
    </div>
  );
}