import{i as d,h as p,r as h,g as u,k as o,a as c,j as n}from"./index-C2PWchud.js";import{w as m}from"./datasource-mixin-DMQBE4lo.js";const v=d`
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
`;class r extends p{static get styles(){return[h(u),v,d`
                :host {
                    display: block;
                }
            `]}static get properties(){return{staffRoles:{type:Array},roles:{type:Array},rows:{type:Array},cols:{type:Array}}}constructor(){super(),this.staffRoles=[],this.roles=[],this.rows=[],this.cols=[]}firstUpdated(){window.addEventListener("click",s=>this.closeDropdownOnOutsideClick(s))}updated(s){var i;(s.has("rows")||s.has("cols"))&&(this.staffRoles=this.rows.map(t=>Object.fromEntries(t.map((e,a)=>[this.cols[a].label,e]))),this.roles=((i=this.cols.find(t=>t.label==="role"))==null?void 0:i.roles)||[])}selectAllCheckboxChangeHandler(s){const i=s.target;this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(t=>t.checked=i.checked),i.title=i.checked?"Deselect All":"Select All"}staffRoleActionsMenuClickHandler(s){const i=this.shadowRoot.querySelector("#dropdown"+s),t=this.shadowRoot.querySelector("#actionsMenu"+s);this.shadowRoot.querySelectorAll(".dropdown.is-active").forEach(e=>{e.id!=="dropdown"+s&&(e.classList.remove("is-active"),t.classList.remove("is-active"))}),i.classList.toggle("is-active"),t.classList.toggle("is-active")}closeDropdownOnOutsideClick(s){const i=this.shadowRoot.querySelector(".dropdown.is-active");if(i){const t=s.composedPath().find(a=>a.id===i.id),e=Object.values(i.classList).find(a=>a==="is-active");!t&&e==="is-active"&&i.classList.remove("is-active")}}isColumnAnAction(s){var i;return((i=this.cols[s])==null?void 0:i.type)==="href"}onDropdownItemClickHandler(s){this.pl._dialog.apply(this.pl,[s.service,s.params])}onAssignRolesClickHandler(){var i;const s=(i=this.e.details)==null?void 0:i.assignRolesUrl;this.navigatePage(s)}navigatePage(s){s?window.location.href=`${window.location.origin}/${s}`:console.warn("URL isn't set; the value is >",s)}static get is(){return"assign-staff-roles"}render(){return o`
            <div class="content">
                <div class="is-flex top-bar">
                    <button class="button" @click=${this.onAssignRolesClickHandler}>
                        + Assign Roles
                    </button>
                </div>
                ${this.staffRoles.length?o`
                    <div class="columns hdr">
                        <div class="column is-1">
                            <input type="checkbox" id="selectAllCheckbox" title="Select All" @change=${this.selectAllCheckboxChangeHandler} />
                        </div>
                        <div class="column is-3">
                            <h5>Staff</h5>
                        </div>
                        <div class="column is-3">
                            <h5>Role</h5>
                        </div>
                        <div class="column is-3">
                            <h5>Status</h5>
                        </div>
                    </div>
                    ${this.staffRoles.map(s=>o`
                        <div class="columns">
                            <div class="column is-1">
                                <input type="checkbox" id="checkbox${s.id}" name="${s.staff}" />
                            </div>
                            <div class="column is-3">
                                <h5 class="mobile-label">Staff:&emsp;</h5>
                                <h5>${s.staff}</h5>
                            </div>
                            <div class="column is-3">
                                <h5 class="mobile-label">Role:&emsp;</h5>
                                <div class="select">
                                    <select>
                                        ${this.roles.map(i=>o`
                                            <option ?selected=${s.role===i}>${i}</option>
                                        `)}
                                    </select>
                                </div>
                            </div>
                            <div class="column is-3">
                                <h5 class="mobile-label">Status:&emsp;</h5>
                                <div class="is-flex">
                                    <span style="background-color: ${s.status==="Active"?"green":"grey"};" class="dot"></span>
                                    <h5 style="color: ${s.status==="Active"?"green":"grey"};">${s.status}</h5>
                                </div>
                            </div>
                            <div class="column is-1 is-flex is-offset-1" style="justify-content: flex-end;">
                                <div id="dropdown${s.id}" class="dropdown">
                                    <div class="dropdown-trigger" @click=${()=>this.staffRoleActionsMenuClickHandler(s.id)}>
                                        <span class="icon">
                                            <adaptive-ui-icon id="actionsMenu${s.id}" title="Actions" icon="menu"></adaptive-ui-icon>
                                        </span>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div id="wishlist-dropdown-content" class="dropdown-content">
                                            ${Object.entries(s).filter((i,t)=>this.isColumnAnAction(t)).map(([i,t])=>[i,JSON.parse(t)]).map(([i,t])=>o`
                                                <div class="dropdown-item" @click=${()=>this.onDropdownItemClickHandler(t)} title=${i}>
                                                    <adaptive-ui-icon icon="${t.icon}"></adaptive-ui-icon>
                                                    <p style="color: ${i==="Remove"?"red":"black"}">${i}</p>
                                                </div>
                                            `)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)}
                `:o`<h4>You have not assigned any roles yet. Click 'add role' button above to assign roles to your staff</h4>`}
            </div>
        `}}customElements.define(r.is,r);const f=({element:l,rows:s,cols:i})=>{const t=c.useRef(null);return c.useEffect(()=>{t.current&&l&&(t.current.e=l,t.current.rows=s,t.current.cols=i)},[l,s,i]),n.jsx(n.Fragment,{children:l&&s&&i?n.jsx("assign-staff-roles",{id:"assign-staff-roles",ref:t}):n.jsx("p",{children:"Loading data..."})})},w=m(f);export{w as default};
