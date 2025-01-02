import { useState } from 'react';
import { ComponentNavigation } from './navigation-menu';
import { ComponentSection } from './sections/component-section';
import { ColorSystem } from './sections/color-system';
import { FormControls } from './sections/form-controls';
import { NavigationComponents } from './sections/navigation';
import { PaginationComponents } from './sections/pagination';
import { FeedbackComponents } from './sections/feedback';
import { DataDisplay } from './sections/data-display';
import { UtilityComponents } from './sections/utility';
import { InputComponents } from './sections/inputs';
import { AlertComponents } from './sections/alerts';
import { AvatarComponents } from './sections/avatars';
import { BadgeComponents } from './sections/badges';
import { CheckboxComponents } from './sections/checkboxes';
import { BreadcrumbsComponents } from './sections/breadcrumbs';
import { DrawerComponents } from './sections/drawers';
import { ButtonComponents } from './sections/buttons';
import { StepperComponents } from './sections/steppers';
import { Button } from '@/components/ui/button';

export function ComponentsShowcase() {
  const sections = [
    { id: 'buttons', label: 'Buttons', component: ButtonComponents },
    { id: 'colors', label: 'Colors', component: ColorSystem },
    { id: 'forms', label: 'Forms', component: FormControls },
    { id: 'navigation', label: 'Navigation', component: NavigationComponents },
    { id: 'pagination', label: 'Pagination', component: PaginationComponents },
    { id: 'breadcrumbs', label: 'Breadcrumbs', component: BreadcrumbsComponents },
    { id: 'drawers', label: 'Drawers', component: DrawerComponents },
    { id: 'steppers', label: 'Steppers', component: StepperComponents },
    { id: 'data', label: 'Data Display', component: DataDisplay },
    { id: 'feedback', label: 'Feedback', component: FeedbackComponents },
    { id: 'utility', label: 'Utility', component: UtilityComponents },
    { id: 'inputs', label: 'Inputs', component: InputComponents },
    { id: 'alerts', label: 'Alerts', component: AlertComponents },
    { id: 'avatars', label: 'Avatars', component: AvatarComponents },
    { id: 'badges', label: 'Badges', component: BadgeComponents },
    { id: 'checkboxes', label: 'Checkboxes', component: CheckboxComponents }
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Design System Components</h2>
        
        <div className="mb-8">
          <ComponentNavigation />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {sections.map(({ id, label }) => (
            <Button
              key={id}
              variant={activeSection === id ? "default" : "ghost"}
              onClick={() => setActiveSection(id)}
              className="capitalize"
            >
              {label}
            </Button>
          ))}
        </div>

        <div className="grid gap-8">
          {sections.map(({ id, component: Component }) => (
            activeSection === id && <Component key={id} />
          ))}
        </div>
      </section>
    </div>
  );
}