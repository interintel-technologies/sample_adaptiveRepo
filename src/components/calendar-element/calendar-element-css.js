import { css } from 'lit-element';

export const CalendarElementStyles = css`
    .column.is-flex {
        justify-content: center;
        align-items: center;
    }
    .card-header {
        box-shadow: none;
        background-color: var(--primary);
    }
    .card-header-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
    }
    .card-header-title > h4, .card-header-title > h5 {
        color: white !important;
    }
    .card-content {
        padding: 1.5rem 0 0 0 !important;
    }
    hr {
        margin: 1rem !important;
    }
    h4 {
        margin-bottom: 0 !important;
    }
    .month {
        overflow-x: auto;
    }
    .card {
        border-radius: 6px;
        padding: 1.5rem;
    }
    .month-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
    .month-grid-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
    }
    .day-of-week > h5 {
        text-align: center;
        padding: 0.5rem;
    }
    .day {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        border: 2px solid transparent;
        width: fit-content;
        border-radius: 50%;
        cursor: pointer;
    }
    .day h6 {
        margin: 0 !important;
    }
    .day:hover {
        border-color: var(--primary);
    }    
    .today {
        background-color: var(--link);
    }
    .today > h6, .selected-date > h6 {
        color: white !important;
    }
    .selected-date {
        background-color: var(--primary);
    }
    .selected-date:hover {
        border-color: var(--link);
    }
    .unavailable {
        opacity: 0.15;
        cursor: not-allowed;
    }
    .unavailable:hover {
        border-color: transparent !important;
    }
    .today-text {
        cursor: pointer;
        width: fit-content;
        margin-top: 1.5rem;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .today-text:hover {
        color: var(--link) !important;
        transform: scale(1.03);
    }
    .today-text:active {
        color: var(--link) !important;
        transform: scale(0.97);
    }
    .selected-date-btn:hover {
        transform: scale(1.01);
    }
    .selected-date-btn {
        cursor: pointer;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .fas {
        height:22px; 
        width: 22px; 
        margin-right:10px;
    }
    .card-header > *:active {
        transform: scale(.99);
    }
    .nav {
        width: 28px !important;
        height: 28px !important;
        cursor: pointer;
        border:1px solid black;
        border-radius: 50%;
        margin-right: 10px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .nav:hover {
        transform: scale(1.05);
    }
    .nav:active {
        transform: scale(0.95);
    }
    .date-navigation {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        flex-wrap: wrap;
    }
    .date-navigation .is-flex {
        flex-wrap: wrap;
        margin-top: 5px;
    }
    .select {
        margin-right: 10px !important;
    }
    .columns {
        margin: 0 !important;
    }
    .valid{
        background-color :#23D160!important;
    }
    .invalid{
        background-color: rgb(255, 56, 96)!important;
    }
    #warning-text{
        display: none;
    }
    @media screen and (max-width:550px) {
        .card-content {
            padding: 1.5rem 0 0 0 !important;
        }
        .month-grid {
            overflow-x: auto;
        }
        .date-navigation {
            justify-content: center;
        }
    }
`;
