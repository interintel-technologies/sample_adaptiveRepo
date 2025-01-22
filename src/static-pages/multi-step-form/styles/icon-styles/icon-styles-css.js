
import { css } from 'lit-element';

export const IconStyles = css`

    adaptive-ui-icon {
        fill: var(--grey-dark);
    }
    .icon.has-text-primary > adaptive-ui-icon {
        fill: var(--primary);
    }
    .icon.has-text-link > adaptive-ui-icon{
        fill: var(--link);
    }
    .icon.has-text-info > adaptive-ui-icon{
        fill: var(--info);
    }
    /* .icon.is-small > adaptive-ui-icon {
        height: 1em;
        width: 1em;
    }
    .icon > adaptive-ui-icon {
        height: 1.33em;
        width: 1.33em;
    }
    .icon.is-medium > adaptive-ui-icon {
        height: 2em;
        width: 2em;
    }
    .icon.is-large > adaptive-ui-icon {
        height: 2.1em;
        width: 2.1em;
    } */
`