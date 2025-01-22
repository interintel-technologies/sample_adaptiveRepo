# HERO ELEMENT 3

## Description
Used on a landing page, displaying a showcase image, title text, description text and a button that has a link to a destination.
The

## Configuration
*IMAGE* - path of the image is contained/should be placed in the  `details` object with the key `hero_image_src` and the value to be the path. e.g `"hero_image_src":"src/themes/dsv1.0/img/isometic/hero-2.svg"`
*TITLE* - contained in `name`/`page input` e.g `'Welcome to InterIntel'`
*DESCRIPTION* - contained in `defaultValue` e.g `'The future is now'`
*DESTINATION/PATH* - contained in the `details` object with the key `path`and the value to be the url/link to the destination. e.g `"path":"https//mipay.cash"`
*BUTTON TITLE* - contained in the `details` object with the key `button_title`and the value to be the title you want to be displayed on the button. e.g `"button_title":"Get Started"`
*MARGIN_TOP* - contained in the `details` object with the key `margin_top` and the value is a string of the margin top to be added to the element e.g `"margin_top":"30px"`
## Structure
**BaseElement**

### Functionality
1. The button when clicked should redirect the user to a destination url.

