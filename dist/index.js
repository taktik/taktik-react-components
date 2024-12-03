var gc = Object.defineProperty;
var yc = (e, t, r) => t in e ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var kr = (e, t, r) => yc(e, typeof t != "symbol" ? t + "" : t, r);
import * as Z from "react";
import Ft, { useContext as fr, forwardRef as Nn, createContext as Gr, memo as zt, useMemo as Be, useCallback as Xt, useRef as St, useEffect as Fn, useState as Ge, useImperativeHandle as bc, useLayoutEffect as vc, useId as wc, Children as xc, isValidElement as vn, cloneElement as wn } from "react";
import { flushSync as Rn } from "react-dom";
function Cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $o = { exports: {} }, Or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function Sc() {
  if (Ci) return Or;
  Ci = 1;
  var e = Ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, u) {
    var f, d = {}, m = null, y = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (f in l) n.call(l, f) && !i.hasOwnProperty(f) && (d[f] = l[f]);
    if (s && s.defaultProps) for (f in l = s.defaultProps, l) d[f] === void 0 && (d[f] = l[f]);
    return { $$typeof: t, type: s, key: m, ref: y, props: d, _owner: o.current };
  }
  return Or.Fragment = r, Or.jsx = a, Or.jsxs = a, Or;
}
var Pr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si;
function Ec() {
  return Si || (Si = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ft, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = Symbol.iterator, p = "@@iterator";
    function g(h) {
      if (h === null || typeof h != "object")
        return null;
      var M = v && h[v] || h[p];
      return typeof M == "function" ? M : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(h) {
      {
        for (var M = arguments.length, H = new Array(M > 1 ? M - 1 : 0), oe = 1; oe < M; oe++)
          H[oe - 1] = arguments[oe];
        S("error", h, H);
      }
    }
    function S(h, M, H) {
      {
        var oe = w.ReactDebugCurrentFrame, fe = oe.getStackAddendum();
        fe !== "" && (M += "%s", H = H.concat([fe]));
        var pe = H.map(function(se) {
          return String(se);
        });
        pe.unshift("Warning: " + M), Function.prototype.apply.call(console[h], console, pe);
      }
    }
    var x = !1, b = !1, I = !1, E = !1, _ = !1, B;
    B = Symbol.for("react.module.reference");
    function c(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === i || _ || h === o || h === u || h === f || E || h === y || x || b || I || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === d || h.$$typeof === a || h.$$typeof === s || h.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === B || h.getModuleId !== void 0));
    }
    function R(h, M, H) {
      var oe = h.displayName;
      if (oe)
        return oe;
      var fe = M.displayName || M.name || "";
      return fe !== "" ? H + "(" + fe + ")" : H;
    }
    function F(h) {
      return h.displayName || "Context";
    }
    function D(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case s:
            var M = h;
            return F(M) + ".Consumer";
          case a:
            var H = h;
            return F(H._context) + ".Provider";
          case l:
            return R(h, h.render, "ForwardRef");
          case d:
            var oe = h.displayName || null;
            return oe !== null ? oe : D(h.type) || "Memo";
          case m: {
            var fe = h, pe = fe._payload, se = fe._init;
            try {
              return D(se(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, K = 0, ie, de, ge, le, $, V, te;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function P() {
      {
        if (K === 0) {
          ie = console.log, de = console.info, ge = console.warn, le = console.error, $ = console.group, V = console.groupCollapsed, te = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        K++;
      }
    }
    function N() {
      {
        if (K--, K === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, h, {
              value: ie
            }),
            info: Q({}, h, {
              value: de
            }),
            warn: Q({}, h, {
              value: ge
            }),
            error: Q({}, h, {
              value: le
            }),
            group: Q({}, h, {
              value: $
            }),
            groupCollapsed: Q({}, h, {
              value: V
            }),
            groupEnd: Q({}, h, {
              value: te
            })
          });
        }
        K < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = w.ReactCurrentDispatcher, O;
    function L(h, M, H) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (fe) {
            var oe = fe.stack.trim().match(/\n( *(at )?)/);
            O = oe && oe[1] || "";
          }
        return `
` + O + h;
      }
    }
    var q = !1, G;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      G = new ce();
    }
    function W(h, M) {
      if (!h || q)
        return "";
      {
        var H = G.get(h);
        if (H !== void 0)
          return H;
      }
      var oe;
      q = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = Y.current, Y.current = null, P();
      try {
        if (M) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (je) {
              oe = je;
            }
            Reflect.construct(h, [], se);
          } else {
            try {
              se.call();
            } catch (je) {
              oe = je;
            }
            h.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (je) {
            oe = je;
          }
          h();
        }
      } catch (je) {
        if (je && oe && typeof je.stack == "string") {
          for (var ae = je.stack.split(`
`), Ve = oe.stack.split(`
`), Oe = ae.length - 1, $e = Ve.length - 1; Oe >= 1 && $e >= 0 && ae[Oe] !== Ve[$e]; )
            $e--;
          for (; Oe >= 1 && $e >= 0; Oe--, $e--)
            if (ae[Oe] !== Ve[$e]) {
              if (Oe !== 1 || $e !== 1)
                do
                  if (Oe--, $e--, $e < 0 || ae[Oe] !== Ve[$e]) {
                    var Qe = `
` + ae[Oe].replace(" at new ", " at ");
                    return h.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", h.displayName)), typeof h == "function" && G.set(h, Qe), Qe;
                  }
                while (Oe >= 1 && $e >= 0);
              break;
            }
        }
      } finally {
        q = !1, Y.current = pe, N(), Error.prepareStackTrace = fe;
      }
      var At = h ? h.displayName || h.name : "", rt = At ? L(At) : "";
      return typeof h == "function" && G.set(h, rt), rt;
    }
    function Ce(h, M, H) {
      return W(h, !1);
    }
    function U(h) {
      var M = h.prototype;
      return !!(M && M.isReactComponent);
    }
    function Re(h, M, H) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return W(h, U(h));
      if (typeof h == "string")
        return L(h);
      switch (h) {
        case u:
          return L("Suspense");
        case f:
          return L("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            return Ce(h.render);
          case d:
            return Re(h.type, M, H);
          case m: {
            var oe = h, fe = oe._payload, pe = oe._init;
            try {
              return Re(pe(fe), M, H);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Ye = {}, We = w.ReactDebugCurrentFrame;
    function ke(h) {
      if (h) {
        var M = h._owner, H = Re(h.type, h._source, M ? M.type : null);
        We.setExtraStackFrame(H);
      } else
        We.setExtraStackFrame(null);
    }
    function Tt(h, M, H, oe, fe) {
      {
        var pe = Function.call.bind(Ie);
        for (var se in h)
          if (pe(h, se)) {
            var ae = void 0;
            try {
              if (typeof h[se] != "function") {
                var Ve = Error((oe || "React class") + ": " + H + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ve.name = "Invariant Violation", Ve;
              }
              ae = h[se](M, se, oe, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              ae = Oe;
            }
            ae && !(ae instanceof Error) && (ke(fe), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", H, se, typeof ae), ke(null)), ae instanceof Error && !(ae.message in Ye) && (Ye[ae.message] = !0, ke(fe), T("Failed %s type: %s", H, ae.message), ke(null));
          }
      }
    }
    var st = Array.isArray;
    function ct(h) {
      return st(h);
    }
    function ne(h) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, H = M && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return H;
      }
    }
    function Yt(h) {
      try {
        return Vt(h), !1;
      } catch {
        return !0;
      }
    }
    function Vt(h) {
      return "" + h;
    }
    function Ht(h) {
      if (Yt(h))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ne(h)), Vt(h);
    }
    var lt = w.ReactCurrentOwner, ro = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, xr, Qt;
    Qt = {};
    function Dt(h) {
      if (Ie.call(h, "ref")) {
        var M = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function tn(h) {
      if (Ie.call(h, "key")) {
        var M = Object.getOwnPropertyDescriptor(h, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function rn(h, M) {
      if (typeof h.ref == "string" && lt.current && M && lt.current.stateNode !== M) {
        var H = D(lt.current.type);
        Qt[H] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(lt.current.type), h.ref), Qt[H] = !0);
      }
    }
    function no(h, M) {
      {
        var H = function() {
          mt || (mt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        H.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function ze(h, M) {
      {
        var H = function() {
          xr || (xr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        H.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var nn = function(h, M, H, oe, fe, pe, se) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: M,
        ref: H,
        props: se,
        // Record the component responsible for creating this element.
        _owner: pe
      };
      return ae._store = {}, Object.defineProperty(ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function Ze(h, M, H, oe, fe) {
      {
        var pe, se = {}, ae = null, Ve = null;
        H !== void 0 && (Ht(H), ae = "" + H), tn(M) && (Ht(M.key), ae = "" + M.key), Dt(M) && (Ve = M.ref, rn(M, fe));
        for (pe in M)
          Ie.call(M, pe) && !ro.hasOwnProperty(pe) && (se[pe] = M[pe]);
        if (h && h.defaultProps) {
          var Oe = h.defaultProps;
          for (pe in Oe)
            se[pe] === void 0 && (se[pe] = Oe[pe]);
        }
        if (ae || Ve) {
          var $e = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ae && no(se, $e), Ve && ze(se, $e);
        }
        return nn(h, ae, Ve, fe, oe, lt.current, se);
      }
    }
    var gt = w.ReactCurrentOwner, on = w.ReactDebugCurrentFrame;
    function Rt(h) {
      if (h) {
        var M = h._owner, H = Re(h.type, h._source, M ? M.type : null);
        on.setExtraStackFrame(H);
      } else
        on.setExtraStackFrame(null);
    }
    var Cr;
    Cr = !1;
    function Sr(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function an() {
      {
        if (gt.current) {
          var h = D(gt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Ut(h) {
      return "";
    }
    var kt = {};
    function sn(h) {
      {
        var M = an();
        if (!M) {
          var H = typeof h == "string" ? h : h.displayName || h.name;
          H && (M = `

Check the top-level render call using <` + H + ">.");
        }
        return M;
      }
    }
    function Ot(h, M) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var H = sn(M);
        if (kt[H])
          return;
        kt[H] = !0;
        var oe = "";
        h && h._owner && h._owner !== gt.current && (oe = " It was passed a child from " + D(h._owner.type) + "."), Rt(h), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, oe), Rt(null);
      }
    }
    function Jt(h, M) {
      {
        if (typeof h != "object")
          return;
        if (ct(h))
          for (var H = 0; H < h.length; H++) {
            var oe = h[H];
            Sr(oe) && Ot(oe, M);
          }
        else if (Sr(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var fe = g(h);
          if (typeof fe == "function" && fe !== h.entries)
            for (var pe = fe.call(h), se; !(se = pe.next()).done; )
              Sr(se.value) && Ot(se.value, M);
        }
      }
    }
    function Ke(h) {
      {
        var M = h.type;
        if (M == null || typeof M == "string")
          return;
        var H;
        if (typeof M == "function")
          H = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === d))
          H = M.propTypes;
        else
          return;
        if (H) {
          var oe = D(M);
          Tt(H, h.props, "prop", oe, h);
        } else if (M.PropTypes !== void 0 && !Cr) {
          Cr = !0;
          var fe = D(M);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function er(h) {
      {
        for (var M = Object.keys(h.props), H = 0; H < M.length; H++) {
          var oe = M[H];
          if (oe !== "children" && oe !== "key") {
            Rt(h), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), Rt(null);
            break;
          }
        }
        h.ref !== null && (Rt(h), T("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
      }
    }
    var bt = {};
    function X(h, M, H, oe, fe, pe) {
      {
        var se = c(h);
        if (!se) {
          var ae = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = Ut();
          Ve ? ae += Ve : ae += an();
          var Oe;
          h === null ? Oe = "null" : ct(h) ? Oe = "array" : h !== void 0 && h.$$typeof === t ? (Oe = "<" + (D(h.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof h, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, ae);
        }
        var $e = Ze(h, M, H, fe, pe);
        if ($e == null)
          return $e;
        if (se) {
          var Qe = M.children;
          if (Qe !== void 0)
            if (oe)
              if (ct(Qe)) {
                for (var At = 0; At < Qe.length; At++)
                  Jt(Qe[At], h);
                Object.freeze && Object.freeze(Qe);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jt(Qe, h);
        }
        if (Ie.call(M, "key")) {
          var rt = D(h), je = Object.keys(M).filter(function(un) {
            return un !== "key";
          }), Gt = je.length > 0 ? "{key: someKey, " + je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!bt[rt + Gt]) {
            var oo = je.length > 0 ? "{" + je.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gt, rt, oo, rt), bt[rt + Gt] = !0;
          }
        }
        return h === n ? er($e) : Ke($e), $e;
      }
    }
    function Mt(h, M, H) {
      return X(h, M, H, !0);
    }
    function Er(h, M, H) {
      return X(h, M, H, !1);
    }
    var cn = Er, ln = Mt;
    Pr.Fragment = n, Pr.jsx = cn, Pr.jsxs = ln;
  }()), Pr;
}
process.env.NODE_ENV === "production" ? $o.exports = Sc() : $o.exports = Ec();
var z = $o.exports;
function Da(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Da(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ne() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Da(e)) && (n && (n += " "), n += t);
  return n;
}
function ft(e, t, r) {
  const n = typeof e.colSpan == "function" ? e.colSpan(r) : 1;
  if (Number.isInteger(n) && n > 1 && (!e.frozen || e.idx + n - 1 <= t))
    return n;
}
function Tc(e) {
  e.stopPropagation();
}
function xn(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function Nr(e) {
  let t = !1;
  const r = {
    ...e,
    preventGridDefault() {
      t = !0;
    },
    isGridDefaultPrevented() {
      return t;
    }
  };
  return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), r;
}
const Rc = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function kn(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function kc(e) {
  return kn(e) && e.keyCode !== 86 ? !1 : !Rc.has(e.key);
}
function Oc({
  key: e,
  target: t
}) {
  var r;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((r = t.closest(".rdg-editor-container")) == null ? void 0 : r.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const Pc = "mlln6zg7-0-0-beta-47";
function Ic(e) {
  return e.map(({
    key: t,
    idx: r,
    minWidth: n,
    maxWidth: o
  }) => /* @__PURE__ */ z.jsx("div", {
    className: Pc,
    style: {
      gridColumnStart: r + 1,
      minWidth: n,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function $c({
  selectedPosition: e,
  columns: t,
  rows: r
}) {
  const n = t[e.idx], o = r[e.rowIdx];
  return Ma(n, o);
}
function Ma(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Dc({
  rows: e,
  topSummaryRows: t,
  bottomSummaryRows: r,
  rowIdx: n,
  mainHeaderRowIdx: o,
  lastFrozenColumnIndex: i,
  column: a
}) {
  const s = (t == null ? void 0 : t.length) ?? 0;
  if (n === o)
    return ft(a, i, {
      type: "HEADER"
    });
  if (t && n > o && n <= s + o)
    return ft(a, i, {
      type: "SUMMARY",
      row: t[n + s]
    });
  if (n >= 0 && n < e.length) {
    const l = e[n];
    return ft(a, i, {
      type: "ROW",
      row: l
    });
  }
  if (r)
    return ft(a, i, {
      type: "SUMMARY",
      row: r[n - e.length]
    });
}
function Mc({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: r,
  columns: n,
  colSpanColumns: o,
  rows: i,
  topSummaryRows: a,
  bottomSummaryRows: s,
  minRowIdx: l,
  mainHeaderRowIdx: u,
  maxRowIdx: f,
  currentPosition: {
    idx: d,
    rowIdx: m
  },
  nextPosition: y,
  lastFrozenColumnIndex: v,
  isCellWithinBounds: p
}) {
  let {
    idx: g,
    rowIdx: w
  } = y;
  const T = n.length, S = (I) => {
    for (const E of o) {
      const _ = E.idx;
      if (_ > g) break;
      const B = Dc({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: w,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: v,
        column: E
      });
      if (B && g > _ && g < B + _) {
        g = _ + (I ? B : 0);
        break;
      }
    }
  }, x = (I) => I.level + u, b = () => {
    if (t) {
      let E = n[g].parent;
      for (; E !== void 0; ) {
        const _ = x(E);
        if (w === _) {
          g = E.idx + E.colSpan;
          break;
        }
        E = E.parent;
      }
    } else if (e) {
      let E = n[g].parent, _ = !1;
      for (; E !== void 0; ) {
        const B = x(E);
        if (w >= B) {
          g = E.idx, w = B, _ = !0;
          break;
        }
        E = E.parent;
      }
      _ || (g = d, w = m);
    }
  };
  if (p(y) && (S(t), w < u && b()), r === "CHANGE_ROW" && (g === T ? w === f || (g = 0, w += 1) : g === -1 && (w === l || (w -= 1, g = T - 1), S(!1))), w < u) {
    let E = n[g].parent;
    const _ = w;
    for (w = u; E !== void 0; ) {
      const B = x(E);
      B >= _ && (w = B, g = E.idx), E = E.parent;
    }
  }
  return {
    idx: g,
    rowIdx: w
  };
}
function Ac({
  maxColIdx: e,
  minRowIdx: t,
  maxRowIdx: r,
  selectedPosition: {
    rowIdx: n,
    idx: o
  },
  shiftKey: i
}) {
  return i ? o === 0 && n === t : o === e && n === r;
}
const _c = "cj343x07-0-0-beta-47", Aa = `rdg-cell ${_c}`, Nc = "csofj7r7-0-0-beta-47", Fc = `rdg-cell-frozen ${Nc}`;
function Vo(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function _a(e, t, r) {
  const n = t + 1, o = `calc(${r - 1} * var(--rdg-header-row-height))`;
  return e.parent === void 0 ? {
    insetBlockStart: 0,
    gridRowStart: 1,
    gridRowEnd: n,
    paddingBlockStart: o
  } : {
    insetBlockStart: `calc(${t - r} * var(--rdg-header-row-height))`,
    gridRowStart: n - r,
    gridRowEnd: n,
    paddingBlockStart: o
  };
}
function br(e, t = 1) {
  const r = e.idx + 1;
  return {
    gridColumnStart: r,
    gridColumnEnd: r + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function qr(e, ...t) {
  return Ne(Aa, ...t, e.frozen && Fc);
}
const {
  min: Wr,
  max: On,
  floor: Ei,
  sign: jc,
  abs: Lc
} = Math;
function Fr(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Na(e, {
  minWidth: t,
  maxWidth: r
}) {
  return e = On(e, t), typeof r == "number" && r >= t ? Wr(e, r) : e;
}
function Fa(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const Wc = "c1bn88vv7-0-0-beta-47", zc = `rdg-checkbox-input ${Wc}`;
function Bc({
  onChange: e,
  indeterminate: t,
  ...r
}) {
  function n(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ z.jsx("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: zc,
    onChange: n,
    ...r
  });
}
const Yc = "g1s9ylgp7-0-0-beta-47", Vc = `rdg-group-cell-content ${Yc}`, Hc = "cz54e4y7-0-0-beta-47", Uc = `rdg-caret ${Hc}`;
function Gc(e) {
  return /* @__PURE__ */ z.jsx(qc, {
    ...e
  });
}
function qc({
  groupKey: e,
  isExpanded: t,
  tabIndex: r,
  toggleGroup: n
}) {
  function o({
    key: a
  }) {
    a === "Enter" && n();
  }
  const i = t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7";
  return /* @__PURE__ */ z.jsxs("span", {
    className: Vc,
    tabIndex: r,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ z.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Uc,
      "aria-hidden": !0,
      children: /* @__PURE__ */ z.jsx("path", {
        d: i
      })
    })]
  });
}
function Kc(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const ja = /* @__PURE__ */ Gr(void 0), Xc = ja.Provider;
function jn() {
  return fr(ja);
}
function Ho({
  value: e,
  tabIndex: t,
  indeterminate: r,
  disabled: n,
  onChange: o,
  "aria-label": i,
  "aria-labelledby": a
}) {
  const s = jn().renderCheckbox;
  return s({
    "aria-label": i,
    "aria-labelledby": a,
    tabIndex: t,
    indeterminate: r,
    disabled: n,
    checked: e,
    onChange: o
  });
}
const La = /* @__PURE__ */ Gr(void 0), Wa = La.Provider, za = /* @__PURE__ */ Gr(void 0), Zc = za.Provider;
function Ba() {
  const e = fr(La), t = fr(za);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Ya = /* @__PURE__ */ Gr(void 0), Qc = Ya.Provider, Va = /* @__PURE__ */ Gr(void 0), Jc = Va.Provider;
function el() {
  const e = fr(Ya), t = fr(Va);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const pr = "rdg-select-column";
function tl(e) {
  const {
    isIndeterminate: t,
    isRowSelected: r,
    onRowSelectionChange: n
  } = el();
  return /* @__PURE__ */ z.jsx(Ho, {
    "aria-label": "Select All",
    tabIndex: e.tabIndex,
    indeterminate: t,
    value: r,
    onChange: (o) => {
      n({
        checked: t ? !1 : o
      });
    }
  });
}
function rl(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: r,
    onRowSelectionChange: n
  } = Ba();
  return /* @__PURE__ */ z.jsx(Ho, {
    "aria-label": "Select",
    tabIndex: e.tabIndex,
    disabled: t,
    value: r,
    onChange: (o, i) => {
      n({
        row: e.row,
        checked: o,
        isShiftClick: i
      });
    }
  });
}
function nl(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: r
  } = Ba();
  return /* @__PURE__ */ z.jsx(Ho, {
    "aria-label": "Select Group",
    tabIndex: e.tabIndex,
    value: t,
    onChange: (n) => {
      r({
        row: e.row,
        checked: n,
        isShiftClick: !1
      });
    }
  });
}
const ol = {
  key: pr,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ z.jsx(tl, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ z.jsx(rl, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ z.jsx(nl, {
      ...e
    });
  }
}, il = "auto", al = 50;
function sl({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: r,
  viewportWidth: n,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? il, s = (t == null ? void 0 : t.minWidth) ?? al, l = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? Kc, f = (t == null ? void 0 : t.sortable) ?? !1, d = (t == null ? void 0 : t.resizable) ?? !1, m = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: y,
    colSpanColumns: v,
    lastFrozenColumnIndex: p,
    headerRowsCount: g
  } = Be(() => {
    let E = -1, _ = 1;
    const B = [];
    c(e, 1);
    function c(F, D, Q) {
      for (const K of F) {
        if ("children" in K) {
          const ge = {
            name: K.name,
            parent: Q,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: K.headerCellClass
          };
          c(K.children, D + 1, ge);
          continue;
        }
        const ie = K.frozen ?? !1, de = {
          ...K,
          parent: Q,
          idx: 0,
          level: 0,
          frozen: ie,
          width: K.width ?? a,
          minWidth: K.minWidth ?? s,
          maxWidth: K.maxWidth ?? l,
          sortable: K.sortable ?? f,
          resizable: K.resizable ?? d,
          draggable: K.draggable ?? m,
          renderCell: K.renderCell ?? u
        };
        B.push(de), ie && E++, D > _ && (_ = D);
      }
    }
    B.sort(({
      key: F,
      frozen: D
    }, {
      key: Q,
      frozen: K
    }) => F === pr ? -1 : Q === pr ? 1 : D ? K ? 0 : -1 : K ? 1 : 0);
    const R = [];
    return B.forEach((F, D) => {
      F.idx = D, Ha(F, D, 0), F.colSpan != null && R.push(F);
    }), {
      columns: B,
      colSpanColumns: R,
      lastFrozenColumnIndex: E,
      headerRowsCount: _
    };
  }, [e, a, s, l, u, d, f, m]), {
    templateColumns: w,
    layoutCssVars: T,
    totalFrozenColumnWidth: S,
    columnMetrics: x
  } = Be(() => {
    const E = /* @__PURE__ */ new Map();
    let _ = 0, B = 0;
    const c = [];
    for (const F of y) {
      let D = r(F);
      typeof D == "number" ? D = Na(D, F) : D = F.minWidth, c.push(`${D}px`), E.set(F, {
        width: D,
        left: _
      }), _ += D;
    }
    if (p !== -1) {
      const F = E.get(y[p]);
      B = F.left + F.width;
    }
    const R = {};
    for (let F = 0; F <= p; F++) {
      const D = y[F];
      R[`--rdg-frozen-left-${D.idx}`] = `${E.get(D).left}px`;
    }
    return {
      templateColumns: c,
      layoutCssVars: R,
      totalFrozenColumnWidth: B,
      columnMetrics: E
    };
  }, [r, y, p]), [b, I] = Be(() => {
    if (!i)
      return [0, y.length - 1];
    const E = o + S, _ = o + n, B = y.length - 1, c = Wr(p + 1, B);
    if (E >= _)
      return [c, c];
    let R = c;
    for (; R < B; ) {
      const {
        left: K,
        width: ie
      } = x.get(y[R]);
      if (K + ie > E)
        break;
      R++;
    }
    let F = R;
    for (; F < B; ) {
      const {
        left: K,
        width: ie
      } = x.get(y[F]);
      if (K + ie >= _)
        break;
      F++;
    }
    const D = On(c, R - 1), Q = Wr(B, F + 1);
    return [D, Q];
  }, [x, y, p, o, S, n, i]);
  return {
    columns: y,
    colSpanColumns: v,
    colOverscanStartIdx: b,
    colOverscanEndIdx: I,
    templateColumns: w,
    layoutCssVars: T,
    headerRowsCount: g,
    lastFrozenColumnIndex: p,
    totalFrozenColumnWidth: S
  };
}
function Ha(e, t, r) {
  if (r < e.level && (e.level = r), e.parent !== void 0) {
    const {
      parent: n
    } = e;
    n.idx === -1 && (n.idx = t), n.colSpan += 1, Ha(n, t, r - 1);
  }
}
const hr = typeof window > "u" ? Fn : vc;
function cl(e, t, r, n, o, i, a, s, l, u) {
  const f = St(o), d = e.length === t.length, m = d && o !== f.current, y = [...r], v = [];
  for (const {
    key: T,
    idx: S,
    width: x
  } of t)
    typeof x == "string" && (m || !a.has(T)) && !i.has(T) && (y[S] = x, v.push(T));
  const p = y.join(" ");
  hr(() => {
    f.current = o, g(v);
  });
  function g(T) {
    T.length !== 0 && l((S) => {
      const x = new Map(S);
      let b = !1;
      for (const I of T) {
        const E = Ti(n, I);
        b || (b = E !== S.get(I)), E === void 0 ? x.delete(I) : x.set(I, E);
      }
      return b ? x : S;
    });
  }
  function w(T, S) {
    const {
      key: x
    } = T, b = [...r], I = [];
    for (const {
      key: _,
      idx: B,
      width: c
    } of t)
      if (x === _) {
        const R = typeof S == "number" ? `${S}px` : S;
        b[B] = R;
      } else d && typeof c == "string" && !i.has(_) && (b[B] = c, I.push(_));
    n.current.style.gridTemplateColumns = b.join(" ");
    const E = typeof S == "number" ? S : Ti(n, x);
    Rn(() => {
      s((_) => {
        const B = new Map(_);
        return B.set(x, E), B;
      }), g(I);
    }), u == null || u(T.idx, E);
  }
  return {
    gridTemplateColumns: p,
    handleColumnResize: w
  };
}
function Ti(e, t) {
  var o;
  const r = `[data-measuring-cell-key="${CSS.escape(t)}"]`, n = (o = e.current) == null ? void 0 : o.querySelector(r);
  return n == null ? void 0 : n.getBoundingClientRect().width;
}
function ll() {
  const e = St(null), [t, r] = Ge(1), [n, o] = Ge(1), [i, a] = Ge(0);
  return hr(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: l,
      clientHeight: u,
      offsetWidth: f,
      offsetHeight: d
    } = e.current, {
      width: m,
      height: y
    } = e.current.getBoundingClientRect(), v = d - u, p = m - f + l, g = y - v;
    r(p), o(g), a(v);
    const w = new s((T) => {
      const S = T[0].contentBoxSize[0], {
        clientHeight: x,
        offsetHeight: b
      } = e.current;
      Rn(() => {
        r(S.inlineSize), o(S.blockSize), a(b - x);
      });
    });
    return w.observe(e.current), () => {
      w.disconnect();
    };
  }, []), [e, t, n, i];
}
function et(e) {
  const t = St(e);
  Fn(() => {
    t.current = e;
  });
  const r = Xt((...n) => {
    t.current(...n);
  }, []);
  return e && r;
}
function Kr(e) {
  const [t, r] = Ge(!1);
  t && !e && r(!1);
  function n(i) {
    i.target !== i.currentTarget && r(!0);
  }
  return {
    tabIndex: e && !t ? 0 : -1,
    childTabIndex: e ? 0 : -1,
    onFocus: e ? n : void 0
  };
}
function ul({
  columns: e,
  colSpanColumns: t,
  rows: r,
  topSummaryRows: n,
  bottomSummaryRows: o,
  colOverscanStartIdx: i,
  colOverscanEndIdx: a,
  lastFrozenColumnIndex: s,
  rowOverscanStartIdx: l,
  rowOverscanEndIdx: u
}) {
  const f = Be(() => {
    if (i === 0) return 0;
    let d = i;
    const m = (y, v) => v !== void 0 && y + v > i ? (d = y, !0) : !1;
    for (const y of t) {
      const v = y.idx;
      if (v >= d || m(v, ft(y, s, {
        type: "HEADER"
      })))
        break;
      for (let p = l; p <= u; p++) {
        const g = r[p];
        if (m(v, ft(y, s, {
          type: "ROW",
          row: g
        })))
          break;
      }
      if (n != null) {
        for (const p of n)
          if (m(v, ft(y, s, {
            type: "SUMMARY",
            row: p
          })))
            break;
      }
      if (o != null) {
        for (const p of o)
          if (m(v, ft(y, s, {
            type: "SUMMARY",
            row: p
          })))
            break;
      }
    }
    return d;
  }, [l, u, r, n, o, i, s, t]);
  return Be(() => {
    const d = [];
    for (let m = 0; m <= a; m++) {
      const y = e[m];
      m < f && !y.frozen || d.push(y);
    }
    return d;
  }, [f, a, e]);
}
function dl({
  rows: e,
  rowHeight: t,
  clientHeight: r,
  scrollTop: n,
  enableVirtualization: o
}) {
  const {
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: l,
    findRowIdx: u
  } = Be(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (g) => g * t,
        getRowHeight: () => t,
        findRowIdx: (g) => Ei(g / t)
      };
    let m = 0, y = " ";
    const v = e.map((g) => {
      const w = t(g), T = {
        top: m,
        height: w
      };
      return y += `${w}px `, m += w, T;
    }), p = (g) => On(0, Wr(e.length - 1, g));
    return {
      totalRowHeight: m,
      gridTemplateRows: y,
      getRowTop: (g) => v[p(g)].top,
      getRowHeight: (g) => v[p(g)].height,
      findRowIdx(g) {
        let w = 0, T = v.length - 1;
        for (; w <= T; ) {
          const S = w + Ei((T - w) / 2), x = v[S].top;
          if (x === g) return S;
          if (x < g ? w = S + 1 : x > g && (T = S - 1), w > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let f = 0, d = e.length - 1;
  if (o) {
    const y = u(n), v = u(n + r);
    f = On(0, y - 4), d = Wr(e.length - 1, v + 4);
  }
  return {
    rowOverscanStartIdx: f,
    rowOverscanEndIdx: d,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: l,
    findRowIdx: u
  };
}
const fl = "c1w9bbhr7-0-0-beta-47", pl = "c1creorc7-0-0-beta-47", hl = `rdg-cell-drag-handle ${fl}`;
function ml({
  gridRowStart: e,
  rows: t,
  column: r,
  columnWidth: n,
  maxColIdx: o,
  isLastRow: i,
  selectedPosition: a,
  latestDraggedOverRowIdx: s,
  isCellEditable: l,
  onRowsChange: u,
  onFill: f,
  onClick: d,
  setDragging: m,
  setDraggedOverRowIdx: y
}) {
  const {
    idx: v,
    rowIdx: p
  } = a;
  function g(b) {
    if (b.preventDefault(), b.buttons !== 1) return;
    m(!0), window.addEventListener("mouseover", I), window.addEventListener("mouseup", E);
    function I(_) {
      _.buttons !== 1 && E();
    }
    function E() {
      window.removeEventListener("mouseover", I), window.removeEventListener("mouseup", E), m(!1), w();
    }
  }
  function w() {
    const b = s.current;
    if (b === void 0) return;
    const I = p < b ? p + 1 : b, E = p < b ? b + 1 : p;
    S(I, E), y(void 0);
  }
  function T(b) {
    b.stopPropagation(), S(p + 1, t.length);
  }
  function S(b, I) {
    const E = t[p], _ = [...t], B = [];
    for (let c = b; c < I; c++)
      if (l({
        rowIdx: c,
        idx: v
      })) {
        const R = f({
          columnKey: r.key,
          sourceRow: E,
          targetRow: t[c]
        });
        R !== t[c] && (_[c] = R, B.push(c));
      }
    B.length > 0 && (u == null || u(_, {
      indexes: B,
      column: r
    }));
  }
  function x() {
    var c;
    const b = ((c = r.colSpan) == null ? void 0 : c.call(r, {
      type: "ROW",
      row: t[p]
    })) ?? 1, {
      insetInlineStart: I,
      ...E
    } = br(r, b), _ = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", B = r.idx + b - 1 === o;
    return {
      ...E,
      gridRowStart: e,
      marginInlineEnd: B ? void 0 : _,
      marginBlockEnd: i ? void 0 : _,
      insetInlineStart: I ? `calc(${I} + ${n}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ z.jsx("div", {
    style: x(),
    className: Ne(hl, r.frozen && pl),
    onClick: d,
    onMouseDown: g,
    onDoubleClick: T
  });
}
const gl = "cis5rrm7-0-0-beta-47";
function yl({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  onRowChange: o,
  closeEditor: i,
  onKeyDown: a,
  navigate: s
}) {
  var w, T, S;
  const l = St(void 0), u = ((w = e.editorOptions) == null ? void 0 : w.commitOnOutsideClick) !== !1, f = et(() => {
    y(!0, !1);
  });
  Fn(() => {
    if (!u) return;
    function x() {
      l.current = requestAnimationFrame(f);
    }
    return addEventListener("mousedown", x, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", x, {
        capture: !0
      }), d();
    };
  }, [u, f]);
  function d() {
    cancelAnimationFrame(l.current);
  }
  function m(x) {
    if (a) {
      const b = Nr(x);
      if (a({
        mode: "EDIT",
        row: r,
        column: e,
        rowIdx: n,
        navigate() {
          s(x);
        },
        onClose: y
      }, b), b.isGridDefaultPrevented()) return;
    }
    x.key === "Escape" ? y() : x.key === "Enter" ? y(!0) : Oc(x) && s(x);
  }
  function y(x = !1, b = !0) {
    x ? o(r, !0, b) : i(b);
  }
  function v(x, b = !1) {
    o(x, b, b);
  }
  const {
    cellClass: p
  } = e, g = qr(e, "rdg-editor-container", typeof p == "function" ? p(r) : p, !((T = e.editorOptions) != null && T.displayCellContent) && gl);
  return /* @__PURE__ */ z.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: g,
    style: br(e, t),
    onKeyDown: m,
    onMouseDownCapture: d,
    children: e.renderEditCell != null && /* @__PURE__ */ z.jsxs(z.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: r,
        rowIdx: n,
        onRowChange: v,
        onClose: y
      }), ((S = e.editorOptions) == null ? void 0 : S.displayCellContent) && e.renderCell({
        column: e,
        row: r,
        rowIdx: n,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: v
      })]
    })
  });
}
function bl({
  column: e,
  rowIdx: t,
  isCellSelected: r,
  selectCell: n
}) {
  const {
    tabIndex: o,
    onFocus: i
  } = Kr(r), {
    colSpan: a
  } = e, s = Fa(e, t), l = e.idx + 1;
  function u() {
    n({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ z.jsx("div", {
    role: "columnheader",
    "aria-colindex": l,
    "aria-colspan": a,
    "aria-rowspan": s,
    "aria-selected": r,
    tabIndex: o,
    className: Ne(Aa, e.headerCellClass),
    style: {
      ..._a(e, t, s),
      gridColumnStart: l,
      gridColumnEnd: l + a
    },
    onFocus: i,
    onClick: u,
    children: e.name
  });
}
const vl = "h44jtk67-0-0-beta-47", wl = "hcgkhxz7-0-0-beta-47", xl = `rdg-header-sort-name ${wl}`;
function Cl({
  column: e,
  sortDirection: t,
  priority: r
}) {
  return e.sortable ? /* @__PURE__ */ z.jsx(Sl, {
    sortDirection: t,
    priority: r,
    children: e.name
  }) : e.name;
}
function Sl({
  sortDirection: e,
  priority: t,
  children: r
}) {
  const n = jn().renderSortStatus;
  return /* @__PURE__ */ z.jsxs("span", {
    className: vl,
    children: [/* @__PURE__ */ z.jsx("span", {
      className: xl,
      children: r
    }), /* @__PURE__ */ z.jsx("span", {
      children: n({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const El = "c6l2wv17-0-0-beta-47", Tl = "c1kqdw7y7-0-0-beta-47", Rl = `rdg-cell-resizable ${Tl}`, kl = "r1y6ywlx7-0-0-beta-47", Ol = "rdg-cell-draggable", Pl = "c1bezg5o7-0-0-beta-47", Il = `rdg-cell-dragging ${Pl}`, $l = "c1vc96037-0-0-beta-47", Dl = `rdg-cell-drag-over ${$l}`;
function Ml({
  column: e,
  colSpan: t,
  rowIdx: r,
  isCellSelected: n,
  onColumnResize: o,
  onColumnsReorder: i,
  sortColumns: a,
  onSortColumnsChange: s,
  selectCell: l,
  shouldFocusGrid: u,
  direction: f,
  dragDropKey: d
}) {
  const [m, y] = Ge(!1), [v, p] = Ge(!1), g = f === "rtl", w = Fa(e, r), {
    tabIndex: T,
    childTabIndex: S,
    onFocus: x
  } = Kr(n), b = a == null ? void 0 : a.findIndex((O) => O.columnKey === e.key), I = b !== void 0 && b > -1 ? a[b] : void 0, E = I == null ? void 0 : I.direction, _ = I !== void 0 && a.length > 1 ? b + 1 : void 0, B = E && !_ ? E === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: c,
    resizable: R,
    draggable: F
  } = e, D = qr(e, e.headerCellClass, c && El, R && Rl, F && Ol, m && Il, v && Dl), Q = e.renderHeaderCell ?? Cl;
  function K(O) {
    if (O.pointerType === "mouse" && O.buttons !== 1)
      return;
    O.preventDefault();
    const {
      currentTarget: L,
      pointerId: q
    } = O, G = L.parentElement, {
      right: ce,
      left: W
    } = G.getBoundingClientRect(), Ce = g ? O.clientX - W : ce - O.clientX;
    let U = !1;
    function Re(We) {
      const {
        width: ke,
        right: Tt,
        left: st
      } = G.getBoundingClientRect();
      let ct = g ? Tt + Ce - We.clientX : We.clientX + Ce - st;
      ct = Na(ct, e), ke > 0 && ct !== ke && o(e, ct);
    }
    function Ie() {
      U = !0, o(e, "max-content");
    }
    function Ye(We) {
      U || Re(We), L.removeEventListener("pointermove", Re), L.removeEventListener("dblclick", Ie), L.removeEventListener("lostpointercapture", Ye);
    }
    L.setPointerCapture(q), L.addEventListener("pointermove", Re), L.addEventListener("dblclick", Ie), L.addEventListener("lostpointercapture", Ye);
  }
  function ie(O) {
    if (s == null) return;
    const {
      sortDescendingFirst: L
    } = e;
    if (I === void 0) {
      const q = {
        columnKey: e.key,
        direction: L ? "DESC" : "ASC"
      };
      s(a && O ? [...a, q] : [q]);
    } else {
      let q;
      if ((L === !0 && E === "DESC" || L !== !0 && E === "ASC") && (q = {
        columnKey: e.key,
        direction: E === "ASC" ? "DESC" : "ASC"
      }), O) {
        const G = [...a];
        q ? G[b] = q : G.splice(b, 1), s(G);
      } else
        s(q ? [q] : []);
    }
  }
  function de(O) {
    l({
      idx: e.idx,
      rowIdx: r
    }), c && ie(O.ctrlKey || O.metaKey);
  }
  function ge(O) {
    x == null || x(O), u && l({
      idx: 0,
      rowIdx: r
    });
  }
  function le(O) {
    (O.key === " " || O.key === "Enter") && (O.preventDefault(), ie(O.ctrlKey || O.metaKey));
  }
  function $(O) {
    O.dataTransfer.setData(d, e.key), O.dataTransfer.dropEffect = "move", y(!0);
  }
  function V() {
    y(!1);
  }
  function te(O) {
    O.preventDefault(), O.dataTransfer.dropEffect = "move";
  }
  function re(O) {
    if (p(!1), O.dataTransfer.types.includes(d.toLowerCase())) {
      const L = O.dataTransfer.getData(d.toLowerCase());
      L !== e.key && (O.preventDefault(), i == null || i(L, e.key));
    }
  }
  function P(O) {
    Ri(O) && p(!0);
  }
  function N(O) {
    Ri(O) && p(!1);
  }
  let Y;
  return F && (Y = {
    draggable: !0,
    onDragStart: $,
    onDragEnd: V,
    onDragOver: te,
    onDragEnter: P,
    onDragLeave: N,
    onDrop: re
  }), /* @__PURE__ */ z.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": w,
    "aria-selected": n,
    "aria-sort": B,
    tabIndex: u ? 0 : T,
    className: D,
    style: {
      ..._a(e, r, w),
      ...br(e, t)
    },
    onFocus: ge,
    onClick: de,
    onKeyDown: c ? le : void 0,
    ...Y,
    children: [Q({
      column: e,
      sortDirection: E,
      priority: _,
      tabIndex: S
    }), R && /* @__PURE__ */ z.jsx("div", {
      className: kl,
      onClick: Tc,
      onPointerDown: K
    })]
  });
}
function Ri(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const Al = "r1upfr807-0-0-beta-47", Uo = `rdg-row ${Al}`, _l = "r190mhd37-0-0-beta-47", Ln = "rdg-row-selected", Nl = "r139qu9m7-0-0-beta-47", Fl = "rdg-top-summary-row", jl = "rdg-bottom-summary-row", Ll = "h10tskcx7-0-0-beta-47", Ua = `rdg-header-row ${Ll}`;
function Wl({
  rowIdx: e,
  columns: t,
  onColumnResize: r,
  onColumnsReorder: n,
  sortColumns: o,
  onSortColumnsChange: i,
  lastFrozenColumnIndex: a,
  selectedCellIdx: s,
  selectCell: l,
  shouldFocusGrid: u,
  direction: f
}) {
  const d = wc(), m = [];
  for (let y = 0; y < t.length; y++) {
    const v = t[y], p = ft(v, a, {
      type: "HEADER"
    });
    p !== void 0 && (y += p - 1), m.push(/* @__PURE__ */ z.jsx(Ml, {
      column: v,
      colSpan: p,
      rowIdx: e,
      isCellSelected: s === v.idx,
      onColumnResize: r,
      onColumnsReorder: n,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: l,
      shouldFocusGrid: u && y === 0,
      direction: f,
      dragDropKey: d
    }, v.key));
  }
  return /* @__PURE__ */ z.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: Ne(Ua, s === -1 && Ln),
    children: m
  });
}
const zl = /* @__PURE__ */ zt(Wl);
function Bl({
  rowIdx: e,
  level: t,
  columns: r,
  selectedCellIdx: n,
  selectCell: o
}) {
  const i = [], a = /* @__PURE__ */ new Set();
  for (const s of r) {
    let {
      parent: l
    } = s;
    if (l !== void 0) {
      for (; l.level > t && l.parent !== void 0; )
        l = l.parent;
      if (l.level === t && !a.has(l)) {
        a.add(l);
        const {
          idx: u
        } = l;
        i.push(/* @__PURE__ */ z.jsx(bl, {
          column: l,
          rowIdx: e,
          isCellSelected: n === u,
          selectCell: o
        }, u));
      }
    }
  }
  return /* @__PURE__ */ z.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: Ua,
    children: i
  });
}
const Yl = /* @__PURE__ */ zt(Bl), Vl = "c6ra8a37-0-0-beta-47", Hl = `rdg-cell-copied ${Vl}`, Ul = "cq910m07-0-0-beta-47", Gl = `rdg-cell-dragged-over ${Ul}`;
function ql({
  column: e,
  colSpan: t,
  isCellSelected: r,
  isCopied: n,
  isDraggedOver: o,
  row: i,
  rowIdx: a,
  onClick: s,
  onDoubleClick: l,
  onContextMenu: u,
  onRowChange: f,
  selectCell: d,
  ...m
}) {
  const {
    tabIndex: y,
    childTabIndex: v,
    onFocus: p
  } = Kr(r), {
    cellClass: g
  } = e, w = qr(e, typeof g == "function" ? g(i) : g, n && Hl, o && Gl), T = Ma(e, i);
  function S(_) {
    d({
      rowIdx: a,
      idx: e.idx
    }, _);
  }
  function x(_) {
    if (s) {
      const B = Nr(_);
      if (s({
        row: i,
        column: e,
        selectCell: S
      }, B), B.isGridDefaultPrevented()) return;
    }
    S();
  }
  function b(_) {
    if (u) {
      const B = Nr(_);
      if (u({
        row: i,
        column: e,
        selectCell: S
      }, B), B.isGridDefaultPrevented()) return;
    }
    S();
  }
  function I(_) {
    if (l) {
      const B = Nr(_);
      if (l({
        row: i,
        column: e,
        selectCell: S
      }, B), B.isGridDefaultPrevented()) return;
    }
    S(!0);
  }
  function E(_) {
    f(e, _);
  }
  return /* @__PURE__ */ z.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": r,
    "aria-readonly": !T || void 0,
    tabIndex: y,
    className: w,
    style: br(e, t),
    onClick: x,
    onDoubleClick: I,
    onContextMenu: b,
    onFocus: p,
    ...m,
    children: e.renderCell({
      column: e,
      row: i,
      rowIdx: a,
      isCellEditable: T,
      tabIndex: v,
      onRowChange: E
    })
  });
}
const Kl = /* @__PURE__ */ zt(ql);
function Xl({
  className: e,
  rowIdx: t,
  gridRowStart: r,
  selectedCellIdx: n,
  isRowSelectionDisabled: o,
  isRowSelected: i,
  copiedCellIdx: a,
  draggedOverCellIdx: s,
  lastFrozenColumnIndex: l,
  row: u,
  viewportColumns: f,
  selectedCellEditor: d,
  onCellClick: m,
  onCellDoubleClick: y,
  onCellContextMenu: v,
  rowClass: p,
  setDraggedOverRowIdx: g,
  onMouseEnter: w,
  onRowChange: T,
  selectCell: S,
  ...x
}, b) {
  const I = et((c, R) => {
    T(c, t, R);
  });
  function E(c) {
    g == null || g(t), w == null || w(c);
  }
  e = Ne(Uo, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, p == null ? void 0 : p(u, t), e, n === -1 && Ln);
  const _ = [];
  for (let c = 0; c < f.length; c++) {
    const R = f[c], {
      idx: F
    } = R, D = ft(R, l, {
      type: "ROW",
      row: u
    });
    D !== void 0 && (c += D - 1);
    const Q = n === F;
    Q && d ? _.push(d) : _.push(/* @__PURE__ */ z.jsx(Kl, {
      column: R,
      colSpan: D,
      row: u,
      rowIdx: t,
      isCopied: a === F,
      isDraggedOver: s === F,
      isCellSelected: Q,
      onClick: m,
      onDoubleClick: y,
      onContextMenu: v,
      onRowChange: I,
      selectCell: S
    }, R.key));
  }
  const B = Be(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ z.jsx(Wa, {
    value: B,
    children: /* @__PURE__ */ z.jsx("div", {
      role: "row",
      ref: b,
      className: e,
      onMouseEnter: E,
      style: Vo(r),
      ...x,
      children: _
    })
  });
}
const Ga = /* @__PURE__ */ zt(/* @__PURE__ */ Nn(Xl)), Bg = Ga;
function qa(e, t) {
  return /* @__PURE__ */ z.jsx(Ga, {
    ...t
  }, e);
}
function Zl({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: r,
  setScrollToCellPosition: n
}) {
  const o = St(null);
  return hr(() => {
    xn(o.current);
  }), hr(() => {
    function i() {
      n(null);
    }
    const a = new IntersectionObserver(i, {
      root: r,
      threshold: 1
    });
    return a.observe(o.current), () => {
      a.disconnect();
    };
  }, [r, n]), /* @__PURE__ */ z.jsx("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Ql = "a3ejtar7-0-0-beta-47", Jl = `rdg-sort-arrow ${Ql}`;
function eu({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ z.jsxs(z.Fragment, {
    children: [tu({
      sortDirection: e
    }), ru({
      priority: t
    })]
  });
}
function tu({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ z.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Jl,
    "aria-hidden": !0,
    children: /* @__PURE__ */ z.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function ru({
  priority: e
}) {
  return e;
}
const nu = "rnvodz57-0-0-beta-47", ou = `rdg ${nu}`, iu = "vlqv91k7-0-0-beta-47", au = `rdg-viewport-dragging ${iu}`, su = "f1lsfrzw7-0-0-beta-47", cu = "f1cte0lg7-0-0-beta-47", lu = "s8wc6fl7-0-0-beta-47";
function uu({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  isCellSelected: o,
  selectCell: i
}) {
  var m;
  const {
    tabIndex: a,
    childTabIndex: s,
    onFocus: l
  } = Kr(o), {
    summaryCellClass: u
  } = e, f = qr(e, lu, typeof u == "function" ? u(r) : u);
  function d() {
    i({
      rowIdx: n,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ z.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: a,
    className: f,
    style: br(e, t),
    onClick: d,
    onFocus: l,
    children: (m = e.renderSummaryCell) == null ? void 0 : m.call(e, {
      column: e,
      row: r,
      tabIndex: s
    })
  });
}
const du = /* @__PURE__ */ zt(uu), fu = "skuhp557-0-0-beta-47", pu = "tf8l5ub7-0-0-beta-47", hu = `rdg-summary-row ${fu}`;
function mu({
  rowIdx: e,
  gridRowStart: t,
  row: r,
  viewportColumns: n,
  top: o,
  bottom: i,
  lastFrozenColumnIndex: a,
  selectedCellIdx: s,
  isTop: l,
  selectCell: u,
  "aria-rowindex": f
}) {
  const d = [];
  for (let m = 0; m < n.length; m++) {
    const y = n[m], v = ft(y, a, {
      type: "SUMMARY",
      row: r
    });
    v !== void 0 && (m += v - 1);
    const p = s === y.idx;
    d.push(/* @__PURE__ */ z.jsx(du, {
      column: y,
      colSpan: v,
      row: r,
      rowIdx: e,
      isCellSelected: p,
      selectCell: u
    }, y.key));
  }
  return /* @__PURE__ */ z.jsx("div", {
    role: "row",
    "aria-rowindex": f,
    className: Ne(Uo, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, hu, l ? `${Fl} ${pu}` : jl, s === -1 && Ln),
    style: {
      ...Vo(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: d
  });
}
const ki = /* @__PURE__ */ zt(mu);
function gu(e, t) {
  const {
    columns: r,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: i,
    rowKeyGetter: a,
    onRowsChange: s,
    rowHeight: l,
    headerRowHeight: u,
    summaryRowHeight: f,
    selectedRows: d,
    isRowSelectionDisabled: m,
    onSelectedRowsChange: y,
    sortColumns: v,
    onSortColumnsChange: p,
    defaultColumnOptions: g,
    onCellClick: w,
    onCellDoubleClick: T,
    onCellContextMenu: S,
    onCellKeyDown: x,
    onSelectedCellChange: b,
    onScroll: I,
    onColumnResize: E,
    onColumnsReorder: _,
    onFill: B,
    onCopy: c,
    onPaste: R,
    enableVirtualization: F,
    renderers: D,
    className: Q,
    style: K,
    rowClass: ie,
    direction: de,
    role: ge,
    "aria-label": le,
    "aria-labelledby": $,
    "aria-describedby": V,
    "aria-rowcount": te,
    "data-testid": re
  } = e, P = jn(), N = ge ?? "grid", Y = l ?? 35, O = u ?? (typeof Y == "number" ? Y : 35), L = f ?? (typeof Y == "number" ? Y : 35), q = (D == null ? void 0 : D.renderRow) ?? (P == null ? void 0 : P.renderRow) ?? qa, G = (D == null ? void 0 : D.renderSortStatus) ?? (P == null ? void 0 : P.renderSortStatus) ?? eu, ce = (D == null ? void 0 : D.renderCheckbox) ?? (P == null ? void 0 : P.renderCheckbox) ?? Bc, W = (D == null ? void 0 : D.noRowsFallback) ?? (P == null ? void 0 : P.noRowsFallback), Ce = F ?? !0, U = de ?? "ltr", [Re, Ie] = Ge(0), [Ye, We] = Ge(0), [ke, Tt] = Ge(() => /* @__PURE__ */ new Map()), [st, ct] = Ge(() => /* @__PURE__ */ new Map()), [ne, Yt] = Ge(null), [Vt, Ht] = Ge(!1), [lt, ro] = Ge(void 0), [mt, xr] = Ge(null), Qt = Xt((A) => ke.get(A.key) ?? st.get(A.key) ?? A.width, [st, ke]), [Dt, tn, rn, no] = ll(), {
    columns: ze,
    colSpanColumns: nn,
    lastFrozenColumnIndex: Ze,
    headerRowsCount: gt,
    colOverscanStartIdx: on,
    colOverscanEndIdx: Rt,
    templateColumns: Cr,
    layoutCssVars: Sr,
    totalFrozenColumnWidth: an
  } = sl({
    rawColumns: r,
    defaultColumnOptions: g,
    getColumnWidth: Qt,
    scrollLeft: Ye,
    viewportWidth: tn,
    enableVirtualization: Ce
  }), Ut = (o == null ? void 0 : o.length) ?? 0, kt = (i == null ? void 0 : i.length) ?? 0, sn = Ut + kt, Ot = gt + Ut, Jt = gt - 1, Ke = -Ot, er = Ke + Jt, bt = n.length + kt - 1, [X, Mt] = Ge(() => ({
    idx: -1,
    rowIdx: Ke - 1,
    mode: "SELECT"
  })), Er = St(X), cn = St(lt), ln = St(-1), h = St(null), M = St(!1), H = N === "treegrid", oe = gt * O, fe = sn * L, pe = rn - oe - fe, se = d != null && y != null, ae = U === "rtl", Ve = ae ? "ArrowRight" : "ArrowLeft", Oe = ae ? "ArrowLeft" : "ArrowRight", $e = te ?? gt + n.length + sn, Qe = Be(() => ({
    renderCheckbox: ce,
    renderSortStatus: G
  }), [ce, G]), At = Be(() => {
    let A = !1, j = !1;
    if (a != null && d != null && d.size > 0) {
      for (const J of n)
        if (d.has(a(J)) ? A = !0 : j = !0, A && j) break;
    }
    return {
      isRowSelected: A && !j,
      isIndeterminate: A && j
    };
  }, [n, d, a]), {
    rowOverscanStartIdx: rt,
    rowOverscanEndIdx: je,
    totalRowHeight: Gt,
    gridTemplateRows: oo,
    getRowTop: un,
    getRowHeight: Bs,
    findRowIdx: pi
  } = dl({
    rows: n,
    rowHeight: Y,
    clientHeight: pe,
    scrollTop: Re,
    enableVirtualization: Ce
  }), _t = ul({
    columns: ze,
    colSpanColumns: nn,
    colOverscanStartIdx: on,
    colOverscanEndIdx: Rt,
    lastFrozenColumnIndex: Ze,
    rowOverscanStartIdx: rt,
    rowOverscanEndIdx: je,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: Ys,
    handleColumnResize: Vs
  } = cl(ze, _t, Cr, Dt, tn, ke, st, Tt, ct, E), Hs = H ? -1 : 0, tr = ze.length - 1, io = co(X), dn = bi(X), Us = O + Gt + fe + no, Gs = et(Vs), qs = et(_), Ks = et(p), Xs = et(w), Zs = et(T), Qs = et(S), Js = et(rc), ec = et(mi), tc = et(fn), ao = et(Tr), hi = et(({
    idx: A,
    rowIdx: j
  }) => {
    Tr({
      rowIdx: Ke + j - 1,
      idx: A
    });
  });
  hr(() => {
    if (!io || fo(X, Er.current)) {
      Er.current = X;
      return;
    }
    Er.current = X, X.idx === -1 && (h.current.focus({
      preventScroll: !0
    }), xn(h.current));
  }), hr(() => {
    M.current && (M.current = !1, wi());
  }), bc(t, () => ({
    element: Dt.current,
    scrollToCell({
      idx: A,
      rowIdx: j
    }) {
      const J = A !== void 0 && A > Ze && A < ze.length ? A : void 0, ee = j !== void 0 && rr(j) ? j : void 0;
      (J !== void 0 || ee !== void 0) && xr({
        idx: J,
        rowIdx: ee
      });
    },
    selectCell: Tr
  }));
  const so = Xt((A) => {
    ro(A), cn.current = A;
  }, []);
  function rc(A) {
    if (!y) return;
    Fr(a);
    const j = new Set(d);
    for (const J of n) {
      if ((m == null ? void 0 : m(J)) === !0) continue;
      const ee = a(J);
      A.checked ? j.add(ee) : j.delete(ee);
    }
    y(j);
  }
  function mi(A) {
    if (!y) return;
    Fr(a);
    const {
      row: j,
      checked: J,
      isShiftClick: ee
    } = A;
    if ((m == null ? void 0 : m(j)) === !0) return;
    const ue = new Set(d), Se = a(j), De = ln.current, Me = n.indexOf(j);
    if (ln.current = Me, J ? ue.add(Se) : ue.delete(Se), ee && De !== -1 && De !== Me && De < n.length) {
      const nt = jc(Me - De);
      for (let Je = De + nt; Je !== Me; Je += nt) {
        const vt = n[Je];
        (m == null ? void 0 : m(vt)) !== !0 && (J ? ue.add(a(vt)) : ue.delete(a(vt)));
      }
    }
    y(ue);
  }
  function nc(A) {
    var Me;
    const {
      idx: j,
      rowIdx: J,
      mode: ee
    } = X;
    if (ee === "EDIT") return;
    if (x && rr(J)) {
      const nt = n[J], Je = Nr(A);
      if (x({
        mode: "SELECT",
        row: nt,
        column: ze[j],
        rowIdx: J,
        selectCell: Tr
      }, Je), Je.isGridDefaultPrevented()) return;
    }
    if (!(A.target instanceof Element)) return;
    const ue = A.target.closest(".rdg-cell") !== null, Se = H && A.target === h.current;
    if (!ue && !Se) return;
    const {
      keyCode: De
    } = A;
    if (dn && (R != null || c != null) && kn(A)) {
      if (De === 67) {
        if (((Me = window.getSelection()) == null ? void 0 : Me.isCollapsed) === !1) return;
        ic();
        return;
      }
      if (De === 86) {
        ac();
        return;
      }
    }
    switch (A.key) {
      case "Escape":
        Yt(null);
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
        vi(A);
        break;
      default:
        sc(A);
        break;
    }
  }
  function oc(A) {
    const {
      scrollTop: j,
      scrollLeft: J
    } = A.currentTarget;
    Rn(() => {
      Ie(j), We(Lc(J));
    }), I == null || I(A);
  }
  function fn(A, j, J) {
    if (typeof s != "function" || J === n[j]) return;
    const ee = [...n];
    ee[j] = J, s(ee, {
      indexes: [j],
      column: A
    });
  }
  function gi() {
    X.mode === "EDIT" && fn(ze[X.idx], X.rowIdx, X.row);
  }
  function ic() {
    const {
      idx: A,
      rowIdx: j
    } = X, J = n[j], ee = ze[A].key;
    Yt({
      row: J,
      columnKey: ee
    }), c == null || c({
      sourceRow: J,
      sourceColumnKey: ee
    });
  }
  function ac() {
    if (!R || !s || ne === null || !pn(X))
      return;
    const {
      idx: A,
      rowIdx: j
    } = X, J = ze[A], ee = n[j], ue = R({
      sourceRow: ne.row,
      sourceColumnKey: ne.columnKey,
      targetRow: ee,
      targetColumnKey: J.key
    });
    fn(J, j, ue);
  }
  function sc(A) {
    if (!dn) return;
    const j = n[X.rowIdx], {
      key: J,
      shiftKey: ee
    } = A;
    if (se && ee && J === " ") {
      Fr(a);
      const ue = a(j);
      mi({
        row: j,
        checked: !d.has(ue),
        isShiftClick: !1
      }), A.preventDefault();
      return;
    }
    pn(X) && kc(A) && Mt(({
      idx: ue,
      rowIdx: Se
    }) => ({
      idx: ue,
      rowIdx: Se,
      mode: "EDIT",
      row: j,
      originalRow: j
    }));
  }
  function yi(A) {
    return A >= Hs && A <= tr;
  }
  function rr(A) {
    return A >= 0 && A < n.length;
  }
  function co({
    idx: A,
    rowIdx: j
  }) {
    return j >= Ke && j <= bt && yi(A);
  }
  function cc({
    idx: A,
    rowIdx: j
  }) {
    return rr(j) && A >= 0 && A <= tr;
  }
  function bi({
    idx: A,
    rowIdx: j
  }) {
    return rr(j) && yi(A);
  }
  function pn(A) {
    return cc(A) && $c({
      columns: ze,
      rows: n,
      selectedPosition: A
    });
  }
  function Tr(A, j) {
    if (!co(A)) return;
    gi();
    const J = n[A.rowIdx], ee = fo(X, A);
    j && pn(A) ? Mt({
      ...A,
      mode: "EDIT",
      row: J,
      originalRow: J
    }) : ee ? xn(Oi(Dt.current)) : (M.current = !0, Mt({
      ...A,
      mode: "SELECT"
    })), b && !ee && b({
      rowIdx: A.rowIdx,
      row: J,
      column: ze[A.idx]
    });
  }
  function lc(A, j, J) {
    const {
      idx: ee,
      rowIdx: ue
    } = X, Se = io && ee === -1;
    switch (A) {
      case "ArrowUp":
        return {
          idx: ee,
          rowIdx: ue - 1
        };
      case "ArrowDown":
        return {
          idx: ee,
          rowIdx: ue + 1
        };
      case Ve:
        return {
          idx: ee - 1,
          rowIdx: ue
        };
      case Oe:
        return {
          idx: ee + 1,
          rowIdx: ue
        };
      case "Tab":
        return {
          idx: ee + (J ? -1 : 1),
          rowIdx: ue
        };
      case "Home":
        return Se ? {
          idx: ee,
          rowIdx: Ke
        } : {
          idx: 0,
          rowIdx: j ? Ke : ue
        };
      case "End":
        return Se ? {
          idx: ee,
          rowIdx: bt
        } : {
          idx: tr,
          rowIdx: j ? bt : ue
        };
      case "PageUp": {
        if (X.rowIdx === Ke) return X;
        const De = un(ue) + Bs(ue) - pe;
        return {
          idx: ee,
          rowIdx: De > 0 ? pi(De) : 0
        };
      }
      case "PageDown": {
        if (X.rowIdx >= n.length) return X;
        const De = un(ue) + pe;
        return {
          idx: ee,
          rowIdx: De < Gt ? pi(De) : n.length - 1
        };
      }
      default:
        return X;
    }
  }
  function vi(A) {
    const {
      key: j,
      shiftKey: J
    } = A;
    let ee = "NONE";
    if (j === "Tab") {
      if (Ac({
        shiftKey: J,
        maxColIdx: tr,
        minRowIdx: Ke,
        maxRowIdx: bt,
        selectedPosition: X
      })) {
        gi();
        return;
      }
      ee = "CHANGE_ROW";
    }
    A.preventDefault();
    const ue = kn(A), Se = lc(j, ue, J);
    if (fo(X, Se)) return;
    const De = Mc({
      moveUp: j === "ArrowUp",
      moveNext: j === Oe || j === "Tab" && !J,
      columns: ze,
      colSpanColumns: nn,
      rows: n,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: Ke,
      mainHeaderRowIdx: er,
      maxRowIdx: bt,
      lastFrozenColumnIndex: Ze,
      cellNavigationMode: ee,
      currentPosition: X,
      nextPosition: Se,
      isCellWithinBounds: co
    });
    Tr(De);
  }
  function uc(A) {
    if (lt === void 0) return;
    const {
      rowIdx: j
    } = X;
    return (j < lt ? j < A && A <= lt : j > A && A >= lt) ? X.idx : void 0;
  }
  function wi() {
    const A = Oi(Dt.current);
    if (A === null) return;
    xn(A), (A.querySelector('[tabindex="0"]') ?? A).focus({
      preventScroll: !0
    });
  }
  function dc() {
    if (B == null || X.mode === "EDIT" || !bi(X))
      return;
    const {
      idx: A,
      rowIdx: j
    } = X, J = ze[A];
    if (J.renderEditCell == null || J.editable === !1)
      return;
    const ee = Qt(J);
    return /* @__PURE__ */ z.jsx(ml, {
      gridRowStart: Ot + j + 1,
      rows: n,
      column: J,
      columnWidth: ee,
      maxColIdx: tr,
      isLastRow: j === bt,
      selectedPosition: X,
      isCellEditable: pn,
      latestDraggedOverRowIdx: cn,
      onRowsChange: s,
      onClick: wi,
      onFill: B,
      setDragging: Ht,
      setDraggedOverRowIdx: so
    });
  }
  function fc(A) {
    if (X.rowIdx !== A || X.mode === "SELECT") return;
    const {
      idx: j,
      row: J
    } = X, ee = ze[j], ue = ft(ee, Ze, {
      type: "ROW",
      row: J
    }), Se = (Me) => {
      M.current = Me, Mt(({
        idx: nt,
        rowIdx: Je
      }) => ({
        idx: nt,
        rowIdx: Je,
        mode: "SELECT"
      }));
    }, De = (Me, nt, Je) => {
      nt ? Rn(() => {
        fn(ee, X.rowIdx, Me), Se(Je);
      }) : Mt((vt) => ({
        ...vt,
        row: Me
      }));
    };
    return n[X.rowIdx] !== X.originalRow && Se(!1), /* @__PURE__ */ z.jsx(yl, {
      column: ee,
      colSpan: ue,
      row: J,
      rowIdx: A,
      onRowChange: De,
      closeEditor: Se,
      onKeyDown: x,
      navigate: vi
    }, ee.key);
  }
  function Rr(A) {
    const j = X.idx === -1 ? void 0 : ze[X.idx];
    return j !== void 0 && X.rowIdx === A && !_t.includes(j) ? X.idx > Rt ? [..._t, j] : [..._t.slice(0, Ze + 1), j, ..._t.slice(Ze + 1)] : _t;
  }
  function pc() {
    const A = [], {
      idx: j,
      rowIdx: J
    } = X, ee = dn && J < rt ? rt - 1 : rt, ue = dn && J > je ? je + 1 : je;
    for (let Se = ee; Se <= ue; Se++) {
      const De = Se === rt - 1 || Se === je + 1, Me = De ? J : Se;
      let nt = _t;
      const Je = j === -1 ? void 0 : ze[j];
      Je !== void 0 && (De ? nt = [Je] : nt = Rr(Me));
      const vt = n[Me], hc = Ot + Me + 1;
      let lo = Me, uo = !1;
      typeof a == "function" && (lo = a(vt), uo = (d == null ? void 0 : d.has(lo)) ?? !1), A.push(q(lo, {
        "aria-rowindex": Ot + Me + 1,
        "aria-selected": se ? uo : void 0,
        rowIdx: Me,
        row: vt,
        viewportColumns: nt,
        isRowSelectionDisabled: (m == null ? void 0 : m(vt)) ?? !1,
        isRowSelected: uo,
        onCellClick: Xs,
        onCellDoubleClick: Zs,
        onCellContextMenu: Qs,
        rowClass: ie,
        gridRowStart: hc,
        copiedCellIdx: ne !== null && ne.row === vt ? ze.findIndex((mc) => mc.key === ne.columnKey) : void 0,
        selectedCellIdx: J === Me ? j : void 0,
        draggedOverCellIdx: uc(Me),
        setDraggedOverRowIdx: Vt ? so : void 0,
        lastFrozenColumnIndex: Ze,
        onRowChange: tc,
        selectCell: ao,
        selectedCellEditor: fc(Me)
      }));
    }
    return A;
  }
  (X.idx > tr || X.rowIdx > bt) && (Mt({
    idx: -1,
    rowIdx: Ke - 1,
    mode: "SELECT"
  }), so(void 0));
  let hn = `repeat(${gt}, ${O}px)`;
  Ut > 0 && (hn += ` repeat(${Ut}, ${L}px)`), n.length > 0 && (hn += oo), kt > 0 && (hn += ` repeat(${kt}, ${L}px)`);
  const xi = X.idx === -1 && X.rowIdx !== Ke - 1;
  return /* @__PURE__ */ z.jsxs("div", {
    role: N,
    "aria-label": le,
    "aria-labelledby": $,
    "aria-describedby": V,
    "aria-multiselectable": se ? !0 : void 0,
    "aria-colcount": ze.length,
    "aria-rowcount": $e,
    className: Ne(ou, Q, Vt && au),
    style: {
      ...K,
      scrollPaddingInlineStart: X.idx > Ze || (mt == null ? void 0 : mt.idx) !== void 0 ? `${an}px` : void 0,
      scrollPaddingBlock: rr(X.rowIdx) || (mt == null ? void 0 : mt.rowIdx) !== void 0 ? `${oe + Ut * L}px ${kt * L}px` : void 0,
      gridTemplateColumns: Ys,
      gridTemplateRows: hn,
      "--rdg-header-row-height": `${O}px`,
      "--rdg-scroll-height": `${Us}px`,
      ...Sr
    },
    dir: U,
    ref: Dt,
    onScroll: oc,
    onKeyDown: nc,
    "data-testid": re,
    children: [/* @__PURE__ */ z.jsxs(Xc, {
      value: Qe,
      children: [/* @__PURE__ */ z.jsx(Jc, {
        value: Js,
        children: /* @__PURE__ */ z.jsxs(Qc, {
          value: At,
          children: [Array.from({
            length: Jt
          }, (A, j) => /* @__PURE__ */ z.jsx(Yl, {
            rowIdx: j + 1,
            level: -Jt + j,
            columns: Rr(Ke + j),
            selectedCellIdx: X.rowIdx === Ke + j ? X.idx : void 0,
            selectCell: hi
          }, j)), /* @__PURE__ */ z.jsx(zl, {
            rowIdx: gt,
            columns: Rr(er),
            onColumnResize: Gs,
            onColumnsReorder: qs,
            sortColumns: v,
            onSortColumnsChange: Ks,
            lastFrozenColumnIndex: Ze,
            selectedCellIdx: X.rowIdx === er ? X.idx : void 0,
            selectCell: hi,
            shouldFocusGrid: !io,
            direction: U
          })]
        })
      }), n.length === 0 && W ? W : /* @__PURE__ */ z.jsxs(z.Fragment, {
        children: [o == null ? void 0 : o.map((A, j) => {
          const J = gt + 1 + j, ee = er + 1 + j, ue = X.rowIdx === ee, Se = oe + L * j;
          return /* @__PURE__ */ z.jsx(ki, {
            "aria-rowindex": J,
            rowIdx: ee,
            gridRowStart: J,
            row: A,
            top: Se,
            bottom: void 0,
            viewportColumns: Rr(ee),
            lastFrozenColumnIndex: Ze,
            selectedCellIdx: ue ? X.idx : void 0,
            isTop: !0,
            selectCell: ao
          }, j);
        }), /* @__PURE__ */ z.jsx(Zc, {
          value: ec,
          children: pc()
        }), i == null ? void 0 : i.map((A, j) => {
          const J = Ot + n.length + j + 1, ee = n.length + j, ue = X.rowIdx === ee, Se = pe > Gt ? rn - L * (i.length - j) : void 0, De = Se === void 0 ? L * (i.length - 1 - j) : void 0;
          return /* @__PURE__ */ z.jsx(ki, {
            "aria-rowindex": $e - kt + j + 1,
            rowIdx: ee,
            gridRowStart: J,
            row: A,
            top: Se,
            bottom: De,
            viewportColumns: Rr(ee),
            lastFrozenColumnIndex: Ze,
            selectedCellIdx: ue ? X.idx : void 0,
            isTop: !1,
            selectCell: ao
          }, j);
        })]
      })]
    }), dc(), Ic(_t), H && /* @__PURE__ */ z.jsx("div", {
      ref: h,
      tabIndex: xi ? 0 : -1,
      className: Ne(su, xi && [_l, Ze !== -1 && Nl], !rr(X.rowIdx) && cu),
      style: {
        gridRowStart: X.rowIdx + Ot + 1
      }
    }), mt !== null && /* @__PURE__ */ z.jsx(Zl, {
      scrollToPosition: mt,
      setScrollToCellPosition: xr,
      gridElement: Dt.current
    })]
  });
}
function Oi(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function fo(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const Ka = /* @__PURE__ */ Nn(gu);
function yu({
  id: e,
  groupKey: t,
  childRows: r,
  isExpanded: n,
  isCellSelected: o,
  column: i,
  row: a,
  groupColumnIndex: s,
  isGroupByColumn: l,
  toggleGroup: u
}) {
  var p;
  const {
    tabIndex: f,
    childTabIndex: d,
    onFocus: m
  } = Kr(o);
  function y() {
    u(e);
  }
  const v = l && s === i.idx;
  return /* @__PURE__ */ z.jsx("div", {
    role: "gridcell",
    "aria-colindex": i.idx + 1,
    "aria-selected": o,
    tabIndex: f,
    className: qr(i),
    style: {
      ...br(i),
      cursor: v ? "pointer" : "default"
    },
    onClick: v ? y : void 0,
    onFocus: m,
    children: (!l || v) && ((p = i.renderGroupCell) == null ? void 0 : p.call(i, {
      groupKey: t,
      childRows: r,
      column: i,
      row: a,
      isExpanded: n,
      tabIndex: d,
      toggleGroup: y
    }))
  }, i.key);
}
const bu = /* @__PURE__ */ zt(yu), vu = "g1yxluv37-0-0-beta-47", wu = `rdg-group-row ${vu}`;
function xu({
  className: e,
  row: t,
  rowIdx: r,
  viewportColumns: n,
  selectedCellIdx: o,
  isRowSelected: i,
  selectCell: a,
  gridRowStart: s,
  groupBy: l,
  toggleGroup: u,
  isRowSelectionDisabled: f,
  ...d
}) {
  const m = n[0].key === pr ? t.level + 1 : t.level;
  function y() {
    a({
      rowIdx: r,
      idx: -1
    });
  }
  const v = Be(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: i
  }), [i]);
  return /* @__PURE__ */ z.jsx(Wa, {
    value: v,
    children: /* @__PURE__ */ z.jsx("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Ne(Uo, wu, `rdg-row-${r % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Ln),
      onClick: y,
      style: Vo(s),
      ...d,
      children: n.map((p) => /* @__PURE__ */ z.jsx(bu, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === p.idx,
        column: p,
        row: t,
        groupColumnIndex: m,
        toggleGroup: u,
        isGroupByColumn: l.includes(p.key)
      }, p.key))
    })
  });
}
const Cu = /* @__PURE__ */ zt(xu);
function Su({
  columns: e,
  rows: t,
  rowHeight: r,
  rowKeyGetter: n,
  onCellKeyDown: o,
  onRowsChange: i,
  selectedRows: a,
  onSelectedRowsChange: s,
  renderers: l,
  groupBy: u,
  rowGrouper: f,
  expandedGroupIds: d,
  onExpandedGroupIdsChange: m,
  ...y
}, v) {
  var V, te, re;
  const p = jn(), g = (l == null ? void 0 : l.renderRow) ?? (p == null ? void 0 : p.renderRow) ?? qa, w = 1 + (((V = y.topSummaryRows) == null ? void 0 : V.length) ?? 0), T = y.direction === "rtl", S = T ? "ArrowRight" : "ArrowLeft", x = T ? "ArrowLeft" : "ArrowRight", b = et(le), {
    columns: I,
    groupBy: E
  } = Be(() => {
    const P = [...e].sort(({
      key: Y
    }, {
      key: O
    }) => Y === pr ? -1 : O === pr ? 1 : u.includes(Y) ? u.includes(O) ? u.indexOf(Y) - u.indexOf(O) : -1 : u.includes(O) ? 1 : 0), N = [];
    for (const [Y, O] of P.entries())
      u.includes(O.key) && (N.push(O.key), P[Y] = {
        ...O,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: O.renderGroupCell ?? Gc,
        editable: !1
      });
    return {
      columns: P,
      groupBy: N
    };
  }, [e, u]), [_, B] = Be(() => {
    if (E.length === 0) return [void 0, t.length];
    const P = (N, [Y, ...O], L) => {
      let q = 0;
      const G = {};
      for (const [ce, W] of Object.entries(f(N, Y))) {
        const [Ce, U] = O.length === 0 ? [W, W.length] : P(W, O, L + q + 1);
        G[ce] = {
          childRows: W,
          childGroups: Ce,
          startRowIndex: L + q
        }, q += U + 1;
      }
      return [G, q];
    };
    return P(t, E, 0);
  }, [E, f, t]), [c, R] = Be(() => {
    const P = /* @__PURE__ */ new Set();
    if (!_) return [t, O];
    const N = [], Y = (L, q, G) => {
      if (Eu(L)) {
        N.push(...L);
        return;
      }
      Object.keys(L).forEach((ce, W, Ce) => {
        const U = q !== void 0 ? `${q}__${ce}` : ce, Re = d.has(U), {
          childRows: Ie,
          childGroups: Ye,
          startRowIndex: We
        } = L[ce], ke = {
          id: U,
          parentId: q,
          groupKey: ce,
          isExpanded: Re,
          childRows: Ie,
          level: G,
          posInSet: W,
          startRowIndex: We,
          setSize: Ce.length
        };
        N.push(ke), P.add(ke), Re && Y(Ye, U, G + 1);
      });
    };
    return Y(_, void 0, 0), [N, O];
    function O(L) {
      return P.has(L);
    }
  }, [d, _, t]), F = Be(() => typeof r == "function" ? (P) => R(P) ? r({
    type: "GROUP",
    row: P
  }) : r({
    type: "ROW",
    row: P
  }) : r, [R, r]), D = Xt((P) => {
    const N = c.indexOf(P);
    for (let Y = N - 1; Y >= 0; Y--) {
      const O = c[Y];
      if (R(O) && (!R(P) || P.parentId === O.id))
        return [O, Y];
    }
  }, [R, c]), Q = Xt((P) => {
    if (R(P))
      return P.id;
    if (typeof n == "function")
      return n(P);
    const N = D(P);
    if (N !== void 0) {
      const {
        startRowIndex: Y,
        childRows: O
      } = N[0], L = O.indexOf(P);
      return Y + L + 1;
    }
    return c.indexOf(P);
  }, [D, R, n, c]), K = Be(() => {
    if (a == null) return null;
    Fr(n);
    const P = new Set(a);
    for (const N of c)
      R(N) && N.childRows.every((O) => a.has(n(O))) && P.add(N.id);
    return P;
  }, [R, n, a, c]);
  function ie(P) {
    if (!s) return;
    Fr(n);
    const N = new Set(a);
    for (const Y of c) {
      const O = Q(Y);
      if (K != null && K.has(O) && !P.has(O))
        if (R(Y))
          for (const L of Y.childRows)
            N.delete(n(L));
        else
          N.delete(O);
      else if (!(K != null && K.has(O)) && P.has(O))
        if (R(Y))
          for (const L of Y.childRows)
            N.add(n(L));
        else
          N.add(O);
    }
    s(N);
  }
  function de(P, N) {
    if (o == null || o(P, N), N.isGridDefaultPrevented() || P.mode === "EDIT") return;
    const {
      column: Y,
      rowIdx: O,
      selectCell: L
    } = P, q = (Y == null ? void 0 : Y.idx) ?? -1, G = c[O];
    if (R(G)) {
      if (q === -1 && (N.key === S && G.isExpanded || N.key === x && !G.isExpanded) && (N.preventDefault(), N.preventGridDefault(), le(G.id)), q === -1 && N.key === S && !G.isExpanded && G.level !== 0) {
        const ce = D(G);
        ce !== void 0 && (N.preventGridDefault(), L({
          idx: q,
          rowIdx: ce[1]
        }));
      }
      kn(N) && (N.keyCode === 67 || N.keyCode === 86) && N.preventGridDefault();
    }
  }
  function ge(P, {
    indexes: N,
    column: Y
  }) {
    if (!i) return;
    const O = [...t], L = [];
    for (const q of N) {
      const G = t.indexOf(c[q]);
      O[G] = P[q], L.push(G);
    }
    i(O, {
      indexes: L,
      column: Y
    });
  }
  function le(P) {
    const N = new Set(d);
    N.has(P) ? N.delete(P) : N.add(P), m(N);
  }
  function $(P, {
    row: N,
    rowClass: Y,
    onCellClick: O,
    onCellDoubleClick: L,
    onCellContextMenu: q,
    onRowChange: G,
    lastFrozenColumnIndex: ce,
    copiedCellIdx: W,
    draggedOverCellIdx: Ce,
    setDraggedOverRowIdx: U,
    selectedCellEditor: Re,
    ...Ie
  }) {
    if (R(N)) {
      const {
        startRowIndex: ke
      } = N;
      return /* @__PURE__ */ z.jsx(Cu, {
        ...Ie,
        "aria-rowindex": w + ke + 1,
        row: N,
        groupBy: E,
        toggleGroup: b
      }, P);
    }
    let Ye = Ie["aria-rowindex"];
    const We = D(N);
    if (We !== void 0) {
      const {
        startRowIndex: ke,
        childRows: Tt
      } = We[0], st = Tt.indexOf(N);
      Ye = ke + w + st + 2;
    }
    return g(P, {
      ...Ie,
      "aria-rowindex": Ye,
      row: N,
      rowClass: Y,
      onCellClick: O,
      onCellDoubleClick: L,
      onCellContextMenu: q,
      onRowChange: G,
      lastFrozenColumnIndex: ce,
      copiedCellIdx: W,
      draggedOverCellIdx: Ce,
      setDraggedOverRowIdx: U,
      selectedCellEditor: Re
    });
  }
  return /* @__PURE__ */ z.jsx(Ka, {
    ...y,
    role: "treegrid",
    "aria-rowcount": B + 1 + (((te = y.topSummaryRows) == null ? void 0 : te.length) ?? 0) + (((re = y.bottomSummaryRows) == null ? void 0 : re.length) ?? 0),
    ref: v,
    columns: I,
    rows: c,
    rowHeight: F,
    rowKeyGetter: Q,
    onRowsChange: ge,
    selectedRows: K,
    onSelectedRowsChange: ie,
    onCellKeyDown: de,
    renderers: {
      ...l,
      renderRow: $
    }
  });
}
function Eu(e) {
  return Array.isArray(e);
}
const Yg = /* @__PURE__ */ Nn(Su), Tu = "t7vyx3i7-0-0-beta-47", Ru = `rdg-text-editor ${Tu}`;
function ku(e) {
  e == null || e.focus(), e == null || e.select();
}
function Vg({
  row: e,
  column: t,
  onRowChange: r,
  onClose: n
}) {
  return /* @__PURE__ */ z.jsx("input", {
    className: Ru,
    ref: ku,
    value: e[t.key],
    onChange: (o) => r({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => n(!0, !1)
  });
}
const qe = {
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
}, Ou = {
  "--rdg-color": qe.gray800,
  "--rdg-header-color": qe.gray700,
  "--rdg-border-color": qe.gray400,
  "--rdg-background-color": qe.forcewhite,
  "--rdg-header-background-color": qe.forcewhite,
  "--rdg-row-hover-background-color": qe.forcewhite,
  "--rdg-row-selected-hover-background-color": qe.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": qe.primary400,
  "--rdg-row-selected-color": qe.forcewhite
};
function Pn() {
  return Pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pn.apply(null, arguments);
}
function Xa(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Pu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Iu = /* @__PURE__ */ Xa(
  function(e) {
    return Pu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $u = !1;
function Du(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Mu(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Au = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !$u : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Mu(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Du(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ue = "-ms-", In = "-moz-", he = "-webkit-", Za = "comm", Go = "rule", qo = "decl", _u = "@import", Qa = "@keyframes", Nu = "@layer", Fu = Math.abs, Wn = String.fromCharCode, ju = Object.assign;
function Lu(e, t) {
  return He(e, 0) ^ 45 ? (((t << 2 ^ He(e, 0)) << 2 ^ He(e, 1)) << 2 ^ He(e, 2)) << 2 ^ He(e, 3) : 0;
}
function Ja(e) {
  return e.trim();
}
function Wu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function me(e, t, r) {
  return e.replace(t, r);
}
function Do(e, t) {
  return e.indexOf(t);
}
function He(e, t) {
  return e.charCodeAt(t) | 0;
}
function zr(e, t, r) {
  return e.slice(t, r);
}
function xt(e) {
  return e.length;
}
function Ko(e) {
  return e.length;
}
function mn(e, t) {
  return t.push(e), e;
}
function zu(e, t) {
  return e.map(t).join("");
}
var zn = 1, mr = 1, es = 0, tt = 0, Le = 0, vr = "";
function Bn(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: zn, column: mr, length: a, return: "" };
}
function Ir(e, t) {
  return ju(Bn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Bu() {
  return Le;
}
function Yu() {
  return Le = tt > 0 ? He(vr, --tt) : 0, mr--, Le === 10 && (mr = 1, zn--), Le;
}
function it() {
  return Le = tt < es ? He(vr, tt++) : 0, mr++, Le === 10 && (mr = 1, zn++), Le;
}
function Et() {
  return He(vr, tt);
}
function Cn() {
  return tt;
}
function Xr(e, t) {
  return zr(vr, e, t);
}
function Br(e) {
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
function ts(e) {
  return zn = mr = 1, es = xt(vr = e), tt = 0, [];
}
function rs(e) {
  return vr = "", e;
}
function Sn(e) {
  return Ja(Xr(tt - 1, Mo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vu(e) {
  for (; (Le = Et()) && Le < 33; )
    it();
  return Br(e) > 2 || Br(Le) > 3 ? "" : " ";
}
function Hu(e, t) {
  for (; --t && it() && !(Le < 48 || Le > 102 || Le > 57 && Le < 65 || Le > 70 && Le < 97); )
    ;
  return Xr(e, Cn() + (t < 6 && Et() == 32 && it() == 32));
}
function Mo(e) {
  for (; it(); )
    switch (Le) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mo(Le);
        break;
      case 40:
        e === 41 && Mo(e);
        break;
      case 92:
        it();
        break;
    }
  return tt;
}
function Uu(e, t) {
  for (; it() && e + Le !== 57; )
    if (e + Le === 84 && Et() === 47)
      break;
  return "/*" + Xr(t, tt - 1) + "*" + Wn(e === 47 ? e : it());
}
function Gu(e) {
  for (; !Br(Et()); )
    it();
  return Xr(e, tt);
}
function qu(e) {
  return rs(En("", null, null, null, [""], e = ts(e), 0, [0], e));
}
function En(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, f = 0, d = a, m = 0, y = 0, v = 0, p = 1, g = 1, w = 1, T = 0, S = "", x = o, b = i, I = n, E = S; g; )
    switch (v = T, T = it()) {
      case 40:
        if (v != 108 && He(E, d - 1) == 58) {
          Do(E += me(Sn(T), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Sn(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Vu(v);
        break;
      case 92:
        E += Hu(Cn() - 1, 7);
        continue;
      case 47:
        switch (Et()) {
          case 42:
          case 47:
            mn(Ku(Uu(it(), Cn()), t, r), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * p:
        s[u++] = xt(E) * w;
      case 125 * p:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            g = 0;
          case 59 + f:
            w == -1 && (E = me(E, /\f/g, "")), y > 0 && xt(E) - d && mn(y > 32 ? Ii(E + ";", n, r, d - 1) : Ii(me(E, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (mn(I = Pi(E, t, r, u, f, o, s, S, x = [], b = [], d), i), T === 123)
              if (f === 0)
                En(E, t, I, I, x, i, d, s, b);
              else
                switch (m === 99 && He(E, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    En(e, I, I, n && mn(Pi(e, I, I, 0, 0, o, s, S, o, x = [], d), b), o, b, d, s, n ? x : b);
                    break;
                  default:
                    En(E, I, I, I, [""], b, 0, s, b);
                }
        }
        u = f = y = 0, p = w = 1, S = E = "", d = a;
        break;
      case 58:
        d = 1 + xt(E), y = v;
      default:
        if (p < 1) {
          if (T == 123)
            --p;
          else if (T == 125 && p++ == 0 && Yu() == 125)
            continue;
        }
        switch (E += Wn(T), T * p) {
          case 38:
            w = f > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[u++] = (xt(E) - 1) * w, w = 1;
            break;
          case 64:
            Et() === 45 && (E += Sn(it())), m = Et(), f = d = xt(S = E += Gu(Cn())), T++;
            break;
          case 45:
            v === 45 && xt(E) == 2 && (p = 0);
        }
    }
  return i;
}
function Pi(e, t, r, n, o, i, a, s, l, u, f) {
  for (var d = o - 1, m = o === 0 ? i : [""], y = Ko(m), v = 0, p = 0, g = 0; v < n; ++v)
    for (var w = 0, T = zr(e, d + 1, d = Fu(p = a[v])), S = e; w < y; ++w)
      (S = Ja(p > 0 ? m[w] + " " + T : me(T, /&\f/g, m[w]))) && (l[g++] = S);
  return Bn(e, t, r, o === 0 ? Go : s, l, u, f);
}
function Ku(e, t, r) {
  return Bn(e, t, r, Za, Wn(Bu()), zr(e, 2, -2), 0);
}
function Ii(e, t, r, n) {
  return Bn(e, t, r, qo, zr(e, 0, n), zr(e, n + 1, -1), n);
}
function ur(e, t) {
  for (var r = "", n = Ko(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Xu(e, t, r, n) {
  switch (e.type) {
    case Nu:
      if (e.children.length) break;
    case _u:
    case qo:
      return e.return = e.return || e.value;
    case Za:
      return "";
    case Qa:
      return e.return = e.value + "{" + ur(e.children, n) + "}";
    case Go:
      e.value = e.props.join(",");
  }
  return xt(r = ur(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Zu(e) {
  var t = Ko(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function Qu(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ju = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Et(), o === 38 && i === 12 && (r[n] = 1), !Br(i); )
    it();
  return Xr(t, tt);
}, ed = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Br(o)) {
      case 0:
        o === 38 && Et() === 12 && (r[n] = 1), t[n] += Ju(tt - 1, r, n);
        break;
      case 2:
        t[n] += Sn(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Et() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Wn(o);
    }
  while (o = it());
  return t;
}, td = function(t, r) {
  return rs(ed(ts(t), r));
}, $i = /* @__PURE__ */ new WeakMap(), rd = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !$i.get(n)) && !o) {
      $i.set(t, !0);
      for (var i = [], a = td(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var f = 0; f < s.length; f++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[f]) : s[f] + " " + a[l];
    }
  }
}, nd = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ns(e, t) {
  switch (Lu(e, t)) {
    case 5103:
      return he + "print-" + e + e;
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
      return he + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + In + e + Ue + e + e;
    case 6828:
    case 4268:
      return he + e + Ue + e + e;
    case 6165:
      return he + e + Ue + "flex-" + e + e;
    case 5187:
      return he + e + me(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + Ue + "flex-$1$2") + e;
    case 5443:
      return he + e + Ue + "flex-item-" + me(e, /flex-|-self/, "") + e;
    case 4675:
      return he + e + Ue + "flex-line-pack" + me(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return he + e + Ue + me(e, "shrink", "negative") + e;
    case 5292:
      return he + e + Ue + me(e, "basis", "preferred-size") + e;
    case 6060:
      return he + "box-" + me(e, "-grow", "") + he + e + Ue + me(e, "grow", "positive") + e;
    case 4554:
      return he + me(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    case 6187:
      return me(me(me(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return me(e, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return me(me(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + Ue + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return me(e, /(.+)-inline(.+)/, he + "$1$2") + e;
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
      if (xt(e) - 1 - t > 6) switch (He(e, t + 1)) {
        case 109:
          if (He(e, t + 4) !== 45) break;
        case 102:
          return me(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + In + (He(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Do(e, "stretch") ? ns(me(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (He(e, t + 1) !== 115) break;
    case 6444:
      switch (He(e, xt(e) - 3 - (~Do(e, "!important") && 10))) {
        case 107:
          return me(e, ":", ":" + he) + e;
        case 101:
          return me(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (He(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + Ue + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (He(e, t + 11)) {
        case 114:
          return he + e + Ue + me(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return he + e + Ue + me(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return he + e + Ue + me(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + Ue + e + e;
  }
  return e;
}
var od = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case qo:
      t.return = ns(t.value, t.length);
      break;
    case Qa:
      return ur([Ir(t, {
        value: me(t.value, "@", "@" + he)
      })], o);
    case Go:
      if (t.length) return zu(t.props, function(i) {
        switch (Wu(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ur([Ir(t, {
              props: [me(i, /:(read-\w+)/, ":" + In + "$1")]
            })], o);
          case "::placeholder":
            return ur([Ir(t, {
              props: [me(i, /:(plac\w+)/, ":" + he + "input-$1")]
            }), Ir(t, {
              props: [me(i, /:(plac\w+)/, ":" + In + "$1")]
            }), Ir(t, {
              props: [me(i, /:(plac\w+)/, Ue + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, id = [od], ad = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var g = p.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || id, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(p) {
      for (var g = p.getAttribute("data-emotion").split(" "), w = 1; w < g.length; w++)
        i[g[w]] = !0;
      s.push(p);
    }
  );
  var l, u = [rd, nd];
  {
    var f, d = [Xu, Qu(function(p) {
      f.insert(p);
    })], m = Zu(u.concat(o, d)), y = function(g) {
      return ur(qu(g), m);
    };
    l = function(g, w, T, S) {
      f = T, y(g ? g + "{" + w.styles + "}" : w.styles), S && (v.inserted[w.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new Au({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return v.sheet.hydrate(s), v;
}, Ao = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Di;
function sd() {
  if (Di) return ye;
  Di = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var I = b.$$typeof;
      switch (I) {
        case t:
          switch (b = b.type, b) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case f:
                case v:
                case y:
                case a:
                  return b;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function x(b) {
    return S(b) === u;
  }
  return ye.AsyncMode = l, ye.ConcurrentMode = u, ye.ContextConsumer = s, ye.ContextProvider = a, ye.Element = t, ye.ForwardRef = f, ye.Fragment = n, ye.Lazy = v, ye.Memo = y, ye.Portal = r, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = d, ye.isAsyncMode = function(b) {
    return x(b) || S(b) === l;
  }, ye.isConcurrentMode = x, ye.isContextConsumer = function(b) {
    return S(b) === s;
  }, ye.isContextProvider = function(b) {
    return S(b) === a;
  }, ye.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ye.isForwardRef = function(b) {
    return S(b) === f;
  }, ye.isFragment = function(b) {
    return S(b) === n;
  }, ye.isLazy = function(b) {
    return S(b) === v;
  }, ye.isMemo = function(b) {
    return S(b) === y;
  }, ye.isPortal = function(b) {
    return S(b) === r;
  }, ye.isProfiler = function(b) {
    return S(b) === i;
  }, ye.isStrictMode = function(b) {
    return S(b) === o;
  }, ye.isSuspense = function(b) {
    return S(b) === d;
  }, ye.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === d || b === m || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === y || b.$$typeof === a || b.$$typeof === s || b.$$typeof === f || b.$$typeof === g || b.$$typeof === w || b.$$typeof === T || b.$$typeof === p);
  }, ye.typeOf = S, ye;
}
var be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function cd() {
  return Mi || (Mi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === n || W === u || W === i || W === o || W === d || W === m || typeof W == "object" && W !== null && (W.$$typeof === v || W.$$typeof === y || W.$$typeof === a || W.$$typeof === s || W.$$typeof === f || W.$$typeof === g || W.$$typeof === w || W.$$typeof === T || W.$$typeof === p);
    }
    function x(W) {
      if (typeof W == "object" && W !== null) {
        var Ce = W.$$typeof;
        switch (Ce) {
          case t:
            var U = W.type;
            switch (U) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case d:
                return U;
              default:
                var Re = U && U.$$typeof;
                switch (Re) {
                  case s:
                  case f:
                  case v:
                  case y:
                  case a:
                    return Re;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var b = l, I = u, E = s, _ = a, B = t, c = f, R = n, F = v, D = y, Q = r, K = i, ie = o, de = d, ge = !1;
    function le(W) {
      return ge || (ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(W) || x(W) === l;
    }
    function $(W) {
      return x(W) === u;
    }
    function V(W) {
      return x(W) === s;
    }
    function te(W) {
      return x(W) === a;
    }
    function re(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function P(W) {
      return x(W) === f;
    }
    function N(W) {
      return x(W) === n;
    }
    function Y(W) {
      return x(W) === v;
    }
    function O(W) {
      return x(W) === y;
    }
    function L(W) {
      return x(W) === r;
    }
    function q(W) {
      return x(W) === i;
    }
    function G(W) {
      return x(W) === o;
    }
    function ce(W) {
      return x(W) === d;
    }
    be.AsyncMode = b, be.ConcurrentMode = I, be.ContextConsumer = E, be.ContextProvider = _, be.Element = B, be.ForwardRef = c, be.Fragment = R, be.Lazy = F, be.Memo = D, be.Portal = Q, be.Profiler = K, be.StrictMode = ie, be.Suspense = de, be.isAsyncMode = le, be.isConcurrentMode = $, be.isContextConsumer = V, be.isContextProvider = te, be.isElement = re, be.isForwardRef = P, be.isFragment = N, be.isLazy = Y, be.isMemo = O, be.isPortal = L, be.isProfiler = q, be.isStrictMode = G, be.isSuspense = ce, be.isValidElementType = S, be.typeOf = x;
  }()), be;
}
process.env.NODE_ENV === "production" ? Ao.exports = sd() : Ao.exports = cd();
var Xo = Ao.exports, os = Xo, ld = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ud = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, is = {};
is[os.ForwardRef] = ld;
is[os.Memo] = ud;
var dd = !0;
function fd(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var as = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  dd === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, pd = function(t, r, n) {
  as(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function hd(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var md = {
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
}, gd = !1, yd = /[A-Z]|^ms/g, bd = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ss = function(t) {
  return t.charCodeAt(1) === 45;
}, Ai = function(t) {
  return t != null && typeof t != "boolean";
}, po = /* @__PURE__ */ Xa(function(e) {
  return ss(e) ? e : e.replace(yd, "-$&").toLowerCase();
}), _i = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(bd, function(n, o, i) {
          return Ct = {
            name: o,
            styles: i,
            next: Ct
          }, o;
        });
  }
  return md[t] !== 1 && !ss(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, vd = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Yr(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ct = {
          name: o.name,
          styles: o.styles,
          next: Ct
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ct = {
              name: a.name,
              styles: a.styles,
              next: Ct
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return wd(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ct, u = r(e);
        return Ct = l, Yr(e, t, u);
      }
      break;
    }
  }
  var f = r;
  if (t == null)
    return f;
  var d = t[f];
  return d !== void 0 ? d : f;
}
function wd(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Yr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : Ai(s) && (n += po(i) + ":" + _i(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && gd)
          throw new Error(vd);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Ai(a[l]) && (n += po(i) + ":" + _i(i, a[l]) + ";");
        else {
          var u = Yr(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += po(i) + ":" + u + ";";
              break;
            }
            default:
              n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Ni = /label:\s*([^\s;{]+)\s*(;|$)/g, Ct;
function Zo(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ct = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Yr(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Yr(r, t, e[s]), n) {
      var l = i;
      o += l[s];
    }
  Ni.lastIndex = 0;
  for (var u = "", f; (f = Ni.exec(o)) !== null; )
    u += "-" + f[1];
  var d = hd(o) + u;
  return {
    name: d,
    styles: o,
    next: Ct
  };
}
var xd = function(t) {
  return t();
}, Cd = Z.useInsertionEffect ? Z.useInsertionEffect : !1, Sd = Cd || xd, cs = /* @__PURE__ */ Z.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ad({
    key: "css"
  }) : null
);
cs.Provider;
var Ed = function(t) {
  return /* @__PURE__ */ Nn(function(r, n) {
    var o = fr(cs);
    return t(r, o, n);
  });
}, Td = /* @__PURE__ */ Z.createContext({});
function Rd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Zo(t);
}
var Qo = function() {
  var t = Rd.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, kd = Iu, Od = function(t) {
  return t !== "theme";
}, Fi = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? kd : Od;
}, ji = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Pd = !1, Id = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return as(r, n, o), Sd(function() {
    return pd(r, n, o);
  }), null;
}, $d = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = ji(t, r, n), l = s || Fi(o), u = !l("as");
  return function() {
    var f = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      d.push.apply(d, f);
    else {
      d.push(f[0][0]);
      for (var m = f.length, y = 1; y < m; y++)
        d.push(f[y], f[0][y]);
    }
    var v = Ed(function(p, g, w) {
      var T = u && p.as || o, S = "", x = [], b = p;
      if (p.theme == null) {
        b = {};
        for (var I in p)
          b[I] = p[I];
        b.theme = Z.useContext(Td);
      }
      typeof p.className == "string" ? S = fd(g.registered, x, p.className) : p.className != null && (S = p.className + " ");
      var E = Zo(d.concat(x), g.registered, b);
      S += g.key + "-" + E.name, a !== void 0 && (S += " " + a);
      var _ = u && s === void 0 ? Fi(T) : l, B = {};
      for (var c in p)
        u && c === "as" || _(c) && (B[c] = p[c]);
      return B.className = S, w && (B.ref = w), /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement(Id, {
        cache: g,
        serialized: E,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ Z.createElement(T, B));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return a === void 0 && Pd ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), v.withComponent = function(p, g) {
      return e(p, Pn({}, r, g, {
        shouldForwardProp: ji(v, g, !0)
      })).apply(void 0, d);
    }, v;
  };
}, Dd = [
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
], gr = $d.bind();
Dd.forEach(function(e) {
  gr[e] = gr(e);
});
const Md = gr.div`
  width: 100%;
  position: relative;
  height: 100%;

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${qe.primary500};
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background-color: ${qe.gray100};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color ${qe.primary500};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${qe.gray200};
  }

  .rdg {
    border: none;
    block-size: 100%;
  }

  * {
    font-weight: var(--rdg-font-weight);
    line-height: var(--rdg-line-height);
    font-family: var(--rdg-font-family);

    border: none;
  }

  .rdg-header-row {
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
var jr = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e))(jr || {});
function Ad(e, t, r) {
  return (n, o) => {
    const i = n[e], a = o[e];
    try {
      if (r)
        return r(i, a);
      if (t === jr.NUMBER) {
        const s = Number(i), l = Number(a);
        return isNaN(s) || isNaN(l) ? (console.warn("Invalid number for sorting:", { a: i, b: a }), isNaN(s) ? 1 : -1) : s - l;
      } else if (t === jr.DATE) {
        const s = new Date(i).getTime(), l = new Date(a).getTime();
        return isNaN(s) || isNaN(l) ? (console.warn("Invalid date for sorting:", { a: i, b: a }), isNaN(s) ? 1 : -1) : s - l;
      }
      return t === jr.STRING || !t ? String(i).localeCompare(String(a)) : 0;
    } catch (s) {
      return console.error("Error in sorting:", s), 0;
    }
  };
}
const _d = (e, t, r) => {
  const [n, o] = Ge(r ?? []);
  return {
    sortedRows: Be(() => n.length === 0 ? t : [...t].sort((a, s) => {
      for (const l of n) {
        const u = e.find((m) => m.key === l.columnKey), d = Ad(
          l.columnKey,
          u == null ? void 0 : u.type,
          u == null ? void 0 : u.sortComparator
        )(a, s);
        if (d !== 0)
          return l.direction === "ASC" ? d : -d;
      }
      return 0;
    }), [t, n]),
    sortColumns: n,
    setSortedColumns: o
  };
}, Nd = {
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
}, Fd = (e, t, r) => {
  let n;
  const o = Nd[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function ho(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const jd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ld = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Wd = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, zd = {
  date: ho({
    formats: jd,
    defaultWidth: "full"
  }),
  time: ho({
    formats: Ld,
    defaultWidth: "full"
  }),
  dateTime: ho({
    formats: Wd,
    defaultWidth: "full"
  })
}, Bd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Yd = (e, t, r, n) => Bd[e];
function $r(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[s] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const Vd = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Hd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ud = {
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
}, Gd = {
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
}, qd = {
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
}, Kd = {
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
}, Xd = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Zd = {
  ordinalNumber: Xd,
  era: $r({
    values: Vd,
    defaultWidth: "wide"
  }),
  quarter: $r({
    values: Hd,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $r({
    values: Ud,
    defaultWidth: "wide"
  }),
  day: $r({
    values: Gd,
    defaultWidth: "wide"
  }),
  dayPeriod: $r({
    values: qd,
    defaultWidth: "wide",
    formattingValues: Kd,
    defaultFormattingWidth: "wide"
  })
};
function Dr(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Jd(s, (d) => d.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      Qd(s, (d) => d.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(u)
    ) : u;
    const f = t.slice(a.length);
    return { value: u, rest: f };
  };
}
function Qd(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function Jd(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function ef(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = r.valueCallback ? r.valueCallback(a) : a;
    const s = t.slice(o.length);
    return { value: a, rest: s };
  };
}
const tf = /^(\d+)(th|st|nd|rd)?/i, rf = /\d+/i, nf = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, of = {
  any: [/^b/i, /^(a|c)/i]
}, af = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, sf = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, cf = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, lf = {
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
}, uf = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, df = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ff = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, pf = {
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
}, hf = {
  ordinalNumber: ef({
    matchPattern: tf,
    parsePattern: rf,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Dr({
    matchPatterns: nf,
    defaultMatchWidth: "wide",
    parsePatterns: of,
    defaultParseWidth: "any"
  }),
  quarter: Dr({
    matchPatterns: af,
    defaultMatchWidth: "wide",
    parsePatterns: sf,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Dr({
    matchPatterns: cf,
    defaultMatchWidth: "wide",
    parsePatterns: lf,
    defaultParseWidth: "any"
  }),
  day: Dr({
    matchPatterns: uf,
    defaultMatchWidth: "wide",
    parsePatterns: df,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dr({
    matchPatterns: ff,
    defaultMatchWidth: "any",
    parsePatterns: pf,
    defaultParseWidth: "any"
  })
}, mf = {
  code: "en-US",
  formatDistance: Fd,
  formatLong: zd,
  formatRelative: Yd,
  localize: Zd,
  match: hf,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let gf = {};
function Zr() {
  return gf;
}
const ls = 6048e5, yf = 864e5, Li = Symbol.for("constructDateFrom");
function jt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Li in e ? e[Li](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function yt(e, t) {
  return jt(t || e, e);
}
function Wi(e) {
  const t = yt(e), r = new Date(
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
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function bf(e, ...t) {
  const r = jt.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function zi(e, t) {
  const r = yt(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function vf(e, t, r) {
  const [n, o] = bf(
    r == null ? void 0 : r.in,
    e,
    t
  ), i = zi(n), a = zi(o), s = +i - Wi(i), l = +a - Wi(a);
  return Math.round((s - l) / yf);
}
function wf(e, t) {
  const r = yt(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function xf(e, t) {
  const r = yt(e, t == null ? void 0 : t.in);
  return vf(r, wf(r)) + 1;
}
function Vr(e, t) {
  var s, l, u, f;
  const r = Zr(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((f = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = yt(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < n ? 7 : 0) + i - n;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function $n(e, t) {
  return Vr(e, { ...t, weekStartsOn: 1 });
}
function us(e, t) {
  const r = yt(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = jt(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = $n(o), a = jt(r, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = $n(a);
  return r.getTime() >= i.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Cf(e, t) {
  const r = us(e, t), n = jt(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), $n(n);
}
function Sf(e, t) {
  const r = yt(e, t == null ? void 0 : t.in), n = +$n(r) - +Cf(r);
  return Math.round(n / ls) + 1;
}
function ds(e, t) {
  var f, d, m, y;
  const r = yt(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Zr(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((y = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, a = jt((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(n + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = Vr(a, t), l = jt((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(n, 0, i), l.setHours(0, 0, 0, 0);
  const u = Vr(l, t);
  return +r >= +s ? n + 1 : +r >= +u ? n : n - 1;
}
function Ef(e, t) {
  var s, l, u, f;
  const r = Zr(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = ds(e, t), i = jt((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, n), i.setHours(0, 0, 0, 0), Vr(i, t);
}
function Tf(e, t) {
  const r = yt(e, t == null ? void 0 : t.in), n = +Vr(r, t) - +Ef(r, t);
  return Math.round(n / ls) + 1;
}
function xe(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Nt = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return xe(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : xe(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return xe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return xe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return xe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return xe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return xe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return xe(o, t.length);
  }
}, nr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Bi = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
      return r.ordinalNumber(o, { unit: "year" });
    }
    return Nt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = ds(e, n), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return xe(a, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : xe(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = us(e);
    return xe(r, t.length);
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
    const r = e.getFullYear();
    return xe(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return xe(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return xe(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Nt.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return xe(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const o = Tf(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : xe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Sf(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : xe(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Nt.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = xf(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : xe(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const o = e.getDay(), i = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return xe(i, 2);
      case "eo":
        return r.ordinalNumber(i, { unit: "day" });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const o = e.getDay(), i = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return xe(i, t.length);
      case "co":
        return r.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), o = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return xe(o, t.length);
      case "io":
        return r.ordinalNumber(o, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n === 12 ? o = nr.noon : n === 0 ? o = nr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n >= 17 ? o = nr.evening : n >= 12 ? o = nr.afternoon : n >= 4 ? o = nr.morning : o = nr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Nt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Nt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : xe(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : xe(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Nt.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Nt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Nt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Vi(n);
      case "XXXX":
      case "XX":
        return qt(n);
      case "XXXXX":
      case "XXX":
      default:
        return qt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Vi(n);
      case "xxxx":
      case "xx":
        return qt(n);
      case "xxxxx":
      case "xxx":
      default:
        return qt(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Yi(n, ":");
      case "OOOO":
      default:
        return "GMT" + qt(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Yi(n, ":");
      case "zzzz":
      default:
        return "GMT" + qt(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return xe(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return xe(+e, t.length);
  }
};
function Yi(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? r + String(o) : r + String(o) + t + xe(i, 2);
}
function Vi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + xe(Math.abs(e) / 60, 2) : qt(e, t);
}
function qt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = xe(Math.trunc(n / 60), 2), i = xe(n % 60, 2);
  return r + o + t + i;
}
const Hi = (e, t) => {
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
}, fs = (e, t) => {
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
}, Rf = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Hi(e, t);
  let i;
  switch (n) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Hi(n, t)).replace("{{time}}", fs(o, t));
}, kf = {
  p: fs,
  P: Rf
}, Of = /^D+$/, Pf = /^Y+$/, If = ["D", "DD", "YY", "YYYY"];
function $f(e) {
  return Of.test(e);
}
function Df(e) {
  return Pf.test(e);
}
function Mf(e, t, r) {
  const n = Af(e, t, r);
  if (console.warn(n), If.includes(e)) throw new RangeError(n);
}
function Af(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function ps(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function hs(e) {
  return !(!ps(e) && typeof e != "number" || isNaN(+yt(e)));
}
const _f = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Nf = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ff = /^'([^]*?)'?$/, jf = /''/g, Lf = /[a-zA-Z]/;
function Wf(e, t, r) {
  var f, d, m, y, v, p, g, w;
  const n = Zr(), o = (r == null ? void 0 : r.locale) ?? n.locale ?? mf, i = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((d = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((y = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, a = (r == null ? void 0 : r.weekStartsOn) ?? ((p = (v = r == null ? void 0 : r.locale) == null ? void 0 : v.options) == null ? void 0 : p.weekStartsOn) ?? n.weekStartsOn ?? ((w = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = yt(e, r == null ? void 0 : r.in);
  if (!hs(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Nf).map((T) => {
    const S = T[0];
    if (S === "p" || S === "P") {
      const x = kf[S];
      return x(T, o.formatLong);
    }
    return T;
  }).join("").match(_f).map((T) => {
    if (T === "''")
      return { isToken: !1, value: "'" };
    const S = T[0];
    if (S === "'")
      return { isToken: !1, value: zf(T) };
    if (Bi[S])
      return { isToken: !0, value: T };
    if (S.match(Lf))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return { isToken: !1, value: T };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return l.map((T) => {
    if (!T.isToken) return T.value;
    const S = T.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && Df(S) || !(r != null && r.useAdditionalDayOfYearTokens) && $f(S)) && Mf(S, t, String(e));
    const x = Bi[S[0]];
    return x(s, S, o.localize, u);
  }).join("");
}
function zf(e) {
  const t = e.match(Ff);
  return t ? t[1].replace(jf, "'") : e;
}
function Bf() {
  return Object.assign({}, Zr());
}
function Ui(e, t, r) {
  const n = Bf(), o = Hf(e, r.timeZone, r.locale ?? n.locale);
  return "formatToParts" in o ? Yf(o, t) : Vf(o, t);
}
function Yf(e, t) {
  const r = e.formatToParts(t);
  for (let n = r.length - 1; n >= 0; --n)
    if (r[n].type === "timeZoneName")
      return r[n].value;
}
function Vf(e, t) {
  const r = e.format(t).replace(/\u200E/g, ""), n = / [\w-+ ]+$/.exec(r);
  return n ? n[0].substr(1) : "";
}
function Hf(e, t, r) {
  return new Intl.DateTimeFormat(r ? [r.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function Uf(e, t) {
  const r = Zf(t);
  return "formatToParts" in r ? qf(r, e) : Kf(r, e);
}
const Gf = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function qf(e, t) {
  try {
    const r = e.formatToParts(t), n = [];
    for (let o = 0; o < r.length; o++) {
      const i = Gf[r[o].type];
      i !== void 0 && (n[i] = parseInt(r[o].value, 10));
    }
    return n;
  } catch (r) {
    if (r instanceof RangeError)
      return [NaN];
    throw r;
  }
}
function Kf(e, t) {
  const r = e.format(t), n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
  return [
    parseInt(n[3], 10),
    parseInt(n[1], 10),
    parseInt(n[2], 10),
    parseInt(n[4], 10),
    parseInt(n[5], 10),
    parseInt(n[6], 10)
  ];
}
const mo = {}, Gi = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), Xf = Gi === "06/25/2014, 00:00:00" || Gi === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function Zf(e) {
  return mo[e] || (mo[e] = Xf ? new Intl.DateTimeFormat("en-US", {
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
  })), mo[e];
}
function ms(e, t, r, n, o, i, a) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, r), s.setUTCHours(n, o, i, a), s;
}
const qi = 36e5, Qf = 6e4, go = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Jo(e, t, r) {
  if (!e)
    return 0;
  let n = go.timezoneZ.exec(e);
  if (n)
    return 0;
  let o, i;
  if (n = go.timezoneHH.exec(e), n)
    return o = parseInt(n[1], 10), Ki(o) ? -(o * qi) : NaN;
  if (n = go.timezoneHHMM.exec(e), n) {
    o = parseInt(n[2], 10);
    const a = parseInt(n[3], 10);
    return Ki(o, a) ? (i = Math.abs(o) * qi + a * Qf, n[1] === "+" ? -i : i) : NaN;
  }
  if (tp(e)) {
    t = new Date(t || Date.now());
    const a = r ? t : Jf(t), s = _o(a, e);
    return -(r ? s : ep(t, s, e));
  }
  return NaN;
}
function Jf(e) {
  return ms(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function _o(e, t) {
  const r = Uf(e, t), n = ms(r[0], r[1] - 1, r[2], r[3] % 24, r[4], r[5], 0).getTime();
  let o = e.getTime();
  const i = o % 1e3;
  return o -= i >= 0 ? i : 1e3 + i, n - o;
}
function ep(e, t, r) {
  let o = e.getTime() - t;
  const i = _o(new Date(o), r);
  if (t === i)
    return t;
  o -= i - t;
  const a = _o(new Date(o), r);
  return i === a ? i : Math.max(i, a);
}
function Ki(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Xi = {};
function tp(e) {
  if (Xi[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Xi[e] = !0, !0;
  } catch {
    return !1;
  }
}
const rp = 60 * 1e3, np = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = yo(r.timeZone, e);
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Zi(n);
      case "XXXX":
      case "XX":
        return lr(n);
      case "XXXXX":
      case "XXX":
      default:
        return lr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = yo(r.timeZone, e);
    switch (t) {
      case "x":
        return Zi(n);
      case "xxxx":
      case "xx":
        return lr(n);
      case "xxxxx":
      case "xxx":
      default:
        return lr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = yo(r.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + op(n, ":");
      case "OOOO":
      default:
        return "GMT" + lr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return Ui("short", e, r);
      case "zzzz":
      default:
        return Ui("long", e, r);
    }
  }
};
function yo(e, t) {
  const r = e ? Jo(e, t, !0) / rp : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(r))
    throw new RangeError("Invalid time zone specified: " + e);
  return r;
}
function Dn(e, t) {
  const r = e < 0 ? "-" : "";
  let n = Math.abs(e).toString();
  for (; n.length < t; )
    n = "0" + n;
  return r + n;
}
function lr(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Dn(Math.floor(n / 60), 2), i = Dn(Math.floor(n % 60), 2);
  return r + o + t + i;
}
function Zi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Dn(Math.abs(e) / 60, 2) : lr(e, t);
}
function op(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.floor(n / 60), i = n % 60;
  return i === 0 ? r + String(o) : r + String(o) + t + Dn(i, 2);
}
function Qi(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const ip = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, bo = 36e5, Ji = 6e4, ap = 2, Xe = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
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
  timeZone: ip
};
function gs(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const r = t.additionalDigits == null ? ap : Number(t.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const n = sp(e), { year: o, restDateString: i } = cp(n.date, r), a = lp(i, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const s = a.getTime();
    let l = 0, u;
    if (n.time && (l = up(n.time), l === null || isNaN(l)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || t.timeZone) {
      if (u = Jo(n.timeZone || t.timeZone, new Date(s + l)), isNaN(u))
        return /* @__PURE__ */ new Date(NaN);
    } else
      u = Qi(new Date(s + l)), u = Qi(new Date(s + l + u));
    return new Date(s + l + u);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function sp(e) {
  const t = {};
  let r = Xe.dateTimePattern.exec(e), n;
  if (r ? (t.date = r[1], n = r[3]) : (r = Xe.datePattern.exec(e), r ? (t.date = r[1], n = r[2]) : (t.date = null, n = e)), n) {
    const o = Xe.timeZone.exec(n);
    o ? (t.time = n.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = n;
  }
  return t;
}
function cp(e, t) {
  if (e) {
    const r = Xe.YYY[t], n = Xe.YYYYY[t];
    let o = Xe.YYYY.exec(e) || n.exec(e);
    if (o) {
      const i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: e.slice(i.length)
      };
    }
    if (o = Xe.YY.exec(e) || r.exec(e), o) {
      const i = o[1];
      return {
        year: parseInt(i, 10) * 100,
        restDateString: e.slice(i.length)
      };
    }
  }
  return {
    year: null
  };
}
function lp(e, t) {
  if (t === null)
    return null;
  let r, n, o;
  if (!e || !e.length)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  let i = Xe.MM.exec(e);
  if (i)
    return r = /* @__PURE__ */ new Date(0), n = parseInt(i[1], 10) - 1, ta(t, n) ? (r.setUTCFullYear(t, n), r) : /* @__PURE__ */ new Date(NaN);
  if (i = Xe.DDD.exec(e), i) {
    r = /* @__PURE__ */ new Date(0);
    const a = parseInt(i[1], 10);
    return pp(t, a) ? (r.setUTCFullYear(t, 0, a), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = Xe.MMDD.exec(e), i) {
    r = /* @__PURE__ */ new Date(0), n = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10);
    return ta(t, n, a) ? (r.setUTCFullYear(t, n, a), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (i = Xe.Www.exec(e), i)
    return o = parseInt(i[1], 10) - 1, ra(o) ? ea(t, o) : /* @__PURE__ */ new Date(NaN);
  if (i = Xe.WwwD.exec(e), i) {
    o = parseInt(i[1], 10) - 1;
    const a = parseInt(i[2], 10) - 1;
    return ra(o, a) ? ea(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function up(e) {
  let t, r, n = Xe.HH.exec(e);
  if (n)
    return t = parseFloat(n[1].replace(",", ".")), vo(t) ? t % 24 * bo : NaN;
  if (n = Xe.HHMM.exec(e), n)
    return t = parseInt(n[1], 10), r = parseFloat(n[2].replace(",", ".")), vo(t, r) ? t % 24 * bo + r * Ji : NaN;
  if (n = Xe.HHMMSS.exec(e), n) {
    t = parseInt(n[1], 10), r = parseInt(n[2], 10);
    const o = parseFloat(n[3].replace(",", "."));
    return vo(t, r, o) ? t % 24 * bo + r * Ji + o * 1e3 : NaN;
  }
  return null;
}
function ea(e, t, r) {
  t = t || 0, r = r || 0;
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const o = n.getUTCDay() || 7, i = t * 7 + r + 1 - o;
  return n.setUTCDate(n.getUTCDate() + i), n;
}
const dp = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], fp = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ys(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function ta(e, t, r) {
  if (t < 0 || t > 11)
    return !1;
  if (r != null) {
    if (r < 1)
      return !1;
    const n = ys(e);
    if (n && r > fp[t] || !n && r > dp[t])
      return !1;
  }
  return !0;
}
function pp(e, t) {
  if (t < 1)
    return !1;
  const r = ys(e);
  return !(r && t > 366 || !r && t > 365);
}
function ra(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function vo(e, t, r) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || r != null && (r < 0 || r >= 60));
}
const hp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function mp(e, t, r = {}) {
  t = String(t);
  const n = t.match(hp);
  if (n) {
    const o = gs(r.originalDate || e, r);
    t = n.reduce(function(i, a) {
      if (a[0] === "'")
        return i;
      const s = i.indexOf(a), l = i[s - 1] === "'", u = i.replace(a, "'" + np[a[0]](o, a, r) + "'");
      return l ? u.substring(0, s - 1) + u.substring(s + 1) : u;
    }, t);
  }
  return Wf(e, t, r);
}
function gp(e, t, r) {
  e = gs(e, r);
  const n = Jo(t, e, !0), o = new Date(e.getTime() - n), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function yp(e, t, r, n) {
  return n = {
    ...n,
    timeZone: t,
    originalDate: e
  }, mp(gp(e, t, { timeZone: n.timeZone }), r, n);
}
var bs = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.TEXT = "dd-MM-yyyy HH:mm", e.TEXT_WITHOUT_TIME = "dd-MM-yyyy", e))(bs || {});
const bp = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'") => {
  if (!e)
    return "";
  const r = !ps(e) && typeof e == "string" ? new Date(e) : e;
  if (!hs(r))
    return "--";
  const n = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return yp(e, n, t);
}, vp = ({
  columns: e,
  selectionEnabled: t
}) => Be(() => {
  const r = [];
  return t && r.push({
    ...ol,
    minWidth: 50,
    maxWidth: 50
  }), r.push(
    ...e.map((n) => n.type === jr.DATE && !n.renderCell ? {
      ...n,
      renderCell: ({ row: o }) => bp(o[n.key], bs.TEXT)
    } : n)
  ), r;
}, [e]);
var No = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var wo, na;
function wp() {
  if (na) return wo;
  na = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return wo = o() ? Object.assign : function(i, a) {
    for (var s, l = n(i), u, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        u = e(s);
        for (var m = 0; m < u.length; m++)
          r.call(s, u[m]) && (l[u[m]] = s[u[m]]);
      }
    }
    return l;
  }, wo;
}
var xo, oa;
function ei() {
  if (oa) return xo;
  oa = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xo = e, xo;
}
var Co, ia;
function vs() {
  return ia || (ia = 1, Co = Function.call.bind(Object.prototype.hasOwnProperty)), Co;
}
var So, aa;
function xp() {
  if (aa) return So;
  aa = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ei(), r = {}, n = vs();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var d;
          try {
            if (typeof i[f] != "function") {
              var m = Error(
                (l || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = i[f](a, f, l, s, null, t);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + s + " type: " + d.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, So = o, So;
}
var Eo, sa;
function Cp() {
  if (sa) return Eo;
  sa = 1;
  var e = Xo, t = wp(), r = ei(), n = vs(), o = xp(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Eo = function(s, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d($) {
      var V = $ && (u && $[u] || $[f]);
      if (typeof V == "function")
        return V;
    }
    var m = "<<anonymous>>", y = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: T(),
      arrayOf: S,
      element: x(),
      elementType: b(),
      instanceOf: I,
      node: c(),
      objectOf: _,
      oneOf: E,
      oneOfType: B,
      shape: F,
      exact: D
    };
    function v($, V) {
      return $ === V ? $ !== 0 || 1 / $ === 1 / V : $ !== $ && V !== V;
    }
    function p($, V) {
      this.message = $, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function g($) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, te = 0;
      function re(N, Y, O, L, q, G, ce) {
        if (L = L || m, G = G || O, ce !== r) {
          if (l) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = L + ":" + O;
            !V[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            te < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[Ce] = !0, te++);
          }
        }
        return Y[O] == null ? N ? Y[O] === null ? new p("The " + q + " `" + G + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new p("The " + q + " `" + G + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : $(Y, O, L, q, G);
      }
      var P = re.bind(null, !1);
      return P.isRequired = re.bind(null, !0), P;
    }
    function w($) {
      function V(te, re, P, N, Y, O) {
        var L = te[re], q = ie(L);
        if (q !== $) {
          var G = de(L);
          return new p(
            "Invalid " + N + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + P + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
          );
        }
        return null;
      }
      return g(V);
    }
    function T() {
      return g(a);
    }
    function S($) {
      function V(te, re, P, N, Y) {
        if (typeof $ != "function")
          return new p("Property `" + Y + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var O = te[re];
        if (!Array.isArray(O)) {
          var L = ie(O);
          return new p("Invalid " + N + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected an array."));
        }
        for (var q = 0; q < O.length; q++) {
          var G = $(O, q, P, N, Y + "[" + q + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return g(V);
    }
    function x() {
      function $(V, te, re, P, N) {
        var Y = V[te];
        if (!s(Y)) {
          var O = ie(Y);
          return new p("Invalid " + P + " `" + N + "` of type " + ("`" + O + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g($);
    }
    function b() {
      function $(V, te, re, P, N) {
        var Y = V[te];
        if (!e.isValidElementType(Y)) {
          var O = ie(Y);
          return new p("Invalid " + P + " `" + N + "` of type " + ("`" + O + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g($);
    }
    function I($) {
      function V(te, re, P, N, Y) {
        if (!(te[re] instanceof $)) {
          var O = $.name || m, L = le(te[re]);
          return new p("Invalid " + N + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return g(V);
    }
    function E($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function V(te, re, P, N, Y) {
        for (var O = te[re], L = 0; L < $.length; L++)
          if (v(O, $[L]))
            return null;
        var q = JSON.stringify($, function(ce, W) {
          var Ce = de(W);
          return Ce === "symbol" ? String(W) : W;
        });
        return new p("Invalid " + N + " `" + Y + "` of value `" + String(O) + "` " + ("supplied to `" + P + "`, expected one of " + q + "."));
      }
      return g(V);
    }
    function _($) {
      function V(te, re, P, N, Y) {
        if (typeof $ != "function")
          return new p("Property `" + Y + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var O = te[re], L = ie(O);
        if (L !== "object")
          return new p("Invalid " + N + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected an object."));
        for (var q in O)
          if (n(O, q)) {
            var G = $(O, q, P, N, Y + "." + q, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return g(V);
    }
    function B($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var V = 0; V < $.length; V++) {
        var te = $[V];
        if (typeof te != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ge(te) + " at index " + V + "."
          ), a;
      }
      function re(P, N, Y, O, L) {
        for (var q = [], G = 0; G < $.length; G++) {
          var ce = $[G], W = ce(P, N, Y, O, L, r);
          if (W == null)
            return null;
          W.data && n(W.data, "expectedType") && q.push(W.data.expectedType);
        }
        var Ce = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new p("Invalid " + O + " `" + L + "` supplied to " + ("`" + Y + "`" + Ce + "."));
      }
      return g(re);
    }
    function c() {
      function $(V, te, re, P, N) {
        return Q(V[te]) ? null : new p("Invalid " + P + " `" + N + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return g($);
    }
    function R($, V, te, re, P) {
      return new p(
        ($ || "React class") + ": " + V + " type `" + te + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function F($) {
      function V(te, re, P, N, Y) {
        var O = te[re], L = ie(O);
        if (L !== "object")
          return new p("Invalid " + N + " `" + Y + "` of type `" + L + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var q in $) {
          var G = $[q];
          if (typeof G != "function")
            return R(P, N, Y, q, de(G));
          var ce = G(O, q, P, N, Y + "." + q, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return g(V);
    }
    function D($) {
      function V(te, re, P, N, Y) {
        var O = te[re], L = ie(O);
        if (L !== "object")
          return new p("Invalid " + N + " `" + Y + "` of type `" + L + "` " + ("supplied to `" + P + "`, expected `object`."));
        var q = t({}, te[re], $);
        for (var G in q) {
          var ce = $[G];
          if (n($, G) && typeof ce != "function")
            return R(P, N, Y, G, de(ce));
          if (!ce)
            return new p(
              "Invalid " + N + " `" + Y + "` key `" + G + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(te[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var W = ce(O, G, P, N, Y + "." + G, r);
          if (W)
            return W;
        }
        return null;
      }
      return g(V);
    }
    function Q($) {
      switch (typeof $) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !$;
        case "object":
          if (Array.isArray($))
            return $.every(Q);
          if ($ === null || s($))
            return !0;
          var V = d($);
          if (V) {
            var te = V.call($), re;
            if (V !== $.entries) {
              for (; !(re = te.next()).done; )
                if (!Q(re.value))
                  return !1;
            } else
              for (; !(re = te.next()).done; ) {
                var P = re.value;
                if (P && !Q(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K($, V) {
      return $ === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function ie($) {
      var V = typeof $;
      return Array.isArray($) ? "array" : $ instanceof RegExp ? "object" : K(V, $) ? "symbol" : V;
    }
    function de($) {
      if (typeof $ > "u" || $ === null)
        return "" + $;
      var V = ie($);
      if (V === "object") {
        if ($ instanceof Date)
          return "date";
        if ($ instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function ge($) {
      var V = de($);
      switch (V) {
        case "array":
        case "object":
          return "an " + V;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + V;
        default:
          return V;
      }
    }
    function le($) {
      return !$.constructor || !$.constructor.name ? m : $.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, Eo;
}
var To, ca;
function Sp() {
  if (ca) return To;
  ca = 1;
  var e = ei();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, To = function() {
    function n(a, s, l, u, f, d) {
      if (d !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, To;
}
if (process.env.NODE_ENV !== "production") {
  var Ep = Xo, Tp = !0;
  No.exports = Cp()(Ep.isElement, Tp);
} else
  No.exports = Sp()();
var Rp = No.exports;
const C = /* @__PURE__ */ Cc(Rp), ti = C.oneOfType([C.func, C.object]);
function Yn(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && (a += (s === !0 ? "" : " ") + t(u), s = !1, r && r[u] && (a += " " + r[u]));
    }
    n[o] = a;
  }
  return n;
}
function Lt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function kp(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function ri(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), kp(e, t, r);
}
function Op(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Wt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Wt(Op(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Lt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Lt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Pp = (e) => {
  const t = Wt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ar = (e, t) => {
  try {
    return Pp(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Vn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ws(e) {
  e = Wt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (u, f = (u + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), Vn({
    type: s,
    values: l
  });
}
function Fo(e) {
  e = Wt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Wt(ws(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function la(e, t) {
  const r = Fo(e), n = Fo(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function jo(e, t) {
  return e = Wt(e), t = ri(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Vn(e);
}
function gn(e, t, r) {
  try {
    return jo(e, t);
  } catch {
    return e;
  }
}
function ni(e, t) {
  if (e = Wt(e), t = ri(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Vn(e);
}
function Ee(e, t, r) {
  try {
    return ni(e, t);
  } catch {
    return e;
  }
}
function oi(e, t) {
  if (e = Wt(e), t = ri(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Vn(e);
}
function Te(e, t, r) {
  try {
    return oi(e, t);
  } catch {
    return e;
  }
}
function Ip(e, t = 0.15) {
  return Fo(e) > 0.5 ? ni(e, t) : oi(e, t);
}
function yn(e, t, r) {
  try {
    return Ip(e, t);
  } catch {
    return e;
  }
}
function pt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Lt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function $p(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ii = (e) => $p(e) && e !== "classes";
function It(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xs(e) {
  if (/* @__PURE__ */ Z.isValidElement(e) || !It(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = xs(e[r]);
  }), t;
}
function at(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return It(e) && It(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ Z.isValidElement(t[o]) ? n[o] = t[o] : It(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && It(e[o]) ? n[o] = at(e[o], t[o], r) : r.clone ? n[o] = It(t[o]) ? xs(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Lr(e, t) {
  return t ? at(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Bt = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.string, C.object, C.array]) : {};
function Dp(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Mp(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ap(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Lt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function _p(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const l = t(e.breakpoints.not(...s), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Hn = {
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
}, ua = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Hn[e]}px)`
}, Np = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Hn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function $t(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || ua;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || ua;
    return Object.keys(t).reduce((a, s) => {
      if (Mp(i.keys, s)) {
        const l = Ap(n.containerQueries ? n : Np, s);
        l && (a[l] = r(t[s], s));
      } else if (Object.keys(i.values || Hn).includes(s)) {
        const l = i.up(s);
        a[l] = r(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Fp(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function jp(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Un(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Mn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Un(e, r) || n, t && (o = t(o, n, e)), o;
}
function Fe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, u = Un(l, n) || {};
    return $t(a, s, (d) => {
      let m = Mn(u, o, d);
      return d === m && typeof d == "string" && (m = Mn(u, o, `${t}${d === "default" ? "" : pt(d)}`, d)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Bt
  } : {}, i.filterProps = [t], i;
}
function Lp(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Wp = {
  m: "margin",
  p: "padding"
}, zp = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, da = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Bp = Lp((e) => {
  if (e.length > 2)
    if (da[e])
      e = da[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Wp[t], o = zp[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Gn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], qn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Yp = [...Gn, ...qn];
function Qr(e, t, r, n) {
  const o = Un(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ai(e) {
  return Qr(e, "spacing", 8, "spacing");
}
function Jr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Vp(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Jr(t, r), n), {});
}
function Hp(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Bp(r), i = Vp(o, n), a = e[r];
  return $t(e, a, i);
}
function Cs(e, t) {
  const r = ai(e.theme);
  return Object.keys(e).map((n) => Hp(e, t, n, r)).reduce(Lr, {});
}
function Ae(e) {
  return Cs(e, Gn);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? Gn.reduce((e, t) => (e[t] = Bt, e), {}) : {};
Ae.filterProps = Gn;
function _e(e) {
  return Cs(e, qn);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? qn.reduce((e, t) => (e[t] = Bt, e), {}) : {};
_e.filterProps = qn;
process.env.NODE_ENV !== "production" && Yp.reduce((e, t) => (e[t] = Bt, e), {});
function Kn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Lr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function dt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ht(e, t) {
  return Fe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Up = ht("border", dt), Gp = ht("borderTop", dt), qp = ht("borderRight", dt), Kp = ht("borderBottom", dt), Xp = ht("borderLeft", dt), Zp = ht("borderColor"), Qp = ht("borderTopColor"), Jp = ht("borderRightColor"), eh = ht("borderBottomColor"), th = ht("borderLeftColor"), rh = ht("outline", dt), nh = ht("outlineColor"), Xn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Qr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Jr(t, n)
    });
    return $t(e, e.borderRadius, r);
  }
  return null;
};
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Bt
} : {};
Xn.filterProps = ["borderRadius"];
Kn(Up, Gp, qp, Kp, Xp, Zp, Qp, Jp, eh, th, Xn, rh, nh);
const Zn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Qr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Jr(t, n)
    });
    return $t(e, e.gap, r);
  }
  return null;
};
Zn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Bt
} : {};
Zn.filterProps = ["gap"];
const Qn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Qr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Jr(t, n)
    });
    return $t(e, e.columnGap, r);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Bt
} : {};
Qn.filterProps = ["columnGap"];
const Jn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Qr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Jr(t, n)
    });
    return $t(e, e.rowGap, r);
  }
  return null;
};
Jn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Bt
} : {};
Jn.filterProps = ["rowGap"];
const oh = Fe({
  prop: "gridColumn"
}), ih = Fe({
  prop: "gridRow"
}), ah = Fe({
  prop: "gridAutoFlow"
}), sh = Fe({
  prop: "gridAutoColumns"
}), ch = Fe({
  prop: "gridAutoRows"
}), lh = Fe({
  prop: "gridTemplateColumns"
}), uh = Fe({
  prop: "gridTemplateRows"
}), dh = Fe({
  prop: "gridTemplateAreas"
}), fh = Fe({
  prop: "gridArea"
});
Kn(Zn, Qn, Jn, oh, ih, ah, sh, ch, lh, uh, dh, fh);
function dr(e, t) {
  return t === "grey" ? t : e;
}
const ph = Fe({
  prop: "color",
  themeKey: "palette",
  transform: dr
}), hh = Fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: dr
}), mh = Fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: dr
});
Kn(ph, hh, mh);
function ot(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const gh = Fe({
  prop: "width",
  transform: ot
}), si = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || Hn[r];
      return n ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ot(r)
      };
    };
    return $t(e, e.maxWidth, t);
  }
  return null;
};
si.filterProps = ["maxWidth"];
const yh = Fe({
  prop: "minWidth",
  transform: ot
}), bh = Fe({
  prop: "height",
  transform: ot
}), vh = Fe({
  prop: "maxHeight",
  transform: ot
}), wh = Fe({
  prop: "minHeight",
  transform: ot
});
Fe({
  prop: "size",
  cssProperty: "width",
  transform: ot
});
Fe({
  prop: "size",
  cssProperty: "height",
  transform: ot
});
const xh = Fe({
  prop: "boxSizing"
});
Kn(gh, si, yh, bh, vh, wh, xh);
const eo = {
  // borders
  border: {
    themeKey: "borders",
    transform: dt
  },
  borderTop: {
    themeKey: "borders",
    transform: dt
  },
  borderRight: {
    themeKey: "borders",
    transform: dt
  },
  borderBottom: {
    themeKey: "borders",
    transform: dt
  },
  borderLeft: {
    themeKey: "borders",
    transform: dt
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
    transform: dt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Xn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: dr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: dr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: dr
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
  },
  m: {
    style: Ae
  },
  mt: {
    style: Ae
  },
  mr: {
    style: Ae
  },
  mb: {
    style: Ae
  },
  ml: {
    style: Ae
  },
  mx: {
    style: Ae
  },
  my: {
    style: Ae
  },
  margin: {
    style: Ae
  },
  marginTop: {
    style: Ae
  },
  marginRight: {
    style: Ae
  },
  marginBottom: {
    style: Ae
  },
  marginLeft: {
    style: Ae
  },
  marginX: {
    style: Ae
  },
  marginY: {
    style: Ae
  },
  marginInline: {
    style: Ae
  },
  marginInlineStart: {
    style: Ae
  },
  marginInlineEnd: {
    style: Ae
  },
  marginBlock: {
    style: Ae
  },
  marginBlockStart: {
    style: Ae
  },
  marginBlockEnd: {
    style: Ae
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
    style: Zn
  },
  rowGap: {
    style: Jn
  },
  columnGap: {
    style: Qn
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
    transform: ot
  },
  maxWidth: {
    style: si
  },
  minWidth: {
    transform: ot
  },
  height: {
    transform: ot
  },
  maxHeight: {
    transform: ot
  },
  minHeight: {
    transform: ot
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
function Ch(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Sh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Eh() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: u,
      transform: f,
      style: d
    } = s;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = Un(o, u) || {};
    return d ? d(a) : $t(a, n, (v) => {
      let p = Mn(m, f, v);
      return v === p && typeof v == "string" && (p = Mn(m, f, `${r}${v === "default" ? "" : pt(v)}`, v)), l === !1 ? p : {
        [l]: p
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? eo;
    function a(s) {
      let l = s;
      if (typeof s == "function")
        l = s(o);
      else if (typeof s != "object")
        return s;
      if (!l)
        return null;
      const u = Fp(o.breakpoints), f = Object.keys(u);
      let d = u;
      return Object.keys(l).forEach((m) => {
        const y = Sh(l[m], o);
        if (y != null)
          if (typeof y == "object")
            if (i[m])
              d = Lr(d, e(m, y, o, i));
            else {
              const v = $t({
                theme: o
              }, y, (p) => ({
                [m]: p
              }));
              Ch(v, y) ? d[m] = t({
                sx: y,
                theme: o
              }) : d = Lr(d, v);
            }
          else
            d = Lr(d, e(m, y, o, i));
      }), Dp(o, jp(f, d));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const yr = Eh();
yr.filterProps = ["sx"];
/**
 * @mui/styled-engine v6.1.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Th(e, t) {
  const r = gr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Rh(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const fa = [];
function pa(e) {
  return fa[0] = e, Zo(fa);
}
const kh = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Oh(e) {
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
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = kh(t), a = Object.keys(i);
  function s(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, y) {
    const v = a.indexOf(y);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(v !== -1 && typeof t[a[v]] == "number" ? t[a[v]] : y) - n / 100}${r})`;
  }
  function f(m) {
    return a.indexOf(m) + 1 < a.length ? u(m, a[a.indexOf(m) + 1]) : s(m);
  }
  function d(m) {
    const y = a.indexOf(m);
    return y === 0 ? s(a[1]) : y === a.length - 1 ? l(a[y]) : u(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: l,
    between: u,
    only: f,
    not: d,
    unit: r,
    ...o
  };
}
const Ph = {
  borderRadius: 4
};
function Ss(e = 8, t = ai({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Ih(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Es(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = Oh(r), l = Ss(o);
  let u = at({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Ph,
      ...i
    }
  }, a);
  return u = _p(u), u.applyStyles = Ih, u = t.reduce((f, d) => at(f, d), u), u.unstable_sxConfig = {
    ...eo,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return yr({
      sx: d,
      theme: this
    });
  }, u;
}
const ha = (e) => e, $h = () => {
  let e = ha;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ha;
    }
  };
}, Dh = $h(), Mh = {
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
function wr(e, t, r = "Mui") {
  const n = Mh[t];
  return n ? `${r}-${n}` : `${Dh.generate(e)}-${t}`;
}
function en(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = wr(e, o, r);
  }), n;
}
var Lo = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function Ah() {
  if (ma) return ve;
  ma = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function p(g) {
    if (typeof g == "object" && g !== null) {
      var w = g.$$typeof;
      switch (w) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case a:
                case l:
                case m:
                case d:
                case i:
                  return g;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return ve.ContextConsumer = a, ve.ContextProvider = i, ve.Element = e, ve.ForwardRef = l, ve.Fragment = r, ve.Lazy = m, ve.Memo = d, ve.Portal = t, ve.Profiler = o, ve.StrictMode = n, ve.Suspense = u, ve.SuspenseList = f, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(g) {
    return p(g) === a;
  }, ve.isContextProvider = function(g) {
    return p(g) === i;
  }, ve.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ve.isForwardRef = function(g) {
    return p(g) === l;
  }, ve.isFragment = function(g) {
    return p(g) === r;
  }, ve.isLazy = function(g) {
    return p(g) === m;
  }, ve.isMemo = function(g) {
    return p(g) === d;
  }, ve.isPortal = function(g) {
    return p(g) === t;
  }, ve.isProfiler = function(g) {
    return p(g) === o;
  }, ve.isStrictMode = function(g) {
    return p(g) === n;
  }, ve.isSuspense = function(g) {
    return p(g) === u;
  }, ve.isSuspenseList = function(g) {
    return p(g) === f;
  }, ve.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === f || g === y || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === d || g.$$typeof === i || g.$$typeof === a || g.$$typeof === l || g.$$typeof === v || g.getModuleId !== void 0);
  }, ve.typeOf = p, ve;
}
var we = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function _h() {
  return ga || (ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = !1, p = !1, g = !1, w = !1, T = !1, S;
    S = Symbol.for("react.module.reference");
    function x(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === r || U === o || T || U === n || U === u || U === f || w || U === y || v || p || g || typeof U == "object" && U !== null && (U.$$typeof === m || U.$$typeof === d || U.$$typeof === i || U.$$typeof === a || U.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === S || U.getModuleId !== void 0));
    }
    function b(U) {
      if (typeof U == "object" && U !== null) {
        var Re = U.$$typeof;
        switch (Re) {
          case e:
            var Ie = U.type;
            switch (Ie) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return Ie;
              default:
                var Ye = Ie && Ie.$$typeof;
                switch (Ye) {
                  case s:
                  case a:
                  case l:
                  case m:
                  case d:
                  case i:
                    return Ye;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var I = a, E = i, _ = e, B = l, c = r, R = m, F = d, D = t, Q = o, K = n, ie = u, de = f, ge = !1, le = !1;
    function $(U) {
      return ge || (ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(U) {
      return le || (le = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(U) {
      return b(U) === a;
    }
    function re(U) {
      return b(U) === i;
    }
    function P(U) {
      return typeof U == "object" && U !== null && U.$$typeof === e;
    }
    function N(U) {
      return b(U) === l;
    }
    function Y(U) {
      return b(U) === r;
    }
    function O(U) {
      return b(U) === m;
    }
    function L(U) {
      return b(U) === d;
    }
    function q(U) {
      return b(U) === t;
    }
    function G(U) {
      return b(U) === o;
    }
    function ce(U) {
      return b(U) === n;
    }
    function W(U) {
      return b(U) === u;
    }
    function Ce(U) {
      return b(U) === f;
    }
    we.ContextConsumer = I, we.ContextProvider = E, we.Element = _, we.ForwardRef = B, we.Fragment = c, we.Lazy = R, we.Memo = F, we.Portal = D, we.Profiler = Q, we.StrictMode = K, we.Suspense = ie, we.SuspenseList = de, we.isAsyncMode = $, we.isConcurrentMode = V, we.isContextConsumer = te, we.isContextProvider = re, we.isElement = P, we.isForwardRef = N, we.isFragment = Y, we.isLazy = O, we.isMemo = L, we.isPortal = q, we.isProfiler = G, we.isStrictMode = ce, we.isSuspense = W, we.isSuspenseList = Ce, we.isValidElementType = x, we.typeOf = b;
  }()), we;
}
process.env.NODE_ENV === "production" ? Lo.exports = Ah() : Lo.exports = _h();
var ya = Lo.exports;
function Ts(e, t = "") {
  return e.displayName || e.name || t;
}
function ba(e, t, r) {
  const n = Ts(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Nh(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ts(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ya.ForwardRef:
          return ba(e, e.render, "ForwardRef");
        case ya.Memo:
          return ba(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Rs(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: pa(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = pa(o.style));
  }), n;
}
const Fh = Es();
function Ro(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function jh(e) {
  return e ? (t, r) => r[e] : null;
}
function Lh(e, t, r) {
  e.theme = Yh(e.theme) ? r : e.theme[t] || e.theme;
}
function Tn(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Tn(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return ks(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function ks(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function Wh(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Fh,
    rootShouldForwardProp: n = Ro,
    slotShouldForwardProp: o = Ro
  } = e;
  function i(s) {
    Lh(s, t, r);
  }
  return (s, l = {}) => {
    Rh(s, (b) => b.filter((I) => I !== yr));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: d,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = jh(Os(f)),
      ...v
    } = l, p = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), g = m || !1;
    let w = Ro;
    f === "Root" || f === "root" ? w = n : f ? w = o : Vh(s) && (w = void 0);
    const T = Th(s, {
      shouldForwardProp: w,
      label: Bh(u, f),
      ...v
    }), S = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(E) {
          return Tn(E, b);
        };
      if (It(b)) {
        const I = Rs(b);
        return I.variants ? function(_) {
          return Tn(_, I);
        } : I.style;
      }
      return b;
    }, x = (...b) => {
      const I = [], E = b.map(S), _ = [];
      if (I.push(i), u && y && _.push(function(F) {
        var ie, de;
        const Q = (de = (ie = F.theme.components) == null ? void 0 : ie[u]) == null ? void 0 : de.styleOverrides;
        if (!Q)
          return null;
        const K = {};
        for (const ge in Q)
          K[ge] = Tn(F, Q[ge]);
        return y(F, K);
      }), u && !p && _.push(function(F) {
        var K, ie;
        const D = F.theme, Q = (ie = (K = D == null ? void 0 : D.components) == null ? void 0 : K[u]) == null ? void 0 : ie.variants;
        return Q ? ks(F, Q) : null;
      }), g || _.push(yr), Array.isArray(E[0])) {
        const R = E.shift(), F = new Array(I.length).fill(""), D = new Array(_.length).fill("");
        let Q;
        Q = [...F, ...R, ...D], Q.raw = [...F, ...R.raw, ...D], I.unshift(Q);
      }
      const B = [...I, ...E, ..._], c = T(...B);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = zh(u, f, s)), c;
    };
    return T.withConfig && (x.withConfig = T.withConfig), x;
  };
}
function zh(e, t, r) {
  return e ? `${e}${pt(t || "")}` : `Styled(${Nh(r)})`;
}
function Bh(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Os(t || "Root")}`), r;
}
function Yh(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Vh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Os(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Wo(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const l = s;
              r[o][l] = Wo(i[l], a[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const Hh = typeof window < "u" ? Z.useLayoutEffect : Z.useEffect;
function Uh(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Gh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function qh(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !Gh(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Kh = Uh(C.elementType, qh);
function Xh(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Zh({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = Z.useRef(e !== void 0), [i, a] = Z.useState(t), s = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    Z.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = Z.useRef(t);
    Z.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = Z.useCallback((u) => {
    o || a(u);
  }, []);
  return [s, l];
}
function bn(e) {
  const t = Z.useRef(e);
  return Hh(() => {
    t.current = e;
  }), Z.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function va(...e) {
  return Z.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Xh(r, t);
    });
  }, e);
}
const wa = {};
function Ps(e, t) {
  const r = Z.useRef(wa);
  return r.current === wa && (r.current = e(t)), r;
}
const Qh = [];
function Jh(e) {
  Z.useEffect(e, Qh);
}
class ci {
  constructor() {
    kr(this, "currentId", null);
    kr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    kr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ci();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function em() {
  const e = Ps(ci.create).current;
  return Jh(e.disposeEffect), e;
}
function xa(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const tm = /* @__PURE__ */ Z.createContext(void 0);
process.env.NODE_ENV !== "production" && (C.node, C.object);
function rm(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Wo(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Wo(o, n) : n;
}
function nm({
  props: e,
  name: t
}) {
  const r = Z.useContext(tm);
  return rm({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Ca = {
  theme: void 0
};
function om(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Ca.theme = o.theme, i = Rs(e(Ca)), t = i, r = o.theme), i;
  };
}
function im(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Sa = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, am = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, l]) => {
      (!r || r && !r([...i, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, s], Array.isArray(l) ? [...a, s] : a) : t([...i, s], l, a));
    });
  }
  n(e);
}, sm = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ko(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return am(
    e,
    (s, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(s, l))) {
        const f = `--${r ? `${r}-` : ""}${s.join("-")}`, d = sm(s, l);
        Object.assign(o, {
          [f]: d
        }), Sa(i, s, `var(${f})`, u), Sa(a, s, `var(${f}, ${d})`, u);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function cm(e, t = {}) {
  const {
    getSelector: r = g,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...l
  } = e, {
    vars: u,
    css: f,
    varsWithDefaults: d
  } = ko(l, t);
  let m = d;
  const y = {}, {
    [s]: v,
    ...p
  } = i;
  if (Object.entries(p || {}).forEach(([S, x]) => {
    const {
      vars: b,
      css: I,
      varsWithDefaults: E
    } = ko(x, t);
    m = at(m, E), y[S] = {
      css: I,
      vars: b
    };
  }), v) {
    const {
      css: S,
      vars: x,
      varsWithDefaults: b
    } = ko(v, t);
    m = at(m, b), y[s] = {
      css: S,
      vars: x
    };
  }
  function g(S, x) {
    var I, E;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), S) {
      if (b === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (I = i[S]) == null ? void 0 : I.palette) == null ? void 0 : E.mode) || S})`]: {
            ":root": x
          }
        };
      if (b)
        return e.defaultColorScheme === S ? `:root, ${b.replace("%s", String(S))}` : b.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let S = {
        ...u
      };
      return Object.entries(y).forEach(([, {
        vars: x
      }]) => {
        S = at(S, x);
      }), S;
    },
    generateStyleSheets: () => {
      var _, B;
      const S = [], x = e.defaultColorScheme || "light";
      function b(c, R) {
        Object.keys(R).length && S.push(typeof c == "string" ? {
          [c]: {
            ...R
          }
        } : c);
      }
      b(r(void 0, {
        ...f
      }), f);
      const {
        [x]: I,
        ...E
      } = y;
      if (I) {
        const {
          css: c
        } = I, R = (B = (_ = i[x]) == null ? void 0 : _.palette) == null ? void 0 : B.mode, F = !n && R ? {
          colorScheme: R,
          ...c
        } : {
          ...c
        };
        b(r(x, {
          ...F
        }), F);
      }
      return Object.entries(E).forEach(([c, {
        css: R
      }]) => {
        var Q, K;
        const F = (K = (Q = i[c]) == null ? void 0 : Q.palette) == null ? void 0 : K.mode, D = !n && F ? {
          colorScheme: F,
          ...R
        } : {
          ...R
        };
        b(r(c, {
          ...D
        }), D);
      }), S;
    }
  };
}
function lm(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Hr = {
  black: "#000",
  white: "#fff"
}, um = {
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
}, or = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, ir = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Mr = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ar = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, sr = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, cr = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
function Is() {
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
      paper: Hr.white,
      default: Hr.white
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
const dm = Is();
function $s() {
  return {
    text: {
      primary: Hr.white,
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
      active: Hr.white,
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
const Ea = $s();
function Ta(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = oi(e.main, o) : t === "dark" && (e.dark = ni(e.main, i)));
}
function fm(e = "light") {
  return e === "dark" ? {
    main: ar[200],
    light: ar[50],
    dark: ar[400]
  } : {
    main: ar[700],
    light: ar[400],
    dark: ar[800]
  };
}
function pm(e = "light") {
  return e === "dark" ? {
    main: or[200],
    light: or[50],
    dark: or[400]
  } : {
    main: or[500],
    light: or[300],
    dark: or[700]
  };
}
function hm(e = "light") {
  return e === "dark" ? {
    main: ir[500],
    light: ir[300],
    dark: ir[700]
  } : {
    main: ir[700],
    light: ir[400],
    dark: ir[800]
  };
}
function mm(e = "light") {
  return e === "dark" ? {
    main: sr[400],
    light: sr[300],
    dark: sr[700]
  } : {
    main: sr[700],
    light: sr[500],
    dark: sr[900]
  };
}
function gm(e = "light") {
  return e === "dark" ? {
    main: cr[400],
    light: cr[300],
    dark: cr[700]
  } : {
    main: cr[800],
    light: cr[500],
    dark: cr[900]
  };
}
function ym(e = "light") {
  return e === "dark" ? {
    main: Mr[400],
    light: Mr[300],
    dark: Mr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Mr[500],
    dark: Mr[900]
  };
}
function li(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || fm(t), a = e.secondary || pm(t), s = e.error || hm(t), l = e.info || mm(t), u = e.success || gm(t), f = e.warning || ym(t);
  function d(p) {
    const g = la(p, Ea.text.primary) >= r ? Ea.text.primary : dm.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = la(p, g);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${g} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const m = ({
    color: p,
    name: g,
    mainShade: w = 500,
    lightShade: T = 300,
    darkShade: S = 700
  }) => {
    if (p = {
      ...p
    }, !p.main && p[w] && (p.main = p[w]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Lt(11, g ? ` (${g})` : "", w));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Lt(12, g ? ` (${g})` : "", JSON.stringify(p.main)));
    return Ta(p, "light", T, n), Ta(p, "dark", S, n), p.contrastText || (p.contrastText = d(p.main)), p;
  };
  let y;
  return t === "light" ? y = Is() : t === "dark" && (y = $s()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), at({
    // A collection of common colors.
    common: {
      ...Hr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: um,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...y
  }, o);
}
function bm(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function vm(e, t) {
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
function wm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ra = {
  textTransform: "uppercase"
}, ka = '"Roboto", "Helvetica", "Arial", sans-serif';
function xm(e, t) {
  const {
    fontFamily: r = ka,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: f,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, y = f || ((g) => `${g / l * m}rem`), v = (g, w, T, S, x) => ({
    fontFamily: r,
    fontWeight: g,
    fontSize: y(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ka ? {
      letterSpacing: `${wm(S / w)}em`
    } : {},
    ...x,
    ...u
  }), p = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(a, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(a, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(a, 14, 1.75, 0.4, Ra),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, Ra),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return at({
    htmlFontSize: l,
    pxToRem: y,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...p
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const Cm = 0.2, Sm = 0.14, Em = 0.12;
function Pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Cm})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Sm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Em})`].join(",");
}
const Tm = ["none", Pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Rm = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, km = {
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
function Oa(e) {
  return `${Math.round(e)}ms`;
}
function Om(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Pm(e) {
  const t = {
    ...Rm,
    ...e.easing
  }, r = {
    ...km,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Om,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", d = (m) => !Number.isNaN(parseFloat(m));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(s) || console.error('MUI: Argument "easing" must be a string.'), !d(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : Oa(a)} ${s} ${typeof l == "string" ? l : Oa(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Im = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function $m(e) {
  return It(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ds(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !$m(s) || a.startsWith("unstable_") ? delete n[a] : It(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function zo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: l,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Lt(20));
  const f = li(i), d = Es(e);
  let m = at(d, {
    mixins: vm(d.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Tm.slice(),
    typography: xm(f, s),
    transitions: Pm(a),
    zIndex: {
      ...Im
    }
  });
  if (m = at(m, u), m = t.reduce((y, v) => at(y, v), m), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (p, g) => {
      let w;
      for (w in p) {
        const T = p[w];
        if (y.includes(w) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = wr("", w);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[w] = {};
        }
      }
    };
    Object.keys(m.components).forEach((p) => {
      const g = m.components[p].styleOverrides;
      g && p.startsWith("Mui") && v(g, p);
    });
  }
  return m.unstable_sxConfig = {
    ...eo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, m.unstable_sx = function(v) {
    return yr({
      sx: v,
      theme: this
    });
  }, m.toRuntimeSource = Ds, m;
}
function Dm(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Mm = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Dm(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Ms(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function As(e) {
  return e === "dark" ? Mm : [];
}
function Am(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = li(t);
  return {
    palette: i,
    opacity: {
      ...Ms(i.mode),
      ...r
    },
    overlays: n || As(i.mode),
    ...o
  };
}
function _m(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Nm = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Fm = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Nm(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function jm(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function k(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function _r(e) {
  return !e || !e.startsWith("hsl") ? e : ws(e);
}
function Pt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ar(_r(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Lm(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const wt = (e) => {
  try {
    return e();
  } catch {
  }
}, Wm = (e = "mui") => im(e);
function Oo(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Am({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = zo({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Ms(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || As(o)
  }, a;
}
function zm(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = _m,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, f = Object.keys(r)[0], d = n || (r.light && f !== "light" ? "light" : f), m = Wm(i), {
    [d]: y,
    light: v,
    dark: p,
    ...g
  } = r, w = {
    ...g
  };
  let T = y;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Lt(21, d));
  const S = Oo(w, T, u, d);
  v && !w.light && Oo(w, v, void 0, "light"), p && !w.dark && Oo(w, p, void 0, "dark");
  let x = {
    defaultColorScheme: d,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: l,
    getCssVar: m,
    colorSchemes: w,
    font: {
      ...bm(S.typography),
      ...S.font
    },
    spacing: Lm(u.spacing)
  };
  Object.keys(x.colorSchemes).forEach((B) => {
    const c = x.colorSchemes[B].palette, R = (F) => {
      const D = F.split("-"), Q = D[1], K = D[2];
      return m(F, c[Q][K]);
    };
    if (c.mode === "light" && (k(c.common, "background", "#fff"), k(c.common, "onBackground", "#000")), c.mode === "dark" && (k(c.common, "background", "#000"), k(c.common, "onBackground", "#fff")), jm(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      k(c.Alert, "errorColor", Ee(c.error.light, 0.6)), k(c.Alert, "infoColor", Ee(c.info.light, 0.6)), k(c.Alert, "successColor", Ee(c.success.light, 0.6)), k(c.Alert, "warningColor", Ee(c.warning.light, 0.6)), k(c.Alert, "errorFilledBg", R("palette-error-main")), k(c.Alert, "infoFilledBg", R("palette-info-main")), k(c.Alert, "successFilledBg", R("palette-success-main")), k(c.Alert, "warningFilledBg", R("palette-warning-main")), k(c.Alert, "errorFilledColor", wt(() => c.getContrastText(c.error.main))), k(c.Alert, "infoFilledColor", wt(() => c.getContrastText(c.info.main))), k(c.Alert, "successFilledColor", wt(() => c.getContrastText(c.success.main))), k(c.Alert, "warningFilledColor", wt(() => c.getContrastText(c.warning.main))), k(c.Alert, "errorStandardBg", Te(c.error.light, 0.9)), k(c.Alert, "infoStandardBg", Te(c.info.light, 0.9)), k(c.Alert, "successStandardBg", Te(c.success.light, 0.9)), k(c.Alert, "warningStandardBg", Te(c.warning.light, 0.9)), k(c.Alert, "errorIconColor", R("palette-error-main")), k(c.Alert, "infoIconColor", R("palette-info-main")), k(c.Alert, "successIconColor", R("palette-success-main")), k(c.Alert, "warningIconColor", R("palette-warning-main")), k(c.AppBar, "defaultBg", R("palette-grey-100")), k(c.Avatar, "defaultBg", R("palette-grey-400")), k(c.Button, "inheritContainedBg", R("palette-grey-300")), k(c.Button, "inheritContainedHoverBg", R("palette-grey-A100")), k(c.Chip, "defaultBorder", R("palette-grey-400")), k(c.Chip, "defaultAvatarColor", R("palette-grey-700")), k(c.Chip, "defaultIconColor", R("palette-grey-700")), k(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), k(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), k(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), k(c.LinearProgress, "primaryBg", Te(c.primary.main, 0.62)), k(c.LinearProgress, "secondaryBg", Te(c.secondary.main, 0.62)), k(c.LinearProgress, "errorBg", Te(c.error.main, 0.62)), k(c.LinearProgress, "infoBg", Te(c.info.main, 0.62)), k(c.LinearProgress, "successBg", Te(c.success.main, 0.62)), k(c.LinearProgress, "warningBg", Te(c.warning.main, 0.62)), k(c.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), k(c.Slider, "primaryTrack", Te(c.primary.main, 0.62)), k(c.Slider, "secondaryTrack", Te(c.secondary.main, 0.62)), k(c.Slider, "errorTrack", Te(c.error.main, 0.62)), k(c.Slider, "infoTrack", Te(c.info.main, 0.62)), k(c.Slider, "successTrack", Te(c.success.main, 0.62)), k(c.Slider, "warningTrack", Te(c.warning.main, 0.62));
      const F = yn(c.background.default, 0.8);
      k(c.SnackbarContent, "bg", F), k(c.SnackbarContent, "color", wt(() => c.getContrastText(F))), k(c.SpeedDialAction, "fabHoverBg", yn(c.background.paper, 0.15)), k(c.StepConnector, "border", R("palette-grey-400")), k(c.StepContent, "border", R("palette-grey-400")), k(c.Switch, "defaultColor", R("palette-common-white")), k(c.Switch, "defaultDisabledColor", R("palette-grey-100")), k(c.Switch, "primaryDisabledColor", Te(c.primary.main, 0.62)), k(c.Switch, "secondaryDisabledColor", Te(c.secondary.main, 0.62)), k(c.Switch, "errorDisabledColor", Te(c.error.main, 0.62)), k(c.Switch, "infoDisabledColor", Te(c.info.main, 0.62)), k(c.Switch, "successDisabledColor", Te(c.success.main, 0.62)), k(c.Switch, "warningDisabledColor", Te(c.warning.main, 0.62)), k(c.TableCell, "border", Te(gn(c.divider, 1), 0.88)), k(c.Tooltip, "bg", gn(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      k(c.Alert, "errorColor", Te(c.error.light, 0.6)), k(c.Alert, "infoColor", Te(c.info.light, 0.6)), k(c.Alert, "successColor", Te(c.success.light, 0.6)), k(c.Alert, "warningColor", Te(c.warning.light, 0.6)), k(c.Alert, "errorFilledBg", R("palette-error-dark")), k(c.Alert, "infoFilledBg", R("palette-info-dark")), k(c.Alert, "successFilledBg", R("palette-success-dark")), k(c.Alert, "warningFilledBg", R("palette-warning-dark")), k(c.Alert, "errorFilledColor", wt(() => c.getContrastText(c.error.dark))), k(c.Alert, "infoFilledColor", wt(() => c.getContrastText(c.info.dark))), k(c.Alert, "successFilledColor", wt(() => c.getContrastText(c.success.dark))), k(c.Alert, "warningFilledColor", wt(() => c.getContrastText(c.warning.dark))), k(c.Alert, "errorStandardBg", Ee(c.error.light, 0.9)), k(c.Alert, "infoStandardBg", Ee(c.info.light, 0.9)), k(c.Alert, "successStandardBg", Ee(c.success.light, 0.9)), k(c.Alert, "warningStandardBg", Ee(c.warning.light, 0.9)), k(c.Alert, "errorIconColor", R("palette-error-main")), k(c.Alert, "infoIconColor", R("palette-info-main")), k(c.Alert, "successIconColor", R("palette-success-main")), k(c.Alert, "warningIconColor", R("palette-warning-main")), k(c.AppBar, "defaultBg", R("palette-grey-900")), k(c.AppBar, "darkBg", R("palette-background-paper")), k(c.AppBar, "darkColor", R("palette-text-primary")), k(c.Avatar, "defaultBg", R("palette-grey-600")), k(c.Button, "inheritContainedBg", R("palette-grey-800")), k(c.Button, "inheritContainedHoverBg", R("palette-grey-700")), k(c.Chip, "defaultBorder", R("palette-grey-700")), k(c.Chip, "defaultAvatarColor", R("palette-grey-300")), k(c.Chip, "defaultIconColor", R("palette-grey-300")), k(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), k(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), k(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), k(c.LinearProgress, "primaryBg", Ee(c.primary.main, 0.5)), k(c.LinearProgress, "secondaryBg", Ee(c.secondary.main, 0.5)), k(c.LinearProgress, "errorBg", Ee(c.error.main, 0.5)), k(c.LinearProgress, "infoBg", Ee(c.info.main, 0.5)), k(c.LinearProgress, "successBg", Ee(c.success.main, 0.5)), k(c.LinearProgress, "warningBg", Ee(c.warning.main, 0.5)), k(c.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), k(c.Slider, "primaryTrack", Ee(c.primary.main, 0.5)), k(c.Slider, "secondaryTrack", Ee(c.secondary.main, 0.5)), k(c.Slider, "errorTrack", Ee(c.error.main, 0.5)), k(c.Slider, "infoTrack", Ee(c.info.main, 0.5)), k(c.Slider, "successTrack", Ee(c.success.main, 0.5)), k(c.Slider, "warningTrack", Ee(c.warning.main, 0.5));
      const F = yn(c.background.default, 0.98);
      k(c.SnackbarContent, "bg", F), k(c.SnackbarContent, "color", wt(() => c.getContrastText(F))), k(c.SpeedDialAction, "fabHoverBg", yn(c.background.paper, 0.15)), k(c.StepConnector, "border", R("palette-grey-600")), k(c.StepContent, "border", R("palette-grey-600")), k(c.Switch, "defaultColor", R("palette-grey-300")), k(c.Switch, "defaultDisabledColor", R("palette-grey-600")), k(c.Switch, "primaryDisabledColor", Ee(c.primary.main, 0.55)), k(c.Switch, "secondaryDisabledColor", Ee(c.secondary.main, 0.55)), k(c.Switch, "errorDisabledColor", Ee(c.error.main, 0.55)), k(c.Switch, "infoDisabledColor", Ee(c.info.main, 0.55)), k(c.Switch, "successDisabledColor", Ee(c.success.main, 0.55)), k(c.Switch, "warningDisabledColor", Ee(c.warning.main, 0.55)), k(c.TableCell, "border", Ee(gn(c.divider, 1), 0.68)), k(c.Tooltip, "bg", gn(c.grey[700], 0.92));
    }
    Pt(c.background, "default"), Pt(c.background, "paper"), Pt(c.common, "background"), Pt(c.common, "onBackground"), Pt(c, "divider"), Object.keys(c).forEach((F) => {
      const D = c[F];
      D && typeof D == "object" && (D.main && k(c[F], "mainChannel", Ar(_r(D.main))), D.light && k(c[F], "lightChannel", Ar(_r(D.light))), D.dark && k(c[F], "darkChannel", Ar(_r(D.dark))), D.contrastText && k(c[F], "contrastTextChannel", Ar(_r(D.contrastText))), F === "text" && (Pt(c[F], "primary"), Pt(c[F], "secondary")), F === "action" && (D.active && Pt(c[F], "active"), D.selected && Pt(c[F], "selected")));
    });
  }), x = t.reduce((B, c) => at(B, c), x);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Fm(x)
  }, {
    vars: I,
    generateThemeVars: E,
    generateStyleSheets: _
  } = cm(x, b);
  return x.vars = I, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([B, c]) => {
    x[B] = c;
  }), x.generateThemeVars = E, x.generateStyleSheets = _, x.generateSpacing = function() {
    return Ss(u.spacing, ai(this));
  }, x.getColorSchemeSelector = lm(s), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = a, x.unstable_sxConfig = {
    ...eo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, x.unstable_sx = function(c) {
    return yr({
      sx: c,
      theme: this
    });
  }, x.toRuntimeSource = Ds, x;
}
function Pa(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: li({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Bm(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", l = o == null ? void 0 : o[s], u = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return zo(e, ...t);
    let f = r;
    "palette" in e || u[s] && (u[s] !== !0 ? f = u[s].palette : s === "dark" && (f = {
      mode: "dark"
    }));
    const d = zo({
      ...e,
      palette: f
    }, ...t);
    return d.defaultColorScheme = s, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, Pa(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, Pa(d, "light", u.light)), d;
  }
  return !r && !("light" in u) && s === "light" && (u.light = !0), zm({
    ...a,
    colorSchemes: u,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Ym = Bm(), Vm = "$$material", Zt = Wh({
  themeId: Vm,
  defaultTheme: Ym,
  rootShouldForwardProp: ii
}), _s = /* @__PURE__ */ Z.createContext(void 0);
process.env.NODE_ENV !== "production" && (_s.displayName = "FormControlContext");
function Hm() {
  return Z.useContext(_s);
}
process.env.NODE_ENV !== "production" && (C.node, C.object.isRequired);
function to(e) {
  return nm(e);
}
class An {
  constructor() {
    kr(this, "mountEffect", () => {
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
    return new An();
  }
  static use() {
    const t = Ps(An.create).current, [r, n] = Z.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, Z.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Gm(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function Um() {
  return An.use();
}
function Gm() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function qm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Bo(e, t) {
  return Bo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Bo(e, t);
}
function Km(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Bo(e, t);
}
const Ia = Ft.createContext(null);
function Xm(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ui(e, t) {
  var r = function(i) {
    return t && vn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && xc.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Zm(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var l in t) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var u = n[l][a];
        s[n[l][a]] = r(u);
      }
    s[l] = r(l);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function Kt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Qm(e, t) {
  return ui(e.children, function(r) {
    return wn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Kt(r, "appear", e),
      enter: Kt(r, "enter", e),
      exit: Kt(r, "exit", e)
    });
  });
}
function Jm(e, t, r) {
  var n = ui(e.children), o = Zm(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (vn(a)) {
      var s = i in t, l = i in n, u = t[i], f = vn(u) && !u.props.in;
      l && (!s || f) ? o[i] = wn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Kt(a, "exit", e),
        enter: Kt(a, "enter", e)
      }) : !l && s && !f ? o[i] = wn(a, {
        in: !1
      }) : l && s && vn(u) && (o[i] = wn(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Kt(a, "exit", e),
        enter: Kt(a, "enter", e)
      }));
    }
  }), o;
}
var eg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, tg = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, di = /* @__PURE__ */ function(e) {
  Km(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Xm(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, l = i.firstRender;
    return {
      children: l ? Qm(o, s) : Jm(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = ui(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = Pn({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = qm(o, ["component", "childFactory"]), l = this.state.contextValue, u = eg(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Ft.createElement(Ia.Provider, {
      value: l
    }, u) : /* @__PURE__ */ Ft.createElement(Ia.Provider, {
      value: l
    }, /* @__PURE__ */ Ft.createElement(i, s, u));
  }, t;
}(Ft.Component);
di.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: C.any,
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
  children: C.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: C.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: C.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: C.bool,
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
  childFactory: C.func
} : {};
di.defaultProps = tg;
function Ns(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: l,
    timeout: u
  } = e, [f, d] = Z.useState(!1), m = Ne(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), y = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, v = Ne(r.child, f && r.childLeaving, n && r.childPulsate);
  return !s && !f && d(!0), Z.useEffect(() => {
    if (!s && l != null) {
      const p = setTimeout(l, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [l, s, u]), /* @__PURE__ */ z.jsx("span", {
    className: m,
    style: y,
    children: /* @__PURE__ */ z.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object.isRequired,
  className: C.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: C.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: C.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: C.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: C.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: C.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: C.number,
  /**
   * exit delay
   */
  timeout: C.number.isRequired
});
const ut = en("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Yo = 550, rg = 80, ng = Qo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, og = Qo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ig = Qo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, ag = Zt("span", {
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
}), sg = Zt(Ns, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ut.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ng};
    animation-duration: ${Yo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ut.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ut.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ut.childLeaving} {
    opacity: 0;
    animation-name: ${og};
    animation-duration: ${Yo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ut.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ig};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Fs = /* @__PURE__ */ Z.forwardRef(function(t, r) {
  const n = to({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [l, u] = Z.useState([]), f = Z.useRef(0), d = Z.useRef(null);
  Z.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const m = Z.useRef(!1), y = em(), v = Z.useRef(null), p = Z.useRef(null), g = Z.useCallback((x) => {
    const {
      pulsate: b,
      rippleX: I,
      rippleY: E,
      rippleSize: _,
      cb: B
    } = x;
    u((c) => [...c, /* @__PURE__ */ z.jsx(sg, {
      classes: {
        ripple: Ne(i.ripple, ut.ripple),
        rippleVisible: Ne(i.rippleVisible, ut.rippleVisible),
        ripplePulsate: Ne(i.ripplePulsate, ut.ripplePulsate),
        child: Ne(i.child, ut.child),
        childLeaving: Ne(i.childLeaving, ut.childLeaving),
        childPulsate: Ne(i.childPulsate, ut.childPulsate)
      },
      timeout: Yo,
      pulsate: b,
      rippleX: I,
      rippleY: E,
      rippleSize: _
    }, f.current)]), f.current += 1, d.current = B;
  }, [i]), w = Z.useCallback((x = {}, b = {}, I = () => {
  }) => {
    const {
      pulsate: E = !1,
      center: _ = o || b.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = b;
    if ((x == null ? void 0 : x.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (m.current = !0);
    const c = B ? null : p.current, R = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, D, Q;
    if (_ || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      F = Math.round(R.width / 2), D = Math.round(R.height / 2);
    else {
      const {
        clientX: K,
        clientY: ie
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      F = Math.round(K - R.left), D = Math.round(ie - R.top);
    }
    if (_)
      Q = Math.sqrt((2 * R.width ** 2 + R.height ** 2) / 3), Q % 2 === 0 && (Q += 1);
    else {
      const K = Math.max(Math.abs((c ? c.clientWidth : 0) - F), F) * 2 + 2, ie = Math.max(Math.abs((c ? c.clientHeight : 0) - D), D) * 2 + 2;
      Q = Math.sqrt(K ** 2 + ie ** 2);
    }
    x != null && x.touches ? v.current === null && (v.current = () => {
      g({
        pulsate: E,
        rippleX: F,
        rippleY: D,
        rippleSize: Q,
        cb: I
      });
    }, y.start(rg, () => {
      v.current && (v.current(), v.current = null);
    })) : g({
      pulsate: E,
      rippleX: F,
      rippleY: D,
      rippleSize: Q,
      cb: I
    });
  }, [o, g, y]), T = Z.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), S = Z.useCallback((x, b) => {
    if (y.clear(), (x == null ? void 0 : x.type) === "touchend" && v.current) {
      v.current(), v.current = null, y.start(0, () => {
        S(x, b);
      });
      return;
    }
    v.current = null, u((I) => I.length > 0 ? I.slice(1) : I), d.current = b;
  }, [y]);
  return Z.useImperativeHandle(r, () => ({
    pulsate: T,
    start: w,
    stop: S
  }), [T, w, S]), /* @__PURE__ */ z.jsx(ag, {
    className: Ne(ut.root, i.root, a),
    ref: p,
    ...s,
    children: /* @__PURE__ */ z.jsx(di, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: C.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string
});
function cg(e) {
  return wr("MuiButtonBase", e);
}
const lg = en("MuiButtonBase", ["root", "disabled", "focusVisible"]), ug = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Yn({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, cg, o);
  return r && n && (a.root += ` ${n}`), a;
}, dg = Zt("button", {
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
  [`&.${lg.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), js = /* @__PURE__ */ Z.forwardRef(function(t, r) {
  const n = to({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: l = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: d = !1,
    focusRipple: m = !1,
    focusVisibleClassName: y,
    LinkComponent: v = "a",
    onBlur: p,
    onClick: g,
    onContextMenu: w,
    onDragLeave: T,
    onFocus: S,
    onFocusVisible: x,
    onKeyDown: b,
    onKeyUp: I,
    onMouseDown: E,
    onMouseLeave: _,
    onMouseUp: B,
    onTouchEnd: c,
    onTouchMove: R,
    onTouchStart: F,
    tabIndex: D = 0,
    TouchRippleProps: Q,
    touchRippleRef: K,
    type: ie,
    ...de
  } = n, ge = Z.useRef(null), le = Um(), $ = va(le.ref, K), [V, te] = Z.useState(!1);
  u && V && te(!1), Z.useImperativeHandle(o, () => ({
    focusVisible: () => {
      te(!0), ge.current.focus();
    }
  }), []);
  const re = le.shouldMount && !f && !u;
  Z.useEffect(() => {
    V && m && !f && le.pulsate();
  }, [f, m, V, le]);
  function P(ne, Yt, Vt = d) {
    return bn((Ht) => (Yt && Yt(Ht), Vt || le[ne](Ht), !0));
  }
  const N = P("start", E), Y = P("stop", w), O = P("stop", T), L = P("stop", B), q = P("stop", (ne) => {
    V && ne.preventDefault(), _ && _(ne);
  }), G = P("start", F), ce = P("stop", c), W = P("stop", R), Ce = P("stop", (ne) => {
    xa(ne.target) || te(!1), p && p(ne);
  }, !1), U = bn((ne) => {
    ge.current || (ge.current = ne.currentTarget), xa(ne.target) && (te(!0), x && x(ne)), S && S(ne);
  }), Re = () => {
    const ne = ge.current;
    return l && l !== "button" && !(ne.tagName === "A" && ne.href);
  }, Ie = bn((ne) => {
    m && !ne.repeat && V && ne.key === " " && le.stop(ne, () => {
      le.start(ne);
    }), ne.target === ne.currentTarget && Re() && ne.key === " " && ne.preventDefault(), b && b(ne), ne.target === ne.currentTarget && Re() && ne.key === "Enter" && !u && (ne.preventDefault(), g && g(ne));
  }), Ye = bn((ne) => {
    m && ne.key === " " && V && !ne.defaultPrevented && le.stop(ne, () => {
      le.pulsate(ne);
    }), I && I(ne), g && ne.target === ne.currentTarget && Re() && ne.key === " " && !ne.defaultPrevented && g(ne);
  });
  let We = l;
  We === "button" && (de.href || de.to) && (We = v);
  const ke = {};
  We === "button" ? (ke.type = ie === void 0 ? "button" : ie, ke.disabled = u) : (!de.href && !de.to && (ke.role = "button"), u && (ke["aria-disabled"] = u));
  const Tt = va(r, ge), st = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: d,
    focusRipple: m,
    tabIndex: D,
    focusVisible: V
  }, ct = ug(st);
  return /* @__PURE__ */ z.jsxs(dg, {
    as: We,
    className: Ne(ct.root, s),
    ownerState: st,
    onBlur: Ce,
    onClick: g,
    onContextMenu: Y,
    onFocus: U,
    onKeyDown: Ie,
    onKeyUp: Ye,
    onMouseDown: N,
    onMouseLeave: q,
    onMouseUp: L,
    onDragLeave: O,
    onTouchEnd: ce,
    onTouchMove: W,
    onTouchStart: G,
    ref: Tt,
    tabIndex: u ? -1 : D,
    type: ie,
    ...ke,
    ...de,
    children: [a, re ? /* @__PURE__ */ z.jsx(Fs, {
      ref: $,
      center: i,
      ...Q
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ti,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: C.bool,
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Kh,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: C.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: C.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: C.string,
  /**
   * @ignore
   */
  href: C.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: C.elementType,
  /**
   * @ignore
   */
  onBlur: C.func,
  /**
   * @ignore
   */
  onClick: C.func,
  /**
   * @ignore
   */
  onContextMenu: C.func,
  /**
   * @ignore
   */
  onDragLeave: C.func,
  /**
   * @ignore
   */
  onFocus: C.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: C.func,
  /**
   * @ignore
   */
  onKeyDown: C.func,
  /**
   * @ignore
   */
  onKeyUp: C.func,
  /**
   * @ignore
   */
  onMouseDown: C.func,
  /**
   * @ignore
   */
  onMouseLeave: C.func,
  /**
   * @ignore
   */
  onMouseUp: C.func,
  /**
   * @ignore
   */
  onTouchEnd: C.func,
  /**
   * @ignore
   */
  onTouchMove: C.func,
  /**
   * @ignore
   */
  onTouchStart: C.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @default 0
   */
  tabIndex: C.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: C.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: C.oneOfType([C.func, C.shape({
    current: C.shape({
      pulsate: C.func.isRequired,
      start: C.func.isRequired,
      stop: C.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string])
});
function fg(e) {
  return wr("PrivateSwitchBase", e);
}
en("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const pg = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: o
  } = e, i = {
    root: ["root", r && "checked", n && "disabled", o && `edge${pt(o)}`],
    input: ["input"]
  };
  return Yn(i, fg, t);
}, hg = Zt(js)({
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
}), mg = Zt("input", {
  shouldForwardProp: ii
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
}), Ls = /* @__PURE__ */ Z.forwardRef(function(t, r) {
  const {
    autoFocus: n,
    checked: o,
    checkedIcon: i,
    className: a,
    defaultChecked: s,
    disabled: l,
    disableFocusRipple: u = !1,
    edge: f = !1,
    icon: d,
    id: m,
    inputProps: y,
    inputRef: v,
    name: p,
    onBlur: g,
    onChange: w,
    onFocus: T,
    readOnly: S,
    required: x = !1,
    tabIndex: b,
    type: I,
    value: E,
    ..._
  } = t, [B, c] = Zh({
    controlled: o,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), R = Hm(), F = (le) => {
    T && T(le), R && R.onFocus && R.onFocus(le);
  }, D = (le) => {
    g && g(le), R && R.onBlur && R.onBlur(le);
  }, Q = (le) => {
    if (le.nativeEvent.defaultPrevented)
      return;
    const $ = le.target.checked;
    c($), w && w(le, $);
  };
  let K = l;
  R && typeof K > "u" && (K = R.disabled);
  const ie = I === "checkbox" || I === "radio", de = {
    ...t,
    checked: B,
    disabled: K,
    disableFocusRipple: u,
    edge: f
  }, ge = pg(de);
  return /* @__PURE__ */ z.jsxs(hg, {
    component: "span",
    className: Ne(ge.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: K,
    tabIndex: null,
    role: void 0,
    onFocus: F,
    onBlur: D,
    ownerState: de,
    ref: r,
    ..._,
    children: [/* @__PURE__ */ z.jsx(mg, {
      autoFocus: n,
      checked: o,
      defaultChecked: s,
      className: ge.input,
      disabled: K,
      id: ie ? m : void 0,
      name: p,
      onChange: Q,
      readOnly: S,
      ref: v,
      required: x,
      ownerState: de,
      tabIndex: b,
      type: I,
      ...I === "checkbox" && E === void 0 ? {} : {
        value: E
      },
      ...y
    }), B ? i : d]
  });
});
process.env.NODE_ENV !== "production" && (Ls.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: C.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: C.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: C.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * @ignore
   */
  defaultChecked: C.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: C.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: C.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: C.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: C.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: C.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: C.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ti,
  /*
   * @ignore
   */
  name: C.string,
  /**
   * @ignore
   */
  onBlur: C.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: C.func,
  /**
   * @ignore
   */
  onFocus: C.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: C.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: C.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.object,
  /**
   * @ignore
   */
  tabIndex: C.oneOfType([C.number, C.string]),
  /**
   * The input component prop `type`.
   */
  type: C.string.isRequired,
  /**
   * The value of the component.
   */
  value: C.any
});
const Ws = om;
function gg(e) {
  return wr("MuiSvgIcon", e);
}
en("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const yg = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${pt(t)}`, `fontSize${pt(r)}`]
  };
  return Yn(o, gg, n);
}, bg = Zt("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${pt(r.color)}`], t[`fontSize${pt(r.fontSize)}`]];
  }
})(Ws(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, l, u, f, d, m, y, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (p) => !p.hasSvgAsChild,
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
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((l = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : l.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((f = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, p]) => p && p.main).map(([p]) => {
        var g, w;
        return {
          props: {
            color: p
          },
          style: {
            color: (w = (g = (e.vars ?? e).palette) == null ? void 0 : g[p]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (m = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) == null ? void 0 : m.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : v.disabled
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
})), Ur = /* @__PURE__ */ Z.forwardRef(function(t, r) {
  const n = to({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: d,
    viewBox: m = "0 0 24 24",
    ...y
  } = n, v = /* @__PURE__ */ Z.isValidElement(o) && o.type === "svg", p = {
    ...n,
    color: a,
    component: s,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: m,
    hasSvgAsChild: v
  }, g = {};
  f || (g.viewBox = m);
  const w = yg(p);
  return /* @__PURE__ */ z.jsxs(bg, {
    as: s,
    className: Ne(w.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: r,
    ...g,
    ...y,
    ...v && o.props,
    ownerState: p,
    children: [v ? o.props.children : o, d ? /* @__PURE__ */ z.jsx("title", {
      children: d
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: C.oneOfType([C.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: C.oneOfType([C.oneOf(["inherit", "large", "medium", "small"]), C.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: C.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: C.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: C.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: C.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: C.string
});
Ur && (Ur.muiName = "SvgIcon");
function fi(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ z.jsx(Ur, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Ur.muiName, /* @__PURE__ */ Z.memo(/* @__PURE__ */ Z.forwardRef(r));
}
const vg = fi(/* @__PURE__ */ z.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), wg = fi(/* @__PURE__ */ z.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), xg = fi(/* @__PURE__ */ z.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function Cg(e) {
  return wr("MuiCheckbox", e);
}
const Po = en("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]);
function Sg(e) {
  return typeof e.main == "string";
}
function Eg(e, t = []) {
  if (!Sg(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function $a(e = []) {
  return ([, t]) => t && Eg(t, e);
}
const Tg = (e) => {
  const {
    classes: t,
    indeterminate: r,
    color: n,
    size: o
  } = e, i = {
    root: ["root", r && "indeterminate", `color${pt(n)}`, `size${pt(o)}`]
  }, a = Yn(i, Cg, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, Rg = Zt(Ls, {
  shouldForwardProp: (e) => ii(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.indeterminate && t.indeterminate, t[`size${pt(r.size)}`], r.color !== "default" && t[`color${pt(r.color)}`]];
  }
})(Ws(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : jo(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter($a()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : jo(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter($a()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Po.checked}, &.${Po.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Po.disabled}`]: {
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
}))), kg = /* @__PURE__ */ z.jsx(wg, {}), Og = /* @__PURE__ */ z.jsx(vg, {}), Pg = /* @__PURE__ */ z.jsx(xg, {}), zs = /* @__PURE__ */ Z.forwardRef(function(t, r) {
  const n = to({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: o = kg,
    color: i = "primary",
    icon: a = Og,
    indeterminate: s = !1,
    indeterminateIcon: l = Pg,
    inputProps: u,
    size: f = "medium",
    disableRipple: d = !1,
    className: m,
    ...y
  } = n, v = s ? l : a, p = s ? l : o, g = {
    ...n,
    disableRipple: d,
    color: i,
    indeterminate: s,
    size: f
  }, w = Tg(g);
  return /* @__PURE__ */ z.jsx(Rg, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": s,
      ...u
    },
    icon: /* @__PURE__ */ Z.cloneElement(v, {
      fontSize: v.props.fontSize ?? f
    }),
    checkedIcon: /* @__PURE__ */ Z.cloneElement(p, {
      fontSize: p.props.fontSize ?? f
    }),
    ownerState: g,
    ref: r,
    className: Ne(w.root, m),
    disableRipple: d,
    ...y,
    classes: w
  });
});
process.env.NODE_ENV !== "production" && (zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: C.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: C.oneOfType([C.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), C.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: C.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: C.node,
  /**
   * The id of the `input` element.
   */
  id: C.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: C.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: C.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: C.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ti,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: C.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: C.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: C.oneOfType([C.oneOf(["medium", "small"]), C.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: C.any
});
const Ig = gr(zs)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${qe.primary500};
    }
`;
var $g = {
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
function Dg(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, r = (e.match(/^[0-9.]*/) || "").toString();
  r.includes(".") ? t = parseFloat(r) : t = parseInt(r, 10);
  var n = (e.match(/[^0-9]*$/) || "").toString();
  return $g[n] ? {
    value: t,
    unit: n
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Io(e) {
  var t = Dg(e);
  return "".concat(t.value).concat(t.unit);
}
var Mg = function(e, t, r) {
  var n = "react-spinners-".concat(e, "-").concat(r);
  if (typeof window > "u" || !window.document)
    return n;
  var o = document.createElement("style");
  document.head.appendChild(o);
  var i = o.sheet, a = `
    @keyframes `.concat(n, ` {
      `).concat(t, `
    }
  `);
  return i && i.insertRule(a, 0), n;
}, _n = function() {
  return _n = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, _n.apply(this, arguments);
}, Ag = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, _g = Mg("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function Ng(e) {
  var t = e.loading, r = t === void 0 ? !0 : t, n = e.color, o = n === void 0 ? "#000000" : n, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, l = s === void 0 ? {} : s, u = e.size, f = u === void 0 ? 15 : u, d = e.margin, m = d === void 0 ? 2 : d, y = Ag(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), v = _n({ display: "inherit" }, l), p = function(g) {
    return {
      backgroundColor: o,
      width: Io(f),
      height: Io(f),
      margin: Io(m),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(_g, " ").concat(0.75 / a, "s ").concat(g * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return r ? Z.createElement(
    "span",
    _n({ style: v }, y),
    Z.createElement("span", { style: p(1) }),
    Z.createElement("span", { style: p(2) }),
    Z.createElement("span", { style: p(3) })
  ) : null;
}
const Fg = gr.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${qe.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, jg = Ft.memo(({ checked: e, onChange: t }) => {
  const r = Xt(
    (n, o) => {
      t(o, n.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ z.jsx(Ig, { checked: e, onChange: r });
}), Hg = ({
  theme: e,
  loading: t,
  rows: r,
  columns: n,
  sortColumns: o,
  onSortColumnsChange: i,
  defaultSortColumns: a,
  selectedRows: s,
  onSelectedRowsChange: l,
  noDataMessage: u,
  ...f
}) => {
  const d = vp({
    columns: n,
    selectionEnabled: !!l
  }), {
    sortedRows: m,
    sortColumns: y,
    setSortedColumns: v
  } = _d(d, r, a), p = Be(() => !i, [i]), g = Xt(
    (w, T) => T === 0 ? "first-row" : T === r.length - 1 ? "last-row" : "",
    [r]
  );
  return Fn(() => {
    const w = s == null ? void 0 : s.filter(
      (T) => r.some((S) => S.id === T)
    );
    (w == null ? void 0 : w.length) != (s == null ? void 0 : s.length) && (l == null || l(w ?? []));
  }, [r, s]), /* @__PURE__ */ z.jsxs(Md, { children: [
    /* @__PURE__ */ z.jsx(
      Ka,
      {
        ...f,
        selectedRows: s ? new Set(s) : void 0,
        onSelectedRowsChange: (w) => {
          l == null || l(Array.from(w));
        },
        rowKeyGetter: (w) => w.id,
        rows: p ? m : r,
        onSortColumnsChange: p ? v : i,
        sortColumns: p ? y : o,
        columns: d,
        rowClass: g,
        rowHeight: 50,
        renderers: {
          renderCheckbox: (w) => /* @__PURE__ */ z.jsx(jg, { ...w }),
          noRowsFallback: /* @__PURE__ */ z.jsx("div", { className: "rdg-no-data", children: u ?? "No data" }),
          ...f.renderers
        },
        style: { ...Ou, ...e ?? {} }
      }
    ),
    t ? /* @__PURE__ */ z.jsxs(Fg, { children: [
      /* @__PURE__ */ z.jsx("div", {}),
      /* @__PURE__ */ z.jsx(Ng, { color: qe.primary500 })
    ] }) : null
  ] });
};
export {
  jr as ColumnType,
  Hg as DataGrid,
  Xc as DataGridDefaultRenderersProvider,
  Bg as Row,
  pr as SELECT_COLUMN_KEY,
  Ho as SelectCellFormatter,
  ol as SelectColumn,
  qc as ToggleGroup,
  Yg as TreeDataGrid,
  Ou as defaultTheme,
  Bc as renderCheckbox,
  Cl as renderHeaderCell,
  tu as renderSortIcon,
  ru as renderSortPriority,
  Gc as renderToggleGroup,
  Kc as renderValue,
  qe as taktikTheme,
  Vg as textEditor,
  el as useHeaderRowSelection,
  Ba as useRowSelection
};
