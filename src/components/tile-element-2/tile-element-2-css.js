import {css} from 'lit-element';

export const TileElement2Styles = css`
/* Services Section */
.columns {
    padding:60px;
}
.column{
    position: relative;
}
.ii__tile-head{
    display: flex;
    width:32%;
    align-items: center;
    margin:5px;
}
.ii__tile-body {
    width:68%;
}
.ii__tile-head img{
    object-fit: contain;
}

img {
    object-fit: cover;  
}
.ii__section{
    padding-top: 80px;
    padding-bottom: 80px;
}
.ii__title-contaner{
    margin-bottom: 86px;
}
.ii__tile{
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    color: var(--grey-darker    );
    min-height:240px;
    padding: 20px 10px 20px 10px;
    background-color: var(--paper);
    height: auto;
}
.ii__tile:hover{
    width: 100%;
    transform: scale(1);
    box-shadow: var(--mui-shadows-3);
    transition:.3s ease-in-out;
}
.ii__title-small{
    margin-top: 10px;
    margin-bottom: 10px;
    color: var(--grey-darker);
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;
    font-weight: 600;
    letter-spacing: 0.15px;
}
.row-reverse {
    flex-direction:row-reverse;
}
.ii__s-imge{
    width: 100%;   
    height: 110px;
    margin-bottom: 30px;
    position: relative;
}
.ii__s-imge img{

    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    left: 30%;
    width: 100%;
    height: 100%;
}
.read_more{
    color:var(--info);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .show_less{
    color:var(--info);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .image-column {
      display:flex;
    align-items:center;
  } 
  #center-image {
    object-fit:contain;
  }
  /*animations*/

.animate1{
    opacity:0;
    transform:translateY(40px);
    transition:1s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateY(0px);

}
@media screen and (max-width: 415px){ 

    .columns {
        padding:40px;
    }
}
`;