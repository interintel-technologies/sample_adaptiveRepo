
import { css } from 'lit-element';

export const SummaryChartStyles = css`
.card{
    box-sizing: border-box;
    align-items: center;
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
 
  .tooltip {
    position: absolute;
    opacity:0;
    text-align: center;
    padding: 5px;
    font: 12px sans-serif;
    background: var(--paper);
    border: 0px;
    border-radius: 8px;
    pointer-events: none;
    color:var(--link--color-invert);
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

    .tooltip {
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
`;