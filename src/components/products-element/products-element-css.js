import {css} from 'lit-element';

export const ProductsElementStyles=css`
    .products-element-container{
        border-bottom: 5px solid #808080;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;
    }
    .products-element-container::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 5px;
        background-color: var(--primary);
        transition: width 0.3s ease; /* Add transition property */
    }
    .products-element-container:hover::before {
        width: 100%;
    }
    .img-box {
        height: 100%;
        border-radius: 7px;
        border: 1px solid grey;
    }
    img {
        object-fit: contain;
        height: 100px;
    }
    .color-box {
        border-radius: 7px 0 0 7px;
    }
    .products-element-btn{
        border-color: var(--primary)!important;
        color: var(--primary)!important;
        background-color: var(--primary--light-color) !important;
        border-radius:20px!important;
    }
    /* .cont{
        width: 30.375rem;
    } */
    .pointer{
        position: relative;
        background-color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color: #fff;
        border-radius: 50%;
        top: -55px; 
    }
    .is-flex-direction-row .column .pointer{
        left:103%;
    }
    .pointer::before,
    .pointer::after {
        content: "";
        position: absolute;
        background-color: #D9D9D9; 
        width: 3px; 
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
    .pointer::before {
        top: 60px;
    }
    .pointer::after {
        bottom: 60px;
    }
    @media (max-width: 628px){
        .pointer{
            display: none;
        }
    }
`;