'use client';

import { createPortal } from 'react-dom';
import { ProgressBar } from 'react-aria-components';
import './loading-screen.css';

// ----------------------------------------------------------------------

type Props = {
  portal?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export function LoadingScreen({ portal, className, style }: Props) {
  const content = (
    <div
      className={`loading-screen ${className || ''}`}
      style={{
        padding: '0 1.25rem',
        width: '100%',
        flexGrow: 1,
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <ProgressBar
        className="loading-bar"
        value={65}
        maxValue={100}
        aria-label="Chargement..."
        isIndeterminate
      >
        <div className="loading-bar-progress" />
      </ProgressBar>
    </div>
  );

  if (portal) {
    return createPortal(content, document.body);
  }

  return content;
}
