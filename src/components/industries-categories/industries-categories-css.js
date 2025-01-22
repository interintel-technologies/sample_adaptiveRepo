import {css} from 'lit-element';

export const IndustriesCategoriesStyles = css`
[hidden] {
    display: none;
}

.dropdown {
    margin-left: 36px;
}

.content-wrapper {
    width: 41.66667%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    display:grid;
    font-family:'Montserrat'

}
iron-icon, div[suffix] {
    color: hsl(0, 0%, 50%);
    margin-right: 12px;
}
paper-item {
    font-size: 12px;
    color: var(--md-sys-color-onPrimaryContainer);
    background: white;
}

paper-listbox{
    background-color:var(--paper) !important;
}
paper-item{
    background-color:var(--paper) !important;
}

`;
