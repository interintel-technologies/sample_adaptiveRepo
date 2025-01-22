# INFO CTA 

![Info Cta ](https://i.postimg.cc/2SCHQGz0/Screenshot-2022-09-08-143010.png)

## Description

Used to display a title sub-title and a button that redirects a user to a set url

## Configuration

1. *TITLE* - Gotten from the `page input name` e.g `'InterIntel'`
2. *SUB TITLE* - contained in `defaultValue` e.g `'The future is now'`
3. *BUTTON TITLE* - contained in `details` with the key `button_title` and the value to be a string of text to show in the button e.g `{"button_title":"Get Started"}`
4. *PATH/URL* -  contained in `details` with the key `path` and the value to be a string of url to send the user to e.g `"path":"https://mipay.cash"`.
5. *SCREEN_SHOT* -The phone image that comes fro the details object with a key of `screen_shot`. e.g `"screen_shot":"https://i.postimg.cc/9Qh4vKmt/nena-splash-2.png"`

### Functionality

1. redirect user to the given link.
