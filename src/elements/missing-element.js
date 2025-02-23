import {LitElement, html} from 'lit-element';


class MissingElement extends LitElement {
  render() {
    return html`
        <style>
            /* CSS rules for your element */
            #content{
                color: #a70a0a;
                font-size: 14px;
            }
            .center{
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .missing-element{
              padding: 10px;
              background: #f8cec6;
              color: #a70a0a;
              padding-left: 30px;
              border-radius: 6px;
            }
        </style>
        
        <!-- shadow DOM for your element -->
        <div id="content" class="missing-element has-text-centered center">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 439.963 439.963" style="enable-background:new 0 0 439.963 439.963; " xml:space="preserve"><g><g>
	<path d="M421.836,134.33c-11.611-27.121-27.172-50.487-46.686-70.089c-19.502-19.604-42.824-35.215-69.948-46.825   C278.088,5.806,249.674,0,219.985,0c-29.692,0-58.101,5.809-85.224,17.416c-27.124,11.61-50.441,27.218-69.949,46.825   C45.303,83.843,29.74,107.209,18.13,134.33C6.521,161.453,0.715,189.958,0.715,219.838c0,29.881,5.806,58.432,17.415,85.648   c11.613,27.223,27.172,50.627,46.682,70.236c19.508,19.605,42.825,35.217,69.949,46.818c27.123,11.615,55.531,17.422,85.224,17.422   c29.693,0,58.103-5.807,85.217-17.422c27.124-11.607,50.446-27.213,69.948-46.818c19.514-19.609,35.074-43.014,46.686-70.236   c11.611-27.217,17.412-55.768,17.412-85.648C439.244,189.958,433.447,161.453,421.836,134.33z M90.078,305.198   c-16.94-26.066-25.41-54.532-25.406-85.364c0-28.167,6.949-54.243,20.843-78.227c13.891-23.982,32.738-42.919,56.527-56.818   c23.791-13.894,49.772-20.839,77.943-20.839c31.411,0,59.952,8.661,85.652,25.981L90.078,305.198z M363.013,280.511   c-8.187,19.318-19.219,35.927-33.113,49.823c-13.9,13.895-30.409,24.982-49.539,33.254c-19.13,8.277-39.259,12.422-60.382,12.422   c-30.452,0-58.717-8.466-84.794-25.413l215.273-214.985c16.566,25.505,24.838,53.581,24.838,84.223   C375.291,240.965,371.198,261.187,363.013,280.511z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#A70A0A"/>
</g></g> </svg>&nbsp; An error occured loading we are working on the issue</strong></div>`;
  }

  static get is() {
    return 'missing-element';
  }

  // Declare properties for the element's public API
  static get properties() {
    return {
      msg: String,
    };
  }
}


window.customElements.define(MissingElement.is, MissingElement);
