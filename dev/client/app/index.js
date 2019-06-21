import Olark from '../../../bin/index';
import { siteId } from '../../../env';

import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render((

  <Olark
    siteId={siteId}
    boxConfig={{ 'inline': false }}
    systemConfig={{ "hb_position": "right", "hb_show_as_tab": true }}
  />

), document.getElementById('app'))
