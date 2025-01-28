'use client';
import { Disclosure, DisclosureControl, DisclosureGroup, DisclosurePanel } from '@/aria-component/disclosure';
import { usePalette } from '@/context/PaletteContext';

const Accordion = () => {
  const { colors } = usePalette();

  return (
    <div className="space-y-12">
      {/* Basic Accordion */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Basic Accordion</h3>
        <DisclosureGroup className="w-full">
          <Disclosure>
            <DisclosureControl style={{ borderColor: colors[0] }}>Is it accessible?</DisclosureControl>
            <DisclosurePanel>Yes. It adheres to the WAI-ARIA design pattern.</DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureControl style={{ borderColor: colors[1] }}>Is it styled?</DisclosureControl>
            <DisclosurePanel>Yes. It comes with default styles that matches your theme.</DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureControl style={{ borderColor: colors[2] }}>Is it animated?</DisclosureControl>
            <DisclosurePanel>Yes. It's animated by default, but you can disable it if you prefer.</DisclosurePanel>
          </Disclosure>
        </DisclosureGroup>
      </div>

      {/* Multiple */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Multiple</h3>
        <DisclosureGroup className="w-full">
          {[...Array(3)].map((_, i) => (
            <Disclosure key={`multi-${i}`}>
              <DisclosureControl style={{ borderColor: colors[i] }}>Section {i + 1}</DisclosureControl>
              <DisclosurePanel>Content for section {i + 1}</DisclosurePanel>
            </Disclosure>
          ))}
        </DisclosureGroup>
      </div>
    </div>
  );
};

export default Accordion;