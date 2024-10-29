import{i as o,h as u,r as m,g as d,k as a,a as c,j as l}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const f=o`
.summary-container .summary-card{
    padding: 20px;
    border-radius: 7px;
    border:1px solid rgba(183,181,181,.7);
}
.summary-card:first-child{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.info.info-left{
    width: 70%;
}
.info.info-right{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.summary-flex{
    gap: 20px;
}
.summary-card:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.summary-card:last-child{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.summary-container p.summary-title{
    font-weight: 700;
}
.summary-container p.summary-value{
    font-size: 23px;
}
.summary-container p.summary-comparison{
    font-size: 14px;
}
.summary-footer{
    margin-top: 20px;
}
.summary-flex {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
}

`;class n extends u{static get styles(){return[m(d),f,o`
                :host {
                    display: block;
                }
            `]}static get properties(){return{items:Array,filters:Object,cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.items=[],this.filters={}}updated(s){super.updated(s),(s.has("cols")||s.has("rows")||s.has("e"))&&(console.log("this.e is :",this.e),this.filters=this.e.details.filters,console.log(this.filters),this.items=[...this.rows.map(e=>Object.fromEntries(e.map((r,t)=>[this.cols[t].label,r])))])}static get is(){return"summary-returns"}onSelectChangeHandler(s,e){console.log("value ",s)}convertStr(s){let e=s.replace(/^\./,"").replace(/[^\d.]+(?!\d)/g,"");return e.charAt(0)==="."&&(e=e.substr(1)),parseFloat(e)}calculatePercentage(s,e){return(this.convertStr(e)-this.convertStr(s))/this.convertStr(e)*100}render(){return a`
        <div class="summary-container">
            <div class="columns mt-2" id="headCol">
                <div class="column is-half" id="head1">
                    <h5>Summary Returns</h5>
                </div>
                <div class="column is-half" id="head2">
                    <div class="filters">
                        ${Object.entries(this.filters).map(([s,e])=>a`
                                <div class="select">
                                    <select @change=${r=>this.onSelectChangeHandler(r.target.value,s)}>
                                        ${e.map(r=>a`
                                                <option>${r}</option>
                                            `)}
                                    </select>
                                </div>
                            `)}
                    </div>
                </div>
            </div>

            <div class="content columns">
                ${this.items.map(s=>a`
                <div class="column summary-card">
                    <div class="info_container">
                        <div class="summary-flex is-flex" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="info info-left">
                                <p class="summary-title">${s.label}</p>
                                <p class="summary-value">${s.value}</p>
                            </div>
                            <div class="info info-right">
                                ${s.value==s.preValue||this.calculatePercentage(s.preValue,s.value).toFixed(2)===0?a`
                                    <img src='assets/svgs/Flat.svg'>
                                    `:s.value<s.preValue?a`
                                        <img src='assets/svgs/Decrement.svg'>
                                    `:s.value>s.preValue?a`
                                        <img src='assets/svgs/Increment.svg'>
                                    `:a``}
                            </div>
                        </div>
                        <footer class="summary-footer">
                            <p class="summary-comparison">${this.calculatePercentage(s.preValue,s.value).toFixed(2)}% compared to last month</p>
                            ${console.log()}
                        </footer>
                    </div>
                </div>
                `)}
            </div>
        </div>
        `}}customElements.define(n.is,n);const y=({element:i,data:s,rows:e,cols:r})=>{const t=c.useRef(null);return c.useEffect(()=>{t.current&&i&&(t.current.e=i,t.current.data=s,t.current.rows=e,t.current.cols=r)},[i,s,e,r]),l.jsx("div",{children:i&&s&&e?l.jsx("summary-returns",{id:"summary-returns",ref:t}):l.jsx("p",{children:"Loading data..."})})},g=p(y);export{g as default};
