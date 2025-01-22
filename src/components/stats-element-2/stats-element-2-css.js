import { css } from 'lit-element';

export const StatsElement2Styles = css`
    .columns {
        margin: 0!important;
    }
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }
    .card > * {
        margin-bottom: 0.8em;
        pointer-events: none;
    }
    adaptive-ui-icon {
        fill: var(--primary);
        width: 30px;
        height: 30px;
    }
    .card:hover > adaptive-ui-icon {
        fill: var(--link);
    }
`;