import { css } from "lit-element";

export const RadioGroupStyles = css`
.card{
    box-sizing: border-box;
    padding: 20px;
    gap: 8px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;
    background-color:var(--paper);

}
.card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);

}
.card-header-subtitle{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400 !important;
    padding: 0 1rem;
    cursor:pointer;
}  

h3.label{
       text-align: center;
       }

   

.outlined-input {
    position: relative;
    border:1px solid var(--input-border-color);
    border-radius:20px;
    margin: 2% 0;
    height: 4rem;
    display:flex;
    align-items: center;
}
    

.outlined-input input {
    width:100%;
    border-radius: 5px;
    border: none;
    padding-left: 20px;
    transition: .1s cubic-bezier(.65,.05,.36,1);
    background: var(--white) ;
    outline: var(--white);
    color:var(--black);
    }
    label{
        margin-left:2.5em;
    }
.outlined-input label {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    background-color: var(--white);
    text-align: center;
   transition: .2s cubic-bezier(.65,.05,.36,1);
    pointer-events: none;
    padding: 0 5px;
    text-align:left;
}

.outlined-input input:not(:placeholder-shown) ~ label,
.outlined-input input:focus ~ label {
    top: 0px;
    left: 10px;
    font-size: 75%;
}



.outlined-input input:hover {
    outline: 1px solid var(--main-white);
}

.outlined-input input:focus ~ label {
    color: var(--grey-darker--800--lighten) !important;
    
}

button{
width:100%
}

.is-success{
    border:1px solid#48c78e;
    transition:.3s ease-in-out;
}
    img{
        height: 2.3em;
    }

    #submitBtn{
        background-color:var(--primary);
        color:var(--white-bis);
    }

`;