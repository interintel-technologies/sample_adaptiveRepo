import { LineChartBase } from './line-chart';

export const ChartSummaryBase = class extends LineChartBase {
    static get properties() {
        return {
            title: String
        };
    }

    getName() {
        return this.e.formName;
    }

    init(pElement, loader) {
        super.init(pElement, loader);
        const self = this;

        self.title = ChartSummaryBase.toTitleCase(pElement.name);
    }
};
