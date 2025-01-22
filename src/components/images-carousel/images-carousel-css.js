import { css } from 'lit-element';

export const ImagesCarouselStyles = css`
    .content {
        position: relative;
        padding-bottom: 50px;
    }
    .columns {
        margin: 0 !important;
    }
    .carousel {
        display: grid;
        column-gap: 30px;
        row-gap: 30px;
    }
    .dots-container{
        position: absolute;
        bottom: 20px;
        width: fit-content;
        transform: translateX(50%);
        right: 50%;
    }
    .dot {
        cursor:pointer;
        border-radius: 3px;
        width: 13px;
        height: 13px;
        margin: 0 5px;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.7s ease;
        background-color: #bbb;
    }
    .active, .dot:hover {
        background-color: var(--link);
    }
    h3, h5, p {
        text-align: center;
    }
    @media screen and (max-width: 800px){ 
        .carousel {
            grid-template-columns: auto !important;
        }
    }
`;
