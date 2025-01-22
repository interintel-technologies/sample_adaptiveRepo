# PRINT BUTTON

## Description

This button prints PDF, image, and json content.

## Configuration

1. *PRINT_HEADER* - This is the text that will appear on the top of your print out like a header and is set in `page input name` eg `"Product Images"`.
2. *TYPE* - There are 3 types of documents that the element can print : `image`,`pdf`,& `json`. It is set in the details objects with a key of `type` and its value being a one of the types listed. e,g `"type":"json"`.
3. *DATA* - This is the actual content to be printed. It is set in the details objects with a key of `data` and its value being different according to the types listed above. This types are listed below:
    - `image` - a string url for one image or an array of strings urls for multiple images. E.g `"data":""\src/themes/dsv1.0/img/mipay.png"` or `"data",["src/themes/dsv1.0/img/mipay.png","src/themes/dsv1.0/img/mipay.png"]`.
    - `pdf` - a string url. E.g `"data":"src/themes/dsv1.0/img/mipay.png"`.
    - `json` - an JSON object or an array of JSON objects. E.g `"data":"{"name":"NenaSasa","color":"red"}"` or `"data":[{"name":"NenaSasa","color":"red"},{"name":"NenaSasa","color":"red"}]`;
