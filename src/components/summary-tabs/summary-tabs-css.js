
import { css } from 'lit-element';

export const SummaryTabsStyles = css`
    .columns {
        width: 100%;
        margin: 0 !important;
    }
    .level-item {
        justify-content: left
    }
    h3 {
        margin-top: 0 !important;
    }
    .level:not(:last-child){
        margin-bottom: 0!important;
    }
    .summary_card{
        background-color: var(--paper)!important;
        border-radius: 10px;
   
        height: 100%;
        display: flex;
        align-items: center;
    }
    .icon_cont, adaptive-ui-icon{
        width: 59.63px;
        height: 53.01px;
    }
    .summary_card .icon_cont{
        margin-right: 10px;
    }
    .summary_card .summary-content{
        margin-left: 10px;
    }
    .summary_card .summary-content h4{
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    .summary_card .summary-content > p{
        font-family: Inter;
        font-size: 20px!important;
        font-weight: 700;
        line-height: 39px;
        letter-spacing: 0em;
        text-align: left;
    }
    .icon_cont > adaptive-ui-icon {
        fill: #fff!important;
    }
    .content h4 {
        margin-bottom: 5px;
    }
    .card-content{
        align-items: center;
    }
    .card-content p{
        font-size: 13px;
    }
    @media screen and (max-width: 768px){
        .card-cont {
            width: 47%!important;
            padding: 0.25rem;
        }
        .summary_card .summary-content {
            margin-left: 0px;
        }
        .summary_card {
            justify-content: center;
        }
        .icon_cont, adaptive-ui-icon {
            width: 29.63px;
            height: 53.01px;
        }
        .form-x-container {
            padding: 0;
            border-radius: 19.7px !important;
        }
        .card-content {
            flex-direction: column;
        }
        h4, p {
            text-align: center !important;
        }
    }
`;