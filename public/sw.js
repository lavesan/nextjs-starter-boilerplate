if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,t)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=t(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"-fAuD7nLuWFwGnfqBMKTc"},{url:"/_next/static/-fAuD7nLuWFwGnfqBMKTc/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/-fAuD7nLuWFwGnfqBMKTc/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/-fAuD7nLuWFwGnfqBMKTc/pages/_app.js",revision:"959d18f533acb61ce0fd32b0f44c6ad9"},{url:"/_next/static/-fAuD7nLuWFwGnfqBMKTc/pages/_error.js",revision:"325faca0abbcac94ac271420b6934f08"},{url:"/_next/static/-fAuD7nLuWFwGnfqBMKTc/pages/index.js",revision:"519ec55677c61d690e5f3f116e8c1ab6"},{url:"/_next/static/chunks/11ce5e3ca4b38190e7656cf31239a293c0346637.79b819c9a0550d7e3775.js",revision:"3a3cff62185fbf78423f3477416d3a6b"},{url:"/_next/static/chunks/b29b67fe85d55939b15e94295a827a307d573d0a.cb4b3bf990146f0b9c5c.js",revision:"d4297b1ef4a2d2c867ac4eb5941b2076"},{url:"/_next/static/chunks/framework.934881a8a2d3672acc22.js",revision:"8dbfd54516c12914d3e0cd417cd67882"},{url:"/_next/static/chunks/styles.766f507175211ac44361.js",revision:"af26319355e9fcbae13ec6f5f6a3cebc"},{url:"/_next/static/css/styles.00699308.chunk.css",revision:"536f7333a86e79a412d031c568c531ef"},{url:"/_next/static/runtime/main-a7de68e593fda78d0a96.js",revision:"374e083b5bcd76e3e02dffb2bd6046aa"},{url:"/_next/static/runtime/polyfills-1e5e3e1f64c0fdafa966.js",revision:"bea2fc3eb766d74667740ae469710193"},{url:"/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/static/imgs/caricatura-entregador.png",revision:"5577d7d8000924f7aafee76b304b2380"},{url:"/static/imgs/empty-user.png",revision:"a3f4e45d003405464022632ac9e15f49"},{url:"/static/imgs/login-image.png",revision:"5a14b972f50a5127de9230a19bd6a110"},{url:"/static/imgs/ok-icon.png",revision:"e62bae8759b919a6c583429438072fcd"},{url:"/static/imgs/produto-não-achado.png",revision:"e8f7bbbef643ff1eaef21fdf5ba1f50b"},{url:"/static/imgs/produto-sem-imagem.png",revision:"9ff6c9a5f5dd6fa4246c7a5e072ee74d"},{url:"/static/imgs/sobre-1.jpeg",revision:"aee0628c708720632bb2084c7d7efbda"},{url:"/static/imgs/sobre-2.jpeg",revision:"a71ca7bc4a29894ddd087aa9c0be6006"},{url:"/static/imgs/sobre-3.jpeg",revision:"0ec009761cc8ae54fdaf8517e777df78"},{url:"/static/imgs/sobre-4.jpeg",revision:"a612a3929e812ad26e8a02e471988bc1"},{url:"/static/imgs/zero-veneno-logo.jpeg",revision:"0cf76d52dee858dbaeabf8f21b0efc8d"},{url:"/static/loading-loop-animated.json",revision:"803e890a400f36404bb1adacaa913dee"},{url:"/static/manifest.json",revision:"850ba22e9cd9d52864f8d9dabd2aaeb1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));