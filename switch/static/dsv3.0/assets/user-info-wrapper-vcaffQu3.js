import{a as n,j as s}from"./index-C2PWchud.js";import{w as r}from"./datasource-mixin-DMQBE4lo.js";const d=({rows:e,columns:l})=>{const[c,t]=n.useState([]);return n.useEffect(()=>{if(e&&l){const i=e.map(a=>Object.fromEntries(a.map((m,h)=>[l[h].label,m])))[0];t(i)}},[e,l]),!e||e.length===0?s.jsx("p",{children:"Loading data..."}):s.jsx("div",{className:"content",children:s.jsxs("div",{className:"mainInfo",children:[s.jsxs("div",{className:"avtr has-text-centered",children:[s.jsx("span",{className:"icon",children:s.jsx("i",{className:"fas fa-user-circle fa-5x"})}),s.jsx("div",{className:"name",children:s.jsx("h4",{children:e[0][1]})})]}),s.jsxs("div",{className:"columns is-mobile details is-multiline",children:[s.jsx("div",{className:"column is-6 is-6-mobile",children:s.jsxs("h5",{children:[s.jsx("span",{className:"icon",children:s.jsx("i",{className:"fas fa-envelope"})}),"Email: ",s.jsx("span",{className:"has-text-weight-light ml-2",children:e[0][2]})]})}),s.jsx("div",{className:"column is-6 is-6-mobile",children:s.jsxs("h5",{children:[s.jsx("span",{className:"icon",children:s.jsx("i",{className:"fas fa-map-marker"})}),"Address: ",s.jsx("span",{className:"has-text-weight-light ml-2",children:e[0][3]})]})}),s.jsx("div",{className:"column is-6 is-6-mobile",children:s.jsxs("h5",{children:[s.jsx("span",{className:"icon",children:s.jsx("i",{className:"fas fa-phone"})}),"Phone: ",s.jsx("span",{className:"has-text-weight-light ml-2",children:e[0][4]})]})}),s.jsx("div",{className:"column is-6 is-6-mobile",children:s.jsxs("h5",{children:[s.jsx("span",{className:"icon",children:s.jsx("i",{className:"fas fa-barcode"})}),"CustomerID: ",s.jsx("span",{className:"has-text-weight-light ml-2",children:e[0][5]})]})})]}),s.jsx("div",{className:"columns otherDetails is-mobile is-multiline",children:Object.entries(c).slice(6,-5).map(([i,a])=>s.jsxs("div",{className:"column is-one-fifth-desktop is-6-mobile p-5",children:[s.jsx("h4",{children:a}),s.jsx("h5",{className:"has-text-weight-light is-text-capitalized",children:i})]},i))}),s.jsx("div",{className:"columns is-multiline ftr is-mobile",children:Object.entries(c).slice(-5).map(([i,a])=>s.jsx("div",{className:"column is-one-fifth-desktop is-6-mobile py-3 px-4",title:i,children:s.jsx("h5",{children:s.jsx("a",{href:a,children:i})})},i))})]})})},o=r(d);export{o as default};