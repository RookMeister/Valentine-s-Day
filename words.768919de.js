// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/words.js":[function(require,module,exports) {
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
var canvas = document.getElementById("a"),
    ctx = canvas.getContext("2d"),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,
    logoParticles = [],
    particleIndex = 0,
    logo = new Image(),
    hue = 0;

function Particle(x, y) {
  this.origX = this.x = x;
  this.origY = this.y = y;
  this.color = "white";
  this.maxLife = this.random(20);
  this.life = 0;
  this.vx = this.random(-1, 1);
  this.vy = this.random(-1, 1);
  this.grav = .04;
  this.index = particleIndex;
  logoParticles[particleIndex] = this;
  particleIndex++;
}

Particle.prototype = {
  constructor: Particle,
  draw: function draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 2, 2);
    this.update();
  },
  update: function update() {
    if (this.life >= this.maxLife) {
      logoParticles[this.index].reset();
    }

    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.grav;
    this.life++;
  },
  reset: function reset() {
    this.x = this.origX;
    this.y = this.origY;
    this.life = 0;
    this.color = "hsl(" + hue + ", 100%, 50%)";
    this.vx = this.random(-1, 1);
    this.vy = this.random(-1, 1);
  },
  random: function random() {
    var min = arguments.length == 1 ? 0 : arguments[0],
        max = arguments.length == 1 ? arguments[0] : arguments[1];
    return Math.random() * (max - min) + min;
  }
};
logo.src = "data:image/png;base64,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";

logo.onload = function () {
  var posX = (w - this.width) / 2,
      posY = (h - this.height) / 8;
  ctx.drawImage(this, posX, posY);
  var imgData = ctx.getImageData(0, 0, w, h),
      pixels = imgData.data;

  for (var y = 0; y < imgData.height; y += 3) {
    for (var x = 0; x < imgData.width; x += 3) {
      var alpha = pixels[(imgData.width * y + x) * 4 + 3];

      if (alpha > 0) {
        logoParticles.push(new Particle(x, y));
      }
    }
  }

  setTimeout(function () {
    animate();
  }, 800);
};

function animate() {
  ctx.clearRect(0, 0, w, h);

  for (var i in logoParticles) {
    logoParticles[i].draw();
  }

  for (var i in logoParticles) {
    logoParticles[i].draw();
  }

  hue += 1;
  window.requestAnimationFrame(animate);
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50758" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/words.js"], null)
//# sourceMappingURL=/words.768919de.map