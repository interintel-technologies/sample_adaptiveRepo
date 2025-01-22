import { css } from 'lit-element';

export const DiscountHeroStyles = css`
    #discountHero {
        background-color: var(--md-sys-color-surfaceContainerLowest);
    }
    .hero-body {
        width: 100%;
        height: 85vh;
    }
    strong {
        color: var(--link);
    }
    .column.is-5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1 {
        text-align: center;
        line-height: 2.5 !important;
    }

`;