import { css } from 'lit-element';

export const TopSellingItemsStyles = css`
    img {
        object-fit: contain;
        margin-bottom: 16px;
    }
    .columns {
        margin: 0 !important;
    }
    .card-header {
        box-shadow:  none;
    } 
    .card-content {
        padding: 10px;
    }
    .column.is-flex {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: #fff;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        cursor: pointer;
    }
    .column.is-flex:hover {
        transform: scale(1.05);
    }
    .card-header-title {
        margin: 0 !important;
    }
    ul  {
        margin: 0 !important;
    }
    li {
        border-right: 1px solid rgb(183, 181, 181);
    }
    li:last-child {
        border: none !important;
    }
    @media screen and (max-width: 430px) {
        li {
            border-right: none;
            border-bottom: 1px solid rgb(183, 181, 181);
        }
    }
`