# INFO CTA

## Description
Used to display a title sub-title and a button that redirects a user to a set url

## Configuration
*TITLE* - Gotten from the `page input name` e.g `'InterIntel'`
*SUB TITLE* - contained in `defaultValue` e.g `'The future is now'`
*BUTTON TITLE* - contained in `details` with the key `button_title` and the value to be a string of text to show in the button e.g `{"button_title":"Get Started"}`
*PATH/URL* -  contained in `details` with the key `path` and the value to be a string of url to send the user to e.g `"path":"https:\\mipay.cash"`

## Structure
**SectionPElementDsc**

### Functionality
1. redirect user to the given link.
