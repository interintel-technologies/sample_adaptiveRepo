import { css } from 'lit-element';

export const CategoriesGridStyles = css`
    .hero-body {
        position: relative;
        padding: 1.6rem 4rem 1.6rem 4rem !important;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-template-rows: 1fr 1fr;
        column-gap: 20px;
        row-gap: 25px;
        height: 100%;
    }
    .grid-item {
        cursor: pointer;
    }
    .grid-item:hover {
        cursor: pointer;
    }
    .nav {
        position: absolute;
        top: 50%;
        border:1px solid black;
        background-color: white;
        transition: background-color 0.7s ease;
        border-radius:50%;
        cursor: pointer;
    }
    .nav:hover {
        background-color: var(--app-secondary-color);
    }
    #prev {
        left: 20px;
    }
    #next {
        right: 20px;
    }
    adaptive-ui-icon {
        width: 28px;
        height: 28px;
        fill: black;
    }
    .dots-container{
        position: absolute;
        bottom: 10px;
        width: fit-content;
        transform: translateX(50%);
        right: 50%;
    }
    .dot {
        cursor:pointer;
        border-radius: 3px;
        width: 8px;
        height: 8px;
        margin: 0 5px;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.7s ease;
        background-color: #bbb;
    }
    .active, .dot:hover {
        background-color: var(--link);
    }
    img {
        height: 210px;
        width: 100%;
        object-fit: contain;
    }
    @media screen and (max-width: 600px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            overflow-y: auto;
        }
    }
    @media screen and (max-width: 400px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }
    @media screen and (max-width: 300px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
    }
`;