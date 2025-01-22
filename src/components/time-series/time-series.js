
import { css } from 'lit-element';
import { TimeSeriesBase } from '../../../../../elements/base/time-series'
import { ChartMixin } from './../../mixins/chart-mixin';
import { ThemeMixin } from './../../mixins/ThemeMixin';
import { ChartMixinStyles } from './../../../styles/chart-mixin-styles-css';

class TimeSeries extends ThemeMixin(ChartMixin(TimeSeriesBase)){
    static get styles () {
        return [
            ChartMixinStyles,
            css`
                :host {
                    display: block;
                }
            `
        ]
    }
}

customElements.define(TimeSeries.is, TimeSeries);
    
    