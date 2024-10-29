import{i as c,r as u,g as h,k as n,a as l,j as o}from"./index-C2PWchud.js";import{B as g}from"./base-element-5lxvCIHt.js";import{u as x}from"./utils-mixin-D5aAiqNi.js";const m=class extends x(g){static get is(){return"message-summary"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}constructor(){super(),this.searchText="",this.rows=[],this.cols=[],this.e=null}static get properties(){return{rows:{type:Array},e:{type:Object},cols:{type:Array}}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}updated(a){a.has("e")||a.has("cols")}init(a,e){super.init(a,e);var t=this;t.title=m.toTitleCase(a.name),t.icon=a.icon,t.service=a.service,t.params=e.pl.paramsCopy(),t.maxlength=a.max}},f=c`
  .columns {
    display: flex !important;
    flex-direction: row !important;
  }
  .group {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center;
  }
  .group-title {
    margin-top: 8px;
  }
  h5 {
    margin-bottom: 0 !important;
  }
  .content {
    width: 100%;
    max-height: 510px;
    overflow-y: auto;
    border-left: 2px solid var(--link);
    padding-left: 16px;
  }
  .image-cont {
    display: flex;
  }
  .text {
    background-color: rgb(206, 206, 206);
    padding: 4px;
    text-align: end;
    width: 50%;
    line-break: auto;
    border-radius: 8px;
    position: relative;
    margin-left: 22px;
    margin-top: 83px;
    min-height: fit-content;
    max-height: 320px;
    overflow-y: auto;
  }
  .text-message {
    font-weight: 400 !important;
    padding: 2px;
    text-align: left;
    font-size: 14px;
  }
  .column {
    width: 70%;
    margin-left: 20px;
  }
  h4,
  h5 {
    color: var(--primary) !important;
  }
  hr {
    height: 1px;
    width: 90%;
    background-color: var(--link) !important;
  }
  .title.is-6 {
    text-decoration-thickness: inherit;
  }
  .subtitle {
    padding-left: 20px;
  }
  .summary-p {
    background-color: var(--primary) !important;
    color: #fff !important;
    padding: 0.5rem;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .summary-info {
    margin-bottom: 15px;

    text-align: center;
    font-weight: 600 !important;
  }

  @media screen and (max-width: 1456px) {
    .image-cont {
      width: 68%;
    }
  }
  @media screen and (max-width: 1413px) {
    .image-cont {
      width: 70%;
    }
  }

  @media screen and (max-width: 1360px) {
    .image-cont {
      width: 72%;
    }
  }
  @media screen and (max-width: 1316px) {
    .image-cont {
      width: 76%;
    }
  }

  @media screen and (max-width: 1264px) {
    .image-cont {
      width: 79%;
    }
  }
  @media screen and (max-width: 1212px) {
    .image-cont {
      width: 83%;
    }
  }
  @media screen and (max-width: 1165px) {
    .image-cont {
      width: 86%;
    }
  }

  @media screen and (max-width: 1134px) {
    .image-cont {
      width: 89%;
    }
  }

  @media screen and (max-width: 1096px) {
    .columns {
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      display: flex !important;
    }
    .message-container {
      width: 70%;
      margin-left: -4%;
    }

    .image-cont {
      background-image: url("src/themes/dsv1.0/img/isometic/iphone landscape.png");
      width: 100%;
    }

    .text {
      margin-left: 30px;
      width: 70%;
      overflow-y: auto;
    }

    .content {
      border-top: 1.5px solid var(--link);
      border-left: none;
      padding-top: 8px;
    }
    .content h1 {
      text-align: center !important;
    }

    h1 {
      font-size: 24px !important;
      font-weight: 500 !important;
      padding-left: 0px !important;
    }
  }

  @media screen and (max-width: 1040px) {
    .group {
      display: flex !important;
      flex-direction: column !important;
    }
    .text {
      height: 200px;
      overflow-y: auto;
      margin-top: 97px;
    }
  }
  @media screen and (max-width: 500px) {
    .text {
      width: 85%;
      max-height: 105px;
      margin-left: 13px;
      overflow-y: auto;
      text-align: center;
      margin-top: 145px;
    }
  }
  @media screen and (max-width: 852px) {
    .text {
      height: 150px;
      margin-top: 120px;
    }
  }
  @media screen and (max-width: 756px) {
    .column {
      width: 100%;
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 732px) {
    .message-container {
      width: 90%;
    }
  }
  @media screen and (max-width: 675px) {
  }

  @media screen and (max-width: 595px) {
    .message-container {
      width: 100%;
      margin: 0;
    }
    .block {
      overflow-x: auto;
    }
  }
  @media screen and (max-width: 512px) {
  }
`;class d extends m{static get styles(){return[u(h),f,c`
        :host {
          display: block;
        }
      `]}constructor(){super(),this.searchText="",this.rows=[],this.cols=[],this.e=null}static get properties(){return{rows:{type:Array},e:{type:Object},cols:{type:Array}}}updated(e){e.has("e")&&console.log("message summary is ",this.e)}createMessagePreviewBlock(){const t=JSON.parse(this.e.defaultValue).message.text;return n`
      <div class="block">
        <h3>Message Preview</h3>
        <p>${t}</p>
      </div>
    `}createScheduleBlock(){const e=JSON.parse(this.e.defaultValue),t=e.message.scheduled_date,i=e.message.scheduled_time;return n`
      <div class="block">
        <h3>Schedule</h3>
        <p>Date: ${t}</p>
        <p>Time: ${i}</p>
      </div>
    `}createFloatUsageBlock(){const e=JSON.parse(this.e.defaultValue),t=Object.keys(e).find(p=>p!=="message"),i=t,s=e[t].recipient_count,r=e[t].alias;return n`
      <div class="block">
        <h3>Float Usage</h3>
        <p>Network: ${i}</p>
        <p>Recipients: ${s}</p>
        <p>Alias: ${r}</p>
      </div>
    `}firstUpdated(e){super.firstUpdated(e);let t=this.shadowRoot.querySelector("#phoneText"),i=JSON.parse(this.e.defaultValue);if(i.hasOwnProperty("message")){let s=i.message,r=s.text;r!=null||r!=null||(r=s.Text),t.innerText=r}else if(i.hasOwnProperty("Message")){let s=i.Message,r=s.text;r!=null||r!=null||(r=s.Text),t.innerText=r}}getText(e,t){return t}getGroupTitles(e){return Object.keys(e)}getGroupTitles(e){return Object.keys(e)}_getSubGroupTitles(e){let i=JSON.parse(this.e.defaultValue)[e];return Object.keys(i)}_getSubtitleValue(e,t){return JSON.parse(this.e.defaultValue)[e][t]}toTitleCase(e){if(!e)return"";e=e.toString(),e=e.toLowerCase().split("_");let t=[];for(let i=0;i<e.length;i++)t[i]=e[i].substr(0,1).toUpperCase()+e[i].substr(1);return t.join(" ")}getMessageText(){return JSON.parse(this.e.defaultValue).message.text}static get is(){return"message-summary"}render(){return n`
      <style>
        .message-container {
          width: 36%;
          min-height: 400px;
          position: relative;
          margin-left: 8%;
        }
        .image-cont {
          width: 100%;
          height: 100%;
          align-items: center;
          display: flex;
          position: absolute;

          /* The image used */
          background-image: url("src/themes/dsv1.0/img/isometic/iphone potrait.png");
          background-position: 0px;
          background-size: contain;
          background-repeat: no-repeat;
        }
      </style>
      <section>
        <div class="columns has-text-weight-bold is-size-6 content card p-6">
          <div class="message-container">
            <div class="image-cont" style="width:100%;"></div>
            <div class="text">
              <p id="phoneText" class="text-message">Your Message Comes Here</p>
            </div>
          </div>
          <div class="content">
            ${this.getGroupTitles(JSON.parse(this.e.defaultValue)).map((e,t,i)=>n`
                <div class="group-title">
                  <h3>${this.toTitleCase(e)}</h3>
                </div>
                ${this._getSubGroupTitles(e).includes("text")?n`
                      <div class="block">
                        <div class="column">
                          <h4>Text</h4>
                          <p>${this.getMessageText()}</p>
                          <h4 style="margin-top : 1.5rem;">
                            Scheduled Date & Time
                          </h4>
                          <p>
                            ${this._getSubtitleValue(e,"scheduled_date")}
                            At
                            ${this._getSubtitleValue(e,"scheduled_time")}
                          </p>
                        </div>
                      </div>
                    `:n`
                      <div class="block is-flex">
                        ${this._getSubGroupTitles(e).filter(s=>s!=="text"&&!s.startsWith("scheduled")).map(s=>n`
                              <div class="column">
                                <h4>
                                  ${this.toTitleCase(this.getText(e,s))}
                                </h4>
                                <p>
                                  ${this._getSubtitleValue(e,s)}
                                </p>
                              </div>
                            `)}
                      </div>
                    `}
                ${t!==i.length-1?n`<hr />`:n``}
              `)}
          </div>
        </div>
      </section>
    `}}customElements.define(d.is,d);const v=({element:a})=>{console.log("elements ",a);const e=l.useRef(null);return l.useEffect(()=>{e.current&&a&&(e.current.e=a)},[a]),o.jsx(o.Fragment,{children:a?o.jsx("message-summary",{id:"message-summary",ref:e}):o.jsx("p",{children:"Loading data..."})})};export{v as default};
