if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/temp/_next/static/chunks/framework-e70c6273bfe3f237.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/chunks/main-8abbbfbfaf8f6759.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/chunks/pages/_app-48b085386ceca185.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/chunks/pages/index-d9d0def17f44641f.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/chunks/webpack-15dff7d1aa47b5e6.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/css/39f4d8aba4b66723.css",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/css/8c78864cba607bef.css",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/u_6GAA0nsTKbmsbwwdQRD/_buildManifest.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/u_6GAA0nsTKbmsbwwdQRD/_middlewareManifest.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/_next/static/u_6GAA0nsTKbmsbwwdQRD/_ssgManifest.js",revision:"u_6GAA0nsTKbmsbwwdQRD"},{url:"/temp/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/temp/logo-128x128.png",revision:"e5f0c9522e5646ae9e77b4345667a4d5"},{url:"/temp/logo-512x512.png",revision:"7118d59f8ed9d82b787fdfe0bcba7122"},{url:"/temp/manifest.json",revision:"a33bc2c2b8ff7067265e019f21521140"},{url:"/temp/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/temp",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
