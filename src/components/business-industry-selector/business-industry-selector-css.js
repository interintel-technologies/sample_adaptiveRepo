
import { css } from 'lit-element';
export const BusinessIndustrySelectorStyles = css`
    .cont {
        border: 0.7px solid black;
        border-radius: 7px;
        padding: 32px;
        margin: 16px;
    }
    .card {
        flex-direction: column;
        align-items: center;
        padding: 16px;
        background: var(--paper) !important;
        border:0.4px solid black;
        border-radius: 7px;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        cursor: pointer; 
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        min-height:125px !important;
    }
    .columns {
        max-height: 80vh;
        overflow-y: auto;
    }
    .card > * {
        pointer-events: none;
        text-align: center;
    }
    .icon{
        pointer-events: none;
        margin-bottom:20px !important;
    }
    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        border-color:var(--primary);
    }
    .card:hover > * {
        color :var(--primary) !important;
        fill :var(--primary) !important;
    }
    .selected {
        border: 1.2px solid var(--primary) !important;
    }
    .selected > * {
        color :var(--primary) !important;
        fill :var(--primary) !important;
    }
    .card:hover .overlay {
        transform: scale(4) translateZ(0);
    }
    .unavailable{
        cursor: pointer; 
        color: var(--primary) !important;
        text-align: center;
    }
    .actions {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }
    .unavailable:hover {
        color: var(--link) !important;
    }
    #warning-text{
        display:none;
    }
    .title-danger{
        color: #ff2b56 !important;
    }
    .title-success{
        color: #23d160 !important;
    }
    .card-success{
        border-color: #23d160 !important;
    }
    .card-success > *{
        color :#23d160!important;
        fill :#23d160!important;
    }
    .cont-success {
        border-color: #23d160 !important;
    }
    .cont-danger {
        border-color: #ff2b56 !important;
    }
    @media screen and (max-width: 770px) {
        .cont {
            margin: 0;
        }
        .actions {
            justify-content: center;
        }
    }
`;