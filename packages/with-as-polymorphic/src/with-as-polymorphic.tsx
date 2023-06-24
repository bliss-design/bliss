import type { ComponentPropsWithAs } from './with-as-polymorphic.types';

import React from 'react';

export default function withAsPolymorphic<
  DefaultElement,
  Props,
  StaticProps = Record<string, never>,
>(Component: React.ElementType) {
  type ComponentWithProps<Element> = ComponentPropsWithAs<Element, Props>;

  type ComponentType = <Element = DefaultElement>(
    props: ComponentWithProps<Element>,
  ) => React.ReactElement;

  type FunctionComponent = Omit<
    React.FunctionComponent<ComponentWithProps<unknown>>,
    never
  >;

  type PolymorphicComponent = ComponentType & FunctionComponent & StaticProps;

  return Component as PolymorphicComponent;
}
