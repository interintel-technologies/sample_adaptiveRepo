import { css } from 'lit-element';

export const FaqElementStyles = css`
    li {
        list-style: none;
    }
    .far {
        cursor: pointer;
        margin: 0px 7px;
    }
    .card {
        background-color: var(--paper);
        border-radius: 0.25rem;
        box-shadow: 0 .5em 1em -0.125em var(--scheme-invert--10--rgba), 0 0 0 1px var(--scheme-invert--2--rgba);
        max-width: 100%;
        position: relative;
    }
    .card {
        margin-bottom:10px;
        padding:5px 10px;
        border-radius:6px;
    }
    .card-header {
        cursor: pointer;
        box-shadow:none;
    }
    .card-content {
        max-height: 0;
        overflow: hidden;
        padding:1.2px 1.5rem;
        transition: max-height 0.3s ease-out;
    }
    .card-header-title {
        margin: 0 !important;
    }
    .far {
        cursor: pointer;
        margin:0 7px;
    }
    .far:hover {
        cursor: pointer;
        margin:0 7px;
    }
    .far:active {
        transform: scale(0.9);
    }
    .tabs a {
        border-bottom-width: 3px !important;
    }
    .tabs a:hover {
        border-bottom-color: var(--primary) !important;
        color: var(--primary) !important;
    }
    .tabs li.is-active a {
        border-bottom-color: var(--link) !important;
        color: var(--link) !important;
    }
    .arrow-icon {
        transform: rotate(0deg);
        transition: transform 0.3s ease-out;
        width: 30px !important;
        height: 30px !important;
        cursor: pointer;
    }
    .rotate-icon {
        transform:rotate(180deg);
    }
    .level {
        margin-top:27px;
        margin-bottom:13px;
    }
    .helpful {
        opacity:0.6;
    }
    .label {
        font-size: 12px;
        font-weight: 700;
        width: 100%;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        padding-bottom: 10px;
    }
`;