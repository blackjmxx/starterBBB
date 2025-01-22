'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const datePickerVariants = cva(
  'w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-pointer',
  {
    variants: {
      size: {
        default: 'w-72',
        sm: 'w-48',
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

const calendarDayVariants = cva(
  'h-10 w-10 rounded-full flex items-center justify-center text-sm',
  {
    variants: {
      type: {
        default: 'hover:bg-gray-100 dark:hover:bg-gray-700',
        selected: 'bg-blue-600 text-white',
        today: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
      }
    },
    defaultVariants: {
      type: 'default'
    }
  }
);

export interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof datePickerVariants> {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, size, value = null, onChange, ...props }, ref) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(value);
    const [currentMonth, setCurrentMonth] = React.useState(new Date());
    const [isOpen, setIsOpen] = React.useState(false);

    const daysInMonth = (date: Date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const startOfMonth = (date: Date) => {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    };

    const isToday = (date: Date) => {
      const today = new Date();
      return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
    };

    const isSelected = (date: Date) => {
      return selectedDate &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
    };

    const renderCalendar = () => {
      const days = [];
      const totalDays = daysInMonth(currentMonth);
      const startDay = startOfMonth(currentMonth);

      for (let i = 0; i < startDay; i++) {
        days.push(<div key={`empty-${i}`} className="h-10" />);
      }

      for (let day = 1; day <= totalDays; day++) {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const type = isSelected(date) ? 'selected' : isToday(date) ? 'today' : 'default';
        
        days.push(
          <button
            key={day}
            onClick={() => {
              const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              setSelectedDate(newDate);
              onChange?.(newDate);
              setIsOpen(false);
            }}
            className={cn(calendarDayVariants({ type }))}
          >
            {day}
          </button>
        );
      }

      return days;
    };

    const nextMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const prevMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    return (
      <div className="relative">
        <div className="relative">
          <input
            type="text"
            readOnly
            ref={ref}
            value={selectedDate ? formatDate(selectedDate) : ''}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(datePickerVariants({ size, className }))}
            {...props}
          />
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        {isOpen && (
          <div className="absolute mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h4 className="font-medium dark:text-white">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h4>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <div
                  key={day}
                  className="h-10 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export { DatePicker, datePickerVariants, calendarDayVariants };