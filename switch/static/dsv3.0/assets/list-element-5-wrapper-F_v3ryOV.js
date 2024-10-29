import{i as m,h as u,r as g,g as x,k as l,a as h,j as n}from"./index-C2PWchud.js";import{w as f}from"./datasource-mixin-DMQBE4lo.js";const v=m`
.card{
    box-sizing: border-box;
    padding: 20px;
    gap: 18px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;
    background-color:var(--paper);
}

.content h4{
    margin-bottom: 0 !important;
}
.round-background {
    width: 64px;
    height: 64px;
    background: var(--primary);
    border-radius: 50%;
}

.media-content{
    justify-content: space-between;
    height: 60px;
}
.media-content h5{
    margin-bottom:0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color:var(--grey-darker);
}
.card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);

}
.card-header-link{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400 !important;
    color:var(--grey-darker);
}
.card-header-subtitle{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400 !important;
    cursor:pointer;
}

.media-content div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.media-content .right-align {
    display: flex;
    align-items: end;
}
.media:first-child{
    border-top:1px solid var(--md-sys-color-surfaceVariant);
    padding-top:1.5rem;
}
.media + .media {
    border-top:1px solid var(--md-sys-color-surfaceVariant) !important;
}

a{
    color:var(--primary)
}
a:hover{
    color: var(--primary);
}
small {
    font-size: 12px !important;
    line-height:16px;
    margin-top:.75rem;
   color:var(--md-sys-color-outline);
}

`;class p extends u{static get styles(){return[g(x),v]}constructor(){super(),this.searchText="",this.rows=[],this.cols=[],this.e=null}static get properties(){return{rows:{type:Array},e:{type:Object},cols:{type:Array}}}getIndexByColumnLabel(e){return this.cols.findIndex(t=>t.label===e)}formatPrice(e){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(e)}updated(e){(e.has("e")||e.has("cols"))&&console.log("Updated properties:",this.cols,this.rows,this.e)}static get is(){return"list-element-5"}onBtnClickHandler(e,t){this._dialog(e,t)}render(){var e,t,r,s,i,d,c;return l`
        <div class="">
                <div class="card">
                <div class="columns is-flex px-2" style="justify-content: space-between">
                <div class="column is-three-quarters">
                    <h6 class="card-header-title">${((e=this.e)==null?void 0:e.name)||""}</h6>
                    <p @click=${()=>this.onBtnClickHandler(this.e.details.populate)} class="card-header-subtitle">Click to populate</p>
                </div>
                <div class="column is-one-quarter has-text-right">
                    ${this.rows.length>0?l`
                        <a target="_blank" href="${((s=(r=(t=this.e)==null?void 0:t.details)==null?void 0:r.link)==null?void 0:s.path)||"#"}" title="${((c=(d=(i=this.e)==null?void 0:i.details)==null?void 0:d.link)==null?void 0:c.label)||""}" class="card-header-link">View all</a>
                    `:""}
                </div>
            </div>
            
                    <div class="card-content">
                    ${this.rows.map(a=>l`
                        <article id="${a[this.getIndexByColumnLabel("id")]}" class="media">
                            <!-- <div class="media-left">
                                <div class="round-background"></div>
                            </div> -->
                            <div class="media-content is-flex">
                                <div>
                                    <h5>${a[this.getIndexByColumnLabel("label")]}</h5>
                                    <small>${a[this.getIndexByColumnLabel("date")]}</small>
                                </div>
                                <div class="right-align">
                                    <a @click=${()=>this.onBtnClickHandler(this.e.details.view,a[this.getIndexByColumnLabel("id")])}>
                                        KES ${a[this.getIndexByColumnLabel("value")]}
                                    </a>      
                                </div>
                            </div>
                        </article>
                    `)}
                    </div>
                </div>    
        </div>
        `}}customElements.define(p.is,p);const y=o=>{const{element:e,rows:t,cols:r,_dialog:s}=o,i=h.useRef(null);return h.useEffect(()=>{i.current&&e&&(i.current.e=e,i.current.rows=t,i.current.cols=r,i.current._dialog=s)},[e,t,r]),n.jsx("div",{children:e?n.jsx("list-element-5",{id:"list-element-5",ref:i}):n.jsx("p",{children:"Loading data..."})})},w=f(y);export{w as default};
