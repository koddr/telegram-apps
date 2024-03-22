/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Bin24Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Bin24: Component<Bin24Props> = (props) => {
  const merged = mergeProps({ size: 24 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.87 2.056h.26c.623 0 1.14-.001 1.586.146a2.8 2.8 0 0 1 1.767 1.72c.1.283.135.595.148.939h4.084a.9.9 0 1 1 0 1.8H4.285a.9.9 0 0 1 0-1.8H8.37c.013-.344.049-.656.148-.939a2.8 2.8 0 0 1 1.767-1.72c.445-.147.963-.147 1.585-.146m-1.7 2.805h3.658c-.008-.197-.022-.278-.044-.34a1 1 0 0 0-.636-.61c-.13-.043-.324-.055-1.15-.055-.824 0-1.018.012-1.149.055a1 1 0 0 0-.635.61c-.022.062-.036.143-.044.34M5.62 7.673a.9.9 0 0 1 1.004.782l.937 7.569c.126 1.023.213 1.716.34 2.24.12.503.256.752.42.927q.14.147.31.266c.204.141.485.245 1.024.303.557.059 1.282.06 2.344.06s1.787-.001 2.344-.06c.539-.058.82-.162 1.024-.303a2 2 0 0 0 .31-.267c.164-.174.3-.423.42-.926.126-.524.213-1.217.34-2.24l.937-7.569a.9.9 0 0 1 1.786.221l-.943 7.62c-.119.96-.217 1.754-.37 2.388-.16.666-.399 1.251-.861 1.741q-.27.286-.593.51c-.55.383-1.168.54-1.86.615-.663.07-1.485.07-2.485.07h-.098c-1 0-1.822 0-2.485-.07-.692-.074-1.31-.232-1.86-.615a3.8 3.8 0 0 1-.593-.51c-.462-.49-.702-1.075-.862-1.74-.152-.635-.25-1.43-.37-2.389l-.942-7.62a.9.9 0 0 1 .782-1.003" clip-rule="evenodd"/></svg>
  );
}
