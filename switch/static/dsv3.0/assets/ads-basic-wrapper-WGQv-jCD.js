import{i as r,h as d,r as c,g as n,k as g,a,j as e}from"./index-C2PWchud.js";import{w as o}from"./datasource-mixin-DMQBE4lo.js";const p=r`
.view-balance-container{
    width: 100%;
    margin: 0;
    display: flex;
}
.view-balance-ad{
    background-color: var(--paper);
    padding: 20px;
    border-radius: 10px;
}
.view-balance-ad{
    color: #fff;
    font-size: 32px;
    line-height: 38.73px;
    align-items: center;
}
.ad-image .image{
    width: 60px!important;
    height: 60px!important;
    margin-right: 10px;
}
.ad-image .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50% !important;
}
`;class t extends d{static get properties(){return{message:{type:String},img:{type:String},e:{type:Object}}}constructor(){super(),this.message="",this.img="",this.e=null}updated(i){i.has("e")&&this.e&&(this.message=this.e.details.message,this.img=this.e.details.image)}static get styles(){return[c(n),p,r`
                :host {
                    display: block;
                }
            `]}static get is(){return"ads-basic"}render(){return g`
            <div class="view-balance-ad column is-flex is-two-thirds">
                <div class="ad-image is-rounded">
                    <figure class="image ads-image is-48x48">
                        <img src=${this.img} alt="Placeholder image">
                    </figure>
                </div>
                <p class="pl-3">${this.message}</p>
            </div>    
        `}}customElements.define(t.is,t);const l=({element:s})=>{const i=a.useRef(null);return a.useEffect(()=>{i.current&&s&&i.current.e!==s&&(i.current.e=s)},[s]),e.jsx(e.Fragment,{children:s?e.jsx("ads-basic",{id:"ads-basic",ref:i}):e.jsx("p",{children:"Loading data..."})})},u=o(l);export{u as default};
