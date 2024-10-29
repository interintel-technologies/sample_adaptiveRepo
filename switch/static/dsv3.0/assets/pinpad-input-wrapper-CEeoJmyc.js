import{S as r,i as d,k as l,a,j as o}from"./index-C2PWchud.js";import"./fa-icon-COAiXmZs.js";import"./iron-icons-CfX5YBfy.js";import"./iron-icon-Ci-yo7Ra.js";import{I as c}from"./input-shared-default-D8777CY5.js";import{I as p}from"./input-label-animation-CeZfeLC5.js";import"./lit-html-dRijB2IX.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./polymer-legacy-CVdXdTHq.js";import"./iron-flex-layout-C17s8gyg.js";const h=class extends r{static get is(){return"pinpad-input"}static get properties(){return{params:{type:Object,value:{}},type:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){return this.required&&!this.getValue()?new this.Validation(!1,this.e.name+" is Required"):this.required&&this.getValue().length<this.e.min?new this.Validation(!1,this.e.name+" cannot be less than "+this.e.min):new this.Validation(!0,"valid")}firstUpdated(e){super.firstUpdated(e)}init(e,i){super.init(e,i),this.required=this.e.required||e.min&&e.min>0,this.value=e.defaultValue||""}};/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const u=d`
.pinpad-dropdown{
    position:absolute;
    z-index:9999;
    width: 97.8%;
    background-color: #fff;
    border: 1px solid rgb(183, 181, 181);
    border-radius: 7px;
    padding: 10px;
    display: none;
}
.pin-btn{
    width: 100%;
    border: 2px solid rgb(183, 181, 181);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 15px;
}

.is-danger {
    color: rgb(255, 56, 96)!important;
    border-width: 2px!important;
    border-style: solid!important;
    border-color: rgb(255, 56, 96)!important;
    border-radius: 6px;
    border-image: initial;
    position: relative;
  }
  
  .is-success{
    color: rgb(35, 209, 96)!important;
    border-width: 2px!important;
    border-style: solid!important;
    border-color: rgb(35, 209, 96)!important;
    border-radius: 6px;
    border-image: initial;
    position: relative;
  }
.message-block{
    display:flex;
    justify-content:space-between;
}

.input-counter{
    position: absolute;
    right: 12px;
    top: 60px;
    color:#cecece;
}

@media screen and (max-width: 1024px){ 

    .pinpad-dropdown{ 
        width: 97.4%;
    }

}

@media screen and (max-width: 1081px){ 

    .pinpad-dropdown{ 
        width: 97.5%;
    } 
}

@media screen and (max-width: 1013px){ 

    .pinpad-dropdown{ 
        width: 97.2%;
    } 
}



@media screen and (max-width: 810px){ 

    .pinpad-dropdown{ 
        width: 96.7%;
    } 
}

@media screen and (max-width: 772px){ 

    .pinpad-dropdown{ 
        width: 96.4%;
    } 
}

@media screen and (max-width: 768px){ 

    .pinpad-dropdown{ 
        width: 96%;
    }

}

@media screen and (max-width: 727px){ 

    .pinpad-dropdown{ 
        width: 95.9%;
    } 
}

@media screen and (max-width: 652px){ 

    .pinpad-dropdown{ 
        width: 95.4%;
    } 
}

@media screen and (max-width: 593px){ 

    .pinpad-dropdown{ 
        width: 94.9%;
    } 
}

@media screen and (max-width: 546px){ 

    .pinpad-dropdown{ 
        width: 94.2%;
    } 
}

@media screen and (max-width: 414px){ 

    .pinpad-dropdown{ 
        width: 91%;
    }

}


@media screen and (max-width: 375px){ 

    .pinpad-dropdown{ 
        width: 90%;
    }

}

@media screen and (max-width: 360px){ 

    .pinpad-dropdown{ 
        width: 89.8%;
    }

}

@media screen and (max-width: 320px){ 

    .pinpad-dropdown{ 
        width: 87.9%;
    }

    .the-third{
        margin-left: -5px;
    }

}

`;class m extends h{static get styles(){return[u,c,p,d`
        :host {
          display: block;
        }
      `]}static get properties(){return{e:{type:Object},pinArr:{type:Array},iskeyboardVisible:{type:Boolean},keyBoard:{type:Object}}}constructor(){super(),this.e=null,this.pinArr=[],this.iskeyboardVisible=!1}updated(i){if(i.has("e")){console.log("pin pad props: ",this.e),this.keyBoard=this.shadowRoot.querySelector(".pinpad-dropdown"),this.disableKey(),document.addEventListener("click",n=>{const s=n.composedPath();s[0].id==="input"||s[0].className.includes("pin-btn")||(!s[0].id||s[0].className!=="column is-4"||s[0].className!=="pin-btn"||s[0].className!=="key-num"||s[0].tagName!=="svg")&&this.close()});const t=this.shadowRoot.querySelector("#input");this.e.max!=null&&t.setAttribute("maxlength",this.e.max),this.e.min!=null&&t.setAttribute("minlength",this.e.min),this.shadowRoot.querySelector("#require").style.display=this.required?"flex":"none"}}invalid(i){const t=this.shadowRoot.querySelector(".label-animation");t.classList.remove("is-success"),t.classList.add("is-danger"),this.shadowRoot.querySelector("#count").style.color="rgb(255, 56, 96)",this.shadowRoot.querySelector("#warning-text").style.display="block",this.shadowRoot.querySelector("#warning-text").innerText=i.validationMessage}valid(i){const t=this.shadowRoot.querySelector(".label-animation");t.classList.remove("is-danger"),t.classList.add("is-success"),this.shadowRoot.querySelector("#count").style.color="rgb(35, 209, 96)",this.shadowRoot.querySelector("#warning-text").style.display="none"}getValue(){return this.shadowRoot.querySelector("#input").value}pinBtn(i){const t=i.target.textContent.trim();if(this.pinArr.length>=this.e.max)return;this.pinArr.push(t);const n=this.pinArr.join("");this.shadowRoot.querySelector(".label-animation").value=n,this.count()}btnDelete(){this.pinArr.pop();const i=this.pinArr.join("");this.shadowRoot.querySelector(".label-animation").value=i,this.count()}openDropDown(){this.keyBoard.classList.add("is-block"),this.keyBoard.classList.contains("is-block")&&(this.iskeyboardVisible=!0,this.stickyLabel())}submit(){this.close(),this.pl.submitForm()}close(){this.iskeyboardVisible&&(this.keyBoard.classList.remove("is-block"),this.iskeyboardVisible=!1,this.stickyLabel2())}disableKey(){const i=this.shadowRoot.querySelector("#input");i.onkeydown=function(){return!1}}reveal(){const i=this.shadowRoot.querySelector("#input"),t=i.type;t==="password"?(i.type="text",this.shadowRoot.querySelector("#eye").icon="icons:visibility-off"):t==="text"&&(i.type="password",this.shadowRoot.querySelector("#eye").icon="icons:visibility")}stickyLabel(){const i=this.shadowRoot.querySelector("#label");this.shadowRoot.querySelector("#input").value===""&&this.shadowRoot.activeElement.id==="input"&&(i.style.top="-65px",i.style.left="0",i.style.fontSize="12px",i.style.fontWeight="700")}stickyLabel2(){const i=this.shadowRoot.querySelector("#label");this.shadowRoot.querySelector("#input").value===""&&(i.style.top="-35px",i.style.left="25px",i.style.fontSize="14px",i.style.fontWeight="normal")}count(){if(this.e.max!=null){const i=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=i+"/"+this.e.max,this.shadowRoot.querySelector("#count").style.color=i===this.e.max?"rgb(35, 209, 96)":"#cecece"}}render(){return l`
      <div class="column" style="position:relative;">
        <div class="field">
          <div class="control has-icons-right input-mixin input-effect">
            <input class="label-animation" id="input" @focusin=${this.openDropDown} required=${this.required} 
              minlength=${this.e&&this.e.min} maxlength=${this.e&&this.e.max} 
              @keyup="${this.count}" type="password" placeholder="">
            <label id="label">${this.e&&this.e.name}</label>
            <span id="danger-icon" class="icon is-small is-right">
              <fa-icon class="fas fa-exclamation-triangle icon" size="1em" color="#ff3860"></fa-icon>
            </span>
            <span id="check-icon" class="icon is-small is-right">
              <fa-icon class="fas fa-check" size="1em" color="#23d160"></fa-icon>
            </span>
            <span class="focus-bg"></span>
          </div>
          <div class="message-block">
            <p class="help" id="warning-text" style="color:#ff3860;">${this.e?this.e.name+" required":""}</p>
            <p id ="count" class="input-counter">0/${this.e?this.e.max:""}</p>
          </div>
        </div>

        <div class="pinpad-dropdown">
          <div class="columns is-multiline is-mobile">
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">1</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">2</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">3</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">4</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">5</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">6</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">7</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">8</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">9</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.btnDelete}>
                <iron-icon icon="icons:backspace"></iron-icon>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.pinBtn}>
                <p class="key-num">0</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="pin-btn" @click=${this.reveal}>
                <iron-icon id="eye" icon="icons:visibility"></iron-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("pin-pad-input",m);const R=e=>{const{element:i}=e;console.log("element pin pad ",i);const t=a.useRef(null);return a.useEffect(()=>{t.current&&i&&(t.current.e=i)},[i]),o.jsx("div",{children:i?o.jsx("pinpad-input",{id:"pinpad-input",ref:t}):o.jsx("p",{children:"Loading data..."})})};export{R as default};
