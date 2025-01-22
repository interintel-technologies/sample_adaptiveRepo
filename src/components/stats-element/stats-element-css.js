import { css } from 'lit-element';

export const StatsElementStyles = css`
    .stat-icon {
        height: 3rem;
        width: 3rem;
        margin-bottom: 20px;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .card {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 16px;
        border-radius: 0px;
        width: 100%;
        height: 300px;
        background:var(--paper);
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        cursor: pointer;
    }
    .card *{
        margin: 0 !important;
        border-color:var(--paper);

    }
    .card:hover > .stat-icon {
        transform: scale(1.05);
        fill:var(--primary);
    }
`;