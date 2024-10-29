import{i as n,h as d,r as u,g as p,k as i,a as s,j as o}from"./index-C2PWchud.js";const h=n`
.content{
    padding:0 !important;
}
.label{
    margin-bottom:1em !important;
}
.content h5 {
    margin-bottom:.35em !important;
    padding-left:.25em;
    font-size: 1rem !important;
}
.amount h5{
    margin-top: 0.62em !important;
    margin-bottom: 0.6em !important;
}
#mainCol{
    padding-left:.5em;
    padding-right:.5em;
}
.amount{
    border:1px solid var(--input-border-color);
    border-radius:4px 4px 4px 4px;
    justify-content:center;
    text-align:center;
    vertical-align:middle;
    max-height:46px !important;
    height:40px !important;
}
.amount:hover{
    cursor:pointer;
    background-color:var(--primary);
}
.amount:hover h5{
    color:var(--primary--color-invert) !important;
    transition:.2s;
}
.amount.selected{
    background-color:var(--primary);
    border:1px solid var(--primary) !important;
}
.amount.selected   h5{
    color:var(--primary--color-invert) !important;
   
}
`;class a extends d{static get styles(){return[u(p),h,n`
                :host {
                    display: block;
                }
            `]}static get properties(){return{amounts:Array,e:{type:Object}}}constructor(){super(),this.amounts=[]}firstUpdated(t){super.firstUpdated(t),this.amounts=this.e.details.amounts}firstUpdated(){this.amounts=this.e.details.amounts}onClickHandler(t,r){const m=this.shadowRoot.querySelectorAll(".amount"),l=this.shadowRoot.querySelector("#amount"+r);m.forEach(c=>c.classList.remove("selected")),l.classList.add("selected"),this.dispatchEvent(new CustomEvent("numberPicker",{bubbles:!0,composed:!0,detail:t}))}static get is(){return"number-picker"}render(){return i`
            <div class="content">
                <label class="label">${this.e.name}</label>
                <div class="columns is-mobile is-multiline" id="mainCol">
                    ${this.amounts.map((t,r)=>i`
                        <div class="column is-one-fifth-desktop  is-one-third-tablet is-half-mobile p-1">
                            <div class="amount" id="amount${r}" @click=${()=>this.onClickHandler(t,r)}>
                                <h5>${t}</h5>
                            </div>
                        </div>
                        `)}
                </div>
                
            </div>
        `}}customElements.define(a.is,a);const g=({element:e})=>{console.log("element is ",e);const t=s.useRef(null);return s.useEffect(()=>{t.current&&e&&t.current.e!==e&&(t.current.e=e)},[e]),o.jsx(o.Fragment,{children:e&&o.jsx("number-picker",{id:"number-picker",ref:t})})};export{g as default};
