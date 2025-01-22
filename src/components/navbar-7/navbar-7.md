# NAVBAR 7

![Navbar 7](https://i.postimg.cc/wTgfPRHf/Screenshot-2022-04-05-111817.png)

## Description

Navbar that is used for landing page of any site template that contains links that will smooth scroll on the same page

## Configuration

1. *LOGO* - path of the logo is contained/should be placed in the  `gateway.logo`. You can place a custom logo either by a url source or by the project directory  `{"logo":"src/themes/dsv1.0/img/isometic/logos/nenasasa_logo1.png"` or `{"logo":"https://your_logo.com"`
2. *CATEGORIES* - Categories used for the search bar are set in the data-source.
3. *DISPLAY_CATEGORIES* - categories displayed next to the all categories dropdown. It is set in the details object with a key of `displayCategories` with its value being an array of strings that match the page group titles. e.g `"displayCategories":["About","Our Portal","Register"]`.
4. *PROFILE_BTN_VISIBILITY* - To make the profile button visible set it in the details object with a key of `login` and the value being boolean. e.g `"login": true`;
5. *VIEW_CART* - This is the button that shows when the shopping-cart-btn element is clicked. The link to view cart is set in the details object with a key of `"view_cart_page"` and the value the string of the page name and element will update the window href  eg `{"view_cart_page":"cart_items"}`
6. *CHECKOUT_PAGE* - This is the button that shows when the shopping-cart-btn element is clicked. The link to check out is set in the details object with a key of `"checkout_page"` and the value the string of the page name and element will update the window href  eg `{"checkout_page":"checkout"}`.

## Data-source payload sample

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
          ["1", "Electronics"],
          ["2", "Fashion"],
          ["3", "Home & Garden"],
          ["4", "Jewelry"],
          ["5", "Sports & Outdoors"],
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "id", "label": "id"},
         {"type": "string", "value": "label", "label": "label"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
}
```
