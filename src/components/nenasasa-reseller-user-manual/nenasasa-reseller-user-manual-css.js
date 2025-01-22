import { css } from 'lit-element';

export const NenaSasaResellerUserManualStyles = css`
    .card {
        margin-bottom:10px;
        padding:5px 10px;
        border-radius:6px;
    }
    .card-header {
        cursor: pointer;
        box-shadow:none;
    }
    .card-content {
        max-height: 0;
        overflow: hidden;
        padding:1.2px 1.5rem;
        transition: max-height 0.3s ease-out;
    }
    .card-header-title, h3, h2 {
        color: var(--primary) !important;
    }
    .card-header-title:hover {
        color: var(--link) !important;
    }
    .card-header:hover > span adaptive-ui-icon {
        fill: var(--link) !important;
    }
    adaptive-ui-icon {
        fill: var(--primary);
    }
    .arrow-icon {
        transform: rotate(0deg);
        transition: transform 0.3s ease-out;
        width: 30px !important;
        height: 30px !important;
        cursor: pointer;
    }
    .rotate-icon {
        transform:rotate(180deg);
    }
    img {
        width: 100%;
        height: 450px;
        object-fit: contain;
    }
    ul, ol {
        margin-top: 0 !important;
    }
    hr {
        background-color: #ccc;
    }
    .card {
        box-shadow: none !important;
        border-radius: 0;
        border-top: 0.7px solid black;
    }
    .card-header h4 {
        margin-bottom: 0 !important;
    }
    li {
        margin-bottom: 10px;
    }
    h3 {
        margin-bottom: 1.3em !important;
    }
    .cards-list {
        margin-left: 0 !important;
        list-style: none !important;
    }
    .cards-list .card:last-child {
        border-bottom: 0.7px solid black;
    }
    @media screen and (max-width: 1023px){
        ul, ol {
            margin-left: 0 !important;
        }
        img {
            height: 100%;
        }
    }
`;