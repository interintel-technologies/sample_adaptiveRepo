import{i as a,h as c,r as d,g as l,k as m,a as n,j as i}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const h=a`
.descriptionBox__content{
    padding: 0px;
    width: 100%;
    height: auto;
}
.content{
    flex-direction: column;
    align-items: center;
}
p {
    text-align: center;
    max-width:70%;
}
.image-container{
    width: 100%;
    margin-right:0px;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
    display: flex;
    justify-content: center;
}
img {
    height:300px;
    object-fit:contain;
    margin:auto;
}
.ii__paragraph{
    width:70%;
    margin: 0 auto;
    text-align: center;
    font-size: 15px;
    margin-bottom: 100px
}

@media screen and (max-width: 400px) {
    p {
        max-width:90%;
    }
}
`;class r extends c{static get styles(){return[d(l),h,a`:host{
           display:block;
       }`]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}render(){return m`
    <div class="hero-body">
        <div class="content is-flex">
            <p>${this.e.defaultValue}</p>
            <img src="${this.e.details.image}" alt="image"/>
        </div>
    </div>
    
    `}static get is(){return"hero-element-13"}}customElements.define(r.is,r);const u=({element:e,rows:s,cols:o})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&e&&(t.current.e=e,t.current.rows=s,t.current.cols=o)},[e]),i.jsx("div",{children:e?i.jsx("hero-element-11",{id:"hero-element-11",ref:t}):i.jsx("p",{children:"Loading data..."})})},g=p(u);export{g as default};
