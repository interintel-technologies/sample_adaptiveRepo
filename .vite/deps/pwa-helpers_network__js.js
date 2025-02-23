import "./chunk-EWTE5DHJ.js";

// node_modules/pwa-helpers/network.js
var installOfflineWatcher = (offlineUpdatedCallback) => {
  window.addEventListener("online", () => offlineUpdatedCallback(false));
  window.addEventListener("offline", () => offlineUpdatedCallback(true));
  offlineUpdatedCallback(navigator.onLine === false);
};
export {
  installOfflineWatcher
};
/*! Bundled license information:

pwa-helpers/network.js:
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
//# sourceMappingURL=pwa-helpers_network__js.js.map
