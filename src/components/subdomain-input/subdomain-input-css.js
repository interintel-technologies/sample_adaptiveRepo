import {css} from 'lit-element';

export const SubdomainInputStyles = css`
    section {
        position: relative;
    }
    .cont {
        border: 1px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    input {
        appearance: none;
        width: 16px;
        height: 16px;
        box-shadow: none !important;
        border: none !important;
    }
    .content {
        background: var(--primary);
      
        margin: 0 !important;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(0px);
        align-items: center;
        -webkit-backdrop-filter: blur(0px);
    }
    h4 {
        margin: 0 10px !important;
    }
    label {
        font-size: 12px;
        font-weight: 700;
        width: 100%;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        padding-bottom: 10px;
        position: absolute;
        top: -15px;
    }
    .lbl-danger{
        color: #ff2b56;
    }
    .cont-danger{
        border: 2px solid #ff2b56;
    }
    .lbl-success{
        color: #23d160 !important;
    }
    .cont-success{
        border: 2px solid #23d160;
    }
    #warning-text {
        display: none;
    }
`;