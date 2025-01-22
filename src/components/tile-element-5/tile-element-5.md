# TILE ELEMENT 5

![TILE ELEMENT 5](https://i.postimg.cc/fTpM4Hnk/tile5.png)

## Description

Displays tiles on the left with a title navigator on the top right and an image below it.

## Configuration

1.Tiles comes from the datasource payload.
2. *IMAGE* - path of the image is contained/should be placed in the  `details` object with the key `image` and the value to be the path. e.g `"image":"src/themes/dsv1.0/img/isometic/hero-2.svg"`


### Data-source payload sample

``` json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         ["1","Voluptate amet cupidatat qui do ex deserunt.", "Nulla laboris exercitation culpa adipisicing cillum consectetur duis nulla consequat ullamco. Occaecat aliqua aliquip labore labore nisi adipisicing ad. Consectetur culpa dolor sint eu fugiat qui voluptate nulla adipisicing eu. Excepteur sint et fugiat do nisi labore. Aliquip officia laboris dolor mollit excepteur do ad anim sunt aliquip non et laborum aliquip. Consectetur nostrud eu ipsum proident non magna consequat occaecat sunt. Cupidatat id amet dolore proident occaecat dolor in sunt officia tempor commodo."],
         ["2","Pariatur aute consectetur proident nulla.", "Eiusmod anim sint aliqua veniam sunt ex mollit aliquip voluptate. Aliqua anim duis ullamco laboris ex consectetur. Exercitation velit eiusmod laborum ipsum consequat nisi qui et adipisicing exercitation incididunt."],
         ["3","Labore dolor esse laboris adipisicing amet culpa.", "Ullamco quis nisi ullamco velit commodo sint. Quis cillum irure nisi irure. Proident culpa incididunt sint ut sit. Exercitation laboris nulla et amet aute elit. Nostrud amet ea nostrud ut ad."],
         ["4","Qui amet quis Lorem aliqua ea proident.", "Incididunt qui amet consequat irure eu. Cillum reprehenderit ut cillum est laborum velit nulla non cillum excepteur Lorem tempor. Aute adipisicing cupidatat esse aliqua aliqua Lorem deserunt nulla amet. Tempor cupidatat laboris reprehenderit esse aliquip est ad quis cupidatat."],
         ["5","Cupidatat eu eu commodo est nisi aute.", "Aute sit aute do sit veniam magna do sint irure nisi. Id elit elit voluptate adipisicing. Cupidatat sunt ullamco in in eiusmod sit qui ex ipsum voluptate. Eiusmod aliquip reprehenderit amet id dolore commodo et culpa quis in. Eiusmod velit et ut incididunt."],
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "string", "value": "id", "label": "id"},
         {"type": "string", "value": "title", "label": "title"},
         {"type": "string", "value": "description", "label": "description"},
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
 }
```
