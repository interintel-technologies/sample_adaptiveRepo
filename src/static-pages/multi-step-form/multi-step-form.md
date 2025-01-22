# MULTI-STEP-FORM

![ MULTI-STEP-FORM](https://i.postimg.cc/52m98Tbv/multi-step.png)

## Description

Static page that contains a wizard-like multi-step form with a response at the end of the process. Used for payment and registration processes.

## Configuration

To serve this page from terminal Run/Serve by using a bash script file e.g static-pages.sh

```
    #!/usr/bin/env bash

    configPath="src/themes/dsv2.0/components/static-pages/static-pages.config.js"
    page=$1
    yarn  webpack-dev-server --name $page --config $configPath --mode $2
```
whereby variable `$1` is the name of the config file and `$2` is the mode either `development` or `production`
-the command should look like this `bash static-pages.sh multi-step-form development` with multi-step-form being the page name and development being the mode