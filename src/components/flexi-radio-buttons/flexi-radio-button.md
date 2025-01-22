# Flexi radio button

![Flexi radio button](https://i.postimg.cc/g0h4ZhQ4/Screenshot-from-2023-04-15-17-19-30.png)

**FlexiRadioButtons** is a custom web component that renders a set of radio buttons or checkbox with configurable options.

## Properties

**value**: A string that represents the value of the currently selected radio button.

## Methods

**handleChange(event)**: A callback function that is called when a radio button is changed. It updates the value property to the selected radio button's value.

## Configuration

**FlexiRadioButtons** can be configured by passing in properties as attributes to the component. The supported properties are:

- **details**: An object that contains the configuration details for the radio buttons. The object has the following properties:
  - **orientation**: A string that determines the orientation of the radio buttons. Valid values are '**vertical**(**default**)' and '**horizontal**'.
  - **Type**: property in the details object passed to the FlexiRadioButtons component determines the type of radio button to be rendered. The type can be specified as either 'radio' or 'checkbox', and is set to the value of this.e.details.type in the render method.
  - **options**: An array of objects that define the radio button options. Each object has the following properties:
    - **value**: A string that represents the value of the radio button.
    - **label**: A string that represents the label for the radio button.

## Details

``` json
'{"options": [{ "label": "Male", "value": "male" }, { "label": "Female", "value": "female" }, { "label": "Other", "value": "other" }], "orientation": "horizontal", "type":"radio"}', 
```
