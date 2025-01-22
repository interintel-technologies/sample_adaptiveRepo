import { css } from 'lit-element';

export const SectionElementStyles = css`

span{
  color:var(--primary) !important;
}

  .section-body{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 100%;

  }
.inner-section {
  width: 95%;
  overflow: hidden;
}
    .main-heading2 {
      font-size: 35px !important;
      color: var(--primary-text);
      font-weight: 400 !important;
      margin-bottom: 30px;
      margin-bottom: 0.571em;
      }
      .content h2{
        margin-bottom: 0.1714em  !important;
      }
      .sub-heading2{
        margin-bottom: 30px;
        width:70%;
        font-size: 28px  !important;

    }

    .image {
        width:100%;
        object-fit:contain;
        margin:auto;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .button {
        width: fit-content;
    }
    #textCol{
        padding-left:9rem;
    }
    #textCol p{
      margin-top:20px;
    }
    #imgCol{
      background-color: var(--primary--light-color);
      border-radius: 100px 50px;
      
    }

    @media (max-width: 768px) {
        .inner-section {
            width: 90%;
            margin:0px auto;
        }
      .main-heading2 {
        font-size: 36px !important;
        margin-bottom: 20px;
      }
     
      .sub-heading2{
        font-size: 28px !important;
        margin-bottom: 20px;
        width:100%
    }
    #textCol{
        padding-left:.5rem;
        margin-top:1rem;
    }
    #imgCol{
      width:90%;
    }
    }

    /* Adjust styles for .main-heading on screens with a maximum width of 480px (mobile) */
    @media (max-width: 480px) {
      .main-heading2 {
        font-size: 26px !important;
        margin-bottom: 10px;
      }
      .sub-heading2{
        font-size: 14px !important;
        margin-top: 20px !important;
        margin-bottom: 30px !important;
        width:100%;
        line-height: 24px;

    }
      .hero-body{
        width: 100%;
        margin:0px auto;
    }
    }


`;
