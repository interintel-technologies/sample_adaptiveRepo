# POS PAGE

![POS PAGE](https://i.postimg.cc/4dBpL0h5/pos-page.png)

## Description

Static page that contains POS Elements.

## Configuration

To serve this page from terminal, the page requires a html file the folder directory and each page uses a single config file. Run/Serve this page by using a bash script file e.g static-pages.sh

```
    #!/usr/bin/env bash

    configPath="src/themes/dsv2.0/components/static-pages/static-pages.config.js"
    page=$1
    yarn  webpack-dev-server --name $page --config $configPath --mode $2
```
whereby variable `$1` is the name of the config file and `$2` is the mode either `development` or `production`

the command should look like this `bash static-pages.sh pos-page development` with pos-page being the page name and development being the mode