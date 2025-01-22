'use client';
import React from 'react';
import { usePalette } from '@/context/PaletteContext';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

const AccordionDemo = () => {
  const { colors } = usePalette();

  return (
    <div className="space-y-12">
      {/* Basic Accordion */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Basic Accordion</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem 
            value="item-1" 
            trigger="Is it accessible?"
            style={{ borderColor: colors[0] }}
          >
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionItem>
          <AccordionItem 
            value="item-2" 
            trigger="Is it styled?"
            style={{ borderColor: colors[1] }}
          >
            Yes. It comes with default styles that matches your theme.
          </AccordionItem>
          <AccordionItem 
            value="item-3" 
            trigger="Is it animated?"
            style={{ borderColor: colors[2] }}
          >
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionItem>
        </Accordion>
      </div>

      {/* Multiple */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Multiple</h3>
        <Accordion type="multiple" className="w-full">
          {[...Array(3)].map((_, i) => (
            <AccordionItem 
              key={`multi-${i}`} 
              value={`item-${i}`}
              trigger={`Section ${i + 1}`}
              style={{ borderColor: colors[i] }}
            >
              Content for section {i + 1}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Usage */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Usage</h3>
        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
{`<Accordion type="single" collapsible>
  <AccordionItem 
    value="item-1"
    trigger="Title"
  >
    Content
  </AccordionItem>
</Accordion>

<Accordion type="multiple">
  <AccordionItem 
    value="item-1"
    trigger="Title"
  >
    Content
  </AccordionItem>
</Accordion>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default AccordionDemo;