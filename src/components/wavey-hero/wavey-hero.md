# WAVEY HERO ELEMENT 

![WAVEY HERO ELEMENT](https://i.postimg.cc/HWcsZ4xP/wavey-hero.png)

## Description

Used on a landing page, displaying an image, title, description.
## Configuration
1. *TITLE* - contained in `name`/`page input` e.g `'Redefine Your Online Experience'`
2. *DESCRIPTION* - contained in `defaultValue` e.g `'Streamline your business operations and enhance your supply chain with our integrated platform'`
3. *IMAGE* - path of the image is contained/should be placed in the  `details` object with the key `image` and the value to be the path. e.g `"image":"https://i.postimg.cc/TPVtTVxZ/hero-2.png"`.### Functionality
None.
4. *BUTTON* - Optional button that renders when included in the details object with a key of `button` and value of the text to be displayed within the button e.g `"button":"Join us Today"`. Does not render if included.
5. *PATH* - the href link of the above the button. Should be added to the details object e.g `"path":"https://nikobizz.com"`
6. *BLOB* - a boolean set in the details value that determines whether or not the blob at the bottom will be shown e.g `"blob":true` else `"blob":false`