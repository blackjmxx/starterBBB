import { Radio, RadioField, RadioGroup, Radios } from '@/aria-component/radio-group';
import React from 'react';

const RadioDemo: React.FC = () => {
  return (
    <div className="space-y-8 p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Démonstration des Boutons Radio</h2>

      {/* Radio basique */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Radio Simple</h3>
        <RadioGroup defaultValue="sync">
          <Radios className="space-y-2">
            <Radio value="autoplay">Autoplay animated images</Radio>
            <Radio value="sync">Sync with system</Radio>
            <Radio value="enable">Enable</Radio>
            <Radio value="disabled">Disabled</Radio>
          </Radios>
        </RadioGroup>
      </div>

      {/* Radio avec Description */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Radio avec Description</h3>
        <RadioGroup defaultValue="sync">
          <Radios className="space-y-4">
            <RadioField>
              <Radio value="autoplay">Autoplay animated images</Radio>
            </RadioField>

            <RadioField>
              <Radio value="sync">Sync with system</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Adopts your system preference for reduced motion
              </div>
            </RadioField>

            <RadioField>
              <Radio value="approve">Approve</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Automatically plays animated images
              </div>
            </RadioField>

            <RadioField>
              <Radio value="disabled">Disabled</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Prevents animated images from playing automatically
              </div>
            </RadioField>
          </Radios>
        </RadioGroup>
      </div>

      {/* Radio Group avec Description */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Radio Group avec Description</h3>
        <RadioGroup defaultValue="sync">
          <div className="mb-4">
            <div className="text-sm font-medium">Autoplay animated images</div>
            <div className="text-sm text-gray-500">
              Select whether animated images should play automatically.
            </div>
          </div>
          <Radios className="space-y-4">
            <RadioField>
              <Radio value="sync">Sync with system</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Adopts your system preference for reduced motion
              </div>
            </RadioField>

            <RadioField>
              <Radio value="approve">Approve</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Automatically plays animated images
              </div>
            </RadioField>

            <RadioField>
              <Radio value="disabled">Disabled</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Prevents animated images from playing automatically
              </div>
            </RadioField>
          </Radios>
        </RadioGroup>
      </div>

      {/* Radio Label Placement */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Radio Label Placement</h3>
        <RadioGroup defaultValue="sync">
          <Radios className="space-y-4">
            <Radio value="autoplay" labelPlacement="end">Autoplay animated images</Radio>
            <Radio value="sync" labelPlacement="end">Sync with system</Radio>
            <Radio value="approve" labelPlacement="end">Approve</Radio>
            <Radio value="disabled" labelPlacement="end">Disabled</Radio>
          </Radios>
        </RadioGroup>
      </div>

      {/* Radio avec État Désactivé */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Radio avec État Désactivé</h3>
        <RadioGroup defaultValue="sync">
          <div className="mb-4">
            <div className="text-sm font-medium">Autoplay animated images</div>
            <div className="text-sm text-gray-500">
              Select whether animated images should play automatically.
            </div>
          </div>
          <Radios className="space-y-4">
            <RadioField>
              <Radio value="sync" isDisabled>Sync with system</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Adopts your system preference for reduced motion
              </div>
            </RadioField>

            <RadioField>
              <Radio value="approve" isDisabled>Approve</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Automatically plays animated images
              </div>
            </RadioField>

            <RadioField>
              <Radio value="disabled" isDisabled>Disabled</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Prevents animated images from playing automatically
              </div>
            </RadioField>
          </Radios>
        </RadioGroup>
      </div>

      {/* Radio Group avec État Lecture Seule */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Radio Group avec État Lecture Seule</h3>
        <RadioGroup defaultValue="sync" isReadOnly>
          <div className="mb-4">
            <div className="text-sm font-medium">Autoplay animated images</div>
            <div className="text-sm text-gray-500">
              Select whether animated images should play automatically.
            </div>
          </div>
          <Radios className="space-y-4">
            <RadioField>
              <Radio value="sync">Sync with system</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Adopts your system preference for reduced motion
              </div>
            </RadioField>

            <RadioField>
              <Radio value="approve">Approve</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Automatically plays animated images
              </div>
            </RadioField>

            <RadioField>
              <Radio value="disabled">Disabled</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Prevents animated images from playing automatically
              </div>
            </RadioField>
          </Radios>
        </RadioGroup>
      </div>

      {/* Radio Group avec Validation */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Radio Group avec Validation</h3>
        <RadioGroup defaultValue="sync" isRequired>
          <div className="mb-4">
            <div className="text-sm font-medium">Autoplay animated images</div>
            <div className="text-sm text-gray-500">
              Select whether animated images should play automatically.
            </div>
          </div>
          <Radios className="space-y-4">
            <RadioField>
              <Radio value="sync">Sync with system</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Adopts your system preference for reduced motion
              </div>
            </RadioField>

            <RadioField>
              <Radio value="approve">Approve</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Automatically plays animated images
              </div>
            </RadioField>

            <RadioField>
              <Radio value="disabled">Disabled</Radio>
              <div data-ui="description" className="text-sm text-gray-500">
                Prevents animated images from playing automatically
              </div>
            </RadioField>
          </Radios>
          <div className="text-sm text-red-500 mt-2">Please select one of these options.</div>
        </RadioGroup>
      </div>

      {/* Radio Group avec Layout Horizontal */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">Radio Group avec Layout Horizontal</h3>
        <RadioGroup defaultValue="tokyo" orientation="horizontal">
          <div className="mb-4">
            <div className="text-sm font-medium">Select your favorite city</div>
          </div>
          <Radios className="flex gap-6 flex-wrap">
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </Radios>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioDemo;