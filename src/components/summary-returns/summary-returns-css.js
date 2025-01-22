import { css } from "lit";

export const SummaryReturnsStyles=css`
.summary-container .summary-card{
    padding: 20px;
    border-radius: 7px;
    border:1px solid rgba(183,181,181,.7);
}
.summary-card:first-child{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.info.info-left{
    width: 70%;
}
.info.info-right{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.summary-flex{
    gap: 20px;
}
.summary-card:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.summary-card:last-child{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.summary-container p.summary-title{
    font-weight: 700;
}
.summary-container p.summary-value{
    font-size: 23px;
}
.summary-container p.summary-comparison{
    font-size: 14px;
}
.summary-footer{
    margin-top: 20px;
}
.summary-flex {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
}

`;