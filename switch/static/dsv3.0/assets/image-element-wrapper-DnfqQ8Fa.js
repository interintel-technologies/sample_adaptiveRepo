import{i as l,k as o,a,j as i}from"./index-C2PWchud.js";import{B as m}from"./base-element-5lxvCIHt.js";const u=class extends m{static get is(){return"image-element"}static get properties(){return{icon:String,params:{type:Object,value:{}}}}firstUpdated(e){super.firstUpdated(e)}init(e,t){super.init(e,t)}};class c extends u{static get styles(){return[l`
        :host {
          display: block;
        }
        img{
          width:100%;
        }
      `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null}updated(t){super.updated(t),t.has("e")}renderDefault(){var r;const t="https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png",s="https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png";return o`
      <figure class="image is-128x128">
        <img 
          src="${((r=this.e)==null?void 0:r.defaultValue)||t}" 
          @error=${n=>n.target.src=s} 
          alt="Image Element"
        >
      </figure>
    `}}customElements.define("image-element",c);const d=({element:e})=>{const t=a.useRef(null);return a.useEffect(()=>{const s=t.current;s&&e&&(s.e=e)},[e]),i.jsx("div",{children:e?i.jsx("image-element",{id:"image-element",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{d as default};
