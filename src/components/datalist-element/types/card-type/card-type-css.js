
import {css} from 'lit-element';

export const CardTypeStyles = css`
    .item {
        display:flex;
        flex-direction:row;
        padding: 20px;
        border-radius: 2px;
        background-color: white;
        border: 1px solid #ddd;
    }
    .item:focus {
        outline: 0;
        border-color: #333;
    }
    .avatar {
        height: 40px;
        width: 40px;
        border-radius: 20px;
        box-sizing: border-box;
        background-color: #DDD;
    }
    .pad {
        padding: 0 16px;
        flex:1;
        flex-basis:0.000001px;
        display:flex;
        flex-direction:column;
    }
    .primary {
        font-size: 16px;
        font-weight: bold;
    }
    .secondary {
        font-size: 14px;
    }
    .dim {
        color: gray;
    }
`;
