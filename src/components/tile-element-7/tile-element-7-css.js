import { css } from 'lit-element';

export const TileElement7Styles = css`
    img {
        object-fit: contain;
        width: 25%;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .row-reverse {
        flex-direction: row-reverse;
    }
    .columns {
        flex-wrap: wrap !important;
    }
    .column.is-flex {
        padding: 20px;
    }
    .column.is-flex:hover > img {
        transform: scale(1.05);
    }
    .content {
        padding: 10px;
    }
`;