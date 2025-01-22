import { css } from 'lit-element';

export const OrderDetailsStyles = css`
    .content > .columns {
        margin: 0 !important;
    }
    ul {
        margin: 0 !important;
        list-style: none !important;
    }
    li {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0.2px);
        -webkit-backdrop-filter: blur(0.2px);
        border-radius: 8px;
        margin: 0 0 0.8em 0!important;
    }
    .image {
        border: 1px solid var(--link);
        height: 200px;
        width: 200px;
        margin: auto;
    }
    .column > h5 {
        margin: 0.4em 0!important;
    }
    img {
        height: 100% !important;
        object-fit: contain;
    }
    @media screen and (max-width: 770px) {
        .image {
            height: 128px;
            width: 128px;
        }
    }
`;