import { css } from 'lit-element';

export const WishlistButtonStyles = css`
    .cont {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .far {
        color: black;
        transform: translateY(3px);
        cursor: pointer;
    }
    .far:hover {
        color: var(--link);
    }
    .columns {
        margin: 0 !important;
    }
    .close-icon {
        cursor: pointer;
    }
    .close-icon:hover {
        fill: var(--link);
        transform: scale(1.05);
    }
    .button {
        background-color: var(--primary);
        width: 100%;
        border: none !important;
        border-radius: 0 !important;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--link);
        transform: scale(1.05);
    }
    .button:active, .close-icon:active {
        transform: scale(0.95);
    }
    .button > h6 {
        color: white !important;
        margin: 0 !important;
    }
    .button > adaptive-ui-icon {
        fill: white;
        margin-left: 10px;
    }
    .wishlist {
        max-height: 170px;
        overflow-y: auto;
    }
    #wishlist-dropdown-menu {
        transform: translateX(-90%);
    }
    .dropdown-content {
        width: max-content;
        padding: 0 5px;
    }
    .image {
        border: 1px solid var(--link);
        margin: auto !important;
    }
    .image img {
        height: 100% !important;
    }
    @media screen and (max-width: 500px) {
        #wishlist-dropdown-menu {
            left: -150px !important;
        }
        .columns {
            flex-wrap: nowrap !important;
        }
    }
`;