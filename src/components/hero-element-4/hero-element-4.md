# HERO ELEMENT 4

![Hero Element 4](https://i.postimg.cc/FHwTsKFD/Screenshot-2022-09-06-143645.png)

## Description

Used on a landing page, displaying a showcase image, title text, description text and a button that has a link to a destination.
The

## Configuration

1. *IMAGE* - path of the image is contained/should be placed in the  `details` object with the key `hero_image_src` and the value to be the path. e.g `"hero_image_src":"src/themes/dsv1.0/img/isometic/hero-2.svg"`
2. *TITLE* - contained in `name`/`page input` e.g `'Welcome to InterIntel'`
*DESCRIPTION* - contained in `defaultValue` e.g `'The future is now'`
3. *BUTTON PATH* - contained in the `details` object with the key `path`and the value to be the url/link to the destination. e.g `"path":"https//mipay.cash"`
4. *BUTTON TITLE* - contained in the `details` object with the key `button_title`and the value to be the title you want to be displayed on the button. e.g `"button_title":"Get Started"`

## Structure

1. *BaseElement*

### Functionality

1. The button when clicked should redirect the user to a destination url.
