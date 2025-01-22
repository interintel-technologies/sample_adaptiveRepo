import {css} from 'lit-element';

export const HorizontalListStyles = css`
   .card{
        box-sizing: border-box;
        align-items: center;
        padding: 20px;
        gap: 8px;
        border-radius: var(--CornerLarge) !important;
        box-shadow:var(--mui-shadows-3) !important;
        background-color:var(--paper);
   }
   .card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);
    color:var(--grey-darker);

}
.card-content{
        height:80%;
        overflow-x:auto;
        overflow-y:auto;

}
adaptive-ui-icon{
    fill:var(--primary);
    stroke:unset;
}
.columns{
    height:100%
}
.column{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    text-align: center;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

/* .card-header-title{
    height: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--black);
    flex: none;
    order: 0;
    flex-grow: 0;
} */

.stretch-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.stretch-content .columns {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
}

.stretch-content .column {
    flex: 1 1 33.3333%;
    box-sizing: border-box;
}


.scroll-container::-webkit-scrollbar {
    height: 5px; 
    width:80%;
}


.scroll-container::-webkit-scrollbar-track {
    background: transparent; 
}


.scroll-container::-webkit-scrollbar-thumb {
    background: var(--primary); 
    border-radius: 5px; 
}


.scroll-container::-webkit-scrollbar-track-piece:horizontal {
    height: 5px; 
}




.scroll-container::-webkit-scrollbar-thumb:hover {
    background: var(--primary); 
}

.image-icon-container{
    display: flex; justify-content: center; align-items: center;
}

a{
    color:var(--mui-shadows-3) !important;
}

.image-icon{

    font-size: 25px;
    border:1px solid var(--md-sys-color-surfaceVariant);
    padding: 20px;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 10px;
    width: 45px;
    height: 45px;
    flex: none;
    order: 0;

}

.action_name{
    font-size:14px !important;
    font-weight:400  !important;
}



`;