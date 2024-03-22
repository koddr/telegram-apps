/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface ExchangeCircleFill32Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 32
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const ExchangeCircleFill32: Component<ExchangeCircleFill32Props> = (props) => {
  const merged = mergeProps({ size: 32 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14M12.89 9.701A1 1 0 0 0 11.462 8.3l-3.176 3.23a1 1 0 0 0 0 1.403l3.176 3.23a1 1 0 0 0 1.427-1.401l-1.505-1.53H18a1 1 0 1 0 0-2h-6.614zm7.647 6.136a1 1 0 0 0-1.427 1.402l1.505 1.53H14a1 1 0 1 0 0 2h6.615L19.11 22.3a1 1 0 0 0 1.427 1.402l3.176-3.23a1 1 0 0 0 0-1.403z" clip-rule="evenodd"/></svg>
  );
}
