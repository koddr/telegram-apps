/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Group28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Group28: Component<Group28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M9.333 5.834c-1.643 0-3.009 1.368-3.009 3.097 0 1.73 1.366 3.098 3.009 3.098s3.008-1.368 3.008-3.098-1.366-3.097-3.008-3.097M4.524 8.93c0-2.685 2.134-4.897 4.809-4.897S14.14 6.246 14.14 8.93s-2.133 4.898-4.808 4.898-4.809-2.212-4.809-4.898m14.43.233c-.98 0-1.81.819-1.81 1.874s.83 1.875 1.81 1.875c.979 0 1.81-.819 1.81-1.875 0-1.055-.831-1.874-1.81-1.874m-3.61 1.874c0-2.009 1.596-3.674 3.61-3.674s3.61 1.665 3.61 3.674-1.597 3.675-3.61 3.675-3.61-1.665-3.61-3.675M4.288 20.23c-.959.886-1.327 1.928-1.388 2.55a.9.9 0 0 1-1.791-.175c.102-1.044.662-2.5 1.958-3.697 1.316-1.215 3.336-2.113 6.266-2.113s4.95.898 6.265 2.113c1.297 1.196 1.857 2.653 1.959 3.697a.9.9 0 0 1-1.791.175c-.061-.622-.43-1.664-1.389-2.55-.939-.867-2.503-1.635-5.044-1.635-2.542 0-4.105.768-5.045 1.635m13.482-2.535a.9.9 0 0 1 .9-.9c2.93 0 4.95.898 6.265 2.113 1.297 1.196 1.857 2.653 1.959 3.697a.9.9 0 1 1-1.792.175c-.06-.622-.428-1.664-1.388-2.55-.94-.867-2.503-1.635-5.044-1.635a.9.9 0 0 1-.9-.9" clip-rule="evenodd"/></svg>
  );
}
