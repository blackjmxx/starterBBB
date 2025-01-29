'use client';

import BarChart from '@/components/BarChart';
import DonutChart from '@/components/DonutChart';
import WorldMap from '@/components/WorldMap';
import { Stat } from '@/components/dashboard/Stat';
import { usePalette } from '@/context/PaletteContext';

interface Transaction {
  name: string;
  amount: string;
}

interface Ticket {
  email: string;
  issue: string;
  status: string;
  statusColor: string;
}

export default function DashboardPage() {
  const { colors } = usePalette();
  const primaryColor = colors[2];

  const stats = [
    { title: 'Current MRR', value: '$12.4k', color: colors[2] },
    { title: 'Current Customers', value: '16,601', color: colors[3] },
    { title: 'Active Customers', value: '33%', color: colors[4] },
    { title: 'Churn Rate', value: '2%', color: colors[5] }
  ];

  const transactions: Transaction[] = [
    { name: 'Banking', amount: '$1,544' },
    { name: 'Marketing', amount: '$442' },
    { name: 'Development', amount: '$1,821' }
  ];

  const tickets: Ticket[] = [
    { email: 'sarah.smith@example.com', issue: 'Login Issue', status: 'Open', statusColor: 'green' },
    { email: 'john.doe@example.com', issue: 'Billing Inquiry', status: 'Pending', statusColor: 'yellow' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Stat
            key={i}
            title={stat.title}
            value={stat.value}
            color={stat.color}
            variant="colored"
          />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium dark:text-white">Trend</h3>
            <div className="flex items-center gap-4">
              {colors.slice(0, 3).map((color: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-sm dark:text-gray-200">{['MRR', 'One-time', 'Other'][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64">
            <BarChart colors={colors} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium dark:text-white">Sales Distribution</h3>
            <div className="flex items-center gap-4">
              {colors.slice(0, 3).map((color: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-sm dark:text-gray-200">{['Direct', 'Affiliate', 'Partner'][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64">
            <DonutChart colors={colors} />
          </div>
        </div>
      </div>

      {/* Lists Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium dark:text-white">Transactions</h3>
            <button className="text-sm text-indigo-600 dark:text-indigo-400">View all</button>
          </div>
          <div className="space-y-3">
            {transactions.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="font-medium dark:text-white">{item.name}</span>
                <span className="text-gray-600 dark:text-gray-300">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium dark:text-white">Support Tickets</h3>
            <select className="text-sm border rounded-md px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="space-y-3">
            {tickets.map((ticket, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="text-sm font-medium dark:text-white">{ticket.email}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{ticket.issue}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full bg-${ticket.statusColor}-100 dark:bg-${ticket.statusColor}-900 text-${ticket.statusColor}-800 dark:text-${ticket.statusColor}-100`}>
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demographics Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium dark:text-white">Customer Demographics</h3>
          <div className="flex items-center gap-4">
            {colors.slice(0, 2).map((color: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-sm dark:text-gray-200">{['Active', 'New'][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-64">
          <WorldMap colors={colors} />
        </div>
      </div>
    </div>
  );
}