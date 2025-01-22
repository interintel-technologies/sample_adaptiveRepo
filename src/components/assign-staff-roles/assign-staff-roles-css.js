import { css } from 'lit-element';

export const AssignStaffRolesStyles = css`
    .top-bar {
        justify-content: flex-end;
        background-color: var(--link);
        padding: 7px;
    }
    .button p {
        margin: 0 !important;
        color: white !important;
    }
    .columns {
        margin: 0 !important;
    }
    .dropdown-menu {
        top: -50% !important;
        transform: translateX(-110%);
    }
    .mobile-label {
        display: none;
    }
    adaptive-ui-icon {
        fill: var(--link);
        cursor: pointer;
    }
    adaptive-ui-icon:hover {
        fill: var(--primary);
    }
    .active-actions {
        fill: var(--primary);
    }
    .select, select {
        width: 100% !important;
    }
    h5 {
        margin: 0 !important;
    }
    .dot {
        width: 8px;
        height: 8px;
        margin: 0.35rem 7px;
        border-radius: 50%;
    }
    .dropdown-item {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .dropdown-item adaptive-ui-icon {
        margin-right: 10px;
    }
    .dropdown-item:hover {
        background-color: #ccc;
    }
    .dropdown-item:hover > adaptive-ui-icon {
        fill: var(--primary);
    }
    @media screen and (max-width: 770px) {
        .hdr {
            display: none;
        }
        .columns .column {
            display: flex;
            justify-content: flex-start !important;
        }
        .columns {
            border-bottom: 1px solid #ccc;
        }
        .columns:last-child {
            border-bottom: none;
        }
        .mobile-label{
            display: block;
        }
        .dropdown-menu {
            top: -50% !important;
            transform: translateX(40%);
        }
    }
`;