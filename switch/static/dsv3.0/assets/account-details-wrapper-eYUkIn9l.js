import{i as l,h as n,r as u,g as d,k as i,a as r,j as m}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const h=l`
    .columns, ul {
        margin: 0 !important;
    }
    .card-header-title {
        margin: 0 !important;
    }
    .image {
        border: 1px solid var(--primary);
        height: 200px;
        width: 200px;
        margin: auto !important;
        border-radius: 15px;
        padding: 12px;
    }
    ul {
        list-style: none !important;
    }
`;class o extends n{static get styles(){return[u(d),h,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{account:Object,columns:{type:Array},rows:{type:Array}}}firstUpdated(){this.loader.then(()=>{this.account=Object.fromEntries(this.rows[0].map((t,s)=>[this.cols[s].label,t]))})}updated(t){(t.has("cols")||t.has("rows")||t.has("e"))&&(this.account=Object.fromEntries(this.rows[0].map((s,a)=>[this.cols[a].label,s])))}static get is(){return"account-details"}render(){return i`
            <div class="content">
                <div class="card">
                    ${this.account?i`
                            <div class="card-header">
                                <h4 class="card-header-title">My Account Details</h4>
                            </div>
                            <div class="card-content">
                                <div class="columns">
                                    <div class="column is-3">
                                        <figure class="image">
                                            <img src="${this.account.image}">
                                        </figure>
                                    </div>
                                    <div class="column is-9">
                                        ${Object.entries(this.account).filter(([t])=>t!=="image").map(([t,s])=>i`
                                                <div class="columns">
                                                    <div class="column is-4">
                                                        <h5>${t} : </h5>
                                                    </div>
                                                    <div class="column is-8">
                                                        ${typeof s=="object"?i`
                                                                <ul>
                                                                    ${Object.values(s).map(a=>i`
                                                                            <li>
                                                                                <h5>${a}</h5>
                                                                            </li>
                                                                        `)}
                                                                </ul>
                                                            `:i`<h5>${s}</h5>`}
                                                    </div>
                                                </div>
                                            `)}
                                    </div>
                                </div>
                            </div>
                        `:""}
                </div>
            </div>
        `}}customElements.define(o.is,o);const f=({element:c,rows:t,cols:s})=>{const a=r.useRef(null);return r.useEffect(()=>{if(a.current){const e=a.current;e.cols=s,e.rows=t}},[s,t]),r.useEffect(()=>{if(a.current&&c){const e=a.current;e.e=c}},[c]),m.jsx("account-details",{ref:a})},b=p(f);export{b as default};
