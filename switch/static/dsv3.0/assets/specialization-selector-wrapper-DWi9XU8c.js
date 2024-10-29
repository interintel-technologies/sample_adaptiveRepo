import{i as l,h as d,r as p,g as u,k as s,a as n,j as o}from"./index-C2PWchud.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const b=l`
    .cont {
        border: 0.7px solid black;
        border-radius: 7px;
        padding: 32px;
        margin: 16px;
    }
    .card {
        padding: 16px;
        background: var(--paper);
        border:0.4px solid black;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        cursor: pointer; 
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .columns {
        max-height: 80vh;
        overflow-y: auto;
    }
    .c-title,
    .c-desc {
        text-align: center;
        pointer-events: none;
        margin-bottom:0 !important;
    }
    .fas{
        pointer-events: none;
        margin-bottom:20px !important;
    }
    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        border-color:var(--primary);
    }
    .selected {
        border: 1.2px solid var(--link) !important;
    }
    .card:hover .overlay {
        transform: scale(4) translateZ(0);
    }
    .unavailable{
        cursor: pointer; 
        color: var(--primary) !important;
        text-align: center;
    }
    .unavailable:hover {
        color: var(--link) !important;
    }
    .button{
        background-color: var(--primary);
        padding: 0 35px;
        border-color: none;
        color: white;
    }
    .button:hover{
        background-color: var(--link);
    }
    #warning-text{
        display:none;
    }
    .title-danger{
        color: #ff2b56 !important;
    }
    .title-success{
        color: #23d160 !important;
    }
    .card-success{
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
`;class c extends d{static get styles(){return[p(u),b,l`
				:host {
					display: block;
				}
			`]}static get properties(){return{specializations:Array,cols:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.specializations=[]}updated(t){super.updated(t),(t.has("cols")||t.has("rows")||t.has("e"))&&(this.specializations=this.rows)}onNextBtnClickHandler(){this.value=[],this.shadowRoot.querySelectorAll(".check").forEach(t=>{t.checked&&(this.value=[...this.value,t.value])}),this.dispatchEvent(new CustomEvent("submit-form",{detail:{action:"ACTION_SUBMIT"}}))}valid(t){const e=this.shadowRoot.querySelector("#warning-text"),i=this.shadowRoot.querySelectorAll(".check");i.forEach(r=>{r.checked&&r.classList.add("input-success")}),e.style.display="none",setTimeout(()=>{i.forEach(r=>{r.checked&&r.classList.remove("input-success")})},3e3)}getIndexByColumnLabel(t){return this.cols.findIndex(e=>e.label===t)}invalid(t){const e=this.shadowRoot.querySelector("#warning-text");e.style.display="block"}static get is(){return"specialization-selector"}render(){return s`
			<div class="content">
				<div class="column content">
					<div class="columns is-multiline">
						${this.specializations.map((t,e)=>s`
								<div class="column is-4">
									<label for="specializationInput${e}" class="card is-flex">
										<input id="specializationInput${e}" class="check" type="checkbox" value=${t[0]}>	
										<h5 class="c-title">${t[0]}</h5>
									</label>
								</div>
							`)}
					</div>
					<div class="level">
						<h4 class="unavailable">Back</h4>
						<button class="button" @click=${()=>this.onNextBtnClickHandler()}>Next</button>
					</div>
					<p id="warning-text">${this.e.name} required</p>
				</div>
			</div>
		`}}customElements.define(c.is,c);const x=({element:a,data:t,rows:e,cols:i})=>{const r=n.useRef(null);return n.useEffect(()=>{r.current&&a&&(r.current.e=a,r.current.data=t,r.current.rows=e,r.current.cols=i)},[a,t,e,i]),o.jsx("div",{children:a&&t&&e?o.jsx("specialization-selector",{id:"specialization-selector",ref:r}):o.jsx("p",{children:"Loading data..."})})},f=h(x);export{f as default};
