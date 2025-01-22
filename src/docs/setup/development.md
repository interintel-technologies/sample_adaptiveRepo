### 1. No Mock Server Setup (Recommended)
this is the default and easiest setup and doesn't require a backend.   

this works out of the box by including the payloads required in the `environemt.js` file

in this setup

- all **DATA SOURCE** service calls return a predefined same payload.
    the predefined payload can be configured by setting `DATASOURCE_PAYLOAD` in **env.js** 
- all **other service** requests don't make actual network calls.   
    the service name and request body are logged to the browser console,    
    the also returns a predefined payload that can be configured by setting TODO

this setup is as simple as 

1. installing dependencies 
   ```
    npm install
   ```
   
2. starting the polymer development server
   ```
    npm start
   ```

if all completed successfully, the app should be now accessible from `localhost:8081`



All the other setups options are built on top of 

### 2. Quick Mock Server Setup

1. Setup the mock server as described in the README
    https://bitbucket.org/interintel/adaptiveui_mock_server/src/master/

2. Update backend `URL` in `index.html` to `'http://localhost:3000/6/';`
    i.e `URL = 'http://localhost:3000/6/';`. `localhost:3000` is the mock server IP and PORT  

3. Run project

### Proxying media requests to live server
This is required when you are testing with a payload that has been copied from a current live service,  
and you want to media resources like images not get a 404 

```bash

./node_modules/.bin/polymer serve --proxy-target https://gomipay.com/media/ --proxy-path media

```



### 3. Live Environment 
Setting up the backend servers, Switch and Wc, 
> i recommend doing this in an ubuntu18.04 box. [linuxcontainers](https://linuxcontainers.org/) is a good lightweight solution

#### Backend Setup Steps  

- cloning projects, 
- creating virtualenvs
- installing requirements and dependencies
- create databases [Postgresql]
- making and running migrations
- loading initial data fixtures
- configuring nginx 

you can use the script `backend_installer.sh` to automate the above on debian system (tested on Ubuntu 16.04, 18.04)


the script is in the `development` branch of the project


###### After running the script 
(assuming the *ip* of the host you did the installation as *IP*)

the wc should be acccesible to the http://*IP*:5000
the switch should be acccesible to the http://*IP*:5001


As the switch uses the domain names to differentiate between sites
you'll update host at 

- http://*IP*:5001/admin/administration/host/
- http://*IP*:5000/admin/administration/gatewayhost/

i.e replace *home* with *IP*

use  
danleyb2  
brian123

as the login credentials on both switch and wc 


##### Frontend Setup
- checkout the `development` branch
- update the url in the *index.html* to point to *IP*
- install dependencies using `npm install`
- use `npm start` to run

the project should now work okay with the backend payload


