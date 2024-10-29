import{S as m,i as p,r as u,g as k,k as r,a as l,j as c}from"./index-C2PWchud.js";import{u as y}from"./utils-mixin-D5aAiqNi.js";import{w as f}from"./datasource-mixin-DMQBE4lo.js";const h=class extends y(m){static get is(){return"payment-options"}constructor(){super(),this.paymentMethods=[]}static get properties(){return{icon:String,title:String,maxlength:Number,columnSize:{type:Array},paymentMethods:Array}}getName(){return this.e.formName.split("=")[0]}validate(){return this.e.required&&!this.getValue()?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}valid(o){}invalid(o){}dscDataName(){return this.e.defaultValue}firstUpdated(o){super.firstUpdated(o);const t=this;this.loader.then(e=>{const s={};for(let i=0;i<e.data.length;i++){const n=e.data[i];n.payment_method_name in s||(s[n.payment_method_name]=[]),s[n.payment_method_name].push(n)}const a=[];for(const i of Object.entries(s))a.push({name:i[0],options:i[1]});t.paymentMethods=a})}init(o,t){super.init(o,t);var e=this;e.required=o.min&&o.min>0,e.title=h.toTitleCase(o.name),e.icon=o.icon,e.params=e.pl.paramsCopy(),e.loader=this.loadData()}},b=p`
/* The container */
.checkcontent {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.checkcontent input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 100%;
     border: 2px solid #a9abac;
}

/* On mouse-over, add a grey background color */
.checkcontent:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkcontent input:checked ~ .checkmark {
    background-color: #4a4a4a;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checkcontent input:checked ~ .checkmark:after {
    display: block;
}
/* Style the checkmark/indicator */
.checkcontent .checkmark:after {
    left: 8px;
    top: 3px;
    width: 2px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

 option{
 font-size: 18px;
 }
 .select select {
    background-color: white;
    border-color: #dbdbdb;
    color: #363636;
    cursor: pointer;
    padding-left: 2.5em;
    height: 2.5em;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;
}

`;class d extends h{static get styles(){return[u(k),b,p`
            :host {
            display: block;
            }
        `]}getValue(){const t=this.shadowRoot.querySelector('input[name="method"]:checked').value;return this.shadowRoot.querySelector("#"+t).value}constructor(){super(),this.paymentMethods=[],this.rows=[],this.cols=[],this.e=null}static get properties(){return{paymentMethods:Array,rows:{type:Array},e:{type:Object},cols:{type:Array}}}updated(t){(t.has("e")||t.has("cols"))&&(this.paymentMethods=[...this.rows.map(e=>Object.fromEntries(e.map((s,a)=>[this.cols[a].label,s])))],console.log(this.paymentMethods))}render(){return r`
      <div class="content">
        <div class="column">
          <div class="field">
            <div class="control">
              ${this.paymentMethods.map((t,e)=>r`
                <div class="is-inline">
                  <span class="icon">
                    <i><adaptive-ui-icon icon="mipayicon:mipayicon"></adaptive-ui-icon></i>
                  </span>
                  <label class="checkcontent">${t.name}
                    <input type="radio" name="method" value="method-${e}">
                    <span class="checkmark"></span>
                      <div class="select is-fullwidth">
                        <select id="method-${e}">
                          ${t.options.map(s=>r`
                          <option value="${s.id}">${s.record}</option>
                          </div>
                          `)}
                        </select>
                      </div>
                    </span>
                  </label>
                </div>
              `)}
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define(d.is,d);const v=o=>{const{element:t,rows:e,cols:s}=o,a=l.useRef(null);return l.useEffect(()=>{a.current&&t&&(a.current.e=t,a.current.rows=e,a.current.cols=s)},[t,e,o,s]),c.jsx("div",{children:t?c.jsx("payment-options",{id:"payment-options",ref:a}):c.jsx("p",{children:"Loading data..."})})},S=f(v);export{S as default};
