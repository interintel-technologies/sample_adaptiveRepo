import {html, css} from 'lit-element';
import {
  SlideshowElementBase} from '../../../../../elements/base/slideshow-element';

  import {SlideShowStyles} from './slideshow-element-css';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SlideshowElement extends SlideshowElementBase {

	static get styles() {
        return [
			SlideShowStyles,
          css`
            :host {
              display: block;
            }
          `
        ];
      }
  renderDefault() {
    return html`

<div class="slider-wrapper">

	${this.rows.map((slide, index) => html` 
	<input class ="checkbox" type="radio" id="i${index}" name="images" ?checked=${index===0} />

	`)}  

	    ${this.rows.map((slide, index) => html`   
	<div class="slide_img" id="slide_${index}">			
			
			<img src="/media/${slide[3]}">
			
				<label class="prev" for="i${index-1}"><span>&#x2039;</span></label>
				<label class="next" for="i${index+1}"><span>&#x203a;</span></label>	
		
	</div>
    `)}  

	<div id="nav_slide">
	      ${this.rows.map((slide, index) => html` 
		<label for="i${index}" class="dots" id="dot${index}"></label>
		 `)}  
	</div>
		
</div>`;
  }
  constructor() {
    super();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // todo should wait for after data loaded
  }
  onLoadData(dsc) {
    this.showSlidesAuto();
  }

  showSlidesAuto() {
    var i = 0;
    var self = this;
    function Move() {
		if (i === self.rows.length-1) { // means we have reached the end
			i = 0;
			self.shadowRoot.querySelector('#i'+i).checked = true;
			return;
		  }
		  i = (i%self.rows.length)+1;
		  self.shadowRoot.querySelector('#i'+i).checked = true;
    }
    setInterval(Move, 3000); // change img in 3 sec
  }
}
customElements.define(SlideshowElement.is, SlideshowElement);
