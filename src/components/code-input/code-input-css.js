import { css } from "lit-element";

export const CodeInputStyles=css`
    .content{
        display:block;
        justify-content:center;
        text-align:center;
    }
    .digits{
        display:flex;
        justify-content: center;
    }
    .input{
        width:3.75em ;
        height:3.75em;
        font-size:16px;
        text-align:center !important;
        margin-right:5px;
        margin-left:5px;
        border-radius:50%;
        border-color:var(--md-sys-color-surfaceVariant);
        flex-shrink: 0;
    }
    p{
        font-weight:400 !important;
        font-size:14px;
    }
    .resend{
        margin-top:2rem;
    }
    span{
        color:var(--primary);
        cursor:pointer;
    }
    .title{
        font-size:20px !important;
        font-weight:400 !important;
    }

    @media (max-width: 600px) {
       

  .digits .input {
    width: 2.25em; /* Smaller width for smaller screens */
    height: 2.25em; /* Smaller height for smaller screens */
    margin: 5px; /* Adjusts margin for better spacing */
  }
}
`;