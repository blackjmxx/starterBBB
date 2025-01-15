import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Account', content: 'Account settings and preferences.' },
    { label: 'Password', content: 'Update your password and security settings.' },
    { label: 'Notifications', content: 'Manage your notification preferences.' },
    { label: 'Billing', content: 'View and manage billing information.' }
  ];

  return (
    <div className="space-y-8">
      {/* Basic Tabs */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Tabs</h3>
        <div>
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === index
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">{tabs[activeTab].content}</p>
          </div>
        </div>
      </div>

      {/* Centered Tabs */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Centered Tabs</h3>
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex justify-center space-x-8">
            {tabs.slice(0, 3).map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === index
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Boxed Tabs */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Boxed Tabs</h3>
        <div>
          <nav className="flex space-x-2">
            {tabs.slice(0, 3).map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === index
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Tabs
<Tabs>
  <Tab label="Account">Account content</Tab>
  <Tab label="Password">Password content</Tab>
</Tabs>

// Centered Tabs
<Tabs variant="centered">
  <Tab label="Tab 1">Content 1</Tab>
  <Tab label="Tab 2">Content 2</Tab>
</Tabs>

// Boxed Tabs
<Tabs variant="boxed">
  <Tab label="Tab 1">Content 1</Tab>
  <Tab label="Tab 2">Content 2</Tab>
</Tabs>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Tabs;