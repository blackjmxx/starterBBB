import { useState } from 'react';
import { Layout } from './components/layout';
import { ComponentsShowcase } from './components/showcase/components-showcase';
import { DesignShowcase } from './components/showcase/design-showcase';

type Tab = 'design' | 'components';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('design');

  return (
    <Layout>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('design')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'design'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary hover:bg-secondary/80'
          }`}
        >
          Design System
        </button>
        <button
          onClick={() => setActiveTab('components')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'components'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary hover:bg-secondary/80'
          }`}
        >
          Components
        </button>
      </div>

      <div className="w-full">
        {activeTab === 'design' ? <DesignShowcase /> : <ComponentsShowcase />}
      </div>
    </Layout>
  );
}

export default App;