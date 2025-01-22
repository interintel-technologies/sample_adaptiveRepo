# HERO ELEMENT 3

![Hero Element 3](https://i.postimg.cc/v80vDFR6/Screenshot-2022-09-06-115837.png)

## Description

Used on a landing page, displaying a showcase image, title text, description text and a button that has a link to a destination.

## Configuration

1. *IMAGE* - path of the image is contained/should be placed in the  `details` object with the key `hero_image_src` and the value to be the path. e.g `"hero_image_src":"src/themes/dsv1.0/img/isometic/hero-2.svg"`
2. *TITLE* - contained in `name`/`page input` e.g `'Welcome to InterIntel'`
*DESCRIPTION* - contained in `defaultValue` e.g `'The future is now'`
3. *BUTTON PATH* - contained in the `details` object with the key `path`and the value to be the url/link to the destination. e.g `"path":"https//mipay.cash"`
4. *BUTTON TITLE* - contained in the `details` object with the key `button_title`and the value to be the title you want to be displayed on the button. e.g `"button_title":"Get Started"`
5. *MARGIN_TOP* - contained in the `details` object with the key `margin_top` and the value is a string of the margin top to be added to the element e.g `"margin_top":"30px"`

## Structure

1. *BaseElement*

### Functionality

1. The button when clicked should redirect the user to a destination url.
2. *Hide Filter* - the image filter can be hidden through the details object with the key hide_filter and the a boolean value of true e.g `{"hide_filter": true}`
