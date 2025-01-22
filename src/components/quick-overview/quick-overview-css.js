import { css } from 'lit-element';

export const QuickOverviewStyles = css`
    .columns {
        margin: 0 !important;
    }
    .card-header {
        box-shadow: none;
    }
    h5, h4 {
        margin: 0 !important;
    }
    h4 {
        color: var(--primary) !important;
    }
    .filters {
        display: flex;
        flex-wrap: wrap;
    }
    .select:last-child {
        margin-left: 20px;
    }
    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary);
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    adaptive-ui-icon {
        fill: white;
        width: 30px;
        height: 30px;
    }
    .columns:hover > .column .icon-container {
        background-color: var(--link);
    }
    .column .is-5 {
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 500px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
        .columns .column > * {
            margin: auto !important;
        }
        .icon-container {
            width: 20px;
            height: 20px;
        }
        .select:last-child {
            margin-left: 0px;
            margin-top: 7px;
        }
        adaptive-ui-icon {
            width: 15px;
            height: 15px;
        }
    }
`;
