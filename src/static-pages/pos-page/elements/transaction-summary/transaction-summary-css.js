import { css } from "lit-element";

export const TransactionSummaryStyles=css`
.content{
    padding:.75rem;
}
h5{
    text-transform:capitalize;
    margin-top:.8888em;
}
ul{
    list-style-type:none !important;
    margin-left:0 !important;
}
.labelCol{
    text-align:left;
    padding-left:6%;
}
.valueCol{
    text-align:right;
    padding-right:6%;
}
.columns{
    background-color:var(--md-sys-color-surfaceContainerLowest);
}
li:nth-child(5) .valueCol h5{
    color:red;
}
li:nth-child(6) .valueCol h5{
    color:var(--info--dark-color);
}
li:hover{
    transform:scaleY(1.03) scaleX(1.01);
    transition:ease-out .5s;
    cursor:pointer;
}
button, ul {
    width: 100%;
}
input {
    border: none;
}
.printBtn{
    border:1px solid var(--link);
    background-color:var(--body-background-color);
    color:var(--link);
    cursor:pointer;
    font-weight:bold;
}
.drawerBtn{
    border:1px solid var(--link);
    background-color:var(--body-background-color);
    color:var(--link);
    cursor:pointer;
    font-weight:bold;
}
.sendCol{
    width: 100%; 
    background-color:var(--body-background-color);
    border-bottom:2px solid var(--input-border-color);
}
::placeholder{
    font-family:var(--family-sans-serif) !important;
}
.sendCol .column{
    padding:0 !important;
}
.sendCol .column .control {
    margin-top:.35rem !important;
}
.sendCol .column .control .input{
    border:none !important;
    background-color:var(--body-background-color) !important;
    box-shadow:none !important;  
    padding-left:0 !important;
}
.sendBtn{
    border:none;
    color:var(--link);
    background-color:var(--body-background-color);
    text-align:right;
    cursor:pointer;
    font-weight:500;
}
.saleBtn{
    border:1px solid var(--link);
    background-color:var(--link);
    color:var(--link--color-invert);
    height:50.6px;
    border-radius:5px;
    cursor:pointer;
    font-weight:bold;
}
`;