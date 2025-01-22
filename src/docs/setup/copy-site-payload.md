to update the service payload to match a live site
1. visit the site in your browser and open dev tools
e.g https://gomipay.com/sale/?product_item_id=100213&amount=22#/0/0

2. Paste this command to get the interface payload, it's a JSON
```js
$('adaptive-ui').__payloadjson
```

3. copy the payload and replace the value SERVICE_PAYLOAD in environment.js
when you refresh the browser, the local site will look like the one copied from
