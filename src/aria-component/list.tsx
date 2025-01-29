import React, { useEffect, useRef } from 'react';
import {
  ListBoxItemProps,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  ListBoxProps as RACListBoxProps
} from 'react-aria-components';
import { Label } from './field';
import { composeTailwindRenderProps, focusVisibleOutline } from './utils';

export interface ListProps<T> extends Omit<RACListBoxProps<T>, 'layout' | 'orientation'> {
  /** Label pour la liste */
  label?: string;
  /** Classe CSS pour le conteneur principal */
  containerClassName?: string;
}

export interface ListItemProps extends ListBoxItemProps {
  /** Contenu supplémentaire à afficher à droite de l'élément */
  endContent?: React.ReactNode;
  /** Contenu supplémentaire à afficher à gauche de l'élément */
  startContent?: React.ReactNode;
  /** Classes CSS pour le contenu principal */
  contentClassName?: string;
}

export function List<T extends object>({
  label,
  containerClassName,
  className,
  children,
  ...props
}: ListProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Défilement automatique vers l'élément sélectionné
  useEffect(() => {
    if (ref.current) {
      const selectedItem = ref.current.querySelector('[aria-selected=true]');
      if (selectedItem) {
        const timer = setTimeout(() => {
          selectedItem.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
          });
        }, 50);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, []);

  return (
    <div className={containerClassName}>
      {label && <Label>{label}</Label>}
      <RACListBox
        {...props}
        ref={ref}
        className={composeTailwindRenderProps(
          className,
          [
            'outline-none rounded-md',
            'border border-input bg-background',
            'p-1 gap-1',
            'overflow-auto'
          ]
        )}
      >
        {children}
      </RACListBox>
    </div>
  );
}

export function ListItem({
  children,
  className,
  startContent,
  endContent,
  contentClassName,
  ...props
}: ListItemProps) {
  const textValue =
    props.textValue ||
    (typeof children === 'string' ? children : undefined);

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(
        className,
        [
          'group relative flex items-center gap-2 outline-0 rounded-sm px-2 py-1.5',
          'text-sm cursor-default',
          'disabled:opacity-50',
          'hover:bg-accent hover:text-accent-foreground',
          'selected:bg-accent selected:text-accent-foreground',
          focusVisibleOutline
        ]
      )}
    >
      {startContent}
      <span className={composeTailwindRenderProps(
        contentClassName,
        ['flex-1 truncate']
      )}>
        {children}
      </span>
      {endContent}
    </RACListBoxItem>
  );
}