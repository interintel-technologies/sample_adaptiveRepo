import{i as S,k as c,a as d,j as n}from"./index-C2PWchud.js";import{S as v}from"./section-pelement-dsc-WXP1kFbN.js";import{w as b}from"./datasource-mixin-DMQBE4lo.js";import"./section-pelement-CNE2fsyL.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const y=S`
.content{
    padding:.75em;
}
h2{
    text-transform:capitalize;
}
h4{
      text-transform:capitalize;
}
h5{
      text-transform:capitalize;
}
h6{
    text-transform:capitalize;
}

.imgDiv{
    justify-content:center;
    display:flex;
}
.name{
 margin-top:1.75em;   
}
.name h4 span{
    color:var(--google-grey-500);
    text-transform:capitalize !important;
}
.avtr{
    padding-top:2.5em;
    padding-bottom:2.5em;
    border-bottom:1.75px solid rgb(183, 181, 181);
    
}
.avtr .icon{
    color:var(--input-background-color);
}
.todayDetails{
    padding:1em 20% 0 20%;
}
.todayDetails .column{
    text-align:center;    
}
.todayDetails h5{
    color:var(--google-grey-500);  
}
.todayDetails h4{
    font-weight:bold;
}
.staffDiv{
    background-color:var(--card-background-color);
    padding-top:2em;
    padding-bottom:2.5em;
}
.buttonsList{
    padding:2.5em 20% .85em 20%;
}
.buttonsList li{
    background-color:var(--link);
    text-align:center;
    justify-content:center;
    display:flex;
    padding-top:.25em;
    padding-bottom:.25em;
    margin-bottom:1.3em;
    box-shadow: 0 .07em .15em rgba(183, 181, 181,.5);
}
.buttonsList li:hover{
    transform:scaleY(1.05) scaleX(1.02);
    transition:ease-out .5s;
}
.buttonsList li h5{
    margin-top:.8888em;
    color:var(--link--color-invert);
}
.content ul{
    margin-left:0 !important;
}
.shiftSpan{
    margin-top:2.75em;
}
.shiftSpan span{
    color:var(--google-grey-500);  
}

@media(max-width:768px){
    .buttonsList{
    padding:2.5em 10% .85em 10%;
    }
}
`;class f extends v{static get properties(){return{staffDetails:Array}}constructor(){super(),this.staffDetails=[]}static get styles(){return[unsafeCSS(globalStyles),y]}firstUpdated(){this.loader.then(()=>{this.staffDetails=[...this.rows.map(t=>Object.fromEntries(t.map((s,i)=>[this.cols[i].label,s])))][0]}),this.dateFormat(),this.hasShiftStarted()}formatToKenyaShillings(t){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(t)}dateFormatter(t,s){const i={weekday:"long",hour:"2-digit",minute:"2-digit"},e=new Date(t).toLocaleTimeString("en-US",i),h=new Date(s).toLocaleTimeString("en-US",i),o=e.split(" "),m=o[0],p=o[1]+" "+o[2],r=h.split(" "),u=r[0],g=r[1]+" "+r[2];return m+" - "+u+"  :  "+p+" - "+g}hasShiftStarted(t,s){const i=new Date,l=new Date(t),e=this.qs("#shiftStatus");return i>l?"Shift has Started":(e!=null&&(e.style.color="red"),"Shift not started yet")}static get is(){return"staff-info"}render(){return c`
            <div class="content">
                <div class="avtr has-text-centered">
                    <div class="imgDiv">
                        <figure class="image is-128x128">
                        <img class="is-rounded" src="https://i.postimg.cc/CMq71zb6/icons8-circled-user-male-skin-type-5-100.png">
                        </figure>
                    </div>
                    <div class="name">
                        <h2>${this.rows[0][1]}</h2>
                        <h4>Role:<span class="ml-4 is-capitalized">${this.rows[0][2]}</span></h4>
                    </div>
                </div>
                <div class="columns todayDetails is-mobile is-multiline">
                    <div class="column is-quarter-desktop is-full-mobile px-5 pt-5 pb-2">
                        <h5>orders today</h5>
                        <h4>${this.rows[0][3]}</h4>
                    </div>
                    <div class="column is-quarter-desktop is-full-mobile px-5 pt-5 pb-2">
                        <h5>cashed in today</h5>
                        <h4>${this.formatToKenyaShillings(this.rows[0][4])}</h4>
                    </div>
                    <div class="column is-quarter-desktop is-full-mobile px-5 pt-5 pb-2">
                        <h5>returned orders today</h5>
                        <h4>${this.rows[0][5]}</h4>
                    </div>    
                </div>
                <div class="staffDiv">
                    <ul class="buttonsList">
                        ${Object.entries(this.staffDetails).slice(7).map(([t,s])=>c`
                                <a href="${s}"><li><h5>${t}</h5></li></a>
                            `)}     
                    </ul>
                    <div class="has-text-centered">
                        <h6 class="shiftStatus" id="shiftStatus">${this.hasShiftStarted(this.rows[0][6],this.rows[0][7])}</h6>
                        <h4 class="shiftSpan">your shift:<span class="ml-3 has-text-weight-light">${this.dateFormatter(this.rows[0][6],this.rows[0][7])}</span></h4>
                    </div>
                </div>
            </div>
        `}}customElements.define(f.is,f);const x=({element:a})=>{const t=d.useRef(null);return d.useEffect(()=>{const s=t.current;s&&a&&(s.e=a)},[a]),n.jsx("div",{children:a?n.jsx("staff-info",{id:"staff-info",ref:t}):n.jsx("p",{children:"Loading data..."})})},R=b(x);export{R as default};
