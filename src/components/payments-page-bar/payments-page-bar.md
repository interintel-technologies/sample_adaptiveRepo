# PAYMENTS PAGE BAR

![Payments Page bar](https://i.postimg.cc/7LKppy3s/Screenshot-2023-06-07-233955.png)

## Description

This elements displays some text on a bar that is fixed on the payments page.

## Configuration

1. *Title* - set in the details object with a key of `"title"` and the value being a string `"title": "Conveniently buy Airtel-Telkom-Safaricom Airtime using Paybill<br> <span class=\'numberSpan\' style=\'color: #1065B3\'> 339 339</span><br> and your <span style=\'color: #1065B3\'>Phone Number</span> as the Account Number<br><br><span class=\'support\'>Support: <span style=\'color: #1065B3\'>0769-339-399/0789-399-399</span></span>"`

2. *heroImage* is the URL of the image to be displayed in the first column of the fixed bar. set in the details object with a key of `"heroImage"` and the value being a string. eg `"heroImage": "https://i.postimg.cc/q7Q76BRk/woman-holds-modern-mobile-phone-surfs-net-checks-newsfeed-social-networks-wears-headband-white-shirt.png"`

3. *services* property contains HTML markup with img elements pointing to SVG files representing different services. set in the details object with a key of `"services"` and the value being a string containing `tags`. eg `services": "<img src=\'assets/svgs/telkom.svg\'> &ensp; <img src=\'assets/svgs/safaricom.svg\'> &ensp; <img src=\'assets/svgs/airtel.svg\'>"`