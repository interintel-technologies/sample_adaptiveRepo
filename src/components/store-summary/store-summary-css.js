import { css } from 'lit-element';

export const StoreSummaryStyles = css`
    .card-header {
        box-shadow: none;
    } 
    .card-header-title {
        margin: 0 !important;
        color: var(--primary) !important;
    }
    .summaries {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
        grid-template-rows: 1fr 1fr;
    }
    h3 {
        font-weight: bold !important;
        margin-top: 0 !important;
    }
    .summary {
        display: flex;
        flex-direction: column;
        background:var(--paper);
        margin:2%;
    }
    .summary > * {
        margin:auto;
        text-align: center;
    }
    @media screen and (max-width: 600px) {
        .summaries {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
    }
`;