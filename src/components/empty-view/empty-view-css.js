
import {css} from 'lit-element';

export const EmptyViewStyles = css`
    .image img {
        height: 30%!important;
        width: 30%!important;
    }
    figure{
        display: flex!important;
        align-items: center!important;
        justify-content: center!important;
    }
    .column{
        align-items: center!important;
        display: flex!important;
        flex-direction: column!important;
        justify-content: center!important;
    }
    .subtitle.is-6{
        max-width: 600px!important;
        text-align: center!important;
    }
    @media screen and (max-width: 760px){
        .image img {
            height: 50%!important;
            width: 50%!important;
        }
    }
    @media screen and (max-width: 500px){
        .image img {
            height: 80%!important;
            width: 80%!important;
        }
    }
`;
