import{i as x,h as b,r as C,g as w,k as g,a as y,o as k,j as u}from"./index-C2PWchud.js";import"./transform-C4D8YA0C.js";import{l as M,m as f,a as S,b as $}from"./linear-B99wrUbv.js";import{b as A}from"./band-BugeWyNR.js";import{o as R}from"./ordinal-CG2fZEFB.js";import"./month-range-picker-D48UZdJR.js";import{s as c}from"./value-_r9_x9JY.js";import{w as j}from"./datasource-mixin-DMQBE4lo.js";import"./array-UnU61Zeg.js";const E=x`
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
`;class V extends b{static get styles(){return[C(w),E,x`
        :host {
          display: block;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      `]}static get properties(){return{data:{type:Array},keys:{type:Array},fromMonth:{type:String},toMonth:{type:String},rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.keys=[],this.rows=[],this.data=[],this.cols=[],this.colorCodes=[],this.fromMonth="",this.toMonth=""}updated(r){super.updated(r),(r.has("cols")||r.has("rows")||r.has("e"))&&(this.data=[...this.rows.map(a=>Object.fromEntries(a.map((e,o)=>[this.cols[o].label,e])))],this.fromMonth=this.data[0].month||"",this.toMonth=this.data[this.data.length-1].month||"",this.keys=Object.keys(this.data[0]||{}).filter(a=>a!=="month"),this.colorCodes=[this.primaryColor,this.surfaceVariantColor,this.secondaryColor]),(r.has("fromMonth")||r.has("toMonth"))&&this.updateChart()}handleMonthRangeChange(r){this.fromMonth=r.detail.fromMonth,this.toMonth=r.detail.toMonth}isDarkColor(r){return["var(--black)","var(--primary)"].includes(r)}updateChart(){const r=this.data.filter(a=>{const e=a.month;return e>=this.fromMonth&&e<=this.toMonth});this.createChart(r,this.keys)}createChart(r,a){const e={top:20,right:20,bottom:50,left:40},o=c(this.shadowRoot.querySelector("svg"));o.selectAll("*").remove();const m=parseInt(o.style("width"))-e.left-e.right,s=parseInt(o.style("height"))-e.top-e.bottom,l=o.append("g").attr("transform",`translate(${e.left},${e.top})`).attr("class","svg"),n=A().domain(r.map(t=>t.month)).rangeRound([0,m]).paddingInner(.3).paddingOuter(.3),h=M().domain([0,f(r,t=>f(a,d=>t[d]))]).nice().rangeRound([s,0]),v=R().domain(a).range(this.colorCodes),p=c(this.shadowRoot.querySelector(".tooltip"));l.append("g").selectAll("g").data(r).enter().append("g").attr("transform",t=>`translate(${n(t.month)},0)`).selectAll("rect").data(t=>a.map(d=>({key:d,value:t[d]}))).enter().append("rect").attr("x",t=>n.bandwidth()/a.length*a.indexOf(t.key)).attr("y",t=>h(t.value)).attr("width",n.bandwidth()/a.length).attr("height",t=>s-h(t.value)).attr("fill",t=>v(t.key)).attr("rx",t=>h(t.value)<s?10:0).attr("ry",t=>h(t.value)<s?10:0).style("transition","transform 0.2s, stroke 0.2s").on("mouseover",function(t,d){p.transition().duration(200).style("opacity",.9),p.html(`${t.key}: ${t.value}`).style("left",(void 0)(t)[0]+70+"px").style("top",(void 0)(t)[1]+"px"),c(this).style("stroke","black").style("transform","scale(0.9)")}).on("mouseout",function(){p.transition().duration(500).style("opacity",0),c(this).style("stroke","none").style("transform","scale(1)")}),l.append("g").attr("class","x-axis").attr("transform",`translate(0,${s})`).call(S(n)).selectAll("text").style("text-anchor","start").attr("dx","0.8em").attr("dy","0").attr("transform","rotate(45)"),l.append("g").attr("class","y-axis").call($(h).ticks(4))}render(){return g`
    <div class="content">
    <div class="card">
      <h6 class="card-header-title">${this.e.name}</h6>
      <div class="card-content scroll-container">
        <div class="columns is-mobile">
          <div class="tabs-container">
            <month-range-picker .data="${this.data}" @month-range-changed="${this.handleMonthRangeChange}"></month-range-picker>
            <div class="tab-contents">
              <div class="tab-content">
                <svg></svg>
                ${this.keys.map((r,a)=>{const e=this.colorCodes[a],o=this.theme.palette.getContrastText?this.theme.palette.getContrastText(e):"var(--white-ter--800--lighten)";return g`<span class="tag" style="background-color: ${e}; color: ${o};">${r}</span>`})}
                
                </div>
                <div class="tooltip"></div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `}}customElements.define("summary-chart",V);const z=({element:i,data:r,rows:a,cols:e})=>{const o=y.useRef(null),m=k(),s=getComputedStyle(document.documentElement).getPropertyValue("--primary"),l=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-surfaceVariant"),n=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-secondary");return y.useEffect(()=>{o.current&&i&&(o.current.e=i,o.current.rows=a,o.current.cols=e,o.current.theme=m,o.current.primaryColor=s,o.current.surfaceVariantColor=l,o.current.secondaryColor=n)},[i,a,e]),u.jsx("div",{children:i&&r&&a?u.jsx("summary-chart",{id:"summary-chart",ref:o}):u.jsx("p",{children:"Loading data..."})})},F=j(z);export{F as default};
