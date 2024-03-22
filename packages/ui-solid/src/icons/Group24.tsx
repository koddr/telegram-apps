/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Group24Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Group24: Component<Group24Props> = (props) => {
  const merged = mergeProps({ size: 24 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M7.998 5.127c-1.335 0-2.451 1.112-2.451 2.527s1.116 2.528 2.451 2.528 2.451-1.113 2.451-2.528S9.333 5.127 8 5.127M3.747 7.654c0-2.37 1.884-4.327 4.251-4.327s4.251 1.956 4.251 4.327-1.884 4.328-4.25 4.328c-2.368 0-4.252-1.957-4.252-4.328m12.5.327c-.765 0-1.423.642-1.423 1.48 0 .837.658 1.479 1.423 1.479.766 0 1.423-.642 1.423-1.48 0-.837-.657-1.479-1.423-1.479m-3.223 1.48c0-1.791 1.423-3.28 3.223-3.28s3.223 1.489 3.223 3.28-1.422 3.279-3.223 3.279-3.223-1.489-3.223-3.28M3.76 17.436c-.798.737-1.1 1.601-1.15 2.104a.9.9 0 1 1-1.791-.175c.09-.925.585-2.203 1.72-3.251 1.155-1.067 2.92-1.846 5.46-1.846s4.303.78 5.458 1.846c1.136 1.048 1.63 2.326 1.72 3.251a.9.9 0 1 1-1.791.175c-.05-.503-.351-1.367-1.15-2.104-.778-.718-2.086-1.368-4.238-1.368-2.151 0-3.46.65-4.238 1.368m11.344-2.268a.9.9 0 0 1 .9-.9c2.54 0 4.304.78 5.459 1.846 1.136 1.048 1.63 2.326 1.72 3.251a.9.9 0 1 1-1.791.175c-.05-.503-.351-1.367-1.15-2.104-.779-.718-2.087-1.368-4.238-1.368a.9.9 0 0 1-.9-.9" clip-rule="evenodd"/></svg>
  );
}
