
import { css } from 'lit-element';
export const NewItemStyles = css`
    .columns {
        width:fit-content;
        height: fit-content;
        background-color: #202124;
        margin-left:20px;
    }
    .column {
        width: 278px;
        height: 280px;
    }
    .new-item-image {
        object-fit:contain;
    }
    .new-item-tag {
        width: 91px;
        height: 24px;
        border-radius: 0 100px 100px 0;
        margin-top:8.9%;
        background-color:#3d3d3f;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        color: white;
    }
    .new-item-title {
        width: 207px;
        height: 52px;
        margin: 6.5% 0 0 8.9%;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.44;
        color: white;
    }
    .new-item-description {
        width: 207px;
        height: 52px;
        margin: 6.5% 0 0 8.9%;
        font-size: 12px;
        line-height: 1.5;
        color: white;
    }
    .watch-now-button {
        width: 142px;
        height: 38px;
        margin:10.7% 0 14.3% 8.9%;
        font-size: 14px;
        font-weight: bold;
        border-radius: 100px;
        border: 0;
        outline: none;
        background-color: white;
    }
    .watch-now-button:hover {
        color:white;
        background-color: var(--app-secondary-color);
    }
    .watch-now-button:active{
        transform: scale(0.98);
    }
`;