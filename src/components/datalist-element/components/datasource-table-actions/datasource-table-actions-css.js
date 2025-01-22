
import { css } from 'lit-element';

export const DatasourceTableActionsStyles = css`
.dropdown-menu{
    border:1px solid rgba(183,181,181,.5) !important;
    background-color: var(--paper) !important;
}
.MuiDataGrid-menuList {
    background-color: var(--paper) !important;
}
.dropdown-item{
    background-color: var(--paper) !important;
}
.dropdown-item:hover{
    background-color:var(--link);
    color:var(--link--color-invert);
}
@media (max-width: 1023px){
    .dropdown-menu{
        left:5% !important;
    }

}
    @media screen and (max-width: 414px){ 
        :host {
            justify-content: center;
        }
    }
    .dropdown-menu {
        top: -70px !important;
        right: 25px !important;
    }
`;
