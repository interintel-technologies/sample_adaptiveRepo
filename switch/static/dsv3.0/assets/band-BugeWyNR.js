import"./transform-C4D8YA0C.js";import{i as M}from"./array-UnU61Zeg.js";import{o as v}from"./ordinal-CG2fZEFB.js";function w(n,a,g){n=+n,a=+a,g=(t=arguments.length)<2?(a=n,n=0,1):t<3?1:+g;for(var e=-1,t=Math.max(0,Math.ceil((a-n)/g))|0,o=new Array(t);++e<t;)o[e]=n+e*g;return o}function b(){var n=v().unknown(void 0),a=n.domain,g=n.range,e=[0,1],t,o,d=!1,i=0,m=0,h=.5;delete n.unknown;function u(){var r=a().length,c=e[1]<e[0],l=e[c-0],f=e[1-c];t=(f-l)/Math.max(1,r-i+m*2),d&&(t=Math.floor(t)),l+=(f-l-t*(r-i))*h,o=t*(1-i),d&&(l=Math.round(l),o=Math.round(o));var s=w(r).map(function(p){return l+t*p});return g(c?s.reverse():s)}return n.domain=function(r){return arguments.length?(a(r),u()):a()},n.range=function(r){return arguments.length?(e=[+r[0],+r[1]],u()):e.slice()},n.rangeRound=function(r){return e=[+r[0],+r[1]],d=!0,u()},n.bandwidth=function(){return o},n.step=function(){return t},n.round=function(r){return arguments.length?(d=!!r,u()):d},n.padding=function(r){return arguments.length?(i=Math.min(1,m=+r),u()):i},n.paddingInner=function(r){return arguments.length?(i=Math.min(1,r),u()):i},n.paddingOuter=function(r){return arguments.length?(m=+r,u()):m},n.align=function(r){return arguments.length?(h=Math.max(0,Math.min(1,r)),u()):h},n.copy=function(){return b(a(),e).round(d).paddingInner(i).paddingOuter(m).align(h)},M.apply(u(),arguments)}export{b};