import{i as m,h as d,k as n,a as p,j as i}from"./index-C2PWchud.js";const h=m`
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
`;class c extends d{static get styles(){return[unsafeCSS(globalStyles),h,m`
        :host {
          display: block;
        }
      `]}static get properties(){return{upcomingAppointmentDates:Array,today:Object,tomorrow:Object,dayAfterTomorrow:Object}}constructor(){super(),this.upcomingAppointmentDates=[],this.createDates()}firstUpdated(){this.loader.then(()=>this.createUpcomingAppointmentDates())}createDates(){this.today=new Date,this.tomorrow=new Date(this.today),this.tomorrow.setDate(this.tomorrow.getDate()+1),this.dayAfterTomorrow=new Date(this.tomorrow),this.dayAfterTomorrow.setDate(this.dayAfterTomorrow.getDate()+1)}createUpcomingAppointmentDates(){const t=this.getAppointmentsByDate(this.today),o=this.getAppointmentsByDate(this.tomorrow),e=this.getAppointmentsByDate(this.dayAfterTomorrow);this.upcomingAppointmentDates=[{["Today: "+this.today.toDateString()]:t},{["Tomorrow: "+this.tomorrow.toDateString()]:o},{["Day after Tomorrow: "+this.dayAfterTomorrow.toDateString()]:e}]}getAppointmentsByDate(t){const o=this.getIndexByColumnLabel("Time");return this.rows.filter(e=>new Date(e[o].from).toDateString()==t.toDateString()).map(e=>{const r=e[o],a=this.convertTimeToString(new Date(r.from)),l=this.convertTimeToString(new Date(r.to));return e.splice(o,1,`${a} - ${l}`),e})}getIndexByColumnLabel(t){return this.cols.findIndex(o=>o.label===t)}convertTimeToString(t){const o=t.getHours(),e=t.getMinutes(),r=o<12?"AM":"PM";return o+":"+e+" "+r}static get is(){return"upcoming-appointments"}render(){return n`
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
          ${this.upcomingAppointmentDates.map(t=>Object.keys(t).map(o=>n`
                <ul class="">
                  <li class="content">
                    <h3>${o}</h3>
                    <hr class="day-break" />
                  </li>
                  ${t[o].length>0?t[o].map(e=>n`
                          <li class="appointment is-flex">
                            <div class="columns">
                              ${e.map((r,a)=>n`
                                  <div class="column">
                                    <div class="content">
                                      <h4>${this.cols[a].label}:</h4>
                                      <p>${r}</p>
                                    </div>
                                  </div>
                                `)}
                            </div>
                            <button class="button">Cancel/Approve</button>
                          </li>
                          <hr class="appointment-break" />
                        `):n`<h4>No Appointments</h4>`}
                </ul>
              `))}
        </ul>
      </div>
    `}}customElements.define(c.is,c);const g=({element:s})=>{const t=p.useRef(null);return p.useEffect(()=>{t.current&&s&&(t.current.e=s)},[s]),i.jsx("div",{children:s?i.jsx("upcoming-appointments",{id:"upcoming-appointments",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{g as default};
