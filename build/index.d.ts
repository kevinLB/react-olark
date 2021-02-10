import React from 'react';
import { IOlarkBoxConfig, IOlarkSystemConfig } from './types';
export interface IOlarkProps {
    siteId: string;
    systemConfig?: IOlarkSystemConfig;
    localeConfig?: object;
    boxConfig?: IOlarkBoxConfig;
}
declare const _default: React.NamedExoticComponent<IOlarkProps>;
export default _default;
