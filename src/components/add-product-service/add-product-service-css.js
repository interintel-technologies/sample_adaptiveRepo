import { css } from 'lit-element';

export const AddProductServiceStyle = css`
    .column.is-flex {
        flex-direction: column;
    }
    .buttons {
        justify-content:  flex-end;
       
    }
   .buttons .button{
        border-radius:10px !important; 
        padding-right:3rem !important;
        padding-left:3rem !important;
        font-weight:700 !important;
   }
 #addLineBtn{
        background-color:var(--primary);
    
   }
  
    #total {
        text-align: end;
        color:var(--grey) !important;
    }
    #subtotal{
        color:var(--grey) !important;
    }
    #deleteBtn{
        color:#FF0000 !important;
    }
    #warning-text{
        display:none;
    }
    h4 {
        margin: 0 !important;
    }
    .line {
        padding-right: 20px;
        position: relative;
        border:1px solid var(--grey-dark);
        border-radius:10px;
        margin-top:1.5rem !important;
        margin-left:1rem !important;
        margin-right:1rem !important;
    }
    .mainCol{
        padding:0 0 3rem 0;
    }
    .line:hover>.fas {
        display: block;
    }
    .columns {
        overflow-x: hidden
        /* border-top: 1px solid var(--grey-dark); */
    }
   

    .icon {
        cursor: pointer;
    }
    h6 {
        margin: 0 !important;
    }
  
   

    .totalDiv{
        padding-top:3rem;
        border-top:1px solid black;
        margin-right:2rem;
        margin-left:2rem;
    }
    @media(min-width:768px){
        .subtotalCol{
            margin-top:2rem;
        }
    }
    @media(max-width:768px){
        .line{
            margin-right:0 !important;
            margin-left:0 !important;
        }
        .buttons{
            padding-right:.75rem !important;
        }
        .totalDiv{
            padding-right:.75rem !important;
            margin-right:.75rem;
            margin-left:.75rem;
        }
    }
`