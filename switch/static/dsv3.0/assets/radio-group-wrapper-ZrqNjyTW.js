import{i as c,r as l,g as p,k as o,a as d,j as a}from"./index-C2PWchud.js";import{R as u}from"./radio-group-BfRkiILg.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";import"./utils-mixin-D5aAiqNi.js";const h=c`
   .text-clm {
        padding-left:20px;
    }
    .card {
        align-items: center;
        padding: 10px 10px 10px 30px;
        margin-bottom:1rem;
        border: 1px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    .card:hover {
        transform: scale(1.01);
        box-shadow: 0px 5px 11px 0 var(--input-border-color);
        transition:.5s;
    }
    input {
        appearance: none;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        border: 2px solid var(--grey-darker);
        transition: 0.2s all linear;
        margin-right: 5px;
        cursor:pointer;
    }
    input:checked {
        border: 5px solid var(--link);
    }
`;class n extends u{static get styles(){return[l(p),h]}static get properties(){return{radios:Array}}constructor(){super(),this.radios=[]}firstUpdated(){this.loader.then(()=>{this.radios=[...this.rows.map(r=>Object.fromEntries(r.map((e,s)=>[this.cols[s].label,e])))]}),this.checkSelectedRadio()}checkSelectedRadio(){this.radios.map(r=>{r.selected&&(this.shadowRoot.querySelector(`#${r.id}RadioBtn`).checked=!0)})}static get is(){return"radio-group"}render(){return o`
            <div class="content">
                <div class="column">
                    <h3 class="label">${this.e.name}</h3>
                    <div class="column">
                        ${this.radios.map(r=>o`
                                <label for="${r.id}RadioBtn" class="card is-flex">
                                    <input id="${r.id}RadioBtn" type="radio" name="radio-btn" value=${r.id}>
                                    <div class="column text-clm">
                                        <h3 class="title is-6">${r.label}</h3>
                                        <p>${r.description}</p>
                                    </div>
                                </label>
                            `)}
                    </div>

                </div>
            </div>
        `}}customElements.define(n.is,n);const x=i=>{const{element:r,rows:e,paramsCallback:s}=i,t=d.useRef(null);return d.useEffect(()=>{t.current&&r&&(t.current.e=r,t.current.rows=e)},[r,e,i,s]),a.jsx("div",{children:r?a.jsx("radio-group",{id:"radio-group",ref:t}):a.jsx("p",{children:"Loading data..."})})},R=m(x);export{R as default};
