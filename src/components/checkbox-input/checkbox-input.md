# CHECKBOX INPUT

![CHECKBOX INPUT](https://i.postimg.cc/MHNqbcQy/Screenshot-2023-01-04-200415.png)

## Description

A checkbox input that by default can be loaded already checked and still operate as a normAl checkbox input and can either submit an ID value set in the `defaultValue` property or submit `true` or `false`.

## Configuration

1. **To initialize it as CHECKED** -  the defaultValue to needs to be a JSON String with the key `checked` and the value a boolean of `true` or string `'true'`e.g `'{"checked":true}'` or `'{"checked":false}'` but the **checked property is set to false by default**
2. **SET ID** -  defaultValue to needs to be a JSON String with the key `id` and the value a string of the desired id.e.g `'{"id":"subscription_1"}'`
3. **DEFAULT VALUE FORMAT** - e.g  `'{"id":"checkboxId_1","checked":true}'`

## Structure

1. SerializableElement

### Mixins

- UtilsMixin

### Core

a basic input type checkbox

## Functionality

1. If checkbox is checked and ID was set in the defaultValue **it will not submit true but submit the set ID**
2. If checkbox is checked and ID was not  set in the defaultValue it submits **true**
3. If checkbox is not checked and ID was set in the defaultValue **it will not submit false but submit the set ID**
4. If checkbox is not checked and ID was not set in the defaultValue **it will  submit false**
