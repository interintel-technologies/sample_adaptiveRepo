# Static Dropdown Select

## Description
a dropdown of selectable menu items the list items are pre-loaded in the element payload

supported payload types as a JSON string passed in `defaultValue`

1.  Data 
    
        [
         {"selected": false, "id": "M", "name": "MALE"}, 
         {"selected": false, "id": "F", "name": "FEMALE"}
        ]
       
2. List
   
        [
          ["selected", "id", "name"], 
          [false, "F", "FEMALE"],
          [false, "M", "MALE"]
        ]
   

## Functionality
1.  Provides a list of dropdown items to select	
2.  Renders *List* payload type
3.  Renders *Data* payload type
