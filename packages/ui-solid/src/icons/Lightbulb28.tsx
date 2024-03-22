/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Lightbulb28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Lightbulb28: Component<Lightbulb28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M21.792 9.778a7.53 7.53 0 0 1-2.273 5.385 1 1 0 0 0-.2.26.3.3 0 0 0-.026.07c0 2.097-1.735 3.709-3.765 3.709H12.46c-2.03 0-3.764-1.612-3.764-3.708a.3.3 0 0 0-.027-.072 1 1 0 0 0-.199-.259 7.53 7.53 0 0 1-2.274-5.385c0-4.261 3.54-7.63 7.799-7.63 4.258 0 7.798 3.369 7.798 7.63m-9.187 13.797a1.5 1.5 0 0 1-.55-.38 1.4 1.4 0 0 1-.37-.95c0-.198.166-.359.37-.359h3.876c.204 0 .369.16.369.36 0 .363-.14.695-.37.948a1.48 1.48 0 0 1-1.107.486h-1.66q-.299-.002-.558-.106m-.55-3.489h3.876c1.149 0 2.169.919 2.169 2.16 0 1.834-1.516 3.234-3.277 3.234h-1.66c-1.761 0-3.277-1.4-3.277-3.235 0-1.24 1.02-2.159 2.169-2.159m6.201-6.207c-.444.437-.764 1-.764 1.614 0 1.054-.88 1.909-1.965 1.909H12.46c-1.085 0-1.964-.855-1.964-1.91 0-.614-.32-1.176-.765-1.613a5.73 5.73 0 0 1-1.735-4.1c0-3.22 2.686-5.83 5.999-5.83s5.998 2.61 5.998 5.83a5.73 5.73 0 0 1-1.735 4.1" clip-rule="evenodd"/></svg>
  );
}
