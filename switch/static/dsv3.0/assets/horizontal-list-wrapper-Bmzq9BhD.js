import{i as c,h as d,r as h,g as p,k as s,a as n,j as o}from"./index-C2PWchud.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";const m=c`
   .card{
        box-sizing: border-box;
        align-items: center;
        padding: 20px;
        gap: 8px;
        border-radius: var(--CornerLarge) !important;
        box-shadow:var(--mui-shadows-3) !important;
        background-color:var(--paper);
   }
   .card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);
    color:var(--grey-darker);

}
.card-content{
        height:80%;
        overflow-x:auto;
        overflow-y:auto;

}
adaptive-ui-icon{
    fill:var(--primary);
    stroke:unset;
}
.columns{
    height:100%
}
.column{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    text-align: center;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

/* .card-header-title{
    height: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--black);
    flex: none;
    order: 0;
    flex-grow: 0;
} */

.stretch-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.stretch-content .columns {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
}

.stretch-content .column {
    flex: 1 1 33.3333%;
    box-sizing: border-box;
}


.scroll-container::-webkit-scrollbar {
    height: 5px; 
    width:80%;
}


.scroll-container::-webkit-scrollbar-track {
    background: transparent; 
}


.scroll-container::-webkit-scrollbar-thumb {
    background: var(--primary); 
    border-radius: 5px; 
}


.scroll-container::-webkit-scrollbar-track-piece:horizontal {
    height: 5px; 
}




.scroll-container::-webkit-scrollbar-thumb:hover {
    background: var(--primary); 
}

.image-icon-container{
    display: flex; justify-content: center; align-items: center;
}

a{
    color:var(--mui-shadows-3) !important;
}

.image-icon{

    font-size: 25px;
    border:1px solid var(--md-sys-color-surfaceVariant);
    padding: 20px;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 10px;
    width: 45px;
    height: 45px;
    flex: none;
    order: 0;

}

.action_name{
    font-size:14px !important;
    font-weight:400  !important;
}



`;class l extends d{static get styles(){return[h(p),m,c`
                :host {
                    display: block;
                }
            `]}static get properties(){return{items:Array,services:Array,firstLoad:Boolean,e:{type:Object},cols:{type:Array},rows:{type:Array},dataColor:{type:String}}}constructor(){super(),this.items=[],this.services=[],this.rows=[],this.cols=[],this.e=null,this.dataColor="var(--primary)"}updated(t){super.updated(t),(t.has("e")||t.has("rows")||t.has("cols"))&&(this.items=[...this.rows.map(i=>Object.fromEntries(i.map((r,e)=>[this.cols[e].label,r])))],console.log("this.items ",this.items),this.dataColor=dataColor)}static get is(){return"horizontal-list"}getColumnClass(){switch(this.items.length){case 1:return"is-full";case 2:return"is-half-desktop is-half-mobile is-half-tablet";default:return"is-one-third-desktop is-one-third-mobile is-one-third-tablet"}}onBtnClickHandler(t,i){this._dialog(t,i)}render(){const t=this.getColumnClass();return s`
		<div class="">

		<div class="card">
        <h6 class="card-header-title">${this.e.name}</h6>
        <div class="card-content scroll-container">
            <div class="columns is-mobile">
			${this.items.map((i,r)=>s`
					<div class="column is-fullheight  ${t}">
						<div class="columns is-multiline ">
							<div class="column is-full  has-text-centered image-icon-container">	
                                <a class="image-icon" @click=${()=>this.onBtnClickHandler(i.service,r)} title="Go to">
                                    <adaptive-ui-icon datacolor="${this.dataColor}"  icon="${i.icon}"></adaptive-ui-icon>  
                                </a>    
							</div>
							<div class="column is-full has-text-centered ">
								<p class="action_name">${i.action_name}</p>
							</div>
						</div>
					</div>
				`)}

            </div>
        </div>
    </div>
    </div>
        `}}customElements.define(l.is,l);const f=({_dialog:a,element:t,rows:i,cols:r})=>{const e=n.useRef(null);return n.useEffect(()=>{e.current&&t&&(e.current.e=t,e.current.rows=i,e.current.cols=r,e.current._dialog=a)},[t,i,r]),o.jsx(o.Fragment,{children:t&&i&&r?o.jsx("horizontal-list",{id:"horizontal-list",ref:e}):o.jsx("p",{children:"Loading data..."})})},b=u(f);export{b as default};
