
import {css} from 'lit-element';

export const StepsProgressStyles = css`
    .container {
        display:flex;
        flex-direction:row;
        width:100%;
        padding:16px;
        justify-content:center;
    }
    .steps-progress {
        display:flex;
        justify-content:center;
        width:100%;
        position:relative;
    }
    .step-container {
        display:flex;
        flex-direction:column;
        align-items:center;
        height:fit-content;
    }
    .step-circle {
        display:flex;
        width:30px;
        height:30px;
        border-radius:50%;
        justify-content:center;
        background-color:var(--md-sys-color-onBackground);
        z-index:2;
    }
    .step-number {
        color:white;
        align-self:center;
        margin: 0 !important;
    }
    .step-text {
        text-align:center;
    }
    .steps-connector {
        margin-top:15px;
        position: absolute;
        right: 0;
        height:1px;
        background-color:var(--primary);
    }
    .active {
        background-color: var(--primary);
    }
    .inactive {
        background-color:#bebebe;
    }
    @media screen and (max-width: 414px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 375px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 360px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 320px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
`;