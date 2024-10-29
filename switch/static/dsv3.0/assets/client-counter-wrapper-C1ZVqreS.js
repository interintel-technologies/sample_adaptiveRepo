import{i as c,h as a,r as u,g as l,k as d,a as s,j as r}from"./index-C2PWchud.js";const h=c`
    .hero-body {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    adaptive-ui-icon {
        height: 60px;
        width: 60px;
        margin-right: 10px;
        fill: var(--primary) !important;
    }
    h2 {
        color: var(--primary) !important;
    }
    .is-flex {
        padding: 7px;
    }
    .card-content {
        cursor: pointer;
    }
`;class o extends a{static get styles(){return[u(l),h,c`
                :host {
                    display: block;
                }
            `]}static get properties(){return{counter:Number,interval:Object,e:{type:Object},details:{type:Object}}}constructor(){super(),this.e=null,this.counter=0,this.details={}}updated(t){t.has("e")&&(this.counterTrigger(),window.addEventListener("scroll",()=>this.counterTrigger()),this.details=this.e.details)}counterTrigger(){const t=this.shadowRoot.querySelector(".content").getBoundingClientRect().top,i=window.innerHeight/1.4;t<i&&setTimeout(()=>this.startCounter(),300)}startCounter(){const t=this.e.defaultValue,n=t/200;this.interval=setInterval(()=>this.updateCounter(t,n),n)}updateCounter(t,i){this.counter=Math.ceil(this.counter+i),this.counter>t&&(this.counter=t,clearInterval(this.interval))}static get is(){return"client-counter"}render(){return d`
            <div class="content">
                <div class="card">
                    <div class="card-content">
                        <div class="is-flex">
                            <adaptive-ui-icon icon="${this.e.icon}"></adaptive-ui-icon>
                            <h2>${this.counter}</h2>
                        </div>
                         <h5>${this.details}</h5>
                        <p>${this.details.description}</p>
                    </div>
                </div>
            </div>
        `}}customElements.define(o.is,o);const g=({element:e})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),r.jsx(r.Fragment,{children:e?r.jsx("client-counter",{id:"client-counter",ref:t}):r.jsx("p",{children:"Loading data..."})})};export{g as default};
