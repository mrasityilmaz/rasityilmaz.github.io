'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eb06e563d84347b4eead0b75091992d5",
"index.html": "694a33d8d46837fd857ebc1ca5847fff",
"/": "694a33d8d46837fd857ebc1ca5847fff",
"main.dart.js": "0a148f0af825f9ab85ba76181b108db4",
"favicon.png": "157175372dd9dcc44824b644655bd2f0",
"icons/Icon-192.png": "1bd0ce31675970f986ad8aa89e378044",
"icons/Icon-maskable-192.png": "1bd0ce31675970f986ad8aa89e378044",
"icons/Icon-maskable-512.png": "ecc4d1da83970d6825e12ed1edeafc34",
"icons/Icon-512.png": "ecc4d1da83970d6825e12ed1edeafc34",
"manifest.json": "dc676a31e5011701aa152b6c126604eb",
"assets/AssetManifest.json": "fd47d8507e31bc4dc7af25c6b69f7a95",
"assets/NOTICES": "815696f348d410aa79e95521a50cc327",
"assets/FontManifest.json": "8a0af5d70528d99dfa104b55fea012b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/contributions/repost-5.png": "fb911df3a2cc2a527a15b9ae51466ab3",
"assets/assets/contributions/repost-4.png": "9ee4451e29e4bcae3d3af690b205026b",
"assets/assets/contributions/muslim-intro1.webp": "7c36583c30cb8797425b1d065fcf411f",
"assets/assets/contributions/muslim-edit2.webp": "e39a19cc8643518ee039f5760b704448",
"assets/assets/contributions/qibla-like.webp": "8461671bf6c1fa4283e5951ff7d8c4fd",
"assets/assets/contributions/repost-6.png": "30f9082964455f03474bce5fdb821e5f",
"assets/assets/contributions/repost-7.png": "cf2f4a4c3cfe884e26aa60650d365cc8",
"assets/assets/contributions/repost-3.png": "bbb6719509f384c4ab1a862f351d38f8",
"assets/assets/contributions/repost-2.png": "fc92223ad51164887a1c5a6da9de035f",
"assets/assets/contributions/muslim-edit3.webp": "95b7771ad2a6df08231b9349236f336f",
"assets/assets/contributions/qibla-rate.webp": "6a411656a8f3df897a04cbc76827f552",
"assets/assets/contributions/repost-0.png": "08007294f071c22aeef1280473a1e1b4",
"assets/assets/contributions/repost-1.png": "08d92e3190e35e47b4907c7a5d677980",
"assets/assets/contributions/repost-rate.webp": "493a6c821aaa70e3f744dd94917e6f98",
"assets/assets/contributions/muslim-edit4.webp": "a8209dbe505d5a095d7462ae605db273",
"assets/assets/contributions/muslim-edit10.webp": "e656c8585af866040b637d7cc6acfbb4",
"assets/assets/contributions/fontart-paywall.webp": "8555a0511dda4023c1574de6f11853d9",
"assets/assets/contributions/muslim-edit8.webp": "7483bfd5c8dce951b078bfb23b04de12",
"assets/assets/contributions/muslim-location2.webp": "67e2dd816f923b1c23e2a650d1ec1980",
"assets/assets/contributions/muslim-pray1.webp": "ffe1ae05e1ddbe8119e5404953dc0547",
"assets/assets/contributions/muslim-pray0.webp": "bee4efb54f34c74c7fafde5cf0f159ee",
"assets/assets/contributions/muslim-edit9.webp": "11f22a7ced4715d36bc0be6129111ddf",
"assets/assets/contributions/muslim-edit11.webp": "07a0d3750378bdf812b8ceaef6bcd156",
"assets/assets/contributions/muslim-edit5.webp": "ae0b68337a706dd87ede0d4d7cd3490e",
"assets/assets/contributions/repost-16.png": "8ba2c187350381b1c268ce32f17e13fa",
"assets/assets/contributions/muslim-edit6.webp": "f92c038501da40e9daec8c757166f984",
"assets/assets/contributions/repost-14.png": "7f3aa43b5cf81485b4afefcafc67887c",
"assets/assets/contributions/muslim-location0.webp": "9c7ba6ae92b092f5a50a773d741baf92",
"assets/assets/contributions/repost-15.png": "1c65e40dbe21165a6b1de6e1bce95150",
"assets/assets/contributions/repost-11.png": "9f3814d95c189376527e9b800de94d93",
"assets/assets/contributions/muslim-location1.webp": "00cc4c060fa451f586bb594aab43d47f",
"assets/assets/contributions/repost-10.png": "9cd82420bbdf43367db3ffdb0fc91d01",
"assets/assets/contributions/muslim-edit7.webp": "52b1817b82b1b759c456eec2fac66c00",
"assets/assets/contributions/repost-12.png": "90c188ce87e0a60ea79861f032b90b53",
"assets/assets/contributions/repost-13.png": "2b267674365f61fbec113a26dc3ccb87",
"assets/assets/contributions/muslim-edit0.webp": "31c591795598cc8b9a9f368fc7f51cb4",
"assets/assets/contributions/muslim-intro2.webp": "fc8e62dc93077cf255379c43ae61c862",
"assets/assets/contributions/muslim-edit1.webp": "970478a15a7b813a106aa063f9518ef0",
"assets/assets/contributions/border-paywall.webp": "6438726b99adbb7fba195d8e1bc93c60",
"assets/assets/contributions/repost-9.png": "2a7f29d48ec1d28ec902d190b5f4d51d",
"assets/assets/contributions/repost-8.png": "05c1c245d7c55003ce0c3f88cb758290",
"assets/assets/images/me.webp": "ac2228b2149c164e614817771eb04f29",
"assets/assets/resume/myresume.svg": "732ab760a835d488b4dfddca5ccbb57f",
"assets/assets/resume/myresume.pdf": "a33d3ed48de68b3d588fbdb0cc5b1557",
"assets/assets/icons/linkedin.svg": "4eafd5a309a11425448bda0f61ed2781",
"assets/assets/icons/Icon-512.png": "ecc4d1da83970d6825e12ed1edeafc34",
"assets/assets/fonts/Baloo-Regular.ttf": "7ff2bfbe3b5b87971403a0934fcb5c86"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
