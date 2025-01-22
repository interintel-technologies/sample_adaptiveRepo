import {
  require_client
} from "./chunk-K3RR23GX.js";
import "./chunk-UHINIFCJ.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@r2wc/react-to-web-component/dist/react-to-web-component.js
var import_react = __toESM(require_react());
var import_client = __toESM(require_client());

// node_modules/@r2wc/core/dist/core.js
var C = Object.defineProperty;
var x = (t, e, s2) => e in t ? C(t, e, { enumerable: true, configurable: true, writable: true, value: s2 }) : t[e] = s2;
var h = (t, e, s2) => (x(t, typeof e != "symbol" ? e + "" : e, s2), s2);
var T = {
  stringify: (t) => t,
  parse: (t) => t
};
var V = {
  stringify: (t) => `${t}`,
  parse: (t) => parseFloat(t)
};
var N = {
  stringify: (t) => t ? "true" : "false",
  parse: (t) => /^[ty1-9]/i.test(t)
};
var P = {
  stringify: (t) => t.name,
  parse: (t, e, s2) => {
    const c2 = (() => {
      if (typeof window < "u" && t in window)
        return window[t];
      if (typeof global < "u" && t in global)
        return global[t];
    })();
    return typeof c2 == "function" ? c2.bind(s2) : void 0;
  }
};
var $ = {
  stringify: (t) => JSON.stringify(t),
  parse: (t) => JSON.parse(t)
};
var A = {
  string: T,
  number: V,
  boolean: N,
  function: P,
  json: $
};
function J(t) {
  return t.replace(
    /([a-z0-9])([A-Z])/g,
    (e, s2, c2) => `${s2}-${c2.toLowerCase()}`
  );
}
var d = Symbol.for("r2wc.render");
var g = Symbol.for("r2wc.connected");
var l = Symbol.for("r2wc.context");
var p = Symbol.for("r2wc.props");
function _(t, e, s2) {
  var k, O, j;
  e.props || (e.props = t.propTypes ? Object.keys(t.propTypes) : []);
  const c2 = Array.isArray(e.props) ? e.props.slice() : Object.keys(e.props), b = {}, m = {}, w = {};
  for (const r of c2) {
    b[r] = Array.isArray(e.props) ? "string" : e.props[r];
    const u = J(r);
    m[r] = u, w[u] = r;
  }
  class S extends HTMLElement {
    constructor() {
      super();
      h(this, k, true);
      h(this, O);
      h(this, j, {});
      h(this, "container");
      e.shadow ? this.container = this.attachShadow({
        mode: e.shadow
      }) : this.container = this, this[p].container = this.container;
      for (const n of c2) {
        const f2 = m[n], o2 = this.getAttribute(f2), i2 = b[n], a2 = i2 ? A[i2] : null;
        a2 != null && a2.parse && o2 && (this[p][n] = a2.parse(o2, f2, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(w);
    }
    connectedCallback() {
      this[g] = true, this[d]();
    }
    disconnectedCallback() {
      this[g] = false, this[l] && s2.unmount(this[l]), delete this[l];
    }
    attributeChangedCallback(n, f2, o2) {
      const i2 = w[n], a2 = b[i2], y = a2 ? A[a2] : null;
      i2 in b && (y != null && y.parse) && o2 && (this[p][i2] = y.parse(o2, n, this), this[d]());
    }
    [(k = g, O = l, j = p, d)]() {
      this[g] && (this[l] ? s2.update(this[l], this[p]) : this[l] = s2.mount(
        this.container,
        t,
        this[p]
      ));
    }
  }
  for (const r of c2) {
    const u = m[r], n = b[r];
    Object.defineProperty(S.prototype, r, {
      enumerable: true,
      configurable: true,
      get() {
        return this[p][r];
      },
      set(f2) {
        this[p][r] = f2;
        const o2 = n ? A[n] : null;
        if (o2 != null && o2.stringify) {
          const i2 = o2.stringify(f2, u, this);
          this.getAttribute(u) !== i2 && this.setAttribute(u, i2);
        } else
          this[d]();
      }
    });
  }
  return S;
}

// node_modules/@r2wc/react-to-web-component/dist/react-to-web-component.js
function f(t, e, r) {
  const n = (0, import_client.createRoot)(t), u = import_react.default.createElement(e, r);
  return n.render(u), {
    root: n,
    ReactComponent: e
  };
}
function i({ root: t, ReactComponent: e }, r) {
  const n = import_react.default.createElement(e, r);
  t.render(n);
}
function a({ root: t }) {
  t.unmount();
}
function s(t, e = {}) {
  return _(t, e, { mount: f, update: i, unmount: a });
}
export {
  s as default
};
//# sourceMappingURL=@r2wc_react-to-web-component.js.map
