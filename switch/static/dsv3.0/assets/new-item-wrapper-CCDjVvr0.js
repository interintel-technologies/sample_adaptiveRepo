import{i as r,h as a,r as c,g as l,k as h,a as o,j as i}from"./index-C2PWchud.js";const d=r`
    .columns {
        width:fit-content;
        height: fit-content;
        background-color: #202124;
        margin-left:20px;
    }
    .column {
        width: 278px;
        height: 280px;
    }
    .new-item-image {
        object-fit:contain;
    }
    .new-item-tag {
        width: 91px;
        height: 24px;
        border-radius: 0 100px 100px 0;
        margin-top:8.9%;
        background-color:#3d3d3f;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        color: white;
    }
    .new-item-title {
        width: 207px;
        height: 52px;
        margin: 6.5% 0 0 8.9%;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.44;
        color: white;
    }
    .new-item-description {
        width: 207px;
        height: 52px;
        margin: 6.5% 0 0 8.9%;
        font-size: 12px;
        line-height: 1.5;
        color: white;
    }
    .watch-now-button {
        width: 142px;
        height: 38px;
        margin:10.7% 0 14.3% 8.9%;
        font-size: 14px;
        font-weight: bold;
        border-radius: 100px;
        border: 0;
        outline: none;
        background-color: white;
    }
    .watch-now-button:hover {
        color:white;
        background-color: var(--app-secondary-color);
    }
    .watch-now-button:active{
        transform: scale(0.98);
    }
`;class s extends a{static get styles(){return[c(l),d,r`
            :host {
                display: block;
            }
            `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}updated(t){t.has("e")}render(){return h`
            <div class="columns is-multiline is-gapless">
                <img class="column new-item-image" src="${this.e.details.shop_image}"/>
                <div class="column">
                    <div class="new-item-tag">
                        NEW
                    </div>
                    <h3 class="new-item-title">
                        ${this.e.name}          
                    </h3>
                    <p class="new-item-description">
                        ${this.e.defaultValue}
                    </p>
                    <button class="watch-now-button">
                        Watch now
                    </button>
                </div>
            </div>
        `}static get is(){return"new-item"}}customElements.define(s.is,s);const m=n=>{const{element:t}=n,e=o.useRef(null);return o.useEffect(()=>{e.current&&t&&(e.current.e=t)},[t]),i.jsx("div",{children:t?i.jsx("new-item",{id:"new-item",ref:e}):i.jsx("p",{children:"Loading data..."})})};export{m as default};
