'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "5a748f6dd640e8b8cb667b25e36468c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "507cb488eab9af29504a716dd68129bc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d0de07cf67ea49b1791977d0449f2896",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a337e59d89300c0e2e331e1bd27daa8",
".git/logs/refs/heads/main": "5908be761e9b14ed7be77caee929cea6",
".git/logs/refs/remotes/origin/main": "d00efe71d32dcecda5de4fe62adc8843",
".git/objects/04/bf5d207f6ba7dfa2c257936da358e242de1add": "79fb5c02e602843865d9b266b7a69ad2",
".git/objects/04/cc33df8c6b41f6b438f8074ea159d57f42c86d": "6ced2e0159e5f856a8f173c71df4ef6a",
".git/objects/09/732a3d1d0268dce02c21a8a54cc40253ebc878": "3176831df0e5d0c70e2b56655d4cb6a4",
".git/objects/0a/f6ce52f27192d43a3777ecc2b4436f9b2ca6ac": "2673a25de89a88410d822066b92f6eed",
".git/objects/0d/480aa0b5e160d1d7cde73821aa41c45a29d390": "3d86d88e9159f387f3d779f14700ab7e",
".git/objects/0f/1f498e792159d58a45fa882c5061ec6d05ad49": "d1a27db43ccd31d08a46f3ff9d676023",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/c79dd0047f570afc36259006d89677248235b5": "9257f76a8e04dfa90302e65830117654",
".git/objects/15/986b418f28c67897626b48365483b1a01e4a27": "6880f8f07292a2098e4715e3e960fe12",
".git/objects/20/af81ec6cd125f95312ee292fbebf538c9300c2": "2f18c9b046c2efcf4e24d87f8598e1d7",
".git/objects/21/ca90900a7a0024b12ca9e5836aa68116799b39": "ef7f1bcd47553357ffa7c4c6ba4d7df7",
".git/objects/23/160ce55c8b3c8771ed71a4ba8284b9bd45dbb3": "b053f87271387b9780eda93c71f80e78",
".git/objects/28/ee881a6421d0385bc34326bb6c74255b8b98b0": "0daa037b33edd59e5745c2f0822bbf08",
".git/objects/2d/21055cc83e75ed3c023c48e581985729884511": "ae41bbe0e12c142a60725bc83580fa22",
".git/objects/30/9485245105264dd4ed64d19a7369834374d458": "b65e1cedd904df7da21bb2bdda0705e4",
".git/objects/30/99557cb01aaa7d7b9cbf838ba9eb77524772b9": "bb6cd966e2125d7e61eedef89a780b3b",
".git/objects/34/4447f2e83d314e1e92baa3394b2029b41fe830": "4b77c0ce7983601a2dadf1203e4cb5c7",
".git/objects/37/1690c9b7207fcdbb4d76945e8dc431e4fa2e76": "499c32c89333c36faf59d850ac3fa88f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/339d832eb491fed6c06854dfb0d71851d72ecd": "45075dfe4f548e004f8a914f71305c8c",
".git/objects/3e/dc491d8d2f1bd0cc5dc99be6708da81e9dffc5": "9c723e867f3e0599d9fda6fff7d60a19",
".git/objects/3f/3dac6798c2dce1c1ebd2aa8fccf98a5f8016dc": "a2806799bf20567bffbb9ba1dde31ff5",
".git/objects/3f/989eea3652d993a0e307d895db8c316baa00b0": "dcb1c79489dbd3baf3d83f4964fcc3e1",
".git/objects/40/d065a9944babe4e77ee320c3e6115d0ebffc2b": "ba77911fbf97db742e3f50268baf009f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/230b3b8f7e03bdbae3464a21ebd11916813405": "c61054c822e6bdd5605539dd035525bf",
".git/objects/42/e4ce06683e1de058f7d7c65d3e4014f710d00f": "8b3243a2ca47fb49a14b3c1cc28c85c5",
".git/objects/43/dc775d6108eee2ed1b8b0acb49352ae4fc5b94": "4dfa58a3d9baab92c173d27a36038e93",
".git/objects/43/fb64af6a20d047cab3a0c39159ca7752d10078": "032e706d42e9dac118edee5c4809f22a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b8cda87edee44d7b2d6cbd4ce68b2b0dae5deb": "c5e0daa581c0d6b07bfed8e027c71e21",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/26fc32a0f9f5581439bf1363f9dee4382fcfa0": "f8ae5f70e59b7f1fb0be180676780c90",
".git/objects/4e/9c61b10611f35e020d53612d3aaf1cac373534": "fc107cddef529f256122a522f8e5a63c",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/c4d9582355cc437d9fd66d67e031a44e698f65": "05df9bb345346424d5471425eefd66b5",
".git/objects/59/0441bacc337ec2d83664f4b87d910d3f026974": "93318dfbf186e0dda494ba5bb493ba95",
".git/objects/5f/8908636e6c27b15995512fce47b0a24461e5f2": "c1fc4137e72236c2ae2fbf4bf3db990b",
".git/objects/68/1305e2b3d8e5e15bea22376e735aeb960e7554": "728dcdaafe79bee55c008fb2bfeb9265",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/bd34586d4aab100477b8edf51730bd4ff1a90c": "c05fec081d08a22eb8d91e9311fa87eb",
".git/objects/71/c4f4110adcdce5db4d405bb313adbf57820a89": "97ca08c80c853b4a76ea64a1238cd610",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/abf1997e2ae92163b8b3c4d406dd5a77c8e7ca": "54a478378b596ef09d781a70a6cca515",
".git/objects/75/81786da3375664a094121ebf18ddad2d9a6189": "437e757b0eff2cbba2c62378ec47fea9",
".git/objects/75/96226447b2efae61536da49798a4f21f0439a1": "75aa1d59ef4698a91e325faf64143888",
".git/objects/77/5c7c7fdc6faaa30cbb7a824760cc19a1fbb34a": "f601699aae996df6d7ad2cb5ea3bbdcb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/63bf0298e635c393d2360413d52ebf678269f6": "a64c38b74fdb987c52e99a22ec65fd24",
".git/objects/7b/2d435c8e02016aca18f8cd8dfeabb7393a7514": "3ebc7c51a0a50bb0277e2fea80fb8e14",
".git/objects/7b/5aeacb2dbcc01413ba414f117b207c2d4eacd7": "7192629e4a80404bd8a96bebc94f792a",
".git/objects/7d/e7c1371f34c4e1c40aa1c2c613a8813d3ecd5b": "2c88b2b3c1466f8dd5f4c7c475bff73c",
".git/objects/7f/b2f130bc0f55fa781b4405945a89e4ec91105d": "1560afaea6b5d926ba1fc837a8bf49d0",
".git/objects/81/5d9e31d7466cac65c7ca03992ce8988cf35d8b": "cb249dfd6f25b1f953e081451fd36e8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/fc9f0f11aeb5f35b284d55685038a0445825ca": "69c34f98bca69c48c3cdbf98f40ee61b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9d32ab1de9c6eb8514a51a66bf6a624e5a7ece": "b905550ec530a11f111506b3a962b2a4",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/c8bc7bf775e4306d0452ef83e115d942464fe7": "b5f5aca011953493925ee48260e209df",
".git/objects/94/e52f53295ac5be60800e41fb9b66b4cd68ad61": "765e6356093c29de4716b261827349cc",
".git/objects/96/876388ccfed88c4a92d220729656030f77d825": "b75648046a12ec823f2fbfe7a4e35ef2",
".git/objects/97/baded02240d3cbabd1c47895bc210237d70b24": "c666e5b45e439da24d27c3fb174a5f68",
".git/objects/99/933d7c1425e5a3b08487f80f47950f18cee08b": "8c6bebe9b5d6558439f0a494ebf5a6ff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/8ec623443da3c296d6753fa49265f0bceed35a": "dd7d9110451d1922031ef02ad23984bd",
".git/objects/a5/abccf7ebf37eacf27f200d1bd42006703cdedd": "25c8bb04910308c7b13db042b6592062",
".git/objects/a8/68f4403071d2c04910729331add37490ff3386": "44aaeaf6eec53c16f0f82a4e9d97ee97",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/c9a4bfc491aefc237ed3412e1f45fccd3ed5b3": "34aa8ec0c1e5a8a530706b1635cf8c0d",
".git/objects/af/3a7c12eee6b1e4e99a9007d1e4ee653dab4e4d": "e78356a654b7909ceea25fa4969463ed",
".git/objects/b1/d704930f3f4b989410083b4d0d44f9e7827a36": "c304db01ebb98cd5b757ebdbab4f07f4",
".git/objects/b2/e6d7788fbb90ab17c2f573bde90d494ba0c214": "5a0b0246833792dad96120a141653f2d",
".git/objects/b5/6596e07ab5209f829e28a2ad1bf89fb35936c0": "7f0bd61499c172f334576cc4cf09a362",
".git/objects/b6/1a9943ce97a9ace345ffd79aa5a82afa9f6757": "6cd8ef0a689b221f20af6a82e898dcd1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/4f3cd61b24bc0f2b2bd779ffe19690ff535ad8": "eb4a6e7da6fc7d2910b65d718d4fae2d",
".git/objects/bc/3bcdf7d53319279b47f9a24a5c74434b372c88": "ce778a2762e9d414c886ae45b2e68492",
".git/objects/c2/762913d43488725b934c62a85b993edf80fcee": "5ebedb597cacb817fdfac243b2af73d5",
".git/objects/c9/c0d086b22edbee770f96b56d195b2cbefade4e": "c133246a09749a7bd6975904f0f26547",
".git/objects/c9/ccd21f0c1894d45bf8df204c7599b397a39011": "99d77cd512f6877e7916bfba254e157f",
".git/objects/ca/6c6f40efb54ec142a65788dfeaf21a6784d039": "1001483d4396b0467b182e9dc6ad0714",
".git/objects/d6/933dfb9011647e26c330845eed4c5d76974900": "640936c6ee16842bfed4c682a3ce503f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/1b8755d013faf51e08981758eccce143c92ac1": "d38012c4ffa291dda611fda0b731bebd",
".git/objects/d9/60b8bd37bd0b17924027b43cd32232d0c05ea2": "1ceac6b3c8ff757af038b462c65679b9",
".git/objects/da/a38391237baffebd19d60211e1853130c5bcd3": "a6c122092df3f46e672c69ad95a4e7d6",
".git/objects/e1/856599c0082e02120fa276195496c6570afe90": "6d5582246ce0c738eebcc881b4e54775",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e4/8fac968128ffeda45afd37909b6f8882bc4344": "07708e3850e99514ab33f08fcfbb6326",
".git/objects/e4/9b5e4b6de0be36f47a592f9d9757aa4eb180be": "8610cd7444cc642698402ddb0bfe5d47",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/ba7a3668f41770c110992096fa5e518feb15f8": "71670830a6120cfb7977ed8f200bf4d2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/51a5ca161add0f0b49826065a9335fc2c8643a": "eb55e100d0dd36764b846300cdb198b4",
".git/objects/ee/368e1fea406b35ddd1f1dba1787e88c3c17238": "7722ffeb01446cd7402067262b748b94",
".git/objects/ee/b05718a038467cb7c38c6407ebef8e37a41967": "15878d4983dfffe71d77ec876965f852",
".git/objects/f1/0e747b9b2f2dc916677e9dfc1dacff8e76887e": "34dda8aa1af9f4b6225dc2b7f5a739e3",
".git/objects/f7/01dfa9b0b192d1a6028141a2286cad0f7be2c2": "64ab4f0bf146e89d2a2b1d65fdf43452",
".git/objects/f8/afc156136d7d326480848cdfb64a20c7b2bc51": "47785fd675c39125e52cda644f0e8a71",
".git/objects/f8/ec556f5b4b69ef2dd7dfb3d8e2160d2ea7b203": "c819d923a56ae68b58c421a9cff108b9",
".git/ORIG_HEAD": "3335f3f96f91aa814a309482d0ceeb22",
".git/refs/heads/main": "3335f3f96f91aa814a309482d0ceeb22",
".git/refs/remotes/origin/main": "3335f3f96f91aa814a309482d0ceeb22",
"assets/AssetManifest.json": "c0a0cb820ed77184056672633fc8f037",
"assets/assets/background.jpg": "65be335545bee92f92ce64338b0aad16",
"assets/assets/MainLogo.png": "11e60a8c4297ac0e706c8e05a543e58f",
"assets/assets/phoneFrame.png": "20ec79850d91df1299c0580afaf37b67",
"assets/assets/screenshots/1.png": "215fa7ebe8e4f3a993004776d7707531",
"assets/assets/screenshots/2.png": "132a9c61df215df319bed96d2d2f3c74",
"assets/assets/screenshots/3.png": "16c0bab5bb9e1ff47ab2e6e601583c32",
"assets/assets/screenshots/4.png": "517c0cc297ad159fc7953af693d46163",
"assets/assets/screenshots/5.png": "c6cf3b615a33937bf170661740f80ddb",
"assets/assets/screenshots/6.png": "afa022d07e5ca1e4053dd1841a035bce",
"assets/assets/screenshots/7.png": "5a691fab00ddb76735ccb27cca223f9c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "8b8c28f40a714dd70518d03f32dbcd90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "bb59348f17d87a48a8aacffa9d316ec1",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "4c8722a335b4849c6b517b53465bb355",
"icons/Icon-512.png": "ab20d3342949ebaef51ed47647bb9b28",
"icons/Icon-maskable-192.png": "4c8722a335b4849c6b517b53465bb355",
"icons/Icon-maskable-512.png": "ab20d3342949ebaef51ed47647bb9b28",
"index.html": "4e15e92510eda4bee8f870086720dab3",
"/": "4e15e92510eda4bee8f870086720dab3",
"main.dart.js": "b932d63f4f7fb236e6819f03d60514de",
"manifest.json": "74424175199f2966aed91a4368e7d74d",
"README.md": "9c983ee9994effc335f31c458b49d1fc",
"version.json": "5d00faca82add01f832ecd872e8442c2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
