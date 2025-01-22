import { css } from "lit-element";

export const StatusDialogStyles=css`

.hdr{
    text-transform:capitalize;
    /* padding:4em 15% .5em 15%; */
    vertical-align:middle;
}
.title{
    margin-top:.5em;
}


.in-progress{
    color:rgb(183, 181, 181) !important;
}
.in-progressBg{
    background-color:rgb(183, 181, 181)!important;
}
.progressIcon{
    justify-content:center;
}

.progressIcon img{
    width:100px;
    height:100px;
}
.return-btn{
    color:var(--link--color-invert) !important;
    text-transform:capitalize;
    font-family:var(--family-sans-serif);
    margin-top:3.5em;
    border-radius:10px 10px 10px 10px;
}
.modal-content{
    width:30rem !important;
    border-radius:24px;
    max-height: calc(-30px + 50vh);
    margin-left:auto;
    margin-right:auto;
    background-color: var(--card-background-color);
}

.modal-card-head{
    justify-content:flex-end !important;
}

.head{
    display:flex;
    justify-content:flex-end;
}

.head .icon{
    cursor:pointer;
}

.statusBtn{
    width:100%;
    margin-top:-40px;
    border-radius:45px;
    font-weight:800;
    font-size:1.2rem;
    margin-top:.5em;
}

.in-progress{
    color:rgb(183, 181, 181) !important;
}

.in-progressBg{
    background-color:rgb(183, 181, 181)!important;
    color:var(--app-primary-color);
}

@media(max-width:768px){
    .modal-content{
        width:22rem !important;
    }
}
`;
