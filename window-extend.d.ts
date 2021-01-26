import { OlarkFunction, OlarkReactFunction } from './src/types';

// register this file as a module
export {};

declare global {
  interface Window {
    olark: OlarkFunction;
    olarkReact: OlarkReactFunction;
  }
}
