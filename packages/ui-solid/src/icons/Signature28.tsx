/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Signature28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Signature28: Component<Signature28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M3.002 5.9a.99.99 0 0 1 .99-.99h14.964a.99.99 0 1 1 0 1.98H3.992a.99.99 0 0 1-.99-.99m0 4.923a.99.99 0 0 1 .99-.99h7.482a.99.99 0 1 1 0 1.979H3.992a.99.99 0 0 1-.99-.99m12.533.282c.683-.2 1.387-.065 2.015.4l.026.018.024.021c1.015.859 1.276 2.005 1.078 3.138-.188 1.07-.78 2.155-1.486 3.141-.659.919-1.473 1.827-2.31 2.654.267.01.65-.04 1.193-.23.991-.5 2.238-1.482 3.207-2.334.816-.718 2.096-.405 2.518.52l1.601-1.053a.99.99 0 1 1 1.087 1.653l-2.094 1.378c-.829.545-1.875.185-2.27-.612-.953.806-2.157 1.722-3.224 2.248l-.05.025-.053.02c-1.216.436-2.316.511-3.213.064a3 3 0 0 1-.322-.19c-.418.358-.82.682-1.186.963a.99.99 0 0 1-1.204-1.57c.39-.298.817-.646 1.259-1.03a4 4 0 0 1-.088-.33c-.363-1.61.054-3.69.483-5.045l.003-.009.003-.009c.27-.796.794-1.967 1.526-2.806.364-.419.856-.843 1.477-1.025m-1.653 7.57a18 18 0 0 0 1.702-2.005c.64-.892 1.033-1.69 1.145-2.33.098-.562-.02-.945-.381-1.263-.15-.104-.215-.085-.256-.073h-.002c-.105.031-.294.142-.54.425-.489.561-.91 1.453-1.14 2.132-.302.956-.535 2.132-.528 3.114m-10.88-3.422a.99.99 0 0 1 .99-.99H8.98a.99.99 0 1 1 0 1.98H3.992a.99.99 0 0 1-.99-.99" clip-rule="evenodd"/></svg>
  );
}
