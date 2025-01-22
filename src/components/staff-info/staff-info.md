# STAFF INFO

![Staff Info](https://i.postimg.cc/CxxPBWBd/staff-info.png)

## Description

Used for displaying a specific staff member's information, their shift information such start time/end time, and provides buttons for actions.

## Configuration

- The staff members's details are loaded from the datasource payload

## Data-source payload

```json
{
   "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
        "rows": [
            [
            1,
            "Justin Smith",
            "barrister",
            0,
            100,
            0,
            "2023-04-20 08:30:00",
            "2023-04-24 10:00:00",
            "{\"url\": \"/START CASH BALANCE/\", \"service\": \"START CASH BALANCE\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}",
            "{\"url\": \"/CASH DRAWERS/\", \"service\": \"CASH DRAWERS\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}",
            "{\"url\": \"/REDEEM POINTS/\", \"service\": \"START SHIFT\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}",
            "{\"url\": \"/END SHIFT REPORT/\", \"service\": \"END SHIFT REPORT\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}"
            ]
        ],
        "cols": [
            { "type": "number", "value": "id", "label": "id" },
            { "type": "string", "value": "name", "label": "name" },
            { "type": "string", "value": "role", "label": "role" },
            { "type": "number", "value": "orders Today", "label": "orders Today" },
            { "type": "number", "value": "cashed In Today", "label": "cashed In Today" },
            { "type": "number", "value": "returned Orders Today", "label": "returned Orders Today" },
            {"type": "date", "value": "Shift Start", "label": "Shift End" },
            {"type": "date", "value": "Shift End", "label": "Shift End" },
            {"type": "href","label": "Start Cash Balance","value": "start_cash_balance"},
            {"type": "href","label": "Cash Drawers","value": "cash_drawers"},
            {"type": "href","label": "Start Shift","value": "start_shift"},
            {"type": "href","label": "End Shift Report & Log Off","value": "end_shift_report"}
    
        ],
        "lines": [],
        "groups": [],
        "data": [],
        "min_id": 0,
        "max_id": 0,
        "row_count": 17
    }
},
"action_id": 53,
"response_status": "00",
"overall_status": "00",
"last_response": ""
}
```