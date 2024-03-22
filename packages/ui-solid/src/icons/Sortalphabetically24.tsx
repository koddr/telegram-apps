/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Sortalphabetically24Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Sortalphabetically24: Component<Sortalphabetically24Props> = (props) => {
  const merged = mergeProps({ size: 24 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M2.529 5.073a.9.9 0 0 1 .9-.9h16.286a.9.9 0 1 1 0 1.8H3.43a.9.9 0 0 1-.9-.9m0 4.653a.9.9 0 0 1 .9-.9h12.454a.9.9 0 0 1 0 1.8H3.43a.9.9 0 0 1-.9-.9m0 4.652a.9.9 0 0 1 .9-.9h9a.9.9 0 1 1 0 1.8h-9a.9.9 0 0 1-.9-.9m14.79-1.661c.426-.962 1.79-.962 2.217 0l2.806 6.329a1 1 0 1 1-1.829.81l-.593-1.339h-2.985l-.594 1.34a1 1 0 1 1-1.828-.811zm.503 3.8h1.211l-.606-1.366z" clip-rule="evenodd"/></svg>
  );
}
