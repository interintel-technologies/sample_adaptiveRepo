# RECAPTCHA ELEMENT

![Recaptcha Element V3](https://i.postimg.cc/XNr35Dyt/recaptcha.png)

## Description

Google reCAPTCHA element used to verify if user is a bot or human. For this particular case the element is **reCAPTCHA v3** that works in the background.
reCAPTCHA v3 returns a score for each request without user friction. The score is based on interactions with your site and enables you to take an appropriate action for your site 
For more info on the callback check out this link to the [google recaptcha docs ](https://developers.google.com/recaptcha/docs/v3) .Recaptcha v3 Grecaptcha methods use Invisible recapctha by default.

The required item for the configuration for the reCAPTCHA to display is the **site-key**
The **background color** of the reCAPTCHA can also be configured.

## Configuration

- **site-key** -   gotten from `defaultValue` in form of a string. To set-up the site-key visit the [reCAPTCHA website](https://developers.google.com/recaptcha) sign up and generate a site key for the respective gateway / website

- **local host site key**  - `6Ld-XQInAAAAACnQU6fwYkgVRjE3QYoBTJE9XmeK`. Set in the defaultValue

## Structure

**SerializableElement**

### Mixins

- UtilsMixin

### Functionality

1. Verify if user is a bot or human before submition of form.
