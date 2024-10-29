import{i as y,h as f,r as p,g as h,k as m,a as l,j as b}from"./index-C2PWchud.js";import{w as g}from"./datasource-mixin-DMQBE4lo.js";const x=y`
    .columns {
        margin: 0 !important;
    }
    .card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 300px;
    }
`;class d extends f{static get styles(){return[p(h),x,y`
                :host {
                    display: block;
                }
            `]}static get properties(){return{cols:{type:Array},rows:{type:Array}}}updated(t){t.has("cols")||t.has("rows")||t.has("e")}textColor(t){return parseInt(t.replace("#",""),16)>16777215/2?"#000":"#fff"}getIndexByColumnLabel(t){return this.cols.findIndex(a=>a.label===t)}randomColorGenerator(t,a){let e,s,r,i=a/t,u=~~(i*6),n=i*6-u,o=1-n;switch(u%6){case 0:e=1,s=n,r=0;break;case 1:e=o,s=1,r=0;break;case 2:e=0,s=1,r=n;break;case 3:e=0,s=o,r=1;break;case 4:e=n,s=0,r=1;break;case 5:e=1,s=0,r=o;break}return"#"+("00"+(~~(e*255)).toString(16)).slice(-2)+("00"+(~~(s*255)).toString(16)).slice(-2)+("00"+(~~(r*255)).toString(16)).slice(-2)}static get is(){return"account-summary"}render(){return m`
            <div class="content">
                <div class="columns">
                    ${this.rows.map((t,a,e)=>{const s=this.randomColorGenerator(e.length,a),r=this.textColor(s);return m`
                                <div class="column">
                                    <div class="card" style="background-color: ${s};">
                                        <div class="card-content">
                                            <span class="icon is-medium">
                                                <adaptive-ui-icon class="stat-icon" style="fill: ${r};" icon="${t[this.getIndexByColumnLabel("icon")]}"></adaptive-ui-icon>
                                            </span>
                                            <h5 style="color: ${r};">${t[this.getIndexByColumnLabel("name")]}</h5>
                                            <h5 style="color: ${r};">${t[this.getIndexByColumnLabel("value")]}</h5>
                                            <button title="View" class="button is-fullwidth">View</button>
                                        </div>
                                    </div>
                                </div>
                            `})}
                </div>
            </div>
        `}}customElements.define(d.is,d);const v=({element:c,rows:t,cols:a})=>{const e=l.useRef(null);return l.useEffect(()=>{if(e.current){const s=e.current;s.cols=a,s.rows=t}},[a,t]),l.useEffect(()=>{if(e.current&&c){const s=e.current;s.e=c}},[c]),b.jsx("account-summary",{ref:e})},w=g(v);export{w as default};
