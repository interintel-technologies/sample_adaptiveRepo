import { html, css } from 'lit-element';
import { ThemeMixin } from './ThemeMixin';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const ACTION_SERVICE_CALL = '1';
export const ACTION_LINK_WINDOW = '2';
export const ACTION_SUBMIT = '3';
export const ACTION_SKIP = '4';
export const ACTION_WINDOW_CLOSE = '5';
export const ACTION_SUBMIT_2 = '6';

export const  buttonMixin = BaseClass => class extends ThemeMixin(BaseClass) {

	static get styles() {
		return [
			super.styles,
			css`
				:host {
					display: block;
				}
				.btn-cont{
					display: flex;
				}
				.btn-cont.btn-right {
					justify-content: flex-end
				}
				.btn-cont button {
					border-radius: 10px!important;
					padding: 18px 80px;
					font-weight: bold;
				}
				.btn-full{
					width: 100%;
				}

				.submit-animation::before {
					content: '';
					position: absolute;
					box-sizing: border-box;
					width: 20px;
					height: 20px;
					border: 2px solid #ccc;
					border-top-color: #333;
					border-radius: 50%;
					animation: spin 1s linear infinite;
				}
			`
		];
	}

    static get properties() {
        return {
			'icon': Boolean,
			'rounded': Boolean,
			'large': Boolean,
			'size': String,
			'color': String, // 32,36,46
			'sectionSize':String,
			'submitting': Boolean,
			'pl':String

        };
    }

    constructor() {
        super();
        this.icon = false;
        this.rounded = false;
        this.large = false;
        this.size = 32;
        this.color = '#0040bf';
		this.submitting = false;
		this.pl='';
        this.addEventListener('click', this._onAction.bind(this));
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
	
		this.icon = 'icon' || false;
		this.large = 'large' || false;
		this.rounded = 'rounded' || false;
		this.size = 'size' || 32;
		this.color = 'color' || '#0040bf';
		this.sectionSize = 24;
		this.init();
    }

    _onAction(evt) {
		const button = this.shadowRoot.querySelector('.button');
		this.submitting = true;

        switch (this.action) {
			case ACTION_SERVICE_CALL:
				this.pl._dialog(this.e.service, this.params);
			break;
			case ACTION_SKIP:
				evt.preventDefault();
				const name = this.e.formName;
				const value = this.e.defaultValue
				this.pl.skipForm(this.e.service,name,value);
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
				this.pl.closeWindow(this.e.service);
			break;
			case ACTION_LINK_WINDOW:
		
			break;
			case ACTION_SUBMIT:
				button.classList.add('submit-animation'); 
				button.disabled = true;

				this.submitForm().then(() => {
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

				this.submitForm().then(() => {
					button.classList.remove('submit-animation');
					this.submitting = false; 
					button.disabled = false; 

				}).catch(() => {
					button.classList.remove('submit-animation');
					this.submitting = false; 
					button.disabled = false;  
				});
			break;
		}
    }

	init(pElement, loader) {
		this.e = pElement;
		this.pl = loader.pl;
		this.pageGroup = loader.pageGroup;
		this.pageGroupIndex = loader.pageGroupIndex;
	}
	

	render() {
		if(this.type ==='LINK'){
			return html`
				<div class="field">
					<div class="link-container">
						<p class="subtitle is-6">${this.e.name}</p>
					</div>
				</div>
			`;
		}else if(this.type === 'submit' || this.type === 'submit2' ){
			return html`
				<div class="field" style="${this.e.details['center'] ? 'margin:auto!important; width:50%!important' : '' }">        
					<div class="control">
					<div class="control btn-cont ${this.e.details.isRight ? "btn-right" : ""}">
						<button ?disabled="${this.submitting}" @click="${this._onAction}" class="button is-link btn-full" style="padding-left: 3em; padding-right: 3em; background-color: is-info;">
							${
								this.submitting ? html`
									<div class="spinner"></div>
								` : ''
							}
							${
								!this.submitting && (this.e.icon && this.e.icon !== null) ? html`
									<span class="icon is-small">
										<adaptive-ui-icon icon=${this.e.icon}></adaptive-ui-icon>
									</span>
								` : ''
							}
							<span class="${this.submitting ? 'is-hidden' : ""}">${this.name}</span>
						</button>
					</div>
				</div>
			`;
		}else if (this.type === 'skip'){
			return html`
				<div class="field">        
					<div class="control">
					<button class="button is-link" style="background-color: ${this.e.details['bg_color'] !== undefined ? this.e.details['bg_color'] : 'is-link' }">${this.name}</button>
						${this.e.details['info']!== undefined ? html`<span class="tooltiptext"><fa-icon class="fa fa-info-circle" color="var(--app-accent-color)" style="height:22px; width: 22px;"></fa-icon><span class="info-text">${this.e.details['info']}</span><i></i></span>` : html``}
					</div>
				</div>
			`;
		}else if (this.type === 'LINK2'){
			return html`
				<div class="field">
					<div class="link-container">
						<p class="subtitle is-6">${this.e.name}</p>
					</div>
				</div>
			`;
		}
    };
}
