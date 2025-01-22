# SECTION ELEMENT

![SECTION ELEMENT](https://i.postimg.cc/QdgD0rvS/section-element-nikobizz.png)

## Description

Used on a landing page, displaying an image, title, description and points.

## Configuration

1. *TITLE* - contained in `name`/`page input` e.g `'Welcome to InterIntel'`
2. *SUBTITLE* - contained in `defaultValue` e.g `'The future is now'`
3. *IMAGE* - path of the image is contained/should be placed in the  `details` object with the key `image` and the value to be the path. e.g `"image":"src/themes/dsv1.0/img/isometic/hero-2.svg"`
4. *DESCRIPTION* - Set in the details object with a key-value object of `description` e.g `'Welcome to Nikobizz, your all inclusive solution for inventory management, point of sale, seamless connections between shopkeepers and distributors, effortless payments, and flexible credit lines. Streamline your business operations and enhance your supply chain with our integrated platform'`. can be ommitted to use `points` list instead
5. *POINTS* - contained in the `details` object with the key `points`and the value is an array of objects . Each Object has a key of `title` with its value being a string and another key of `description` whose value is also a string. e.g `"points":[{"title":"gvvvgvgvgvgv","description":"Est proident adipisicing minim voluptate. Ullamco sint consequat labore eiusmod Lorem incididunt elit deserunt ad in ex commodo velit."},{"title":"gvvvgvgvgvgv","description":"Est proident adipisicing minim voluptate. Ullamco sint consequat labore eiusmod Lorem incididunt elit deserunt ad in ex commodo velit."},{"title":"gvvvgvgvgvgv","description":"Est proident adipisicing minim voluptate. Ullamco sint consequat labore eiusmod Lorem incididunt elit deserunt ad in ex commodo velit."}]`.
6. *IMAGE_POSITION* - The position of the image either: `top || bottom || right || left`. Set in the details object with a key of `imagePosition`. E.g `"imagePosition": "right"`
7. *LIST_STYLE* - The style of the points in the list Set in the details object with a key of `listStyle`. E.g `"listStyle": "circle"`.
8. *LINK* - A button that is a link to a specified page. Set in the details object with a key of `link` and the value being an object. e.g `"link": {"path": "d", "label": "Go to"}`

### Functionality

None.
