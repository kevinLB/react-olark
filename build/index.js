'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var OLARK_CONTAINER_ID = 'olark-box-container';
function isBrowser() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
var useIsomorphicLayoutEffect = isBrowser()
    ? React.useLayoutEffect
    : React.useEffect;
function olarkSnippetExists() {
    return isBrowser() && 'olarkReact' in window;
}
function olarkWasLaunched() {
    return olarkSnippetExists() && !!window.olarkReact.olarkWasLaunched;
}
function olarkExists() {
    return isBrowser() && !!window.olark;
}
function olarkContainerExists() {
    return isBrowser() && !!document.getElementById(OLARK_CONTAINER_ID);
}
function injectOlarkSnippet(siteId) {
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
        var script = document.createElement('script');
        script.setAttribute('id', 'olark-react-snippet');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('async', 'true');
        script.innerHTML = "\n        window.olarkReact = function (systemConfig, localeConfig, boxConfig) {\n          ;(function(o,l,a,r,k,y){if(o.olark)return;\n          r=\"script\";y=l.createElement(r);r=l.getElementsByTagName(r)[0];\n          y.async=1;y.src=\"//\"+a;r.parentNode.insertBefore(y,r);\n          y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};\n          y.extend=function(i,j){y(\"extend\",i,j)};\n          y.identify=function(i){y(\"identify\",k.i=i)};\n          y.configure=function(i,j){y(\"configure\",i,j);k.c[i]=j};\n          k=y._={s:[],t:[+new Date],c:{},l:a};\n          })(window,document,\"static.olark.com/jsclient/loader0.js\");\n          /* Add configuration calls bellow this comment */\n\n          // Run through all the system config.\n          Object.keys(boxConfig || {}).forEach(function (key) {\n            olark.configure('box.' + key, boxConfig[key]);\n          });\n\n          // Run through all the system config.\n          Object.keys(systemConfig || {}).forEach(function (key) {\n            olark.configure('system.' + key, systemConfig[key]);\n          });\n\n          // Run through all the local config.\n          Object.keys(localeConfig || {}).forEach(function (key) {\n            olark.configure('locale.' + key, localeConfig[key]);\n          });\n\n          // Identify the site and mark the script as launched.\n          olark.identify('" + siteId + "');\n          window.olarkReact.olarkWasLaunched = true;\n        };\n      ";
        document.body.appendChild(script);
    }
}

var Olark = function (props) {
    var siteId = props.siteId, _a = props.systemConfig, systemConfig = _a === void 0 ? {} : _a, _b = props.boxConfig, boxConfig = _b === void 0 ? {} : _b, _c = props.localeConfig, localeConfig = _c === void 0 ? {} : _c;
    function launchOlark() {
        if (olarkSnippetExists() && !olarkWasLaunched()) {
            window.olarkReact(systemConfig, localeConfig, boxConfig);
            window.olark('api.chat.onReady', function () {
                var container = document.getElementById(OLARK_CONTAINER_ID);
                var classes = container.className;
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
    React.useEffect(function mountEffect() {
        if (!olarkWasLaunched()) {
            launchOlark();
        }
        else if (!olarkContainerExists()) {
            resetOlark();
        }
    }, []);
    return React__default['default'].createElement("div", { id: OLARK_CONTAINER_ID });
};
var index = React__default['default'].memo(Olark, 
// Don't allow this component to re-render while it is live.
function () { return false; });

exports.default = index;
//# sourceMappingURL=index.js.map
