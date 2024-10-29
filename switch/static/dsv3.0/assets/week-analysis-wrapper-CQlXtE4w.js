import{i as g,h as k,r as v,g as f,k as d,a as y,j as u}from"./index-C2PWchud.js";import"./transform-C4D8YA0C.js";import{o as x}from"./ordinal-CG2fZEFB.js";import{w}from"./datasource-mixin-DMQBE4lo.js";import"./array-UnU61Zeg.js";const S=g`
  .candle {
    height: 35vh;
    width: 30px;
    border-radius: 50px;
  }
  .columns.is-mobile {
    overflow-x: auto;
  }
  .column.is-flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card-header {
    box-shadow: none;
  }
  .card-header-title {
    margin: 0 !important;
  }
  .count-box {
    background-color: var(--primary);
    color: white;
    height: 40px !important;
    border: none;
    padding: 7px 21px;
    width: 60px;
    margin-right: 20px;
    border-radius: 6px;
  }
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 10px;
  }
  .summary {
    margin-bottom: 17px;
    align-items: center;
  }
  .button {
    box-shadow: none !important;
    border: 2.4px solid var(--primary);
    background-color: var(--primary) !important;
    color: white !important;
    border-radius: 100px;
    padding: 10px 30px;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .button:hover {
    background-color: var(--link) !important;
  }
  .button:active {
    transform: scale(0.95);
  }
  .block.is-flex {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    .block.is-flex {
      align-items: center;
    }
  }
`;class b extends k{static get styles(){return[v(f),S,g`
        :host {
          display: block;
        }
      `]}static get properties(){return{weekSummary:Array,weekAnalysis:Array,analysisAttributes:Array.prototype,colors:Array,colorScale:Object,e:{type:Object}}}constructor(){super(),this.weekAnalysis=[],this.weekSummary={},this.colors=[],this.analysisAttributes=[],this.colorScale={},this.e=null}updated(e){(e.has("rows")||e.has("cols"))&&(this.weekSummary=this.lines[0],this.analysisAttributes=this.cols.map(s=>s.label),this.createColors(),this.createColorScale(),this.createWeekAnalysis(),this._updateInsights()),console.log("this insights",this.insights)}createWeekAnalysis(){const e=["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];this.weekAnalysis=this.rows.map((s,t)=>({[e[t]]:Object.fromEntries(s.map((a,i)=>[this.analysisAttributes[i],a]))}))}createColors(){this.colors=this.analysisAttributes.map((e,s,t)=>this.randomColorGenerator(t.length,s))}createColorScale(){this.colorScale=x().domain(this.analysisAttributes).range(this.colors)}calculateGradient(e){let s=0;const t=[];return Object.entries(e).forEach(([a,i])=>s=s+i),s!==0?(Object.entries(e).forEach(([a,i],l,h)=>{const r=this.colorScale(a),o=i/s*100;let c,m;if(l===0)c=[r,0],m=[r,o];else{const p=t[l-1][1][1];c=[r,p],m=[r,p+o]}t.push([c,m])}),t.map(a=>a.map(i=>` ${i[0]} ${i[1]}%`)).join()):" #ccc, #ccc"}getCurrentWeek(){const e=new Date,s=e.getDate()-e.getDay(),t=s+6,a=new Date(e.setDate(s)).toDateString(),i=new Date(e.setDate(t)).toDateString();return`This week ${a} - ${i}`}randomColorGenerator(e,s){let t,a,i,l=s/e,h=~~(l*6),r=l*6-h,o=1-r;switch(h%6){case 0:t=1,a=r,i=0;break;case 1:t=o,a=1,i=0;break;case 2:t=0,a=1,i=r;break;case 3:t=0,a=o,i=1;break;case 4:t=r,a=0,i=1;break;case 5:t=1,a=0,i=o;break}return"#"+("00"+(~~(t*255)).toString(16)).slice(-2)+("00"+(~~(a*255)).toString(16)).slice(-2)+("00"+(~~(i*255)).toString(16)).slice(-2)}static get is(){return"week-analysis"}render(){return d`
      <div class="column content">
        <div class="card">
          <div class="card-header">
            <h3 class="card-header-title">${this.e.name}</h3>
            <div class="card-header-icon">
              <a
                href="${this.e.details.seeAllLink}"
                target="_blank"
                class="button"
                ><p>See All</p></a
              >
            </div>
          </div>
          <div class="card-content">
            <h4 style="padding-left: 0.8rem;">${this.getCurrentWeek()}</h4>
            <div class="columns" style="margin-top: 20px; margin-left: 0;">
              <div class="column is-8">
                <div class="columns is-mobile">
                  ${this.weekAnalysis.map(e=>Object.entries(e).map(([s,t])=>d`
                        <div class="column is-flex">
                          <h5>${s}</h5>
                          <div
                            class="candle"
                            style="background: linear-gradient(to top,${this.calculateGradient(t)});"
                          ></div>
                        </div>
                      `))}
                </div>
                <div class="columns">
                  ${this.analysisAttributes.map(e=>d`
                      <div class="column">
                        <div
                          class="is-flex"
                          style="justify-content: space-evenly;"
                        >
                          <span
                            class="circle"
                            style="background-color: ${this.colorScale(e)}"
                          ></span>
                          <p>${e}</p>
                        </div>
                      </div>
                    `)}
                </div>
              </div>
              <div class="column is-4">
                <div class="block is-flex">
                  <h5>This week's summary</h5>
                  <div class="column">
                    ${Object.entries(this.weekSummary).map(([e,s])=>d`
                        <span class="summary is-flex">
                          <div class="count-box">${s}</div>
                          <h6>${e}</h6>
                        </span>
                      `)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define(b.is,b);const A=({element:n,rows:e,cols:s})=>{const t=y.useRef(null);return y.useEffect(()=>{const a=t.current;a&&n&&(a.e=n,a.rows=e,a.cols=s)},[n,e,s]),u.jsx("div",{children:n?u.jsx("week-analysis",{id:"week-analysis",ref:t}):u.jsx("p",{children:"Loading data..."})})},E=w(A);export{E as default};
