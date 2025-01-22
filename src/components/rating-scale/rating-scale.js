import { RatingScaleStyles } from './rating-scale-css';
import { RatingScaleBase } from '../../base/elements/rating-scale';
import { css, html,unsafeCSS } from 'lit-element';
import globalStyles from '../../App.css?raw'
class RatingScale extends RatingScaleBase {

    static get styles() {
        return [unsafeCSS(globalStyles),RatingScaleStyles];
    }

    createScale() {
        let circles = [];

        const onCircleClickHandler =  (circle,index) => {
            this.qsa(".circle").forEach(circle=>circle.classList.remove("selected"));
            console.log(index);
            if(this.value !== index) {
                circle.classList.add("selected");
                this.value = index;
            }
            else {
                this.value = undefined;
            }
        };

        let i = 1;
        do {
            circles = [...circles,i];
            i = i+1;
        }
        while (i !== 13);
        
        return circles.map((circle,index)=>html`
            <div class="circle is-flex" @click=${e=>onCircleClickHandler(e.target,index)} >${circle}</div>
        `);
    }

    valid(validation) {
        const feedback = this.shadowRoot.querySelector(".feedback");
        const selectedCircle = this.shadowRoot.querySelector(".selected");
        const warningText =this.shadowRoot.querySelector("#warning-text");

        feedback.classList.remove('fail');

        selectedCircle.classList.add('success');
        feedback.classList.add('success');

        setTimeout(()=>{
            selectedCircle.classList.remove('success');
            feedback.classList.remove('success');
        }, 3000);
        warningText.style.display = 'none';
    }

    invalid(validation) {
        const feedback = this.shadowRoot.querySelector(".feedback");
        const warningText =this.shadowRoot.querySelector("#warning-text");

        feedback.classList.add("fail")
        warningText.style.display = 'block';
    }

    static get is() {
        return "rating-scale";
    }

    render() {
        return html`
           <div class="content">
                <div class="column content">
                    <h5 class="feedback">${this.e.defaultValue}</h5>
                    <div class="scale is-flex">
                        ${this.createScale()}
                    </div>
                    <p id="warning-text">${this.e.name} required</p>
                </div>
           </div>
        `;
    }
}

customElements.define(RatingScale.is,RatingScale);