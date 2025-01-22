
import { css } from 'lit-element';

export const LineChartStyles = css`
.content{
  padding:.75rem;
}
.card{
    box-sizing: border-box;
    align-items: center;
    padding: 20px;
    gap: 8px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;

    

}
.card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);

}


  .tabs-container{
    width:100%
  }
  .columns {
    width: 100%;
  }
  .tab-content {
    display: block;
  }
  svg {
    width: 100%;
    height: 400px; 
  }
  .tag {
    font-weight: bold;
    min-width:60px;
    margin-left:5px;
    margin-right:3px;
  }
 
 


  @media (max-width: 600px) {
   

    svg {
        width: 100%;
        height: 300px;
    }
    g.svg{
      width: 100%;
    }

    .card {
        padding: 10px;
    }

    .axis text {
        font-size: 10px;
    }


    g.x-axis{
      opacity:0;
      display:none !important;
    }
    g[Attributes Style] {
      transform: translate(58, 20);
  }

  .tab-contents{
      margin-left: 5%;
}

  
}


.legend {
  display: flex;
  justify-content: center;
  cursor: pointer;
  position:relative;
  top:-1rem;
}
.legend-item {
  display: flex;
  align-items: center;
  margin-right: 15px;
  
/* Frame 6 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 6px;
gap: 8px;

width: 119px;
height: 25px;

background: #FFFFFF;
border: 1px dashed #C8C5D1;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.legend-item span {
  display: inline-block;
  width: 26px;
  height: 2px;
  margin-right: 5px;
}
.legend-item p{
  color:#000 !important
}

`;