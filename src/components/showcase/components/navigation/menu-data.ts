import { 
  Square,
  Type,
  Palette,
  TextCursor,
  CheckSquare,
  Circle,
  ChevronsUpDown,
  SlidersHorizontal,
  ToggleLeft,
  AlignLeft,
  ChevronRight,
  Menu,
  ChevronsRight,
  LayoutGrid,
  User,
  Tag,
  CreditCard,
  Table,
  AlertCircle,
  Loader2,
  Bell,
  PanelLeftClose,
  MessageSquare,
  Calendar,
  Terminal,
  LineChart // Changed from Timeline to LineChart
} from 'lucide-react';

export const navigationData = {
  core: [
    { name: 'Button', icon: Square },
    { name: 'Typography', icon: Type },
    { name: 'Colors', icon: Palette },
  ],
  form: [
    { name: 'Input', icon: TextCursor },
    { name: 'Checkbox', icon: CheckSquare },
    { name: 'Radio', icon: Circle },
    { name: 'Select', icon: ChevronsUpDown },
    { name: 'Slider', icon: SlidersHorizontal },
    { name: 'Switch', icon: ToggleLeft },
    { name: 'Textarea', icon: AlignLeft },
  ],
  navigation: [
    { name: 'Breadcrumb', icon: ChevronRight },
    { name: 'Menu', icon: Menu },
    { name: 'Pagination', icon: ChevronsRight },
    { name: 'Tabs', icon: LayoutGrid },
  ],
  display: [
    { name: 'Avatar', icon: User },
    { name: 'Badge', icon: Tag },
    { name: 'Card', icon: CreditCard },
    { name: 'Table', icon: Table },
  ],
  feedback: [
    { name: 'Alert', icon: AlertCircle },
    { name: 'Progress', icon: Loader2 },
    { name: 'Toast', icon: Bell },
  ],
  overlay: [
    { name: 'Dialog', icon: Square },
    { name: 'Drawer', icon: PanelLeftClose },
    { name: 'Popover', icon: MessageSquare },
  ],
  utils: [
    { name: 'Calendar', icon: Calendar },
    { name: 'Command', icon: Terminal },
    { name: 'Timeline', icon: LineChart }, // Using LineChart instead of Timeline
  ],
} as const;