import { css } from 'lit-element';

export const AddRolesStyles = css`
    .content {
        position: relative;
    }
    label{
        font-size: 12px !important;
        font-weight: 700 !important;
        width: 100% !important;
        color: rgb(1, 50, 67) !important;
        letter-spacing: 0.5px !important;
    }
    .is-flex {
        align-items: flex-end;
    }
    .icon {
        cursor: pointer;
        transform: translateY(-50%);
        margin-left: 1em;
    }
    .select, select {
        width: 100% !important;
    }
    h1 {
        margin: 0 !important;
        color: white !important;
    }
    option{
        background:var(--paper);
      

    }
`;