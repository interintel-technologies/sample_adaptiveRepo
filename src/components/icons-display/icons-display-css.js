import { css } from 'lit-element';

export const IconsDisplayStyles = css`
.active{
    display: block!important;
}
.link-active{
    background-color: #b5b5b5;
    color: #292b33!important;
}
.icon{
    width: 3em!important;
    height: 3em!important;
}
.icon-tabs{
    display: none;
}
.bd-docs-nav {
    background-color: #fafafa;
    width: 11.25rem;
    z-index: 40;
}
.bd-cartegories {
    -webkit-overflow-scrolling: touch;
    --height: 1.25;
    max-height: 100vh;
    overflow-y: auto;
    margin-top: 20px;
    position: sticky;
    top: 0;
}
.bd-category-group {
    color: #b5b5b5;
    font-size: .625em;
    font-weight: 600;
    letter-spacing: .2em;
    margin-bottom: calc(var(--docs-side-padding)/ 2);
    margin-top: var(--docs-side-padding);
    text-transform: uppercase;
}
.bd-category-list {
    padding: 0.25em 0.75em 0.75em;
}
.content ul {
    list-style: outside disc;
    margin-left: 0em!important;
    margin-top: 1em;
}
.bd-category-list li {
    align-items: flex-start;
    display: flex;
    font-size: .875em;
    margin-left: 0!important;
}
.content > .icon-cont{
    color: var(--grey-darker);
}
.bd-category-list li a {
    width: 100%;
    align-items: center;
    border-radius: 0.375em;
    color: var(--grey-darker);
    cursor: pointer;
    display: flex;
    line-height: var(--height);
    padding: 0.375em 0.75em;
    transition-duration: 86ms;
    transition-property: background-color,color;
}
.bd-category-list li:hover{
    background-color: #292b33;
    border-radius: 4px;
    color: var(--grey-darker);
}
.bd-category-list li:hover > .bg-cartegory-list li a{
    color: #fff;
}
`;