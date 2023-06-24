import React from 'react';

type MergeProps<ExistingProps = unknown, NewProps = unknown> = NewProps &
  Omit<ExistingProps, keyof NewProps>;

type JSXElement =
  | keyof React.JSX.IntrinsicElements
  | React.JSXElementConstructor<unknown>;

type ManagedAttributes<Element extends JSXElement> =
  React.JSX.LibraryManagedAttributes<
    Element,
    React.ComponentPropsWithoutRef<Element>
  >;

type MergedProps<
  Element extends JSXElement,
  AdditionalProps = unknown,
> = MergeProps<ManagedAttributes<Element>, AdditionalProps>;

type ElementRef<Element> = Element extends React.ElementType
  ? React.ComponentPropsWithRef<Element>['ref']
  : never;

export type ComponentPropsWithoutAs<
  Element,
  AdditionalProps = Record<string, never>,
> = Element extends React.ElementType
  ? MergedProps<Element, AdditionalProps> & {
      ref?: ElementRef<Element>;
    }
  : AdditionalProps;
