import {css} from 'lit-element';

export const ShoppingCartBtnStyles = css`
    .cont {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 15px;
        right: 330px;
        z-index: 1500; 
    }
    .modal {
        z-index: 90 !important;
    }
    .modal-content {
        width: 80vw !important;
        overflow-y: hidden !important;
    }
    .dropdown-trigger {
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        cursor: pointer;
    }
    .dropdown-trigger:hover {
        transform: scale(1.05);
    }
    .dropdown-trigger:active {
        transform: scale(0.95);
    }
    .cart-badge {
        position: absolute;
        top: -10px;
        right: -12px;
        width: 20px;
        height: 20px;
        background-color: var(--primary);
        border-radius: 50%;
        color: white;
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 10px;
        font-weight: 500;
        pointer-events: none;
        font-family: var(--family-sans-serif) !important;
        align-items: center;
    }
    .modal-content cart-editor{
        background-color:var(--body-background-color);
    }
    :host{ .modal-content cart-editor .cont-btn{
        background-color:var(--card-background-color) !important;
    }
}
    .close-icon {
        cursor: pointer;
        fill:var(--grey-darker);
    }
    .close-icon:hover {
        fill: var(--primary);
        transform: scale(1.05);
    }
    .button {
        justify-content:center;
        background-color: var(--primary) !important;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }
    .button:hover {
        background-color: var(--primary);
        transform: scale(1.05);
    }
  
    .button:active, .close-icon:active {
        transform: scale(0.95);
    }
    .button > h6 {
        color: white !important;
        margin: 0 !important;
    }
    adaptive-ui-icon{
        fill:var(--grey-darker);
    }
    .button > adaptive-ui-icon {
        fill: white;
        margin-left: 10px;   
    }
    
    .cart{
        min-height:200px !important;
        padding: 5px;
        overflow-y:auto;
    }
    #cart-dropdown-menu {
        transform: translateX(-90%);
    }
    .dropdown-content {
        width: max-content;
        padding: 0 5px;
    }
    .image {
        border: 1px solid var(--primary);
        margin: auto !important;
        max-height:48px;
        max-width:48px;
    }
    .image img {
        height: 100% !important;
        max-height:48px;
        max-width:48px;
    }
    
    .total{
        justify-content: space-between;
        padding: 0 1rem;
    }
  
    @media (min-width:1024px){
        #cart-dropdown-menu{
            position:fixed;      
            left:93%;
            top:35%;
        }
    }
    @media (max-width:768px){
        #cart-dropdown-content{
            width:25rem;
            height:auto;
        }
        .dropdown-trigger{
            bottom:75%;
        }
    }
    @media (max-width: 450px) {
        .cont {
            right: 110px;
        }
    }
    @media screen and (max-width: 781px) {
        .cont {
            right: 117px;
        }
      }
`;
