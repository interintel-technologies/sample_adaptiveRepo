# INFO CTA 3

## Description

This element is used to show case to show a mobile app by having a screen shot of the app, a title, description text and links to install the app both in Google Play and the App Store.

## Configuration

1. *TITLE* - contained from the `page input name` e.g `'InterIntel'`
2. *DESCRIPTION* - This is the description text under the title contained in `defaultValue` e.g `'The future is now'`
3. *SCREEN_SHOT* - This is the source of the screen shot to be displayed in the element. Its is contained in the details object with a key of `"screen_shot":"src/themes/dsv1.0/img/isometic/nena_splash_2.png"`
4. *GOOGLE_PLAY* - This is the path to install the app in the Google Play Store that is contained in `details` with the key `google_play` and the value to be a string of url to send the user to e.g `"google_play":"https:\\mipay.cash"`
5. *APP_STORE* - This is the path to install the app in the App Store that is contained in `details` with the key `app_store` and the value to be a string of url to send the user to e.g `"app_store":"https:\\mipay.cash"`

### Functionality

1. Clicking on the store buttons redirects users to the appropriate app store.
