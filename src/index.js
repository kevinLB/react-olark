import React from 'react';

class Olark extends React.Component {
    windowExists() {
        return typeof window !== 'undefined';
    }

    snippetExists() {
      return this.windowExists() && !!window.olarkReact;
    }

    olarkExists() {
      return this.windowExists() && !!window.olark;
    }

    olarkWasLaunched() {
      return this.snippetExists() && !!window.olarkReact.olarkWasLaunched;
    }

    containerExists() {
      return this.windowExists() && !!document.getElementById('olark-box-container');
    }

    injectSnippet() {
        if(!this.props.siteId) {
            throw new Error("Olark component requires a `siteId` prop.");
        }

        if(this.windowExists() && !this.snippetExists()) {
            const siteId = this.props.siteId;
            const script = document.createElement('script');
            script.setAttribute('id', 'olark-react-snippet');
            script.setAttribute('type', 'type/javascript');
            script.setAttribute('async', true);
            script.innerHTML = `
                window.olarkReact = function(systemConfig, localeConfig, boxConfig ) {
                  ;(function(o,l,a,r,k,y){if(o.olark)return;
                  r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0];
                  y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r);
                  y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};
                  y.extend=function(i,j){y("extend",i,j)};
                  y.identify=function(i){y("identify",k.i=i)};
                  y.configure=function(i,j){y("configure",i,j);k.c[i]=j};
                  k=y._={s:[],t:[+new Date],c:{},l:a};
                  })(window,document,"static.olark.com/jsclient/loader.js");

                  // Run through all the system config.
                  Object.keys(systemConfig || {}).forEach(function (key) {
                    olark.configure('system.' + key, systemConfig[key]);
                  });

                  // Run through all the local config.
                  Object.keys(localeConfig || {}).forEach(function (key) {
                    olark.configure('locale.' + key, localeConfig[key]);
                  });

                  // Run through all the box config.
                  Object.keys(boxConfig || {}).forEach(function (key) {
                    olark.configure('box.' + key, boxConfig[key]);
                  });

                  // Identify the site and mark the script as launched.
                  olark.identify('${siteId}');
                  window.olarkReact.olarkWasLaunched = true;
              };
            `;
            document.body.appendChild(script);
        }
    }

    launchOlark() {
        if(this.snippetExists() && !this.olarkWasLaunched()) {
            window.olarkReact(this.props.systemConfig, this.props.localeConfig, this.props.boxConfig);
            window.olark('api.chat.onReady', () => {
                const container = document.getElementById('olark-box-container');
                const classes = container.className;
                if (classes.indexOf('olark-loaded') === -1) {
                    container.className = container.className + ' olark-loaded';
                }
            });
        }
    }

    resetOlark() {
        if(this.olarkExists()) {
            olark._.reset();
        }
    }

    componentWillMount() {
        this.injectSnippet();
    }

    componentDidMount() {
        if(!this.olarkWasLaunched()) {
            this.launchOlark();
        } else if(!this.containerExists()) {
            this.resetOlark();
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div id="olark-box-container"></div>
        );
    }
}

module.exports = exports = Olark;
