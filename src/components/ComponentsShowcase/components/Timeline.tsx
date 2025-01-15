import React from 'react';
import { Check, X, AlertTriangle, Clock } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      title: 'Order placed',
      description: 'Order #12345 was placed successfully',
      date: '2 hours ago',
      status: 'success',
      icon: Check
    },
    {
      title: 'Payment processing',
      description: 'Payment is being processed',
      date: '1 hour ago',
      status: 'pending',
      icon: Clock
    },
    {
      title: 'Shipping delayed',
      description: 'Package delivery is delayed due to weather conditions',
      date: '30 minutes ago',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      title: 'Payment failed',
      description: 'Unable to process payment. Please try again.',
      date: '15 minutes ago',
      status: 'error',
      icon: X
    }
  ];

  const getStatusColors = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'error':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Basic Timeline */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative pl-12">
                <div className={`absolute left-0 p-2 rounded-full ${getStatusColors(event.status)}`}>
                  <event.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium dark:text-white">{event.title}</h4>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{event.description}</p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating Timeline */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Alternating Timeline</h3>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} ${
                    index % 2 === 1 ? 'text-right' : ''
                  }`}
                >
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? 'right-[-0.5rem]' : 'left-[-0.5rem]'
                    } top-0 p-2 rounded-full ${getStatusColors(event.status)}`}
                    style={{ transform: 'translateX(50%)' }}
                  >
                    <event.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium dark:text-white">{event.title}</h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{event.description}</p>
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compact Timeline */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Compact Timeline</h3>
        <div className="space-y-2">
          {events.map((event, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`p-1.5 rounded-full ${getStatusColors(event.status)}`}>
                <event.icon className="h-3 w-3" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium dark:text-white">{event.title}</h4>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{event.date}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic Timeline
<Timeline>
  <TimelineItem
    title="Event Title"
    description="Event description"
    date="2 hours ago"
    status="success"
  />
</Timeline>

// Alternating Timeline
<Timeline variant="alternating">
  <TimelineItem
    title="Event Title"
    description="Event description"
    date="2 hours ago"
    status="success"
  />
</Timeline>

// Compact Timeline
<Timeline variant="compact">
  <TimelineItem
    title="Event Title"
    description="Event description"
    date="2 hours ago"
    status="success"
  />
</Timeline>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Timeline;