import{i as s,r as p,g as d,k as e,a as o,j as i}from"./index-C2PWchud.js";import{B as c}from"./base-element-5lxvCIHt.js";import{w as l}from"./datasource-mixin-DMQBE4lo.js";const m=s`

.row-items {
	display:flex;
	flex-direction:column;
	align-items: center  !important;
	justify-content:center !important;
    width: 100%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: auto;
    margin-left: auto;

}

.supportmsg{
	
}

.hotline-area {
	color: #fff !important;
	background-image: url('../img/background/bg1.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	position: relative;
	z-index: 1;
	padding-top: 100px;
	padding-bottom:100px;
	padding-left:2.5rem;
	padding-right:2.5rem;
}
.hotline-area:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--primary);
	opacity: 0.7;
	z-index: -1;
	background: linear-gradient(117.79deg, #FFFFFF 26.88%, var(--primary) 87.56%);

}
.hotline-area span {
	font-size: 18px !important;
	font-weight:400;
	color:var(--primary);
}
.hotline-area h2 {
	color: #fff !important;
	font-size: 24px;
	margin-bottom: 28px;
	font-weight: 400;
}

.pt-3, .py-3 {
    padding-top: 1rem !important;
}
#linkBtn{
	border-radius:40px;
	border:4px solid rgba(244, 157, 55, 1);
	color:white;
	background-color:var(--primary);
	font-size:1.375rem;
	width:20rem;
	height:45px;
}
@media (max-width: 767px) {
	.hotline-area h2 {
		margin-bottom: 26px;
	}
	#linkBtn{
		width:15rem;
	}
	.hotline-area span {
		font-size: 25px;
		margin-bottom: 0;
	}
}

`;class a extends c{static get styles(){return[p(d),m]}static get is(){return"section-front"}render(){return e`

        <section class="hotline-area text-center area-padding">
        <div class="container">
            <div class="row" style="justify-content: center; display: flex;">
                <div class="col-lg-12 row-items">
                    <span> ${this.e&&this.e.details.description}</span>
                    <p class="pt-3"> ${this.e&&this.e.details.supportmsg}</p>
                    ${this.e&&this.e.details.link?e`
                      <a id="linkBtn" href="${this.e&&this.e.details.link.path}" class="button mt-4 is-primary">${this.e.details.link.label}</a>
                    `:e`
                    `}
                    
                </div>
            </div>
        </div>
    </section>

    `}}customElements.define(a.is,a);const g=({element:t})=>{const r=o.useRef(null);return o.useEffect(()=>{const n=r.current;n&&t&&(n.e=t)},[t]),i.jsx("div",{children:t?i.jsx("section-front",{id:"section-front",ref:r}):i.jsx("p",{children:"Loading data..."})})},x=l(g);export{x as default};
