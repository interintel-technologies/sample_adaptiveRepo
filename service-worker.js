/**
 * @license
 * Copyright (c) 2016 InterIntel Technologies. All rights reserved.
 */

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks */
/* eslint-disable space-before-function-paren, quotes, comma-spacing */

'use strict';
var precacheConfig = [

  // ['path', 'hash' ]
  // TODO #253 how does the build tool generate hash for non exisiting paths .e,g
  // ['/', '77741e916f1f87bfbe0e4ad0a2a1e592'],

];

var version = '11';
var dist;
// create an instance of a db object for us to store the IDB data in
var db;
var cacheName = 'sw-precache-v3-4-' + (self.registration ? self.registration.scope : '');


function loadDist() {
  // Open our object store and then get a cursor list of all the different data items in the IDB to iterate through
  var objectStore = db.transaction('settings').objectStore('settings');
  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    // if there is still another cursor to go, keep runing this code
    if (cursor) {
      // create a list item to put each data item inside when displaying it
      if (cursor.value.name === 'dist') {
        dist = cursor.value.value;
        // TODO #254  should break cursor here
      }
      // continue on to the next item in the cursor
      cursor.continue();

      // if there are no more cursor items to iterate through, say so, and exit the function
    } else {
      console.log('All Settings loaded.');
    }
  };
}


function addData(k,v) {
    // grab the values entered into the form fields and store them in an object ready for being inserted into the IDB
    var newItem = [
      {name: k, value: v},
    ];

    // open a read/write db transaction, ready for adding the data
    var transaction = db.transaction(["settings"], "readwrite");

    // report on the success of the transaction completing, when everything is done
    transaction.oncomplete = function() {
      console.log('<li>Transaction completed: database modification finished.</li>');
    };

    transaction.onerror = function() {
      console.log('<li>Transaction not opened due to error: ' + transaction.error + '</li>');
    };

    // call an object store that's already been added to the database
    var objectStore = transaction.objectStore("settings");
    console.log(objectStore.indexNames);
    console.log(objectStore.keyPath);
    console.log(objectStore.name);
    console.log(objectStore.transaction);
    console.log(objectStore.autoIncrement);

    // Make a request to add our newItem object to the object store
    var objectStoreRequest = objectStore.add(newItem[0]);
    objectStoreRequest.onsuccess = function(event) {
      // report the success of our request
      // (to detect whether it has been succesfully
      // added to the database, you'd look at transaction.oncomplete)
      console.log('<li>Request successful.</li>');
    };
}


function openDb() {
  // Let us open our database
  var DBOpenRequest = self.indexedDB.open("settings", 1);

  // these two event handlers act on the database being opened successfully, or not
  DBOpenRequest.onerror = function(event) {
    console.error('Error loading database.');
    console.log(event);
  };

  DBOpenRequest.onsuccess = function(event) {
    console.log('Database initialised.');
    // store the result of opening the database in the db variable. This is used a lot below
    db = DBOpenRequest.result;
    // addData('dist','dev');
    // retrieve dist
    loadDist();
  };

  // This event handles the event whereby a new version of the database needs to be created
  // Either one has not been created before, or a new version number has been submitted via the
  // window.indexedDB.open line above
  // it is only implemented in recent browsers
  DBOpenRequest.onupgradeneeded = function(event) {
    var db = event.target.result;
    db.onerror = function(event) {
      console.error("Error loading database.");
    };
    // Create an objectStore for this database
    var objectStore = db.createObjectStore("settings", {keyPath: "name"});

    // define what data items the objectStore will contain
    objectStore.createIndex("value", "value", {unique: false});
    console.log('Object store created.');
  };
}


var cleanResponse = function(originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ? Promise.resolve(originalResponse.body) : originalResponse.blob();

  return bodyPromise.then(function(body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

var createCacheKey = function(originalUrl, paramName, paramValue, dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching || !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') + encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(precacheConfig.map(function(item) {
  var relativeUrl = item[0];
  var hash = item[1];
  var absoluteUrl = new URL(relativeUrl, self.location);
  var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
  return [absoluteUrl.toString(), cacheKey];
}));


var createCacheKey2 = function(originalUrl) {
  return originalUrl + '?v=' + version;
};


function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  console.log('service worker install');
  event.waitUntil(caches.open(cacheName)
    .then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
          // If we don't have a key matching url in the cache already, add it.
          if (!cachedUrls.has(cacheKey)) {
            var request = new Request(cacheKey, {
              credentials: 'same-origin',
            });
            return fetch(request).then(function(response) {
              // Bail out of installation unless we get back a 200 OK for
              // every request.
              if (!response.ok) {
                throw new Error('Request for ' + cacheKey + ' returned a ' + 'response with status ' + response.status);
              }

            return cleanResponse(response).then(function(responseToCache) {
              return cache.put(cacheKey, responseToCache);
            });
          });
        }
      }));
    });
  }).then(function() {
    // Force the SW to transition from installing -> active state
    return self.skipWaiting();
  }));
});

var previousVersion = function(link) {
  var url = new URL(link);
  const params = new URLSearchParams(url.search);
  // console.log(params.get('v'));
  // console.log(version);
  return params.has('v') && params.get('v') !== version;
};

self.addEventListener('activate', function(event) {
  console.log('service worker activate');
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(caches.open(cacheName).then(function(cache) {
    return cache.keys().then(function(existingRequests) {
      return Promise.all(existingRequests.map(function(existingRequest) {
        console.log(existingRequest);
        // remove all previous cached
        if (previousVersion(existingRequest.url)) {
          // console.log('delete from cache :'+existingRequest.url);
          return cache.delete(existingRequest);
        }
      }));
    });
  }).then(function() {
    return openDb();
  })
    .then(function() {
    return self.clients.claim();
  }));
});

/**
 *
 */
self.addEventListener('fetch', function(event) {
  console.log('service worker fetch');

  if (event.request.method === 'GET') {
    const urla = event.request.url;
    const pathName = new URL(urla).pathname;
    const pathParts = pathName.split('/');

    // ignore django admin
    if (pathParts.length >= 3 && pathParts[1] === 'admin') {
      return;
    }
    // update dist on each index request
    var notEmptyPaths = pathParts.filter(function(p) {
      return p.length;
    });
    if (!notEmptyPaths.length || (notEmptyPaths.length=1 && (notEmptyPaths[0]==='index'||notEmptyPaths[0]==='home'))) {
      openDb();
    }
    // only cache media and static
    // if (pathParts.length>1 && (pathParts[1] === 'static'||pathParts[1] === 'media') ) {
    // if (pathParts.length > 1 && (pathParts[1] === 'src' || pathParts[1] === 'node_modules')) {
    if (pathParts.length > 1 && pathParts[2] === 'prod') {
      var url = event.request.url;

      var newRequest = event.request;
      var newURL = url;
      console.log(dist);
      if (dist === 'dev') {
          newURL = url.replace('prod','dev');
          newRequest = new Request(newURL);
      }

      var cacheKey = createCacheKey2(newURL);

      event.respondWith(
        caches.match(cacheKey)
          .then(response => {
            if (response) {
              // console.log('Found ', event.request.url, ' in cache');
              return response;
            }
            // console.log('Network request for ', event.request.url);
            //  Add fetched files to the cache
            return fetch(newRequest, event.request).then(response => {
              return caches.open(cacheName).then(cache => {
                // console.log('[Service Worker] Caching new resource: ' + cacheKey);
                cache.put(cacheKey, response.clone());
                return response;
              });
            }).catch(error => {
              // TODO #255 Respond with custom offline page
              console.log('service worker error');
              console.log(error);
            });
          }),
      );
    }
  } else if (event.request.method === 'POST') {
    // TODO #256 Caching to IndexedDB
  }
});
