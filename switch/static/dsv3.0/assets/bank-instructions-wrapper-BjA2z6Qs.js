import{i as n,S as l,r,g as d,k as o,a,j as s}from"./index-C2PWchud.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const c=n`

`,u=class extends l{static get is(){return"bank-instructions"}constructor(){super(),this.bank=0}static get properties(){return{bank:Number}}firstUpdated(t){super.firstUpdated(t)}getName(){return this.e.formName}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}init(t,e){super.init(t,e)}};class p extends u{static get styles(){return[r(d),c,n`
        :host {
          display: block;
        }
      `]}createRenderRoot(){return this}render(){return o`
      <style>
        .inp {
          border-radius: 6px !important;
          font-size: 14px !important;
          padding: 20px !important;
          line-height: 1;
          background-color: #fcfcfc !important;
          border: 1px solid #a3a3a4 !important;
          box-shadow: 0 0 0 transparent !important;
        }
      </style>

      <div class="column is-9 is-paddingless">
        <div class="field">
          <div class="select is-fullwidth">
            <select
              class="inp"
              @change="${this.changeBank}"
              id="input"
              style="text-indent: 20px; padding: 0px; border-radius: 4px;"
            >
              <option value="kcb">KCB BANK</option>
              <option value="equity">EQUITY BANK</option>
            </select>
          </div>
        </div>
      </div>
      <div id="kcb" class="column is-12">
        <!-- Widget -->
        <div class="flex-card light-bordered light-raised padding-10">
          <ol class="simple-feed">
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">This is the markup content for KCB instructions</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">You can access KCB :</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text"> on Google Play Store or Apple Store</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">By dialling <span class="name"> *522# </span> on your KCB M-Banking registered phone.</span>
              </div>
            </li>
          </ol>
        </div>
        <!-- /Widget -->
      </div>
      <div id="equity" class="column is-12" style="display: none;">
        <!-- Widget -->
        <div class="flex-card light-bordered light-raised padding-10">
          <ol class="simple-feed">
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">This is the markup content for Equity Bank instructions</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">You can access Equity :</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text"> on Google Play Store or Apple Store</span>
              </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
              <div class="feed-item-text">
                <span class="text">By dialling <span class="name"> </span> on your Equitel registered phone.</span>
              </div>
            </li>
          </ol>
        </div>
        <!-- /Widget -->
      </div>
    `}firstUpdated(){this.changeBank()}updated(e){e.has("e")}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}getValue(){return this.querySelector("#input").value}changeBank(){console.log("Change bank ",this.querySelector("#input")),this.getValue()==="equity"?(this.querySelector("#equity").style.display="unset",this.querySelector("#kcb").style.display="none"):(this.querySelector("#equity").style.display="none",this.querySelector("#kcb").style.display="unset")}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(e){}invalid(e){}init(e,i){super.init(e,i)}}customElements.define("bank-instructions",p);const f=({element:t})=>{const e=a.useRef(null);return a.useEffect(()=>{if(e.current&&t){const i=e.current;i.e=t}},[t]),s.jsx(s.Fragment,{children:t&&s.jsx("bank-instructions",{id:"bank-instructions",ref:e})})};export{f as default};
