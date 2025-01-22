/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/

import {css} from 'lit-element';

export const PinpadInputStyles = css`
.pinpad-dropdown{
    position:absolute;
    z-index:9999;
    width: 97.8%;
    background-color: #fff;
    border: 1px solid rgb(183, 181, 181);
    border-radius: 7px;
    padding: 10px;
    display: none;
}
.pin-btn{
    width: 100%;
    border: 2px solid rgb(183, 181, 181);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 15px;
}

.is-danger {
    color: rgb(255, 56, 96)!important;
    border-width: 2px!important;
    border-style: solid!important;
    border-color: rgb(255, 56, 96)!important;
    border-radius: 6px;
    border-image: initial;
    position: relative;
  }
  
  .is-success{
    color: rgb(35, 209, 96)!important;
    border-width: 2px!important;
    border-style: solid!important;
    border-color: rgb(35, 209, 96)!important;
    border-radius: 6px;
    border-image: initial;
    position: relative;
  }
.message-block{
    display:flex;
    justify-content:space-between;
}

.input-counter{
    position: absolute;
    right: 12px;
    top: 60px;
    color:#cecece;
}

@media screen and (max-width: 1024px){ 

    .pinpad-dropdown{ 
        width: 97.4%;
    }

}

@media screen and (max-width: 1081px){ 

    .pinpad-dropdown{ 
        width: 97.5%;
    } 
}

@media screen and (max-width: 1013px){ 

    .pinpad-dropdown{ 
        width: 97.2%;
    } 
}



@media screen and (max-width: 810px){ 

    .pinpad-dropdown{ 
        width: 96.7%;
    } 
}

@media screen and (max-width: 772px){ 

    .pinpad-dropdown{ 
        width: 96.4%;
    } 
}

@media screen and (max-width: 768px){ 

    .pinpad-dropdown{ 
        width: 96%;
    }

}

@media screen and (max-width: 727px){ 

    .pinpad-dropdown{ 
        width: 95.9%;
    } 
}

@media screen and (max-width: 652px){ 

    .pinpad-dropdown{ 
        width: 95.4%;
    } 
}

@media screen and (max-width: 593px){ 

    .pinpad-dropdown{ 
        width: 94.9%;
    } 
}

@media screen and (max-width: 546px){ 

    .pinpad-dropdown{ 
        width: 94.2%;
    } 
}

@media screen and (max-width: 414px){ 

    .pinpad-dropdown{ 
        width: 91%;
    }

}


@media screen and (max-width: 375px){ 

    .pinpad-dropdown{ 
        width: 90%;
    }

}

@media screen and (max-width: 360px){ 

    .pinpad-dropdown{ 
        width: 89.8%;
    }

}

@media screen and (max-width: 320px){ 

    .pinpad-dropdown{ 
        width: 87.9%;
    }

    .the-third{
        margin-left: -5px;
    }

}

`;