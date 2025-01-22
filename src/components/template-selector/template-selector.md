# TEMPLATE SELECTOR

![TEMPLATE SELECTOR](https://i.postimg.cc/nVqrV1NB/Screenshot-2023-01-25-153018.png)

## Description

Provide a dropdown of templates to choose from.  
The list items are loaded from the **DATASOURCE**

## Configuration

1. Title is contained in `page input name` eg `"Electtronics"`
2. Templates are contained in the Data Source payload

### Mixins

- DataSourceMixin
- UtilsMixin

### Datasource payload sample

```json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        ["1", "Ecommerce", "https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg"],
        ["2", "Ecommerce", "https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg"],
        ["3", "Ecommerce", "https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg"],
      ],
      "data": [],
      "lines": [],
      "cols": [
        {"type": "string", "value": "customerName", "label": "id"},
        {"type": "string", "value": "phoneNumber", "label": "title"},
        {"type": "string", "value": "image", "label": "image"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",
 }
```
