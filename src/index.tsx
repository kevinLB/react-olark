import React, { useEffect } from 'react';
import {
  olarkContainerExists,
  olarkExists,
  olarkWasLaunched,
  OLARK_CONTAINER_ID,
  olarkSnippetExists,
  useIsomorphicLayoutEffect,
  injectOlarkSnippet,
} from './utils';
import { IOlarkBoxConfig, IOlarkSystemConfig } from './types';

export interface IOlarkProps {
  siteId: string;
  systemConfig?: IOlarkSystemConfig;
  localeConfig?: object;
  boxConfig?: IOlarkBoxConfig;
}

const Olark: React.FC<IOlarkProps> = (props) => {
  const {
    siteId,
    systemConfig = {},
    boxConfig = {},
    localeConfig = {},
  } = props;

  function launchOlark() {
    if (olarkSnippetExists() && !olarkWasLaunched()) {
      window.olarkReact(systemConfig, localeConfig, boxConfig);
      window.olark('api.chat.onReady', () => {
        const container = document.getElementById(
          OLARK_CONTAINER_ID
        ) as HTMLDivElement;
        const classes = container.className;
        if (classes.indexOf('olark-loaded') === -1) {
          container.className = container.className + ' olark-loaded';
        }
      });
    }
  }

  function resetOlark() {
    if (olarkExists()) {
      window.olark._.reset();
    }
  }

  useIsomorphicLayoutEffect(function injectingEffect() {
    injectOlarkSnippet(siteId);
  }, []);

  useEffect(function mountEffect() {
    if (!olarkWasLaunched()) {
      launchOlark();
    } else if (!olarkContainerExists()) {
      resetOlark();
    }
  }, []);

  return <div id={OLARK_CONTAINER_ID} />;
};

export default React.memo(
  Olark,
  // Don't allow this component to re-render while it is live.
  () => false
);
