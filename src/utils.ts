import { useEffect, useLayoutEffect as useOriginalLayoutEffect } from 'react';

export const OLARK_CONTAINER_ID = 'olark-box-container';

export function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
export const useIsomorphicLayoutEffect = isBrowser()
  ? useOriginalLayoutEffect
  : useEffect;

export function olarkSnippetExists() {
  return isBrowser() && 'olarkReact' in window;
}

export function olarkWasLaunched() {
  return olarkSnippetExists() && !!window.olarkReact.olarkWasLaunched;
}

export function olarkExists() {
  return isBrowser() && !!window.olark;
}

export function olarkContainerExists() {
  return isBrowser() && !!document.getElementById(OLARK_CONTAINER_ID);
}

export function injectOlarkSnippet(siteId: string) {
  /*
   * Force users to include a `siteId` prop.
   */
  if (!siteId) {
    throw new Error('The `Olark` component must be given a `siteId` prop.');
  }

  /*
   * Generate the olark script and append it to the body.
   */
  if (isBrowser() && !olarkSnippetExists()) {
    const script = document.createElement('script');
    script.setAttribute('id', 'olark-react-snippet');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('async', 'true');
    script.innerHTML = `
        window.olarkReact = function (systemConfig, localeConfig, boxConfig) {
          ;(function(o,l,a,r,k,y){if(o.olark)return;
          r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0];
          y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r);
          y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};
          y.extend=function(i,j){y("extend",i,j)};
          y.identify=function(i){y("identify",k.i=i)};
          y.configure=function(i,j){y("configure",i,j);k.c[i]=j};
          k=y._={s:[],t:[+new Date],c:{},l:a};
          })(window,document,"static.olark.com/jsclient/loader0.js");
          /* Add configuration calls bellow this comment */

          // Run through all the system config.
          Object.keys(boxConfig || {}).forEach(function (key) {
            olark.configure('box.' + key, boxConfig[key]);
          });

          // Run through all the system config.
          Object.keys(systemConfig || {}).forEach(function (key) {
            olark.configure('system.' + key, systemConfig[key]);
          });

          // Run through all the local config.
          Object.keys(localeConfig || {}).forEach(function (key) {
            olark.configure('locale.' + key, localeConfig[key]);
          });

          // Identify the site and mark the script as launched.
          olark.identify('${siteId}');
          window.olarkReact.olarkWasLaunched = true;
        };
      `;
    document.body.appendChild(script);
  }
}
