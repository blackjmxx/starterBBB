import React, { useState } from 'react';
import { Coffee, PanelsTopLeft, BarChart3, Users, FileText, Settings, LogOut, Bell, Search, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from './context/ThemeContext';
import { PaletteProvider } from './context/PaletteContext';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';
import WorldMap from './components/WorldMap';
import FoundationTokens from './components/FoundationTokens';

interface ColorPalette {
  id: string;
  colors: string[];
  name: string;
}

function generateRandomColor(): string {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function generateRandomPalette(count: number): string[] {
  return Array.from({ length: count }, () => generateRandomColor());
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const [colorCount, setColorCount] = useState(6);
  const [activePage, setActivePage] = useState('overview');
  const [activePalette, setActivePalette] = useState<ColorPalette>({
    id: '1',
    colors: ['#d7d0c8', '#c8c6af', '#336699', '#be6e46', '#aa4586', '#000100'],
    name: 'Default Palette'
  });

  const regeneratePalette = () => {
    setActivePalette({
      id: Date.now().toString(),
      colors: generateRandomPalette(colorCount),
      name: `Random Palette ${Date.now()}`
    });
  };

  const renderContent = () => {
    if (activePage === 'foundation') {
      return <FoundationTokens theme={theme} colors={activePalette.colors} />;
    }

    return (
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {[
            { title: 'Current MRR', value: '$12.4k', color: activePalette.colors[2] },
            { title: 'Current Customers', value: '16,601', color: activePalette.colors[3] },
            { title: 'Active Customers', value: '33%', color: activePalette.colors[4] },
            { title: 'Churn Rate', value: '2%', color: activePalette.colors[5] }
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl text-white"
              style={{ backgroundColor: stat.color }}
            >
              <h3 className="text-sm font-medium opacity-80">{stat.title}</h3>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium dark:text-white">Trend</h3>
              <div className="flex items-center gap-4">
                {activePalette.colors.slice(0, 3).map((color, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-sm dark:text-gray-200">{['MRR', 'One-time', 'Other'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-64">
              <BarChart colors={activePalette.colors} />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium dark:text-white">Sales Distribution</h3>
              <div className="flex items-center gap-4">
                {activePalette.colors.slice(0, 3).map((color, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-sm dark:text-gray-200">{['Direct', 'Affiliate', 'Partner'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-64">
              <DonutChart colors={activePalette.colors} />
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
              {[
                { name: 'Banking', amount: '$1,544' },
                { name: 'Marketing', amount: '$442' },
                { name: 'Development', amount: '$1,821' }
              ].map((item, i) => (
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
              {[
                { email: 'sarah.smith@example.com', issue: 'Login Issue', status: 'Open', statusColor: 'green' },
                { email: 'john.doe@example.com', issue: 'Billing Inquiry', status: 'Pending', statusColor: 'yellow' }
              ].map((ticket, i) => (
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
              {activePalette.colors.slice(0, 2).map((color, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-sm dark:text-gray-200">{['Active', 'New'][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64">
            <WorldMap colors={activePalette.colors} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <PaletteProvider colors={activePalette.colors}>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 p-6 dark:bg-gray-800" style={{ backgroundColor: theme === 'light' ? activePalette.colors[0] : undefined }}>
            <div className="flex items-center gap-2 mb-8">
              <Coffee className="h-8 w-8" style={{ color: activePalette.colors[2] }} />
              <span className="font-bold text-xl dark:text-white">Nkunu</span>
            </div>

            <nav className="space-y-1">
              {[
                { icon: PanelsTopLeft, text: 'Overview', id: 'overview' },
                { icon: Palette, text: 'Foundation', id: 'foundation' },
                { icon: BarChart3, text: 'Transactions', id: 'transactions' },
                { icon: Users, text: 'Customers', id: 'customers' },
                { icon: FileText, text: 'Reports', id: 'reports' },
                { icon: Settings, text: 'Settings', id: 'settings' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activePage === item.id
                      ? 'bg-white dark:bg-gray-700'
                      : 'hover:bg-white/60 dark:hover:bg-gray-700/60'
                  }`}
                >
                  <item.icon className="h-5 w-5" style={{ color: activePage === item.id ? activePalette.colors[2] : undefined }} />
                  <span className={activePage === item.id ? `text-[${activePalette.colors[2]}]` : 'dark:text-gray-200'}>
                    {item.text}
                  </span>
                </button>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <button className="flex items-center gap-3 hover:opacity-80 transition-opacity dark:text-gray-200">
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="relative w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-6">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {theme === 'light' ? (
                      <Moon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                    ) : (
                      <Sun className="h-5 w-5 text-gray-200" />
                    )}
                  </button>
                  <button className="relative">
                    <Bell className="h-6 w-6 text-gray-600 dark:text-gray-200" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                      3
                    </span>
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" />
                    <div>
                      <p className="text-sm font-medium dark:text-white">John Doe</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-8">
              {renderContent()}
            </main>
          </div>
        </div>

        {/* Color Control Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <label className="text-sm font-medium dark:text-white">Colors:</label>
              <input
                type="range"
                min="2"
                max="7"
                value={colorCount}
                onChange={(e) => setColorCount(parseInt(e.target.value))}
                className="w-48"
              />
              <span className="text-sm dark:text-white">{colorCount}</span>
            </div>
            <div className="flex gap-4">
              {activePalette.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-lg"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <button
              onClick={regeneratePalette}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Generate Random Palette
            </button>
          </div>
        </div>
      </div>
    </PaletteProvider>
  );
}

export default App;