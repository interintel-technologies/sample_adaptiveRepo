
import { css, unsafeCSS } from 'lit-element';
import { GroupedBarChartBase } from '../../base/elements/grouped-bar-chart';
import { ChartMixin } from '../../base/mixins/chart-mixin';
import { ChartMixinStyles } from '../../styles/chart-mixin-styles-css';
import globalStyles from '../../App.css?raw';

class GroupedBarChart extends ChartMixin(GroupedBarChartBase){
    static get styles () {
        return [
            unsafeCSS(globalStyles),
            ChartMixinStyles,
            css`
                :host {
                    display: block;
                }
            `
        ]
    }
}

customElements.define(GroupedBarChart.is, GroupedBarChart);