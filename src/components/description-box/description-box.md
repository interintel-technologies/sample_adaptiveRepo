# DESCRIPTION BOX

![Description Box](https://i.postimg.cc/CMbTV6t6/description-box-redesigned.png)

## Description

Used to display content that has TITLE,SUBTITLE,DESCRIPTION and IMAGE
The items are loaded from the **DATASOURCE**

## Configuration

- *TITLE* - Gotten from `name` column in the dsc by a separation of a pipe eg. `start now|InterIntel,` start now is `title`
- *DESCRIPTION* - et in the details object with a key of `"description"` and the value is a string. e.g `"description": "Occaecat dolor ipsum nulla voluptate qui voluptate eu sint eiusmod amet eu qui ut. Cupidatat sit quis enim nostrud veniam sint cupidatat. Aliquip pariatur incididunt magna reprehenderit ullamco esse ut est voluptate elit laborum."`.

*COVERIMAGE* -set in the details object. is the image that appears in the main box. `"coverImage":"https://i.postimg.cc/sfn4Npgz/workstation.png"`

- *CARDS* - Set in the datasource payload

## Structure

1. **SectionPElementDsc**

### Mixins

- DataSourceMixin
- UtilsMixin

### Functionality

1. When the title and subtile div is clicked it displays its description and Image on the left.

### Datasource payload sample

```json
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
          "label": "name",
          "type": "string",
          "value": "name"
        },
        {
          "label": "description",
          "type": "string",
          "value": "description"
        },
        {
          "label": "image",
          "type": "string",
          "value": "image"
        }
      ],
      "rows": [
        [
          "159",
          "Schedule Messages|Take your messaging experience to the next level with a platform built for scale,",
          "SMS marketing couldn’t be easier with NenaSasa, simply compose your message, choose your recipients set the time and date to send message. Submit and we take care of the rest, allowing you to get on with your business.",
          "dsc_imagelist_image/schedule_SMS_1.png"
        ],
        [
          "160",
          "Track Messages|Have everyday interactions with your customers and track your messages on a real time",
          "Our portal makes it easy for you to monitor the delivery status of your messages in real-time. You can view delivery reports, filter reports for further analysis, more so you can download reports to view offline",
          "dsc_imagelist_image/track_sms_1.png"
        ],
        [
          "161",
          "Set Sender ID|Enagage your customers with personalized targeted Sender IDs for instant awareness",
          "Receiving a message from an unknown sender can feel intrusive, NenaSasa allows you to brand your messages with a customized Sender ID, making your messages instantly recognizable to your customers. This personal approach will have a greater impact on your recipients and create client awareness of your brand.",
          "dsc_imagelist_image/Sender_ID_P6nLt2n.png"
        ],
        [
          "162",
          "Manage Contacts|Our platform provides a platform that helps you manage a huge customer database",
          "Organise and segment contacts into specific groups. This allows you to target relevant demographic groups of contacts making it a highly efficient method for message marketing and outreach",
          "dsc_imagelist_image/manage_Contacts.png"
        ]
      ],
      "lines": [],
      "groups": [],
      "data": [],
      "min_id": 0,
      "max_id": 0,
      "row_count": 4
    }
  },
  "action_id": 53,
  "response_status": "00",
  "overall_status": "00",
  "last_response": ""
}
```
