
import { html, css, LitElement,unsafeCSS } from 'lit-element';
import {ClientElementStyles} from './client-element-css';
import globalStyles from '../../App.css?raw';

class ClientElement extends LitElement{

    static get styles() {
        return [
			unsafeCSS(globalStyles),
            ClientElementStyles,
			css`
				:host {
					--slide-margin: 15px;
					--slide-offset: 0px;
					--slide-width: 200px;
					display: flex;
					flex-direction: row;
				}
			`
        ];
    }

	static get properties(){
		return{
			slides: Array,        
			e: { type: Object }, // Add `e` as a property
            rows: { type: Array },
            cols: { type: Array },
		};
	}

	constructor(){
		super();
		this.slides=[];       
	  this.e = null; // Initialize `e` to null
        this.rows = [];
        this.cols = [];
	}

	addAnimation() {
		const scrollers = this.shadowRoot.querySelectorAll(".scroller");
		scrollers.forEach((scroller) => {
			scroller.setAttribute("data-animated", true);
			const scrollerInner = scroller.querySelector(".scroller__inner");
			const scrollerContent = Array.from(scrollerInner.children);
			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute("aria-hidden", true);
				scrollerInner.appendChild(duplicatedItem);
			});
		});
	}



	updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            this.slides=this.rows;
			if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				this.addAnimation();
			}

        }
    }

	static get is(){
        return 'client-element';
    }

    render(){
        return html`
		<div class="client-carousel content my-5" style="width: 100%;">
			<h3 style="text-align: center;">${this.e && this.e.name}</h3>
			<div class="scroller"  data-direction="right" data-speed="fast">
				<div class="scroller__inner">
					${this.slides.map((slide, index) => html`
					<img src="/media/${slide[2]}" alt="client-${index}" />
					`)}
				</div>
			</div>
		</div>
        `;
    }
}

customElements.define(ClientElement.is, ClientElement);
