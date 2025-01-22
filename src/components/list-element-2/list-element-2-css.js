import {css} from 'lit-element';

export const ListElement2Styles = css`
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
        text-align:center;
        display:flex;
        justify-content:center;
        font-size:1.5rem;
    }
    .heading h1{
        background-size:100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        margin-top:.75rem;
        font-size:2.4em !important;
        text-transform: lowercase;
        
    }
    .heading h1 span{
        color:var(--primary-text);
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
        margin-bottom:10px;
        list-style:none;
    }

    h5 {
        margin:0 !important;
    }
    @media(max-width:768px){
        .pointsList{
            padding-left:2%;
        }
        .heading h1{
            font-size:2em !important;
            
        }
    }
    .responsive-image-holder{
        display: flex;
        justify-content: space-evenly;
    }
    .responsive-image {
        width: 50%; /* Ensures the image takes up 100% of its container's width */
        height: auto; /* Maintains aspect ratio */
        max-height: 100%; /* Prevents the image from exceeding the height of its container */
        object-fit: contain; /* Ensures the image fits within the container without being cropped */
      }

    
`;