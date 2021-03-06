!(function (e) {
  var t = window.webpackHotUpdate;
  window.webpackHotUpdate = function (e, r) {
    !(function (e, t) {
      if (!_[e] || !b[e]) return;
      for (var r in ((b[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, r) && (h[r] = t[r]);
      0 == --v && 0 === g && k();
    })(e, r),
      t && t(e, r);
  };
  var r,
    n = !0,
    o = '95fca96626188ddaf018',
    s = {},
    i = [],
    a = [];
  function c(e) {
    var t = E[e];
    if (!t) return O;
    var n = function (n) {
        return (
          t.hot.active
            ? (E[n]
                ? -1 === E[n].parents.indexOf(e) && E[n].parents.push(e)
                : ((i = [e]), (r = n)),
              -1 === t.children.indexOf(n) && t.children.push(n))
            : (console.warn(
                '[HMR] unexpected require(' + n + ') from disposed module ' + e
              ),
              (i = [])),
          O(n)
        );
      },
      o = function (e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return O[e];
          },
          set: function (t) {
            O[e] = t;
          },
        };
      };
    for (var s in O)
      Object.prototype.hasOwnProperty.call(O, s) &&
        'e' !== s &&
        't' !== s &&
        Object.defineProperty(n, s, o(s));
    return (
      (n.e = function (e) {
        return (
          'ready' === d && p('prepare'),
          g++,
          O.e(e).then(t, function (e) {
            throw (t(), e);
          })
        );
        function t() {
          g--, 'prepare' === d && (y[e] || C(e), 0 === g && 0 === v && k());
        }
      }),
      (n.t = function (e, t) {
        return 1 & t && (e = n(e)), O.t(e, -2 & t);
      }),
      n
    );
  }
  function u(e) {
    var t = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: r !== e,
      active: !0,
      accept: function (e, r) {
        if (void 0 === e) t._selfAccepted = !0;
        else if ('function' == typeof e) t._selfAccepted = e;
        else if ('object' == typeof e)
          for (var n = 0; n < e.length; n++)
            t._acceptedDependencies[e[n]] = r || function () {};
        else t._acceptedDependencies[e] = r || function () {};
      },
      decline: function (e) {
        if (void 0 === e) t._selfDeclined = !0;
        else if ('object' == typeof e)
          for (var r = 0; r < e.length; r++) t._declinedDependencies[e[r]] = !0;
        else t._declinedDependencies[e] = !0;
      },
      dispose: function (e) {
        t._disposeHandlers.push(e);
      },
      addDisposeHandler: function (e) {
        t._disposeHandlers.push(e);
      },
      removeDisposeHandler: function (e) {
        var r = t._disposeHandlers.indexOf(e);
        r >= 0 && t._disposeHandlers.splice(r, 1);
      },
      check: x,
      apply: S,
      status: function (e) {
        if (!e) return d;
        l.push(e);
      },
      addStatusHandler: function (e) {
        l.push(e);
      },
      removeStatusHandler: function (e) {
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1);
      },
      data: s[e],
    };
    return (r = void 0), t;
  }
  var l = [],
    d = 'idle';
  function p(e) {
    d = e;
    for (var t = 0; t < l.length; t++) l[t].call(null, e);
  }
  var f,
    h,
    m,
    v = 0,
    g = 0,
    y = {},
    b = {},
    _ = {};
  function w(e) {
    return +e + '' === e ? +e : e;
  }
  function x(e) {
    if ('idle' !== d) throw new Error('check() is only allowed in idle status');
    return (
      (n = e),
      p('check'),
      ((t = 1e4),
      (t = t || 1e4),
      new Promise(function (e, r) {
        if ('undefined' == typeof XMLHttpRequest)
          return r(new Error('No browser support'));
        try {
          var n = new XMLHttpRequest(),
            s = O.p + '' + o + '.hot-update.json';
          n.open('GET', s, !0), (n.timeout = t), n.send(null);
        } catch (e) {
          return r(e);
        }
        n.onreadystatechange = function () {
          if (4 === n.readyState)
            if (0 === n.status)
              r(new Error('Manifest request to ' + s + ' timed out.'));
            else if (404 === n.status) e();
            else if (200 !== n.status && 304 !== n.status)
              r(new Error('Manifest request to ' + s + ' failed.'));
            else {
              try {
                var t = JSON.parse(n.responseText);
              } catch (e) {
                return void r(e);
              }
              e(t);
            }
        };
      })).then(function (e) {
        if (!e) return p('idle'), null;
        (b = {}), (y = {}), (_ = e.c), (m = e.h), p('prepare');
        var t = new Promise(function (e, t) {
          f = { resolve: e, reject: t };
        });
        h = {};
        return C(0), 'prepare' === d && 0 === g && 0 === v && k(), t;
      })
    );
    var t;
  }
  function C(e) {
    _[e]
      ? ((b[e] = !0),
        v++,
        (function (e) {
          var t = document.createElement('script');
          (t.charset = 'utf-8'),
            (t.src = O.p + '' + e + '.' + o + '.hot-update.js'),
            document.head.appendChild(t);
        })(e))
      : (y[e] = !0);
  }
  function k() {
    p('ready');
    var e = f;
    if (((f = null), e))
      if (n)
        Promise.resolve()
          .then(function () {
            return S(n);
          })
          .then(
            function (t) {
              e.resolve(t);
            },
            function (t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var r in h)
          Object.prototype.hasOwnProperty.call(h, r) && t.push(w(r));
        e.resolve(t);
      }
  }
  function S(t) {
    if ('ready' !== d)
      throw new Error('apply() is only allowed in ready status');
    var r, n, a, c, u;
    function l(e) {
      for (
        var t = [e],
          r = {},
          n = t.map(function (e) {
            return { chain: [e], id: e };
          });
        n.length > 0;

      ) {
        var o = n.pop(),
          s = o.id,
          i = o.chain;
        if ((c = E[s]) && !c.hot._selfAccepted) {
          if (c.hot._selfDeclined)
            return { type: 'self-declined', chain: i, moduleId: s };
          if (c.hot._main) return { type: 'unaccepted', chain: i, moduleId: s };
          for (var a = 0; a < c.parents.length; a++) {
            var u = c.parents[a],
              l = E[u];
            if (l) {
              if (l.hot._declinedDependencies[s])
                return {
                  type: 'declined',
                  chain: i.concat([u]),
                  moduleId: s,
                  parentId: u,
                };
              -1 === t.indexOf(u) &&
                (l.hot._acceptedDependencies[s]
                  ? (r[u] || (r[u] = []), f(r[u], [s]))
                  : (delete r[u],
                    t.push(u),
                    n.push({ chain: i.concat([u]), id: u })));
            }
          }
        }
      }
      return {
        type: 'accepted',
        moduleId: e,
        outdatedModules: t,
        outdatedDependencies: r,
      };
    }
    function f(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        -1 === e.indexOf(n) && e.push(n);
      }
    }
    t = t || {};
    var v = {},
      g = [],
      y = {},
      b = function () {
        console.warn(
          '[HMR] unexpected require(' + C.moduleId + ') to disposed module'
        );
      };
    for (var x in h)
      if (Object.prototype.hasOwnProperty.call(h, x)) {
        var C;
        u = w(x);
        var k = !1,
          S = !1,
          j = !1,
          T = '';
        switch (
          ((C = h[x] ? l(u) : { type: 'disposed', moduleId: x }).chain &&
            (T = '\nUpdate propagation: ' + C.chain.join(' -> ')),
          C.type)
        ) {
          case 'self-declined':
            t.onDeclined && t.onDeclined(C),
              t.ignoreDeclined ||
                (k = new Error(
                  'Aborted because of self decline: ' + C.moduleId + T
                ));
            break;
          case 'declined':
            t.onDeclined && t.onDeclined(C),
              t.ignoreDeclined ||
                (k = new Error(
                  'Aborted because of declined dependency: ' +
                    C.moduleId +
                    ' in ' +
                    C.parentId +
                    T
                ));
            break;
          case 'unaccepted':
            t.onUnaccepted && t.onUnaccepted(C),
              t.ignoreUnaccepted ||
                (k = new Error(
                  'Aborted because ' + u + ' is not accepted' + T
                ));
            break;
          case 'accepted':
            t.onAccepted && t.onAccepted(C), (S = !0);
            break;
          case 'disposed':
            t.onDisposed && t.onDisposed(C), (j = !0);
            break;
          default:
            throw new Error('Unexception type ' + C.type);
        }
        if (k) return p('abort'), Promise.reject(k);
        if (S)
          for (u in ((y[u] = h[u]),
          f(g, C.outdatedModules),
          C.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(C.outdatedDependencies, u) &&
              (v[u] || (v[u] = []), f(v[u], C.outdatedDependencies[u]));
        j && (f(g, [C.moduleId]), (y[u] = b));
      }
    var F,
      L = [];
    for (n = 0; n < g.length; n++)
      (u = g[n]),
        E[u] &&
          E[u].hot._selfAccepted &&
          y[u] !== b &&
          L.push({ module: u, errorHandler: E[u].hot._selfAccepted });
    p('dispose'),
      Object.keys(_).forEach(function (e) {
        !1 === _[e] &&
          (function (e) {
            delete installedChunks[e];
          })(e);
      });
    for (var R, P, N = g.slice(); N.length > 0; )
      if (((u = N.pop()), (c = E[u]))) {
        var A = {},
          D = c.hot._disposeHandlers;
        for (a = 0; a < D.length; a++) (r = D[a])(A);
        for (
          s[u] = A, c.hot.active = !1, delete E[u], delete v[u], a = 0;
          a < c.children.length;
          a++
        ) {
          var M = E[c.children[a]];
          M && (F = M.parents.indexOf(u)) >= 0 && M.parents.splice(F, 1);
        }
      }
    for (u in v)
      if (Object.prototype.hasOwnProperty.call(v, u) && (c = E[u]))
        for (P = v[u], a = 0; a < P.length; a++)
          (R = P[a]),
            (F = c.children.indexOf(R)) >= 0 && c.children.splice(F, 1);
    for (u in (p('apply'), (o = m), y))
      Object.prototype.hasOwnProperty.call(y, u) && (e[u] = y[u]);
    var I = null;
    for (u in v)
      if (Object.prototype.hasOwnProperty.call(v, u) && (c = E[u])) {
        P = v[u];
        var q = [];
        for (n = 0; n < P.length; n++)
          if (((R = P[n]), (r = c.hot._acceptedDependencies[R]))) {
            if (-1 !== q.indexOf(r)) continue;
            q.push(r);
          }
        for (n = 0; n < q.length; n++) {
          r = q[n];
          try {
            r(P);
          } catch (e) {
            t.onErrored &&
              t.onErrored({
                type: 'accept-errored',
                moduleId: u,
                dependencyId: P[n],
                error: e,
              }),
              t.ignoreErrored || I || (I = e);
          }
        }
      }
    for (n = 0; n < L.length; n++) {
      var z = L[n];
      (u = z.module), (i = [u]);
      try {
        O(u);
      } catch (e) {
        if ('function' == typeof z.errorHandler)
          try {
            z.errorHandler(e);
          } catch (r) {
            t.onErrored &&
              t.onErrored({
                type: 'self-accept-error-handler-errored',
                moduleId: u,
                error: r,
                originalError: e,
              }),
              t.ignoreErrored || I || (I = r),
              I || (I = e);
          }
        else
          t.onErrored &&
            t.onErrored({ type: 'self-accept-errored', moduleId: u, error: e }),
            t.ignoreErrored || I || (I = e);
      }
    }
    return I
      ? (p('fail'), Promise.reject(I))
      : (p('idle'),
        new Promise(function (e) {
          e(g);
        }));
  }
  var E = {};
  function O(t) {
    if (E[t]) return E[t].exports;
    var r = (E[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: u(t),
      parents: ((a = i), (i = []), a),
      children: [],
    });
    return e[t].call(r.exports, r, r.exports, c(t)), (r.l = !0), r.exports;
  }
  (O.m = e),
    (O.c = E),
    (O.d = function (e, t, r) {
      O.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (O.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (O.t = function (e, t) {
      if ((1 & t && (e = O(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (O.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          O.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (O.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return O.d(t, 'a', t), t;
    }),
    (O.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (O.p = '/'),
    (O.h = function () {
      return o;
    }),
    c(38)((O.s = 38));
})([
  function (e, t, r) {
    e.exports = r(15);
  },
  function (e, t) {
    function r(e, t, r, n, o, s, i) {
      try {
        var a = e[s](i),
          c = a.value;
      } catch (e) {
        return void r(e);
      }
      a.done ? t(c) : Promise.resolve(c).then(n, o);
    }
    e.exports = function (e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, s) {
          var i = e.apply(t, n);
          function a(e) {
            r(i, o, s, a, c, 'next', e);
          }
          function c(e) {
            r(i, o, s, a, c, 'throw', e);
          }
          a(void 0);
        });
      };
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    };
  },
  function (e, t) {
    function r(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    e.exports = function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
  },
  function (e, t) {
    function r(t) {
      return (
        (e.exports = r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        r(t)
      );
    }
    e.exports = r;
  },
  function (e, t, r) {
    'use strict';
    var n,
      o = 'object' == typeof Reflect ? Reflect : null,
      s =
        o && 'function' == typeof o.apply
          ? o.apply
          : function (e, t, r) {
              return Function.prototype.apply.call(e, t, r);
            };
    n =
      o && 'function' == typeof o.ownKeys
        ? o.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var i =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function a() {
      a.init.call(this);
    }
    (e.exports = a),
      (a.EventEmitter = a),
      (a.prototype._events = void 0),
      (a.prototype._eventsCount = 0),
      (a.prototype._maxListeners = void 0);
    var c = 10;
    function u(e) {
      if ('function' != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        );
    }
    function l(e) {
      return void 0 === e._maxListeners
        ? a.defaultMaxListeners
        : e._maxListeners;
    }
    function d(e, t, r, n) {
      var o, s, i, a;
      if (
        (u(r),
        void 0 === (s = e._events)
          ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== s.newListener &&
              (e.emit('newListener', t, r.listener ? r.listener : r),
              (s = e._events)),
            (i = s[t])),
        void 0 === i)
      )
        (i = s[t] = r), ++e._eventsCount;
      else if (
        ('function' == typeof i
          ? (i = s[t] = n ? [r, i] : [i, r])
          : n
          ? i.unshift(r)
          : i.push(r),
        (o = l(e)) > 0 && i.length > o && !i.warned)
      ) {
        i.warned = !0;
        var c = new Error(
          'Possible EventEmitter memory leak detected. ' +
            i.length +
            ' ' +
            String(t) +
            ' listeners added. Use emitter.setMaxListeners() to increase limit'
        );
        (c.name = 'MaxListenersExceededWarning'),
          (c.emitter = e),
          (c.type = t),
          (c.count = i.length),
          (a = c),
          console && console.warn && console.warn(a);
      }
      return e;
    }
    function p() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        );
    }
    function f(e, t, r) {
      var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
        o = p.bind(n);
      return (o.listener = r), (n.wrapFn = o), o;
    }
    function h(e, t, r) {
      var n = e._events;
      if (void 0 === n) return [];
      var o = n[t];
      return void 0 === o
        ? []
        : 'function' == typeof o
        ? r
          ? [o.listener || o]
          : [o]
        : r
        ? (function (e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r)
              t[r] = e[r].listener || e[r];
            return t;
          })(o)
        : v(o, o.length);
    }
    function m(e) {
      var t = this._events;
      if (void 0 !== t) {
        var r = t[e];
        if ('function' == typeof r) return 1;
        if (void 0 !== r) return r.length;
      }
      return 0;
    }
    function v(e, t) {
      for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
      return r;
    }
    Object.defineProperty(a, 'defaultMaxListeners', {
      enumerable: !0,
      get: function () {
        return c;
      },
      set: function (e) {
        if ('number' != typeof e || e < 0 || i(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              '.'
          );
        c = e;
      },
    }),
      (a.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (a.prototype.setMaxListeners = function (e) {
        if ('number' != typeof e || e < 0 || i(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              '.'
          );
        return (this._maxListeners = e), this;
      }),
      (a.prototype.getMaxListeners = function () {
        return l(this);
      }),
      (a.prototype.emit = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
        var n = 'error' === e,
          o = this._events;
        if (void 0 !== o) n = n && void 0 === o.error;
        else if (!n) return !1;
        if (n) {
          var i;
          if ((t.length > 0 && (i = t[0]), i instanceof Error)) throw i;
          var a = new Error(
            'Unhandled error.' + (i ? ' (' + i.message + ')' : '')
          );
          throw ((a.context = i), a);
        }
        var c = o[e];
        if (void 0 === c) return !1;
        if ('function' == typeof c) s(c, this, t);
        else {
          var u = c.length,
            l = v(c, u);
          for (r = 0; r < u; ++r) s(l[r], this, t);
        }
        return !0;
      }),
      (a.prototype.addListener = function (e, t) {
        return d(this, e, t, !1);
      }),
      (a.prototype.on = a.prototype.addListener),
      (a.prototype.prependListener = function (e, t) {
        return d(this, e, t, !0);
      }),
      (a.prototype.once = function (e, t) {
        return u(t), this.on(e, f(this, e, t)), this;
      }),
      (a.prototype.prependOnceListener = function (e, t) {
        return u(t), this.prependListener(e, f(this, e, t)), this;
      }),
      (a.prototype.removeListener = function (e, t) {
        var r, n, o, s, i;
        if ((u(t), void 0 === (n = this._events))) return this;
        if (void 0 === (r = n[e])) return this;
        if (r === t || r.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete n[e],
              n.removeListener &&
                this.emit('removeListener', e, r.listener || t));
        else if ('function' != typeof r) {
          for (o = -1, s = r.length - 1; s >= 0; s--)
            if (r[s] === t || r[s].listener === t) {
              (i = r[s].listener), (o = s);
              break;
            }
          if (o < 0) return this;
          0 === o
            ? r.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(r, o),
            1 === r.length && (n[e] = r[0]),
            void 0 !== n.removeListener &&
              this.emit('removeListener', e, i || t);
        }
        return this;
      }),
      (a.prototype.off = a.prototype.removeListener),
      (a.prototype.removeAllListeners = function (e) {
        var t, r, n;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== r[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete r[e]),
            this
          );
        if (0 === arguments.length) {
          var o,
            s = Object.keys(r);
          for (n = 0; n < s.length; ++n)
            'removeListener' !== (o = s[n]) && this.removeAllListeners(o);
          return (
            this.removeAllListeners('removeListener'),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ('function' == typeof (t = r[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
        return this;
      }),
      (a.prototype.listeners = function (e) {
        return h(this, e, !0);
      }),
      (a.prototype.rawListeners = function (e) {
        return h(this, e, !1);
      }),
      (a.listenerCount = function (e, t) {
        return 'function' == typeof e.listenerCount
          ? e.listenerCount(t)
          : m.call(e, t);
      }),
      (a.prototype.listenerCount = m),
      (a.prototype.eventNames = function () {
        return this._eventsCount > 0 ? n(this._events) : [];
      });
  },
  function (e, t, r) {
    const n = r(21),
      o = 'protoo-client';
    e.exports = class {
      constructor(e) {
        e
          ? ((this._debug = n(`${o}:${e}`)),
            (this._warn = n(`${o}:WARN:${e}`)),
            (this._error = n(`${o}:ERROR:${e}`)))
          : ((this._debug = n(o)),
            (this._warn = n(o + ':WARN')),
            (this._error = n(o + ':ERROR'))),
          (this._debug.log = console.info.bind(console)),
          (this._warn.log = console.warn.bind(console)),
          (this._error.log = console.error.bind(console));
      }
      get debug() {
        return this._debug;
      }
      get warn() {
        return this._warn;
      }
      get error() {
        return this._error;
      }
    };
  },
  function (e, t, r) {
    var n = r(16);
    e.exports = function (e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && n(e, t);
    };
  },
  function (e, t, r) {
    var n = r(17),
      o = r(18);
    e.exports = function (e, t) {
      return !t || ('object' !== n(t) && 'function' != typeof t) ? o(e) : t;
    };
  },
  function (e, t, r) {
    const { version: n } = r(19),
      o = r(20),
      s = r(26);
    (t.version = n), (t.Peer = o), (t.WebSocketTransport = s);
  },
  function (e, t, r) {
    var n = r(36),
      o = r(37);
    (t.write = o),
      (t.parse = n.parse),
      (t.parseParams = n.parseParams),
      (t.parseFmtpConfig = n.parseFmtpConfig),
      (t.parsePayloads = n.parsePayloads),
      (t.parseRemoteCandidates = n.parseRemoteCandidates),
      (t.parseImageAttributes = n.parseImageAttributes),
      (t.parseSimulcastStreamList = n.parseSimulcastStreamList);
  },
  function (e, t, r) {
    const { EventEmitter: n } = r(5),
      o = r(6);
    e.exports = class extends n {
      constructor(e) {
        super(),
          this.setMaxListeners(1 / 0),
          (this._logger = e || new o('EnhancedEventEmitter'));
      }
      safeEmit(e, ...t) {
        try {
          this.emit(e, ...t);
        } catch (t) {
          this._logger.error(
            'safeEmit() | event listener threw an error [event:%s]:%o',
            e,
            t
          );
        }
      }
      async safeEmitAsPromise(e, ...t) {
        return new Promise((r, n) => {
          this.safeEmit(e, ...t, r, n);
        });
      }
    };
  },
  function (e, t, r) {
    const n = r(6),
      { generateRandomNumber: o } = r(25),
      s = new n('Message');
    e.exports = class {
      static parse(e) {
        let t;
        const r = {};
        try {
          t = JSON.parse(e);
        } catch (e) {
          return void s.error('parse() | invalid JSON: %s', e);
        }
        if ('object' == typeof t && !Array.isArray(t)) {
          if (t.request) {
            if (((r.request = !0), 'string' != typeof t.method))
              return void s.error('parse() | missing/invalid method field');
            if ('number' != typeof t.id)
              return void s.error('parse() | missing/invalid id field');
            (r.id = t.id), (r.method = t.method), (r.data = t.data || {});
          } else if (t.response) {
            if (((r.response = !0), 'number' != typeof t.id))
              return void s.error('parse() | missing/invalid id field');
            (r.id = t.id),
              t.ok
                ? ((r.ok = !0), (r.data = t.data || {}))
                : ((r.ok = !1),
                  (r.errorCode = t.errorCode),
                  (r.errorReason = t.errorReason));
          } else {
            if (!t.notification)
              return void s.error('parse() | missing request/response field');
            if (((r.notification = !0), 'string' != typeof t.method))
              return void s.error('parse() | missing/invalid method field');
            (r.method = t.method), (r.data = t.data || {});
          }
          return r;
        }
        s.error('parse() | not an object');
      }
      static createRequest(e, t) {
        return { request: !0, id: o(), method: e, data: t || {} };
      }
      static createSuccessResponse(e, t) {
        return { response: !0, id: e.id, ok: !0, data: t || {} };
      }
      static createErrorResponse(e, t, r) {
        return { response: !0, id: e.id, ok: !1, errorCode: t, errorReason: r };
      }
      static createNotification(e, t) {
        return { notification: !0, method: e, data: t || {} };
      }
    };
  },
  function (e, t) {
    var r = (e.exports = {
      v: [{ name: 'version', reg: /^(\d*)$/ }],
      o: [
        {
          name: 'origin',
          reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
          names: [
            'username',
            'sessionId',
            'sessionVersion',
            'netType',
            'ipVer',
            'address',
          ],
          format: '%s %s %d %s IP%d %s',
        },
      ],
      s: [{ name: 'name' }],
      i: [{ name: 'description' }],
      u: [{ name: 'uri' }],
      e: [{ name: 'email' }],
      p: [{ name: 'phone' }],
      z: [{ name: 'timezones' }],
      r: [{ name: 'repeats' }],
      t: [
        {
          name: 'timing',
          reg: /^(\d*) (\d*)/,
          names: ['start', 'stop'],
          format: '%d %d',
        },
      ],
      c: [
        {
          name: 'connection',
          reg: /^IN IP(\d) (\S*)/,
          names: ['version', 'ip'],
          format: 'IN IP%d %s',
        },
      ],
      b: [
        {
          push: 'bandwidth',
          reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
          names: ['type', 'limit'],
          format: '%s:%s',
        },
      ],
      m: [
        {
          reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
          names: ['type', 'port', 'protocol', 'payloads'],
          format: '%s %d %s %s',
        },
      ],
      a: [
        {
          push: 'rtp',
          reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
          names: ['payload', 'codec', 'rate', 'encoding'],
          format: function (e) {
            return e.encoding
              ? 'rtpmap:%d %s/%s/%s'
              : e.rate
              ? 'rtpmap:%d %s/%s'
              : 'rtpmap:%d %s';
          },
        },
        {
          push: 'fmtp',
          reg: /^fmtp:(\d*) ([\S| ]*)/,
          names: ['payload', 'config'],
          format: 'fmtp:%d %s',
        },
        { name: 'control', reg: /^control:(.*)/, format: 'control:%s' },
        {
          name: 'rtcp',
          reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
          names: ['port', 'netType', 'ipVer', 'address'],
          format: function (e) {
            return null != e.address ? 'rtcp:%d %s IP%d %s' : 'rtcp:%d';
          },
        },
        {
          push: 'rtcpFbTrrInt',
          reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
          names: ['payload', 'value'],
          format: 'rtcp-fb:%d trr-int %d',
        },
        {
          push: 'rtcpFb',
          reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
          names: ['payload', 'type', 'subtype'],
          format: function (e) {
            return null != e.subtype ? 'rtcp-fb:%s %s %s' : 'rtcp-fb:%s %s';
          },
        },
        {
          push: 'ext',
          reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
          names: ['value', 'direction', 'encrypt-uri', 'uri', 'config'],
          format: function (e) {
            return (
              'extmap:%d' +
              (e.direction ? '/%s' : '%v') +
              (e['encrypt-uri'] ? ' %s' : '%v') +
              ' %s' +
              (e.config ? ' %s' : '')
            );
          },
        },
        { name: 'extmapAllowMixed', reg: /^(extmap-allow-mixed)/ },
        {
          push: 'crypto',
          reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
          names: ['id', 'suite', 'config', 'sessionConfig'],
          format: function (e) {
            return null != e.sessionConfig
              ? 'crypto:%d %s %s %s'
              : 'crypto:%d %s %s';
          },
        },
        { name: 'setup', reg: /^setup:(\w*)/, format: 'setup:%s' },
        {
          name: 'connectionType',
          reg: /^connection:(new|existing)/,
          format: 'connection:%s',
        },
        { name: 'mid', reg: /^mid:([^\s]*)/, format: 'mid:%s' },
        { name: 'msid', reg: /^msid:(.*)/, format: 'msid:%s' },
        { name: 'ptime', reg: /^ptime:(\d*(?:\.\d*)*)/, format: 'ptime:%d' },
        {
          name: 'maxptime',
          reg: /^maxptime:(\d*(?:\.\d*)*)/,
          format: 'maxptime:%d',
        },
        { name: 'direction', reg: /^(sendrecv|recvonly|sendonly|inactive)/ },
        { name: 'icelite', reg: /^(ice-lite)/ },
        { name: 'iceUfrag', reg: /^ice-ufrag:(\S*)/, format: 'ice-ufrag:%s' },
        { name: 'icePwd', reg: /^ice-pwd:(\S*)/, format: 'ice-pwd:%s' },
        {
          name: 'fingerprint',
          reg: /^fingerprint:(\S*) (\S*)/,
          names: ['type', 'hash'],
          format: 'fingerprint:%s %s',
        },
        {
          push: 'candidates',
          reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
          names: [
            'foundation',
            'component',
            'transport',
            'priority',
            'ip',
            'port',
            'type',
            'raddr',
            'rport',
            'tcptype',
            'generation',
            'network-id',
            'network-cost',
          ],
          format: function (e) {
            var t = 'candidate:%s %d %s %d %s %d typ %s';
            return (
              (t += null != e.raddr ? ' raddr %s rport %d' : '%v%v'),
              (t += null != e.tcptype ? ' tcptype %s' : '%v'),
              null != e.generation && (t += ' generation %d'),
              (t += null != e['network-id'] ? ' network-id %d' : '%v'),
              (t += null != e['network-cost'] ? ' network-cost %d' : '%v')
            );
          },
        },
        { name: 'endOfCandidates', reg: /^(end-of-candidates)/ },
        {
          name: 'remoteCandidates',
          reg: /^remote-candidates:(.*)/,
          format: 'remote-candidates:%s',
        },
        {
          name: 'iceOptions',
          reg: /^ice-options:(\S*)/,
          format: 'ice-options:%s',
        },
        {
          push: 'ssrcs',
          reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
          names: ['id', 'attribute', 'value'],
          format: function (e) {
            var t = 'ssrc:%d';
            return (
              null != e.attribute &&
                ((t += ' %s'), null != e.value && (t += ':%s')),
              t
            );
          },
        },
        {
          push: 'ssrcGroups',
          reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
          names: ['semantics', 'ssrcs'],
          format: 'ssrc-group:%s %s',
        },
        {
          name: 'msidSemantic',
          reg: /^msid-semantic:\s?(\w*) (\S*)/,
          names: ['semantic', 'token'],
          format: 'msid-semantic: %s %s',
        },
        {
          push: 'groups',
          reg: /^group:(\w*) (.*)/,
          names: ['type', 'mids'],
          format: 'group:%s %s',
        },
        { name: 'rtcpMux', reg: /^(rtcp-mux)/ },
        { name: 'rtcpRsize', reg: /^(rtcp-rsize)/ },
        {
          name: 'sctpmap',
          reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
          names: ['sctpmapNumber', 'app', 'maxMessageSize'],
          format: function (e) {
            return null != e.maxMessageSize
              ? 'sctpmap:%s %s %s'
              : 'sctpmap:%s %s';
          },
        },
        {
          name: 'xGoogleFlag',
          reg: /^x-google-flag:([^\s]*)/,
          format: 'x-google-flag:%s',
        },
        {
          push: 'rids',
          reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
          names: ['id', 'direction', 'params'],
          format: function (e) {
            return e.params ? 'rid:%s %s %s' : 'rid:%s %s';
          },
        },
        {
          push: 'imageattrs',
          reg: new RegExp(
            '^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
          ),
          names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
          format: function (e) {
            return 'imageattr:%s %s %s' + (e.dir2 ? ' %s %s' : '');
          },
        },
        {
          name: 'simulcast',
          reg: new RegExp(
            '^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$'
          ),
          names: ['dir1', 'list1', 'dir2', 'list2'],
          format: function (e) {
            return 'simulcast:%s %s' + (e.dir2 ? ' %s %s' : '');
          },
        },
        {
          name: 'simulcast_03',
          reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
          names: ['value'],
          format: 'simulcast: %s',
        },
        {
          name: 'framerate',
          reg: /^framerate:(\d+(?:$|\.\d+))/,
          format: 'framerate:%s',
        },
        {
          name: 'sourceFilter',
          reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
          names: [
            'filterMode',
            'netType',
            'addressTypes',
            'destAddress',
            'srcList',
          ],
          format: 'source-filter: %s %s %s %s %s',
        },
        { name: 'bundleOnly', reg: /^(bundle-only)/ },
        { name: 'label', reg: /^label:(.+)/, format: 'label:%s' },
        { name: 'sctpPort', reg: /^sctp-port:(\d+)$/, format: 'sctp-port:%s' },
        {
          name: 'maxMessageSize',
          reg: /^max-message-size:(\d+)$/,
          format: 'max-message-size:%s',
        },
        {
          push: 'tsRefClocks',
          reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
          names: ['clksrc', 'clksrcExt'],
          format: function (e) {
            return 'ts-refclk:%s' + (null != e.clksrcExt ? '=%s' : '');
          },
        },
        {
          name: 'mediaClk',
          reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
          names: [
            'id',
            'mediaClockName',
            'mediaClockValue',
            'rateNumerator',
            'rateDenominator',
          ],
          format: function (e) {
            var t = 'mediaclk:';
            return (
              (t += null != e.id ? 'id=%s %s' : '%v%s'),
              (t += null != e.mediaClockValue ? '=%s' : ''),
              (t += null != e.rateNumerator ? ' rate=%s' : ''),
              (t += null != e.rateDenominator ? '/%s' : '')
            );
          },
        },
        { name: 'keywords', reg: /^keywds:(.+)$/, format: 'keywds:%s' },
        { name: 'content', reg: /^content:(.+)/, format: 'content:%s' },
        {
          name: 'bfcpFloorCtrl',
          reg: /^floorctrl:(c-only|s-only|c-s)/,
          format: 'floorctrl:%s',
        },
        { name: 'bfcpConfId', reg: /^confid:(\d+)/, format: 'confid:%s' },
        { name: 'bfcpUserId', reg: /^userid:(\d+)/, format: 'userid:%s' },
        {
          name: 'bfcpFloorId',
          reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
          names: ['id', 'mStream'],
          format: 'floorid:%s mstrm:%s',
        },
        { push: 'invalid', names: ['value'] },
      ],
    });
    Object.keys(r).forEach(function (e) {
      r[e].forEach(function (e) {
        e.reg || (e.reg = /(.*)/), e.format || (e.format = '%s');
      });
    });
  },
  function (e, t, r) {
    var n = r(34),
      o = r(35);
    e.exports = function (e, t, r) {
      var s = (t && r) || 0;
      'string' == typeof e &&
        ((t = 'binary' === e ? new Array(16) : null), (e = null));
      var i = (e = e || {}).random || (e.rng || n)();
      if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t))
        for (var a = 0; a < 16; ++a) t[s + a] = i[a];
      return t || o(i);
    };
  },
  function (e, t, r) {
    var n = (function (e) {
      'use strict';
      var t = Object.prototype,
        r = t.hasOwnProperty,
        n = 'function' == typeof Symbol ? Symbol : {},
        o = n.iterator || '@@iterator',
        s = n.asyncIterator || '@@asyncIterator',
        i = n.toStringTag || '@@toStringTag';
      function a(e, t, r, n) {
        var o = t && t.prototype instanceof l ? t : l,
          s = Object.create(o.prototype),
          i = new x(n || []);
        return (
          (s._invoke = (function (e, t, r) {
            var n = 'suspendedStart';
            return function (o, s) {
              if ('executing' === n)
                throw new Error('Generator is already running');
              if ('completed' === n) {
                if ('throw' === o) throw s;
                return k();
              }
              for (r.method = o, r.arg = s; ; ) {
                var i = r.delegate;
                if (i) {
                  var a = b(i, r);
                  if (a) {
                    if (a === u) continue;
                    return a;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                n = 'executing';
                var l = c(e, t, r);
                if ('normal' === l.type) {
                  if (
                    ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === u)
                  )
                    continue;
                  return { value: l.arg, done: r.done };
                }
                'throw' === l.type &&
                  ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
              }
            };
          })(e, r, i)),
          s
        );
      }
      function c(e, t, r) {
        try {
          return { type: 'normal', arg: e.call(t, r) };
        } catch (e) {
          return { type: 'throw', arg: e };
        }
      }
      e.wrap = a;
      var u = {};
      function l() {}
      function d() {}
      function p() {}
      var f = {};
      f[o] = function () {
        return this;
      };
      var h = Object.getPrototypeOf,
        m = h && h(h(C([])));
      m && m !== t && r.call(m, o) && (f = m);
      var v = (p.prototype = l.prototype = Object.create(f));
      function g(e) {
        ['next', 'throw', 'return'].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }
      function y(e, t) {
        var n;
        this._invoke = function (o, s) {
          function i() {
            return new t(function (n, i) {
              !(function n(o, s, i, a) {
                var u = c(e[o], e, s);
                if ('throw' !== u.type) {
                  var l = u.arg,
                    d = l.value;
                  return d && 'object' == typeof d && r.call(d, '__await')
                    ? t.resolve(d.__await).then(
                        function (e) {
                          n('next', e, i, a);
                        },
                        function (e) {
                          n('throw', e, i, a);
                        }
                      )
                    : t.resolve(d).then(
                        function (e) {
                          (l.value = e), i(l);
                        },
                        function (e) {
                          return n('throw', e, i, a);
                        }
                      );
                }
                a(u.arg);
              })(o, s, n, i);
            });
          }
          return (n = n ? n.then(i, i) : i());
        };
      }
      function b(e, t) {
        var r = e.iterator[t.method];
        if (void 0 === r) {
          if (((t.delegate = null), 'throw' === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = 'return'),
              (t.arg = void 0),
              b(e, t),
              'throw' === t.method)
            )
              return u;
            (t.method = 'throw'),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return u;
        }
        var n = c(r, e.iterator, t.arg);
        if ('throw' === n.type)
          return (t.method = 'throw'), (t.arg = n.arg), (t.delegate = null), u;
        var o = n.arg;
        return o
          ? o.done
            ? ((t[e.resultName] = o.value),
              (t.next = e.nextLoc),
              'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
              (t.delegate = null),
              u)
            : o
          : ((t.method = 'throw'),
            (t.arg = new TypeError('iterator result is not an object')),
            (t.delegate = null),
            u);
      }
      function _(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function w(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
      }
      function x(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          e.forEach(_, this),
          this.reset(!0);
      }
      function C(e) {
        if (e) {
          var t = e[o];
          if (t) return t.call(e);
          if ('function' == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              s = function t() {
                for (; ++n < e.length; )
                  if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (s.next = s);
          }
        }
        return { next: k };
      }
      function k() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = v.constructor = p),
        (p.constructor = d),
        (p[i] = d.displayName = 'GeneratorFunction'),
        (e.isGeneratorFunction = function (e) {
          var t = 'function' == typeof e && e.constructor;
          return (
            !!t &&
            (t === d || 'GeneratorFunction' === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, p)
              : ((e.__proto__ = p), i in e || (e[i] = 'GeneratorFunction')),
            (e.prototype = Object.create(v)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        g(y.prototype),
        (y.prototype[s] = function () {
          return this;
        }),
        (e.AsyncIterator = y),
        (e.async = function (t, r, n, o, s) {
          void 0 === s && (s = Promise);
          var i = new y(a(t, r, n, o), s);
          return e.isGeneratorFunction(r)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        g(v),
        (v[i] = 'Generator'),
        (v[o] = function () {
          return this;
        }),
        (v.toString = function () {
          return '[object Generator]';
        }),
        (e.keys = function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return (
            t.reverse(),
            function r() {
              for (; t.length; ) {
                var n = t.pop();
                if (n in e) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (e.values = C),
        (x.prototype = {
          constructor: x,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(w),
              !e)
            )
              for (var t in this)
                't' === t.charAt(0) &&
                  r.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ('throw' === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function n(r, n) {
              return (
                (i.type = 'throw'),
                (i.arg = e),
                (t.next = r),
                n && ((t.method = 'next'), (t.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var s = this.tryEntries[o],
                i = s.completion;
              if ('root' === s.tryLoc) return n('end');
              if (s.tryLoc <= this.prev) {
                var a = r.call(s, 'catchLoc'),
                  c = r.call(s, 'finallyLoc');
                if (a && c) {
                  if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                  if (this.prev < s.finallyLoc) return n(s.finallyLoc);
                } else if (a) {
                  if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < s.finallyLoc) return n(s.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, 'finallyLoc') &&
                this.prev < o.finallyLoc
              ) {
                var s = o;
                break;
              }
            }
            s &&
              ('break' === e || 'continue' === e) &&
              s.tryLoc <= t &&
              t <= s.finallyLoc &&
              (s = null);
            var i = s ? s.completion : {};
            return (
              (i.type = e),
              (i.arg = t),
              s
                ? ((this.method = 'next'), (this.next = s.finallyLoc), u)
                : this.complete(i)
            );
          },
          complete: function (e, t) {
            if ('throw' === e.type) throw e.arg;
            return (
              'break' === e.type || 'continue' === e.type
                ? (this.next = e.arg)
                : 'return' === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
              u
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), w(r), u;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ('throw' === n.type) {
                  var o = n.arg;
                  w(r);
                }
                return o;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = { iterator: C(e), resultName: t, nextLoc: r }),
              'next' === this.method && (this.arg = void 0),
              u
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = n;
    } catch (e) {
      Function('r', 'regeneratorRuntime = r')(n);
    }
  },
  function (e, t) {
    function r(t, n) {
      return (
        (e.exports = r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        r(t, n)
      );
    }
    e.exports = r;
  },
  function (e, t) {
    function r(t) {
      return (
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? (e.exports = r = function (e) {
              return typeof e;
            })
          : (e.exports = r = function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
        r(t)
      );
    }
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    };
  },
  function (e) {
    e.exports = JSON.parse(
      '{"_from":"protoo-client@^4.0.3","_id":"protoo-client@4.0.3","_inBundle":false,"_integrity":"sha512-+HnxpBOOZ8WovllUUvfcbJa3gLuzhyYdR4A+ytldLmwq6vl5AzFGsenyLJMX6pVuNEJUZ5D7M92zvPesUG+wyQ==","_location":"/protoo-client","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"protoo-client@^4.0.3","name":"protoo-client","escapedName":"protoo-client","rawSpec":"^4.0.3","saveSpec":null,"fetchSpec":"^4.0.3"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/protoo-client/-/protoo-client-4.0.3.tgz","_shasum":"3cc1943ce160785777fbda4dcceab196328d0bfd","_spec":"protoo-client@^4.0.3","_where":"C:\\\\Users\\\\bhanu\\\\Documents\\\\GitHub\\\\ion","author":{"name":"Iñaki Baz Castillo","email":"ibc@aliax.net"},"bugs":{"url":"https://github.com/ibc/protoo/issues"},"bundleDependencies":false,"dependencies":{"debug":"^4.1.1","events":"^3.0.0","retry":"^0.12.0","websocket":"^1.0.28"},"deprecated":false,"description":"protoo JavaScript client module","devDependencies":{"eslint":"^5.16.0"},"engines":{"node":">=8.0.0"},"homepage":"https://protoojs.org","keywords":["nodejs","browser","websocket"],"license":"MIT","main":"lib/index.js","name":"protoo-client","optionalDependencies":{"websocket":"^1.0.28"},"repository":{"type":"git","url":"git+https://github.com/ibc/protoo.git"},"scripts":{"lint":"eslint -c .eslintrc.js lib"},"version":"4.0.3"}'
    );
  },
  function (e, t, r) {
    const n = r(6),
      o = r(11),
      s = r(12),
      i = new n('Peer');
    e.exports = class extends o {
      constructor(e) {
        super(i),
          i.debug('constructor()'),
          (this._closed = !1),
          (this._transport = e),
          (this._connected = !1),
          (this._data = {}),
          (this._sents = new Map()),
          this._handleTransport();
      }
      get closed() {
        return this._closed;
      }
      get connected() {
        return this._connected;
      }
      get data() {
        return this._data;
      }
      set data(e) {
        throw new Error('cannot override data object');
      }
      close() {
        if (!this._closed) {
          i.debug('close()'),
            (this._closed = !0),
            (this._connected = !1),
            this._transport.close();
          for (const e of this._sents.values()) e.close();
          this.safeEmit('close');
        }
      }
      async request(e, t) {
        const r = s.createRequest(e, t);
        return (
          this._logger.debug('request() [method:%s, id:%s]', e, r.id),
          await this._transport.send(r),
          new Promise((e, t) => {
            const n = 1500 * (15 + 0.1 * this._sents.size),
              o = {
                id: r.id,
                method: r.method,
                resolve: (t) => {
                  this._sents.delete(r.id) && (clearTimeout(o.timer), e(t));
                },
                reject: (e) => {
                  this._sents.delete(r.id) && (clearTimeout(o.timer), t(e));
                },
                timer: setTimeout(() => {
                  this._sents.delete(r.id) && t(new Error('request timeout'));
                }, n),
                close: () => {
                  clearTimeout(o.timer), t(new Error('peer closed'));
                },
              };
            this._sents.set(r.id, o);
          })
        );
      }
      async notify(e, t) {
        const r = s.createNotification(e, t);
        this._logger.debug('notify() [method:%s]', e),
          await this._transport.send(r);
      }
      _handleTransport() {
        if (this._transport.closed)
          return (
            (this._closed = !0),
            void setTimeout(() => {
              this._closed || ((this._connected = !1), this.safeEmit('close'));
            })
          );
        this._transport.on('open', () => {
          this._closed ||
            (i.debug('emit "open"'),
            (this._connected = !0),
            this.safeEmit('open'));
        }),
          this._transport.on('disconnected', () => {
            this._closed ||
              (i.debug('emit "disconnected"'),
              (this._connected = !1),
              this.safeEmit('disconnected'));
          }),
          this._transport.on('failed', (e) => {
            this._closed ||
              (i.debug('emit "failed" [currentAttempt:%s]', e),
              (this._connected = !1),
              this.safeEmit('failed', e));
          }),
          this._transport.on('close', () => {
            this._closed ||
              ((this._closed = !0),
              i.debug('emit "close"'),
              (this._connected = !1),
              this.safeEmit('close'));
          }),
          this._transport.on('message', (e) => {
            e.request
              ? this._handleRequest(e)
              : e.response
              ? this._handleResponse(e)
              : e.notification && this._handleNotification(e);
          });
      }
      _handleRequest(e) {
        try {
          this.emit(
            'request',
            e,
            (t) => {
              const r = s.createSuccessResponse(e, t);
              this._transport.send(r).catch(() => {});
            },
            (t, r) => {
              t instanceof Error
                ? ((t = 500), (r = String(t)))
                : 'number' == typeof t && r instanceof Error && (r = String(r));
              const n = s.createErrorResponse(e, t, r);
              this._transport.send(n).catch(() => {});
            }
          );
        } catch (t) {
          const r = s.createErrorResponse(e, 500, String(t));
          this._transport.send(r).catch(() => {});
        }
      }
      _handleResponse(e) {
        const t = this._sents.get(e.id);
        if (t)
          if (e.ok) t.resolve(e.data);
          else {
            const r = new Error(e.errorReason);
            (r.code = e.errorCode), t.reject(r);
          }
        else
          i.error(
            'received response does not match any sent request [id:%s]',
            e.id
          );
      }
      _handleNotification(e) {
        this.safeEmit('notification', e);
      }
    };
  },
  function (e, t, r) {
    (function (n) {
      (t.log = function (...e) {
        return 'object' == typeof console && console.log && console.log(...e);
      }),
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? '%c' : '') +
              this.namespace +
              (this.useColors ? ' %c' : ' ') +
              t[0] +
              (this.useColors ? '%c ' : ' ') +
              '+' +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const r = 'color: ' + this.color;
          t.splice(1, 0, r, 'color: inherit');
          let n = 0,
            o = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            '%%' !== e && (n++, '%c' === e && (o = n));
          }),
            t.splice(o, 0, r);
        }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug');
          } catch (e) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem('debug');
          } catch (e) {}
          !e && void 0 !== n && 'env' in n && (e = n.env.DEBUG);
          return e;
        }),
        (t.useColors = function () {
          if (
            'undefined' != typeof window &&
            window.process &&
            ('renderer' === window.process.type || window.process.__nwjs)
          )
            return !0;
          if (
            'undefined' != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ('undefined' != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (e.exports = r(23)(t));
      const { formatters: o } = e.exports;
      o.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '[UnexpectedJSONParseError]: ' + e.message;
        }
      };
    }.call(this, r(22)));
  },
  function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function s() {
      throw new Error('setTimeout has not been defined');
    }
    function i() {
      throw new Error('clearTimeout has not been defined');
    }
    function a(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === s || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : s;
      } catch (e) {
        r = s;
      }
      try {
        n = 'function' == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        n = i;
      }
    })();
    var c,
      u = [],
      l = !1,
      d = -1;
    function p() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && f());
    }
    function f() {
      if (!l) {
        var e = a(p);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === i || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new h(e, t)), 1 !== u.length || l || a(f);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = 'browser'),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ''),
      (o.versions = {}),
      (o.on = m),
      (o.addListener = m),
      (o.once = m),
      (o.off = m),
      (o.removeListener = m),
      (o.removeAllListeners = m),
      (o.emit = m),
      (o.prependListener = m),
      (o.prependOnceListener = m),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error('process.binding is not supported');
      }),
      (o.cwd = function () {
        return '/';
      }),
      (o.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, r) {
    e.exports = function (e) {
      function t(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++)
          (t = (t << 5) - t + e.charCodeAt(r)), (t |= 0);
        return n.colors[Math.abs(t) % n.colors.length];
      }
      function n(e) {
        let r;
        function i(...e) {
          if (!i.enabled) return;
          const t = i,
            o = Number(new Date()),
            s = o - (r || o);
          (t.diff = s),
            (t.prev = r),
            (t.curr = o),
            (r = o),
            (e[0] = n.coerce(e[0])),
            'string' != typeof e[0] && e.unshift('%O');
          let a = 0;
          (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, o) => {
            if ('%%' === r) return r;
            a++;
            const s = n.formatters[o];
            if ('function' == typeof s) {
              const n = e[a];
              (r = s.call(t, n)), e.splice(a, 1), a--;
            }
            return r;
          })),
            n.formatArgs.call(t, e),
            (t.log || n.log).apply(t, e);
        }
        return (
          (i.namespace = e),
          (i.enabled = n.enabled(e)),
          (i.useColors = n.useColors()),
          (i.color = t(e)),
          (i.destroy = o),
          (i.extend = s),
          'function' == typeof n.init && n.init(i),
          n.instances.push(i),
          i
        );
      }
      function o() {
        const e = n.instances.indexOf(this);
        return -1 !== e && (n.instances.splice(e, 1), !0);
      }
      function s(e, t) {
        const r = n(this.namespace + (void 0 === t ? ':' : t) + e);
        return (r.log = this.log), r;
      }
      function i(e) {
        return e
          .toString()
          .substring(2, e.toString().length - 2)
          .replace(/\.\*\?$/, '*');
      }
      return (
        (n.debug = n),
        (n.default = n),
        (n.coerce = function (e) {
          if (e instanceof Error) return e.stack || e.message;
          return e;
        }),
        (n.disable = function () {
          const e = [
            ...n.names.map(i),
            ...n.skips.map(i).map((e) => '-' + e),
          ].join(',');
          return n.enable(''), e;
        }),
        (n.enable = function (e) {
          let t;
          n.save(e), (n.names = []), (n.skips = []);
          const r = ('string' == typeof e ? e : '').split(/[\s,]+/),
            o = r.length;
          for (t = 0; t < o; t++)
            r[t] &&
              ('-' === (e = r[t].replace(/\*/g, '.*?'))[0]
                ? n.skips.push(new RegExp('^' + e.substr(1) + '$'))
                : n.names.push(new RegExp('^' + e + '$')));
          for (t = 0; t < n.instances.length; t++) {
            const e = n.instances[t];
            e.enabled = n.enabled(e.namespace);
          }
        }),
        (n.enabled = function (e) {
          if ('*' === e[e.length - 1]) return !0;
          let t, r;
          for (t = 0, r = n.skips.length; t < r; t++)
            if (n.skips[t].test(e)) return !1;
          for (t = 0, r = n.names.length; t < r; t++)
            if (n.names[t].test(e)) return !0;
          return !1;
        }),
        (n.humanize = r(24)),
        Object.keys(e).forEach((t) => {
          n[t] = e[t];
        }),
        (n.instances = []),
        (n.names = []),
        (n.skips = []),
        (n.formatters = {}),
        (n.selectColor = t),
        n.enable(n.load()),
        n
      );
    };
  },
  function (e, t) {
    var r = 1e3,
      n = 6e4,
      o = 60 * n,
      s = 24 * o;
    function i(e, t, r, n) {
      var o = t >= 1.5 * r;
      return Math.round(e / r) + ' ' + n + (o ? 's' : '');
    }
    e.exports = function (e, t) {
      t = t || {};
      var a = typeof e;
      if ('string' === a && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 100) return;
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            e
          );
          if (!t) return;
          var i = parseFloat(t[1]);
          switch ((t[2] || 'ms').toLowerCase()) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return 315576e5 * i;
            case 'weeks':
            case 'week':
            case 'w':
              return 6048e5 * i;
            case 'days':
            case 'day':
            case 'd':
              return i * s;
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return i * o;
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return i * n;
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return i * r;
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return i;
            default:
              return;
          }
        })(e);
      if ('number' === a && isFinite(e))
        return t.long
          ? (function (e) {
              var t = Math.abs(e);
              if (t >= s) return i(e, t, s, 'day');
              if (t >= o) return i(e, t, o, 'hour');
              if (t >= n) return i(e, t, n, 'minute');
              if (t >= r) return i(e, t, r, 'second');
              return e + ' ms';
            })(e)
          : (function (e) {
              var t = Math.abs(e);
              if (t >= s) return Math.round(e / s) + 'd';
              if (t >= o) return Math.round(e / o) + 'h';
              if (t >= n) return Math.round(e / n) + 'm';
              if (t >= r) return Math.round(e / r) + 's';
              return e + 'ms';
            })(e);
      throw new Error(
        'val is not a non-empty string or a valid number. val=' +
          JSON.stringify(e)
      );
    };
  },
  function (e, t) {
    t.generateRandomNumber = function () {
      return Math.round(1e7 * Math.random());
    };
  },
  function (e, t, r) {
    const n = r(27).w3cwebsocket,
      o = r(31),
      s = r(6),
      i = r(11),
      a = r(12),
      c = { retries: 10, factor: 2, minTimeout: 1e3, maxTimeout: 8e3 },
      u = new s('WebSocketTransport');
    e.exports = class extends i {
      constructor(e, t) {
        super(u),
          u.debug('constructor() [url:%s, options:%o]', e, t),
          (this._closed = !1),
          (this._url = e),
          (this._options = t || {}),
          (this._ws = null),
          this._runWebSocket();
      }
      get closed() {
        return this._closed;
      }
      close() {
        if (!this._closed) {
          u.debug('close()'), (this._closed = !0), this.safeEmit('close');
          try {
            (this._ws.onopen = null),
              (this._ws.onclose = null),
              (this._ws.onerror = null),
              (this._ws.onmessage = null),
              this._ws.close();
          } catch (e) {
            u.error('close() | error closing the WebSocket: %o', e);
          }
        }
      }
      async send(e) {
        if (this._closed) throw new Error('transport closed');
        try {
          this._ws.send(JSON.stringify(e));
        } catch (e) {
          throw (u.warn('send() failed:%o', e), e);
        }
      }
      _runWebSocket() {
        const e = o.operation(this._options.retry || c);
        let t = !1;
        e.attempt((r) => {
          this._closed
            ? e.stop()
            : (u.debug('_runWebSocket() [currentAttempt:%s]', r),
              (this._ws = new n(
                this._url,
                'protoo',
                this._options.origin,
                this._options.headers,
                this._options.requestOptions,
                this._options.clientConfig
              )),
              (this._ws.onopen = () => {
                this._closed || ((t = !0), this.safeEmit('open'));
              }),
              (this._ws.onclose = (n) => {
                if (!this._closed) {
                  if (
                    (u.warn(
                      'WebSocket "close" event [wasClean:%s, code:%s, reason:"%s"]',
                      n.wasClean,
                      n.code,
                      n.reason
                    ),
                    4e3 !== n.code)
                  ) {
                    if (t) {
                      if (
                        (e.stop(), this.safeEmit('disconnected'), this._closed)
                      )
                        return;
                      return void this._runWebSocket();
                    }
                    if ((this.safeEmit('failed', r), this._closed)) return;
                    if (e.retry(!0)) return;
                  }
                  (this._closed = !0), this.safeEmit('close');
                }
              }),
              (this._ws.onerror = () => {
                this._closed || u.error('WebSocket "error" event');
              }),
              (this._ws.onmessage = (e) => {
                if (this._closed) return;
                const t = a.parse(e.data);
                t &&
                  (0 !== this.listenerCount('message')
                    ? this.safeEmit('message', t)
                    : u.error(
                        'no listeners for WebSocket "message" event, ignoring received message'
                      ));
              }));
        });
      }
    };
  },
  function (e, t, r) {
    var n;
    try {
      n = r(28);
    } catch (e) {
    } finally {
      if ((n || 'undefined' == typeof window || (n = window), !n))
        throw new Error('Could not determine global this');
    }
    var o = n.WebSocket || n.MozWebSocket,
      s = r(29);
    function i(e, t) {
      return t ? new o(e, t) : new o(e);
    }
    o &&
      ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function (e) {
        Object.defineProperty(i, e, {
          get: function () {
            return o[e];
          },
        });
      }),
      (e.exports = { w3cwebsocket: o ? i : null, version: s });
  },
  function (e, t) {
    var r = function () {
      if ('object' == typeof self && self) return self;
      if ('object' == typeof window && window) return window;
      throw new Error('Unable to resolve global `this`');
    };
    e.exports = (function () {
      if (this) return this;
      if ('object' == typeof globalThis && globalThis) return globalThis;
      try {
        Object.defineProperty(Object.prototype, '__global__', {
          get: function () {
            return this;
          },
          configurable: !0,
        });
      } catch (e) {
        return r();
      }
      try {
        return __global__ || r();
      } finally {
        delete Object.prototype.__global__;
      }
    })();
  },
  function (e, t, r) {
    e.exports = r(30).version;
  },
  function (e) {
    e.exports = JSON.parse(
      '{"_from":"websocket@^1.0.28","_id":"websocket@1.0.31","_inBundle":false,"_integrity":"sha512-VAouplvGKPiKFDTeCCO65vYHsyay8DqoBSlzIO3fayrfOgU94lQN5a1uWVnFrMLceTJw/+fQXR5PGbUVRaHshQ==","_location":"/websocket","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"websocket@^1.0.28","name":"websocket","escapedName":"websocket","rawSpec":"^1.0.28","saveSpec":null,"fetchSpec":"^1.0.28"},"_requiredBy":["/protoo-client"],"_resolved":"https://registry.npmjs.org/websocket/-/websocket-1.0.31.tgz","_shasum":"e5d0f16c3340ed87670e489ecae6144c79358730","_spec":"websocket@^1.0.28","_where":"C:\\\\Users\\\\bhanu\\\\Documents\\\\GitHub\\\\ion\\\\node_modules\\\\protoo-client","author":{"name":"Brian McKelvey","email":"theturtle32@gmail.com","url":"https://github.com/theturtle32"},"browser":"lib/browser.js","bugs":{"url":"https://github.com/theturtle32/WebSocket-Node/issues"},"bundleDependencies":false,"config":{"verbose":false},"contributors":[{"name":"Iñaki Baz Castillo","email":"ibc@aliax.net","url":"http://dev.sipdoc.net"}],"dependencies":{"debug":"^2.2.0","es5-ext":"^0.10.50","nan":"^2.14.0","typedarray-to-buffer":"^3.1.5","yaeti":"^0.0.6"},"deprecated":false,"description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","devDependencies":{"buffer-equal":"^1.0.0","faucet":"^0.0.1","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint":"^2.0.0","jshint-stylish":"^2.2.1","tape":"^4.9.1"},"directories":{"lib":"./lib"},"engines":{"node":">=0.10.0"},"homepage":"https://github.com/theturtle32/WebSocket-Node","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"license":"Apache-2.0","main":"index","name":"websocket","repository":{"type":"git","url":"git+https://github.com/theturtle32/WebSocket-Node.git"},"scripts":{"gulp":"gulp","install":"(node-gyp rebuild 2> builderror.log) || (exit 0)","test":"faucet test/unit"},"version":"1.0.31"}'
    );
  },
  function (e, t, r) {
    e.exports = r(32);
  },
  function (e, t, r) {
    var n = r(33);
    (t.operation = function (e) {
      var r = t.timeouts(e);
      return new n(r, {
        forever: e && e.forever,
        unref: e && e.unref,
        maxRetryTime: e && e.maxRetryTime,
      });
    }),
      (t.timeouts = function (e) {
        if (e instanceof Array) return [].concat(e);
        var t = {
          retries: 10,
          factor: 2,
          minTimeout: 1e3,
          maxTimeout: 1 / 0,
          randomize: !1,
        };
        for (var r in e) t[r] = e[r];
        if (t.minTimeout > t.maxTimeout)
          throw new Error('minTimeout is greater than maxTimeout');
        for (var n = [], o = 0; o < t.retries; o++)
          n.push(this.createTimeout(o, t));
        return (
          e && e.forever && !n.length && n.push(this.createTimeout(o, t)),
          n.sort(function (e, t) {
            return e - t;
          }),
          n
        );
      }),
      (t.createTimeout = function (e, t) {
        var r = t.randomize ? Math.random() + 1 : 1,
          n = Math.round(r * t.minTimeout * Math.pow(t.factor, e));
        return (n = Math.min(n, t.maxTimeout));
      }),
      (t.wrap = function (e, r, n) {
        if ((r instanceof Array && ((n = r), (r = null)), !n))
          for (var o in ((n = []), e)) 'function' == typeof e[o] && n.push(o);
        for (var s = 0; s < n.length; s++) {
          var i = n[s],
            a = e[i];
          (e[i] = function (n) {
            var o = t.operation(r),
              s = Array.prototype.slice.call(arguments, 1),
              i = s.pop();
            s.push(function (e) {
              o.retry(e) ||
                (e && (arguments[0] = o.mainError()), i.apply(this, arguments));
            }),
              o.attempt(function () {
                n.apply(e, s);
              });
          }.bind(e, a)),
            (e[i].options = r);
        }
      });
  },
  function (e, t) {
    function r(e, t) {
      'boolean' == typeof t && (t = { forever: t }),
        (this._originalTimeouts = JSON.parse(JSON.stringify(e))),
        (this._timeouts = e),
        (this._options = t || {}),
        (this._maxRetryTime = (t && t.maxRetryTime) || 1 / 0),
        (this._fn = null),
        (this._errors = []),
        (this._attempts = 1),
        (this._operationTimeout = null),
        (this._operationTimeoutCb = null),
        (this._timeout = null),
        (this._operationStart = null),
        this._options.forever &&
          (this._cachedTimeouts = this._timeouts.slice(0));
    }
    (e.exports = r),
      (r.prototype.reset = function () {
        (this._attempts = 1), (this._timeouts = this._originalTimeouts);
      }),
      (r.prototype.stop = function () {
        this._timeout && clearTimeout(this._timeout),
          (this._timeouts = []),
          (this._cachedTimeouts = null);
      }),
      (r.prototype.retry = function (e) {
        if ((this._timeout && clearTimeout(this._timeout), !e)) return !1;
        var t = new Date().getTime();
        if (e && t - this._operationStart >= this._maxRetryTime)
          return (
            this._errors.unshift(new Error('RetryOperation timeout occurred')),
            !1
          );
        this._errors.push(e);
        var r = this._timeouts.shift();
        if (void 0 === r) {
          if (!this._cachedTimeouts) return !1;
          this._errors.splice(this._errors.length - 1, this._errors.length),
            (this._timeouts = this._cachedTimeouts.slice(0)),
            (r = this._timeouts.shift());
        }
        var n = this,
          o = setTimeout(function () {
            n._attempts++,
              n._operationTimeoutCb &&
                ((n._timeout = setTimeout(function () {
                  n._operationTimeoutCb(n._attempts);
                }, n._operationTimeout)),
                n._options.unref && n._timeout.unref()),
              n._fn(n._attempts);
          }, r);
        return this._options.unref && o.unref(), !0;
      }),
      (r.prototype.attempt = function (e, t) {
        (this._fn = e),
          t &&
            (t.timeout && (this._operationTimeout = t.timeout),
            t.cb && (this._operationTimeoutCb = t.cb));
        var r = this;
        this._operationTimeoutCb &&
          (this._timeout = setTimeout(function () {
            r._operationTimeoutCb();
          }, r._operationTimeout)),
          (this._operationStart = new Date().getTime()),
          this._fn(this._attempts);
      }),
      (r.prototype.try = function (e) {
        console.log('Using RetryOperation.try() is deprecated'),
          this.attempt(e);
      }),
      (r.prototype.start = function (e) {
        console.log('Using RetryOperation.start() is deprecated'),
          this.attempt(e);
      }),
      (r.prototype.start = r.prototype.try),
      (r.prototype.errors = function () {
        return this._errors;
      }),
      (r.prototype.attempts = function () {
        return this._attempts;
      }),
      (r.prototype.mainError = function () {
        if (0 === this._errors.length) return null;
        for (var e = {}, t = null, r = 0, n = 0; n < this._errors.length; n++) {
          var o = this._errors[n],
            s = o.message,
            i = (e[s] || 0) + 1;
          (e[s] = i), i >= r && ((t = o), (r = i));
        }
        return t;
      });
  },
  function (e, t) {
    var r =
      ('undefined' != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto &&
        'function' == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
    if (r) {
      var n = new Uint8Array(16);
      e.exports = function () {
        return r(n), n;
      };
    } else {
      var o = new Array(16);
      e.exports = function () {
        for (var e, t = 0; t < 16; t++)
          0 == (3 & t) && (e = 4294967296 * Math.random()),
            (o[t] = (e >>> ((3 & t) << 3)) & 255);
        return o;
      };
    }
  },
  function (e, t) {
    for (var r = [], n = 0; n < 256; ++n)
      r[n] = (n + 256).toString(16).substr(1);
    e.exports = function (e, t) {
      var n = t || 0,
        o = r;
      return [
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        '-',
        o[e[n++]],
        o[e[n++]],
        '-',
        o[e[n++]],
        o[e[n++]],
        '-',
        o[e[n++]],
        o[e[n++]],
        '-',
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
      ].join('');
    };
  },
  function (e, t, r) {
    var n = function (e) {
        return String(Number(e)) === e ? Number(e) : e;
      },
      o = function (e, t, r) {
        var o = e.name && e.names;
        e.push && !t[e.push]
          ? (t[e.push] = [])
          : o && !t[e.name] && (t[e.name] = {});
        var s = e.push ? {} : o ? t[e.name] : t;
        !(function (e, t, r, o) {
          if (o && !r) t[o] = n(e[1]);
          else
            for (var s = 0; s < r.length; s += 1)
              null != e[s + 1] && (t[r[s]] = n(e[s + 1]));
        })(r.match(e.reg), s, e.names, e.name),
          e.push && t[e.push].push(s);
      },
      s = r(13),
      i = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
    t.parse = function (e) {
      var t = {},
        r = [],
        n = t;
      return (
        e
          .split(/(\r\n|\r|\n)/)
          .filter(i)
          .forEach(function (e) {
            var t = e[0],
              i = e.slice(2);
            'm' === t && (r.push({ rtp: [], fmtp: [] }), (n = r[r.length - 1]));
            for (var a = 0; a < (s[t] || []).length; a += 1) {
              var c = s[t][a];
              if (c.reg.test(i)) return o(c, n, i);
            }
          }),
        (t.media = r),
        t
      );
    };
    var a = function (e, t) {
      var r = t.split(/=(.+)/, 2);
      return (
        2 === r.length
          ? (e[r[0]] = n(r[1]))
          : 1 === r.length && t.length > 1 && (e[r[0]] = void 0),
        e
      );
    };
    (t.parseParams = function (e) {
      return e.split(/;\s?/).reduce(a, {});
    }),
      (t.parseFmtpConfig = t.parseParams),
      (t.parsePayloads = function (e) {
        return e.toString().split(' ').map(Number);
      }),
      (t.parseRemoteCandidates = function (e) {
        for (var t = [], r = e.split(' ').map(n), o = 0; o < r.length; o += 3)
          t.push({ component: r[o], ip: r[o + 1], port: r[o + 2] });
        return t;
      }),
      (t.parseImageAttributes = function (e) {
        return e.split(' ').map(function (e) {
          return e
            .substring(1, e.length - 1)
            .split(',')
            .reduce(a, {});
        });
      }),
      (t.parseSimulcastStreamList = function (e) {
        return e.split(';').map(function (e) {
          return e.split(',').map(function (e) {
            var t,
              r = !1;
            return (
              '~' !== e[0]
                ? (t = n(e))
                : ((t = n(e.substring(1, e.length))), (r = !0)),
              { scid: t, paused: r }
            );
          });
        });
      });
  },
  function (e, t, r) {
    var n = r(13),
      o = /%[sdv%]/g,
      s = function (e) {
        var t = 1,
          r = arguments,
          n = r.length;
        return e.replace(o, function (e) {
          if (t >= n) return e;
          var o = r[t];
          switch (((t += 1), e)) {
            case '%%':
              return '%';
            case '%s':
              return String(o);
            case '%d':
              return Number(o);
            case '%v':
              return '';
          }
        });
      },
      i = function (e, t, r) {
        var n = [
          e +
            '=' +
            (t.format instanceof Function
              ? t.format(t.push ? r : r[t.name])
              : t.format),
        ];
        if (t.names)
          for (var o = 0; o < t.names.length; o += 1) {
            var i = t.names[o];
            t.name ? n.push(r[t.name][i]) : n.push(r[t.names[o]]);
          }
        else n.push(r[t.name]);
        return s.apply(null, n);
      },
      a = ['v', 'o', 's', 'i', 'u', 'e', 'p', 'c', 'b', 't', 'r', 'z', 'a'],
      c = ['i', 'c', 'b', 'a'];
    e.exports = function (e, t) {
      (t = t || {}),
        null == e.version && (e.version = 0),
        null == e.name && (e.name = ' '),
        e.media.forEach(function (e) {
          null == e.payloads && (e.payloads = '');
        });
      var r = t.outerOrder || a,
        o = t.innerOrder || c,
        s = [];
      return (
        r.forEach(function (t) {
          n[t].forEach(function (r) {
            r.name in e && null != e[r.name]
              ? s.push(i(t, r, e))
              : r.push in e &&
                null != e[r.push] &&
                e[r.push].forEach(function (e) {
                  s.push(i(t, r, e));
                });
          });
        }),
        e.media.forEach(function (e) {
          s.push(i('m', n.m[0], e)),
            o.forEach(function (t) {
              n[t].forEach(function (r) {
                r.name in e && null != e[r.name]
                  ? s.push(i(t, r, e))
                  : r.push in e &&
                    null != e[r.push] &&
                    e[r.push].forEach(function (e) {
                      s.push(i(t, r, e));
                    });
              });
            });
        }),
        s.join('\r\n') + '\r\n'
      );
    };
  },
  function (e, t, r) {
    'use strict';
    r.r(t),
      r.d(t, 'Client', function () {
        return T;
      }),
      r.d(t, 'Stream', function () {
        return S;
      });
    var n = r(0),
      o = r.n(n),
      s = r(1),
      i = r.n(s),
      a = r(2),
      c = r.n(a),
      u = r(3),
      l = r.n(u),
      d = r(7),
      p = r.n(d),
      f = r(8),
      h = r.n(f),
      m = r(4),
      v = r.n(m),
      g = r(5),
      y = r(9),
      b = r.n(y),
      _ = r(14),
      w = r.n(_),
      x = (function () {
        function e() {
          c()(this, e);
        }
        return (
          l()(e, [
            {
              key: 'play',
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {
                          id: id,
                          stream: stream,
                          elementId: elementId,
                          remote: !1,
                        },
                  t = document.createElement('video');
                (t.autoplay = !0),
                  (t.playsinline = !0),
                  (t.controls = !0),
                  (t.muted = !e.remote),
                  (t.srcObject = e.stream),
                  (t.id = 'stream'.concat(e.id));
                var r = document.getElementById(e.elementId);
                r.appendChild(t), (this.parentElement = r), (this._video = t);
              },
            },
            {
              key: 'stop',
              value: function () {
                this._video.stop(), this.parentElement.removeChild(this._video);
              },
            },
          ]),
          e
        );
      })();
    function C() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    var k = {
        qvga: { width: { ideal: 320 }, height: { ideal: 180 } },
        vga: { width: { ideal: 640 }, height: { ideal: 360 } },
        shd: { width: { ideal: 960 }, height: { ideal: 540 } },
        hd: { width: { ideal: 1280 }, height: { ideal: 720 } },
      },
      S = (function (e) {
        p()(a, e);
        var t,
          r,
          n,
          s =
            ((t = a),
            function () {
              var e,
                r = v()(t);
              if (C()) {
                var n = v()(this).constructor;
                e = Reflect.construct(r, arguments, n);
              } else e = r.apply(this, arguments);
              return h()(this, e);
            });
        function a() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
          return (
            c()(this, a),
            ((e = s.call(this))._mid = t),
            (e._stream = r),
            (e._videoElement = new x()),
            e
          );
        }
        return (
          l()(a, [
            {
              key: 'init',
              value:
                ((n = i()(
                  o.a.mark(function e() {
                    var t,
                      r,
                      n = arguments;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = n.length > 0 && void 0 !== n[0] && n[0]),
                                (r =
                                  n.length > 1 && void 0 !== n[1]
                                    ? n[1]
                                    : {
                                        audio: !0,
                                        video: !0,
                                        screen: !1,
                                        resolution: 'hd',
                                      }),
                                !t)
                              ) {
                                e.next = 12;
                                break;
                              }
                              if (!r.screen) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (e.next = 6),
                                navigator.mediaDevices.getDisplayMedia({
                                  video: !0,
                                })
                              );
                            case 6:
                              (this._stream = e.sent), (e.next = 12);
                              break;
                            case 9:
                              return (
                                (e.next = 11),
                                navigator.mediaDevices.getUserMedia({
                                  audio: r.audio,
                                  video: !0 === r.video && k[r.resolution],
                                })
                              );
                            case 11:
                              this._stream = e.sent;
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: 'render',
              value: function (e) {
                this._videoElement.play({
                  id: this._mid,
                  stream: this._stream,
                  elementId: e,
                });
              },
            },
            {
              key: 'stop',
              value:
                ((r = i()(
                  o.a.mark(function e() {
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              this._videoElement.stop();
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: 'mid',
              set: function (e) {
                this._mid = e;
              },
              get: function () {
                return this._mid;
              },
            },
            {
              key: 'stream',
              get: function () {
                return this._stream;
              },
            },
          ]),
          a
        );
      })(g.EventEmitter),
      E = r(10);
    function O() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    var j = 'stun:stun.stunprotocol.org:3478',
      T = (function (e) {
        p()(_, e);
        var t,
          r,
          n,
          s,
          a,
          u,
          d,
          f,
          m,
          g,
          y =
            ((t = _),
            function () {
              var e,
                r = v()(t);
              if (O()) {
                var n = v()(this).constructor;
                e = Reflect.construct(r, arguments, n);
              } else e = r.apply(this, arguments);
              return h()(this, e);
            });
        function _() {
          var e;
          return (
            c()(this, _),
            ((e = y.call(this))._port = 8443),
            (e._uid = w()()),
            (e._pcs = new Map()),
            (e._streams = new Map()),
            e
          );
        }
        return (
          l()(_, [
            {
              key: 'init',
              value: function () {
                var e = this;
                this._url = this._getProtooUrl(this._uid);
                var t = new b.a.WebSocketTransport(this._url);
                (this._protoo = new b.a.Peer(t)),
                  this._protoo.on('open', function () {
                    console.log('Peer "open" event'), e.emit('transport-open');
                  }),
                  this._protoo.on('disconnected', function () {
                    console.log('Peer "disconnected" event'),
                      e.emit('transport-failed');
                  }),
                  this._protoo.on('close', function () {
                    console.log('Peer "close" event'),
                      e.emit('transport-closed');
                  }),
                  this._protoo.on('request', this._handleRequest.bind(this)),
                  this._protoo.on(
                    'notification',
                    this._handleNotification.bind(this)
                  );
              },
            },
            {
              key: 'join',
              value:
                ((g = i()(
                  o.a.mark(function e(t) {
                    var r,
                      n,
                      s = arguments;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r =
                                  s.length > 1 && void 0 !== s[1]
                                    ? s[1]
                                    : { name: 'Guest' }),
                                (this._rid = t),
                                (e.prev = 2),
                                (e.next = 5),
                                this._protoo.request('join', {
                                  rid: this._rid,
                                  uid: this._uid,
                                  info: r,
                                })
                              );
                            case 5:
                              (n = e.sent),
                                console.log(
                                  'join success: result => ' + JSON.stringify(n)
                                ),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                console.log('join reject: error =>' + e.t0);
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 9]]
                    );
                  })
                )),
                function (e) {
                  return g.apply(this, arguments);
                }),
            },
            {
              key: 'leave',
              value:
                ((m = i()(
                  o.a.mark(function e() {
                    var t;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                this._protoo.request('leave', {
                                  rid: this._rid,
                                  uid: this._uid,
                                })
                              );
                            case 3:
                              (t = e.sent),
                                console.log(
                                  'leave success: result => ' +
                                    JSON.stringify(t)
                                ),
                                (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                console.log('leave reject: error =>' + e.t0);
                            case 10:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 7]]
                    );
                  })
                )),
                function () {
                  return m.apply(this, arguments);
                }),
            },
            {
              key: 'publish',
              value:
                ((f = i()(
                  o.a.mark(function e() {
                    var t,
                      r,
                      n = this,
                      s = arguments;
                    return o.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t =
                                s.length > 0 && void 0 !== s[0]
                                  ? s[0]
                                  : {
                                      audio: !0,
                                      video: !0,
                                      screen: !1,
                                      codec: 'h264',
                                      resolution: 'hd',
                                      bandwidth: 1024,
                                    }),
                              console.log('publish options => %o', t),
                              (r = new Promise(
                                (function () {
                                  var e = i()(
                                    o.a.mark(function e(r, s) {
                                      var a, c;
                                      return o.a.wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  (a = new S()),
                                                  (e.next = 4),
                                                  a.init(!0, {
                                                    audio: t.audio,
                                                    video: t.video,
                                                    screen: t.screen,
                                                    resolution: t.resolution,
                                                  })
                                                );
                                              case 4:
                                                return (
                                                  (e.next = 6),
                                                  n._createSender(
                                                    a.stream,
                                                    t.codec
                                                  )
                                                );
                                              case 6:
                                                ((c =
                                                  e.sent).onicecandidate = (function () {
                                                  var e = i()(
                                                    o.a.mark(function e(s) {
                                                      var i, u;
                                                      return o.a.wrap(function (
                                                        e
                                                      ) {
                                                        for (;;)
                                                          switch (
                                                            (e.prev = e.next)
                                                          ) {
                                                            case 0:
                                                              if (c.sendOffer) {
                                                                e.next = 14;
                                                                break;
                                                              }
                                                              return (
                                                                (i =
                                                                  c.localDescription),
                                                                console.log(
                                                                  'Send offer sdp => ' +
                                                                    i.sdp
                                                                ),
                                                                (c.sendOffer = !0),
                                                                (e.next = 6),
                                                                n._protoo.request(
                                                                  'publish',
                                                                  {
                                                                    rid: n._rid,
                                                                    jsep: i,
                                                                    options: t,
                                                                  }
                                                                )
                                                              );
                                                            case 6:
                                                              return (
                                                                (u = e.sent),
                                                                (e.next = 9),
                                                                c.setRemoteDescription(
                                                                  u.jsep
                                                                )
                                                              );
                                                            case 9:
                                                              console.log(
                                                                'publish success => ' +
                                                                  JSON.stringify(
                                                                    u
                                                                  )
                                                              ),
                                                                (a.mid = u.mid),
                                                                (n._streams[
                                                                  a.mid
                                                                ] = a),
                                                                (n._pcs[
                                                                  a.mid
                                                                ] = c),
                                                                r(a);
                                                            case 14:
                                                            case 'end':
                                                              return e.stop();
                                                          }
                                                      },
                                                      e);
                                                    })
                                                  );
                                                  return function (t) {
                                                    return e.apply(
                                                      this,
                                                      arguments
                                                    );
                                                  };
                                                })()),
                                                  (e.next = 16);
                                                break;
                                              case 10:
                                                throw (
                                                  ((e.prev = 10),
                                                  (e.t0 = e.catch(0)),
                                                  e.t0)
                                                );
                                              case 16:
                                              case 'end':
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [[0, 10]]
                                      );
                                    })
                                  );
                                  return function (t, r) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )),
                              e.abrupt('return', r)
                            );
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function () {
                  return f.apply(this, arguments);
                }),
            },
            {
              key: 'unpublish',
              value:
                ((d = i()(
                  o.a.mark(function e(t) {
                    var r;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                console.log(
                                  'unpublish rid => %s, mid => %s',
                                  this._rid,
                                  t
                                ),
                                this._removePC(t),
                                (e.prev = 2),
                                (e.next = 5),
                                this._protoo.request('unpublish', {
                                  rid: this._rid,
                                  mid: t,
                                })
                              );
                            case 5:
                              (r = e.sent),
                                console.log(
                                  'unpublish success: result => ' +
                                    JSON.stringify(r)
                                ),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                console.log(
                                  'unpublish reject: error =>' + e.t0
                                );
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 9]]
                    );
                  })
                )),
                function (e) {
                  return d.apply(this, arguments);
                }),
            },
            {
              key: 'subscribe',
              value:
                ((u = i()(
                  o.a.mark(function e(t, r) {
                    var n,
                      s = this;
                    return o.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              console.log(
                                'subscribe rid => %s, mid => %s',
                                t,
                                r
                              ),
                              (n = new Promise(
                                (function () {
                                  var e = i()(
                                    o.a.mark(function e(n, a) {
                                      var c, u;
                                      return o.a.wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  (e.next = 3),
                                                  s._createReceiver(r)
                                                );
                                              case 3:
                                                (c = e.sent),
                                                  (u = ''),
                                                  (c.onaddstream = function (
                                                    e
                                                  ) {
                                                    var t = new S(u, e.stream);
                                                    console.log(
                                                      'Stream::pc::onaddstream',
                                                      t.mid
                                                    ),
                                                      (s._streams[u] = t),
                                                      n(t);
                                                  }),
                                                  (c.onremovestream = function (
                                                    e
                                                  ) {
                                                    var t = e.stream;
                                                    console.log(
                                                      'Stream::pc::onremovestream',
                                                      t.id
                                                    );
                                                  }),
                                                  (c.onicecandidate = (function () {
                                                    var e = i()(
                                                      o.a.mark(function e(n) {
                                                        var i, a;
                                                        return o.a.wrap(
                                                          function (e) {
                                                            for (;;)
                                                              switch (
                                                                (e.prev =
                                                                  e.next)
                                                              ) {
                                                                case 0:
                                                                  if (
                                                                    c.sendOffer
                                                                  ) {
                                                                    e.next = 11;
                                                                    break;
                                                                  }
                                                                  return (
                                                                    (i =
                                                                      c.localDescription),
                                                                    console.log(
                                                                      'Send offer sdp => ' +
                                                                        i.sdp
                                                                    ),
                                                                    (c.sendOffer = !0),
                                                                    (e.next = 6),
                                                                    s._protoo.request(
                                                                      'subscribe',
                                                                      {
                                                                        rid: t,
                                                                        jsep: i,
                                                                        mid: r,
                                                                      }
                                                                    )
                                                                  );
                                                                case 6:
                                                                  return (
                                                                    (a =
                                                                      e.sent),
                                                                    (u = a.mid),
                                                                    console.log(
                                                                      'subscribe success => result(mid: ' +
                                                                        u +
                                                                        ') sdp => ' +
                                                                        a.jsep
                                                                          .sdp
                                                                    ),
                                                                    (e.next = 11),
                                                                    c.setRemoteDescription(
                                                                      a.jsep
                                                                    )
                                                                  );
                                                                case 11:
                                                                case 'end':
                                                                  return e.stop();
                                                              }
                                                          },
                                                          e
                                                        );
                                                      })
                                                    );
                                                    return function (t) {
                                                      return e.apply(
                                                        this,
                                                        arguments
                                                      );
                                                    };
                                                  })()),
                                                  (e.next = 14);
                                                break;
                                              case 10:
                                                (e.prev = 10),
                                                  (e.t0 = e.catch(0)),
                                                  console.log(
                                                    'subscribe request error  => ' +
                                                      e.t0
                                                  ),
                                                  a(e.t0);
                                              case 14:
                                              case 'end':
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [[0, 10]]
                                      );
                                    })
                                  );
                                  return function (t, r) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )),
                              e.abrupt('return', n)
                            );
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function (e, t) {
                  return u.apply(this, arguments);
                }),
            },
            {
              key: 'unsubscribe',
              value:
                ((a = i()(
                  o.a.mark(function e(t, r) {
                    var n;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                console.log(
                                  'unsubscribe rid => %s, mid => %s',
                                  t,
                                  r
                                ),
                                (e.prev = 1),
                                (e.next = 4),
                                this._protoo.request('unsubscribe', {
                                  rid: t,
                                  mid: r,
                                })
                              );
                            case 4:
                              (n = e.sent),
                                console.log(
                                  'unsubscribe success: result => ' +
                                    JSON.stringify(n)
                                ),
                                this._removePC(r),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                console.log(
                                  'unsubscribe reject: error =>' + e.t0
                                );
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 9]]
                    );
                  })
                )),
                function (e, t) {
                  return a.apply(this, arguments);
                }),
            },
            {
              key: 'broadcast',
              value:
                ((s = i()(
                  o.a.mark(function e(t, r) {
                    var n;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                this._protoo.request('broadcast', {
                                  rid: t,
                                  uid: this._uid,
                                  info: r,
                                })
                              );
                            case 3:
                              (n = e.sent),
                                console.log(
                                  'broadcast success: result => ' +
                                    JSON.stringify(n)
                                ),
                                (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                console.log(
                                  'broadcast reject: error =>' + e.t0
                                );
                            case 10:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 7]]
                    );
                  })
                )),
                function (e, t) {
                  return s.apply(this, arguments);
                }),
            },
            {
              key: 'close',
              value: function () {
                this._protoo.close();
              },
            },
            {
              key: '_payloadModify',
              value: function (e, t) {
                if (void 0 === t) return e;
                var r,
                  n = '',
                  o = E.parse(e.sdp);
                console.log('SDP object => %o', o);
                var s = -1;
                if (
                  (o.media.map(function (e, t) {
                    'video' == e.type && (s = t);
                  }),
                  -1 == s)
                )
                  return e;
                if ('vp8' === t.toLowerCase()) (r = 96), (n = 'VP8');
                else if ('vp9' === t.toLowerCase()) (r = 98), (n = 'VP9');
                else {
                  if ('h264' !== t.toLowerCase()) return e;
                  (r = 102), (n = 'H264');
                }
                console.log('Setup codec => ' + n + ', payload => ' + r);
                var i = [{ payload: r, codec: n, rate: 9e4, encoding: null }];
                (o.media[s].payloads = r), (o.media[s].rtp = i);
                o.media[s].fmtp = [];
                var a = [
                  { payload: r, type: 'transport-cc', subtype: null },
                  { payload: r, type: 'ccm', subtype: 'fir' },
                  { payload: r, type: 'nack', subtype: null },
                  { payload: r, type: 'nack', subtype: 'pli' },
                ];
                if (((o.media[s].rtcpFb = a), o.media[s].ssrcGroups)) {
                  var c = o.media[s].ssrcGroups[0].ssrcs,
                    u = c.split(' ')[0];
                  console.log('ssrcs => %s, video %s', c, u);
                  var l = o.media[s].ssrcs;
                  (l = l.filter(function (e) {
                    return e.id == u;
                  })),
                    (o.media[s].ssrcGroups = []),
                    (o.media[s].ssrcs = l);
                }
                var d = e;
                return (d.sdp = E.write(o)), d;
              },
            },
            {
              key: '_createSender',
              value:
                ((n = i()(
                  o.a.mark(function e(t, r) {
                    var n, s, i;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                console.log('create sender => %s', r),
                                ((n = new RTCPeerConnection({
                                  iceServers: [{ urls: j }],
                                })).sendOffer = !1),
                                n.addStream(t),
                                (e.next = 6),
                                n.createOffer({
                                  offerToReceiveVideo: !1,
                                  offerToReceiveAudio: !1,
                                })
                              );
                            case 6:
                              return (
                                (s = e.sent),
                                (i = this._payloadModify(s, r)),
                                n.setLocalDescription(i),
                                e.abrupt('return', n)
                              );
                            case 10:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e, t) {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: '_createReceiver',
              value:
                ((r = i()(
                  o.a.mark(function e(t) {
                    var r, n;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                console.log('create receiver => %s', t),
                                ((r = new RTCPeerConnection({
                                  iceServers: [{ urls: j }],
                                })).sendOffer = !1),
                                r.addTransceiver('audio', {
                                  direction: 'recvonly',
                                }),
                                r.addTransceiver('video', {
                                  direction: 'recvonly',
                                }),
                                (e.next = 7),
                                r.createOffer()
                              );
                            case 7:
                              return (
                                (n = e.sent),
                                r.setLocalDescription(n),
                                (this._pcs[t] = r),
                                e.abrupt('return', r)
                              );
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e) {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: '_removePC',
              value: function (e) {
                var t = this._pcs[e];
                if (t) {
                  console.log('remove pc mid => %s', e);
                  var r = this._streams[e];
                  r && (t.removeStream(r.stream), delete this._streams[e]),
                    (t.onicecandidate = null),
                    (t.onaddstream = null),
                    (t.onremovestream = null),
                    t.close(),
                    (t = null),
                    delete this._pcs[e];
                }
              },
            },
            {
              key: '_getProtooUrl',
              value: function (e) {
                var t = window.location.hostname,
                  r = 'https:' === location.protocol ? 'wss' : 'ws';
                return ''
                  .concat(r, '://')
                  .concat(t, ':')
                  .concat(this._port, '/ws?peer=')
                  .concat(e);
              },
            },
            {
              key: '_handleRequest',
              value: function (e, t, r) {
                console.log(
                  'Handle request from server: [method:%s, data:%o]',
                  e.method,
                  e.data
                );
              },
            },
            {
              key: '_handleNotification',
              value: function (e) {
                var t = e.method,
                  r = e.data;
                switch (
                  (console.log(
                    'Handle notification from server: [method:%s, data:%o]',
                    t,
                    r
                  ),
                  t)
                ) {
                  case 'peer-join':
                    var n = r.rid,
                      o = r.uid,
                      s = r.info;
                    console.log(
                      'peer-join peer rid => %s, uid => %s, info => %o',
                      n,
                      o,
                      s
                    ),
                      this.emit('peer-join', n, o, s);
                    break;
                  case 'peer-leave':
                    var i = r.rid,
                      a = r.uid;
                    console.log('peer-leave peer rid => %s, uid => %s', i, a),
                      this.emit('peer-leave', i, a);
                    break;
                  case 'stream-add':
                    var c = r.rid,
                      u = r.mid,
                      l = r.info;
                    console.log('stream-add peer rid => %s, mid => %s', c, u),
                      this.emit('stream-add', c, u, l);
                    break;
                  case 'stream-remove':
                    var d = r.rid,
                      p = r.mid;
                    console.log(
                      'stream-remove peer rid => %s, mid => %s',
                      d,
                      p
                    ),
                      this.emit('stream-remove', d, p),
                      this._removePC(p);
                    break;
                  case 'broadcast':
                    var f = r.rid,
                      h = r.mid,
                      m = r.info;
                    console.log('broadcast peer rid => %s, mid => %s', f, h),
                      this.emit('broadcast', f, h, m);
                }
              },
            },
            {
              key: 'uid',
              get: function () {
                return this._uid;
              },
            },
          ]),
          _
        );
      })(g.EventEmitter);
  },
]);
//# sourceMappingURL=ion-sdk.js.map
