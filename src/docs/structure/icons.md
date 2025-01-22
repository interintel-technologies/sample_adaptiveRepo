# Icon system

This provides a way of translating icon names to the respective icons

also provides a way of pluging in new icons



this is done my providing a means of defining new icons into groups that are lazy loaded on demand 


this is achieved through the provision of a single component `adaptive-ui-icon`, that loads icons through it's attributes


## Specifying icons

the `adaptive-ui-icon` can be used to load an icon by setting it's `icon` attribute
the component expects the attribute to be defined in the form `group:name` or `name`

Examples:

1. No Group, Specifying an icon from the default group
To load an `email` icon from the default group
```html
  <adaptive-ui-icon icon="email"></adaptive-ui-icon>
  <!-- or -->
  <adaptive-ui-icon icon="icons:email"></adaptive-ui-icon>
  
  
```
2. Grouped, Specifying an icon from a group
To load an `hospital` icon from the `places` group
```html
  <adaptive-ui-icon name="places:hospital"></adaptive-ui-icon>

```


## Icons definition and lazy loading

icons are defined in svg in the `icons` directory of a theme

icons are grouped by placing icons into the same file, the filename will the group name

the icons directory has a default group called icons, this where none grouped icons are loaded from

an icons file should have an `icons` export that is a map of icon names to svg paths (check the themes icons directory for examples)

