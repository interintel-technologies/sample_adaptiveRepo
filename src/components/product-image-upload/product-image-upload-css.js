import { css } from 'lit-element';

export const ProductImageUploadStyles = css`
    #images-column {
        max-height:370px;
        overflow-y:auto;
        border: 1.3px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    .columns {
        flex:1;
        flex-wrap:wrap;
    }
    #columns-container{
        margin:0;
    }
    #button-column {
        flex:1;
        justify-content:center;
        align-items:center;
        width:fit-content;
    }
    .card-header {
        box-shadow: none;
    }
    .card-header-title {
        margin: 0 !important;
    }
    #button-container {
        flex-direction:column;
        max-width:fit-content;
        align-items:center;
    }
    .button {
        background-color: black;
        padding: 20px 35px;
        width:fit-content;
        border: none;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--link);
        transform: scale(1.05);
        border: none !important;
    }
    .button:active {
        transform: scale(0.95);
    }
    .subtitle {
        width:fit-content;
    }
    .show-images-column{
        display:flex;
    }
    .image-item {
        position:relative;
        border: 1.3px solid rgb(183, 181, 181);
        border-radius: 6px;
        justify-content:center;
        height:fit-content;
        margin:17px 4px;
        padding:5px;
    }
    .upload-image {
        object-fit:contain;
        width:100%
    }
    .add-btn {
        position:relative;
        padding: 60px;
        background-color: var(--primary);
    } 
    .add-icon {
        position:absolute;
        width:38px !important;
        height: 38px !important;
        top: 50%;
        transform: translateY(-50%);
        left:50%;
        margin-left:-19px;
        fill: white;
    }
    .remove-icon {
        position:absolute;
        width:34px !important;
        height: 34px !important;
        top: 0;
        left:0;
        margin:-17px 0 0 -17px;
        background-color: white;
        cursor:pointer;
        fill: var(--link);
    }
    .remove-icon:hover {
        fill: var(--primary);
    }
    #file-input {
        display:none;
    }
    .list {
        flex-direction:column;
        box-shadow:none;
    }
    h5 {
        margin-top: 10px !important;
    }
    
    .large-image {
        height:317px;
    }
    .small-image {
        height:135px;
    }

    .title-danger{
        color: #ff2b56;
    }
    .title-success{
        color: #23d160 !important;
    }
    .add-btn-success {
        background-color: #23d160 !important;   
    }
    #warning-text{
        display:none;
    }
    @media screen and (max-width: 550px) {
        #images-column {
            min-width:100%
        }
        .large-image,
        .small-image {
            height:200px;
        }
        .image-item {
            margin:10px;
        }
    }
`;