# USER INFO

![User Info](https://i.postimg.cc/Mp7Cv3fC/user-info.png)

## Description

Used for displaying a specific user's information.

## Configuration

- The user's  details such Are loaded from the datasource payload

## Data-source payload payload

```json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
        [
          1,
          "John Smith",
          "johnsmith@gmail.com",
          "Nairobi",
          "+254 700120120",
          "0326235",
          0326235,
          4409,
          11,
          22000,
          "01/01/2022",
          "855TVHVJY",
          23,
          "01/08/2021",
          "12/03/2022",
          550,
          12300,
          "{\"url\": \"/EDIT PROFILE/\", \"service\": \"EDIT PROFILE\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}",
          "{\"url\": \"/MANUALLY ENTER POINTS/\", \"service\": \"MANUALLY ENTER POINTS\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}",
          "{\"url\": \"/REDEEM POINTS/\", \"service\": \"REDEEM POINTS\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}",
          "{\"url\": \"/VIEW PURCHASES/\", \"service\": \"VIEW PURCHASES\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}",
          "{\"url\": \"/DELETE PROFILE/\", \"service\": \"DELETE PROFILE\", \"icon\": \"icon\", \"params\": {\"dispatch_id\": \"id\"}}"

        ]
      ],
      "data": [],
      "lines": [],
      "cols": [ 
        { "type": "number", "value": "id", "label": "id" },
        { "type": "string", "value": "name", "label": "name" },
        { "type": "string", "value": "email", "label": "email" },
        { "type": "string", "value": "address", "label": "address" },
        { "type": "string", "value": "phoneNumber", "label": "phoneNumber" },
        { "type": "number", "value": "customerId", "label": "customerId" },
        { "type": "number", "value": "pointsBalance", "label": "pointsBalance" },
        { "type": "number", "value": "redemptions", "label": "redemptions" },
        { "type": "number", "value": "redeemedPoints", "label": "redeemedPoints" },
        { "type": "date", "value": "lastRedemption", "label": "lastRedemption" },
        { "type": "string", "value": "loyaltyCardNumber", "label": "loyaltyCardNumber" },
        { "type": "number", "value": "totalVisits", "label": "totalVisits" },
        { "type": "date", "value": "firstVisit", "label": "firstVisit" },
        { "type": "date", "value": "lastVisit", "label": "lastVisit" },
        { "type": "number", "value": "averageSpent", "label": "averageSpent" },
        { "type": "number", "value": "totalSpent", "label": "totalSpent" },
        {"type": "href","label": "Edit Profile","value": "edit_profile"},
        {"type": "href","label": "Manually Enter Points","value": "manually_enter_points"},
        {"type": "href","label": "Redeem Points","value": "redeem_points"},
        {"type": "href","label": "View Purchases","value": "view_purchases"},
        {"type": "href","label": "Delete Profile","value": "delete_profile"},
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0
    }
  },
  "last_response": ""
}