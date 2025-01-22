export const register = function(ComponentClass) {
  const registerIfThemeIs = 'dsv2.0';

  if (window.THEME===registerIfThemeIs) {
    window.customElements.define(ComponentClass.is, ComponentClass);
  }
};
