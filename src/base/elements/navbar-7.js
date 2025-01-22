import { BaseElement } from "../../core/base-element";


export const Navbar7Base = class extends BaseElement {
    static get properties() {
        return {
            loader: Object,
        }
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        this.loader = this.loadData();
    }
};
