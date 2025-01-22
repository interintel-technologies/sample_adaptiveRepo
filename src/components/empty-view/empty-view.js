
import {html, css,LitElement, unsafeCSS} from 'lit-element';
import {EmptyViewStyles} from './empty-view-css';
import globalStyles from '../../App.css?raw';

class EmptyView  extends LitElement {

	static get styles(){
		return [
			unsafeCSS(globalStyles),
			EmptyViewStyles,
			css`
				:host {
					display: block;
				}
			`
		];
	}

	static get properties() {
		return {
			message: String,
			gateway: String,
		};
	}

	getImage(){
		if(this.gateway === 'nenasasa'){
			return html`<img src="src/themes/dsv1.0/img/isometic/empty_images/nenasasa_empty.png" /> `;
		}else if(this.gateway == 'mipay'){
			return html`<img src="src/themes/dsv1.0/img/isometic/empty_images/mipay_empty.png" />`;
		}else{
			return html`<img src="src/themes/dsv1.0/img/isometic/empty_images/default_empty.png" />`;
		}
	}

	getMessage(){
		if(this.message == undefined ||this.message == 'undefined'){
			return this.message  = 'There is no data to preview at this time';
		}
		return this.message;
	}

	static get is() {
		return 'empty-view';
	}

	render() {
		return html`
			<div class="column content">
				<h6>${this.getMessage()}</h6>
			</div>
		`;
	}
}

window.customElements.define(EmptyView.is, EmptyView);
