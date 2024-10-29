import{i as c,r as p,g as x,k as l,a as r,al as u,j as a,a6 as m}from"./index-C2PWchud.js";import{B as h}from"./base-element-5lxvCIHt.js";import{u as f}from"./utils-mixin-D5aAiqNi.js";const g=class extends f(h){static get is(){return"service-button"}static get properties(){return{color:String,params:{type:Object,value:{}}}}firstUpdated(i){super.firstUpdated(i);const t=this;t.addEventListener("click",function(e){e.preventDefault(),console.log("rada"),t._dialog(t.e.service,t.params)})}},b=c`
.service-button-container{
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin-bottom: 1.875em;
    border-radius: 5px;
    border: 0px solid transparent;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
}
.service-button-container:hover{
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 11px 0px;
}
.icon-holder{
    position: relative;
    padding: 15px;
    font-size: 24px;
    font-weight: normal;
    color: #fff;
    border-radius: 6px;
    background-color: var(--app-accent-color);
    box-shadow: 0 14px 26px -12px 
        rgba(0,0,0,0.12),0 8px 10px -5px !important;
}
.content-text{
    margin-left: 20px;
    display:flex;
    align-items: center;
}
.content-text h2{
    text-transform: capitalize;
}
.content-text p{
    font-size: 10px;
    text-transform: initial;
}

@media screen and (max-width: 1023px) {
    .action-icons, .dropdown-content{
        position: absolute;
        right: 0;
    }
    .dropdown-content{
        top: 30px;
    }
}

@media screen and (min-width: 280px) and (max-width: 320px){
    .service-button-container .content-area {
        padding: 10px;
    }
    .iron-icon{
        width: 20px;
        height: 20px;
    }
    .content-text{
        margin-left: 10px;
    }
    .content-text h2{
        font-size: 10px!important;
    }
    .icon-holder {
        padding: 5%;
    }
}

@media screen and (min-width: 321px) and (max-width: 359px){
    .service-button-container .content-area {
        padding: 10px;
    }
    .content-text{
        margin-left: 10px;
    }
    .icon-holder {
        padding: 5%;
    }
    .content-text h2{
        font-size: 13px!important;
    }
}
@media screen and (min-width: 360px) and (max-width: 406px){
    .service-button-container .content-area {
        padding: 10px;
    }
    .content-text{
        margin-left: 10px;
    }
    .icon-holder {
        padding: 5%;
    }
    .content-text h2{
        font-size: 15px!important;
    }
}
@media screen and (min-width: 407px) and (max-width: 480px){
    .service-button-container .content-area {
        padding: 10px;
    }
    .content-text{
        margin-left: 10px;
    }
    .icon-holder {
        padding: 5%;
        font-size: 12px!important;
    }
}
  
  
`;class n extends g{static get styles(){return[p(x),b]}constructor(){super(),this.e=null}static get properties(){return{e:{type:Object}}}updated(t){t.has("e")}getPadding(){const t=this.e.details.padding;return t!==void 0?t:"1.25rem"}onBtnClickHandler(){this._dialog(this.e.service,{})}render(){return l`
    
            <div class="column service-button-container">
            <div class="content-area is-flex">
                <div class="icon-holder">
                <adaptive-ui-icon icon="${this.e&&this.e.icon}"></adaptive-ui-icon>
                </div>
                <div class="content-text">
                    <div class="heading">
                        <h2 class="is-size-5">${n.toTitleCase(this.e&&this.e.name)}</h2>
                        <p class="subtitle">${this.e&&this.e.details.description}</p>
                    </div>
                </div>
            </div>
        </div>
        `}}customElements.define(n.is,n);const B=({_dialog:i,element:t})=>{const e=r.useRef(null),[s,d]=u.useState(!1);return r.useEffect(()=>{const o=e.current;d(!0),o&&t&&(o.e=t,o._dialog=i)},[t]),a.jsx(m,{in:s,children:a.jsx("service-button",{id:"service-button",ref:e})})};export{B as default};
