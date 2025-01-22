# Banner Element

`BannerElement` is a custom web component that can be used to display a banner message with an optional cancel icon. It is built using the LitElement library and provides theming support through the ThemeMixin.

## Properties

- `content` (string): Represents the message to display in the banner.
- `visible` (boolean): Indicates whether the banner should be visible or not.
- `showCancel` (boolean): Indicates whether to display a cancel icon or not.
- `type` (string): Specifies the type of banner, such as 'info', 'warning', or 'danger'.

## Usage

To use BannerElement in your application, you can import it using:

```javascript
import 'path/to/BannerElement.js';
```

To display a banner message, you can call the show method:

```javascript
const banner = document.querySelector('banner-element');
banner.show('This is an info message', true, 'info');

```
