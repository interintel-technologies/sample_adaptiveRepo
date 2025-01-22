
import {html,css, unsafeCSS} from 'lit-element';
import { TemplateSelectorStyle } from './template-selector-css';
import { TemplateSelectorBase } from '../../base/elements/template-selector';
import globalStyles from '../../App.css?raw'

export class TemplateSelector extends TemplateSelectorBase {
    static get styles() {
        return [
			unsafeCSS(globalStyles),
            TemplateSelectorStyle,
            css`
				:host {
					display: block;
				}
			`
        ];
    }

    static get properties () {
        return {
			selectedTemplate:String,
			value:String,
			isTemplatesOpen:Boolean,
			columns: { type: Array },
        rows: { type: Array },
        e: { type: Object },      
        };
    }

	constructor() {
		super();
		this.isTemplatesOpen=false;
		this.selectedTemplate=null;
		this.value = null;
	}



	updated(changedProperties) {
		if (
			changedProperties.has('columns') ||
			changedProperties.has('rows') ||
			changedProperties.has('e')
		) {
			document.addEventListener("click",e=>this.outsideClickHandler(e));
		}
	}

	templatesVisibility() {
		const templates=this.shadowRoot.querySelector(".templates");
		const arrow=this.shadowRoot.querySelector(".arrow");

		if(this.isTemplatesOpen) {
			arrow.classList.remove("arrow-up");
			arrow.classList.add("arrow-down");

			templates.classList.remove("show-templates");
			templates.classList.add("hide-templates");
		}
		else {
			arrow.classList.add("arrow-up");
			arrow.classList.remove("arrow-down");
			templates.classList.remove("hide-templates");
			templates.classList.add("show-templates");
		}

		this.isTemplatesOpen=!this.isTemplatesOpen;
	}

	outsideClickHandler(e) {
		const templates=this.shadowRoot.querySelector(".templates");
		const foundObject=e.composedPath().find(object=>object.id === "template-selector-container");
		const foundClass=Object.values(templates.classList).find(c=>c === "show-templates");

		if(!foundObject && foundClass){
		this.templatesVisibility();
		}
	}

	getSelectedTemplate(template) {
		const o = this.rows.find(element=>element[0] === template[0]);

		if (o) {
			this.selectedTemplate = {
				'label': o[1],
				'value': o[0],
			};
			this.value=this.selectedTemplate.value;
			this.moveLabel();
			this.templatesVisibility();
			this.showSelectedTemplate();
		}
	}

	showSelectedTemplate() {
		const selectedLabelTemplate=this.shadowRoot.querySelector(".selected-template-label");
		selectedLabelTemplate.style.display="flex";
	}

	checkSelectedTemplate(template) {
		if(this.selectedTemplate){
			return template[0] === this.selectedTemplate.value ? true : false ;
		}
	}

	templateClickHandler(template) {
		this.getSelectedTemplate(template);  
	}

	moveLabel() {
		const titleLabel=this.shadowRoot.querySelector(".title-label");
		titleLabel.style.position = "absolute"; 
		titleLabel.style.top = -7 + "px";
		titleLabel.style.left = 18 + "px";
		titleLabel.style.fontSize = 12 + "px";
		titleLabel.style.fontWeight= 700;
	}

	valid(validation) {
		const label = this.shadowRoot.querySelector('.title-label');
		const cont = this.shadowRoot.querySelector('.content-container');
		const selectedLabelTemplate=this.shadowRoot.querySelector(".selected-template-label");
		const warningText =this.shadowRoot.querySelector("#warning-text");

		label.classList.remove('lbl-danger');
		label.classList.add('lbl-success');

		selectedLabelTemplate.classList.add('lbl-success');
		selectedLabelTemplate.classList.remove('lbl-danger');

		cont.classList.remove('cont-danger');
		cont.classList.add('cont-success');

		warningText.style.display = 'none';

		setTimeout(()=>{
		label.classList.remove('lbl-success');
		selectedLabelTemplate.classList.remove('lbl-success');
		cont.classList.remove('cont-success');  
		}, 3000);
	}

	invalid(validation) {
		const label = this.shadowRoot.querySelector('.title-label');
		const cont = this.shadowRoot.querySelector('.content-container');
		const selectedLabelTemplate=this.shadowRoot.querySelector(".selected-template-label");
		const warningText =this.shadowRoot.querySelector("#warning-text");

		label.classList.remove('lbl-success');
		label.classList.add('lbl-danger');

		selectedLabelTemplate.classList.remove('lbl-success');
		selectedLabelTemplate.classList.add('lbl-danger');

		cont.classList.remove('cont-success');
		cont.classList.add('cont-danger');

		warningText.style.display = 'block';
	}

	getValue() {
		return this.value;
	}

	render() {
		return html`
			<div id="template-selector-container" class="column">           
				<div class="content-container" @click=${()=>!this.templatesVisibility()}>
					<h4 class="title-label">${this.e.name}</h4>
					<h4 class="selected-template-label">${this.selectedTemplate?this.selectedTemplate.label : ""}</h4>
					<div class="arrow"></div>
				</div>
				<ul class="templates">
					${
						this.rows.map(template=>html`
							<li class="template" @click=${()=>this.templateClickHandler(template)}>
								<h3 class="template-name">${template[1]}</h3>
								<img class="template-image ${this.checkSelectedTemplate(template) ? "selected":""}" src="${template[2]}"/>
							</li>
						`)
					}
				</ul>
				<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
			</div>
		`;
	}
}
customElements.define(TemplateSelector.is, TemplateSelector);