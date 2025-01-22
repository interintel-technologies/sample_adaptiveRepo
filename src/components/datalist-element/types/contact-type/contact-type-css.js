
import {css} from 'lit-element';

export const ContactTypeStyles = css`
    .basic-info-p1 {
        margin-top: -40px; 
        margin-left: 45px;
    }
    .basic-info-p2 {
        margin-left: 45px;
    }
    .th-basic-info {
        margin-left: -80px;
        padding-top:5px;
    }
    .td-basic-info {
        margin-left: -90px;
    }
    .td-basic-info1 {
        margin-left: -50px;
    }
    .sortbtn{
        margin-left: 20px;
    }
    .th-add-contact{
        margin-left: -20px;
    }
    .items-per{
        margin-left: -130px;
    }
    .pagination-1 {
        margin-left: -50px;
    }
    .list-icon{
        padding-top: 0px;
        padding-bottom: 13px;
        margin-top: 1px;
    }
    .basic-info-icon{
        padding-top: 7px;
        padding-bottom: 0px;
    }
    /* small tablet to big tablets: 1024px*/
    @media only screen and (max-width: 1024px ) {
        .list-icon{
            margin-left: -150px;
        }
        .th-add-contact{
            margin-left: -80px;
        }
        .td-basic-info {
            margin-left: -80px;
        }
        .td-basic-info1 {
            margin-left: -40px;
        }
        .items-per{
            margin-left: -110px;
        }
        .separatore-line {
            display: none;
        }
        .counting-pagination {
            display: block;
        }
        .pagination-1 {
            margin-left: -200px;
        }
    }
    /* small tablet to big tablets: from 768px to 1023px */
    @media only screen and (max-width: 768px ) {
        .list-icon{
            margin-left: -150px;
        }

        .th-add-contact{
            margin-left: -80px;
        }

        .td-basic-info {
            margin-left: -80px;
        }

        .td-basic-info1 {
            margin-left: -40px;
        }

        .items-per{
            margin-left: -110px;
        }
        .separatore-line {
            display: none;
        }
        .counting-pagination {
            display: block;
        }
        .pagination-1 {
            margin-left: -200px;
        }
    }
    /* small tablet to big tablets: from 751px to 1023px */
    @media only screen and (max-width: 751px ) {
        .list-icon{
            margin-left: -150px;
        }
        .th-add-contact{
            margin-left: -80px;
        }
        .td-basic-info {
            margin-left: -80px;
        }
        .td-basic-info1 {
            margin-left: -40px;
        }
        .items-per{
            margin-left: -110px;
        }
        .separatore-line {
            display: none;
        }
        .counting-pagination {
            display: block;
        }
        .pagination-1 {
            margin-left: -200px;
        }
    }

    .active-row {
        background-color: grey; 
        box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03); 
        border-left: 5px solid #419588;  
        border-radius: 3px; 
        margin-bottom: 5px;
    }
    .active-color {
        color: #419588;
    }
    .normal-tr{
        background-color: white; 
        box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03); 
        border-radius: 3px; 
        margin-bottom: 5px;
    }
`;
