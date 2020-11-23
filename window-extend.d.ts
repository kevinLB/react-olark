import { OlarkFunction, OlarkReactFunction } from './src/types';

declare global {
  interface Window {
    olark: OlarkFunction;
    olarkReact: OlarkReactFunction;
  }
}
