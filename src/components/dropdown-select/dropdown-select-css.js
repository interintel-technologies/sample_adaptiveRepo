import { css } from 'lit-element';
export const DropDownSelectStyles = css`
  :host {
    display: block;
    position: relative;
  }
  .dropdown {
    position: relative;
    display: inline-block;
    width: 100%;
  }
  .dropdown-select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  .dropdown-options {
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    display: ${this.showOptions ? 'block' : 'none'};
    z-index: 1000;
  }
  .dropdown-option {
    padding: 8px;
    cursor: pointer;
  }
  .dropdown-option:hover {
    background-color: #f0f0f0;
  }
  .search-input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
  }
`