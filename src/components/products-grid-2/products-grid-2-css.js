import { css } from "lit-element";

export const ProductsGrid2Styles = css`
  .content ul{
    margin-left:0 !important;
    margin-top:0 !important;
  }
  .content h6{
    margin-top: .5em !important;
    margin-bottom: .5em !important;
  }
  .tabs{
    flex-direction:column;
  }
  .card {
    cursor: pointer;
    background-color:var(--body-background-color) !important;
    box-shadow:none;
    border:1px solid var(--input-border-color);
    border-radius:10px;
  }
  hr {
    width: 90%;
    height: 2px;
    margin-left:auto;
    margin-right:auto;
  }
  .level {
    width: 100%;
  }
  .product-image {
    height: 200px;
    width: 100%;
    object-fit: contain;
    border-radius: 6px  6px 6px 6px;
    /* padding:1rem; */
  }
  .badge{
    width:45px;
    height:45px;
    position:absolute;
    background-color:var(--primary);
    color:white;
    font-size:12px;
    font-weight:600;
    text-align:center;
    font-family:var(--family-sans-serif);
    border-radius:0 6px 0 6px;
    right:0;
    justify-content:center;
    visibility:hidden;
  }

  .badge.has-discount{
    visibility:visible;
  }

  .no-discount{
    visibility:hidden;
  }
  
  .size{
    color:var(--grey-darker);
    opacity:0.35;
    font-size: 13px;
  }
  .was-price {
    color:var(--grey-darker);
    opacity: 0.35;
    font-size: 12px;
    margin-left:8px;
  }

  .tabs{
    border: 1px solid var(--input-border-color);
    /* padding-bottom:15px; */
    border-radius:none;
  }
  .tabs ul{
    flex-direction:column;
    display:flex;
  }
  
  .tab {
    padding: 10px;
    margin-right: 0px;
    /* border: 1px solid var(--grey-darker); */
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    cursor: pointer;
    width:100%;
    
  }
  .tab.active{
    background-color: var(--primary);
  }
  .tab:hover {
    background-color: var(--primary);
  }
  .tab:hover  .tab-item p {
    color: white !important;
  }
  .tab-item {
    width: fit-content;
    margin: auto;
    text-transform:capitalize;  
  }
  ul {
    justify-content: center;
  }
  .content > * {
    margin-bottom: 5px !important;
  }
  .active .tab-item h6 {
    color: white !important;
  }
  .is-price {
    color: var(--primary);
    font-size: 12px;
    margin-bottom:0 !important;
    margin-left:0 !important;
  }
  .product-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    width: 100%;
    padding: 10px;
    transition: max-height 0.3s ease-out;
  }
  .level {
    position: relative;
    justify-content: center;
    bottom:2rem;
    margin-left:.5rem !important;
    display:flex;
  }
  .prices {
    justify-content: start;
    margin-left:.5rem !important;
  }
  .tooltip {
    position: absolute;
    bottom: 60px;
    right: 50%;
    transform: translateX(50%);
    opacity: 0;
    transition: opacity 1s;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 7px;
    z-index: 1;
  }
  .show-tooltip {
    opacity: 1;
  }

  .tooltip p {
    color: white;
  }
  .cart-buttons{
    border:2px solid rgb(74, 74, 74,.3);
    border-radius:5px 5px 5px 5px;
    width:90%;
    display:flex;
    background-color:var(--body-background-color);
    position:relative;
    bottom:2.5rem;
    visibility:hidden !important;
  
  }
  .decrease{
    justify-content:center;
    padding:.2rem .75rem .2rem .75rem;
  }
  .decrease .icon i{
      color:var(--primary);
  }
  .amount{
    justify-content:center;
    padding:.3rem .75rem .3rem .75rem;
    
  }
  .increase{
    justify-content:center;
    padding:.2rem .75rem .2rem .75rem;
  }
  .increase .icon i{
      color:var(--primary);
  }
  .icon{
    text-align:center;
    justify-content:center;
  }
  .unit{
    height:38px;
    width:38px;
    background-color:var(--primary);
    border-radius:5px 5px 5px 5px;
    text-align:center;
    justify-content:center;
    position:absolute;
    padding:.55rem .75rem .3rem .75rem;
    color:white;
    top:49%;
    right:5%;
    visibility:hidden;
    font-family:var(--family-sans-serif);
    font-size:14px;
  }
  .plus{
    height:38px;
    width:38px;
    background-color:var(--body-background-color);
    border:2px solid rgb(74, 74, 74,.3);
    border-radius:5px 5px 5px 5px;
    padding-left:.35rem;
    padding-top:.15rem;
    position:absolute;
    top:49%;
    right:5%;
    visibility:hidden !important;
  }
  .plus .icon i{
    color:var(--primary)
  }
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border-width: 3px;
    cursor: pointer;
    border-style: solid;
    border-color: var(--grey-darker);
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .circle:hover {
    border-color: var(--primary);
  }
  .circle:active {
    transform: scale(0.95);
    
  }
  .circle adaptive-ui-icon {
    fill: var(--grey-darker);
    justify-content:center;
    text-align:center;
    color:var(--grey-darker);
  }
 
  .in-cart{
    visibility:visible;
    z-index:4;
  }
  .far {
    color: black;
    transform: translateY(3px);
  }
  .fas {
    color: black;
    transform: translateY(1px);
  }
  .dot {
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin: 0 5px;
    border-radius: 3px 3px 3px 3px;;
    display: inline-block;
    transition: background-color 0.7s ease;
    justify-content:center;
    text-align:center;
    padding-top:6px;
    border: 2px solid var(--grey-darker);
    font-size:13px;
  }
  .active, .dot:hover {
    background-color: var(--primary);
    color:var(--primary--color-invert);
    border: 2px solid var(--primary);
  }
  .navigator {
    display: flex;
    margin: 12px;
    position: absolute;
    right: 0;
  }
  .field {
    justify-content:flex-end !important;
    display:flex;
    margin-right:1.5em;
    margin-bottom:1.5em !important;
  }
  .field input{
    font-family:var(--family-sans-serif) !important;
    border: 2px solid rgb(183, 181, 181);
  }
  .field input span{
    height:100%;
  }
  .field .control .icon i{
    fill: rgb(219, 219, 219);
  }
  ::placeholder{
    font-family:var(--family-sans-serif);
    font-size:13px;
  }
  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 7px;
    width: 1.6rem;
    height: 1.6rem;
  }
  .next adaptive-ui-icon{
    width:28px !important;
    height: 28px !important;
  }
  .products {
    max-height: calc(100vh - 325px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .dots-container {
    text-align: center;
    width: fit-content;
  }
  .overlay{
    display:flex;
    justify-content:center;
    z-index:1;
    position:absolute;
    background-color:rgba(0,0,0,.2);
    /* height:150px; */
    transition:.3s ease-in;
    opacity:0; 
    width:100%;
    /* height:19rem; */
    
  }
  .card:hover  .overlay{
    opacity:1;
  }
  .overlay .icon{
    top:50%;
    transform: translate(0, -50%);
    position:absolute;
    z-index:2;
  }
  .overlay .icon i{
    color:var(--primary);
  }
  #cartBtn{
    margin-left:-25%;
  }
  #viewBtn{
    /* margin-left:15%; */
  }
  .card-content p{
    color:var(--primary);
  }
  .sortCol{
    border-top:1px solid var(--input-border-color);
    border-bottom:1px solid var(--input-border-color);
    padding-left:.75em;
    padding-right:.75em;
    margin-left:.25em;
    margin-right:.25em;
  }
  .sortCol .column{
    cursor:pointer;
  }
  .sortCol .column:not(:first-child){
    text-align:center;
  }
  .selected{
    background-color:hsl(219, 70%, 96%);
    color:var(--primary);
  }
  .sortBtns{
    display:flex;
    justify-content:start;
  }

  #cart-panel{
    border-left:1px solid var(--input-border-color);
  }
  #filterPanel{
    border-right:1px solid var(--input-border-color);
  }
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: var(--primary);
  }
  .slide-in-left {
    animation: slide-in-left 0.3s ease-in-out;
  }
  .slide-out-left {
    animation: slide-out-left 0.3s ease-in-out;
  }

  .slide-in-right {
    animation: slide-in-right 0.3s ease-in-out;
  }
  .slide-out-right {
    animation: slide-out-right 0.3s ease-in-out;
  }

  @keyframes slide-in-left {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes slide-out-left {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%);
    }
  }

  @keyframes slide-out-right {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(50%);
    }
  }

  @keyframes slide-in-right {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .card:hover {
    box-shadow: 0px 1px 3px rgba(183,183,183,.5);
    transform:scaleY(1.03) scaleX(1.02);
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }
  #searchInput3{
    display:none;
  }
  .listView .column{
    display:flex;
    align-items:center;
  }

  .listView .column p{
    color:var(--primary);
  }

  .listView #cartBtn{
    background-color:var(--primary);
    padding:10px 15px 10px 15px;
    border-radius:20px 20px 20px 20px;
    cursor:pointer;
  }

  .listView #cartBtn i{
    color: var(--white) !important;
  }
  
  .listView #viewBtn{
    background-color:var(--primary);
    padding:10px 15px 10px 15px;
    border-radius:20px 20px 20px 20px;
    fill: var(--grey-darker);
    cursor:pointer;
  }

  .listView #viewBtn i{
    color: var(--white) !important;
  }

  .listView .image{
    border:1px solid var(--input-border-color);
    border-radius:10px 10px 10px 10px;
  }
  .image{
    object-fit:contain;
  }

  @media(max-width:768px){
    .tabs{
      border:none !important;
      position:sticky;
    }

    .tabs ul{
    flex-direction:row;
    display:flex;
    overflow-y:hidden;
    }

    .tab{
      padding: 10px;
      margin: 0 10px;
      border: 1px solid var(--grey-darker);
      transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
        0.3s box-shadow,
        0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
      cursor: pointer;
      width:33.33%;
      overflow-x:hidden;
    }
    .unit{
      top:47%;
    }
    .plus{
      top:47%;
    }
    .control{
      transform:translateY(50%) !important;
    }
    #searchInput3{
      display:block;
    }
    #searchInput2{
      display:none !important;
    }
    .overlay{
      opacity:1
    }
   
    #viewBtn{
      margin-left:15%;
    }

    .field{
      margin-bottom:2.5em !important;
    }
    .listView {
      border-bottom: 1px solid var(--input-border-color);
      padding-top: 2.5em;
      padding-bottom: 2.5em;
    }
    #cart-panel{
      border-left:none;
    }
    #filterPanel{
      border-right:none;
    }
  }

  @media (max-width: 550px) {
    .columns .is-multiline {
      max-height: 50vh;
      overflow-y: auto;
    }
    .navigator {
      margin: 0;
      top: -4px;
    }
    .dots-container {
      margin: auto;
    }
  }
  .active a {
    color: white;
  }

  @media(max-width:480px){
    .hero-body{
        max-width:410px;
        justify-content:center;
    }
  }
`;
