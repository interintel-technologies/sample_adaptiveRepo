
import {LitElement, html, css} from 'lit-element';
import {LoaderElementStyles} from './loader-element-css'
import { register } from '../../../../register';


/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LoaderElement extends LitElement {
    static get styles() {
        return [
            LoaderElementStyles,
        	css`
				:host {
					display: block;
				}
        	`
        ];
    }

	static get is() {
		return 'loader-element';
	}

	render() {
		return html`
			<div class="loader-wrapper center">
				<div id="loader"></div>
			</div>
		`;
	}
}

register(LoaderElement);
