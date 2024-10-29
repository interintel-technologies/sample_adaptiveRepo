import{i as f,h as x,r as k,g as y,k as r,a as u,j as c}from"./index-C2PWchud.js";import{w}from"./datasource-mixin-DMQBE4lo.js";const N=f`
    h5, h6{
        margin-bottom: 0px !important;
    }
    #markAllAsRead{
        cursor: pointer;
        color: var(--app-default-color) !important;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    #markAllAsRead:hover {
        transform: scale(1.05);
        color: var(--link) !important;
    }
    #markAllAsRead:active {
        transform: scale(0.95);
        color: var(--link) !important;
    }
    .button {
        box-shadow: none !important;
        background-color: var(--app-default-color) !important;
        color: white !important;
        border-radius:100px;
        padding: 2px 30px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        transform: scale(1.05);
        background-color: var(--link) !important;
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
        fill: var(--app-default-color);
        pointer-events: none;
    }
    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--app-default-color);
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
        border-bottom: 30px solid var(--card-background-color);
        position: absolute;
        top: -30px;
        right: 30px;
    }

    .is-visible {
        display: block !important;
        animation: notification-panel-anim 0.2s;
    }

    #notificationIcon{
        position:fixed;
        top:0.6rem;
        right:20.75rem;
        z-index:10;
        cursor:pointer;
    }

    #notification-panel-cont {
        width: 400px;
        position: fixed;
        right:19.5rem;
        top: 5.5rem;
        z-index: 20;
        display: none;
    }

    @media(max-width:768px){
        #notificationIcon{
            position:fixed;
            top:0.6rem;
            right:6.5rem;
            z-index:10;
            cursor:pointer;
        }
        #notification-panel-cont{
            width:20rem;
            right:5rem;
        }
    }
    @media(max-width:400px){
        #notification-panel-cont{
            width:16rem;
            
        }
    }
`;class h extends x{static get styles(){return[k(y),N,f`
                :host {
                    display: block;
                }
            `]}static get properties(){return{notifications:Array,notificationsCount:Number,unreadNotificationsCount:Number,rows:{type:Array},e:{type:Object},cols:{type:Array}}}constructor(){super(),this.notifications=[],this.notificationsCount=50,this.unreadNotificationsCount=5,this.rows=[],this.cols=[],this.lines=[],this.e=null}updated(t){t.forEach((i,n)=>{n==="notifications"&&!isNaN(i)&&this.notifications.length>0&&this.setShadeBackground()})}updated(t){t.forEach((i,n)=>{n==="notifications"&&!isNaN(i)&&this.notifications.length>0&&this.setShadeBackground()}),(t.has("e")||t.has("cols"))&&(console.log("this cols ",this.cols),this.notifications=[...this.rows.map(i=>Object.fromEntries(i.map((n,s)=>[this.cols[s].label,n])))])}setShadeBackground(){this.shadowRoot.querySelectorAll(".shade").forEach(i=>i.setAttribute("style"," background: var(--link--light-color)"))}markAllAsRead(){this.shadowRoot.querySelectorAll(".shade").forEach(i=>{i.setAttribute("style"," background: var(--link--light-color)"),i.setAttribute("style"," background: none;")})}onNotificationIconClickHandler(){this.qs("#notification-panel-cont").classList.toggle("is-visible")}closeNotificationPanelOnOutsideClick(t){const i=this.qs("#notification-panel-cont"),n=t.composedPath().find(a=>a.id==="notification-panel-cont"||a.id==="notificationIcon"),s=Object.values(i.classList).find(a=>a==="is-visible");n===void 0&&s==="is-visible"&&i.classList.remove("is-visible")}connectedCallback(){super.connectedCallback(),window.addEventListener("click",t=>this.closeNotificationPanelOnOutsideClick(t))}disconnectedCallback(){super.disconnectedCallback(),window.addEventListener("click",t=>this.closeNotificationPanelOnOutsideClick(t))}renderNotifications(){const t=new Date,i=new Date(t);i.setDate(i.getDate()-1);const n=o=>this.notifications.filter(e=>new Date(e.time).toDateString()===o.toDateString()),s=n(t),a=n(i),m=o=>{const e=new Date(o),p=e.getHours(),v=e.getMinutes(),g=p<12?"AM":"PM";return p+":"+v+" "+g},b=o=>{const e=o.target;e.classList.remove("shade"),e.setAttribute("style"," background: none;")},d=o=>r`
            <li class="columns shade" @mouseover=${e=>b(e)} style="margin: 0;">
                <div class="column is-2">
                    <span class="icon-container">
                        <adaptive-ui-icon icon=${o.icon}></adaptive-ui-icon>
                    </span>
                </div>
                <div class="column is-8">
                    <p><strong>${o.title}</strong>${o.description}</p>
                </div>
                <div class="column is-2">
                    <h6 style="text-align: center;">${m(o.time)}</h6>
                </div>
            </li>
        `;return r`
            <div class="column day-column">
            <div class="card-header">
                    <h5 class="card-header-title">Today</h5>
                </div>
                <ul>
                    ${s.length>0?s.map(o=>d(o)):r`<h6 class="no-notification">No notifications today</h6>`}
                </ul>
            </div>
            <div class="column day-column">
                <div class="card-header">
                    <h5 class="card-header-title">Yesterday</h5>
                </div>
                <ul>
                    ${a.length>0?a.map(o=>d(o)):r`<h6 class="no-notification">No notifications yesterday</h6>`}
                </ul>
            </div>
        `}static get is(){return"notification-button"}render(){return r`
            <div class="column content">
                <span id="notificationIcon" class="icon is-large has-text-primary notification-icon" @click=${()=>this.onNotificationIconClickHandler()}>
                    <i class="fa-solid fa-bell" title="notifications"></i>
                </span>
                
                <div id="notification-panel-cont">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-header-title">Notifications</h5>
                            <span class="card-header-icon">
                                <h5 id="markAllAsRead" @click=${()=>this.markAllAsRead()} title="Mark all as read">Mark all as read</h5>
                            </span>
                        </div>
                        <div class="card-header">
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
            </div>
        `}}customElements.define(h.is,h);const A=l=>{const{element:t,rows:i,cols:n,paramsCallback:s}=l,a=u.useRef(null);return u.useEffect(()=>{a.current&&t&&(a.current.e=t,a.current.rows=i,a.current.cols=n)},[t,i,n]),c.jsx("div",{children:t?c.jsx("notification-button",{id:"notification-button",ref:a}):c.jsx("p",{children:"Loading data..."})})},j=w(A);export{j as default};
