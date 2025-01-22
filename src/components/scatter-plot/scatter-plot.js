
import {html, css} from 'lit-element';

import {ScatterPlotStyles} from './scatter-plot-css';
import {ScatterPlotBase} from '../../../../../elements/base/scatter-plot'

import * as d3 from 'd3';

class ScatterPlot extends ScatterPlotBase{
    static get styles(){
        return [
            ScatterPlotStyles,
            css ` 
            :host{
                disply: block;
            }
            `
        ]
    }

    renderDefault(){      

        return html `
        <div class="chart"></div>
        `
    }
}

customElements.define(ScatterPlot.is, ScatterPlot);

