import { css } from "lit-element";

export const ProductsExpiryStyles = css`
    .image {
        border: 1px solid var(--primary);
    }
    li {
        border-bottom: 1px solid var(--grey-light);
        list-style: none;
    }
    .cont {
        border: 1px solid var(--grey-light);
    }
    .head {
        border-bottom: 1px solid var(--grey-light);
    }
    @media screen and (max-width: 770px) {
        .head {
            display: none;
        }
    }
`;
