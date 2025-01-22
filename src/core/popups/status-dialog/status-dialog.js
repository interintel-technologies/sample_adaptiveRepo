import {css, html, LitElement} from 'lit-element';

import { StatusDialogStyles } from './status-dialog-css';

class StatusDialog extends LitElement {
    static get styles() {
        return [
            super.styles,
            StatusDialogStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            status: Object
        };
    }

    firstUpdated() {
        this.status = {type: "success", title:"success"}
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if(typeof this.status === "string"){
            this.status = JSON.parse(this.status)
        }
    }

    closeModal() {   
        this.remove();
    }

    renderIconAndButton(){
        if(typeof this.status === "string"){
            this.status = JSON.parse(this.status)
        }
        let color,icon,title;

        if(this.status!=undefined){
            switch(this.status.type) {
                case 'success':
                    color='success';
                    icon='fa-check-circle';
                    title='Done';
                break;
                case 'danger':
                    color='danger';
                    icon='fa-exclamation-triangle';
                    title='Done';
                break;
                case 'warning':
                    color='warning';
                    icon='fa-exclamation-triangle';
                    title='Done';
                break;
                case 'in-progress':
                    color='info';
                    icon='';
                    title='Done';
                break;
        
                default:
                    throw new Error('This type does not exist');
            }
            return html`
                ${ 
                    icon ? html`
                        <span class="icon py-2 mt-4 ">
                            <i class="fas fa-6x ${icon} has-text-${color}" ></i>
                        </span>
                    `: html`
                    <div class="progressIcon pb-2">
                        <img src="https://i.postimg.cc/dVz4ZBrH/Spinner-1s-200px-1.png"/>
                    </div>
                `}
                <h5 class="title has-text-${color}">${this.status.title}</h5>
                <button class="button statusBtn is-${color} ${this.status?this.status.type=='in-progress'?"is-hidden":"":"hidden"}"  @click=${()=>this.closeModal()}>${title}</button>
            `;
        }
    }

    static get is(){
        return "status-dialog";
    }
    
    render() {
        return html`
            <div class="modal modal-sm ${this.status?"is-active":"is-hidden"}" id="statusModal">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <section class="modal-card-body">
                        <div class="head">
                            <span class="icon ${this.status?this.status.type=='in-progress'?"is-hidden":"":"is-hidden"}" @click=${()=>this.closeModal()}><i class="fa fa-x"></i></span>
                        </div>                 
                        <div class="hdr my-3 has-text-centered">
                            ${this.renderIconAndButton()}
                        </div>   
                    </section>   
                </div>  
            </div>
        `;
    }
}

customElements.define(StatusDialog.is, StatusDialog);