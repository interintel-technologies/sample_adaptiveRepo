import {css} from 'lit-element';

export const TileElement4Styles = css`
  .feature-box{
    margin:0px auto;
    width: 60%;
    display: flex;
    flex-direction: row;
  }
  .feature-thumb {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 3em;
    font-family: "Poppins";
   
  }
  .feature-thumb span {
    background: #ffffff;
    border-radius: 50px;
    color: #3f51b5;
    font-size: 25px;
    font-weight: bold;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-bottom: 25px;
    border: 1px solid #3f51b5;
  }
  .feature-thumb h3 {
    font-size: 13px;
    margin: 10px 0;
    position: relative;
  }
  .feature-thumb h3:after {
    content: '';
    display: block;
    height:2px;
    width: 60px;
    background-color:blue;
    position: absolute;
    top: 150%;
    left: 30%;
  }
  .feature-thumb p {
    width:100%;
    text-align: center;
    font-size: 11px;
    margin-top: 25px;
  }
  .content {
    flex-direction: column;
    align-items: center;
  }
  .image {
    width:100px;
    height: 100px;
    object-fit:contain;
  }
  .image-container{
    border-radius: 50%;
    width:150px;
    height: 150px; 
    justify-content:center;
    align-items: center;
    border:2px solid var(--primary);
  }
  .image-container:hover{
    border-color: var(--link);
  }
  hr {
    width: 20%;
    background-color: var(--primary) !important;
    margin: .8rem 0 !important;
  }
  h4 {
    margin-top:10px;
  }
  p{
    text-align: center;
    max-width: 80%;
  }
  .column{
    background:var(--paper)
  }
  .columns {
    margin: 0;
  }
  @media screen and (max-width: 450px) {
      p {
        max-width: 90%;
      }
  }
`