import { dataSourceMixin } from '../../core/mixins/datasource-mixin';
import { utilsMixin } from '../../core/mixins/utils-mixin';
import { BaseElement } from '../../core/base-element';

export class ProductsCarouselBase extends utilsMixin(dataSourceMixin(BaseElement)) {
    constructor() {
        super();
    }

    static get properties() {
        return {
            value: String,
        };
    }

    dscDataName() {
        return this.e.defaultValue;
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const self = this;
    }

    _computeItemsCount(rows) {
        return rows.length;
    }

    _shouldFilter(items) {
        var b = this._computeItemsCount(items);
        return (b>10);
    }

    _computeItems(rows, q) {
        const filteredItems = [];

        for (let i = 0; i < rows.length; i++) {
        const item = rows[i];
        // institution name isn't specified in values
        if (q) {
            var query = q.toLowerCase();
            var name = item[1].toLowerCase();

            if (name.indexOf(query) !== -1 ) {
            filteredItems.push(item);
            }
        } else {
            filteredItems.push(item);
        }

        // if(filtered_items.length>   10){
        //     break
        // }
        }
        return filteredItems;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        var self = this;

        self.required = this.e.required || (pElement.min && pElement.min > 0);
        self.title = ProductsCarouselBase.toTitleCase(pElement.name);
        self.icon = pElement.icon;
        self.params = self.pl.paramsCopy();
            if (pElement.kind) {
                this.selected = Number(pElement.kind);
            } else if (self.required && self.rows.length > 0) {
                self.selected = self.rows[0][0];
            }
        self.loader = this.loadData();
    }
} 