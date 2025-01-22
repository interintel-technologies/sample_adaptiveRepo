import {html,css,unsafeCSS} from 'lit-element';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-card/paper-card';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';
import {IndustriesCategoriesBase,} from '../../base/elements/industries-categories';
import {IndustriesCategoriesStyles} from './industries-categories-css';
import globalStyles from '../../App.css?raw';

class IndustriesCategories extends IndustriesCategoriesBase {
  
  static get styles() {
    return [
      unsafeCSS(globalStyles),
		IndustriesCategoriesStyles,
		css`
			:host {
			display: block;
			}
		`
    ];
  }

  static get properties(){
    return {
      rows: { type: Array },
      e: { type: Object },
      cols: { type: Array },
    }
  }

    
  constructor() {
    super();
  
    this.rows = [];
    this.cols = [];
  }

  render() {
    return html`
        <div class="content">
            <div class="content-wrapper">
              <!-- Industry Section  -->
              <paper-dropdown-menu
                  id="industry-section"
                  label="Industry Section">

                <paper-card horizontal-align="center"
                      slot="dropdown-content"
                      style="width: 100%">

                  <paper-listbox
                      attr-for-selection="pk"
                      @iron-select="${this._onSectionSelected}">
                      ${this._computeSections(this.rows, this.q).map((data) => html`
                        <paper-item .pk="${data[0]}" .next="${data[3]}" >${data[1]} - ${data[2]}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-card>
              </paper-dropdown-menu>
              <small class="info-error" style="display: none;"> Error </small>


              <!-- Industry Division  -->
              <paper-dropdown-menu
                  id="industry-division"
                  label="Industry Division">

                <paper-card horizontal-align="center"
                      slot="dropdown-content"
                      style="width: 100%">

                  <paper-listbox
                      attr-for-selection="pk"
                      @iron-select="${this._onDivisionSelected}">
                      ${this._computeDivisions(this.rows, this.industrySection, this.q).map((data) => html`
                        <paper-item .pk="${data[0]}" .next="${data[3]}">${data[1]} - ${data[2]}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-card>
              </paper-dropdown-menu>
              <small class="info-error" style="display: none;"> Error </small>
              <!-- Industry Division  -->
              <paper-dropdown-menu
                  id="industry-group"
                  label="Industry Group">

                <paper-card horizontal-align="center"
                      slot="dropdown-content"
                      style="width: 100%">

                  <paper-listbox
                      attr-for-selection="pk"
                      @iron-select="${this._onGroupSelected}">
                      ${this._computeGroups(this.rows, this.industrySection, this.industryDivision, this.q).map((data) => html`
                        <paper-item .pk="${data[0]}" .next="${data[3]}">${data[2]}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-card>
              </paper-dropdown-menu>
              <small class="info-error" style="display: none"> Error </small>

              <!-- Industry Division  -->
              <paper-dropdown-menu
                  id="industry-class"
                  label="Industry Class">

                <paper-card horizontal-align="center"
                      slot="dropdown-content"
                      style="width: 100%">

                  <paper-listbox
                      attr-for-selection="pk">
                      ${this._computeClasses(this.rows, this.industrySection, this.industryDivision, this.industryGroup, this.q).map((data) => html`
                      <paper-item .pk="${data[0]}" .next="${data[3]}">${data[2]}</paper-item>
                      `)}

                  </paper-listbox>
                </paper-card>
              </paper-dropdown-menu>
              <small class="info-error" style="display: none;"> Error </small>
            </div>
        </div>`;
  }


  getValue() {
    const industrySection = this.qs('#industry-class').selectedItem;
    if (industrySection) {
      return industrySection.pk;
    }
  }


  valid(Validation) {
    this.shadowRoot.querySelector('.info-error').style.display='none';

    // Revert general text content
    this.shadowRoot.querySelector('.info-error').textContent= 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.info-error').style.display='block';
    if (validation)
    {this.shadowRoot.querySelector('.info-error').textContent= validation;}
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  _computeItemsCount(rows) {
    return rows.length;
  }

  _shouldFilter(items) {
    var b = this._computeItemsCount(items);
    return (b > 10);
  }

  // TODO can be optimized to a single listener with an extra param of what to update
  _onSectionSelected(e) {
    this.industrySection = e.detail.item.pk;
  }

  _onDivisionSelected(e) {
    this.industryDivision = e.detail.item.pk;
  }

  _onGroupSelected(e) {
    this.industryGroup = e.detail.item.pk;
  }

  _computeSections(rows, q) {
    const filtered_items = [];

    for (let i = 0; i < this.rows.length; i++) {
      const item = rows[i];

      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      if (filtered_items.length > 10) {
        break;
      }
    }

    return filtered_items;
  }

  _computeDivisions(data, iS, q) {
    if (!iS) return [];

    const industrySection = this.qs('#industry-section').selectedItem;
    if (!industrySection) return;

    const rows = industrySection.next;

    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];


      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      if (filtered_items.length > 10) {
        break;
      }
    }

    return filtered_items;
  }

  _computeGroups(data, iS, iD, q) {
    if (!iD) return [];

    const industrySection = this.qs('#industry-division').selectedItem;
    if (!industrySection) return;

    const rows = industrySection.next;

    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];


      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      if (filtered_items.length > 10) {
        break;
      }
    }

    return filtered_items;
  }

  _computeClasses(data, iS, iD, iG, q) {
    if (!iG) return [];
    const industrySection = this.qs('#industry-group').selectedItem;
    if (!industrySection) return;

    const rows = industrySection.next;

    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];


      // institution name isn't specified in values
      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      }

      if (filtered_items.length > 10) {
        break;
      }
    }

    return filtered_items;
  }
}

customElements.define(IndustriesCategories.is, IndustriesCategories);
