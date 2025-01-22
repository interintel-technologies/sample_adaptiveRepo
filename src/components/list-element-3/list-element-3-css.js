import {css} from 'lit-element';

export const ListElement3Styles = css`
    /* .card {
        margin:16px;
        padding:16px;
        border-radius:20px;
        border:1px solid var(--input-border-color);
        padding:4.5rem;
        justify-content:center;
        display:grid;
        box-shadow: 4px 0px 4px 0px rgba(217, 213, 236, 0.25) !important;
    }
  
    .ribbon {
        position: relative;
        overflow:hidden;
    }
    .ribbon:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 20px; 
        height: 100%;
        background-color: var(--secondary); 
        box-shadow: 4px 0px 4px 0px var(--scheme-invert--20--rgba);
    }
    .title {
        color: var(--grey-darker) !important;
        font-weight:700 !important;
        font-size:1.75em !important;
        margin-bottom: 0.25rem !important;
    }
    .hdr{
        display:grid;
        justify-content:center;
    }
    hr{
        width:100%;
        border-radius:10px;
        background-color: rgba(217, 213, 236, 1);
        box-shadow: 4px 0px 4px 0px rgba(217, 213, 236, 0.25);
        height:10px;
        margin-top:.25rem !important;
    }
    ul {
        padding-left:5px;
        margin-top:10px;

    }
    li {
        margin-bottom:10px;
        justify-content: space-between
    }
    p{
        font-weight:600 !important;
        font-size:1.35em !important; 
        color: var(--grey-darker) !important;
    }

    @media(max-width:480px){
        .content{
            padding-right: 2rem;
            padding-left: 2rem;
        }
} */
        .content{
            padding-top:2rem !important;
            padding-bottom:2rem !important;
            background:radial-gradient(circle at 1% 10%, var(--primary), transparent 22%),
              radial-gradient(circle at 50% 70%, var(--md-sys-color-onPrimary), transparent 95%),
              radial-gradient(circle at 95% 95%, var(--primary), transparent 22%);
        }
    .card {
        margin:16px;
        padding:16px;
        border-radius:3px;
        display:block;
        padding:2.5rem 1.5rem;

    }
    .color-primary {
        color: var(--primary) !important; /* Replace with your primary color */
        font-weight: bold;
    }
    
    .heading{
        display:flex;
        justify-content:start;
        font-size:36px !important;
        line-height:52px;
    
    }
    .heading h4{
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        margin-top:.75rem;
        text-transform: capitalize;
        margin-left: 4.25rem !important;
        font-weight:400 !important;
        color:var(--black) !important;
       
        
    }
    .heading h1 span{
        color:var(--primary);
    }
    .heading img{
        height:80px;
        object-fit:contain;
    }
    .pointsList{
        display:grid;
        padding-left:7rem;
        margin-top:3rem;
        text-align:left;
        padding-left:6%;
        justify-content: center;
        list-style:circle !important;
    }
    .pointsList li{
        list-style:circle !important;
        list-style-type: circle;
    
    }
    .pointsList li p{
        list-style-type: circle;
        font-size:16px;
    }
    .pointsList img{
        height:30px;
    }
    .title {
        color: var(--primary);
    }
    ul {
        padding-left:5px;
        margin-top:10px;
    }
    li {
        margin-bottom:5px;
        list-style:none;
    }

    h5 {
        margin:0 !important;
    }
    #descDiv{
        margin-top: auto;
        margin-bottom: auto;
    }
    @media(max-width:768px){
        .pointsList{
            padding-left:5%;
        }
        .heading h1{
            font-size:2em !important;
            
        }
        .heading h4{
            margin-left: 2.25rem !important;
        }
    }
    .responsive-image-holder{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .responsive-image {
        width: 90%; /* Ensures the image takes up 100% of its container's width */
        height: auto; /* Maintains aspect ratio */
        max-height: 100%; /* Prevents the image from exceeding the height of its container */
        object-fit: contain; /* Ensures the image fits within the container without being cropped */
      }
      .content li + li {
        margin-top:0 !important;
      }

`;