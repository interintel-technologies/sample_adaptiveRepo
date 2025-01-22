import { css } from 'lit-element';

export const ClientCounterStyles = css`
    .hero-body {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    adaptive-ui-icon {
        height: 60px;
        width: 60px;
        margin-right: 10px;
        fill: var(--primary) !important;
    }
    h2 {
        color: var(--primary) !important;
    }
    .is-flex {
        padding: 7px;
    }
    .card-content {
        cursor: pointer;
    }
`;