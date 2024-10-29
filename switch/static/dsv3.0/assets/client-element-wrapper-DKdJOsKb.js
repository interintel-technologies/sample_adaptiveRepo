import{i as d,h as m,r as p,g as u,k as n,a as o,j as i}from"./index-C2PWchud.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";const f=d`
.client-carousel h2{
  color: var(--grey-darker);
  display: block;
  font-size: 1rem;
  font-weight: 700;
}
.scroller {
  max-width: 100%;
  padding-top:2rem;
  padding-bottom:2rem;
}

.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-animated="true"] .scroller__inner img{
    width: 200px;
    object-fit: contain;
    height:200px;
    box-shadow: 2px 7px 14px 3px rgba(8, 20, 27, 0.30);
    border-radius:.75rem;
    background-color:var(--md-sys-color-surfaceContainerLowest);
}

.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
  --_animation-duration: 25s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}

.scroller[data-animated="true"] .scroller__inner img:hover {
  transition: 0.3s ease-out;
  transform:scale(1.25);
  cursor:pointer;
  transition: 0.2s;
}
.scroller[data-animated="true"]:hover .scroller__inner {
  animation-play-state: paused;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
`;class l extends m{static get styles(){return[p(u),f,d`
				:host {
					--slide-margin: 15px;
					--slide-offset: 0px;
					--slide-width: 200px;
					display: flex;
					flex-direction: row;
				}
			`]}static get properties(){return{slides:Array,e:{type:Object},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.slides=[],this.e=null,this.rows=[],this.cols=[]}addAnimation(){this.shadowRoot.querySelectorAll(".scroller").forEach(r=>{r.setAttribute("data-animated",!0);const t=r.querySelector(".scroller__inner");Array.from(t.children).forEach(c=>{const s=c.cloneNode(!0);s.setAttribute("aria-hidden",!0),t.appendChild(s)})})}updated(e){(e.has("rows")||e.has("cols"))&&(this.slides=this.rows,window.matchMedia("(prefers-reduced-motion: reduce)").matches||this.addAnimation())}static get is(){return"client-element"}render(){return n`
		<div class="client-carousel content my-5" style="width: 100%;">
			<h3 style="text-align: center;">${this.e&&this.e.name}</h3>
			<div class="scroller"  data-direction="right" data-speed="fast">
				<div class="scroller__inner">
					${this.slides.map((e,r)=>n`
					<img src="/media/${e[2]}" alt="client-${r}" />
					`)}
				</div>
			</div>
		</div>
        `}}customElements.define(l.is,l);const w=({element:a,rows:e,cols:r})=>{const t=o.useRef(null);return o.useEffect(()=>{t.current&&a&&(t.current.e=a,t.current.rows=e,t.current.cols=r)},[a,e,r]),i.jsx(i.Fragment,{children:a&&e&&r?i.jsx("client-element",{id:"client-element",ref:t}):i.jsx("p",{children:"Loading data..."})})},_=h(w);export{_ as default};
