import { html, css, LitElement, unsafeCSS } from "lit-element";
import { upcomingAppointmentsStyles } from "./upcoming-appointments-css";
import globalStyles from '../../App.css?raw';

export class upcomingAppointments extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      upcomingAppointmentsStyles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      upcomingAppointmentDates: Array,
      today: Object,
      tomorrow: Object,
      dayAfterTomorrow: Object,
    };
  }

  constructor() {
    super();

    this.upcomingAppointmentDates = [];
    this.createDates();
  }

  firstUpdated() {
    this.loader.then(() => this.createUpcomingAppointmentDates());
  }

  createDates() {
    this.today = new Date();
    this.tomorrow = new Date(this.today);
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.dayAfterTomorrow = new Date(this.tomorrow);
    this.dayAfterTomorrow.setDate(this.dayAfterTomorrow.getDate() + 1);
  }

  createUpcomingAppointmentDates() {
    const todaysAppointments = this.getAppointmentsByDate(this.today);
    const tomorrowsAppointments = this.getAppointmentsByDate(this.tomorrow);
    const dayAfterTomorrowsAppointments = this.getAppointmentsByDate(
      this.dayAfterTomorrow
    );

    this.upcomingAppointmentDates = [
      {
        ["Today: " + this.today.toDateString()]: todaysAppointments,
      },
      {
        ["Tomorrow: " + this.tomorrow.toDateString()]: tomorrowsAppointments,
      },
      {
        ["Day after Tomorrow: " + this.dayAfterTomorrow.toDateString()]:
          dayAfterTomorrowsAppointments,
      },
    ];
  }

  getAppointmentsByDate(date) {
    const timeIndex = this.getIndexByColumnLabel("Time");

    return this.rows
      .filter(
        (row) =>
          new Date(row[timeIndex].from).toDateString() == date.toDateString()
      )
      .map((appointment) => {
        const appointmentTime = appointment[timeIndex];
        const from = this.convertTimeToString(new Date(appointmentTime.from));
        const to = this.convertTimeToString(new Date(appointmentTime.to));

        appointment.splice(timeIndex, 1, `${from} - ${to}`);
        return appointment;
      });
  }

  getIndexByColumnLabel(columnLabel) {
    return this.cols.findIndex((col) => col.label === columnLabel);
  }

  convertTimeToString(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const period = hours < 12 ? "AM" : "PM";

    return hours + ":" + minutes + " " + period;
  }

  static get is() {
    return "upcoming-appointments";
  }

  render() {
    return html`
      <div class="column up-ap">
        <div
          class="is-flex"
          style="padding: 24px 24px 8px 24px; justify-content:space-between"
        >
          <h3 class="title is-4">Upcoming Appointments</h3>
          <a href="${this.e.details.seeAllLink}" target="_blank" class="button"
            >See All</a
          >
        </div>
        <ul class="card-content">
          ${this.upcomingAppointmentDates.map((upcomingAppointmentDate) =>
            Object.keys(upcomingAppointmentDate).map(
              (upcomingAppointmentDateKey) => html`
                <ul class="">
                  <li class="content">
                    <h3>${upcomingAppointmentDateKey}</h3>
                    <hr class="day-break" />
                  </li>
                  ${upcomingAppointmentDate[upcomingAppointmentDateKey].length >
                  0
                    ? upcomingAppointmentDate[upcomingAppointmentDateKey].map(
                        (upcomingAppointment) => html`
                          <li class="appointment is-flex">
                            <div class="columns">
                              ${upcomingAppointment.map(
                                (upcomingAppointmentDetail, index) => html`
                                  <div class="column">
                                    <div class="content">
                                      <h4>${this.cols[index].label}:</h4>
                                      <p>${upcomingAppointmentDetail}</p>
                                    </div>
                                  </div>
                                `
                              )}
                            </div>
                            <button class="button">Cancel/Approve</button>
                          </li>
                          <hr class="appointment-break" />
                        `
                      )
                    : html`<h4>No Appointments</h4>`}
                </ul>
              `
            )
          )}
        </ul>
      </div>
    `;
  }
}

customElements.define(upcomingAppointments.is, upcomingAppointments);
