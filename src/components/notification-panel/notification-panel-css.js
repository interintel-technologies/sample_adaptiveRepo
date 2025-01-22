import { css } from 'lit-element';

export const NotificationPanelStyles = css`
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
`;