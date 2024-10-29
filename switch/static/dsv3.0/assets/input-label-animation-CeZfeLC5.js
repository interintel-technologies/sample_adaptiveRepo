import{i as t}from"./index-C2PWchud.js";const i=t`
.label-animation{
    border: 0; 
    padding: 7px 15px; 
    border: 1px solid #b7b5b5; 
    position: relative; 
}
.label-animation ~ .focus-bg:before,
.label-animation ~ .focus-bg:after{
    content: ""; 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    width: 0; 
    height: 0; 
    background-color: #ededed; 
    transition: 0.3s; 
    z-index: -1;
}
.label-animation:focus ~ .focus-bg:before,
.has-content.label-animation ~ .focus-bg:before{
    transition: 0.3s; 
    width: 50%; 
    left: 0; 
    top: 0; 
    height: 100%;
}
.label-animation ~ .focus-bg:after{
    left: auto; 
    right: 50%; 
    top: auto; 
    bottom: 50%;
}
.label-animation:focus ~ .focus-bg:after,
.has-content.label-animation ~ .focus-bg:after{
    transition: 0.3s; 
    width: 50%; 
    height: 100%; 
    bottom: 0; 
    right: 0;
}
.label-animation ~ label{
    position: relative;
    left: 25px;
    top: -20px; 
    width: 100%;  
    color: #013243; 
    transition: 0.3s; 
    letter-spacing: 0.5px;
    pointer-events: none;

}

`;export{i as I};
