
import {html, css,unsafeCSS} from 'lit-element';
import {StackedBarStyles} from './stacked-bar-css';
import {StackedBarBase} from '../../base/elements/stacked-bar';
import { ChartStyleMixin } from '../../base/mixins/chart-style-mixin';
import globalStyles from '../../App.css?raw';

class StackedBar extends ChartStyleMixin(StackedBarBase){
    static get styles() {
        return [unsafeCSS(globalStyles),StackedBarStyles]
    }
}

customElements.define(StackedBar.is, StackedBar);

