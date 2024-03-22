/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Smile28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Smile28: Component<Smile28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" d="M12.469 11.324c0 .815-.558 1.476-1.247 1.476s-1.247-.66-1.247-1.476.558-1.477 1.247-1.477 1.247.661 1.247 1.477m5.986 0c0 .815-.559 1.476-1.247 1.476s-1.247-.66-1.247-1.476.558-1.477 1.247-1.477c.688 0 1.247.661 1.247 1.477"/><path fill="currentColor" fill-rule="evenodd" d="M13.968 4.929c-4.976 0-8.987 3.977-8.987 8.856s4.011 8.856 8.987 8.856 8.988-3.978 8.988-8.856c0-4.88-4.012-8.856-8.988-8.856M3.002 13.785c0-5.996 4.922-10.835 10.966-10.835s10.966 4.84 10.966 10.835-4.922 10.834-10.966 10.834S3.002 19.781 3.002 13.785m14.789 1.528a.99.99 0 0 1 .601 1.263l-.883-.313c.883.313.883.314.883.315l-.001.003-.002.006-.005.014a2 2 0 0 1-.06.14c-.037.082-.091.19-.165.316-.148.25-.378.573-.72.894-.701.66-1.814 1.253-3.47 1.253s-2.77-.594-3.472-1.253a4 4 0 0 1-.72-.894 3.4 3.4 0 0 1-.224-.456l-.005-.014-.002-.006-.001-.002v-.001l.886-.316-.887.315a.99.99 0 1 1 1.868-.657q.017.039.069.13c.07.12.19.288.371.46.347.325.98.716 2.116.716s1.77-.391 2.116-.716c.182-.172.301-.34.372-.46a1.4 1.4 0 0 0 .077-.15.99.99 0 0 1 1.258-.587m-6.383.6" clip-rule="evenodd"/></svg>
  );
}
