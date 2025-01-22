# Insight panel 2

![Insight panel 2](https://i.postimg.cc/kMpnDP3f/Screenshot-from-2023-07-26-19-57-10.png)

## Description
The InsightPanel2 custom element is a web component that displays insights in a card format. It extends the SectionPElementDsc class and uses the ThemeMixin to provide theming capabilities. The component renders a set of insights with corresponding titles and values.

## Properties

*insights (Array)*: An array of objects containing insights to be displayed. Each object in the array should have two properties: `insightTitle (string)` and `insightValue (Number)`.

## Datasource
``` javascript
{
  "response": {
      "subdomain_details": "Subdomain not in request.",
      "get_profile": "Session Profile Captured",
      "data_source": {
          "cols": [
              {
                  "label": "id",
                  "type": "string",
                  "value": "id"
              },
              {
                  "label": "insightTitle",
                  "type": "string",
                  "value": "insightTitle"
              },
              {
                  "label": "insightValue",
                  "type": "number",
                  "value": "insightValue"
              },
          ],
          "rows": [
              [
                  1,
                  "Reps Checked In",
                  4,
              ],
              [
                2,
                "Not Checked In",
                2,
            ]
          ],
          "lines": [],
          "groups": [],
          "data": [],
          "min_id": 0,
          "max_id": 0,
          "row_count": 1
      }
  },
  "action_id": 53,
  "response_status": "00",
  "overall_status": "00",
  "last_response": ""
}
```