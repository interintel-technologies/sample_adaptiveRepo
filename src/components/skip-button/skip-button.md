# SKIP BUTTON
![SKIP BUTTON](https://i.postimg.cc/NMrSWx7X/Screenshot-2024-09-05-160236.png)
## Description
Button that does not valid the current form but calls the element service that it conatins not from the for service.

## Configurations

**BackgroundColor** - To change the button background color done through the details object with the key `"bg_color"` and the value of string of the hex color eg) `"#FFFF"`  full details object ` {"bg_color":"#1dff00"}`
**Tool tip** - to add a tool tip, it is done through the details object with the key `"info"` and the value the text you want placed ge)  ` {"info":"your text here"}`
## Functionality
1. Does service call on the element service
2. The `input_variable_name` and the `defaultValue` of the skip button will be passed/added to the parameters as a key and value respectively 
3. The parameters  will be passed to the current service but if not there will be no parmaters becuase there is no form validations

