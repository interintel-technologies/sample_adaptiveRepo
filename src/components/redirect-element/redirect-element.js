
import {html, css, unsafeCSS} from 'lit-element';
import { BaseElement } from '../../core/base-element';
import {RedirectElementStyles} from './redirect-element-css'
import globalStyles from '../../App.css?raw'
class RedirectElement extends BaseElement{
    static get styles(){
        return [unsafeCSS(globalStyles),
            RedirectElementStyles,
            css`
            :host {
                display: block;
            }
            `
        ]
    }

    static get is(){
        return 'redirect-element';
    }

    getText(text){

        if(text != null || text != undefined){

            let [title,link] = text.split("|");

            return title;

        }else{

            return "";
        }  
    }


    getLink(text){

        if(text != null || text != undefined){

            let [title,link] = text.split("|");

            return link;

        }else{

            return ""
        }
    }

    getImage(){

        let image = this.e.details.logo;

        if(image != undefined){

            return image;
        }else{
            //interintel logo

            image = "https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png";

            return image;
        }
    }
    
    render(){
        return html`
        <div class="content">
            <div class="text-container">
                <div class="card">

                        <div class="image-block">
                            <img src="${this.getImage()}" alt="gateway-logo" />
                        </div>
                        <div class="info-block space-bottom content">

                            <p >${this.e.name}</p>
                        
                        </div>
                        <div class="title-block space-bottom">
                            <h2 class="title"><a class="login" href="${this.getLink(this.e.defaultValue)}">${this.getText(this.e.defaultValue)}</a></h2>
                        </div>
                        <div class="or-block">
                            <hr class="solid">
                                <p>or</p>
                            <hr class="solid">
                        </div>

                        <div class="title-block2">
                            <h2 class="title"><a class="register" href="${this.getLink(this.e.kind)}">${this.getText(this.e.kind)}</a></h2>
                        </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define(RedirectElement.is, RedirectElement);
    
    