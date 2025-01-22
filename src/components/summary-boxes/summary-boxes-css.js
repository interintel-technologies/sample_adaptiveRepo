import { css } from "lit-element";

export const SummaryBoxesStyles=css`
.content{
    padding:.75em !important;
    width:100%;
}
.content ul {
    list-style-type:circle !important;
    margin-left:0 !important;
    }
.title {
    font-size: 1.4em;
    font-weight: 700 !important;
    padding-bottom: 24px;
    padding-top: 8px;
    padding-left: 3px;
    font-family:var(--family-sans-serif);
    color:var(--grey-dark) !important;
}
.hdr{
    justify-content:center;
    display:flex;
}

.graph{
    justify-content:center;
    display:flex;
}
.graph img{
    object-fit:contain;
 
}

.gridStyle{
    display:grid !important;
}

.cov{
    padding:.75rem;
}
.card{
    /* background-color:var(--paper); */
    border-radius: 20px;
    padding:20px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:.75rem;
    border: 1px solid var(--input-border-color);
    box-shadow: var(--mui-shadows-3);

}
.summary-wrapper:hover{
    animation:BounceUp 0.3s ease-in-out forwards;
}

@keyframes BounceUp{
    0%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(-10px);
        cursor:pointer;
    }
}

.summary-type{
    color:var(--grey-darker) !important;
    font-family:var(--family-sans-serif);
}
.summary-details{
    width: 100%;
   justify-content:center;
   display:grid;
}
.summary-details h1{
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #141821;
}

.summary-details p, .summary-details h1{
    margin: 0;
}
.summary-details p.currency{
    font-size: 12px;
    font-weight: bold;
}
.summary-details p.summary-type{
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--grey-darker);
}
.chart {
    background: var(--card-background-color);
    position: relative;
    border-radius:10px 10px 0 0;
}
.container-group{
    background-color:var(--card-background-color);
}
.column-group{
    background-color:var(--card-background-color);
   border-radius:10px !important;
}
.sumCol{
    box-shadow: var(--mui-shadows-3);
}
@media(max-width:480px){
    .summary-wrapper{
        width:100%;
        margin-right:auto;
        margin-left:auto;
    }
    .summary-content{
        justify-content:flex-start;
    }
    .cov{
        width:87%;
    }
}
`;