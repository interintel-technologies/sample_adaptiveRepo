var v=Object.defineProperty;var R=(s,a,e)=>a in s?v(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e;var h=(s,a,e)=>R(s,typeof a!="symbol"?a+"":a,e);import{h as w,i as C,k as j,a as f,j as p}from"./index-C2PWchud.js";import"./transform-C4D8YA0C.js";import{l as E,m as S,a as z,b as A}from"./linear-B99wrUbv.js";import{b as y}from"./band-BugeWyNR.js";import{o as $}from"./ordinal-CG2fZEFB.js";import{s as l}from"./value-_r9_x9JY.js";import{w as _}from"./datasource-mixin-DMQBE4lo.js";import"./array-UnU61Zeg.js";class m extends w{constructor(){super(),this.data=[],this.handleResize=this.handleResize.bind(this)}firstUpdated(){this._renderChart(),window.addEventListener("resize",this.handleResize)}updated(a){a.has("data")&&(console.log(this.data),this._renderChart())}handleResize(){this._renderChart()}_renderChart(){const a=l(this.shadowRoot.querySelector("svg"));a.selectAll("*").remove();const e={top:20,right:30,bottom:40,left:40},o=this.clientWidth-e.left-e.right,u=this.clientHeight-e.top-e.bottom;if(!this.data||this.data.length===0)return;const i=Object.keys(this.data[0]).filter(t=>t!=="links"),d=y().domain(this.data.map((t,r)=>r)).rangeRound([e.left,o-e.right]).paddingInner(.1),g=y().domain(i).rangeRound([0,d.bandwidth()]).padding(.05),n=E().domain([0,S(this.data,t=>Math.max(...i.map(r=>+t[r])))]).nice().rangeRound([u-e.bottom,e.top]),x=$().domain(i).range([getComputedStyle(this).getPropertyValue("--primary").trim(),getComputedStyle(this).getPropertyValue("--secondary").trim(),getComputedStyle(this).getPropertyValue("--black").trim()]),b=t=>t.attr("transform",`translate(0,${u-e.bottom})`).call(z(d).tickFormat(r=>i[r]||`Data ${r+1}`)).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-45)"),k=t=>t.attr("transform",`translate(${e.left},0)`).call(A(n).ticks(null,"s")).call(r=>r.select(".domain").remove()),c=l(this.shadowRoot.querySelector(".tooltip"));a.append("g").selectAll("g").data(this.data).join("g").attr("transform",(t,r)=>`translate(${d(r)},0)`).selectAll("rect").data(t=>i.map(r=>({key:r,value:+t[r]}))).join("rect").attr("x",t=>g(t.key)).attr("y",t=>n(t.value)).attr("width",g.bandwidth()).attr("height",t=>n(0)-n(t.value)).attr("fill",t=>x(t.key)).on("mouseover",function(t,r){c.transition().duration(200).style("opacity",.9),c.html(`${r.key}: ${r.value}`).style("left",t.pageX+5+"px").style("top",t.pageY-28+"px"),l(this).style("stroke","black").style("transform","scale(0.9)")}).on("mouseout",function(){c.transition().duration(500).style("opacity",0),l(this).style("stroke","none").style("transform","scale(1)")}),a.append("g").call(b),a.append("g").call(k)}render(){return j`
     
      <svg></svg>
    `}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize)}}h(m,"styles",C`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    svg {
      width: 100%;
      height: 40vh; /* Increased height */
    }
    .tooltip {
      position: absolute;
      text-align: center;
      padding: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      border-radius: 3px;
      pointer-events: none;
      opacity: 0;
    }
    /* Define colors as CSS variables */
    :host {
      --primary: #1f77b4; /* Example primary color */
      --secondary: #ff7f0e; /* Example secondary color */
      --black: #000; /* Black color */
    }
  `),h(m,"properties",{data:{type:Array}});customElements.define("bar-chart",m);const L=({element:s,data:a,rows:e})=>{const o=f.useRef(null);return f.useEffect(()=>{o.current&&e&&(o.current.rows=e,o.current.e=s,o.current.data=a)},[e]),p.jsx("div",{children:s&&a&&e?p.jsx("bar-chart",{ref:o}):p.jsx("p",{children:"Loading data..."})})},H=_(L);export{H as default};
