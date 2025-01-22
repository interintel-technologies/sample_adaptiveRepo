import { css } from 'lit-element';

export const DividerElementStyles = css`
    .content {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }
    .content::before, .content::after {
        content: '';
        flex: 1 1 auto; 
        border-bottom: solid 1px var(--link);
    }
    h4 {
        flex: 0 1 auto;
        padding: 0 15px 0 15px;
        margin: 0 !important;
    }
`;