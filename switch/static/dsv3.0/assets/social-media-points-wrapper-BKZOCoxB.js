import{i as r,h as p,r as h,g as u,k as a,a as l,j as c}from"./index-C2PWchud.js";import{I as f}from"./input-shared-default-BN_nkxH9.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const g=r`
    .columns {
        margin: 0 !important;
    }
    li{
        list-style:none !important;
    }
   
    ul.column{
        overflow:hidden !important;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
    input:checked + .slider {
        background-color: var(--link);
    }
    input:focus + .slider {
        box-shadow: 0 0 1px var(--link);
    }
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    .slider.round {
        border-radius: 34px;
    }
    .slider.round:before {
        border-radius: 50%;
    }
    img {
        width: 60%;
        object-fit: contain;
    }
    p {
        width: 70%;
    }
    .column.is-2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .edit {
        text-align: center;
        color: var(--primary);
        cursor: pointer;
        margin: 10px;
        text-decoration: underline;
        text-decoration-color: var(--primary);
    }
    .edit:hover {
        color: var(--link);
        text-decoration-color: var(--link);
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    .button {
        background-color: var(--primary);
        color: white;
        padding: 7px 21px;
        height: 40px !important;
        border: none;
        margin-top: 15px;
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
    ul {
        border: 2px solid #ccc;
    }
    .modal-background {
        background-color: transparent !important;
    }
    .modal-title {
        margin-bottom: 15px;
        width: 100%;
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        border: 2.5px solid #ccc;
        border-radius: 7px;
    }
    .close-icon {
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
    .close-icon:hover {
        fill: var(--link);
    }
    .close-icon:active {
        transform: scale(1.05);
    }
    .is-flex.content{
        margin: 0 !important;
    }
    .content.is-flex {
        flex-direction: column;
        justify-content: center;
    }
    .column.is-8 {
        margin: auto !important;
    }
    @media screen and (max-width:800px) {   
        p {
            width: 100%;
        }
    }
`;/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const b=r`
.label-animation{
    border: 0; 
    padding: 7px 15px; 
    border: 1px solid #b7b5b5; 
    position: relative; 
}
.label-animation ~ .focus-bg:before,
.label-animation ~ .focus-bg:after{
    content: ""; 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    width: 0; 
    height: 0; 
    background-color: #ededed; 
    transition: 0.3s; 
    z-index: -1;
}
.label-animation:focus ~ .focus-bg:before,
.has-content.label-animation ~ .focus-bg:before{
    transition: 0.3s; 
    width: 50%; 
    left: 0; 
    top: 0; 
    height: 100%;
}
.label-animation ~ .focus-bg:after{
    left: auto; 
    right: 50%; 
    top: auto; 
    bottom: 50%;
}
.label-animation:focus ~ .focus-bg:after,
.has-content.label-animation ~ .focus-bg:after{
    transition: 0.3s; 
    width: 50%; 
    height: 100%; 
    bottom: 0; 
    right: 0;
}
.label-animation ~ label{
    position: relative;
    left: 25px;
    top: -20px; 
    width: 100%;  
    color: #013243; 
    transition: 0.3s; 
    letter-spacing: 0.5px;
    pointer-events: none;

}

`,v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8ma'%20cx='19.38'%20cy='42.035'%20r='44.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fd5'/%3e%3cstop%20offset='.328'%20stop-color='%23ff543f'/%3e%3cstop%20offset='.348'%20stop-color='%23fc5245'/%3e%3cstop%20offset='.504'%20stop-color='%23e64771'/%3e%3cstop%20offset='.643'%20stop-color='%23d53e91'/%3e%3cstop%20offset='.761'%20stop-color='%23cc39a4'/%3e%3cstop%20offset='.841'%20stop-color='%23c837ab'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8ma)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8mb'%20cx='11.786'%20cy='5.54'%20r='29.813'%20gradientTransform='matrix(1%200%200%20.6663%200%201.849)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234168c9'/%3e%3cstop%20offset='.999'%20stop-color='%234168c9'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8mb)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cpath%20fill='%23fff'%20d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z%20M24,19c-2.757,0-5,2.243-5,5%20s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'/%3e%3ccircle%20cx='31.5'%20cy='16.5'%20r='1.5'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12%20C37,33.86,33.859,37,30,37z%20M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'/%3e%3c/svg%3e",x="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='_osn9zIN2f6RhTsY8WhY4a'%20x1='10.341'%20x2='40.798'%20y1='8.312'%20y2='38.769'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%232aa4f4'/%3e%3cstop%20offset='1'%20stop-color='%23007ad9'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23_osn9zIN2f6RhTsY8WhY4a)'%20d='M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758%20c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582%20c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322%20c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419%20c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963%20c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41%20c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02'/%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3cpath%20fill='%23039be5'%20d='M24%205A19%2019%200%201%200%2024%2043A19%2019%200%201%200%2024%205Z'/%3e%3cpath%20fill='%23fff'%20d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'/%3e%3c/svg%3e",y="/assets/sms-05DHU_Yx.png";class d extends p{static get styles(){return[h(u),g,f,b,r`
                :host {
                    display: block;
                }
            `]}static get properties(){return{socialMediaPointsToEdit:Object,cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.socialMediaPointsToEdit={}}getIndexByColumnLabel(t){return this.cols.findIndex(e=>e.label===t)}getSocialMediaIconUrl(t){switch(t){case"Instagram":return`${v}`;case"Facebook":return`${w}`;case"Twitter":return`${x}`;case"SMS/WhatsApp":return`${y}`;default:return""}}showModal(){this.shadowRoot.querySelector(".modal").classList.add("is-active")}hideModal(){this.shadowRoot.querySelector(".modal").classList.remove("is-active")}onEditTextClickHandler(t,e){this.socialMediaPointsToEdit={type:t,points:e},this.showModal()}onToggleChangeHandler(t,e){const i=!!t.target.checked,o={type:e,toggle:i};this.dispatchEvent(new CustomEvent("service-call",{detail:{service:"toggle",params:o},bubbles:!0,composed:!0}))}onSaveBtnClickHandler(){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:"edit-points",params:this.socialMediaPointsToEdit},bubbles:!0,composed:!0}))}static get is(){return"social-media-points"}render(){return a`
            <div class="content">
                <div class="column">
                    <ul class="column">
                        ${this.rows.map(t=>{const e=t[this.getIndexByColumnLabel("type")],i=t[this.getIndexByColumnLabel("points")],o=t[this.getIndexByColumnLabel("toggle")];return a`
                                <li class="columns">
                                    <div class="column is-2">
                                        <img alt="${e}" src="${this.getSocialMediaIconUrl(e)}" />
                                    </div>
                                    <div class="column is-7">
                                        <div class="content is-flex">
                                            <h4>${e!=="SMS/WhatsApp"?"Share and Follow us on":"Referrals to your friends."} ${e}</h4>
                                            <p>
                                                Reward customers ${i} FREE points once they have successfully shared and
                                                followed on ${e}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="column is-2">
                                        <label class="switch">
                                            ${o?a`
                                                    <input type="checkbox" checked @change=${n=>this.onToggleChangeHandler(n,e)}>
                                                `:a`
                                                    <input type="checkbox" @change=${n=>this.onToggleChangeHandler(n,e)}>
                                                `}
                                            <span class="slider round"></span>
                                        </label>
                                        <h4 class="edit" @click=${()=>this.onEditTextClickHandler(e,i)}>Edit</h4>
                                    </div>
                                </li>
                                `})}
                    </ul>
                </div>
                <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div class="is-flex">
                            <h4 class="modal-title subtitle is-6">Edit points earned when shared to ${this.socialMediaPointsToEdit.type}</h4>
                            <adaptive-ui-icon icon="close" title="Close" class="close-icon" @click=${()=>this.hideModal()}></adaptive-ui-icon>
                        </div>
                        <div class="control has-icons-right input-mixin input-effect">
                            <input id="input" class="label-animation" type="number" 
                                @input=${t=>this.socialMediaPointsToEdit.points=t.target.value}
                                value=${this.socialMediaPointsToEdit.points}
                            >
                        </div>
                        <div class="is-flex" style="justify-content: flex-end;">
                            <button class="button" title="Save" type="button" @click=${()=>this.onSaveBtnClickHandler()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(d.is,d);const k=({element:s,data:t,rows:e,cols:i})=>{const o=l.useRef(null);return l.useEffect(()=>{o.current&&s&&(o.current.e=s,o.current.data=t,o.current.rows=e,o.current.cols=i)},[s,t,e,i]),c.jsx("div",{children:s&&t&&e?c.jsx("social-media-points",{id:"social-media-points",ref:o}):c.jsx("p",{children:"Loading data..."})})},E=m(k);export{E as default};
