# TERMS CONDITIONS

![Terms Conditions](https://i.postimg.cc/RVvdpRqt/terms.png)

## Description
a checkbox and text that is configurable but and the end of the text is hard coded "terms and conditions"
in which the terms and conditions text when clicked opens a modal dialog that displays a **logo** the title **Terms and Conditions and the actual text of the terms and conditions**


## Configuration
**Text**
- The text that the user will read is configured from the page input name `this.e.name`  an example is "I have read the following "

**Logo**
- The logo is gotten from the `details` object with the key `logo` for example `{"logo":"https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png"}` 

**Terms and Conditions text**
- The terms and conditions text can be split into two between `defaultValue` and `kind` 
- The first half should be placed in the `defaultValue` while the second half in the `kindValue`. This should only apply when the terms and conditions has more than 10 section/terms thus this struture should be used
- If the terms and conditions text is less than 10 sections then it should be placed in the `defaultValue`


## Structure
**SerializableElement**
### Mixins 
- UtilsMixin



### Functionality
1. if the checkbox is not checked, the input should be invalid
