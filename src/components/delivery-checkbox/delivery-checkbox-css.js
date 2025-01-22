import { css } from 'lit-element';

export const DeliveryCheckboxStyles = css`
    .label {
        font-size: 12px;
        font-weight: 700;
        width: 100%;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        padding-bottom: 10px;
        position: relative;
        top: -5px;
        user-select: none;
    }
    li {
        justify-content: space-between;
        align-items: center;
        margin-bottom:15px;
    }
    #warning-text {
        display:none;
    }
    .subtitle {
        text-align: center;
    }
    .cont {
        flex:1;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 16px;
        height: 16px;
    }
    .title-success {
        color: #23d160;
    }
    .title-danger {
        color: #ff2b56;
    }
    h6 {
        margin: 0 !important;
    }
    @media screen and (max-width: 440px) {
        .subtitle {
            text-align:end;
        }
        .input-cont {
            justify-content: flex-start;
        }
        .label-cont {
            justify-content: flex-end;
        }
        #last-label{
            flex:4;
        }
    }
`;
