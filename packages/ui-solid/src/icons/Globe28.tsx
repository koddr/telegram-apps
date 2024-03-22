/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Globe28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Globe28: Component<Globe28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.391 10.98a9.7 9.7 0 0 0-.41 2.801c0 .973.143 1.913.41 2.801h4.362a23 23 0 0 1-.166-2.8c0-1.003.059-1.936.166-2.802zm.845-1.978h3.867c.464-1.98 1.191-3.512 1.98-4.645a9.98 9.98 0 0 0-5.847 4.645m8.73-4.881c-.828.637-2.095 2.147-2.826 4.88h5.651c-.73-2.733-1.997-4.243-2.825-4.88m3.218 6.86h-6.437a21 21 0 0 0-.182 2.8c0 1.024.066 1.956.182 2.801h6.437c.116-.845.182-1.777.182-2.8 0-1.024-.066-1.956-.182-2.802m1.994 5.602a23 23 0 0 0 .167-2.802c0-1.002-.06-1.935-.167-2.8h4.363a9.7 9.7 0 0 1 .41 2.8 9.7 9.7 0 0 1-.41 2.801zm-2.387 1.978h-5.65c.73 2.734 1.997 4.243 2.825 4.881.828-.638 2.094-2.147 2.825-4.88m-5.709 4.645c-.788-1.133-1.515-2.666-1.979-4.645H5.236a9.98 9.98 0 0 0 5.846 4.645m5.767 0c.788-1.133 1.515-2.666 1.98-4.645h3.867a10 10 0 0 1-5.847 4.644m5.847-14.204h-3.868c-.464-1.98-1.19-3.512-1.979-4.645a9.98 9.98 0 0 1 5.847 4.645m-20.694 4.78c0-6.54 5.369-11.82 11.964-11.82 5.127 0 9.508 3.189 11.208 7.679a11.7 11.7 0 0 1 .755 4.14c0 1.456-.266 2.851-.755 4.141-1.7 4.49-6.08 7.678-11.208 7.678-6.595 0-11.964-5.279-11.964-11.819" clip-rule="evenodd"/></svg>
  );
}
