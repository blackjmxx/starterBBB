import React from 'react';
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  RadioGroupProps as RACRadioGroupProps,
  RadioProps as RACRadioProps,
  RadioRenderProps,
} from 'react-aria-components';
import { DescriptionContext, DescriptionProvider } from './field';
import {
  composeTailwindRenderProps,
  groupBox,
  groupFocusVisibleOutline,
} from './utils';
import { twMerge } from 'tailwind-merge';

export function RadioGroup({ ...props }: RACRadioGroupProps) {
  return (
    <RACRadioGroup
      {...props}
      className={composeTailwindRenderProps(props.className, groupBox)}
    />
  );
}

export function Radios({ className, ...props }: React.JSX.IntrinsicElements['div']) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        'flex',
        'flex-col',
        'group-aria-[orientation=horizontal]:flex-row',
        'group-aria-[orientation=horizontal]:flex-wrap',
        // When any radio item has description, apply all `font-medium` to all radio item labels
        '[&_label]:has-[[data-ui=description]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

export function RadioField({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <DescriptionProvider>
      <div
        {...props}
        data-ui="field"
        className={twMerge(
          'group flex flex-col gap-y-1',
          '[&_label]:has-[[data-label-placement=start]]:justify-between',
          '[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-label-placement=start]]:pe-16',
          '[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-label-placement=end]]:ps-7',
          '[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50',
          className,
        )}
      />
    </DescriptionProvider>
  );
}

export interface RadioProps extends RACRadioProps {
  labelPlacement?: 'start' | 'end';
  render?: never;
}

export interface CustomRenderRadioProps
  extends Omit<RACRadioProps, 'children'> {
  render: React.ReactElement | ((props: RadioRenderProps) => React.ReactNode);
  children?: never;
}

export function Radio({
  className,
  ...props
}: RadioProps | CustomRenderRadioProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  if (props.render) {
    const { render, ...restProps } = props;

    return (
      <RACRadio
        {...restProps}
        aria-describedby={descriptionContext?.['aria-describedby']}
        className={composeTailwindRenderProps(className, [
          'group',
          'text-base/6 sm:text-sm/6',
          'disabled:opacity-50',
        ])}
      >
        {render}
      </RACRadio>
    );
  }

  const { labelPlacement = 'end', ...restProps } = props;

  return (
    <RACRadio
      {...restProps}
      aria-describedby={descriptionContext?.['aria-describedby']}
      data-label-placement={labelPlacement}
      className={composeTailwindRenderProps(className, [
        'group flex items-center',
        'group-aria-[orientation=horizontal]:text-nowrap',
        'data-[label-placement=start]:flex-row-reverse',
        'data-[label-placement=start]:justify-between',
        'text-base/6 sm:text-sm/6',
        'disabled:opacity-50',
      ])}
    >
      {(renderProps) => {
        return (
          <>
            <div
              slot="radio"
              className={twMerge(
                'grid size-[1.0625rem] shrink-0 place-content-center rounded-full',
                labelPlacement === 'end' ? 'me-3' : 'ms-3',
                'border',
                'border-zinc-400/75',
                'dark:border-zinc-600',

                // readonly
                'group-data-[readonly]:opacity-50',

                // invalid
                'group-invalid:border-destructive',
                'group-invalid:dark:border-destructive',

                // selected
                'group-selected:dark:border-0',
                'group-selected:border-accent',
                'group-selected:bg-accent',
                'dark:group-selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
                groupFocusVisibleOutline,
              )}
            >
              <div className="rounded-full group-selected:size-1.5 group-selected:bg-white"></div>
            </div>

            {typeof props.children === 'function'
              ? props.children(renderProps)
              : props.children}
          </>
        );
      }}
    </RACRadio>
  );
}
