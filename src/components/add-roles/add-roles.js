import { html, css, unsafeCSS } from 'lit-element';
import { AddRolesStyles } from './add-roles-css';
import { AddRolesBase } from '../../base/elements/add-roles';
import '../select-element/select-element'
import globalStyles from '../../App.css?raw';

class AddRoles extends AddRolesBase {
    static get styles() {
        return [
            unsafeCSS(globalStyles),
            AddRolesStyles,
            css`
                :host {
                    display: block;
                }
            `,
        ];
    }

    static get properties() {
        return {
            roles: { type: Array },
            rows: { type: Array },
            cols: { type: Array },
        };
    }

    constructor() {
        super();
        this.roles = [];
        this.value = [];
        this.rows = [];
        this.cols = [];
    }

    updated(changedProperties) {
        if (changedProperties.has('rows') || changedProperties.has('cols')) {
            this.processRoles();
        }
    }

    processRoles() {
        console.log("roles is ",this.rows);
        
        if (this.rows.length && this.cols.length) {
            this.roles = this.rows.map(row => 
                Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue]))
            );
            if (this.roles.length > 0) {
                this.value[0] = this.roles[0].label;
            }
        }
    }

    onRolesSelectChangeHandler(value, index) {
        // Instead of modifying the array directly
        const newValue = [...this.value]; // Create a new shallow copy of the array
        newValue[index] = value; // Modify the desired index in the new array
        this.value = newValue; // Replace the original array with the new one
    }

    onFabClickHandler() {
        if (this.roles.length > 0) {
            this.value = [...this.value, this.roles[0].label]; // Push to a new array
            this.requestUpdate();
        }
    }

    onRemoveInputClickHandler(index) {
        if (index > -1 && index < this.value.length) {
            this.value = this.value.filter((_, i) => i !== index); // Create a new array without the removed item
            this.requestUpdate();
        }
    }

    valid() {
        this.shadowRoot.querySelectorAll('.select').forEach(select => {
            select.classList.remove('is-danger');
            select.classList.add('is-success');

            setTimeout(() => {
                select.classList.remove('is-success');
            }, 1500);
        });
    }

    static get is() {
        return 'add-roles';
    }

    render() {
        return html`
            <div class="content">
                ${this.value.map((value, index) => html`
                    <div class="is-flex">
                        <select-element .name=${this.e.name} .options=${this.roles.map(role => ({ value: role.id, label: role.label }))} @on-change=${e => this.onRolesSelectChangeHandler(e.target.value, index)}></select-element>
                        ${index === 0 ? html`
                            <span class="add-input-icon icon has-text-primary" title="Add Role" @click=${() => this.onFabClickHandler()}>
                            <adaptive-ui-icon .icon=${'icons:add'}></adaptive-ui-icon>

                            </span>
                        ` : html`
                            <span class="remove-input-icon icon has-text-primary" title="Remove Role" @click=${() => this.onRemoveInputClickHandler(index)}>
                            <adaptive-ui-icon .icon=${'icons:remove'}></adaptive-ui-icon>

                           
                            </span>
                        `}
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define(AddRoles.is, AddRoles);
