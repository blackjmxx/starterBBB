import { DatePicker } from '@/components/ui/DatePicker';

const DatePickerDemo = () => {
  return (
    <div className="space-y-8">
      {/* Basic Date Picker */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Date Picker</h3>
        <DatePicker placeholder="Select a date" />
      </div>

      {/* Range Picker */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Range Picker</h3>
        <div className="flex items-center gap-4">
          <DatePicker 
            size="sm" 
            placeholder="Start date" 
          />
          <span className="text-gray-500 dark:text-gray-400">to</span>
          <DatePicker 
            size="sm" 
            placeholder="End date" 
          />
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`// Basic DatePicker
<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select a date"
/>

// Range Picker
<DateRangePicker
  startDate={startDate}
  endDate={endDate}
  onChange={({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DatePickerDemo;