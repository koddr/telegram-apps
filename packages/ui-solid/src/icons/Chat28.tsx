/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Chat28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Chat28: Component<Chat28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M7.146 20.64c.279-.595.451-1.287.451-2.135-1.792-1.465-2.91-3.539-2.91-5.838 0-4.44 4.17-8.04 9.312-8.04s9.311 3.6 9.311 8.04-4.169 8.04-9.311 8.04a10.8 10.8 0 0 1-2.328-.253c-.51.559-1.508 1.287-3.19 1.85-.876.294-1.937.543-3.212.7.716-.706 1.432-1.413 1.877-2.364m5.126 1.93q.846.115 1.727.116c5.952 0 11.29-4.223 11.29-10.02 0-5.795-5.338-10.018-11.29-10.018-5.953 0-11.29 4.223-11.29 10.019 0 2.586 1.097 4.898 2.822 6.633-.2.824-.747 1.403-1.651 2.296a1.978 1.978 0 0 0 1.631 3.372c3.237-.4 5.415-1.366 6.761-2.399" clip-rule="evenodd"/></svg>
  );
}
