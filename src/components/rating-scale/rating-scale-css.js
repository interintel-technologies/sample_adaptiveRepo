
import { css } from 'lit-element';

export const RatingScaleStyles = css`
    .circle {
        min-width: 40px;
        min-height: 40px;
        border: 2px solid black;
        border-radius: 50%;
        margin:10px 20px;
        cursor: pointer;
        justify-content: center;
        align-items: center;
    }
    .scale {
        justify-content: space-evenly;
    }
    .selected {
        border-color: var(--link) !important;
        color: var(--link) !important;
    }
    .circle:hover {
        border: 1px solid var(--primary);
        color: var(--primary);
    }
    #warning-text {
        display:none;
    }
    .feedback {
        border: none;
    }
    .success {
        color: #23d160 !important;
        border-color: #23d160 !important;
    }
    .fail {
        color: #ff2b56 !important;
        border-color: #ff2b56 !important;
    }
    @media screen and (max-width: 1000px) {
        .scale {
            overflow-x: auto;
        }
    }
`;