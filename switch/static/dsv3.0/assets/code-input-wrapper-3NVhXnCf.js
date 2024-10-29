import{i as c,S as p,r as d,g as h,k as o,a as l,j as a}from"./index-C2PWchud.js";const g=c`
    .content{
        display:block;
        justify-content:center;
        text-align:center;
    }
    .digits{
        display:flex;
        justify-content: center;
    }
    .input{
        width:3.75em ;
        height:3.75em;
        font-size:16px;
        text-align:center !important;
        margin-right:5px;
        margin-left:5px;
        border-radius:50%;
        border-color:var(--md-sys-color-surfaceVariant);
        flex-shrink: 0;
    }
    p{
        font-weight:400 !important;
        font-size:14px;
    }
    .resend{
        margin-top:2rem;
    }
    span{
        color:var(--primary);
        cursor:pointer;
    }
    .title{
        font-size:20px !important;
        font-weight:400 !important;
    }

    @media (max-width: 600px) {
       

  .digits .input {
    width: 2.25em; /* Smaller width for smaller screens */
    height: 2.25em; /* Smaller height for smaller screens */
    margin: 5px; /* Adjusts margin for better spacing */
  }
}
`,f=class extends p{static get properties(){return{params:{type:Object,value:{}},type:String,columnSize:{type:Array},value:String}}validate(){return this.shadowRoot.querySelectorAll(".input").forEach(t=>t.value===null||t.value==""?new this.Validation(!1,"Each Digit is Required"):(t.classList.remove("is-danger"),t.classList.add("is-success"),setTimeout(()=>{t.classList.remove("is-success")},3e3),new this.Validation(!0,"valid"))),this.getValue()?this.getValue().length<this.e.details.codeLength?new this.Validation(!1,"OTP code is Required"):new this.Validation(!0,"valid"):new this.Validation(!1,"OTP code is Required")}getName(){return this.e.formName}getValue(){const i=this.shadowRoot.querySelectorAll(".input"),t=[];return i.forEach(e=>{t.push(e.value)}),t.join("")}init(i,t){super.init(i,t),this.required=this.e.required||i.min&&i.min>0,this.value=i.defaultValue||""}};class u extends f{static get properties(){return{codeLength:Number,e:{type:Object}}}constructor(){super(),this.codeLength=4,this.e=null}updated(t){t.has("e")&&(this.e.details.codeLength?this.codeLength=this.e.details.codeLength:this.codeLength)}static get styles(){return[d(h),g,c`
                :host {
                    display: block;
                }
            `]}handleInput(t,s){const e=this.shadowRoot.querySelectorAll(".input");e[s].value.length===1&&s+1<e.length&&e[s+1].focus()}handleKeydown(t,s){const e=this.shadowRoot.querySelectorAll(".input");switch(t.keyCode){case 37:s>0&&(t.preventDefault(),e[s-1].focus(),e[s-1].select());break;case 39:s+1<e.length&&(t.preventDefault(),e[s+1].focus(),e[s+1].select());break;case 8:if(e[s].value===""&&s!==0){for(let r=s;r<e.length-1;r++)e[r].value=e[r+1].value;e[s-1].value="",e[s-1].focus()}break;case 46:if(s!==e.length-1){for(let r=s;r<e.length-1;r++)e[r].value=e[r+1].value;e[e.length-1].value="",n.select(),t.preventDefault()}break}}static get is(){return"code-input"}resendOtp(t){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:t},bubbles:!0,composed:!0}))}render(){return o`
            <div class="content py-2">
                <p class="m-0">${this.e.name}</p>
                <br>
                <div class="digits my-4">
                    ${Array.from({length:this.codeLength},(t,s)=>o`
                        <input class="input" 
                        type="text" 
                        required="${this.e.required}" 
                        maxlength="1" 
                        @input="${e=>this.handleInput(e,s)}"
                        @keydown="${e=>this.handleKeydown(e,s)}">
                    `)}
                </div>
                <p class="resend">Didn't get code? <span >Resend</span></p>
                <input class="otp-input" type="hidden" value="" name="otp">
            </div>
        `}}customElements.define(u.is,u);const v=({element:i})=>{const t=l.useRef(null);return l.useEffect(()=>{t.current&&i&&(t.current.e=i)},[i]),a.jsx(a.Fragment,{children:i?a.jsx("code-input",{id:"code-input",ref:t}):a.jsx("p",{children:"Loading data..."})})};export{v as default};
