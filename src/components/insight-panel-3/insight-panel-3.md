## Insight panel 3
![insight-panel-3](https://i.postimg.cc/CM3Kdh47/Screenshot-from-2023-07-27-17-50-20.png)

# Properties

**insights** property is the core data input that drives the display of insights in the panel. By providing properly structured data in the form of an array of insight objects, you can easily customize the content of the panel and convey valuable information to users in a clear and visually engaging manner.

**insightTitle (String)** - This property represents the title or description of the insight. It should be a string that succinctly describes the content of the insight, providing users with an overview of what the insight is about.

**insightValue (String)** - This property holds the value associated with the insight. It should be a string representing the numeric or textual value of the insight, such as a monetary amount, a percentage, a count, or any other relevant metric.

**insightTrend (String)** - The insightTrend property indicates the trend or direction of the insight. It should be a string representing the trend, such as "up," "down," "stable," "positive," "negative," etc. The trend information helps users quickly understand the implications of the insight without having to analyze the d**ata in detail.
# Datasource
```javascript
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
              {
                  "label": "insightTrend",
                  "type": "string",
                  "value": "insightTrend"
              },
          ],
          "rows": [
              [
                  1,
                  "Total hours - 2023",
                  421.6,
                  "keep it up",
              ],
              [
                2,
                "This Month",
                421.7,
                "keep it up",
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