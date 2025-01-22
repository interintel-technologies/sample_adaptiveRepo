
import {css} from 'lit-element';

export const CommentBoxStyles = css`
    .text-area {
        padding: 16px;
        position: relative;
    } 
    .mytextarea{
        border: 1px solid #b7b5b5;
        outline: 0;
        color: #013243;
        box-shadow: none!important;
        min-height: 150px;
        max-height: 150px;
        padding:5px;
        width: 100%;
        border-radius: 6px;
        border-color: rgb(183, 181, 181);
    }
    #label{
        position: absolute;
        top: 28px;
        left: 40px;
        font-size: 16px;
        width: 100%;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        transition: all 0.3s ease 0s;
    }
    .mytextarea.is-success{
        border: 2px solid #23d160;
        color: #23d160;
    }
    .mytextarea.is-danger{
        border: 2px solid #ff3860;
        color: #ff3860;
    }
    .lbl.is-success{
        color: #23d160!important;
    }
    .lbl.is-danger{
        color: #ff3860!important;
    }
    .icon{
        position: absolute;
        right: 40px;
        bottom: 40px;
        display: none;
    }
    #danger-icon {
        visibility: hidden;
        margin-top: 8px;
    }

    #check-icon {
        visibility: hidden;
        margin-top: 8px;
    }
    #warning-text{
        display:none;
    }
    .counter{
        position: absolute;
        right: 45px;
        bottom: -10px;
        color: #cecece;
        right: 15px;
    }
`;