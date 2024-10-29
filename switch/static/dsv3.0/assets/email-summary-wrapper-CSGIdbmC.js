import{i as l,h as p,r as x,g as m,k as n,a as d,j as s}from"./index-C2PWchud.js";const u=l`
    section {
        margin:16px;
    }
    .columns {
        display: flex!important;
        flex-direction: row!important;
    }
    .group {
        display: flex!important;
        flex-direction: column!important;
    }
    .group-title{
        margin-top: 8px;
    }
    .content-2{
        width:100%;
        max-height: 295px;
        overflow: auto;
    }
    .image-container{
        position:relative;
        margin-left: 16px;
        border-right: 1.5px solid rgb(221 208 208);;
        padding-right: 16px;
    }
    .screen-shot{
        border: 18px solid var(--app-default-color);
        background-image: url("src/themes/dsv1.0/img/isometic/email_screenshot.png");
        background-repeat: no-repeat;
        width: 620px;
        background-size: cover;
        background-position-y: 10%;
        border-radius: 25px;
        height: 312px;
    }
    .text{
        position: absolute;
        top: 35%;
        left: 7%;
        max-height: 135px;
        background-color: transparent;
        padding: 4px;
        text-align: initial;
        width: 85%;
        overflow-x: hidden;
        line-break: auto;
        overflow-y: auto;
        border-radius: 8px;
    }
    .text-message{
        font-weight: 400!important;
        padding: 2px;
    }
    h1{
        font-size: 18px!important;
        font-weight: 500!important;
        padding-left: 29px!important;
    }
    .column {
        display: block;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        padding: 0px;
        margin: 1.75rem 2rem 1.75rem 1.75rem;
        box-shadow: 0px 3px 6px #00000029;
        border: 1px solid #707070;
        border-radius: 10px;
        opacity: 1;
        backdrop-filter: blur(28px);
        -webkit-backdrop-filter: blur(28px);
        border-top: none;
    }
    .summary-p{
        background-color: var(--app-default-color)!important;
        padding: 0.5rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .summary-info{
        margin-bottom: 15px;
        text-align: center;
        font-weight: 600!important;
    }
    @media screen and (max-width:1294px) {
        .text{
            position: absolute;
            top: 30%;
            left: 11%;
            width: 80%;
        }
    }

    @media screen and (max-width:1084px) {
        .columns {
            display: flex!important;
            flex-direction: column!important;
            justify-content: center;
            align-items: center;
            margin-top: 16px;
        }
        .text{
            position: absolute;
            top: 33%;
            max-height: 250px;
            overflow-y: auto;
            overflow-x:hidden;
            width: 80%;
            left: 5%;
        }
        .image-container {
            border-right: none;
            border-bottom: 1.5px solid rgb(221, 208, 208);
            padding-bottom: 16px;
        }
        .group{
            justify-content: center;
            align-items: center;
        }
        .column{
            width: 84%;
        }
    }
    @media screen and (max-width:946px) {
        .text{
            width: 13%;
            max-height: 176px;
            width: 84%;
            left: 8%;
            overflow-y: auto;
        }
    }
    @media screen and (max-width:852px) {
        .text{
            left: 12%;
            max-height: 176px;
            width: 75%;
        }
    }
    @media screen and (max-width:756px) {
        .text{
            width: 75%;
            left: 11%;
            overflow-y: hidden;
        }
    }
    @media screen and (max-width:675px) {
        .text{
            width: 75%;
            left: 14%;
            overflow-y:auto;
        }
    }
    @media screen and (max-width:580px) {
        .text{
            top: 26%;
            left: 18%;
            width: 50%;
        }
    }
    @media screen and (max-width:580px) {
        .text{
            top: 26%;
            left: 18%;
            overflow-y: auto;
        }
    }
    @media screen and (max-width:512px) {
        .text{
            width: 40%;
            left: 20%;
        }
    }
`;class c extends p{static get styles(){return[x(m),u,l`
                :host {
                    display: block;
                }
            `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e={defaultValue:"{}"}}firstUpdated(e){super.firstUpdated(e);let t=this.shadowRoot.querySelector("#phoneText"),i=JSON.parse(this.e.defaultValue);if(i.hasOwnProperty("message")){let r=i.message,a=r.text||r.Text;a&&(t.innerText=a)}else if(i.hasOwnProperty("Message")){let r=i.Message,a=r.text||r.Text;a&&(t.innerText=a)}}getText(e,t){return t}getGroupTitles(e){return Object.keys(e)}_getSubGroupTitles(e){let i=JSON.parse(this.e.defaultValue)[e];return Object.keys(i)}_getSubtitleValue(e,t){return JSON.parse(this.e.defaultValue)[e][t]}render(){return n`
            <section>
                <div class="columns content">
                    <div class="image-container">
                        <div class="screen-shot"></div>
                        <div class="text">
                            <h6 id="phoneText" class="text-message">Your Message Comes Here</h6>
                        </div>
                    </div>
                    <div class="content-2">
                        ${this.getGroupTitles(JSON.parse(this.e.defaultValue)).map((e,t)=>n`
                                <div class="group-title">
                                    <h1>${e}</h1>
                                </div>
                                <div class="group">
                                    ${this._getSubGroupTitles(e).map(i=>n`
                                            <div class="column">
                                                <h6 class="summary-p ">${this.getText(e,i)}</h6>
                                                <h6 class="summary-info">${this._getSubtitleValue(e,i)}</h6>
                                            </div>
                                        `)}
                                </div>
                            `)}
                    </div>
                </div>
            </section>
        `}}customElements.define("email-summary",c);const g=({element:o})=>{const e=d.useRef(null);return d.useEffect(()=>{e.current&&o&&(e.current.e=o)},[o]),s.jsx(s.Fragment,{children:o?s.jsx("email-summary",{ref:e}):s.jsx("p",{children:"Loading data..."})})};export{g as default};
