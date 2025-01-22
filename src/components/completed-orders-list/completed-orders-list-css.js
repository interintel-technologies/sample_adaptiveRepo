import { css } from 'lit-element';

export const CompletedOrdersListStyles = css`
    .columns {
        margin: 0 !important;
    }
    ul {
        margin: 0 !important;
        list-style: none !important;
    }
    li {
        border-bottom: 1px solid #ccc;
    }
    .image {
        border: 1px solid var(--link);
    }
    img {
        height: 100% !important;
        object-fit: contain;
    }
    .button {
        background-color: var(--primary);
        padding: 20px 35px;
        border: none;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    #cancel {
        background-color: red !important;
        margin-right: 1em;
    }
    .is-flex {
        flex-wrap: wrap;
    }
    #status {
        color: var(--link) !important;
    }
    #warning-text {
        display:none;
    }
    @media screen and (max-width: 770px) {
        #cancel {
            margin-bottom: 1em;
        } 
    }
    @media (max-width: 1023px) {
        .has-text-centered-mobile {
            text-align: center;
        }
        .column{
            padding:0 !important
        }
    }

    @media (max-width: 1023px) {
        .is-fullwidth-mobile {
            width: 100%;
        }
        .column{
            padding:0 !important
        }
    }
`;