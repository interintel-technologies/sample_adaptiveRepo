import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { NotificationPanelStyles } from './notification-panel-css';
import globalStyles from '../../App.css?raw'


class NotificationPanel extends LitElement{
    
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            NotificationPanelStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            notifications: Array,
            notificationsCount: Number,
            unreadNotificationsCount: Number,
            rows: { type: Array },
            e: { type: Object },
            cols: { type: Array },

        };
    }

    constructor() {
        super();

        this.notifications = [];
        this.notificationsCount = 50;
        this.unreadNotificationsCount = 5;
        this.rows = [];
        this.cols = [];
        this.e = null;
    }

    // firstUpdated() {
    //     this.loader.then(() => {
    //         this.notifications = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
    //     });
    // }

    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            if(propName === "notifications" && !isNaN(oldValue) && this.notifications.length > 0) {
                this.setShadeBackground();
            }
        });

        if (changedProperties.has('e')  || changedProperties.has('cols'))  {
            console.log("this cols ",this.cols);
            
            this.notifications = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
		}

    }

    getRGBA() {
        const defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        //const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--app-secondary-color');
        const rgba = (hex, a) => {
            const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
            return `rgba(${r},${g},${b},${a})`;
        };
        
        return rgba(defaultColor, 0.16);
    } 
    
    setShadeBackground() {
        const shades = this.shadowRoot.querySelectorAll(".shade");
        shades.forEach(shade => shade.setAttribute("style",` background: ${this.getRGBA()};`));
    }

    markAllAsRead() {
        const shades = this.shadowRoot.querySelectorAll(".shade");
        shades.forEach(shade => {
            shade.setAttribute("style",` background: ${this.getRGBA()};`);
            shade.setAttribute("style",` background: none;`);
        });
    }

    renderNotifications() {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        const filterNotificationsByDate = date => this.notifications.filter(notification => new Date(notification.time).toDateString() === date.toDateString());
        
        const todaysNotifications = filterNotificationsByDate(today);
        const yesterdaysNotifications = filterNotificationsByDate(yesterday);

        const convertTimeTo12HourFormat = time => {
            const date = new Date(time);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const period = hours < 12 ? "AM" : "PM";
    
            return  hours+":"+minutes+" "+period;
        };

        const onNotificationHoverHandler = e => {
            const notification = e.target;

            // remove shade
            notification.classList.remove("shade");
            notification.setAttribute("style",` background: none;`);
        };

        const renderNotification = notification  => html`
            <li class="columns shade" @mouseover=${e=>onNotificationHoverHandler(e)} style="margin: 0;">
                <div class="column is-2">
                    <span class="icon-container">
                        <adaptive-ui-icon icon=${notification.icon}></adaptive-ui-icon>
                    </span>
                </div>
                <div class="column is-8">
                    <p><strong>${notification.title}</strong>${notification.description}</p>
                </div>
                <div class="column is-2">
                    <h6 style="text-align: center;">${convertTimeTo12HourFormat(notification.time)}</h6>
                </div>
            </li>
        `;

        return html`
            <div class="column day-column">
            <div class="card-header">
                    <h5 class="card-header-title">Today</h5>
                </div>
                <ul>
                    ${
                        todaysNotifications.length > 0 ? todaysNotifications.map(todaysNotification => renderNotification(todaysNotification)) : html`<h6 class="no-notification">No notifications today</h6>`
                    }
                </ul>
            </div>
            <div class="column day-column">
                <div class="card-header">
                    <h5 class="card-header-title">Yesterday</h5>
                </div>
                <ul>
                    ${
                        yesterdaysNotifications.length > 0 ? yesterdaysNotifications.map(yesterdaysNotification => renderNotification(yesterdaysNotification)) : html`<h6 class="no-notification">No notifications yesterday</h6>`
                    }
                </ul>
            </div>
        `;
    }
    
    static get is() {
        return "notification-panel";
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
            <div class="column content">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-header-title">Notifications</h5>
                        <span class="card-header-icon">
                            <h5 id="markAllAsRead" @click=${() => this.markAllAsRead()} title="Mark all as read">Mark all as read</h5>
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
                        ${
                            this.renderNotifications()
                        }
                    </div>
                </div>
            </div>
        `;
    }

}

customElements.define(NotificationPanel.is, NotificationPanel);
