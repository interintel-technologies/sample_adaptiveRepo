import{i,h as s,r as a,g as m,k as t}from"./index-C2PWchud.js";const n=i`
    .image img {
        height: 30%!important;
        width: 30%!important;
    }
    figure{
        display: flex!important;
        align-items: center!important;
        justify-content: center!important;
    }
    .column{
        align-items: center!important;
        display: flex!important;
        flex-direction: column!important;
        justify-content: center!important;
    }
    .subtitle.is-6{
        max-width: 600px!important;
        text-align: center!important;
    }
    @media screen and (max-width: 760px){
        .image img {
            height: 50%!important;
            width: 50%!important;
        }
    }
    @media screen and (max-width: 500px){
        .image img {
            height: 80%!important;
            width: 80%!important;
        }
    }
`;class e extends s{static get styles(){return[a(m),n,i`
				:host {
					display: block;
				}
			`]}static get properties(){return{message:String,gateway:String}}getImage(){return this.gateway==="nenasasa"?t`<img src="src/themes/dsv1.0/img/isometic/empty_images/nenasasa_empty.png" /> `:this.gateway=="mipay"?t`<img src="src/themes/dsv1.0/img/isometic/empty_images/mipay_empty.png" />`:t`<img src="src/themes/dsv1.0/img/isometic/empty_images/default_empty.png" />`}getMessage(){return this.message==null||this.message=="undefined"?this.message="There is no data to preview at this time":this.message}static get is(){return"empty-view"}render(){return t`
			<div class="column content">
				<h6>${this.getMessage()}</h6>
			</div>
		`}}window.customElements.define(e.is,e);
