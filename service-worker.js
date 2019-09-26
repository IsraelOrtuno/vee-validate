/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dc68a8fd36d5d3380b5b7b03cf9f1b45"
  },
  {
    "url": "api/index.html",
    "revision": "5ad4f55fb84fdcefbbc0e617db0cb336"
  },
  {
    "url": "api/rules.html",
    "revision": "27a5aecda9dbc8f2b0733baf8c20c072"
  },
  {
    "url": "assets/css/0.styles.123b503f.css",
    "revision": "05bad3f73d9d630343356bd7528183ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cabe044f.js",
    "revision": "9bd839abb882cd97d094ec50431a90dd"
  },
  {
    "url": "assets/js/11.89993d5c.js",
    "revision": "2a4c50b06b6637cc7f1d86201e2e85e3"
  },
  {
    "url": "assets/js/12.ae4abb1d.js",
    "revision": "f06baf8df5b978210e99c4ff14bc4b04"
  },
  {
    "url": "assets/js/13.781ae31c.js",
    "revision": "2e8dd9a4791bc1dd9797171b16ada20a"
  },
  {
    "url": "assets/js/14.42e0c376.js",
    "revision": "ee71737565cb58cbb338f0c2476a84de"
  },
  {
    "url": "assets/js/15.7b9c63c8.js",
    "revision": "925d57ca6f7cfaf45512f73037846191"
  },
  {
    "url": "assets/js/16.2eb80763.js",
    "revision": "21b3c7cd133dcf28e8dc67a02958b978"
  },
  {
    "url": "assets/js/17.246f2f6e.js",
    "revision": "17cbf8da7b19adf503c3a3e7d1fc3d2c"
  },
  {
    "url": "assets/js/18.5ac0d812.js",
    "revision": "d49424e2bf18ec7644f11aff7d99b77d"
  },
  {
    "url": "assets/js/19.509db40d.js",
    "revision": "2cbd412b16ed97bd3cad6c7c7eed6fe3"
  },
  {
    "url": "assets/js/2.b87d4e36.js",
    "revision": "9b7d40ec29c8e86c5b5a984f0440f074"
  },
  {
    "url": "assets/js/20.97378ec0.js",
    "revision": "7a27f6a30add971c87dd8d645950ea62"
  },
  {
    "url": "assets/js/21.be12273a.js",
    "revision": "304ab2e426e8c9b32849cfbc538fe553"
  },
  {
    "url": "assets/js/22.a8494330.js",
    "revision": "12883a521b0b8b18d449fe610a334551"
  },
  {
    "url": "assets/js/23.a5b1b582.js",
    "revision": "8635d942365592b79c8e847634f5a8fc"
  },
  {
    "url": "assets/js/24.ad9d9159.js",
    "revision": "136ef2d743066b607a42cfee5bec5ffd"
  },
  {
    "url": "assets/js/25.985b8f55.js",
    "revision": "fa5d1a282dd34f9639c5934b784d4e79"
  },
  {
    "url": "assets/js/26.ae654bd2.js",
    "revision": "e85902aa764095ef3591c9762a0ce07f"
  },
  {
    "url": "assets/js/27.3339eae5.js",
    "revision": "d029768bdb815f9ee120b8b7146ec8fc"
  },
  {
    "url": "assets/js/28.5cc6f76c.js",
    "revision": "5062a0f81166a2034d07774c027fd390"
  },
  {
    "url": "assets/js/29.813acfca.js",
    "revision": "1e1d76a792da0eed77dc456717862ed0"
  },
  {
    "url": "assets/js/3.23151886.js",
    "revision": "1d5d0376e4175198bde900ef976cd52f"
  },
  {
    "url": "assets/js/30.f379e434.js",
    "revision": "256063a0e27d63cd2986ccfe36060436"
  },
  {
    "url": "assets/js/31.6c018c9f.js",
    "revision": "346ff843272cdfe985dc8f647af2e8ba"
  },
  {
    "url": "assets/js/32.6513cacd.js",
    "revision": "cb1c45e7e92230149c5ac2c5d4f579b7"
  },
  {
    "url": "assets/js/33.190f556a.js",
    "revision": "969b788ecdcf3ee7301741d55fb56818"
  },
  {
    "url": "assets/js/4.aa15dd72.js",
    "revision": "376b450add625bc37948168946e55299"
  },
  {
    "url": "assets/js/5.91d0ff88.js",
    "revision": "5d7b8987e9a835c5af6ded34f617fdaa"
  },
  {
    "url": "assets/js/6.3053ae6f.js",
    "revision": "a103e83fa6e950d7ba0af42e6512ac45"
  },
  {
    "url": "assets/js/7.04f241c6.js",
    "revision": "3af352428a01423fa4e78b7fd361efc4"
  },
  {
    "url": "assets/js/8.4db63098.js",
    "revision": "818829d92a082b40a731ed90943c7f13"
  },
  {
    "url": "assets/js/9.c9761f50.js",
    "revision": "6a358c89ed5bc2cfa178072c84e88894"
  },
  {
    "url": "assets/js/app.1ae1ba1f.js",
    "revision": "eb7dfad07f0c76c8bf82b532913b0d84"
  },
  {
    "url": "configuration.html",
    "revision": "fb93a3372ad10aeb6f0c7d7dfc9f80a1"
  },
  {
    "url": "examples/backend.html",
    "revision": "cda99eed58c15db15569f18a96257617"
  },
  {
    "url": "examples/i18n.html",
    "revision": "009fc6f23ef4e23458004a12f9b2fd17"
  },
  {
    "url": "examples/index.html",
    "revision": "281b5c13d678cbec1f3b557d917affd4"
  },
  {
    "url": "examples/multiple-forms.html",
    "revision": "7d142a602c277927671950dbab85d326"
  },
  {
    "url": "examples/nuxt.html",
    "revision": "754ebd8f34b9a624678ab82a6c3a69fb"
  },
  {
    "url": "examples/ui-libraries.html",
    "revision": "45871466463e88f6263b6d650ca5b4c5"
  },
  {
    "url": "guide/a11y.html",
    "revision": "7de4805c822b5932f64efab36a63a6ee"
  },
  {
    "url": "guide/advanced-validation.html",
    "revision": "166a97bda2e3a87718b6a6b635cf4536"
  },
  {
    "url": "guide/applying-rules.html",
    "revision": "73aba86c16d37c59ff77b9bc8aea8a15"
  },
  {
    "url": "guide/basic-validation.html",
    "revision": "5bb229d4d9f898931d7bface17c93f80"
  },
  {
    "url": "guide/displaying-errors.html",
    "revision": "ab3c16ee42ab5078b43dab6721b985c5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e3a2f65c8d633e66713e1b196eea930f"
  },
  {
    "url": "guide/html5-validation.html",
    "revision": "f4d92c8d9494539b4ac1c9d33f1a0053"
  },
  {
    "url": "guide/index.html",
    "revision": "0dd780fe5a71514fe69f0877dd08d95e"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "5f076714d1c75e933485641ef52750e2"
  },
  {
    "url": "guide/localization.html",
    "revision": "af3b63c99ccf6f5d5d6aafe20edc2de9"
  },
  {
    "url": "guide/styling.html",
    "revision": "b9464a2303ed743aacbd1d6521b77648"
  },
  {
    "url": "guide/testing.html",
    "revision": "10266d23bde8ed01ff6a3d2a3ae18941"
  },
  {
    "url": "guide/validation-observer.html",
    "revision": "b3005054df4e8495b367039c154d344b"
  },
  {
    "url": "guide/validation-provider.html",
    "revision": "451ad5bc1162dd691421b686f35c0341"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "5db343620809903c63e8d8e0fc10c1e4"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
