import{i as o,r as p,g as c,k as l,a as s,j as r}from"./index-C2PWchud.js";import{S as d}from"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const u=o`
    .fas {
        margin-right: 16px;
    }
`;class a extends d{static get styles(){return[p(c),u,o`
                :host {
                    display: block;
                }
            `]}initPrintJS(){const t=document.createElement("script");t.src="https://printjs-4de6.kxcdn.com/print.min.js",t.async=!0,t.defer=!0,document.head.appendChild(t)}firstUpdated(){this.initPrintJS()}onPrintBtnClickHandler(){const t=this.e.details.type,e=this.e.details.data;switch(t){case"pdf":printJS({printable:e,type:"pdf",onError:function(i){alert("Error found => "+i.message)},header:this.e.name});break;case"image":typeof e=="string"&&e.length===1?printJS({printable:e,type:t,header:this.e.name}):printJS({printable:e,type:t,header:this.e.name,imageStyle:"width:50%;margin-bottom:20px;"});break;case"json":printJS({printable:e,properties:Object.keys(e[0]).map(i=>i),header:this.e.name,type:t});break;default:printJS(e,t);break}}static get is(){return"print-button"}renderDefault(){return l`
            <div class="content">
                <button class='button is-flex is-primary is-fullwidth' title="Print" @click=${()=>this.onPrintBtnClickHandler()}>
                    <span class="icon is-small">
                        <i class="fa-solid fa-print"></i>
                    </span>
                    <span>Print</span>
                </button>
            </div>
        `}}customElements.define(a.is,a);const g=({element:n})=>{const t=s.useRef(null);return s.useEffect(()=>{const e=t.current;e&&n&&(e.e=n)},[n]),r.jsx("div",{children:n?r.jsx("print-button",{id:"print-button",ref:t}):r.jsx("p",{children:"Loading data..."})})};export{g as default};
