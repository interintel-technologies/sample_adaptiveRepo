# ASSIGN STAFF ROLES

![ASSIGN STAFF ROLES](https://i.postimg.cc/W1p7j8p4/Screenshot-2022-12-19-142534.png)

## Description

This is an element used to assign staff with roles.

## Configuration

1. *STAFF_ROLES* - This is set in the `datasource` payload.
2. *ASSIGN_ROLES_URL* - This is set in `details` with a key of `"assignRolesUrl"` and the value the string of the url.

### DataSource payload

```json
{
  "response_status": "00",
  "overall_status": "00",
  "action_id": 53,
  "response": {
    "subdomain_details": "Subdomain not in request.",
    "data_source": {
      "rows": [
         ["1", "Peter Karanja", "Guest", "Active", "{\"url\": \"/VIEW CONTACT GROUP RECIPIENTS/\", \"service\": \"VIEW CONTACT GROUP RECIPIENTS\", \"icon\": \"icons:folder-open\", \"params\": {\"contact_group_id\": \"index\"}}", "{\"url\": \"/CONTACT GROUP UPLOAD FORM/\", \"service\": \"CONTACT GROUP UPLOAD FORM\", \"icon\": \"icons:arrow-upward\", \"params\": {\"contact_group_id\": \"index\"}}", "{\"url\": \"/CONTACT GROUP DELETE REQUEST/\", \"service\": \"CONTACT GROUP DELETE REQUEST\", \"icon\": \"icons:delete\", \"params\": {\"contact_group_id\": \"index\"}}"],
         ["2", "Susan Karanja", "Admin", "Disabled", "{\"url\": \"/VIEW CONTACT GROUP RECIPIENTS/\", \"service\": \"VIEW CONTACT GROUP RECIPIENTS\", \"icon\": \"icons:folder-open\", \"params\": {\"contact_group_id\": \"index\"}}", "{\"url\": \"/CONTACT GROUP UPLOAD FORM/\", \"service\": \"CONTACT GROUP UPLOAD FORM\", \"icon\": \"icons:arrow-upward\", \"params\": {\"contact_group_id\": \"index\"}}", "{\"url\": \"/CONTACT GROUP DELETE REQUEST/\", \"service\": \"CONTACT GROUP DELETE REQUEST\", \"icon\": \"icons:delete\", \"params\": {\"contact_group_id\": \"index\"}}"],
      ],
      "data": [],
      "lines": [],
      "cols": [
         {"type": "string", "value": "id", "label": "id"},
         {"type": "string", "value": "staff", "label": "staff"},
         {"type": "string", "value": "role", "label": "role", "roles": ["Admin", "User", "Guest"]},
         {"type": "string", "value": "status", "label": "status"},
         {"type": "href", "value": "View Recipients",  "label": "View Recipients"},
         {"type": "href", "value": "Upload", "label": "Upload",},
         {"type": "href", "value": "Delete", "label": "Delete",}
      ],
      "row_count": 6,
      "min_id": 0,
      "groups": [],
      "max_id": 0},
  },
  "last_response": "",
}
```
