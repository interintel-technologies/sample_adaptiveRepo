import "./chunk-EWTE5DHJ.js";

// node_modules/pwa-helpers/router.js
var installRouter = (locationUpdatedCallback) => {
  document.body.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey)
      return;
    const anchor = e.composedPath().filter((n) => n.tagName === "A")[0];
    if (!anchor || anchor.target || anchor.hasAttribute("download") || anchor.getAttribute("rel") === "external")
      return;
    const href = anchor.href;
    if (!href || href.indexOf("mailto:") !== -1)
      return;
    const location = window.location;
    const origin = location.origin || location.protocol + "//" + location.host;
    if (href.indexOf(origin) !== 0)
      return;
    e.preventDefault();
    if (href !== location.href) {
      window.history.pushState({}, "", href);
      locationUpdatedCallback(location, e);
    }
  });
  window.addEventListener("popstate", (e) => locationUpdatedCallback(window.location, e));
  locationUpdatedCallback(
    window.location,
    null
    /* event */
  );
};
export {
  installRouter
};
/*! Bundled license information:

pwa-helpers/router.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)
*/
//# sourceMappingURL=pwa-helpers_router__js.js.map
