import { LitElement, html, unsafeCSS } from 'lit-element';
// import globalStyles from '../App.css?raw'


class Snackbar extends LitElement
{
    constructor() {
        super();
      }
    
      static get styles() {
        return [
        // unsafeCSS(globalStyles)
        ];
      }
      render() {
        return html`
<div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-colorError MuiAlert-standardError MuiAlert-standard css-n5w34f-MuiPaper-root-MuiAlert-root" role="alert"><div class="MuiAlert-icon css-1ytlwq5-MuiAlert-icon"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg></div><div class="MuiAlert-message css-1pxa9xg-MuiAlert-message">An error occurred while loading. We are working on the issue.</div></div>
`;
  }
}

customElements.define('snack-bar', Snackbar);

