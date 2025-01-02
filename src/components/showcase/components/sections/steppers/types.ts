export type StepperVariant = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type StepperOrientation = 'horizontal' | 'vertical';
export type StepperSize = 'sm' | 'md' | 'lg';
export type ConnectorStyle = 'solid' | 'dashed' | 'dotted';
export type ConnectorThickness = 'thin' | 'medium' | 'thick';
export type ConnectorSpacing = 'tight' | 'normal' | 'wide';

export interface StepperProps {
  variant?: StepperVariant;
  orientation?: StepperOrientation;
  size?: StepperSize;
  connectorStyle?: ConnectorStyle;
  connectorThickness?: ConnectorThickness;
  connectorSpacing?: ConnectorSpacing;
  showLabels?: boolean;
  alternativeLabel?: boolean;
}

export interface StepIconProps {
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
  variant?: StepperVariant;
  size?: StepperSize;
}

export interface StepConnectorProps {
  active: boolean;
  completed: boolean;
  variant?: StepperVariant;
  orientation?: StepperOrientation;
  style?: ConnectorStyle;
  thickness?: ConnectorThickness;
  spacing?: ConnectorSpacing;
}