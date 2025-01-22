# LOGIN FACEBOOK

![LOGIN FACEBOOK](https://i.postimg.cc/XYwMbysX/Screenshot-2023-01-19-173029.png)

## Description

An authentication method used for login using Facebook Login.

## Configuration

1. *app_id* - Comes from the default value as a string e.g `"uhehuehuh376763ggfgy"`.
2. *auto_submit* - Comes from the details object as an object with a key `"auto_submit"` e.g `"auto_submit":true`.

### Functionality

1. Displays a pop up for users to login to their Facebook accounts, if user has already logged in to there user account, no interaction is needed.
2. If auto_submit is false or is not defined, the retrieved email is placed under the button.
