# SHARE BUTTON

![Share Button](https://i.postimg.cc/Jz6F62dS/sharebtn.png)

## Description

This button invokes the native sharing mechanism of the device to share data such as text, URLs, or files. The available share targets depend on the device, but might include the clipboard, contacts and email applications, websites, bluetooth, etc.

## Configuration

1. *TITLE* - set in the details object as an object with a key of `title` and the value being a string. E.g `"title":"InterIntel"`.
2. *TEXT* - set in the details object as an object with a key of `text` and the value being a string. E.g `"text":"Welcome to InterIntel"`.
3. *URL* - set in the details object as an object with a key of `url` and the value being a string. E.g `"url":"https://interintel.co.ke/#/0/0"`.
4. *FILES* - set in the details object as an object with a key of `files` and the value being an array of File Objects. E.g `"files":[]`.
