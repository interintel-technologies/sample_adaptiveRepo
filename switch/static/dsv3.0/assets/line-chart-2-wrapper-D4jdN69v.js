import{i as _,h as O,r as $,g as F,k as L,a as U,o as I,j as T}from"./index-C2PWchud.js";import"./transform-C4D8YA0C.js";import{t as W,e as Y}from"./time-HS-tJ9wA.js";import{a as q,l as B,m as H,b as Z}from"./linear-B99wrUbv.js";import"./month-range-picker-D48UZdJR.js";import{s as k}from"./value-_r9_x9JY.js";import{a as J,t as P}from"./defaultLocale-CUWc-s_R.js";import{l as Q}from"./line-yPdCpPKw.js";import{w as X}from"./datasource-mixin-DMQBE4lo.js";import"./array-UnU61Zeg.js";import"./constant-BhYcI2Bl.js";import"./path-BevWroqt.js";var V={},S={},M=34,x=10,R=13;function D(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function G(e,t){var o=D(e);return function(a,n){return t(o(a),n,e)}}function N(e){var t=Object.create(null),o=[];return e.forEach(function(a){for(var n in a)n in t||o.push(t[n]=n)}),o}function u(e,t){var o=e+"",a=o.length;return a<t?new Array(t-a+1).join(0)+o:o}function K(e){return e<0?"-"+u(-e,6):e>9999?"+"+u(e,6):u(e,4)}function tt(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),a=e.getUTCSeconds(),n=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":K(e.getUTCFullYear())+"-"+u(e.getUTCMonth()+1,2)+"-"+u(e.getUTCDate(),2)+(n?"T"+u(t,2)+":"+u(o,2)+":"+u(a,2)+"."+u(n,3)+"Z":a?"T"+u(t,2)+":"+u(o,2)+":"+u(a,2)+"Z":o||t?"T"+u(t,2)+":"+u(o,2)+"Z":"")}function et(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function a(r,s){var d,l,c=n(r,function(y,g){if(d)return d(y,g-1);l=y,d=s?G(y,s):D(y)});return c.columns=l||[],c}function n(r,s){var d=[],l=r.length,c=0,y=0,g,A=l<=0,C=!1;r.charCodeAt(l-1)===x&&--l,r.charCodeAt(l-1)===R&&--l;function z(){if(A)return S;if(C)return C=!1,V;var E,j=c,b;if(r.charCodeAt(j)===M){for(;c++<l&&r.charCodeAt(c)!==M||r.charCodeAt(++c)===M;);return(E=c)>=l?A=!0:(b=r.charCodeAt(c++))===x?C=!0:b===R&&(C=!0,r.charCodeAt(c)===x&&++c),r.slice(j+1,E-1).replace(/""/g,'"')}for(;c<l;){if((b=r.charCodeAt(E=c++))===x)C=!0;else if(b===R)C=!0,r.charCodeAt(c)===x&&++c;else if(b!==o)continue;return r.slice(j,E)}return A=!0,r.slice(j,l)}for(;(g=z())!==S;){for(var w=[];g!==V&&g!==S;)w.push(g),g=z();s&&(w=s(w,y++))==null||d.push(w)}return d}function h(r,s){return r.map(function(d){return s.map(function(l){return m(d[l])}).join(e)})}function p(r,s){return s==null&&(s=N(r)),[s.map(m).join(e)].concat(h(r,s)).join(`
`)}function f(r,s){return s==null&&(s=N(r)),h(r,s).join(`
`)}function v(r){return r.map(i).join(`
`)}function i(r){return r.map(m).join(e)}function m(r){return r==null?"":r instanceof Date?tt(r):t.test(r+="")?'"'+r.replace(/"/g,'""')+'"':r}return{parse:a,parseRows:n,format:p,formatBody:f,formatRows:v,formatRow:i,formatValue:m}}var rt=et(","),ot=rt.parse;function nt(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function at(e,t){return fetch(e,t).then(nt)}function it(e){return function(t,o,a){return arguments.length===2&&typeof o=="function"&&(a=o,o=void 0),at(t,o).then(function(n){return e(n,a)})}}var st=it(ot);const ct=_`
.card{
    box-sizing: border-box;
    align-items: center;
    padding: 20px;
    gap: 8px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;
    background-color:var(--paper);

}
.card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);

}


  .tabs-container{
    width:100%
  }
  .columns {
    width: 100%;
  }
  .tab-content {
    display: block;
  }
  svg {
    width: 100%;
    height: 400px; 
  }
  .tag {
    font-weight: bold;
    min-width:60px;
    margin-left:5px;
    margin-right:3px;
  }
 
  .tooltip {
    position: absolute;
    opacity:0;
    text-align: center;
    padding: 5px;
    font: 12px sans-serif;
    background: var(--paper);
    border: 0px;
    border-radius: 8px;
    pointer-events: none;
    color:var(--link--color-invert);
  }


  @media (max-width: 600px) {
   

    svg {
        width: 100%;
        height: 300px;
    }
    g.svg{
      width: 100%;
    }

    .card {
        padding: 10px;
    }

    .axis text {
        font-size: 10px;
    }

    .tooltip {
        font-size: 10px;
    }
    g.x-axis{
      opacity:0;
      display:none !important;
    }
    g[Attributes Style] {
      transform: translate(58, 20);
  }

  .tab-contents{
      margin-left: 5%;
}
  
}
`;class lt extends O{static get styles(){return[$(F),ct,_`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        .tooltip {
          position: absolute;
          text-align: center;
          width: auto;
          padding: 8px;
          background: lightsteelblue;
          border-radius: 4px;
          pointer-events: none;
          opacity: 0;
        }
      `]}static get properties(){return{data:{type:Array},keys:{type:Array},fromMonth:{type:String},toMonth:{type:String},rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.keys=[],this.rows=[],this.data=[],this.cols=[],this.colorCodes=[],this.fromMonth="",this.toMonth=""}updated(t){super.updated(t),(t.has("cols")||t.has("rows")||t.has("e"))&&(this.colorCodes=[this.primaryColor,this.surfaceVariantColor,this.secondaryColor],this.updateChart()),(t.has("fromMonth")||t.has("toMonth"))&&this.updateChart()}handleMonthRangeChange(t){this.fromMonth=t.detail.fromMonth,this.toMonth=t.detail.toMonth}updateChart(){this.createChart()}createChart(){const t={top:20,right:30,bottom:30,left:60},o=this.clientWidth-t.left-t.right,a=this.clientHeight-t.top-t.bottom;k(this.renderRoot.querySelector("#my_dataviz")).selectAll("*").remove();const n=k(this.renderRoot.querySelector("#my_dataviz")).append("svg").attr("width",o+t.left+t.right).attr("height",a+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")");st("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",function(h){return{date:J("%Y-%m-%d")(h.date),value:+h.value}}).then(h=>{const p=W().domain(Y(h,i=>i.date)).range([0,o]);n.append("g").attr("transform","translate(0,"+a+")").call(q(p));const f=B().domain([0,H(h,i=>+i.value)]).range([a,0]);n.append("g").call(Z(f)),n.append("path").datum(h).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",2).attr("d",Q().x(i=>p(i.date)).y(i=>f(i.value)));const v=k(this.renderRoot.querySelector(".tooltip"));n.selectAll("circle").data(h).enter().append("circle").attr("r",4).attr("cx",i=>p(i.date)).attr("cy",i=>f(i.value)).attr("fill","steelblue").on("mouseover",(i,m)=>{v.style("opacity",1).html(`Date: ${P("%Y-%m-%d")(m.date)}<br>Value: ${m.value}`).style("left",i.pageX+10+"px").style("top",i.pageY-30+"px")}).on("mouseout",()=>v.style("opacity",0))})}render(){return L`
      <div class="content">
        <div class="card">
          <h6 class="card-header-title">${this.e.name}</h6>
          <div class="card-content scroll-container">
            <div class="columns is-mobile">
              <div class="tabs-container">
                <div class="tab-contents">
                  <div class="tab-content">
                    <div id="my_dataviz" style="width: 100%; height: 400px;"></div>
                    ${this.keys.map((t,o)=>L`
                        <span
                          class="tag"
                          style="background-color: ${this.colorCodes[o]}; color: var(--white);"
                          >${t}</span
                        >
                      `)}
                  </div>
                </div>
              </div>
              <div class="tooltip"></div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("line-chart-2",lt);const ut=({element:e,data:t,rows:o,cols:a})=>{const n=U.useRef(null),h=I(),p=getComputedStyle(document.documentElement).getPropertyValue("--primary"),f=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-surfaceVariant"),v=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-secondary");return U.useEffect(()=>{n.current&&e&&(n.current.e=e,n.current.rows=o,n.current.cols=a,n.current.theme=h,n.current.primaryColor=p,n.current.surfaceVariantColor=f,n.current.secondaryColor=v)},[e,o,a]),T.jsx("div",{children:e&&t&&o?T.jsx("line-chart-2",{id:"line-chart-2",ref:n}):T.jsx("p",{children:"Loading data..."})})},Et=X(ut);export{Et as default};
