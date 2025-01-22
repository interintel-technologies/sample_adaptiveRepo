
import {css, unsafeCSS} from 'lit-element';
import {PieChartBase} from '../../base/elements/pie-chart';
import { ChartMixin } from  '../../base/mixins/chart-mixin';
import { ChartMixinStyles } from '../../styles/chart-mixin-styles-css';
import globalStyles from '../../App.css?raw'


class PieChart extends ChartMixin(PieChartBase)  {

	static get styles(){
        return [unsafeCSS(globalStyles),ChartMixinStyles];
	}
}

customElements.define(PieChart.is, PieChart);
