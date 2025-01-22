import { css } from 'lit-element';

export const TopSellingItemsStyles = css`
.card{
    background:var(--paper)
}
    h4, h5 {
        margin-bottom: 0 !important;
    }
    .columns {
        margin: 0 !important;
    }
    .card-header {
        box-shadow: none;
    }
    .card-header-title {
        color: var(--primary) !important;
    }
    .hdr {
        background-color: var(--primary) !important;
    }
    .hdr .column > h4 {
        color: white !important;
    }
    .item {
        margin: 0 !important;
        border-bottom: 1.5px solid #ccc;
    }
    .item > .column, .hdr > .column {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product, .is-6 {
        justify-content: flex-start !important;
    }
    .image {
        margin: 0 !important;
        margin-right: 30px !important;
    }
    .availability-background {
        padding: 3px 20px;
        border-radius: 50px;
    }
    .availability-background > h5 {
        text-align: center;
    }
    .okay-background {
        background: rgba(0, 255, 0, 0.36);
    }
    .warning-background {
        background: rgba(255, 255, 0, 0.36);
    }
    .danger-background {
        background: rgba(255, 0, 0, 0.36);
    }
    @media screen and (max-width: 500px) {
        .hdr {
            display: none !important;
        }
        .image {
            margin: 0 !important;
            margin-right: 15px !important;
        }
        .select:last-child {
            margin-left: 0px;
            margin-top: 7px;
        }
    }
`;