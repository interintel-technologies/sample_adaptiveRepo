import{i,h as e,k as s}from"./vendor.js";import{C as o}from"./components.js";const l=i`
.modal-content{
  width:640px;
}
.buttons .button {
  flex-grow: 1;
}
h2.title{
  text-align:center;
}
.box{
  text-align:center;
}
.box p{
  margin-bottom:1rem;
}

@media(max-width:768px){
  .modal-content{
    width:85%;
  }
}
`;class n extends e{static get properties(){return{title:String,subtitle:String,actions:Array,closable:Boolean}}constructor(){super(),this.title="",this.subtitle="",this.actions=[],this.closable=!0}static get styles(){return[super.styles,l,i`
        :host {
          display: block;
        }
      `]}closeConfirmBox(){this.remove()}onActionClickHandler(t){this.dispatchEvent(new CustomEvent(o,{bubbles:!0,composed:!0,detail:t})),this.closeConfirmBox()}render(){return this.title=JSON.parse(this.title),this.subtitle=JSON.parse(this.subtitle),this.actions=JSON.parse(this.actions),s`
      <div class="modal is-active">
        <div class="modal-background" @click=${()=>this.closable&&this.closeConfirmBox()}></div>
        <div class="modal-content">
          <div class="box">
            <h2 class="title">${this.title}</h2>
            <p>${this.subtitle}</p>
            <div class="buttons">
              ${this.actions.map(t=>s`
                  <button class="button ${t.color}" @click=${()=>this.onActionClickHandler(t.id)}>
                    ${t.label}
                  </button>
                `)} 
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click=${()=>this.closeConfirmBox()}></button>
      </div>
    `}}customElements.define("confirm-box",n);
