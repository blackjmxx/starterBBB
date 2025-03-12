import React from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
  useHover,
  safePolygon,
  Placement,
} from "@floating-ui/react";
import { Heading, HeadingProps } from "./heading";
import { twMerge } from "tailwind-merge";

/**
 * Options pour le composant HoverCard
 */
interface PopoverOptions {
  /** Position du popover par rapport à l'élément déclencheur */
  placement?: Placement;
  /** Si true, le popover sera modal */
  modal?: boolean;
}

/**
 * Hook personnalisé pour gérer l'état et les interactions du HoverCard
 */
function useHoverCard({ placement = "bottom", modal }: PopoverOptions = {}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const labelId = React.useId();

  const data = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: "end" }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const context = data.context;
  const dismiss = useDismiss(context);
  const role = useRole(context);
  const hover = useHover(context, {
    handleClose: safePolygon(),
    delay: 250,
  });

  const interactions = useInteractions([dismiss, role, hover]);

  return React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
    }),
    [isOpen, interactions, data, modal, labelId]
  );
}

type ContextType = ReturnType<typeof useHoverCard> | null;

const HoverCardContext = React.createContext<ContextType>(null);

const useHoverCardContext = () => {
  const context = React.useContext(HoverCardContext);

  if (context == null) {
    throw new Error("HoverCard components must be wrapped in <HoverCard />");
  }

  return context;
};

/**
 * Carte qui s'affiche au survol d'un élément
 *
 * @example
 * <HoverCard>
 *   <HoverCardTrigger>
 *     <Button>Survolez-moi</Button>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <HoverCardHeader>Titre</HoverCardHeader>
 *     <p>Contenu détaillé qui s'affiche au survol</p>
 *   </HoverCardContent>
 * </HoverCard>
 */
export function HoverCard({
  children,
  modal = false,
  ...restOptions
}: {
  /** Contenu du HoverCard (trigger et content) */
  children: React.ReactNode;
} & PopoverOptions) {
  const popover = useHoverCard({ modal, ...restOptions });

  return (
    <HoverCardContext.Provider value={popover}>
      {children}
    </HoverCardContext.Provider>
  );
}

/**
 * Élément déclencheur qui active la carte au survol
 */
export function HoverCardTrigger({ children }: { children: React.ReactNode }) {
  const context = useHoverCardContext();
  const child = React.Children.only(children);

  return React.cloneElement(child as React.ReactElement, {
    ref: context.refs.setReference,
    ...context.getReferenceProps(),
  });
}

/**
 * Contenu de la carte qui s'affiche au survol
 */
export function HoverCardContent({
  children,
  label,
  className,
}: {
  /** Contenu de la carte ou fonction de rendu avec fonction de fermeture */
  children:
    | React.ReactNode
    | (({ close }: { close: () => void }) => React.ReactNode);
} & {
  /** Libellé d'accessibilité pour la carte */
  label?: string;
  /** Classes CSS additionnelles */
  className?: string;
}) {
  const {
    labelId,
    context: floatingContext,
    setIsOpen,
    isOpen,
    modal,
    refs,
    floatingStyles,
    getFloatingProps,
  } = useHoverCardContext();

  const aria = label ? { "aria-label": label } : { "aria-labelledby": labelId };

  return (
    isOpen && (
      <FloatingFocusManager context={floatingContext} modal={modal}>
        <div
          className={twMerge(
            "max-w-72 rounded-lg bg-background dark:bg-zinc-800 p-1 shadow-lg outline-none ring-1 ring-zinc-950/10 dark:ring-white/15",
            className
          )}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          {...aria}
        >
          {typeof children === "function"
            ? children({ close: () => setIsOpen(false) })
            : children}
        </div>
      </FloatingFocusManager>
    )
  );
}

/**
 * En-tête de la carte avec titre
 */
export function HoverCardHeader(props: HeadingProps) {
  const { labelId } = useHoverCardContext();
  return <Heading {...props} id={labelId}></Heading>;
}
