import{S as f,r as m,c as p,i as a,a as c,d as l,e as g}from"./transform-C4D8YA0C.js";function N(e){return typeof e=="string"?new f([[document.querySelector(e)]],[document.documentElement]):new f([[e]],m)}function A(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,i=n.slice(),r;return function(u){for(r=0;r<t;++r)i[r]=e[r]*(1-u)+n[r]*u;return i}}function w(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function d(e,n){var t=n?n.length:0,i=e?Math.min(t,e.length):0,r=new Array(i),u=new Array(t),o;for(o=0;o<i;++o)r[o]=s(e[o],n[o]);for(;o<t;++o)u[o]=n[o];return function(y){for(o=0;o<i;++o)u[o]=r[o](y);return u}}function h(e,n){var t=new Date;return e=+e,n=+n,function(i){return t.setTime(e*(1-i)+n*i),t}}function v(e,n){var t={},i={},r;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(r in n)r in e?t[r]=s(e[r],n[r]):i[r]=n[r];return function(u){for(r in t)i[r]=t[r](u);return i}}function s(e,n){var t=typeof n,i;return n==null||t==="boolean"?p(n):(t==="number"?a:t==="string"?(i=c(n))?(n=i,l):g:n instanceof c?l:n instanceof Date?h:w(n)?A:Array.isArray(n)?d:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?v:a)(e,n)}export{s as i,N as s};