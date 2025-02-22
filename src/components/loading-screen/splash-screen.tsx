'use client';

import { AnimateLogo1 } from '@/components/animate/animate-logo';

// ----------------------------------------------------------------------

interface Props {
  portal?: boolean;
  className?: string;
}

export function SplashScreen({ className, ...other }: Props) {
  const content = (
    <div className="overflow-hidden">
      <div
        className={`fixed inset-0 z-[9998] flex items-center justify-center bg-background ${
          className || ''
        }`}
        {...other}
      >
        <AnimateLogo1 />
      </div>
    </div>
  );

  return content;
}
