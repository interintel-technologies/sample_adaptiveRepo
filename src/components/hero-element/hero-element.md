# HERO ELEMENT

![HERO ELEMENT](https://i.postimg.cc/28tFVx4M/Screenshot-from-2024-01-24-20-27-35.png)

## Description

Used on a landing page, displaying an image, title, description.
It can be configured to have a background image, a link button

## Configuration

1. *TITLE* - contained in `name`/`page input` e.g `'Welcome to InterIntel'`
2. *DESCRIPTION* - contained in `defaultValue` e.g `'The future is now'`
3. *IMAGE* - path of the image is contained/should be placed in the  `details` object with the key `image` and the value to be the path. e.g `"image":"https://i.postimg.cc/TPVtTVxZ/hero-2.png"`.
4. *IMAGE_POSITION* - The position of the image either: `right || left`. Set in the details object with a key of `imagePosition`. E.g `"imagePosition": "right"`
5. *BACKGROUND_IMAGE* - path of the background image is contained/should be placed in the  `details` object with the key `image` and the value to be the path. e.g `"backgroundImage":"https://i.postimg.cc/TPVtTVxZ/hero-2.png"`.
6. *LINK* - A button that is a link to a specified page. Set in the details object with a key of `link` and the value being an object. e.g `"link": {"path": "d", "label": "Go to"}`

### Functionality

None.
