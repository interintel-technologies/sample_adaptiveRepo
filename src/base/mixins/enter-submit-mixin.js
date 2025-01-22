export const enterSubmitMixin = (BaseClass) => class extends BaseClass {
  constructor() {
    super();
    // TODO #204 provide an api to make this trigger customizeable by the element
    // this is useful on elements with say more than 1 input
    // and 1 should never cause the submission
    this.addEventListener('keydown', this.handleSubmit);
  }

  /**
   * Submit on Enter Key Press
   * @param {Event} e
   */
  handleSubmit(e) {
    if (e && e.keyCode === 13) {      
      this.submitForm();
    }
  }
};
