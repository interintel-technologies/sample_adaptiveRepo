import { ECommerceMixin } from './../../core/mixins/ecommerce-mixin';
import { BaseElement } from '../../core/base-element';
import { utilsMixin } from '../mixins/utils-mixin';

export const ShoppingCartBtnBase = class extends ECommerceMixin(utilsMixin(BaseElement)) {
    static get properties() {
		return {
			required: Boolean,
			title: String,
			icon: String,
			params: Object,
			sectionSize: String,
			loader: Function,
			cart: Array
		};
	}

	getName() {
		const el = this.e.formName.split('=');
		return el[0];
	}

	dscDataName() {
		return this.e.defaultValue;
	}

	init(pElement, loader) {
		super.init(pElement, loader);

		this.required = this.e.required || (pElement.min && pElement.min > 0);
		this.title = ShoppingCartBtnBase.toTitleCase(pElement.name);
		this.icon = pElement.icon;
		this.params = this.pl.paramsCopy();
		this.sectionSize = pElement.sectionSize;
		this.loader = this.loadData();
	}
};
