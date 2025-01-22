## Production Deployment Setup

The frontend is served from the static directory of the gui app on the WC `wc/gui/static/prod`

the frontend is served through the **design** template files which are located in `wc/gui/templates/design/`:

the currently maintained designs are

- `polymer2.0`
- `polymer3.0` (this should be deprecated in place of adaptive-ui-web)  
- `adaptive-ui-web`

the designs contain the entry index files that then load the **adaptive-ui-web** frontend 

the entry index files include 

1. `landing.html` - landing page
2. `main.html` - main service page
3. `payments.html` - payments page
4. `section.html` - section page
5. `canvas.html` - canvas page


an entry index file loads the frontend as a module and has a base href definition for easy relative paths
 
```html
<base href="/static/adaptive-ui-web/">

```
 
### Performing New Deployments
To perform a new build update, 

Run the `polymer build` command 

Commit the build outputs to `wc/gui/static/dev` and `wc/gui/static/prod` on the **master** branch

Push the commit and notify a wc dev to update on the server

A script exists, `deploy.sh` can be used to automate the deployment process


### Invalidating CDN Cache

The CDN caches scripts,  
Cloudflare provides an API to purge cache,   
this needs credentials to work.  

To provide the credentials, update the following environment variables
```

export CF_AUTH_EMAIL="brian.nyaundi@interintel.co.ke"
export CF_AUTH_KEY="9f6576175ad41f##########################"
```
> recommend adding this into your .bashrc 

then run the script `invalidate_cdn_cache.py`
