import { css } from "lit";

export const StepsTimelineStyles=css`
.content{
    padding:.75rem;    
}
.content ul{
    margin-left:0 !important;
    margin-top:0 !important;
}
.steps-container{
    display:flex;
    justify-content: space-between;
    position:relative;
}
.stepCol{
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    text-align:center;
    align-items:center;
}
.step-info{
    height:45px;
    margin-top:.5rem;
}
.step-info h3{
    color: var(--primary);
;
    font-weight:600;
    font-size:.875rem !important;
}
.step-info p{
    color:#ACACAC;
    font-size:.625rem !important;
    font-weight:400;
}

.step-circle{
    border-radius:50%;
    height:25px;
    width:27px;
    z-index:3;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    bottom: 0;
    background-color: #EFF0F6;

}

.step-circle.active{
    background-color:var(--primary);
;
    color:white;
}

.stepCol.inactive .step-circle p{
    color:black !important;
}


.step-circle .icon {
    color:var(--primary);
;
    fill:white;
    z-index:1;
}
.steps-connector {
    position: absolute;
    height: 5px !important;
    background-color: var(--primary);
;
    left:12%;
    min-width: 9rem;
    z-index:0;
}

.inactive .step-circle .icon {
    color:grey;
    
}

.inactive .step-info h3{
    color:grey;
}

.progress-bar{
    position:absolute;
    height:3px;
    background-color:var(--primary);
;
    z-index:0;
    top:50%;

}

.progress-bar.inactive{
    background-color: #EFF0F6 !important;
}

.progress-bar .indicator{
    position:absolute;
    height:100%;
    background: #EFF0F6;
}

.progress-bar.inactive .indicator{
    background-color:grey !important;
}

.columns:last-child{
    margin-bottom:1.5rem !important;
}
.columns:first-child{
    margin-top: 0.25rem !important;
}
/* li:nth-child(5) .progress-bar{
    width:80px;
    /* display:none; 
} */
/* li:last-child{
    overflow:hidden;
} */
li:last-child .progress-bar{
    display:none;
}

/* @media(max-width:768px){
    .steps-container{
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;

    }
    .stepCol{
        flex-direction:row;
        justify-content:flex-start !important;
        text-align:left;
        align-items:flex-start;
    }
    .step-circle{
        margin-left:.35rem;
    }
    .step-info{
        padding-left:1.5rem;
        margin-top:.0 !important;
    }
    .progress-bar{
        transform:rotate(90deg);       
    }
} */
`;