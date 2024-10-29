import{i as a,h as l,r as d,g as h,k as m,a as r,j as o}from"./index-C2PWchud.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const u=a`
    .image {
        height:240px;
        width:230px;
        object-fit:contain;
    }
    .column {
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .time-cont {
        border-radius:100%;
        background-color: var(--primary);
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:65px;
        height:65px;
        margin: 0 7px; 
    }
    .time-cont:hover {
        background-color: var(--link);
    }
    .time-cont p {
        color:white;
    }
`;class n extends l{static get styles(){return[d(h),u,a`
                :host {
                    display: block;
                }
            `]}static get properties(){return{days:Number,hours:Number,mins:Number,secs:Number,id:String,title:String,description:String,leftImage:String,rightImage:String,e:{type:Object},cols:{type:Array},rows:{type:Array}}}constructor(){super(),this.days=0,this.hours=0,this.mins=0,this.secs=0,this.id="",this.title="",this.description="",this.leftImage="",this.rightImage=""}updated(e){if(e.has("cols")||e.has("rows")){const t=Object.fromEntries(this.rows[0].map((i,c)=>[this.cols[c].label,i]));this.leftImage=t.leftImage,this.rightImage=t.rightImage,this.id=t.id,this.title=t.title,this.description=t.description,this.countDown(t.deadline)}}countDown(e){const t=parseInt(e)-Date.now();this.days=Math.floor(t/(1e3*60*60*24)),this.hours=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),this.mins=Math.floor(t%(1e3*60*60)/(1e3*60)),this.secs=Math.floor(t%(1e3*60)/1e3),setTimeout(()=>{this.countDown(e)},1e3)}onShopNowClickHandler(){this.dispatchEvent(new CustomEvent("service-call",{detail:{service:this.e.service,params:{id:this.id}},bubbles:!0,composed:!0}))}static get is(){return"deal-countdown"}render(){return m`
            <div class="level">
                <div class="level-item">
                    <img src="${this.leftImage}" class="image" />
                </div>
                <div class="level-item">
                    <div class="column content is-flex">
                        <div class="is-flex">
                            <div class="time-cont is-flex">
                                <p style="margin-bottom: 0;" >${this.days}</p>
                                <p>Days</p>
                            </div>
                            <div class="time-cont is-flex">
                                <p style="margin-bottom: 0;" >${this.hours}</p>
                                <p>Hours</p>
                            </div>
                            <div class="time-cont is-flex">
                                <p style="margin-bottom: 0;" >${this.mins}</p>
                                <p>Mins</p>
                            </div>
                            <div class="time-cont is-flex">
                                <p style="margin-bottom: 0;" >${this.secs}</p>
                                <p>Secs</p>
                            </div>
                        </div>
                        <h5 style="margin-top: 16px;">${this.title}</h5>
                        <h6>${this.description}</h6>
                        <button class="button is-primary" @click=${()=>this.onShopNowClickHandler()}>
                            Shop Now
                        </button>
                    </div>
                </div>
                <div class="level-item">
                    <img src="${this.rightImage}" class="image" />
                </div>
            </div>
        `}}customElements.define(n.is,n);const g=({element:s,rows:e,cols:t})=>{const i=r.useRef(null);return r.useEffect(()=>{i.current&&s&&(i.current.e=s,i.current.rows=e,i.current.cols=t)},[s,e,t]),o.jsx(o.Fragment,{children:s&&e&&t?o.jsx("deal-countdown",{id:"deal-countdown",ref:i}):o.jsx("p",{children:"Loading data..."})})},b=p(g);export{b as default};
