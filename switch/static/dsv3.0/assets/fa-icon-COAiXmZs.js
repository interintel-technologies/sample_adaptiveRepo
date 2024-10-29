import{m as R,T as x,r as k,N as $,i as j,a as M,h as V}from"./lit-html-dRijB2IX.js";/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function D(r){let t=S.get(r.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},S.set(r.type,t));let e=t.stringsArray.get(r.strings);if(e!==void 0)return e;const s=r.strings.join(R);return e=t.keyString.get(s),e===void 0&&(e=new x(r,r.getTemplateElement()),t.keyString.set(s,e)),t.stringsArray.set(r.strings,e),e}const S=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const d=new WeakMap,L=(r,t,e)=>{let s=d.get(t);s===void 0&&(k(t,t.firstChild),d.set(t,s=new $(Object.assign({templateFactory:D},e))),s.appendInto(t)),s.setValue(r),s.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=133;function N(r,t){const{element:{content:e},parts:s}=r,i=document.createTreeWalker(e,v,null,!1);let o=u(s),n=s[o],a=-1,c=0;const l=[];let p=null;for(;i.nextNode();){a++;const h=i.currentNode;for(h.previousSibling===p&&(p=null),t.has(h)&&(l.push(h),p===null&&(p=h)),p!==null&&c++;n!==void 0&&n.index===a;)n.index=p!==null?-1:n.index-c,o=u(s,o),n=s[o]}l.forEach(h=>h.parentNode.removeChild(h))}const B=r=>{let t=r.nodeType===11?0:1;const e=document.createTreeWalker(r,v,null,!1);for(;e.nextNode();)t++;return t},u=(r,t=-1)=>{for(let e=t+1;e<r.length;e++){const s=r[e];if(j(s))return e}return-1};function J(r,t,e=null){const{element:{content:s},parts:i}=r;if(e==null){s.appendChild(t);return}const o=document.createTreeWalker(s,v,null,!1);let n=u(i),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===e&&(a=B(t),e.parentNode.insertBefore(t,e));n!==-1&&i[n].index===c;){if(a>0){for(;n!==-1;)i[n].index+=a,n=u(i,n);return}n=u(i,n)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=(r,t)=>`${r}--${t}`;let f=!0;typeof window.ShadyCSS>"u"?f=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),f=!1);const W=r=>t=>{const e=O(t.type,r);let s=S.get(e);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},S.set(e,s));let i=s.stringsArray.get(t.strings);if(i!==void 0)return i;const o=t.strings.join(R);if(i=s.keyString.get(o),i===void 0){const n=t.getTemplateElement();f&&window.ShadyCSS.prepareTemplateDom(n,r),i=new x(t,n),s.keyString.set(o,i)}return s.stringsArray.set(t.strings,i),i},H=["html","svg"],K=r=>{H.forEach(t=>{const e=S.get(O(t,r));e!==void 0&&e.keyString.forEach(s=>{const{element:{content:i}}=s,o=new Set;Array.from(i.querySelectorAll("style")).forEach(n=>{o.add(n)}),N(s,o)})})},I=new Set,Y=(r,t,e)=>{I.add(r);const s=e?e.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(o===0){window.ShadyCSS.prepareTemplateStyles(s,r);return}const n=document.createElement("style");for(let l=0;l<o;l++){const p=i[l];p.parentNode.removeChild(p),n.textContent+=p.textContent}K(r);const a=s.content;e?J(e,n,a.firstChild):a.insertBefore(n,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,r);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(e){a.insertBefore(n,a.firstChild);const l=new Set;l.add(n),N(e,l)}},G=(r,t,e)=>{if(!e||typeof e!="object"||!e.scopeName)throw new Error("The `scopeName` option is required.");const s=e.scopeName,i=d.has(t),o=f&&t.nodeType===11&&!!t.host,n=o&&!I.has(s),a=n?document.createDocumentFragment():t;if(L(r,a,Object.assign({templateFactory:W(s)},e)),n){const c=d.get(a);d.delete(a);const l=c.value instanceof M?c.value.template:void 0;Y(s,a,l),k(t,t.firstChild),t.appendChild(a),d.set(t,c)}!i&&o&&window.ShadyCSS.styleElement(t.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var q;window.JSCompiler_renameProperty=(r,t)=>r;const C={toAttribute(r,t){switch(t){case Boolean:return r?"":null;case Object:case Array:return r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){switch(t){case Boolean:return r!==null;case Number:return r===null?null:Number(r);case Object:case Array:return JSON.parse(r)}return r}},z=(r,t)=>t!==r&&(t===t||r===r),_={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:z},m=1,g=4,w=8,P=16,b="finalized";class F extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);i!==void 0&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((e,s)=>this._classProperties.set(s,e))}}static createProperty(t,e=_){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s=typeof t=="symbol"?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdateInternal(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||_}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(b)||t.finalize(),this[b]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(e):[]];for(const i of s)this.createProperty(i,e[i])}}static _attributeNameForProperty(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=z){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||C,o=typeof i=="function"?i:i.fromAttribute;return o?o(t,s):t}static _propertyValueToAttribute(t,e){if(e.reflect===void 0)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||C.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const s=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=_){const i=this.constructor,o=i._attributeNameForProperty(t,s);if(o!==void 0){const n=i._propertyValueToAttribute(e,s);if(n===void 0)return;this._updateState=this._updateState|w,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._updateState=this._updateState&~w}}_attributeToProperty(t,e){if(this._updateState&w)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(i!==void 0){const o=s.getPropertyOptions(i);this._updateState=this._updateState|P,this[i]=s._propertyValueFromAttribute(e,o),this._updateState=this._updateState&~P}}requestUpdateInternal(t,e,s){let i=!0;if(t!==void 0){const o=this.constructor;s=s||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),s.reflect===!0&&!(this._updateState&P)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|g;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&g}get hasUpdated(){return this._updateState&m}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(s){throw t=!1,this._markUpdated(),s}t&&(this._updateState&m||(this._updateState=this._updateState|m,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~g}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,s)=>this._propertyToAttribute(s,this[s],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}q=b;F[q]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const T=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,A=Symbol();class E{constructor(t,e){if(e!==A)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(T?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=r=>new E(String(r),A),X=r=>{if(r instanceof E)return r.cssText;if(typeof r=="number")return r;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${r}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},Z=(r,...t)=>{const e=t.reduce((s,i,o)=>s+X(i)+r[o+1],r[0]);return new E(e,A)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const U={};class y extends F{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(o,n)=>o.reduceRight((a,c)=>Array.isArray(c)?e(c,a):(a.add(c),a),n),s=e(t,new Set),i=[];s.forEach(o=>i.unshift(o)),this._styles=i}else this._styles=t===void 0?[]:[t];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!T){const s=Array.prototype.slice.call(e.cssRules).reduce((i,o)=>i+o.cssText,"");return Q(s)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(e=>e.cssText),this.localName):T?this.renderRoot.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==U&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const i=document.createElement("style");i.textContent=s.cssText,this.renderRoot.appendChild(i)}))}render(){return U}}y.finalized=!0;y.render=G;y.shadowRootOptions={mode:"open"};class tt extends y{static get properties(){return{color:String,iClass:{attribute:"class"},src:String,style:String,size:String,pathPrefix:{attribute:"path-prefix"}}}static get styles(){return Z`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      :host svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `}getSources(t){const e={fas:"solid",far:"regular",fal:"light",fab:"brands",fa:"solid"},s=n=>{let a=n.split(" ");return[e[a[0]],i(a[1])]},i=n=>n.replace("fa-","");let o=s(t);return`${this.pathPrefix}/@fortawesome/fontawesome-free/sprites/${o[0]}.svg#${o[1]}`}constructor(){super(),this.iClass="",this.src="",this.style="",this.size="",this.color="",this.pathPrefix="node_modules"}firstUpdated(){this.src=this.getSources(this.iClass)}_parseStyles(){return`
      ${this.size?`width: ${this.size};`:""}
      ${this.size?`height: ${this.size};`:""}
      ${this.color?`fill: ${this.color};`:""}
      ${this.style}
    `}render(){return V`
      <svg 
        .style="${this._parseStyles()}">
        <use 
          href="${this.src}">
        </use>
      </svg>
    `}}customElements.define("fa-icon",tt);
