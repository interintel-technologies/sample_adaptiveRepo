# TIME SLOT PICKER

![time slot picker](https://i.postimg.cc/s2F2Z5z6/timeslotpick.png)

## Description

This element displays a list of time slots for a selected date. It returns the checked time slot.

## Configuration

1. *TITLE* - It is set in `page input name` eg `"These are the available time slots based on the selected date. Please pick your preferred time."`.
2. *TIME_SLOTS* - Set in the rows section of the data-source payload.

## Data-source payload sample

```json
{
   "response_status": "00",
   "overall_status": "00",
   "action_id": 53,
   "response": {
     "subdomain_details": "Subdomain not in request.",
     "data_source": {
       "rows": [
         [1652788200000, 1652748600000],
         [1652792400000, 1652794800000],
         [1652797800000, 1652801400000],
         [1652802300000, 1652805900000],
         [1652811000000, 1652814600000]
       ],
       "data": [],
       "lines": [],
       "cols": [
         {"type": "number", "value": "from", "label": "from"},
         {"type": "number", "value": "to", "label": "to"}
       ],
       "row_count": 6,
       "min_id": 0,
       "groups": [],
       "max_id": 0},
   },
   "last_response": "",
}
```
