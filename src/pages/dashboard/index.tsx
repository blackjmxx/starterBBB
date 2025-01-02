import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { BarChart3, Users, FileText, Settings } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '1,234', icon: Users },
  { label: 'Total Revenue', value: '$12,345', icon: BarChart3 },
  { label: 'Active Projects', value: '45', icon: FileText },
  { label: 'System Health', value: '98%', icon: Settings },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">{label}</p>
                  <p className="text-2xl font-bold mt-1">{value}</p>
                </div>
                <Icon className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}