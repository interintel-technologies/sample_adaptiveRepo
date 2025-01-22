
import { css } from 'lit-element';

export const DastasourceTable2FooterStyles = css`
  .p-dropdown{
      background-color:var(--input-background-color) !important;
      color:var(--link--color-invert);
  }
  .p-dropdown a:hover{
      background-color:var(--link) !important;
      color:var(--link--color-invert) !important;
  }
  .active-list{
      background-color:var(--link) !important;
      color:var(--link--color-invert) !important;
  }
  .wrapper{
    border-radius:0 0 20px 20px;
    border:2px solid rgba(183,181,181,.5);
    height:60px;
    margin-top:-24px;
    padding:1.5em .75em .75em 1.5em;
    /* width:96%; */
 
  }
  @media(max-width:768px){
    .wrapper{
      /* width:71.9vw; */
    }
  }
  @media(max-width:480px){
    .wrapper{
      /* width:70.8vw; */
    }
  }
`;
