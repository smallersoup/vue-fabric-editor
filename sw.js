if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=e=>n(e,r),l={module:{uri:r},exports:c,require:o};s[r]=Promise.all(i.map((e=>l[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-ae81d9ed"],(function(e){"use strict";e.setCacheNameDetails({prefix:"设计编辑器-vue-fabric-editor"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-59071c5c.css",revision:null},{url:"assets/index-f0b72d34.css",revision:null},{url:"index.html",revision:"10ad0cc08f6910d5650a37c484c875a4"},{url:"js/index.96024f14.js",revision:null},{url:"js/index.ca4d3e1b.js",revision:null},{url:"js/workbox-window.prod.es5.799c7be9.js",revision:null}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[new e.ExpirationPlugin({maxEntries:500,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:500,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
