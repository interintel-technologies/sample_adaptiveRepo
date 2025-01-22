import { css } from 'lit-element';

export const StepsProgress2Styles = css`
    .column {
        overflow-x: auto;
    }
    h6, p {
        text-align: center !important;
    }
    .steps-progress {
        display:flex;
        justify-content:center;
        width:100%;
        margin: 0 !important;
        position:relative;
    }
    .step-container {
        display:flex;
        flex-direction:column;
        align-items:center;
        height:fit-content;
        width: 100%;
        margin: 0!important;
    }
    .time-taken {
        position: absolute;
        top: 30px;
        color: black !important;
        transform: translateX(-50%);
    }
    
    .step-circle {
        display:flex;
        width:40px;
        height:40px;
        border-radius:50%;
        justify-content:center;
        background-color: var(--primary);
        position: relative;
        margin-bottom: 1em;
        z-index:2;
    }
    .steps-connector {
        position: absolute;
        top: 20px;
        height: 5px !important;
        background-color: var(--primary);
        margin: 0 !important;
        transform: translateY(-50%);
        min-width: 300px;
    }
    .step-number {
        color:white;
        align-self:center;
    }
    .in-progress-connector {
        display: flex;
        position: absolute;
        justify-content: space-around;
        top: 20px;
        transform: translateY(-50%);
    }
    .in-progress-circle {
        display: flex;
        width:5px;
        height:5px;
        border-radius:50%;
        background-color: grey;
    }
    .step-text {
        text-align:center;
    }
    
    .active {
        background-color: var(--link);
    }
    .inactive {
        background-color: grey;
    }
    @media screen and (max-width: 414px){ 
        .step-circle {
            width:20px;
            height:20px;
        }
        .steps-connector, .in-progress-connector {
            top:10px;
        }
        .time-taken, p {
            display: none
        }
        
    }
`;
