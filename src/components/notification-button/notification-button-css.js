import { css } from 'lit-element';

export const NotificationPanelStyles = css`
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
`;