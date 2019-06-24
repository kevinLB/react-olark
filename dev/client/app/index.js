import Olark from '../../../bin/index';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render((

  <Olark
    siteId={process.env.OLARK_SITE_ID}
    boxConfig={{ 'inline': false }}
    systemConfig={{ "hb_position": "right", "hb_show_as_tab": true }}
  />

), document.getElementById('app'))
