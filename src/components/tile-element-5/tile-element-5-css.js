
import { css } from 'lit-element';

export const TileElement5Styles = css`
    .card {
        background: var(--paper);
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        cursor: pointer;
        margin: 20px;
        width: 90%;
    }
    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        border-color:var(--link);
    }
    .active{
        color: var(--primary) !important;
        padding-left:30px;
        transition: .3s ease-in;
    }
    .image-container {
        justify-content: center;
    }
    .is-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h5.active::before {
        content: '';
        display: block;
        height:2px;
        min-width: 25px;
        background-color: var(--primary);
        position: absolute;
        top: 50%;
        left: 0;
        transition: all .3s ease-in;
    }
    img {
        width: 280px;
        object-fit: contain;
        margin-top: 20px;
    }
    h5 {
        width: 70%;
    }

    @media screen and (max-width: 400px) {
        h5 {
            width: 90%;
        }
    }
`;