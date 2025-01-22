import { css } from 'lit-element';

export const GeoSearchStyle = css`
.dropdown {
    position: relative;
}

.dropdown-menu {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    display: none;
    z-index: 100;
    background: var(--input-background-color);
    box-shadow: rgba(0, 0, 0, .5)
}

.dropdown.active .dropdown-menu {
    display: block;
}
`