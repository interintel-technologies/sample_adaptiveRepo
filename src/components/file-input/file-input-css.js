import {css} from 'lit-element';

export const FileInputStyles = css`
.input{
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;
}
.file-cta{
    border-color: trnasparent;
}
.file-cta, .file-name{
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-color: transparent;
    padding: 18.5px 30px!important;
    outline: none;
}
.file-input-label{
    font-size: 12px;
    font-weight: 700;
    padding-bottom:8px;
    color: rgb(1, 50, 67);
}
.pro-container{
    margin:16px;
    margin-top:4px;
  }

  #warning{
    display: none;
    position: relative;
    margin-top:4px;
    color:#ff3860 !important;
    font-size:12px;
}
.lbl {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;  
    position: absolute;
    top: -8px;
  }
#divinput{
    background-color: #fff;
    border-radius: 6px;  
    border: 1px solid #ccc;
}
.danger {
    color:#ff3860!important;
}
.success {
    color: #23d160!important;
}
.file-name{
    border: 1px solid var(--input-border-color);
    box-shadow: inset 0 .0625em .125em var(--scheme-invert--5--rgba);
    border-radius: 4px;
    padding-top:9px !important;

}
.file-cta{
    border: 1px solid var(--input-border-color);
}


`;
