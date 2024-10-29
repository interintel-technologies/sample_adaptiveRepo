import{S as y,i as x,r as g,g as w,k as b,a as m,j as h}from"./index-C2PWchud.js";import{u as L}from"./utils-mixin-D5aAiqNi.js";import{w as S}from"./datasource-mixin-DMQBE4lo.js";const v=class extends L(y){static get properties(){return{value:Array,params:{type:Object,value:{}},type:String,columnSize:String,ColumnOffset:{type:Array}}}constructor(){super(),this.value=[]}firstUpdated(i){super.firstUpdated(i)}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue().length>0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(i,e){super.init(i,e);const t=this;t.title=v.toTitleCase(i.name),this.required=i.min&&i.min>0,this.name=i.name}},$=x`
  .cont {
    border: 0.7px solid black;
    border-radius: 7px;
    padding: 32px;
    margin: 16px;
  }
  .card {
    padding: 16px;
    background: #fff;
    border: 0.4px solid black;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .columns {
    max-height: 80vh;
    overflow-y: auto;
    margin: 0 !important;
    padding-top: 7px;
  }
  h5 {
    margin: 0 !important;
  }
  .c-title,
  .c-desc {
    text-align: center;
    pointer-events: none;
    margin-bottom: 0 !important;
  }
  .fas {
    pointer-events: none;
    margin-bottom: 20px !important;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    border-color: var(--primary);
  }
  .selected {
    border: 1.2px solid var(--link) !important;
  }
  .card:hover .overlay {
    transform: scale(4) translateZ(0);
  }
  .unavailable {
    cursor: pointer;
    color: var(--primary) !important;
    text-align: center;
  }
  .unavailable:hover {
    color: var(--link) !important;
  }
  .unavailable:active {
    transform: scale(0.9);
  }
  .more {
    cursor: pointer;
    width: fit-content;
    color: var(--primary) !important;
    text-align: flex-start;
  }
  .more:hover {
    color: var(--link) !important;
  }
  .more:active {
    transform: scale(0.9);
  }
  .button {
    background-color: var(--primary);
    padding: 0 35px;
    border-color: none;
    color: white;
  }
  .button:hover {
    background-color: var(--linkr);
  }
  #warning-text {
    display: none;
  }
  .title-danger {
    color: #ff2b56 !important;
  }
  .title-success {
    color: #23d160 !important;
  }
  .card-success {
    border-color: #23d160 !important;
  }
  .cont-success {
    border-color: #23d160 !important;
  }
  .cont-danger {
    border-color: #ff2b56 !important;
  }
  input {
    appearance: none;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: 2px solid var(--primary);
    transition: 0.2s all linear;
    margin-right: 5px;
  }
  input:checked {
    border: 5px solid var(--link);
  }
  .input-success {
    border: 5px solid #23d160 !important;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  .input-warning {
    color: #ff3860;
    display: none;
    position: absolute;
    top: 37px;
  }
  @media (max-width: 800px) {
    .dr {
      display: none;
    }
  }
  @media (max-width: 600px) {
    .columns {
      border-bottom: 1px solid black;
    }
  }
`;class f extends v{static get styles(){return[g(w),$]}static get properties(){return{serviceDescriptions:Array}}constructor(){super(),this.serviceDescriptions=[],this.createServiceDescriptions()}createServiceDescriptions(){for(let e=0;e<4;e++){const t={id:e,description:void 0,price:void 0,hours:void 0,minutes:void 0};this.serviceDescriptions=[...this.serviceDescriptions,t]}}onAddMoreFieldsClickHandler(){const e={id:this.serviceDescriptions.length,description:void 0,price:void 0,hours:void 0,minutes:void 0};this.serviceDescriptions=[...this.serviceDescriptions,e]}onNextBtnClickHandler(){let e=!1;this.value=this.serviceDescriptions.filter(t=>t.description||t.price),this.value.forEach(t=>{const n=this.shadowRoot.querySelector(`#descriptionWarningText${t.id}`),s=this.shadowRoot.querySelector(`#priceWarningText${t.id}`),o=this.shadowRoot.querySelector(`#hoursWarningText${t.id}`),a=this.shadowRoot.querySelector(`#minutesWarningText${t.id}`);t.description||(n.style.display="block",e=!0),t.price||(s.style.display="block",e=!0),!t.hours||t.hours<0||t.hours>23?(o.style.display="block",o.innerHTML="Hours must be between 0 and 23",e=!0):o.style.display="none",!t.minutes||t.minutes<0||t.minutes>59?(a.style.display="block",a.innerHTML="Minutes must be between 0 and 59",e=!0):a.style.display="none"}),e||this.pl.submitForm()}focusOutLabel(e,t){const n=e.target.name,s=e.target.value,o=this.shadowRoot.querySelector(`#${n}Label${t}`);s==""&&(o.style.top="-30px",o.style.left="25px",o.style.fontSize="14px",o.style.fontWeight="normal")}focusInLabel(e,t){const n=e.target.name,s=this.shadowRoot.querySelector(`#${n}Label${t}`);s.style.top="-64px",s.style.left=0,s.style.fontSize="12px",s.style.fontWeight=700}valid(e){const t=this.shadowRoot.querySelector("#warning-text"),n=this.shadowRoot.querySelectorAll(".input-warning");this.value.forEach(s=>{const o=this.shadowRoot.querySelector("#descriptionInput"+s.id),a=this.shadowRoot.querySelector("#priceInput"+s.id),r=this.shadowRoot.querySelector("#hoursInput"+s.id),l=this.shadowRoot.querySelector("#minutesInput"+s.id),c=this.shadowRoot.querySelector("#descriptionLabel"+s.id),d=this.shadowRoot.querySelector("#priceLabel"+s.id),u=this.shadowRoot.querySelector("#hoursLabel"+s.id),p=this.shadowRoot.querySelector("#minutesLabel"+s.id);o.classList.add("cont-success"),a.classList.add("cont-success"),r.classList.add("cont-success"),l.classList.add("cont-success"),c.classList.add("title-success"),d.classList.add("title-success"),u.classList.add("title-success"),p.classList.add("title-success")}),t.style.display="none",n.forEach(s=>s.style.display="none"),setTimeout(()=>{this.value.forEach(s=>{const o=this.shadowRoot.querySelector("#descriptionInput"+s.id),a=this.shadowRoot.querySelector("#priceInput"+s.id),r=this.shadowRoot.querySelector("#hoursInput"+s.id),l=this.shadowRoot.querySelector("#minutesInput"+s.id),c=this.shadowRoot.querySelector("#descriptionLabel"+s.id),d=this.shadowRoot.querySelector("#priceLabel"+s.id),u=this.shadowRoot.querySelector("#hoursLabel"+s.id),p=this.shadowRoot.querySelector("#minutesLabel"+s.id);o.classList.remove("cont-success"),a.classList.remove("cont-success"),r.classList.remove("cont-success"),l.classList.remove("cont-success"),c.classList.remove("title-success"),d.classList.remove("title-success"),u.classList.remove("title-success"),p.classList.remove("title-success")})},3e3)}invalid(e){const t=this.shadowRoot.querySelector(".label"),n=this.shadowRoot.querySelector("#warning-text"),s=this.shadowRoot.querySelector(".cont");t.classList.remove("title-success"),t.classList.add("title-danger"),s.classList.add("cont-danger"),n.style.display="block"}static get is(){return"service-description"}render(){return b`
      <div class="column content">
        <div class="column is-multiline">
          <div class="columns dr">
            <div class="column is-offset-6 is-4" style="padding-top:0;">
              <h5 style="text-align: center;">Duration</h5>
            </div>
          </div>
          ${this.serviceDescriptions.map(e=>b`
              <div class="columns">
                <div class="column is-6">
                  <div class="control input-mixin input-effect">
                    <label
                      id="descriptionLabel${e.id}"
                      class="label"
                      >Service Description</label
                    >
                    <input
                      id="descriptionInput${e.id}"
                      class="label-animation input"
                      type="text"
                      name="description"
                      @input=${t=>e.description=t.target.value}
                      @focusin=${t=>this.focusInLabel(t,e.id)}
                      @focusout="${t=>this.focusOutLabel(t,e.id)}}"
                    />
                    <p
                      id="descriptionWarningText${e.id}"
                      class="input-warning"
                    >
                      Required
                    </p>
                  </div>
                </div>
                <div class="column is-2">
                  <div class="control input-mixin input-effect">
                    <label id="hoursLabel${e.id}" class="label"
                      >Hours</label
                    >
                    <input
                      id="hoursInput${e.id}"
                      class="label-animation input"
                      type="number"
                      name="hours"
                      @input=${t=>e.hours=t.target.value}
                      @focusin=${t=>this.focusInLabel(t,e.id)}
                      @focusout="${t=>this.focusOutLabel(t,e.id)}}"
                      min="0"
                    />
                    <p
                      id="hoursWarningText${e.id}"
                      class="input-warning"
                    >
                      Required
                    </p>
                  </div>
                </div>
                <div class="column is-2">
                  <div class="control input-mixin input-effect">
                    <label
                      id="minutesLabel${e.id}"
                      class="label"
                      >Minutes</label
                    >
                    <input
                      id="minutesInput${e.id}"
                      class="label-animation input"
                      type="number"
                      name="minutes"
                      @input=${t=>e.minutes=t.target.value}
                      @focusin=${t=>this.focusInLabel(t,e.id)}
                      @focusout="${t=>this.focusOutLabel(t,e.id)}}"
                      min="0"
                      max="59"
                    />
                    <p
                      id="minutesWarningText${e.id}"
                      class="input-warning"
                    >
                      Required
                    </p>
                  </div>
                </div>
                <div class="column is-2">
                  <div class="control input-mixin input-effect">
                    <label id="priceLabel${e.id}" class="label"
                      >Price</label
                    >
                    <input
                      id="priceInput${e.id}"
                      class="label-animation input"
                      type="number"
                      name="price"
                      @input=${t=>e.price=t.target.value}
                      @focusin=${t=>this.focusInLabel(t,e.id)}
                      @focusout="${t=>this.focusOutLabel(t,e.id)}}"
                    />
                    <p
                      id="priceWarningText${e.id}"
                      class="input-warning"
                    >
                      Required
                    </p>
                  </div>
                </div>
              </div>
            `)}
          <h4 class="more" @click=${()=>this.onAddMoreFieldsClickHandler()}>
            Add more fields
          </h4>
        </div>
        <div class="level">
          <h4 class="unavailable">Back</h4>
          <button class="button" @click=${()=>this.onNextBtnClickHandler()}>
            Next
          </button>
        </div>
        <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
      </div>
    `}}customElements.define(f.is,f);const q=({element:i})=>{const e=m.useRef(null);return m.useEffect(()=>{const t=e.current;t&&i&&(t.e=i)},[i]),h.jsx("div",{children:i?h.jsx("service-description",{id:"service-description",ref:e}):h.jsx("p",{children:"Loading data..."})})},T=S(q);export{T as default};
