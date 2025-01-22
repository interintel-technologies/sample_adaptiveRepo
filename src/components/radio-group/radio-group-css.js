import { css } from "lit-element";

export const RadioGroupStyles=css`
   .text-clm {
        padding-left:20px;
    }
    .card {
        align-items: center;
        padding: 10px 10px 10px 30px;
        margin-bottom:1rem;
        border: 1px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    .card:hover {
        transform: scale(1.01);
        box-shadow: 0px 5px 11px 0 var(--input-border-color);
        transition:.5s;
    }
    input {
        appearance: none;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        border: 2px solid var(--grey-darker);
        transition: 0.2s all linear;
        margin-right: 5px;
        cursor:pointer;
    }
    input:checked {
        border: 5px solid var(--link);
    }
`;