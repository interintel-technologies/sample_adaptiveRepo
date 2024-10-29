import{i as t,h as a,k as s}from"./index-C2PWchud.js";const n=t`
    :host {
        display: block;
    }
    .banner{
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    
        width: 100vw;
    }
    .visible {
        display: block;
    }
    .cancel{
        cursor: pointer;
        right: 20px;
        position: relative;
    }
    .success{
        background-color: #23d160;
        color: #fff;
    }
    .danger{
        background-color: #f14668;
        color: #fff;
    }
    .info{
        background-color: var(--info);
        color: #fff;
    }
    .slide-bottom {
        -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: s
    }
    .banner.visible {
        animation: fade-in 0.3s ease-in-out forwards;
    }
    .banner.hidden {
        animation: fade-out 0.3s ease-in-out forwards;
    }
    @-webkit-keyframes slide-bottom {
        0% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
        100% {
            -webkit-transform: translateY(1px);
            transform: translateY(1px);
        }
    }

    @keyframes fade-in {
        from { opacity: 0; transform: translateY(-100%); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fade-out {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-100%); }
    }

    @keyframes slide-bottom {
        0% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
        100% {
            -webkit-transform: translateY(1px);
            transform: translateY(1px);
        }
    }

`,r={message:"Success",type:"success",position:"top",cancelable:!0,duration:1e3};class e extends a{static get properties(){return{banner:Object}}constructor(){super(),this.banner=r}static get styles(){return[n,t`
                :root {
                    display: block;
                }
            `]}firstUpdated(){this.banner=JSON.parse(this.banner),this.banner.duration!=="forever"&&setTimeout(()=>{this.shadowRoot.querySelector(".banner").classList.add("animate__fadeOut"),this.remove()},this.banner.duration)}popBanner(){this.remove()}static get is(){return"banner-element"}render(){return s`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            <div class="banner animate__animated animate__slideIn${this.banner.position==="top"?"Down mb-1":"Up mt-1"} content ${this.banner.type}">
                <div class="columns is-mobile is-centered">
                    <div class="column is-three-quarters has-text-centered" style="width: 98%;">
                        <h5 class="m-0" style="color: white;">${this.banner.message}</h5>
                    </div>
                    <div class="column is-one-quarter has-text-right ${this.banner.cancelable?"":"is-hidden"}" title="Remove" style="width: 2%;">
                        <span class="icon cancel" @click=${()=>this.popBanner()}>
                            <i class="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                </div>
            </div>
        `}}customElements.define(e.is,e);export{r as BANNER};
