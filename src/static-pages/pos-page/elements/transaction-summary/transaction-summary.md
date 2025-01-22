# TRANSACTION SUMMARY

![transaction Summary](https://i.postimg.cc/rFgsS101/transaction-summary.png)

## Description

Used for displaying a summary of the user's transactions with details such as payment type, total cash amounts etc.

## Configuration

- The summary information is loaded from the datasource payload

```json
{
    "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
        "rows": [
            [
            1232,
            "Cash",
            3480,
            4000,
            500,
            348            
            ]
        ],
        "cols": [
            { "type": "number", "value": "OrderID", "label": "OrderID" },
            { "type": "string", "value": "Payment Type", "label": "Payment Type" },
            { "type": "number", "value": "Items Totals", "label": "Items Totals" },
            { "type": "number", "value": "Amount Tendered", "label": "Amount Tendered" },
            { "type": "number", "value": "Change Due", "label": "Change Due" }, 
            { "type": "number", "value": "Points Earned", "label": "Points Earned" }    
        ],
        "lines": [],
        "groups": [],
        "data": [],
        "min_id": 0,
        "max_id": 0,
        "row_count": 6
        }
    },
    "action_id": 53,
    "response_status": "00",
    "overall_status": "00",
    "last_response": ""
}
```