import{h as O}from"./lit-html-dRijB2IX.js";class E{constructor(e){this.classes=new Set,this.element=e;const n=(e.getAttribute("class")||"").split(/\s+/);for(const a of n)this.classes.add(a)}add(e){this.classes.add(e),this.commit()}remove(e){this.classes.delete(e),this.commit()}commit(){let e="";this.classes.forEach(n=>e+=n+" "),this.element.setAttribute("class",e)}}function L(t){return t.classList||new E(t)}function g(t=1){return new Promise(e=>--t===0?requestAnimationFrame(()=>e()):e(g(t)))}function w(t){let e=t;for(;e=e.parentNode||e.host;)if(e instanceof HTMLElement)return e;return null}function P(t,e,n=!0){return new Promise(a=>{const s=new MutationObserver(async()=>{s.disconnect(),n&&await g(),a()});s.observe(t,{attributes:!0,attributeFilter:["class"]}),e&&e()})}function S(t){var e;return t.nodeName==="#text"&&!(!((e=t.nodeValue)===null||e===void 0)&&e.trim())}function k(t){const e=[];let n=t.startNode.nextSibling;for(;n!==t.endNode;)e.push(n),n=n.nextSibling;return e}function T(t){let n=k(t).filter(a=>!S(a));if(n.length!=1)throw new Error(`lit-transition directive expects exactly one child node,
      but was passed ${n.map(a=>a.nodeName).join(", ")}`);return n[0]}const C=new WeakMap;function D(t){return C.get(t)}function F(t,e){const n=w(t);return n&&(()=>{const s=document.createElement("div"),f=L(s),i=o=>Array.isArray(o)?o.forEach(r=>f.add(r)):f.add(o),l=n.shadowRoot||n;i(e),l.appendChild(s);const d=window.getComputedStyle(s).position;return l.removeChild(s),d})()==="absolute"?window.getComputedStyle(n).position==="relative":!1}function B(t){const e=t.getBoundingClientRect();let n=0,a=0;{let s=t.offsetParent;for(;t&&t!==document&&!(t instanceof DocumentFragment)&&t!==s;)n+=t.offsetTop-(t.scrollTop||0),a+=t.offsetLeft-(t.scrollLeft||0),t=w(t)}return{left:a,top:n,width:e.width,height:e.height}}function I(t,e){t.style.marginLeft="0px",t.style.marginTop="0px",t.style.left=e.left+"px",t.style.top=e.top+"px",t.style.width=e.width+"px",t.style.height=e.height+"px"}let x;function b(t=!document.hidden){x=t}b();document.addEventListener("visibilitychange",()=>b(),!1);function V(){return x}var m;(function(t){t.InOut="in-out",t.OutIn="out-in",t.Both="both"})(m||(m={}));var y;(function(t){t[t.None=0]="None",t[t.Lock=1]="Lock",t.Auto="auto"})(y||(y={}));function H(t={}){const{css:e,duration:n,enter:a={},leave:s={},mode:f=m.Both,onAfterEnter:i,onAfterLeave:l,onEnter:c,onLeave:d,skipHidden:o=!0}=t,r=!1;return{duration:n,skipHidden:o,css:O`<style>${e}</style>`,enter:a!=!1?Array.isArray(a)||typeof a=="string"?{active:a}:Object.assign({active:"enter-active",from:"enter-from",to:"enter-to"},a):!1,leave:s!=!1?Array.isArray(s)||typeof s=="string"?{active:s,lock:r}:Object.assign({active:"leave-active",from:"leave-from",to:"leave-to",lock:r},s):!1,onEnter:c,onLeave:d,onAfterEnter:i,onAfterLeave:l,mode:f}}function h(t,e){const n=e();for(let a in n)e[a]=n[a];return Object.defineProperty(e,"name",{get(){return t}}),e}function v(t,e){for(var n in e)try{e[n].constructor==Object?t[n]=v(t[n],e[n]):t[n]=e[n]}catch{t[n]=e[n]}return t}const R=h("fade",function(e={}){const{duration:n=500,ease:a="ease-out",opacity:s=0}=e;return v({enter:{active:"fade-enter-active",from:"fade-enter-from",to:"fade-enter-to"},leave:{active:"fade-leave-active",from:"fade-leave-from",to:"fade-leave-to",lock:!0},css:`
    .fade-leave-active {
      position: fixed;
      transition: opacity ${n}ms ${a}, transform ${n}ms ${a};
    }
    .fade-enter-active {
      transition: opacity ${n}ms ${a}, transform ${n}ms ${a};
    }
  .fade-enter-from, .fade-leave-to {
    opacity: ${s};
  }
  .fade-enter-to, .fade-leave-from {
    opacity: 1;
  }
  `},e)});h("land",function(e={}){const{duration:n=500,ease:a="ease-out",opacity:s=0}=e;return v({enter:{active:"land1-enter-active",from:"land1-enter-from",to:"land1-enter-to"},leave:{active:"land1-leave-active",from:"land1-leave-from",to:"land1-leave-to"},mode:"both",css:`
      .land1-enter-active {
        transform-origin: 50% 50%;
        transition: transform ${n}ms ${a}, opacity ${n}ms ${a};
      }
      .land1-leave-active {
        transform-origin: 50% 50%;
        position: absolute;
        transition: transform ${n}ms ${a}, opacity ${n}ms ${a};
      }
      .land1-enter-from {
        opacity: ${s};
        transform: translate(0px, 0px) scale(3);
      }
      .land1-leave-to {
        transform: translate(0px, 100px);
        opacity: ${s};
      }`},e)});const _=h("slide",function(e={}){const{left:n,right:a,up:s,down:f}=e;let i={};n&&(i={x:"-100%",x1:"100%"}),a&&(i={x:"100%",x1:"-100%"}),s&&(i={y:"100%",y1:"-100%"}),f&&(i={y:"-100%",y1:"100%"});let{mode:l,duration:c=500,x:d="100%",y:o="0%",x1:r="",y1:p="",ease:u="ease-out",leavePosition:A="",opacity:$=0}=Object.assign(Object.assign({},i),e);return r=r||d,p=p||o,v({enter:{active:"slide-enter-active",from:"slide-enter-from"},leave:{active:"slide-leave-active",to:"slide-leave-to",lock:y.Auto},css:`
    .slide-enter-active {
      transition: transform ${c}ms ${u}, opacity ${c}ms ${u};
    }
    .slide-leave-active {
      position: ${A||(l!==m.OutIn?"absolute":"initial")};
      transition: transform ${c}ms ${u}, opacity ${c}ms ${u};
    }
    .slide-leave-to {
      opacity: ${$};
      transform: translate(${d}, ${o});
    }
    .slide-enter-from {
      opacity: ${$};
      transform: translate(${r}, ${p});
    }`,mode:l},e)});export{y as G,T as a,I as b,L as c,P as d,H as e,R as f,D as m,F as n,V as p,B as r,_ as s};
