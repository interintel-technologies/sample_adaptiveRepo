
import {css} from 'lit-element';

export const DealCountdownStyles = css`
    .image {
        height:240px;
        width:230px;
        object-fit:contain;
    }
    .column {
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .time-cont {
        border-radius:100%;
        background-color: var(--primary);
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:65px;
        height:65px;
        margin: 0 7px; 
    }
    .time-cont:hover {
        background-color: var(--link);
    }
    .time-cont p {
        color:white;
    }
`;