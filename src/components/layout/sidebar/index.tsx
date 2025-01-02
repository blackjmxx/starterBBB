import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  BarChart3,
  Mail,
  Calendar
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: Users, label: 'Users', href: '#' },
  { icon: FileText, label: 'Documents', href: '#' },
  { icon: Calendar, label: 'Calendar', href: '#' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: Mail, label: 'Messages', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export function Sidebar({ className, onClose }: SidebarProps) {
  return (
    <aside className={cn(
      "w-[280px] border-r bg-card min-h-[calc(100vh-4rem)]",
      className
    )}>
      <ScrollArea className="h-full py-6">
        <nav className="space-y-2 px-4">
          {menuItems.map(({ icon: Icon, label, href }) => (
            <Button
              key={label}
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
              onClick={onClose}
            >
              <a href={href}>
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}