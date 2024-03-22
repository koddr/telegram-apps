/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Gallery28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Gallery28: Component<Gallery28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M15.598 2.015h3.218c1.059 0 1.908 0 2.594.055.706.057 1.317.176 1.882.458a4.87 4.87 0 0 1 2.177 2.177c.282.565.401 1.176.458 1.882.055.686.055 1.535.055 2.594v10.776a4.865 4.865 0 0 1-4.857 4.858h-8.387a4.305 4.305 0 0 1-4.306-4.306V9.182c0-1.059 0-1.908.055-2.594.057-.706.176-1.317.458-1.882a4.87 4.87 0 0 1 2.178-2.177c.564-.282 1.176-.401 1.88-.458.687-.055 1.536-.055 2.595-.055m-2.45 1.85c-.596.047-.948.137-1.22.273a3.07 3.07 0 0 0-1.373 1.372c-.136.272-.226.625-.274 1.22-.048.607-.049 1.383-.049 2.49v9.158l.526-.512c.059-.057.107-.104.153-.145a2.88 2.88 0 0 1 3.995.145l.012.012c.077.075.096.093.11.105.41.367 1.031.367 1.442 0l.11-.105 1.034-1.007c.36-.35.669-.65.942-.877.287-.238.592-.445.962-.566a2.9 2.9 0 0 1 1.794 0c.37.121.676.328.963.566.273.227.581.526.942.877l.965.94V9.219c0-1.106 0-1.882-.05-2.488-.047-.596-.137-.949-.273-1.221a3.07 3.07 0 0 0-1.372-1.372c-.272-.136-.625-.226-1.22-.274-.607-.048-1.383-.05-2.49-.05h-3.14c-1.107 0-1.883.002-2.489.05m11.014 16.437-2.176-2.117c-.392-.381-.649-.63-.86-.805-.204-.17-.307-.22-.374-.241a1.1 1.1 0 0 0-.673 0c-.067.021-.17.072-.374.24-.211.176-.468.425-.86.806l-1.022.995a2.883 2.883 0 0 1-3.995.145q-.068-.06-.153-.145l-.012-.012-.11-.105a1.083 1.083 0 0 0-1.442 0c-.014.012-.033.03-.11.105l-1.744 1.697a2.506 2.506 0 0 0 2.48 2.15h8.385a3.066 3.066 0 0 0 3.04-2.713M2.015 7.534a3.817 3.817 0 0 1 3.817-3.816.9.9 0 1 1 0 1.8 2.017 2.017 0 0 0-2.017 2.016v12.897c0 1.113.903 2.016 2.017 2.016a.9.9 0 1 1 0 1.8 3.817 3.817 0 0 1-3.817-3.816z" clip-rule="evenodd"/><path fill="currentColor" d="M21.585 8.167a1.75 1.75 0 1 1-3.501 0 1.75 1.75 0 0 1 3.5 0"/></svg>
  );
}
