
import {html,css, unsafeCSS} from 'lit-element';
import globalStyles from '../../App.css?raw'


class SpacerElement extends ThemeMixin(spacerElementBase) {
	static get styles() {
		return [unsafeCSS(globalStyles),
			SpacerElementStyles,	
		];
	}

	renderDefault() {
		return html`
			<div class="content">
				<div class="spacer"></div>
			</div>
		`;
	}
}

customElements.define(SpacerElement.is, SpacerElement);
