/**
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
 */const H=new WeakMap,Z=i=>(...t)=>{const e=i(...t);return H.set(e,!0),e},w=i=>typeof i=="function"&&H.has(i);/**
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
 */const L=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,D=(i,t,e=null,s=null)=>{for(;t!==e;){const n=t.nextSibling;i.insertBefore(t,s),t=n}},j=(i,t,e=null)=>{for(;t!==e;){const s=t.nextSibling;i.removeChild(t),t=s}};/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const h={},S={};/**
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
 */const g=`{{lit-${String(Math.random()).slice(2)}}}`,R=`<!--${g}-->`,C=new RegExp(`${g}|${R}`),N="$lit$";class tt{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,r=-1,a=0;const{strings:y,values:{length:W}}=t;for(;a<W;){const l=o.nextNode();if(l===null){o.currentNode=n.pop();continue}if(r++,l.nodeType===1){if(l.hasAttributes()){const d=l.attributes,{length:b}=d;let f=0;for(let u=0;u<b;u++)M(d[u].name,N)&&f++;for(;f-- >0;){const u=y[a],v=T.exec(u)[2],x=v.toLowerCase()+N,_=l.getAttribute(x);l.removeAttribute(x);const p=_.split(C);this.parts.push({type:"attribute",index:r,name:v,strings:p}),a+=p.length-1}}l.tagName==="TEMPLATE"&&(n.push(l),o.currentNode=l.content)}else if(l.nodeType===3){const d=l.data;if(d.indexOf(g)>=0){const b=l.parentNode,f=d.split(C),u=f.length-1;for(let v=0;v<u;v++){let x,_=f[v];if(_==="")x=m();else{const p=T.exec(_);p!==null&&M(p[2],N)&&(_=_.slice(0,p.index)+p[1]+p[2].slice(0,-N.length)+p[3]),x=document.createTextNode(_)}b.insertBefore(x,l),this.parts.push({type:"node",index:++r})}f[u]===""?(b.insertBefore(m(),l),s.push(l)):l.data=f[u],a+=u}}else if(l.nodeType===8)if(l.data===g){const d=l.parentNode;(l.previousSibling===null||r===c)&&(r++,d.insertBefore(m(),l)),c=r,this.parts.push({type:"node",index:r}),l.nextSibling===null?l.data="":(s.push(l),r--),a++}else{let d=-1;for(;(d=l.data.indexOf(g,d+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}for(const l of s)l.parentNode.removeChild(l)}}const M=(i,t)=>{const e=i.length-t.length;return e>=0&&i.slice(e)===t},G=i=>i.index!==-1,m=()=>document.createComment(""),T=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */class k{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)s!==void 0&&s.setValue(t[e]),e++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const t=L?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o=0,c=0,r,a=n.nextNode();for(;o<s.length;){if(r=s[o],!G(r)){this.__parts.push(void 0),o++;continue}for(;c<r.index;)c++,a.nodeName==="TEMPLATE"&&(e.push(a),n.currentNode=a.content),(a=n.nextNode())===null&&(n.currentNode=e.pop(),a=n.nextNode());if(r.type==="node"){const y=this.processor.handleTextExpression(this.options);y.insertAfterNode(a.previousSibling),this.__parts.push(y)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}return L&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
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
 */const I=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:i=>i}),q=` ${g} `;class E{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const o=this.strings[n],c=o.lastIndexOf("<!--");s=(c>-1||s)&&o.indexOf("-->",c+1)===-1;const r=T.exec(o);r===null?e+=o+(s?q:R):e+=o.substr(0,r.index)+r[1]+r[2]+N+r[3]+g}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return I!==void 0&&(e=I.createHTML(e)),t.innerHTML=e,t}}class z extends E{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),D(e,s.firstChild),t}}/**
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
 */const A=i=>i===null||!(typeof i=="object"||typeof i=="function"),V=i=>Array.isArray(i)||!!(i&&i[Symbol.iterator]);class ${constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let n=0;n<s.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new B(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(e===1&&t[0]===""&&t[1]===""){const o=s[0].value;if(typeof o=="symbol")return String(o);if(typeof o=="string"||!V(o))return o}let n="";for(let o=0;o<e;o++){n+=t[o];const c=s[o];if(c!==void 0){const r=c.value;if(A(r)||!V(r))n+=typeof r=="string"?r:String(r);else for(const a of r)n+=typeof a=="string"?a:String(a)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class B{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==h&&(!A(t)||t!==this.value)&&(this.value=t,w(t)||(this.committer.dirty=!0))}commit(){for(;w(this.value);){const t=this.value;this.value=h,t(this)}this.value!==h&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=h,e(this)}const t=this.__pendingValue;t!==h&&(A(t)?t!==this.value&&this.__commitText(t):t instanceof E?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):V(t)?this.__commitIterable(t):t===S?(this.value=S,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=t??"";const s=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof k&&this.value.template===e)this.value.update(t.values);else{const s=new k(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s=0,n;for(const o of t)n=e[s],n===void 0&&(n=new P(this.options),e.push(n),s===0?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(o),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){j(this.startNode.parentNode,t.nextSibling,this.endNode)}}class J{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=h,e(this)}if(this.__pendingValue===h)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=h}}class K extends ${constructor(t,e,s){super(t,e,s),this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new Q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Q extends B{}let O=!1;(()=>{try{const i={get capture(){return O=!0,!1}};window.addEventListener("test",i,i),window.removeEventListener("test",i,i)}catch{}})();class U{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(t){this.__pendingValue=t}commit(){for(;w(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=h,o(this)}if(this.__pendingValue===h)return;const t=this.__pendingValue,e=this.value,s=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=t!=null&&(e==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=X(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=h}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const X=i=>i&&(O?{capture:i.capture,passive:i.passive,once:i.once}:i.capture);/**
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
 */class Y{handleAttributeExpressions(t,e,s,n){const o=e[0];return o==="."?new K(t,e.slice(1),s).parts:o==="@"?[new U(t,e.slice(1),n.eventContext)]:o==="?"?[new J(t,e.slice(1),s)]:new $(t,e,s).parts}handleTextExpression(t){return new P(t)}}const F=new Y;/**
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
 */typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const et=(i,...t)=>new E(i,t,"html",F),st=(i,...t)=>new z(i,t,"svg",F);export{P as N,tt as T,k as a,Z as d,et as h,G as i,g as m,j as r,st as s};
