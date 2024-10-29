import{i as l,h as p,r as m,g as h,k as a,a as c,j as s}from"./index-C2PWchud.js";import{w as f}from"./datasource-mixin-DMQBE4lo.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const x=l`

.data{
    flex-direction: column;
}
.descriptionBox{
    width: 80%;
    margin:0 auto;
    padding: 10px;
  
}
/* .descriptionBox button{
    background: transparent!important;
    border: none;
    cursor: pointer;
} */
.descriptionBox__tabs{
    width: 28%;
    top: 0;
    right: 0;
    order: 2;
    border-left: 1px solid var(--mui-palette-primary-light)!important;
    position: relative;
}
.my-content{
    order:2;
    width:50%;
}
.content{
    width:100%;
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
.image-container img{
    width: 50%;
}
.descriptionBox__item{
    padding: 10px 60px 10px 20px;
    min-height: 74px;
    border-bottom: 1px solid #ffffff!important;
    cursor: pointer;
    position: relative;
}
.descriptionBox__item:hover{
    background-color: var(--mui-palette-primary-light)!important;
    border-left: 3px solid var(--app-default-color);
    color: #fff!important;
}
.bodTItle{
    font-weight: 500;
    line-height: 18px;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}
.content h1, .content h4{
    text-align: center;
}
.my-content{
    width: 100%!important;
}
.content h1, 
.content p{
    text-align: center;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}
.content p {
    text-align: center;

}
.descriptionBox__content{
    padding: 20px;
    width: 100%;
}
.descriptionBox__content .content-container{
    width: inherit;
    display: none;
}   
.tab_drawer_heading{
    display: none;
}
.li-active {
    background-color: var(--mui-palette-primary-light)!important;
    color: #fff!important;
    border-left: 3px solid var(--app-default-color)!important;
}
.li-active:hover {
    background-color: var(--mui-palette-primary-light)!important;
    color:#fff!important;
    border-left: 3px solid var(--app-default-color)!important;
}

@media screen and (max-width: 800px) {
    .descriptionBox__tabs {
        display: none;
    }
    .tab_drawer_heading {
        background: var(--mui-palette-primary-light)!important;
        color: #fff;
        margin: 0;
        padding: 10px 40px;
        display: block;
        cursor: pointer;
        user-select: none;
    }
    .descriptionBox__content .content-container{
        width: inherit;
        display: block;
    } 
    .data{
        display: none;
        flex-direction: column;
        padding: 20px 4px;
    }
    .content h1{
        font-size: 16px;
    }
    .image-container img{
        width: 100%;
    }
    .content p {
        text-align: center;
    
    }
    
}

@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

`;class d extends p{static get styles(){return[m(h),x,l`
            :host {
              display: block;
            }
          `]}render(){return a`
        ${this.e&&Object.keys(this.e).length>0?a`
    <div class="main-container">
        <div class="descriptionBox is-flex">
       
                
                <div class="descriptionBox__tabs">
                <ul>
                ${this.rows.map((t,i)=>a`
                    <li id="li-${i}" class="descriptionBox__item" data-item="" @click="${()=>this.openTab(i,"content-"+i)}">
                        <div class="boxTitle">
                            <h4 class="has-text-weight-bold">${this._getTitle(t[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(t[1])}</p>
                        </div>
                    </li>
                    `)}
                </ul>

            </div>

            <div class="descriptionBox__content">
            ${this.rows.map((t,i)=>a`
                <div class="content-container" id="content-${i}">
                    <div class="tab_drawer_heading">
                        <div class="boxTitle">
                            <h4 class="has-text-weight-bold is-centered">${this._getTitle(t[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(t[1])}</p>
                        </div>
                    </div>
                    <div class="columns is-flex data">
                        <div class="my-content column is-three-quarters">
                            <div class="content">
                                <h1>${this._getTitle(t[1])}</h1>
                                <p>${t[2]}</p>
                            </div>
                        </div>
                        <div class="image-container column">
                            <img class="fade-in one" src="/media/${t[3]}" alt=" ${this._getTitle(t[1])} image}"/>
                        </div>
                    </div>
                </div>
                `)}

            </div>
                       
        </div>
    </div>
    `:a`
    <p>Loading data...</p>
  `}
`}firstUpdated(t){super.firstUpdated(t),this.loader.then(i=>{let e=this.shadowRoot.querySelectorAll(".content-container"),o=this.shadowRoot.querySelectorAll(".descriptionBox__item");e[0].style.display="block",o[0].classList.add("active")})}_getSubTitle(t){let[i,e]=t.split("|");return e}_getTitle(t){let[i,e]=t.split("|");return i}constructor(){super(),this.rows=[]}static get properties(){return{rows:Array}}static get is(){return"description-box"}openTab(t,i){let e=this.shadowRoot.querySelectorAll(".content-container"),o=this.shadowRoot.querySelectorAll(".descriptionBox__item");e.forEach(r=>{r.style.display="none"}),o.forEach(r=>{r.classList.remove("li-active")}),this.shadowRoot.querySelector("#"+i).style.display="block",this.shadowRoot.querySelector("#li-"+t).classList.add("li-active")}}customElements.define(d.is,d);const u=n=>{const{element:t,rows:i,paramsCallback:e}=n,o=c.useRef(null);return c.useEffect(()=>{o.current&&t&&(o.current.e=t,o.current.rows=i)},[t,i,n,e]),s.jsx("div",{children:t?s.jsx("description-box",{id:"description-box",ref:o}):s.jsx("p",{children:"Loading data..."})})},v=f(u);export{v as default};
