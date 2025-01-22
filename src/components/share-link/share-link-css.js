import { css } from 'lit-element';

export const ShareLinkStyles = css`
    .content.is-flex {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: var(--primary);
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .circle:hover {
        background-color: var(--link);
    }
    .circle:active {
        transform: scale(1.05);
    }
    .link-icon {
        fill: white;
        width: 30px;
        height: 30px;
    }
    .modal-background {
        background-color: transparent !important;
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        border: 2.5px solid #ccc;
        border-radius: 7px;
    }
    .link {
        border: 2px solid black;
        border-radius: 7px;
        padding: 7px;
        justify-content: space-between;
        align-items: center;
    }
    .close-icon {
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
    .close-icon:hover {
        fill: var(--link);
    }
    .close-icon:active {
        transform: scale(1.05);
    }
    img {
        width: 60%;
        object-fit: contain;
    }
    .mail-icon {
        width: 60%;
        height: 83%;
    }
    .copy {
        padding: 7px 14px;
        cursor: pointer;
        position: relative;
    }
    .copy > * {
        pointer-events: none;
    }
    .copy-icon {
        color: var(--primary);
    }
    .copy-text {
        color: var(--primary);
    }
    .copy:hover > .copy-text {
        color: var(--link);
    }
    .copy:hover > .copy-icon {
        fill: var(--link);
    }
    .copy:active {
        transform: scale(1.05);
    }
    .tooltip {
        position: absolute;
        top: -10px;
        right: 0;
        opacity: 0;
        transition: opacity 1s;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 12px;
        z-index: 1;
    }
    .show-tooltip {
        opacity: 1;
    }
    a:active {
        transform: scale(1.05);
    }
    .link-text {
        margin: 0;
        overflow: hidden;
    }
`;