import{i as S,h as D,r as A,g as E,k as v,a as _,o as N,j as g}from"./index-C2PWchud.js";import{f as w}from"./transform-C4D8YA0C.js";import{t as j,e as K,m as L}from"./time-HS-tJ9wA.js";import{l as R,m as C,a as T,b as V}from"./linear-B99wrUbv.js";import{o as z}from"./ordinal-CG2fZEFB.js";import"./month-range-picker-D48UZdJR.js";import{s as p}from"./value-_r9_x9JY.js";import{l as I}from"./line-yPdCpPKw.js";import{t as O}from"./defaultLocale-CUWc-s_R.js";import{w as q}from"./datasource-mixin-DMQBE4lo.js";import"./array-UnU61Zeg.js";import"./constant-BhYcI2Bl.js";import"./path-BevWroqt.js";function k(i){return i<0?-1:1}function F(i,e,t){var s=i._x1-i._x0,o=e-i._x1,a=(i._y1-i._y0)/(s||o<0&&-0),l=(t-i._y1)/(o||s<0&&-0),n=(a*o+l*s)/(s+o);return(k(a)+k(l))*Math.min(Math.abs(a),Math.abs(l),.5*Math.abs(n))||0}function M(i,e){var t=i._x1-i._x0;return t?(3*(i._y1-i._y0)/t-e)/2:e}function y(i,e,t){var s=i._x0,o=i._y0,a=i._x1,l=i._y1,n=(a-s)/3;i._context.bezierCurveTo(s+n,o+n*e,a-n,l-n*t,a,l)}function m(i){this._context=i}m.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:y(this,this._t0,M(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,e){var t=NaN;if(i=+i,e=+e,!(i===this._x1&&e===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(i,e):this._context.moveTo(i,e);break;case 1:this._point=2;break;case 2:this._point=3,y(this,M(this,t=F(this,i,e)),t);break;default:y(this,this._t0,t=F(this,i,e));break}this._x0=this._x1,this._x1=i,this._y0=this._y1,this._y1=e,this._t0=t}}};Object.create(m.prototype).point=function(i,e){m.prototype.point.call(this,e,i)};function H(i){return new m(i)}const W=S`
.content{
  padding:.75rem;
}
.card{
    box-sizing: border-box;
    align-items: center;
    padding: 20px;
    gap: 8px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;

    

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


.legend {
  display: flex;
  justify-content: center;
  cursor: pointer;
  position:relative;
  top:-1rem;
}
.legend-item {
  display: flex;
  align-items: center;
  margin-right: 15px;
  
/* Frame 6 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 6px;
gap: 8px;

width: 119px;
height: 25px;

background: #FFFFFF;
border: 1px dashed #C8C5D1;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.legend-item span {
  display: inline-block;
  width: 26px;
  height: 2px;
  margin-right: 5px;
}
.legend-item p{
  color:#000 !important
}

`;class X extends D{static get styles(){return[A(E),W,S`
        :host {
          display: block;
        }
        svg {
          width: 100%;
          height: 400px;
        }
      `]}static get properties(){return{data:{type:Array},keys:{type:Array},rows:{type:Array},e:{type:Object},cols:{type:Array},hiddenKeys:{type:Array},fromMonth:{type:String},toMonth:{type:String}}}constructor(){super(),this.keys=[],this.rows=[],this.data=[],this.cols=[],this.colorCodes=[],this.hiddenKeys=[],this.fromMonth="",this.toMonth="",this.bgColor="",this.monthNames=[]}deduceAvailableMonths(){if(this.rows&&this.rows.length>0){const e=[...new Set(this.rows.map(t=>t[0].slice(0,7)))];this.monthNames=e.map(t=>{const s=t.split("-")[0],o=parseInt(t.split("-")[1],10)-1;return`${new Date(s,o).toLocaleString("default",{month:"long"})}`}),this.updateFilteredMonths()}}updated(e){super.updated(e),(e.has("cols")||e.has("rows")||e.has("e"))&&(this.bgColor=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-primaryContainer"),this.data=this.rows.map(t=>Object.fromEntries(t.map((s,o)=>[this.cols[o].label,s]))),this.keys=Object.keys(this.data[0]||{}).filter(t=>t!=="Date"),this.e.details.static_colors?this.colorCodes=this.e.details.color_pallete.split(",").map(t=>t.trim()):this.colorCodes=[this.primaryColor,this.surfaceVariantColor,this.secondaryColor],this.deduceAvailableMonths(),this.updateChart())}updateChart(){const e=this.fromMonth?new Date(this.fromMonth):null,t=this.toMonth?new Date(this.toMonth):null,s=this.data.filter(o=>{const a=new Date(o.Date);return(!e||a>=e)&&(!t||a<=t)});this.createChart(s,this.keys.filter(o=>!this.hiddenKeys.includes(o)))}toggleLine(e){this.hiddenKeys.includes(e)?this.hiddenKeys=this.hiddenKeys.filter(t=>t!==e):this.hiddenKeys=[...this.hiddenKeys,e],this.updateChart()}createChart(e,t){const s={top:20,right:20,bottom:50,left:50},o=p(this.shadowRoot.querySelector("svg"));o.selectAll("*").remove();const a=parseInt(o.style("width"))-s.left-s.right,l=400-s.top-s.bottom,n=o.append("g").attr("transform",`translate(${s.left},${s.top})`);e.forEach(r=>{r.date=new Date(r.Date)});const d=j().domain(K(e,r=>r.date)).range([0,a]),u=R().domain([0,C(e,r=>C(t,c=>isNaN(r[c])?0:r[c]))]).nice().range([l,0]),f=z().domain(t).range(this.colorCodes),$=I().x(r=>d(r.date)).y(r=>u(r.value)).curve(H),x=p(this.shadowRoot.querySelector(".tooltip")).style("position","absolute").style("display","none").style("background-color","var(--paper)").style("padding","5px").style("border","1px solid #ccc").style("border-radius","4px").style("pointer-events","none").style("box-shadow","0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)").style("border-radius","4px").style("font-weight","bolder").style("font-size","16px");t.forEach(r=>{const c=e.map(h=>({date:h.date,value:h[r]})).filter(h=>!isNaN(h.value));n.append("path").datum(c).attr("fill","none").attr("stroke",f(r)).attr("stroke-width",1).attr("d",$),n.selectAll(`.circle-${r}`).data(c).enter().append("circle").attr("class",`circle-${r}`).attr("cx",h=>d(h.date)).attr("cy",h=>u(h.value)).attr("r",5).attr("fill","none").attr("pointer-events","all").on("mouseover",function(h,P){const b=new Date(h.date).toLocaleDateString();console.log("formattedDate",b),p(this).transition().duration(100).attr("fill",f(r)).attr("r",7),x.style("left",w.pageX+"px").style("top",w.pageY+"px").style("display","block").html(`KES ${h.value},${b}`)}).on("mouseout",function(){p(this).transition().duration(100).attr("fill","none").attr("r",5).style("padding","20px").style("border","2px solid #FFFFFF").style("box-shadow","0px 2px 8px rgba(0, 0, 0, 0.25)"),x.style("display","none")})}),n.append("g").attr("class","x-axis").attr("transform",`translate(0,${l})`).attr("fill","var(--adaptive-ui-icon-stroke-color)").call(T(d).ticks(L.every(1)).tickFormat(O("%b"))),n.append("g").attr("class","y-axis").attr("fill","var(--adaptive-ui-icon-stroke-color)").call(V(u).ticks(6))}handleMonthRangeChange(e){this.fromMonth=e.detail.fromMonth,this.toMonth=e.detail.toMonth,this.updateChart()}hexToRgbA(e){var t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return t=e.substring(1).split(""),t.length==3&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),"rgba("+[t>>16&255,t>>8&255,t&255].join(",")+",1)";throw new Error("Bad Hex")}render(){return v`
    <div class="content">
      <div class="card" style="background: conic-gradient(from 208.84deg at 50% 50%, ${this.bgColor&&this.hexToRgbA(this.bgColor)} 0deg, #FFFFFF 91.8deg, ${this.bgColor&&this.hexToRgbA(this.bgColor)} 360deg);">
        <h6 class="card-header-title">${this.e.name}</h6>
        <div class="scroll-container">
          <div class="columns is-mobile">
            <div class="tabs-container">
              <div class="tab-contents">
              <div class="columns">
              <div class="column is-two-fifths">
              <month-range-picker .data="${this.data}" @month-range-changed="${this.handleMonthRangeChange}"></month-range-picker>
              </div>
              </div>
                <div class="tab-content">
                  <svg></svg>
                  <div class="legend">
                      ${this.keys&&this.keys.length>1&&this.keys.map((e,t)=>{const s=this.colorCodes[t],o=this.hiddenKeys.includes(e);return v`
                          <div class="legend-item" @click="${()=>this.toggleLine(e)}" style="opacity: ${o?.5:1};">
                            <span style="background-color: ${s};"></span>
                            <p>${e}</p>
                          </div>
                        `})}
                    </div>
                </div>
                <div class="tooltip"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `}}customElements.define("line-chart",X);const B=({element:i,data:e,rows:t,cols:s})=>{const o=_.useRef(null),a=N(),l=getComputedStyle(document.documentElement).getPropertyValue("--primary"),n=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-surfaceVariant"),d=getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-secondary");return _.useEffect(()=>{o.current&&i&&(o.current.e=i,o.current.rows=t,o.current.cols=s,o.current.theme=a,o.current.primaryColor=l,o.current.surfaceVariantColor=n,o.current.secondaryColor=d)},[i,t,s]),g.jsx("div",{children:i&&e&&t?g.jsx("line-chart",{id:"line-chart",ref:o}):g.jsx("p",{children:"Loading data..."})})},nt=q(B);export{nt as default};
