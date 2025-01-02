import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function AccordionComponents() {
  const [selectedVariant, setSelectedVariant] = useState('default');

  const variants = {
    default: '',
    success: 'border-success',
    error: 'border-error',
    warning: 'border-warning',
    info: 'border-info'
  };

  const simpleItems = [
    {
      trigger: 'Accordion 1',
      content: 'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis.'
    },
    {
      trigger: 'Accordion 2',
      content: 'Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia.'
    },
    {
      trigger: 'Accordion 3',
      content: 'Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat.'
    }
  ];

  const controlledItems = [
    {
      trigger: 'The Future of Renewable Energy',
      content: 'Innovations and challenges in renewable energy development, including solar, wind, and hydroelectric power.'
    },
    {
      trigger: 'AI in Modern Healthcare',
      content: 'The impact of artificial intelligence on healthcare delivery, diagnosis, and patient care.'
    },
    {
      trigger: 'Climate Change Effects',
      content: 'Understanding the global impact of climate change on food security and agriculture.'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Accordions</CardTitle>
          <Select value={selectedVariant} onValueChange={setSelectedVariant}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(variants).map((variant) => (
                <SelectItem key={variant} value={variant} className="capitalize">
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        {/* Simple Accordion */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Simple Accordion</h3>
          <Accordion type="single" collapsible className={variants[selectedVariant as keyof typeof variants]}>
            {simpleItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Controlled Accordion */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Controlled Accordion</h3>
          <Accordion 
            type="multiple"
            className={variants[selectedVariant as keyof typeof variants]}
          >
            {controlledItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}