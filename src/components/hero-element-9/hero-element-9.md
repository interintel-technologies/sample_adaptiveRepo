# HERO ELEMENT 9

## Description

Used on a landing page, displaying a showcase image, title text, subtitle text, paragraph text, and a button that has a link to a destination.

## Configuration

*IMAGE* - path of the image is contained/should be placed in the  `details` object with the key `image` and the value to be the path. e.g `"image":"src/themes/dsv1.0/img/isometic/hero-2.svg"`
*TITLE* - contained in `name`/`page input` e.g `'Welcome to InterIntel'`
*SUBTITLE* - contained in `defaultValue` e.g `'The future is now'`
*PARAGRAPH* - contained in the `details` object with the key `paragraph`and the value to be the text of the paragraph e.g `"paragraph":"Bulk SMS and Bulk Email Service Provider"`
*DESTINATION/PATH* - contained in the `details` object with the key `path`and the value to be the url/link to the destination. e.g `"path":"https//mipay.cash"`
*BUTTON TITLE* - contained in the `details` object with the key `button_title`and the value to be the title you want to be displayed on the button. e.g `"button_title":"Get Started"`

## Structure

**BaseElement**

### Functionality

1. The button when clicked should redirect the user to a destination url.
