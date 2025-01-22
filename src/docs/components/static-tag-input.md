#STATIC TAG INPUT

## Description
tag picker and submit, multi-selection of options  
a sample service command that generates the static data is `NOTIFY.notification_template_details`


## Configuration
- the required static content structure in kind is
    ```json
          [
            {
            "id":1,
            "name":"option1",
            "selected":true,
            }
          ]
    ```
    `id` will the submitted value on selection   
    `name` will be the displayed label,  
    if `selected` is true, should initialize selected  

- required, set min>0 or required to True

## Structure
**SerializableElement**

#### getValue
returns the current selected tags joined by comma

### Mixins 
- UtilsMixin

### Core
The selection options are a static json that is passed in the kind column 

### Functionality
1.	When required=False, a tag selection is optional
2.	When required=True, a tag selection is required
