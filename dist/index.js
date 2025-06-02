var zf = Object.defineProperty;
var Wf = (e, t, n) => t in e ? zf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Hr = (e, t, n) => Wf(e, typeof t != "symbol" ? t + "" : t, n);
import * as S from "react";
import Ct, { createContext as So, memo as nr, forwardRef as Pi, useContext as Cn, useMemo as ot, useCallback as It, useRef as In, useEffect as _r, useState as Rt, useLayoutEffect as Vf, useImperativeHandle as Hf, useId as Uf, isValidElement as Xo, cloneElement as Zo, Children as Yf, createElement as qf } from "react";
import * as Gf from "react-dom";
import Wo, { flushSync as ii } from "react-dom";
function Kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var La = { exports: {} }, Ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el;
function Xf() {
  if (el) return Ur;
  el = 1;
  var e = Ct, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, d) {
    var f, p = {}, g = null, h = null;
    d !== void 0 && (g = "" + d), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (f in c) r.call(c, f) && !a.hasOwnProperty(f) && (p[f] = c[f]);
    if (l && l.defaultProps) for (f in c = l.defaultProps, c) p[f] === void 0 && (p[f] = c[f]);
    return { $$typeof: t, type: l, key: g, ref: h, props: p, _owner: i.current };
  }
  return Ur.Fragment = n, Ur.jsx = s, Ur.jsxs = s, Ur;
}
var Yr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tl;
function Zf() {
  return tl || (tl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ct, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, u = "@@iterator";
    function y(O) {
      if (O === null || typeof O != "object")
        return null;
      var q = b && O[b] || O[u];
      return typeof q == "function" ? q : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(O) {
      {
        for (var q = arguments.length, te = new Array(q > 1 ? q - 1 : 0), ye = 1; ye < q; ye++)
          te[ye - 1] = arguments[ye];
        v("error", O, te);
      }
    }
    function v(O, q, te) {
      {
        var ye = C.ReactDebugCurrentFrame, $e = ye.getStackAddendum();
        $e !== "" && (q += "%s", te = te.concat([$e]));
        var z = te.map(function(D) {
          return String(D);
        });
        z.unshift("Warning: " + q), Function.prototype.apply.call(console[O], console, z);
      }
    }
    var x = !1, w = !1, k = !1, R = !1, $ = !1, I;
    I = Symbol.for("react.module.reference");
    function m(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === a || $ || O === i || O === d || O === f || R || O === h || x || w || k || typeof O == "object" && O !== null && (O.$$typeof === g || O.$$typeof === p || O.$$typeof === s || O.$$typeof === l || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === I || O.getModuleId !== void 0));
    }
    function P(O, q, te) {
      var ye = O.displayName;
      if (ye)
        return ye;
      var $e = q.displayName || q.name || "";
      return $e !== "" ? te + "(" + $e + ")" : te;
    }
    function M(O) {
      return O.displayName || "Context";
    }
    function N(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case l:
            var q = O;
            return M(q) + ".Consumer";
          case s:
            var te = O;
            return M(te._context) + ".Provider";
          case c:
            return P(O, O.render, "ForwardRef");
          case p:
            var ye = O.displayName || null;
            return ye !== null ? ye : N(O.type) || "Memo";
          case g: {
            var $e = O, z = $e._payload, D = $e._init;
            try {
              return N(D(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, A = 0, _, G, oe, K, H, Y, ae;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function j() {
      {
        if (A === 0) {
          _ = console.log, G = console.info, oe = console.warn, K = console.error, H = console.group, Y = console.groupCollapsed, ae = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        A++;
      }
    }
    function L() {
      {
        if (A--, A === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, O, {
              value: _
            }),
            info: W({}, O, {
              value: G
            }),
            warn: W({}, O, {
              value: oe
            }),
            error: W({}, O, {
              value: K
            }),
            group: W({}, O, {
              value: H
            }),
            groupCollapsed: W({}, O, {
              value: Y
            }),
            groupEnd: W({}, O, {
              value: ae
            })
          });
        }
        A < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = C.ReactCurrentDispatcher, F;
    function V(O, q, te) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch ($e) {
            var ye = $e.stack.trim().match(/\n( *(at )?)/);
            F = ye && ye[1] || "";
          }
        return `
` + F + O;
      }
    }
    var J = !1, Q;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new le();
    }
    function B(O, q) {
      if (!O || J)
        return "";
      {
        var te = Q.get(O);
        if (te !== void 0)
          return te;
      }
      var ye;
      J = !0;
      var $e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = Z.current, Z.current = null, j();
      try {
        if (q) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (ft) {
              ye = ft;
            }
            Reflect.construct(O, [], D);
          } else {
            try {
              D.call();
            } catch (ft) {
              ye = ft;
            }
            O.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            ye = ft;
          }
          O();
        }
      } catch (ft) {
        if (ft && ye && typeof ft.stack == "string") {
          for (var X = ft.stack.split(`
`), ve = ye.stack.split(`
`), me = X.length - 1, we = ve.length - 1; me >= 1 && we >= 0 && X[me] !== ve[we]; )
            we--;
          for (; me >= 1 && we >= 0; me--, we--)
            if (X[me] !== ve[we]) {
              if (me !== 1 || we !== 1)
                do
                  if (me--, we--, we < 0 || X[me] !== ve[we]) {
                    var De = `
` + X[me].replace(" at new ", " at ");
                    return O.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", O.displayName)), typeof O == "function" && Q.set(O, De), De;
                  }
                while (me >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        J = !1, Z.current = z, L(), Error.prepareStackTrace = $e;
      }
      var at = O ? O.displayName || O.name : "", At = at ? V(at) : "";
      return typeof O == "function" && Q.set(O, At), At;
    }
    function xe(O, q, te) {
      return B(O, !1);
    }
    function pe(O) {
      var q = O.prototype;
      return !!(q && q.isReactComponent);
    }
    function be(O, q, te) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return B(O, pe(O));
      if (typeof O == "string")
        return V(O);
      switch (O) {
        case d:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case c:
            return xe(O.render);
          case p:
            return be(O.type, q, te);
          case g: {
            var ye = O, $e = ye._payload, z = ye._init;
            try {
              return be(z($e), q, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, se = {}, Ie = C.ReactDebugCurrentFrame;
    function he(O) {
      if (O) {
        var q = O._owner, te = be(O.type, O._source, q ? q.type : null);
        Ie.setExtraStackFrame(te);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Me(O, q, te, ye, $e) {
      {
        var z = Function.call.bind(Re);
        for (var D in O)
          if (z(O, D)) {
            var X = void 0;
            try {
              if (typeof O[D] != "function") {
                var ve = Error((ye || "React class") + ": " + te + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              X = O[D](q, D, ye, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              X = me;
            }
            X && !(X instanceof Error) && (he($e), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", te, D, typeof X), he(null)), X instanceof Error && !(X.message in se) && (se[X.message] = !0, he($e), T("Failed %s type: %s", te, X.message), he(null));
          }
      }
    }
    var Ee = Array.isArray;
    function de(O) {
      return Ee(O);
    }
    function it(O) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, te = q && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return te;
      }
    }
    function We(O) {
      try {
        return gt(O), !1;
      } catch {
        return !0;
      }
    }
    function gt(O) {
      return "" + O;
    }
    function Ot(O) {
      if (We(O))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(O)), gt(O);
    }
    var lt = C.ReactCurrentOwner, Pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Fe;
    function Se(O) {
      if (Re.call(O, "ref")) {
        var q = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function bt(O) {
      if (Re.call(O, "key")) {
        var q = Object.getOwnPropertyDescriptor(O, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function St(O, q) {
      typeof O.ref == "string" && lt.current;
    }
    function vn(O, q) {
      {
        var te = function() {
          _e || (_e = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        te.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function $t(O, q) {
      {
        var te = function() {
          Fe || (Fe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        te.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var ie = function(O, q, te, ye, $e, z, D) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: q,
        ref: te,
        props: D,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ye
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function Oe(O, q, te, ye, $e) {
      {
        var z, D = {}, X = null, ve = null;
        te !== void 0 && (Ot(te), X = "" + te), bt(q) && (Ot(q.key), X = "" + q.key), Se(q) && (ve = q.ref, St(q, $e));
        for (z in q)
          Re.call(q, z) && !Pt.hasOwnProperty(z) && (D[z] = q[z]);
        if (O && O.defaultProps) {
          var me = O.defaultProps;
          for (z in me)
            D[z] === void 0 && (D[z] = me[z]);
        }
        if (X || ve) {
          var we = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          X && vn(D, we), ve && $t(D, we);
        }
        return ie(O, X, ve, $e, ye, lt.current, D);
      }
    }
    var Pe = C.ReactCurrentOwner, yt = C.ReactDebugCurrentFrame;
    function ct(O) {
      if (O) {
        var q = O._owner, te = be(O.type, O._source, q ? q.type : null);
        yt.setExtraStackFrame(te);
      } else
        yt.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function _t(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function xn() {
      {
        if (Pe.current) {
          var O = N(Pe.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Lt(O) {
      return "";
    }
    var Yt = {};
    function qt(O) {
      {
        var q = xn();
        if (!q) {
          var te = typeof O == "string" ? O : O.displayName || O.name;
          te && (q = `

Check the top-level render call using <` + te + ">.");
        }
        return q;
      }
    }
    function Gt(O, q) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var te = qt(q);
        if (Yt[te])
          return;
        Yt[te] = !0;
        var ye = "";
        O && O._owner && O._owner !== Pe.current && (ye = " It was passed a child from " + N(O._owner.type) + "."), ct(O), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, ye), ct(null);
      }
    }
    function Kt(O, q) {
      {
        if (typeof O != "object")
          return;
        if (de(O))
          for (var te = 0; te < O.length; te++) {
            var ye = O[te];
            _t(ye) && Gt(ye, q);
          }
        else if (_t(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var $e = y(O);
          if (typeof $e == "function" && $e !== O.entries)
            for (var z = $e.call(O), D; !(D = z.next()).done; )
              _t(D.value) && Gt(D.value, q);
        }
      }
    }
    function zn(O) {
      {
        var q = O.type;
        if (q == null || typeof q == "string")
          return;
        var te;
        if (typeof q == "function")
          te = q.propTypes;
        else if (typeof q == "object" && (q.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        q.$$typeof === p))
          te = q.propTypes;
        else
          return;
        if (te) {
          var ye = N(q);
          Me(te, O.props, "prop", ye, O);
        } else if (q.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var $e = N(q);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(O) {
      {
        for (var q = Object.keys(O.props), te = 0; te < q.length; te++) {
          var ye = q[te];
          if (ye !== "children" && ye !== "key") {
            ct(O), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), ct(null);
            break;
          }
        }
        O.ref !== null && (ct(O), T("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var Xt = {};
    function Mt(O, q, te, ye, $e, z) {
      {
        var D = m(O);
        if (!D) {
          var X = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Lt();
          ve ? X += ve : X += xn();
          var me;
          O === null ? me = "null" : de(O) ? me = "array" : O !== void 0 && O.$$typeof === t ? (me = "<" + (N(O.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : me = typeof O, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, X);
        }
        var we = Oe(O, q, te, $e, z);
        if (we == null)
          return we;
        if (D) {
          var De = q.children;
          if (De !== void 0)
            if (ye)
              if (de(De)) {
                for (var at = 0; at < De.length; at++)
                  Kt(De[at], O);
                Object.freeze && Object.freeze(De);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kt(De, O);
        }
        if (Re.call(q, "key")) {
          var At = N(O), ft = Object.keys(q).filter(function(Xn) {
            return Xn !== "key";
          }), cn = ft.length > 0 ? "{key: someKey, " + ft.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xt[At + cn]) {
            var En = ft.length > 0 ? "{" + ft.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, cn, At, En, At), Xt[At + cn] = !0;
          }
        }
        return O === r ? ut(we) : zn(we), we;
      }
    }
    function fe(O, q, te) {
      return Mt(O, q, te, !0);
    }
    function ln(O, q, te) {
      return Mt(O, q, te, !1);
    }
    var Wn = ln, Kn = fe;
    Yr.Fragment = r, Yr.jsx = Wn, Yr.jsxs = Kn;
  }()), Yr;
}
process.env.NODE_ENV === "production" ? La.exports = Xf() : La.exports = Zf();
var E = La.exports;
function Kc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Kc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ge() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Kc(e)) && (r && (r += " "), r += t);
  return r;
}
function mn(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function Qf(e) {
  e.stopPropagation();
}
function Qo(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function oo(e) {
  let t = !1;
  const n = {
    ...e,
    preventGridDefault() {
      t = !0;
    },
    isGridDefaultPrevented() {
      return t;
    }
  };
  return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), n;
}
const Jf = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function ai(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function ep(e) {
  return ai(e) && e.keyCode !== 86 ? !1 : !Jf.has(e.key);
}
function tp({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const np = "mlln6zg7-0-0-beta-47";
function rp(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: i
  }) => /* @__PURE__ */ E.jsx("div", {
    className: np,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: i
    },
    "data-measuring-cell-key": t
  }, t));
}
function op({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], i = n[e.rowIdx];
  return Xc(r, i);
}
function Xc(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function ip({
  rows: e,
  topSummaryRows: t,
  bottomSummaryRows: n,
  rowIdx: r,
  mainHeaderRowIdx: i,
  lastFrozenColumnIndex: a,
  column: s
}) {
  const l = (t == null ? void 0 : t.length) ?? 0;
  if (r === i)
    return mn(s, a, {
      type: "HEADER"
    });
  if (t && r > i && r <= l + i)
    return mn(s, a, {
      type: "SUMMARY",
      row: t[r + l]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return mn(s, a, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return mn(s, a, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function ap({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: n,
  columns: r,
  colSpanColumns: i,
  rows: a,
  topSummaryRows: s,
  bottomSummaryRows: l,
  minRowIdx: c,
  mainHeaderRowIdx: d,
  maxRowIdx: f,
  currentPosition: {
    idx: p,
    rowIdx: g
  },
  nextPosition: h,
  lastFrozenColumnIndex: b,
  isCellWithinBounds: u
}) {
  let {
    idx: y,
    rowIdx: C
  } = h;
  const T = r.length, v = (k) => {
    for (const R of i) {
      const $ = R.idx;
      if ($ > y) break;
      const I = ip({
        rows: a,
        topSummaryRows: s,
        bottomSummaryRows: l,
        rowIdx: C,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: b,
        column: R
      });
      if (I && y > $ && y < I + $) {
        y = $ + (k ? I : 0);
        break;
      }
    }
  }, x = (k) => k.level + d, w = () => {
    if (t) {
      let R = r[y].parent;
      for (; R !== void 0; ) {
        const $ = x(R);
        if (C === $) {
          y = R.idx + R.colSpan;
          break;
        }
        R = R.parent;
      }
    } else if (e) {
      let R = r[y].parent, $ = !1;
      for (; R !== void 0; ) {
        const I = x(R);
        if (C >= I) {
          y = R.idx, C = I, $ = !0;
          break;
        }
        R = R.parent;
      }
      $ || (y = p, C = g);
    }
  };
  if (u(h) && (v(t), C < d && w()), n === "CHANGE_ROW" && (y === T ? C === f || (y = 0, C += 1) : y === -1 && (C === c || (C -= 1, y = T - 1), v(!1))), C < d) {
    let R = r[y].parent;
    const $ = C;
    for (C = d; R !== void 0; ) {
      const I = x(R);
      I >= $ && (C = I, y = R.idx), R = R.parent;
    }
  }
  return {
    idx: y,
    rowIdx: C
  };
}
function sp({
  maxColIdx: e,
  minRowIdx: t,
  maxRowIdx: n,
  selectedPosition: {
    rowIdx: r,
    idx: i
  },
  shiftKey: a
}) {
  return a ? i === 0 && r === t : i === e && r === n;
}
const lp = "cj343x07-0-0-beta-47", Zc = `rdg-cell ${lp}`, cp = "csofj7r7-0-0-beta-47", up = `rdg-cell-frozen ${cp}`;
function ls(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Qc(e, t, n) {
  const r = t + 1, i = `calc(${n - 1} * var(--rdg-header-row-height))`;
  return e.parent === void 0 ? {
    insetBlockStart: 0,
    gridRowStart: 1,
    gridRowEnd: r,
    paddingBlockStart: i
  } : {
    insetBlockStart: `calc(${t - n} * var(--rdg-header-row-height))`,
    gridRowStart: r - n,
    gridRowEnd: r,
    paddingBlockStart: i
  };
}
function Lr(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function Eo(e, ...t) {
  return ge(Zc, ...t, e.frozen && up);
}
const {
  min: mo,
  max: si,
  floor: nl,
  sign: dp,
  abs: fp
} = Math;
function io(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Jc(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = si(e, t), typeof n == "number" && n >= t ? mo(e, n) : e;
}
function eu(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const pp = "c1bn88vv7-0-0-beta-47", mp = `rdg-checkbox-input ${pp}`;
function hp({
  onChange: e,
  indeterminate: t,
  ...n
}) {
  function r(i) {
    e(i.target.checked, i.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ E.jsx("input", {
    ref: (i) => {
      i && (i.indeterminate = t === !0);
    },
    type: "checkbox",
    className: mp,
    onChange: r,
    ...n
  });
}
const gp = "g1s9ylgp7-0-0-beta-47", bp = `rdg-group-cell-content ${gp}`, yp = "cz54e4y7-0-0-beta-47", vp = `rdg-caret ${yp}`;
function xp(e) {
  return /* @__PURE__ */ E.jsx(wp, {
    ...e
  });
}
function wp({
  groupKey: e,
  isExpanded: t,
  tabIndex: n,
  toggleGroup: r
}) {
  function i({
    key: s
  }) {
    s === "Enter" && r();
  }
  const a = t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7";
  return /* @__PURE__ */ E.jsxs("span", {
    className: bp,
    tabIndex: n,
    onKeyDown: i,
    children: [e, /* @__PURE__ */ E.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: vp,
      "aria-hidden": !0,
      children: /* @__PURE__ */ E.jsx("path", {
        d: a
      })
    })]
  });
}
function Cp(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const tu = /* @__PURE__ */ So(void 0), Tp = tu.Provider;
function ki() {
  return Cn(tu);
}
function cs({
  value: e,
  tabIndex: t,
  indeterminate: n,
  disabled: r,
  onChange: i,
  "aria-label": a,
  "aria-labelledby": s
}) {
  const l = ki().renderCheckbox;
  return l({
    "aria-label": a,
    "aria-labelledby": s,
    tabIndex: t,
    indeterminate: n,
    disabled: r,
    checked: e,
    onChange: i
  });
}
const nu = /* @__PURE__ */ So(void 0), ru = nu.Provider, ou = /* @__PURE__ */ So(void 0), Sp = ou.Provider;
function iu() {
  const e = Cn(nu), t = Cn(ou);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const au = /* @__PURE__ */ So(void 0), Ep = au.Provider, su = /* @__PURE__ */ So(void 0), Op = su.Provider;
function Rp() {
  const e = Cn(au), t = Cn(su);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const kr = "rdg-select-column";
function Pp(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Rp();
  return /* @__PURE__ */ E.jsx(cs, {
    "aria-label": "Select All",
    tabIndex: e.tabIndex,
    indeterminate: t,
    value: n,
    onChange: (i) => {
      r({
        checked: t ? !1 : i
      });
    }
  });
}
function kp(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = iu();
  return /* @__PURE__ */ E.jsx(cs, {
    "aria-label": "Select",
    tabIndex: e.tabIndex,
    disabled: t,
    value: n,
    onChange: (i, a) => {
      r({
        row: e.row,
        checked: i,
        isShiftClick: a
      });
    }
  });
}
function Ip(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = iu();
  return /* @__PURE__ */ E.jsx(cs, {
    "aria-label": "Select Group",
    tabIndex: e.tabIndex,
    value: t,
    onChange: (r) => {
      n({
        row: e.row,
        checked: r,
        isShiftClick: !1
      });
    }
  });
}
const $p = {
  key: kr,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ E.jsx(Pp, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ E.jsx(kp, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ E.jsx(Ip, {
      ...e
    });
  }
}, Mp = "auto", Np = 50;
function Dp({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: i,
  enableVirtualization: a
}) {
  const s = (t == null ? void 0 : t.width) ?? Mp, l = (t == null ? void 0 : t.minWidth) ?? Np, c = (t == null ? void 0 : t.maxWidth) ?? void 0, d = (t == null ? void 0 : t.renderCell) ?? Cp, f = (t == null ? void 0 : t.sortable) ?? !1, p = (t == null ? void 0 : t.resizable) ?? !1, g = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: h,
    colSpanColumns: b,
    lastFrozenColumnIndex: u,
    headerRowsCount: y
  } = ot(() => {
    let R = -1, $ = 1;
    const I = [];
    m(e, 1);
    function m(M, N, W) {
      for (const A of M) {
        if ("children" in A) {
          const oe = {
            name: A.name,
            parent: W,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: A.headerCellClass
          };
          m(A.children, N + 1, oe);
          continue;
        }
        const _ = A.frozen ?? !1, G = {
          ...A,
          parent: W,
          idx: 0,
          level: 0,
          frozen: _,
          width: A.width ?? s,
          minWidth: A.minWidth ?? l,
          maxWidth: A.maxWidth ?? c,
          sortable: A.sortable ?? f,
          resizable: A.resizable ?? p,
          draggable: A.draggable ?? g,
          renderCell: A.renderCell ?? d
        };
        I.push(G), _ && R++, N > $ && ($ = N);
      }
    }
    I.sort(({
      key: M,
      frozen: N
    }, {
      key: W,
      frozen: A
    }) => M === kr ? -1 : W === kr ? 1 : N ? A ? 0 : -1 : A ? 1 : 0);
    const P = [];
    return I.forEach((M, N) => {
      M.idx = N, lu(M, N, 0), M.colSpan != null && P.push(M);
    }), {
      columns: I,
      colSpanColumns: P,
      lastFrozenColumnIndex: R,
      headerRowsCount: $
    };
  }, [e, s, l, c, d, p, f, g]), {
    templateColumns: C,
    layoutCssVars: T,
    totalFrozenColumnWidth: v,
    columnMetrics: x
  } = ot(() => {
    const R = /* @__PURE__ */ new Map();
    let $ = 0, I = 0;
    const m = [];
    for (const M of h) {
      let N = n(M);
      typeof N == "number" ? N = Jc(N, M) : N = M.minWidth, m.push(`${N}px`), R.set(M, {
        width: N,
        left: $
      }), $ += N;
    }
    if (u !== -1) {
      const M = R.get(h[u]);
      I = M.left + M.width;
    }
    const P = {};
    for (let M = 0; M <= u; M++) {
      const N = h[M];
      P[`--rdg-frozen-left-${N.idx}`] = `${R.get(N).left}px`;
    }
    return {
      templateColumns: m,
      layoutCssVars: P,
      totalFrozenColumnWidth: I,
      columnMetrics: R
    };
  }, [n, h, u]), [w, k] = ot(() => {
    if (!a)
      return [0, h.length - 1];
    const R = i + v, $ = i + r, I = h.length - 1, m = mo(u + 1, I);
    if (R >= $)
      return [m, m];
    let P = m;
    for (; P < I; ) {
      const {
        left: A,
        width: _
      } = x.get(h[P]);
      if (A + _ > R)
        break;
      P++;
    }
    let M = P;
    for (; M < I; ) {
      const {
        left: A,
        width: _
      } = x.get(h[M]);
      if (A + _ >= $)
        break;
      M++;
    }
    const N = si(m, P - 1), W = mo(I, M + 1);
    return [N, W];
  }, [x, h, u, i, v, r, a]);
  return {
    columns: h,
    colSpanColumns: b,
    colOverscanStartIdx: w,
    colOverscanEndIdx: k,
    templateColumns: C,
    layoutCssVars: T,
    headerRowsCount: y,
    lastFrozenColumnIndex: u,
    totalFrozenColumnWidth: v
  };
}
function lu(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, lu(r, t, n - 1);
  }
}
const Ir = typeof window > "u" ? _r : Vf;
function Ap(e, t, n, r, i, a, s, l, c, d) {
  const f = In(i), p = e.length === t.length, g = p && i !== f.current, h = [...n], b = [];
  for (const {
    key: T,
    idx: v,
    width: x
  } of t)
    typeof x == "string" && (g || !s.has(T)) && !a.has(T) && (h[v] = x, b.push(T));
  const u = h.join(" ");
  Ir(() => {
    f.current = i, y(b);
  });
  function y(T) {
    T.length !== 0 && c((v) => {
      const x = new Map(v);
      let w = !1;
      for (const k of T) {
        const R = rl(r, k);
        w || (w = R !== v.get(k)), R === void 0 ? x.delete(k) : x.set(k, R);
      }
      return w ? x : v;
    });
  }
  function C(T, v) {
    const {
      key: x
    } = T, w = [...n], k = [];
    for (const {
      key: $,
      idx: I,
      width: m
    } of t)
      if (x === $) {
        const P = typeof v == "number" ? `${v}px` : v;
        w[I] = P;
      } else p && typeof m == "string" && !a.has($) && (w[I] = m, k.push($));
    r.current.style.gridTemplateColumns = w.join(" ");
    const R = typeof v == "number" ? v : rl(r, x);
    ii(() => {
      l(($) => {
        const I = new Map($);
        return I.set(x, R), I;
      }), y(k);
    }), d == null || d(T.idx, R);
  }
  return {
    gridTemplateColumns: u,
    handleColumnResize: C
  };
}
function rl(e, t) {
  var i;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (i = e.current) == null ? void 0 : i.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function jp() {
  const e = In(null), [t, n] = Rt(1), [r, i] = Rt(1), [a, s] = Rt(0);
  return Ir(() => {
    const {
      ResizeObserver: l
    } = window;
    if (l == null) return;
    const {
      clientWidth: c,
      clientHeight: d,
      offsetWidth: f,
      offsetHeight: p
    } = e.current, {
      width: g,
      height: h
    } = e.current.getBoundingClientRect(), b = p - d, u = g - f + c, y = h - b;
    n(u), i(y), s(b);
    const C = new l((T) => {
      const v = T[0].contentBoxSize[0], {
        clientHeight: x,
        offsetHeight: w
      } = e.current;
      ii(() => {
        n(v.inlineSize), i(v.blockSize), s(w - x);
      });
    });
    return C.observe(e.current), () => {
      C.disconnect();
    };
  }, []), [e, t, r, a];
}
function Wt(e) {
  const t = In(e);
  _r(() => {
    t.current = e;
  });
  const n = It((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Oo(e) {
  const [t, n] = Rt(!1);
  t && !e && n(!1);
  function r(a) {
    a.target !== a.currentTarget && n(!0);
  }
  return {
    tabIndex: e && !t ? 0 : -1,
    childTabIndex: e ? 0 : -1,
    onFocus: e ? r : void 0
  };
}
function Fp({
  columns: e,
  colSpanColumns: t,
  rows: n,
  topSummaryRows: r,
  bottomSummaryRows: i,
  colOverscanStartIdx: a,
  colOverscanEndIdx: s,
  lastFrozenColumnIndex: l,
  rowOverscanStartIdx: c,
  rowOverscanEndIdx: d
}) {
  const f = ot(() => {
    if (a === 0) return 0;
    let p = a;
    const g = (h, b) => b !== void 0 && h + b > a ? (p = h, !0) : !1;
    for (const h of t) {
      const b = h.idx;
      if (b >= p || g(b, mn(h, l, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const y = n[u];
        if (g(b, mn(h, l, {
          type: "ROW",
          row: y
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (g(b, mn(h, l, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (i != null) {
        for (const u of i)
          if (g(b, mn(h, l, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
    }
    return p;
  }, [c, d, n, r, i, a, l, t]);
  return ot(() => {
    const p = [];
    for (let g = 0; g <= s; g++) {
      const h = e[g];
      g < f && !h.frozen || p.push(h);
    }
    return p;
  }, [f, s, e]);
}
function _p({
  rows: e,
  rowHeight: t,
  clientHeight: n,
  scrollTop: r,
  enableVirtualization: i
}) {
  const {
    totalRowHeight: a,
    gridTemplateRows: s,
    getRowTop: l,
    getRowHeight: c,
    findRowIdx: d
  } = ot(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (y) => y * t,
        getRowHeight: () => t,
        findRowIdx: (y) => nl(y / t)
      };
    let g = 0, h = " ";
    const b = e.map((y) => {
      const C = t(y), T = {
        top: g,
        height: C
      };
      return h += `${C}px `, g += C, T;
    }), u = (y) => si(0, mo(e.length - 1, y));
    return {
      totalRowHeight: g,
      gridTemplateRows: h,
      getRowTop: (y) => b[u(y)].top,
      getRowHeight: (y) => b[u(y)].height,
      findRowIdx(y) {
        let C = 0, T = b.length - 1;
        for (; C <= T; ) {
          const v = C + nl((T - C) / 2), x = b[v].top;
          if (x === y) return v;
          if (x < y ? C = v + 1 : x > y && (T = v - 1), C > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let f = 0, p = e.length - 1;
  if (i) {
    const h = d(r), b = d(r + n);
    f = si(0, h - 4), p = mo(e.length - 1, b + 4);
  }
  return {
    rowOverscanStartIdx: f,
    rowOverscanEndIdx: p,
    totalRowHeight: a,
    gridTemplateRows: s,
    getRowTop: l,
    getRowHeight: c,
    findRowIdx: d
  };
}
const Lp = "c1w9bbhr7-0-0-beta-47", Bp = "c1creorc7-0-0-beta-47", zp = `rdg-cell-drag-handle ${Lp}`;
function Wp({
  gridRowStart: e,
  rows: t,
  column: n,
  columnWidth: r,
  maxColIdx: i,
  isLastRow: a,
  selectedPosition: s,
  latestDraggedOverRowIdx: l,
  isCellEditable: c,
  onRowsChange: d,
  onFill: f,
  onClick: p,
  setDragging: g,
  setDraggedOverRowIdx: h
}) {
  const {
    idx: b,
    rowIdx: u
  } = s;
  function y(w) {
    if (w.preventDefault(), w.buttons !== 1) return;
    g(!0), window.addEventListener("mouseover", k), window.addEventListener("mouseup", R);
    function k($) {
      $.buttons !== 1 && R();
    }
    function R() {
      window.removeEventListener("mouseover", k), window.removeEventListener("mouseup", R), g(!1), C();
    }
  }
  function C() {
    const w = l.current;
    if (w === void 0) return;
    const k = u < w ? u + 1 : w, R = u < w ? w + 1 : u;
    v(k, R), h(void 0);
  }
  function T(w) {
    w.stopPropagation(), v(u + 1, t.length);
  }
  function v(w, k) {
    const R = t[u], $ = [...t], I = [];
    for (let m = w; m < k; m++)
      if (c({
        rowIdx: m,
        idx: b
      })) {
        const P = f({
          columnKey: n.key,
          sourceRow: R,
          targetRow: t[m]
        });
        P !== t[m] && ($[m] = P, I.push(m));
      }
    I.length > 0 && (d == null || d($, {
      indexes: I,
      column: n
    }));
  }
  function x() {
    var m;
    const w = ((m = n.colSpan) == null ? void 0 : m.call(n, {
      type: "ROW",
      row: t[u]
    })) ?? 1, {
      insetInlineStart: k,
      ...R
    } = Lr(n, w), $ = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", I = n.idx + w - 1 === i;
    return {
      ...R,
      gridRowStart: e,
      marginInlineEnd: I ? void 0 : $,
      marginBlockEnd: a ? void 0 : $,
      insetInlineStart: k ? `calc(${k} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ E.jsx("div", {
    style: x(),
    className: ge(zp, n.frozen && Bp),
    onClick: p,
    onMouseDown: y,
    onDoubleClick: T
  });
}
const Vp = "cis5rrm7-0-0-beta-47";
function Hp({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: i,
  closeEditor: a,
  onKeyDown: s,
  navigate: l
}) {
  var C, T, v;
  const c = In(void 0), d = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, f = Wt(() => {
    h(!0, !1);
  });
  _r(() => {
    if (!d) return;
    function x() {
      c.current = requestAnimationFrame(f);
    }
    return addEventListener("mousedown", x, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", x, {
        capture: !0
      }), p();
    };
  }, [d, f]);
  function p() {
    cancelAnimationFrame(c.current);
  }
  function g(x) {
    if (s) {
      const w = oo(x);
      if (s({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          l(x);
        },
        onClose: h
      }, w), w.isGridDefaultPrevented()) return;
    }
    x.key === "Escape" ? h() : x.key === "Enter" ? h(!0) : tp(x) && l(x);
  }
  function h(x = !1, w = !0) {
    x ? i(n, !0, w) : a(w);
  }
  function b(x, w = !1) {
    i(x, w, w);
  }
  const {
    cellClass: u
  } = e, y = Eo(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((T = e.editorOptions) != null && T.displayCellContent) && Vp);
  return /* @__PURE__ */ E.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: y,
    style: Lr(e, t),
    onKeyDown: g,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ E.jsxs(E.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: b,
        onClose: h
      }), ((v = e.editorOptions) == null ? void 0 : v.displayCellContent) && e.renderCell({
        column: e,
        row: n,
        rowIdx: r,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: b
      })]
    })
  });
}
function Up({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: i,
    onFocus: a
  } = Oo(n), {
    colSpan: s
  } = e, l = eu(e, t), c = e.idx + 1;
  function d() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": s,
    "aria-rowspan": l,
    "aria-selected": n,
    tabIndex: i,
    className: ge(Zc, e.headerCellClass),
    style: {
      ...Qc(e, t, l),
      gridColumnStart: c,
      gridColumnEnd: c + s
    },
    onFocus: a,
    onClick: d,
    children: e.name
  });
}
const Yp = "h44jtk67-0-0-beta-47", qp = "hcgkhxz7-0-0-beta-47", Gp = `rdg-header-sort-name ${qp}`;
function cu({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ E.jsx(Kp, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Kp({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = ki().renderSortStatus;
  return /* @__PURE__ */ E.jsxs("span", {
    className: Yp,
    children: [/* @__PURE__ */ E.jsx("span", {
      className: Gp,
      children: n
    }), /* @__PURE__ */ E.jsx("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Xp = "c6l2wv17-0-0-beta-47", Zp = "c1kqdw7y7-0-0-beta-47", Qp = `rdg-cell-resizable ${Zp}`, Jp = "r1y6ywlx7-0-0-beta-47", em = "rdg-cell-draggable", tm = "c1bezg5o7-0-0-beta-47", nm = `rdg-cell-dragging ${tm}`, rm = "c1vc96037-0-0-beta-47", om = `rdg-cell-drag-over ${rm}`;
function im({
  column: e,
  colSpan: t,
  rowIdx: n,
  isCellSelected: r,
  onColumnResize: i,
  onColumnsReorder: a,
  sortColumns: s,
  onSortColumnsChange: l,
  selectCell: c,
  shouldFocusGrid: d,
  direction: f,
  dragDropKey: p
}) {
  const [g, h] = Rt(!1), [b, u] = Rt(!1), y = f === "rtl", C = eu(e, n), {
    tabIndex: T,
    childTabIndex: v,
    onFocus: x
  } = Oo(r), w = s == null ? void 0 : s.findIndex((F) => F.columnKey === e.key), k = w !== void 0 && w > -1 ? s[w] : void 0, R = k == null ? void 0 : k.direction, $ = k !== void 0 && s.length > 1 ? w + 1 : void 0, I = R && !$ ? R === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: m,
    resizable: P,
    draggable: M
  } = e, N = Eo(e, e.headerCellClass, m && Xp, P && Qp, M && em, g && nm, b && om), W = e.renderHeaderCell ?? cu;
  function A(F) {
    if (F.pointerType === "mouse" && F.buttons !== 1)
      return;
    F.preventDefault();
    const {
      currentTarget: V,
      pointerId: J
    } = F, Q = V.parentElement, {
      right: le,
      left: B
    } = Q.getBoundingClientRect(), xe = y ? F.clientX - B : le - F.clientX;
    let pe = !1;
    function be(Ie) {
      const {
        width: he,
        right: Me,
        left: Ee
      } = Q.getBoundingClientRect();
      let de = y ? Me + xe - Ie.clientX : Ie.clientX + xe - Ee;
      de = Jc(de, e), he > 0 && de !== he && i(e, de);
    }
    function Re() {
      pe = !0, i(e, "max-content");
    }
    function se(Ie) {
      pe || be(Ie), V.removeEventListener("pointermove", be), V.removeEventListener("dblclick", Re), V.removeEventListener("lostpointercapture", se);
    }
    V.setPointerCapture(J), V.addEventListener("pointermove", be), V.addEventListener("dblclick", Re), V.addEventListener("lostpointercapture", se);
  }
  function _(F) {
    if (l == null) return;
    const {
      sortDescendingFirst: V
    } = e;
    if (k === void 0) {
      const J = {
        columnKey: e.key,
        direction: V ? "DESC" : "ASC"
      };
      l(s && F ? [...s, J] : [J]);
    } else {
      let J;
      if ((V === !0 && R === "DESC" || V !== !0 && R === "ASC") && (J = {
        columnKey: e.key,
        direction: R === "ASC" ? "DESC" : "ASC"
      }), F) {
        const Q = [...s];
        J ? Q[w] = J : Q.splice(w, 1), l(Q);
      } else
        l(J ? [J] : []);
    }
  }
  function G(F) {
    c({
      idx: e.idx,
      rowIdx: n
    }), m && _(F.ctrlKey || F.metaKey);
  }
  function oe(F) {
    x == null || x(F), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function K(F) {
    (F.key === " " || F.key === "Enter") && (F.preventDefault(), _(F.ctrlKey || F.metaKey));
  }
  function H(F) {
    F.dataTransfer.setData(p, e.key), F.dataTransfer.dropEffect = "move", h(!0);
  }
  function Y() {
    h(!1);
  }
  function ae(F) {
    F.preventDefault(), F.dataTransfer.dropEffect = "move";
  }
  function re(F) {
    if (u(!1), F.dataTransfer.types.includes(p.toLowerCase())) {
      const V = F.dataTransfer.getData(p.toLowerCase());
      V !== e.key && (F.preventDefault(), a == null || a(V, e.key));
    }
  }
  function j(F) {
    ol(F) && u(!0);
  }
  function L(F) {
    ol(F) && u(!1);
  }
  let Z;
  return M && (Z = {
    draggable: !0,
    onDragStart: H,
    onDragEnd: Y,
    onDragOver: ae,
    onDragEnter: j,
    onDragLeave: L,
    onDrop: re
  }), /* @__PURE__ */ E.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": C,
    "aria-selected": r,
    "aria-sort": I,
    tabIndex: d ? 0 : T,
    className: N,
    style: {
      ...Qc(e, n, C),
      ...Lr(e, t)
    },
    onFocus: oe,
    onClick: G,
    onKeyDown: m ? K : void 0,
    ...Z,
    children: [W({
      column: e,
      sortDirection: R,
      priority: $,
      tabIndex: v
    }), P && /* @__PURE__ */ E.jsx("div", {
      className: Jp,
      onClick: Qf,
      onPointerDown: A
    })]
  });
}
function ol(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const am = "r1upfr807-0-0-beta-47", us = `rdg-row ${am}`, sm = "r190mhd37-0-0-beta-47", Ii = "rdg-row-selected", lm = "r139qu9m7-0-0-beta-47", cm = "rdg-top-summary-row", um = "rdg-bottom-summary-row", dm = "h10tskcx7-0-0-beta-47", uu = `rdg-header-row ${dm}`;
function fm({
  rowIdx: e,
  columns: t,
  onColumnResize: n,
  onColumnsReorder: r,
  sortColumns: i,
  onSortColumnsChange: a,
  lastFrozenColumnIndex: s,
  selectedCellIdx: l,
  selectCell: c,
  shouldFocusGrid: d,
  direction: f
}) {
  const p = Uf(), g = [];
  for (let h = 0; h < t.length; h++) {
    const b = t[h], u = mn(b, s, {
      type: "HEADER"
    });
    u !== void 0 && (h += u - 1), g.push(/* @__PURE__ */ E.jsx(im, {
      column: b,
      colSpan: u,
      rowIdx: e,
      isCellSelected: l === b.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: a,
      sortColumns: i,
      selectCell: c,
      shouldFocusGrid: d && h === 0,
      direction: f,
      dragDropKey: p
    }, b.key));
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: ge(uu, l === -1 && Ii),
    children: g
  });
}
const pm = /* @__PURE__ */ nr(fm);
function mm({
  rowIdx: e,
  level: t,
  columns: n,
  selectedCellIdx: r,
  selectCell: i
}) {
  const a = [], s = /* @__PURE__ */ new Set();
  for (const l of n) {
    let {
      parent: c
    } = l;
    if (c !== void 0) {
      for (; c.level > t && c.parent !== void 0; )
        c = c.parent;
      if (c.level === t && !s.has(c)) {
        s.add(c);
        const {
          idx: d
        } = c;
        a.push(/* @__PURE__ */ E.jsx(Up, {
          column: c,
          rowIdx: e,
          isCellSelected: r === d,
          selectCell: i
        }, d));
      }
    }
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: uu,
    children: a
  });
}
const hm = /* @__PURE__ */ nr(mm), gm = "c6ra8a37-0-0-beta-47", bm = `rdg-cell-copied ${gm}`, ym = "cq910m07-0-0-beta-47", vm = `rdg-cell-dragged-over ${ym}`;
function xm({
  column: e,
  colSpan: t,
  isCellSelected: n,
  isCopied: r,
  isDraggedOver: i,
  row: a,
  rowIdx: s,
  onClick: l,
  onDoubleClick: c,
  onContextMenu: d,
  onRowChange: f,
  selectCell: p,
  ...g
}) {
  const {
    tabIndex: h,
    childTabIndex: b,
    onFocus: u
  } = Oo(n), {
    cellClass: y
  } = e, C = Eo(e, typeof y == "function" ? y(a) : y, r && bm, i && vm), T = Xc(e, a);
  function v($) {
    p({
      rowIdx: s,
      idx: e.idx
    }, $);
  }
  function x($) {
    if (l) {
      const I = oo($);
      if (l({
        row: a,
        column: e,
        selectCell: v
      }, I), I.isGridDefaultPrevented()) return;
    }
    v();
  }
  function w($) {
    if (d) {
      const I = oo($);
      if (d({
        row: a,
        column: e,
        selectCell: v
      }, I), I.isGridDefaultPrevented()) return;
    }
    v();
  }
  function k($) {
    if (c) {
      const I = oo($);
      if (c({
        row: a,
        column: e,
        selectCell: v
      }, I), I.isGridDefaultPrevented()) return;
    }
    v(!0);
  }
  function R($) {
    f(e, $);
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !T || void 0,
    tabIndex: h,
    className: C,
    style: Lr(e, t),
    onClick: x,
    onDoubleClick: k,
    onContextMenu: w,
    onFocus: u,
    ...g,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: s,
      isCellEditable: T,
      tabIndex: b,
      onRowChange: R
    })
  });
}
const wm = /* @__PURE__ */ nr(xm);
function Cm({
  className: e,
  rowIdx: t,
  gridRowStart: n,
  selectedCellIdx: r,
  isRowSelectionDisabled: i,
  isRowSelected: a,
  copiedCellIdx: s,
  draggedOverCellIdx: l,
  lastFrozenColumnIndex: c,
  row: d,
  viewportColumns: f,
  selectedCellEditor: p,
  onCellClick: g,
  onCellDoubleClick: h,
  onCellContextMenu: b,
  rowClass: u,
  setDraggedOverRowIdx: y,
  onMouseEnter: C,
  onRowChange: T,
  selectCell: v,
  ...x
}, w) {
  const k = Wt((m, P) => {
    T(m, t, P);
  });
  function R(m) {
    y == null || y(t), C == null || C(m);
  }
  e = ge(us, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && Ii);
  const $ = [];
  for (let m = 0; m < f.length; m++) {
    const P = f[m], {
      idx: M
    } = P, N = mn(P, c, {
      type: "ROW",
      row: d
    });
    N !== void 0 && (m += N - 1);
    const W = r === M;
    W && p ? $.push(p) : $.push(/* @__PURE__ */ E.jsx(wm, {
      column: P,
      colSpan: N,
      row: d,
      rowIdx: t,
      isCopied: s === M,
      isDraggedOver: l === M,
      isCellSelected: W,
      onClick: g,
      onDoubleClick: h,
      onContextMenu: b,
      onRowChange: k,
      selectCell: v
    }, P.key));
  }
  const I = ot(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: i
  }), [i, a]);
  return /* @__PURE__ */ E.jsx(ru, {
    value: I,
    children: /* @__PURE__ */ E.jsx("div", {
      role: "row",
      ref: w,
      className: e,
      onMouseEnter: R,
      style: ls(n),
      ...x,
      children: $
    })
  });
}
const du = /* @__PURE__ */ nr(/* @__PURE__ */ Pi(Cm)), $S = du;
function fu(e, t) {
  return /* @__PURE__ */ E.jsx(du, {
    ...t
  }, e);
}
function Tm({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const i = In(null);
  return Ir(() => {
    Qo(i.current);
  }), Ir(() => {
    function a() {
      r(null);
    }
    const s = new IntersectionObserver(a, {
      root: n,
      threshold: 1
    });
    return s.observe(i.current), () => {
      s.disconnect();
    };
  }, [n, r]), /* @__PURE__ */ E.jsx("div", {
    ref: i,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Sm = "a3ejtar7-0-0-beta-47", Em = `rdg-sort-arrow ${Sm}`;
function Om({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ E.jsxs(E.Fragment, {
    children: [Rm({
      sortDirection: e
    }), Pm({
      priority: t
    })]
  });
}
function Rm({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ E.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Em,
    "aria-hidden": !0,
    children: /* @__PURE__ */ E.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Pm({
  priority: e
}) {
  return e;
}
const km = "rnvodz57-0-0-beta-47", Im = `rdg ${km}`, $m = "vlqv91k7-0-0-beta-47", Mm = `rdg-viewport-dragging ${$m}`, Nm = "f1lsfrzw7-0-0-beta-47", Dm = "f1cte0lg7-0-0-beta-47", Am = "s8wc6fl7-0-0-beta-47";
function jm({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: i,
  selectCell: a
}) {
  var g;
  const {
    tabIndex: s,
    childTabIndex: l,
    onFocus: c
  } = Oo(i), {
    summaryCellClass: d
  } = e, f = Eo(e, Am, typeof d == "function" ? d(n) : d);
  function p() {
    a({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": i,
    tabIndex: s,
    className: f,
    style: Lr(e, t),
    onClick: p,
    onFocus: c,
    children: (g = e.renderSummaryCell) == null ? void 0 : g.call(e, {
      column: e,
      row: n,
      tabIndex: l
    })
  });
}
const Fm = /* @__PURE__ */ nr(jm), _m = "skuhp557-0-0-beta-47", Lm = "tf8l5ub7-0-0-beta-47", Bm = `rdg-summary-row ${_m}`;
function zm({
  rowIdx: e,
  gridRowStart: t,
  row: n,
  viewportColumns: r,
  top: i,
  bottom: a,
  lastFrozenColumnIndex: s,
  selectedCellIdx: l,
  isTop: c,
  selectCell: d,
  "aria-rowindex": f
}) {
  const p = [];
  for (let g = 0; g < r.length; g++) {
    const h = r[g], b = mn(h, s, {
      type: "SUMMARY",
      row: n
    });
    b !== void 0 && (g += b - 1);
    const u = l === h.idx;
    p.push(/* @__PURE__ */ E.jsx(Fm, {
      column: h,
      colSpan: b,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: d
    }, h.key));
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "row",
    "aria-rowindex": f,
    className: ge(us, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Bm, c ? `${cm} ${Lm}` : um, l === -1 && Ii),
    style: {
      ...ls(t),
      "--rdg-summary-row-top": i !== void 0 ? `${i}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: p
  });
}
const il = /* @__PURE__ */ nr(zm);
function Wm(e, t) {
  const {
    columns: n,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a,
    rowKeyGetter: s,
    onRowsChange: l,
    rowHeight: c,
    headerRowHeight: d,
    summaryRowHeight: f,
    selectedRows: p,
    isRowSelectionDisabled: g,
    onSelectedRowsChange: h,
    sortColumns: b,
    onSortColumnsChange: u,
    defaultColumnOptions: y,
    onCellClick: C,
    onCellDoubleClick: T,
    onCellContextMenu: v,
    onCellKeyDown: x,
    onSelectedCellChange: w,
    onScroll: k,
    onColumnResize: R,
    onColumnsReorder: $,
    onFill: I,
    onCopy: m,
    onPaste: P,
    enableVirtualization: M,
    renderers: N,
    className: W,
    style: A,
    rowClass: _,
    direction: G,
    role: oe,
    "aria-label": K,
    "aria-labelledby": H,
    "aria-describedby": Y,
    "aria-rowcount": ae,
    "data-testid": re
  } = e, j = ki(), L = oe ?? "grid", Z = c ?? 35, F = d ?? (typeof Z == "number" ? Z : 35), V = f ?? (typeof Z == "number" ? Z : 35), J = (N == null ? void 0 : N.renderRow) ?? (j == null ? void 0 : j.renderRow) ?? fu, Q = (N == null ? void 0 : N.renderSortStatus) ?? (j == null ? void 0 : j.renderSortStatus) ?? Om, le = (N == null ? void 0 : N.renderCheckbox) ?? (j == null ? void 0 : j.renderCheckbox) ?? hp, B = (N == null ? void 0 : N.noRowsFallback) ?? (j == null ? void 0 : j.noRowsFallback), xe = M ?? !0, pe = G ?? "ltr", [be, Re] = Rt(0), [se, Ie] = Rt(0), [he, Me] = Rt(() => /* @__PURE__ */ new Map()), [Ee, de] = Rt(() => /* @__PURE__ */ new Map()), [it, We] = Rt(null), [gt, Ot] = Rt(!1), [lt, Pt] = Rt(void 0), [_e, Fe] = Rt(null), Se = It((ee) => he.get(ee.key) ?? Ee.get(ee.key) ?? ee.width, [Ee, he]), [bt, St, vn, $t] = jp(), {
    columns: ie,
    colSpanColumns: Oe,
    lastFrozenColumnIndex: Pe,
    headerRowsCount: yt,
    colOverscanStartIdx: ct,
    colOverscanEndIdx: Ft,
    templateColumns: _t,
    layoutCssVars: xn,
    totalFrozenColumnWidth: Lt
  } = Dp({
    rawColumns: n,
    defaultColumnOptions: y,
    getColumnWidth: Se,
    scrollLeft: se,
    viewportWidth: St,
    enableVirtualization: xe
  }), Yt = (i == null ? void 0 : i.length) ?? 0, qt = (a == null ? void 0 : a.length) ?? 0, Gt = Yt + qt, Kt = yt + Yt, zn = yt - 1, ut = -Kt, Xt = ut + zn, Mt = r.length + qt - 1, [fe, ln] = Rt(() => ({
    idx: -1,
    rowIdx: ut - 1,
    mode: "SELECT"
  })), Wn = In(fe), Kn = In(lt), O = In(-1), q = In(null), te = In(!1), ye = L === "treegrid", $e = yt * F, z = Gt * V, D = vn - $e - z, X = p != null && h != null, ve = pe === "rtl", me = ve ? "ArrowRight" : "ArrowLeft", we = ve ? "ArrowLeft" : "ArrowRight", De = ae ?? yt + r.length + Gt, at = ot(() => ({
    renderCheckbox: le,
    renderSortStatus: Q
  }), [le, Q]), At = ot(() => {
    let ee = !1, ne = !1;
    if (s != null && p != null && p.size > 0) {
      for (const Ce of r)
        if (p.has(s(Ce)) ? ee = !0 : ne = !0, ee && ne) break;
    }
    return {
      isRowSelected: ee && !ne,
      isIndeterminate: ee && ne
    };
  }, [r, p, s]), {
    rowOverscanStartIdx: ft,
    rowOverscanEndIdx: cn,
    totalRowHeight: En,
    gridTemplateRows: Xn,
    getRowTop: Le,
    getRowHeight: un,
    findRowIdx: wn
  } = _p({
    rows: r,
    rowHeight: Z,
    clientHeight: D,
    scrollTop: be,
    enableVirtualization: xe
  }), Bt = Fp({
    columns: ie,
    colSpanColumns: Oe,
    colOverscanStartIdx: ct,
    colOverscanEndIdx: Ft,
    lastFrozenColumnIndex: Pe,
    rowOverscanStartIdx: ft,
    rowOverscanEndIdx: cn,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: sa,
    handleColumnResize: hf
  } = Ap(ie, Bt, _t, bt, St, he, Ee, Me, de, R), gf = ye ? -1 : 0, mr = ie.length - 1, la = da(fe), _o = Xs(fe), bf = F + En + z + $t, yf = Wt(hf), vf = Wt($), xf = Wt(u), wf = Wt(C), Cf = Wt(T), Tf = Wt(v), Sf = Wt(Rf), Ef = Wt(qs), Of = Wt(Lo), ca = Wt(Wr), Ys = Wt(({
    idx: ee,
    rowIdx: ne
  }) => {
    Wr({
      rowIdx: ut + ne - 1,
      idx: ee
    });
  });
  Ir(() => {
    if (!la || ma(fe, Wn.current)) {
      Wn.current = fe;
      return;
    }
    Wn.current = fe, fe.idx === -1 && (q.current.focus({
      preventScroll: !0
    }), Qo(q.current));
  }), Ir(() => {
    te.current && (te.current = !1, Qs());
  }), Hf(t, () => ({
    element: bt.current,
    scrollToCell({
      idx: ee,
      rowIdx: ne
    }) {
      const Ce = ee !== void 0 && ee > Pe && ee < ie.length ? ee : void 0, Te = ne !== void 0 && hr(ne) ? ne : void 0;
      (Ce !== void 0 || Te !== void 0) && Fe({
        idx: Ce,
        rowIdx: Te
      });
    },
    selectCell: Wr
  }));
  const ua = It((ee) => {
    Pt(ee), Kn.current = ee;
  }, []);
  function Rf(ee) {
    if (!h) return;
    io(s);
    const ne = new Set(p);
    for (const Ce of r) {
      if ((g == null ? void 0 : g(Ce)) === !0) continue;
      const Te = s(Ce);
      ee.checked ? ne.add(Te) : ne.delete(Te);
    }
    h(ne);
  }
  function qs(ee) {
    if (!h) return;
    io(s);
    const {
      row: ne,
      checked: Ce,
      isShiftClick: Te
    } = ee;
    if ((g == null ? void 0 : g(ne)) === !0) return;
    const Be = new Set(p), et = s(ne), dt = O.current, pt = r.indexOf(ne);
    if (O.current = pt, Ce ? Be.add(et) : Be.delete(et), Te && dt !== -1 && dt !== pt && dt < r.length) {
      const Zt = dp(pt - dt);
      for (let zt = dt + Zt; zt !== pt; zt += Zt) {
        const On = r[zt];
        (g == null ? void 0 : g(On)) !== !0 && (Ce ? Be.add(s(On)) : Be.delete(s(On)));
      }
    }
    h(Be);
  }
  function Pf(ee) {
    var pt;
    const {
      idx: ne,
      rowIdx: Ce,
      mode: Te
    } = fe;
    if (Te === "EDIT") return;
    if (x && hr(Ce)) {
      const Zt = r[Ce], zt = oo(ee);
      if (x({
        mode: "SELECT",
        row: Zt,
        column: ie[ne],
        rowIdx: Ce,
        selectCell: Wr
      }, zt), zt.isGridDefaultPrevented()) return;
    }
    if (!(ee.target instanceof Element)) return;
    const Be = ee.target.closest(".rdg-cell") !== null, et = ye && ee.target === q.current;
    if (!Be && !et) return;
    const {
      keyCode: dt
    } = ee;
    if (_o && (P != null || m != null) && ai(ee)) {
      if (dt === 67) {
        if (((pt = window.getSelection()) == null ? void 0 : pt.isCollapsed) === !1) return;
        If();
        return;
      }
      if (dt === 86) {
        $f();
        return;
      }
    }
    switch (ee.key) {
      case "Escape":
        We(null);
        return;
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
      case "Tab":
      case "Home":
      case "End":
      case "PageUp":
      case "PageDown":
        Zs(ee);
        break;
      default:
        Mf(ee);
        break;
    }
  }
  function kf(ee) {
    const {
      scrollTop: ne,
      scrollLeft: Ce
    } = ee.currentTarget;
    ii(() => {
      Re(ne), Ie(fp(Ce));
    }), k == null || k(ee);
  }
  function Lo(ee, ne, Ce) {
    if (typeof l != "function" || Ce === r[ne]) return;
    const Te = [...r];
    Te[ne] = Ce, l(Te, {
      indexes: [ne],
      column: ee
    });
  }
  function Gs() {
    fe.mode === "EDIT" && Lo(ie[fe.idx], fe.rowIdx, fe.row);
  }
  function If() {
    const {
      idx: ee,
      rowIdx: ne
    } = fe, Ce = r[ne], Te = ie[ee].key;
    We({
      row: Ce,
      columnKey: Te
    }), m == null || m({
      sourceRow: Ce,
      sourceColumnKey: Te
    });
  }
  function $f() {
    if (!P || !l || it === null || !Bo(fe))
      return;
    const {
      idx: ee,
      rowIdx: ne
    } = fe, Ce = ie[ee], Te = r[ne], Be = P({
      sourceRow: it.row,
      sourceColumnKey: it.columnKey,
      targetRow: Te,
      targetColumnKey: Ce.key
    });
    Lo(Ce, ne, Be);
  }
  function Mf(ee) {
    if (!_o) return;
    const ne = r[fe.rowIdx], {
      key: Ce,
      shiftKey: Te
    } = ee;
    if (X && Te && Ce === " ") {
      io(s);
      const Be = s(ne);
      qs({
        row: ne,
        checked: !p.has(Be),
        isShiftClick: !1
      }), ee.preventDefault();
      return;
    }
    Bo(fe) && ep(ee) && ln(({
      idx: Be,
      rowIdx: et
    }) => ({
      idx: Be,
      rowIdx: et,
      mode: "EDIT",
      row: ne,
      originalRow: ne
    }));
  }
  function Ks(ee) {
    return ee >= gf && ee <= mr;
  }
  function hr(ee) {
    return ee >= 0 && ee < r.length;
  }
  function da({
    idx: ee,
    rowIdx: ne
  }) {
    return ne >= ut && ne <= Mt && Ks(ee);
  }
  function Nf({
    idx: ee,
    rowIdx: ne
  }) {
    return hr(ne) && ee >= 0 && ee <= mr;
  }
  function Xs({
    idx: ee,
    rowIdx: ne
  }) {
    return hr(ne) && Ks(ee);
  }
  function Bo(ee) {
    return Nf(ee) && op({
      columns: ie,
      rows: r,
      selectedPosition: ee
    });
  }
  function Wr(ee, ne) {
    if (!da(ee)) return;
    Gs();
    const Ce = r[ee.rowIdx], Te = ma(fe, ee);
    ne && Bo(ee) ? ln({
      ...ee,
      mode: "EDIT",
      row: Ce,
      originalRow: Ce
    }) : Te ? Qo(al(bt.current)) : (te.current = !0, ln({
      ...ee,
      mode: "SELECT"
    })), w && !Te && w({
      rowIdx: ee.rowIdx,
      row: Ce,
      column: ie[ee.idx]
    });
  }
  function Df(ee, ne, Ce) {
    const {
      idx: Te,
      rowIdx: Be
    } = fe, et = la && Te === -1;
    switch (ee) {
      case "ArrowUp":
        return {
          idx: Te,
          rowIdx: Be - 1
        };
      case "ArrowDown":
        return {
          idx: Te,
          rowIdx: Be + 1
        };
      case me:
        return {
          idx: Te - 1,
          rowIdx: Be
        };
      case we:
        return {
          idx: Te + 1,
          rowIdx: Be
        };
      case "Tab":
        return {
          idx: Te + (Ce ? -1 : 1),
          rowIdx: Be
        };
      case "Home":
        return et ? {
          idx: Te,
          rowIdx: ut
        } : {
          idx: 0,
          rowIdx: ne ? ut : Be
        };
      case "End":
        return et ? {
          idx: Te,
          rowIdx: Mt
        } : {
          idx: mr,
          rowIdx: ne ? Mt : Be
        };
      case "PageUp": {
        if (fe.rowIdx === ut) return fe;
        const dt = Le(Be) + un(Be) - D;
        return {
          idx: Te,
          rowIdx: dt > 0 ? wn(dt) : 0
        };
      }
      case "PageDown": {
        if (fe.rowIdx >= r.length) return fe;
        const dt = Le(Be) + D;
        return {
          idx: Te,
          rowIdx: dt < En ? wn(dt) : r.length - 1
        };
      }
      default:
        return fe;
    }
  }
  function Zs(ee) {
    const {
      key: ne,
      shiftKey: Ce
    } = ee;
    let Te = "NONE";
    if (ne === "Tab") {
      if (sp({
        shiftKey: Ce,
        maxColIdx: mr,
        minRowIdx: ut,
        maxRowIdx: Mt,
        selectedPosition: fe
      })) {
        Gs();
        return;
      }
      Te = "CHANGE_ROW";
    }
    ee.preventDefault();
    const Be = ai(ee), et = Df(ne, Be, Ce);
    if (ma(fe, et)) return;
    const dt = ap({
      moveUp: ne === "ArrowUp",
      moveNext: ne === we || ne === "Tab" && !Ce,
      columns: ie,
      colSpanColumns: Oe,
      rows: r,
      topSummaryRows: i,
      bottomSummaryRows: a,
      minRowIdx: ut,
      mainHeaderRowIdx: Xt,
      maxRowIdx: Mt,
      lastFrozenColumnIndex: Pe,
      cellNavigationMode: Te,
      currentPosition: fe,
      nextPosition: et,
      isCellWithinBounds: da
    });
    Wr(dt);
  }
  function Af(ee) {
    if (lt === void 0) return;
    const {
      rowIdx: ne
    } = fe;
    return (ne < lt ? ne < ee && ee <= lt : ne > ee && ee >= lt) ? fe.idx : void 0;
  }
  function Qs() {
    const ee = al(bt.current);
    if (ee === null) return;
    Qo(ee), (ee.querySelector('[tabindex="0"]') ?? ee).focus({
      preventScroll: !0
    });
  }
  function jf() {
    if (I == null || fe.mode === "EDIT" || !Xs(fe))
      return;
    const {
      idx: ee,
      rowIdx: ne
    } = fe, Ce = ie[ee];
    if (Ce.renderEditCell == null || Ce.editable === !1)
      return;
    const Te = Se(Ce);
    return /* @__PURE__ */ E.jsx(Wp, {
      gridRowStart: Kt + ne + 1,
      rows: r,
      column: Ce,
      columnWidth: Te,
      maxColIdx: mr,
      isLastRow: ne === Mt,
      selectedPosition: fe,
      isCellEditable: Bo,
      latestDraggedOverRowIdx: Kn,
      onRowsChange: l,
      onClick: Qs,
      onFill: I,
      setDragging: Ot,
      setDraggedOverRowIdx: ua
    });
  }
  function Ff(ee) {
    if (fe.rowIdx !== ee || fe.mode === "SELECT") return;
    const {
      idx: ne,
      row: Ce
    } = fe, Te = ie[ne], Be = mn(Te, Pe, {
      type: "ROW",
      row: Ce
    }), et = (pt) => {
      te.current = pt, ln(({
        idx: Zt,
        rowIdx: zt
      }) => ({
        idx: Zt,
        rowIdx: zt,
        mode: "SELECT"
      }));
    }, dt = (pt, Zt, zt) => {
      Zt ? ii(() => {
        Lo(Te, fe.rowIdx, pt), et(zt);
      }) : ln((On) => ({
        ...On,
        row: pt
      }));
    };
    return r[fe.rowIdx] !== fe.originalRow && et(!1), /* @__PURE__ */ E.jsx(Hp, {
      column: Te,
      colSpan: Be,
      row: Ce,
      rowIdx: ee,
      onRowChange: dt,
      closeEditor: et,
      onKeyDown: x,
      navigate: Zs
    }, Te.key);
  }
  function Vr(ee) {
    const ne = fe.idx === -1 ? void 0 : ie[fe.idx];
    return ne !== void 0 && fe.rowIdx === ee && !Bt.includes(ne) ? fe.idx > Ft ? [...Bt, ne] : [...Bt.slice(0, Pe + 1), ne, ...Bt.slice(Pe + 1)] : Bt;
  }
  function _f() {
    const ee = [], {
      idx: ne,
      rowIdx: Ce
    } = fe, Te = _o && Ce < ft ? ft - 1 : ft, Be = _o && Ce > cn ? cn + 1 : cn;
    for (let et = Te; et <= Be; et++) {
      const dt = et === ft - 1 || et === cn + 1, pt = dt ? Ce : et;
      let Zt = Bt;
      const zt = ne === -1 ? void 0 : ie[ne];
      zt !== void 0 && (dt ? Zt = [zt] : Zt = Vr(pt));
      const On = r[pt], Lf = Kt + pt + 1;
      let fa = pt, pa = !1;
      typeof s == "function" && (fa = s(On), pa = (p == null ? void 0 : p.has(fa)) ?? !1), ee.push(J(fa, {
        "aria-rowindex": Kt + pt + 1,
        "aria-selected": X ? pa : void 0,
        rowIdx: pt,
        row: On,
        viewportColumns: Zt,
        isRowSelectionDisabled: (g == null ? void 0 : g(On)) ?? !1,
        isRowSelected: pa,
        onCellClick: wf,
        onCellDoubleClick: Cf,
        onCellContextMenu: Tf,
        rowClass: _,
        gridRowStart: Lf,
        copiedCellIdx: it !== null && it.row === On ? ie.findIndex((Bf) => Bf.key === it.columnKey) : void 0,
        selectedCellIdx: Ce === pt ? ne : void 0,
        draggedOverCellIdx: Af(pt),
        setDraggedOverRowIdx: gt ? ua : void 0,
        lastFrozenColumnIndex: Pe,
        onRowChange: Of,
        selectCell: ca,
        selectedCellEditor: Ff(pt)
      }));
    }
    return ee;
  }
  (fe.idx > mr || fe.rowIdx > Mt) && (ln({
    idx: -1,
    rowIdx: ut - 1,
    mode: "SELECT"
  }), ua(void 0));
  let zo = `repeat(${yt}, ${F}px)`;
  Yt > 0 && (zo += ` repeat(${Yt}, ${V}px)`), r.length > 0 && (zo += Xn), qt > 0 && (zo += ` repeat(${qt}, ${V}px)`);
  const Js = fe.idx === -1 && fe.rowIdx !== ut - 1;
  return /* @__PURE__ */ E.jsxs("div", {
    role: L,
    "aria-label": K,
    "aria-labelledby": H,
    "aria-describedby": Y,
    "aria-multiselectable": X ? !0 : void 0,
    "aria-colcount": ie.length,
    "aria-rowcount": De,
    className: ge(Im, W, gt && Mm),
    style: {
      ...A,
      scrollPaddingInlineStart: fe.idx > Pe || (_e == null ? void 0 : _e.idx) !== void 0 ? `${Lt}px` : void 0,
      scrollPaddingBlock: hr(fe.rowIdx) || (_e == null ? void 0 : _e.rowIdx) !== void 0 ? `${$e + Yt * V}px ${qt * V}px` : void 0,
      gridTemplateColumns: sa,
      gridTemplateRows: zo,
      "--rdg-header-row-height": `${F}px`,
      "--rdg-scroll-height": `${bf}px`,
      ...xn
    },
    dir: pe,
    ref: bt,
    onScroll: kf,
    onKeyDown: Pf,
    "data-testid": re,
    children: [/* @__PURE__ */ E.jsxs(Tp, {
      value: at,
      children: [/* @__PURE__ */ E.jsx(Op, {
        value: Sf,
        children: /* @__PURE__ */ E.jsxs(Ep, {
          value: At,
          children: [Array.from({
            length: zn
          }, (ee, ne) => /* @__PURE__ */ E.jsx(hm, {
            rowIdx: ne + 1,
            level: -zn + ne,
            columns: Vr(ut + ne),
            selectedCellIdx: fe.rowIdx === ut + ne ? fe.idx : void 0,
            selectCell: Ys
          }, ne)), /* @__PURE__ */ E.jsx(pm, {
            rowIdx: yt,
            columns: Vr(Xt),
            onColumnResize: yf,
            onColumnsReorder: vf,
            sortColumns: b,
            onSortColumnsChange: xf,
            lastFrozenColumnIndex: Pe,
            selectedCellIdx: fe.rowIdx === Xt ? fe.idx : void 0,
            selectCell: Ys,
            shouldFocusGrid: !la,
            direction: pe
          })]
        })
      }), r.length === 0 && B ? B : /* @__PURE__ */ E.jsxs(E.Fragment, {
        children: [i == null ? void 0 : i.map((ee, ne) => {
          const Ce = yt + 1 + ne, Te = Xt + 1 + ne, Be = fe.rowIdx === Te, et = $e + V * ne;
          return /* @__PURE__ */ E.jsx(il, {
            "aria-rowindex": Ce,
            rowIdx: Te,
            gridRowStart: Ce,
            row: ee,
            top: et,
            bottom: void 0,
            viewportColumns: Vr(Te),
            lastFrozenColumnIndex: Pe,
            selectedCellIdx: Be ? fe.idx : void 0,
            isTop: !0,
            selectCell: ca
          }, ne);
        }), /* @__PURE__ */ E.jsx(Sp, {
          value: Ef,
          children: _f()
        }), a == null ? void 0 : a.map((ee, ne) => {
          const Ce = Kt + r.length + ne + 1, Te = r.length + ne, Be = fe.rowIdx === Te, et = D > En ? vn - V * (a.length - ne) : void 0, dt = et === void 0 ? V * (a.length - 1 - ne) : void 0;
          return /* @__PURE__ */ E.jsx(il, {
            "aria-rowindex": De - qt + ne + 1,
            rowIdx: Te,
            gridRowStart: Ce,
            row: ee,
            top: et,
            bottom: dt,
            viewportColumns: Vr(Te),
            lastFrozenColumnIndex: Pe,
            selectedCellIdx: Be ? fe.idx : void 0,
            isTop: !1,
            selectCell: ca
          }, ne);
        })]
      })]
    }), jf(), rp(Bt), ye && /* @__PURE__ */ E.jsx("div", {
      ref: q,
      tabIndex: Js ? 0 : -1,
      className: ge(Nm, Js && [sm, Pe !== -1 && lm], !hr(fe.rowIdx) && Dm),
      style: {
        gridRowStart: fe.rowIdx + Kt + 1
      }
    }), _e !== null && /* @__PURE__ */ E.jsx(Tm, {
      scrollToPosition: _e,
      setScrollToCellPosition: Fe,
      gridElement: bt.current
    })]
  });
}
function al(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function ma(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const pu = /* @__PURE__ */ Pi(Wm);
function Vm({
  id: e,
  groupKey: t,
  childRows: n,
  isExpanded: r,
  isCellSelected: i,
  column: a,
  row: s,
  groupColumnIndex: l,
  isGroupByColumn: c,
  toggleGroup: d
}) {
  var u;
  const {
    tabIndex: f,
    childTabIndex: p,
    onFocus: g
  } = Oo(i);
  function h() {
    d(e);
  }
  const b = c && l === a.idx;
  return /* @__PURE__ */ E.jsx("div", {
    role: "gridcell",
    "aria-colindex": a.idx + 1,
    "aria-selected": i,
    tabIndex: f,
    className: Eo(a),
    style: {
      ...Lr(a),
      cursor: b ? "pointer" : "default"
    },
    onClick: b ? h : void 0,
    onFocus: g,
    children: (!c || b) && ((u = a.renderGroupCell) == null ? void 0 : u.call(a, {
      groupKey: t,
      childRows: n,
      column: a,
      row: s,
      isExpanded: r,
      tabIndex: p,
      toggleGroup: h
    }))
  }, a.key);
}
const Hm = /* @__PURE__ */ nr(Vm), Um = "g1yxluv37-0-0-beta-47", Ym = `rdg-group-row ${Um}`;
function qm({
  className: e,
  row: t,
  rowIdx: n,
  viewportColumns: r,
  selectedCellIdx: i,
  isRowSelected: a,
  selectCell: s,
  gridRowStart: l,
  groupBy: c,
  toggleGroup: d,
  isRowSelectionDisabled: f,
  ...p
}) {
  const g = r[0].key === kr ? t.level + 1 : t.level;
  function h() {
    s({
      rowIdx: n,
      idx: -1
    });
  }
  const b = ot(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: a
  }), [a]);
  return /* @__PURE__ */ E.jsx(ru, {
    value: b,
    children: /* @__PURE__ */ E.jsx("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: ge(us, Ym, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, i === -1 && Ii),
      onClick: h,
      style: ls(l),
      ...p,
      children: r.map((u) => /* @__PURE__ */ E.jsx(Hm, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: i === u.idx,
        column: u,
        row: t,
        groupColumnIndex: g,
        toggleGroup: d,
        isGroupByColumn: c.includes(u.key)
      }, u.key))
    })
  });
}
const Gm = /* @__PURE__ */ nr(qm);
function Km({
  columns: e,
  rows: t,
  rowHeight: n,
  rowKeyGetter: r,
  onCellKeyDown: i,
  onRowsChange: a,
  selectedRows: s,
  onSelectedRowsChange: l,
  renderers: c,
  groupBy: d,
  rowGrouper: f,
  expandedGroupIds: p,
  onExpandedGroupIdsChange: g,
  ...h
}, b) {
  var Y, ae, re;
  const u = ki(), y = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? fu, C = 1 + (((Y = h.topSummaryRows) == null ? void 0 : Y.length) ?? 0), T = h.direction === "rtl", v = T ? "ArrowRight" : "ArrowLeft", x = T ? "ArrowLeft" : "ArrowRight", w = Wt(K), {
    columns: k,
    groupBy: R
  } = ot(() => {
    const j = [...e].sort(({
      key: Z
    }, {
      key: F
    }) => Z === kr ? -1 : F === kr ? 1 : d.includes(Z) ? d.includes(F) ? d.indexOf(Z) - d.indexOf(F) : -1 : d.includes(F) ? 1 : 0), L = [];
    for (const [Z, F] of j.entries())
      d.includes(F.key) && (L.push(F.key), j[Z] = {
        ...F,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: F.renderGroupCell ?? xp,
        editable: !1
      });
    return {
      columns: j,
      groupBy: L
    };
  }, [e, d]), [$, I] = ot(() => {
    if (R.length === 0) return [void 0, t.length];
    const j = (L, [Z, ...F], V) => {
      let J = 0;
      const Q = {};
      for (const [le, B] of Object.entries(f(L, Z))) {
        const [xe, pe] = F.length === 0 ? [B, B.length] : j(B, F, V + J + 1);
        Q[le] = {
          childRows: B,
          childGroups: xe,
          startRowIndex: V + J
        }, J += pe + 1;
      }
      return [Q, J];
    };
    return j(t, R, 0);
  }, [R, f, t]), [m, P] = ot(() => {
    const j = /* @__PURE__ */ new Set();
    if (!$) return [t, F];
    const L = [], Z = (V, J, Q) => {
      if (Xm(V)) {
        L.push(...V);
        return;
      }
      Object.keys(V).forEach((le, B, xe) => {
        const pe = J !== void 0 ? `${J}__${le}` : le, be = p.has(pe), {
          childRows: Re,
          childGroups: se,
          startRowIndex: Ie
        } = V[le], he = {
          id: pe,
          parentId: J,
          groupKey: le,
          isExpanded: be,
          childRows: Re,
          level: Q,
          posInSet: B,
          startRowIndex: Ie,
          setSize: xe.length
        };
        L.push(he), j.add(he), be && Z(se, pe, Q + 1);
      });
    };
    return Z($, void 0, 0), [L, F];
    function F(V) {
      return j.has(V);
    }
  }, [p, $, t]), M = ot(() => typeof n == "function" ? (j) => P(j) ? n({
    type: "GROUP",
    row: j
  }) : n({
    type: "ROW",
    row: j
  }) : n, [P, n]), N = It((j) => {
    const L = m.indexOf(j);
    for (let Z = L - 1; Z >= 0; Z--) {
      const F = m[Z];
      if (P(F) && (!P(j) || j.parentId === F.id))
        return [F, Z];
    }
  }, [P, m]), W = It((j) => {
    if (P(j))
      return j.id;
    if (typeof r == "function")
      return r(j);
    const L = N(j);
    if (L !== void 0) {
      const {
        startRowIndex: Z,
        childRows: F
      } = L[0], V = F.indexOf(j);
      return Z + V + 1;
    }
    return m.indexOf(j);
  }, [N, P, r, m]), A = ot(() => {
    if (s == null) return null;
    io(r);
    const j = new Set(s);
    for (const L of m)
      P(L) && L.childRows.every((F) => s.has(r(F))) && j.add(L.id);
    return j;
  }, [P, r, s, m]);
  function _(j) {
    if (!l) return;
    io(r);
    const L = new Set(s);
    for (const Z of m) {
      const F = W(Z);
      if (A != null && A.has(F) && !j.has(F))
        if (P(Z))
          for (const V of Z.childRows)
            L.delete(r(V));
        else
          L.delete(F);
      else if (!(A != null && A.has(F)) && j.has(F))
        if (P(Z))
          for (const V of Z.childRows)
            L.add(r(V));
        else
          L.add(F);
    }
    l(L);
  }
  function G(j, L) {
    if (i == null || i(j, L), L.isGridDefaultPrevented() || j.mode === "EDIT") return;
    const {
      column: Z,
      rowIdx: F,
      selectCell: V
    } = j, J = (Z == null ? void 0 : Z.idx) ?? -1, Q = m[F];
    if (P(Q)) {
      if (J === -1 && (L.key === v && Q.isExpanded || L.key === x && !Q.isExpanded) && (L.preventDefault(), L.preventGridDefault(), K(Q.id)), J === -1 && L.key === v && !Q.isExpanded && Q.level !== 0) {
        const le = N(Q);
        le !== void 0 && (L.preventGridDefault(), V({
          idx: J,
          rowIdx: le[1]
        }));
      }
      ai(L) && (L.keyCode === 67 || L.keyCode === 86) && L.preventGridDefault();
    }
  }
  function oe(j, {
    indexes: L,
    column: Z
  }) {
    if (!a) return;
    const F = [...t], V = [];
    for (const J of L) {
      const Q = t.indexOf(m[J]);
      F[Q] = j[J], V.push(Q);
    }
    a(F, {
      indexes: V,
      column: Z
    });
  }
  function K(j) {
    const L = new Set(p);
    L.has(j) ? L.delete(j) : L.add(j), g(L);
  }
  function H(j, {
    row: L,
    rowClass: Z,
    onCellClick: F,
    onCellDoubleClick: V,
    onCellContextMenu: J,
    onRowChange: Q,
    lastFrozenColumnIndex: le,
    copiedCellIdx: B,
    draggedOverCellIdx: xe,
    setDraggedOverRowIdx: pe,
    selectedCellEditor: be,
    ...Re
  }) {
    if (P(L)) {
      const {
        startRowIndex: he
      } = L;
      return /* @__PURE__ */ E.jsx(Gm, {
        ...Re,
        "aria-rowindex": C + he + 1,
        row: L,
        groupBy: R,
        toggleGroup: w
      }, j);
    }
    let se = Re["aria-rowindex"];
    const Ie = N(L);
    if (Ie !== void 0) {
      const {
        startRowIndex: he,
        childRows: Me
      } = Ie[0], Ee = Me.indexOf(L);
      se = he + C + Ee + 2;
    }
    return y(j, {
      ...Re,
      "aria-rowindex": se,
      row: L,
      rowClass: Z,
      onCellClick: F,
      onCellDoubleClick: V,
      onCellContextMenu: J,
      onRowChange: Q,
      lastFrozenColumnIndex: le,
      copiedCellIdx: B,
      draggedOverCellIdx: xe,
      setDraggedOverRowIdx: pe,
      selectedCellEditor: be
    });
  }
  return /* @__PURE__ */ E.jsx(pu, {
    ...h,
    role: "treegrid",
    "aria-rowcount": I + 1 + (((ae = h.topSummaryRows) == null ? void 0 : ae.length) ?? 0) + (((re = h.bottomSummaryRows) == null ? void 0 : re.length) ?? 0),
    ref: b,
    columns: k,
    rows: m,
    rowHeight: M,
    rowKeyGetter: W,
    onRowsChange: oe,
    selectedRows: A,
    onSelectedRowsChange: _,
    onCellKeyDown: G,
    renderers: {
      ...c,
      renderRow: H
    }
  });
}
function Xm(e) {
  return Array.isArray(e);
}
const MS = /* @__PURE__ */ Pi(Km), Zm = "t7vyx3i7-0-0-beta-47", Qm = `rdg-text-editor ${Zm}`;
function Jm(e) {
  e == null || e.focus(), e == null || e.select();
}
function NS({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ E.jsx("input", {
    className: Qm,
    ref: Jm,
    value: e[t.key],
    onChange: (i) => n({
      ...e,
      [t.key]: i.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const Et = {
  mainToolBarColor: "hsl(214, 74%, 17%)",
  /* Gray */
  gray900: "#1E252D",
  gray800: "#3E4F5F",
  gray700: "#5D7184",
  gray600: "#8899AA",
  gray500: "#C6CDD4",
  gray400: "#DBDFE3",
  gray300: "#EEF2F6",
  gray200: "#f8f9fa",
  gray100: "#FEFEFF",
  /* Primary */
  primary900: "#061324",
  primary800: "#102541",
  primary700: "#105B8F",
  primary600: "#1875B6",
  primary500: "#0484DF",
  primary400: "#1A9BF6",
  primary300: "#7EC8FC",
  primary200: "#C5E7FD",
  primary100: "#DCF0FE",
  primary50: "#F5FBFF",
  forcewhite: "#FEFEFF",
  /* Teal */
  teal900: "hsl(170, 97%, 15%)",
  teal800: "hsl(168, 80%, 23%)",
  teal700: "hsl(166, 72%, 28%)",
  teal600: "hsl(164, 71%, 34%)",
  teal500: "hsl(162, 63%, 41%)",
  teal400: "hsl(160, 51%, 49%)",
  teal300: "hsl(158, 58%, 62%)",
  teal200: "hsl(156, 73%, 74%)",
  teal100: "hsl(154, 75%, 87%)",
  teal50: "hsl(152, 168%, 96%)",
  /* Pink */
  pink900: "hsl(320, 100%, 19%)",
  pink800: "hsl(320, 100%, 19%)",
  pink700: "hsl(324, 93%, 33%)",
  pink600: "hsl(326, 90%, 39%)",
  pink500: "hsl(328, 85%, 46%)",
  pink400: "hsl(330, 79%, 56%)",
  pink300: "hsl(334, 86%, 67%)",
  pink200: "hsl(336, 100%, 77%)",
  pink100: "hsl(338, 100%, 86%)",
  pink50: "hsl(341, 100%, 95%)",
  /* Red */
  red900: "hsl(348, 94%, 20%)",
  red800: "hsl(350, 94%, 28%)",
  red700: "hsl(352, 90%, 35%)",
  red600: "hsl(354, 85%, 44%)",
  red500: "hsl(356, 75%, 53%)",
  red400: "hsl(360, 83%, 62%)",
  red300: "hsl(360, 91%, 69%)",
  red200: "hsl(360, 100%, 80%)",
  red100: "hsl(360, 100%, 87%)",
  red50: "hsl(360, 100%, 95%)",
  /* Yellow */
  yellow900: "hsl(15, 86%, 30%)",
  yellow800: "hsl(22, 82%, 39%)",
  yellow700: "hsl(29, 80%, 44%)",
  yellow600: "hsl(36, 77%, 49%)",
  yellow500: "hsl(42, 87%, 55%)",
  yellow400: "hsl(44, 92%, 63%)",
  yellow300: "hsl(48, 94%, 68%)",
  yellow200: "hsl(48, 95%, 76%)",
  yellow100: "hsl(48, 100%, 88%)",
  yellow50: "hsl(49, 100%, 96%)",
  /* Purple */
  purple50: "#F0EDFD",
  purple100: "#DED8FC",
  purple200: "#B9ABFE",
  purple300: "#A998FF",
  purple400: "#826CF4",
  purple500: "#5D44DF",
  purple600: "#381DBF",
  purple700: "#20099C",
  purple800: "#250388",
  purple900: "#1B0166"
}, eh = {
  "--rdg-color": Et.gray800,
  "--rdg-header-color": Et.gray700,
  "--rdg-border-color": Et.gray400,
  "--rdg-background-color": Et.forcewhite,
  "--rdg-header-background-color": Et.forcewhite,
  "--rdg-row-hover-background-color": Et.forcewhite,
  "--rdg-row-selected-hover-background-color": Et.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-header-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": Et.primary400,
  "--rdg-row-selected-color": Et.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": Et.primary500,
  "--rdg-scrollbar-track-background": Et.gray100,
  "--rdg--scrollbar-thumb-hover-background": Et.primary500,
  "--rdg--scrollbar-track-hover-background": Et.gray200
};
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, li.apply(null, arguments);
}
function mu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var th = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, nh = /* @__PURE__ */ mu(
  function(e) {
    return th.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function rh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function oh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ih = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var a;
      r.tags.length === 0 ? r.insertionPoint ? a = r.insertionPoint.nextSibling : r.prepend ? a = r.container.firstChild : a = r.before : a = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, a), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(oh(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = rh(i);
      try {
        a.insertRule(r, a.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Nt = "-ms-", ci = "-moz-", He = "-webkit-", hu = "comm", ds = "rule", fs = "decl", ah = "@import", gu = "@keyframes", sh = "@layer", lh = Math.abs, $i = String.fromCharCode, ch = Object.assign;
function uh(e, t) {
  return kt(e, 0) ^ 45 ? (((t << 2 ^ kt(e, 0)) << 2 ^ kt(e, 1)) << 2 ^ kt(e, 2)) << 2 ^ kt(e, 3) : 0;
}
function bu(e) {
  return e.trim();
}
function dh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ue(e, t, n) {
  return e.replace(t, n);
}
function Ba(e, t) {
  return e.indexOf(t);
}
function kt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ho(e, t, n) {
  return e.slice(t, n);
}
function Pn(e) {
  return e.length;
}
function ps(e) {
  return e.length;
}
function Vo(e, t) {
  return t.push(e), e;
}
function fh(e, t) {
  return e.map(t).join("");
}
var Mi = 1, $r = 1, yu = 0, Ut = 0, wt = 0, Br = "";
function Ni(e, t, n, r, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: a, line: Mi, column: $r, length: s, return: "" };
}
function qr(e, t) {
  return ch(Ni("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ph() {
  return wt;
}
function mh() {
  return wt = Ut > 0 ? kt(Br, --Ut) : 0, $r--, wt === 10 && ($r = 1, Mi--), wt;
}
function nn() {
  return wt = Ut < yu ? kt(Br, Ut++) : 0, $r++, wt === 10 && ($r = 1, Mi++), wt;
}
function Nn() {
  return kt(Br, Ut);
}
function Jo() {
  return Ut;
}
function Ro(e, t) {
  return ho(Br, e, t);
}
function go(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vu(e) {
  return Mi = $r = 1, yu = Pn(Br = e), Ut = 0, [];
}
function xu(e) {
  return Br = "", e;
}
function ei(e) {
  return bu(Ro(Ut - 1, za(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hh(e) {
  for (; (wt = Nn()) && wt < 33; )
    nn();
  return go(e) > 2 || go(wt) > 3 ? "" : " ";
}
function gh(e, t) {
  for (; --t && nn() && !(wt < 48 || wt > 102 || wt > 57 && wt < 65 || wt > 70 && wt < 97); )
    ;
  return Ro(e, Jo() + (t < 6 && Nn() == 32 && nn() == 32));
}
function za(e) {
  for (; nn(); )
    switch (wt) {
      case e:
        return Ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && za(wt);
        break;
      case 40:
        e === 41 && za(e);
        break;
      case 92:
        nn();
        break;
    }
  return Ut;
}
function bh(e, t) {
  for (; nn() && e + wt !== 57; )
    if (e + wt === 84 && Nn() === 47)
      break;
  return "/*" + Ro(t, Ut - 1) + "*" + $i(e === 47 ? e : nn());
}
function yh(e) {
  for (; !go(Nn()); )
    nn();
  return Ro(e, Ut);
}
function vh(e) {
  return xu(ti("", null, null, null, [""], e = vu(e), 0, [0], e));
}
function ti(e, t, n, r, i, a, s, l, c) {
  for (var d = 0, f = 0, p = s, g = 0, h = 0, b = 0, u = 1, y = 1, C = 1, T = 0, v = "", x = i, w = a, k = r, R = v; y; )
    switch (b = T, T = nn()) {
      case 40:
        if (b != 108 && kt(R, p - 1) == 58) {
          Ba(R += Ue(ei(T), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += ei(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += hh(b);
        break;
      case 92:
        R += gh(Jo() - 1, 7);
        continue;
      case 47:
        switch (Nn()) {
          case 42:
          case 47:
            Vo(xh(bh(nn(), Jo()), t, n), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * u:
        l[d++] = Pn(R) * C;
      case 125 * u:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            C == -1 && (R = Ue(R, /\f/g, "")), h > 0 && Pn(R) - p && Vo(h > 32 ? ll(R + ";", r, n, p - 1) : ll(Ue(R, " ", "") + ";", r, n, p - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (Vo(k = sl(R, t, n, d, f, i, l, v, x = [], w = [], p), a), T === 123)
              if (f === 0)
                ti(R, t, k, k, x, a, p, l, w);
              else
                switch (g === 99 && kt(R, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ti(e, k, k, r && Vo(sl(e, k, k, 0, 0, i, l, v, i, x = [], p), w), i, w, p, l, r ? x : w);
                    break;
                  default:
                    ti(R, k, k, k, [""], w, 0, l, w);
                }
        }
        d = f = h = 0, u = C = 1, v = R = "", p = s;
        break;
      case 58:
        p = 1 + Pn(R), h = b;
      default:
        if (u < 1) {
          if (T == 123)
            --u;
          else if (T == 125 && u++ == 0 && mh() == 125)
            continue;
        }
        switch (R += $i(T), T * u) {
          case 38:
            C = f > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[d++] = (Pn(R) - 1) * C, C = 1;
            break;
          case 64:
            Nn() === 45 && (R += ei(nn())), g = Nn(), f = p = Pn(v = R += yh(Jo())), T++;
            break;
          case 45:
            b === 45 && Pn(R) == 2 && (u = 0);
        }
    }
  return a;
}
function sl(e, t, n, r, i, a, s, l, c, d, f) {
  for (var p = i - 1, g = i === 0 ? a : [""], h = ps(g), b = 0, u = 0, y = 0; b < r; ++b)
    for (var C = 0, T = ho(e, p + 1, p = lh(u = s[b])), v = e; C < h; ++C)
      (v = bu(u > 0 ? g[C] + " " + T : Ue(T, /&\f/g, g[C]))) && (c[y++] = v);
  return Ni(e, t, n, i === 0 ? ds : l, c, d, f);
}
function xh(e, t, n) {
  return Ni(e, t, n, hu, $i(ph()), ho(e, 2, -2), 0);
}
function ll(e, t, n, r) {
  return Ni(e, t, n, fs, ho(e, 0, r), ho(e, r + 1, -1), r);
}
function Er(e, t) {
  for (var n = "", r = ps(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function wh(e, t, n, r) {
  switch (e.type) {
    case sh:
      if (e.children.length) break;
    case ah:
    case fs:
      return e.return = e.return || e.value;
    case hu:
      return "";
    case gu:
      return e.return = e.value + "{" + Er(e.children, r) + "}";
    case ds:
      e.value = e.props.join(",");
  }
  return Pn(n = Er(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ch(e) {
  var t = ps(e);
  return function(n, r, i, a) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, i, a) || "";
    return s;
  };
}
function Th(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Sh = function(t, n, r) {
  for (var i = 0, a = 0; i = a, a = Nn(), i === 38 && a === 12 && (n[r] = 1), !go(a); )
    nn();
  return Ro(t, Ut);
}, Eh = function(t, n) {
  var r = -1, i = 44;
  do
    switch (go(i)) {
      case 0:
        i === 38 && Nn() === 12 && (n[r] = 1), t[r] += Sh(Ut - 1, n, r);
        break;
      case 2:
        t[r] += ei(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Nn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += $i(i);
    }
  while (i = nn());
  return t;
}, Oh = function(t, n) {
  return xu(Eh(vu(t), n));
}, cl = /* @__PURE__ */ new WeakMap(), Rh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !cl.get(r)) && !i) {
      cl.set(t, !0);
      for (var a = [], s = Oh(n, a), l = r.props, c = 0, d = 0; c < s.length; c++)
        for (var f = 0; f < l.length; f++, d++)
          t.props[d] = a[c] ? s[c].replace(/&\f/g, l[f]) : l[f] + " " + s[c];
    }
  }
}, Ph = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function wu(e, t) {
  switch (uh(e, t)) {
    case 5103:
      return He + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return He + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return He + e + ci + e + Nt + e + e;
    case 6828:
    case 4268:
      return He + e + Nt + e + e;
    case 6165:
      return He + e + Nt + "flex-" + e + e;
    case 5187:
      return He + e + Ue(e, /(\w+).+(:[^]+)/, He + "box-$1$2" + Nt + "flex-$1$2") + e;
    case 5443:
      return He + e + Nt + "flex-item-" + Ue(e, /flex-|-self/, "") + e;
    case 4675:
      return He + e + Nt + "flex-line-pack" + Ue(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return He + e + Nt + Ue(e, "shrink", "negative") + e;
    case 5292:
      return He + e + Nt + Ue(e, "basis", "preferred-size") + e;
    case 6060:
      return He + "box-" + Ue(e, "-grow", "") + He + e + Nt + Ue(e, "grow", "positive") + e;
    case 4554:
      return He + Ue(e, /([^-])(transform)/g, "$1" + He + "$2") + e;
    case 6187:
      return Ue(Ue(Ue(e, /(zoom-|grab)/, He + "$1"), /(image-set)/, He + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ue(e, /(image-set\([^]*)/, He + "$1$`$1");
    case 4968:
      return Ue(Ue(e, /(.+:)(flex-)?(.*)/, He + "box-pack:$3" + Nt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + He + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ue(e, /(.+)-inline(.+)/, He + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pn(e) - 1 - t > 6) switch (kt(e, t + 1)) {
        case 109:
          if (kt(e, t + 4) !== 45) break;
        case 102:
          return Ue(e, /(.+:)(.+)-([^]+)/, "$1" + He + "$2-$3$1" + ci + (kt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ba(e, "stretch") ? wu(Ue(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (kt(e, t + 1) !== 115) break;
    case 6444:
      switch (kt(e, Pn(e) - 3 - (~Ba(e, "!important") && 10))) {
        case 107:
          return Ue(e, ":", ":" + He) + e;
        case 101:
          return Ue(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + He + (kt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + He + "$2$3$1" + Nt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (kt(e, t + 11)) {
        case 114:
          return He + e + Nt + Ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return He + e + Nt + Ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return He + e + Nt + Ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return He + e + Nt + e + e;
  }
  return e;
}
var kh = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case fs:
      t.return = wu(t.value, t.length);
      break;
    case gu:
      return Er([qr(t, {
        value: Ue(t.value, "@", "@" + He)
      })], i);
    case ds:
      if (t.length) return fh(t.props, function(a) {
        switch (dh(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Er([qr(t, {
              props: [Ue(a, /:(read-\w+)/, ":" + ci + "$1")]
            })], i);
          case "::placeholder":
            return Er([qr(t, {
              props: [Ue(a, /:(plac\w+)/, ":" + He + "input-$1")]
            }), qr(t, {
              props: [Ue(a, /:(plac\w+)/, ":" + ci + "$1")]
            }), qr(t, {
              props: [Ue(a, /:(plac\w+)/, Nt + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Ih = [kh], $h = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(u) {
      var y = u.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Ih, a = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(u) {
      for (var y = u.getAttribute("data-emotion").split(" "), C = 1; C < y.length; C++)
        a[y[C]] = !0;
      l.push(u);
    }
  );
  var c, d = [Rh, Ph];
  {
    var f, p = [wh, Th(function(u) {
      f.insert(u);
    })], g = Ch(d.concat(i, p)), h = function(y) {
      return Er(vh(y), g);
    };
    c = function(y, C, T, v) {
      f = T, h(y ? y + "{" + C.styles + "}" : C.styles), v && (b.inserted[C.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new ih({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: c
  };
  return b.sheet.hydrate(l), b;
}, Wa = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul;
function Mh() {
  if (ul) return Ye;
  ul = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function v(w) {
    if (typeof w == "object" && w !== null) {
      var k = w.$$typeof;
      switch (k) {
        case t:
          switch (w = w.type, w) {
            case c:
            case d:
            case r:
            case a:
            case i:
            case p:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case l:
                case f:
                case b:
                case h:
                case s:
                  return w;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function x(w) {
    return v(w) === d;
  }
  return Ye.AsyncMode = c, Ye.ConcurrentMode = d, Ye.ContextConsumer = l, Ye.ContextProvider = s, Ye.Element = t, Ye.ForwardRef = f, Ye.Fragment = r, Ye.Lazy = b, Ye.Memo = h, Ye.Portal = n, Ye.Profiler = a, Ye.StrictMode = i, Ye.Suspense = p, Ye.isAsyncMode = function(w) {
    return x(w) || v(w) === c;
  }, Ye.isConcurrentMode = x, Ye.isContextConsumer = function(w) {
    return v(w) === l;
  }, Ye.isContextProvider = function(w) {
    return v(w) === s;
  }, Ye.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ye.isForwardRef = function(w) {
    return v(w) === f;
  }, Ye.isFragment = function(w) {
    return v(w) === r;
  }, Ye.isLazy = function(w) {
    return v(w) === b;
  }, Ye.isMemo = function(w) {
    return v(w) === h;
  }, Ye.isPortal = function(w) {
    return v(w) === n;
  }, Ye.isProfiler = function(w) {
    return v(w) === a;
  }, Ye.isStrictMode = function(w) {
    return v(w) === i;
  }, Ye.isSuspense = function(w) {
    return v(w) === p;
  }, Ye.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === d || w === a || w === i || w === p || w === g || typeof w == "object" && w !== null && (w.$$typeof === b || w.$$typeof === h || w.$$typeof === s || w.$$typeof === l || w.$$typeof === f || w.$$typeof === y || w.$$typeof === C || w.$$typeof === T || w.$$typeof === u);
  }, Ye.typeOf = v, Ye;
}
var qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dl;
function Nh() {
  return dl || (dl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function v(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === r || B === d || B === a || B === i || B === p || B === g || typeof B == "object" && B !== null && (B.$$typeof === b || B.$$typeof === h || B.$$typeof === s || B.$$typeof === l || B.$$typeof === f || B.$$typeof === y || B.$$typeof === C || B.$$typeof === T || B.$$typeof === u);
    }
    function x(B) {
      if (typeof B == "object" && B !== null) {
        var xe = B.$$typeof;
        switch (xe) {
          case t:
            var pe = B.type;
            switch (pe) {
              case c:
              case d:
              case r:
              case a:
              case i:
              case p:
                return pe;
              default:
                var be = pe && pe.$$typeof;
                switch (be) {
                  case l:
                  case f:
                  case b:
                  case h:
                  case s:
                    return be;
                  default:
                    return xe;
                }
            }
          case n:
            return xe;
        }
      }
    }
    var w = c, k = d, R = l, $ = s, I = t, m = f, P = r, M = b, N = h, W = n, A = a, _ = i, G = p, oe = !1;
    function K(B) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(B) || x(B) === c;
    }
    function H(B) {
      return x(B) === d;
    }
    function Y(B) {
      return x(B) === l;
    }
    function ae(B) {
      return x(B) === s;
    }
    function re(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function j(B) {
      return x(B) === f;
    }
    function L(B) {
      return x(B) === r;
    }
    function Z(B) {
      return x(B) === b;
    }
    function F(B) {
      return x(B) === h;
    }
    function V(B) {
      return x(B) === n;
    }
    function J(B) {
      return x(B) === a;
    }
    function Q(B) {
      return x(B) === i;
    }
    function le(B) {
      return x(B) === p;
    }
    qe.AsyncMode = w, qe.ConcurrentMode = k, qe.ContextConsumer = R, qe.ContextProvider = $, qe.Element = I, qe.ForwardRef = m, qe.Fragment = P, qe.Lazy = M, qe.Memo = N, qe.Portal = W, qe.Profiler = A, qe.StrictMode = _, qe.Suspense = G, qe.isAsyncMode = K, qe.isConcurrentMode = H, qe.isContextConsumer = Y, qe.isContextProvider = ae, qe.isElement = re, qe.isForwardRef = j, qe.isFragment = L, qe.isLazy = Z, qe.isMemo = F, qe.isPortal = V, qe.isProfiler = J, qe.isStrictMode = Q, qe.isSuspense = le, qe.isValidElementType = v, qe.typeOf = x;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Wa.exports = Mh() : Wa.exports = Nh();
var ms = Wa.exports, Cu = ms, Dh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ah = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Tu = {};
Tu[Cu.ForwardRef] = Dh;
Tu[Cu.Memo] = Ah;
var jh = !0;
function Fh(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var Su = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  jh === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Eu = function(t, n, r) {
  Su(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function _h(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Lh = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Bh = /[A-Z]|^ms/g, zh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ou = function(t) {
  return t.charCodeAt(1) === 45;
}, fl = function(t) {
  return t != null && typeof t != "boolean";
}, ha = /* @__PURE__ */ mu(function(e) {
  return Ou(e) ? e : e.replace(Bh, "-$&").toLowerCase();
}), pl = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(zh, function(r, i, a) {
          return kn = {
            name: i,
            styles: a,
            next: kn
          }, i;
        });
  }
  return Lh[t] !== 1 && !Ou(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function bo(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return kn = {
          name: i.name,
          styles: i.styles,
          next: kn
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            kn = {
              name: s.name,
              styles: s.styles,
              next: kn
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return Wh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = kn, d = n(e);
        return kn = c, bo(e, t, d);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var p = t[f];
  return p !== void 0 ? p : f;
}
function Wh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += bo(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += a + "{" + t[l] + "}" : fl(l) && (r += ha(a) + ":" + pl(a, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var c = 0; c < s.length; c++)
          fl(s[c]) && (r += ha(a) + ":" + pl(a, s[c]) + ";");
      else {
        var d = bo(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            r += ha(a) + ":" + d + ";";
            break;
          }
          default:
            r += a + "{" + d + "}";
        }
      }
    }
  return r;
}
var ml = /label:\s*([^\s;{]+)\s*(;|$)/g, kn;
function Di(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  kn = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += bo(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += bo(n, t, e[l]), r) {
      var c = a;
      i += c[l];
    }
  ml.lastIndex = 0;
  for (var d = "", f; (f = ml.exec(i)) !== null; )
    d += "-" + f[1];
  var p = _h(i) + d;
  return {
    name: p,
    styles: i,
    next: kn
  };
}
var Vh = function(t) {
  return t();
}, Ru = S.useInsertionEffect ? S.useInsertionEffect : !1, Hh = Ru || Vh, hl = Ru || S.useLayoutEffect, Pu = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ $h({
    key: "css"
  }) : null
);
Pu.Provider;
var ku = function(t) {
  return /* @__PURE__ */ Pi(function(n, r) {
    var i = Cn(Pu);
    return t(n, i, r);
  });
}, hs = /* @__PURE__ */ S.createContext({}), Uh = /* @__PURE__ */ ku(function(e, t) {
  var n = e.styles, r = Di([n], void 0, S.useContext(hs)), i = S.useRef();
  return hl(function() {
    var a = t.key + "-global", s = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), s.hydrate([c])), i.current = [s, l], function() {
      s.flush();
    };
  }, [t]), hl(function() {
    var a = i.current, s = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && Eu(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function gs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Di(t);
}
var Po = function() {
  var t = gs.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Yh = nh, qh = function(t) {
  return t !== "theme";
}, gl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Yh : qh;
}, bl = function(t, n, r) {
  var i;
  if (n) {
    var a = n.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Gh = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return Su(n, r, i), Hh(function() {
    return Eu(n, r, i);
  }), null;
}, Kh = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, a, s;
  n !== void 0 && (a = n.label, s = n.target);
  var l = bl(t, n, r), c = l || gl(i), d = !c("as");
  return function() {
    var f = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && p.push("label:" + a + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      p.push(f[0][0]);
      for (var g = f.length, h = 1; h < g; h++)
        p.push(f[h], f[0][h]);
    }
    var b = ku(function(u, y, C) {
      var T = d && u.as || i, v = "", x = [], w = u;
      if (u.theme == null) {
        w = {};
        for (var k in u)
          w[k] = u[k];
        w.theme = S.useContext(hs);
      }
      typeof u.className == "string" ? v = Fh(y.registered, x, u.className) : u.className != null && (v = u.className + " ");
      var R = Di(p.concat(x), y.registered, w);
      v += y.key + "-" + R.name, s !== void 0 && (v += " " + s);
      var $ = d && l === void 0 ? gl(T) : c, I = {};
      for (var m in u)
        d && m === "as" || $(m) && (I[m] = u[m]);
      return I.className = v, C && (I.ref = C), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Gh, {
        cache: y,
        serialized: R,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ S.createElement(T, I));
    });
    return b.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = p, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(u, y) {
      return e(u, li({}, n, y, {
        shouldForwardProp: bl(b, y, !0)
      })).apply(void 0, p);
    }, b;
  };
}, Xh = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], An = Kh.bind();
Xh.forEach(function(e) {
  An[e] = An(e);
});
const Zh = An.div`
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    *::-webkit-scrollbar {
        width: var(--rdg-scrollbar-width) !important;
        height: var(--rdg-scrollbar-height) !important;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--rdg-scrollbar-thumb-background) !important;
        border-radius: 8px;
        border: none;
    }

    *::-webkit-scrollbar-track {
        background-color: var(--rdg-scrollbar-track-background) !important;
        border-radius: 8px;
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: var(--rdg--scrollbar-thumb-hover-background) !important;
    }

    *::-webkit-scrollbar-track:hover {
        background-color: var(--rdg--scrollbar-track-hover-background) !important;
    }

    > div:first-child {
        flex-grow: 1;
        overflow: hidden;
    }

    .rdg {
        border: none;
        block-size: 100%;
    }

    * {
        font-weight: var(--rdg-font-weight) !important;
        line-height: var(--rdg-line-height) !important;
        font-family: var(--rdg-font-family) !important;
        border: none;
    }

    .rdg-header-row {
        font-size: var(--rdg-header-font-size) !important;
        color: var(--rdg-header-color);
    }

    .rdg-cell {
        padding: var(--rdg-cell-padding) !important;
    }

    .rdg-no-data {
        text-align: center;
        grid-column: 1/-1;
    }

    .rdg-cell-resizable {
        > div {
            width: 5px;
            cursor: col-resize;
            background-color: var(--rdg-border-color);
            opacity: 0;
            transition: opacity 0.2s ease;
            position: absolute;
            top: 0;
            right: -2.5px;
            bottom: 0;

            &:hover {
                opacity: 0.5;
            }
        }
    }

    .rdg-row {
        &[aria-selected='true'] {
            .rdg-cell {
                color: var(--rdg-row-selected-color);
            }
        }

        &.first-row {
            .rdg-cell {
                border-top: solid var(--rdg-border-size) var(--rdg-border-color);
            }

            .rdg-cell:first-child {
                border-top-left-radius: var(--rdg-border-radius-container);
            }

            .rdg-cell:last-child {
                border-top-right-radius: var(--rdg-border-radius-container);
            }
        }

        &.last-row {
            .rdg-cell:first-child {
                border-bottom-left-radius: var(--rdg-border-radius-container);
            }

            .rdg-cell:last-child {
                border-bottom-right-radius: var(--rdg-border-radius-container);
            }
        }

        .rdg-cell {
            border-bottom: solid var(--rdg-border-size) var(--rdg-border-color);

            &:first-child {
                border-left: solid var(--rdg-border-size) var(--rdg-border-color);
            }

            &:last-child {
                border-right: solid var(--rdg-border-size) var(--rdg-border-color);
            }
        }
    }
`;
var ao = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e))(ao || {}), yo = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(yo || {});
function Qh(e, t, n) {
  return (r, i) => {
    const a = r[e], s = i[e];
    try {
      if (n)
        return n(a, s);
      if (t === ao.NUMBER) {
        const l = Number(a), c = Number(s);
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid number for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      } else if (t === ao.DATE) {
        const l = new Date(a).getTime(), c = new Date(s).getTime();
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid date for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      }
      return t === ao.STRING || !t ? String(a).localeCompare(String(s)) : 0;
    } catch (l) {
      return console.error("Error in sorting:", l), 0;
    }
  };
}
const Jh = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, i] = Rt(n ?? []), a = ot(() => r.length === 0 ? t : [...t].sort((l, c) => {
    for (const d of r) {
      const f = e.find((h) => h.key === d.columnKey), g = Qh(
        d.columnKey,
        f == null ? void 0 : f.type,
        f == null ? void 0 : f.sortComparator
      )(l, c);
      if (g !== 0)
        return d.direction === "ASC" ? g : -g;
    }
    return 0;
  }), [t, r]), s = It((l) => {
    l.length !== 0 ? i(l) : i((c) => c.length === 1 ? [
      {
        columnKey: c[0].columnKey,
        direction: c[0].direction === "ASC" ? "DESC" : "ASC"
      }
    ] : c);
  }, []);
  return {
    sortedRows: a,
    sortColumns: r,
    setSortedColumns: s
  };
};
function jn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
var Va = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ga, yl;
function eg() {
  if (yl) return ga;
  yl = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ga = i() ? Object.assign : function(a, s) {
    for (var l, c = r(a), d, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        d = e(l);
        for (var g = 0; g < d.length; g++)
          n.call(l, d[g]) && (c[d[g]] = l[d[g]]);
      }
    }
    return c;
  }, ga;
}
var ba, vl;
function bs() {
  if (vl) return ba;
  vl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ba = e, ba;
}
var ya, xl;
function Iu() {
  return xl || (xl = 1, ya = Function.call.bind(Object.prototype.hasOwnProperty)), ya;
}
var va, wl;
function tg() {
  if (wl) return va;
  wl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = bs(), n = {}, r = Iu();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, l, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (r(a, f)) {
          var p;
          try {
            if (typeof a[f] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = a[f](s, f, c, l, null, t);
          } catch (b) {
            p = b;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + l + " type: " + p.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, va = i, va;
}
var xa, Cl;
function ng() {
  if (Cl) return xa;
  Cl = 1;
  var e = ms, t = eg(), n = bs(), r = Iu(), i = tg(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return xa = function(l, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(H) {
      var Y = H && (d && H[d] || H[f]);
      if (typeof Y == "function")
        return Y;
    }
    var g = "<<anonymous>>", h = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: T(),
      arrayOf: v,
      element: x(),
      elementType: w(),
      instanceOf: k,
      node: m(),
      objectOf: $,
      oneOf: R,
      oneOfType: I,
      shape: M,
      exact: N
    };
    function b(H, Y) {
      return H === Y ? H !== 0 || 1 / H === 1 / Y : H !== H && Y !== Y;
    }
    function u(H, Y) {
      this.message = H, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function y(H) {
      if (process.env.NODE_ENV !== "production")
        var Y = {}, ae = 0;
      function re(L, Z, F, V, J, Q, le) {
        if (V = V || g, Q = Q || F, le !== n) {
          if (c) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = V + ":" + F;
            !Y[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Y[xe] = !0, ae++);
          }
        }
        return Z[F] == null ? L ? Z[F] === null ? new u("The " + J + " `" + Q + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new u("The " + J + " `" + Q + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : H(Z, F, V, J, Q);
      }
      var j = re.bind(null, !1);
      return j.isRequired = re.bind(null, !0), j;
    }
    function C(H) {
      function Y(ae, re, j, L, Z, F) {
        var V = ae[re], J = _(V);
        if (J !== H) {
          var Q = G(V);
          return new u(
            "Invalid " + L + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + j + "`, expected ") + ("`" + H + "`."),
            { expectedType: H }
          );
        }
        return null;
      }
      return y(Y);
    }
    function T() {
      return y(s);
    }
    function v(H) {
      function Y(ae, re, j, L, Z) {
        if (typeof H != "function")
          return new u("Property `" + Z + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var F = ae[re];
        if (!Array.isArray(F)) {
          var V = _(F);
          return new u("Invalid " + L + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected an array."));
        }
        for (var J = 0; J < F.length; J++) {
          var Q = H(F, J, j, L, Z + "[" + J + "]", n);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return y(Y);
    }
    function x() {
      function H(Y, ae, re, j, L) {
        var Z = Y[ae];
        if (!l(Z)) {
          var F = _(Z);
          return new u("Invalid " + j + " `" + L + "` of type " + ("`" + F + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(H);
    }
    function w() {
      function H(Y, ae, re, j, L) {
        var Z = Y[ae];
        if (!e.isValidElementType(Z)) {
          var F = _(Z);
          return new u("Invalid " + j + " `" + L + "` of type " + ("`" + F + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(H);
    }
    function k(H) {
      function Y(ae, re, j, L, Z) {
        if (!(ae[re] instanceof H)) {
          var F = H.name || g, V = K(ae[re]);
          return new u("Invalid " + L + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return y(Y);
    }
    function R(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function Y(ae, re, j, L, Z) {
        for (var F = ae[re], V = 0; V < H.length; V++)
          if (b(F, H[V]))
            return null;
        var J = JSON.stringify(H, function(le, B) {
          var xe = G(B);
          return xe === "symbol" ? String(B) : B;
        });
        return new u("Invalid " + L + " `" + Z + "` of value `" + String(F) + "` " + ("supplied to `" + j + "`, expected one of " + J + "."));
      }
      return y(Y);
    }
    function $(H) {
      function Y(ae, re, j, L, Z) {
        if (typeof H != "function")
          return new u("Property `" + Z + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var F = ae[re], V = _(F);
        if (V !== "object")
          return new u("Invalid " + L + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected an object."));
        for (var J in F)
          if (r(F, J)) {
            var Q = H(F, J, j, L, Z + "." + J, n);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return y(Y);
    }
    function I(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var Y = 0; Y < H.length; Y++) {
        var ae = H[Y];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(ae) + " at index " + Y + "."
          ), s;
      }
      function re(j, L, Z, F, V) {
        for (var J = [], Q = 0; Q < H.length; Q++) {
          var le = H[Q], B = le(j, L, Z, F, V, n);
          if (B == null)
            return null;
          B.data && r(B.data, "expectedType") && J.push(B.data.expectedType);
        }
        var xe = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new u("Invalid " + F + " `" + V + "` supplied to " + ("`" + Z + "`" + xe + "."));
      }
      return y(re);
    }
    function m() {
      function H(Y, ae, re, j, L) {
        return W(Y[ae]) ? null : new u("Invalid " + j + " `" + L + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return y(H);
    }
    function P(H, Y, ae, re, j) {
      return new u(
        (H || "React class") + ": " + Y + " type `" + ae + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function M(H) {
      function Y(ae, re, j, L, Z) {
        var F = ae[re], V = _(F);
        if (V !== "object")
          return new u("Invalid " + L + " `" + Z + "` of type `" + V + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var J in H) {
          var Q = H[J];
          if (typeof Q != "function")
            return P(j, L, Z, J, G(Q));
          var le = Q(F, J, j, L, Z + "." + J, n);
          if (le)
            return le;
        }
        return null;
      }
      return y(Y);
    }
    function N(H) {
      function Y(ae, re, j, L, Z) {
        var F = ae[re], V = _(F);
        if (V !== "object")
          return new u("Invalid " + L + " `" + Z + "` of type `" + V + "` " + ("supplied to `" + j + "`, expected `object`."));
        var J = t({}, ae[re], H);
        for (var Q in J) {
          var le = H[Q];
          if (r(H, Q) && typeof le != "function")
            return P(j, L, Z, Q, G(le));
          if (!le)
            return new u(
              "Invalid " + L + " `" + Z + "` key `" + Q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(ae[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(H), null, "  ")
            );
          var B = le(F, Q, j, L, Z + "." + Q, n);
          if (B)
            return B;
        }
        return null;
      }
      return y(Y);
    }
    function W(H) {
      switch (typeof H) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !H;
        case "object":
          if (Array.isArray(H))
            return H.every(W);
          if (H === null || l(H))
            return !0;
          var Y = p(H);
          if (Y) {
            var ae = Y.call(H), re;
            if (Y !== H.entries) {
              for (; !(re = ae.next()).done; )
                if (!W(re.value))
                  return !1;
            } else
              for (; !(re = ae.next()).done; ) {
                var j = re.value;
                if (j && !W(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(H, Y) {
      return H === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
    }
    function _(H) {
      var Y = typeof H;
      return Array.isArray(H) ? "array" : H instanceof RegExp ? "object" : A(Y, H) ? "symbol" : Y;
    }
    function G(H) {
      if (typeof H > "u" || H === null)
        return "" + H;
      var Y = _(H);
      if (Y === "object") {
        if (H instanceof Date)
          return "date";
        if (H instanceof RegExp)
          return "regexp";
      }
      return Y;
    }
    function oe(H) {
      var Y = G(H);
      switch (Y) {
        case "array":
        case "object":
          return "an " + Y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Y;
        default:
          return Y;
      }
    }
    function K(H) {
      return !H.constructor || !H.constructor.name ? g : H.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, xa;
}
var wa, Tl;
function rg() {
  if (Tl) return wa;
  Tl = 1;
  var e = bs();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, wa = function() {
    function r(s, l, c, d, f, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, wa;
}
if (process.env.NODE_ENV !== "production") {
  var og = ms, ig = !0;
  Va.exports = ng()(og.isElement, ig);
} else
  Va.exports = rg()();
var ag = Va.exports;
const o = /* @__PURE__ */ Kf(ag);
function sg(e) {
  return e == null || Object.keys(e).length === 0;
}
function $u(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(sg(i) ? n : i) : t;
  return /* @__PURE__ */ E.jsx(Uh, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && ($u.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v6.4.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Mu(e, t) {
  const n = An(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function lg(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Sl = [];
function El(e) {
  return Sl[0] = e, Di(Sl);
}
var Ha = { exports: {} }, Xe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ol;
function cg() {
  if (Ol) return Xe;
  Ol = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.for("react.client.reference");
  function b(u) {
    if (typeof u == "object" && u !== null) {
      var y = u.$$typeof;
      switch (y) {
        case e:
          switch (u = u.type, u) {
            case n:
            case i:
            case r:
            case c:
            case d:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case l:
                case p:
                case f:
                  return u;
                case a:
                  return u;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Xe.ContextConsumer = a, Xe.ContextProvider = s, Xe.Element = e, Xe.ForwardRef = l, Xe.Fragment = n, Xe.Lazy = p, Xe.Memo = f, Xe.Portal = t, Xe.Profiler = i, Xe.StrictMode = r, Xe.Suspense = c, Xe.SuspenseList = d, Xe.isContextConsumer = function(u) {
    return b(u) === a;
  }, Xe.isContextProvider = function(u) {
    return b(u) === s;
  }, Xe.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, Xe.isForwardRef = function(u) {
    return b(u) === l;
  }, Xe.isFragment = function(u) {
    return b(u) === n;
  }, Xe.isLazy = function(u) {
    return b(u) === p;
  }, Xe.isMemo = function(u) {
    return b(u) === f;
  }, Xe.isPortal = function(u) {
    return b(u) === t;
  }, Xe.isProfiler = function(u) {
    return b(u) === i;
  }, Xe.isStrictMode = function(u) {
    return b(u) === r;
  }, Xe.isSuspense = function(u) {
    return b(u) === c;
  }, Xe.isSuspenseList = function(u) {
    return b(u) === d;
  }, Xe.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === i || u === r || u === c || u === d || u === g || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === h || u.getModuleId !== void 0);
  }, Xe.typeOf = b, Xe;
}
var Ze = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl;
function ug() {
  return Rl || (Rl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var y = u.$$typeof;
        switch (y) {
          case t:
            switch (u = u.type, u) {
              case r:
              case a:
              case i:
              case d:
              case f:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case g:
                  case p:
                    return u;
                  case s:
                    return u;
                  default:
                    return y;
                }
            }
          case n:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
    Ze.ContextConsumer = s, Ze.ContextProvider = l, Ze.Element = t, Ze.ForwardRef = c, Ze.Fragment = r, Ze.Lazy = g, Ze.Memo = p, Ze.Portal = n, Ze.Profiler = a, Ze.StrictMode = i, Ze.Suspense = d, Ze.SuspenseList = f, Ze.isContextConsumer = function(u) {
      return e(u) === s;
    }, Ze.isContextProvider = function(u) {
      return e(u) === l;
    }, Ze.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, Ze.isForwardRef = function(u) {
      return e(u) === c;
    }, Ze.isFragment = function(u) {
      return e(u) === r;
    }, Ze.isLazy = function(u) {
      return e(u) === g;
    }, Ze.isMemo = function(u) {
      return e(u) === p;
    }, Ze.isPortal = function(u) {
      return e(u) === n;
    }, Ze.isProfiler = function(u) {
      return e(u) === a;
    }, Ze.isStrictMode = function(u) {
      return e(u) === i;
    }, Ze.isSuspense = function(u) {
      return e(u) === d;
    }, Ze.isSuspenseList = function(u) {
      return e(u) === f;
    }, Ze.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === a || u === i || u === d || u === f || u === h || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === p || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === b || u.getModuleId !== void 0);
    }, Ze.typeOf = e;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? Ha.exports = cg() : Ha.exports = ug();
var ui = Ha.exports;
function $n(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Nu(e) {
  if (/* @__PURE__ */ S.isValidElement(e) || ui.isValidElementType(e) || !$n(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Nu(e[n]);
  }), t;
}
function Dt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return $n(e) && $n(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ S.isValidElement(t[i]) || ui.isValidElementType(t[i]) ? r[i] = t[i] : $n(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && $n(e[i]) ? r[i] = Dt(e[i], t[i], n) : n.clone ? r[i] = $n(t[i]) ? Nu(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const dg = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function fg(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5,
    ...i
  } = e, a = dg(t), s = Object.keys(a);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - r / 100}${n})`;
  }
  function d(g, h) {
    const b = s.indexOf(h);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : h) - r / 100}${n})`;
  }
  function f(g) {
    return s.indexOf(g) + 1 < s.length ? d(g, s[s.indexOf(g) + 1]) : l(g);
  }
  function p(g) {
    const h = s.indexOf(g);
    return h === 0 ? l(s[1]) : h === s.length - 1 ? c(s[h]) : d(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: l,
    down: c,
    between: d,
    only: f,
    not: p,
    unit: n,
    ...i
  };
}
function pg(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    var s, l;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((s = r.match(a)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(a)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((r, i) => {
    const a = t[i];
    return delete r[i], r[i] = a, r;
  }, {
    ...t
  }) : t;
}
function mg(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function hg(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : jn(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(a);
}
function gg(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function n(a, s) {
    a.up = (...l) => t(e.breakpoints.up(...l), s), a.down = (...l) => t(e.breakpoints.down(...l), s), a.between = (...l) => t(e.breakpoints.between(...l), s), a.only = (...l) => t(e.breakpoints.only(...l), s), a.not = (...l) => {
      const c = t(e.breakpoints.not(...l), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, i = (a) => (n(r, a), r);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const bg = {
  borderRadius: 4
}, rr = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function so(e, t) {
  return t ? Dt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ai = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Pl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ai[e]}px)`
}, yg = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ai[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Un(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || Pl;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || Pl;
    return Object.keys(t).reduce((s, l) => {
      if (mg(a.keys, l)) {
        const c = hg(r.containerQueries ? r : yg, l);
        c && (s[c] = n(t[l], l));
      } else if (Object.keys(a.values || Ai).includes(l)) {
        const c = a.up(l);
        s[c] = n(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function vg(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function xg(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function ce(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : jn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ji(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function di(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = ji(e, n) || r, t && (i = t(i, r, e)), i;
}
function xt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, d = ji(c, r) || {};
    return Un(s, l, (p) => {
      let g = di(d, i, p);
      return p === g && typeof p == "string" && (g = di(d, i, `${t}${p === "default" ? "" : ce(p)}`, p)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: rr
  } : {}, a.filterProps = [t], a;
}
function wg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Cg = {
  m: "margin",
  p: "padding"
}, Tg = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Sg = wg((e) => {
  if (e.length > 2)
    if (kl[e])
      e = kl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Cg[t], i = Tg[n] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Fi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _i = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Eg = [...Fi, ..._i];
function ko(e, t, n, r) {
  const i = ji(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), typeof i == "string" ? `calc(${a} * ${i})` : i * a) : Array.isArray(i) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[s];
    return a >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ys(e) {
  return ko(e, "spacing", 8, "spacing");
}
function Io(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Og(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Io(t, n), r), {});
}
function Rg(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = Sg(n), a = Og(i, r), s = e[n];
  return Un(e, s, a);
}
function Du(e, t) {
  const n = ys(e.theme);
  return Object.keys(e).map((r) => Rg(e, t, r, n)).reduce(so, {});
}
function mt(e) {
  return Du(e, Fi);
}
mt.propTypes = process.env.NODE_ENV !== "production" ? Fi.reduce((e, t) => (e[t] = rr, e), {}) : {};
mt.filterProps = Fi;
function ht(e) {
  return Du(e, _i);
}
ht.propTypes = process.env.NODE_ENV !== "production" ? _i.reduce((e, t) => (e[t] = rr, e), {}) : {};
ht.filterProps = _i;
process.env.NODE_ENV !== "production" && Eg.reduce((e, t) => (e[t] = rr, e), {});
function Au(e = 8, t = ys({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function Li(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, a) => t[a] ? so(i, t[a](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function pn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function yn(e, t) {
  return xt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Pg = yn("border", pn), kg = yn("borderTop", pn), Ig = yn("borderRight", pn), $g = yn("borderBottom", pn), Mg = yn("borderLeft", pn), Ng = yn("borderColor"), Dg = yn("borderTopColor"), Ag = yn("borderRightColor"), jg = yn("borderBottomColor"), Fg = yn("borderLeftColor"), _g = yn("outline", pn), Lg = yn("outlineColor"), Bi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ko(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Io(t, r)
    });
    return Un(e, e.borderRadius, n);
  }
  return null;
};
Bi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: rr
} : {};
Bi.filterProps = ["borderRadius"];
Li(Pg, kg, Ig, $g, Mg, Ng, Dg, Ag, jg, Fg, Bi, _g, Lg);
const zi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ko(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Io(t, r)
    });
    return Un(e, e.gap, n);
  }
  return null;
};
zi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: rr
} : {};
zi.filterProps = ["gap"];
const Wi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ko(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Io(t, r)
    });
    return Un(e, e.columnGap, n);
  }
  return null;
};
Wi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: rr
} : {};
Wi.filterProps = ["columnGap"];
const Vi = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ko(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Io(t, r)
    });
    return Un(e, e.rowGap, n);
  }
  return null;
};
Vi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: rr
} : {};
Vi.filterProps = ["rowGap"];
const Bg = xt({
  prop: "gridColumn"
}), zg = xt({
  prop: "gridRow"
}), Wg = xt({
  prop: "gridAutoFlow"
}), Vg = xt({
  prop: "gridAutoColumns"
}), Hg = xt({
  prop: "gridAutoRows"
}), Ug = xt({
  prop: "gridTemplateColumns"
}), Yg = xt({
  prop: "gridTemplateRows"
}), qg = xt({
  prop: "gridTemplateAreas"
}), Gg = xt({
  prop: "gridArea"
});
Li(zi, Wi, Vi, Bg, zg, Wg, Vg, Hg, Ug, Yg, qg, Gg);
function Or(e, t) {
  return t === "grey" ? t : e;
}
const Kg = xt({
  prop: "color",
  themeKey: "palette",
  transform: Or
}), Xg = xt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Or
}), Zg = xt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Or
});
Li(Kg, Xg, Zg);
function en(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Qg = xt({
  prop: "width",
  transform: en
}), vs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const r = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || Ai[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: en(n)
      };
    };
    return Un(e, e.maxWidth, t);
  }
  return null;
};
vs.filterProps = ["maxWidth"];
const Jg = xt({
  prop: "minWidth",
  transform: en
}), eb = xt({
  prop: "height",
  transform: en
}), tb = xt({
  prop: "maxHeight",
  transform: en
}), nb = xt({
  prop: "minHeight",
  transform: en
});
xt({
  prop: "size",
  cssProperty: "width",
  transform: en
});
xt({
  prop: "size",
  cssProperty: "height",
  transform: en
});
const rb = xt({
  prop: "boxSizing"
});
Li(Qg, vs, Jg, eb, tb, nb, rb);
const $o = {
  // borders
  border: {
    themeKey: "borders",
    transform: pn
  },
  borderTop: {
    themeKey: "borders",
    transform: pn
  },
  borderRight: {
    themeKey: "borders",
    transform: pn
  },
  borderBottom: {
    themeKey: "borders",
    transform: pn
  },
  borderLeft: {
    themeKey: "borders",
    transform: pn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: pn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Bi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Or
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Or
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Or
  },
  // spacing
  p: {
    style: ht
  },
  pt: {
    style: ht
  },
  pr: {
    style: ht
  },
  pb: {
    style: ht
  },
  pl: {
    style: ht
  },
  px: {
    style: ht
  },
  py: {
    style: ht
  },
  padding: {
    style: ht
  },
  paddingTop: {
    style: ht
  },
  paddingRight: {
    style: ht
  },
  paddingBottom: {
    style: ht
  },
  paddingLeft: {
    style: ht
  },
  paddingX: {
    style: ht
  },
  paddingY: {
    style: ht
  },
  paddingInline: {
    style: ht
  },
  paddingInlineStart: {
    style: ht
  },
  paddingInlineEnd: {
    style: ht
  },
  paddingBlock: {
    style: ht
  },
  paddingBlockStart: {
    style: ht
  },
  paddingBlockEnd: {
    style: ht
  },
  m: {
    style: mt
  },
  mt: {
    style: mt
  },
  mr: {
    style: mt
  },
  mb: {
    style: mt
  },
  ml: {
    style: mt
  },
  mx: {
    style: mt
  },
  my: {
    style: mt
  },
  margin: {
    style: mt
  },
  marginTop: {
    style: mt
  },
  marginRight: {
    style: mt
  },
  marginBottom: {
    style: mt
  },
  marginLeft: {
    style: mt
  },
  marginX: {
    style: mt
  },
  marginY: {
    style: mt
  },
  marginInline: {
    style: mt
  },
  marginInlineStart: {
    style: mt
  },
  marginInlineEnd: {
    style: mt
  },
  marginBlock: {
    style: mt
  },
  marginBlockStart: {
    style: mt
  },
  marginBlockEnd: {
    style: mt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: zi
  },
  rowGap: {
    style: Vi
  },
  columnGap: {
    style: Wi
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: en
  },
  maxWidth: {
    style: vs
  },
  minWidth: {
    transform: en
  },
  height: {
    transform: en
  },
  maxHeight: {
    transform: en
  },
  minHeight: {
    transform: en
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ob(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ib(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ab() {
  function e(n, r, i, a) {
    const s = {
      [n]: r,
      theme: i
    }, l = a[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: d,
      transform: f,
      style: p
    } = l;
    if (r == null)
      return null;
    if (d === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const g = ji(i, d) || {};
    return p ? p(s) : Un(s, r, (b) => {
      let u = di(g, f, b);
      return b === u && typeof b == "string" && (u = di(g, f, `${n}${b === "default" ? "" : ce(b)}`, b)), c === !1 ? u : {
        [c]: u
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: i = {}
    } = n || {};
    if (!r)
      return null;
    const a = i.unstable_sxConfig ?? $o;
    function s(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const d = vg(i.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(c).forEach((g) => {
        const h = ib(c[g], i);
        if (h != null)
          if (typeof h == "object")
            if (a[g])
              p = so(p, e(g, h, i, a));
            else {
              const b = Un({
                theme: i
              }, h, (u) => ({
                [g]: u
              }));
              ob(b, h) ? p[g] = t({
                sx: h,
                theme: i
              }) : p = so(p, b);
            }
          else
            p = so(p, e(g, h, i, a));
      }), pg(i, xg(f, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const dr = ab();
dr.filterProps = ["sx"];
function sb(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function xs(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = fg(n), c = Au(i);
  let d = Dt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: c,
    shape: {
      ...bg,
      ...a
    }
  }, s);
  return d = gg(d), d.applyStyles = sb, d = t.reduce((f, p) => Dt(f, p), d), d.unstable_sxConfig = {
    ...$o,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return dr({
      sx: p,
      theme: this
    });
  }, d;
}
function lb(e) {
  return Object.keys(e).length === 0;
}
function cb(e = null) {
  const t = S.useContext(hs);
  return !t || lb(t) ? e : t;
}
const ub = xs();
function ws(e = ub) {
  return cb(e);
}
function ju({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ws(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ E.jsx($u, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (ju.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const db = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? $o;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function fb(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = db(n);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...s) => {
    const l = t(...s);
    return $n(l) ? {
      ...r,
      ...l
    } : r;
  } : a = {
    ...r,
    ...t
  }, {
    ...i,
    sx: a
  };
}
const Il = (e) => e, pb = () => {
  let e = Il;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Il;
    }
  };
}, Fu = pb();
function mb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = Mu("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(dr);
  return /* @__PURE__ */ S.forwardRef(function(c, d) {
    const f = ws(n), {
      className: p,
      component: g = "div",
      ...h
    } = fb(c);
    return /* @__PURE__ */ E.jsx(a, {
      as: g,
      ref: d,
      className: ge(p, i ? i(r) : r),
      theme: t && f[t] || f,
      ...h
    });
  });
}
const hb = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ze(e, t, n = "Mui") {
  const r = hb[t];
  return r ? `${n}-${r}` : `${Fu.generate(e)}-${t}`;
}
function je(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ze(e, i, n);
  }), r;
}
function _u(e, t = "") {
  return e.displayName || e.name || t;
}
function $l(e, t, n) {
  const r = _u(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function gb(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return _u(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ui.ForwardRef:
          return $l(e, e.render, "ForwardRef");
        case ui.Memo:
          return $l(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Lu(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: El(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = El(i.style));
  }), r;
}
const bb = xs();
function Ca(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function yb(e) {
  return e ? (t, n) => n[e] : null;
}
function vb(e, t, n) {
  e.theme = Tb(e.theme) ? n : e.theme[t] || e.theme;
}
function ni(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => ni(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed)
      r = n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      r = a;
    }
    return Bu(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Bu(e, t, n = []) {
  var i;
  let r;
  e: for (let a = 0; a < t.length; a += 1) {
    const s = t[a];
    if (typeof s.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(r))
        continue;
    } else
      for (const l in s.props)
        if (e[l] !== s.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== s.props[l])
          continue e;
    typeof s.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(s.style(r))) : n.push(s.style);
  }
  return n;
}
function xb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = bb,
    rootShouldForwardProp: r = Ca,
    slotShouldForwardProp: i = Ca
  } = e;
  function a(l) {
    vb(l, t, n);
  }
  return (l, c = {}) => {
    lg(l, (w) => w.filter((k) => k !== dr));
    const {
      name: d,
      slot: f,
      skipVariantsResolver: p,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = yb(zu(f)),
      ...b
    } = c, u = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), y = g || !1;
    let C = Ca;
    f === "Root" || f === "root" ? C = r : f ? C = i : Sb(l) && (C = void 0);
    const T = Mu(l, {
      shouldForwardProp: C,
      label: Cb(d, f),
      ...b
    }), v = (w) => {
      if (typeof w == "function" && w.__emotion_real !== w)
        return function(R) {
          return ni(R, w);
        };
      if ($n(w)) {
        const k = Lu(w);
        return k.variants ? function($) {
          return ni($, k);
        } : k.style;
      }
      return w;
    }, x = (...w) => {
      const k = [], R = w.map(v), $ = [];
      if (k.push(a), d && h && $.push(function(M) {
        var _, G;
        const W = (G = (_ = M.theme.components) == null ? void 0 : _[d]) == null ? void 0 : G.styleOverrides;
        if (!W)
          return null;
        const A = {};
        for (const oe in W)
          A[oe] = ni(M, W[oe]);
        return h(M, A);
      }), d && !u && $.push(function(M) {
        var A, _;
        const N = M.theme, W = (_ = (A = N == null ? void 0 : N.components) == null ? void 0 : A[d]) == null ? void 0 : _.variants;
        return W ? Bu(M, W) : null;
      }), y || $.push(dr), Array.isArray(R[0])) {
        const P = R.shift(), M = new Array(k.length).fill(""), N = new Array($.length).fill("");
        let W;
        W = [...M, ...P, ...N], W.raw = [...M, ...P.raw, ...N], k.unshift(W);
      }
      const I = [...k, ...R, ...$], m = T(...I);
      return l.muiName && (m.muiName = l.muiName), process.env.NODE_ENV !== "production" && (m.displayName = wb(d, f, l)), m;
    };
    return T.withConfig && (x.withConfig = T.withConfig), x;
  };
}
function wb(e, t, n) {
  return e ? `${e}${ce(t || "")}` : `Styled(${gb(n)})`;
}
function Cb(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${zu(t || "Root")}`), n;
}
function Tb(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Sb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function zu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Ua(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const i = r;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], s = t[i];
        if (!s)
          n[i] = a || {};
        else if (!a)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const c = l;
              n[i][c] = Ua(a[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Fn = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function Eb(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Cs(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Eb(e, t, n);
}
function Ob(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function er(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return er(Ob(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : jn(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : jn(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Rb = (e) => {
  const t = er(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, to = (e, t) => {
  try {
    return Rb(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Hi(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Wu(e) {
  e = er(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (d, f = (d + n / 30) % 12) => i - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Hi({
    type: l,
    values: c
  });
}
function Ya(e) {
  e = er(e);
  let t = e.type === "hsl" || e.type === "hsla" ? er(Wu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ml(e, t) {
  const n = Ya(e), r = Ya(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function rt(e, t) {
  return e = er(e), t = Cs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Hi(e);
}
function Ho(e, t, n) {
  try {
    return rt(e, t);
  } catch {
    return e;
  }
}
function Ui(e, t) {
  if (e = er(e), t = Cs(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Hi(e);
}
function tt(e, t, n) {
  try {
    return Ui(e, t);
  } catch {
    return e;
  }
}
function Yi(e, t) {
  if (e = er(e), t = Cs(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Hi(e);
}
function nt(e, t, n) {
  try {
    return Yi(e, t);
  } catch {
    return e;
  }
}
function Pb(e, t = 0.15) {
  return Ya(e) > 0.5 ? Ui(e, t) : Yi(e, t);
}
function Uo(e, t, n) {
  try {
    return Pb(e, t);
  } catch {
    return e;
  }
}
function Tn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function kb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Vu(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !kb(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Mo = Tn(o.element, Vu);
Mo.isRequired = Tn(o.element.isRequired, Vu);
function Ib(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function $b(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !Ib(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ts = Tn(o.elementType, $b), Mb = "exact-prop: ​";
function Hu(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Mb]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Yn(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const an = o.oneOfType([o.func, o.object]);
function Nl(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Uu(e, t = 166) {
  let n;
  function r(...i) {
    const a = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(a, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Ta(e, t) {
  var n, r, i;
  return /* @__PURE__ */ S.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function rn(e) {
  return e && e.ownerDocument || document;
}
function qn(e) {
  return rn(e).defaultView || window;
}
function fi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Dl = 0;
function Nb(e) {
  const [t, n] = S.useState(e), r = e || t;
  return S.useEffect(() => {
    t == null && (Dl += 1, n(`mui-${Dl}`));
  }, [t]), r;
}
const Db = {
  ...S
}, Al = Db.useId;
function Mr(e) {
  if (Al !== void 0) {
    const t = Al();
    return e ?? t;
  }
  return Nb(e);
}
function Ab(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function Rr({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = S.useRef(e !== void 0), [a, s] = S.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    S.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: d
    } = S.useRef(t);
    S.useEffect(() => {
      !i && !Object.is(d, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = S.useCallback((d) => {
    i || s(d);
  }, []);
  return [l, c];
}
function Mn(e) {
  const t = S.useRef(e);
  return Fn(() => {
    t.current = e;
  }), S.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Tt(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      fi(n, t);
    });
  }, e);
}
const jl = {};
function Yu(e, t) {
  const n = S.useRef(jl);
  return n.current === jl && (n.current = e(t)), n;
}
const jb = [];
function Fb(e) {
  S.useEffect(e, jb);
}
class Ss {
  constructor() {
    Hr(this, "currentId", null);
    Hr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Hr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Ss();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function qu() {
  const e = Yu(Ss.create).current;
  return Fb(e.disposeEffect), e;
}
function Fl(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Gu(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
const _b = (e) => {
  const t = S.useRef({});
  return S.useEffect(() => {
    t.current = e;
  }), t.current;
};
function Lb(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Ku(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = Lb(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Xu(e, t, ...n) {
  return e[t] === void 0 ? null : Ku(e, t, ...n);
}
function qa() {
  return null;
}
Xu.isRequired = Ku;
qa.isRequired = qa;
const Pr = process.env.NODE_ENV === "production" ? qa : Xu;
function Ve(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const a = e[i];
    let s = "", l = !0;
    for (let c = 0; c < a.length; c += 1) {
      const d = a[c];
      d && (s += (l === !0 ? "" : " ") + t(d), l = !1, n && n[d] && (s += " " + n[d]));
    }
    r[i] = s;
  }
  return r;
}
function Bb(e) {
  return typeof e == "string";
}
function Zu(e, t, n) {
  return e === void 0 || Bb(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Qu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function _l(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ju(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const h = ge(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), b = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, u = {
      ...n,
      ...i,
      ...r
    };
    return h.length > 0 && (u.className = h), Object.keys(b).length > 0 && (u.style = b), {
      props: u,
      internalRef: void 0
    };
  }
  const s = Qu({
    ...i,
    ...r
  }), l = _l(r), c = _l(i), d = t(s), f = ge(d == null ? void 0 : d.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = {
    ...d == null ? void 0 : d.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, g = {
    ...d,
    ...n,
    ...c,
    ...l
  };
  return f.length > 0 && (g.className = f), Object.keys(p).length > 0 && (g.style = p), {
    props: g,
    internalRef: d.ref
  };
}
function ed(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ga(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : ed(n, r), {
    props: l,
    internalRef: c
  } = Ju({
    ...a,
    externalSlotProps: s
  }), d = Tt(c, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Zu(t, {
    ...l,
    ref: d
  }, r);
}
function No(e) {
  var t;
  return parseInt(S.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const zb = /* @__PURE__ */ S.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const Es = () => S.useContext(zb) ?? !1, Wb = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function Vb(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? Ua(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Ua(i, r) : r;
}
function Hb({
  props: e,
  name: t
}) {
  const n = S.useContext(Wb);
  return Vb({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Ll = {
  theme: void 0
};
function Ub(e) {
  let t, n;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== n) && (Ll.theme = i.theme, a = Lu(e(Ll)), t = a, n = i.theme), a;
  };
}
function Yb(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Bl = (e, t, n, r = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, qb = (e, t, n) => {
  function r(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  r(e);
}, Gb = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Sa(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, s = {};
  return qb(
    e,
    (l, c, d) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const f = `--${n ? `${n}-` : ""}${l.join("-")}`, p = Gb(l, c);
        Object.assign(i, {
          [f]: p
        }), Bl(a, l, `var(${f})`, d), Bl(s, l, `var(${f}, ${p})`, d);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: a,
    varsWithDefaults: s
  };
}
function Kb(e, t = {}) {
  const {
    getSelector: n = y,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: d,
    css: f,
    varsWithDefaults: p
  } = Sa(c, t);
  let g = p;
  const h = {}, {
    [l]: b,
    ...u
  } = a;
  if (Object.entries(u || {}).forEach(([v, x]) => {
    const {
      vars: w,
      css: k,
      varsWithDefaults: R
    } = Sa(x, t);
    g = Dt(g, R), h[v] = {
      css: k,
      vars: w
    };
  }), b) {
    const {
      css: v,
      vars: x,
      varsWithDefaults: w
    } = Sa(b, t);
    g = Dt(g, w), h[l] = {
      css: v,
      vars: x
    };
  }
  function y(v, x) {
    var k, R;
    let w = i;
    if (i === "class" && (w = ".%s"), i === "data" && (w = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (w = `[${i}="%s"]`), v) {
      if (w === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((R = (k = a[v]) == null ? void 0 : k.palette) == null ? void 0 : R.mode) || v})`]: {
            ":root": x
          }
        };
      if (w)
        return e.defaultColorScheme === v ? `:root, ${w.replace("%s", String(v))}` : w.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let v = {
        ...d
      };
      return Object.entries(h).forEach(([, {
        vars: x
      }]) => {
        v = Dt(v, x);
      }), v;
    },
    generateStyleSheets: () => {
      var $, I;
      const v = [], x = e.defaultColorScheme || "light";
      function w(m, P) {
        Object.keys(P).length && v.push(typeof m == "string" ? {
          [m]: {
            ...P
          }
        } : m);
      }
      w(n(void 0, {
        ...f
      }), f);
      const {
        [x]: k,
        ...R
      } = h;
      if (k) {
        const {
          css: m
        } = k, P = (I = ($ = a[x]) == null ? void 0 : $.palette) == null ? void 0 : I.mode, M = !r && P ? {
          colorScheme: P,
          ...m
        } : {
          ...m
        };
        w(n(x, {
          ...M
        }), M);
      }
      return Object.entries(R).forEach(([m, {
        css: P
      }]) => {
        var W, A;
        const M = (A = (W = a[m]) == null ? void 0 : W.palette) == null ? void 0 : A.mode, N = !r && M ? {
          colorScheme: M,
          ...P
        } : {
          ...P
        };
        w(n(m, {
          ...N
        }), N);
      }), v;
    }
  };
}
function Xb(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const qi = "$$material", vo = {
  black: "#000",
  white: "#fff"
}, Zb = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, gr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, br = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Gr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, yr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, vr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, xr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function td() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: vo.white,
      default: vo.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Qb = td();
function nd() {
  return {
    text: {
      primary: vo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: vo.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const zl = nd();
function Wl(e, t, n, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yi(e.main, i) : t === "dark" && (e.dark = Ui(e.main, a)));
}
function Jb(e = "light") {
  return e === "dark" ? {
    main: yr[200],
    light: yr[50],
    dark: yr[400]
  } : {
    main: yr[700],
    light: yr[400],
    dark: yr[800]
  };
}
function ey(e = "light") {
  return e === "dark" ? {
    main: gr[200],
    light: gr[50],
    dark: gr[400]
  } : {
    main: gr[500],
    light: gr[300],
    dark: gr[700]
  };
}
function ty(e = "light") {
  return e === "dark" ? {
    main: br[500],
    light: br[300],
    dark: br[700]
  } : {
    main: br[700],
    light: br[400],
    dark: br[800]
  };
}
function ny(e = "light") {
  return e === "dark" ? {
    main: vr[400],
    light: vr[300],
    dark: vr[700]
  } : {
    main: vr[700],
    light: vr[500],
    dark: vr[900]
  };
}
function ry(e = "light") {
  return e === "dark" ? {
    main: xr[400],
    light: xr[300],
    dark: xr[700]
  } : {
    main: xr[800],
    light: xr[500],
    dark: xr[900]
  };
}
function oy(e = "light") {
  return e === "dark" ? {
    main: Gr[400],
    light: Gr[300],
    dark: Gr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Gr[500],
    dark: Gr[900]
  };
}
function Os(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || Jb(t), s = e.secondary || ey(t), l = e.error || ty(t), c = e.info || ny(t), d = e.success || ry(t), f = e.warning || oy(t);
  function p(u) {
    const y = Ml(u, zl.text.primary) >= n ? zl.text.primary : Qb.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Ml(u, y);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${y} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const g = ({
    color: u,
    name: y,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: v = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[C] && (u.main = u[C]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : jn(11, y ? ` (${y})` : "", C));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : jn(12, y ? ` (${y})` : "", JSON.stringify(u.main)));
    return Wl(u, "light", T, r), Wl(u, "dark", v, r), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let h;
  return t === "light" ? h = td() : t === "dark" && (h = nd()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Dt({
    // A collection of common colors.
    common: {
      ...vo
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Zb,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...h
  }, i);
}
function iy(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function ay(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function sy(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Vl = {
  textTransform: "uppercase"
}, Hl = '"Roboto", "Helvetica", "Arial", sans-serif';
function ly(e, t) {
  const {
    fontFamily: n = Hl,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = r / 14, h = f || ((y) => `${y / c * g}rem`), b = (y, C, T, v, x) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: h(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Hl ? {
      letterSpacing: `${sy(v / C)}em`
    } : {},
    ...x,
    ...d
  }), u = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(a, 48, 1.167, 0),
    h4: b(a, 34, 1.235, 0.25),
    h5: b(a, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(a, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(a, 16, 1.5, 0.15),
    body2: b(a, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, Vl),
    caption: b(a, 12, 1.66, 0.4),
    overline: b(a, 12, 2.66, 1, Vl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Dt({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const cy = 0.2, uy = 0.14, dy = 0.12;
function st(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${cy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${uy})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${dy})`].join(",");
}
const fy = ["none", st(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), st(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), st(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), st(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), st(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), st(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), st(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), st(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), st(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), st(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), st(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), st(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), st(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), st(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), st(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), st(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), st(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), st(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), st(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), st(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), st(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), st(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), st(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), st(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], py = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, my = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ul(e) {
  return `${Math.round(e)}ms`;
}
function hy(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function gy(e) {
  const t = {
    ...py,
    ...e.easing
  }, n = {
    ...my,
    ...e.duration
  };
  return {
    getAutoHeightDuration: hy,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...d
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const f = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !f(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((f) => `${f} ${typeof s == "string" ? s : Ul(s)} ${l} ${typeof c == "string" ? c : Ul(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const by = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function yy(e) {
  return $n(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function rd(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !yy(l) || s.startsWith("unstable_") ? delete r[s] : $n(l) && (r[s] = {
        ...l
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ka(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: a = {},
    transitions: s = {},
    typography: l = {},
    shape: c,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : jn(20));
  const f = Os(a), p = xs(e);
  let g = Dt(p, {
    mixins: ay(p.breakpoints, r),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: fy.slice(),
    typography: ly(f, l),
    transitions: gy(s),
    zIndex: {
      ...by
    }
  });
  if (g = Dt(g, d), g = t.reduce((h, b) => Dt(h, b), g), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (u, y) => {
      let C;
      for (C in u) {
        const T = u[C];
        if (h.includes(C) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = ze("", C);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[C] = {};
        }
      }
    };
    Object.keys(g.components).forEach((u) => {
      const y = g.components[u].styleOverrides;
      y && u.startsWith("Mui") && b(y, u);
    });
  }
  return g.unstable_sxConfig = {
    ...$o,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(b) {
    return dr({
      sx: b,
      theme: this
    });
  }, g.toRuntimeSource = rd, g;
}
function Xa(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const vy = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Xa(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function od(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function id(e) {
  return e === "dark" ? vy : [];
}
function xy(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, a = Os(t);
  return {
    palette: a,
    opacity: {
      ...od(a.mode),
      ...n
    },
    overlays: r || id(a.mode),
    ...i
  };
}
function wy(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Cy = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ty = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Cy(e.cssVarPrefix).forEach((l) => {
        s[l] = n[l], delete n[l];
      }), a === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: s
        }
      } : a ? {
        [a.replace("%s", t)]: s,
        [`${r}, ${a.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...s
        }
      };
    }
    if (a && a !== "media")
      return `${r}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return r;
};
function Sy(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function U(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function no(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Wu(e);
}
function Vn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = to(no(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ey(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Rn = (e) => {
  try {
    return e();
  } catch {
  }
}, Oy = (e = "mui") => Yb(e);
function Ea(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = xy({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: a,
    ...s
  } = Ka({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: a,
    opacity: {
      ...od(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || id(i)
  }, s;
}
function Ry(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = wy,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...d
  } = e, f = Object.keys(n)[0], p = r || (n.light && f !== "light" ? "light" : f), g = Oy(a), {
    [p]: h,
    light: b,
    dark: u,
    ...y
  } = n, C = {
    ...y
  };
  let T = h;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : jn(21, p));
  const v = Ea(C, T, d, p);
  b && !C.light && Ea(C, b, void 0, "light"), u && !C.dark && Ea(C, u, void 0, "dark");
  let x = {
    defaultColorScheme: p,
    ...v,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: g,
    colorSchemes: C,
    font: {
      ...iy(v.typography),
      ...v.font
    },
    spacing: Ey(d.spacing)
  };
  Object.keys(x.colorSchemes).forEach((I) => {
    const m = x.colorSchemes[I].palette, P = (M) => {
      const N = M.split("-"), W = N[1], A = N[2];
      return g(M, m[W][A]);
    };
    if (m.mode === "light" && (U(m.common, "background", "#fff"), U(m.common, "onBackground", "#000")), m.mode === "dark" && (U(m.common, "background", "#000"), U(m.common, "onBackground", "#fff")), Sy(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      U(m.Alert, "errorColor", tt(m.error.light, 0.6)), U(m.Alert, "infoColor", tt(m.info.light, 0.6)), U(m.Alert, "successColor", tt(m.success.light, 0.6)), U(m.Alert, "warningColor", tt(m.warning.light, 0.6)), U(m.Alert, "errorFilledBg", P("palette-error-main")), U(m.Alert, "infoFilledBg", P("palette-info-main")), U(m.Alert, "successFilledBg", P("palette-success-main")), U(m.Alert, "warningFilledBg", P("palette-warning-main")), U(m.Alert, "errorFilledColor", Rn(() => m.getContrastText(m.error.main))), U(m.Alert, "infoFilledColor", Rn(() => m.getContrastText(m.info.main))), U(m.Alert, "successFilledColor", Rn(() => m.getContrastText(m.success.main))), U(m.Alert, "warningFilledColor", Rn(() => m.getContrastText(m.warning.main))), U(m.Alert, "errorStandardBg", nt(m.error.light, 0.9)), U(m.Alert, "infoStandardBg", nt(m.info.light, 0.9)), U(m.Alert, "successStandardBg", nt(m.success.light, 0.9)), U(m.Alert, "warningStandardBg", nt(m.warning.light, 0.9)), U(m.Alert, "errorIconColor", P("palette-error-main")), U(m.Alert, "infoIconColor", P("palette-info-main")), U(m.Alert, "successIconColor", P("palette-success-main")), U(m.Alert, "warningIconColor", P("palette-warning-main")), U(m.AppBar, "defaultBg", P("palette-grey-100")), U(m.Avatar, "defaultBg", P("palette-grey-400")), U(m.Button, "inheritContainedBg", P("palette-grey-300")), U(m.Button, "inheritContainedHoverBg", P("palette-grey-A100")), U(m.Chip, "defaultBorder", P("palette-grey-400")), U(m.Chip, "defaultAvatarColor", P("palette-grey-700")), U(m.Chip, "defaultIconColor", P("palette-grey-700")), U(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), U(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), U(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), U(m.LinearProgress, "primaryBg", nt(m.primary.main, 0.62)), U(m.LinearProgress, "secondaryBg", nt(m.secondary.main, 0.62)), U(m.LinearProgress, "errorBg", nt(m.error.main, 0.62)), U(m.LinearProgress, "infoBg", nt(m.info.main, 0.62)), U(m.LinearProgress, "successBg", nt(m.success.main, 0.62)), U(m.LinearProgress, "warningBg", nt(m.warning.main, 0.62)), U(m.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), U(m.Slider, "primaryTrack", nt(m.primary.main, 0.62)), U(m.Slider, "secondaryTrack", nt(m.secondary.main, 0.62)), U(m.Slider, "errorTrack", nt(m.error.main, 0.62)), U(m.Slider, "infoTrack", nt(m.info.main, 0.62)), U(m.Slider, "successTrack", nt(m.success.main, 0.62)), U(m.Slider, "warningTrack", nt(m.warning.main, 0.62));
      const M = Uo(m.background.default, 0.8);
      U(m.SnackbarContent, "bg", M), U(m.SnackbarContent, "color", Rn(() => m.getContrastText(M))), U(m.SpeedDialAction, "fabHoverBg", Uo(m.background.paper, 0.15)), U(m.StepConnector, "border", P("palette-grey-400")), U(m.StepContent, "border", P("palette-grey-400")), U(m.Switch, "defaultColor", P("palette-common-white")), U(m.Switch, "defaultDisabledColor", P("palette-grey-100")), U(m.Switch, "primaryDisabledColor", nt(m.primary.main, 0.62)), U(m.Switch, "secondaryDisabledColor", nt(m.secondary.main, 0.62)), U(m.Switch, "errorDisabledColor", nt(m.error.main, 0.62)), U(m.Switch, "infoDisabledColor", nt(m.info.main, 0.62)), U(m.Switch, "successDisabledColor", nt(m.success.main, 0.62)), U(m.Switch, "warningDisabledColor", nt(m.warning.main, 0.62)), U(m.TableCell, "border", nt(Ho(m.divider, 1), 0.88)), U(m.Tooltip, "bg", Ho(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      U(m.Alert, "errorColor", nt(m.error.light, 0.6)), U(m.Alert, "infoColor", nt(m.info.light, 0.6)), U(m.Alert, "successColor", nt(m.success.light, 0.6)), U(m.Alert, "warningColor", nt(m.warning.light, 0.6)), U(m.Alert, "errorFilledBg", P("palette-error-dark")), U(m.Alert, "infoFilledBg", P("palette-info-dark")), U(m.Alert, "successFilledBg", P("palette-success-dark")), U(m.Alert, "warningFilledBg", P("palette-warning-dark")), U(m.Alert, "errorFilledColor", Rn(() => m.getContrastText(m.error.dark))), U(m.Alert, "infoFilledColor", Rn(() => m.getContrastText(m.info.dark))), U(m.Alert, "successFilledColor", Rn(() => m.getContrastText(m.success.dark))), U(m.Alert, "warningFilledColor", Rn(() => m.getContrastText(m.warning.dark))), U(m.Alert, "errorStandardBg", tt(m.error.light, 0.9)), U(m.Alert, "infoStandardBg", tt(m.info.light, 0.9)), U(m.Alert, "successStandardBg", tt(m.success.light, 0.9)), U(m.Alert, "warningStandardBg", tt(m.warning.light, 0.9)), U(m.Alert, "errorIconColor", P("palette-error-main")), U(m.Alert, "infoIconColor", P("palette-info-main")), U(m.Alert, "successIconColor", P("palette-success-main")), U(m.Alert, "warningIconColor", P("palette-warning-main")), U(m.AppBar, "defaultBg", P("palette-grey-900")), U(m.AppBar, "darkBg", P("palette-background-paper")), U(m.AppBar, "darkColor", P("palette-text-primary")), U(m.Avatar, "defaultBg", P("palette-grey-600")), U(m.Button, "inheritContainedBg", P("palette-grey-800")), U(m.Button, "inheritContainedHoverBg", P("palette-grey-700")), U(m.Chip, "defaultBorder", P("palette-grey-700")), U(m.Chip, "defaultAvatarColor", P("palette-grey-300")), U(m.Chip, "defaultIconColor", P("palette-grey-300")), U(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), U(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), U(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), U(m.LinearProgress, "primaryBg", tt(m.primary.main, 0.5)), U(m.LinearProgress, "secondaryBg", tt(m.secondary.main, 0.5)), U(m.LinearProgress, "errorBg", tt(m.error.main, 0.5)), U(m.LinearProgress, "infoBg", tt(m.info.main, 0.5)), U(m.LinearProgress, "successBg", tt(m.success.main, 0.5)), U(m.LinearProgress, "warningBg", tt(m.warning.main, 0.5)), U(m.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), U(m.Slider, "primaryTrack", tt(m.primary.main, 0.5)), U(m.Slider, "secondaryTrack", tt(m.secondary.main, 0.5)), U(m.Slider, "errorTrack", tt(m.error.main, 0.5)), U(m.Slider, "infoTrack", tt(m.info.main, 0.5)), U(m.Slider, "successTrack", tt(m.success.main, 0.5)), U(m.Slider, "warningTrack", tt(m.warning.main, 0.5));
      const M = Uo(m.background.default, 0.98);
      U(m.SnackbarContent, "bg", M), U(m.SnackbarContent, "color", Rn(() => m.getContrastText(M))), U(m.SpeedDialAction, "fabHoverBg", Uo(m.background.paper, 0.15)), U(m.StepConnector, "border", P("palette-grey-600")), U(m.StepContent, "border", P("palette-grey-600")), U(m.Switch, "defaultColor", P("palette-grey-300")), U(m.Switch, "defaultDisabledColor", P("palette-grey-600")), U(m.Switch, "primaryDisabledColor", tt(m.primary.main, 0.55)), U(m.Switch, "secondaryDisabledColor", tt(m.secondary.main, 0.55)), U(m.Switch, "errorDisabledColor", tt(m.error.main, 0.55)), U(m.Switch, "infoDisabledColor", tt(m.info.main, 0.55)), U(m.Switch, "successDisabledColor", tt(m.success.main, 0.55)), U(m.Switch, "warningDisabledColor", tt(m.warning.main, 0.55)), U(m.TableCell, "border", tt(Ho(m.divider, 1), 0.68)), U(m.Tooltip, "bg", Ho(m.grey[700], 0.92));
    }
    Vn(m.background, "default"), Vn(m.background, "paper"), Vn(m.common, "background"), Vn(m.common, "onBackground"), Vn(m, "divider"), Object.keys(m).forEach((M) => {
      const N = m[M];
      M !== "tonalOffset" && N && typeof N == "object" && (N.main && U(m[M], "mainChannel", to(no(N.main))), N.light && U(m[M], "lightChannel", to(no(N.light))), N.dark && U(m[M], "darkChannel", to(no(N.dark))), N.contrastText && U(m[M], "contrastTextChannel", to(no(N.contrastText))), M === "text" && (Vn(m[M], "primary"), Vn(m[M], "secondary")), M === "action" && (N.active && Vn(m[M], "active"), N.selected && Vn(m[M], "selected")));
    });
  }), x = t.reduce((I, m) => Dt(I, m), x);
  const w = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: Ty(x)
  }, {
    vars: k,
    generateThemeVars: R,
    generateStyleSheets: $
  } = Kb(x, w);
  return x.vars = k, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([I, m]) => {
    x[I] = m;
  }), x.generateThemeVars = R, x.generateStyleSheets = $, x.generateSpacing = function() {
    return Au(d.spacing, ys(this));
  }, x.getColorSchemeSelector = Xb(l), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = s, x.unstable_sxConfig = {
    ...$o,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, x.unstable_sx = function(m) {
    return dr({
      sx: m,
      theme: this
    });
  }, x.toRuntimeSource = rd, x;
}
function Yl(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Os({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ad(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = n == null ? void 0 : n.mode,
    ...s
  } = e, l = a || "light", c = i == null ? void 0 : i[l], d = {
    ...i,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Ka(e, ...t);
    let f = n;
    "palette" in e || d[l] && (d[l] !== !0 ? f = d[l].palette : l === "dark" && (f = {
      mode: "dark"
    }));
    const p = Ka({
      ...e,
      palette: f
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, Yl(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, Yl(p, "light", d.light)), p;
  }
  return !n && !("light" in d) && l === "light" && (d.light = !0), Ry({
    ...s,
    colorSchemes: d,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Rs = ad();
function Ps() {
  const e = ws(Rs);
  return process.env.NODE_ENV !== "production" && S.useDebugValue(e), e[qi] || e;
}
function sd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const sn = (e) => sd(e) && e !== "classes", ue = xb({
  themeId: qi,
  defaultTheme: Rs,
  rootShouldForwardProp: sn
}), Py = je("MuiBox", ["root"]), ky = ad(), ld = mb({
  themeId: qi,
  defaultTheme: ky,
  defaultClassName: Py.root,
  generateClassName: Fu.generate
});
process.env.NODE_ENV !== "production" && (ld.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function cd(e) {
  return /* @__PURE__ */ E.jsx(ju, {
    ...e,
    defaultTheme: Rs,
    themeId: qi
  });
}
process.env.NODE_ENV !== "production" && (cd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Iy(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ E.jsx(cd, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function Ge(e) {
  return Hb(e);
}
function Yo(e) {
  return parseInt(e, 10) || 0;
}
const $y = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function My(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ny(e) {
  return My(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const ud = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l,
    ...c
  } = t, {
    current: d
  } = S.useRef(l != null), f = S.useRef(null), p = Tt(n, f), g = S.useRef(null), h = S.useRef(null), b = S.useCallback(() => {
    const T = f.current, v = h.current;
    if (!T || !v)
      return;
    const w = qn(T).getComputedStyle(T);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    v.style.width = w.width, v.value = T.value || t.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
    const k = w.boxSizing, R = Yo(w.paddingBottom) + Yo(w.paddingTop), $ = Yo(w.borderBottomWidth) + Yo(w.borderTopWidth), I = v.scrollHeight;
    v.value = "x";
    const m = v.scrollHeight;
    let P = I;
    a && (P = Math.max(Number(a) * m, P)), i && (P = Math.min(Number(i) * m, P)), P = Math.max(P, m);
    const M = P + (k === "border-box" ? R + $ : 0), N = Math.abs(P - I) <= 1;
    return {
      outerHeightStyle: M,
      overflowing: N
    };
  }, [i, a, t.placeholder]), u = S.useCallback(() => {
    const T = f.current, v = b();
    if (!T || !v || Ny(v))
      return;
    const x = v.outerHeightStyle;
    g.current !== x && (g.current = x, T.style.height = `${x}px`), T.style.overflow = v.overflowing ? "hidden" : "";
  }, [b]), y = S.useRef(-1);
  Fn(() => {
    const T = Uu(() => u()), v = f == null ? void 0 : f.current;
    if (!v)
      return;
    const x = qn(v);
    x.addEventListener("resize", T);
    let w;
    return typeof ResizeObserver < "u" && (w = new ResizeObserver(() => {
      w.unobserve(v), cancelAnimationFrame(y.current), u(), y.current = requestAnimationFrame(() => {
        w.observe(v);
      });
    }), w.observe(v)), () => {
      T.clear(), cancelAnimationFrame(y.current), x.removeEventListener("resize", T), w && w.disconnect();
    };
  }, [b, u]), Fn(() => {
    u();
  });
  const C = (T) => {
    d || u(), r && r(T);
  };
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx("textarea", {
      value: l,
      onChange: C,
      ref: p,
      rows: a,
      style: s,
      ...c
    }), /* @__PURE__ */ E.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: h,
      tabIndex: -1,
      style: {
        ...$y.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (ud.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
function Za(e) {
  return typeof e == "string";
}
function zr({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const Gi = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (Gi.displayName = "FormControlContext");
function pr() {
  return S.useContext(Gi);
}
const Ae = Ub;
function ql(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function pi(e, t = !1) {
  return e && (ql(e.value) && e.value !== "" || t && ql(e.defaultValue) && e.defaultValue !== "");
}
function Dy(e) {
  return e.startAdornment;
}
function Ay(e) {
  return ze("MuiInputBase", e);
}
const Qt = je("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Gl;
const Ki = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ce(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Xi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, jy = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: i,
    endAdornment: a,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: d,
    multiline: f,
    readOnly: p,
    size: g,
    startAdornment: h,
    type: b
  } = e, u = {
    root: ["root", `color${ce(n)}`, r && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", g && g !== "medium" && `size${ce(g)}`, f && "multiline", h && "adornedStart", a && "adornedEnd", d && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", b === "search" && "inputTypeSearch", f && "inputMultiline", g === "small" && "inputSizeSmall", d && "inputHiddenLabel", h && "inputAdornedStart", a && "inputAdornedEnd", p && "readOnly"]
  };
  return Ve(u, Ay, t);
}, Zi = ue("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ki
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Qt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), Qi = ue("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Xi
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Qt.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${Qt.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), Kl = Iy({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), Do = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: s,
    className: l,
    color: c,
    components: d = {},
    componentsProps: f = {},
    defaultValue: p,
    disabled: g,
    disableInjectingGlobalStyles: h,
    endAdornment: b,
    error: u,
    fullWidth: y = !1,
    id: C,
    inputComponent: T = "input",
    inputProps: v = {},
    inputRef: x,
    margin: w,
    maxRows: k,
    minRows: R,
    multiline: $ = !1,
    name: I,
    onBlur: m,
    onChange: P,
    onClick: M,
    onFocus: N,
    onKeyDown: W,
    onKeyUp: A,
    placeholder: _,
    readOnly: G,
    renderSuffix: oe,
    rows: K,
    size: H,
    slotProps: Y = {},
    slots: ae = {},
    startAdornment: re,
    type: j = "text",
    value: L,
    ...Z
  } = r, F = v.value != null ? v.value : L, {
    current: V
  } = S.useRef(F != null), J = S.useRef(), Q = S.useCallback((Se) => {
    process.env.NODE_ENV !== "production" && Se && Se.nodeName !== "INPUT" && !Se.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), le = Tt(J, x, v.ref, Q), [B, xe] = S.useState(!1), pe = pr();
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    if (pe)
      return pe.registerEffect();
  }, [pe]);
  const be = zr({
    props: r,
    muiFormControl: pe,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  be.focused = pe ? pe.focused : B, S.useEffect(() => {
    !pe && g && B && (xe(!1), m && m());
  }, [pe, g, B, m]);
  const Re = pe && pe.onFilled, se = pe && pe.onEmpty, Ie = S.useCallback((Se) => {
    pi(Se) ? Re && Re() : se && se();
  }, [Re, se]);
  Fn(() => {
    V && Ie({
      value: F
    });
  }, [F, Ie, V]);
  const he = (Se) => {
    N && N(Se), v.onFocus && v.onFocus(Se), pe && pe.onFocus ? pe.onFocus(Se) : xe(!0);
  }, Me = (Se) => {
    m && m(Se), v.onBlur && v.onBlur(Se), pe && pe.onBlur ? pe.onBlur(Se) : xe(!1);
  }, Ee = (Se, ...bt) => {
    if (!V) {
      const St = Se.target || J.current;
      if (St == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : jn(1));
      Ie({
        value: St.value
      });
    }
    v.onChange && v.onChange(Se, ...bt), P && P(Se, ...bt);
  };
  S.useEffect(() => {
    Ie(J.current);
  }, []);
  const de = (Se) => {
    J.current && Se.currentTarget === Se.target && J.current.focus(), M && M(Se);
  };
  let it = T, We = v;
  $ && it === "input" && (K ? (process.env.NODE_ENV !== "production" && (R || k) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), We = {
    type: void 0,
    minRows: K,
    maxRows: K,
    ...We
  }) : We = {
    type: void 0,
    maxRows: k,
    minRows: R,
    ...We
  }, it = ud);
  const gt = (Se) => {
    Ie(Se.animationName === "mui-auto-fill-cancel" ? J.current : {
      value: "x"
    });
  };
  S.useEffect(() => {
    pe && pe.setAdornedStart(!!re);
  }, [pe, re]);
  const Ot = {
    ...r,
    color: be.color || "primary",
    disabled: be.disabled,
    endAdornment: b,
    error: be.error,
    focused: be.focused,
    formControl: pe,
    fullWidth: y,
    hiddenLabel: be.hiddenLabel,
    multiline: $,
    size: be.size,
    startAdornment: re,
    type: j
  }, lt = jy(Ot), Pt = ae.root || d.Root || Zi, _e = Y.root || f.root || {}, Fe = ae.input || d.Input || Qi;
  return We = {
    ...We,
    ...Y.input ?? f.input
  }, /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [!h && typeof Kl == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Gl || (Gl = /* @__PURE__ */ E.jsx(Kl, {}))), /* @__PURE__ */ E.jsxs(Pt, {
      ..._e,
      ref: n,
      onClick: de,
      ...Z,
      ...!Za(Pt) && {
        ownerState: {
          ...Ot,
          ..._e.ownerState
        }
      },
      className: ge(lt.root, _e.className, l, G && "MuiInputBase-readOnly"),
      children: [re, /* @__PURE__ */ E.jsx(Gi.Provider, {
        value: null,
        children: /* @__PURE__ */ E.jsx(Fe, {
          "aria-invalid": be.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: s,
          defaultValue: p,
          disabled: be.disabled,
          id: C,
          onAnimationStart: gt,
          name: I,
          placeholder: _,
          readOnly: G,
          required: be.required,
          rows: K,
          value: F,
          onKeyDown: W,
          onKeyUp: A,
          type: j,
          ...We,
          ...!Za(Fe) && {
            as: it,
            ownerState: {
              ...Ot,
              ...We.ownerState
            }
          },
          ref: le,
          className: ge(lt.input, We.className, G && "MuiInputBase-readOnly"),
          onBlur: Me,
          onChange: Ee,
          onFocus: he
        })
      }), b, oe ? oe({
        ...be,
        startAdornment: re
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Do.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Ts,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: an,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
function Fy(e) {
  return typeof e.main == "string";
}
function _y(e, t = []) {
  if (!Fy(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function tn(e = []) {
  return ([, t]) => t && _y(t, e);
}
function Ly(e) {
  return ze("MuiInput", e);
}
const Jn = {
  ...Qt,
  ...je("MuiInput", ["root", "underline", "input"])
}, By = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Ly, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, zy = ue(Zi, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ki(e, t), !n.disableUnderline && t.underline];
  }
})(Ae(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Jn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Jn.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Jn.disabled}, .${Jn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Jn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(tn()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), Wy = ue(Qi, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Xi
})({}), Ji = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: i = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: d = !1,
    slotProps: f,
    slots: p = {},
    type: g = "text",
    ...h
  } = r, b = By(r), y = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, C = f ?? s ? Dt(f ?? s, y) : y, T = p.root ?? a.Root ?? zy, v = p.input ?? a.Input ?? Wy;
  return /* @__PURE__ */ E.jsx(Do, {
    slots: {
      root: T,
      input: v
    },
    slotProps: C,
    fullWidth: l,
    inputComponent: c,
    multiline: d,
    ref: n,
    type: g,
    ...h,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (Ji.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: an,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Ji.muiName = "Input";
function Vy(e) {
  return ze("MuiFilledInput", e);
}
const Jt = {
  ...Qt,
  ...je("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Hy(e) {
  return ze("MuiSvgIcon", e);
}
je("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Uy = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ce(t)}`, `fontSize${ce(n)}`]
  };
  return Ve(i, Hy, r);
}, Yy = ue("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ce(n.color)}`], t[`fontSize${ce(n.fontSize)}`]];
  }
})(Ae(({
  theme: e
}) => {
  var t, n, r, i, a, s, l, c, d, f, p, g, h, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (u) => !u.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((s = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((f = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : f.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var y, C;
        return {
          props: {
            color: u
          },
          style: {
            color: (C = (y = (e.vars ?? e).palette) == null ? void 0 : y[u]) == null ? void 0 : C.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (b = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : b.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), mi = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: d,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: g = "0 0 24 24",
    ...h
  } = r, b = /* @__PURE__ */ S.isValidElement(i) && i.type === "svg", u = {
    ...r,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: g,
    hasSvgAsChild: b
  }, y = {};
  f || (y.viewBox = g);
  const C = Uy(u);
  return /* @__PURE__ */ E.jsxs(Yy, {
    as: l,
    className: ge(C.root, a),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...y,
    ...h,
    ...b && i.props,
    ownerState: u,
    children: [b ? i.props.children : i, p ? /* @__PURE__ */ E.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
mi.muiName = "SvgIcon";
function Ln(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ E.jsx(mi, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = mi.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(n));
}
const qy = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: i,
    size: a,
    hiddenLabel: s,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", r && "adornedStart", i && "adornedEnd", a === "small" && `size${ce(a)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, d = Ve(c, Vy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...d
  };
}, Gy = ue(Zi, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ki(e, t), !n.disableUnderline && t.underline];
  }
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", a = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${Jt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Jt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Jt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Jt.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Jt.disabled}, .${Jt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Jt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(tn()).map(([s]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: s
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[s]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: s
      }) => s.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: s,
        size: l
      }) => s.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel && s.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), Ky = ue(Qi, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Xi
})(Ae(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), ea = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: i = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: d = "input",
    multiline: f = !1,
    slotProps: p,
    slots: g = {},
    type: h = "text",
    ...b
  } = r, u = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: d,
    multiline: f,
    type: h
  }, y = qy(r), C = {
    root: {
      ownerState: u
    },
    input: {
      ownerState: u
    }
  }, T = p ?? s ? Dt(C, p ?? s) : C, v = g.root ?? a.Root ?? Gy, x = g.input ?? a.Input ?? Ky;
  return /* @__PURE__ */ E.jsx(Do, {
    slots: {
      root: v,
      input: x
    },
    slotProps: T,
    fullWidth: l,
    inputComponent: d,
    multiline: f,
    ref: n,
    type: h,
    ...b,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (ea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: an,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
ea.muiName = "Input";
var Xl;
const Xy = ue("fieldset", {
  shouldForwardProp: sn
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), Zy = ue("legend", {
  shouldForwardProp: sn
})(Ae(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function dd(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: i,
    notched: a,
    ...s
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: a,
    withLabel: l
  };
  return /* @__PURE__ */ E.jsx(Xy, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...s,
    children: /* @__PURE__ */ E.jsx(Zy, {
      ownerState: c,
      children: l ? /* @__PURE__ */ E.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Xl || (Xl = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (dd.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
function Qy(e) {
  return ze("MuiOutlinedInput", e);
}
const dn = {
  ...Qt,
  ...je("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, Jy = (e) => {
  const {
    classes: t
  } = e, r = Ve({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Qy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, ev = ue(Zi, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ki
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${dn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${dn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${dn.focused} .${dn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(tn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${dn.focused} .${dn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${dn.error} .${dn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${dn.disabled} .${dn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: r
      }) => n.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), tv = ue(dd, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), nv = ue(Qi, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Xi
})(Ae(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), ta = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r;
  const i = Ge({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: a = {},
    fullWidth: s = !1,
    inputComponent: l = "input",
    label: c,
    multiline: d = !1,
    notched: f,
    slots: p = {},
    type: g = "text",
    ...h
  } = i, b = Jy(i), u = pr(), y = zr({
    props: i,
    muiFormControl: u,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...i,
    color: y.color || "primary",
    disabled: y.disabled,
    error: y.error,
    focused: y.focused,
    formControl: u,
    fullWidth: s,
    hiddenLabel: y.hiddenLabel,
    multiline: d,
    size: y.size,
    type: g
  }, T = p.root ?? a.Root ?? ev, v = p.input ?? a.Input ?? nv;
  return /* @__PURE__ */ E.jsx(Do, {
    slots: {
      root: T,
      input: v
    },
    renderSuffix: (x) => /* @__PURE__ */ E.jsx(tv, {
      ownerState: C,
      className: b.notchedOutline,
      label: c != null && c !== "" && y.required ? r || (r = /* @__PURE__ */ E.jsxs(S.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof f < "u" ? f : !!(x.startAdornment || x.filled || x.focused)
    }),
    fullWidth: s,
    inputComponent: l,
    multiline: d,
    ref: n,
    type: g,
    ...h,
    classes: {
      ...b,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (ta.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: an,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
ta.muiName = "Input";
function rv(e) {
  return ze("MuiFormLabel", e);
}
const lo = je("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), ov = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${ce(n)}`, i && "disabled", a && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return Ve(c, rv, t);
}, iv = ue("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(Ae(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(tn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${lo.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${lo.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${lo.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), av = ue("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ae(({
  theme: e
}) => ({
  [`&.${lo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), fd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    color: s,
    component: l = "label",
    disabled: c,
    error: d,
    filled: f,
    focused: p,
    required: g,
    ...h
  } = r, b = pr(), u = zr({
    props: r,
    muiFormControl: b,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), y = {
    ...r,
    color: u.color || "primary",
    component: l,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }, C = ov(y);
  return /* @__PURE__ */ E.jsxs(iv, {
    as: l,
    ownerState: y,
    className: ge(C.root, a),
    ref: n,
    ...h,
    children: [i, u.required && /* @__PURE__ */ E.jsxs(av, {
      ownerState: y,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (fd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function sv(e) {
  return ze("MuiInputLabel", e);
}
je("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const lv = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !a && "animated", i && "shrink", r && r !== "normal" && `size${ce(r)}`, s],
    asterisk: [l && "asterisk"]
  }, d = Ve(c, sv, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...d
  };
}, cv = ue(fd, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${lo.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(Ae(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: r
    }) => t === "filled" && n.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), pd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: a,
    shrink: s,
    variant: l,
    className: c,
    ...d
  } = r, f = pr();
  let p = s;
  typeof p > "u" && f && (p = f.filled || f.focused || f.adornedStart);
  const g = zr({
    props: r,
    muiFormControl: f,
    states: ["size", "variant", "required", "focused"]
  }), h = {
    ...r,
    disableAnimation: i,
    formControl: f,
    shrink: p,
    size: g.size,
    variant: g.variant,
    required: g.required,
    focused: g.focused
  }, b = lv(h);
  return /* @__PURE__ */ E.jsx(cv, {
    "data-shrink": p,
    ref: n,
    className: ge(b.root, c),
    ...d,
    ownerState: h,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (pd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function uv(e) {
  return ze("MuiFormControl", e);
}
je("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const dv = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${ce(n)}`, r && "fullWidth"]
  };
  return Ve(i, uv, t);
}, fv = ue("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${ce(n.margin)}`], n.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), md = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: a,
    color: s = "primary",
    component: l = "div",
    disabled: c = !1,
    error: d = !1,
    focused: f,
    fullWidth: p = !1,
    hiddenLabel: g = !1,
    margin: h = "none",
    required: b = !1,
    size: u = "medium",
    variant: y = "outlined",
    ...C
  } = r, T = {
    ...r,
    color: s,
    component: l,
    disabled: c,
    error: d,
    fullWidth: p,
    hiddenLabel: g,
    margin: h,
    required: b,
    size: u,
    variant: y
  }, v = dv(T), [x, w] = S.useState(() => {
    let _ = !1;
    return i && S.Children.forEach(i, (G) => {
      if (!Ta(G, ["Input", "Select"]))
        return;
      const oe = Ta(G, ["Select"]) ? G.props.input : G;
      oe && Dy(oe.props) && (_ = !0);
    }), _;
  }), [k, R] = S.useState(() => {
    let _ = !1;
    return i && S.Children.forEach(i, (G) => {
      Ta(G, ["Input", "Select"]) && (pi(G.props, !0) || pi(G.props.inputProps, !0)) && (_ = !0);
    }), _;
  }), [$, I] = S.useState(!1);
  c && $ && I(!1);
  const m = f !== void 0 && !c ? f : $;
  let P;
  const M = S.useRef(!1);
  process.env.NODE_ENV !== "production" && (P = () => (M.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), M.current = !0, () => {
    M.current = !1;
  }));
  const N = S.useCallback(() => {
    R(!0);
  }, []), W = S.useCallback(() => {
    R(!1);
  }, []), A = S.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: w,
    color: s,
    disabled: c,
    error: d,
    filled: k,
    focused: m,
    fullWidth: p,
    hiddenLabel: g,
    size: u,
    onBlur: () => {
      I(!1);
    },
    onFocus: () => {
      I(!0);
    },
    onEmpty: W,
    onFilled: N,
    registerEffect: P,
    required: b,
    variant: y
  }), [x, s, c, d, k, m, p, g, P, W, N, b, u, y]);
  return /* @__PURE__ */ E.jsx(Gi.Provider, {
    value: A,
    children: /* @__PURE__ */ E.jsx(fv, {
      as: l,
      ownerState: T,
      className: ge(v.root, a),
      ref: n,
      ...C,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (md.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function pv(e) {
  return ze("MuiFormHelperText", e);
}
const Zl = je("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Ql;
const mv = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: i,
    error: a,
    filled: s,
    focused: l,
    required: c
  } = e, d = {
    root: ["root", i && "disabled", a && "error", r && `size${ce(r)}`, n && "contained", l && "focused", s && "filled", c && "required"]
  };
  return Ve(d, pv, t);
}, hv = ue("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ce(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(Ae(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Zl.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Zl.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), hd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: a,
    component: s = "p",
    disabled: l,
    error: c,
    filled: d,
    focused: f,
    margin: p,
    required: g,
    variant: h,
    ...b
  } = r, u = pr(), y = zr({
    props: r,
    muiFormControl: u,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: s,
    contained: y.variant === "filled" || y.variant === "outlined",
    variant: y.variant,
    size: y.size,
    disabled: y.disabled,
    error: y.error,
    filled: y.filled,
    focused: y.focused,
    required: y.required
  };
  delete C.ownerState;
  const T = mv(C);
  return /* @__PURE__ */ E.jsx(hv, {
    as: s,
    className: ge(T.root, a),
    ref: n,
    ...b,
    ownerState: C,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ql || (Ql = /* @__PURE__ */ E.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (hd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
var Qa = { exports: {} }, Qe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jl;
function gv() {
  if (Jl) return Qe;
  Jl = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.for("react.client.reference");
  function b(u) {
    if (typeof u == "object" && u !== null) {
      var y = u.$$typeof;
      switch (y) {
        case e:
          switch (u = u.type, u) {
            case n:
            case i:
            case r:
            case c:
            case d:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case l:
                case p:
                case f:
                  return u;
                case a:
                  return u;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Qe.ContextConsumer = a, Qe.ContextProvider = s, Qe.Element = e, Qe.ForwardRef = l, Qe.Fragment = n, Qe.Lazy = p, Qe.Memo = f, Qe.Portal = t, Qe.Profiler = i, Qe.StrictMode = r, Qe.Suspense = c, Qe.SuspenseList = d, Qe.isContextConsumer = function(u) {
    return b(u) === a;
  }, Qe.isContextProvider = function(u) {
    return b(u) === s;
  }, Qe.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, Qe.isForwardRef = function(u) {
    return b(u) === l;
  }, Qe.isFragment = function(u) {
    return b(u) === n;
  }, Qe.isLazy = function(u) {
    return b(u) === p;
  }, Qe.isMemo = function(u) {
    return b(u) === f;
  }, Qe.isPortal = function(u) {
    return b(u) === t;
  }, Qe.isProfiler = function(u) {
    return b(u) === i;
  }, Qe.isStrictMode = function(u) {
    return b(u) === r;
  }, Qe.isSuspense = function(u) {
    return b(u) === c;
  }, Qe.isSuspenseList = function(u) {
    return b(u) === d;
  }, Qe.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === i || u === r || u === c || u === d || u === g || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === h || u.getModuleId !== void 0);
  }, Qe.typeOf = b, Qe;
}
var Je = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec;
function bv() {
  return ec || (ec = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var y = u.$$typeof;
        switch (y) {
          case t:
            switch (u = u.type, u) {
              case r:
              case a:
              case i:
              case d:
              case f:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case g:
                  case p:
                    return u;
                  case s:
                    return u;
                  default:
                    return y;
                }
            }
          case n:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
    Je.ContextConsumer = s, Je.ContextProvider = l, Je.Element = t, Je.ForwardRef = c, Je.Fragment = r, Je.Lazy = g, Je.Memo = p, Je.Portal = n, Je.Profiler = a, Je.StrictMode = i, Je.Suspense = d, Je.SuspenseList = f, Je.isContextConsumer = function(u) {
      return e(u) === s;
    }, Je.isContextProvider = function(u) {
      return e(u) === l;
    }, Je.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, Je.isForwardRef = function(u) {
      return e(u) === c;
    }, Je.isFragment = function(u) {
      return e(u) === r;
    }, Je.isLazy = function(u) {
      return e(u) === g;
    }, Je.isMemo = function(u) {
      return e(u) === p;
    }, Je.isPortal = function(u) {
      return e(u) === n;
    }, Je.isProfiler = function(u) {
      return e(u) === a;
    }, Je.isStrictMode = function(u) {
      return e(u) === i;
    }, Je.isSuspense = function(u) {
      return e(u) === d;
    }, Je.isSuspenseList = function(u) {
      return e(u) === f;
    }, Je.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === a || u === i || u === d || u === f || u === h || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === p || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === b || u.getModuleId !== void 0);
    }, Je.typeOf = e;
  }()), Je;
}
process.env.NODE_ENV === "production" ? Qa.exports = gv() : Qa.exports = bv();
var ks = Qa.exports;
const hi = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (hi.displayName = "ListContext");
function yv(e) {
  return ze("MuiList", e);
}
je("MuiList", ["root", "padding", "dense", "subheader"]);
const vv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ve({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, yv, t);
}, xv = ue("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), gd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: d,
    ...f
  } = r, p = S.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...r,
    component: s,
    dense: l,
    disablePadding: c
  }, h = vv(g);
  return /* @__PURE__ */ E.jsx(hi.Provider, {
    value: p,
    children: /* @__PURE__ */ E.jsxs(xv, {
      as: s,
      className: ge(h.root, a),
      ref: n,
      ownerState: g,
      ...f,
      children: [d, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (gd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Oa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function tc(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function bd(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Kr(e, t, n, r, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !bd(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const yd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: d = !1,
    onKeyDown: f,
    variant: p = "selectedMenu",
    ...g
  } = t, h = S.useRef(null), b = S.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Fn(() => {
    i && h.current.focus();
  }, [i]), S.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: x
    }) => {
      const w = !h.current.style.width;
      if (v.clientHeight < h.current.clientHeight && w) {
        const k = `${Gu(qn(v))}px`;
        h.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = k, h.current.style.width = `calc(100% + ${k})`;
      }
      return h.current;
    }
  }), []);
  const u = (v) => {
    const x = h.current, w = v.key;
    if (v.ctrlKey || v.metaKey || v.altKey) {
      f && f(v);
      return;
    }
    const R = rn(x).activeElement;
    if (w === "ArrowDown")
      v.preventDefault(), Kr(x, R, d, c, Oa);
    else if (w === "ArrowUp")
      v.preventDefault(), Kr(x, R, d, c, tc);
    else if (w === "Home")
      v.preventDefault(), Kr(x, null, d, c, Oa);
    else if (w === "End")
      v.preventDefault(), Kr(x, null, d, c, tc);
    else if (w.length === 1) {
      const $ = b.current, I = w.toLowerCase(), m = performance.now();
      $.keys.length > 0 && (m - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && I !== $.keys[0] && ($.repeating = !1)), $.lastTime = m, $.keys.push(I);
      const P = R && !$.repeating && bd(R, $);
      $.previousKeyMatched && (P || Kr(x, R, !1, c, Oa, $)) ? v.preventDefault() : $.previousKeyMatched = !1;
    }
    f && f(v);
  }, y = Tt(h, n);
  let C = -1;
  S.Children.forEach(s, (v, x) => {
    if (!/* @__PURE__ */ S.isValidElement(v)) {
      C === x && (C += 1, C >= s.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && ks.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (p === "selectedMenu" && v.props.selected || C === -1) && (C = x), C === x && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (C += 1, C >= s.length && (C = -1));
  });
  const T = S.Children.map(s, (v, x) => {
    if (x === C) {
      const w = {};
      return a && (w.autoFocus = !0), v.props.tabIndex === void 0 && p === "selectedMenu" && (w.tabIndex = 0), /* @__PURE__ */ S.cloneElement(v, w);
    }
    return v;
  });
  return /* @__PURE__ */ E.jsx(gd, {
    role: "menu",
    ref: y,
    className: l,
    onKeyDown: u,
    tabIndex: i ? 0 : -1,
    ...g,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function vd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Ja(e, t) {
  return Ja = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ja(e, t);
}
function xd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ja(e, t);
}
const nc = {
  disabled: !1
};
var wv = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const gi = Ct.createContext(null);
var Cv = function(t) {
  return t.scrollTop;
}, ro = "unmounted", ir = "exited", ar = "entering", Tr = "entered", es = "exiting", Bn = /* @__PURE__ */ function(e) {
  xd(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = ir, a.appearStatus = ar) : c = Tr : r.unmountOnExit || r.mountOnEnter ? c = ro : c = ir, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === ro ? {
      status: ir
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== ar && s !== Tr && (a = ar) : (s === ar || s === Tr) && (a = es);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, s, l;
    return a = s = l = i, i != null && typeof i != "number" && (a = i.exit, s = i.enter, l = i.appear !== void 0 ? i.appear : s), {
      exit: a,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === ar) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Wo.findDOMNode(this);
          s && Cv(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === ir && this.setState({
      status: ro
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Wo.findDOMNode(this), l], d = c[0], f = c[1], p = this.getTimeouts(), g = l ? p.appear : p.enter;
    if (!i && !s || nc.disabled) {
      this.safeSetState({
        status: Tr
      }, function() {
        a.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: ar
    }, function() {
      a.props.onEntering(d, f), a.onTransitionEnd(g, function() {
        a.safeSetState({
          status: Tr
        }, function() {
          a.props.onEntered(d, f);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Wo.findDOMNode(this);
    if (!a || nc.disabled) {
      this.safeSetState({
        status: ir
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: es
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: ir
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Wo.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], d = c[0], f = c[1];
      this.props.addEndListener(d, f);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === ro)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = vd(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ct.createElement(gi.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : Ct.cloneElement(Ct.Children.only(s), l))
    );
  }, t;
}(Ct.Component);
Bn.contextType = gi;
Bn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, i, a) {
      var s = e[t];
      return o.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = wv;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function wr() {
}
Bn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: wr,
  onEntering: wr,
  onEntered: wr,
  onExit: wr,
  onExiting: wr,
  onExited: wr
};
Bn.UNMOUNTED = ro;
Bn.EXITED = ir;
Bn.ENTERING = ar;
Bn.ENTERED = Tr;
Bn.EXITING = es;
function Tv(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Is(e, t) {
  var n = function(a) {
    return t && Xo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Yf.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Sv(e, t) {
  e = e || {}, t = t || {};
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (r[a] = i, i = []) : i.push(a);
  var s, l = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var d = r[c][s];
        l[r[c][s]] = n(d);
      }
    l[c] = n(c);
  }
  for (s = 0; s < i.length; s++)
    l[i[s]] = n(i[s]);
  return l;
}
function lr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Ev(e, t) {
  return Is(e.children, function(n) {
    return Zo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: lr(n, "appear", e),
      enter: lr(n, "enter", e),
      exit: lr(n, "exit", e)
    });
  });
}
function Ov(e, t, n) {
  var r = Is(e.children), i = Sv(t, r);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (Xo(s)) {
      var l = a in t, c = a in r, d = t[a], f = Xo(d) && !d.props.in;
      c && (!l || f) ? i[a] = Zo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: lr(s, "exit", e),
        enter: lr(s, "enter", e)
      }) : !c && l && !f ? i[a] = Zo(s, {
        in: !1
      }) : c && l && Xo(d) && (i[a] = Zo(s, {
        onExited: n.bind(null, s),
        in: d.props.in,
        exit: lr(s, "exit", e),
        enter: lr(s, "enter", e)
      }));
    }
  }), i;
}
var Rv = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Pv = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, $s = /* @__PURE__ */ function(e) {
  xd(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(Tv(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, a) {
    var s = a.children, l = a.handleExited, c = a.firstRender;
    return {
      children: c ? Ev(i, l) : Ov(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = Is(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = li({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = vd(i, ["component", "childFactory"]), c = this.state.contextValue, d = Rv(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ Ct.createElement(gi.Provider, {
      value: c
    }, d) : /* @__PURE__ */ Ct.createElement(gi.Provider, {
      value: c
    }, /* @__PURE__ */ Ct.createElement(a, l, d));
  }, t;
}(Ct.Component);
$s.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: o.func
} : {};
$s.defaultProps = Pv;
const wd = (e) => e.scrollTop;
function bi(e, t) {
  const {
    timeout: n,
    easing: r,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay
  };
}
function ts(e) {
  return `scale(${e}, ${e ** 2})`;
}
const kv = {
  entering: {
    opacity: 1,
    transform: ts(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ra = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), yi = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: d,
    onEntering: f,
    onExit: p,
    onExited: g,
    onExiting: h,
    style: b,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Bn,
    ...C
  } = t, T = qu(), v = S.useRef(), x = Ps(), w = S.useRef(null), k = Tt(w, No(a), n), R = (A) => (_) => {
    if (A) {
      const G = w.current;
      _ === void 0 ? A(G) : A(G, _);
    }
  }, $ = R(f), I = R((A, _) => {
    wd(A);
    const {
      duration: G,
      delay: oe,
      easing: K
    } = bi({
      style: b,
      timeout: u,
      easing: s
    }, {
      mode: "enter"
    });
    let H;
    u === "auto" ? (H = x.transitions.getAutoHeightDuration(A.clientHeight), v.current = H) : H = G, A.style.transition = [x.transitions.create("opacity", {
      duration: H,
      delay: oe
    }), x.transitions.create("transform", {
      duration: Ra ? H : H * 0.666,
      delay: oe,
      easing: K
    })].join(","), c && c(A, _);
  }), m = R(d), P = R(h), M = R((A) => {
    const {
      duration: _,
      delay: G,
      easing: oe
    } = bi({
      style: b,
      timeout: u,
      easing: s
    }, {
      mode: "exit"
    });
    let K;
    u === "auto" ? (K = x.transitions.getAutoHeightDuration(A.clientHeight), v.current = K) : K = _, A.style.transition = [x.transitions.create("opacity", {
      duration: K,
      delay: G
    }), x.transitions.create("transform", {
      duration: Ra ? K : K * 0.666,
      delay: Ra ? G : G || K * 0.333,
      easing: oe
    })].join(","), A.style.opacity = 0, A.style.transform = ts(0.75), p && p(A);
  }), N = R(g), W = (A) => {
    u === "auto" && T.start(v.current || 0, A), r && r(w.current, A);
  };
  return /* @__PURE__ */ E.jsx(y, {
    appear: i,
    in: l,
    nodeRef: w,
    onEnter: I,
    onEntered: m,
    onEntering: $,
    onExit: M,
    onExited: N,
    onExiting: P,
    addEndListener: W,
    timeout: u === "auto" ? null : u,
    ...C,
    children: (A, {
      ownerState: _,
      ...G
    }) => /* @__PURE__ */ S.cloneElement(a, {
      style: {
        opacity: 0,
        transform: ts(0.75),
        visibility: A === "exited" && !l ? "hidden" : void 0,
        ...kv[A],
        ...b,
        ...a.props.style
      },
      ref: k,
      ...G
    })
  });
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: Mo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
yi && (yi.muiSupportAuto = !0);
function Iv(e) {
  const t = rn(e);
  return t.body === e ? qn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function co(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function rc(e) {
  return parseInt(qn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function $v(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function oc(e, t, n, r, i) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !a.includes(s), c = !$v(s);
    l && c && co(s, i);
  });
}
function Pa(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Mv(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Iv(r)) {
      const s = Gu(qn(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${rc(r) + s}px`;
      const l = rn(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${rc(c) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = rn(r).body;
    else {
      const s = r.parentElement, l = qn(r);
      a = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: a,
      el: s,
      property: l
    }) => {
      a ? s.style.setProperty(l, a) : s.style.removeProperty(l);
    });
  };
}
function Nv(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Dv {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && co(t.modalRef, !1);
    const i = Nv(n);
    oc(n, t.mount, t.modalRef, i, !0);
    const a = Pa(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Pa(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Mv(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Pa(this.containers, (s) => s.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && co(t.modalRef, n), oc(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && co(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Av = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function jv(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Fv(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function _v(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Fv(e));
}
function Lv(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Av)).forEach((r, i) => {
    const a = jv(r);
    a === -1 || !_v(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Bv() {
  return !0;
}
function vi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Lv,
    isEnabled: s = Bv,
    open: l
  } = e, c = S.useRef(!1), d = S.useRef(null), f = S.useRef(null), p = S.useRef(null), g = S.useRef(null), h = S.useRef(!1), b = S.useRef(null), u = Tt(No(t), b), y = S.useRef(null);
  S.useEffect(() => {
    !l || !b.current || (h.current = !n);
  }, [n, l]), S.useEffect(() => {
    if (!l || !b.current)
      return;
    const v = rn(b.current);
    return b.current.contains(v.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), h.current && b.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), S.useEffect(() => {
    if (!l || !b.current)
      return;
    const v = rn(b.current), x = (R) => {
      y.current = R, !(r || !s() || R.key !== "Tab") && v.activeElement === b.current && R.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, w = () => {
      var I, m;
      const R = b.current;
      if (R === null)
        return;
      if (!v.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (R.contains(v.activeElement) || r && v.activeElement !== d.current && v.activeElement !== f.current)
        return;
      if (v.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!h.current)
        return;
      let $ = [];
      if ((v.activeElement === d.current || v.activeElement === f.current) && ($ = a(b.current)), $.length > 0) {
        const P = !!((I = y.current) != null && I.shiftKey && ((m = y.current) == null ? void 0 : m.key) === "Tab"), M = $[0], N = $[$.length - 1];
        typeof M != "string" && typeof N != "string" && (P ? N.focus() : M.focus());
      } else
        R.focus();
    };
    v.addEventListener("focusin", w), v.addEventListener("keydown", x, !0);
    const k = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && w();
    }, 50);
    return () => {
      clearInterval(k), v.removeEventListener("focusin", w), v.removeEventListener("keydown", x, !0);
    };
  }, [n, r, i, s, l, a]);
  const C = (v) => {
    p.current === null && (p.current = v.relatedTarget), h.current = !0, g.current = v.target;
    const x = t.props.onFocus;
    x && x(v);
  }, T = (v) => {
    p.current === null && (p.current = v.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ S.cloneElement(t, {
      ref: u,
      onFocus: C
    }), /* @__PURE__ */ E.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (vi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Mo,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (vi.propTypes = Hu(vi.propTypes));
function zv(e) {
  return typeof e == "function" ? e() : e;
}
const xo = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = S.useState(null), c = Tt(/* @__PURE__ */ S.isValidElement(r) ? No(r) : null, n);
  if (Fn(() => {
    a || l(zv(i) || document.body);
  }, [i, a]), Fn(() => {
    if (s && !a)
      return fi(n, s), () => {
        fi(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ S.isValidElement(r)) {
      const d = {
        ref: c
      };
      return /* @__PURE__ */ S.cloneElement(r, d);
    }
    return r;
  }
  return s && /* @__PURE__ */ Gf.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Yn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (xo.propTypes = Hu(xo.propTypes));
function vt(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: i,
    externalForwardedProps: a,
    internalForwardedProps: s,
    shouldForwardComponentProp: l = !1,
    ...c
  } = t, {
    component: d,
    slots: f = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...g
  } = a, h = f[e] || r, b = ed(p[e], i), {
    props: {
      component: u,
      ...y
    },
    internalRef: C
  } = Ju({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: b
  }), T = Tt(C, b == null ? void 0 : b.ref, t.ref), v = e === "root" ? u || d : u, x = Zu(h, {
    ...e === "root" && !d && !f[e] && s,
    ...e !== "root" && !f[e] && s,
    ...y,
    ...v && !l && {
      as: v
    },
    ...v && l && {
      component: v
    },
    ref: T
  }, i);
  return [h, x];
}
const Wv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Cd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ps(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: d,
    onEnter: f,
    onEntered: p,
    onEntering: g,
    onExit: h,
    onExited: b,
    onExiting: u,
    style: y,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Bn,
    ...v
  } = t, x = S.useRef(null), w = Tt(x, No(l), n), k = (W) => (A) => {
    if (W) {
      const _ = x.current;
      A === void 0 ? W(_) : W(_, A);
    }
  }, R = k(g), $ = k((W, A) => {
    wd(W);
    const _ = bi({
      style: y,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    W.style.webkitTransition = r.transitions.create("opacity", _), W.style.transition = r.transitions.create("opacity", _), f && f(W, A);
  }), I = k(p), m = k(u), P = k((W) => {
    const A = bi({
      style: y,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    W.style.webkitTransition = r.transitions.create("opacity", A), W.style.transition = r.transitions.create("opacity", A), h && h(W);
  }), M = k(b), N = (W) => {
    a && a(x.current, W);
  };
  return /* @__PURE__ */ E.jsx(T, {
    appear: s,
    in: d,
    nodeRef: x,
    onEnter: $,
    onEntered: I,
    onEntering: R,
    onExit: P,
    onExited: M,
    onExiting: m,
    addEndListener: N,
    timeout: C,
    ...v,
    children: (W, {
      ownerState: A,
      ..._
    }) => /* @__PURE__ */ S.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: W === "exited" && !d ? "hidden" : void 0,
        ...Wv[W],
        ...y,
        ...l.props.style
      },
      ref: w,
      ..._
    })
  });
});
process.env.NODE_ENV !== "production" && (Cd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: Mo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Vv(e) {
  return ze("MuiBackdrop", e);
}
je("MuiBackdrop", ["root", "invisible"]);
const Hv = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ve({
    root: ["root", n && "invisible"]
  }, Vv, t);
}, Uv = ue("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Td = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: s = "div",
    invisible: l = !1,
    open: c,
    components: d = {},
    componentsProps: f = {},
    slotProps: p = {},
    slots: g = {},
    TransitionComponent: h,
    transitionDuration: b,
    ...u
  } = r, y = {
    ...r,
    component: s,
    invisible: l
  }, C = Hv(y), T = {
    transition: h,
    root: d.Root,
    ...g
  }, v = {
    ...f,
    ...p
  }, x = {
    slots: T,
    slotProps: v
  }, [w, k] = vt("root", {
    elementType: Uv,
    externalForwardedProps: x,
    className: ge(C.root, a),
    ownerState: y
  }), [R, $] = vt("transition", {
    elementType: Cd,
    externalForwardedProps: x,
    ownerState: y
  });
  return /* @__PURE__ */ E.jsx(R, {
    in: c,
    timeout: b,
    ...u,
    ...$,
    children: /* @__PURE__ */ E.jsx(w, {
      "aria-hidden": !0,
      ...k,
      classes: C,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Td.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Yv(e) {
  return typeof e == "function" ? e() : e;
}
function qv(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ic = () => {
}, qo = new Dv();
function Gv(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: s,
    children: l,
    onClose: c,
    open: d,
    rootRef: f
  } = e, p = S.useRef({}), g = S.useRef(null), h = S.useRef(null), b = Tt(h, f), [u, y] = S.useState(!d), C = qv(l);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const v = () => rn(g.current), x = () => (p.current.modalRef = h.current, p.current.mount = g.current, p.current), w = () => {
    qo.mount(x(), {
      disableScrollLock: r
    }), h.current && (h.current.scrollTop = 0);
  }, k = Mn(() => {
    const A = Yv(t) || v().body;
    qo.add(x(), A), h.current && w();
  }), R = () => qo.isTopModal(x()), $ = Mn((A) => {
    g.current = A, A && (d && R() ? w() : h.current && co(h.current, T));
  }), I = S.useCallback(() => {
    qo.remove(x(), T);
  }, [T]);
  S.useEffect(() => () => {
    I();
  }, [I]), S.useEffect(() => {
    d ? k() : (!C || !i) && I();
  }, [d, I, C, i, k]);
  const m = (A) => (_) => {
    var G;
    (G = A.onKeyDown) == null || G.call(A, _), !(_.key !== "Escape" || _.which === 229 || // Wait until IME is settled.
    !R()) && (n || (_.stopPropagation(), c && c(_, "escapeKeyDown")));
  }, P = (A) => (_) => {
    var G;
    (G = A.onClick) == null || G.call(A, _), _.target === _.currentTarget && c && c(_, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const _ = Qu(e);
      delete _.onTransitionEnter, delete _.onTransitionExited;
      const G = {
        ..._,
        ...A
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...G,
        onKeyDown: m(G),
        ref: b
      };
    },
    getBackdropProps: (A = {}) => {
      const _ = A;
      return {
        "aria-hidden": !0,
        ..._,
        onClick: P(_),
        open: d
      };
    },
    getTransitionProps: () => {
      const A = () => {
        y(!1), a && a();
      }, _ = () => {
        y(!0), s && s(), i && I();
      };
      return {
        onEnter: Nl(A, (l == null ? void 0 : l.props.onEnter) ?? ic),
        onExited: Nl(_, (l == null ? void 0 : l.props.onExited) ?? ic)
      };
    },
    rootRef: b,
    portalRef: $,
    isTopModal: R,
    exited: u,
    hasTransition: C
  };
}
function Kv(e) {
  return ze("MuiModal", e);
}
je("MuiModal", ["root", "hidden", "backdrop"]);
const Xv = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Kv, r);
}, Zv = ue("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Ae(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), Qv = ue(Td, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Sd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Qv,
    BackdropProps: a,
    classes: s,
    className: l,
    closeAfterTransition: c = !1,
    children: d,
    container: f,
    component: p,
    components: g = {},
    componentsProps: h = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: C = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: v = !1,
    hideBackdrop: x = !1,
    keepMounted: w = !1,
    onBackdropClick: k,
    onClose: R,
    onTransitionEnter: $,
    onTransitionExited: I,
    open: m,
    slotProps: P = {},
    slots: M = {},
    // eslint-disable-next-line react/prop-types
    theme: N,
    ...W
  } = r, A = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: b,
    disableEnforceFocus: u,
    disableEscapeKeyDown: y,
    disablePortal: C,
    disableRestoreFocus: T,
    disableScrollLock: v,
    hideBackdrop: x,
    keepMounted: w
  }, {
    getRootProps: _,
    getBackdropProps: G,
    getTransitionProps: oe,
    portalRef: K,
    isTopModal: H,
    exited: Y,
    hasTransition: ae
  } = Gv({
    ...A,
    rootRef: n
  }), re = {
    ...A,
    exited: Y
  }, j = Xv(re), L = {};
  if (d.props.tabIndex === void 0 && (L.tabIndex = "-1"), ae) {
    const {
      onEnter: B,
      onExited: xe
    } = oe();
    L.onEnter = B, L.onExited = xe;
  }
  const Z = {
    ...W,
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...M
    },
    slotProps: {
      ...h,
      ...P
    }
  }, [F, V] = vt("root", {
    elementType: Zv,
    externalForwardedProps: Z,
    getSlotProps: _,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: re,
    className: ge(l, j == null ? void 0 : j.root, !re.open && re.exited && (j == null ? void 0 : j.hidden))
  }), [J, Q] = vt("backdrop", {
    elementType: i,
    externalForwardedProps: Z,
    additionalProps: a,
    getSlotProps: (B) => G({
      ...B,
      onClick: (xe) => {
        k && k(xe), B != null && B.onClick && B.onClick(xe);
      }
    }),
    className: ge(a == null ? void 0 : a.className, j == null ? void 0 : j.backdrop),
    ownerState: re
  }), le = Tt(a == null ? void 0 : a.ref, Q.ref);
  return !w && !m && (!ae || Y) ? null : /* @__PURE__ */ E.jsx(xo, {
    ref: K,
    container: f,
    disablePortal: C,
    children: /* @__PURE__ */ E.jsxs(F, {
      ...V,
      children: [!x && i ? /* @__PURE__ */ E.jsx(J, {
        ...Q,
        ref: le
      }) : null, /* @__PURE__ */ E.jsx(vi, {
        disableEnforceFocus: u,
        disableAutoFocus: b,
        disableRestoreFocus: T,
        isEnabled: H,
        open: m,
        children: /* @__PURE__ */ S.cloneElement(d, L)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Sd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: Mo.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Yn, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Jv(e) {
  return ze("MuiPaper", e);
}
je("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const e0 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ve(a, Jv, i);
}, t0 = ue("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Ae(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), na = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var h;
  const r = Ge({
    props: t,
    name: "MuiPaper"
  }), i = Ps(), {
    className: a,
    component: s = "div",
    elevation: l = 1,
    square: c = !1,
    variant: d = "elevation",
    ...f
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: c,
    variant: d
  }, g = e0(p);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ E.jsx(t0, {
    as: s,
    ownerState: p,
    className: ge(g.root, a),
    ref: n,
    ...f,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (h = i.vars.overlays) == null ? void 0 : h[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${rt("#fff", Xa(l))}, ${rt("#fff", Xa(l))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (na.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Tn(Pr, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
function n0(e) {
  return ze("MuiPopover", e);
}
je("MuiPopover", ["root", "paper"]);
function ac(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function sc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function lc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ri(e) {
  return typeof e == "function" ? e() : e;
}
const r0 = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"],
    paper: ["paper"]
  }, n0, t);
}, o0 = ue(Sd, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ed = ue(na, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Od = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: a,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: d,
    className: f,
    container: p,
    elevation: g = 8,
    marginThreshold: h = 16,
    open: b,
    PaperProps: u = {},
    slots: y = {},
    slotProps: C = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = yi,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: w,
      ...k
    } = {},
    disableScrollLock: R = !1,
    ...$
  } = r, I = (C == null ? void 0 : C.paper) ?? u, m = S.useRef(), P = {
    ...r,
    anchorOrigin: s,
    anchorReference: c,
    elevation: g,
    marginThreshold: h,
    externalPaperSlotProps: I,
    transformOrigin: T,
    TransitionComponent: v,
    transitionDuration: x,
    TransitionProps: k
  }, M = r0(P), N = S.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const Q = ri(a), le = Q && Q.nodeType === 1 ? Q : rn(m.current).body, B = le.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const xe = le.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && xe.top === 0 && xe.left === 0 && xe.right === 0 && xe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: B.top + ac(B, s.vertical),
      left: B.left + sc(B, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), W = S.useCallback((Q) => ({
    vertical: ac(Q, T.vertical),
    horizontal: sc(Q, T.horizontal)
  }), [T.horizontal, T.vertical]), A = S.useCallback((Q) => {
    const le = {
      width: Q.offsetWidth,
      height: Q.offsetHeight
    }, B = W(le);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: lc(B)
      };
    const xe = N();
    let pe = xe.top - B.vertical, be = xe.left - B.horizontal;
    const Re = pe + le.height, se = be + le.width, Ie = qn(ri(a)), he = Ie.innerHeight - h, Me = Ie.innerWidth - h;
    if (h !== null && pe < h) {
      const Ee = pe - h;
      pe -= Ee, B.vertical += Ee;
    } else if (h !== null && Re > he) {
      const Ee = Re - he;
      pe -= Ee, B.vertical += Ee;
    }
    if (process.env.NODE_ENV !== "production" && le.height > he && le.height && he && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${le.height - he}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), h !== null && be < h) {
      const Ee = be - h;
      be -= Ee, B.horizontal += Ee;
    } else if (se > Me) {
      const Ee = se - Me;
      be -= Ee, B.horizontal += Ee;
    }
    return {
      top: `${Math.round(pe)}px`,
      left: `${Math.round(be)}px`,
      transformOrigin: lc(B)
    };
  }, [a, c, N, W, h]), [_, G] = S.useState(b), oe = S.useCallback(() => {
    const Q = m.current;
    if (!Q)
      return;
    const le = A(Q);
    le.top !== null && Q.style.setProperty("top", le.top), le.left !== null && (Q.style.left = le.left), Q.style.transformOrigin = le.transformOrigin, G(!0);
  }, [A]);
  S.useEffect(() => (R && window.addEventListener("scroll", oe), () => window.removeEventListener("scroll", oe)), [a, R, oe]);
  const K = (Q, le) => {
    w && w(Q, le), oe();
  }, H = () => {
    G(!1);
  };
  S.useEffect(() => {
    b && oe();
  }), S.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      oe();
    }
  } : null, [b, oe]), S.useEffect(() => {
    if (!b)
      return;
    const Q = Uu(() => {
      oe();
    }), le = qn(a);
    return le.addEventListener("resize", Q), () => {
      Q.clear(), le.removeEventListener("resize", Q);
    };
  }, [a, b, oe]);
  let Y = x;
  x === "auto" && !v.muiSupportAuto && (Y = void 0);
  const ae = p || (a ? rn(ri(a)).body : void 0), re = {
    slots: y,
    slotProps: {
      ...C,
      paper: I
    }
  }, [j, L] = vt("paper", {
    elementType: Ed,
    externalForwardedProps: re,
    additionalProps: {
      elevation: g,
      className: ge(M.paper, I == null ? void 0 : I.className),
      style: _ ? I.style : {
        ...I.style,
        opacity: 0
      }
    },
    ownerState: P
  }), [Z, {
    slotProps: F,
    ...V
  }] = vt("root", {
    elementType: o0,
    externalForwardedProps: re,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: ae,
      open: b
    },
    ownerState: P,
    className: ge(M.root, f)
  }), J = Tt(m, L.ref);
  return /* @__PURE__ */ E.jsx(Z, {
    ...V,
    ...!Za(Z) && {
      slotProps: F,
      disableScrollLock: R
    },
    ...$,
    ref: n,
    children: /* @__PURE__ */ E.jsx(v, {
      appear: !0,
      in: b,
      onEntering: K,
      onExited: H,
      timeout: Y,
      ...k,
      children: /* @__PURE__ */ E.jsx(j, {
        ...L,
        ref: J,
        children: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Od.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: an,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Tn(o.oneOfType([Yn, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = ri(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slotProps.root.slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slotProps.root.slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Yn, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Pr,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: Ts
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
function i0(e) {
  return ze("MuiMenu", e);
}
je("MuiMenu", ["root", "paper", "list"]);
const a0 = {
  vertical: "top",
  horizontal: "right"
}, s0 = {
  vertical: "top",
  horizontal: "left"
}, l0 = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, i0, t);
}, c0 = ue(Od, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), u0 = ue(Ed, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), d0 = ue(yd, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ms = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: s,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: d,
    open: f,
    PaperProps: p = {},
    PopoverClasses: g,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: b,
      ...u
    } = {},
    variant: y = "selectedMenu",
    slots: C = {},
    slotProps: T = {},
    ...v
  } = r, x = Es(), w = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: b,
    PaperProps: p,
    transitionDuration: h,
    TransitionProps: u,
    variant: y
  }, k = l0(w), R = i && !l && f, $ = S.useRef(null), I = (_, G) => {
    $.current && $.current.adjustStyleForScrollbar(_, {
      direction: x ? "rtl" : "ltr"
    }), b && b(_, G);
  }, m = (_) => {
    _.key === "Tab" && (_.preventDefault(), d && d(_, "tabKeyDown"));
  };
  let P = -1;
  S.Children.map(a, (_, G) => {
    /* @__PURE__ */ S.isValidElement(_) && (process.env.NODE_ENV !== "production" && ks.isFragment(_) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), _.props.disabled || (y === "selectedMenu" && _.props.selected || P === -1) && (P = G));
  });
  const M = C.paper ?? u0, N = T.paper ?? p, W = Ga({
    elementType: C.root,
    externalSlotProps: T.root,
    ownerState: w,
    className: [k.root, s]
  }), A = Ga({
    elementType: M,
    externalSlotProps: N,
    ownerState: w,
    className: k.paper
  });
  return /* @__PURE__ */ E.jsx(c0, {
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? a0 : s0,
    slots: {
      paper: M,
      root: C.root
    },
    slotProps: {
      root: W,
      paper: A
    },
    open: f,
    ref: n,
    transitionDuration: h,
    TransitionProps: {
      onEntering: I,
      ...u
    },
    ownerState: w,
    ...v,
    classes: g,
    children: /* @__PURE__ */ E.jsx(d0, {
      onKeyDown: m,
      actions: $,
      autoFocus: i && (P === -1 || l),
      autoFocusItem: R,
      variant: y,
      ...c,
      className: ge(k.list, c.className),
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (Ms.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Yn, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function f0(e) {
  return ze("MuiNativeSelect", e);
}
const Ns = je("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), p0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${ce(n)}`, a && "iconOpen", r && "disabled"]
  };
  return Ve(l, f0, t);
}, Rd = ue("select")(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${Ns.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), m0 = ue(Rd, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: sn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Ns.multiple}`]: t.multiple
    }];
  }
})({}), Pd = ue("svg")(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${Ns.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), h0 = ue(Pd, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), kd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: i,
    error: a,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard",
    ...d
  } = t, f = {
    ...t,
    disabled: i,
    variant: c,
    error: a
  }, p = p0(f);
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx(m0, {
      ownerState: f,
      className: ge(p.select, r),
      disabled: i,
      ref: l || n,
      ...d
    }), t.multiple ? null : /* @__PURE__ */ E.jsx(h0, {
      as: s,
      ownerState: f,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (kd.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: an,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
function Id(e) {
  return ze("MuiSelect", e);
}
const Xr = je("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var cc;
const g0 = ue(Rd, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Xr.select}`]: t.select
      },
      {
        [`&.${Xr.select}`]: t[n.variant]
      },
      {
        [`&.${Xr.error}`]: t.error
      },
      {
        [`&.${Xr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Xr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), b0 = ue(Pd, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), y0 = ue("input", {
  shouldForwardProp: (e) => sd(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function uc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function v0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const x0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${ce(n)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Ve(l, Id, t);
}, $d = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var $t;
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: a,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: d,
    defaultValue: f,
    disabled: p,
    displayEmpty: g,
    error: h = !1,
    IconComponent: b,
    inputRef: u,
    labelId: y,
    MenuProps: C = {},
    multiple: T,
    name: v,
    onBlur: x,
    onChange: w,
    onClose: k,
    onFocus: R,
    onOpen: $,
    open: I,
    readOnly: m,
    renderValue: P,
    required: M,
    SelectDisplayProps: N = {},
    tabIndex: W,
    // catching `type` from Input which makes no sense for SelectInput
    type: A,
    value: _,
    variant: G = "standard",
    ...oe
  } = t, [K, H] = Rr({
    controlled: _,
    default: f,
    name: "Select"
  }), [Y, ae] = Rr({
    controlled: I,
    default: d,
    name: "Select"
  }), re = S.useRef(null), j = S.useRef(null), [L, Z] = S.useState(null), {
    current: F
  } = S.useRef(I != null), [V, J] = S.useState(), Q = Tt(n, u), le = S.useCallback((ie) => {
    j.current = ie, ie && Z(ie);
  }, []), B = L == null ? void 0 : L.parentNode;
  S.useImperativeHandle(Q, () => ({
    focus: () => {
      j.current.focus();
    },
    node: re.current,
    value: K
  }), [K]), S.useEffect(() => {
    d && Y && L && !F && (J(s ? null : B.clientWidth), j.current.focus());
  }, [L, s]), S.useEffect(() => {
    a && j.current.focus();
  }, [a]), S.useEffect(() => {
    if (!y)
      return;
    const ie = rn(j.current).getElementById(y);
    if (ie) {
      const Oe = () => {
        getSelection().isCollapsed && j.current.focus();
      };
      return ie.addEventListener("click", Oe), () => {
        ie.removeEventListener("click", Oe);
      };
    }
  }, [y]);
  const xe = (ie, Oe) => {
    ie ? $ && $(Oe) : k && k(Oe), F || (J(s ? null : B.clientWidth), ae(ie));
  }, pe = (ie) => {
    ie.button === 0 && (ie.preventDefault(), j.current.focus(), xe(!0, ie));
  }, be = (ie) => {
    xe(!1, ie);
  }, Re = S.Children.toArray(l), se = (ie) => {
    const Oe = Re.find((Pe) => Pe.props.value === ie.target.value);
    Oe !== void 0 && (H(Oe.props.value), w && w(ie, Oe));
  }, Ie = (ie) => (Oe) => {
    let Pe;
    if (Oe.currentTarget.hasAttribute("tabindex")) {
      if (T) {
        Pe = Array.isArray(K) ? K.slice() : [];
        const yt = K.indexOf(ie.props.value);
        yt === -1 ? Pe.push(ie.props.value) : Pe.splice(yt, 1);
      } else
        Pe = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(Oe), K !== Pe && (H(Pe), w)) {
        const yt = Oe.nativeEvent || Oe, ct = new yt.constructor(yt.type, yt);
        Object.defineProperty(ct, "target", {
          writable: !0,
          value: {
            value: Pe,
            name: v
          }
        }), w(ct, ie);
      }
      T || xe(!1, Oe);
    }
  }, he = (ie) => {
    m || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(ie.key) && (ie.preventDefault(), xe(!0, ie));
  }, Me = L !== null && Y, Ee = (ie) => {
    !Me && x && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: K,
        name: v
      }
    }), x(ie));
  };
  delete oe["aria-invalid"];
  let de, it;
  const We = [];
  let gt = !1, Ot = !1;
  (pi({
    value: K
  }) || g) && (P ? de = P(K) : gt = !0);
  const lt = Re.map((ie) => {
    if (!/* @__PURE__ */ S.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && ks.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Oe;
    if (T) {
      if (!Array.isArray(K))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : jn(2));
      Oe = K.some((Pe) => uc(Pe, ie.props.value)), Oe && gt && We.push(ie.props.children);
    } else
      Oe = uc(K, ie.props.value), Oe && gt && (it = ie.props.children);
    return Oe && (Ot = !0), /* @__PURE__ */ S.cloneElement(ie, {
      "aria-selected": Oe ? "true" : "false",
      onClick: Ie(ie),
      onKeyUp: (Pe) => {
        Pe.key === " " && Pe.preventDefault(), ie.props.onKeyUp && ie.props.onKeyUp(Pe);
      },
      role: "option",
      selected: Oe,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ie.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    if (!Ot && !T && K !== "") {
      const ie = Re.map((Oe) => Oe.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${K}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((Oe) => Oe != null).map((Oe) => `\`${Oe}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ot, Re, T, v, K]), gt && (T ? We.length === 0 ? de = null : de = We.reduce((ie, Oe, Pe) => (ie.push(Oe), Pe < We.length - 1 && ie.push(", "), ie), []) : de = it);
  let Pt = V;
  !s && F && L && (Pt = B.clientWidth);
  let _e;
  typeof W < "u" ? _e = W : _e = p ? null : 0;
  const Fe = N.id || (v ? `mui-component-select-${v}` : void 0), Se = {
    ...t,
    variant: G,
    value: K,
    open: Me,
    error: h
  }, bt = x0(Se), St = {
    ...C.PaperProps,
    ...($t = C.slotProps) == null ? void 0 : $t.paper
  }, vn = Mr();
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx(g0, {
      as: "div",
      ref: le,
      tabIndex: _e,
      role: "combobox",
      "aria-controls": Me ? vn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Me ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [y, Fe].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": M ? "true" : void 0,
      "aria-invalid": h ? "true" : void 0,
      onKeyDown: he,
      onMouseDown: p || m ? null : pe,
      onBlur: Ee,
      onFocus: R,
      ...N,
      ownerState: Se,
      className: ge(N.className, bt.select, c),
      id: Fe,
      children: v0(de) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        cc || (cc = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : de
    }), /* @__PURE__ */ E.jsx(y0, {
      "aria-invalid": h,
      value: Array.isArray(K) ? K.join(",") : K,
      name: v,
      ref: re,
      "aria-hidden": !0,
      onChange: se,
      tabIndex: -1,
      disabled: p,
      className: bt.nativeInput,
      autoFocus: a,
      required: M,
      ...oe,
      ownerState: Se
    }), /* @__PURE__ */ E.jsx(b0, {
      as: b,
      className: bt.icon,
      ownerState: Se
    }), /* @__PURE__ */ E.jsx(Ms, {
      id: `menu-${v || ""}`,
      anchorEl: B,
      open: Me,
      onClose: be,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...C,
      MenuListProps: {
        "aria-labelledby": y,
        role: "listbox",
        "aria-multiselectable": T ? "true" : void 0,
        disableListWrap: !0,
        id: vn,
        ...C.MenuListProps
      },
      slotProps: {
        ...C.slotProps,
        paper: {
          ...St,
          style: {
            minWidth: Pt,
            ...St != null ? St.style : null
          }
        }
      },
      children: lt
    })]
  });
});
process.env.NODE_ENV !== "production" && ($d.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: an,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * If `true`, the component is required.
   */
  required: o.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const Md = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), w0 = (e) => {
  const {
    classes: t
  } = e, r = Ve({
    root: ["root"]
  }, Id, t);
  return {
    ...t,
    ...r
  };
}, Ds = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => sn(e) && e !== "variant",
  slot: "Root"
}, C0 = ue(Ji, Ds)(""), T0 = ue(ta, Ds)(""), S0 = ue(ea, Ds)(""), ra = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: d = !1,
    IconComponent: f = Md,
    id: p,
    input: g,
    inputProps: h,
    label: b,
    labelId: u,
    MenuProps: y,
    multiple: C = !1,
    native: T = !1,
    onClose: v,
    onOpen: x,
    open: w,
    renderValue: k,
    SelectDisplayProps: R,
    variant: $ = "outlined",
    ...I
  } = r, m = T ? kd : $d, P = pr(), M = zr({
    props: r,
    muiFormControl: P,
    states: ["variant", "error"]
  }), N = M.variant || $, W = {
    ...r,
    variant: N,
    classes: s
  }, A = w0(W), {
    root: _,
    ...G
  } = A, oe = g || {
    standard: /* @__PURE__ */ E.jsx(C0, {
      ownerState: W
    }),
    outlined: /* @__PURE__ */ E.jsx(T0, {
      label: b,
      ownerState: W
    }),
    filled: /* @__PURE__ */ E.jsx(S0, {
      ownerState: W
    })
  }[N], K = Tt(n, No(oe));
  return /* @__PURE__ */ E.jsx(S.Fragment, {
    children: /* @__PURE__ */ S.cloneElement(oe, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: m,
      inputProps: {
        children: a,
        error: M.error,
        IconComponent: f,
        variant: N,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C,
        ...T ? {
          id: p
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: d,
          labelId: u,
          MenuProps: y,
          onClose: v,
          onOpen: x,
          open: w,
          renderValue: k,
          SelectDisplayProps: {
            id: p,
            ...R
          }
        },
        ...h,
        classes: h ? Dt(G, h.classes) : G,
        ...g ? g.props.inputProps : {}
      },
      ...(C && T || d) && N === "outlined" ? {
        notched: !0
      } : {},
      ref: K,
      className: ge(oe.props.className, l, A.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!g && {
        variant: N
      },
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
ra.muiName = "Select";
function E0(e) {
  return ze("MuiTextField", e);
}
je("MuiTextField", ["root"]);
const O0 = {
  standard: Ji,
  filled: ea,
  outlined: ta
}, R0 = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"]
  }, E0, t);
}, P0 = ue(md, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Nd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: a = !1,
    children: s,
    className: l,
    color: c = "primary",
    defaultValue: d,
    disabled: f = !1,
    error: p = !1,
    FormHelperTextProps: g,
    fullWidth: h = !1,
    helperText: b,
    id: u,
    InputLabelProps: y,
    inputProps: C,
    InputProps: T,
    inputRef: v,
    label: x,
    maxRows: w,
    minRows: k,
    multiline: R = !1,
    name: $,
    onBlur: I,
    onChange: m,
    onFocus: P,
    placeholder: M,
    required: N = !1,
    rows: W,
    select: A = !1,
    SelectProps: _,
    slots: G = {},
    slotProps: oe = {},
    type: K,
    value: H,
    variant: Y = "outlined",
    ...ae
  } = r, re = {
    ...r,
    autoFocus: a,
    color: c,
    disabled: f,
    error: p,
    fullWidth: h,
    multiline: R,
    required: N,
    select: A,
    variant: Y
  }, j = R0(re);
  process.env.NODE_ENV !== "production" && A && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const L = Mr(u), Z = b && L ? `${L}-helper-text` : void 0, F = x && L ? `${L}-label` : void 0, V = O0[Y], J = {
    slots: G,
    slotProps: {
      input: T,
      inputLabel: y,
      htmlInput: C,
      formHelperText: g,
      select: _,
      ...oe
    }
  }, Q = {}, le = J.slotProps.inputLabel;
  Y === "outlined" && (le && typeof le.shrink < "u" && (Q.notched = le.shrink), Q.label = x), A && ((!_ || !_.native) && (Q.id = void 0), Q["aria-describedby"] = void 0);
  const [B, xe] = vt("input", {
    elementType: V,
    externalForwardedProps: J,
    additionalProps: Q,
    ownerState: re
  }), [pe, be] = vt("inputLabel", {
    elementType: pd,
    externalForwardedProps: J,
    ownerState: re
  }), [Re, se] = vt("htmlInput", {
    elementType: "input",
    externalForwardedProps: J,
    ownerState: re
  }), [Ie, he] = vt("formHelperText", {
    elementType: hd,
    externalForwardedProps: J,
    ownerState: re
  }), [Me, Ee] = vt("select", {
    elementType: ra,
    externalForwardedProps: J,
    ownerState: re
  }), de = /* @__PURE__ */ E.jsx(B, {
    "aria-describedby": Z,
    autoComplete: i,
    autoFocus: a,
    defaultValue: d,
    fullWidth: h,
    multiline: R,
    name: $,
    rows: W,
    maxRows: w,
    minRows: k,
    type: K,
    value: H,
    id: L,
    inputRef: v,
    onBlur: I,
    onChange: m,
    onFocus: P,
    placeholder: M,
    inputProps: se,
    slots: {
      input: G.htmlInput ? Re : void 0
    },
    ...xe
  });
  return /* @__PURE__ */ E.jsxs(P0, {
    className: ge(j.root, l),
    disabled: f,
    error: p,
    fullWidth: h,
    ref: n,
    required: N,
    color: c,
    variant: Y,
    ownerState: re,
    ...ae,
    children: [x != null && x !== "" && /* @__PURE__ */ E.jsx(pe, {
      htmlFor: L,
      id: F,
      ...be,
      children: x
    }), A ? /* @__PURE__ */ E.jsx(Me, {
      "aria-describedby": Z,
      id: L,
      labelId: F,
      value: H,
      input: de,
      ...Ee,
      children: s
    }) : de, b && /* @__PURE__ */ E.jsx(Ie, {
      id: Z,
      ...he,
      children: b
    })]
  });
});
process.env.NODE_ENV !== "production" && (Nd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: an,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    formHelperText: o.oneOfType([o.func, o.object]),
    htmlInput: o.oneOfType([o.func, o.object]),
    input: o.oneOfType([o.func, o.object]),
    inputLabel: o.oneOfType([o.func, o.object]),
    select: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    formHelperText: o.elementType,
    htmlInput: o.elementType,
    input: o.elementType,
    inputLabel: o.elementType,
    select: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const Dd = An(Nd)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${Et.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px ${Et.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${Et.gray800};
  }

  fieldset {
    display: none;
  }

}
`, As = Ct.createContext({
  filters: {},
  setFilters: () => {
  }
}), k0 = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, i] = Ct.useState({});
  return /* @__PURE__ */ E.jsx(
    As.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? i
      },
      children: e
    }
  );
};
function dc(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function I0(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: i = "any",
    stringify: a,
    trim: s = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: d
  }) => {
    let f = s ? c.trim() : c;
    n && (f = f.toLowerCase()), t && (f = dc(f));
    const p = f ? l.filter((g) => {
      let h = (a || d)(g);
      return n && (h = h.toLowerCase()), t && (h = dc(h)), i === "start" ? h.startsWith(f) : h.includes(f);
    }) : l;
    return typeof r == "number" ? p.slice(0, r) : p;
  };
}
const $0 = I0(), M0 = 5, N0 = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
}, D0 = [];
function fc(e, t, n) {
  if (t || e == null)
    return "";
  const r = n(e);
  return typeof r == "string" ? r : "";
}
function A0(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = N0,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: d = "useAutocomplete",
    defaultValue: f = e.multiple ? D0 : null,
    disableClearable: p = !1,
    disableCloseOnSelect: g = !1,
    disabled: h,
    disabledItemsFocusable: b = !1,
    disableListWrap: u = !1,
    filterOptions: y = $0,
    filterSelectedOptions: C = !1,
    freeSolo: T = !1,
    getOptionDisabled: v,
    getOptionKey: x,
    getOptionLabel: w = (z) => z.label ?? z,
    groupBy: k,
    handleHomeEndKeys: R = !e.freeSolo,
    id: $,
    includeInputInList: I = !1,
    inputValue: m,
    isOptionEqualToValue: P = (z, D) => z === D,
    multiple: M = !1,
    onChange: N,
    onClose: W,
    onHighlightChange: A,
    onInputChange: _,
    onOpen: G,
    open: oe,
    openOnFocus: K = !1,
    options: H,
    readOnly: Y = !1,
    selectOnFocus: ae = !e.freeSolo,
    value: re
  } = e, j = Mr($);
  let L = w;
  L = (z) => {
    const D = w(z);
    if (typeof D != "string") {
      if (process.env.NODE_ENV !== "production") {
        const X = D === void 0 ? "undefined" : `${typeof D} (${D})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${d} returned ${X} instead of a string for ${JSON.stringify(z)}.`);
      }
      return String(D);
    }
    return D;
  };
  const Z = S.useRef(!1), F = S.useRef(!0), V = S.useRef(null), J = S.useRef(null), [Q, le] = S.useState(null), [B, xe] = S.useState(-1), pe = i ? 0 : -1, be = S.useRef(pe), Re = S.useRef(fc(f, M, L)).current, [se, Ie] = Rr({
    controlled: re,
    default: f,
    name: d
  }), [he, Me] = Rr({
    controlled: m,
    default: Re,
    name: d,
    state: "inputValue"
  }), [Ee, de] = S.useState(!1), it = S.useCallback((z, D, X) => {
    if (!(M ? se.length < D.length : D !== null) && !l)
      return;
    const me = fc(D, M, L);
    he !== me && (Me(me), _ && _(z, me, X));
  }, [L, he, M, _, Me, l, se]), [We, gt] = Rr({
    controlled: oe,
    default: !1,
    name: d,
    state: "open"
  }), [Ot, lt] = S.useState(!0), Pt = !M && se != null && he === L(se), _e = We && !Y, Fe = _e ? y(
    H.filter((z) => !(C && (M ? se : [se]).some((D) => D !== null && P(z, D)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Pt && Ot ? "" : he,
      getOptionLabel: L
    }
  ) : [], Se = _b({
    filteredOptions: Fe,
    value: se,
    inputValue: he
  });
  S.useEffect(() => {
    const z = se !== Se.value;
    Ee && !z || T && !z || it(null, se, "reset");
  }, [se, it, Ee, Se.value, T]);
  const bt = We && Fe.length > 0 && !Y, St = Mn((z) => {
    z === -1 ? V.current.focus() : Q.querySelector(`[data-tag-index="${z}"]`).focus();
  });
  S.useEffect(() => {
    M && B > se.length - 1 && (xe(-1), St(-1));
  }, [se, M, B, St]);
  function vn(z, D) {
    if (!J.current || z < 0 || z >= Fe.length)
      return -1;
    let X = z;
    for (; ; ) {
      const ve = J.current.querySelector(`[data-option-index="${X}"]`), me = b ? !1 : !ve || ve.disabled || ve.getAttribute("aria-disabled") === "true";
      if (ve && ve.hasAttribute("tabindex") && !me)
        return X;
      if (D === "next" ? X = (X + 1) % Fe.length : X = (X - 1 + Fe.length) % Fe.length, X === z)
        return -1;
    }
  }
  const $t = Mn(({
    event: z,
    index: D,
    reason: X = "auto"
  }) => {
    if (be.current = D, D === -1 ? V.current.removeAttribute("aria-activedescendant") : V.current.setAttribute("aria-activedescendant", `${j}-option-${D}`), A && A(z, D === -1 ? null : Fe[D], X), !J.current)
      return;
    const ve = J.current.querySelector(`[role="option"].${n}-focused`);
    ve && (ve.classList.remove(`${n}-focused`), ve.classList.remove(`${n}-focusVisible`));
    let me = J.current;
    if (J.current.getAttribute("role") !== "listbox" && (me = J.current.parentElement.querySelector('[role="listbox"]')), !me)
      return;
    if (D === -1) {
      me.scrollTop = 0;
      return;
    }
    const we = J.current.querySelector(`[data-option-index="${D}"]`);
    if (we && (we.classList.add(`${n}-focused`), X === "keyboard" && we.classList.add(`${n}-focusVisible`), me.scrollHeight > me.clientHeight && X !== "mouse" && X !== "touch")) {
      const De = we, at = me.clientHeight + me.scrollTop, At = De.offsetTop + De.offsetHeight;
      At > at ? me.scrollTop = At - me.clientHeight : De.offsetTop - De.offsetHeight * (k ? 1.3 : 0) < me.scrollTop && (me.scrollTop = De.offsetTop - De.offsetHeight * (k ? 1.3 : 0));
    }
  }), ie = Mn(({
    event: z,
    diff: D,
    direction: X = "next",
    reason: ve = "auto"
  }) => {
    if (!_e)
      return;
    const we = vn((() => {
      const De = Fe.length - 1;
      if (D === "reset")
        return pe;
      if (D === "start")
        return 0;
      if (D === "end")
        return De;
      const at = be.current + D;
      return at < 0 ? at === -1 && I ? -1 : u && be.current !== -1 || Math.abs(D) > 1 ? 0 : De : at > De ? at === De + 1 && I ? -1 : u || Math.abs(D) > 1 ? De : 0 : at;
    })(), X);
    if ($t({
      index: we,
      reason: ve,
      event: z
    }), r && D !== "reset")
      if (we === -1)
        V.current.value = he;
      else {
        const De = L(Fe[we]);
        V.current.value = De, De.toLowerCase().indexOf(he.toLowerCase()) === 0 && he.length > 0 && V.current.setSelectionRange(he.length, De.length);
      }
  }), Oe = () => {
    const z = (D, X) => {
      const ve = D ? L(D) : "", me = X ? L(X) : "";
      return ve === me;
    };
    if (be.current !== -1 && Se.filteredOptions && Se.filteredOptions.length !== Fe.length && Se.inputValue === he && (M ? se.length === Se.value.length && Se.value.every((D, X) => L(se[X]) === L(D)) : z(Se.value, se))) {
      const D = Se.filteredOptions[be.current];
      if (D)
        return Fe.findIndex((X) => L(X) === L(D));
    }
    return -1;
  }, Pe = S.useCallback(() => {
    if (!_e)
      return;
    const z = Oe();
    if (z !== -1) {
      be.current = z;
      return;
    }
    const D = M ? se[0] : se;
    if (Fe.length === 0 || D == null) {
      ie({
        diff: "reset"
      });
      return;
    }
    if (J.current) {
      if (D != null) {
        const X = Fe[be.current];
        if (M && X && se.findIndex((me) => P(X, me)) !== -1)
          return;
        const ve = Fe.findIndex((me) => P(me, D));
        ve === -1 ? ie({
          diff: "reset"
        }) : $t({
          index: ve
        });
        return;
      }
      if (be.current >= Fe.length - 1) {
        $t({
          index: Fe.length - 1
        });
        return;
      }
      $t({
        index: be.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Fe.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    M ? !1 : se,
    C,
    ie,
    $t,
    _e,
    he,
    M
  ]), yt = Mn((z) => {
    fi(J, z), z && Pe();
  });
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    (!V.current || V.current.nodeName !== "INPUT") && (V.current && V.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${d} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${V.current} while an HTMLInputElement was expected.`, `Instead, ${d} expects an input element.`, "", d === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [d]), S.useEffect(() => {
    Pe();
  }, [Pe]);
  const ct = (z) => {
    We || (gt(!0), lt(!0), G && G(z));
  }, Ft = (z, D) => {
    We && (gt(!1), W && W(z, D));
  }, _t = (z, D, X, ve) => {
    if (M) {
      if (se.length === D.length && se.every((me, we) => me === D[we]))
        return;
    } else if (se === D)
      return;
    N && N(z, D, X, ve), Ie(D);
  }, xn = S.useRef(!1), Lt = (z, D, X = "selectOption", ve = "options") => {
    let me = X, we = D;
    if (M) {
      if (we = Array.isArray(se) ? se.slice() : [], process.env.NODE_ENV !== "production") {
        const at = we.filter((At) => P(D, At));
        at.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${d} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${at.length} matches.`].join(`
`));
      }
      const De = we.findIndex((at) => P(D, at));
      De === -1 ? we.push(D) : ve !== "freeSolo" && (we.splice(De, 1), me = "removeOption");
    }
    it(z, we, me), _t(z, we, me, {
      option: D
    }), !g && (!z || !z.ctrlKey && !z.metaKey) && Ft(z, me), (s === !0 || s === "touch" && xn.current || s === "mouse" && !xn.current) && V.current.blur();
  };
  function Yt(z, D) {
    if (z === -1)
      return -1;
    let X = z;
    for (; ; ) {
      if (D === "next" && X === se.length || D === "previous" && X === -1)
        return -1;
      const ve = Q.querySelector(`[data-tag-index="${X}"]`);
      if (!ve || !ve.hasAttribute("tabindex") || ve.disabled || ve.getAttribute("aria-disabled") === "true")
        X += D === "next" ? 1 : -1;
      else
        return X;
    }
  }
  const qt = (z, D) => {
    if (!M)
      return;
    he === "" && Ft(z, "toggleInput");
    let X = B;
    B === -1 ? he === "" && D === "previous" && (X = se.length - 1) : (X += D === "next" ? 1 : -1, X < 0 && (X = 0), X === se.length && (X = -1)), X = Yt(X, D), xe(X), St(X);
  }, Gt = (z) => {
    Z.current = !0, Me(""), _ && _(z, "", "clear"), _t(z, M ? [] : null, "clear");
  }, Kt = (z) => (D) => {
    if (z.onKeyDown && z.onKeyDown(D), !D.defaultMuiPrevented && (B !== -1 && !["ArrowLeft", "ArrowRight"].includes(D.key) && (xe(-1), St(-1)), D.which !== 229))
      switch (D.key) {
        case "Home":
          _e && R && (D.preventDefault(), ie({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: D
          }));
          break;
        case "End":
          _e && R && (D.preventDefault(), ie({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: D
          }));
          break;
        case "PageUp":
          D.preventDefault(), ie({
            diff: -5,
            direction: "previous",
            reason: "keyboard",
            event: D
          }), ct(D);
          break;
        case "PageDown":
          D.preventDefault(), ie({
            diff: M0,
            direction: "next",
            reason: "keyboard",
            event: D
          }), ct(D);
          break;
        case "ArrowDown":
          D.preventDefault(), ie({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: D
          }), ct(D);
          break;
        case "ArrowUp":
          D.preventDefault(), ie({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: D
          }), ct(D);
          break;
        case "ArrowLeft":
          qt(D, "previous");
          break;
        case "ArrowRight":
          qt(D, "next");
          break;
        case "Enter":
          if (be.current !== -1 && _e) {
            const X = Fe[be.current], ve = v ? v(X) : !1;
            if (D.preventDefault(), ve)
              return;
            Lt(D, X, "selectOption"), r && V.current.setSelectionRange(V.current.value.length, V.current.value.length);
          } else T && he !== "" && Pt === !1 && (M && D.preventDefault(), Lt(D, he, "createOption", "freeSolo"));
          break;
        case "Escape":
          _e ? (D.preventDefault(), D.stopPropagation(), Ft(D, "escape")) : c && (he !== "" || M && se.length > 0) && (D.preventDefault(), D.stopPropagation(), Gt(D));
          break;
        case "Backspace":
          if (M && !Y && he === "" && se.length > 0) {
            const X = B === -1 ? se.length - 1 : B, ve = se.slice();
            ve.splice(X, 1), _t(D, ve, "removeOption", {
              option: se[X]
            });
          }
          break;
        case "Delete":
          if (M && !Y && he === "" && se.length > 0 && B !== -1) {
            const X = B, ve = se.slice();
            ve.splice(X, 1), _t(D, ve, "removeOption", {
              option: se[X]
            });
          }
          break;
      }
  }, zn = (z) => {
    de(!0), K && !Z.current && ct(z);
  }, ut = (z) => {
    if (t(J)) {
      V.current.focus();
      return;
    }
    de(!1), F.current = !0, Z.current = !1, a && be.current !== -1 && _e ? Lt(z, Fe[be.current], "blur") : a && T && he !== "" ? Lt(z, he, "blur", "freeSolo") : l && it(z, se, "blur"), Ft(z, "blur");
  }, Xt = (z) => {
    const D = z.target.value;
    he !== D && (Me(D), lt(!1), _ && _(z, D, "input")), D === "" ? !p && !M && _t(z, null, "clear") : ct(z);
  }, Mt = (z) => {
    const D = Number(z.currentTarget.getAttribute("data-option-index"));
    be.current !== D && $t({
      event: z,
      index: D,
      reason: "mouse"
    });
  }, fe = (z) => {
    $t({
      event: z,
      index: Number(z.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), xn.current = !0;
  }, ln = (z) => {
    const D = Number(z.currentTarget.getAttribute("data-option-index"));
    Lt(z, Fe[D], "selectOption"), xn.current = !1;
  }, Wn = (z) => (D) => {
    const X = se.slice();
    X.splice(z, 1), _t(D, X, "removeOption", {
      option: se[z]
    });
  }, Kn = (z) => {
    We ? Ft(z, "toggleInput") : ct(z);
  }, O = (z) => {
    z.currentTarget.contains(z.target) && z.target.getAttribute("id") !== j && z.preventDefault();
  }, q = (z) => {
    z.currentTarget.contains(z.target) && (V.current.focus(), ae && F.current && V.current.selectionEnd - V.current.selectionStart === 0 && V.current.select(), F.current = !1);
  }, te = (z) => {
    !h && (he === "" || !We) && Kn(z);
  };
  let ye = T && he.length > 0;
  ye = ye || (M ? se.length > 0 : se !== null);
  let $e = Fe;
  if (k) {
    const z = /* @__PURE__ */ new Map();
    let D = !1;
    $e = Fe.reduce((X, ve, me) => {
      const we = k(ve);
      return X.length > 0 && X[X.length - 1].group === we ? X[X.length - 1].options.push(ve) : (process.env.NODE_ENV !== "production" && (z.get(we) && !D && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${d} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), D = !0), z.set(we, !0)), X.push({
        key: me,
        index: me,
        group: we,
        options: [ve]
      })), X;
    }, []);
  }
  return h && Ee && ut(), {
    getRootProps: (z = {}) => ({
      "aria-owns": bt ? `${j}-listbox` : null,
      ...z,
      onKeyDown: Kt(z),
      onMouseDown: O,
      onClick: q
    }),
    getInputLabelProps: () => ({
      id: `${j}-label`,
      htmlFor: j
    }),
    getInputProps: () => ({
      id: j,
      value: he,
      onBlur: ut,
      onFocus: zn,
      onChange: Xt,
      onMouseDown: te,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": _e ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": bt ? `${j}-listbox` : void 0,
      "aria-expanded": bt,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: V,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: h
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Gt
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Kn
    }),
    getTagProps: ({
      index: z
    }) => ({
      key: z,
      "data-tag-index": z,
      tabIndex: -1,
      ...!Y && {
        onDelete: Wn(z)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${j}-listbox`,
      "aria-labelledby": `${j}-label`,
      ref: yt,
      onMouseDown: (z) => {
        z.preventDefault();
      }
    }),
    getOptionProps: ({
      index: z,
      option: D
    }) => {
      const X = (M ? se : [se]).some((me) => me != null && P(D, me)), ve = v ? v(D) : !1;
      return {
        key: (x == null ? void 0 : x(D)) ?? L(D),
        tabIndex: -1,
        role: "option",
        id: `${j}-option-${z}`,
        onMouseMove: Mt,
        onClick: ln,
        onTouchStart: fe,
        "data-option-index": z,
        "aria-disabled": ve,
        "aria-selected": X
      };
    },
    id: j,
    inputValue: he,
    value: se,
    dirty: ye,
    expanded: _e && Q,
    popupOpen: _e,
    focused: Ee || B !== -1,
    anchorEl: Q,
    setAnchorEl: le,
    focusedTag: B,
    groupedOptions: $e
  };
}
var Vt = "top", gn = "bottom", bn = "right", Ht = "left", js = "auto", Ao = [Vt, gn, bn, Ht], Nr = "start", wo = "end", j0 = "clippingParents", Ad = "viewport", Zr = "popper", F0 = "reference", pc = /* @__PURE__ */ Ao.reduce(function(e, t) {
  return e.concat([t + "-" + Nr, t + "-" + wo]);
}, []), jd = /* @__PURE__ */ [].concat(Ao, [js]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Nr, t + "-" + wo]);
}, []), _0 = "beforeRead", L0 = "read", B0 = "afterRead", z0 = "beforeMain", W0 = "main", V0 = "afterMain", H0 = "beforeWrite", U0 = "write", Y0 = "afterWrite", q0 = [_0, L0, B0, z0, W0, V0, H0, U0, Y0];
function _n(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function on(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function fr(e) {
  var t = on(e).Element;
  return e instanceof t || e instanceof Element;
}
function hn(e) {
  var t = on(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = on(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function G0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !hn(a) || !_n(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function K0(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(c, d) {
        return c[d] = "", c;
      }, {});
      !hn(i) || !_n(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const X0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: G0,
  effect: K0,
  requires: ["computeStyles"]
};
function Dn(e) {
  return e.split("-")[0];
}
var ur = Math.max, xi = Math.min, Dr = Math.round;
function ns() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Fd() {
  return !/^((?!chrome|android).)*safari/i.test(ns());
}
function Ar(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && hn(e) && (i = e.offsetWidth > 0 && Dr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Dr(r.height) / e.offsetHeight || 1);
  var s = fr(e) ? on(e) : window, l = s.visualViewport, c = !Fd() && n, d = (r.left + (c && l ? l.offsetLeft : 0)) / i, f = (r.top + (c && l ? l.offsetTop : 0)) / a, p = r.width / i, g = r.height / a;
  return {
    width: p,
    height: g,
    top: f,
    right: d + p,
    bottom: f + g,
    left: d,
    x: d,
    y: f
  };
}
function _s(e) {
  var t = Ar(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function _d(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Fs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Gn(e) {
  return on(e).getComputedStyle(e);
}
function Z0(e) {
  return ["table", "td", "th"].indexOf(_n(e)) >= 0;
}
function or(e) {
  return ((fr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function oa(e) {
  return _n(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Fs(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    or(e)
  );
}
function mc(e) {
  return !hn(e) || // https://github.com/popperjs/popper-core/issues/837
  Gn(e).position === "fixed" ? null : e.offsetParent;
}
function Q0(e) {
  var t = /firefox/i.test(ns()), n = /Trident/i.test(ns());
  if (n && hn(e)) {
    var r = Gn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = oa(e);
  for (Fs(i) && (i = i.host); hn(i) && ["html", "body"].indexOf(_n(i)) < 0; ) {
    var a = Gn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function jo(e) {
  for (var t = on(e), n = mc(e); n && Z0(n) && Gn(n).position === "static"; )
    n = mc(n);
  return n && (_n(n) === "html" || _n(n) === "body" && Gn(n).position === "static") ? t : n || Q0(e) || t;
}
function Ls(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function uo(e, t, n) {
  return ur(e, xi(t, n));
}
function J0(e, t, n) {
  var r = uo(e, t, n);
  return r > n ? n : r;
}
function Ld() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Bd(e) {
  return Object.assign({}, Ld(), e);
}
function zd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ex = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Bd(typeof t != "number" ? t : zd(t, Ao));
};
function tx(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Dn(n.placement), c = Ls(l), d = [Ht, bn].indexOf(l) >= 0, f = d ? "height" : "width";
  if (!(!a || !s)) {
    var p = ex(i.padding, n), g = _s(a), h = c === "y" ? Vt : Ht, b = c === "y" ? gn : bn, u = n.rects.reference[f] + n.rects.reference[c] - s[c] - n.rects.popper[f], y = s[c] - n.rects.reference[c], C = jo(a), T = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, v = u / 2 - y / 2, x = p[h], w = T - g[f] - p[b], k = T / 2 - g[f] / 2 + v, R = uo(x, k, w), $ = c;
    n.modifiersData[r] = (t = {}, t[$] = R, t.centerOffset = R - k, t);
  }
}
function nx(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || _d(t.elements.popper, i) && (t.elements.arrow = i));
}
const rx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: tx,
  effect: nx,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function jr(e) {
  return e.split("-")[1];
}
var ox = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ix(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Dr(n * i) / i || 0,
    y: Dr(r * i) / i || 0
  };
}
function hc(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, d = e.adaptive, f = e.roundOffsets, p = e.isFixed, g = s.x, h = g === void 0 ? 0 : g, b = s.y, u = b === void 0 ? 0 : b, y = typeof f == "function" ? f({
    x: h,
    y: u
  }) : {
    x: h,
    y: u
  };
  h = y.x, u = y.y;
  var C = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), v = Ht, x = Vt, w = window;
  if (d) {
    var k = jo(n), R = "clientHeight", $ = "clientWidth";
    if (k === on(n) && (k = or(n), Gn(k).position !== "static" && l === "absolute" && (R = "scrollHeight", $ = "scrollWidth")), k = k, i === Vt || (i === Ht || i === bn) && a === wo) {
      x = gn;
      var I = p && k === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      u -= I - r.height, u *= c ? 1 : -1;
    }
    if (i === Ht || (i === Vt || i === gn) && a === wo) {
      v = bn;
      var m = p && k === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[$]
      );
      h -= m - r.width, h *= c ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, d && ox), M = f === !0 ? ix({
    x: h,
    y: u
  }, on(n)) : {
    x: h,
    y: u
  };
  if (h = M.x, u = M.y, c) {
    var N;
    return Object.assign({}, P, (N = {}, N[x] = T ? "0" : "", N[v] = C ? "0" : "", N.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + u + "px)" : "translate3d(" + h + "px, " + u + "px, 0)", N));
  }
  return Object.assign({}, P, (t = {}, t[x] = T ? u + "px" : "", t[v] = C ? h + "px" : "", t.transform = "", t));
}
function ax(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, d = {
    placement: Dn(t.placement),
    variation: jr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, hc(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, hc(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const sx = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ax,
  data: {}
};
var Go = {
  passive: !0
};
function lx(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = on(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(f) {
    f.addEventListener("scroll", n.update, Go);
  }), l && c.addEventListener("resize", n.update, Go), function() {
    a && d.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Go);
    }), l && c.removeEventListener("resize", n.update, Go);
  };
}
const cx = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lx,
  data: {}
};
var ux = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function oi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ux[t];
  });
}
var dx = {
  start: "end",
  end: "start"
};
function gc(e) {
  return e.replace(/start|end/g, function(t) {
    return dx[t];
  });
}
function Bs(e) {
  var t = on(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function zs(e) {
  return Ar(or(e)).left + Bs(e).scrollLeft;
}
function fx(e, t) {
  var n = on(e), r = or(e), i = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var d = Fd();
    (d || !d && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + zs(e),
    y: c
  };
}
function px(e) {
  var t, n = or(e), r = Bs(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = ur(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = ur(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + zs(e), c = -r.scrollTop;
  return Gn(i || n).direction === "rtl" && (l += ur(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function Ws(e) {
  var t = Gn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Wd(e) {
  return ["html", "body", "#document"].indexOf(_n(e)) >= 0 ? e.ownerDocument.body : hn(e) && Ws(e) ? e : Wd(oa(e));
}
function fo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Wd(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = on(r), s = i ? [a].concat(a.visualViewport || [], Ws(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(fo(oa(s)))
  );
}
function rs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function mx(e, t) {
  var n = Ar(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function bc(e, t, n) {
  return t === Ad ? rs(fx(e, n)) : fr(t) ? mx(t, n) : rs(px(or(e)));
}
function hx(e) {
  var t = fo(oa(e)), n = ["absolute", "fixed"].indexOf(Gn(e).position) >= 0, r = n && hn(e) ? jo(e) : e;
  return fr(r) ? t.filter(function(i) {
    return fr(i) && _d(i, r) && _n(i) !== "body";
  }) : [];
}
function gx(e, t, n, r) {
  var i = t === "clippingParents" ? hx(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, d) {
    var f = bc(e, d, r);
    return c.top = ur(f.top, c.top), c.right = xi(f.right, c.right), c.bottom = xi(f.bottom, c.bottom), c.left = ur(f.left, c.left), c;
  }, bc(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Vd(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Dn(r) : null, a = r ? jr(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case Vt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case gn:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case bn:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Ht:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var d = i ? Ls(i) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (a) {
      case Nr:
        c[d] = c[d] - (t[f] / 2 - n[f] / 2);
        break;
      case wo:
        c[d] = c[d] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function Co(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? j0 : l, d = n.rootBoundary, f = d === void 0 ? Ad : d, p = n.elementContext, g = p === void 0 ? Zr : p, h = n.altBoundary, b = h === void 0 ? !1 : h, u = n.padding, y = u === void 0 ? 0 : u, C = Bd(typeof y != "number" ? y : zd(y, Ao)), T = g === Zr ? F0 : Zr, v = e.rects.popper, x = e.elements[b ? T : g], w = gx(fr(x) ? x : x.contextElement || or(e.elements.popper), c, f, s), k = Ar(e.elements.reference), R = Vd({
    reference: k,
    element: v,
    placement: i
  }), $ = rs(Object.assign({}, v, R)), I = g === Zr ? $ : k, m = {
    top: w.top - I.top + C.top,
    bottom: I.bottom - w.bottom + C.bottom,
    left: w.left - I.left + C.left,
    right: I.right - w.right + C.right
  }, P = e.modifiersData.offset;
  if (g === Zr && P) {
    var M = P[i];
    Object.keys(m).forEach(function(N) {
      var W = [bn, gn].indexOf(N) >= 0 ? 1 : -1, A = [Vt, gn].indexOf(N) >= 0 ? "y" : "x";
      m[N] += M[A] * W;
    });
  }
  return m;
}
function bx(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, d = c === void 0 ? jd : c, f = jr(r), p = f ? l ? pc : pc.filter(function(b) {
    return jr(b) === f;
  }) : Ao, g = p.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  g.length === 0 && (g = p);
  var h = g.reduce(function(b, u) {
    return b[u] = Co(e, {
      placement: u,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Dn(u)], b;
  }, {});
  return Object.keys(h).sort(function(b, u) {
    return h[b] - h[u];
  });
}
function yx(e) {
  if (Dn(e) === js)
    return [];
  var t = oi(e);
  return [gc(e), t, gc(t)];
}
function vx(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, d = n.padding, f = n.boundary, p = n.rootBoundary, g = n.altBoundary, h = n.flipVariations, b = h === void 0 ? !0 : h, u = n.allowedAutoPlacements, y = t.options.placement, C = Dn(y), T = C === y, v = c || (T || !b ? [oi(y)] : yx(y)), x = [y].concat(v).reduce(function(j, L) {
      return j.concat(Dn(L) === js ? bx(t, {
        placement: L,
        boundary: f,
        rootBoundary: p,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: u
      }) : L);
    }, []), w = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), $ = !0, I = x[0], m = 0; m < x.length; m++) {
      var P = x[m], M = Dn(P), N = jr(P) === Nr, W = [Vt, gn].indexOf(M) >= 0, A = W ? "width" : "height", _ = Co(t, {
        placement: P,
        boundary: f,
        rootBoundary: p,
        altBoundary: g,
        padding: d
      }), G = W ? N ? bn : Ht : N ? gn : Vt;
      w[A] > k[A] && (G = oi(G));
      var oe = oi(G), K = [];
      if (a && K.push(_[M] <= 0), l && K.push(_[G] <= 0, _[oe] <= 0), K.every(function(j) {
        return j;
      })) {
        I = P, $ = !1;
        break;
      }
      R.set(P, K);
    }
    if ($)
      for (var H = b ? 3 : 1, Y = function(L) {
        var Z = x.find(function(F) {
          var V = R.get(F);
          if (V)
            return V.slice(0, L).every(function(J) {
              return J;
            });
        });
        if (Z)
          return I = Z, "break";
      }, ae = H; ae > 0; ae--) {
        var re = Y(ae);
        if (re === "break") break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const xx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vx,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function yc(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function vc(e) {
  return [Vt, bn, gn, Ht].some(function(t) {
    return e[t] >= 0;
  });
}
function wx(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = Co(t, {
    elementContext: "reference"
  }), l = Co(t, {
    altBoundary: !0
  }), c = yc(s, r), d = yc(l, i, a), f = vc(c), p = vc(d);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: f,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": p
  });
}
const Cx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: wx
};
function Tx(e, t, n) {
  var r = Dn(e), i = [Ht, Vt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [Ht, bn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function Sx(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = jd.reduce(function(f, p) {
    return f[p] = Tx(p, t.rects, a), f;
  }, {}), l = s[t.placement], c = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = s;
}
const Ex = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Sx
};
function Ox(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Vd({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Rx = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ox,
  data: {}
};
function Px(e) {
  return e === "x" ? "y" : "x";
}
function kx(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.padding, g = n.tether, h = g === void 0 ? !0 : g, b = n.tetherOffset, u = b === void 0 ? 0 : b, y = Co(t, {
    boundary: c,
    rootBoundary: d,
    padding: p,
    altBoundary: f
  }), C = Dn(t.placement), T = jr(t.placement), v = !T, x = Ls(C), w = Px(x), k = t.modifiersData.popperOffsets, R = t.rects.reference, $ = t.rects.popper, I = typeof u == "function" ? u(Object.assign({}, t.rects, {
    placement: t.placement
  })) : u, m = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (k) {
    if (a) {
      var N, W = x === "y" ? Vt : Ht, A = x === "y" ? gn : bn, _ = x === "y" ? "height" : "width", G = k[x], oe = G + y[W], K = G - y[A], H = h ? -$[_] / 2 : 0, Y = T === Nr ? R[_] : $[_], ae = T === Nr ? -$[_] : -R[_], re = t.elements.arrow, j = h && re ? _s(re) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ld(), Z = L[W], F = L[A], V = uo(0, R[_], j[_]), J = v ? R[_] / 2 - H - V - Z - m.mainAxis : Y - V - Z - m.mainAxis, Q = v ? -R[_] / 2 + H + V + F + m.mainAxis : ae + V + F + m.mainAxis, le = t.elements.arrow && jo(t.elements.arrow), B = le ? x === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, xe = (N = P == null ? void 0 : P[x]) != null ? N : 0, pe = G + J - xe - B, be = G + Q - xe, Re = uo(h ? xi(oe, pe) : oe, G, h ? ur(K, be) : K);
      k[x] = Re, M[x] = Re - G;
    }
    if (l) {
      var se, Ie = x === "x" ? Vt : Ht, he = x === "x" ? gn : bn, Me = k[w], Ee = w === "y" ? "height" : "width", de = Me + y[Ie], it = Me - y[he], We = [Vt, Ht].indexOf(C) !== -1, gt = (se = P == null ? void 0 : P[w]) != null ? se : 0, Ot = We ? de : Me - R[Ee] - $[Ee] - gt + m.altAxis, lt = We ? Me + R[Ee] + $[Ee] - gt - m.altAxis : it, Pt = h && We ? J0(Ot, Me, lt) : uo(h ? Ot : de, Me, h ? lt : it);
      k[w] = Pt, M[w] = Pt - Me;
    }
    t.modifiersData[r] = M;
  }
}
const Ix = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: kx,
  requiresIfExists: ["offset"]
};
function $x(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Mx(e) {
  return e === on(e) || !hn(e) ? Bs(e) : $x(e);
}
function Nx(e) {
  var t = e.getBoundingClientRect(), n = Dr(t.width) / e.offsetWidth || 1, r = Dr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Dx(e, t, n) {
  n === void 0 && (n = !1);
  var r = hn(t), i = hn(t) && Nx(t), a = or(t), s = Ar(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((_n(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ws(a)) && (l = Mx(t)), hn(t) ? (c = Ar(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = zs(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Ax(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), r;
}
function jx(e) {
  var t = Ax(e);
  return q0.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Fx(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function _x(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var xc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function wc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Lx(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? xc : i;
  return function(l, c, d) {
    d === void 0 && (d = a);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], g = !1, h = {
      state: f,
      setOptions: function(C) {
        var T = typeof C == "function" ? C(f.options) : C;
        u(), f.options = Object.assign({}, a, f.options, T), f.scrollParents = {
          reference: fr(l) ? fo(l) : l.contextElement ? fo(l.contextElement) : [],
          popper: fo(c)
        };
        var v = jx(_x([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = v.filter(function(x) {
          return x.enabled;
        }), b(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var C = f.elements, T = C.reference, v = C.popper;
          if (wc(T, v)) {
            f.rects = {
              reference: Dx(T, jo(v), f.options.strategy === "fixed"),
              popper: _s(v)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(m) {
              return f.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var x = 0; x < f.orderedModifiers.length; x++) {
              if (f.reset === !0) {
                f.reset = !1, x = -1;
                continue;
              }
              var w = f.orderedModifiers[x], k = w.fn, R = w.options, $ = R === void 0 ? {} : R, I = w.name;
              typeof k == "function" && (f = k({
                state: f,
                options: $,
                name: I,
                instance: h
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Fx(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(f);
        });
      }),
      destroy: function() {
        u(), g = !0;
      }
    };
    if (!wc(l, c))
      return h;
    h.setOptions(d).then(function(y) {
      !g && d.onFirstUpdate && d.onFirstUpdate(y);
    });
    function b() {
      f.orderedModifiers.forEach(function(y) {
        var C = y.name, T = y.options, v = T === void 0 ? {} : T, x = y.effect;
        if (typeof x == "function") {
          var w = x({
            state: f,
            name: C,
            instance: h,
            options: v
          }), k = function() {
          };
          p.push(w || k);
        }
      });
    }
    function u() {
      p.forEach(function(y) {
        return y();
      }), p = [];
    }
    return h;
  };
}
var Bx = [cx, Rx, sx, X0, Ex, xx, Ix, rx, Cx], zx = /* @__PURE__ */ Lx({
  defaultModifiers: Bx
});
function Wx(e) {
  return ze("MuiPopper", e);
}
je("MuiPopper", ["root"]);
function Vx(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function wi(e) {
  return typeof e == "function" ? e() : e;
}
function ia(e) {
  return e.nodeType !== void 0;
}
function Hx(e) {
  return !ia(e);
}
const Ux = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"]
  }, Wx, t);
}, Yx = {}, qx = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: c,
    placement: d,
    popperOptions: f,
    popperRef: p,
    slotProps: g = {},
    slots: h = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: u,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...y
  } = t, C = S.useRef(null), T = Tt(C, n), v = S.useRef(null), x = Tt(v, p), w = S.useRef(x);
  Fn(() => {
    w.current = x;
  }, [x]), S.useImperativeHandle(p, () => v.current, []);
  const k = Vx(d, a), [R, $] = S.useState(k), [I, m] = S.useState(wi(r));
  S.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), S.useEffect(() => {
    r && m(wi(r));
  }, [r]), Fn(() => {
    if (!I || !c)
      return;
    const A = (oe) => {
      $(oe.placement);
    };
    if (process.env.NODE_ENV !== "production" && I && ia(I) && I.nodeType === 1) {
      const oe = I.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && oe.top === 0 && oe.left === 0 && oe.right === 0 && oe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let _ = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: oe
      }) => {
        A(oe);
      }
    }];
    l != null && (_ = _.concat(l)), f && f.modifiers != null && (_ = _.concat(f.modifiers));
    const G = zx(I, C.current, {
      placement: k,
      ...f,
      modifiers: _
    });
    return w.current(G), () => {
      G.destroy(), w.current(null);
    };
  }, [I, s, l, c, f, k]);
  const P = {
    placement: R
  };
  b !== null && (P.TransitionProps = b);
  const M = Ux(t), N = h.root ?? "div", W = Ga({
    elementType: N,
    externalSlotProps: g.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ E.jsx(N, {
    ...W,
    children: typeof i == "function" ? i(P) : i
  });
}), Hd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: d,
    open: f,
    placement: p = "bottom",
    popperOptions: g = Yx,
    popperRef: h,
    style: b,
    transition: u = !1,
    slotProps: y = {},
    slots: C = {},
    ...T
  } = t, [v, x] = S.useState(!0), w = () => {
    x(!1);
  }, k = () => {
    x(!0);
  };
  if (!c && !f && (!u || v))
    return null;
  let R;
  if (a)
    R = a;
  else if (r) {
    const m = wi(r);
    R = m && ia(m) ? rn(m).body : rn(null).body;
  }
  const $ = !f && c && (!u || v) ? "none" : void 0, I = u ? {
    in: f,
    onEnter: w,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ E.jsx(xo, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ E.jsx(qx, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: d,
      ref: n,
      open: u ? !v : f,
      placement: p,
      popperOptions: g,
      popperRef: h,
      slotProps: y,
      slots: C,
      ...T,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $,
        ...b
      },
      TransitionProps: I,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Hd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Tn(o.oneOfType([Yn, o.object, o.func]), (e) => {
    if (e.open) {
      const t = wi(e.anchorEl);
      if (t && ia(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Hx(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Yn, o.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: o.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: an,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const Gx = ue(Hd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Vs = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Es(), i = Ge({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: c,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: g,
    open: h,
    placement: b,
    popperOptions: u,
    popperRef: y,
    transition: C,
    slots: T,
    slotProps: v,
    ...x
  } = i, w = (T == null ? void 0 : T.root) ?? (l == null ? void 0 : l.Root), k = {
    anchorEl: a,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: g,
    open: h,
    placement: b,
    popperOptions: u,
    popperRef: y,
    transition: C,
    ...x
  };
  return /* @__PURE__ */ E.jsx(Gx, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: w
    },
    slotProps: v ?? c,
    ...k,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Vs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: o.oneOfType([Yn, o.object, o.func]),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Yn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: an,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
function Kx(e) {
  return ze("MuiListSubheader", e);
}
je("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Xx = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${ce(n)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return Ve(s, Kx, t);
}, Zx = ue("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${ce(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(Ae(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), Ci = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: a = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: d = !1,
    ...f
  } = r, p = {
    ...r,
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: d
  }, g = Xx(p);
  return /* @__PURE__ */ E.jsx(Zx, {
    as: s,
    className: ge(g.root, i),
    ref: n,
    ownerState: p,
    ...f
  });
});
Ci && (Ci.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (Ci.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: o.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: o.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
class Ti {
  constructor() {
    Hr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Ti();
  }
  static use() {
    const t = Yu(Ti.create).current, [n, r] = S.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, S.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Jx(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function Qx() {
  return Ti.use();
}
function Jx() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Ud(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: d
  } = e, [f, p] = S.useState(!1), g = ge(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, b = ge(n.child, f && n.childLeaving, r && n.childPulsate);
  return !l && !f && p(!0), S.useEffect(() => {
    if (!l && c != null) {
      const u = setTimeout(c, d);
      return () => {
        clearTimeout(u);
      };
    }
  }, [c, l, d]), /* @__PURE__ */ E.jsx("span", {
    className: g,
    style: h,
    children: /* @__PURE__ */ E.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Ud.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const fn = je("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), os = 550, ew = 80, tw = Po`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, nw = Po`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, rw = Po`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, ow = ue("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), iw = ue(Ud, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${fn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${tw};
    animation-duration: ${os}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${fn.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${fn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${fn.childLeaving} {
    opacity: 0;
    animation-name: ${nw};
    animation-duration: ${os}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${fn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${rw};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Yd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = r, [c, d] = S.useState([]), f = S.useRef(0), p = S.useRef(null);
  S.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const g = S.useRef(!1), h = qu(), b = S.useRef(null), u = S.useRef(null), y = S.useCallback((x) => {
    const {
      pulsate: w,
      rippleX: k,
      rippleY: R,
      rippleSize: $,
      cb: I
    } = x;
    d((m) => [...m, /* @__PURE__ */ E.jsx(iw, {
      classes: {
        ripple: ge(a.ripple, fn.ripple),
        rippleVisible: ge(a.rippleVisible, fn.rippleVisible),
        ripplePulsate: ge(a.ripplePulsate, fn.ripplePulsate),
        child: ge(a.child, fn.child),
        childLeaving: ge(a.childLeaving, fn.childLeaving),
        childPulsate: ge(a.childPulsate, fn.childPulsate)
      },
      timeout: os,
      pulsate: w,
      rippleX: k,
      rippleY: R,
      rippleSize: $
    }, f.current)]), f.current += 1, p.current = I;
  }, [a]), C = S.useCallback((x = {}, w = {}, k = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: $ = i || w.pulsate,
      fakeElement: I = !1
      // For test purposes
    } = w;
    if ((x == null ? void 0 : x.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (g.current = !0);
    const m = I ? null : u.current, P = m ? m.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let M, N, W;
    if ($ || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      M = Math.round(P.width / 2), N = Math.round(P.height / 2);
    else {
      const {
        clientX: A,
        clientY: _
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      M = Math.round(A - P.left), N = Math.round(_ - P.top);
    }
    if ($)
      W = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const A = Math.max(Math.abs((m ? m.clientWidth : 0) - M), M) * 2 + 2, _ = Math.max(Math.abs((m ? m.clientHeight : 0) - N), N) * 2 + 2;
      W = Math.sqrt(A ** 2 + _ ** 2);
    }
    x != null && x.touches ? b.current === null && (b.current = () => {
      y({
        pulsate: R,
        rippleX: M,
        rippleY: N,
        rippleSize: W,
        cb: k
      });
    }, h.start(ew, () => {
      b.current && (b.current(), b.current = null);
    })) : y({
      pulsate: R,
      rippleX: M,
      rippleY: N,
      rippleSize: W,
      cb: k
    });
  }, [i, y, h]), T = S.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), v = S.useCallback((x, w) => {
    if (h.clear(), (x == null ? void 0 : x.type) === "touchend" && b.current) {
      b.current(), b.current = null, h.start(0, () => {
        v(x, w);
      });
      return;
    }
    b.current = null, d((k) => k.length > 0 ? k.slice(1) : k), p.current = w;
  }, [h]);
  return S.useImperativeHandle(n, () => ({
    pulsate: T,
    start: C,
    stop: v
  }), [T, C, v]), /* @__PURE__ */ E.jsx(ow, {
    className: ge(fn.root, a.root, s),
    ref: u,
    ...l,
    children: /* @__PURE__ */ E.jsx($s, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Yd.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
function aw(e) {
  return ze("MuiButtonBase", e);
}
const sw = je("MuiButtonBase", ["root", "disabled", "focusVisible"]), lw = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = Ve({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, aw, i);
  return n && r && (s.root += ` ${r}`), s;
}, cw = ue("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${sw.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Fr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: d = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: g = !1,
    focusVisibleClassName: h,
    LinkComponent: b = "a",
    onBlur: u,
    onClick: y,
    onContextMenu: C,
    onDragLeave: T,
    onFocus: v,
    onFocusVisible: x,
    onKeyDown: w,
    onKeyUp: k,
    onMouseDown: R,
    onMouseLeave: $,
    onMouseUp: I,
    onTouchEnd: m,
    onTouchMove: P,
    onTouchStart: M,
    tabIndex: N = 0,
    TouchRippleProps: W,
    touchRippleRef: A,
    type: _,
    ...G
  } = r, oe = S.useRef(null), K = Qx(), H = Tt(K.ref, A), [Y, ae] = S.useState(!1);
  d && Y && ae(!1), S.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ae(!0), oe.current.focus();
    }
  }), []);
  const re = K.shouldMount && !f && !d;
  S.useEffect(() => {
    Y && g && !f && K.pulsate();
  }, [f, g, Y, K]);
  const j = Hn(K, "start", R, p), L = Hn(K, "stop", C, p), Z = Hn(K, "stop", T, p), F = Hn(K, "stop", I, p), V = Hn(K, "stop", (de) => {
    Y && de.preventDefault(), $ && $(de);
  }, p), J = Hn(K, "start", M, p), Q = Hn(K, "stop", m, p), le = Hn(K, "stop", P, p), B = Hn(K, "stop", (de) => {
    Fl(de.target) || ae(!1), u && u(de);
  }, !1), xe = Mn((de) => {
    oe.current || (oe.current = de.currentTarget), Fl(de.target) && (ae(!0), x && x(de)), v && v(de);
  }), pe = () => {
    const de = oe.current;
    return c && c !== "button" && !(de.tagName === "A" && de.href);
  }, be = Mn((de) => {
    g && !de.repeat && Y && de.key === " " && K.stop(de, () => {
      K.start(de);
    }), de.target === de.currentTarget && pe() && de.key === " " && de.preventDefault(), w && w(de), de.target === de.currentTarget && pe() && de.key === "Enter" && !d && (de.preventDefault(), y && y(de));
  }), Re = Mn((de) => {
    g && de.key === " " && Y && !de.defaultPrevented && K.stop(de, () => {
      K.pulsate(de);
    }), k && k(de), y && de.target === de.currentTarget && pe() && de.key === " " && !de.defaultPrevented && y(de);
  });
  let se = c;
  se === "button" && (G.href || G.to) && (se = b);
  const Ie = {};
  se === "button" ? (Ie.type = _ === void 0 ? "button" : _, Ie.disabled = d) : (!G.href && !G.to && (Ie.role = "button"), d && (Ie["aria-disabled"] = d));
  const he = Tt(n, oe), Me = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: d,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: g,
    tabIndex: N,
    focusVisible: Y
  }, Ee = lw(Me);
  return /* @__PURE__ */ E.jsxs(cw, {
    as: se,
    className: ge(Ee.root, l),
    ownerState: Me,
    onBlur: B,
    onClick: y,
    onContextMenu: L,
    onFocus: xe,
    onKeyDown: be,
    onKeyUp: Re,
    onMouseDown: j,
    onMouseLeave: V,
    onMouseUp: F,
    onDragLeave: Z,
    onTouchEnd: Q,
    onTouchMove: le,
    onTouchStart: J,
    ref: he,
    tabIndex: d ? -1 : N,
    type: _,
    ...Ie,
    ...G,
    children: [s, re ? /* @__PURE__ */ E.jsx(Yd, {
      ref: H,
      center: a,
      ...W
    }) : null]
  });
});
function Hn(e, t, n, r = !1) {
  return Mn((i) => (n && n(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: an,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ts,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
function uw(e) {
  return ze("MuiCircularProgress", e);
}
je("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Zn = 44, is = Po`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, as = Po`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, dw = typeof is != "string" ? gs`
        animation: ${is} 1.4s linear infinite;
      ` : null, fw = typeof as != "string" ? gs`
        animation: ${as} 1.4s ease-in-out infinite;
      ` : null, pw = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, a = {
    root: ["root", n, `color${ce(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ce(n)}`, i && "circleDisableShrink"]
  };
  return Ve(a, uw, t);
}, mw = ue("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ce(n.color)}`]];
  }
})(Ae(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: dw || {
      animation: `${is} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(tn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), hw = ue("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), gw = ue("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${ce(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Ae(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: fw || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${as} 1.4s ease-in-out infinite`
    }
  }]
}))), qd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: a = "primary",
    disableShrink: s = !1,
    size: l = 40,
    style: c,
    thickness: d = 3.6,
    value: f = 0,
    variant: p = "indeterminate",
    ...g
  } = r, h = {
    ...r,
    color: a,
    disableShrink: s,
    size: l,
    thickness: d,
    value: f,
    variant: p
  }, b = pw(h), u = {}, y = {}, C = {};
  if (p === "determinate") {
    const T = 2 * Math.PI * ((Zn - d) / 2);
    u.strokeDasharray = T.toFixed(3), C["aria-valuenow"] = Math.round(f), u.strokeDashoffset = `${((100 - f) / 100 * T).toFixed(3)}px`, y.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ E.jsx(mw, {
    className: ge(b.root, i),
    style: {
      width: l,
      height: l,
      ...y,
      ...c
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...C,
    ...g,
    children: /* @__PURE__ */ E.jsx(hw, {
      className: b.svg,
      ownerState: h,
      viewBox: `${Zn / 2} ${Zn / 2} ${Zn} ${Zn}`,
      children: /* @__PURE__ */ E.jsx(gw, {
        className: b.circle,
        style: u,
        ownerState: h,
        cx: Zn,
        cy: Zn,
        r: (Zn - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (qd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Tn(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: o.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: o.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["determinate", "indeterminate"])
});
function bw(e) {
  return ze("MuiIconButton", e);
}
const Cc = je("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), yw = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: a,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${ce(r)}`, i && `edge${ce(i)}`, `size${ce(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Ve(l, bw, t);
}, vw = ue(Fr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ce(n.color)}`], n.edge && t[`edge${ce(n.edge)}`], t[`size${ce(n.size)}`]];
  }
})(Ae(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : rt(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ae(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(tn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(tn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : rt((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Cc.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Cc.loading}`]: {
    color: "transparent"
  }
}))), xw = ue("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), cr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: d = !1,
    size: f = "medium",
    id: p,
    loading: g = null,
    loadingIndicator: h,
    ...b
  } = r, u = Mr(p), y = h ?? /* @__PURE__ */ E.jsx(qd, {
    "aria-labelledby": u,
    color: "inherit",
    size: 16
  }), C = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: d,
    loading: g,
    loadingIndicator: y,
    size: f
  }, T = yw(C);
  return /* @__PURE__ */ E.jsxs(vw, {
    id: u,
    className: ge(T.root, s),
    centerRipple: !0,
    focusRipple: !d,
    disabled: c || g,
    ref: n,
    ...b,
    ownerState: C,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: T.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ E.jsx(xw, {
        className: T.loadingIndicator,
        ownerState: C,
        children: g && y
      })
    }), a]
  });
});
process.env.NODE_ENV !== "production" && (cr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Tn(o.node, (e) => S.Children.toArray(e.children).some((n) => /* @__PURE__ */ S.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: o.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: o.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: o.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const ww = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Cw(e) {
  return ze("MuiChip", e);
}
const Ne = je("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Tw = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: i,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, d = {
    root: ["root", c, n && "disabled", `size${ce(r)}`, `color${ce(i)}`, l && "clickable", l && `clickableColor${ce(i)}`, s && "deletable", s && `deletableColor${ce(i)}`, `${c}${ce(i)}`],
    label: ["label", `label${ce(r)}`],
    avatar: ["avatar", `avatar${ce(r)}`, `avatarColor${ce(i)}`],
    icon: ["icon", `icon${ce(r)}`, `iconColor${ce(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ce(r)}`, `deleteIconColor${ce(i)}`, `deleteIcon${ce(c)}Color${ce(i)}`]
  };
  return Ve(d, Cw, t);
}, Sw = ue("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: i,
      clickable: a,
      onDelete: s,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${Ne.avatar}`]: t.avatar
    }, {
      [`& .${Ne.avatar}`]: t[`avatar${ce(l)}`]
    }, {
      [`& .${Ne.avatar}`]: t[`avatarColor${ce(r)}`]
    }, {
      [`& .${Ne.icon}`]: t.icon
    }, {
      [`& .${Ne.icon}`]: t[`icon${ce(l)}`]
    }, {
      [`& .${Ne.icon}`]: t[`iconColor${ce(i)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIcon${ce(l)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIconColor${ce(r)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIcon${ce(c)}Color${ce(r)}`]
    }, t.root, t[`size${ce(l)}`], t[`color${ce(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${ce(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${ce(r)}`], t[c], t[`${c}${ce(r)}`]];
  }
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Ne.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ne.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ne.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Ne.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Ne.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Ne.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Ne.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : rt(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : rt(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Ne.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Ne.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(tn(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Ne.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : rt(e.palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Ne.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Ne.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Ne.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(tn(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Ne.focusVisible}`]: {
          background: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : rt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${Ne.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(tn(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Ne.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${Ne.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Ne.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Ne.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Ne.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Ne.icon}`]: {
          marginLeft: 4
        },
        [`& .${Ne.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Ne.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Ne.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(tn()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : rt(e.palette[n].main, 0.7)}`,
        [`&.${Ne.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : rt(e.palette[n].main, e.palette.action.hoverOpacity)
        },
        [`&.${Ne.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : rt(e.palette[n].main, e.palette.action.focusOpacity)
        },
        [`& .${Ne.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : rt(e.palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), Ew = ue("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${ce(r)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Tc(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Gd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: d,
    disabled: f = !1,
    icon: p,
    label: g,
    onClick: h,
    onDelete: b,
    onKeyDown: u,
    onKeyUp: y,
    size: C = "medium",
    variant: T = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: x = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...w
  } = r, k = S.useRef(null), R = Tt(k, n), $ = (K) => {
    K.stopPropagation(), b && b(K);
  }, I = (K) => {
    K.currentTarget === K.target && Tc(K) && K.preventDefault(), u && u(K);
  }, m = (K) => {
    K.currentTarget === K.target && b && Tc(K) && b(K), y && y(K);
  }, P = s !== !1 && h ? !0 : s, M = P || b ? Fr : c || "div", N = {
    ...r,
    component: M,
    disabled: f,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ S.isValidElement(p) && p.props.color || l,
    onDelete: !!b,
    clickable: P,
    variant: T
  }, W = Tw(N), A = M === Fr ? {
    component: c || "div",
    focusVisibleClassName: W.focusVisible,
    ...b && {
      disableRipple: !0
    }
  } : {};
  let _ = null;
  b && (_ = d && /* @__PURE__ */ S.isValidElement(d) ? /* @__PURE__ */ S.cloneElement(d, {
    className: ge(d.props.className, W.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ E.jsx(ww, {
    className: ge(W.deleteIcon),
    onClick: $
  }));
  let G = null;
  i && /* @__PURE__ */ S.isValidElement(i) && (G = /* @__PURE__ */ S.cloneElement(i, {
    className: ge(W.avatar, i.props.className)
  }));
  let oe = null;
  return p && /* @__PURE__ */ S.isValidElement(p) && (oe = /* @__PURE__ */ S.cloneElement(p, {
    className: ge(W.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && G && oe && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ E.jsxs(Sw, {
    as: M,
    className: ge(W.root, a),
    disabled: P && f ? !0 : void 0,
    onClick: h,
    onKeyDown: I,
    onKeyUp: m,
    ref: R,
    tabIndex: x && f ? -1 : v,
    ownerState: N,
    ...A,
    ...w,
    children: [G || oe, /* @__PURE__ */ E.jsx(Ew, {
      className: ge(W.label),
      ownerState: N,
      children: g
    }), _]
  });
});
process.env.NODE_ENV !== "production" && (Gd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: o.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Ab,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: o.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: o.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Icon element.
   */
  icon: o.element,
  /**
   * The content of the component.
   */
  label: o.node,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  tabIndex: o.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined"]), o.string])
});
const Ow = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Rw(e) {
  return ze("MuiAutocomplete", e);
}
const ke = je("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var Sc, Ec;
const Pw = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: r,
    focused: i,
    fullWidth: a,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: d,
    size: f
  } = e, p = {
    root: ["root", r && "expanded", i && "focused", a && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${ce(f)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", d && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return Ve(p, Rw, t);
}, kw = ue("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: r,
      hasClearIcon: i,
      hasPopupIcon: a,
      inputFocused: s,
      size: l
    } = n;
    return [{
      [`& .${ke.tag}`]: t.tag
    }, {
      [`& .${ke.tag}`]: t[`tagSize${ce(l)}`]
    }, {
      [`& .${ke.inputRoot}`]: t.inputRoot
    }, {
      [`& .${ke.input}`]: t.input
    }, {
      [`& .${ke.input}`]: s && t.inputFocused
    }, t.root, r && t.fullWidth, a && t.hasPopupIcon, i && t.hasClearIcon];
  }
})({
  [`&.${ke.focused} .${ke.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${ke.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${ke.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${ke.inputRoot}`]: {
    [`.${ke.hasPopupIcon}&, .${ke.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${ke.hasPopupIcon}.${ke.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${ke.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${Jn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${Jn.root}.${Qt.sizeSmall}`]: {
    [`& .${Jn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${dn.root}`]: {
    padding: 9,
    [`.${ke.hasPopupIcon}&, .${ke.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${ke.hasPopupIcon}.${ke.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${ke.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${ke.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${dn.root}.${Qt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${ke.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Jt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${ke.hasPopupIcon}&, .${ke.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${ke.hasPopupIcon}.${ke.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Jt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${ke.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Jt.root}.${Qt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Jt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${Qt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Jt.root}.${Qt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${ke.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Jt.root}.${Qt.hiddenLabel}.${Qt.sizeSmall}`]: {
    [`& .${ke.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${ke.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${ke.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${ke.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${ke.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), Iw = ue("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), $w = ue(cr, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Mw = ue(cr, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popupIndicator, n.popupOpen && t.popupIndicatorOpen];
  }
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), Nw = ue(Vs, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ke.option}`]: t.option
    }, t.popper, n.disablePortal && t.popperDisablePortal];
  }
})(Ae(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
}))), Dw = ue(na, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), Aw = ue("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(Ae(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), jw = ue("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(Ae(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Fw = ue("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(Ae(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${ke.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${ke.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${ke.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : rt(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${ke.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${ke.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), _w = ue(Ci, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(Ae(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), Lw = ue("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${ke.option}`]: {
    paddingLeft: 24
  }
}), Kd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: i = !1,
    autoHighlight: a = !1,
    autoSelect: s = !1,
    blurOnSelect: l = !1,
    ChipProps: c,
    className: d,
    clearIcon: f = Sc || (Sc = /* @__PURE__ */ E.jsx(Ow, {
      fontSize: "small"
    })),
    clearOnBlur: p = !r.freeSolo,
    clearOnEscape: g = !1,
    clearText: h = "Clear",
    closeText: b = "Close",
    componentsProps: u,
    defaultValue: y = r.multiple ? [] : null,
    disableClearable: C = !1,
    disableCloseOnSelect: T = !1,
    disabled: v = !1,
    disabledItemsFocusable: x = !1,
    disableListWrap: w = !1,
    disablePortal: k = !1,
    filterOptions: R,
    filterSelectedOptions: $ = !1,
    forcePopupIcon: I = "auto",
    freeSolo: m = !1,
    fullWidth: P = !1,
    getLimitTagsText: M = (Le) => `+${Le}`,
    getOptionDisabled: N,
    getOptionKey: W,
    getOptionLabel: A,
    isOptionEqualToValue: _,
    groupBy: G,
    handleHomeEndKeys: oe = !r.freeSolo,
    id: K,
    includeInputInList: H = !1,
    inputValue: Y,
    limitTags: ae = -1,
    ListboxComponent: re,
    ListboxProps: j,
    loading: L = !1,
    loadingText: Z = "Loading…",
    multiple: F = !1,
    noOptionsText: V = "No options",
    onChange: J,
    onClose: Q,
    onHighlightChange: le,
    onInputChange: B,
    onOpen: xe,
    open: pe,
    openOnFocus: be = !1,
    openText: Re = "Open",
    options: se,
    PaperComponent: Ie,
    PopperComponent: he,
    popupIcon: Me = Ec || (Ec = /* @__PURE__ */ E.jsx(Md, {})),
    readOnly: Ee = !1,
    renderGroup: de,
    renderInput: it,
    renderOption: We,
    renderTags: gt,
    selectOnFocus: Ot = !r.freeSolo,
    size: lt = "medium",
    slots: Pt = {},
    slotProps: _e = {},
    value: Fe,
    ...Se
  } = r, {
    getRootProps: bt,
    getInputProps: St,
    getInputLabelProps: vn,
    getPopupIndicatorProps: $t,
    getClearProps: ie,
    getTagProps: Oe,
    getListboxProps: Pe,
    getOptionProps: yt,
    value: ct,
    dirty: Ft,
    expanded: _t,
    id: xn,
    popupOpen: Lt,
    focused: Yt,
    focusedTag: qt,
    anchorEl: Gt,
    setAnchorEl: Kt,
    inputValue: zn,
    groupedOptions: ut
  } = A0({
    ...r,
    componentName: "Autocomplete"
  }), Xt = !C && !v && Ft && !Ee, Mt = (!m || I === !0) && I !== !1, {
    onMouseDown: fe
  } = St(), {
    ref: ln,
    ...Wn
  } = Pe(), O = A || ((Le) => Le.label ?? Le), q = {
    ...r,
    disablePortal: k,
    expanded: _t,
    focused: Yt,
    fullWidth: P,
    getOptionLabel: O,
    hasClearIcon: Xt,
    hasPopupIcon: Mt,
    inputFocused: qt === -1,
    popupOpen: Lt,
    size: lt
  }, te = Pw(q), ye = {
    slots: {
      paper: Ie,
      popper: he,
      ...Pt
    },
    slotProps: {
      chip: c,
      listbox: j,
      ...u,
      ..._e
    }
  }, [$e, z] = vt("listbox", {
    elementType: Fw,
    externalForwardedProps: ye,
    ownerState: q,
    className: te.listbox,
    additionalProps: Wn,
    ref: ln
  }), [D, X] = vt("paper", {
    elementType: na,
    externalForwardedProps: ye,
    ownerState: q,
    className: te.paper
  }), [ve, me] = vt("popper", {
    elementType: Vs,
    externalForwardedProps: ye,
    ownerState: q,
    className: te.popper,
    additionalProps: {
      disablePortal: k,
      style: {
        width: Gt ? Gt.clientWidth : null
      },
      role: "presentation",
      anchorEl: Gt,
      open: Lt
    }
  });
  let we;
  if (F && ct.length > 0) {
    const Le = (un) => ({
      className: te.tag,
      disabled: v,
      ...Oe(un)
    });
    gt ? we = gt(ct, Le, q) : we = ct.map((un, wn) => {
      const {
        key: Bt,
        ...sa
      } = Le({
        index: wn
      });
      return /* @__PURE__ */ E.jsx(Gd, {
        label: O(un),
        size: lt,
        ...sa,
        ...ye.slotProps.chip
      }, Bt);
    });
  }
  if (ae > -1 && Array.isArray(we)) {
    const Le = we.length - ae;
    !Yt && Le > 0 && (we = we.splice(0, ae), we.push(/* @__PURE__ */ E.jsx("span", {
      className: te.tag,
      children: M(Le)
    }, we.length)));
  }
  const at = de || ((Le) => /* @__PURE__ */ E.jsxs("li", {
    children: [/* @__PURE__ */ E.jsx(_w, {
      className: te.groupLabel,
      ownerState: q,
      component: "div",
      children: Le.group
    }), /* @__PURE__ */ E.jsx(Lw, {
      className: te.groupUl,
      ownerState: q,
      children: Le.children
    })]
  }, Le.key)), ft = We || ((Le, un) => {
    const {
      key: wn,
      ...Bt
    } = Le;
    return /* @__PURE__ */ E.jsx("li", {
      ...Bt,
      children: O(un)
    }, wn);
  }), cn = (Le, un) => {
    const wn = yt({
      option: Le,
      index: un
    });
    return ft({
      ...wn,
      className: te.option
    }, Le, {
      selected: wn["aria-selected"],
      index: un,
      inputValue: zn
    }, q);
  }, En = ye.slotProps.clearIndicator, Xn = ye.slotProps.popupIndicator;
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx(kw, {
      ref: n,
      className: ge(te.root, d),
      ownerState: q,
      ...bt(Se),
      children: it({
        id: xn,
        disabled: v,
        fullWidth: !0,
        size: lt === "small" ? "small" : void 0,
        InputLabelProps: vn(),
        InputProps: {
          ref: Kt,
          className: te.inputRoot,
          startAdornment: we,
          onMouseDown: (Le) => {
            Le.target === Le.currentTarget && fe(Le);
          },
          ...(Xt || Mt) && {
            endAdornment: /* @__PURE__ */ E.jsxs(Iw, {
              className: te.endAdornment,
              ownerState: q,
              children: [Xt ? /* @__PURE__ */ E.jsx($w, {
                ...ie(),
                "aria-label": h,
                title: h,
                ownerState: q,
                ...En,
                className: ge(te.clearIndicator, En == null ? void 0 : En.className),
                children: f
              }) : null, Mt ? /* @__PURE__ */ E.jsx(Mw, {
                ...$t(),
                disabled: v,
                "aria-label": Lt ? b : Re,
                title: Lt ? b : Re,
                ownerState: q,
                ...Xn,
                className: ge(te.popupIndicator, Xn == null ? void 0 : Xn.className),
                children: Me
              }) : null]
            })
          }
        },
        inputProps: {
          className: te.input,
          disabled: v,
          readOnly: Ee,
          ...St()
        }
      })
    }), Gt ? /* @__PURE__ */ E.jsx(Nw, {
      as: ve,
      ...me,
      children: /* @__PURE__ */ E.jsxs(Dw, {
        as: D,
        ...X,
        children: [L && ut.length === 0 ? /* @__PURE__ */ E.jsx(Aw, {
          className: te.loading,
          ownerState: q,
          children: Z
        }) : null, ut.length === 0 && !m && !L ? /* @__PURE__ */ E.jsx(jw, {
          className: te.noOptions,
          ownerState: q,
          role: "presentation",
          onMouseDown: (Le) => {
            Le.preventDefault();
          },
          children: V
        }) : null, ut.length > 0 ? /* @__PURE__ */ E.jsx($e, {
          as: re,
          ...z,
          children: ut.map((Le, un) => G ? at({
            key: Le.key,
            group: Le.group,
            children: Le.options.map((wn, Bt) => cn(wn, Le.index + Bt))
          }) : cn(Le, un))
        }) : null]
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Kd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: o.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: o.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: o.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: o.oneOfType([o.oneOf(["mouse", "touch"]), o.bool]),
  /**
   * Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.
   * @deprecated Use `slotProps.chip` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ChipProps: o.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: o.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: o.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: o.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: o.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: o.string,
  /**
   * The props used for each slot inside.
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: o.shape({
    clearIndicator: o.object,
    paper: o.object,
    popper: o.object,
    popupIndicator: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: Tn(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: o.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: o.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: o.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: o.oneOfType([o.oneOf(["auto"]), o.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: o.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: o.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: o.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: o.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: o.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} option The Autocomplete option.
   * @returns {string}
   */
  groupBy: o.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: o.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: o.bool,
  /**
   * The input value.
   */
  inputValue: o.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: o.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: Pr,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   * @deprecated Use `slotProps.listbox.component` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxComponent: o.elementType,
  /**
   * Props applied to the Listbox element.
   * @deprecated Use `slotProps.listbox` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxProps: o.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: o.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: o.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: o.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: o.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: o.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   */
  onInputChange: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: o.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: o.string,
  /**
   * A list of options that will be shown in the Autocomplete.
   */
  options: o.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   * @deprecated Use `slots.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperComponent: o.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   * @deprecated Use `slots.popper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: o.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: o.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: o.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: o.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: o.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: o.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: o.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    chip: o.oneOfType([o.func, o.object]),
    clearIndicator: o.oneOfType([o.func, o.object]),
    listbox: o.oneOfType([o.func, o.object]),
    paper: o.oneOfType([o.func, o.object]),
    popper: o.oneOfType([o.func, o.object]),
    popupIndicator: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    listbox: o.elementType,
    paper: o.elementType,
    popper: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: Tn(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const ka = (e) => e.stopPropagation(), Bw = ({ options: e, renderInput: t, ...n }) => {
  const r = ot(
    () => e.find((i) => i.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ E.jsx(
    Kd,
    {
      onChange: (i, a) => {
        var s;
        return (s = n.onChange) == null ? void 0 : s.call(n, a == null ? void 0 : a.value);
      },
      value: r ?? null,
      options: e,
      onClick: ka,
      onKeyDown: ka,
      getOptionLabel: (i) => i.label,
      renderInput: t || ((i) => /* @__PURE__ */ E.jsx(
        Dd,
        {
          ...i,
          onClick: ka,
          label: n.label,
          error: n.error,
          helperText: n.helperText
        }
      ))
    }
  );
}, zw = An(ld)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Ko = (e) => e.stopPropagation(), Ia = ({ children: e, ...t }) => /* @__PURE__ */ E.jsxs(zw, { children: [
  cu(t),
  e
] }), Ww = (e) => (t) => {
  const { filters: n, setFilters: r } = Cn(As), i = ot(() => n[e.key], [n, e]), a = It(
    (s) => {
      r({ ...n, [e.key]: s });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === yo.AUTOCOMPLETE && (i === void 0 || typeof i == "string") ? /* @__PURE__ */ E.jsx(Ia, { ...t, children: /* @__PURE__ */ E.jsx(
    Bw,
    {
      options: e.filterOptions ?? [],
      onChange: a,
      value: i,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ E.jsx(Ia, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (s) => a(s.target.value),
    value: i ?? "",
    autoComplete: "off",
    onClick: Ko,
    onKeyDown: Ko
  }) : /* @__PURE__ */ E.jsx(
    Dd,
    {
      autoComplete: "off",
      onClick: Ko,
      onKeyDown: Ko,
      value: i ?? "",
      onChange: (s) => a(s.target.value)
    }
  ) }) : /* @__PURE__ */ E.jsx(Ia, { ...t });
}, Vw = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Hw = (e, t, n) => {
  let r;
  const i = Vw[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function $a(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Uw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, qw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Gw = {
  date: $a({
    formats: Uw,
    defaultWidth: "full"
  }),
  time: $a({
    formats: Yw,
    defaultWidth: "full"
  }),
  dateTime: $a({
    formats: qw,
    defaultWidth: "full"
  })
}, Kw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Xw = (e, t, n, r) => Kw[e];
function Qr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : s;
      i = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[l] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
const Zw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Qw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Jw = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, eC = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, tC = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, nC = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, rC = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, oC = {
  ordinalNumber: rC,
  era: Qr({
    values: Zw,
    defaultWidth: "wide"
  }),
  quarter: Qr({
    values: Qw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qr({
    values: Jw,
    defaultWidth: "wide"
  }),
  day: Qr({
    values: eC,
    defaultWidth: "wide"
  }),
  dayPeriod: Qr({
    values: tC,
    defaultWidth: "wide",
    formattingValues: nC,
    defaultFormattingWidth: "wide"
  })
};
function Jr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? aC(l, (p) => p.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      iC(l, (p) => p.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = t.slice(s.length);
    return { value: d, rest: f };
  };
}
function iC(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function aC(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function sC(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = t.slice(i.length);
    return { value: s, rest: l };
  };
}
const lC = /^(\d+)(th|st|nd|rd)?/i, cC = /\d+/i, uC = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, dC = {
  any: [/^b/i, /^(a|c)/i]
}, fC = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, pC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, mC = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, hC = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, gC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, yC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, vC = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, xC = {
  ordinalNumber: sC({
    matchPattern: lC,
    parsePattern: cC,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Jr({
    matchPatterns: uC,
    defaultMatchWidth: "wide",
    parsePatterns: dC,
    defaultParseWidth: "any"
  }),
  quarter: Jr({
    matchPatterns: fC,
    defaultMatchWidth: "wide",
    parsePatterns: pC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Jr({
    matchPatterns: mC,
    defaultMatchWidth: "wide",
    parsePatterns: hC,
    defaultParseWidth: "any"
  }),
  day: Jr({
    matchPatterns: gC,
    defaultMatchWidth: "wide",
    parsePatterns: bC,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jr({
    matchPatterns: yC,
    defaultMatchWidth: "any",
    parsePatterns: vC,
    defaultParseWidth: "any"
  })
}, wC = {
  code: "en-US",
  formatDistance: Hw,
  formatLong: Gw,
  formatRelative: Xw,
  localize: oC,
  match: xC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let CC = {};
function Fo() {
  return CC;
}
const Xd = 6048e5, TC = 864e5, Oc = Symbol.for("constructDateFrom");
function tr(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Oc in e ? e[Oc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Sn(e, t) {
  return tr(t || e, e);
}
function Rc(e) {
  const t = Sn(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function SC(e, ...t) {
  const n = tr.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Pc(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function EC(e, t, n) {
  const [r, i] = SC(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Pc(r), s = Pc(i), l = +a - Rc(a), c = +s - Rc(s);
  return Math.round((l - c) / TC);
}
function OC(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function RC(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in);
  return EC(n, OC(n)) + 1;
}
function To(e, t) {
  var l, c, d, f;
  const n = Fo(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, i = Sn(e, t == null ? void 0 : t.in), a = i.getDay(), s = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Si(e, t) {
  return To(e, { ...t, weekStartsOn: 1 });
}
function Zd(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = tr(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Si(i), s = tr(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const l = Si(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function PC(e, t) {
  const n = Zd(e, t), r = tr(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Si(r);
}
function kC(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in), r = +Si(n) - +PC(n);
  return Math.round(r / Xd) + 1;
}
function Qd(e, t) {
  var f, p, g, h;
  const n = Sn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Fo(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((h = (g = i.locale) == null ? void 0 : g.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = tr((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const l = To(s, t), c = tr((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const d = To(c, t);
  return +n >= +l ? r + 1 : +n >= +d ? r : r - 1;
}
function IC(e, t) {
  var l, c, d, f;
  const n = Fo(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = Qd(e, t), a = tr((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), To(a, t);
}
function $C(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in), r = +To(n, t) - +IC(n, t);
  return Math.round(r / Xd) + 1;
}
function Ke(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Qn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ke(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ke(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ke(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Ke(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ke(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ke(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ke(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ke(i, t.length);
  }
}, Cr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, kc = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), i = r > 0 ? r : 1 - r;
      return n.ordinalNumber(i, { unit: "year" });
    }
    return Qn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = Qd(e, r), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = a % 100;
      return Ke(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Ke(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Zd(e);
    return Ke(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Ke(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Ke(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return Ke(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Qn.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return Ke(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const i = $C(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Ke(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = kC(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ke(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Qn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = RC(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ke(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Ke(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Ke(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), i = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return Ke(i, t.length);
      case "io":
        return n.ordinalNumber(i, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r === 12 ? i = Cr.noon : r === 0 ? i = Cr.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r >= 17 ? i = Cr.evening : r >= 12 ? i = Cr.afternoon : r >= 4 ? i = Cr.morning : i = Cr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Qn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Qn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ke(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ke(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Qn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Qn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Qn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return $c(r);
      case "XXXX":
      case "XX":
        return sr(r);
      case "XXXXX":
      case "XXX":
      default:
        return sr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return $c(r);
      case "xxxx":
      case "xx":
        return sr(r);
      case "xxxxx":
      case "xxx":
      default:
        return sr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ic(r, ":");
      case "OOOO":
      default:
        return "GMT" + sr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ic(r, ":");
      case "zzzz":
      default:
        return "GMT" + sr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Ke(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Ke(+e, t.length);
  }
};
function Ic(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Ke(a, 2);
}
function $c(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ke(Math.abs(e) / 60, 2) : sr(e, t);
}
function sr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Ke(Math.trunc(r / 60), 2), a = Ke(r % 60, 2);
  return n + i + t + a;
}
const Mc = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Jd = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, MC = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return Mc(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Mc(r, t)).replace("{{time}}", Jd(i, t));
}, NC = {
  p: Jd,
  P: MC
}, DC = /^D+$/, AC = /^Y+$/, jC = ["D", "DD", "YY", "YYYY"];
function FC(e) {
  return DC.test(e);
}
function _C(e) {
  return AC.test(e);
}
function LC(e, t, n) {
  const r = BC(e, t, n);
  if (console.warn(r), jC.includes(e)) throw new RangeError(r);
}
function BC(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function ef(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function tf(e) {
  return !(!ef(e) && typeof e != "number" || isNaN(+Sn(e)));
}
const zC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, WC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, VC = /^'([^]*?)'?$/, HC = /''/g, UC = /[a-zA-Z]/;
function YC(e, t, n) {
  var f, p, g, h, b, u, y, C;
  const r = Fo(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? wC, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((C = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = Sn(e, n == null ? void 0 : n.in);
  if (!tf(l))
    throw new RangeError("Invalid time value");
  let c = t.match(WC).map((T) => {
    const v = T[0];
    if (v === "p" || v === "P") {
      const x = NC[v];
      return x(T, i.formatLong);
    }
    return T;
  }).join("").match(zC).map((T) => {
    if (T === "''")
      return { isToken: !1, value: "'" };
    const v = T[0];
    if (v === "'")
      return { isToken: !1, value: qC(T) };
    if (kc[v])
      return { isToken: !0, value: T };
    if (v.match(UC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: T };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(l, c));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: i
  };
  return c.map((T) => {
    if (!T.isToken) return T.value;
    const v = T.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && _C(v) || !(n != null && n.useAdditionalDayOfYearTokens) && FC(v)) && LC(v, t, String(e));
    const x = kc[v[0]];
    return x(l, v, i.localize, d);
  }).join("");
}
function qC(e) {
  const t = e.match(VC);
  return t ? t[1].replace(HC, "'") : e;
}
function GC() {
  return Object.assign({}, Fo());
}
function Nc(e, t, n) {
  const r = GC(), i = ZC(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in i ? KC(i, t) : XC(i, t);
}
function KC(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function XC(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function ZC(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function QC(e, t) {
  const n = rT(t);
  return "formatToParts" in n ? eT(n, e) : tT(n, e);
}
const JC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function eT(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let i = 0; i < n.length; i++) {
      const a = JC[n[i].type];
      a !== void 0 && (r[a] = parseInt(n[i].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function tT(e, t) {
  const n = e.format(t), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [
    parseInt(r[3], 10),
    parseInt(r[1], 10),
    parseInt(r[2], 10),
    parseInt(r[4], 10),
    parseInt(r[5], 10),
    parseInt(r[6], 10)
  ];
}
const Ma = {}, Dc = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), nT = Dc === "06/25/2014, 00:00:00" || Dc === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function rT(e) {
  return Ma[e] || (Ma[e] = nT ? new Intl.DateTimeFormat("en-US", {
    hourCycle: "h23",
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }) : new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), Ma[e];
}
function nf(e, t, n, r, i, a, s) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, i, a, s), l;
}
const Ac = 36e5, oT = 6e4, Na = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Hs(e, t, n) {
  if (!e)
    return 0;
  let r = Na.timezoneZ.exec(e);
  if (r)
    return 0;
  let i, a;
  if (r = Na.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), jc(i) ? -(i * Ac) : NaN;
  if (r = Na.timezoneHHMM.exec(e), r) {
    i = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return jc(i, s) ? (a = Math.abs(i) * Ac + s * oT, r[1] === "+" ? -a : a) : NaN;
  }
  if (sT(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : iT(t), l = ss(s, e);
    return -(n ? l : aT(t, l, e));
  }
  return NaN;
}
function iT(e) {
  return nf(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function ss(e, t) {
  const n = QC(e, t), r = nf(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let i = e.getTime();
  const a = i % 1e3;
  return i -= a >= 0 ? a : 1e3 + a, r - i;
}
function aT(e, t, n) {
  let i = e.getTime() - t;
  const a = ss(new Date(i), n);
  if (t === a)
    return t;
  i -= a - t;
  const s = ss(new Date(i), n);
  return a === s ? a : Math.max(a, s);
}
function jc(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Fc = {};
function sT(e) {
  if (Fc[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Fc[e] = !0, !0;
  } catch {
    return !1;
  }
}
const lT = 60 * 1e3, cT = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = Da(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return _c(r);
      case "XXXX":
      case "XX":
        return Sr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Sr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = Da(n.timeZone, e);
    switch (t) {
      case "x":
        return _c(r);
      case "xxxx":
      case "xx":
        return Sr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Sr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = Da(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + uT(r, ":");
      case "OOOO":
      default:
        return "GMT" + Sr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return Nc("short", e, n);
      case "zzzz":
      default:
        return Nc("long", e, n);
    }
  }
};
function Da(e, t) {
  const n = e ? Hs(e, t, !0) / lT : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function Ei(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Sr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Ei(Math.floor(r / 60), 2), a = Ei(Math.floor(r % 60), 2);
  return n + i + t + a;
}
function _c(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ei(Math.abs(e) / 60, 2) : Sr(e, t);
}
function uT(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Ei(a, 2);
}
function Lc(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const dT = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Aa = 36e5, Bc = 6e4, fT = 2, jt = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: dT
};
function rf(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? fT : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = pT(e), { year: i, restDateString: a } = mT(r.date, n), s = hT(a, i);
  if (s === null || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const l = s.getTime();
    let c = 0, d;
    if (r.time && (c = gT(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (d = Hs(r.timeZone || t.timeZone, new Date(l + c)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = Lc(new Date(l + c)), d = Lc(new Date(l + c + d));
    return new Date(l + c + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function pT(e) {
  const t = {};
  let n = jt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = jt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const i = jt.timeZone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timeZone = i[1].trim()) : t.time = r;
  }
  return t;
}
function mT(e, t) {
  if (e) {
    const n = jt.YYY[t], r = jt.YYYYY[t];
    let i = jt.YYYY.exec(e) || r.exec(e);
    if (i) {
      const a = i[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (i = jt.YY.exec(e) || n.exec(e), i) {
      const a = i[1];
      return {
        year: parseInt(a, 10) * 100,
        restDateString: e.slice(a.length)
      };
    }
  }
  return {
    year: null
  };
}
function hT(e, t) {
  if (t === null)
    return null;
  let n, r, i;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = jt.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, Wc(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = jt.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return vT(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = jt.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return Wc(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = jt.Www.exec(e), a)
    return i = parseInt(a[1], 10) - 1, Vc(i) ? zc(t, i) : /* @__PURE__ */ new Date(NaN);
  if (a = jt.WwwD.exec(e), a) {
    i = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return Vc(i, s) ? zc(t, i, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function gT(e) {
  let t, n, r = jt.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), ja(t) ? t % 24 * Aa : NaN;
  if (r = jt.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), ja(t, n) ? t % 24 * Aa + n * Bc : NaN;
  if (r = jt.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const i = parseFloat(r[3].replace(",", "."));
    return ja(t, n, i) ? t % 24 * Aa + n * Bc + i * 1e3 : NaN;
  }
  return null;
}
function zc(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, a = t * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const bT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yT = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function of(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Wc(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = of(e);
    if (r && n > yT[t] || !r && n > bT[t])
      return !1;
  }
  return !0;
}
function vT(e, t) {
  if (t < 1)
    return !1;
  const n = of(e);
  return !(n && t > 366 || !n && t > 365);
}
function Vc(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function ja(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const xT = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function wT(e, t, n = {}) {
  t = String(t);
  const r = t.match(xT);
  if (r) {
    const i = rf(n.originalDate || e, n);
    t = r.reduce(function(a, s) {
      if (s[0] === "'")
        return a;
      const l = a.indexOf(s), c = a[l - 1] === "'", d = a.replace(s, "'" + cT[s[0]](i, s, n) + "'");
      return c ? d.substring(0, l - 1) + d.substring(l + 1) : d;
    }, t);
  }
  return YC(e, t, n);
}
function CT(e, t, n) {
  e = rf(e, n);
  const r = Hs(t, e, !0), i = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), a.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), a;
}
function TT(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, wT(CT(e, t, { timeZone: r.timeZone }), n, r);
}
var af = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(af || {});
const ST = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !ef(e) && typeof e == "string" ? new Date(e) : e;
  return tf(r) ? TT(e, n, t) : "--";
}, Hc = (e) => e.trim().toLowerCase(), aa = Ct.createContext({
  columns: [],
  hiddenColumn: [],
  setHiddenColumn: () => {
  },
  enabled: !1
}), ET = "data-grid-hidden-column-visibility", OT = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: i,
  localStorageKey: a = ET
}) => {
  const [s, l] = Ct.useState(0), [c, d] = Ct.useState([]);
  _r(() => {
    const g = localStorage.getItem(a);
    if (g) {
      const h = JSON.parse(g);
      f(Array.isArray(h) ? h : []);
    } else
      f(r || []);
  }, [r]);
  const f = It((g) => {
    localStorage.setItem(a, JSON.stringify(g)), l((h) => h + 1), d(g);
  }, []), p = ot(
    () => e.filter((g) => !(n != null && n.includes(g.key))),
    [e, n]
  );
  return /* @__PURE__ */ E.jsx(
    aa.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        columns: p,
        hiddenColumn: c,
        setHiddenColumn: f,
        enabled: i
      },
      children: t
    }
  );
}, RT = ({
  columns: e,
  selectionEnabled: t
}) => {
  const { enabled: n, hiddenColumn: r } = Cn(aa), i = It((a) => {
    const s = () => {
      if (a.renderCell)
        return a.renderCell;
      if (a.type === ao.DATE)
        return ({ row: c }) => {
          var d, f;
          return ST(
            c[a.key],
            ((d = a.dateOptions) == null ? void 0 : d.formatDate) ?? af.DATE_WITH_TIME,
            (f = a.dateOptions) == null ? void 0 : f.timeZone
          );
        };
    }, l = () => a.renderHeaderCell ? a.renderHeaderCell : Ww(a);
    return { ...a, renderCell: s(), renderHeaderCell: l() };
  }, []);
  return ot(() => {
    const a = [];
    return t && a.push({
      ...$p,
      minWidth: 50,
      maxWidth: 50
    }), a.push(...e.map((s) => i(s))), n && r ? a.filter((s) => !r.includes(s.key)) : a;
  }, [e, i, n, r]);
};
function PT(e) {
  return ze("PrivateSwitchBase", e);
}
je("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const kT = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", n && "checked", r && "disabled", i && `edge${ce(i)}`],
    input: ["input"]
  };
  return Ve(a, PT, t);
}, IT = ue(Fr)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), $T = ue("input", {
  shouldForwardProp: sn
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), sf = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: a,
    className: s,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: d = !1,
    edge: f = !1,
    icon: p,
    id: g,
    inputProps: h,
    inputRef: b,
    name: u,
    onBlur: y,
    onChange: C,
    onFocus: T,
    readOnly: v,
    required: x = !1,
    tabIndex: w,
    type: k,
    value: R,
    ...$
  } = t, [I, m] = Rr({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), P = pr(), M = (K) => {
    T && T(K), P && P.onFocus && P.onFocus(K);
  }, N = (K) => {
    y && y(K), P && P.onBlur && P.onBlur(K);
  }, W = (K) => {
    if (K.nativeEvent.defaultPrevented)
      return;
    const H = K.target.checked;
    m(H), C && C(K, H);
  };
  let A = c;
  P && typeof A > "u" && (A = P.disabled);
  const _ = k === "checkbox" || k === "radio", G = {
    ...t,
    checked: I,
    disabled: A,
    disableFocusRipple: d,
    edge: f
  }, oe = kT(G);
  return /* @__PURE__ */ E.jsxs(IT, {
    component: "span",
    className: ge(oe.root, s),
    centerRipple: !0,
    focusRipple: !d,
    disabled: A,
    tabIndex: null,
    role: void 0,
    onFocus: M,
    onBlur: N,
    ownerState: G,
    ref: n,
    ...$,
    children: [/* @__PURE__ */ E.jsx($T, {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      className: oe.input,
      disabled: A,
      id: _ ? g : void 0,
      name: u,
      onChange: W,
      readOnly: v,
      ref: b,
      required: x,
      ownerState: G,
      tabIndex: w,
      type: k,
      ...k === "checkbox" && R === void 0 ? {} : {
        value: R
      },
      ...h
    }), I ? a : p]
  });
});
process.env.NODE_ENV !== "production" && (sf.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: o.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: o.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: an,
  /*
   * @ignore
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * The input component prop `type`.
   */
  type: o.string.isRequired,
  /**
   * The value of the component.
   */
  value: o.any
});
const MT = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), NT = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), DT = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function AT(e) {
  return ze("MuiCheckbox", e);
}
const Fa = je("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), jT = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: i
  } = e, a = {
    root: ["root", n && "indeterminate", `color${ce(r)}`, `size${ce(i)}`]
  }, s = Ve(a, AT, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, FT = ue(sf, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${ce(n.size)}`], n.color !== "default" && t[`color${ce(n.color)}`]];
  }
})(Ae(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  variants: [{
    props: {
      color: "default",
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : rt(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(tn()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : rt(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(tn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Fa.checked}, &.${Fa.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Fa.disabled}`]: {
        color: (e.vars || e).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
}))), _T = /* @__PURE__ */ E.jsx(NT, {}), LT = /* @__PURE__ */ E.jsx(MT, {}), BT = /* @__PURE__ */ E.jsx(DT, {}), lf = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = _T,
    color: a = "primary",
    icon: s = LT,
    indeterminate: l = !1,
    indeterminateIcon: c = BT,
    inputProps: d,
    size: f = "medium",
    disableRipple: p = !1,
    className: g,
    ...h
  } = r, b = l ? c : s, u = l ? c : i, y = {
    ...r,
    disableRipple: p,
    color: a,
    indeterminate: l,
    size: f
  }, C = jT(y);
  return /* @__PURE__ */ E.jsx(FT, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": l,
      ...d
    },
    icon: /* @__PURE__ */ S.cloneElement(b, {
      fontSize: b.props.fontSize ?? f
    }),
    checkedIcon: /* @__PURE__ */ S.cloneElement(u, {
      fontSize: u.props.fontSize ?? f
    }),
    ownerState: y,
    ref: n,
    className: ge(C.root, g),
    disableRipple: p,
    ...h,
    classes: C
  });
});
process.env.NODE_ENV !== "production" && (lf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: o.node,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: o.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: o.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: an,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: o.any
});
const cf = An(lf)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${Et.primary500};
    }
`;
var zT = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0
};
function WT(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return zT[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function _a(e) {
  var t = WT(e);
  return "".concat(t.value).concat(t.unit);
}
var VT = function(e, t, n) {
  var r = "react-spinners-".concat(e, "-").concat(n);
  if (typeof window > "u" || !window.document)
    return r;
  var i = document.createElement("style");
  document.head.appendChild(i);
  var a = i.sheet, s = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
  return a && a.insertRule(s, 0), r;
}, Oi = function() {
  return Oi = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Oi.apply(this, arguments);
}, HT = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, UT = VT("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function YT(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, a = e.speedMultiplier, s = a === void 0 ? 1 : a, l = e.cssOverride, c = l === void 0 ? {} : l, d = e.size, f = d === void 0 ? 15 : d, p = e.margin, g = p === void 0 ? 2 : p, h = HT(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), b = Oi({ display: "inherit" }, c), u = function(y) {
    return {
      backgroundColor: i,
      width: _a(f),
      height: _a(f),
      margin: _a(g),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(UT, " ").concat(0.75 / s, "s ").concat(y * 0.12 / s, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? S.createElement(
    "span",
    Oi({ style: b }, h),
    S.createElement("span", { style: u(1) }),
    S.createElement("span", { style: u(2) }),
    S.createElement("span", { style: u(3) })
  ) : null;
}
const qT = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: i
}) => e ? e(n, r, i) : t === yo.TEXT && typeof n == "string" && typeof r == "string" ? Hc(n).includes(Hc(r)) : t === yo.AUTOCOMPLETE ? n === r : !1, GT = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = Cn(As);
  return ot(() => n ? [...t].filter(
    (i) => Object.entries(r).every(([a, s]) => {
      if (s === void 0 || typeof s == "string" && s === "")
        return !0;
      const l = e.find((c) => c.key === a);
      return l ? qT({
        comparator: l.filterComparator,
        filterType: l.filterType ?? yo.TEXT,
        value: i[a],
        valueToMatch: s,
        row: i
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, Uc = je("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Yc = je("MuiListItemIcon", ["root", "alignItemsFlexStart"]), qc = je("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function KT(e) {
  return ze("MuiMenuItem", e);
}
const eo = je("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), XT = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, ZT = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: s
  } = e, c = Ve({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, KT, s);
  return {
    ...s,
    ...c
  };
}, QT = ue(Fr, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: XT
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${eo.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : rt(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${eo.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${eo.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : rt(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${eo.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${eo.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Uc.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Uc.inset}`]: {
    marginLeft: 52
  },
  [`& .${qc.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${qc.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Yc.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${Yc.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Us = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: a = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: d,
    role: f = "menuitem",
    tabIndex: p,
    className: g,
    ...h
  } = r, b = S.useContext(hi), u = S.useMemo(() => ({
    dense: s || b.dense || !1,
    disableGutters: c
  }), [b.dense, s, c]), y = S.useRef(null);
  Fn(() => {
    i && (y.current ? y.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const C = {
    ...r,
    dense: u.dense,
    divider: l,
    disableGutters: c
  }, T = ZT(r), v = Tt(y, n);
  let x;
  return r.disabled || (x = p !== void 0 ? p : -1), /* @__PURE__ */ E.jsx(hi.Provider, {
    value: u,
    children: /* @__PURE__ */ E.jsx(QT, {
      ref: v,
      role: f,
      tabIndex: x,
      component: a,
      focusVisibleClassName: ge(T.focusVisible, d),
      className: ge(T.root, g),
      ...h,
      ownerState: C,
      classes: T
    })
  });
});
process.env.NODE_ENV !== "production" && (Us.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
const uf = /* @__PURE__ */ S.createContext();
process.env.NODE_ENV !== "production" && (uf.displayName = "TableContext");
const df = /* @__PURE__ */ S.createContext();
process.env.NODE_ENV !== "production" && (df.displayName = "Tablelvl2Context");
function JT(e) {
  return ze("MuiTableCell", e);
}
const eS = je("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), tS = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: i,
    size: a,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${ce(r)}`, i !== "normal" && `padding${ce(i)}`, `size${ce(a)}`]
  };
  return Ve(l, JT, t);
}, nS = ue("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ce(n.size)}`], n.padding !== "normal" && t[`padding${ce(n.padding)}`], n.align !== "inherit" && t[`align${ce(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Yi(rt(e.palette.divider, 1), 0.88) : Ui(rt(e.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16,
  variants: [{
    props: {
      variant: "head"
    },
    style: {
      color: (e.vars || e).palette.text.primary,
      lineHeight: e.typography.pxToRem(24),
      fontWeight: e.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: "body"
    },
    style: {
      color: (e.vars || e).palette.text.primary
    }
  }, {
    props: {
      variant: "footer"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      lineHeight: e.typography.pxToRem(21),
      fontSize: e.typography.pxToRem(12)
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: "6px 16px",
      [`&.${eS.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "& > *": {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: "checkbox"
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px"
    }
  }, {
    props: {
      padding: "none"
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: "left"
    },
    style: {
      textAlign: "left"
    }
  }, {
    props: {
      align: "center"
    },
    style: {
      textAlign: "center"
    }
  }, {
    props: {
      align: "right"
    },
    style: {
      textAlign: "right",
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      align: "justify"
    },
    style: {
      textAlign: "justify"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.stickyHeader,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: (e.vars || e).palette.background.default
    }
  }]
}))), Ri = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiTableCell"
  }), {
    align: i = "inherit",
    className: a,
    component: s,
    padding: l,
    scope: c,
    size: d,
    sortDirection: f,
    variant: p,
    ...g
  } = r, h = S.useContext(uf), b = S.useContext(df), u = b && b.variant === "head";
  let y;
  s ? y = s : y = u ? "th" : "td";
  let C = c;
  y === "td" ? C = void 0 : !C && u && (C = "col");
  const T = p || b && b.variant, v = {
    ...r,
    align: i,
    component: y,
    padding: l || (h && h.padding ? h.padding : "normal"),
    size: d || (h && h.size ? h.size : "medium"),
    sortDirection: f,
    stickyHeader: T === "head" && h && h.stickyHeader,
    variant: T
  }, x = tS(v);
  let w = null;
  return f && (w = f === "asc" ? "ascending" : "descending"), /* @__PURE__ */ E.jsx(nS, {
    as: y,
    ref: n,
    className: ge(x.root, a),
    "aria-sort": w,
    scope: C,
    ownerState: v,
    ...g
  });
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: o.oneOf(["checkbox", "none", "normal"]),
  /**
   * Set scope attribute.
   */
  scope: o.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: o.oneOf(["asc", "desc", !1]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: o.oneOfType([o.oneOf(["body", "footer", "head"]), o.string])
});
function rS(e) {
  return ze("MuiToolbar", e);
}
je("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const oS = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return Ve({
    root: ["root", !n && "gutters", r]
  }, rS, t);
}, iS = ue("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(Ae(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2),
      [e.breakpoints.up("sm")]: {
        paddingLeft: e.spacing(3),
        paddingRight: e.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: e.mixins.toolbar
  }]
}))), ff = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: a = "div",
    disableGutters: s = !1,
    variant: l = "regular",
    ...c
  } = r, d = {
    ...r,
    component: a,
    disableGutters: s,
    variant: l
  }, f = oS(d);
  return /* @__PURE__ */ E.jsx(iS, {
    as: a,
    className: ge(f.root, i),
    ref: n,
    ownerState: d,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (ff.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: o.oneOfType([o.oneOf(["dense", "regular"]), o.string])
});
const aS = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), sS = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight"), lS = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage"), cS = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage"), pf = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    backIconButtonProps: r,
    count: i,
    disabled: a = !1,
    getItemAriaLabel: s,
    nextIconButtonProps: l,
    onPageChange: c,
    page: d,
    rowsPerPage: f,
    showFirstButton: p,
    showLastButton: g,
    slots: h = {},
    slotProps: b = {},
    ...u
  } = t, y = Es(), C = (Y) => {
    c(Y, 0);
  }, T = (Y) => {
    c(Y, d - 1);
  }, v = (Y) => {
    c(Y, d + 1);
  }, x = (Y) => {
    c(Y, Math.max(0, Math.ceil(i / f) - 1));
  }, w = h.firstButton ?? cr, k = h.lastButton ?? cr, R = h.nextButton ?? cr, $ = h.previousButton ?? cr, I = h.firstButtonIcon ?? cS, m = h.lastButtonIcon ?? lS, P = h.nextButtonIcon ?? sS, M = h.previousButtonIcon ?? aS, N = y ? k : w, W = y ? R : $, A = y ? $ : R, _ = y ? w : k, G = y ? b.lastButton : b.firstButton, oe = y ? b.nextButton : b.previousButton, K = y ? b.previousButton : b.nextButton, H = y ? b.firstButton : b.lastButton;
  return /* @__PURE__ */ E.jsxs("div", {
    ref: n,
    ...u,
    children: [p && /* @__PURE__ */ E.jsx(N, {
      onClick: C,
      disabled: a || d === 0,
      "aria-label": s("first", d),
      title: s("first", d),
      ...G,
      children: y ? /* @__PURE__ */ E.jsx(m, {
        ...b.lastButtonIcon
      }) : /* @__PURE__ */ E.jsx(I, {
        ...b.firstButtonIcon
      })
    }), /* @__PURE__ */ E.jsx(W, {
      onClick: T,
      disabled: a || d === 0,
      color: "inherit",
      "aria-label": s("previous", d),
      title: s("previous", d),
      ...oe ?? r,
      children: y ? /* @__PURE__ */ E.jsx(P, {
        ...b.nextButtonIcon
      }) : /* @__PURE__ */ E.jsx(M, {
        ...b.previousButtonIcon
      })
    }), /* @__PURE__ */ E.jsx(A, {
      onClick: v,
      disabled: a || (i !== -1 ? d >= Math.ceil(i / f) - 1 : !1),
      color: "inherit",
      "aria-label": s("next", d),
      title: s("next", d),
      ...K ?? l,
      children: y ? /* @__PURE__ */ E.jsx(M, {
        ...b.previousButtonIcon
      }) : /* @__PURE__ */ E.jsx(P, {
        ...b.nextButtonIcon
      })
    }), g && /* @__PURE__ */ E.jsx(_, {
      onClick: x,
      disabled: a || d >= Math.ceil(i / f) - 1,
      "aria-label": s("last", d),
      title: s("last", d),
      ...H,
      children: y ? /* @__PURE__ */ E.jsx(I, {
        ...b.firstButtonIcon
      }) : /* @__PURE__ */ E.jsx(m, {
        ...b.lastButtonIcon
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (pf.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  backIconButtonProps: o.object,
  /**
   * The total number of rows.
   */
  count: o.number.isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   *
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @returns {string}
   */
  getItemAriaLabel: o.func.isRequired,
  /**
   * Props applied to the next arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  nextIconButtonProps: o.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: o.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: o.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: o.number.isRequired,
  /**
   * If `true`, show the first-page button.
   */
  showFirstButton: o.bool.isRequired,
  /**
   * If `true`, show the last-page button.
   */
  showLastButton: o.bool.isRequired,
  /**
   * The props used for each slot inside the TablePaginationActions.
   * @default {}
   */
  slotProps: o.shape({
    firstButton: o.object,
    firstButtonIcon: o.object,
    lastButton: o.object,
    lastButtonIcon: o.object,
    nextButton: o.object,
    nextButtonIcon: o.object,
    previousButton: o.object,
    previousButtonIcon: o.object
  }),
  /**
   * The components used for each slot inside the TablePaginationActions.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    firstButton: o.elementType,
    firstButtonIcon: o.elementType,
    lastButton: o.elementType,
    lastButtonIcon: o.elementType,
    nextButton: o.elementType,
    nextButtonIcon: o.elementType,
    previousButton: o.elementType,
    previousButtonIcon: o.elementType
  })
});
function uS(e) {
  return ze("MuiTablePagination", e);
}
const po = je("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var Gc;
const dS = ue(Ri, {
  name: "MuiTablePagination",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(Ae(({
  theme: e
}) => ({
  overflow: "auto",
  color: (e.vars || e).palette.text.primary,
  fontSize: e.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
}))), fS = ue(ff, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (e, t) => ({
    [`& .${po.actions}`]: t.actions,
    ...t.toolbar
  })
})(Ae(({
  theme: e
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [e.breakpoints.up("sm")]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${po.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}))), pS = ue("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})({
  flex: "1 1 100%"
}), mS = ue("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (e, t) => t.selectLabel
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
}))), hS = ue(ra, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (e, t) => ({
    [`& .${po.selectIcon}`]: t.selectIcon,
    [`& .${po.select}`]: t.select,
    ...t.input,
    ...t.selectRoot
  })
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${po.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
}), gS = ue(Us, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (e, t) => t.menuItem
})({}), bS = ue("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (e, t) => t.displayedRows
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
})));
function yS({
  from: e,
  to: t,
  count: n
}) {
  return `${e}–${t} of ${n !== -1 ? n : `more than ${t}`}`;
}
function vS(e) {
  return `Go to ${e} page`;
}
const xS = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  }, uS, t);
}, mf = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiTablePagination"
  }), {
    ActionsComponent: i = pf,
    backIconButtonProps: a,
    colSpan: s,
    component: l = Ri,
    count: c,
    disabled: d = !1,
    getItemAriaLabel: f = vS,
    labelDisplayedRows: p = yS,
    labelRowsPerPage: g = "Rows per page:",
    nextIconButtonProps: h,
    onPageChange: b,
    onRowsPerPageChange: u,
    page: y,
    rowsPerPage: C,
    rowsPerPageOptions: T = [10, 25, 50, 100],
    SelectProps: v = {},
    showFirstButton: x = !1,
    showLastButton: w = !1,
    slotProps: k = {},
    slots: R = {},
    ...$
  } = r, I = r, m = xS(I), P = (k == null ? void 0 : k.select) ?? v, M = P.native ? "option" : gS;
  let N;
  (l === Ri || l === "td") && (N = s || 1e3);
  const W = Mr(P.id), A = Mr(P.labelId), _ = () => c === -1 ? (y + 1) * C : C === -1 ? c : Math.min(c, (y + 1) * C), G = {
    slots: R,
    slotProps: k
  }, [oe, K] = vt("root", {
    ref: n,
    className: m.root,
    elementType: dS,
    externalForwardedProps: {
      ...G,
      component: l,
      ...$
    },
    ownerState: I,
    additionalProps: {
      colSpan: N
    }
  }), [H, Y] = vt("toolbar", {
    className: m.toolbar,
    elementType: fS,
    externalForwardedProps: G,
    ownerState: I
  }), [ae, re] = vt("spacer", {
    className: m.spacer,
    elementType: pS,
    externalForwardedProps: G,
    ownerState: I
  }), [j, L] = vt("selectLabel", {
    className: m.selectLabel,
    elementType: mS,
    externalForwardedProps: G,
    ownerState: I,
    additionalProps: {
      id: A
    }
  }), [Z, F] = vt("select", {
    className: m.select,
    elementType: hS,
    externalForwardedProps: G,
    ownerState: I
  }), [V, J] = vt("menuItem", {
    className: m.menuItem,
    elementType: M,
    externalForwardedProps: G,
    ownerState: I
  }), [Q, le] = vt("displayedRows", {
    className: m.displayedRows,
    elementType: bS,
    externalForwardedProps: G,
    ownerState: I
  });
  return /* @__PURE__ */ E.jsx(oe, {
    ...K,
    children: /* @__PURE__ */ E.jsxs(H, {
      ...Y,
      children: [/* @__PURE__ */ E.jsx(ae, {
        ...re
      }), T.length > 1 && /* @__PURE__ */ E.jsx(j, {
        ...L,
        children: g
      }), T.length > 1 && /* @__PURE__ */ E.jsx(Z, {
        variant: "standard",
        ...!P.variant && {
          input: Gc || (Gc = /* @__PURE__ */ E.jsx(Do, {}))
        },
        value: C,
        onChange: u,
        id: W,
        labelId: A,
        ...P,
        classes: {
          ...P.classes,
          // TODO v5 remove `classes.input`
          root: ge(m.input, m.selectRoot, (P.classes || {}).root),
          select: ge(m.select, (P.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: ge(m.selectIcon, (P.classes || {}).icon)
        },
        disabled: d,
        ...F,
        children: T.map((B) => /* @__PURE__ */ qf(V, {
          ...J,
          key: B.label ? B.label : B,
          value: B.value ? B.value : B
        }, B.label ? B.label : B))
      }), /* @__PURE__ */ E.jsx(Q, {
        ...le,
        children: p({
          from: c === 0 ? 0 : y * C + 1,
          to: _(),
          count: c === -1 ? -1 : c,
          page: y
        })
      }), /* @__PURE__ */ E.jsx(i, {
        className: m.actions,
        backIconButtonProps: a,
        count: c,
        nextIconButtonProps: h,
        onPageChange: b,
        page: y,
        rowsPerPage: C,
        showFirstButton: x,
        showLastButton: w,
        slotProps: k.actions,
        slots: R.actions,
        getItemAriaLabel: f,
        disabled: d
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (mf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The component used for displaying the actions.
   * Either a string to use a HTML element or a component.
   * @default TablePaginationActions
   */
  ActionsComponent: o.elementType,
  /**
   * Props applied to the back arrow [`IconButton`](https://mui.com/material-ui/api/icon-button/) component.
   *
   * This prop is an alias for `slotProps.actions.previousButton` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.actions.previousButton` instead.
   */
  backIconButtonProps: o.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  colSpan: o.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: Pr.isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: o.func,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: o.func,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: o.node,
  /**
   * Props applied to the next arrow [`IconButton`](https://mui.com/material-ui/api/icon-button/) element.
   *
   * This prop is an alias for `slotProps.actions.nextButton` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.actions.nextButton` instead.
   */
  nextIconButtonProps: o.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: o.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: o.func,
  /**
   * The zero-based index of the current page.
   */
  page: Tn(Pr.isRequired, (e) => {
    const {
      count: t,
      page: n,
      rowsPerPage: r
    } = e;
    if (t === -1)
      return null;
    const i = Math.max(0, Math.ceil(t / r) - 1);
    return n < 0 || n > i ? new Error(`MUI: The page prop of a TablePagination is out of range (0 to ${i}, but page is ${n}).`) : null;
  }),
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: Pr.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: o.arrayOf(o.oneOfType([o.number, o.shape({
    label: o.string.isRequired,
    value: o.number.isRequired
  })]).isRequired),
  /**
   * Props applied to the rows per page [`Select`](https://mui.com/material-ui/api/select/) element.
   *
   * This prop is an alias for `slotProps.select` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.select` instead.
   *
   * @default {}
   */
  SelectProps: o.object,
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: o.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: o.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    actions: o.shape({
      firstButton: o.object,
      firstButtonIcon: o.object,
      lastButton: o.object,
      lastButtonIcon: o.object,
      nextButton: o.object,
      nextButtonIcon: o.object,
      previousButton: o.object,
      previousButtonIcon: o.object
    }),
    displayedRows: o.oneOfType([o.func, o.object]),
    menuItem: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    select: o.object,
    selectLabel: o.oneOfType([o.func, o.object]),
    spacer: o.oneOfType([o.func, o.object]),
    toolbar: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    actions: o.shape({
      firstButton: o.elementType,
      firstButtonIcon: o.elementType,
      lastButton: o.elementType,
      lastButtonIcon: o.elementType,
      nextButton: o.elementType,
      nextButtonIcon: o.elementType,
      previousButton: o.elementType,
      previousButtonIcon: o.elementType
    }),
    displayedRows: o.elementType,
    menuItem: o.elementType,
    root: o.elementType,
    select: o.elementType,
    selectLabel: o.elementType,
    spacer: o.elementType,
    toolbar: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const wS = An.div`
    height: 80px;
    width: 100%;
`, CS = Ct.memo(
  ({ currentPage: e, setCurrentPage: t, setPageSize: n, pageSize: r, totalCount: i, labels: a }) => {
    const s = It(
      (c, d) => {
        t(d);
      },
      []
    ), l = It(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ E.jsx(wS, { children: /* @__PURE__ */ E.jsx(
      mf,
      {
        labelRowsPerPage: a != null && a.rowsPerPageLabel ? /* @__PURE__ */ E.jsx("span", { children: a == null ? void 0 : a.rowsPerPageLabel }) : void 0,
        labelDisplayedRows: ({ from: c, to: d, count: f }) => `${c}-${d} ${a != null && a.ofLabel ? a.ofLabel : "of"} ${f}`,
        component: "div",
        count: i,
        page: e,
        onPageChange: s,
        rowsPerPage: r,
        onRowsPerPageChange: l
      }
    ) });
  }
), TS = (e = 10) => {
  const [t, n] = Rt(0), [r, i] = Rt(e), a = It(() => {
    n(0), i(e);
  }, []);
  return _r(() => {
    n(0);
  }, [r]), {
    currentPage: t,
    pageSize: r,
    defaultPageSize: e,
    setCurrentPage: n,
    setPageSize: i,
    resetPagination: a
  };
}, SS = An.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${Et.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, ES = Ct.memo(({ checked: e, onChange: t }) => {
  const n = It(
    (r, i) => {
      t(i, r.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ E.jsx(cf, { checked: e, onChange: n });
}), OS = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: i,
  onSortColumnsChange: a,
  defaultSortColumns: s,
  selectedRows: l,
  onSelectedRowsChange: c,
  noDataMessage: d,
  filters: f,
  setFilters: p,
  pagination: g,
  ...h
}) => {
  const { gridKey: b } = Cn(aa), { pageSize: u, currentPage: y, setCurrentPage: C, setPageSize: T } = TS(
    g == null ? void 0 : g.defaultPageSize
  ), v = RT({
    columns: r,
    selectionEnabled: !!c
  }), x = ot(
    () => v.some((W) => W.filterEnabled),
    [v]
  ), w = ot(
    () => (g == null ? void 0 : g.enabled) && !g.remotePagination,
    [g]
  ), k = ot(() => !p, [p]), R = GT({
    columns: v,
    rows: n,
    enabled: k
  }), $ = ot(() => !a, [a]), {
    sortedRows: I,
    sortColumns: m,
    setSortedColumns: P
  } = Jh({
    columns: v,
    rows: R,
    defaultSortColumns: s
  }), M = ot(() => w ? I.slice(y * u, (y + 1) * u) : I, [I, w, y, u]), N = It(
    (W, A) => A === 0 ? "first-row" : A === n.length - 1 ? "last-row" : "",
    [n]
  );
  return _r(() => {
    const W = l == null ? void 0 : l.filter(
      (A) => n.some((_) => _.id === A)
    );
    (W == null ? void 0 : W.length) != (l == null ? void 0 : l.length) && (c == null || c(W ?? []));
  }, [n, l]), /* @__PURE__ */ E.jsxs(Zh, { $pagination: !!(g != null && g.enabled), children: [
    /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsx(
      pu,
      {
        rowHeight: 50,
        selectedRows: l ? new Set(l) : void 0,
        onSelectedRowsChange: (W) => {
          c == null || c(Array.from(W));
        },
        rowKeyGetter: (W) => W.id,
        rows: M,
        onSortColumnsChange: $ ? P : a,
        sortColumns: $ ? m : i,
        columns: v,
        rowClass: N,
        headerRowHeight: x ? 70 : void 0,
        renderers: {
          renderCheckbox: (W) => /* @__PURE__ */ E.jsx(ES, { ...W }),
          ...h.renderers
        },
        ...h,
        style: { ...eh, ...e ?? {} }
      },
      b
    ) }),
    g != null && g.enabled ? /* @__PURE__ */ E.jsx(
      CS,
      {
        ...(g == null ? void 0 : g.remotePagination) ?? {
          currentPage: y,
          setCurrentPage: C,
          pageSize: u,
          setPageSize: T,
          totalCount: R.length
        }
      }
    ) : null,
    t ? /* @__PURE__ */ E.jsxs(SS, { children: [
      /* @__PURE__ */ E.jsx("div", {}),
      /* @__PURE__ */ E.jsx(YT, { color: Et.primary500 })
    ] }) : null
  ] });
}, DS = ({
  filters: e,
  setFilters: t,
  columns: n,
  visibilityColumnFeature: {
    enabled: r,
    visibilityFeatureDisabledFor: i,
    hiddenByDefault: a,
    localStorageKey: s
  } = {},
  ...l
}) => /* @__PURE__ */ E.jsx(k0, { filters: e, setFilters: t, children: /* @__PURE__ */ E.jsx(
  OT,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: a,
    localStorageKey: s,
    visibilityFeatureDisabledFor: i,
    children: /* @__PURE__ */ E.jsx(OS, { ...l, columns: n, filters: e, setFilters: t })
  }
) }), RS = An(Us)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, AS = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r } = Cn(aa), i = Ct.useRef(null), [a, s] = Ct.useState(null), l = !!a, c = It(() => {
    s(i.current);
  }, []), d = It(() => {
    s(null);
  }, []), f = It(
    (p) => () => {
      const g = n.indexOf(p);
      r(
        g === -1 ? [...n, p] : n.filter((h) => h !== p)
      );
    },
    [n]
  );
  return /* @__PURE__ */ E.jsxs("div", { ref: i, children: [
    /* @__PURE__ */ E.jsx(e, { onClick: c }),
    /* @__PURE__ */ E.jsx(Ms, { id: "column-visibility-menu", anchorEl: a, open: l, onClose: d, children: t.map((p) => /* @__PURE__ */ E.jsxs(RS, { onClick: f(p.key), children: [
      /* @__PURE__ */ E.jsx(cf, { checked: !n.includes(p.key) }),
      p.name
    ] }, p.key)) })
  ] });
};
export {
  ao as ColumnType,
  af as DATE_FORMAT,
  DS as DataGrid,
  Tp as DataGridDefaultRenderersProvider,
  yo as FilterType,
  $S as Row,
  kr as SELECT_COLUMN_KEY,
  cs as SelectCellFormatter,
  $p as SelectColumn,
  wp as ToggleGroup,
  MS as TreeDataGrid,
  AS as VisibilityColumnChooser,
  ST as convertDate,
  eh as defaultTheme,
  Hc as getStringToCompare,
  hp as renderCheckbox,
  cu as renderHeaderCell,
  Rm as renderSortIcon,
  Pm as renderSortPriority,
  xp as renderToggleGroup,
  Cp as renderValue,
  Et as taktikTheme,
  NS as textEditor,
  Rp as useHeaderRowSelection,
  iu as useRowSelection
};
