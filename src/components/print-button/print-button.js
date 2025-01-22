
import { css, html,unsafeCSS } from 'lit-element';
import { SectionPElementBase } from '../../base/elements/section-pelement';
import { PrintButtonStyles } from './print-button-css';
import globalStyles from '../../App.css?raw'
class PrintButton extends SectionPElementBase{

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            PrintButtonStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    initPrintJS() {
        const script = document.createElement( 'script' );
        script.src= "https://printjs-4de6.kxcdn.com/print.min.js";
        script.async = true; 
        script.defer = true;
        document.head.appendChild(script);
    }

    firstUpdated() {
        this.initPrintJS();
    }
    
    onPrintBtnClickHandler() {
        const type = this.e.details.type;
        const data = this.e.details.data;

        switch(type) {
            case "pdf":
                printJS({
                    printable:data,
                    type: 'pdf',
                    onError: function  (error) {
                    alert('Error found => ' + error.message)
                    },
                    header: this.e.name
                })
                break;
            case "image":
                if(typeof data  === "string" && data.length === 1) {
                    printJS({
                        printable: (data),
                        type: type,
                        header: this.e.name,
                    });
                }
                else {
                    printJS({
                        printable: (data),
                        type: type,
                        header: this.e.name,
                        imageStyle: 'width:50%;margin-bottom:20px;'
                    });
                }
                break;
            case "json":
                printJS({
                    printable: data,
                    properties: Object.keys(data[0]).map(dataKey=>dataKey),
                    header: this.e.name,
                    type: type,
                });
                break;
            default:
                printJS(data,type);
            break;
        }
    }

    static get is() {return 'print-button';}

    renderDefault(){
        return html`
            <div class="content">
                <button class='button is-flex is-primary is-fullwidth' title="Print" @click=${()=>this.onPrintBtnClickHandler()}>
                    <span class="icon is-small">
                        <i class="fa-solid fa-print"></i>
                    </span>
                    <span>Print</span>
                </button>
            </div>
        `
    }
}


customElements.define(PrintButton.is, PrintButton);