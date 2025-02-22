import { m } from 'framer-motion';

// ----------------------------------------------------------------------

interface AnimateLogoProps {
  logo?: React.ReactNode;
  className?: string;
}

export function AnimateLogo1({ logo, className, ...other }: AnimateLogoProps) {
  return (
    <div
      className={`inline-flex relative items-center justify-center w-[120px] h-[120px] ${className || ''}`}
      {...other}
    >
      <m.div
        className="inline-flex"
        animate={{ scale: [1, 0.9, 0.9, 1, 1], opacity: [1, 0.48, 0.48, 1, 1] }}
        transition={{
          duration: 2,
          repeatDelay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {logo ?? <img src="/logo.png" alt="logo" className="w-16 h-16" />}
      </m.div>

      <m.div
        animate={{
          scale: [1.6, 1, 1, 1.6, 1.6],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        className="absolute w-[calc(100%-20px)] h-[calc(100%-20px)] border-[3px] border-black/25"
      />

      <m.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        className="absolute w-full h-full border-[8px] border-black/25"
      />
    </div>
  );
}

// ----------------------------------------------------------------------

export function AnimateLogo2({ logo, className, ...other }: AnimateLogoProps) {
  return (
    <div
      className={`inline-flex relative items-center justify-center w-24 h-24 ${className || ''}`}
      {...other}
    >
      {logo ?? <img src="/logo.png" alt="logo" className="z-[9]" />}

      <m.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
        className="absolute w-full h-full opacity-[0.16] rounded-full bg-gradient-to-tr from-transparent from-50% to-black to-100%"
      />
    </div>
  );
}
