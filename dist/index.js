var Yf = Object.defineProperty;
var qf = (e, t, n) => t in e ? Yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qr = (e, t, n) => qf(e, typeof t != "symbol" ? t + "" : t, n);
import * as T from "react";
import Ct, { createContext as Oo, memo as rr, forwardRef as Ii, useContext as Cn, useMemo as ot, useCallback as kt, useRef as kn, useEffect as zr, useState as Rt, useLayoutEffect as Gf, useImperativeHandle as Kf, useId as Xf, isValidElement as Qo, cloneElement as Jo, Children as Zf, createElement as Qf } from "react";
import * as Jf from "react-dom";
import Ho, { flushSync as si } from "react-dom";
function ep(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var za = { exports: {} }, Gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rl;
function tp() {
  if (rl) return Gr;
  rl = 1;
  var e = Ct, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, d) {
    var f, p = {}, h = null, g = null;
    d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (f in c) r.call(c, f) && !a.hasOwnProperty(f) && (p[f] = c[f]);
    if (l && l.defaultProps) for (f in c = l.defaultProps, c) p[f] === void 0 && (p[f] = c[f]);
    return { $$typeof: t, type: l, key: h, ref: g, props: p, _owner: i.current };
  }
  return Gr.Fragment = n, Gr.jsx = s, Gr.jsxs = s, Gr;
}
var Kr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol;
function np() {
  return ol || (ol = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ct, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = Symbol.iterator, u = "@@iterator";
    function y(R) {
      if (R === null || typeof R != "object")
        return null;
      var K = b && R[b] || R[u];
      return typeof K == "function" ? K : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(R) {
      {
        for (var K = arguments.length, te = new Array(K > 1 ? K - 1 : 0), ye = 1; ye < K; ye++)
          te[ye - 1] = arguments[ye];
        v("error", R, te);
      }
    }
    function v(R, K, te) {
      {
        var ye = C.ReactDebugCurrentFrame, $e = ye.getStackAddendum();
        $e !== "" && (K += "%s", te = te.concat([$e]));
        var z = te.map(function(A) {
          return String(A);
        });
        z.unshift("Warning: " + K), Function.prototype.apply.call(console[R], console, z);
      }
    }
    var x = !1, w = !1, I = !1, O = !1, $ = !1, k;
    k = Symbol.for("react.module.reference");
    function m(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === a || $ || R === i || R === d || R === f || O || R === g || x || w || I || typeof R == "object" && R !== null && (R.$$typeof === h || R.$$typeof === p || R.$$typeof === s || R.$$typeof === l || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === k || R.getModuleId !== void 0));
    }
    function P(R, K, te) {
      var ye = R.displayName;
      if (ye)
        return ye;
      var $e = K.displayName || K.name || "";
      return $e !== "" ? te + "(" + $e + ")" : te;
    }
    function M(R) {
      return R.displayName || "Context";
    }
    function N(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
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
      if (typeof R == "object")
        switch (R.$$typeof) {
          case l:
            var K = R;
            return M(K) + ".Consumer";
          case s:
            var te = R;
            return M(te._context) + ".Provider";
          case c:
            return P(R, R.render, "ForwardRef");
          case p:
            var ye = R.displayName || null;
            return ye !== null ? ye : N(R.type) || "Memo";
          case h: {
            var $e = R, z = $e._payload, A = $e._init;
            try {
              return N(A(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, D = 0, F, Y, oe, G, H, q, ae;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function j() {
      {
        if (D === 0) {
          F = console.log, Y = console.info, oe = console.warn, G = console.error, H = console.group, q = console.groupCollapsed, ae = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        D++;
      }
    }
    function L() {
      {
        if (D--, D === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, R, {
              value: F
            }),
            info: W({}, R, {
              value: Y
            }),
            warn: W({}, R, {
              value: oe
            }),
            error: W({}, R, {
              value: G
            }),
            group: W({}, R, {
              value: H
            }),
            groupCollapsed: W({}, R, {
              value: q
            }),
            groupEnd: W({}, R, {
              value: ae
            })
          });
        }
        D < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = C.ReactCurrentDispatcher, _;
    function V(R, K, te) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch ($e) {
            var ye = $e.stack.trim().match(/\n( *(at )?)/);
            _ = ye && ye[1] || "";
          }
        return `
` + _ + R;
      }
    }
    var J = !1, Q;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new le();
    }
    function B(R, K) {
      if (!R || J)
        return "";
      {
        var te = Q.get(R);
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
        if (K) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (ft) {
              ye = ft;
            }
            Reflect.construct(R, [], A);
          } else {
            try {
              A.call();
            } catch (ft) {
              ye = ft;
            }
            R.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            ye = ft;
          }
          R();
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
                    return R.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", R.displayName)), typeof R == "function" && Q.set(R, De), De;
                  }
                while (me >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        J = !1, Z.current = z, L(), Error.prepareStackTrace = $e;
      }
      var at = R ? R.displayName || R.name : "", At = at ? V(at) : "";
      return typeof R == "function" && Q.set(R, At), At;
    }
    function xe(R, K, te) {
      return B(R, !1);
    }
    function pe(R) {
      var K = R.prototype;
      return !!(K && K.isReactComponent);
    }
    function be(R, K, te) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return B(R, pe(R));
      if (typeof R == "string")
        return V(R);
      switch (R) {
        case d:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case c:
            return xe(R.render);
          case p:
            return be(R.type, K, te);
          case h: {
            var ye = R, $e = ye._payload, z = ye._init;
            try {
              return be(z($e), K, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, se = {}, ke = C.ReactDebugCurrentFrame;
    function he(R) {
      if (R) {
        var K = R._owner, te = be(R.type, R._source, K ? K.type : null);
        ke.setExtraStackFrame(te);
      } else
        ke.setExtraStackFrame(null);
    }
    function Me(R, K, te, ye, $e) {
      {
        var z = Function.call.bind(Re);
        for (var A in R)
          if (z(R, A)) {
            var X = void 0;
            try {
              if (typeof R[A] != "function") {
                var ve = Error((ye || "React class") + ": " + te + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              X = R[A](K, A, ye, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              X = me;
            }
            X && !(X instanceof Error) && (he($e), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", te, A, typeof X), he(null)), X instanceof Error && !(X.message in se) && (se[X.message] = !0, he($e), S("Failed %s type: %s", te, X.message), he(null));
          }
      }
    }
    var Ee = Array.isArray;
    function de(R) {
      return Ee(R);
    }
    function it(R) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, te = K && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return te;
      }
    }
    function We(R) {
      try {
        return gt(R), !1;
      } catch {
        return !0;
      }
    }
    function gt(R) {
      return "" + R;
    }
    function Ot(R) {
      if (We(R))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(R)), gt(R);
    }
    var lt = C.ReactCurrentOwner, Pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, _e;
    function Se(R) {
      if (Re.call(R, "ref")) {
        var K = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function bt(R) {
      if (Re.call(R, "key")) {
        var K = Object.getOwnPropertyDescriptor(R, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function St(R, K) {
      typeof R.ref == "string" && lt.current;
    }
    function vn(R, K) {
      {
        var te = function() {
          Fe || (Fe = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        te.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function $t(R, K) {
      {
        var te = function() {
          _e || (_e = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        te.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var ie = function(R, K, te, ye, $e, z, A) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: K,
        ref: te,
        props: A,
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
    function Oe(R, K, te, ye, $e) {
      {
        var z, A = {}, X = null, ve = null;
        te !== void 0 && (Ot(te), X = "" + te), bt(K) && (Ot(K.key), X = "" + K.key), Se(K) && (ve = K.ref, St(K, $e));
        for (z in K)
          Re.call(K, z) && !Pt.hasOwnProperty(z) && (A[z] = K[z]);
        if (R && R.defaultProps) {
          var me = R.defaultProps;
          for (z in me)
            A[z] === void 0 && (A[z] = me[z]);
        }
        if (X || ve) {
          var we = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          X && vn(A, we), ve && $t(A, we);
        }
        return ie(R, X, ve, $e, ye, lt.current, A);
      }
    }
    var Pe = C.ReactCurrentOwner, yt = C.ReactDebugCurrentFrame;
    function ct(R) {
      if (R) {
        var K = R._owner, te = be(R.type, R._source, K ? K.type : null);
        yt.setExtraStackFrame(te);
      } else
        yt.setExtraStackFrame(null);
    }
    var _t;
    _t = !1;
    function Ft(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function xn() {
      {
        if (Pe.current) {
          var R = N(Pe.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Lt(R) {
      return "";
    }
    var Yt = {};
    function qt(R) {
      {
        var K = xn();
        if (!K) {
          var te = typeof R == "string" ? R : R.displayName || R.name;
          te && (K = `

Check the top-level render call using <` + te + ">.");
        }
        return K;
      }
    }
    function Gt(R, K) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var te = qt(K);
        if (Yt[te])
          return;
        Yt[te] = !0;
        var ye = "";
        R && R._owner && R._owner !== Pe.current && (ye = " It was passed a child from " + N(R._owner.type) + "."), ct(R), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, ye), ct(null);
      }
    }
    function Kt(R, K) {
      {
        if (typeof R != "object")
          return;
        if (de(R))
          for (var te = 0; te < R.length; te++) {
            var ye = R[te];
            Ft(ye) && Gt(ye, K);
          }
        else if (Ft(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var $e = y(R);
          if (typeof $e == "function" && $e !== R.entries)
            for (var z = $e.call(R), A; !(A = z.next()).done; )
              Ft(A.value) && Gt(A.value, K);
        }
      }
    }
    function zn(R) {
      {
        var K = R.type;
        if (K == null || typeof K == "string")
          return;
        var te;
        if (typeof K == "function")
          te = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === p))
          te = K.propTypes;
        else
          return;
        if (te) {
          var ye = N(K);
          Me(te, R.props, "prop", ye, R);
        } else if (K.PropTypes !== void 0 && !_t) {
          _t = !0;
          var $e = N(K);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(R) {
      {
        for (var K = Object.keys(R.props), te = 0; te < K.length; te++) {
          var ye = K[te];
          if (ye !== "children" && ye !== "key") {
            ct(R), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), ct(null);
            break;
          }
        }
        R.ref !== null && (ct(R), S("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var Xt = {};
    function Mt(R, K, te, ye, $e, z) {
      {
        var A = m(R);
        if (!A) {
          var X = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Lt();
          ve ? X += ve : X += xn();
          var me;
          R === null ? me = "null" : de(R) ? me = "array" : R !== void 0 && R.$$typeof === t ? (me = "<" + (N(R.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : me = typeof R, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, X);
        }
        var we = Oe(R, K, te, $e, z);
        if (we == null)
          return we;
        if (A) {
          var De = K.children;
          if (De !== void 0)
            if (ye)
              if (de(De)) {
                for (var at = 0; at < De.length; at++)
                  Kt(De[at], R);
                Object.freeze && Object.freeze(De);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kt(De, R);
        }
        if (Re.call(K, "key")) {
          var At = N(R), ft = Object.keys(K).filter(function(Xn) {
            return Xn !== "key";
          }), cn = ft.length > 0 ? "{key: someKey, " + ft.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xt[At + cn]) {
            var En = ft.length > 0 ? "{" + ft.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, cn, At, En, At), Xt[At + cn] = !0;
          }
        }
        return R === r ? ut(we) : zn(we), we;
      }
    }
    function fe(R, K, te) {
      return Mt(R, K, te, !0);
    }
    function ln(R, K, te) {
      return Mt(R, K, te, !1);
    }
    var Wn = ln, Kn = fe;
    Kr.Fragment = r, Kr.jsx = Wn, Kr.jsxs = Kn;
  }()), Kr;
}
process.env.NODE_ENV === "production" ? za.exports = tp() : za.exports = np();
var E = za.exports;
function eu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = eu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ge() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = eu(e)) && (r && (r += " "), r += t);
  return r;
}
function mn(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function rp(e) {
  e.stopPropagation();
}
function ei(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function so(e) {
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
const op = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function li(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function ip(e) {
  return li(e) && e.keyCode !== 86 ? !1 : !op.has(e.key);
}
function ap({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const sp = "mlln6zg7-0-0-beta-47";
function lp(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: i
  }) => /* @__PURE__ */ E.jsx("div", {
    className: sp,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: i
    },
    "data-measuring-cell-key": t
  }, t));
}
function cp({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], i = n[e.rowIdx];
  return tu(r, i);
}
function tu(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function up({
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
function dp({
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
    rowIdx: h
  },
  nextPosition: g,
  lastFrozenColumnIndex: b,
  isCellWithinBounds: u
}) {
  let {
    idx: y,
    rowIdx: C
  } = g;
  const S = r.length, v = (I) => {
    for (const O of i) {
      const $ = O.idx;
      if ($ > y) break;
      const k = up({
        rows: a,
        topSummaryRows: s,
        bottomSummaryRows: l,
        rowIdx: C,
        mainHeaderRowIdx: d,
        lastFrozenColumnIndex: b,
        column: O
      });
      if (k && y > $ && y < k + $) {
        y = $ + (I ? k : 0);
        break;
      }
    }
  }, x = (I) => I.level + d, w = () => {
    if (t) {
      let O = r[y].parent;
      for (; O !== void 0; ) {
        const $ = x(O);
        if (C === $) {
          y = O.idx + O.colSpan;
          break;
        }
        O = O.parent;
      }
    } else if (e) {
      let O = r[y].parent, $ = !1;
      for (; O !== void 0; ) {
        const k = x(O);
        if (C >= k) {
          y = O.idx, C = k, $ = !0;
          break;
        }
        O = O.parent;
      }
      $ || (y = p, C = h);
    }
  };
  if (u(g) && (v(t), C < d && w()), n === "CHANGE_ROW" && (y === S ? C === f || (y = 0, C += 1) : y === -1 && (C === c || (C -= 1, y = S - 1), v(!1))), C < d) {
    let O = r[y].parent;
    const $ = C;
    for (C = d; O !== void 0; ) {
      const k = x(O);
      k >= $ && (C = k, y = O.idx), O = O.parent;
    }
  }
  return {
    idx: y,
    rowIdx: C
  };
}
function fp({
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
const pp = "cj343x07-0-0-beta-47", nu = `rdg-cell ${pp}`, mp = "csofj7r7-0-0-beta-47", hp = `rdg-cell-frozen ${mp}`;
function ds(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function ru(e, t, n) {
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
function Wr(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function Ro(e, ...t) {
  return ge(nu, ...t, e.frozen && hp);
}
const {
  min: go,
  max: ci,
  floor: il,
  sign: gp,
  abs: bp
} = Math;
function lo(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function ou(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = ci(e, t), typeof n == "number" && n >= t ? go(e, n) : e;
}
function iu(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const yp = "c1bn88vv7-0-0-beta-47", vp = `rdg-checkbox-input ${yp}`;
function xp({
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
    className: vp,
    onChange: r,
    ...n
  });
}
const wp = "g1s9ylgp7-0-0-beta-47", Cp = `rdg-group-cell-content ${wp}`, Tp = "cz54e4y7-0-0-beta-47", Sp = `rdg-caret ${Tp}`;
function Ep(e) {
  return /* @__PURE__ */ E.jsx(Op, {
    ...e
  });
}
function Op({
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
    className: Cp,
    tabIndex: n,
    onKeyDown: i,
    children: [e, /* @__PURE__ */ E.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Sp,
      "aria-hidden": !0,
      children: /* @__PURE__ */ E.jsx("path", {
        d: a
      })
    })]
  });
}
function Rp(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const au = /* @__PURE__ */ Oo(void 0), Pp = au.Provider;
function ki() {
  return Cn(au);
}
function fs({
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
const su = /* @__PURE__ */ Oo(void 0), lu = su.Provider, cu = /* @__PURE__ */ Oo(void 0), Ip = cu.Provider;
function uu() {
  const e = Cn(su), t = Cn(cu);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const du = /* @__PURE__ */ Oo(void 0), kp = du.Provider, fu = /* @__PURE__ */ Oo(void 0), $p = fu.Provider;
function Mp() {
  const e = Cn(du), t = Cn(fu);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Mr = "rdg-select-column";
function Np(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Mp();
  return /* @__PURE__ */ E.jsx(fs, {
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
function Dp(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = uu();
  return /* @__PURE__ */ E.jsx(fs, {
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
function Ap(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = uu();
  return /* @__PURE__ */ E.jsx(fs, {
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
const jp = {
  key: Mr,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ E.jsx(Np, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ E.jsx(Dp, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ E.jsx(Ap, {
      ...e
    });
  }
}, _p = "auto", Fp = 50;
function Lp({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: i,
  enableVirtualization: a
}) {
  const s = (t == null ? void 0 : t.width) ?? _p, l = (t == null ? void 0 : t.minWidth) ?? Fp, c = (t == null ? void 0 : t.maxWidth) ?? void 0, d = (t == null ? void 0 : t.renderCell) ?? Rp, f = (t == null ? void 0 : t.sortable) ?? !1, p = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: g,
    colSpanColumns: b,
    lastFrozenColumnIndex: u,
    headerRowsCount: y
  } = ot(() => {
    let O = -1, $ = 1;
    const k = [];
    m(e, 1);
    function m(M, N, W) {
      for (const D of M) {
        if ("children" in D) {
          const oe = {
            name: D.name,
            parent: W,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: D.headerCellClass
          };
          m(D.children, N + 1, oe);
          continue;
        }
        const F = D.frozen ?? !1, Y = {
          ...D,
          parent: W,
          idx: 0,
          level: 0,
          frozen: F,
          width: D.width ?? s,
          minWidth: D.minWidth ?? l,
          maxWidth: D.maxWidth ?? c,
          sortable: D.sortable ?? f,
          resizable: D.resizable ?? p,
          draggable: D.draggable ?? h,
          renderCell: D.renderCell ?? d
        };
        k.push(Y), F && O++, N > $ && ($ = N);
      }
    }
    k.sort(({
      key: M,
      frozen: N
    }, {
      key: W,
      frozen: D
    }) => M === Mr ? -1 : W === Mr ? 1 : N ? D ? 0 : -1 : D ? 1 : 0);
    const P = [];
    return k.forEach((M, N) => {
      M.idx = N, pu(M, N, 0), M.colSpan != null && P.push(M);
    }), {
      columns: k,
      colSpanColumns: P,
      lastFrozenColumnIndex: O,
      headerRowsCount: $
    };
  }, [e, s, l, c, d, p, f, h]), {
    templateColumns: C,
    layoutCssVars: S,
    totalFrozenColumnWidth: v,
    columnMetrics: x
  } = ot(() => {
    const O = /* @__PURE__ */ new Map();
    let $ = 0, k = 0;
    const m = [];
    for (const M of g) {
      let N = n(M);
      typeof N == "number" ? N = ou(N, M) : N = M.minWidth, m.push(`${N}px`), O.set(M, {
        width: N,
        left: $
      }), $ += N;
    }
    if (u !== -1) {
      const M = O.get(g[u]);
      k = M.left + M.width;
    }
    const P = {};
    for (let M = 0; M <= u; M++) {
      const N = g[M];
      P[`--rdg-frozen-left-${N.idx}`] = `${O.get(N).left}px`;
    }
    return {
      templateColumns: m,
      layoutCssVars: P,
      totalFrozenColumnWidth: k,
      columnMetrics: O
    };
  }, [n, g, u]), [w, I] = ot(() => {
    if (!a)
      return [0, g.length - 1];
    const O = i + v, $ = i + r, k = g.length - 1, m = go(u + 1, k);
    if (O >= $)
      return [m, m];
    let P = m;
    for (; P < k; ) {
      const {
        left: D,
        width: F
      } = x.get(g[P]);
      if (D + F > O)
        break;
      P++;
    }
    let M = P;
    for (; M < k; ) {
      const {
        left: D,
        width: F
      } = x.get(g[M]);
      if (D + F >= $)
        break;
      M++;
    }
    const N = ci(m, P - 1), W = go(k, M + 1);
    return [N, W];
  }, [x, g, u, i, v, r, a]);
  return {
    columns: g,
    colSpanColumns: b,
    colOverscanStartIdx: w,
    colOverscanEndIdx: I,
    templateColumns: C,
    layoutCssVars: S,
    headerRowsCount: y,
    lastFrozenColumnIndex: u,
    totalFrozenColumnWidth: v
  };
}
function pu(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, pu(r, t, n - 1);
  }
}
const Nr = typeof window > "u" ? zr : Gf;
function Bp(e, t, n, r, i, a, s, l, c, d) {
  const f = kn(i), p = e.length === t.length, h = p && i !== f.current, g = [...n], b = [];
  for (const {
    key: S,
    idx: v,
    width: x
  } of t)
    typeof x == "string" && (h || !s.has(S)) && !a.has(S) && (g[v] = x, b.push(S));
  const u = g.join(" ");
  Nr(() => {
    f.current = i, y(b);
  });
  function y(S) {
    S.length !== 0 && c((v) => {
      const x = new Map(v);
      let w = !1;
      for (const I of S) {
        const O = al(r, I);
        w || (w = O !== v.get(I)), O === void 0 ? x.delete(I) : x.set(I, O);
      }
      return w ? x : v;
    });
  }
  function C(S, v) {
    const {
      key: x
    } = S, w = [...n], I = [];
    for (const {
      key: $,
      idx: k,
      width: m
    } of t)
      if (x === $) {
        const P = typeof v == "number" ? `${v}px` : v;
        w[k] = P;
      } else p && typeof m == "string" && !a.has($) && (w[k] = m, I.push($));
    r.current.style.gridTemplateColumns = w.join(" ");
    const O = typeof v == "number" ? v : al(r, x);
    si(() => {
      l(($) => {
        const k = new Map($);
        return k.set(x, O), k;
      }), y(I);
    }), d == null || d(S.idx, O);
  }
  return {
    gridTemplateColumns: u,
    handleColumnResize: C
  };
}
function al(e, t) {
  var i;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (i = e.current) == null ? void 0 : i.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function zp() {
  const e = kn(null), [t, n] = Rt(1), [r, i] = Rt(1), [a, s] = Rt(0);
  return Nr(() => {
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
      width: h,
      height: g
    } = e.current.getBoundingClientRect(), b = p - d, u = h - f + c, y = g - b;
    n(u), i(y), s(b);
    const C = new l((S) => {
      const v = S[0].contentBoxSize[0], {
        clientHeight: x,
        offsetHeight: w
      } = e.current;
      si(() => {
        n(v.inlineSize), i(v.blockSize), s(w - x);
      });
    });
    return C.observe(e.current), () => {
      C.disconnect();
    };
  }, []), [e, t, r, a];
}
function Wt(e) {
  const t = kn(e);
  zr(() => {
    t.current = e;
  });
  const n = kt((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Po(e) {
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
function Wp({
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
    const h = (g, b) => b !== void 0 && g + b > a ? (p = g, !0) : !1;
    for (const g of t) {
      const b = g.idx;
      if (b >= p || h(b, mn(g, l, {
        type: "HEADER"
      })))
        break;
      for (let u = c; u <= d; u++) {
        const y = n[u];
        if (h(b, mn(g, l, {
          type: "ROW",
          row: y
        })))
          break;
      }
      if (r != null) {
        for (const u of r)
          if (h(b, mn(g, l, {
            type: "SUMMARY",
            row: u
          })))
            break;
      }
      if (i != null) {
        for (const u of i)
          if (h(b, mn(g, l, {
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
    for (let h = 0; h <= s; h++) {
      const g = e[h];
      h < f && !g.frozen || p.push(g);
    }
    return p;
  }, [f, s, e]);
}
function Vp({
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
        findRowIdx: (y) => il(y / t)
      };
    let h = 0, g = " ";
    const b = e.map((y) => {
      const C = t(y), S = {
        top: h,
        height: C
      };
      return g += `${C}px `, h += C, S;
    }), u = (y) => ci(0, go(e.length - 1, y));
    return {
      totalRowHeight: h,
      gridTemplateRows: g,
      getRowTop: (y) => b[u(y)].top,
      getRowHeight: (y) => b[u(y)].height,
      findRowIdx(y) {
        let C = 0, S = b.length - 1;
        for (; C <= S; ) {
          const v = C + il((S - C) / 2), x = b[v].top;
          if (x === y) return v;
          if (x < y ? C = v + 1 : x > y && (S = v - 1), C > S) return S;
        }
        return 0;
      }
    };
  }, [t, e]);
  let f = 0, p = e.length - 1;
  if (i) {
    const g = d(r), b = d(r + n);
    f = ci(0, g - 4), p = go(e.length - 1, b + 4);
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
const Hp = "c1w9bbhr7-0-0-beta-47", Up = "c1creorc7-0-0-beta-47", Yp = `rdg-cell-drag-handle ${Hp}`;
function qp({
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
  setDragging: h,
  setDraggedOverRowIdx: g
}) {
  const {
    idx: b,
    rowIdx: u
  } = s;
  function y(w) {
    if (w.preventDefault(), w.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", I), window.addEventListener("mouseup", O);
    function I($) {
      $.buttons !== 1 && O();
    }
    function O() {
      window.removeEventListener("mouseover", I), window.removeEventListener("mouseup", O), h(!1), C();
    }
  }
  function C() {
    const w = l.current;
    if (w === void 0) return;
    const I = u < w ? u + 1 : w, O = u < w ? w + 1 : u;
    v(I, O), g(void 0);
  }
  function S(w) {
    w.stopPropagation(), v(u + 1, t.length);
  }
  function v(w, I) {
    const O = t[u], $ = [...t], k = [];
    for (let m = w; m < I; m++)
      if (c({
        rowIdx: m,
        idx: b
      })) {
        const P = f({
          columnKey: n.key,
          sourceRow: O,
          targetRow: t[m]
        });
        P !== t[m] && ($[m] = P, k.push(m));
      }
    k.length > 0 && (d == null || d($, {
      indexes: k,
      column: n
    }));
  }
  function x() {
    var m;
    const w = ((m = n.colSpan) == null ? void 0 : m.call(n, {
      type: "ROW",
      row: t[u]
    })) ?? 1, {
      insetInlineStart: I,
      ...O
    } = Wr(n, w), $ = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", k = n.idx + w - 1 === i;
    return {
      ...O,
      gridRowStart: e,
      marginInlineEnd: k ? void 0 : $,
      marginBlockEnd: a ? void 0 : $,
      insetInlineStart: I ? `calc(${I} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ E.jsx("div", {
    style: x(),
    className: ge(Yp, n.frozen && Up),
    onClick: p,
    onMouseDown: y,
    onDoubleClick: S
  });
}
const Gp = "cis5rrm7-0-0-beta-47";
function Kp({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: i,
  closeEditor: a,
  onKeyDown: s,
  navigate: l
}) {
  var C, S, v;
  const c = kn(void 0), d = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, f = Wt(() => {
    g(!0, !1);
  });
  zr(() => {
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
  function h(x) {
    if (s) {
      const w = so(x);
      if (s({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          l(x);
        },
        onClose: g
      }, w), w.isGridDefaultPrevented()) return;
    }
    x.key === "Escape" ? g() : x.key === "Enter" ? g(!0) : ap(x) && l(x);
  }
  function g(x = !1, w = !0) {
    x ? i(n, !0, w) : a(w);
  }
  function b(x, w = !1) {
    i(x, w, w);
  }
  const {
    cellClass: u
  } = e, y = Ro(e, "rdg-editor-container", typeof u == "function" ? u(n) : u, !((S = e.editorOptions) != null && S.displayCellContent) && Gp);
  return /* @__PURE__ */ E.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: y,
    style: Wr(e, t),
    onKeyDown: h,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ E.jsxs(E.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: b,
        onClose: g
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
function Xp({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: i,
    onFocus: a
  } = Po(n), {
    colSpan: s
  } = e, l = iu(e, t), c = e.idx + 1;
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
    className: ge(nu, e.headerCellClass),
    style: {
      ...ru(e, t, l),
      gridColumnStart: c,
      gridColumnEnd: c + s
    },
    onFocus: a,
    onClick: d,
    children: e.name
  });
}
const Zp = "h44jtk67-0-0-beta-47", Qp = "hcgkhxz7-0-0-beta-47", Jp = `rdg-header-sort-name ${Qp}`;
function mu({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ E.jsx(em, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function em({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = ki().renderSortStatus;
  return /* @__PURE__ */ E.jsxs("span", {
    className: Zp,
    children: [/* @__PURE__ */ E.jsx("span", {
      className: Jp,
      children: n
    }), /* @__PURE__ */ E.jsx("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const tm = "c6l2wv17-0-0-beta-47", nm = "c1kqdw7y7-0-0-beta-47", rm = `rdg-cell-resizable ${nm}`, om = "r1y6ywlx7-0-0-beta-47", im = "rdg-cell-draggable", am = "c1bezg5o7-0-0-beta-47", sm = `rdg-cell-dragging ${am}`, lm = "c1vc96037-0-0-beta-47", cm = `rdg-cell-drag-over ${lm}`;
function um({
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
  const [h, g] = Rt(!1), [b, u] = Rt(!1), y = f === "rtl", C = iu(e, n), {
    tabIndex: S,
    childTabIndex: v,
    onFocus: x
  } = Po(r), w = s == null ? void 0 : s.findIndex((_) => _.columnKey === e.key), I = w !== void 0 && w > -1 ? s[w] : void 0, O = I == null ? void 0 : I.direction, $ = I !== void 0 && s.length > 1 ? w + 1 : void 0, k = O && !$ ? O === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: m,
    resizable: P,
    draggable: M
  } = e, N = Ro(e, e.headerCellClass, m && tm, P && rm, M && im, h && sm, b && cm), W = e.renderHeaderCell ?? mu;
  function D(_) {
    if (_.pointerType === "mouse" && _.buttons !== 1)
      return;
    _.preventDefault();
    const {
      currentTarget: V,
      pointerId: J
    } = _, Q = V.parentElement, {
      right: le,
      left: B
    } = Q.getBoundingClientRect(), xe = y ? _.clientX - B : le - _.clientX;
    let pe = !1;
    function be(ke) {
      const {
        width: he,
        right: Me,
        left: Ee
      } = Q.getBoundingClientRect();
      let de = y ? Me + xe - ke.clientX : ke.clientX + xe - Ee;
      de = ou(de, e), he > 0 && de !== he && i(e, de);
    }
    function Re() {
      pe = !0, i(e, "max-content");
    }
    function se(ke) {
      pe || be(ke), V.removeEventListener("pointermove", be), V.removeEventListener("dblclick", Re), V.removeEventListener("lostpointercapture", se);
    }
    V.setPointerCapture(J), V.addEventListener("pointermove", be), V.addEventListener("dblclick", Re), V.addEventListener("lostpointercapture", se);
  }
  function F(_) {
    if (l == null) return;
    const {
      sortDescendingFirst: V
    } = e;
    if (I === void 0) {
      const J = {
        columnKey: e.key,
        direction: V ? "DESC" : "ASC"
      };
      l(s && _ ? [...s, J] : [J]);
    } else {
      let J;
      if ((V === !0 && O === "DESC" || V !== !0 && O === "ASC") && (J = {
        columnKey: e.key,
        direction: O === "ASC" ? "DESC" : "ASC"
      }), _) {
        const Q = [...s];
        J ? Q[w] = J : Q.splice(w, 1), l(Q);
      } else
        l(J ? [J] : []);
    }
  }
  function Y(_) {
    c({
      idx: e.idx,
      rowIdx: n
    }), m && F(_.ctrlKey || _.metaKey);
  }
  function oe(_) {
    x == null || x(_), d && c({
      idx: 0,
      rowIdx: n
    });
  }
  function G(_) {
    (_.key === " " || _.key === "Enter") && (_.preventDefault(), F(_.ctrlKey || _.metaKey));
  }
  function H(_) {
    _.dataTransfer.setData(p, e.key), _.dataTransfer.dropEffect = "move", g(!0);
  }
  function q() {
    g(!1);
  }
  function ae(_) {
    _.preventDefault(), _.dataTransfer.dropEffect = "move";
  }
  function re(_) {
    if (u(!1), _.dataTransfer.types.includes(p.toLowerCase())) {
      const V = _.dataTransfer.getData(p.toLowerCase());
      V !== e.key && (_.preventDefault(), a == null || a(V, e.key));
    }
  }
  function j(_) {
    sl(_) && u(!0);
  }
  function L(_) {
    sl(_) && u(!1);
  }
  let Z;
  return M && (Z = {
    draggable: !0,
    onDragStart: H,
    onDragEnd: q,
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
    "aria-sort": k,
    tabIndex: d ? 0 : S,
    className: N,
    style: {
      ...ru(e, n, C),
      ...Wr(e, t)
    },
    onFocus: oe,
    onClick: Y,
    onKeyDown: m ? G : void 0,
    ...Z,
    children: [W({
      column: e,
      sortDirection: O,
      priority: $,
      tabIndex: v
    }), P && /* @__PURE__ */ E.jsx("div", {
      className: om,
      onClick: rp,
      onPointerDown: D
    })]
  });
}
function sl(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const dm = "r1upfr807-0-0-beta-47", ps = `rdg-row ${dm}`, fm = "r190mhd37-0-0-beta-47", $i = "rdg-row-selected", pm = "r139qu9m7-0-0-beta-47", mm = "rdg-top-summary-row", hm = "rdg-bottom-summary-row", gm = "h10tskcx7-0-0-beta-47", hu = `rdg-header-row ${gm}`;
function bm({
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
  const p = Xf(), h = [];
  for (let g = 0; g < t.length; g++) {
    const b = t[g], u = mn(b, s, {
      type: "HEADER"
    });
    u !== void 0 && (g += u - 1), h.push(/* @__PURE__ */ E.jsx(um, {
      column: b,
      colSpan: u,
      rowIdx: e,
      isCellSelected: l === b.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: a,
      sortColumns: i,
      selectCell: c,
      shouldFocusGrid: d && g === 0,
      direction: f,
      dragDropKey: p
    }, b.key));
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: ge(hu, l === -1 && $i),
    children: h
  });
}
const ym = /* @__PURE__ */ rr(bm);
function vm({
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
        a.push(/* @__PURE__ */ E.jsx(Xp, {
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
    className: hu,
    children: a
  });
}
const xm = /* @__PURE__ */ rr(vm), wm = "c6ra8a37-0-0-beta-47", Cm = `rdg-cell-copied ${wm}`, Tm = "cq910m07-0-0-beta-47", Sm = `rdg-cell-dragged-over ${Tm}`;
function Em({
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
  ...h
}) {
  const {
    tabIndex: g,
    childTabIndex: b,
    onFocus: u
  } = Po(n), {
    cellClass: y
  } = e, C = Ro(e, typeof y == "function" ? y(a) : y, r && Cm, i && Sm), S = tu(e, a);
  function v($) {
    p({
      rowIdx: s,
      idx: e.idx
    }, $);
  }
  function x($) {
    if (l) {
      const k = so($);
      if (l({
        row: a,
        column: e,
        selectCell: v
      }, k), k.isGridDefaultPrevented()) return;
    }
    v();
  }
  function w($) {
    if (d) {
      const k = so($);
      if (d({
        row: a,
        column: e,
        selectCell: v
      }, k), k.isGridDefaultPrevented()) return;
    }
    v();
  }
  function I($) {
    if (c) {
      const k = so($);
      if (c({
        row: a,
        column: e,
        selectCell: v
      }, k), k.isGridDefaultPrevented()) return;
    }
    v(!0);
  }
  function O($) {
    f(e, $);
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !S || void 0,
    tabIndex: g,
    className: C,
    style: Wr(e, t),
    onClick: x,
    onDoubleClick: I,
    onContextMenu: w,
    onFocus: u,
    ...h,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: s,
      isCellEditable: S,
      tabIndex: b,
      onRowChange: O
    })
  });
}
const Om = /* @__PURE__ */ rr(Em);
function Rm({
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
  onCellClick: h,
  onCellDoubleClick: g,
  onCellContextMenu: b,
  rowClass: u,
  setDraggedOverRowIdx: y,
  onMouseEnter: C,
  onRowChange: S,
  selectCell: v,
  ...x
}, w) {
  const I = Wt((m, P) => {
    S(m, t, P);
  });
  function O(m) {
    y == null || y(t), C == null || C(m);
  }
  e = ge(ps, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, u == null ? void 0 : u(d, t), e, r === -1 && $i);
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
    W && p ? $.push(p) : $.push(/* @__PURE__ */ E.jsx(Om, {
      column: P,
      colSpan: N,
      row: d,
      rowIdx: t,
      isCopied: s === M,
      isDraggedOver: l === M,
      isCellSelected: W,
      onClick: h,
      onDoubleClick: g,
      onContextMenu: b,
      onRowChange: I,
      selectCell: v
    }, P.key));
  }
  const k = ot(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: i
  }), [i, a]);
  return /* @__PURE__ */ E.jsx(lu, {
    value: k,
    children: /* @__PURE__ */ E.jsx("div", {
      role: "row",
      ref: w,
      className: e,
      onMouseEnter: O,
      style: ds(n),
      ...x,
      children: $
    })
  });
}
const gu = /* @__PURE__ */ rr(/* @__PURE__ */ Ii(Rm)), NS = gu;
function bu(e, t) {
  return /* @__PURE__ */ E.jsx(gu, {
    ...t
  }, e);
}
function Pm({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const i = kn(null);
  return Nr(() => {
    ei(i.current);
  }), Nr(() => {
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
const Im = "a3ejtar7-0-0-beta-47", km = `rdg-sort-arrow ${Im}`;
function $m({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ E.jsxs(E.Fragment, {
    children: [Mm({
      sortDirection: e
    }), Nm({
      priority: t
    })]
  });
}
function Mm({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ E.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: km,
    "aria-hidden": !0,
    children: /* @__PURE__ */ E.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Nm({
  priority: e
}) {
  return e;
}
const Dm = "rnvodz57-0-0-beta-47", Am = `rdg ${Dm}`, jm = "vlqv91k7-0-0-beta-47", _m = `rdg-viewport-dragging ${jm}`, Fm = "f1lsfrzw7-0-0-beta-47", Lm = "f1cte0lg7-0-0-beta-47", Bm = "s8wc6fl7-0-0-beta-47";
function zm({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: i,
  selectCell: a
}) {
  var h;
  const {
    tabIndex: s,
    childTabIndex: l,
    onFocus: c
  } = Po(i), {
    summaryCellClass: d
  } = e, f = Ro(e, Bm, typeof d == "function" ? d(n) : d);
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
    style: Wr(e, t),
    onClick: p,
    onFocus: c,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: n,
      tabIndex: l
    })
  });
}
const Wm = /* @__PURE__ */ rr(zm), Vm = "skuhp557-0-0-beta-47", Hm = "tf8l5ub7-0-0-beta-47", Um = `rdg-summary-row ${Vm}`;
function Ym({
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
  for (let h = 0; h < r.length; h++) {
    const g = r[h], b = mn(g, s, {
      type: "SUMMARY",
      row: n
    });
    b !== void 0 && (h += b - 1);
    const u = l === g.idx;
    p.push(/* @__PURE__ */ E.jsx(Wm, {
      column: g,
      colSpan: b,
      row: n,
      rowIdx: e,
      isCellSelected: u,
      selectCell: d
    }, g.key));
  }
  return /* @__PURE__ */ E.jsx("div", {
    role: "row",
    "aria-rowindex": f,
    className: ge(ps, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Um, c ? `${mm} ${Hm}` : hm, l === -1 && $i),
    style: {
      ...ds(t),
      "--rdg-summary-row-top": i !== void 0 ? `${i}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: p
  });
}
const ll = /* @__PURE__ */ rr(Ym);
function qm(e, t) {
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
    isRowSelectionDisabled: h,
    onSelectedRowsChange: g,
    sortColumns: b,
    onSortColumnsChange: u,
    defaultColumnOptions: y,
    onCellClick: C,
    onCellDoubleClick: S,
    onCellContextMenu: v,
    onCellKeyDown: x,
    onSelectedCellChange: w,
    onScroll: I,
    onColumnResize: O,
    onColumnsReorder: $,
    onFill: k,
    onCopy: m,
    onPaste: P,
    enableVirtualization: M,
    renderers: N,
    className: W,
    style: D,
    rowClass: F,
    direction: Y,
    role: oe,
    "aria-label": G,
    "aria-labelledby": H,
    "aria-describedby": q,
    "aria-rowcount": ae,
    "data-testid": re
  } = e, j = ki(), L = oe ?? "grid", Z = c ?? 35, _ = d ?? (typeof Z == "number" ? Z : 35), V = f ?? (typeof Z == "number" ? Z : 35), J = (N == null ? void 0 : N.renderRow) ?? (j == null ? void 0 : j.renderRow) ?? bu, Q = (N == null ? void 0 : N.renderSortStatus) ?? (j == null ? void 0 : j.renderSortStatus) ?? $m, le = (N == null ? void 0 : N.renderCheckbox) ?? (j == null ? void 0 : j.renderCheckbox) ?? xp, B = (N == null ? void 0 : N.noRowsFallback) ?? (j == null ? void 0 : j.noRowsFallback), xe = M ?? !0, pe = Y ?? "ltr", [be, Re] = Rt(0), [se, ke] = Rt(0), [he, Me] = Rt(() => /* @__PURE__ */ new Map()), [Ee, de] = Rt(() => /* @__PURE__ */ new Map()), [it, We] = Rt(null), [gt, Ot] = Rt(!1), [lt, Pt] = Rt(void 0), [Fe, _e] = Rt(null), Se = kt((ee) => he.get(ee.key) ?? Ee.get(ee.key) ?? ee.width, [Ee, he]), [bt, St, vn, $t] = zp(), {
    columns: ie,
    colSpanColumns: Oe,
    lastFrozenColumnIndex: Pe,
    headerRowsCount: yt,
    colOverscanStartIdx: ct,
    colOverscanEndIdx: _t,
    templateColumns: Ft,
    layoutCssVars: xn,
    totalFrozenColumnWidth: Lt
  } = Lp({
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
  })), Wn = kn(fe), Kn = kn(lt), R = kn(-1), K = kn(null), te = kn(!1), ye = L === "treegrid", $e = yt * _, z = Gt * V, A = vn - $e - z, X = p != null && g != null, ve = pe === "rtl", me = ve ? "ArrowRight" : "ArrowLeft", we = ve ? "ArrowLeft" : "ArrowRight", De = ae ?? yt + r.length + Gt, at = ot(() => ({
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
  } = Vp({
    rows: r,
    rowHeight: Z,
    clientHeight: A,
    scrollTop: be,
    enableVirtualization: xe
  }), Bt = Wp({
    columns: ie,
    colSpanColumns: Oe,
    colOverscanStartIdx: ct,
    colOverscanEndIdx: _t,
    lastFrozenColumnIndex: Pe,
    rowOverscanStartIdx: ft,
    rowOverscanEndIdx: cn,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: la,
    handleColumnResize: xf
  } = Bp(ie, Bt, Ft, bt, St, he, Ee, Me, de, O), wf = ye ? -1 : 0, gr = ie.length - 1, ca = fa(fe), Bo = Js(fe), Cf = _ + En + z + $t, Tf = Wt(xf), Sf = Wt($), Ef = Wt(u), Of = Wt(C), Rf = Wt(S), Pf = Wt(v), If = Wt(Mf), kf = Wt(Xs), $f = Wt(zo), ua = Wt(Ur), Ks = Wt(({
    idx: ee,
    rowIdx: ne
  }) => {
    Ur({
      rowIdx: ut + ne - 1,
      idx: ee
    });
  });
  Nr(() => {
    if (!ca || ha(fe, Wn.current)) {
      Wn.current = fe;
      return;
    }
    Wn.current = fe, fe.idx === -1 && (K.current.focus({
      preventScroll: !0
    }), ei(K.current));
  }), Nr(() => {
    te.current && (te.current = !1, tl());
  }), Kf(t, () => ({
    element: bt.current,
    scrollToCell({
      idx: ee,
      rowIdx: ne
    }) {
      const Ce = ee !== void 0 && ee > Pe && ee < ie.length ? ee : void 0, Te = ne !== void 0 && br(ne) ? ne : void 0;
      (Ce !== void 0 || Te !== void 0) && _e({
        idx: Ce,
        rowIdx: Te
      });
    },
    selectCell: Ur
  }));
  const da = kt((ee) => {
    Pt(ee), Kn.current = ee;
  }, []);
  function Mf(ee) {
    if (!g) return;
    lo(s);
    const ne = new Set(p);
    for (const Ce of r) {
      if ((h == null ? void 0 : h(Ce)) === !0) continue;
      const Te = s(Ce);
      ee.checked ? ne.add(Te) : ne.delete(Te);
    }
    g(ne);
  }
  function Xs(ee) {
    if (!g) return;
    lo(s);
    const {
      row: ne,
      checked: Ce,
      isShiftClick: Te
    } = ee;
    if ((h == null ? void 0 : h(ne)) === !0) return;
    const Be = new Set(p), et = s(ne), dt = R.current, pt = r.indexOf(ne);
    if (R.current = pt, Ce ? Be.add(et) : Be.delete(et), Te && dt !== -1 && dt !== pt && dt < r.length) {
      const Zt = gp(pt - dt);
      for (let zt = dt + Zt; zt !== pt; zt += Zt) {
        const On = r[zt];
        (h == null ? void 0 : h(On)) !== !0 && (Ce ? Be.add(s(On)) : Be.delete(s(On)));
      }
    }
    g(Be);
  }
  function Nf(ee) {
    var pt;
    const {
      idx: ne,
      rowIdx: Ce,
      mode: Te
    } = fe;
    if (Te === "EDIT") return;
    if (x && br(Ce)) {
      const Zt = r[Ce], zt = so(ee);
      if (x({
        mode: "SELECT",
        row: Zt,
        column: ie[ne],
        rowIdx: Ce,
        selectCell: Ur
      }, zt), zt.isGridDefaultPrevented()) return;
    }
    if (!(ee.target instanceof Element)) return;
    const Be = ee.target.closest(".rdg-cell") !== null, et = ye && ee.target === K.current;
    if (!Be && !et) return;
    const {
      keyCode: dt
    } = ee;
    if (Bo && (P != null || m != null) && li(ee)) {
      if (dt === 67) {
        if (((pt = window.getSelection()) == null ? void 0 : pt.isCollapsed) === !1) return;
        Af();
        return;
      }
      if (dt === 86) {
        jf();
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
        el(ee);
        break;
      default:
        _f(ee);
        break;
    }
  }
  function Df(ee) {
    const {
      scrollTop: ne,
      scrollLeft: Ce
    } = ee.currentTarget;
    si(() => {
      Re(ne), ke(bp(Ce));
    }), I == null || I(ee);
  }
  function zo(ee, ne, Ce) {
    if (typeof l != "function" || Ce === r[ne]) return;
    const Te = [...r];
    Te[ne] = Ce, l(Te, {
      indexes: [ne],
      column: ee
    });
  }
  function Zs() {
    fe.mode === "EDIT" && zo(ie[fe.idx], fe.rowIdx, fe.row);
  }
  function Af() {
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
  function jf() {
    if (!P || !l || it === null || !Wo(fe))
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
    zo(Ce, ne, Be);
  }
  function _f(ee) {
    if (!Bo) return;
    const ne = r[fe.rowIdx], {
      key: Ce,
      shiftKey: Te
    } = ee;
    if (X && Te && Ce === " ") {
      lo(s);
      const Be = s(ne);
      Xs({
        row: ne,
        checked: !p.has(Be),
        isShiftClick: !1
      }), ee.preventDefault();
      return;
    }
    Wo(fe) && ip(ee) && ln(({
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
  function Qs(ee) {
    return ee >= wf && ee <= gr;
  }
  function br(ee) {
    return ee >= 0 && ee < r.length;
  }
  function fa({
    idx: ee,
    rowIdx: ne
  }) {
    return ne >= ut && ne <= Mt && Qs(ee);
  }
  function Ff({
    idx: ee,
    rowIdx: ne
  }) {
    return br(ne) && ee >= 0 && ee <= gr;
  }
  function Js({
    idx: ee,
    rowIdx: ne
  }) {
    return br(ne) && Qs(ee);
  }
  function Wo(ee) {
    return Ff(ee) && cp({
      columns: ie,
      rows: r,
      selectedPosition: ee
    });
  }
  function Ur(ee, ne) {
    if (!fa(ee)) return;
    Zs();
    const Ce = r[ee.rowIdx], Te = ha(fe, ee);
    ne && Wo(ee) ? ln({
      ...ee,
      mode: "EDIT",
      row: Ce,
      originalRow: Ce
    }) : Te ? ei(cl(bt.current)) : (te.current = !0, ln({
      ...ee,
      mode: "SELECT"
    })), w && !Te && w({
      rowIdx: ee.rowIdx,
      row: Ce,
      column: ie[ee.idx]
    });
  }
  function Lf(ee, ne, Ce) {
    const {
      idx: Te,
      rowIdx: Be
    } = fe, et = ca && Te === -1;
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
          idx: gr,
          rowIdx: ne ? Mt : Be
        };
      case "PageUp": {
        if (fe.rowIdx === ut) return fe;
        const dt = Le(Be) + un(Be) - A;
        return {
          idx: Te,
          rowIdx: dt > 0 ? wn(dt) : 0
        };
      }
      case "PageDown": {
        if (fe.rowIdx >= r.length) return fe;
        const dt = Le(Be) + A;
        return {
          idx: Te,
          rowIdx: dt < En ? wn(dt) : r.length - 1
        };
      }
      default:
        return fe;
    }
  }
  function el(ee) {
    const {
      key: ne,
      shiftKey: Ce
    } = ee;
    let Te = "NONE";
    if (ne === "Tab") {
      if (fp({
        shiftKey: Ce,
        maxColIdx: gr,
        minRowIdx: ut,
        maxRowIdx: Mt,
        selectedPosition: fe
      })) {
        Zs();
        return;
      }
      Te = "CHANGE_ROW";
    }
    ee.preventDefault();
    const Be = li(ee), et = Lf(ne, Be, Ce);
    if (ha(fe, et)) return;
    const dt = dp({
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
      isCellWithinBounds: fa
    });
    Ur(dt);
  }
  function Bf(ee) {
    if (lt === void 0) return;
    const {
      rowIdx: ne
    } = fe;
    return (ne < lt ? ne < ee && ee <= lt : ne > ee && ee >= lt) ? fe.idx : void 0;
  }
  function tl() {
    const ee = cl(bt.current);
    if (ee === null) return;
    ei(ee), (ee.querySelector('[tabindex="0"]') ?? ee).focus({
      preventScroll: !0
    });
  }
  function zf() {
    if (k == null || fe.mode === "EDIT" || !Js(fe))
      return;
    const {
      idx: ee,
      rowIdx: ne
    } = fe, Ce = ie[ee];
    if (Ce.renderEditCell == null || Ce.editable === !1)
      return;
    const Te = Se(Ce);
    return /* @__PURE__ */ E.jsx(qp, {
      gridRowStart: Kt + ne + 1,
      rows: r,
      column: Ce,
      columnWidth: Te,
      maxColIdx: gr,
      isLastRow: ne === Mt,
      selectedPosition: fe,
      isCellEditable: Wo,
      latestDraggedOverRowIdx: Kn,
      onRowsChange: l,
      onClick: tl,
      onFill: k,
      setDragging: Ot,
      setDraggedOverRowIdx: da
    });
  }
  function Wf(ee) {
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
      Zt ? si(() => {
        zo(Te, fe.rowIdx, pt), et(zt);
      }) : ln((On) => ({
        ...On,
        row: pt
      }));
    };
    return r[fe.rowIdx] !== fe.originalRow && et(!1), /* @__PURE__ */ E.jsx(Kp, {
      column: Te,
      colSpan: Be,
      row: Ce,
      rowIdx: ee,
      onRowChange: dt,
      closeEditor: et,
      onKeyDown: x,
      navigate: el
    }, Te.key);
  }
  function Yr(ee) {
    const ne = fe.idx === -1 ? void 0 : ie[fe.idx];
    return ne !== void 0 && fe.rowIdx === ee && !Bt.includes(ne) ? fe.idx > _t ? [...Bt, ne] : [...Bt.slice(0, Pe + 1), ne, ...Bt.slice(Pe + 1)] : Bt;
  }
  function Vf() {
    const ee = [], {
      idx: ne,
      rowIdx: Ce
    } = fe, Te = Bo && Ce < ft ? ft - 1 : ft, Be = Bo && Ce > cn ? cn + 1 : cn;
    for (let et = Te; et <= Be; et++) {
      const dt = et === ft - 1 || et === cn + 1, pt = dt ? Ce : et;
      let Zt = Bt;
      const zt = ne === -1 ? void 0 : ie[ne];
      zt !== void 0 && (dt ? Zt = [zt] : Zt = Yr(pt));
      const On = r[pt], Hf = Kt + pt + 1;
      let pa = pt, ma = !1;
      typeof s == "function" && (pa = s(On), ma = (p == null ? void 0 : p.has(pa)) ?? !1), ee.push(J(pa, {
        "aria-rowindex": Kt + pt + 1,
        "aria-selected": X ? ma : void 0,
        rowIdx: pt,
        row: On,
        viewportColumns: Zt,
        isRowSelectionDisabled: (h == null ? void 0 : h(On)) ?? !1,
        isRowSelected: ma,
        onCellClick: Of,
        onCellDoubleClick: Rf,
        onCellContextMenu: Pf,
        rowClass: F,
        gridRowStart: Hf,
        copiedCellIdx: it !== null && it.row === On ? ie.findIndex((Uf) => Uf.key === it.columnKey) : void 0,
        selectedCellIdx: Ce === pt ? ne : void 0,
        draggedOverCellIdx: Bf(pt),
        setDraggedOverRowIdx: gt ? da : void 0,
        lastFrozenColumnIndex: Pe,
        onRowChange: $f,
        selectCell: ua,
        selectedCellEditor: Wf(pt)
      }));
    }
    return ee;
  }
  (fe.idx > gr || fe.rowIdx > Mt) && (ln({
    idx: -1,
    rowIdx: ut - 1,
    mode: "SELECT"
  }), da(void 0));
  let Vo = `repeat(${yt}, ${_}px)`;
  Yt > 0 && (Vo += ` repeat(${Yt}, ${V}px)`), r.length > 0 && (Vo += Xn), qt > 0 && (Vo += ` repeat(${qt}, ${V}px)`);
  const nl = fe.idx === -1 && fe.rowIdx !== ut - 1;
  return /* @__PURE__ */ E.jsxs("div", {
    role: L,
    "aria-label": G,
    "aria-labelledby": H,
    "aria-describedby": q,
    "aria-multiselectable": X ? !0 : void 0,
    "aria-colcount": ie.length,
    "aria-rowcount": De,
    className: ge(Am, W, gt && _m),
    style: {
      ...D,
      scrollPaddingInlineStart: fe.idx > Pe || (Fe == null ? void 0 : Fe.idx) !== void 0 ? `${Lt}px` : void 0,
      scrollPaddingBlock: br(fe.rowIdx) || (Fe == null ? void 0 : Fe.rowIdx) !== void 0 ? `${$e + Yt * V}px ${qt * V}px` : void 0,
      gridTemplateColumns: la,
      gridTemplateRows: Vo,
      "--rdg-header-row-height": `${_}px`,
      "--rdg-scroll-height": `${Cf}px`,
      ...xn
    },
    dir: pe,
    ref: bt,
    onScroll: Df,
    onKeyDown: Nf,
    "data-testid": re,
    children: [/* @__PURE__ */ E.jsxs(Pp, {
      value: at,
      children: [/* @__PURE__ */ E.jsx($p, {
        value: If,
        children: /* @__PURE__ */ E.jsxs(kp, {
          value: At,
          children: [Array.from({
            length: zn
          }, (ee, ne) => /* @__PURE__ */ E.jsx(xm, {
            rowIdx: ne + 1,
            level: -zn + ne,
            columns: Yr(ut + ne),
            selectedCellIdx: fe.rowIdx === ut + ne ? fe.idx : void 0,
            selectCell: Ks
          }, ne)), /* @__PURE__ */ E.jsx(ym, {
            rowIdx: yt,
            columns: Yr(Xt),
            onColumnResize: Tf,
            onColumnsReorder: Sf,
            sortColumns: b,
            onSortColumnsChange: Ef,
            lastFrozenColumnIndex: Pe,
            selectedCellIdx: fe.rowIdx === Xt ? fe.idx : void 0,
            selectCell: Ks,
            shouldFocusGrid: !ca,
            direction: pe
          })]
        })
      }), r.length === 0 && B ? B : /* @__PURE__ */ E.jsxs(E.Fragment, {
        children: [i == null ? void 0 : i.map((ee, ne) => {
          const Ce = yt + 1 + ne, Te = Xt + 1 + ne, Be = fe.rowIdx === Te, et = $e + V * ne;
          return /* @__PURE__ */ E.jsx(ll, {
            "aria-rowindex": Ce,
            rowIdx: Te,
            gridRowStart: Ce,
            row: ee,
            top: et,
            bottom: void 0,
            viewportColumns: Yr(Te),
            lastFrozenColumnIndex: Pe,
            selectedCellIdx: Be ? fe.idx : void 0,
            isTop: !0,
            selectCell: ua
          }, ne);
        }), /* @__PURE__ */ E.jsx(Ip, {
          value: kf,
          children: Vf()
        }), a == null ? void 0 : a.map((ee, ne) => {
          const Ce = Kt + r.length + ne + 1, Te = r.length + ne, Be = fe.rowIdx === Te, et = A > En ? vn - V * (a.length - ne) : void 0, dt = et === void 0 ? V * (a.length - 1 - ne) : void 0;
          return /* @__PURE__ */ E.jsx(ll, {
            "aria-rowindex": De - qt + ne + 1,
            rowIdx: Te,
            gridRowStart: Ce,
            row: ee,
            top: et,
            bottom: dt,
            viewportColumns: Yr(Te),
            lastFrozenColumnIndex: Pe,
            selectedCellIdx: Be ? fe.idx : void 0,
            isTop: !1,
            selectCell: ua
          }, ne);
        })]
      })]
    }), zf(), lp(Bt), ye && /* @__PURE__ */ E.jsx("div", {
      ref: K,
      tabIndex: nl ? 0 : -1,
      className: ge(Fm, nl && [fm, Pe !== -1 && pm], !br(fe.rowIdx) && Lm),
      style: {
        gridRowStart: fe.rowIdx + Kt + 1
      }
    }), Fe !== null && /* @__PURE__ */ E.jsx(Pm, {
      scrollToPosition: Fe,
      setScrollToCellPosition: _e,
      gridElement: bt.current
    })]
  });
}
function cl(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function ha(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const yu = /* @__PURE__ */ Ii(qm);
function Gm({
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
    onFocus: h
  } = Po(i);
  function g() {
    d(e);
  }
  const b = c && l === a.idx;
  return /* @__PURE__ */ E.jsx("div", {
    role: "gridcell",
    "aria-colindex": a.idx + 1,
    "aria-selected": i,
    tabIndex: f,
    className: Ro(a),
    style: {
      ...Wr(a),
      cursor: b ? "pointer" : "default"
    },
    onClick: b ? g : void 0,
    onFocus: h,
    children: (!c || b) && ((u = a.renderGroupCell) == null ? void 0 : u.call(a, {
      groupKey: t,
      childRows: n,
      column: a,
      row: s,
      isExpanded: r,
      tabIndex: p,
      toggleGroup: g
    }))
  }, a.key);
}
const Km = /* @__PURE__ */ rr(Gm), Xm = "g1yxluv37-0-0-beta-47", Zm = `rdg-group-row ${Xm}`;
function Qm({
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
  const h = r[0].key === Mr ? t.level + 1 : t.level;
  function g() {
    s({
      rowIdx: n,
      idx: -1
    });
  }
  const b = ot(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: a
  }), [a]);
  return /* @__PURE__ */ E.jsx(lu, {
    value: b,
    children: /* @__PURE__ */ E.jsx("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: ge(ps, Zm, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, i === -1 && $i),
      onClick: g,
      style: ds(l),
      ...p,
      children: r.map((u) => /* @__PURE__ */ E.jsx(Km, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: i === u.idx,
        column: u,
        row: t,
        groupColumnIndex: h,
        toggleGroup: d,
        isGroupByColumn: c.includes(u.key)
      }, u.key))
    })
  });
}
const Jm = /* @__PURE__ */ rr(Qm);
function eh({
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
  onExpandedGroupIdsChange: h,
  ...g
}, b) {
  var q, ae, re;
  const u = ki(), y = (c == null ? void 0 : c.renderRow) ?? (u == null ? void 0 : u.renderRow) ?? bu, C = 1 + (((q = g.topSummaryRows) == null ? void 0 : q.length) ?? 0), S = g.direction === "rtl", v = S ? "ArrowRight" : "ArrowLeft", x = S ? "ArrowLeft" : "ArrowRight", w = Wt(G), {
    columns: I,
    groupBy: O
  } = ot(() => {
    const j = [...e].sort(({
      key: Z
    }, {
      key: _
    }) => Z === Mr ? -1 : _ === Mr ? 1 : d.includes(Z) ? d.includes(_) ? d.indexOf(Z) - d.indexOf(_) : -1 : d.includes(_) ? 1 : 0), L = [];
    for (const [Z, _] of j.entries())
      d.includes(_.key) && (L.push(_.key), j[Z] = {
        ..._,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: _.renderGroupCell ?? Ep,
        editable: !1
      });
    return {
      columns: j,
      groupBy: L
    };
  }, [e, d]), [$, k] = ot(() => {
    if (O.length === 0) return [void 0, t.length];
    const j = (L, [Z, ..._], V) => {
      let J = 0;
      const Q = {};
      for (const [le, B] of Object.entries(f(L, Z))) {
        const [xe, pe] = _.length === 0 ? [B, B.length] : j(B, _, V + J + 1);
        Q[le] = {
          childRows: B,
          childGroups: xe,
          startRowIndex: V + J
        }, J += pe + 1;
      }
      return [Q, J];
    };
    return j(t, O, 0);
  }, [O, f, t]), [m, P] = ot(() => {
    const j = /* @__PURE__ */ new Set();
    if (!$) return [t, _];
    const L = [], Z = (V, J, Q) => {
      if (th(V)) {
        L.push(...V);
        return;
      }
      Object.keys(V).forEach((le, B, xe) => {
        const pe = J !== void 0 ? `${J}__${le}` : le, be = p.has(pe), {
          childRows: Re,
          childGroups: se,
          startRowIndex: ke
        } = V[le], he = {
          id: pe,
          parentId: J,
          groupKey: le,
          isExpanded: be,
          childRows: Re,
          level: Q,
          posInSet: B,
          startRowIndex: ke,
          setSize: xe.length
        };
        L.push(he), j.add(he), be && Z(se, pe, Q + 1);
      });
    };
    return Z($, void 0, 0), [L, _];
    function _(V) {
      return j.has(V);
    }
  }, [p, $, t]), M = ot(() => typeof n == "function" ? (j) => P(j) ? n({
    type: "GROUP",
    row: j
  }) : n({
    type: "ROW",
    row: j
  }) : n, [P, n]), N = kt((j) => {
    const L = m.indexOf(j);
    for (let Z = L - 1; Z >= 0; Z--) {
      const _ = m[Z];
      if (P(_) && (!P(j) || j.parentId === _.id))
        return [_, Z];
    }
  }, [P, m]), W = kt((j) => {
    if (P(j))
      return j.id;
    if (typeof r == "function")
      return r(j);
    const L = N(j);
    if (L !== void 0) {
      const {
        startRowIndex: Z,
        childRows: _
      } = L[0], V = _.indexOf(j);
      return Z + V + 1;
    }
    return m.indexOf(j);
  }, [N, P, r, m]), D = ot(() => {
    if (s == null) return null;
    lo(r);
    const j = new Set(s);
    for (const L of m)
      P(L) && L.childRows.every((_) => s.has(r(_))) && j.add(L.id);
    return j;
  }, [P, r, s, m]);
  function F(j) {
    if (!l) return;
    lo(r);
    const L = new Set(s);
    for (const Z of m) {
      const _ = W(Z);
      if (D != null && D.has(_) && !j.has(_))
        if (P(Z))
          for (const V of Z.childRows)
            L.delete(r(V));
        else
          L.delete(_);
      else if (!(D != null && D.has(_)) && j.has(_))
        if (P(Z))
          for (const V of Z.childRows)
            L.add(r(V));
        else
          L.add(_);
    }
    l(L);
  }
  function Y(j, L) {
    if (i == null || i(j, L), L.isGridDefaultPrevented() || j.mode === "EDIT") return;
    const {
      column: Z,
      rowIdx: _,
      selectCell: V
    } = j, J = (Z == null ? void 0 : Z.idx) ?? -1, Q = m[_];
    if (P(Q)) {
      if (J === -1 && (L.key === v && Q.isExpanded || L.key === x && !Q.isExpanded) && (L.preventDefault(), L.preventGridDefault(), G(Q.id)), J === -1 && L.key === v && !Q.isExpanded && Q.level !== 0) {
        const le = N(Q);
        le !== void 0 && (L.preventGridDefault(), V({
          idx: J,
          rowIdx: le[1]
        }));
      }
      li(L) && (L.keyCode === 67 || L.keyCode === 86) && L.preventGridDefault();
    }
  }
  function oe(j, {
    indexes: L,
    column: Z
  }) {
    if (!a) return;
    const _ = [...t], V = [];
    for (const J of L) {
      const Q = t.indexOf(m[J]);
      _[Q] = j[J], V.push(Q);
    }
    a(_, {
      indexes: V,
      column: Z
    });
  }
  function G(j) {
    const L = new Set(p);
    L.has(j) ? L.delete(j) : L.add(j), h(L);
  }
  function H(j, {
    row: L,
    rowClass: Z,
    onCellClick: _,
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
      return /* @__PURE__ */ E.jsx(Jm, {
        ...Re,
        "aria-rowindex": C + he + 1,
        row: L,
        groupBy: O,
        toggleGroup: w
      }, j);
    }
    let se = Re["aria-rowindex"];
    const ke = N(L);
    if (ke !== void 0) {
      const {
        startRowIndex: he,
        childRows: Me
      } = ke[0], Ee = Me.indexOf(L);
      se = he + C + Ee + 2;
    }
    return y(j, {
      ...Re,
      "aria-rowindex": se,
      row: L,
      rowClass: Z,
      onCellClick: _,
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
  return /* @__PURE__ */ E.jsx(yu, {
    ...g,
    role: "treegrid",
    "aria-rowcount": k + 1 + (((ae = g.topSummaryRows) == null ? void 0 : ae.length) ?? 0) + (((re = g.bottomSummaryRows) == null ? void 0 : re.length) ?? 0),
    ref: b,
    columns: I,
    rows: m,
    rowHeight: M,
    rowKeyGetter: W,
    onRowsChange: oe,
    selectedRows: D,
    onSelectedRowsChange: F,
    onCellKeyDown: Y,
    renderers: {
      ...c,
      renderRow: H
    }
  });
}
function th(e) {
  return Array.isArray(e);
}
const DS = /* @__PURE__ */ Ii(eh), nh = "t7vyx3i7-0-0-beta-47", rh = `rdg-text-editor ${nh}`;
function oh(e) {
  e == null || e.focus(), e == null || e.select();
}
function AS({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ E.jsx("input", {
    className: rh,
    ref: oh,
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
}, ih = {
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
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ui.apply(null, arguments);
}
function vu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ah = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sh = /* @__PURE__ */ vu(
  function(e) {
    return ah.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function lh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ch(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var uh = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ch(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = lh(i);
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
}(), Nt = "-ms-", di = "-moz-", He = "-webkit-", xu = "comm", ms = "rule", hs = "decl", dh = "@import", wu = "@keyframes", fh = "@layer", ph = Math.abs, Mi = String.fromCharCode, mh = Object.assign;
function hh(e, t) {
  return It(e, 0) ^ 45 ? (((t << 2 ^ It(e, 0)) << 2 ^ It(e, 1)) << 2 ^ It(e, 2)) << 2 ^ It(e, 3) : 0;
}
function Cu(e) {
  return e.trim();
}
function gh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ue(e, t, n) {
  return e.replace(t, n);
}
function Wa(e, t) {
  return e.indexOf(t);
}
function It(e, t) {
  return e.charCodeAt(t) | 0;
}
function bo(e, t, n) {
  return e.slice(t, n);
}
function Pn(e) {
  return e.length;
}
function gs(e) {
  return e.length;
}
function Uo(e, t) {
  return t.push(e), e;
}
function bh(e, t) {
  return e.map(t).join("");
}
var Ni = 1, Dr = 1, Tu = 0, Ut = 0, wt = 0, Vr = "";
function Di(e, t, n, r, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: a, line: Ni, column: Dr, length: s, return: "" };
}
function Xr(e, t) {
  return mh(Di("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function yh() {
  return wt;
}
function vh() {
  return wt = Ut > 0 ? It(Vr, --Ut) : 0, Dr--, wt === 10 && (Dr = 1, Ni--), wt;
}
function nn() {
  return wt = Ut < Tu ? It(Vr, Ut++) : 0, Dr++, wt === 10 && (Dr = 1, Ni++), wt;
}
function Nn() {
  return It(Vr, Ut);
}
function ti() {
  return Ut;
}
function Io(e, t) {
  return bo(Vr, e, t);
}
function yo(e) {
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
function Su(e) {
  return Ni = Dr = 1, Tu = Pn(Vr = e), Ut = 0, [];
}
function Eu(e) {
  return Vr = "", e;
}
function ni(e) {
  return Cu(Io(Ut - 1, Va(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xh(e) {
  for (; (wt = Nn()) && wt < 33; )
    nn();
  return yo(e) > 2 || yo(wt) > 3 ? "" : " ";
}
function wh(e, t) {
  for (; --t && nn() && !(wt < 48 || wt > 102 || wt > 57 && wt < 65 || wt > 70 && wt < 97); )
    ;
  return Io(e, ti() + (t < 6 && Nn() == 32 && nn() == 32));
}
function Va(e) {
  for (; nn(); )
    switch (wt) {
      case e:
        return Ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Va(wt);
        break;
      case 40:
        e === 41 && Va(e);
        break;
      case 92:
        nn();
        break;
    }
  return Ut;
}
function Ch(e, t) {
  for (; nn() && e + wt !== 57; )
    if (e + wt === 84 && Nn() === 47)
      break;
  return "/*" + Io(t, Ut - 1) + "*" + Mi(e === 47 ? e : nn());
}
function Th(e) {
  for (; !yo(Nn()); )
    nn();
  return Io(e, Ut);
}
function Sh(e) {
  return Eu(ri("", null, null, null, [""], e = Su(e), 0, [0], e));
}
function ri(e, t, n, r, i, a, s, l, c) {
  for (var d = 0, f = 0, p = s, h = 0, g = 0, b = 0, u = 1, y = 1, C = 1, S = 0, v = "", x = i, w = a, I = r, O = v; y; )
    switch (b = S, S = nn()) {
      case 40:
        if (b != 108 && It(O, p - 1) == 58) {
          Wa(O += Ue(ni(S), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += ni(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += xh(b);
        break;
      case 92:
        O += wh(ti() - 1, 7);
        continue;
      case 47:
        switch (Nn()) {
          case 42:
          case 47:
            Uo(Eh(Ch(nn(), ti()), t, n), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * u:
        l[d++] = Pn(O) * C;
      case 125 * u:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            C == -1 && (O = Ue(O, /\f/g, "")), g > 0 && Pn(O) - p && Uo(g > 32 ? dl(O + ";", r, n, p - 1) : dl(Ue(O, " ", "") + ";", r, n, p - 2), c);
            break;
          case 59:
            O += ";";
          default:
            if (Uo(I = ul(O, t, n, d, f, i, l, v, x = [], w = [], p), a), S === 123)
              if (f === 0)
                ri(O, t, I, I, x, a, p, l, w);
              else
                switch (h === 99 && It(O, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ri(e, I, I, r && Uo(ul(e, I, I, 0, 0, i, l, v, i, x = [], p), w), i, w, p, l, r ? x : w);
                    break;
                  default:
                    ri(O, I, I, I, [""], w, 0, l, w);
                }
        }
        d = f = g = 0, u = C = 1, v = O = "", p = s;
        break;
      case 58:
        p = 1 + Pn(O), g = b;
      default:
        if (u < 1) {
          if (S == 123)
            --u;
          else if (S == 125 && u++ == 0 && vh() == 125)
            continue;
        }
        switch (O += Mi(S), S * u) {
          case 38:
            C = f > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            l[d++] = (Pn(O) - 1) * C, C = 1;
            break;
          case 64:
            Nn() === 45 && (O += ni(nn())), h = Nn(), f = p = Pn(v = O += Th(ti())), S++;
            break;
          case 45:
            b === 45 && Pn(O) == 2 && (u = 0);
        }
    }
  return a;
}
function ul(e, t, n, r, i, a, s, l, c, d, f) {
  for (var p = i - 1, h = i === 0 ? a : [""], g = gs(h), b = 0, u = 0, y = 0; b < r; ++b)
    for (var C = 0, S = bo(e, p + 1, p = ph(u = s[b])), v = e; C < g; ++C)
      (v = Cu(u > 0 ? h[C] + " " + S : Ue(S, /&\f/g, h[C]))) && (c[y++] = v);
  return Di(e, t, n, i === 0 ? ms : l, c, d, f);
}
function Eh(e, t, n) {
  return Di(e, t, n, xu, Mi(yh()), bo(e, 2, -2), 0);
}
function dl(e, t, n, r) {
  return Di(e, t, n, hs, bo(e, 0, r), bo(e, r + 1, -1), r);
}
function Pr(e, t) {
  for (var n = "", r = gs(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Oh(e, t, n, r) {
  switch (e.type) {
    case fh:
      if (e.children.length) break;
    case dh:
    case hs:
      return e.return = e.return || e.value;
    case xu:
      return "";
    case wu:
      return e.return = e.value + "{" + Pr(e.children, r) + "}";
    case ms:
      e.value = e.props.join(",");
  }
  return Pn(n = Pr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Rh(e) {
  var t = gs(e);
  return function(n, r, i, a) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, i, a) || "";
    return s;
  };
}
function Ph(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ih = function(t, n, r) {
  for (var i = 0, a = 0; i = a, a = Nn(), i === 38 && a === 12 && (n[r] = 1), !yo(a); )
    nn();
  return Io(t, Ut);
}, kh = function(t, n) {
  var r = -1, i = 44;
  do
    switch (yo(i)) {
      case 0:
        i === 38 && Nn() === 12 && (n[r] = 1), t[r] += Ih(Ut - 1, n, r);
        break;
      case 2:
        t[r] += ni(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Nn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Mi(i);
    }
  while (i = nn());
  return t;
}, $h = function(t, n) {
  return Eu(kh(Su(t), n));
}, fl = /* @__PURE__ */ new WeakMap(), Mh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !fl.get(r)) && !i) {
      fl.set(t, !0);
      for (var a = [], s = $h(n, a), l = r.props, c = 0, d = 0; c < s.length; c++)
        for (var f = 0; f < l.length; f++, d++)
          t.props[d] = a[c] ? s[c].replace(/&\f/g, l[f]) : l[f] + " " + s[c];
    }
  }
}, Nh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ou(e, t) {
  switch (hh(e, t)) {
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
      return He + e + di + e + Nt + e + e;
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
      if (Pn(e) - 1 - t > 6) switch (It(e, t + 1)) {
        case 109:
          if (It(e, t + 4) !== 45) break;
        case 102:
          return Ue(e, /(.+:)(.+)-([^]+)/, "$1" + He + "$2-$3$1" + di + (It(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Wa(e, "stretch") ? Ou(Ue(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (It(e, t + 1) !== 115) break;
    case 6444:
      switch (It(e, Pn(e) - 3 - (~Wa(e, "!important") && 10))) {
        case 107:
          return Ue(e, ":", ":" + He) + e;
        case 101:
          return Ue(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + He + (It(e, 14) === 45 ? "inline-" : "") + "box$3$1" + He + "$2$3$1" + Nt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (It(e, t + 11)) {
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
var Dh = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case hs:
      t.return = Ou(t.value, t.length);
      break;
    case wu:
      return Pr([Xr(t, {
        value: Ue(t.value, "@", "@" + He)
      })], i);
    case ms:
      if (t.length) return bh(t.props, function(a) {
        switch (gh(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Pr([Xr(t, {
              props: [Ue(a, /:(read-\w+)/, ":" + di + "$1")]
            })], i);
          case "::placeholder":
            return Pr([Xr(t, {
              props: [Ue(a, /:(plac\w+)/, ":" + He + "input-$1")]
            }), Xr(t, {
              props: [Ue(a, /:(plac\w+)/, ":" + di + "$1")]
            }), Xr(t, {
              props: [Ue(a, /:(plac\w+)/, Nt + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Ah = [Dh], jh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(u) {
      var y = u.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Ah, a = {}, s, l = [];
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
  var c, d = [Mh, Nh];
  {
    var f, p = [Oh, Ph(function(u) {
      f.insert(u);
    })], h = Rh(d.concat(i, p)), g = function(y) {
      return Pr(Sh(y), h);
    };
    c = function(y, C, S, v) {
      f = S, g(y ? y + "{" + C.styles + "}" : C.styles), v && (b.inserted[C.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new uh({
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
}, Ha = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl;
function _h() {
  if (pl) return Ye;
  pl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function v(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
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
                case g:
                case s:
                  return w;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function x(w) {
    return v(w) === d;
  }
  return Ye.AsyncMode = c, Ye.ConcurrentMode = d, Ye.ContextConsumer = l, Ye.ContextProvider = s, Ye.Element = t, Ye.ForwardRef = f, Ye.Fragment = r, Ye.Lazy = b, Ye.Memo = g, Ye.Portal = n, Ye.Profiler = a, Ye.StrictMode = i, Ye.Suspense = p, Ye.isAsyncMode = function(w) {
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
    return v(w) === g;
  }, Ye.isPortal = function(w) {
    return v(w) === n;
  }, Ye.isProfiler = function(w) {
    return v(w) === a;
  }, Ye.isStrictMode = function(w) {
    return v(w) === i;
  }, Ye.isSuspense = function(w) {
    return v(w) === p;
  }, Ye.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === d || w === a || w === i || w === p || w === h || typeof w == "object" && w !== null && (w.$$typeof === b || w.$$typeof === g || w.$$typeof === s || w.$$typeof === l || w.$$typeof === f || w.$$typeof === y || w.$$typeof === C || w.$$typeof === S || w.$$typeof === u);
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
var ml;
function Fh() {
  return ml || (ml = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function v(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === r || B === d || B === a || B === i || B === p || B === h || typeof B == "object" && B !== null && (B.$$typeof === b || B.$$typeof === g || B.$$typeof === s || B.$$typeof === l || B.$$typeof === f || B.$$typeof === y || B.$$typeof === C || B.$$typeof === S || B.$$typeof === u);
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
                  case g:
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
    var w = c, I = d, O = l, $ = s, k = t, m = f, P = r, M = b, N = g, W = n, D = a, F = i, Y = p, oe = !1;
    function G(B) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(B) || x(B) === c;
    }
    function H(B) {
      return x(B) === d;
    }
    function q(B) {
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
    function _(B) {
      return x(B) === g;
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
    qe.AsyncMode = w, qe.ConcurrentMode = I, qe.ContextConsumer = O, qe.ContextProvider = $, qe.Element = k, qe.ForwardRef = m, qe.Fragment = P, qe.Lazy = M, qe.Memo = N, qe.Portal = W, qe.Profiler = D, qe.StrictMode = F, qe.Suspense = Y, qe.isAsyncMode = G, qe.isConcurrentMode = H, qe.isContextConsumer = q, qe.isContextProvider = ae, qe.isElement = re, qe.isForwardRef = j, qe.isFragment = L, qe.isLazy = Z, qe.isMemo = _, qe.isPortal = V, qe.isProfiler = J, qe.isStrictMode = Q, qe.isSuspense = le, qe.isValidElementType = v, qe.typeOf = x;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Ha.exports = _h() : Ha.exports = Fh();
var bs = Ha.exports, Ru = bs, Lh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Pu = {};
Pu[Ru.ForwardRef] = Lh;
Pu[Ru.Memo] = Bh;
var zh = !0;
function Wh(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var Iu = function(t, n, r) {
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
  zh === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, ku = function(t, n, r) {
  Iu(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Vh(e) {
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
var Hh = {
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
}, Uh = /[A-Z]|^ms/g, Yh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $u = function(t) {
  return t.charCodeAt(1) === 45;
}, hl = function(t) {
  return t != null && typeof t != "boolean";
}, ga = /* @__PURE__ */ vu(function(e) {
  return $u(e) ? e : e.replace(Uh, "-$&").toLowerCase();
}), gl = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Yh, function(r, i, a) {
          return In = {
            name: i,
            styles: a,
            next: In
          }, i;
        });
  }
  return Hh[t] !== 1 && !$u(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function vo(e, t, n) {
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
        return In = {
          name: i.name,
          styles: i.styles,
          next: In
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            In = {
              name: s.name,
              styles: s.styles,
              next: In
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return qh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = In, d = n(e);
        return In = c, vo(e, t, d);
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
function qh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += vo(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += a + "{" + t[l] + "}" : hl(l) && (r += ga(a) + ":" + gl(a, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var c = 0; c < s.length; c++)
          hl(s[c]) && (r += ga(a) + ":" + gl(a, s[c]) + ";");
      else {
        var d = vo(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            r += ga(a) + ":" + d + ";";
            break;
          }
          default:
            r += a + "{" + d + "}";
        }
      }
    }
  return r;
}
var bl = /label:\s*([^\s;{]+)\s*(;|$)/g, In;
function Ai(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  In = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += vo(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += vo(n, t, e[l]), r) {
      var c = a;
      i += c[l];
    }
  bl.lastIndex = 0;
  for (var d = "", f; (f = bl.exec(i)) !== null; )
    d += "-" + f[1];
  var p = Vh(i) + d;
  return {
    name: p,
    styles: i,
    next: In
  };
}
var Gh = function(t) {
  return t();
}, Mu = T.useInsertionEffect ? T.useInsertionEffect : !1, Kh = Mu || Gh, yl = Mu || T.useLayoutEffect, Nu = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ jh({
    key: "css"
  }) : null
);
Nu.Provider;
var Du = function(t) {
  return /* @__PURE__ */ Ii(function(n, r) {
    var i = Cn(Nu);
    return t(n, i, r);
  });
}, ys = /* @__PURE__ */ T.createContext({}), Xh = /* @__PURE__ */ Du(function(e, t) {
  var n = e.styles, r = Ai([n], void 0, T.useContext(ys)), i = T.useRef();
  return yl(function() {
    var a = t.key + "-global", s = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), s.hydrate([c])), i.current = [s, l], function() {
      s.flush();
    };
  }, [t]), yl(function() {
    var a = i.current, s = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && ku(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function vs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ai(t);
}
var ko = function() {
  var t = vs.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Zh = sh, Qh = function(t) {
  return t !== "theme";
}, vl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Zh : Qh;
}, xl = function(t, n, r) {
  var i;
  if (n) {
    var a = n.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Jh = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return Iu(n, r, i), Kh(function() {
    return ku(n, r, i);
  }), null;
}, eg = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, a, s;
  n !== void 0 && (a = n.label, s = n.target);
  var l = xl(t, n, r), c = l || vl(i), d = !c("as");
  return function() {
    var f = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && p.push("label:" + a + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      p.push(f[0][0]);
      for (var h = f.length, g = 1; g < h; g++)
        p.push(f[g], f[0][g]);
    }
    var b = Du(function(u, y, C) {
      var S = d && u.as || i, v = "", x = [], w = u;
      if (u.theme == null) {
        w = {};
        for (var I in u)
          w[I] = u[I];
        w.theme = T.useContext(ys);
      }
      typeof u.className == "string" ? v = Wh(y.registered, x, u.className) : u.className != null && (v = u.className + " ");
      var O = Ai(p.concat(x), y.registered, w);
      v += y.key + "-" + O.name, s !== void 0 && (v += " " + s);
      var $ = d && l === void 0 ? vl(S) : c, k = {};
      for (var m in u)
        d && m === "as" || $(m) && (k[m] = u[m]);
      return k.className = v, C && (k.ref = C), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Jh, {
        cache: y,
        serialized: O,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ T.createElement(S, k));
    });
    return b.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = p, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(u, y) {
      return e(u, ui({}, n, y, {
        shouldForwardProp: xl(b, y, !0)
      })).apply(void 0, p);
    }, b;
  };
}, tg = [
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
], An = eg.bind();
tg.forEach(function(e) {
  An[e] = An(e);
});
const ng = An.div`
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
var Rr = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e.BOOLEAN = "boolean", e))(Rr || {}), xo = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(xo || {});
function rg(e, t, n, r) {
  return (i, a) => {
    const s = r ? r(i) : i[e], l = r ? r(a) : a[e];
    try {
      if (n)
        return n(s, l, i, a);
      if (t === Rr.NUMBER) {
        const c = Number(s), d = Number(l);
        return isNaN(c) || isNaN(d) ? (console.warn("Invalid number for sorting:", { a: s, b: l }), isNaN(c) ? 1 : -1) : c - d;
      } else if (t === Rr.DATE) {
        const c = new Date(s).getTime(), d = new Date(l).getTime();
        return isNaN(c) || isNaN(d) ? (console.warn("Invalid date for sorting:", { a: s, b: l }), isNaN(c) ? 1 : -1) : c - d;
      }
      return t === Rr.STRING || !t ? String(s).localeCompare(String(l)) : t === Rr.BOOLEAN ? +!!s - +!!l : 0;
    } catch (c) {
      return console.error("Error in sorting:", c), 0;
    }
  };
}
const og = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, i] = Rt(n ?? []), a = ot(() => r.length === 0 ? t : [...t].sort((l, c) => {
    for (const d of r) {
      const f = e.find((g) => g.key === d.columnKey), h = rg(
        d.columnKey,
        f == null ? void 0 : f.type,
        f == null ? void 0 : f.sortComparator,
        f == null ? void 0 : f.getColumnValue
      )(l, c);
      if (h !== 0)
        return d.direction === "ASC" ? h : -h;
    }
    return 0;
  }), [t, r]), s = kt((l) => {
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
var Ua = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ba, wl;
function ig() {
  if (wl) return ba;
  wl = 1;
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
  return ba = i() ? Object.assign : function(a, s) {
    for (var l, c = r(a), d, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        d = e(l);
        for (var h = 0; h < d.length; h++)
          n.call(l, d[h]) && (c[d[h]] = l[d[h]]);
      }
    }
    return c;
  }, ba;
}
var ya, Cl;
function xs() {
  if (Cl) return ya;
  Cl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ya = e, ya;
}
var va, Tl;
function Au() {
  return Tl || (Tl = 1, va = Function.call.bind(Object.prototype.hasOwnProperty)), va;
}
var xa, Sl;
function ag() {
  if (Sl) return xa;
  Sl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = xs(), n = {}, r = Au();
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
              var h = Error(
                (c || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = a[f](s, f, c, l, null, t);
          } catch (b) {
            p = b;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var g = d ? d() : "";
            e(
              "Failed " + l + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, xa = i, xa;
}
var wa, El;
function sg() {
  if (El) return wa;
  El = 1;
  var e = bs, t = ig(), n = xs(), r = Au(), i = ag(), a = function() {
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
  return wa = function(l, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(H) {
      var q = H && (d && H[d] || H[f]);
      if (typeof q == "function")
        return q;
    }
    var h = "<<anonymous>>", g = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: S(),
      arrayOf: v,
      element: x(),
      elementType: w(),
      instanceOf: I,
      node: m(),
      objectOf: $,
      oneOf: O,
      oneOfType: k,
      shape: M,
      exact: N
    };
    function b(H, q) {
      return H === q ? H !== 0 || 1 / H === 1 / q : H !== H && q !== q;
    }
    function u(H, q) {
      this.message = H, this.data = q && typeof q == "object" ? q : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function y(H) {
      if (process.env.NODE_ENV !== "production")
        var q = {}, ae = 0;
      function re(L, Z, _, V, J, Q, le) {
        if (V = V || h, Q = Q || _, le !== n) {
          if (c) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = V + ":" + _;
            !q[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), q[xe] = !0, ae++);
          }
        }
        return Z[_] == null ? L ? Z[_] === null ? new u("The " + J + " `" + Q + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new u("The " + J + " `" + Q + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : H(Z, _, V, J, Q);
      }
      var j = re.bind(null, !1);
      return j.isRequired = re.bind(null, !0), j;
    }
    function C(H) {
      function q(ae, re, j, L, Z, _) {
        var V = ae[re], J = F(V);
        if (J !== H) {
          var Q = Y(V);
          return new u(
            "Invalid " + L + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + j + "`, expected ") + ("`" + H + "`."),
            { expectedType: H }
          );
        }
        return null;
      }
      return y(q);
    }
    function S() {
      return y(s);
    }
    function v(H) {
      function q(ae, re, j, L, Z) {
        if (typeof H != "function")
          return new u("Property `" + Z + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var _ = ae[re];
        if (!Array.isArray(_)) {
          var V = F(_);
          return new u("Invalid " + L + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected an array."));
        }
        for (var J = 0; J < _.length; J++) {
          var Q = H(_, J, j, L, Z + "[" + J + "]", n);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return y(q);
    }
    function x() {
      function H(q, ae, re, j, L) {
        var Z = q[ae];
        if (!l(Z)) {
          var _ = F(Z);
          return new u("Invalid " + j + " `" + L + "` of type " + ("`" + _ + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(H);
    }
    function w() {
      function H(q, ae, re, j, L) {
        var Z = q[ae];
        if (!e.isValidElementType(Z)) {
          var _ = F(Z);
          return new u("Invalid " + j + " `" + L + "` of type " + ("`" + _ + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(H);
    }
    function I(H) {
      function q(ae, re, j, L, Z) {
        if (!(ae[re] instanceof H)) {
          var _ = H.name || h, V = G(ae[re]);
          return new u("Invalid " + L + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return y(q);
    }
    function O(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function q(ae, re, j, L, Z) {
        for (var _ = ae[re], V = 0; V < H.length; V++)
          if (b(_, H[V]))
            return null;
        var J = JSON.stringify(H, function(le, B) {
          var xe = Y(B);
          return xe === "symbol" ? String(B) : B;
        });
        return new u("Invalid " + L + " `" + Z + "` of value `" + String(_) + "` " + ("supplied to `" + j + "`, expected one of " + J + "."));
      }
      return y(q);
    }
    function $(H) {
      function q(ae, re, j, L, Z) {
        if (typeof H != "function")
          return new u("Property `" + Z + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var _ = ae[re], V = F(_);
        if (V !== "object")
          return new u("Invalid " + L + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected an object."));
        for (var J in _)
          if (r(_, J)) {
            var Q = H(_, J, j, L, Z + "." + J, n);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return y(q);
    }
    function k(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var q = 0; q < H.length; q++) {
        var ae = H[q];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(ae) + " at index " + q + "."
          ), s;
      }
      function re(j, L, Z, _, V) {
        for (var J = [], Q = 0; Q < H.length; Q++) {
          var le = H[Q], B = le(j, L, Z, _, V, n);
          if (B == null)
            return null;
          B.data && r(B.data, "expectedType") && J.push(B.data.expectedType);
        }
        var xe = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new u("Invalid " + _ + " `" + V + "` supplied to " + ("`" + Z + "`" + xe + "."));
      }
      return y(re);
    }
    function m() {
      function H(q, ae, re, j, L) {
        return W(q[ae]) ? null : new u("Invalid " + j + " `" + L + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return y(H);
    }
    function P(H, q, ae, re, j) {
      return new u(
        (H || "React class") + ": " + q + " type `" + ae + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function M(H) {
      function q(ae, re, j, L, Z) {
        var _ = ae[re], V = F(_);
        if (V !== "object")
          return new u("Invalid " + L + " `" + Z + "` of type `" + V + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var J in H) {
          var Q = H[J];
          if (typeof Q != "function")
            return P(j, L, Z, J, Y(Q));
          var le = Q(_, J, j, L, Z + "." + J, n);
          if (le)
            return le;
        }
        return null;
      }
      return y(q);
    }
    function N(H) {
      function q(ae, re, j, L, Z) {
        var _ = ae[re], V = F(_);
        if (V !== "object")
          return new u("Invalid " + L + " `" + Z + "` of type `" + V + "` " + ("supplied to `" + j + "`, expected `object`."));
        var J = t({}, ae[re], H);
        for (var Q in J) {
          var le = H[Q];
          if (r(H, Q) && typeof le != "function")
            return P(j, L, Z, Q, Y(le));
          if (!le)
            return new u(
              "Invalid " + L + " `" + Z + "` key `" + Q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(ae[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(H), null, "  ")
            );
          var B = le(_, Q, j, L, Z + "." + Q, n);
          if (B)
            return B;
        }
        return null;
      }
      return y(q);
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
          var q = p(H);
          if (q) {
            var ae = q.call(H), re;
            if (q !== H.entries) {
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
    function D(H, q) {
      return H === "symbol" ? !0 : q ? q["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && q instanceof Symbol : !1;
    }
    function F(H) {
      var q = typeof H;
      return Array.isArray(H) ? "array" : H instanceof RegExp ? "object" : D(q, H) ? "symbol" : q;
    }
    function Y(H) {
      if (typeof H > "u" || H === null)
        return "" + H;
      var q = F(H);
      if (q === "object") {
        if (H instanceof Date)
          return "date";
        if (H instanceof RegExp)
          return "regexp";
      }
      return q;
    }
    function oe(H) {
      var q = Y(H);
      switch (q) {
        case "array":
        case "object":
          return "an " + q;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + q;
        default:
          return q;
      }
    }
    function G(H) {
      return !H.constructor || !H.constructor.name ? h : H.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, wa;
}
var Ca, Ol;
function lg() {
  if (Ol) return Ca;
  Ol = 1;
  var e = xs();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ca = function() {
    function r(s, l, c, d, f, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, Ca;
}
if (process.env.NODE_ENV !== "production") {
  var cg = bs, ug = !0;
  Ua.exports = sg()(cg.isElement, ug);
} else
  Ua.exports = lg()();
var dg = Ua.exports;
const o = /* @__PURE__ */ ep(dg);
function fg(e) {
  return e == null || Object.keys(e).length === 0;
}
function ju(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(fg(i) ? n : i) : t;
  return /* @__PURE__ */ E.jsx(Xh, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (ju.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function _u(e, t) {
  const n = An(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function pg(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Rl = [];
function er(e) {
  return Rl[0] = e, Ai(Rl);
}
var Ya = { exports: {} }, Xe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pl;
function mg() {
  if (Pl) return Xe;
  Pl = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
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
            case h:
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
    return typeof u == "string" || typeof u == "function" || u === n || u === i || u === r || u === c || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === g || u.getModuleId !== void 0);
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
var Il;
function hg() {
  return Il || (Il = 1, process.env.NODE_ENV !== "production" && function() {
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
              case g:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case h:
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
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    Ze.ContextConsumer = s, Ze.ContextProvider = l, Ze.Element = t, Ze.ForwardRef = c, Ze.Fragment = r, Ze.Lazy = h, Ze.Memo = p, Ze.Portal = n, Ze.Profiler = a, Ze.StrictMode = i, Ze.Suspense = d, Ze.SuspenseList = f, Ze.isContextConsumer = function(u) {
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
      return e(u) === h;
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
      return typeof u == "string" || typeof u == "function" || u === r || u === a || u === i || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === p || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === b || u.getModuleId !== void 0);
    }, Ze.typeOf = e;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? Ya.exports = mg() : Ya.exports = hg();
var fi = Ya.exports;
function $n(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Fu(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || fi.isValidElementType(e) || !$n(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Fu(e[n]);
  }), t;
}
function Dt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return $n(e) && $n(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ T.isValidElement(t[i]) || fi.isValidElementType(t[i]) ? r[i] = t[i] : $n(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && $n(e[i]) ? r[i] = Dt(e[i], t[i], n) : n.clone ? r[i] = $n(t[i]) ? Fu(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const gg = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function bg(e) {
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
  } = e, a = gg(t), s = Object.keys(a);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function d(h, g) {
    const b = s.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : g) - r / 100}${n})`;
  }
  function f(h) {
    return s.indexOf(h) + 1 < s.length ? d(h, s[s.indexOf(h) + 1]) : l(h);
  }
  function p(h) {
    const g = s.indexOf(h);
    return g === 0 ? l(s[1]) : g === s.length - 1 ? c(s[g]) : d(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
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
function kl(e, t) {
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
function yg(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function vg(e, t) {
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
function xg(e) {
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
const wg = {
  borderRadius: 4
}, or = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function co(e, t) {
  return t ? Dt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ji = {
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
}, $l = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ji[e]}px)`
}, Cg = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : ji[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Un(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || $l;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || $l;
    return Object.keys(t).reduce((s, l) => {
      if (yg(a.keys, l)) {
        const c = vg(r.containerQueries ? r : Cg, l);
        c && (s[c] = n(t[l], l));
      } else if (Object.keys(a.values || ji).includes(l)) {
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
function Tg(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function Ml(e, t) {
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
function _i(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function pi(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = _i(e, n) || r, t && (i = t(i, r, e)), i;
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
    const l = s[t], c = s.theme, d = _i(c, r) || {};
    return Un(s, l, (p) => {
      let h = pi(d, i, p);
      return p === h && typeof p == "string" && (h = pi(d, i, `${t}${p === "default" ? "" : ce(p)}`, p)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: or
  } : {}, a.filterProps = [t], a;
}
function Sg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Eg = {
  m: "margin",
  p: "padding"
}, Og = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Nl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Rg = Sg((e) => {
  if (e.length > 2)
    if (Nl[e])
      e = Nl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Eg[t], i = Og[n] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Fi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Li = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Pg = [...Fi, ...Li];
function $o(e, t, n, r) {
  const i = _i(e, t, !0) ?? n;
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
function ws(e) {
  return $o(e, "spacing", 8, "spacing");
}
function Mo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ig(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Mo(t, n), r), {});
}
function kg(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = Rg(n), a = Ig(i, r), s = e[n];
  return Un(e, s, a);
}
function Lu(e, t) {
  const n = ws(e.theme);
  return Object.keys(e).map((r) => kg(e, t, r, n)).reduce(co, {});
}
function mt(e) {
  return Lu(e, Fi);
}
mt.propTypes = process.env.NODE_ENV !== "production" ? Fi.reduce((e, t) => (e[t] = or, e), {}) : {};
mt.filterProps = Fi;
function ht(e) {
  return Lu(e, Li);
}
ht.propTypes = process.env.NODE_ENV !== "production" ? Li.reduce((e, t) => (e[t] = or, e), {}) : {};
ht.filterProps = Li;
process.env.NODE_ENV !== "production" && Pg.reduce((e, t) => (e[t] = or, e), {});
function Bu(e = 8, t = ws({
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
function Bi(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, a) => t[a] ? co(i, t[a](r)) : i, {});
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
const $g = yn("border", pn), Mg = yn("borderTop", pn), Ng = yn("borderRight", pn), Dg = yn("borderBottom", pn), Ag = yn("borderLeft", pn), jg = yn("borderColor"), _g = yn("borderTopColor"), Fg = yn("borderRightColor"), Lg = yn("borderBottomColor"), Bg = yn("borderLeftColor"), zg = yn("outline", pn), Wg = yn("outlineColor"), zi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $o(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Mo(t, r)
    });
    return Un(e, e.borderRadius, n);
  }
  return null;
};
zi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: or
} : {};
zi.filterProps = ["borderRadius"];
Bi($g, Mg, Ng, Dg, Ag, jg, _g, Fg, Lg, Bg, zi, zg, Wg);
const Wi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $o(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Mo(t, r)
    });
    return Un(e, e.gap, n);
  }
  return null;
};
Wi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: or
} : {};
Wi.filterProps = ["gap"];
const Vi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $o(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Mo(t, r)
    });
    return Un(e, e.columnGap, n);
  }
  return null;
};
Vi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: or
} : {};
Vi.filterProps = ["columnGap"];
const Hi = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $o(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Mo(t, r)
    });
    return Un(e, e.rowGap, n);
  }
  return null;
};
Hi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: or
} : {};
Hi.filterProps = ["rowGap"];
const Vg = xt({
  prop: "gridColumn"
}), Hg = xt({
  prop: "gridRow"
}), Ug = xt({
  prop: "gridAutoFlow"
}), Yg = xt({
  prop: "gridAutoColumns"
}), qg = xt({
  prop: "gridAutoRows"
}), Gg = xt({
  prop: "gridTemplateColumns"
}), Kg = xt({
  prop: "gridTemplateRows"
}), Xg = xt({
  prop: "gridTemplateAreas"
}), Zg = xt({
  prop: "gridArea"
});
Bi(Wi, Vi, Hi, Vg, Hg, Ug, Yg, qg, Gg, Kg, Xg, Zg);
function Ir(e, t) {
  return t === "grey" ? t : e;
}
const Qg = xt({
  prop: "color",
  themeKey: "palette",
  transform: Ir
}), Jg = xt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ir
}), eb = xt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ir
});
Bi(Qg, Jg, eb);
function en(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const tb = xt({
  prop: "width",
  transform: en
}), Cs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const r = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || ji[n];
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
Cs.filterProps = ["maxWidth"];
const nb = xt({
  prop: "minWidth",
  transform: en
}), rb = xt({
  prop: "height",
  transform: en
}), ob = xt({
  prop: "maxHeight",
  transform: en
}), ib = xt({
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
const ab = xt({
  prop: "boxSizing"
});
Bi(tb, Cs, nb, rb, ob, ib, ab);
const No = {
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
    style: zi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ir
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ir
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ir
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
    style: Wi
  },
  rowGap: {
    style: Hi
  },
  columnGap: {
    style: Vi
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
    style: Cs
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
function sb(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function lb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cb() {
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
    const h = _i(i, d) || {};
    return p ? p(s) : Un(s, r, (b) => {
      let u = pi(h, f, b);
      return b === u && typeof b == "string" && (u = pi(h, f, `${n}${b === "default" ? "" : ce(b)}`, b)), c === !1 ? u : {
        [c]: u
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: i = {},
      nested: a
    } = n || {};
    if (!r)
      return null;
    const s = i.unstable_sxConfig ?? No;
    function l(c) {
      let d = c;
      if (typeof c == "function")
        d = c(i);
      else if (typeof c != "object")
        return c;
      if (!d)
        return null;
      const f = Tg(i.breakpoints), p = Object.keys(f);
      let h = f;
      return Object.keys(d).forEach((g) => {
        const b = lb(d[g], i);
        if (b != null)
          if (typeof b == "object")
            if (s[g])
              h = co(h, e(g, b, i, s));
            else {
              const u = Un({
                theme: i
              }, b, (y) => ({
                [g]: y
              }));
              sb(u, b) ? h[g] = t({
                sx: b,
                theme: i,
                nested: !0
              }) : h = co(h, u);
            }
          else
            h = co(h, e(g, b, i, s));
      }), !a && i.modularCssLayers ? {
        "@layer sx": kl(i, Ml(p, h))
      } : kl(i, Ml(p, h));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const pr = cb();
pr.filterProps = ["sx"];
function ub(e, t) {
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
function Ts(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = bg(n), c = Bu(i);
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
      ...wg,
      ...a
    }
  }, s);
  return d = xg(d), d.applyStyles = ub, d = t.reduce((f, p) => Dt(f, p), d), d.unstable_sxConfig = {
    ...No,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return pr({
      sx: p,
      theme: this
    });
  }, d;
}
function db(e) {
  return Object.keys(e).length === 0;
}
function fb(e = null) {
  const t = T.useContext(ys);
  return !t || db(t) ? e : t;
}
const pb = Ts();
function Ss(e = pb) {
  return fb(e);
}
function Ta(e) {
  const t = er(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function zu({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ss(n), i = t && r[t] || r;
  let a = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(a) ? a = a.map((s) => Ta(typeof s == "function" ? s(i) : s)) : a = Ta(a)), /* @__PURE__ */ E.jsx(ju, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (zu.propTypes = {
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
const mb = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? No;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function hb(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = mb(n);
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
const Dl = (e) => e, gb = () => {
  let e = Dl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Dl;
    }
  };
}, Wu = gb();
function bb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = _u("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(pr);
  return /* @__PURE__ */ T.forwardRef(function(c, d) {
    const f = Ss(n), {
      className: p,
      component: h = "div",
      ...g
    } = hb(c);
    return /* @__PURE__ */ E.jsx(a, {
      as: h,
      ref: d,
      className: ge(p, i ? i(r) : r),
      theme: t && f[t] || f,
      ...g
    });
  });
}
const yb = {
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
  const r = yb[t];
  return r ? `${n}-${r}` : `${Wu.generate(e)}-${t}`;
}
function je(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ze(e, i, n);
  }), r;
}
function Vu(e, t = "") {
  return e.displayName || e.name || t;
}
function Al(e, t, n) {
  const r = Vu(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function vb(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Vu(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case fi.ForwardRef:
          return Al(e, e.render, "ForwardRef");
        case fi.Memo:
          return Al(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Hu(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: er(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = er(i.style));
  }), r;
}
const xb = Ts();
function Sa(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function cr(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function wb(e) {
  return e ? (t, n) => n[e] : null;
}
function Cb(e, t, n) {
  e.theme = Ob(e.theme) ? n : e.theme[t] || e.theme;
}
function oi(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((i) => oi(e, i, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let i;
    if (r.isProcessed)
      i = n ? cr(r.style, n) : r.style;
    else {
      const {
        variants: a,
        ...s
      } = r;
      i = n ? cr(er(s), n) : s;
    }
    return Uu(e, r.variants, [i], n);
  }
  return r != null && r.isProcessed ? n ? cr(er(r.style), n) : r.style : n ? cr(er(r), n) : r;
}
function Uu(e, t, n = [], r = void 0) {
  var a;
  let i;
  e: for (let s = 0; s < t.length; s += 1) {
    const l = t[s];
    if (typeof l.props == "function") {
      if (i ?? (i = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(i))
        continue;
    } else
      for (const c in l.props)
        if (e[c] !== l.props[c] && ((a = e.ownerState) == null ? void 0 : a[c]) !== l.props[c])
          continue e;
    typeof l.style == "function" ? (i ?? (i = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(r ? cr(er(l.style(i)), r) : l.style(i))) : n.push(r ? cr(er(l.style), r) : l.style);
  }
  return n;
}
function Tb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = xb,
    rootShouldForwardProp: r = Sa,
    slotShouldForwardProp: i = Sa
  } = e;
  function a(l) {
    Cb(l, t, n);
  }
  return (l, c = {}) => {
    pg(l, (I) => I.filter((O) => O !== pr));
    const {
      name: d,
      slot: f,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = wb(Yu(f)),
      ...b
    } = c, u = d && d.startsWith("Mui") || f ? "components" : "custom", y = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), C = h || !1;
    let S = Sa;
    f === "Root" || f === "root" ? S = r : f ? S = i : Rb(l) && (S = void 0);
    const v = _u(l, {
      shouldForwardProp: S,
      label: Eb(d, f),
      ...b
    }), x = (I) => {
      if (I.__emotion_real === I)
        return I;
      if (typeof I == "function")
        return function($) {
          return oi($, I, $.theme.modularCssLayers ? u : void 0);
        };
      if ($n(I)) {
        const O = Hu(I);
        return function(k) {
          return O.variants ? oi(k, O, k.theme.modularCssLayers ? u : void 0) : k.theme.modularCssLayers ? cr(O.style, u) : O.style;
        };
      }
      return I;
    }, w = (...I) => {
      const O = [], $ = I.map(x), k = [];
      if (O.push(a), d && g && k.push(function(N) {
        var Y, oe;
        const D = (oe = (Y = N.theme.components) == null ? void 0 : Y[d]) == null ? void 0 : oe.styleOverrides;
        if (!D)
          return null;
        const F = {};
        for (const G in D)
          F[G] = oi(N, D[G], N.theme.modularCssLayers ? "theme" : void 0);
        return g(N, F);
      }), d && !y && k.push(function(N) {
        var F, Y;
        const W = N.theme, D = (Y = (F = W == null ? void 0 : W.components) == null ? void 0 : F[d]) == null ? void 0 : Y.variants;
        return D ? Uu(N, D, [], N.theme.modularCssLayers ? "theme" : void 0) : null;
      }), C || k.push(pr), Array.isArray($[0])) {
        const M = $.shift(), N = new Array(O.length).fill(""), W = new Array(k.length).fill("");
        let D;
        D = [...N, ...M, ...W], D.raw = [...N, ...M.raw, ...W], O.unshift(D);
      }
      const m = [...O, ...$, ...k], P = v(...m);
      return l.muiName && (P.muiName = l.muiName), process.env.NODE_ENV !== "production" && (P.displayName = Sb(d, f, l)), P;
    };
    return v.withConfig && (w.withConfig = v.withConfig), w;
  };
}
function Sb(e, t, n) {
  return e ? `${e}${ce(t || "")}` : `Styled(${vb(n)})`;
}
function Eb(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Yu(t || "Root")}`), n;
}
function Ob(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Rb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Yu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function qa(e, t) {
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
              n[i][c] = qa(a[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const _n = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function Pb(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Es(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Pb(e, t, n);
}
function Ib(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function tr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return tr(Ib(e));
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
const kb = (e) => {
  const t = tr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, oo = (e, t) => {
  try {
    return kb(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Ui(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function qu(e) {
  e = tr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (d, f = (d + n / 30) % 12) => i - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Ui({
    type: l,
    values: c
  });
}
function Ga(e) {
  e = tr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? tr(qu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function jl(e, t) {
  const n = Ga(e), r = Ga(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function rt(e, t) {
  return e = tr(e), t = Es(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ui(e);
}
function Yo(e, t, n) {
  try {
    return rt(e, t);
  } catch {
    return e;
  }
}
function Yi(e, t) {
  if (e = tr(e), t = Es(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Ui(e);
}
function tt(e, t, n) {
  try {
    return Yi(e, t);
  } catch {
    return e;
  }
}
function qi(e, t) {
  if (e = tr(e), t = Es(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Ui(e);
}
function nt(e, t, n) {
  try {
    return qi(e, t);
  } catch {
    return e;
  }
}
function $b(e, t = 0.15) {
  return Ga(e) > 0.5 ? Yi(e, t) : qi(e, t);
}
function qo(e, t, n) {
  try {
    return $b(e, t);
  } catch {
    return e;
  }
}
function Tn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Mb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Gu(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !Mb(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Do = Tn(o.element, Gu);
Do.isRequired = Tn(o.element.isRequired, Gu);
function Nb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Db(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !Nb(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Os = Tn(o.elementType, Db), Ab = "exact-prop: ​";
function Ku(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ab]: (t) => {
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
function _l(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Xu(e, t = 166) {
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
function Ea(e, t) {
  var n, r, i;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
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
function Ka(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Fl = 0;
function jb(e) {
  const [t, n] = T.useState(e), r = e || t;
  return T.useEffect(() => {
    t == null && (Fl += 1, n(`mui-${Fl}`));
  }, [t]), r;
}
const _b = {
  ...T
}, Ll = _b.useId;
function Ar(e) {
  if (Ll !== void 0) {
    const t = Ll();
    return e ?? t;
  }
  return jb(e);
}
function Fb(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function kr({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = T.useRef(e !== void 0), [a, s] = T.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: d
    } = T.useRef(t);
    T.useEffect(() => {
      !i && !Object.is(d, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = T.useCallback((d) => {
    i || s(d);
  }, []);
  return [l, c];
}
function Mn(e) {
  const t = T.useRef(e);
  return _n(() => {
    t.current = e;
  }), T.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Tt(...e) {
  const t = T.useRef(void 0), n = T.useCallback((r) => {
    const i = e.map((a) => {
      if (a == null)
        return null;
      if (typeof a == "function") {
        const s = a, l = s(r);
        return typeof l == "function" ? l : () => {
          s(null);
        };
      }
      return a.current = r, () => {
        a.current = null;
      };
    });
    return () => {
      i.forEach((a) => a == null ? void 0 : a());
    };
  }, e);
  return T.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
const Bl = {};
function Zu(e, t) {
  const n = T.useRef(Bl);
  return n.current === Bl && (n.current = e(t)), n;
}
const Lb = [];
function Bb(e) {
  T.useEffect(e, Lb);
}
class Rs {
  constructor() {
    qr(this, "currentId", null);
    qr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    qr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Rs();
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
function Qu() {
  const e = Zu(Rs.create).current;
  return Bb(e.disposeEffect), e;
}
function zl(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Ju(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
const zb = (e) => {
  const t = T.useRef({});
  return T.useEffect(() => {
    t.current = e;
  }), t.current;
};
function Wb(e) {
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
function ed(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = Wb(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function td(e, t, ...n) {
  return e[t] === void 0 ? null : ed(e, t, ...n);
}
function Xa() {
  return null;
}
td.isRequired = ed;
Xa.isRequired = Xa;
const $r = process.env.NODE_ENV === "production" ? Xa : td;
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
function Vb(e) {
  return typeof e == "string";
}
function nd(e, t, n) {
  return e === void 0 || Vb(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function rd(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Wl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function od(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const g = ge(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), b = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, u = {
      ...n,
      ...i,
      ...r
    };
    return g.length > 0 && (u.className = g), Object.keys(b).length > 0 && (u.style = b), {
      props: u,
      internalRef: void 0
    };
  }
  const s = rd({
    ...i,
    ...r
  }), l = Wl(r), c = Wl(i), d = t(s), f = ge(d == null ? void 0 : d.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = {
    ...d == null ? void 0 : d.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...d,
    ...n,
    ...c,
    ...l
  };
  return f.length > 0 && (h.className = f), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: d.ref
  };
}
function id(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Za(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : id(n, r), {
    props: l,
    internalRef: c
  } = od({
    ...a,
    externalSlotProps: s
  }), d = Tt(c, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return nd(t, {
    ...l,
    ref: d
  }, r);
}
function Ao(e) {
  var t;
  return parseInt(T.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Hb = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const Ps = () => T.useContext(Hb) ?? !1, Ub = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function Yb(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? qa(i.defaultProps, r) : !i.styleOverrides && !i.variants ? qa(i, r) : r;
}
function qb({
  props: e,
  name: t
}) {
  const n = T.useContext(Ub);
  return Yb({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Vl = {
  theme: void 0
};
function Gb(e) {
  let t, n;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== n) && (Vl.theme = i.theme, a = Hu(e(Vl)), t = a, n = i.theme), a;
  };
}
function Kb(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Hl = (e, t, n, r = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, Xb = (e, t, n) => {
  function r(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  r(e);
}, Zb = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Oa(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, s = {};
  return Xb(
    e,
    (l, c, d) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const f = `--${n ? `${n}-` : ""}${l.join("-")}`, p = Zb(l, c);
        Object.assign(i, {
          [f]: p
        }), Hl(a, l, `var(${f})`, d), Hl(s, l, `var(${f}, ${p})`, d);
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
function Qb(e, t = {}) {
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
  } = Oa(c, t);
  let h = p;
  const g = {}, {
    [l]: b,
    ...u
  } = a;
  if (Object.entries(u || {}).forEach(([v, x]) => {
    const {
      vars: w,
      css: I,
      varsWithDefaults: O
    } = Oa(x, t);
    h = Dt(h, O), g[v] = {
      css: I,
      vars: w
    };
  }), b) {
    const {
      css: v,
      vars: x,
      varsWithDefaults: w
    } = Oa(b, t);
    h = Dt(h, w), g[l] = {
      css: v,
      vars: x
    };
  }
  function y(v, x) {
    var I, O;
    let w = i;
    if (i === "class" && (w = ".%s"), i === "data" && (w = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (w = `[${i}="%s"]`), v) {
      if (w === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((O = (I = a[v]) == null ? void 0 : I.palette) == null ? void 0 : O.mode) || v})`]: {
            ":root": x
          }
        };
      if (w)
        return e.defaultColorScheme === v ? `:root, ${w.replace("%s", String(v))}` : w.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let v = {
        ...d
      };
      return Object.entries(g).forEach(([, {
        vars: x
      }]) => {
        v = Dt(v, x);
      }), v;
    },
    generateStyleSheets: () => {
      var $, k;
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
        [x]: I,
        ...O
      } = g;
      if (I) {
        const {
          css: m
        } = I, P = (k = ($ = a[x]) == null ? void 0 : $.palette) == null ? void 0 : k.mode, M = !r && P ? {
          colorScheme: P,
          ...m
        } : {
          ...m
        };
        w(n(x, {
          ...M
        }), M);
      }
      return Object.entries(O).forEach(([m, {
        css: P
      }]) => {
        var W, D;
        const M = (D = (W = a[m]) == null ? void 0 : W.palette) == null ? void 0 : D.mode, N = !r && M ? {
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
function Jb(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Gi = "$$material", wo = {
  black: "#000",
  white: "#fff"
}, ey = {
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
}, yr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, vr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Zr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, xr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, wr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Cr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function ad() {
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
      paper: wo.white,
      default: wo.white
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
const ty = ad();
function sd() {
  return {
    text: {
      primary: wo.white,
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
      active: wo.white,
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
const Ul = sd();
function Yl(e, t, n, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = qi(e.main, i) : t === "dark" && (e.dark = Yi(e.main, a)));
}
function ny(e = "light") {
  return e === "dark" ? {
    main: xr[200],
    light: xr[50],
    dark: xr[400]
  } : {
    main: xr[700],
    light: xr[400],
    dark: xr[800]
  };
}
function ry(e = "light") {
  return e === "dark" ? {
    main: yr[200],
    light: yr[50],
    dark: yr[400]
  } : {
    main: yr[500],
    light: yr[300],
    dark: yr[700]
  };
}
function oy(e = "light") {
  return e === "dark" ? {
    main: vr[500],
    light: vr[300],
    dark: vr[700]
  } : {
    main: vr[700],
    light: vr[400],
    dark: vr[800]
  };
}
function iy(e = "light") {
  return e === "dark" ? {
    main: wr[400],
    light: wr[300],
    dark: wr[700]
  } : {
    main: wr[700],
    light: wr[500],
    dark: wr[900]
  };
}
function ay(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: Cr[800],
    light: Cr[500],
    dark: Cr[900]
  };
}
function sy(e = "light") {
  return e === "dark" ? {
    main: Zr[400],
    light: Zr[300],
    dark: Zr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Zr[500],
    dark: Zr[900]
  };
}
function Is(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || ny(t), s = e.secondary || ry(t), l = e.error || oy(t), c = e.info || iy(t), d = e.success || ay(t), f = e.warning || sy(t);
  function p(u) {
    const y = jl(u, Ul.text.primary) >= n ? Ul.text.primary : ty.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = jl(u, y);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${y} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const h = ({
    color: u,
    name: y,
    mainShade: C = 500,
    lightShade: S = 300,
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
    return Yl(u, "light", S, r), Yl(u, "dark", v, r), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let g;
  return t === "light" ? g = ad() : t === "dark" && (g = sd()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Dt({
    // A collection of common colors.
    common: {
      ...wo
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: ey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...g
  }, i);
}
function ly(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function cy(e, t) {
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
function uy(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ql = {
  textTransform: "uppercase"
}, Gl = '"Roboto", "Helvetica", "Arial", sans-serif';
function dy(e, t) {
  const {
    fontFamily: n = Gl,
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
  const h = r / 14, g = f || ((y) => `${y / c * h}rem`), b = (y, C, S, v, x) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: g(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Gl ? {
      letterSpacing: `${uy(v / C)}em`
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
    button: b(s, 14, 1.75, 0.4, ql),
    caption: b(a, 12, 1.66, 0.4),
    overline: b(a, 12, 2.66, 1, ql),
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
    pxToRem: g,
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
const fy = 0.2, py = 0.14, my = 0.12;
function st(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${py})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${my})`].join(",");
}
const hy = ["none", st(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), st(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), st(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), st(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), st(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), st(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), st(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), st(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), st(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), st(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), st(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), st(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), st(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), st(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), st(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), st(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), st(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), st(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), st(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), st(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), st(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), st(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), st(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), st(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], gy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, by = {
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
function Kl(e) {
  return `${Math.round(e)}ms`;
}
function yy(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function vy(e) {
  const t = {
    ...gy,
    ...e.easing
  }, n = {
    ...by,
    ...e.duration
  };
  return {
    getAutoHeightDuration: yy,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...d
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !f(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((f) => `${f} ${typeof s == "string" ? s : Kl(s)} ${l} ${typeof c == "string" ? c : Kl(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const xy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function wy(e) {
  return $n(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ld(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !wy(l) || s.startsWith("unstable_") ? delete r[s] : $n(l) && (r[s] = {
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
function Qa(e = {}, ...t) {
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
  const f = Is(a), p = Ts(e);
  let h = Dt(p, {
    mixins: cy(p.breakpoints, r),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: hy.slice(),
    typography: dy(f, l),
    transitions: vy(s),
    zIndex: {
      ...xy
    }
  });
  if (h = Dt(h, d), h = t.reduce((g, b) => Dt(g, b), h), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (u, y) => {
      let C;
      for (C in u) {
        const S = u[C];
        if (g.includes(C) && Object.keys(S).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = ze("", C);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: S
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[C] = {};
        }
      }
    };
    Object.keys(h.components).forEach((u) => {
      const y = h.components[u].styleOverrides;
      y && u.startsWith("Mui") && b(y, u);
    });
  }
  return h.unstable_sxConfig = {
    ...No,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(b) {
    return pr({
      sx: b,
      theme: this
    });
  }, h.toRuntimeSource = ld, h;
}
function Ja(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Cy = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Ja(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function cd(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ud(e) {
  return e === "dark" ? Cy : [];
}
function Ty(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, a = Is(t);
  return {
    palette: a,
    opacity: {
      ...cd(a.mode),
      ...n
    },
    overlays: r || ud(a.mode),
    ...i
  };
}
function Sy(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ey = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Oy = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ey(e.cssVarPrefix).forEach((l) => {
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
function Ry(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function U(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function io(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : qu(e);
}
function Vn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = oo(io(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Py(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Rn = (e) => {
  try {
    return e();
  } catch {
  }
}, Iy = (e = "mui") => Kb(e);
function Ra(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Ty({
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
  } = Qa({
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
      ...cd(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || ud(i)
  }, s;
}
function ky(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = Sy,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...d
  } = e, f = Object.keys(n)[0], p = r || (n.light && f !== "light" ? "light" : f), h = Iy(a), {
    [p]: g,
    light: b,
    dark: u,
    ...y
  } = n, C = {
    ...y
  };
  let S = g;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : jn(21, p));
  const v = Ra(C, S, d, p);
  b && !C.light && Ra(C, b, void 0, "light"), u && !C.dark && Ra(C, u, void 0, "dark");
  let x = {
    defaultColorScheme: p,
    ...v,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: C,
    font: {
      ...ly(v.typography),
      ...v.font
    },
    spacing: Py(d.spacing)
  };
  Object.keys(x.colorSchemes).forEach((k) => {
    const m = x.colorSchemes[k].palette, P = (M) => {
      const N = M.split("-"), W = N[1], D = N[2];
      return h(M, m[W][D]);
    };
    if (m.mode === "light" && (U(m.common, "background", "#fff"), U(m.common, "onBackground", "#000")), m.mode === "dark" && (U(m.common, "background", "#000"), U(m.common, "onBackground", "#fff")), Ry(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      U(m.Alert, "errorColor", tt(m.error.light, 0.6)), U(m.Alert, "infoColor", tt(m.info.light, 0.6)), U(m.Alert, "successColor", tt(m.success.light, 0.6)), U(m.Alert, "warningColor", tt(m.warning.light, 0.6)), U(m.Alert, "errorFilledBg", P("palette-error-main")), U(m.Alert, "infoFilledBg", P("palette-info-main")), U(m.Alert, "successFilledBg", P("palette-success-main")), U(m.Alert, "warningFilledBg", P("palette-warning-main")), U(m.Alert, "errorFilledColor", Rn(() => m.getContrastText(m.error.main))), U(m.Alert, "infoFilledColor", Rn(() => m.getContrastText(m.info.main))), U(m.Alert, "successFilledColor", Rn(() => m.getContrastText(m.success.main))), U(m.Alert, "warningFilledColor", Rn(() => m.getContrastText(m.warning.main))), U(m.Alert, "errorStandardBg", nt(m.error.light, 0.9)), U(m.Alert, "infoStandardBg", nt(m.info.light, 0.9)), U(m.Alert, "successStandardBg", nt(m.success.light, 0.9)), U(m.Alert, "warningStandardBg", nt(m.warning.light, 0.9)), U(m.Alert, "errorIconColor", P("palette-error-main")), U(m.Alert, "infoIconColor", P("palette-info-main")), U(m.Alert, "successIconColor", P("palette-success-main")), U(m.Alert, "warningIconColor", P("palette-warning-main")), U(m.AppBar, "defaultBg", P("palette-grey-100")), U(m.Avatar, "defaultBg", P("palette-grey-400")), U(m.Button, "inheritContainedBg", P("palette-grey-300")), U(m.Button, "inheritContainedHoverBg", P("palette-grey-A100")), U(m.Chip, "defaultBorder", P("palette-grey-400")), U(m.Chip, "defaultAvatarColor", P("palette-grey-700")), U(m.Chip, "defaultIconColor", P("palette-grey-700")), U(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), U(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), U(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), U(m.LinearProgress, "primaryBg", nt(m.primary.main, 0.62)), U(m.LinearProgress, "secondaryBg", nt(m.secondary.main, 0.62)), U(m.LinearProgress, "errorBg", nt(m.error.main, 0.62)), U(m.LinearProgress, "infoBg", nt(m.info.main, 0.62)), U(m.LinearProgress, "successBg", nt(m.success.main, 0.62)), U(m.LinearProgress, "warningBg", nt(m.warning.main, 0.62)), U(m.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), U(m.Slider, "primaryTrack", nt(m.primary.main, 0.62)), U(m.Slider, "secondaryTrack", nt(m.secondary.main, 0.62)), U(m.Slider, "errorTrack", nt(m.error.main, 0.62)), U(m.Slider, "infoTrack", nt(m.info.main, 0.62)), U(m.Slider, "successTrack", nt(m.success.main, 0.62)), U(m.Slider, "warningTrack", nt(m.warning.main, 0.62));
      const M = qo(m.background.default, 0.8);
      U(m.SnackbarContent, "bg", M), U(m.SnackbarContent, "color", Rn(() => m.getContrastText(M))), U(m.SpeedDialAction, "fabHoverBg", qo(m.background.paper, 0.15)), U(m.StepConnector, "border", P("palette-grey-400")), U(m.StepContent, "border", P("palette-grey-400")), U(m.Switch, "defaultColor", P("palette-common-white")), U(m.Switch, "defaultDisabledColor", P("palette-grey-100")), U(m.Switch, "primaryDisabledColor", nt(m.primary.main, 0.62)), U(m.Switch, "secondaryDisabledColor", nt(m.secondary.main, 0.62)), U(m.Switch, "errorDisabledColor", nt(m.error.main, 0.62)), U(m.Switch, "infoDisabledColor", nt(m.info.main, 0.62)), U(m.Switch, "successDisabledColor", nt(m.success.main, 0.62)), U(m.Switch, "warningDisabledColor", nt(m.warning.main, 0.62)), U(m.TableCell, "border", nt(Yo(m.divider, 1), 0.88)), U(m.Tooltip, "bg", Yo(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      U(m.Alert, "errorColor", nt(m.error.light, 0.6)), U(m.Alert, "infoColor", nt(m.info.light, 0.6)), U(m.Alert, "successColor", nt(m.success.light, 0.6)), U(m.Alert, "warningColor", nt(m.warning.light, 0.6)), U(m.Alert, "errorFilledBg", P("palette-error-dark")), U(m.Alert, "infoFilledBg", P("palette-info-dark")), U(m.Alert, "successFilledBg", P("palette-success-dark")), U(m.Alert, "warningFilledBg", P("palette-warning-dark")), U(m.Alert, "errorFilledColor", Rn(() => m.getContrastText(m.error.dark))), U(m.Alert, "infoFilledColor", Rn(() => m.getContrastText(m.info.dark))), U(m.Alert, "successFilledColor", Rn(() => m.getContrastText(m.success.dark))), U(m.Alert, "warningFilledColor", Rn(() => m.getContrastText(m.warning.dark))), U(m.Alert, "errorStandardBg", tt(m.error.light, 0.9)), U(m.Alert, "infoStandardBg", tt(m.info.light, 0.9)), U(m.Alert, "successStandardBg", tt(m.success.light, 0.9)), U(m.Alert, "warningStandardBg", tt(m.warning.light, 0.9)), U(m.Alert, "errorIconColor", P("palette-error-main")), U(m.Alert, "infoIconColor", P("palette-info-main")), U(m.Alert, "successIconColor", P("palette-success-main")), U(m.Alert, "warningIconColor", P("palette-warning-main")), U(m.AppBar, "defaultBg", P("palette-grey-900")), U(m.AppBar, "darkBg", P("palette-background-paper")), U(m.AppBar, "darkColor", P("palette-text-primary")), U(m.Avatar, "defaultBg", P("palette-grey-600")), U(m.Button, "inheritContainedBg", P("palette-grey-800")), U(m.Button, "inheritContainedHoverBg", P("palette-grey-700")), U(m.Chip, "defaultBorder", P("palette-grey-700")), U(m.Chip, "defaultAvatarColor", P("palette-grey-300")), U(m.Chip, "defaultIconColor", P("palette-grey-300")), U(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), U(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), U(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), U(m.LinearProgress, "primaryBg", tt(m.primary.main, 0.5)), U(m.LinearProgress, "secondaryBg", tt(m.secondary.main, 0.5)), U(m.LinearProgress, "errorBg", tt(m.error.main, 0.5)), U(m.LinearProgress, "infoBg", tt(m.info.main, 0.5)), U(m.LinearProgress, "successBg", tt(m.success.main, 0.5)), U(m.LinearProgress, "warningBg", tt(m.warning.main, 0.5)), U(m.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), U(m.Slider, "primaryTrack", tt(m.primary.main, 0.5)), U(m.Slider, "secondaryTrack", tt(m.secondary.main, 0.5)), U(m.Slider, "errorTrack", tt(m.error.main, 0.5)), U(m.Slider, "infoTrack", tt(m.info.main, 0.5)), U(m.Slider, "successTrack", tt(m.success.main, 0.5)), U(m.Slider, "warningTrack", tt(m.warning.main, 0.5));
      const M = qo(m.background.default, 0.98);
      U(m.SnackbarContent, "bg", M), U(m.SnackbarContent, "color", Rn(() => m.getContrastText(M))), U(m.SpeedDialAction, "fabHoverBg", qo(m.background.paper, 0.15)), U(m.StepConnector, "border", P("palette-grey-600")), U(m.StepContent, "border", P("palette-grey-600")), U(m.Switch, "defaultColor", P("palette-grey-300")), U(m.Switch, "defaultDisabledColor", P("palette-grey-600")), U(m.Switch, "primaryDisabledColor", tt(m.primary.main, 0.55)), U(m.Switch, "secondaryDisabledColor", tt(m.secondary.main, 0.55)), U(m.Switch, "errorDisabledColor", tt(m.error.main, 0.55)), U(m.Switch, "infoDisabledColor", tt(m.info.main, 0.55)), U(m.Switch, "successDisabledColor", tt(m.success.main, 0.55)), U(m.Switch, "warningDisabledColor", tt(m.warning.main, 0.55)), U(m.TableCell, "border", tt(Yo(m.divider, 1), 0.68)), U(m.Tooltip, "bg", Yo(m.grey[700], 0.92));
    }
    Vn(m.background, "default"), Vn(m.background, "paper"), Vn(m.common, "background"), Vn(m.common, "onBackground"), Vn(m, "divider"), Object.keys(m).forEach((M) => {
      const N = m[M];
      M !== "tonalOffset" && N && typeof N == "object" && (N.main && U(m[M], "mainChannel", oo(io(N.main))), N.light && U(m[M], "lightChannel", oo(io(N.light))), N.dark && U(m[M], "darkChannel", oo(io(N.dark))), N.contrastText && U(m[M], "contrastTextChannel", oo(io(N.contrastText))), M === "text" && (Vn(m[M], "primary"), Vn(m[M], "secondary")), M === "action" && (N.active && Vn(m[M], "active"), N.selected && Vn(m[M], "selected")));
    });
  }), x = t.reduce((k, m) => Dt(k, m), x);
  const w = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: Oy(x)
  }, {
    vars: I,
    generateThemeVars: O,
    generateStyleSheets: $
  } = Qb(x, w);
  return x.vars = I, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([k, m]) => {
    x[k] = m;
  }), x.generateThemeVars = O, x.generateStyleSheets = $, x.generateSpacing = function() {
    return Bu(d.spacing, ws(this));
  }, x.getColorSchemeSelector = Jb(l), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = s, x.unstable_sxConfig = {
    ...No,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, x.unstable_sx = function(m) {
    return pr({
      sx: m,
      theme: this
    });
  }, x.toRuntimeSource = ld, x;
}
function Xl(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Is({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function dd(e = {}, ...t) {
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
      return Qa(e, ...t);
    let f = n;
    "palette" in e || d[l] && (d[l] !== !0 ? f = d[l].palette : l === "dark" && (f = {
      mode: "dark"
    }));
    const p = Qa({
      ...e,
      palette: f
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, Xl(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, Xl(p, "light", d.light)), p;
  }
  return !n && !("light" in d) && l === "light" && (d.light = !0), ky({
    ...s,
    colorSchemes: d,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const ks = dd();
function $s() {
  const e = Ss(ks);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Gi] || e;
}
function fd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const sn = (e) => fd(e) && e !== "classes", ue = Tb({
  themeId: Gi,
  defaultTheme: ks,
  rootShouldForwardProp: sn
}), $y = je("MuiBox", ["root"]), My = dd(), pd = bb({
  themeId: Gi,
  defaultTheme: My,
  defaultClassName: $y.root,
  generateClassName: Wu.generate
});
process.env.NODE_ENV !== "production" && (pd.propTypes = {
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
function md(e) {
  return /* @__PURE__ */ E.jsx(zu, {
    ...e,
    defaultTheme: ks,
    themeId: Gi
  });
}
process.env.NODE_ENV !== "production" && (md.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Ny(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ E.jsx(md, {
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
  return qb(e);
}
function Go(e) {
  return parseInt(e, 10) || 0;
}
const Dy = {
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
function Ay(e) {
  for (const t in e)
    return !1;
  return !0;
}
function jy(e) {
  return Ay(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const hd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l,
    ...c
  } = t, {
    current: d
  } = T.useRef(l != null), f = T.useRef(null), p = Tt(n, f), h = T.useRef(null), g = T.useRef(null), b = T.useCallback(() => {
    const S = f.current, v = g.current;
    if (!S || !v)
      return;
    const w = qn(S).getComputedStyle(S);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    v.style.width = w.width, v.value = S.value || t.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
    const I = w.boxSizing, O = Go(w.paddingBottom) + Go(w.paddingTop), $ = Go(w.borderBottomWidth) + Go(w.borderTopWidth), k = v.scrollHeight;
    v.value = "x";
    const m = v.scrollHeight;
    let P = k;
    a && (P = Math.max(Number(a) * m, P)), i && (P = Math.min(Number(i) * m, P)), P = Math.max(P, m);
    const M = P + (I === "border-box" ? O + $ : 0), N = Math.abs(P - k) <= 1;
    return {
      outerHeightStyle: M,
      overflowing: N
    };
  }, [i, a, t.placeholder]), u = T.useCallback(() => {
    const S = f.current, v = b();
    if (!S || !v || jy(v))
      return;
    const x = v.outerHeightStyle;
    h.current !== x && (h.current = x, S.style.height = `${x}px`), S.style.overflow = v.overflowing ? "hidden" : "";
  }, [b]), y = T.useRef(-1);
  _n(() => {
    const S = Xu(() => u()), v = f == null ? void 0 : f.current;
    if (!v)
      return;
    const x = qn(v);
    x.addEventListener("resize", S);
    let w;
    return typeof ResizeObserver < "u" && (w = new ResizeObserver(() => {
      w.unobserve(v), cancelAnimationFrame(y.current), u(), y.current = requestAnimationFrame(() => {
        w.observe(v);
      });
    }), w.observe(v)), () => {
      S.clear(), cancelAnimationFrame(y.current), x.removeEventListener("resize", S), w && w.disconnect();
    };
  }, [b, u]), _n(() => {
    u();
  });
  const C = (S) => {
    d || u(), r && r(S);
  };
  return /* @__PURE__ */ E.jsxs(T.Fragment, {
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
      ref: g,
      tabIndex: -1,
      style: {
        ...Dy.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (hd.propTypes = {
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
function es(e) {
  return typeof e == "string";
}
function Hr({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const Ki = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ki.displayName = "FormControlContext");
function hr() {
  return T.useContext(Ki);
}
const Ae = Gb;
function Zl(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function mi(e, t = !1) {
  return e && (Zl(e.value) && e.value !== "" || t && Zl(e.defaultValue) && e.defaultValue !== "");
}
function _y(e) {
  return e.startAdornment;
}
function Fy(e) {
  return ze("MuiInputBase", e);
}
const Qt = je("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Ql;
const Xi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ce(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Zi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Ly = (e) => {
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
    size: h,
    startAdornment: g,
    type: b
  } = e, u = {
    root: ["root", `color${ce(n)}`, r && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", h && h !== "medium" && `size${ce(h)}`, f && "multiline", g && "adornedStart", a && "adornedEnd", d && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", b === "search" && "inputTypeSearch", f && "inputMultiline", h === "small" && "inputSizeSmall", d && "inputHiddenLabel", g && "inputAdornedStart", a && "inputAdornedEnd", p && "readOnly"]
  };
  return Ve(u, Fy, t);
}, Qi = ue("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Xi
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
}))), Ji = ue("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Zi
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
})), Jl = Ny({
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
}), jo = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    disabled: h,
    disableInjectingGlobalStyles: g,
    endAdornment: b,
    error: u,
    fullWidth: y = !1,
    id: C,
    inputComponent: S = "input",
    inputProps: v = {},
    inputRef: x,
    margin: w,
    maxRows: I,
    minRows: O,
    multiline: $ = !1,
    name: k,
    onBlur: m,
    onChange: P,
    onClick: M,
    onFocus: N,
    onKeyDown: W,
    onKeyUp: D,
    placeholder: F,
    readOnly: Y,
    renderSuffix: oe,
    rows: G,
    size: H,
    slotProps: q = {},
    slots: ae = {},
    startAdornment: re,
    type: j = "text",
    value: L,
    ...Z
  } = r, _ = v.value != null ? v.value : L, {
    current: V
  } = T.useRef(_ != null), J = T.useRef(), Q = T.useCallback((Se) => {
    process.env.NODE_ENV !== "production" && Se && Se.nodeName !== "INPUT" && !Se.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), le = Tt(J, x, v.ref, Q), [B, xe] = T.useState(!1), pe = hr();
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (pe)
      return pe.registerEffect();
  }, [pe]);
  const be = Hr({
    props: r,
    muiFormControl: pe,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  be.focused = pe ? pe.focused : B, T.useEffect(() => {
    !pe && h && B && (xe(!1), m && m());
  }, [pe, h, B, m]);
  const Re = pe && pe.onFilled, se = pe && pe.onEmpty, ke = T.useCallback((Se) => {
    mi(Se) ? Re && Re() : se && se();
  }, [Re, se]);
  _n(() => {
    V && ke({
      value: _
    });
  }, [_, ke, V]);
  const he = (Se) => {
    N && N(Se), v.onFocus && v.onFocus(Se), pe && pe.onFocus ? pe.onFocus(Se) : xe(!0);
  }, Me = (Se) => {
    m && m(Se), v.onBlur && v.onBlur(Se), pe && pe.onBlur ? pe.onBlur(Se) : xe(!1);
  }, Ee = (Se, ...bt) => {
    if (!V) {
      const St = Se.target || J.current;
      if (St == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : jn(1));
      ke({
        value: St.value
      });
    }
    v.onChange && v.onChange(Se, ...bt), P && P(Se, ...bt);
  };
  T.useEffect(() => {
    ke(J.current);
  }, []);
  const de = (Se) => {
    J.current && Se.currentTarget === Se.target && J.current.focus(), M && M(Se);
  };
  let it = S, We = v;
  $ && it === "input" && (G ? (process.env.NODE_ENV !== "production" && (O || I) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), We = {
    type: void 0,
    minRows: G,
    maxRows: G,
    ...We
  }) : We = {
    type: void 0,
    maxRows: I,
    minRows: O,
    ...We
  }, it = hd);
  const gt = (Se) => {
    ke(Se.animationName === "mui-auto-fill-cancel" ? J.current : {
      value: "x"
    });
  };
  T.useEffect(() => {
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
  }, lt = Ly(Ot), Pt = ae.root || d.Root || Qi, Fe = q.root || f.root || {}, _e = ae.input || d.Input || Ji;
  return We = {
    ...We,
    ...q.input ?? f.input
  }, /* @__PURE__ */ E.jsxs(T.Fragment, {
    children: [!g && typeof Jl == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Ql || (Ql = /* @__PURE__ */ E.jsx(Jl, {}))), /* @__PURE__ */ E.jsxs(Pt, {
      ...Fe,
      ref: n,
      onClick: de,
      ...Z,
      ...!es(Pt) && {
        ownerState: {
          ...Ot,
          ...Fe.ownerState
        }
      },
      className: ge(lt.root, Fe.className, l, Y && "MuiInputBase-readOnly"),
      children: [re, /* @__PURE__ */ E.jsx(Ki.Provider, {
        value: null,
        children: /* @__PURE__ */ E.jsx(_e, {
          "aria-invalid": be.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: s,
          defaultValue: p,
          disabled: be.disabled,
          id: C,
          onAnimationStart: gt,
          name: k,
          placeholder: F,
          readOnly: Y,
          required: be.required,
          rows: G,
          value: _,
          onKeyDown: W,
          onKeyUp: D,
          type: j,
          ...We,
          ...!es(_e) && {
            as: it,
            ownerState: {
              ...Ot,
              ...We.ownerState
            }
          },
          ref: le,
          className: ge(lt.input, We.className, Y && "MuiInputBase-readOnly"),
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
process.env.NODE_ENV !== "production" && (jo.propTypes = {
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
  inputComponent: Os,
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
function By(e) {
  return typeof e.main == "string";
}
function zy(e, t = []) {
  if (!By(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function tn(e = []) {
  return ([, t]) => t && zy(t, e);
}
function Wy(e) {
  return ze("MuiInput", e);
}
const Jn = {
  ...Qt,
  ...je("MuiInput", ["root", "underline", "input"])
}, Vy = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Wy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Hy = ue(Qi, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Xi(e, t), !n.disableUnderline && t.underline];
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
})), Uy = ue(Ji, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Zi
})({}), ea = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    type: h = "text",
    ...g
  } = r, b = Vy(r), y = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, C = f ?? s ? Dt(f ?? s, y) : y, S = p.root ?? a.Root ?? Hy, v = p.input ?? a.Input ?? Uy;
  return /* @__PURE__ */ E.jsx(jo, {
    slots: {
      root: S,
      input: v
    },
    slotProps: C,
    fullWidth: l,
    inputComponent: c,
    multiline: d,
    ref: n,
    type: h,
    ...g,
    classes: b
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
ea.muiName = "Input";
function Yy(e) {
  return ze("MuiFilledInput", e);
}
const Jt = {
  ...Qt,
  ...je("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function qy(e) {
  return ze("MuiSvgIcon", e);
}
je("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Gy = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ce(t)}`, `fontSize${ce(n)}`]
  };
  return Ve(i, qy, r);
}, Ky = ue("svg", {
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
  var t, n, r, i, a, s, l, c, d, f, p, h, g, b;
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
          color: (h = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (b = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : b.disabled
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
})), hi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    viewBox: h = "0 0 24 24",
    ...g
  } = r, b = /* @__PURE__ */ T.isValidElement(i) && i.type === "svg", u = {
    ...r,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: h,
    hasSvgAsChild: b
  }, y = {};
  f || (y.viewBox = h);
  const C = Gy(u);
  return /* @__PURE__ */ E.jsxs(Ky, {
    as: l,
    className: ge(C.root, a),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...y,
    ...g,
    ...b && i.props,
    ownerState: u,
    children: [b ? i.props.children : i, p ? /* @__PURE__ */ E.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
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
hi.muiName = "SvgIcon";
function Ln(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ E.jsx(hi, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = hi.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
}
const Xy = (e) => {
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
  }, d = Ve(c, Yy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...d
  };
}, Zy = ue(Qi, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Xi(e, t), !n.disableUnderline && t.underline];
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
})), Qy = ue(Ji, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Zi
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
}))), ta = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    slots: h = {},
    type: g = "text",
    ...b
  } = r, u = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: d,
    multiline: f,
    type: g
  }, y = Xy(r), C = {
    root: {
      ownerState: u
    },
    input: {
      ownerState: u
    }
  }, S = p ?? s ? Dt(C, p ?? s) : C, v = h.root ?? a.Root ?? Zy, x = h.input ?? a.Input ?? Qy;
  return /* @__PURE__ */ E.jsx(jo, {
    slots: {
      root: v,
      input: x
    },
    slotProps: S,
    fullWidth: l,
    inputComponent: d,
    multiline: f,
    ref: n,
    type: g,
    ...b,
    classes: y
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
ta.muiName = "Input";
var ec;
const Jy = ue("fieldset", {
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
}), ev = ue("legend", {
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
function gd(e) {
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
  return /* @__PURE__ */ E.jsx(Jy, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...s,
    children: /* @__PURE__ */ E.jsx(ev, {
      ownerState: c,
      children: l ? /* @__PURE__ */ E.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ec || (ec = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (gd.propTypes = {
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
function tv(e) {
  return ze("MuiOutlinedInput", e);
}
const dn = {
  ...Qt,
  ...je("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, nv = (e) => {
  const {
    classes: t
  } = e, r = Ve({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, tv, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, rv = ue(Qi, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Xi
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
})), ov = ue(gd, {
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
})), iv = ue(Ji, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Zi
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
}))), na = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    type: h = "text",
    ...g
  } = i, b = nv(i), u = hr(), y = Hr({
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
    type: h
  }, S = p.root ?? a.Root ?? rv, v = p.input ?? a.Input ?? iv;
  return /* @__PURE__ */ E.jsx(jo, {
    slots: {
      root: S,
      input: v
    },
    renderSuffix: (x) => /* @__PURE__ */ E.jsx(ov, {
      ownerState: C,
      className: b.notchedOutline,
      label: c != null && c !== "" && y.required ? r || (r = /* @__PURE__ */ E.jsxs(T.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof f < "u" ? f : !!(x.startAdornment || x.filled || x.focused)
    }),
    fullWidth: s,
    inputComponent: l,
    multiline: d,
    ref: n,
    type: h,
    ...g,
    classes: {
      ...b,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (na.propTypes = {
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
na.muiName = "Input";
function av(e) {
  return ze("MuiFormLabel", e);
}
const uo = je("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), sv = (e) => {
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
  return Ve(c, av, t);
}, lv = ue("label", {
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
      [`&.${uo.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${uo.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${uo.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), cv = ue("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ae(({
  theme: e
}) => ({
  [`&.${uo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), bd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    required: h,
    ...g
  } = r, b = hr(), u = Hr({
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
  }, C = sv(y);
  return /* @__PURE__ */ E.jsxs(lv, {
    as: l,
    ownerState: y,
    className: ge(C.root, a),
    ref: n,
    ...g,
    children: [i, u.required && /* @__PURE__ */ E.jsxs(cv, {
      ownerState: y,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (bd.propTypes = {
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
function uv(e) {
  return ze("MuiInputLabel", e);
}
je("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const dv = (e) => {
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
  }, d = Ve(c, uv, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...d
  };
}, fv = ue(bd, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${uo.asterisk}`]: t.asterisk
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
}))), yd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, f = hr();
  let p = s;
  typeof p > "u" && f && (p = f.filled || f.focused || f.adornedStart);
  const h = Hr({
    props: r,
    muiFormControl: f,
    states: ["size", "variant", "required", "focused"]
  }), g = {
    ...r,
    disableAnimation: i,
    formControl: f,
    shrink: p,
    size: h.size,
    variant: h.variant,
    required: h.required,
    focused: h.focused
  }, b = dv(g);
  return /* @__PURE__ */ E.jsx(fv, {
    "data-shrink": p,
    ref: n,
    className: ge(b.root, c),
    ...d,
    ownerState: g,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
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
function pv(e) {
  return ze("MuiFormControl", e);
}
je("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const mv = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${ce(n)}`, r && "fullWidth"]
  };
  return Ve(i, pv, t);
}, hv = ue("div", {
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
}), vd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    hiddenLabel: h = !1,
    margin: g = "none",
    required: b = !1,
    size: u = "medium",
    variant: y = "outlined",
    ...C
  } = r, S = {
    ...r,
    color: s,
    component: l,
    disabled: c,
    error: d,
    fullWidth: p,
    hiddenLabel: h,
    margin: g,
    required: b,
    size: u,
    variant: y
  }, v = mv(S), [x, w] = T.useState(() => {
    let F = !1;
    return i && T.Children.forEach(i, (Y) => {
      if (!Ea(Y, ["Input", "Select"]))
        return;
      const oe = Ea(Y, ["Select"]) ? Y.props.input : Y;
      oe && _y(oe.props) && (F = !0);
    }), F;
  }), [I, O] = T.useState(() => {
    let F = !1;
    return i && T.Children.forEach(i, (Y) => {
      Ea(Y, ["Input", "Select"]) && (mi(Y.props, !0) || mi(Y.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [$, k] = T.useState(!1);
  c && $ && k(!1);
  const m = f !== void 0 && !c ? f : $;
  let P;
  const M = T.useRef(!1);
  process.env.NODE_ENV !== "production" && (P = () => (M.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), M.current = !0, () => {
    M.current = !1;
  }));
  const N = T.useCallback(() => {
    O(!0);
  }, []), W = T.useCallback(() => {
    O(!1);
  }, []), D = T.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: w,
    color: s,
    disabled: c,
    error: d,
    filled: I,
    focused: m,
    fullWidth: p,
    hiddenLabel: h,
    size: u,
    onBlur: () => {
      k(!1);
    },
    onFocus: () => {
      k(!0);
    },
    onEmpty: W,
    onFilled: N,
    registerEffect: P,
    required: b,
    variant: y
  }), [x, s, c, d, I, m, p, h, P, W, N, b, u, y]);
  return /* @__PURE__ */ E.jsx(Ki.Provider, {
    value: D,
    children: /* @__PURE__ */ E.jsx(hv, {
      as: l,
      ownerState: S,
      className: ge(v.root, a),
      ref: n,
      ...C,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
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
function gv(e) {
  return ze("MuiFormHelperText", e);
}
const tc = je("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var nc;
const bv = (e) => {
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
  return Ve(d, gv, t);
}, yv = ue("p", {
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
  [`&.${tc.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${tc.error}`]: {
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
}))), xd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    required: h,
    variant: g,
    ...b
  } = r, u = hr(), y = Hr({
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
  const S = bv(C);
  return /* @__PURE__ */ E.jsx(yv, {
    as: s,
    className: ge(S.root, a),
    ref: n,
    ...b,
    ownerState: C,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      nc || (nc = /* @__PURE__ */ E.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (xd.propTypes = {
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
var ts = { exports: {} }, Qe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function vv() {
  if (rc) return Qe;
  rc = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
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
            case h:
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
    return typeof u == "string" || typeof u == "function" || u === n || u === i || u === r || u === c || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === g || u.getModuleId !== void 0);
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
var oc;
function xv() {
  return oc || (oc = 1, process.env.NODE_ENV !== "production" && function() {
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
              case g:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case h:
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
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    Je.ContextConsumer = s, Je.ContextProvider = l, Je.Element = t, Je.ForwardRef = c, Je.Fragment = r, Je.Lazy = h, Je.Memo = p, Je.Portal = n, Je.Profiler = a, Je.StrictMode = i, Je.Suspense = d, Je.SuspenseList = f, Je.isContextConsumer = function(u) {
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
      return e(u) === h;
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
      return typeof u == "string" || typeof u == "function" || u === r || u === a || u === i || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === p || u.$$typeof === l || u.$$typeof === s || u.$$typeof === c || u.$$typeof === b || u.getModuleId !== void 0);
    }, Je.typeOf = e;
  }()), Je;
}
process.env.NODE_ENV === "production" ? ts.exports = vv() : ts.exports = xv();
var Ms = ts.exports;
const gi = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (gi.displayName = "ListContext");
function wv(e) {
  return ze("MuiList", e);
}
je("MuiList", ["root", "padding", "dense", "subheader"]);
const Cv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ve({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, wv, t);
}, Tv = ue("ul", {
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
}), wd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, p = T.useMemo(() => ({
    dense: l
  }), [l]), h = {
    ...r,
    component: s,
    dense: l,
    disablePadding: c
  }, g = Cv(h);
  return /* @__PURE__ */ E.jsx(gi.Provider, {
    value: p,
    children: /* @__PURE__ */ E.jsxs(Tv, {
      as: s,
      className: ge(g.root, a),
      ref: n,
      ownerState: h,
      ...f,
      children: [d, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (wd.propTypes = {
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
function Pa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ic(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Cd(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Qr(e, t, n, r, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Cd(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Td = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    ...h
  } = t, g = T.useRef(null), b = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  _n(() => {
    i && g.current.focus();
  }, [i]), T.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: x
    }) => {
      const w = !g.current.style.width;
      if (v.clientHeight < g.current.clientHeight && w) {
        const I = `${Ju(qn(v))}px`;
        g.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = I, g.current.style.width = `calc(100% + ${I})`;
      }
      return g.current;
    }
  }), []);
  const u = (v) => {
    const x = g.current, w = v.key;
    if (v.ctrlKey || v.metaKey || v.altKey) {
      f && f(v);
      return;
    }
    const O = rn(x).activeElement;
    if (w === "ArrowDown")
      v.preventDefault(), Qr(x, O, d, c, Pa);
    else if (w === "ArrowUp")
      v.preventDefault(), Qr(x, O, d, c, ic);
    else if (w === "Home")
      v.preventDefault(), Qr(x, null, d, c, Pa);
    else if (w === "End")
      v.preventDefault(), Qr(x, null, d, c, ic);
    else if (w.length === 1) {
      const $ = b.current, k = w.toLowerCase(), m = performance.now();
      $.keys.length > 0 && (m - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && k !== $.keys[0] && ($.repeating = !1)), $.lastTime = m, $.keys.push(k);
      const P = O && !$.repeating && Cd(O, $);
      $.previousKeyMatched && (P || Qr(x, O, !1, c, Pa, $)) ? v.preventDefault() : $.previousKeyMatched = !1;
    }
    f && f(v);
  }, y = Tt(g, n);
  let C = -1;
  T.Children.forEach(s, (v, x) => {
    if (!/* @__PURE__ */ T.isValidElement(v)) {
      C === x && (C += 1, C >= s.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ms.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (p === "selectedMenu" && v.props.selected || C === -1) && (C = x), C === x && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (C += 1, C >= s.length && (C = -1));
  });
  const S = T.Children.map(s, (v, x) => {
    if (x === C) {
      const w = {};
      return a && (w.autoFocus = !0), v.props.tabIndex === void 0 && p === "selectedMenu" && (w.tabIndex = 0), /* @__PURE__ */ T.cloneElement(v, w);
    }
    return v;
  });
  return /* @__PURE__ */ E.jsx(wd, {
    role: "menu",
    ref: y,
    className: l,
    onKeyDown: u,
    tabIndex: i ? 0 : -1,
    ...h,
    children: S
  });
});
process.env.NODE_ENV !== "production" && (Td.propTypes = {
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
function Sd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function ns(e, t) {
  return ns = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ns(e, t);
}
function Ed(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ns(e, t);
}
const ac = {
  disabled: !1
};
var Sv = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const bi = Ct.createContext(null);
var Ev = function(t) {
  return t.scrollTop;
}, ao = "unmounted", ar = "exited", sr = "entering", Er = "entered", rs = "exiting", Bn = /* @__PURE__ */ function(e) {
  Ed(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = ar, a.appearStatus = sr) : c = Er : r.unmountOnExit || r.mountOnEnter ? c = ao : c = ar, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === ao ? {
      status: ar
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== sr && s !== Er && (a = sr) : (s === sr || s === Er) && (a = rs);
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
      if (this.cancelNextCallback(), a === sr) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Ho.findDOMNode(this);
          s && Ev(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === ar && this.setState({
      status: ao
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Ho.findDOMNode(this), l], d = c[0], f = c[1], p = this.getTimeouts(), h = l ? p.appear : p.enter;
    if (!i && !s || ac.disabled) {
      this.safeSetState({
        status: Er
      }, function() {
        a.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: sr
    }, function() {
      a.props.onEntering(d, f), a.onTransitionEnd(h, function() {
        a.safeSetState({
          status: Er
        }, function() {
          a.props.onEntered(d, f);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Ho.findDOMNode(this);
    if (!a || ac.disabled) {
      this.safeSetState({
        status: ar
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: rs
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: ar
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Ho.findDOMNode(this), l = i == null && !this.props.addEndListener;
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
    if (i === ao)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = Sd(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ct.createElement(bi.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : Ct.cloneElement(Ct.Children.only(s), l))
    );
  }, t;
}(Ct.Component);
Bn.contextType = bi;
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
    var n = Sv;
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
function Tr() {
}
Bn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Tr,
  onEntering: Tr,
  onEntered: Tr,
  onExit: Tr,
  onExiting: Tr,
  onExited: Tr
};
Bn.UNMOUNTED = ao;
Bn.EXITED = ar;
Bn.ENTERING = sr;
Bn.ENTERED = Er;
Bn.EXITING = rs;
function Ov(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ns(e, t) {
  var n = function(a) {
    return t && Qo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Zf.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Rv(e, t) {
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
function ur(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Pv(e, t) {
  return Ns(e.children, function(n) {
    return Jo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ur(n, "appear", e),
      enter: ur(n, "enter", e),
      exit: ur(n, "exit", e)
    });
  });
}
function Iv(e, t, n) {
  var r = Ns(e.children), i = Rv(t, r);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (Qo(s)) {
      var l = a in t, c = a in r, d = t[a], f = Qo(d) && !d.props.in;
      c && (!l || f) ? i[a] = Jo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: ur(s, "exit", e),
        enter: ur(s, "enter", e)
      }) : !c && l && !f ? i[a] = Jo(s, {
        in: !1
      }) : c && l && Qo(d) && (i[a] = Jo(s, {
        onExited: n.bind(null, s),
        in: d.props.in,
        exit: ur(s, "exit", e),
        enter: ur(s, "enter", e)
      }));
    }
  }), i;
}
var kv = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, $v = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ds = /* @__PURE__ */ function(e) {
  Ed(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(Ov(a));
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
      children: c ? Pv(i, l) : Iv(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = Ns(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = ui({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = Sd(i, ["component", "childFactory"]), c = this.state.contextValue, d = kv(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ Ct.createElement(bi.Provider, {
      value: c
    }, d) : /* @__PURE__ */ Ct.createElement(bi.Provider, {
      value: c
    }, /* @__PURE__ */ Ct.createElement(a, l, d));
  }, t;
}(Ct.Component);
Ds.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ds.defaultProps = $v;
const Od = (e) => e.scrollTop;
function yi(e, t) {
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
function os(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Mv = {
  entering: {
    opacity: 1,
    transform: os(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ia = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), vi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    onExited: h,
    onExiting: g,
    style: b,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Bn,
    ...C
  } = t, S = Qu(), v = T.useRef(), x = $s(), w = T.useRef(null), I = Tt(w, Ao(a), n), O = (D) => (F) => {
    if (D) {
      const Y = w.current;
      F === void 0 ? D(Y) : D(Y, F);
    }
  }, $ = O(f), k = O((D, F) => {
    Od(D);
    const {
      duration: Y,
      delay: oe,
      easing: G
    } = yi({
      style: b,
      timeout: u,
      easing: s
    }, {
      mode: "enter"
    });
    let H;
    u === "auto" ? (H = x.transitions.getAutoHeightDuration(D.clientHeight), v.current = H) : H = Y, D.style.transition = [x.transitions.create("opacity", {
      duration: H,
      delay: oe
    }), x.transitions.create("transform", {
      duration: Ia ? H : H * 0.666,
      delay: oe,
      easing: G
    })].join(","), c && c(D, F);
  }), m = O(d), P = O(g), M = O((D) => {
    const {
      duration: F,
      delay: Y,
      easing: oe
    } = yi({
      style: b,
      timeout: u,
      easing: s
    }, {
      mode: "exit"
    });
    let G;
    u === "auto" ? (G = x.transitions.getAutoHeightDuration(D.clientHeight), v.current = G) : G = F, D.style.transition = [x.transitions.create("opacity", {
      duration: G,
      delay: Y
    }), x.transitions.create("transform", {
      duration: Ia ? G : G * 0.666,
      delay: Ia ? Y : Y || G * 0.333,
      easing: oe
    })].join(","), D.style.opacity = 0, D.style.transform = os(0.75), p && p(D);
  }), N = O(h), W = (D) => {
    u === "auto" && S.start(v.current || 0, D), r && r(w.current, D);
  };
  return /* @__PURE__ */ E.jsx(y, {
    appear: i,
    in: l,
    nodeRef: w,
    onEnter: k,
    onEntered: m,
    onEntering: $,
    onExit: M,
    onExited: N,
    onExiting: P,
    addEndListener: W,
    timeout: u === "auto" ? null : u,
    ...C,
    children: (D, {
      ownerState: F,
      ...Y
    }) => /* @__PURE__ */ T.cloneElement(a, {
      style: {
        opacity: 0,
        transform: os(0.75),
        visibility: D === "exited" && !l ? "hidden" : void 0,
        ...Mv[D],
        ...b,
        ...a.props.style
      },
      ref: I,
      ...Y
    })
  });
});
process.env.NODE_ENV !== "production" && (vi.propTypes = {
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
  children: Do.isRequired,
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
vi && (vi.muiSupportAuto = !0);
function Nv(e) {
  const t = rn(e);
  return t.body === e ? qn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function fo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function sc(e) {
  return parseInt(qn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Dv(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function lc(e, t, n, r, i) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !a.includes(s), c = !Dv(s);
    l && c && fo(s, i);
  });
}
function ka(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Av(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Nv(r)) {
      const s = Ju(qn(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${sc(r) + s}px`;
      const l = rn(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${sc(c) + s}px`;
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
function jv(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class _v {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && fo(t.modalRef, !1);
    const i = jv(n);
    lc(n, t.mount, t.modalRef, i, !0);
    const a = ka(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = ka(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Av(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = ka(this.containers, (s) => s.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && fo(t.modalRef, n), lc(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && fo(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Fv = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Lv(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Bv(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function zv(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Bv(e));
}
function Wv(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Fv)).forEach((r, i) => {
    const a = Lv(r);
    a === -1 || !zv(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Vv() {
  return !0;
}
function xi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Wv,
    isEnabled: s = Vv,
    open: l
  } = e, c = T.useRef(!1), d = T.useRef(null), f = T.useRef(null), p = T.useRef(null), h = T.useRef(null), g = T.useRef(!1), b = T.useRef(null), u = Tt(Ao(t), b), y = T.useRef(null);
  T.useEffect(() => {
    !l || !b.current || (g.current = !n);
  }, [n, l]), T.useEffect(() => {
    if (!l || !b.current)
      return;
    const v = rn(b.current);
    return b.current.contains(v.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), g.current && b.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), T.useEffect(() => {
    if (!l || !b.current)
      return;
    const v = rn(b.current), x = (O) => {
      y.current = O, !(r || !s() || O.key !== "Tab") && v.activeElement === b.current && O.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, w = () => {
      var k, m;
      const O = b.current;
      if (O === null)
        return;
      if (!v.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (O.contains(v.activeElement) || r && v.activeElement !== d.current && v.activeElement !== f.current)
        return;
      if (v.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let $ = [];
      if ((v.activeElement === d.current || v.activeElement === f.current) && ($ = a(b.current)), $.length > 0) {
        const P = !!((k = y.current) != null && k.shiftKey && ((m = y.current) == null ? void 0 : m.key) === "Tab"), M = $[0], N = $[$.length - 1];
        typeof M != "string" && typeof N != "string" && (P ? N.focus() : M.focus());
      } else
        O.focus();
    };
    v.addEventListener("focusin", w), v.addEventListener("keydown", x, !0);
    const I = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && w();
    }, 50);
    return () => {
      clearInterval(I), v.removeEventListener("focusin", w), v.removeEventListener("keydown", x, !0);
    };
  }, [n, r, i, s, l, a]);
  const C = (v) => {
    p.current === null && (p.current = v.relatedTarget), g.current = !0, h.current = v.target;
    const x = t.props.onFocus;
    x && x(v);
  }, S = (v) => {
    p.current === null && (p.current = v.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ E.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ E.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: u,
      onFocus: C
    }), /* @__PURE__ */ E.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (xi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Do,
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
process.env.NODE_ENV !== "production" && (xi.propTypes = Ku(xi.propTypes));
function Hv(e) {
  return typeof e == "function" ? e() : e;
}
const Co = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = T.useState(null), c = Tt(/* @__PURE__ */ T.isValidElement(r) ? Ao(r) : null, n);
  if (_n(() => {
    a || l(Hv(i) || document.body);
  }, [i, a]), _n(() => {
    if (s && !a)
      return Ka(n, s), () => {
        Ka(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ T.isValidElement(r)) {
      const d = {
        ref: c
      };
      return /* @__PURE__ */ T.cloneElement(r, d);
    }
    return r;
  }
  return s && /* @__PURE__ */ Jf.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (Co.propTypes = {
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
process.env.NODE_ENV !== "production" && (Co.propTypes = Ku(Co.propTypes));
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
    ...h
  } = a, g = f[e] || r, b = id(p[e], i), {
    props: {
      component: u,
      ...y
    },
    internalRef: C
  } = od({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: b
  }), S = Tt(C, b == null ? void 0 : b.ref, t.ref), v = e === "root" ? u || d : u, x = nd(g, {
    ...e === "root" && !d && !f[e] && s,
    ...e !== "root" && !f[e] && s,
    ...y,
    ...v && !l && {
      as: v
    },
    ...v && l && {
      component: v
    },
    ref: S
  }, i);
  return [g, x];
}
const Uv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Rd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = $s(), i = {
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
    onEntering: h,
    onExit: g,
    onExited: b,
    onExiting: u,
    style: y,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = Bn,
    ...v
  } = t, x = T.useRef(null), w = Tt(x, Ao(l), n), I = (W) => (D) => {
    if (W) {
      const F = x.current;
      D === void 0 ? W(F) : W(F, D);
    }
  }, O = I(h), $ = I((W, D) => {
    Od(W);
    const F = yi({
      style: y,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    W.style.webkitTransition = r.transitions.create("opacity", F), W.style.transition = r.transitions.create("opacity", F), f && f(W, D);
  }), k = I(p), m = I(u), P = I((W) => {
    const D = yi({
      style: y,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    W.style.webkitTransition = r.transitions.create("opacity", D), W.style.transition = r.transitions.create("opacity", D), g && g(W);
  }), M = I(b), N = (W) => {
    a && a(x.current, W);
  };
  return /* @__PURE__ */ E.jsx(S, {
    appear: s,
    in: d,
    nodeRef: x,
    onEnter: $,
    onEntered: k,
    onEntering: O,
    onExit: P,
    onExited: M,
    onExiting: m,
    addEndListener: N,
    timeout: C,
    ...v,
    children: (W, {
      ownerState: D,
      ...F
    }) => /* @__PURE__ */ T.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: W === "exited" && !d ? "hidden" : void 0,
        ...Uv[W],
        ...y,
        ...l.props.style
      },
      ref: w,
      ...F
    })
  });
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
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
  children: Do.isRequired,
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
function Yv(e) {
  return ze("MuiBackdrop", e);
}
je("MuiBackdrop", ["root", "invisible"]);
const qv = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ve({
    root: ["root", n && "invisible"]
  }, Yv, t);
}, Gv = ue("div", {
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
}), Pd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    slots: h = {},
    TransitionComponent: g,
    transitionDuration: b,
    ...u
  } = r, y = {
    ...r,
    component: s,
    invisible: l
  }, C = qv(y), S = {
    transition: g,
    root: d.Root,
    ...h
  }, v = {
    ...f,
    ...p
  }, x = {
    slots: S,
    slotProps: v
  }, [w, I] = vt("root", {
    elementType: Gv,
    externalForwardedProps: x,
    className: ge(C.root, a),
    ownerState: y
  }), [O, $] = vt("transition", {
    elementType: Rd,
    externalForwardedProps: x,
    ownerState: y
  });
  return /* @__PURE__ */ E.jsx(O, {
    in: c,
    timeout: b,
    ...u,
    ...$,
    children: /* @__PURE__ */ E.jsx(w, {
      "aria-hidden": !0,
      ...I,
      classes: C,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Pd.propTypes = {
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
function Kv(e) {
  return typeof e == "function" ? e() : e;
}
function Xv(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const cc = () => {
}, Ko = new _v();
function Zv(e) {
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
  } = e, p = T.useRef({}), h = T.useRef(null), g = T.useRef(null), b = Tt(g, f), [u, y] = T.useState(!d), C = Xv(l);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const v = () => rn(h.current), x = () => (p.current.modalRef = g.current, p.current.mount = h.current, p.current), w = () => {
    Ko.mount(x(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, I = Mn(() => {
    const D = Kv(t) || v().body;
    Ko.add(x(), D), g.current && w();
  }), O = () => Ko.isTopModal(x()), $ = Mn((D) => {
    h.current = D, D && (d && O() ? w() : g.current && fo(g.current, S));
  }), k = T.useCallback(() => {
    Ko.remove(x(), S);
  }, [S]);
  T.useEffect(() => () => {
    k();
  }, [k]), T.useEffect(() => {
    d ? I() : (!C || !i) && k();
  }, [d, k, C, i, I]);
  const m = (D) => (F) => {
    var Y;
    (Y = D.onKeyDown) == null || Y.call(D, F), !(F.key !== "Escape" || F.which === 229 || // Wait until IME is settled.
    !O()) && (n || (F.stopPropagation(), c && c(F, "escapeKeyDown")));
  }, P = (D) => (F) => {
    var Y;
    (Y = D.onClick) == null || Y.call(D, F), F.target === F.currentTarget && c && c(F, "backdropClick");
  };
  return {
    getRootProps: (D = {}) => {
      const F = rd(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const Y = {
        ...F,
        ...D
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...Y,
        onKeyDown: m(Y),
        ref: b
      };
    },
    getBackdropProps: (D = {}) => {
      const F = D;
      return {
        "aria-hidden": !0,
        ...F,
        onClick: P(F),
        open: d
      };
    },
    getTransitionProps: () => {
      const D = () => {
        y(!1), a && a();
      }, F = () => {
        y(!0), s && s(), i && k();
      };
      return {
        onEnter: _l(D, (l == null ? void 0 : l.props.onEnter) ?? cc),
        onExited: _l(F, (l == null ? void 0 : l.props.onExited) ?? cc)
      };
    },
    rootRef: b,
    portalRef: $,
    isTopModal: O,
    exited: u,
    hasTransition: C
  };
}
function Qv(e) {
  return ze("MuiModal", e);
}
je("MuiModal", ["root", "hidden", "backdrop"]);
const Jv = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Qv, r);
}, e0 = ue("div", {
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
}))), t0 = ue(Pd, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Id = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ge({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = t0,
    BackdropProps: a,
    classes: s,
    className: l,
    closeAfterTransition: c = !1,
    children: d,
    container: f,
    component: p,
    components: h = {},
    componentsProps: g = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: C = !1,
    disableRestoreFocus: S = !1,
    disableScrollLock: v = !1,
    hideBackdrop: x = !1,
    keepMounted: w = !1,
    onBackdropClick: I,
    onClose: O,
    onTransitionEnter: $,
    onTransitionExited: k,
    open: m,
    slotProps: P = {},
    slots: M = {},
    // eslint-disable-next-line react/prop-types
    theme: N,
    ...W
  } = r, D = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: b,
    disableEnforceFocus: u,
    disableEscapeKeyDown: y,
    disablePortal: C,
    disableRestoreFocus: S,
    disableScrollLock: v,
    hideBackdrop: x,
    keepMounted: w
  }, {
    getRootProps: F,
    getBackdropProps: Y,
    getTransitionProps: oe,
    portalRef: G,
    isTopModal: H,
    exited: q,
    hasTransition: ae
  } = Zv({
    ...D,
    rootRef: n
  }), re = {
    ...D,
    exited: q
  }, j = Jv(re), L = {};
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
      root: h.Root,
      backdrop: h.Backdrop,
      ...M
    },
    slotProps: {
      ...g,
      ...P
    }
  }, [_, V] = vt("root", {
    elementType: e0,
    externalForwardedProps: Z,
    getSlotProps: F,
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
    getSlotProps: (B) => Y({
      ...B,
      onClick: (xe) => {
        I && I(xe), B != null && B.onClick && B.onClick(xe);
      }
    }),
    className: ge(a == null ? void 0 : a.className, j == null ? void 0 : j.backdrop),
    ownerState: re
  }), le = Tt(a == null ? void 0 : a.ref, Q.ref);
  return !w && !m && (!ae || q) ? null : /* @__PURE__ */ E.jsx(Co, {
    ref: G,
    container: f,
    disablePortal: C,
    children: /* @__PURE__ */ E.jsxs(_, {
      ...V,
      children: [!x && i ? /* @__PURE__ */ E.jsx(J, {
        ...Q,
        ref: le
      }) : null, /* @__PURE__ */ E.jsx(xi, {
        disableEnforceFocus: u,
        disableAutoFocus: b,
        disableRestoreFocus: S,
        isEnabled: H,
        open: m,
        children: /* @__PURE__ */ T.cloneElement(d, L)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Id.propTypes = {
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
  children: Do.isRequired,
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
function n0(e) {
  return ze("MuiPaper", e);
}
je("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const r0 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ve(a, n0, i);
}, o0 = ue("div", {
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
}))), ra = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var g;
  const r = Ge({
    props: t,
    name: "MuiPaper"
  }), i = $s(), {
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
  }, h = r0(p);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ E.jsx(o0, {
    as: s,
    ownerState: p,
    className: ge(h.root, a),
    ref: n,
    ...f,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (g = i.vars.overlays) == null ? void 0 : g[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${rt("#fff", Ja(l))}, ${rt("#fff", Ja(l))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ra.propTypes = {
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
  elevation: Tn($r, (e) => {
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
function i0(e) {
  return ze("MuiPopover", e);
}
je("MuiPopover", ["root", "paper"]);
function uc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function dc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function fc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ii(e) {
  return typeof e == "function" ? e() : e;
}
const a0 = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"],
    paper: ["paper"]
  }, i0, t);
}, s0 = ue(Id, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), kd = ue(ra, {
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
}), $d = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    elevation: h = 8,
    marginThreshold: g = 16,
    open: b,
    PaperProps: u = {},
    slots: y = {},
    slotProps: C = {},
    transformOrigin: S = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = vi,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: w,
      ...I
    } = {},
    disableScrollLock: O = !1,
    ...$
  } = r, k = (C == null ? void 0 : C.paper) ?? u, m = T.useRef(), P = {
    ...r,
    anchorOrigin: s,
    anchorReference: c,
    elevation: h,
    marginThreshold: g,
    externalPaperSlotProps: k,
    transformOrigin: S,
    TransitionComponent: v,
    transitionDuration: x,
    TransitionProps: I
  }, M = a0(P), N = T.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const Q = ii(a), le = Q && Q.nodeType === 1 ? Q : rn(m.current).body, B = le.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const xe = le.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && xe.top === 0 && xe.left === 0 && xe.right === 0 && xe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: B.top + uc(B, s.vertical),
      left: B.left + dc(B, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), W = T.useCallback((Q) => ({
    vertical: uc(Q, S.vertical),
    horizontal: dc(Q, S.horizontal)
  }), [S.horizontal, S.vertical]), D = T.useCallback((Q) => {
    const le = {
      width: Q.offsetWidth,
      height: Q.offsetHeight
    }, B = W(le);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: fc(B)
      };
    const xe = N();
    let pe = xe.top - B.vertical, be = xe.left - B.horizontal;
    const Re = pe + le.height, se = be + le.width, ke = qn(ii(a)), he = ke.innerHeight - g, Me = ke.innerWidth - g;
    if (g !== null && pe < g) {
      const Ee = pe - g;
      pe -= Ee, B.vertical += Ee;
    } else if (g !== null && Re > he) {
      const Ee = Re - he;
      pe -= Ee, B.vertical += Ee;
    }
    if (process.env.NODE_ENV !== "production" && le.height > he && le.height && he && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${le.height - he}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && be < g) {
      const Ee = be - g;
      be -= Ee, B.horizontal += Ee;
    } else if (se > Me) {
      const Ee = se - Me;
      be -= Ee, B.horizontal += Ee;
    }
    return {
      top: `${Math.round(pe)}px`,
      left: `${Math.round(be)}px`,
      transformOrigin: fc(B)
    };
  }, [a, c, N, W, g]), [F, Y] = T.useState(b), oe = T.useCallback(() => {
    const Q = m.current;
    if (!Q)
      return;
    const le = D(Q);
    le.top !== null && Q.style.setProperty("top", le.top), le.left !== null && (Q.style.left = le.left), Q.style.transformOrigin = le.transformOrigin, Y(!0);
  }, [D]);
  T.useEffect(() => (O && window.addEventListener("scroll", oe), () => window.removeEventListener("scroll", oe)), [a, O, oe]);
  const G = (Q, le) => {
    w && w(Q, le), oe();
  }, H = () => {
    Y(!1);
  };
  T.useEffect(() => {
    b && oe();
  }), T.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      oe();
    }
  } : null, [b, oe]), T.useEffect(() => {
    if (!b)
      return;
    const Q = Xu(() => {
      oe();
    }), le = qn(a);
    return le.addEventListener("resize", Q), () => {
      Q.clear(), le.removeEventListener("resize", Q);
    };
  }, [a, b, oe]);
  let q = x;
  x === "auto" && !v.muiSupportAuto && (q = void 0);
  const ae = p || (a ? rn(ii(a)).body : void 0), re = {
    slots: y,
    slotProps: {
      ...C,
      paper: k
    }
  }, [j, L] = vt("paper", {
    elementType: kd,
    externalForwardedProps: re,
    additionalProps: {
      elevation: h,
      className: ge(M.paper, k == null ? void 0 : k.className),
      style: F ? k.style : {
        ...k.style,
        opacity: 0
      }
    },
    ownerState: P
  }), [Z, {
    slotProps: _,
    ...V
  }] = vt("root", {
    elementType: s0,
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
    ...!es(Z) && {
      slotProps: _,
      disableScrollLock: O
    },
    ...$,
    ref: n,
    children: /* @__PURE__ */ E.jsx(v, {
      appear: !0,
      in: b,
      onEntering: G,
      onExited: H,
      timeout: q,
      ...I,
      children: /* @__PURE__ */ E.jsx(j, {
        ...L,
        ref: J,
        children: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && ($d.propTypes = {
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
      const t = ii(e.anchorEl);
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
  elevation: $r,
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
    component: Os
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
function l0(e) {
  return ze("MuiMenu", e);
}
je("MuiMenu", ["root", "paper", "list"]);
const c0 = {
  vertical: "top",
  horizontal: "right"
}, u0 = {
  vertical: "top",
  horizontal: "left"
}, d0 = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, l0, t);
}, f0 = ue($d, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), p0 = ue(kd, {
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
}), m0 = ue(Td, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), As = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    PopoverClasses: h,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: b,
      ...u
    } = {},
    variant: y = "selectedMenu",
    slots: C = {},
    slotProps: S = {},
    ...v
  } = r, x = Ps(), w = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: b,
    PaperProps: p,
    transitionDuration: g,
    TransitionProps: u,
    variant: y
  }, I = d0(w), O = i && !l && f, $ = T.useRef(null), k = (F, Y) => {
    $.current && $.current.adjustStyleForScrollbar(F, {
      direction: x ? "rtl" : "ltr"
    }), b && b(F, Y);
  }, m = (F) => {
    F.key === "Tab" && (F.preventDefault(), d && d(F, "tabKeyDown"));
  };
  let P = -1;
  T.Children.map(a, (F, Y) => {
    /* @__PURE__ */ T.isValidElement(F) && (process.env.NODE_ENV !== "production" && Ms.isFragment(F) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), F.props.disabled || (y === "selectedMenu" && F.props.selected || P === -1) && (P = Y));
  });
  const M = C.paper ?? p0, N = S.paper ?? p, W = Za({
    elementType: C.root,
    externalSlotProps: S.root,
    ownerState: w,
    className: [I.root, s]
  }), D = Za({
    elementType: M,
    externalSlotProps: N,
    ownerState: w,
    className: I.paper
  });
  return /* @__PURE__ */ E.jsx(f0, {
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? c0 : u0,
    slots: {
      paper: M,
      root: C.root
    },
    slotProps: {
      root: W,
      paper: D
    },
    open: f,
    ref: n,
    transitionDuration: g,
    TransitionProps: {
      onEntering: k,
      ...u
    },
    ownerState: w,
    ...v,
    classes: h,
    children: /* @__PURE__ */ E.jsx(m0, {
      onKeyDown: m,
      actions: $,
      autoFocus: i && (P === -1 || l),
      autoFocusItem: O,
      variant: y,
      ...c,
      className: ge(I.list, c.className),
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (As.propTypes = {
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
function h0(e) {
  return ze("MuiNativeSelect", e);
}
const js = je("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), g0 = (e) => {
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
  return Ve(l, h0, t);
}, Md = ue("select")(({
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
  [`&.${js.disabled}`]: {
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
})), b0 = ue(Md, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: sn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${js.multiple}`]: t.multiple
    }];
  }
})({}), Nd = ue("svg")(({
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
  [`&.${js.disabled}`]: {
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
})), y0 = ue(Nd, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Dd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, p = g0(f);
  return /* @__PURE__ */ E.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ E.jsx(b0, {
      ownerState: f,
      className: ge(p.select, r),
      disabled: i,
      ref: l || n,
      ...d
    }), t.multiple ? null : /* @__PURE__ */ E.jsx(y0, {
      as: s,
      ownerState: f,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Dd.propTypes = {
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
function Ad(e) {
  return ze("MuiSelect", e);
}
const Jr = je("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var pc;
const v0 = ue(Md, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Jr.select}`]: t.select
      },
      {
        [`&.${Jr.select}`]: t[n.variant]
      },
      {
        [`&.${Jr.error}`]: t.error
      },
      {
        [`&.${Jr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Jr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), x0 = ue(Nd, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), w0 = ue("input", {
  shouldForwardProp: (e) => fd(e) && e !== "classes",
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
function mc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function C0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const T0 = (e) => {
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
  return Ve(l, Ad, t);
}, jd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    displayEmpty: h,
    error: g = !1,
    IconComponent: b,
    inputRef: u,
    labelId: y,
    MenuProps: C = {},
    multiple: S,
    name: v,
    onBlur: x,
    onChange: w,
    onClose: I,
    onFocus: O,
    onOpen: $,
    open: k,
    readOnly: m,
    renderValue: P,
    required: M,
    SelectDisplayProps: N = {},
    tabIndex: W,
    // catching `type` from Input which makes no sense for SelectInput
    type: D,
    value: F,
    variant: Y = "standard",
    ...oe
  } = t, [G, H] = kr({
    controlled: F,
    default: f,
    name: "Select"
  }), [q, ae] = kr({
    controlled: k,
    default: d,
    name: "Select"
  }), re = T.useRef(null), j = T.useRef(null), [L, Z] = T.useState(null), {
    current: _
  } = T.useRef(k != null), [V, J] = T.useState(), Q = Tt(n, u), le = T.useCallback((ie) => {
    j.current = ie, ie && Z(ie);
  }, []), B = L == null ? void 0 : L.parentNode;
  T.useImperativeHandle(Q, () => ({
    focus: () => {
      j.current.focus();
    },
    node: re.current,
    value: G
  }), [G]), T.useEffect(() => {
    d && q && L && !_ && (J(s ? null : B.clientWidth), j.current.focus());
  }, [L, s]), T.useEffect(() => {
    a && j.current.focus();
  }, [a]), T.useEffect(() => {
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
    ie ? $ && $(Oe) : I && I(Oe), _ || (J(s ? null : B.clientWidth), ae(ie));
  }, pe = (ie) => {
    ie.button === 0 && (ie.preventDefault(), j.current.focus(), xe(!0, ie));
  }, be = (ie) => {
    xe(!1, ie);
  }, Re = T.Children.toArray(l), se = (ie) => {
    const Oe = Re.find((Pe) => Pe.props.value === ie.target.value);
    Oe !== void 0 && (H(Oe.props.value), w && w(ie, Oe));
  }, ke = (ie) => (Oe) => {
    let Pe;
    if (Oe.currentTarget.hasAttribute("tabindex")) {
      if (S) {
        Pe = Array.isArray(G) ? G.slice() : [];
        const yt = G.indexOf(ie.props.value);
        yt === -1 ? Pe.push(ie.props.value) : Pe.splice(yt, 1);
      } else
        Pe = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(Oe), G !== Pe && (H(Pe), w)) {
        const yt = Oe.nativeEvent || Oe, ct = new yt.constructor(yt.type, yt);
        Object.defineProperty(ct, "target", {
          writable: !0,
          value: {
            value: Pe,
            name: v
          }
        }), w(ct, ie);
      }
      S || xe(!1, Oe);
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
  }, Me = L !== null && q, Ee = (ie) => {
    !Me && x && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: G,
        name: v
      }
    }), x(ie));
  };
  delete oe["aria-invalid"];
  let de, it;
  const We = [];
  let gt = !1, Ot = !1;
  (mi({
    value: G
  }) || h) && (P ? de = P(G) : gt = !0);
  const lt = Re.map((ie) => {
    if (!/* @__PURE__ */ T.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && Ms.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Oe;
    if (S) {
      if (!Array.isArray(G))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : jn(2));
      Oe = G.some((Pe) => mc(Pe, ie.props.value)), Oe && gt && We.push(ie.props.children);
    } else
      Oe = mc(G, ie.props.value), Oe && gt && (it = ie.props.children);
    return Oe && (Ot = !0), /* @__PURE__ */ T.cloneElement(ie, {
      "aria-selected": Oe ? "true" : "false",
      onClick: ke(ie),
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
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (!Ot && !S && G !== "") {
      const ie = Re.map((Oe) => Oe.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${G}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((Oe) => Oe != null).map((Oe) => `\`${Oe}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ot, Re, S, v, G]), gt && (S ? We.length === 0 ? de = null : de = We.reduce((ie, Oe, Pe) => (ie.push(Oe), Pe < We.length - 1 && ie.push(", "), ie), []) : de = it);
  let Pt = V;
  !s && _ && L && (Pt = B.clientWidth);
  let Fe;
  typeof W < "u" ? Fe = W : Fe = p ? null : 0;
  const _e = N.id || (v ? `mui-component-select-${v}` : void 0), Se = {
    ...t,
    variant: Y,
    value: G,
    open: Me,
    error: g
  }, bt = T0(Se), St = {
    ...C.PaperProps,
    ...($t = C.slotProps) == null ? void 0 : $t.paper
  }, vn = Ar();
  return /* @__PURE__ */ E.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ E.jsx(v0, {
      as: "div",
      ref: le,
      tabIndex: Fe,
      role: "combobox",
      "aria-controls": Me ? vn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Me ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [y, _e].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": M ? "true" : void 0,
      "aria-invalid": g ? "true" : void 0,
      onKeyDown: he,
      onMouseDown: p || m ? null : pe,
      onBlur: Ee,
      onFocus: O,
      ...N,
      ownerState: Se,
      className: ge(N.className, bt.select, c),
      id: _e,
      children: C0(de) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        pc || (pc = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : de
    }), /* @__PURE__ */ E.jsx(w0, {
      "aria-invalid": g,
      value: Array.isArray(G) ? G.join(",") : G,
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
    }), /* @__PURE__ */ E.jsx(x0, {
      as: b,
      className: bt.icon,
      ownerState: Se
    }), /* @__PURE__ */ E.jsx(As, {
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
        "aria-multiselectable": S ? "true" : void 0,
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
process.env.NODE_ENV !== "production" && (jd.propTypes = {
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
const _d = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), S0 = (e) => {
  const {
    classes: t
  } = e, r = Ve({
    root: ["root"]
  }, Ad, t);
  return {
    ...t,
    ...r
  };
}, _s = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => sn(e) && e !== "variant",
  slot: "Root"
}, E0 = ue(ea, _s)(""), O0 = ue(na, _s)(""), R0 = ue(ta, _s)(""), oa = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    IconComponent: f = _d,
    id: p,
    input: h,
    inputProps: g,
    label: b,
    labelId: u,
    MenuProps: y,
    multiple: C = !1,
    native: S = !1,
    onClose: v,
    onOpen: x,
    open: w,
    renderValue: I,
    SelectDisplayProps: O,
    variant: $ = "outlined",
    ...k
  } = r, m = S ? Dd : jd, P = hr(), M = Hr({
    props: r,
    muiFormControl: P,
    states: ["variant", "error"]
  }), N = M.variant || $, W = {
    ...r,
    variant: N,
    classes: s
  }, D = S0(W), {
    root: F,
    ...Y
  } = D, oe = h || {
    standard: /* @__PURE__ */ E.jsx(E0, {
      ownerState: W
    }),
    outlined: /* @__PURE__ */ E.jsx(O0, {
      label: b,
      ownerState: W
    }),
    filled: /* @__PURE__ */ E.jsx(R0, {
      ownerState: W
    })
  }[N], G = Tt(n, Ao(oe));
  return /* @__PURE__ */ E.jsx(T.Fragment, {
    children: /* @__PURE__ */ T.cloneElement(oe, {
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
        ...S ? {
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
          renderValue: I,
          SelectDisplayProps: {
            id: p,
            ...O
          }
        },
        ...g,
        classes: g ? Dt(Y, g.classes) : Y,
        ...h ? h.props.inputProps : {}
      },
      ...(C && S || d) && N === "outlined" ? {
        notched: !0
      } : {},
      ref: G,
      className: ge(oe.props.className, l, D.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: N
      },
      ...k
    })
  });
});
process.env.NODE_ENV !== "production" && (oa.propTypes = {
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
oa.muiName = "Select";
function P0(e) {
  return ze("MuiTextField", e);
}
je("MuiTextField", ["root"]);
const I0 = {
  standard: ea,
  filled: ta,
  outlined: na
}, k0 = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"]
  }, P0, t);
}, $0 = ue(vd, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Fd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    FormHelperTextProps: h,
    fullWidth: g = !1,
    helperText: b,
    id: u,
    InputLabelProps: y,
    inputProps: C,
    InputProps: S,
    inputRef: v,
    label: x,
    maxRows: w,
    minRows: I,
    multiline: O = !1,
    name: $,
    onBlur: k,
    onChange: m,
    onFocus: P,
    placeholder: M,
    required: N = !1,
    rows: W,
    select: D = !1,
    SelectProps: F,
    slots: Y = {},
    slotProps: oe = {},
    type: G,
    value: H,
    variant: q = "outlined",
    ...ae
  } = r, re = {
    ...r,
    autoFocus: a,
    color: c,
    disabled: f,
    error: p,
    fullWidth: g,
    multiline: O,
    required: N,
    select: D,
    variant: q
  }, j = k0(re);
  process.env.NODE_ENV !== "production" && D && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const L = Ar(u), Z = b && L ? `${L}-helper-text` : void 0, _ = x && L ? `${L}-label` : void 0, V = I0[q], J = {
    slots: Y,
    slotProps: {
      input: S,
      inputLabel: y,
      htmlInput: C,
      formHelperText: h,
      select: F,
      ...oe
    }
  }, Q = {}, le = J.slotProps.inputLabel;
  q === "outlined" && (le && typeof le.shrink < "u" && (Q.notched = le.shrink), Q.label = x), D && ((!F || !F.native) && (Q.id = void 0), Q["aria-describedby"] = void 0);
  const [B, xe] = vt("input", {
    elementType: V,
    externalForwardedProps: J,
    additionalProps: Q,
    ownerState: re
  }), [pe, be] = vt("inputLabel", {
    elementType: yd,
    externalForwardedProps: J,
    ownerState: re
  }), [Re, se] = vt("htmlInput", {
    elementType: "input",
    externalForwardedProps: J,
    ownerState: re
  }), [ke, he] = vt("formHelperText", {
    elementType: xd,
    externalForwardedProps: J,
    ownerState: re
  }), [Me, Ee] = vt("select", {
    elementType: oa,
    externalForwardedProps: J,
    ownerState: re
  }), de = /* @__PURE__ */ E.jsx(B, {
    "aria-describedby": Z,
    autoComplete: i,
    autoFocus: a,
    defaultValue: d,
    fullWidth: g,
    multiline: O,
    name: $,
    rows: W,
    maxRows: w,
    minRows: I,
    type: G,
    value: H,
    id: L,
    inputRef: v,
    onBlur: k,
    onChange: m,
    onFocus: P,
    placeholder: M,
    inputProps: se,
    slots: {
      input: Y.htmlInput ? Re : void 0
    },
    ...xe
  });
  return /* @__PURE__ */ E.jsxs($0, {
    className: ge(j.root, l),
    disabled: f,
    error: p,
    fullWidth: g,
    ref: n,
    required: N,
    color: c,
    variant: q,
    ownerState: re,
    ...ae,
    children: [x != null && x !== "" && /* @__PURE__ */ E.jsx(pe, {
      htmlFor: L,
      id: _,
      ...be,
      children: x
    }), D ? /* @__PURE__ */ E.jsx(Me, {
      "aria-describedby": Z,
      id: L,
      labelId: _,
      value: H,
      input: de,
      ...Ee,
      children: s
    }) : de, b && /* @__PURE__ */ E.jsx(ke, {
      id: Z,
      ...he,
      children: b
    })]
  });
});
process.env.NODE_ENV !== "production" && (Fd.propTypes = {
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
const Ld = An(Fd)`
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
`, Fs = Ct.createContext({
  filters: {},
  setFilters: () => {
  }
}), M0 = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, i] = Ct.useState({});
  return /* @__PURE__ */ E.jsx(
    Fs.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? i
      },
      children: e
    }
  );
};
function hc(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function N0(e = {}) {
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
    n && (f = f.toLowerCase()), t && (f = hc(f));
    const p = f ? l.filter((h) => {
      let g = (a || d)(h);
      return n && (g = g.toLowerCase()), t && (g = hc(g)), i === "start" ? g.startsWith(f) : g.includes(f);
    }) : l;
    return typeof r == "number" ? p.slice(0, r) : p;
  };
}
const D0 = N0(), gc = 5, A0 = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
}, j0 = [];
function bc(e, t, n) {
  if (t || e == null)
    return "";
  const r = n(e);
  return typeof r == "string" ? r : "";
}
function _0(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = A0,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: d = "useAutocomplete",
    defaultValue: f = e.multiple ? j0 : null,
    disableClearable: p = !1,
    disableCloseOnSelect: h = !1,
    disabled: g,
    disabledItemsFocusable: b = !1,
    disableListWrap: u = !1,
    filterOptions: y = D0,
    filterSelectedOptions: C = !1,
    freeSolo: S = !1,
    getOptionDisabled: v,
    getOptionKey: x,
    getOptionLabel: w = (z) => z.label ?? z,
    groupBy: I,
    handleHomeEndKeys: O = !e.freeSolo,
    id: $,
    includeInputInList: k = !1,
    inputValue: m,
    isOptionEqualToValue: P = (z, A) => z === A,
    multiple: M = !1,
    onChange: N,
    onClose: W,
    onHighlightChange: D,
    onInputChange: F,
    onOpen: Y,
    open: oe,
    openOnFocus: G = !1,
    options: H,
    readOnly: q = !1,
    selectOnFocus: ae = !e.freeSolo,
    value: re
  } = e, j = Ar($);
  let L = w;
  L = (z) => {
    const A = w(z);
    if (typeof A != "string") {
      if (process.env.NODE_ENV !== "production") {
        const X = A === void 0 ? "undefined" : `${typeof A} (${A})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${d} returned ${X} instead of a string for ${JSON.stringify(z)}.`);
      }
      return String(A);
    }
    return A;
  };
  const Z = T.useRef(!1), _ = T.useRef(!0), V = T.useRef(null), J = T.useRef(null), [Q, le] = T.useState(null), [B, xe] = T.useState(-1), pe = i ? 0 : -1, be = T.useRef(pe), Re = T.useRef(bc(f, M, L)).current, [se, ke] = kr({
    controlled: re,
    default: f,
    name: d
  }), [he, Me] = kr({
    controlled: m,
    default: Re,
    name: d,
    state: "inputValue"
  }), [Ee, de] = T.useState(!1), it = T.useCallback((z, A, X) => {
    if (!(M ? se.length < A.length : A !== null) && !l)
      return;
    const me = bc(A, M, L);
    he !== me && (Me(me), F && F(z, me, X));
  }, [L, he, M, F, Me, l, se]), [We, gt] = kr({
    controlled: oe,
    default: !1,
    name: d,
    state: "open"
  }), [Ot, lt] = T.useState(!0), Pt = !M && se != null && he === L(se), Fe = We && !q, _e = Fe ? y(
    H.filter((z) => !(C && (M ? se : [se]).some((A) => A !== null && P(z, A)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Pt && Ot ? "" : he,
      getOptionLabel: L
    }
  ) : [], Se = zb({
    filteredOptions: _e,
    value: se,
    inputValue: he
  });
  T.useEffect(() => {
    const z = se !== Se.value;
    Ee && !z || S && !z || it(null, se, "reset");
  }, [se, it, Ee, Se.value, S]);
  const bt = We && _e.length > 0 && !q, St = Mn((z) => {
    z === -1 ? V.current.focus() : Q.querySelector(`[data-tag-index="${z}"]`).focus();
  });
  T.useEffect(() => {
    M && B > se.length - 1 && (xe(-1), St(-1));
  }, [se, M, B, St]);
  function vn(z, A) {
    if (!J.current || z < 0 || z >= _e.length)
      return -1;
    let X = z;
    for (; ; ) {
      const ve = J.current.querySelector(`[data-option-index="${X}"]`), me = b ? !1 : !ve || ve.disabled || ve.getAttribute("aria-disabled") === "true";
      if (ve && ve.hasAttribute("tabindex") && !me)
        return X;
      if (A === "next" ? X = (X + 1) % _e.length : X = (X - 1 + _e.length) % _e.length, X === z)
        return -1;
    }
  }
  const $t = Mn(({
    event: z,
    index: A,
    reason: X = "auto"
  }) => {
    if (be.current = A, A === -1 ? V.current.removeAttribute("aria-activedescendant") : V.current.setAttribute("aria-activedescendant", `${j}-option-${A}`), D && D(z, A === -1 ? null : _e[A], X), !J.current)
      return;
    const ve = J.current.querySelector(`[role="option"].${n}-focused`);
    ve && (ve.classList.remove(`${n}-focused`), ve.classList.remove(`${n}-focusVisible`));
    let me = J.current;
    if (J.current.getAttribute("role") !== "listbox" && (me = J.current.parentElement.querySelector('[role="listbox"]')), !me)
      return;
    if (A === -1) {
      me.scrollTop = 0;
      return;
    }
    const we = J.current.querySelector(`[data-option-index="${A}"]`);
    if (we && (we.classList.add(`${n}-focused`), X === "keyboard" && we.classList.add(`${n}-focusVisible`), me.scrollHeight > me.clientHeight && X !== "mouse" && X !== "touch")) {
      const De = we, at = me.clientHeight + me.scrollTop, At = De.offsetTop + De.offsetHeight;
      At > at ? me.scrollTop = At - me.clientHeight : De.offsetTop - De.offsetHeight * (I ? 1.3 : 0) < me.scrollTop && (me.scrollTop = De.offsetTop - De.offsetHeight * (I ? 1.3 : 0));
    }
  }), ie = Mn(({
    event: z,
    diff: A,
    direction: X = "next",
    reason: ve = "auto"
  }) => {
    if (!Fe)
      return;
    const we = vn((() => {
      const De = _e.length - 1;
      if (A === "reset")
        return pe;
      if (A === "start")
        return 0;
      if (A === "end")
        return De;
      const at = be.current + A;
      return at < 0 ? at === -1 && k ? -1 : u && be.current !== -1 || Math.abs(A) > 1 ? 0 : De : at > De ? at === De + 1 && k ? -1 : u || Math.abs(A) > 1 ? De : 0 : at;
    })(), X);
    if ($t({
      index: we,
      reason: ve,
      event: z
    }), r && A !== "reset")
      if (we === -1)
        V.current.value = he;
      else {
        const De = L(_e[we]);
        V.current.value = De, De.toLowerCase().indexOf(he.toLowerCase()) === 0 && he.length > 0 && V.current.setSelectionRange(he.length, De.length);
      }
  }), Oe = () => {
    const z = (A, X) => {
      const ve = A ? L(A) : "", me = X ? L(X) : "";
      return ve === me;
    };
    if (be.current !== -1 && Se.filteredOptions && Se.filteredOptions.length !== _e.length && Se.inputValue === he && (M ? se.length === Se.value.length && Se.value.every((A, X) => L(se[X]) === L(A)) : z(Se.value, se))) {
      const A = Se.filteredOptions[be.current];
      if (A)
        return _e.findIndex((X) => L(X) === L(A));
    }
    return -1;
  }, Pe = T.useCallback(() => {
    if (!Fe)
      return;
    const z = Oe();
    if (z !== -1) {
      be.current = z;
      return;
    }
    const A = M ? se[0] : se;
    if (_e.length === 0 || A == null) {
      ie({
        diff: "reset"
      });
      return;
    }
    if (J.current) {
      if (A != null) {
        const X = _e[be.current];
        if (M && X && se.findIndex((me) => P(X, me)) !== -1)
          return;
        const ve = _e.findIndex((me) => P(me, A));
        ve === -1 ? ie({
          diff: "reset"
        }) : $t({
          index: ve
        });
        return;
      }
      if (be.current >= _e.length - 1) {
        $t({
          index: _e.length - 1
        });
        return;
      }
      $t({
        index: be.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    _e.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    M ? !1 : se,
    C,
    ie,
    $t,
    Fe,
    he,
    M
  ]), yt = Mn((z) => {
    Ka(J, z), z && Pe();
  });
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    (!V.current || V.current.nodeName !== "INPUT") && (V.current && V.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${d} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${V.current} while an HTMLInputElement was expected.`, `Instead, ${d} expects an input element.`, "", d === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [d]), T.useEffect(() => {
    Pe();
  }, [Pe]);
  const ct = (z) => {
    We || (gt(!0), lt(!0), Y && Y(z));
  }, _t = (z, A) => {
    We && (gt(!1), W && W(z, A));
  }, Ft = (z, A, X, ve) => {
    if (M) {
      if (se.length === A.length && se.every((me, we) => me === A[we]))
        return;
    } else if (se === A)
      return;
    N && N(z, A, X, ve), ke(A);
  }, xn = T.useRef(!1), Lt = (z, A, X = "selectOption", ve = "options") => {
    let me = X, we = A;
    if (M) {
      if (we = Array.isArray(se) ? se.slice() : [], process.env.NODE_ENV !== "production") {
        const at = we.filter((At) => P(A, At));
        at.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${d} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${at.length} matches.`].join(`
`));
      }
      const De = we.findIndex((at) => P(A, at));
      De === -1 ? we.push(A) : ve !== "freeSolo" && (we.splice(De, 1), me = "removeOption");
    }
    it(z, we, me), Ft(z, we, me, {
      option: A
    }), !h && (!z || !z.ctrlKey && !z.metaKey) && _t(z, me), (s === !0 || s === "touch" && xn.current || s === "mouse" && !xn.current) && V.current.blur();
  };
  function Yt(z, A) {
    if (z === -1)
      return -1;
    let X = z;
    for (; ; ) {
      if (A === "next" && X === se.length || A === "previous" && X === -1)
        return -1;
      const ve = Q.querySelector(`[data-tag-index="${X}"]`);
      if (!ve || !ve.hasAttribute("tabindex") || ve.disabled || ve.getAttribute("aria-disabled") === "true")
        X += A === "next" ? 1 : -1;
      else
        return X;
    }
  }
  const qt = (z, A) => {
    if (!M)
      return;
    he === "" && _t(z, "toggleInput");
    let X = B;
    B === -1 ? he === "" && A === "previous" && (X = se.length - 1) : (X += A === "next" ? 1 : -1, X < 0 && (X = 0), X === se.length && (X = -1)), X = Yt(X, A), xe(X), St(X);
  }, Gt = (z) => {
    Z.current = !0, Me(""), F && F(z, "", "clear"), Ft(z, M ? [] : null, "clear");
  }, Kt = (z) => (A) => {
    if (z.onKeyDown && z.onKeyDown(A), !A.defaultMuiPrevented && (B !== -1 && !["ArrowLeft", "ArrowRight"].includes(A.key) && (xe(-1), St(-1)), A.which !== 229))
      switch (A.key) {
        case "Home":
          Fe && O && (A.preventDefault(), ie({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: A
          }));
          break;
        case "End":
          Fe && O && (A.preventDefault(), ie({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: A
          }));
          break;
        case "PageUp":
          A.preventDefault(), ie({
            diff: -gc,
            direction: "previous",
            reason: "keyboard",
            event: A
          }), ct(A);
          break;
        case "PageDown":
          A.preventDefault(), ie({
            diff: gc,
            direction: "next",
            reason: "keyboard",
            event: A
          }), ct(A);
          break;
        case "ArrowDown":
          A.preventDefault(), ie({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: A
          }), ct(A);
          break;
        case "ArrowUp":
          A.preventDefault(), ie({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: A
          }), ct(A);
          break;
        case "ArrowLeft":
          qt(A, "previous");
          break;
        case "ArrowRight":
          qt(A, "next");
          break;
        case "Enter":
          if (be.current !== -1 && Fe) {
            const X = _e[be.current], ve = v ? v(X) : !1;
            if (A.preventDefault(), ve)
              return;
            Lt(A, X, "selectOption"), r && V.current.setSelectionRange(V.current.value.length, V.current.value.length);
          } else S && he !== "" && Pt === !1 && (M && A.preventDefault(), Lt(A, he, "createOption", "freeSolo"));
          break;
        case "Escape":
          Fe ? (A.preventDefault(), A.stopPropagation(), _t(A, "escape")) : c && (he !== "" || M && se.length > 0) && (A.preventDefault(), A.stopPropagation(), Gt(A));
          break;
        case "Backspace":
          if (M && !q && he === "" && se.length > 0) {
            const X = B === -1 ? se.length - 1 : B, ve = se.slice();
            ve.splice(X, 1), Ft(A, ve, "removeOption", {
              option: se[X]
            });
          }
          break;
        case "Delete":
          if (M && !q && he === "" && se.length > 0 && B !== -1) {
            const X = B, ve = se.slice();
            ve.splice(X, 1), Ft(A, ve, "removeOption", {
              option: se[X]
            });
          }
          break;
      }
  }, zn = (z) => {
    de(!0), G && !Z.current && ct(z);
  }, ut = (z) => {
    if (t(J)) {
      V.current.focus();
      return;
    }
    de(!1), _.current = !0, Z.current = !1, a && be.current !== -1 && Fe ? Lt(z, _e[be.current], "blur") : a && S && he !== "" ? Lt(z, he, "blur", "freeSolo") : l && it(z, se, "blur"), _t(z, "blur");
  }, Xt = (z) => {
    const A = z.target.value;
    he !== A && (Me(A), lt(!1), F && F(z, A, "input")), A === "" ? !p && !M && Ft(z, null, "clear") : ct(z);
  }, Mt = (z) => {
    const A = Number(z.currentTarget.getAttribute("data-option-index"));
    be.current !== A && $t({
      event: z,
      index: A,
      reason: "mouse"
    });
  }, fe = (z) => {
    $t({
      event: z,
      index: Number(z.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), xn.current = !0;
  }, ln = (z) => {
    const A = Number(z.currentTarget.getAttribute("data-option-index"));
    Lt(z, _e[A], "selectOption"), xn.current = !1;
  }, Wn = (z) => (A) => {
    const X = se.slice();
    X.splice(z, 1), Ft(A, X, "removeOption", {
      option: se[z]
    });
  }, Kn = (z) => {
    We ? _t(z, "toggleInput") : ct(z);
  }, R = (z) => {
    z.currentTarget.contains(z.target) && z.target.getAttribute("id") !== j && z.preventDefault();
  }, K = (z) => {
    z.currentTarget.contains(z.target) && (V.current.focus(), ae && _.current && V.current.selectionEnd - V.current.selectionStart === 0 && V.current.select(), _.current = !1);
  }, te = (z) => {
    !g && (he === "" || !We) && Kn(z);
  };
  let ye = S && he.length > 0;
  ye = ye || (M ? se.length > 0 : se !== null);
  let $e = _e;
  if (I) {
    const z = /* @__PURE__ */ new Map();
    let A = !1;
    $e = _e.reduce((X, ve, me) => {
      const we = I(ve);
      return X.length > 0 && X[X.length - 1].group === we ? X[X.length - 1].options.push(ve) : (process.env.NODE_ENV !== "production" && (z.get(we) && !A && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${d} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), A = !0), z.set(we, !0)), X.push({
        key: me,
        index: me,
        group: we,
        options: [ve]
      })), X;
    }, []);
  }
  return g && Ee && ut(), {
    getRootProps: (z = {}) => ({
      "aria-owns": bt ? `${j}-listbox` : null,
      ...z,
      onKeyDown: Kt(z),
      onMouseDown: R,
      onClick: K
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
      "aria-activedescendant": Fe ? "" : null,
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
      disabled: g
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
      ...!q && {
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
      option: A
    }) => {
      const X = (M ? se : [se]).some((me) => me != null && P(A, me)), ve = v ? v(A) : !1;
      return {
        key: (x == null ? void 0 : x(A)) ?? L(A),
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
    expanded: Fe && Q,
    popupOpen: Fe,
    focused: Ee || B !== -1,
    anchorEl: Q,
    setAnchorEl: le,
    focusedTag: B,
    groupedOptions: $e
  };
}
var Vt = "top", gn = "bottom", bn = "right", Ht = "left", Ls = "auto", _o = [Vt, gn, bn, Ht], jr = "start", To = "end", F0 = "clippingParents", Bd = "viewport", eo = "popper", L0 = "reference", yc = /* @__PURE__ */ _o.reduce(function(e, t) {
  return e.concat([t + "-" + jr, t + "-" + To]);
}, []), zd = /* @__PURE__ */ [].concat(_o, [Ls]).reduce(function(e, t) {
  return e.concat([t, t + "-" + jr, t + "-" + To]);
}, []), B0 = "beforeRead", z0 = "read", W0 = "afterRead", V0 = "beforeMain", H0 = "main", U0 = "afterMain", Y0 = "beforeWrite", q0 = "write", G0 = "afterWrite", K0 = [B0, z0, W0, V0, H0, U0, Y0, q0, G0];
function Fn(e) {
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
function mr(e) {
  var t = on(e).Element;
  return e instanceof t || e instanceof Element;
}
function hn(e) {
  var t = on(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Bs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = on(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function X0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !hn(a) || !Fn(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Z0(e) {
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
      !hn(i) || !Fn(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Q0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: X0,
  effect: Z0,
  requires: ["computeStyles"]
};
function Dn(e) {
  return e.split("-")[0];
}
var fr = Math.max, wi = Math.min, _r = Math.round;
function is() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Wd() {
  return !/^((?!chrome|android).)*safari/i.test(is());
}
function Fr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && hn(e) && (i = e.offsetWidth > 0 && _r(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && _r(r.height) / e.offsetHeight || 1);
  var s = mr(e) ? on(e) : window, l = s.visualViewport, c = !Wd() && n, d = (r.left + (c && l ? l.offsetLeft : 0)) / i, f = (r.top + (c && l ? l.offsetTop : 0)) / a, p = r.width / i, h = r.height / a;
  return {
    width: p,
    height: h,
    top: f,
    right: d + p,
    bottom: f + h,
    left: d,
    x: d,
    y: f
  };
}
function zs(e) {
  var t = Fr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Vd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Bs(n)) {
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
function J0(e) {
  return ["table", "td", "th"].indexOf(Fn(e)) >= 0;
}
function ir(e) {
  return ((mr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ia(e) {
  return Fn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Bs(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ir(e)
  );
}
function vc(e) {
  return !hn(e) || // https://github.com/popperjs/popper-core/issues/837
  Gn(e).position === "fixed" ? null : e.offsetParent;
}
function ex(e) {
  var t = /firefox/i.test(is()), n = /Trident/i.test(is());
  if (n && hn(e)) {
    var r = Gn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = ia(e);
  for (Bs(i) && (i = i.host); hn(i) && ["html", "body"].indexOf(Fn(i)) < 0; ) {
    var a = Gn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Fo(e) {
  for (var t = on(e), n = vc(e); n && J0(n) && Gn(n).position === "static"; )
    n = vc(n);
  return n && (Fn(n) === "html" || Fn(n) === "body" && Gn(n).position === "static") ? t : n || ex(e) || t;
}
function Ws(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function po(e, t, n) {
  return fr(e, wi(t, n));
}
function tx(e, t, n) {
  var r = po(e, t, n);
  return r > n ? n : r;
}
function Hd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ud(e) {
  return Object.assign({}, Hd(), e);
}
function Yd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var nx = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ud(typeof t != "number" ? t : Yd(t, _o));
};
function rx(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Dn(n.placement), c = Ws(l), d = [Ht, bn].indexOf(l) >= 0, f = d ? "height" : "width";
  if (!(!a || !s)) {
    var p = nx(i.padding, n), h = zs(a), g = c === "y" ? Vt : Ht, b = c === "y" ? gn : bn, u = n.rects.reference[f] + n.rects.reference[c] - s[c] - n.rects.popper[f], y = s[c] - n.rects.reference[c], C = Fo(a), S = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, v = u / 2 - y / 2, x = p[g], w = S - h[f] - p[b], I = S / 2 - h[f] / 2 + v, O = po(x, I, w), $ = c;
    n.modifiersData[r] = (t = {}, t[$] = O, t.centerOffset = O - I, t);
  }
}
function ox(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Vd(t.elements.popper, i) && (t.elements.arrow = i));
}
const ix = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: rx,
  effect: ox,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Lr(e) {
  return e.split("-")[1];
}
var ax = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function sx(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: _r(n * i) / i || 0,
    y: _r(r * i) / i || 0
  };
}
function xc(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, d = e.adaptive, f = e.roundOffsets, p = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, b = s.y, u = b === void 0 ? 0 : b, y = typeof f == "function" ? f({
    x: g,
    y: u
  }) : {
    x: g,
    y: u
  };
  g = y.x, u = y.y;
  var C = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), v = Ht, x = Vt, w = window;
  if (d) {
    var I = Fo(n), O = "clientHeight", $ = "clientWidth";
    if (I === on(n) && (I = ir(n), Gn(I).position !== "static" && l === "absolute" && (O = "scrollHeight", $ = "scrollWidth")), I = I, i === Vt || (i === Ht || i === bn) && a === To) {
      x = gn;
      var k = p && I === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[O]
      );
      u -= k - r.height, u *= c ? 1 : -1;
    }
    if (i === Ht || (i === Vt || i === gn) && a === To) {
      v = bn;
      var m = p && I === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[$]
      );
      g -= m - r.width, g *= c ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, d && ax), M = f === !0 ? sx({
    x: g,
    y: u
  }, on(n)) : {
    x: g,
    y: u
  };
  if (g = M.x, u = M.y, c) {
    var N;
    return Object.assign({}, P, (N = {}, N[x] = S ? "0" : "", N[v] = C ? "0" : "", N.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + u + "px)" : "translate3d(" + g + "px, " + u + "px, 0)", N));
  }
  return Object.assign({}, P, (t = {}, t[x] = S ? u + "px" : "", t[v] = C ? g + "px" : "", t.transform = "", t));
}
function lx(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, d = {
    placement: Dn(t.placement),
    variation: Lr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, xc(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, xc(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const cx = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: lx,
  data: {}
};
var Xo = {
  passive: !0
};
function ux(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = on(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(f) {
    f.addEventListener("scroll", n.update, Xo);
  }), l && c.addEventListener("resize", n.update, Xo), function() {
    a && d.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Xo);
    }), l && c.removeEventListener("resize", n.update, Xo);
  };
}
const dx = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ux,
  data: {}
};
var fx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ai(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return fx[t];
  });
}
var px = {
  start: "end",
  end: "start"
};
function wc(e) {
  return e.replace(/start|end/g, function(t) {
    return px[t];
  });
}
function Vs(e) {
  var t = on(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Hs(e) {
  return Fr(ir(e)).left + Vs(e).scrollLeft;
}
function mx(e, t) {
  var n = on(e), r = ir(e), i = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var d = Wd();
    (d || !d && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + Hs(e),
    y: c
  };
}
function hx(e) {
  var t, n = ir(e), r = Vs(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = fr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = fr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Hs(e), c = -r.scrollTop;
  return Gn(i || n).direction === "rtl" && (l += fr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function Us(e) {
  var t = Gn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function qd(e) {
  return ["html", "body", "#document"].indexOf(Fn(e)) >= 0 ? e.ownerDocument.body : hn(e) && Us(e) ? e : qd(ia(e));
}
function mo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = qd(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = on(r), s = i ? [a].concat(a.visualViewport || [], Us(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(mo(ia(s)))
  );
}
function as(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function gx(e, t) {
  var n = Fr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Cc(e, t, n) {
  return t === Bd ? as(mx(e, n)) : mr(t) ? gx(t, n) : as(hx(ir(e)));
}
function bx(e) {
  var t = mo(ia(e)), n = ["absolute", "fixed"].indexOf(Gn(e).position) >= 0, r = n && hn(e) ? Fo(e) : e;
  return mr(r) ? t.filter(function(i) {
    return mr(i) && Vd(i, r) && Fn(i) !== "body";
  }) : [];
}
function yx(e, t, n, r) {
  var i = t === "clippingParents" ? bx(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, d) {
    var f = Cc(e, d, r);
    return c.top = fr(f.top, c.top), c.right = wi(f.right, c.right), c.bottom = wi(f.bottom, c.bottom), c.left = fr(f.left, c.left), c;
  }, Cc(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Gd(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Dn(r) : null, a = r ? Lr(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
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
  var d = i ? Ws(i) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (a) {
      case jr:
        c[d] = c[d] - (t[f] / 2 - n[f] / 2);
        break;
      case To:
        c[d] = c[d] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function So(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? F0 : l, d = n.rootBoundary, f = d === void 0 ? Bd : d, p = n.elementContext, h = p === void 0 ? eo : p, g = n.altBoundary, b = g === void 0 ? !1 : g, u = n.padding, y = u === void 0 ? 0 : u, C = Ud(typeof y != "number" ? y : Yd(y, _o)), S = h === eo ? L0 : eo, v = e.rects.popper, x = e.elements[b ? S : h], w = yx(mr(x) ? x : x.contextElement || ir(e.elements.popper), c, f, s), I = Fr(e.elements.reference), O = Gd({
    reference: I,
    element: v,
    placement: i
  }), $ = as(Object.assign({}, v, O)), k = h === eo ? $ : I, m = {
    top: w.top - k.top + C.top,
    bottom: k.bottom - w.bottom + C.bottom,
    left: w.left - k.left + C.left,
    right: k.right - w.right + C.right
  }, P = e.modifiersData.offset;
  if (h === eo && P) {
    var M = P[i];
    Object.keys(m).forEach(function(N) {
      var W = [bn, gn].indexOf(N) >= 0 ? 1 : -1, D = [Vt, gn].indexOf(N) >= 0 ? "y" : "x";
      m[N] += M[D] * W;
    });
  }
  return m;
}
function vx(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, d = c === void 0 ? zd : c, f = Lr(r), p = f ? l ? yc : yc.filter(function(b) {
    return Lr(b) === f;
  }) : _o, h = p.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  h.length === 0 && (h = p);
  var g = h.reduce(function(b, u) {
    return b[u] = So(e, {
      placement: u,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Dn(u)], b;
  }, {});
  return Object.keys(g).sort(function(b, u) {
    return g[b] - g[u];
  });
}
function xx(e) {
  if (Dn(e) === Ls)
    return [];
  var t = ai(e);
  return [wc(e), t, wc(t)];
}
function wx(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, d = n.padding, f = n.boundary, p = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, b = g === void 0 ? !0 : g, u = n.allowedAutoPlacements, y = t.options.placement, C = Dn(y), S = C === y, v = c || (S || !b ? [ai(y)] : xx(y)), x = [y].concat(v).reduce(function(j, L) {
      return j.concat(Dn(L) === Ls ? vx(t, {
        placement: L,
        boundary: f,
        rootBoundary: p,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: u
      }) : L);
    }, []), w = t.rects.reference, I = t.rects.popper, O = /* @__PURE__ */ new Map(), $ = !0, k = x[0], m = 0; m < x.length; m++) {
      var P = x[m], M = Dn(P), N = Lr(P) === jr, W = [Vt, gn].indexOf(M) >= 0, D = W ? "width" : "height", F = So(t, {
        placement: P,
        boundary: f,
        rootBoundary: p,
        altBoundary: h,
        padding: d
      }), Y = W ? N ? bn : Ht : N ? gn : Vt;
      w[D] > I[D] && (Y = ai(Y));
      var oe = ai(Y), G = [];
      if (a && G.push(F[M] <= 0), l && G.push(F[Y] <= 0, F[oe] <= 0), G.every(function(j) {
        return j;
      })) {
        k = P, $ = !1;
        break;
      }
      O.set(P, G);
    }
    if ($)
      for (var H = b ? 3 : 1, q = function(L) {
        var Z = x.find(function(_) {
          var V = O.get(_);
          if (V)
            return V.slice(0, L).every(function(J) {
              return J;
            });
        });
        if (Z)
          return k = Z, "break";
      }, ae = H; ae > 0; ae--) {
        var re = q(ae);
        if (re === "break") break;
      }
    t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const Cx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wx,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Tc(e, t, n) {
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
function Sc(e) {
  return [Vt, bn, gn, Ht].some(function(t) {
    return e[t] >= 0;
  });
}
function Tx(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = So(t, {
    elementContext: "reference"
  }), l = So(t, {
    altBoundary: !0
  }), c = Tc(s, r), d = Tc(l, i, a), f = Sc(c), p = Sc(d);
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
const Sx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Tx
};
function Ex(e, t, n) {
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
function Ox(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = zd.reduce(function(f, p) {
    return f[p] = Ex(p, t.rects, a), f;
  }, {}), l = s[t.placement], c = l.x, d = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = s;
}
const Rx = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ox
};
function Px(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Gd({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Ix = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Px,
  data: {}
};
function kx(e) {
  return e === "x" ? "y" : "x";
}
function $x(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.padding, h = n.tether, g = h === void 0 ? !0 : h, b = n.tetherOffset, u = b === void 0 ? 0 : b, y = So(t, {
    boundary: c,
    rootBoundary: d,
    padding: p,
    altBoundary: f
  }), C = Dn(t.placement), S = Lr(t.placement), v = !S, x = Ws(C), w = kx(x), I = t.modifiersData.popperOffsets, O = t.rects.reference, $ = t.rects.popper, k = typeof u == "function" ? u(Object.assign({}, t.rects, {
    placement: t.placement
  })) : u, m = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (I) {
    if (a) {
      var N, W = x === "y" ? Vt : Ht, D = x === "y" ? gn : bn, F = x === "y" ? "height" : "width", Y = I[x], oe = Y + y[W], G = Y - y[D], H = g ? -$[F] / 2 : 0, q = S === jr ? O[F] : $[F], ae = S === jr ? -$[F] : -O[F], re = t.elements.arrow, j = g && re ? zs(re) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Hd(), Z = L[W], _ = L[D], V = po(0, O[F], j[F]), J = v ? O[F] / 2 - H - V - Z - m.mainAxis : q - V - Z - m.mainAxis, Q = v ? -O[F] / 2 + H + V + _ + m.mainAxis : ae + V + _ + m.mainAxis, le = t.elements.arrow && Fo(t.elements.arrow), B = le ? x === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, xe = (N = P == null ? void 0 : P[x]) != null ? N : 0, pe = Y + J - xe - B, be = Y + Q - xe, Re = po(g ? wi(oe, pe) : oe, Y, g ? fr(G, be) : G);
      I[x] = Re, M[x] = Re - Y;
    }
    if (l) {
      var se, ke = x === "x" ? Vt : Ht, he = x === "x" ? gn : bn, Me = I[w], Ee = w === "y" ? "height" : "width", de = Me + y[ke], it = Me - y[he], We = [Vt, Ht].indexOf(C) !== -1, gt = (se = P == null ? void 0 : P[w]) != null ? se : 0, Ot = We ? de : Me - O[Ee] - $[Ee] - gt + m.altAxis, lt = We ? Me + O[Ee] + $[Ee] - gt - m.altAxis : it, Pt = g && We ? tx(Ot, Me, lt) : po(g ? Ot : de, Me, g ? lt : it);
      I[w] = Pt, M[w] = Pt - Me;
    }
    t.modifiersData[r] = M;
  }
}
const Mx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $x,
  requiresIfExists: ["offset"]
};
function Nx(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Dx(e) {
  return e === on(e) || !hn(e) ? Vs(e) : Nx(e);
}
function Ax(e) {
  var t = e.getBoundingClientRect(), n = _r(t.width) / e.offsetWidth || 1, r = _r(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function jx(e, t, n) {
  n === void 0 && (n = !1);
  var r = hn(t), i = hn(t) && Ax(t), a = ir(t), s = Fr(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Fn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Us(a)) && (l = Dx(t)), hn(t) ? (c = Fr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Hs(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function _x(e) {
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
function Fx(e) {
  var t = _x(e);
  return K0.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Lx(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Bx(e) {
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
var Ec = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Oc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function zx(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Ec : i;
  return function(l, c, d) {
    d === void 0 && (d = a);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ec, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], h = !1, g = {
      state: f,
      setOptions: function(C) {
        var S = typeof C == "function" ? C(f.options) : C;
        u(), f.options = Object.assign({}, a, f.options, S), f.scrollParents = {
          reference: mr(l) ? mo(l) : l.contextElement ? mo(l.contextElement) : [],
          popper: mo(c)
        };
        var v = Fx(Bx([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = v.filter(function(x) {
          return x.enabled;
        }), b(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var C = f.elements, S = C.reference, v = C.popper;
          if (Oc(S, v)) {
            f.rects = {
              reference: jx(S, Fo(v), f.options.strategy === "fixed"),
              popper: zs(v)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(m) {
              return f.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var x = 0; x < f.orderedModifiers.length; x++) {
              if (f.reset === !0) {
                f.reset = !1, x = -1;
                continue;
              }
              var w = f.orderedModifiers[x], I = w.fn, O = w.options, $ = O === void 0 ? {} : O, k = w.name;
              typeof I == "function" && (f = I({
                state: f,
                options: $,
                name: k,
                instance: g
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Lx(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(f);
        });
      }),
      destroy: function() {
        u(), h = !0;
      }
    };
    if (!Oc(l, c))
      return g;
    g.setOptions(d).then(function(y) {
      !h && d.onFirstUpdate && d.onFirstUpdate(y);
    });
    function b() {
      f.orderedModifiers.forEach(function(y) {
        var C = y.name, S = y.options, v = S === void 0 ? {} : S, x = y.effect;
        if (typeof x == "function") {
          var w = x({
            state: f,
            name: C,
            instance: g,
            options: v
          }), I = function() {
          };
          p.push(w || I);
        }
      });
    }
    function u() {
      p.forEach(function(y) {
        return y();
      }), p = [];
    }
    return g;
  };
}
var Wx = [dx, Ix, cx, Q0, Rx, Cx, Mx, ix, Sx], Vx = /* @__PURE__ */ zx({
  defaultModifiers: Wx
});
function Hx(e) {
  return ze("MuiPopper", e);
}
je("MuiPopper", ["root"]);
function Ux(e, t) {
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
function Ci(e) {
  return typeof e == "function" ? e() : e;
}
function aa(e) {
  return e.nodeType !== void 0;
}
function Yx(e) {
  return !aa(e);
}
const qx = (e) => {
  const {
    classes: t
  } = e;
  return Ve({
    root: ["root"]
  }, Hx, t);
}, Gx = {}, Kx = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    slotProps: h = {},
    slots: g = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: u,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...y
  } = t, C = T.useRef(null), S = Tt(C, n), v = T.useRef(null), x = Tt(v, p), w = T.useRef(x);
  _n(() => {
    w.current = x;
  }, [x]), T.useImperativeHandle(p, () => v.current, []);
  const I = Ux(d, a), [O, $] = T.useState(I), [k, m] = T.useState(Ci(r));
  T.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), T.useEffect(() => {
    r && m(Ci(r));
  }, [r]), _n(() => {
    if (!k || !c)
      return;
    const D = (oe) => {
      $(oe.placement);
    };
    if (process.env.NODE_ENV !== "production" && k && aa(k) && k.nodeType === 1) {
      const oe = k.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && oe.top === 0 && oe.left === 0 && oe.right === 0 && oe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let F = [{
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
        D(oe);
      }
    }];
    l != null && (F = F.concat(l)), f && f.modifiers != null && (F = F.concat(f.modifiers));
    const Y = Vx(k, C.current, {
      placement: I,
      ...f,
      modifiers: F
    });
    return w.current(Y), () => {
      Y.destroy(), w.current(null);
    };
  }, [k, s, l, c, f, I]);
  const P = {
    placement: O
  };
  b !== null && (P.TransitionProps = b);
  const M = qx(t), N = g.root ?? "div", W = Za({
    elementType: N,
    externalSlotProps: h.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ E.jsx(N, {
    ...W,
    children: typeof i == "function" ? i(P) : i
  });
}), Kd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    popperOptions: h = Gx,
    popperRef: g,
    style: b,
    transition: u = !1,
    slotProps: y = {},
    slots: C = {},
    ...S
  } = t, [v, x] = T.useState(!0), w = () => {
    x(!1);
  }, I = () => {
    x(!0);
  };
  if (!c && !f && (!u || v))
    return null;
  let O;
  if (a)
    O = a;
  else if (r) {
    const m = Ci(r);
    O = m && aa(m) ? rn(m).body : rn(null).body;
  }
  const $ = !f && c && (!u || v) ? "none" : void 0, k = u ? {
    in: f,
    onEnter: w,
    onExited: I
  } : void 0;
  return /* @__PURE__ */ E.jsx(Co, {
    disablePortal: l,
    container: O,
    children: /* @__PURE__ */ E.jsx(Kx, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: d,
      ref: n,
      open: u ? !v : f,
      placement: p,
      popperOptions: h,
      popperRef: g,
      slotProps: y,
      slots: C,
      ...S,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $,
        ...b
      },
      TransitionProps: k,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Kd.propTypes = {
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
      const t = Ci(e.anchorEl);
      if (t && aa(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Yx(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
const Xx = ue(Kd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ys = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ps(), i = Ge({
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
    modifiers: h,
    open: g,
    placement: b,
    popperOptions: u,
    popperRef: y,
    transition: C,
    slots: S,
    slotProps: v,
    ...x
  } = i, w = (S == null ? void 0 : S.root) ?? (l == null ? void 0 : l.Root), I = {
    anchorEl: a,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: h,
    open: g,
    placement: b,
    popperOptions: u,
    popperRef: y,
    transition: C,
    ...x
  };
  return /* @__PURE__ */ E.jsx(Xx, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: w
    },
    slotProps: v ?? c,
    ...I,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Ys.propTypes = {
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
function Zx(e) {
  return ze("MuiListSubheader", e);
}
je("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Qx = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${ce(n)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return Ve(s, Zx, t);
}, Jx = ue("li", {
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
}))), Ti = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, h = Qx(p);
  return /* @__PURE__ */ E.jsx(Jx, {
    as: s,
    className: ge(h.root, i),
    ref: n,
    ownerState: p,
    ...f
  });
});
Ti && (Ti.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
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
class Si {
  constructor() {
    qr(this, "mountEffect", () => {
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
    return new Si();
  }
  static use() {
    const t = Zu(Si.create).current, [n, r] = T.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, T.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = tw(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function ew() {
  return Si.use();
}
function tw() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Xd(e) {
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
  } = e, [f, p] = T.useState(!1), h = ge(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, b = ge(n.child, f && n.childLeaving, r && n.childPulsate);
  return !l && !f && p(!0), T.useEffect(() => {
    if (!l && c != null) {
      const u = setTimeout(c, d);
      return () => {
        clearTimeout(u);
      };
    }
  }, [c, l, d]), /* @__PURE__ */ E.jsx("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ E.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Xd.propTypes = {
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
const fn = je("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ss = 550, nw = 80, rw = ko`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ow = ko`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, iw = ko`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, aw = ue("span", {
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
}), sw = ue(Xd, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${fn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${rw};
    animation-duration: ${ss}ms;
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
    animation-name: ${ow};
    animation-duration: ${ss}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${fn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${iw};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Zd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = r, [c, d] = T.useState([]), f = T.useRef(0), p = T.useRef(null);
  T.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const h = T.useRef(!1), g = Qu(), b = T.useRef(null), u = T.useRef(null), y = T.useCallback((x) => {
    const {
      pulsate: w,
      rippleX: I,
      rippleY: O,
      rippleSize: $,
      cb: k
    } = x;
    d((m) => [...m, /* @__PURE__ */ E.jsx(sw, {
      classes: {
        ripple: ge(a.ripple, fn.ripple),
        rippleVisible: ge(a.rippleVisible, fn.rippleVisible),
        ripplePulsate: ge(a.ripplePulsate, fn.ripplePulsate),
        child: ge(a.child, fn.child),
        childLeaving: ge(a.childLeaving, fn.childLeaving),
        childPulsate: ge(a.childPulsate, fn.childPulsate)
      },
      timeout: ss,
      pulsate: w,
      rippleX: I,
      rippleY: O,
      rippleSize: $
    }, f.current)]), f.current += 1, p.current = k;
  }, [a]), C = T.useCallback((x = {}, w = {}, I = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: $ = i || w.pulsate,
      fakeElement: k = !1
      // For test purposes
    } = w;
    if ((x == null ? void 0 : x.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (h.current = !0);
    const m = k ? null : u.current, P = m ? m.getBoundingClientRect() : {
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
        clientX: D,
        clientY: F
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      M = Math.round(D - P.left), N = Math.round(F - P.top);
    }
    if ($)
      W = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const D = Math.max(Math.abs((m ? m.clientWidth : 0) - M), M) * 2 + 2, F = Math.max(Math.abs((m ? m.clientHeight : 0) - N), N) * 2 + 2;
      W = Math.sqrt(D ** 2 + F ** 2);
    }
    x != null && x.touches ? b.current === null && (b.current = () => {
      y({
        pulsate: O,
        rippleX: M,
        rippleY: N,
        rippleSize: W,
        cb: I
      });
    }, g.start(nw, () => {
      b.current && (b.current(), b.current = null);
    })) : y({
      pulsate: O,
      rippleX: M,
      rippleY: N,
      rippleSize: W,
      cb: I
    });
  }, [i, y, g]), S = T.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), v = T.useCallback((x, w) => {
    if (g.clear(), (x == null ? void 0 : x.type) === "touchend" && b.current) {
      b.current(), b.current = null, g.start(0, () => {
        v(x, w);
      });
      return;
    }
    b.current = null, d((I) => I.length > 0 ? I.slice(1) : I), p.current = w;
  }, [g]);
  return T.useImperativeHandle(n, () => ({
    pulsate: S,
    start: C,
    stop: v
  }), [S, C, v]), /* @__PURE__ */ E.jsx(aw, {
    className: ge(fn.root, a.root, s),
    ref: u,
    ...l,
    children: /* @__PURE__ */ E.jsx(Ds, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Zd.propTypes = {
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
function lw(e) {
  return ze("MuiButtonBase", e);
}
const cw = je("MuiButtonBase", ["root", "disabled", "focusVisible"]), uw = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = Ve({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, lw, i);
  return n && r && (s.root += ` ${r}`), s;
}, dw = ue("button", {
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
  [`&.${cw.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Br = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    focusRipple: h = !1,
    focusVisibleClassName: g,
    LinkComponent: b = "a",
    onBlur: u,
    onClick: y,
    onContextMenu: C,
    onDragLeave: S,
    onFocus: v,
    onFocusVisible: x,
    onKeyDown: w,
    onKeyUp: I,
    onMouseDown: O,
    onMouseLeave: $,
    onMouseUp: k,
    onTouchEnd: m,
    onTouchMove: P,
    onTouchStart: M,
    tabIndex: N = 0,
    TouchRippleProps: W,
    touchRippleRef: D,
    type: F,
    ...Y
  } = r, oe = T.useRef(null), G = ew(), H = Tt(G.ref, D), [q, ae] = T.useState(!1);
  d && q && ae(!1), T.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ae(!0), oe.current.focus();
    }
  }), []);
  const re = G.shouldMount && !f && !d;
  T.useEffect(() => {
    q && h && !f && G.pulsate();
  }, [f, h, q, G]);
  const j = Hn(G, "start", O, p), L = Hn(G, "stop", C, p), Z = Hn(G, "stop", S, p), _ = Hn(G, "stop", k, p), V = Hn(G, "stop", (de) => {
    q && de.preventDefault(), $ && $(de);
  }, p), J = Hn(G, "start", M, p), Q = Hn(G, "stop", m, p), le = Hn(G, "stop", P, p), B = Hn(G, "stop", (de) => {
    zl(de.target) || ae(!1), u && u(de);
  }, !1), xe = Mn((de) => {
    oe.current || (oe.current = de.currentTarget), zl(de.target) && (ae(!0), x && x(de)), v && v(de);
  }), pe = () => {
    const de = oe.current;
    return c && c !== "button" && !(de.tagName === "A" && de.href);
  }, be = Mn((de) => {
    h && !de.repeat && q && de.key === " " && G.stop(de, () => {
      G.start(de);
    }), de.target === de.currentTarget && pe() && de.key === " " && de.preventDefault(), w && w(de), de.target === de.currentTarget && pe() && de.key === "Enter" && !d && (de.preventDefault(), y && y(de));
  }), Re = Mn((de) => {
    h && de.key === " " && q && !de.defaultPrevented && G.stop(de, () => {
      G.pulsate(de);
    }), I && I(de), y && de.target === de.currentTarget && pe() && de.key === " " && !de.defaultPrevented && y(de);
  });
  let se = c;
  se === "button" && (Y.href || Y.to) && (se = b);
  const ke = {};
  se === "button" ? (ke.type = F === void 0 ? "button" : F, ke.disabled = d) : (!Y.href && !Y.to && (ke.role = "button"), d && (ke["aria-disabled"] = d));
  const he = Tt(n, oe), Me = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: d,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: N,
    focusVisible: q
  }, Ee = uw(Me);
  return /* @__PURE__ */ E.jsxs(dw, {
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
    onMouseUp: _,
    onDragLeave: Z,
    onTouchEnd: Q,
    onTouchMove: le,
    onTouchStart: J,
    ref: he,
    tabIndex: d ? -1 : N,
    type: F,
    ...ke,
    ...Y,
    children: [s, re ? /* @__PURE__ */ E.jsx(Zd, {
      ref: H,
      center: a,
      ...W
    }) : null]
  });
});
function Hn(e, t, n, r = !1) {
  return Mn((i) => (n && n(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Br.propTypes = {
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
  component: Os,
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
function fw(e) {
  return ze("MuiCircularProgress", e);
}
je("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Zn = 44, ls = ko`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, cs = ko`
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
`, pw = typeof ls != "string" ? vs`
        animation: ${ls} 1.4s linear infinite;
      ` : null, mw = typeof cs != "string" ? vs`
        animation: ${cs} 1.4s ease-in-out infinite;
      ` : null, hw = (e) => {
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
  return Ve(a, fw, t);
}, gw = ue("span", {
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
    style: pw || {
      animation: `${ls} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(tn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), bw = ue("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), yw = ue("circle", {
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
    style: mw || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${cs} 1.4s ease-in-out infinite`
    }
  }]
}))), Qd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    ...h
  } = r, g = {
    ...r,
    color: a,
    disableShrink: s,
    size: l,
    thickness: d,
    value: f,
    variant: p
  }, b = hw(g), u = {}, y = {}, C = {};
  if (p === "determinate") {
    const S = 2 * Math.PI * ((Zn - d) / 2);
    u.strokeDasharray = S.toFixed(3), C["aria-valuenow"] = Math.round(f), u.strokeDashoffset = `${((100 - f) / 100 * S).toFixed(3)}px`, y.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ E.jsx(gw, {
    className: ge(b.root, i),
    style: {
      width: l,
      height: l,
      ...y,
      ...c
    },
    ownerState: g,
    ref: n,
    role: "progressbar",
    ...C,
    ...h,
    children: /* @__PURE__ */ E.jsx(bw, {
      className: b.svg,
      ownerState: g,
      viewBox: `${Zn / 2} ${Zn / 2} ${Zn} ${Zn}`,
      children: /* @__PURE__ */ E.jsx(yw, {
        className: b.circle,
        style: u,
        ownerState: g,
        cx: Zn,
        cy: Zn,
        r: (Zn - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Qd.propTypes = {
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
function vw(e) {
  return ze("MuiIconButton", e);
}
const Rc = je("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), xw = (e) => {
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
  return Ve(l, vw, t);
}, ww = ue(Br, {
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
  [`&.${Rc.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Rc.loading}`]: {
    color: "transparent"
  }
}))), Cw = ue("span", {
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
})), dr = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    loading: h = null,
    loadingIndicator: g,
    ...b
  } = r, u = Ar(p), y = g ?? /* @__PURE__ */ E.jsx(Qd, {
    "aria-labelledby": u,
    color: "inherit",
    size: 16
  }), C = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: d,
    loading: h,
    loadingIndicator: y,
    size: f
  }, S = xw(C);
  return /* @__PURE__ */ E.jsxs(ww, {
    id: u,
    className: ge(S.root, s),
    centerRipple: !0,
    focusRipple: !d,
    disabled: c || h,
    ref: n,
    ...b,
    ownerState: C,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: S.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ E.jsx(Cw, {
        className: S.loadingIndicator,
        ownerState: C,
        children: h && y
      })
    }), a]
  });
});
process.env.NODE_ENV !== "production" && (dr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Tn(o.node, (e) => T.Children.toArray(e.children).some((n) => /* @__PURE__ */ T.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const Tw = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Sw(e) {
  return ze("MuiChip", e);
}
const Ne = je("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Ew = (e) => {
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
  return Ve(d, Sw, t);
}, Ow = ue("div", {
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
})), Rw = ue("span", {
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
function Pc(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Jd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    label: h,
    onClick: g,
    onDelete: b,
    onKeyDown: u,
    onKeyUp: y,
    size: C = "medium",
    variant: S = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: x = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...w
  } = r, I = T.useRef(null), O = Tt(I, n), $ = (G) => {
    G.stopPropagation(), b && b(G);
  }, k = (G) => {
    G.currentTarget === G.target && Pc(G) && G.preventDefault(), u && u(G);
  }, m = (G) => {
    G.currentTarget === G.target && b && Pc(G) && b(G), y && y(G);
  }, P = s !== !1 && g ? !0 : s, M = P || b ? Br : c || "div", N = {
    ...r,
    component: M,
    disabled: f,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ T.isValidElement(p) && p.props.color || l,
    onDelete: !!b,
    clickable: P,
    variant: S
  }, W = Ew(N), D = M === Br ? {
    component: c || "div",
    focusVisibleClassName: W.focusVisible,
    ...b && {
      disableRipple: !0
    }
  } : {};
  let F = null;
  b && (F = d && /* @__PURE__ */ T.isValidElement(d) ? /* @__PURE__ */ T.cloneElement(d, {
    className: ge(d.props.className, W.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ E.jsx(Tw, {
    className: ge(W.deleteIcon),
    onClick: $
  }));
  let Y = null;
  i && /* @__PURE__ */ T.isValidElement(i) && (Y = /* @__PURE__ */ T.cloneElement(i, {
    className: ge(W.avatar, i.props.className)
  }));
  let oe = null;
  return p && /* @__PURE__ */ T.isValidElement(p) && (oe = /* @__PURE__ */ T.cloneElement(p, {
    className: ge(W.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && Y && oe && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ E.jsxs(Ow, {
    as: M,
    className: ge(W.root, a),
    disabled: P && f ? !0 : void 0,
    onClick: g,
    onKeyDown: k,
    onKeyUp: m,
    ref: O,
    tabIndex: x && f ? -1 : v,
    ownerState: N,
    ...D,
    ...w,
    children: [Y || oe, /* @__PURE__ */ E.jsx(Rw, {
      className: ge(W.label),
      ownerState: N,
      children: h
    }), F]
  });
});
process.env.NODE_ENV !== "production" && (Jd.propTypes = {
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
  children: Fb,
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
const Pw = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Iw(e) {
  return ze("MuiAutocomplete", e);
}
const Ie = je("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var Ic, kc;
const kw = (e) => {
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
  return Ve(p, Iw, t);
}, $w = ue("div", {
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
      [`& .${Ie.tag}`]: t.tag
    }, {
      [`& .${Ie.tag}`]: t[`tagSize${ce(l)}`]
    }, {
      [`& .${Ie.inputRoot}`]: t.inputRoot
    }, {
      [`& .${Ie.input}`]: t.input
    }, {
      [`& .${Ie.input}`]: s && t.inputFocused
    }, t.root, r && t.fullWidth, a && t.hasPopupIcon, i && t.hasClearIcon];
  }
})({
  [`&.${Ie.focused} .${Ie.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${Ie.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${Ie.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${Ie.inputRoot}`]: {
    [`.${Ie.hasPopupIcon}&, .${Ie.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${Ie.hasPopupIcon}.${Ie.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${Ie.input}`]: {
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
    [`.${Ie.hasPopupIcon}&, .${Ie.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${Ie.hasPopupIcon}.${Ie.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Ie.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${Ie.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${dn.root}.${Qt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Ie.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Jt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Ie.hasPopupIcon}&, .${Ie.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${Ie.hasPopupIcon}.${Ie.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Jt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Ie.endAdornment}`]: {
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
    [`& .${Ie.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Jt.root}.${Qt.hiddenLabel}.${Qt.sizeSmall}`]: {
    [`& .${Ie.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${Ie.input}`]: {
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
      [`& .${Ie.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${Ie.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${Ie.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), Mw = ue("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), Nw = ue(dr, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Dw = ue(dr, {
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
}), Aw = ue(Ys, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ie.option}`]: t.option
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
}))), jw = ue(ra, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), _w = ue("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(Ae(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Fw = ue("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(Ae(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Lw = ue("ul", {
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
  [`& .${Ie.option}`]: {
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
    [`&.${Ie.focused}`]: {
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
    [`&.${Ie.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : rt(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Ie.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Ie.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), Bw = ue(Ti, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(Ae(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), zw = ue("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${Ie.option}`]: {
    paddingLeft: 24
  }
}), ef = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    clearIcon: f = Ic || (Ic = /* @__PURE__ */ E.jsx(Pw, {
      fontSize: "small"
    })),
    clearOnBlur: p = !r.freeSolo,
    clearOnEscape: h = !1,
    clearText: g = "Clear",
    closeText: b = "Close",
    componentsProps: u,
    defaultValue: y = r.multiple ? [] : null,
    disableClearable: C = !1,
    disableCloseOnSelect: S = !1,
    disabled: v = !1,
    disabledItemsFocusable: x = !1,
    disableListWrap: w = !1,
    disablePortal: I = !1,
    filterOptions: O,
    filterSelectedOptions: $ = !1,
    forcePopupIcon: k = "auto",
    freeSolo: m = !1,
    fullWidth: P = !1,
    getLimitTagsText: M = (Le) => `+${Le}`,
    getOptionDisabled: N,
    getOptionKey: W,
    getOptionLabel: D,
    isOptionEqualToValue: F,
    groupBy: Y,
    handleHomeEndKeys: oe = !r.freeSolo,
    id: G,
    includeInputInList: H = !1,
    inputValue: q,
    limitTags: ae = -1,
    ListboxComponent: re,
    ListboxProps: j,
    loading: L = !1,
    loadingText: Z = "Loading…",
    multiple: _ = !1,
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
    PaperComponent: ke,
    PopperComponent: he,
    popupIcon: Me = kc || (kc = /* @__PURE__ */ E.jsx(_d, {})),
    readOnly: Ee = !1,
    renderGroup: de,
    renderInput: it,
    renderOption: We,
    renderTags: gt,
    selectOnFocus: Ot = !r.freeSolo,
    size: lt = "medium",
    slots: Pt = {},
    slotProps: Fe = {},
    value: _e,
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
    dirty: _t,
    expanded: Ft,
    id: xn,
    popupOpen: Lt,
    focused: Yt,
    focusedTag: qt,
    anchorEl: Gt,
    setAnchorEl: Kt,
    inputValue: zn,
    groupedOptions: ut
  } = _0({
    ...r,
    componentName: "Autocomplete"
  }), Xt = !C && !v && _t && !Ee, Mt = (!m || k === !0) && k !== !1, {
    onMouseDown: fe
  } = St(), {
    ref: ln,
    ...Wn
  } = Pe(), R = D || ((Le) => Le.label ?? Le), K = {
    ...r,
    disablePortal: I,
    expanded: Ft,
    focused: Yt,
    fullWidth: P,
    getOptionLabel: R,
    hasClearIcon: Xt,
    hasPopupIcon: Mt,
    inputFocused: qt === -1,
    popupOpen: Lt,
    size: lt
  }, te = kw(K), ye = {
    slots: {
      paper: ke,
      popper: he,
      ...Pt
    },
    slotProps: {
      chip: c,
      listbox: j,
      ...u,
      ...Fe
    }
  }, [$e, z] = vt("listbox", {
    elementType: Lw,
    externalForwardedProps: ye,
    ownerState: K,
    className: te.listbox,
    additionalProps: Wn,
    ref: ln
  }), [A, X] = vt("paper", {
    elementType: ra,
    externalForwardedProps: ye,
    ownerState: K,
    className: te.paper
  }), [ve, me] = vt("popper", {
    elementType: Ys,
    externalForwardedProps: ye,
    ownerState: K,
    className: te.popper,
    additionalProps: {
      disablePortal: I,
      style: {
        width: Gt ? Gt.clientWidth : null
      },
      role: "presentation",
      anchorEl: Gt,
      open: Lt
    }
  });
  let we;
  if (_ && ct.length > 0) {
    const Le = (un) => ({
      className: te.tag,
      disabled: v,
      ...Oe(un)
    });
    gt ? we = gt(ct, Le, K) : we = ct.map((un, wn) => {
      const {
        key: Bt,
        ...la
      } = Le({
        index: wn
      });
      return /* @__PURE__ */ E.jsx(Jd, {
        label: R(un),
        size: lt,
        ...la,
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
    children: [/* @__PURE__ */ E.jsx(Bw, {
      className: te.groupLabel,
      ownerState: K,
      component: "div",
      children: Le.group
    }), /* @__PURE__ */ E.jsx(zw, {
      className: te.groupUl,
      ownerState: K,
      children: Le.children
    })]
  }, Le.key)), ft = We || ((Le, un) => {
    const {
      key: wn,
      ...Bt
    } = Le;
    return /* @__PURE__ */ E.jsx("li", {
      ...Bt,
      children: R(un)
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
    }, K);
  }, En = ye.slotProps.clearIndicator, Xn = ye.slotProps.popupIndicator;
  return /* @__PURE__ */ E.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ E.jsx($w, {
      ref: n,
      className: ge(te.root, d),
      ownerState: K,
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
            endAdornment: /* @__PURE__ */ E.jsxs(Mw, {
              className: te.endAdornment,
              ownerState: K,
              children: [Xt ? /* @__PURE__ */ E.jsx(Nw, {
                ...ie(),
                "aria-label": g,
                title: g,
                ownerState: K,
                ...En,
                className: ge(te.clearIndicator, En == null ? void 0 : En.className),
                children: f
              }) : null, Mt ? /* @__PURE__ */ E.jsx(Dw, {
                ...$t(),
                disabled: v,
                "aria-label": Lt ? b : Re,
                title: Lt ? b : Re,
                ownerState: K,
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
    }), Gt ? /* @__PURE__ */ E.jsx(Aw, {
      as: ve,
      ...me,
      children: /* @__PURE__ */ E.jsxs(jw, {
        as: A,
        ...X,
        children: [L && ut.length === 0 ? /* @__PURE__ */ E.jsx(_w, {
          className: te.loading,
          ownerState: K,
          children: Z
        }) : null, ut.length === 0 && !m && !L ? /* @__PURE__ */ E.jsx(Fw, {
          className: te.noOptions,
          ownerState: K,
          role: "presentation",
          onMouseDown: (Le) => {
            Le.preventDefault();
          },
          children: V
        }) : null, ut.length > 0 ? /* @__PURE__ */ E.jsx($e, {
          as: re,
          ...z,
          children: ut.map((Le, un) => Y ? at({
            key: Le.key,
            group: Le.group,
            children: Le.options.map((wn, Bt) => cn(wn, Le.index + Bt))
          }) : cn(Le, un))
        }) : null]
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (ef.propTypes = {
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
  limitTags: $r,
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
const $a = (e) => e.stopPropagation(), Ww = ({ options: e, renderInput: t, ...n }) => {
  const r = ot(
    () => e.find((i) => i.value === n.value),
    [e, n.value]
  );
  return /* @__PURE__ */ E.jsx(
    ef,
    {
      onChange: (i, a) => {
        var s;
        return (s = n.onChange) == null ? void 0 : s.call(n, a == null ? void 0 : a.value);
      },
      value: r ?? null,
      options: e,
      onClick: $a,
      onKeyDown: $a,
      getOptionLabel: (i) => i.label,
      renderInput: t || ((i) => /* @__PURE__ */ E.jsx(
        Ld,
        {
          ...i,
          onClick: $a,
          label: n.label,
          error: n.error,
          helperText: n.helperText
        }
      ))
    }
  );
}, Vw = An(pd)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Zo = (e) => e.stopPropagation(), Ma = ({ children: e, ...t }) => /* @__PURE__ */ E.jsxs(Vw, { children: [
  mu(t),
  e
] }), Hw = (e) => (t) => {
  const { filters: n, setFilters: r } = Cn(Fs), i = ot(() => n[e.key], [n, e]), a = kt(
    (s) => {
      r({ ...n, [e.key]: s });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === xo.AUTOCOMPLETE && (i === void 0 || typeof i == "string") ? /* @__PURE__ */ E.jsx(Ma, { ...t, children: /* @__PURE__ */ E.jsx(
    Ww,
    {
      options: e.filterOptions ?? [],
      onChange: a,
      value: i,
      renderInput: e.renderFilterInput
    }
  ) }) : /* @__PURE__ */ E.jsx(Ma, { ...t, children: e.renderFilterInput ? e.renderFilterInput({
    onChange: (s) => a(s.target.value),
    value: i ?? "",
    autoComplete: "off",
    onClick: Zo,
    onKeyDown: Zo
  }) : /* @__PURE__ */ E.jsx(
    Ld,
    {
      autoComplete: "off",
      onClick: Zo,
      onKeyDown: Zo,
      value: i ?? "",
      onChange: (s) => a(s.target.value)
    }
  ) }) : /* @__PURE__ */ E.jsx(Ma, { ...t });
}, Uw = {
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
}, Yw = (e, t, n) => {
  let r;
  const i = Uw[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Na(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const qw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Gw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Kw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xw = {
  date: Na({
    formats: qw,
    defaultWidth: "full"
  }),
  time: Na({
    formats: Gw,
    defaultWidth: "full"
  }),
  dateTime: Na({
    formats: Kw,
    defaultWidth: "full"
  })
}, Zw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Qw = (e, t, n, r) => Zw[e];
function to(e) {
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
const Jw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, eC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tC = {
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
}, nC = {
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
}, rC = {
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
}, oC = {
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
}, iC = (e, t) => {
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
}, aC = {
  ordinalNumber: iC,
  era: to({
    values: Jw,
    defaultWidth: "wide"
  }),
  quarter: to({
    values: eC,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: to({
    values: tC,
    defaultWidth: "wide"
  }),
  day: to({
    values: nC,
    defaultWidth: "wide"
  }),
  dayPeriod: to({
    values: rC,
    defaultWidth: "wide",
    formattingValues: oC,
    defaultFormattingWidth: "wide"
  })
};
function no(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? lC(l, (p) => p.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      sC(l, (p) => p.test(s))
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
function sC(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function lC(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function cC(e) {
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
const uC = /^(\d+)(th|st|nd|rd)?/i, dC = /\d+/i, fC = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, pC = {
  any: [/^b/i, /^(a|c)/i]
}, mC = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, hC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gC = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, bC = {
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
}, yC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, vC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, xC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, wC = {
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
}, CC = {
  ordinalNumber: cC({
    matchPattern: uC,
    parsePattern: dC,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: no({
    matchPatterns: fC,
    defaultMatchWidth: "wide",
    parsePatterns: pC,
    defaultParseWidth: "any"
  }),
  quarter: no({
    matchPatterns: mC,
    defaultMatchWidth: "wide",
    parsePatterns: hC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: no({
    matchPatterns: gC,
    defaultMatchWidth: "wide",
    parsePatterns: bC,
    defaultParseWidth: "any"
  }),
  day: no({
    matchPatterns: yC,
    defaultMatchWidth: "wide",
    parsePatterns: vC,
    defaultParseWidth: "any"
  }),
  dayPeriod: no({
    matchPatterns: xC,
    defaultMatchWidth: "any",
    parsePatterns: wC,
    defaultParseWidth: "any"
  })
}, TC = {
  code: "en-US",
  formatDistance: Yw,
  formatLong: Xw,
  formatRelative: Qw,
  localize: aC,
  match: CC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let SC = {};
function Lo() {
  return SC;
}
const tf = 6048e5, EC = 864e5, $c = Symbol.for("constructDateFrom");
function nr(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && $c in e ? e[$c](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Sn(e, t) {
  return nr(t || e, e);
}
function Mc(e) {
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
function OC(e, ...t) {
  const n = nr.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Nc(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function RC(e, t, n) {
  const [r, i] = OC(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Nc(r), s = Nc(i), l = +a - Mc(a), c = +s - Mc(s);
  return Math.round((l - c) / EC);
}
function PC(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function IC(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in);
  return RC(n, PC(n)) + 1;
}
function Eo(e, t) {
  var l, c, d, f;
  const n = Lo(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, i = Sn(e, t == null ? void 0 : t.in), a = i.getDay(), s = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Ei(e, t) {
  return Eo(e, { ...t, weekStartsOn: 1 });
}
function nf(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = nr(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Ei(i), s = nr(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const l = Ei(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function kC(e, t) {
  const n = nf(e, t), r = nr(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ei(r);
}
function $C(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in), r = +Ei(n) - +kC(n);
  return Math.round(r / tf) + 1;
}
function rf(e, t) {
  var f, p, h, g;
  const n = Sn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Lo(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((g = (h = i.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = nr((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const l = Eo(s, t), c = nr((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const d = Eo(c, t);
  return +n >= +l ? r + 1 : +n >= +d ? r : r - 1;
}
function MC(e, t) {
  var l, c, d, f;
  const n = Lo(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = rf(e, t), a = nr((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Eo(a, t);
}
function NC(e, t) {
  const n = Sn(e, t == null ? void 0 : t.in), r = +Eo(n, t) - +MC(n, t);
  return Math.round(r / tf) + 1;
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
}, Sr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Dc = {
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
    const i = rf(e, r), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = a % 100;
      return Ke(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Ke(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = nf(e);
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
    const i = NC(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Ke(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = $C(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ke(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Qn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = IC(e);
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
    switch (r === 12 ? i = Sr.noon : r === 0 ? i = Sr.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? i = Sr.evening : r >= 12 ? i = Sr.afternoon : r >= 4 ? i = Sr.morning : i = Sr.night, t) {
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
        return jc(r);
      case "XXXX":
      case "XX":
        return lr(r);
      case "XXXXX":
      case "XXX":
      default:
        return lr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return jc(r);
      case "xxxx":
      case "xx":
        return lr(r);
      case "xxxxx":
      case "xxx":
      default:
        return lr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ac(r, ":");
      case "OOOO":
      default:
        return "GMT" + lr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ac(r, ":");
      case "zzzz":
      default:
        return "GMT" + lr(r, ":");
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
function Ac(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Ke(a, 2);
}
function jc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ke(Math.abs(e) / 60, 2) : lr(e, t);
}
function lr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Ke(Math.trunc(r / 60), 2), a = Ke(r % 60, 2);
  return n + i + t + a;
}
const _c = (e, t) => {
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
}, of = (e, t) => {
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
}, DC = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return _c(e, t);
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
  return a.replace("{{date}}", _c(r, t)).replace("{{time}}", of(i, t));
}, AC = {
  p: of,
  P: DC
}, jC = /^D+$/, _C = /^Y+$/, FC = ["D", "DD", "YY", "YYYY"];
function LC(e) {
  return jC.test(e);
}
function BC(e) {
  return _C.test(e);
}
function zC(e, t, n) {
  const r = WC(e, t, n);
  if (console.warn(r), FC.includes(e)) throw new RangeError(r);
}
function WC(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function af(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function sf(e) {
  return !(!af(e) && typeof e != "number" || isNaN(+Sn(e)));
}
const VC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, HC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, UC = /^'([^]*?)'?$/, YC = /''/g, qC = /[a-zA-Z]/;
function GC(e, t, n) {
  var f, p, h, g, b, u, y, C;
  const r = Lo(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? TC, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((C = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = Sn(e, n == null ? void 0 : n.in);
  if (!sf(l))
    throw new RangeError("Invalid time value");
  let c = t.match(HC).map((S) => {
    const v = S[0];
    if (v === "p" || v === "P") {
      const x = AC[v];
      return x(S, i.formatLong);
    }
    return S;
  }).join("").match(VC).map((S) => {
    if (S === "''")
      return { isToken: !1, value: "'" };
    const v = S[0];
    if (v === "'")
      return { isToken: !1, value: KC(S) };
    if (Dc[v])
      return { isToken: !0, value: S };
    if (v.match(qC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: S };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(l, c));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: i
  };
  return c.map((S) => {
    if (!S.isToken) return S.value;
    const v = S.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && BC(v) || !(n != null && n.useAdditionalDayOfYearTokens) && LC(v)) && zC(v, t, String(e));
    const x = Dc[v[0]];
    return x(l, v, i.localize, d);
  }).join("");
}
function KC(e) {
  const t = e.match(UC);
  return t ? t[1].replace(YC, "'") : e;
}
function XC() {
  return Object.assign({}, Lo());
}
function Fc(e, t, n) {
  const r = XC(), i = JC(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in i ? ZC(i, t) : QC(i, t);
}
function ZC(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function QC(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function JC(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function eT(e, t) {
  const n = iT(t);
  return "formatToParts" in n ? nT(n, e) : rT(n, e);
}
const tT = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function nT(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let i = 0; i < n.length; i++) {
      const a = tT[n[i].type];
      a !== void 0 && (r[a] = parseInt(n[i].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function rT(e, t) {
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
const Da = {}, Lc = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), oT = Lc === "06/25/2014, 00:00:00" || Lc === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function iT(e) {
  return Da[e] || (Da[e] = oT ? new Intl.DateTimeFormat("en-US", {
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
  })), Da[e];
}
function lf(e, t, n, r, i, a, s) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, i, a, s), l;
}
const Bc = 36e5, aT = 6e4, Aa = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function qs(e, t, n) {
  if (!e)
    return 0;
  let r = Aa.timezoneZ.exec(e);
  if (r)
    return 0;
  let i, a;
  if (r = Aa.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), zc(i) ? -(i * Bc) : NaN;
  if (r = Aa.timezoneHHMM.exec(e), r) {
    i = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return zc(i, s) ? (a = Math.abs(i) * Bc + s * aT, r[1] === "+" ? -a : a) : NaN;
  }
  if (cT(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : sT(t), l = us(s, e);
    return -(n ? l : lT(t, l, e));
  }
  return NaN;
}
function sT(e) {
  return lf(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function us(e, t) {
  const n = eT(e, t), r = lf(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let i = e.getTime();
  const a = i % 1e3;
  return i -= a >= 0 ? a : 1e3 + a, r - i;
}
function lT(e, t, n) {
  let i = e.getTime() - t;
  const a = us(new Date(i), n);
  if (t === a)
    return t;
  i -= a - t;
  const s = us(new Date(i), n);
  return a === s ? a : Math.max(a, s);
}
function zc(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Wc = {};
function cT(e) {
  if (Wc[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Wc[e] = !0, !0;
  } catch {
    return !1;
  }
}
const uT = 60 * 1e3, dT = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = ja(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Vc(r);
      case "XXXX":
      case "XX":
        return Or(r);
      case "XXXXX":
      case "XXX":
      default:
        return Or(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = ja(n.timeZone, e);
    switch (t) {
      case "x":
        return Vc(r);
      case "xxxx":
      case "xx":
        return Or(r);
      case "xxxxx":
      case "xxx":
      default:
        return Or(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = ja(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + fT(r, ":");
      case "OOOO":
      default:
        return "GMT" + Or(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return Fc("short", e, n);
      case "zzzz":
      default:
        return Fc("long", e, n);
    }
  }
};
function ja(e, t) {
  const n = e ? qs(e, t, !0) / uT : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function Oi(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Or(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Oi(Math.floor(r / 60), 2), a = Oi(Math.floor(r % 60), 2);
  return n + i + t + a;
}
function Vc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Oi(Math.abs(e) / 60, 2) : Or(e, t);
}
function fT(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Oi(a, 2);
}
function Hc(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const pT = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, _a = 36e5, Uc = 6e4, mT = 2, jt = {
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
  timeZone: pT
};
function cf(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? mT : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = hT(e), { year: i, restDateString: a } = gT(r.date, n), s = bT(a, i);
  if (s === null || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const l = s.getTime();
    let c = 0, d;
    if (r.time && (c = yT(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (d = qs(r.timeZone || t.timeZone, new Date(l + c)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = Hc(new Date(l + c)), d = Hc(new Date(l + c + d));
    return new Date(l + c + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function hT(e) {
  const t = {};
  let n = jt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = jt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const i = jt.timeZone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timeZone = i[1].trim()) : t.time = r;
  }
  return t;
}
function gT(e, t) {
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
function bT(e, t) {
  if (t === null)
    return null;
  let n, r, i;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = jt.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, qc(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = jt.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return wT(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = jt.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return qc(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = jt.Www.exec(e), a)
    return i = parseInt(a[1], 10) - 1, Gc(i) ? Yc(t, i) : /* @__PURE__ */ new Date(NaN);
  if (a = jt.WwwD.exec(e), a) {
    i = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return Gc(i, s) ? Yc(t, i, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function yT(e) {
  let t, n, r = jt.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), Fa(t) ? t % 24 * _a : NaN;
  if (r = jt.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), Fa(t, n) ? t % 24 * _a + n * Uc : NaN;
  if (r = jt.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const i = parseFloat(r[3].replace(",", "."));
    return Fa(t, n, i) ? t % 24 * _a + n * Uc + i * 1e3 : NaN;
  }
  return null;
}
function Yc(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, a = t * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const vT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], xT = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function uf(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function qc(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = uf(e);
    if (r && n > xT[t] || !r && n > vT[t])
      return !1;
  }
  return !0;
}
function wT(e, t) {
  if (t < 1)
    return !1;
  const n = uf(e);
  return !(n && t > 366 || !n && t > 365);
}
function Gc(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Fa(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const CT = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function TT(e, t, n = {}) {
  t = String(t);
  const r = t.match(CT);
  if (r) {
    const i = cf(n.originalDate || e, n);
    t = r.reduce(function(a, s) {
      if (s[0] === "'")
        return a;
      const l = a.indexOf(s), c = a[l - 1] === "'", d = a.replace(s, "'" + dT[s[0]](i, s, n) + "'");
      return c ? d.substring(0, l - 1) + d.substring(l + 1) : d;
    }, t);
  }
  return GC(e, t, n);
}
function ST(e, t, n) {
  e = cf(e, n);
  const r = qs(t, e, !0), i = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), a.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), a;
}
function ET(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, TT(ST(e, t, { timeZone: r.timeZone }), n, r);
}
var df = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(df || {});
const OT = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !af(e) && typeof e == "string" ? new Date(e) : e;
  return sf(r) ? ET(e, n, t) : "--";
}, Kc = (e) => e.trim().toLowerCase(), sa = Ct.createContext({
  columns: [],
  hiddenColumn: [],
  setHiddenColumn: () => {
  },
  enabled: !1
}), RT = "data-grid-hidden-column-visibility", PT = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: i,
  localStorageKey: a = RT
}) => {
  const [s, l] = Ct.useState(0), [c, d] = Ct.useState([]);
  zr(() => {
    const h = localStorage.getItem(a);
    if (h) {
      const g = JSON.parse(h);
      f(Array.isArray(g) ? g : []);
    } else
      f(r || []);
  }, [r]);
  const f = kt((h) => {
    localStorage.setItem(a, JSON.stringify(h)), l((g) => g + 1), d(h);
  }, []), p = ot(
    () => e.filter((h) => !(n != null && n.includes(h.key))),
    [e, n]
  );
  return /* @__PURE__ */ E.jsx(
    sa.Provider,
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
}, IT = ({
  columns: e,
  selectionEnabled: t
}) => {
  const { enabled: n, hiddenColumn: r } = Cn(sa), i = kt((a) => {
    const s = () => {
      if (a.renderCell)
        return a.renderCell;
      if (a.type === Rr.DATE)
        return ({ row: c }) => {
          var d, f;
          return OT(
            c[a.key],
            ((d = a.dateOptions) == null ? void 0 : d.formatDate) ?? df.DATE_WITH_TIME,
            (f = a.dateOptions) == null ? void 0 : f.timeZone
          );
        };
    }, l = () => a.renderHeaderCell ? a.renderHeaderCell : Hw(a);
    return { ...a, renderCell: s(), renderHeaderCell: l() };
  }, []);
  return ot(() => {
    const a = [];
    return t && a.push({
      ...jp,
      minWidth: 50,
      maxWidth: 50
    }), a.push(...e.map((s) => i(s))), n && r ? a.filter((s) => !r.includes(s.key)) : a;
  }, [e, i, n, r]);
};
function kT(e) {
  return ze("PrivateSwitchBase", e);
}
je("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const $T = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", n && "checked", r && "disabled", i && `edge${ce(i)}`],
    input: ["input"]
  };
  return Ve(a, kT, t);
}, MT = ue(Br)({
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
}), NT = ue("input", {
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
}), ff = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    id: h,
    inputProps: g,
    inputRef: b,
    name: u,
    onBlur: y,
    onChange: C,
    onFocus: S,
    readOnly: v,
    required: x = !1,
    tabIndex: w,
    type: I,
    value: O,
    ...$
  } = t, [k, m] = kr({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), P = hr(), M = (G) => {
    S && S(G), P && P.onFocus && P.onFocus(G);
  }, N = (G) => {
    y && y(G), P && P.onBlur && P.onBlur(G);
  }, W = (G) => {
    if (G.nativeEvent.defaultPrevented)
      return;
    const H = G.target.checked;
    m(H), C && C(G, H);
  };
  let D = c;
  P && typeof D > "u" && (D = P.disabled);
  const F = I === "checkbox" || I === "radio", Y = {
    ...t,
    checked: k,
    disabled: D,
    disableFocusRipple: d,
    edge: f
  }, oe = $T(Y);
  return /* @__PURE__ */ E.jsxs(MT, {
    component: "span",
    className: ge(oe.root, s),
    centerRipple: !0,
    focusRipple: !d,
    disabled: D,
    tabIndex: null,
    role: void 0,
    onFocus: M,
    onBlur: N,
    ownerState: Y,
    ref: n,
    ...$,
    children: [/* @__PURE__ */ E.jsx(NT, {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      className: oe.input,
      disabled: D,
      id: F ? h : void 0,
      name: u,
      onChange: W,
      readOnly: v,
      ref: b,
      required: x,
      ownerState: Y,
      tabIndex: w,
      type: I,
      ...I === "checkbox" && O === void 0 ? {} : {
        value: O
      },
      ...g
    }), k ? a : p]
  });
});
process.env.NODE_ENV !== "production" && (ff.propTypes = {
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
const DT = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), AT = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), jT = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function _T(e) {
  return ze("MuiCheckbox", e);
}
const La = je("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), FT = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: i
  } = e, a = {
    root: ["root", n && "indeterminate", `color${ce(r)}`, `size${ce(i)}`]
  }, s = Ve(a, _T, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, LT = ue(ff, {
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
      [`&.${La.checked}, &.${La.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${La.disabled}`]: {
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
}))), BT = /* @__PURE__ */ E.jsx(AT, {}), zT = /* @__PURE__ */ E.jsx(DT, {}), WT = /* @__PURE__ */ E.jsx(jT, {}), pf = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = BT,
    color: a = "primary",
    icon: s = zT,
    indeterminate: l = !1,
    indeterminateIcon: c = WT,
    inputProps: d,
    size: f = "medium",
    disableRipple: p = !1,
    className: h,
    ...g
  } = r, b = l ? c : s, u = l ? c : i, y = {
    ...r,
    disableRipple: p,
    color: a,
    indeterminate: l,
    size: f
  }, C = FT(y);
  return /* @__PURE__ */ E.jsx(LT, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": l,
      ...d
    },
    icon: /* @__PURE__ */ T.cloneElement(b, {
      fontSize: b.props.fontSize ?? f
    }),
    checkedIcon: /* @__PURE__ */ T.cloneElement(u, {
      fontSize: u.props.fontSize ?? f
    }),
    ownerState: y,
    ref: n,
    className: ge(C.root, h),
    disableRipple: p,
    ...g,
    classes: C
  });
});
process.env.NODE_ENV !== "production" && (pf.propTypes = {
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
const mf = An(pf)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${Et.primary500};
    }
`;
var VT = {
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
function HT(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return VT[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Ba(e) {
  var t = HT(e);
  return "".concat(t.value).concat(t.unit);
}
var UT = function(e, t, n) {
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
}, Ri = function() {
  return Ri = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ri.apply(this, arguments);
}, YT = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, qT = UT("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function GT(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, a = e.speedMultiplier, s = a === void 0 ? 1 : a, l = e.cssOverride, c = l === void 0 ? {} : l, d = e.size, f = d === void 0 ? 15 : d, p = e.margin, h = p === void 0 ? 2 : p, g = YT(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), b = Ri({ display: "inherit" }, c), u = function(y) {
    return {
      backgroundColor: i,
      width: Ba(f),
      height: Ba(f),
      margin: Ba(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(qT, " ").concat(0.75 / s, "s ").concat(y * 0.12 / s, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? T.createElement(
    "span",
    Ri({ style: b }, g),
    T.createElement("span", { style: u(1) }),
    T.createElement("span", { style: u(2) }),
    T.createElement("span", { style: u(3) })
  ) : null;
}
const KT = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r,
  row: i
}) => e ? e(n, r, i) : t === xo.TEXT && typeof n == "string" && typeof r == "string" ? Kc(n).includes(Kc(r)) : t === xo.AUTOCOMPLETE ? n === r : !1, XT = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = Cn(Fs);
  return ot(() => n ? [...t].filter(
    (i) => Object.entries(r).every(([a, s]) => {
      if (s === void 0 || typeof s == "string" && s === "")
        return !0;
      const l = e.find((c) => c.key === a);
      return l ? KT({
        comparator: l.filterComparator,
        filterType: l.filterType ?? xo.TEXT,
        value: i[a],
        valueToMatch: s,
        row: i
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, Xc = je("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Zc = je("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Qc = je("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function ZT(e) {
  return ze("MuiMenuItem", e);
}
const ro = je("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), QT = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, JT = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: s
  } = e, c = Ve({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, ZT, s);
  return {
    ...s,
    ...c
  };
}, eS = ue(Br, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: QT
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
  [`&.${ro.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : rt(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${ro.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${ro.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : rt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : rt(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${ro.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ro.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Xc.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Xc.inset}`]: {
    marginLeft: 52
  },
  [`& .${Qc.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Qc.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Zc.root}`]: {
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
      [`& .${Zc.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Gs = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    className: h,
    ...g
  } = r, b = T.useContext(gi), u = T.useMemo(() => ({
    dense: s || b.dense || !1,
    disableGutters: c
  }), [b.dense, s, c]), y = T.useRef(null);
  _n(() => {
    i && (y.current ? y.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const C = {
    ...r,
    dense: u.dense,
    divider: l,
    disableGutters: c
  }, S = JT(r), v = Tt(y, n);
  let x;
  return r.disabled || (x = p !== void 0 ? p : -1), /* @__PURE__ */ E.jsx(gi.Provider, {
    value: u,
    children: /* @__PURE__ */ E.jsx(eS, {
      ref: v,
      role: f,
      tabIndex: x,
      component: a,
      focusVisibleClassName: ge(S.focusVisible, d),
      className: ge(S.root, h),
      ...g,
      ownerState: C,
      classes: S
    })
  });
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
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
const hf = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (hf.displayName = "TableContext");
const gf = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (gf.displayName = "Tablelvl2Context");
function tS(e) {
  return ze("MuiTableCell", e);
}
const nS = je("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), rS = (e) => {
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
  return Ve(l, tS, t);
}, oS = ue("td", {
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
    ${e.palette.mode === "light" ? qi(rt(e.palette.divider, 1), 0.88) : Yi(rt(e.palette.divider, 1), 0.68)}`,
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
      [`&.${nS.paddingCheckbox}`]: {
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
}))), Pi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    ...h
  } = r, g = T.useContext(hf), b = T.useContext(gf), u = b && b.variant === "head";
  let y;
  s ? y = s : y = u ? "th" : "td";
  let C = c;
  y === "td" ? C = void 0 : !C && u && (C = "col");
  const S = p || b && b.variant, v = {
    ...r,
    align: i,
    component: y,
    padding: l || (g && g.padding ? g.padding : "normal"),
    size: d || (g && g.size ? g.size : "medium"),
    sortDirection: f,
    stickyHeader: S === "head" && g && g.stickyHeader,
    variant: S
  }, x = rS(v);
  let w = null;
  return f && (w = f === "asc" ? "ascending" : "descending"), /* @__PURE__ */ E.jsx(oS, {
    as: y,
    ref: n,
    className: ge(x.root, a),
    "aria-sort": w,
    scope: C,
    ownerState: v,
    ...h
  });
});
process.env.NODE_ENV !== "production" && (Pi.propTypes = {
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
function iS(e) {
  return ze("MuiToolbar", e);
}
je("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const aS = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return Ve({
    root: ["root", !n && "gutters", r]
  }, iS, t);
}, sS = ue("div", {
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
}))), bf = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, f = aS(d);
  return /* @__PURE__ */ E.jsx(sS, {
    as: a,
    className: ge(f.root, i),
    ref: n,
    ownerState: d,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (bf.propTypes = {
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
const lS = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), cS = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight"), uS = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage"), dS = Ln(/* @__PURE__ */ E.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage"), yf = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    showLastButton: h,
    slots: g = {},
    slotProps: b = {},
    ...u
  } = t, y = Ps(), C = (q) => {
    c(q, 0);
  }, S = (q) => {
    c(q, d - 1);
  }, v = (q) => {
    c(q, d + 1);
  }, x = (q) => {
    c(q, Math.max(0, Math.ceil(i / f) - 1));
  }, w = g.firstButton ?? dr, I = g.lastButton ?? dr, O = g.nextButton ?? dr, $ = g.previousButton ?? dr, k = g.firstButtonIcon ?? dS, m = g.lastButtonIcon ?? uS, P = g.nextButtonIcon ?? cS, M = g.previousButtonIcon ?? lS, N = y ? I : w, W = y ? O : $, D = y ? $ : O, F = y ? w : I, Y = y ? b.lastButton : b.firstButton, oe = y ? b.nextButton : b.previousButton, G = y ? b.previousButton : b.nextButton, H = y ? b.firstButton : b.lastButton;
  return /* @__PURE__ */ E.jsxs("div", {
    ref: n,
    ...u,
    children: [p && /* @__PURE__ */ E.jsx(N, {
      onClick: C,
      disabled: a || d === 0,
      "aria-label": s("first", d),
      title: s("first", d),
      ...Y,
      children: y ? /* @__PURE__ */ E.jsx(m, {
        ...b.lastButtonIcon
      }) : /* @__PURE__ */ E.jsx(k, {
        ...b.firstButtonIcon
      })
    }), /* @__PURE__ */ E.jsx(W, {
      onClick: S,
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
    }), /* @__PURE__ */ E.jsx(D, {
      onClick: v,
      disabled: a || (i !== -1 ? d >= Math.ceil(i / f) - 1 : !1),
      color: "inherit",
      "aria-label": s("next", d),
      title: s("next", d),
      ...G ?? l,
      children: y ? /* @__PURE__ */ E.jsx(M, {
        ...b.previousButtonIcon
      }) : /* @__PURE__ */ E.jsx(P, {
        ...b.nextButtonIcon
      })
    }), h && /* @__PURE__ */ E.jsx(F, {
      onClick: x,
      disabled: a || d >= Math.ceil(i / f) - 1,
      "aria-label": s("last", d),
      title: s("last", d),
      ...H,
      children: y ? /* @__PURE__ */ E.jsx(k, {
        ...b.firstButtonIcon
      }) : /* @__PURE__ */ E.jsx(m, {
        ...b.lastButtonIcon
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (yf.propTypes = {
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
function fS(e) {
  return ze("MuiTablePagination", e);
}
const ho = je("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var Jc;
const pS = ue(Pi, {
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
}))), mS = ue(bf, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (e, t) => ({
    [`& .${ho.actions}`]: t.actions,
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
  [`& .${ho.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}))), hS = ue("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})({
  flex: "1 1 100%"
}), gS = ue("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (e, t) => t.selectLabel
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
}))), bS = ue(oa, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (e, t) => ({
    [`& .${ho.selectIcon}`]: t.selectIcon,
    [`& .${ho.select}`]: t.select,
    ...t.input,
    ...t.selectRoot
  })
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${ho.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
}), yS = ue(Gs, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (e, t) => t.menuItem
})({}), vS = ue("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (e, t) => t.displayedRows
})(Ae(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
})));
function xS({
  from: e,
  to: t,
  count: n
}) {
  return `${e}–${t} of ${n !== -1 ? n : `more than ${t}`}`;
}
function wS(e) {
  return `Go to ${e} page`;
}
const CS = (e) => {
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
  }, fS, t);
}, vf = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ge({
    props: t,
    name: "MuiTablePagination"
  }), {
    ActionsComponent: i = yf,
    backIconButtonProps: a,
    colSpan: s,
    component: l = Pi,
    count: c,
    disabled: d = !1,
    getItemAriaLabel: f = wS,
    labelDisplayedRows: p = xS,
    labelRowsPerPage: h = "Rows per page:",
    nextIconButtonProps: g,
    onPageChange: b,
    onRowsPerPageChange: u,
    page: y,
    rowsPerPage: C,
    rowsPerPageOptions: S = [10, 25, 50, 100],
    SelectProps: v = {},
    showFirstButton: x = !1,
    showLastButton: w = !1,
    slotProps: I = {},
    slots: O = {},
    ...$
  } = r, k = r, m = CS(k), P = (I == null ? void 0 : I.select) ?? v, M = P.native ? "option" : yS;
  let N;
  (l === Pi || l === "td") && (N = s || 1e3);
  const W = Ar(P.id), D = Ar(P.labelId), F = () => c === -1 ? (y + 1) * C : C === -1 ? c : Math.min(c, (y + 1) * C), Y = {
    slots: O,
    slotProps: I
  }, [oe, G] = vt("root", {
    ref: n,
    className: m.root,
    elementType: pS,
    externalForwardedProps: {
      ...Y,
      component: l,
      ...$
    },
    ownerState: k,
    additionalProps: {
      colSpan: N
    }
  }), [H, q] = vt("toolbar", {
    className: m.toolbar,
    elementType: mS,
    externalForwardedProps: Y,
    ownerState: k
  }), [ae, re] = vt("spacer", {
    className: m.spacer,
    elementType: hS,
    externalForwardedProps: Y,
    ownerState: k
  }), [j, L] = vt("selectLabel", {
    className: m.selectLabel,
    elementType: gS,
    externalForwardedProps: Y,
    ownerState: k,
    additionalProps: {
      id: D
    }
  }), [Z, _] = vt("select", {
    className: m.select,
    elementType: bS,
    externalForwardedProps: Y,
    ownerState: k
  }), [V, J] = vt("menuItem", {
    className: m.menuItem,
    elementType: M,
    externalForwardedProps: Y,
    ownerState: k
  }), [Q, le] = vt("displayedRows", {
    className: m.displayedRows,
    elementType: vS,
    externalForwardedProps: Y,
    ownerState: k
  });
  return /* @__PURE__ */ E.jsx(oe, {
    ...G,
    children: /* @__PURE__ */ E.jsxs(H, {
      ...q,
      children: [/* @__PURE__ */ E.jsx(ae, {
        ...re
      }), S.length > 1 && /* @__PURE__ */ E.jsx(j, {
        ...L,
        children: h
      }), S.length > 1 && /* @__PURE__ */ E.jsx(Z, {
        variant: "standard",
        ...!P.variant && {
          input: Jc || (Jc = /* @__PURE__ */ E.jsx(jo, {}))
        },
        value: C,
        onChange: u,
        id: W,
        labelId: D,
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
        ..._,
        children: S.map((B) => /* @__PURE__ */ Qf(V, {
          ...J,
          key: B.label ? B.label : B,
          value: B.value ? B.value : B
        }, B.label ? B.label : B))
      }), /* @__PURE__ */ E.jsx(Q, {
        ...le,
        children: p({
          from: c === 0 ? 0 : y * C + 1,
          to: F(),
          count: c === -1 ? -1 : c,
          page: y
        })
      }), /* @__PURE__ */ E.jsx(i, {
        className: m.actions,
        backIconButtonProps: a,
        count: c,
        nextIconButtonProps: g,
        onPageChange: b,
        page: y,
        rowsPerPage: C,
        showFirstButton: x,
        showLastButton: w,
        slotProps: I.actions,
        slots: O.actions,
        getItemAriaLabel: f,
        disabled: d
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (vf.propTypes = {
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
  count: $r.isRequired,
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
  page: Tn($r.isRequired, (e) => {
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
  rowsPerPage: $r.isRequired,
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
const TS = An.div`
    height: 80px;
    width: 100%;
`, SS = Ct.memo(
  ({ currentPage: e, setCurrentPage: t, setPageSize: n, pageSize: r, totalCount: i, labels: a }) => {
    const s = kt(
      (c, d) => {
        t(d);
      },
      []
    ), l = kt(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ E.jsx(TS, { children: /* @__PURE__ */ E.jsx(
      vf,
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
), ES = (e = 10) => {
  const [t, n] = Rt(0), [r, i] = Rt(e), a = kt(() => {
    n(0), i(e);
  }, []);
  return zr(() => {
    n(0);
  }, [r]), {
    currentPage: t,
    pageSize: r,
    defaultPageSize: e,
    setCurrentPage: n,
    setPageSize: i,
    resetPagination: a
  };
}, OS = An.div`
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
`, RS = Ct.memo(({ checked: e, onChange: t }) => {
  const n = kt(
    (r, i) => {
      t(i, r.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ E.jsx(mf, { checked: e, onChange: n });
}), PS = ({
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
  pagination: h,
  ...g
}) => {
  const { gridKey: b } = Cn(sa), { pageSize: u, currentPage: y, setCurrentPage: C, setPageSize: S } = ES(
    h == null ? void 0 : h.defaultPageSize
  ), v = IT({
    columns: r,
    selectionEnabled: !!c
  }), x = ot(
    () => v.some((W) => W.filterEnabled),
    [v]
  ), w = ot(
    () => (h == null ? void 0 : h.enabled) && !h.remotePagination,
    [h]
  ), I = ot(() => !p, [p]), O = XT({
    columns: v,
    rows: n,
    enabled: I
  }), $ = ot(() => !a, [a]), {
    sortedRows: k,
    sortColumns: m,
    setSortedColumns: P
  } = og({
    columns: v,
    rows: O,
    defaultSortColumns: s
  }), M = ot(() => w ? k.slice(y * u, (y + 1) * u) : k, [k, w, y, u]), N = kt(
    (W, D) => D === 0 ? "first-row" : D === n.length - 1 ? "last-row" : "",
    [n]
  );
  return zr(() => {
    const W = l == null ? void 0 : l.filter(
      (D) => n.some((F) => F.id === D)
    );
    (W == null ? void 0 : W.length) != (l == null ? void 0 : l.length) && (c == null || c(W ?? []));
  }, [n, l]), /* @__PURE__ */ E.jsxs(ng, { $pagination: !!(h != null && h.enabled), children: [
    /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsx(
      yu,
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
          renderCheckbox: (W) => /* @__PURE__ */ E.jsx(RS, { ...W }),
          ...g.renderers
        },
        ...g,
        style: { ...ih, ...e ?? {} }
      },
      b
    ) }),
    h != null && h.enabled ? /* @__PURE__ */ E.jsx(
      SS,
      {
        ...(h == null ? void 0 : h.remotePagination) ?? {
          currentPage: y,
          setCurrentPage: C,
          pageSize: u,
          setPageSize: S,
          totalCount: O.length
        }
      }
    ) : null,
    t ? /* @__PURE__ */ E.jsxs(OS, { children: [
      /* @__PURE__ */ E.jsx("div", {}),
      /* @__PURE__ */ E.jsx(GT, { color: Et.primary500 })
    ] }) : null
  ] });
}, jS = ({
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
}) => /* @__PURE__ */ E.jsx(M0, { filters: e, setFilters: t, children: /* @__PURE__ */ E.jsx(
  PT,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: a,
    localStorageKey: s,
    visibilityFeatureDisabledFor: i,
    children: /* @__PURE__ */ E.jsx(PS, { ...l, columns: n, filters: e, setFilters: t })
  }
) }), IS = An(Gs)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, _S = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r } = Cn(sa), i = Ct.useRef(null), [a, s] = Ct.useState(null), l = !!a, c = kt(() => {
    s(i.current);
  }, []), d = kt(() => {
    s(null);
  }, []), f = kt(
    (p) => () => {
      const h = n.indexOf(p);
      r(
        h === -1 ? [...n, p] : n.filter((g) => g !== p)
      );
    },
    [n]
  );
  return /* @__PURE__ */ E.jsxs("div", { ref: i, children: [
    /* @__PURE__ */ E.jsx(e, { onClick: c }),
    /* @__PURE__ */ E.jsx(As, { id: "column-visibility-menu", anchorEl: a, open: l, onClose: d, children: t.map((p) => /* @__PURE__ */ E.jsxs(IS, { onClick: f(p.key), children: [
      /* @__PURE__ */ E.jsx(mf, { checked: !n.includes(p.key) }),
      p.name
    ] }, p.key)) })
  ] });
};
export {
  Rr as ColumnType,
  df as DATE_FORMAT,
  jS as DataGrid,
  Pp as DataGridDefaultRenderersProvider,
  xo as FilterType,
  NS as Row,
  Mr as SELECT_COLUMN_KEY,
  fs as SelectCellFormatter,
  jp as SelectColumn,
  Op as ToggleGroup,
  DS as TreeDataGrid,
  _S as VisibilityColumnChooser,
  OT as convertDate,
  ih as defaultTheme,
  Kc as getStringToCompare,
  xp as renderCheckbox,
  mu as renderHeaderCell,
  Mm as renderSortIcon,
  Nm as renderSortPriority,
  Ep as renderToggleGroup,
  Rp as renderValue,
  Et as taktikTheme,
  AS as textEditor,
  Mp as useHeaderRowSelection,
  uu as useRowSelection
};
