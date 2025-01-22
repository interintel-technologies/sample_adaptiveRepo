import { html, css, unsafeCSS } from 'lit-element';
import globalStyles from '../../App.css?raw'
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const ACTION_SERVICE_CALL = '1';
export const ACTION_LINK_WINDOW = '2';
export const ACTION_SUBMIT = '3';
export const ACTION_SKIP = '4';
export const ACTION_WINDOW_CLOSE = '5';
export const ACTION_SUBMIT_2 = '6';
const datacolor = getComputedStyle(document.documentElement).getPropertyValue('--white');

export const  buttonMixin = (BaseClass) => class extends BaseClass {
	static get styles() {
        return [unsafeCSS(globalStyles)]
    }



    static get properties() {
        return {
			'icon': Boolean,
			'rounded': Boolean,
			'large': Boolean,
			'size': String,
			'color': String, // 32,36,46
			'sectionSize':String,
			'submitting': Boolean
        };
    }

    constructor() {
        super();
        this.icon = false;
        this.rounded = false;
        this.large = false;
        this.size = 32;
		this.submitting = false;
        // this.addEventListener('click', this._onAction.bind(this));
    }

    getMainFont(url){
        if(url != undefined){
			let [half, link] = url.split('&');
			let [part,font] = half.split('=');
		
			return font;
		}
		return '';
    }
    
    getBackupFont(url){
        if(url != undefined){
			let [half, link] = url.split('&');
			let [part,font] = half.split('=');
		
			return font;
        }
		return '';
    }
    
    checkSectionSize(){
        if(window.template == 'payments'){
			if(this.sectionSize === '24|24|24'){
				return '-268px';
			}else if(this.sectionSize === '12|12|12'){
				return '-146px';
			}else if(this.sectionSize === '12|12|24'){
				return '-146px';
			}else if(this.sectionSize === '12|24|24'){
				return '-146px';
			}
			}else{
			if(this.sectionSize === '24|24|24'){
				return '-754px';
			}else if(this.sectionSize === '12|12|12'){
				return '-418px';
			}else if(this.sectionSize === '12|12|24'){
				return '-418px';
			}else if(this.sectionSize === '12|24|24'){
				return '-418px';;
			}else if(this.sectionSize === '18|18|18'){
				return '-581px';
			}else if(this.sectionSize === '6|6|6'){
				return '-248px';;
			}else if(this.sectionSize === '4|4|4'){
				return '-248px';
			}else {
				return '-754px';
			}
        }
    }
    
    firstUpdated(changedProperties) {
		super.firstUpdated(changedProperties);
		
		if(this.e){
			
			this.icon = this.e.details['icon'] || false;
			this.large = this.e.details['large'] || false;
			this.rounded = this.e.details['rounded'] || false;
			this.size = this.e.details['size'] || 32;
			this.color = this.e.details['color'] || '#0040bf';
			this.sectionSize = this.e.sectionSize;			
		}
	
    }

    _onAction(evt) {
		const button = this.shadowRoot.querySelector('.button');
		
		this.submitting = true;

        switch (this.action) {
			case ACTION_SERVICE_CALL:

				this._dialog(this.e.service, this.params);
				// button.classList.add('submit-animation'); 
				// button.disabled = true;			
				// console.log("service call init ",this.e.service );

				// this.dispatchEvent(new CustomEvent('service-call', { 
                //     detail: { service: this.e.service },
                //     bubbles: true,
                //     composed: false 
                // }));
				
				// this.submitting = false; 
				// button.disabled = false; 

                break;
			case ACTION_SKIP:
				evt.preventDefault();
				
				const name = this.e.formName;
				const value = this.e.defaultValue
				this.skipForm(this.e.service,name,value);
			break;
			case ACTION_SUBMIT_2:
				evt.preventDefault();
				button.classList.add('submit-animation'); 
				button.disabled = true;

				this.pl.submitForm2(this.e.service).then(() => {
					button.classList.remove('submit-animation');
					this.submitting = false;
					button.disabled = false;
				}).catch(() => {
					button.classList.remove('submit-animation');
					this.submitting = false;
					button.disabled = false; 
				});

				
			break;
			case ACTION_WINDOW_CLOSE:
				evt.preventDefault();
				if (confirm("Close Window?")) {
					window.open('','_self').close()
				  }
				
				// this.pl.closeWindow(this.e.service);
			break;
			case ACTION_LINK_WINDOW:
		
			break;
			case ACTION_SUBMIT:
				button.classList.add('submit-animation'); 
				button.disabled = true;

				this.submitForm().then((data) => {
					
					button.classList.remove('submit-animation');
					this.submitting = false; 
					button.disabled = false; 

				}).catch(() => {
					button.classList.remove('submit-animation');
					this.submitting = false; 
					button.disabled = false;  
				});

			break;
			default:
				button.classList.add('submit-animation'); 
				button.disabled = true;


        		// this.dispatchEvent(new CustomEvent('submit-form', { detail: { action: this.action } }));
        
				this.submitting = false; 
				button.disabled = false; 
			break;
		}
    }

	render() {
		if(this.type ==='LINK'){
			return html`
				<div class="field">
					<div class="link-container">
						<p class="subtitle is-6" @click="${this._onAction}" >${this.e && this.e.name}</p>
					</div>
				</div>
			`;
		}else if(this.type === 'submit' || this.type === 'submit2' ){
	
			
			return html`
				<div class="field" style="${this.e && this.e.details['center'] ? 'margin:auto!important; width:50%!important' : '' }">        
					<div class="control">
					<div class="control btn-cont ${this.e && this.e.details.isRight ? "btn-right" : ""}">
						<button ?disabled="${this.submitting}" @click="${this._onAction}" 
						class="button is-primary is-clickable btn-full ${this.e && this.e.details.variant ? `btn-${this.e.details.variant}` : ''}" 
						style="padding-left: 3em; padding-right: 3em; background-color: is-info;">
							${
								this.submitting ? html`
									<div class="spinner"></div>
								` : ''
							}
							${
								!this.submitting && this.icon ? html`
									<span class="icon is-small">
										<adaptive-ui-icon datacolor="${datacolor}" icon=${this.e && this.e.icon}></adaptive-ui-icon>
									</span>
								` : ''
							}
							<span class="${this.submitting ? 'is-hidden' : ""}">${this.e && this.e.name}</span>
						</button>
					</div>
				</div>
			`;
		}else if (this.type === 'skip'){
			return html`
				<div class="field">        
					<div class="control  btn-cont">
					<button class="button btn-full is-link" style="background-color: ${this.e && this.e.details['bg_color'] !== undefined ? this.e.details['bg_color'] : 'is-link' }"  @click="${this._onAction}" >${this.e && this.e.name}</button>
						${this.e && this.e.details['info']!== undefined ? html`<span class="tooltiptext"><fa-icon class="fa fa-info-circle" color="var(--app-accent-color)" style="height:22px; width: 22px;"></fa-icon><span class="info-text">${this.e.details['info']}</span><i></i></span>` : html``}
					</div>
				</div>
			`;
		}else if (this.type === 'LINK2'){
			return html`
				<div class="field">
					<div class="link-container">
						<p class="subtitle is-6">${this.e && this.e.name}</p>
					</div>
				</div>
			`;
		}
    };
}
