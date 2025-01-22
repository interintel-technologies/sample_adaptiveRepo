# SMS FLOAT PURCHASE

![qr code generator image](https://i.postimg.cc/g2yzxR4g/sms-float.png)

## Description
An element that contains a dropdown, a number input and calculate button that allows the user to select the mobile network and to enter a float amount respectively to calculate amount to pay for the sms service.  The calculation is based on the **amount** multiplied by the **rate** of the mobile network. The mobile network and rates come from the **defaultvalue** as a JSON string

## Functionality
1.	Calculation of amount to pay based on the **amount** multiplied by the **rate**



## Configuration
- **VARIABLE TYPE** - SMS FLOAT PURCHASE
- **RATES AND LABELS**  - `defaultvalue` as a JSON string  <pre><code>[
   {
      "selected":false,
      "id":"saf",
      "name":"safaricom",
      "rates":{
         "1-99999":0.70,
         "100000-499999":0.50,
         "500000-999999":0.40,
         "1000000-2500000":0.30,
         "2500000":0.20
      }
   },
   {
      "selected":false,
      "id":"airtel",
      "name":"airtel",
      "rates":{
         "1-99999":0.70,
         "100000-499999":0.50,
         "500000-999999":0.40,
         "1000000-2500000":0.30,
         "2500000":0.20
      }
   }
]</code></pre>

## Return Value on Submission
An object of keys "network" and "amount" contains the values of the chosen network and amount calculate eg)  <pre><code>{network: "airtel", amount: "720.00"}</code></pre>
## Structure
**SerializableElement**
### Mixins 

- UtilsMixin




