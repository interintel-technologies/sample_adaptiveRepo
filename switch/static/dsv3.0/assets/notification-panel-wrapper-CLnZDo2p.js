import{i as b,h as v,r as x,g as w,k as r,a as h,j as p}from"./index-C2PWchud.js";import{w as k}from"./datasource-mixin-DMQBE4lo.js";const A=b`
    h5, h6{
        margin-bottom: 0px !important;
    }
    #markAllAsRead{
        cursor: pointer;
        color: var(--primary) !important;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    #markAllAsRead:hover {
        transform: scale(1.05);
        color: var(--app-secondary-color) !important;
    }
    #markAllAsRead:active {
        transform: scale(0.95);
        color: var(--app-secondary-color) !important;
    }
    .button {
        box-shadow: none !important;
        background-color: var(--primary) !important;
        color: white !important;
        border-radius:100px;
        padding: 2px 30px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        transform: scale(1.05);
        background-color: var(--app-secondary-color) !important;
    }
    .button:active {
        transform: scale(0.95);
    }
    .button > p {
        color: white !important;
        margin-bottom: 0px !important;
    }
    .card-header-icon {
        padding: 0.35rem !important;
    }
    adaptive-ui-icon {
        width:20px;
        height: 20px;
        fill: var(--primary);
        pointer-events: none;
    }
    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--primary);
        border-radius: 50%;
        width:35px;
        height: 35px;
        margin: auto;
    }
    .columns > * {
        pointer-events: none;
    }
    .columns > .column {
        pointer-events: none;
        padding: 0.75rem 0 !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .column.is-9 {
        justify-content: flex-start !important;
    }
    .day-column, .card-content {
        padding: 0 !important;
    }
    .shade {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0.2px);
        -webkit-backdrop-filter: blur(0.2px);
    }
    .card-header {
        flex-wrap: wrap;
    }
    ul {
        margin: 0px !important;
        list-style: none !important;
    }
    .columns {
        cursor: pointer;
        margin:0 0 10px 0!important;
    }
    .columns:last-child {
        margin-bottom:0px!important;
        margin-top:10px!important;
    }
    .no-notification {
        padding: 30px !important;
    }
    .card {
        position: relative;
    }
    .card::after{
        content: '';
        display: block;
        width: 0; 
        height: 0; 
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 30px solid white;
        position: absolute;
        top: -30px;
        right: 30px;
    }
`;class f extends v{static get styles(){return[x(w),A,b`
                :host {
                    display: block;
                }
            `]}static get properties(){return{notifications:Array,notificationsCount:Number,unreadNotificationsCount:Number,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.notifications=[],this.notificationsCount=50,this.unreadNotificationsCount=5,this.rows=[],this.cols=[],this.e=null}updated(o){o.forEach((t,i)=>{i==="notifications"&&!isNaN(t)&&this.notifications.length>0&&this.setShadeBackground()}),(o.has("e")||o.has("cols"))&&(console.log("this cols ",this.cols),this.notifications=[...this.rows.map(t=>Object.fromEntries(t.map((i,n)=>[this.cols[n].label,i])))])}getRGBA(){const o=getComputedStyle(document.documentElement).getPropertyValue("--primary");return((i,n)=>{const[e,l,d]=i.match(/\w\w/g).map(c=>parseInt(c,16));return`rgba(${e},${l},${d},${n})`})(o,.16)}setShadeBackground(){this.shadowRoot.querySelectorAll(".shade").forEach(t=>t.setAttribute("style",` background: ${this.getRGBA()};`))}markAllAsRead(){this.shadowRoot.querySelectorAll(".shade").forEach(t=>{t.setAttribute("style",` background: ${this.getRGBA()};`),t.setAttribute("style"," background: none;")})}renderNotifications(){const o=new Date,t=new Date(o);t.setDate(t.getDate()-1);const i=a=>this.notifications.filter(s=>new Date(s.time).toDateString()===a.toDateString()),n=i(o),e=i(t),l=a=>{const s=new Date(a),m=s.getHours(),g=s.getMinutes(),y=m<12?"AM":"PM";return m+":"+g+" "+y},d=a=>{const s=a.target;s.classList.remove("shade"),s.setAttribute("style"," background: none;")},c=a=>r`
            <li class="columns shade" @mouseover=${s=>d(s)} style="margin: 0;">
                <div class="column is-2">
                    <span class="icon-container">
                        <adaptive-ui-icon icon=${a.icon}></adaptive-ui-icon>
                    </span>
                </div>
                <div class="column is-8">
                    <p><strong>${a.title}</strong>${a.description}</p>
                </div>
                <div class="column is-2">
                    <h6 style="text-align: center;">${l(a.time)}</h6>
                </div>
            </li>
        `;return r`
            <div class="column day-column">
            <div class="card-header">
                    <h5 class="card-header-title">Today</h5>
                </div>
                <ul>
                    ${n.length>0?n.map(a=>c(a)):r`<h6 class="no-notification">No notifications today</h6>`}
                </ul>
            </div>
            <div class="column day-column">
                <div class="card-header">
                    <h5 class="card-header-title">Yesterday</h5>
                </div>
                <ul>
                    ${e.length>0?e.map(a=>c(a)):r`<h6 class="no-notification">No notifications yesterday</h6>`}
                </ul>
            </div>
        `}static get is(){return"notification-panel"}render(){return r`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
            <div class="column content">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-header-title">Notifications</h5>
                        <span class="card-header-icon">
                            <h5 id="markAllAsRead" @click=${()=>this.markAllAsRead()} title="Mark all as read">Mark all as read</h5>
                        </span>
                    </div>
                    <div class="card-header" style="background: ${this.getRGBA()};">
                        <h5 class="card-header-title">All notifications (${this.notificationsCount})</h5>
                        <span class="card-header-icon">
                            <button class="button" type="button">
                                <p>Unread (${this.unreadNotificationsCount})</p>
                            </button>
                        </span>
                    </div>
                    <div class="card-content">
                        ${this.renderNotifications()}
                    </div>
                </div>
            </div>
        `}}customElements.define(f.is,f);const N=u=>{const{element:o,rows:t,cols:i,paramsCallback:n}=u,e=h.useRef(null);return h.useEffect(()=>{e.current&&o&&(e.current.e=o,e.current.rows=t,e.current.cols=i)},[o,t,i]),p.jsx("div",{children:o?p.jsx("notification-panel",{id:"notification-panel",ref:e}):p.jsx("p",{children:"Loading data..."})})},j=k(N);export{j as default};
