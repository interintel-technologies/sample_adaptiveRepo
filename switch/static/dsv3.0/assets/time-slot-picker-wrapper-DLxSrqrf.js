import{i as d,S as h,r as u,g as m,k as c,a as n,j as o}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const v=d`
    h5 {
        margin-bottom: 0 !important;
        color: white !important;
        text-align: center;
    }
    input {
        margin-right: 1rem;
        cursor: pointer;
    }
    .card {
        border-radius: 7px;
    }
    h4 {
        text-align: center;
    }
    ul {
        margin-left: 0 !important;
        max-height: 60vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    li {
        align-items: center;
        margin-bottom: 1rem;
    }
    span {
        padding: 1rem;
        width: 100%;
        background-color: var(--paper);
        cursor: pointer;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    span:hover {
        transform: scale(1.03);
        background-color: var(--primary);
    }
    span:active {
        transform: scale(0.97);
    }
    .selected {
        background-color: var(--primary);
    }
    .valid{
        color :#23D160!important;
    }
    .valid-span {
        background-color: #23D160!important; 
    }
    .invalid{
        color: rgb(255, 56, 96)!important;
    }
    #warning-text{
        display: none;
    }
`,g=class extends h{static get properties(){return{value:String,loader:Object}}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}dscDataName(){return this.e.defaultValue}init(i,e){super.init(i,e),this.required=i.min&&i.min>0,this.name=i.name,this.loader=this.loadData()}};class l extends g{static get styles(){return[u(m),v,d`
                :host {
                    display: block;
                }
            `]}static get properties(){return{timeSlots:Array,columns:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.timeSlots=[],this.columns=[],this.rows=[],this.e=null}firstUpdated(){this.loader.then(()=>{this.timeSlots=[...this.rows.map(e=>Object.fromEntries(e.map((t,s)=>[this.cols[s].label,t])))]})}updated(e){(e.has("columns")||e.has("rows")||e.has("e"))&&(this.timeSlots=[...this.rows.map(t=>Object.fromEntries(t.map((s,a)=>[this.cols[a].label,s])))])}connectedCallback(){super.connectedCallback(),window.addEventListener("get-selected-date",e=>this.updateParams("selected-date",e.detail.date))}onCheckboxChangeHandler(e){const t=this.shadowRoot.querySelector(`#checkbox${e}`),s=this.shadowRoot.querySelector(`#span${e}`),a=t.checked;this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(r=>{r.checked=!1,this.value=void 0}),this.shadowRoot.querySelectorAll("span").forEach(r=>{r.classList.remove("selected")}),a&&(t.checked=!0,s.classList.add("selected"),this.value=this.timeSlots[e])}onSpanClickHandler(e){const t=this.shadowRoot.querySelector(`#checkbox${e}`);t.checked?t.checked=!1:t.checked=!0,this.onCheckboxChangeHandler(e)}convertTime(e){const t=new Date(e),s=t.getHours(),a=t.getMinutes(),r=s<12?"AM":"PM";return(s>12?s-12:s)+" : "+(a<10?"0"+a:a)+" "+r}valid(e){const t=this.shadowRoot.querySelector("h4"),s=this.shadowRoot.querySelector(".selected");this.shadowRoot.querySelector("#warning-text").style.display="none",t.classList.remove("invalid"),t.classList.add("valid"),s.classList.add("valid-span"),setTimeout(()=>{t.classList.remove("valid"),s.classList.remove("valid-span")},3e3)}invalid(e){const t=this.shadowRoot.querySelector("h4");this.shadowRoot.querySelector("#warning-text").style.display="block",t.classList.add("invalid")}static get is(){return"time-slot-picker"}render(){return c`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-content">
                            <h4>${this.e.name}</h4>
                            <ul>
                                ${this.timeSlots.map((e,t)=>c`
                                        <li class="is-flex">
                                            <input id="checkbox${t}" type="checkbox" value="${e}" @change=${()=>this.onCheckboxChangeHandler(t)}/>
                                            <span id="span${t}" @click=${()=>this.onSpanClickHandler(t)}>
                                                <h5>${this.convertTime(e.from)} - ${this.convertTime(e.to)}</h5>
                                            </span>
                                        </li>
                                    `)}
                            </ul>
                        </div>
                    </div>
                    <p id="warning-text">Required</p>
                </div>
            </div>
        `}}customElements.define(l.is,l);const k=({data:i,cols:e,rows:t,element:s})=>{const a=n.useRef();return n.useEffect(()=>{a.current?(a.current.data=i,a.current.e=s,a.current.cols=e,a.current.rows=t):console.log("timeSlotRef.current is not set")},[i,e,t,s]),o.jsx(o.Fragment,{children:s?o.jsx("time-slot-picker",{ref:a}):o.jsx("p",{children:"Loading data..."})})},w=p(k);export{w as default};
