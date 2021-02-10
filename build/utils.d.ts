import { useLayoutEffect as useOriginalLayoutEffect } from 'react';
export declare const OLARK_CONTAINER_ID = "olark-box-container";
export declare function isBrowser(): boolean;
export declare const useIsomorphicLayoutEffect: typeof useOriginalLayoutEffect;
export declare function olarkSnippetExists(): boolean;
export declare function olarkWasLaunched(): boolean;
export declare function olarkExists(): boolean;
export declare function olarkContainerExists(): boolean;
export declare function injectOlarkSnippet(siteId: string): void;
