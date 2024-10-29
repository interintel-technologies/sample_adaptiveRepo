import{i as h,r as u,g as d,k as f,a as n,j as o}from"./index-C2PWchud.js";import{S as b}from"./section-pelement-CNE2fsyL.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const m=h`
    .button {
        background-color: var(--primary);
        color: white;
        width: 100%;
        height: 40px !important;
        border: none;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--link);
        color: white !important;
        border: none !important;
    }
    .button:active {
        transform: scale(1.05);
        color: white !important;

    }
    .fas {
        margin-right: 16px;
        color: var(--link);
    }
    .button:hover .fas {
        color: var(--primary);
    }
`;class c extends b{static get styles(){return[u(d),m]}onShareBtnClickHandler(){const t={title:this.e.details.title,text:this.e.details.text,url:this.e.details.url,files:this.e.details.files},e=()=>{const l=Object.keys(t).filter(a=>t[a]!==void 0);let s={};return l.forEach(a=>s={...s,[a]:t[a]}),s},i=e().files;i?navigator.canShare&&navigator.canShare(i)?navigator.share(e()):console.log("Your system doesn't support sharing files."):navigator.share(e())}static get is(){return"share-button"}render(){return f`
            <div class="content">
                <div class="hero-body">
                    <button class='button is-flex' @click=${()=>this.onShareBtnClickHandler()}>
                        <span class="icon">
                            <fa-icon class="fas fa-share" size="1.7em"></fa-icon>
                        </span>
                        <h4>Share</h4>
                    </button>
                </div>
            </div>
        `}}customElements.define(c.is,c);const v=({element:r})=>{const t=n.useRef(null);return n.useEffect(()=>{const e=t.current;e&&r&&(e.e=r)},[r]),o.jsx("div",{children:r?o.jsx("share-button",{id:"share-button",ref:t}):o.jsx("p",{children:"Loading data..."})})},B=p(v);export{B as default};
