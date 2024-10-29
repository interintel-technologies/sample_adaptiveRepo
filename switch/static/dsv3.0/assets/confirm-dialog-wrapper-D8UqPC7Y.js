import{i as r,h as l,r as d,g as p,k as o,a as s,j as i}from"./index-C2PWchud.js";const m=r`
.button{
  font-family:var(--family-sans-serif);
  text-transform:capitalize;
}
.control{
  width:100% !important;
}
.modal-card-head {
  border-bottom: 1px solid transparent!important;
}
.modal-card-head, .modal-card-foot{
  background-color: #fff!important;
  border-top: 0 solid transparent!important;
}
.icon-danger, .icon-danger i{
  color: hsl(348, 100%, 61%)!important;
}
.icon-success,  .icon-success i {
  color: #23d160!important;
}
.modal-card-head p{
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
}
.modal-card-body p{
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
}
.modal-card-foot{
  display: flex;
  justify-content: flex-end!important;
}
.modal-card-head .icon{
  margin-right: 15px!important;
}


`;class e extends l{static get styles(){return[d(p),m,r`
        :host {
          display: block;
        }
      `]}static get properties(){return{message:String,title:String,header:String,confirmButtonText:String,cancelButtonText:String,actions:Array,params:{type:Object,value:{}},buttons:Array,isOpen:Boolean}}constructor({title:t="",message:n="",buttons:c=[]}={}){super(),this.confirmButtonText="Confirm",this.cancelButtonText="Cancel",this.actions=[],this.message=n,this.title=t,this.buttons=c,this.openModal=this.openModal.bind(this)}openModal(){this.isOpen=!0,document.body.appendChild(this)}static get is(){return"confirm-dialog"}actionClickHandler(t){t.toLowerCase()==="form"&&this.pl.submitForm()}renderButton(t){return o`
      <button class="button is-${t.color}" @click="${t.callback}">
        ${t.label}
      </button>
    `}renderButtons(){return o`
      <div class="buttons">
        ${this.buttons.map(t=>this.renderButton(t))}
      </div>
    `}render(){return o`
      <div class="modal ${this.isOpen?"is-active":""}">
        <div class="modal-background" @click="${this.closeModal}"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            ${this.title=="warning"?o`
            <span class="icon icon-danger">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </span>
            `:o`
            <span class="icon icon-success">
              <i class="fa-solid fa-circle-check"></i>
            </span>
            `}
            <p class="modal-card-title">${this.title}</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <p>${this.message}</p>
          </section>
          <footer class="modal-card-foot">
            ${this.renderButtons()}
          </footer>
        </div>
      </div>
    `}}customElements.define(e.is,e);const h=({element:a})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&a&&(t.current.e=a)},[a]),i.jsx(i.Fragment,{children:a?i.jsx("confirm-dialog",{id:"confirm-dialog",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{h as default};
