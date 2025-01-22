import {css} from 'lit-element';

export const SectionFront2Styles = css`
    .columns {
        background-color:var(--primary);
    }
    .subtitle {
        text-align:center;
        color:white;
        opacity:0;
        transform:translateY(50%);
    }
    .subtitle-appear-animation {
        opacity:1;
        transform:translateY(0px);
        transition:1.2s all ease-in-out;
    }
`;
