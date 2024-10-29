import{i as s,h as r,r as o,g as c,k as l,a as n,j as i}from"./index-C2PWchud.js";const h=s`
.main-container{
    width: 100%;
    min-height:500px;
    position:relative;
    align-items: center;
}
.cont{
    align-items: center;
}

h6{
    margin-bottom: 25px !important;
    max-width: 70%;
}
.title{
    font-size: 40px!important;
    color: white;
    font-weight: 600!important;
    line-height: 1.125!important;
}
.screen-shot{
    display:flex;
    align-items:center;
    justify-content: center;
    width:40%;
    transition:0.7s all ease-in-out;
}
img {
    width:200px;
    height:400px;
}
/* Animations */
.content-container{
    width:60%;
    flex-direction:column;
    justify-content:center;
    padding: 15px;
    transition:0.7s all ease-in-out;
}

.columns {
    margin: 10px 0px;
    padding: 10px !important;
}
.badge {
    width: 150px;
    height: fit-content;
    margin-right: 20px;
    object-fit: contain;
    transition: transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12) 0s, box-shadow 0.3s ease 0s, -webkit-transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12) 0s;
    cursor: pointer;
}
.badge:hover {
    transform: scale(1.05);
}
.badge:active {
    transform: scale(0.9);
}
@media(max-width:768px){
    .content-container h3{
        margin-left:auto;
        margin-right:auto;
       
    }
    .content-container h6{
        margin-left:auto;
        margin-right:auto;
        max-width: 55%;
    }
    .stores{
        justify-content:center;
    }
}
@media screen and (max-width: 459px) {
    .main-container{
        width: 100%;
        min-height: 900px;
    }
    .mipay-info-cta{
        width: 100%;
        min-height: 900px;
    }
    .content-container{
        width: 100%;
    }
    .info-btn{
        right: 0;
        left: 20%;
        top: 30px!important;
    }

    .screen-shot{
        top: 77px!important;
        width: 100%;
        display: flex;
        justify-content: center;
        left: 0;
    }
    p{
        margin-top:0px;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .title{
        font-size: 35px!important;
        text-align: center;
        width: 100%;
    }
    .btn{
        width: 10em !important;
        height: 3em !important;
    }
    .info-btn{
        right: 0;
        width: 100%;
        left: 0;
        justify-content: center;
        display: flex;
    }
    .badge {
        margin:0;
    }
    .stores {
        justify-content: space-around;
    }
    h6{
        max-width: 90%;
    }  
}

`;class a extends r{static get styles(){return[o(c),h,s`
                :host {
                    display: block;
                }
            `]}static get is(){return"info-cta-2"}static get properties(){return{e:{type:Object}}}constructor(){super(),this.e={}}render(){var t;return l`
            <div class="hero is-halfheight content info-cta">
                <div class="columns is-mobile is-multiline">
                    <div id="animate2" class="column screen-shot">
                        <img src="${this.e&&((t=this.e.details)==null?void 0:t.screen_shot)}" alt="Screenshot" />
                    </div>
                    <div id="animate1" class="column is-12-mobile is-flex content-container content">
                        <h3>${this.e&&this.e.name}</h3>
                        <h6>${this.e&&this.e.defaultValue}</h6>
                        <div class="stores is-flex">
                            <a href="${this.e&&this.e.details.google_play}" target="_blank" rel="noopener noreferrer">
                                <img src='/static/dsv3.0/images/web/google-play-badge.svg' class="badge" alt="Google Play Store"/>
                            </a>
                            <a href="${this.e&&this.e.details.app_store}" target="_blank" rel="noopener noreferrer">
                                <img src='/static/dsv3.0/images/web/app-store-badge.svg' class="badge" alt="App Store"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(a.is,a);const p=({element:e})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),i.jsx("div",{children:e?i.jsx("info-cta-2",{id:"info-cta-2",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{p as default};
