import{i as c,h as l,r as u,g as m,k as g,a as n,j as s}from"./index-C2PWchud.js";const b=c`
		.column{
			overflow:hidden;	
		}
	.about-img-cont{
		position: relative;
	}

	.about-section {
		padding-top: 180px !important;
		padding-bottom: 180px !important;
		background-color: var(--paper);
	}
	
	.section {
		padding: 3rem 1.5rem;
	}

	.about-img-cont .dec-bg{
		width: 500px;
		height: 500px;
		background-color: var(--primary);
		opacity: .4;
		border-radius: 20px;
		position: absolute;
	}
	.about-img-cont .dec-img_fg {
		opacity: 1;
		/* top: -30px; */
		left: 68px;
		width: 472px;
		height: 435px;
		background-color: var(--primary);
		/* opacity: .4; */
		border-radius: 20px;
		position: absolute;
	}
	
	
	
	.about-img-cont .dec-img_fg img{
		object-fit: cover;
		height: 100%;
		border-radius: 20px;
	}
	.about-cont{
		align-items: center;
		height: 500px;
	}
	.about-cont .cont{
		margin-top: 30px;
		color:#4e4e4e;
	}

	/*animations*/

	.animate1{
		opacity:0;
		transform:translateX(-40px);
		transition:0.7s all ease-in-out;
	}
	.animate1-appear{
		opacity: 1;
		transform:translateX(0px);
	}
	.animate2 {
		opacity: 0;
		transform: translateY(40px);
		transition: 1s all ease-in-out;
	}
	.animate2-appear{
		opacity: 1;
		transform:translateY(0px);
	}

	.animate3{
		opacity:0;
		transform:translateX(80px);
		transition:1s all ease-in-out;
	}
	.animate3-appear{
		opacity: 1;
		transform:translateX(0px);
	}
	@media screen and (max-width: 1370px){
		.about-img-cont .dec-img_fg{
			width: 400px;
			height: 400px;
			left: 70px;
		}
		.about-img-cont .dec-bg {
			width: 400px;
			height: 400px;
		} 
	}
	@media screen and (max-width: 1030px){
		/* .about-img-cont .dec-bg, .about-img-cont .dec-img_fg{
			position: relative;
		}
		.about-img-cont .dec-bg{
			display: none;
		} */
		.about-img-cont .dec-img_fg{
			width: 300px;
			height: 300px;
			left: 70px;
		}
		.about-img-cont .dec-bg {
			width: 300px;
			height: 300px;
		} 
		.about-cont{
			margin-top: 89px;
			padding: 0px 65px;
		}
	}
	@media screen and (max-width: 500px){
		.about-img-cont .dec-bg, .about-img-cont .dec-img_fg{
			position: relative;
		}
		.about-img-cont .dec-bg{
			display: none;
		}
		.about-img-cont .dec-img_fg{
			left: 0px;
			top: 0;
		}
		.section {
			padding: 1rem 0.5rem !important;
		}
		.about-cont {
			margin-top: 20px;
			padding: 0 10px;
			align-items: flex-start;
			height: fit-content;
		}
		#column2 {
			padding: 0;
		}
	}
`;class r extends l{static get styles(){return[u(m),b,c`
        :host {
          display: block;
        }

        .animate1-appear, .animate2-appear, .animate3-appear {
          /* Add your animation styles here */
        }
      `]}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e=null,this.observer=null}firstUpdated(t){super.firstUpdated(t),this.colorTitle(),this.setupObserver()}setupObserver(){const t={root:null,threshold:.2};this.observer=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&this.scrollAppear()})},t);const e=this.shadowRoot.querySelector(".about-section");e&&this.observer.observe(e)}colorTitle(){const t=this.shadowRoot.querySelector("#aboutTitle").innerText,e=this.shadowRoot.querySelector("#aboutTitle"),a=t.split(" "),o=a[a.length-1],p=t.replace(o,""),d=`<span style="color: var(--app-secondary-color)">${o}</span>`;e.innerHTML=p+d}scrollAppear(){const t=this.shadowRoot.getElementById("square1"),e=this.shadowRoot.getElementById("square2"),a=this.shadowRoot.getElementById("column2");t&&e&&a&&(t.classList.add("animate1-appear"),e.classList.add("animate2-appear"),a.classList.add("animate3-appear"))}disconnectedCallback(){this.observer&&this.observer.disconnect(),super.disconnectedCallback()}static get is(){return"about-section"}render(){return g`
      <div class="content">
        <section class="about-section section">
          <div class="container">
            <div class="columns">
              <div class="column">
                <div class="about-img-cont parallax" data-speed="30">
                  <div id="square1" class="dec-bg animate1"></div>
                  <div id="square2" class="dec-img_fg animate2">
                    <img src="${this.e&&this.e.details.image}" alt="${this.e&&this.e.name}">
                  </div>
                </div>
              </div>
              <div id="column2" class="column">
                <div class="about-cont is-flex">
                  <div>
                    <h1 id="aboutTitle" class="about-title">${this.e&&this.e.name}</h1>
                    <p class="about-subtitle">${this.e&&this.e.defaultValue}</p>
                    <p class="cont">${this.e&&this.e.details.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `}}customElements.define(r.is,r);const x=({element:i})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&i&&t.current.e!==i&&(t.current.e=i)},[i]),s.jsx(s.Fragment,{children:i?s.jsx("about-section",{id:"about-section",ref:t}):s.jsx("p",{children:"Loading data..."})})};export{x as default};
