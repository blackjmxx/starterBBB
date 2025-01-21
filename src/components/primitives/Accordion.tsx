import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = () => {
  const [openSection, setOpenSection] = useState<string | null>('default');

  const variants = [
    {
      title: 'Default',
      id: 'default',
      content: 'This is the default accordion style with a simple animation and border.'
    },
    {
      title: 'Elevated',
      id: 'elevated',
      content: 'An elevated variant with shadow and rounded corners for more emphasis.'
    },
    {
      title: 'Bordered',
      id: 'bordered',
      content: 'A bordered variant that maintains a consistent width and clear boundaries.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className={`rounded-lg overflow-hidden ${
              variant.id === 'elevated' ? 'shadow-lg' : variant.id === 'bordered' ? 'border' : ''
            }`}
          >
            <button
              onClick={() => setOpenSection(openSection === variant.id ? null : variant.id)}
              className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800"
            >
              <span className="font-medium dark:text-white">{variant.title}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openSection === variant.id ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                openSection === variant.id ? 'max-h-40' : 'max-h-0'
              } overflow-hidden`}
            >
              <div className="p-4 bg-white dark:bg-gray-800 dark:text-gray-200">
                {variant.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`<Accordion>
  <AccordionItem title="Section 1">
    Content for section 1
  </AccordionItem>
  <AccordionItem title="Section 2">
    Content for section 2
  </AccordionItem>
</Accordion>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Accordion;