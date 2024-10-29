import{i as n,S as u,r as d,g as h,k as a,a as l,j as r}from"./index-C2PWchud.js";import{u as p}from"./utils-mixin-D5aAiqNi.js";import"./select-element-GuC7mP6J.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";import"./InputMixin-CGm-oGk-.js";const v=n`
    .content {
        position: relative;
    }
    label{
        font-size: 12px !important;
        font-weight: 700 !important;
        width: 100% !important;
        color: rgb(1, 50, 67) !important;
        letter-spacing: 0.5px !important;
    }
    .is-flex {
        align-items: flex-end;
    }
    .icon {
        cursor: pointer;
        transform: translateY(-50%);
        margin-left: 1em;
    }
    .select, select {
        width: 100% !important;
    }
    h1 {
        margin: 0 !important;
        color: white !important;
    }
    option{
        background:var(--paper);
      

    }
`,c=class extends p(u){static get properties(){return{value:Array,params:{type:Object,value:{}},type:String,columnSize:String,ColumnOffset:{type:Array},loader:Object}}constructor(){super(),this.value=[void 0]}firstUpdated(i){super.firstUpdated(i)}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.e.required&&!this.getValue()||this.getValue()===void 0?new this.Validation(!1,"invalid"):new this.Validation(!0,"valid")}dscDataName(){return this.e.defaultValue}init(i,e){super.init(i,e);const s=this;s.title=c.toTitleCase(i.name),this.required=i.min&&i.min>0,this.name=i.name,this.loader=this.loadData()}};class o extends c{static get styles(){return[d(h),v,n`
                :host {
                    display: block;
                }
            `]}static get properties(){return{roles:{type:Array},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.roles=[],this.value=[],this.rows=[],this.cols=[]}updated(e){(e.has("rows")||e.has("cols"))&&this.processRoles()}processRoles(){console.log("roles is ",this.rows),this.rows.length&&this.cols.length&&(this.roles=this.rows.map(e=>Object.fromEntries(e.map((s,t)=>[this.cols[t].label,s]))),this.roles.length>0&&(this.value[0]=this.roles[0].label))}onRolesSelectChangeHandler(e,s){const t=[...this.value];t[s]=e,this.value=t}onFabClickHandler(){this.roles.length>0&&(this.value=[...this.value,this.roles[0].label],this.requestUpdate())}onRemoveInputClickHandler(e){e>-1&&e<this.value.length&&(this.value=this.value.filter((s,t)=>t!==e),this.requestUpdate())}valid(){this.shadowRoot.querySelectorAll(".select").forEach(e=>{e.classList.remove("is-danger"),e.classList.add("is-success"),setTimeout(()=>{e.classList.remove("is-success")},1500)})}static get is(){return"add-roles"}render(){return a`
            <div class="content">
                ${this.value.map((e,s)=>a`
                    <div class="is-flex">
                        <select-element .name=${this.e.name} .options=${this.roles.map(t=>({value:t.id,label:t.label}))} @on-change=${t=>this.onRolesSelectChangeHandler(t.target.value,s)}></select-element>
                        ${s===0?a`
                            <span class="add-input-icon icon has-text-primary" title="Add Role" @click=${()=>this.onFabClickHandler()}>
                            <adaptive-ui-icon .icon=${"icons:add"}></adaptive-ui-icon>

                            </span>
                        `:a`
                            <span class="remove-input-icon icon has-text-primary" title="Remove Role" @click=${()=>this.onRemoveInputClickHandler(s)}>
                            <adaptive-ui-icon .icon=${"icons:remove"}></adaptive-ui-icon>

                           
                            </span>
                        `}
                    </div>
                `)}
            </div>
        `}}customElements.define(o.is,o);const f=({element:i,rows:e,cols:s})=>{const t=l.useRef(null);return l.useEffect(()=>{t.current&&i&&(t.current.e!==i&&(t.current.e=i),t.current.e&&e&&(t.current.rows=e),t.current.e&&s&&(t.current.cols=s))},[i,e,s]),r.jsx(r.Fragment,{children:i&&e.length>0&&s.length>0?r.jsx("add-roles",{id:"add-roles",ref:t}):r.jsx("p",{children:"Loading data..."})})},x=m(f);export{x as default};
