/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface App28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const App28: Component<App28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" d="M15 4.95a.95.95 0 0 0-.95-.95c-2.98.006-5.613.062-6.774.654a6 6 0 0 0-2.622 2.622C4 8.56 4 10.24 4 13.6v.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C8.56 24 10.24 24 13.6 24h.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622c.592-1.161.648-3.794.653-6.774a.949.949 0 1 0-1.9 0c-.002 1.599-.013 3.487-.074 4.236-.073.883-.204 1.346-.372 1.675a4.1 4.1 0 0 1-1.792 1.792c-.329.168-.792.3-1.675.372-.905.074-2.075.075-3.786.075h-.8c-1.711 0-2.88-.002-3.786-.075-.883-.073-1.346-.204-1.675-.372a4.1 4.1 0 0 1-1.792-1.792c-.168-.329-.3-.792-.372-1.675-.074-.905-.075-2.075-.075-3.786v-.8c0-1.711.001-2.88.075-3.786.073-.883.204-1.346.372-1.675a4.1 4.1 0 0 1 1.792-1.792c.329-.168.792-.3 1.675-.372.749-.06 2.637-.072 4.236-.074A.95.95 0 0 0 15 4.95"/><path fill="currentColor" d="M24 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>
  );
}
