import { html, css, LitElement,unsafeCSS } from 'lit-element';
import { AssignStaffRolesStyles } from './assign-staff-roles-css';
import globalStyles from '../../App.css?raw';

class AssignStaffRoles extends LitElement {

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            AssignStaffRolesStyles,
            css`
                :host {
                    display: block;
                }
            `
        ];
    }

    static get properties() {
        return {
            staffRoles: { type: Array },
            roles: { type: Array },
            rows: { type: Array },
            cols: { type: Array }
        };
    }

    constructor() {
        super();
        this.staffRoles = [];
        this.roles = [];
        this.rows = [];
        this.cols = [];
    }

    firstUpdated() {
        window.addEventListener("click", e => this.closeDropdownOnOutsideClick(e));
    }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
      

            this.staffRoles = this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])));
            this.roles = this.cols.find(col => col.label === 'role')?.roles || [];

        }
    }

    selectAllCheckboxChangeHandler(e) {
        const checkbox = e.target;
        this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = checkbox.checked);
        checkbox.title = checkbox.checked ? "Deselect All" : "Select All";
    }

    staffRoleActionsMenuClickHandler(id) {
        const dropdown = this.shadowRoot.querySelector("#dropdown" + id);
        const actionsMenu = this.shadowRoot.querySelector("#actionsMenu" + id);
        this.shadowRoot.querySelectorAll(".dropdown.is-active").forEach(dropdown => {
            if (dropdown.id !== "dropdown" + id) {
                dropdown.classList.remove("is-active");
                actionsMenu.classList.remove("is-active");
            }
        });
        dropdown.classList.toggle("is-active");
        actionsMenu.classList.toggle("is-active");
    }

    closeDropdownOnOutsideClick(e) {
        const openDropdown = this.shadowRoot.querySelector(".dropdown.is-active");
        if (openDropdown) {
            const foundObject = e.composedPath().find(o => o.id === openDropdown.id);
            const foundClass = Object.values(openDropdown.classList).find(c => c === "is-active");

            if (!foundObject && foundClass === "is-active") {
                openDropdown.classList.remove('is-active');
            }
        }
    }

    isColumnAnAction(index) {
        return this.cols[index]?.type === 'href';
    }

    onDropdownItemClickHandler(action) {
        this.pl._dialog.apply(this.pl, [action.service, action.params]);
    }

    onAssignRolesClickHandler() {
        const link = this.e.details?.assignRolesUrl;
        this.navigatePage(link);
    }

    navigatePage(link) {
        if (link) {
            window.location.href = `${window.location.origin}/${link}`;
        } else {
            console.warn("URL isn't set; the value is >", link);
        }
    }

    static get is() {
        return 'assign-staff-roles';
    }

    render() {
        return html`
            <div class="content">
                <div class="is-flex top-bar">
                    <button class="button" @click=${this.onAssignRolesClickHandler}>
                        + Assign Roles
                    </button>
                </div>
                ${this.staffRoles.length ? html`
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
                    ${this.staffRoles.map(staffRole => html`
                        <div class="columns">
                            <div class="column is-1">
                                <input type="checkbox" id="checkbox${staffRole.id}" name="${staffRole.staff}" />
                            </div>
                            <div class="column is-3">
                                <h5 class="mobile-label">Staff:&emsp;</h5>
                                <h5>${staffRole.staff}</h5>
                            </div>
                            <div class="column is-3">
                                <h5 class="mobile-label">Role:&emsp;</h5>
                                <div class="select">
                                    <select>
                                        ${this.roles.map(role => html`
                                            <option ?selected=${staffRole.role === role}>${role}</option>
                                        `)}
                                    </select>
                                </div>
                            </div>
                            <div class="column is-3">
                                <h5 class="mobile-label">Status:&emsp;</h5>
                                <div class="is-flex">
                                    <span style="background-color: ${staffRole.status === "Active" ? "green" : "grey"};" class="dot"></span>
                                    <h5 style="color: ${staffRole.status === "Active" ? "green" : "grey"};">${staffRole.status}</h5>
                                </div>
                            </div>
                            <div class="column is-1 is-flex is-offset-1" style="justify-content: flex-end;">
                                <div id="dropdown${staffRole.id}" class="dropdown">
                                    <div class="dropdown-trigger" @click=${() => this.staffRoleActionsMenuClickHandler(staffRole.id)}>
                                        <span class="icon">
                                            <adaptive-ui-icon id="actionsMenu${staffRole.id}" title="Actions" icon="menu"></adaptive-ui-icon>
                                        </span>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div id="wishlist-dropdown-content" class="dropdown-content">
                                            ${Object.entries(staffRole).filter((entries, index) => this.isColumnAnAction(index)).map(([key, value]) => [key, JSON.parse(value)]).map(([key, value]) => html`
                                                <div class="dropdown-item" @click=${() => this.onDropdownItemClickHandler(value)} title=${key}>
                                                    <adaptive-ui-icon icon="${value.icon}"></adaptive-ui-icon>
                                                    <p style="color: ${key === "Remove" ? "red" : "black"}">${key}</p>
                                                </div>
                                            `)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)}
                ` : html`<h4>You have not assigned any roles yet. Click 'add role' button above to assign roles to your staff</h4>`}
            </div>
        `;
    }
}

customElements.define(AssignStaffRoles.is, AssignStaffRoles);
