import { css } from "lit-element";

export const upcomingAppointmentsStyles = css`
  .up-ap {
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  }
  .columns {
    width: 100%;
  }
  .card-content {
    max-height: 70vh;
    overflow-y: auto;
  }
  .day-break {
    background-color: black;
    margin-bottom: 20px !important;
  }
  a {
    background-color: var(--primary) !important;
    color: white !important;
  }
  a:hover {
    background-color: var(--link) !important;
    color: white !important;
  }
  a:active {
    transform: scale(0.95);
    color: white !important;
  }
  .button {
    height: 40px !important;
    box-shadow: none !important;
    border: 2.4px solid var(--primary);
    border-radius: 100px;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  .button:hover {
    border-color: var(--link) !important;
  }
  .button:active {
    transform: scale(0.95);
  }
  .appointment-break {
    margin: 0.7rem 0 !important;
  }
  .columns {
    margin: 0 !important;
  }
  @media screen and (max-width: 430px) {
    .appointment {
      flex-wrap: wrap;
    }
  }
`;
