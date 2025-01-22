
import { css } from 'lit-element';

export const PriceCards2Styles = css`
    .columns {
    margin:0 !important;
}
.animate1{
    opacity:0;
    transform:translateY(40px);
    transition:0.7s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateY(0px);
}
.price-tab > h6, h5 {
    margin: 0 !important;
}
.card{
    flex-direction:column;
    padding:10px;
    align-items:center;
    display:flex;
    border: 2px solid var(--primary);
    border-radius: 6px;
    min-width: 100%;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
    justify-content: center;
}


.card:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    border-color:var(--link);
}


.check-icon {
    margin-right:20px;
    width:15px !important;
    height: 15px !important;
    fill : var(--primary);
}
.block{
    padding:0 20px;
    align-self:flex-start;
}
.price-content {
    padding:20px;
}

.title{
    font-size: 25px!important;
    padding-bottom: 8px!important;
}
.contents:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.group-summary {
    margin-bottom: 28px!important;
    margin-top: 28px!important;
}

.price {
    text-align: center;
    border-radius: 50%;
    background: transparent;
    transition: all 1s ease 0s;
}

.price p {
    font-size: 29px;
    font-weight: 500;
}
.prices-header {
    max-width: 80%;
    margin-bottom: 50px !important;
    margin: auto;
    cursor: pointer;
}
.price-tab {
    position: relative;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    justify-content: center;
    background-color: #E7E9EB;
    width:100%;
    margin: 0 !important;
}
.active {
    background-color: var(--primary) !important;
}
.subtitle {
    margin: 0 !important;
}
.active h5,.active h6 {
    color: white !important;
}
.active::after{
    content: '';
    display: block;
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid var(--primary) !important;
    position: absolute;
    bottom: -20px;
    transform: scaleX(50%);
}
.price-tab:hover {
    background-color: var(--link);
}
.description {
    margin-top: 16px;
    text-align: center;
}

.description p {
    margin-top: 16px;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 8px;
}

.card h5 {
    text-align: center;
    color: var(--primary) !important;
}
.card:hover > h5 {
    color: var(--link) !important;
}
.card > * {
    pointer-events: none;
}
ul {
    margin:10px 0 !important;

}
.button {
    padding: 5px 30px;
    background-color: var(--primary)!important;
    color: white !important;
}
.button:hover {
    color: white !important;
    background-color: var(--link)!important;
}
.item-index {
    display: flex;
    width:35px;
    height:35px;
    margin:16px;
    border-radius:50%;
    background-color:var(--link)!important;
    color: white;
    font-size:24px;
    justify-content: center;
    align-items: center;
}
.item-index:hover {
    background-color:var(--info)!important;
}
#warning-text {
        display:none;
    }

  @media screen and (max-width: 950px){
    .column{
        width: 100%;
        max-width: 100%;
        margin:0 0 .75rem 0;
    }

    .columns{
        display:flex!important;
        flex-direction:column!important;
    }
    
}
hr {
    height: 3px;
    width: 90%;
}
.selected {
    border-color: var(--link);
}

  @media screen and (max-width: 775px){
    .column {
    padding: 7.5px !important;
}
`;