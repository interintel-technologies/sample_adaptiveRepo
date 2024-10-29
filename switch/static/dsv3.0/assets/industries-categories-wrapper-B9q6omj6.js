import{S as v,i as g,r as S,g as x,k as c,a as f,j as h}from"./index-C2PWchud.js";import"./paper-dropdown-menu-8R8AANSK.js";import"./paper-card-Crw_xY5d.js";import"./paper-menu-button-C_oWXu8J.js";import{u as b}from"./utils-mixins-2-CV_UYnIr.js";import{w as _}from"./datasource-mixin-DMQBE4lo.js";import"./polymer-legacy-CVdXdTHq.js";import"./iron-icon-Ci-yo7Ra.js";import"./iron-flex-layout-C17s8gyg.js";import"./default-theme-ChQ485_s.js";import"./paper-ripple-CP-IWaVj.js";import"./iron-iconset-svg-6Nb0KSRY.js";import"./iron-image-B9q0RFfs.js";import"./paper-material-styles-CABhO1-r.js";import"./shadow-R2NCNWlE.js";const w=class extends b(v){static get is(){return"industries-categories"}static get properties(){return{icon:String,data_name:{type:String,value:""},title:String,q:{type:String},required:Boolean,industrySection:{type:Number},industryDivision:{type:Number},industryGroup:{type:Number},industryClass:{type:Number}}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("LIST")}valid(r){}invalid(r){}getName(){return this.e.formName}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}firstUpdated(r){super.firstUpdated(r);const e=this;this.loader.then(t=>{e.currentGroups=e.groups,e.currentData=e.data,e.loading=!1})}_computeItemsCount(r){return r.length}_shouldFilter(r){var e=this._computeItemsCount(r);return e>10}_onSectionSelected(r){this.industrySection=r.detail.item.pk}_onDivisionSelected(r){this.industryDivision=r.detail.item.pk}_onGroupSelected(r){this.industryGroup=r.detail.item.pk}_computeSections(r,e){const t=[];for(let o=0;o<r.length;o++){const i=r[o];if(e){var n=e.toLowerCase(),s=i[1].toLowerCase();s.indexOf(n)!==-1&&t.push(i)}else t.push(i);if(t.length>10)break}return t}_computeDivisions(r,e,t){if(!e)return[];const n=this.qs("#industry-section").selectedItem;if(!n)return;const s=n.next,o=[];for(let d=0;d<s.length;d++){const p=s[d];if(t){var i=t.toLowerCase(),a=p[1].toLowerCase();a.indexOf(i)!==-1&&o.push(p)}else o.push(p);if(o.length>10)break}return o}_computeGroups(r,e,t,n){if(!t)return[];const s=this.qs("#industry-division").selectedItem;if(!s)return;const o=s.next,i=[];for(let p=0;p<o.length;p++){const l=o[p];if(n){var a=n.toLowerCase(),d=l[1].toLowerCase();d.indexOf(a)!==-1&&i.push(l)}else i.push(l);if(i.length>10)break}return i}_computeClasses(r,e,t,n,s){if(!n)return[];const o=this.qs("#industry-group").selectedItem;if(!o)return;const i=o.next,a=[];for(let l=0;l<i.length;l++){const u=i[l];if(s){var d=s.toLowerCase(),p=u[1].toLowerCase();p.indexOf(d)!==-1&&a.push(u)}else a.push(u);if(a.length>10)break}return a}init(r,e){super.init(r,e);var t=this;t.required=this.e.required||r.min&&r.min>0,t.title=w.toTitleCase(r.name),t.icon=r.icon,t.params=t.pl.paramsCopy(),t.data_name=r.defaultValue,t.loader=this.loadData()}},C=g`
[hidden] {
    display: none;
}

.dropdown {
    margin-left: 36px;
}

.content-wrapper {
    width: 41.66667%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    display:grid;
    font-family:'Montserrat'

}
iron-icon, div[suffix] {
    color: hsl(0, 0%, 50%);
    margin-right: 12px;
}
paper-item {
    font-size: 12px;
    color: var(--md-sys-color-onPrimaryContainer);
    background: white;
}

paper-listbox{
    background-color:var(--paper) !important;
}
paper-item{
    background-color:var(--paper) !important;
}

`;class y extends w{static get styles(){return[S(x),C,g`
			:host {
			display: block;
			}
		`]}static get properties(){return{rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.rows=[],this.cols=[]}render(){return c`
        <div class="content">
            <div class="content-wrapper">
              <!-- Industry Section  -->
              <paper-dropdown-menu
                  id="industry-section"
                  label="Industry Section">

                <paper-card horizontal-align="center"
                      slot="dropdown-content"
                      style="width: 100%">

                  <paper-listbox
                      attr-for-selection="pk"
                      @iron-select="${this._onSectionSelected}">
                      ${this._computeSections(this.rows,this.q).map(e=>c`
                        <paper-item .pk="${e[0]}" .next="${e[3]}" >${e[1]} - ${e[2]}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-card>
              </paper-dropdown-menu>
              <small class="info-error" style="display: none;"> Error </small>


              <!-- Industry Division  -->
              <paper-dropdown-menu
                  id="industry-division"
                  label="Industry Division">

                <paper-card horizontal-align="center"
                      slot="dropdown-content"
                      style="width: 100%">

                  <paper-listbox
                      attr-for-selection="pk"
                      @iron-select="${this._onDivisionSelected}">
                      ${this._computeDivisions(this.rows,this.industrySection,this.q).map(e=>c`
                        <paper-item .pk="${e[0]}" .next="${e[3]}">${e[1]} - ${e[2]}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-card>
              </paper-dropdown-menu>
              <small class="info-error" style="display: none;"> Error </small>
              <!-- Industry Division  -->
              <paper-dropdown-menu
                  id="industry-group"
                  label="Industry Group">

                <paper-card horizontal-align="center"
                      slot="dropdown-content"
                      style="width: 100%">

                  <paper-listbox
                      attr-for-selection="pk"
                      @iron-select="${this._onGroupSelected}">
                      ${this._computeGroups(this.rows,this.industrySection,this.industryDivision,this.q).map(e=>c`
                        <paper-item .pk="${e[0]}" .next="${e[3]}">${e[2]}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-card>
              </paper-dropdown-menu>
              <small class="info-error" style="display: none"> Error </small>

              <!-- Industry Division  -->
              <paper-dropdown-menu
                  id="industry-class"
                  label="Industry Class">

                <paper-card horizontal-align="center"
                      slot="dropdown-content"
                      style="width: 100%">

                  <paper-listbox
                      attr-for-selection="pk">
                      ${this._computeClasses(this.rows,this.industrySection,this.industryDivision,this.industryGroup,this.q).map(e=>c`
                      <paper-item .pk="${e[0]}" .next="${e[3]}">${e[2]}</paper-item>
                      `)}

                  </paper-listbox>
                </paper-card>
              </paper-dropdown-menu>
              <small class="info-error" style="display: none;"> Error </small>
            </div>
        </div>`}getValue(){const e=this.qs("#industry-class").selectedItem;if(e)return e.pk}valid(e){this.shadowRoot.querySelector(".info-error").style.display="none",this.shadowRoot.querySelector(".info-error").textContent="Required"}invalid(e){this.shadowRoot.querySelector(".info-error").style.display="block",e&&(this.shadowRoot.querySelector(".info-error").textContent=e)}firstUpdated(e){super.firstUpdated(e)}_computeItemsCount(e){return e.length}_shouldFilter(e){var t=this._computeItemsCount(e);return t>10}_onSectionSelected(e){this.industrySection=e.detail.item.pk}_onDivisionSelected(e){this.industryDivision=e.detail.item.pk}_onGroupSelected(e){this.industryGroup=e.detail.item.pk}_computeSections(e,t){const n=[];for(let i=0;i<this.rows.length;i++){const a=e[i];if(t){var s=t.toLowerCase(),o=a[1].toLowerCase();o.indexOf(s)!==-1&&n.push(a)}else n.push(a);if(n.length>10)break}return n}_computeDivisions(e,t,n){if(!t)return[];const s=this.qs("#industry-section").selectedItem;if(!s)return;const o=s.next,i=[];for(let p=0;p<o.length;p++){const l=o[p];if(n){var a=n.toLowerCase(),d=l[1].toLowerCase();d.indexOf(a)!==-1&&i.push(l)}else i.push(l);if(i.length>10)break}return i}_computeGroups(e,t,n,s){if(!n)return[];const o=this.qs("#industry-division").selectedItem;if(!o)return;const i=o.next,a=[];for(let l=0;l<i.length;l++){const u=i[l];if(s){var d=s.toLowerCase(),p=u[1].toLowerCase();p.indexOf(d)!==-1&&a.push(u)}else a.push(u);if(a.length>10)break}return a}_computeClasses(e,t,n,s,o){if(!s)return[];const i=this.qs("#industry-group").selectedItem;if(!i)return;const a=i.next,d=[];for(let u=0;u<a.length;u++){const m=a[u];if(o){var p=o.toLowerCase(),l=m[1].toLowerCase();l.indexOf(p)!==-1&&d.push(m)}else d.push(m);if(d.length>10)break}return d}}customElements.define(y.is,y);const k=r=>{const{element:e,rows:t,cols:n}=r,s=f.useRef(null);return f.useEffect(()=>{s.current&&e&&(s.current.e=e,s.current.rows=t,s.current.cols=n)},[e,t,n]),h.jsx("div",{children:e?h.jsx("industries-categories",{id:"industries-categories",ref:s}):h.jsx("p",{children:"Loading data..."})})},A=_(k);export{A as default};
