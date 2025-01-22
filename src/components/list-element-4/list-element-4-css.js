import { css } from 'lit-element';

export const ListElement4Styles = css`
    .card-header {
        box-shadow: none;    
    }
    ul, hr, h4 {
        margin:0 !important;
    }
    li {
        border-bottom: 1px solid rgb(183, 181, 181);
        list-style-type: none;
    }
    li:last-child {
        border: none !important;
    }
`;