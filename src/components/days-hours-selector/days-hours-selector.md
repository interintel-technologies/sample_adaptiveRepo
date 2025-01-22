# DAYS HOURS SELECTOR

![DAYS HOURS SELECTOR](https://i.postimg.cc/GmdZLvjj/screencapture-localhost-8081-2022-06-07-17-40-15.png)

## Description

This element is used to set up the timings for each day of the week. This is by setting if they will be working for 24 hours, working from a particular time to another, or they will be closed.

## Configuration

1. *TITLE* - The title comes from the `page input name` eg `"Select all applicable options available to your business"`.

2. *SUBTITLE* -   comes from the details object whose key is `subtitle` and the value being a string. E.g`"subtitle":"Non in duis in est ex officia commodo exercitation sit minim duis ex."`

3. *DESCRIPTION* -  comes from the details object whose key is `description` and the value being a string. E.g `"description":"Aliqua officia officia enim do exercitation enim sunt eiusmod veniam culpa qui enim."`

4. *DEFAULT VALUE* -   comes from the details object whose key is `defaultValue` and the value being an object. E.g `"defaultValue":{"Monday":{"24Hours":false,"closed":true,"hours":{"from":"7:30 AM","to":"8:00 PM", "break": null}},"Tuesday":{"24Hours":true,"closed":false,"hours":{"from":"9:31 AM","to":"9:00 PM", "break": {"from": "7:20 am", "to": "7:30 am"}}},"Wednesday":{"24Hours":true,"closed":false,"hours":{"from":"7:30 am","to":"8:00 pm", "break": {"from": "7:20 am", "to": "7:30 am"}}},"Thursday":{"24Hours":false,"closed":true,"hours":{"from":"8:31 AM","to":"8:00 pm", "break": null}},"Friday":{"24Hours":false,"closed":true,"hours":{"from":"7:30 am","to":"8:00 pm", "break": null}},"Saturday":{"24Hours":false,"closed":true,"hours":{"from":"7:30 am","to":"8:57 PM", "break": null}},"Sunday":{"24Hours":false,"closed":true,"hours":{"from":"10:32 AM","to":"8:00 PM", "break": null}}}`
