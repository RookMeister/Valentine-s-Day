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
})({"src/words1.js":[function(require,module,exports) {
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
var canvas = document.getElementById("b"),
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
logo.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAABkCAYAAACFFYuIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAASVElEQVR4nO2df9AdVXnHPyeTyaRphmZiSqnNpCljM5QyFBlLgcFMEEoVFC0liBRRkWFo61CKiBSUTqbDUOtEy6QdQCqaUqqINJYiKBaJWBREKtViBEkpRlREQH4kEEjy9I9zLpz73L337t579+4N+/3M7Lzv7t1zzrO7z3737Dl7nhPMDCGEEC9/5jRtgBBCiOkgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJYgwRdCiJbQuOCHEE4JIZweQpjftC1CiOkRQtgrhHBaCOHqEMJ3QghnN23Ty51gZs0VHsLpwOVp9TbgcDPb1ZhBQojaCSGsBP4cOBaY637+HTP79vStmhwhhLnAQcAPzewHTduT40/2tPnd7P+VwM4QQmf9OeAZ4CngJ8D9wH3APcBtZrZtinYKIcYkhLAC+DBR6PtxMLDbCn4IYQHweWAVsCuEsNrM/rVZq16iacHfNOC3+WlZAuwNHJr99nwI4RvAtcAnzeyp+kwUQoxLCOE9wFpg3oDddhErdLslIYR5wL8TxR5ik/nbgZkR/Kbb8D9NvMhVmQccBlwCPBxCWBdCWDRRy4QQYxNCWBBC2ACso7/Y3wN8BDjEzL4xNeMmSGrG2QC8zv10ZwPm9KXRNnyAEMLdwIETyOqnwJ+Z2WcnkJcQYkxSJewmYjONZxfwT8AlZrbb1uoBQghzgGuA491PnwNWm9mO6VtVTNM1fIA73PrbzCyYWQB+AXgF8FvAMcB7iSfxZwX57AlcG0I4p05jhRDDSV/dfZFisd9I7Jx918tE7NfTK/Y3A2+dJbGH2RB8346/ovOPmT1nZo+b2ffM7EYz+4iZ/SHwq8CbgS8X5PfhEMKZNdorhBjOFcQvVXJ2AO83s8PN7H8asKkO1gInu20bgTeb2fPTN2cwsyD4/rOl3xiWwMx2mNn1ZnYEUfgfd7t8OITwqkkZKIQoTwjhBHpFcBvwJjP72wZMqoX0FuMrl3cQj/O5BkwayiwIvm+e2bNKYjO7HjiE2IbfYR7xO18hxBRJTRwXu807gGPM7AsNmFQbSdTzCut/AX9gZs80ZNJQZkHwf+7WKwk+gJndD/yF23zkyBYJIUblUOJn1DnvNbONDdgyDY4BbiB2QB8x65+IN/0dPvQK/h4j5nO9W182Yj5CiNF5jVv/NvD3TRgyDczsu8CbmrajLLNQw/evP4MGZgzCH8tM9Y6LblIclSNDCAubtkVMlF9x65fu7uFSQggnhhDOS6Nod2tmoYbvhXnUIGq+k/ZHI+ZTO6mz53Ti10ZXpVrCbkOy/wTgKTP73AjplwLfIo6ivj+E8OomQmWkwTKHEZshfhvYN9m0B9EPfw58DXifmT1QQ/mLgFOARcQ+qMeJIUWeJ94Xc4kVoM7fecmuxURh3QtYSnyb3QFcYGafnrSdFfFv6Lv7Z5cnA1dlm/6mKVsmgpk1uhCd2bLliRHzWefyuapkuhXA+cQh0XcCtxIHUZwNLKvheBcAt2d2bgdOnnAZBxNH/T3izokBW4Hvp99PBOaPkP/Xs/zOGCH9p5xNJ0zZ5/Yn3sRPFJyfouUrNdlxV8nyyy5bm/aRdF7zvA6e0jWt63g2ZflcMk0/reU8NW1AOqn5xXl2hPRHAztdPkcPSbMIuLognV/WA3tN8FjXF5SxE3jjhPJfU1EkHqxSNrE2mae/qaJ9+xWc8/Om5GfLgOtKXPOec1STPVsr2jFsubNpH0nnN0+7Mm0/FDgL+ACxMnUS8Tv9ebPq88SKQZ7u/Ao27UusGN0ELJqGf5eyq3EDemv4OyukXZgu9gsuj68PSbcnsLmig4xd2yc2g/Qr44lxywDOGUMsSokuMTBUnu6LFW30gmBMoeZEjHHy6AjnZTtwbk02/Snw7BjXrLNsAT4KLGnaR4hvynmaI4nNZv3yfDb5xKpZ83ngXLf/8SP6+UV1+3dpuxo3IDZxdN1gQ/bvtLuuAx4ruIhPAvsMyeP2gnTDlv8G5ox5nD8eUkYl8XT570cUpzy/TbwUjnZ+2m8x8Y3opoLyzyxRzskuzeUVbHxNn+O+pmYfO5beSkEu6Lemm/toYl/QImDulPx/IVEU30ns18kX3/T18XQsryc+wA4AFs+SjxDDKeT7v77AZ/otdwEHzsrxAP/m9l1ewba7s3S3TMOXStnVuAHx5spP6tMFN8RbgIuALwFPD3CYR4ADhpR3UkG6h4lvCickBz0duKVgv8rt1Vm5H3B5bSUOP/dllK5FuPw3uHwuZcgDCjiD7uaN7SXOn6/1nJ+2dyKY7jEgrReDsR90Jc7LCmIlwJf5GHAhFQSzgXvjQGfzWDXFafhIukfzMo5N93DZ/ortwOmzcDzAQ7m/VDzXuX7c27QvvWhX4wbE5hUrOrHELxIeLOko11Cirb3AIf+BPrU54ENu37tHPMaFBaJzVvrtUrd9cz97BuS/1DnxpmGOn6W90JU/sE2eGDsk3/9U4lvXnZn9CwrSHTTg2pVqex7x3BcJza1lfKXphd7KUKkPEZr0EeLkH/m+x2e/db4w2ptYsVoD3NvHJ45r8niIFZg8/1srnu+8r67Sw6JWn2rcgHjh8pP/4+y3QSJhxNf0a4FDK5SXd5RtGeQk6aL7ZpilIxzjWS6PzaTOKuJngP6t5ZSK+Z/h0p9VIe1ceh+q+w3Y37+VvDEt+bYTC9L51+NvZf/XUgMCjirwmS+VFYZZWOjudxj5a6Fp+UjBdT6pRP5H09untnXQvVb38RCb9vLf11U83xe59FNpIhy2zMLAK//dbh5h7nv0Dsx6HPgs8G7g18xstZl9rUxBaZBPPnjiARswKMRitDs/gnf/MmVlZc6hN67PB1PemNnPiJM/5FyQ0pXlcLe+sWxCi+Fbr3Cb3zIgiR8n8QzdcYwAXpuvhBD2JT4UOvwHkEdLrGsC+9Vu/UfAHw265jNIPp5knNHj0/IRHyFy6FgfM7uRGA8rH4+yALhgQLK6j2eJW/9O2fwTD7v1xRXT18IsCv6LA3AsxqV4LTFOzhuIAv+KJPJXmpkXmmFso3ug135pWrJB3O3WVxTu1Z+jgOXZ+v8RZ/rKWUt3ELkVxO+Fy7KvW686cbIPM33EgH29OG8Dvkm3/Ue7ff6Sbl9b5/IZdXT1MHx43rU247FOCsgFdBzRmJaP+ApaqdGp6V5+h9t8ahrkV0Tdx+MF//6K+Xs/k+An/ND6Locxs3vM7O/M7AtmNtbo2VSzy6dQW0Ls0R/ED9161Vg/73brH/U1zCRCH3L7va9CGUvdetVofd6ZffCrHF9jey4dzw3ZtuUhhMMAQgjL6X54/SDtm1/3uvxwuVu/saZy6iQX/HHCUEzLR7zQlb5fzOybdN+f8yieQAXqPx7/oPlJxfy9PRL8hHeIukOLXurWzwwhXBtC2BtiE0wIIY/Y6eNa/2LZgkIIi4lfKXTYBnyyz+6X0R3X/4AQwqqSRXUJgVWfeMEHsPO1m0F0aufXuO2dZqwL6H5IdGKrVCljVHzt8n+nUOakyd9I55R4I+3HtHzE7/dLFcvxNe9+Tah1H48/z1XfDH2okJmIwzMLgu+ffLW+cpvZP9NdG4U4PdnmEMIjxIEgj4QQ1qTf/JN+a4XiTqTbcT7Tr0nBYgztS9zmsrX8rjzTg6YKg/pRPD720SIAi7HOc0E9LoTwHuL35R22AR9L/+c3WF0zA/mbbhb8vSpeeEat5U/LR54Ykm4Yvu37l/vsV/fxjBuM0fteXc2WlZiFG8DHv/dP3jpYTZxzssiWzoV5Z/rrHaPKq93b3LrvKPJcRrfjHV1y5i7f1OXbrofhJ5Ef1HTmb4xF2f/rsv/npPW8dn+lmXXeYvLrXlfgNB/wrOp5mQV8hWPUDu5p+Yi/P6oKvu9Q76dRdR/PSH0RGf4+qevDhErMguD7cKpFE5RPFIsz1bwBeD/9m5A6bXzL3Xbfpl9ICGEZcSBShweGfU2UOq4+4za/skRxPl/fbzCMP3br/zlgXz+dZC74V9L/gb2D1F+SamP5DVTXQ36jW19T8eunWWBSQjEtH/EfUlQV/Fe79S199qv7ePyb+F4V8/cPLtXwE76G/+g0CjWzXRbn1/x14uefnk+lv7/ptpftrfdf2awvmW4t0dl2AZeZ2W0l0lzn1o8LIfgvZQoJIexP7/yjGwYk8YL/4vVLzVUf7JPuH82s8yXFPu63qh1iZbmC7htvFbBhN4trPinBn5aPjFzDT31nJ7jN/cIr1308474desGfiRp+4wMBiKMe8wEKEw0VXKJ8P2jIiIOtOnE48gFCL1ByAAUx9k6e5/IKNs1nQIiCPmn8iNKtDAk7TBxc4gegDBxNTJy0Od9/bcE+PoTCQ2QRA4lBw0Ye1FLxvPiRwR17Ti57LZtc6I2oOXIoiGn4CLFvJt/3rpK2zS/Qgs1NHg/d4bPvreIvxDhHeRmlwkXU7k+NG9A7wm7VFMteRnEAtlPT73PpDs50X8l893H5fTX7bS6x420xsblmWfq7V7pZFgMLRziWgykOEHZLErfl6aZaQPzy4eICMXkBOGxIOce5ND3B04i1ug0pvzuBFe53H06idNjZEc7LnAIh6SyPEQOSnUL8rrsnJETD98bCApvHCeBXu4+k852HJNgC7D3ErlXEgU3eroGVv7qPB/iE23d90b1JvKcPJcbpWpq2+dDKQwMTTsWnGjegN9pd5dAFI5a7J8VxPG7P9vEX7eMl8p1DDFWbp3ua8pNt5MuTwH3EcACXEJuJ+sbWBk4boYx8GTo8nd6H2SdGOPc+MN1IAeMqlLeQ4rDM/c75w0ShejJdt9LD9ids9wpn20iTAzXgI0WTkDxMjFa5nvjWtS5dky19yrmu6eMhduz6uROeTHavIfZJfZ7u0CibUtr9XLqpzPkw9Hw1Wnhv4LTSM/aMWe4BxBlw/MV/lCwmPb3NPX3jghBr5hcxPATyuMt2YsC3wpoesbZadWKNnWVu5KyM/OG1foTzf7crf/mUrvuZjBYTf2yhHdHelc6Or04o31p9hO5m0FGWq6nWfFLb8dAbaK2UrxDfGPPta5rwoZ7jabTw3sBpt06hzJPofauw5DAr3b5LMkd6kj5NLUSxf6ggzzqXngBlmT0riEHlyszsdC8Vm9FS3p30F49wDfJp4zZN2ecWEEM8FzUh9Fu+39D9caSzY2ITsdTpI8Tw4lVnFbPkF8fO4PGcS7mJal4ATktpvOCf04QP9RxL4wbAXxPF9F4GRGmcYHkPFlyoR4GD+uz/OmITxCCBPX4E5x53Gdq5TeygOpv4Kr05nefO/J7XENvjK7cJE9tOtxPbwF81Qvp8Iora2u9Lnp8zgMuJk+I8SHx76YjG08S3kZUN2TePl2K+307FjvwK56AOH1lCbBLdHziPGEVzU8p/ZypjC/AVYliRgX1HM3A8S4lzWtxOd7/fE8SpDC8m66sg9h/k9+vAcM/TWkIyrjWEEK4jXnSIn05dSYxeOfKngSGEA4ivsTn/krbdT/xU7afEwRj5siPZMJd4c88nftfeWRanv2vo/g74y8DvW4NRH0MIrwSesjhCuGrafYhtuI8D77A4LkL0IYQw12KERzEjpKBuOwZdlxDChcC7gDuAt8/CNWyj4M8ntvnNB24ws7Hjq4QQ5hJrEvn33YeY2R0TyHt+yjsfuPEnZnbZuHkLIdrF0FjVLzdSbfJjQ3eslueOEMLNdMfUXk18so/LUfSO0isKCyGEEAOZhZG2Lxd8FM5T04Qr4/JWt75xEm8lQoj2IcGfEGZ2M93xOBYRB2OMS36NdtE/dIEQQgykdW34dRJCWEEcJLWMOIXf75nZWJEgQwiLgL8ijlm41MwGBTYTQoi+SPAnTOrA3Rf47iz0ygshRAcJvhBCtAS14QshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREuQ4AshREv4fy2IFzzNQX5XAAAAAElFTkSuQmCC";

logo.onload = function () {
  var posX = (w - this.width) / 2,
      posY = (h - this.height) / 1.1;
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/words1.js"], null)
//# sourceMappingURL=/words1.ef28f71b.map