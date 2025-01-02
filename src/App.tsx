import { useState } from 'react';
import { Layout } from './components/layout';
import { ComponentsShowcase } from './components/showcase/components';
import { DesignShowcase } from './components/showcase/design';
import { Button } from './components/ui/button';
import { LayoutDashboard, User } from 'lucide-react';
import DashboardPage from './pages/dashboard';
import ProfilePage from './pages/profile';

type Tab = 'design' | 'components' | 'dashboard' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('design');

  const renderContent = () => {
    switch (activeTab) {
      case 'design':
        return <DesignShowcase />;
      case 'components':
        return <ComponentsShowcase />;
      case 'dashboard':
        return <DashboardPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <DesignShowcase />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={activeTab === 'design' ? 'default' : 'secondary'}
          onClick={() => setActiveTab('design')}
          className="flex-1 sm:flex-none"
        >
          Design System
        </Button>
        <Button
          variant={activeTab === 'components' ? 'default' : 'secondary'}
          onClick={() => setActiveTab('components')}
          className="flex-1 sm:flex-none"
        >
          Components
        </Button>
        <Button
          variant={activeTab === 'dashboard' ? 'default' : 'secondary'}
          onClick={() => setActiveTab('dashboard')}
          className="flex-1 sm:flex-none gap-2"
        >
          <LayoutDashboard className="h-4 w-4" />
          <span className="hidden sm:inline">Dashboard</span>
        </Button>
        <Button
          variant={activeTab === 'profile' ? 'default' : 'secondary'}
          onClick={() => setActiveTab('profile')}
          className="flex-1 sm:flex-none gap-2"
        >
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Profile</span>
        </Button>
      </div>

      <div className="w-full">
        {renderContent()}
      </div>
    </Layout>
  );
}