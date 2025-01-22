import { css } from 'lit-element';

export const EventsListStyles = css`
    .hdr {
        justify-content: space-between;
        align-items: center;
    } 
    input {
        width: 20px;
        height: 20px;
    }
    .see-more {
        text-align: center;
        text-decoration: underline;
        text-decoration-color: var(--primary);
        color: var(--primary) !important;
        cursor: pointer;
    }
    .see-more:hover{
        text-decoration-color: var(--link);
        color: var(--link) !important;
    }
    .columns {
        border-bottom: 1px solid #ccc;
    }
    .card-header {
        box-shadow: none !important;
        border-bottom: 1px solid #ccc;
    }
`;
