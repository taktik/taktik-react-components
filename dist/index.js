var Xu = Object.defineProperty;
var Zu = (e, t, n) => t in e ? Xu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ir = (e, t, n) => Zu(e, typeof t != "symbol" ? t + "" : t, n);
import * as R from "react";
import St, { useContext as fn, forwardRef as $o, createContext as Ar, memo as gn, useMemo as Ze, useCallback as on, useRef as Kt, useEffect as Do, useState as pt, useImperativeHandle as Qu, useLayoutEffect as Ju, useId as ed, Children as td, isValidElement as lo, cloneElement as co } from "react";
import * as nd from "react-dom";
import no, { flushSync as bo } from "react-dom";
function rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ai = { exports: {} }, sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs;
function od() {
  if (Bs) return sr;
  Bs = 1;
  var e = St, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var m, p = {}, h = null, b = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (m in c) r.call(c, m) && !s.hasOwnProperty(m) && (p[m] = c[m]);
    if (l && l.defaultProps) for (m in c = l.defaultProps, c) p[m] === void 0 && (p[m] = c[m]);
    return { $$typeof: t, type: l, key: h, ref: b, props: p, _owner: o.current };
  }
  return sr.Fragment = n, sr.jsx = a, sr.jsxs = a, sr;
}
var ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function id() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = St, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function f(S) {
      if (S === null || typeof S != "object")
        return null;
      var q = y && S[y] || S[g];
      return typeof q == "function" ? q : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(S) {
      {
        for (var q = arguments.length, te = new Array(q > 1 ? q - 1 : 0), pe = 1; pe < q; pe++)
          te[pe - 1] = arguments[pe];
        v("error", S, te);
      }
    }
    function v(S, q, te) {
      {
        var pe = C.ReactDebugCurrentFrame, Se = pe.getStackAddendum();
        Se !== "" && (q += "%s", te = te.concat([Se]));
        var Te = te.map(function(ve) {
          return String(ve);
        });
        Te.unshift("Warning: " + q), Function.prototype.apply.call(console[S], console, Te);
      }
    }
    var w = !1, x = !1, O = !1, E = !1, M = !1, A;
    A = Symbol.for("react.module.reference");
    function d(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === s || M || S === o || S === u || S === m || E || S === b || w || x || O || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === p || S.$$typeof === a || S.$$typeof === l || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === A || S.getModuleId !== void 0));
    }
    function k(S, q, te) {
      var pe = S.displayName;
      if (pe)
        return pe;
      var Se = q.displayName || q.name || "";
      return Se !== "" ? te + "(" + Se + ")" : te;
    }
    function _(S) {
      return S.displayName || "Context";
    }
    function F(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case l:
            var q = S;
            return _(q) + ".Consumer";
          case a:
            var te = S;
            return _(te._context) + ".Provider";
          case c:
            return k(S, S.render, "ForwardRef");
          case p:
            var pe = S.displayName || null;
            return pe !== null ? pe : F(S.type) || "Memo";
          case h: {
            var Se = S, Te = Se._payload, ve = Se._init;
            try {
              return F(ve(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, N = 0, W, ee, J, oe, B, K, re;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function $() {
      {
        if (N === 0) {
          W = console.log, ee = console.info, J = console.warn, oe = console.error, B = console.group, K = console.groupCollapsed, re = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        N++;
      }
    }
    function z() {
      {
        if (N--, N === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, S, {
              value: W
            }),
            info: U({}, S, {
              value: ee
            }),
            warn: U({}, S, {
              value: J
            }),
            error: U({}, S, {
              value: oe
            }),
            group: U({}, S, {
              value: B
            }),
            groupCollapsed: U({}, S, {
              value: K
            }),
            groupEnd: U({}, S, {
              value: re
            })
          });
        }
        N < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = C.ReactCurrentDispatcher, D;
    function Y(S, q, te) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (Se) {
            var pe = Se.stack.trim().match(/\n( *(at )?)/);
            D = pe && pe[1] || "";
          }
        return `
` + D + S;
      }
    }
    var Z = !1, V;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      V = new ne();
    }
    function L(S, q) {
      if (!S || Z)
        return "";
      {
        var te = V.get(S);
        if (te !== void 0)
          return te;
      }
      var pe;
      Z = !0;
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = H.current, H.current = null, $();
      try {
        if (q) {
          var ve = function() {
            throw Error();
          };
          if (Object.defineProperty(ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ve, []);
            } catch (nt) {
              pe = nt;
            }
            Reflect.construct(S, [], ve);
          } else {
            try {
              ve.call();
            } catch (nt) {
              pe = nt;
            }
            S.call(ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            pe = nt;
          }
          S();
        }
      } catch (nt) {
        if (nt && pe && typeof nt.stack == "string") {
          for (var ye = nt.stack.split(`
`), ct = pe.stack.split(`
`), Be = ye.length - 1, We = ct.length - 1; Be >= 1 && We >= 0 && ye[Be] !== ct[We]; )
            We--;
          for (; Be >= 1 && We >= 0; Be--, We--)
            if (ye[Be] !== ct[We]) {
              if (Be !== 1 || We !== 1)
                do
                  if (Be--, We--, We < 0 || ye[Be] !== ct[We]) {
                    var xt = `
` + ye[Be].replace(" at new ", " at ");
                    return S.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", S.displayName)), typeof S == "function" && V.set(S, xt), xt;
                  }
                while (Be >= 1 && We >= 0);
              break;
            }
        }
      } finally {
        Z = !1, H.current = Te, z(), Error.prepareStackTrace = Se;
      }
      var cn = S ? S.displayName || S.name : "", kt = cn ? Y(cn) : "";
      return typeof S == "function" && V.set(S, kt), kt;
    }
    function fe(S, q, te) {
      return L(S, !1);
    }
    function I(S) {
      var q = S.prototype;
      return !!(q && q.isReactComponent);
    }
    function ae(S, q, te) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return L(S, I(S));
      if (typeof S == "string")
        return Y(S);
      switch (S) {
        case u:
          return Y("Suspense");
        case m:
          return Y("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return fe(S.render);
          case p:
            return ae(S.type, q, te);
          case h: {
            var pe = S, Se = pe._payload, Te = pe._init;
            try {
              return ae(Te(Se), q, te);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Re = {}, Ee = C.ReactDebugCurrentFrame;
    function be(S) {
      if (S) {
        var q = S._owner, te = ae(S.type, S._source, q ? q.type : null);
        Ee.setExtraStackFrame(te);
      } else
        Ee.setExtraStackFrame(null);
    }
    function st(S, q, te, pe, Se) {
      {
        var Te = Function.call.bind(ge);
        for (var ve in S)
          if (Te(S, ve)) {
            var ye = void 0;
            try {
              if (typeof S[ve] != "function") {
                var ct = Error((pe || "React class") + ": " + te + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ct.name = "Invariant Violation", ct;
              }
              ye = S[ve](q, ve, pe, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Be) {
              ye = Be;
            }
            ye && !(ye instanceof Error) && (be(Se), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", te, ve, typeof ye), be(null)), ye instanceof Error && !(ye.message in Re) && (Re[ye.message] = !0, be(Se), T("Failed %s type: %s", te, ye.message), be(null));
          }
      }
    }
    var xe = Array.isArray;
    function tt(S) {
      return xe(S);
    }
    function se(S) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, te = q && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return te;
      }
    }
    function Ye(S) {
      try {
        return Tt(S), !1;
      } catch {
        return !0;
      }
    }
    function Tt(S) {
      return "" + S;
    }
    function Rt(S) {
      if (Ye(S))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(S)), Tt(S);
    }
    var at = C.ReactCurrentOwner, zt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, Ot, we;
    we = {};
    function gt(S) {
      if (ge.call(S, "ref")) {
        var q = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Wt(S) {
      if (ge.call(S, "key")) {
        var q = Object.getOwnPropertyDescriptor(S, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function yn(S, q) {
      if (typeof S.ref == "string" && at.current && q && at.current.stateNode !== q) {
        var te = F(at.current.type);
        we[te] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(at.current.type), S.ref), we[te] = !0);
      }
    }
    function ce(S, q) {
      {
        var te = function() {
          lt || (lt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        te.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function de(S, q) {
      {
        var te = function() {
          Ot || (Ot = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        te.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var qe = function(S, q, te, pe, Se, Te, ve) {
      var ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: q,
        ref: te,
        props: ve,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return ye._store = {}, Object.defineProperty(ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.freeze && (Object.freeze(ye.props), Object.freeze(ye)), ye;
    };
    function Qe(S, q, te, pe, Se) {
      {
        var Te, ve = {}, ye = null, ct = null;
        te !== void 0 && (Rt(te), ye = "" + te), Wt(q) && (Rt(q.key), ye = "" + q.key), gt(q) && (ct = q.ref, yn(q, Se));
        for (Te in q)
          ge.call(q, Te) && !zt.hasOwnProperty(Te) && (ve[Te] = q[Te]);
        if (S && S.defaultProps) {
          var Be = S.defaultProps;
          for (Te in Be)
            ve[Te] === void 0 && (ve[Te] = Be[Te]);
        }
        if (ye || ct) {
          var We = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          ye && ce(ve, We), ct && de(ve, We);
        }
        return qe(S, ye, ct, Se, pe, at.current, ve);
      }
    }
    var vt = C.ReactCurrentOwner, Yr = C.ReactDebugCurrentFrame;
    function en(S) {
      if (S) {
        var q = S._owner, te = ae(S.type, S._source, q ? q.type : null);
        Yr.setExtraStackFrame(te);
      } else
        Yr.setExtraStackFrame(null);
    }
    var er;
    er = !1;
    function tr(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function qr() {
      {
        if (vt.current) {
          var S = F(vt.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function vn(S) {
      return "";
    }
    var tn = {};
    function Gr(S) {
      {
        var q = qr();
        if (!q) {
          var te = typeof S == "string" ? S : S.displayName || S.name;
          te && (q = `

Check the top-level render call using <` + te + ">.");
        }
        return q;
      }
    }
    function nn(S, q) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var te = Gr(q);
        if (tn[te])
          return;
        tn[te] = !0;
        var pe = "";
        S && S._owner && S._owner !== vt.current && (pe = " It was passed a child from " + F(S._owner.type) + "."), en(S), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, pe), en(null);
      }
    }
    function In(S, q) {
      {
        if (typeof S != "object")
          return;
        if (tt(S))
          for (var te = 0; te < S.length; te++) {
            var pe = S[te];
            tr(pe) && nn(pe, q);
          }
        else if (tr(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var Se = f(S);
          if (typeof Se == "function" && Se !== S.entries)
            for (var Te = Se.call(S), ve; !(ve = Te.next()).done; )
              tr(ve.value) && nn(ve.value, q);
        }
      }
    }
    function bt(S) {
      {
        var q = S.type;
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
          var pe = F(q);
          st(te, S.props, "prop", pe, S);
        } else if (q.PropTypes !== void 0 && !er) {
          er = !0;
          var Se = F(q);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mn(S) {
      {
        for (var q = Object.keys(S.props), te = 0; te < q.length; te++) {
          var pe = q[te];
          if (pe !== "children" && pe !== "key") {
            en(S), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), en(null);
            break;
          }
        }
        S.ref !== null && (en(S), T("Invalid attribute `ref` supplied to `React.Fragment`."), en(null));
      }
    }
    var Vt = {};
    function ie(S, q, te, pe, Se, Te) {
      {
        var ve = d(S);
        if (!ve) {
          var ye = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ct = vn();
          ct ? ye += ct : ye += qr();
          var Be;
          S === null ? Be = "null" : tt(S) ? Be = "array" : S !== void 0 && S.$$typeof === t ? (Be = "<" + (F(S.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof S, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Be, ye);
        }
        var We = Qe(S, q, te, Se, Te);
        if (We == null)
          return We;
        if (ve) {
          var xt = q.children;
          if (xt !== void 0)
            if (pe)
              if (tt(xt)) {
                for (var cn = 0; cn < xt.length; cn++)
                  In(xt[cn], S);
                Object.freeze && Object.freeze(xt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              In(xt, S);
        }
        if (ge.call(q, "key")) {
          var kt = F(S), nt = Object.keys(q).filter(function(Zr) {
            return Zr !== "key";
          }), xn = nt.length > 0 ? "{key: someKey, " + nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[kt + xn]) {
            var ii = nt.length > 0 ? "{" + nt.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xn, kt, ii, kt), Vt[kt + xn] = !0;
          }
        }
        return S === r ? Mn(We) : bt(We), We;
      }
    }
    function ln(S, q, te) {
      return ie(S, q, te, !0);
    }
    function nr(S, q, te) {
      return ie(S, q, te, !1);
    }
    var Kr = nr, Xr = ln;
    ar.Fragment = r, ar.jsx = Kr, ar.jsxs = Xr;
  }()), ar;
}
process.env.NODE_ENV === "production" ? Ai.exports = od() : Ai.exports = id();
var P = Ai.exports;
function vl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = vl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function he() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vl(e)) && (r && (r += " "), r += t);
  return r;
}
function Dt(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function sd(e) {
  e.stopPropagation();
}
function uo(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function yr(e) {
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
const ad = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function yo(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function ld(e) {
  return yo(e) && e.keyCode !== 86 ? !1 : !ad.has(e.key);
}
function cd({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const ud = "mlln6zg7-0-0-beta-47";
function dd(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: o
  }) => /* @__PURE__ */ P.jsx("div", {
    className: ud,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function fd({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], o = n[e.rowIdx];
  return xl(r, o);
}
function xl(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function pd({
  rows: e,
  topSummaryRows: t,
  bottomSummaryRows: n,
  rowIdx: r,
  mainHeaderRowIdx: o,
  lastFrozenColumnIndex: s,
  column: a
}) {
  const l = (t == null ? void 0 : t.length) ?? 0;
  if (r === o)
    return Dt(a, s, {
      type: "HEADER"
    });
  if (t && r > o && r <= l + o)
    return Dt(a, s, {
      type: "SUMMARY",
      row: t[r + l]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return Dt(a, s, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return Dt(a, s, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function md({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: n,
  columns: r,
  colSpanColumns: o,
  rows: s,
  topSummaryRows: a,
  bottomSummaryRows: l,
  minRowIdx: c,
  mainHeaderRowIdx: u,
  maxRowIdx: m,
  currentPosition: {
    idx: p,
    rowIdx: h
  },
  nextPosition: b,
  lastFrozenColumnIndex: y,
  isCellWithinBounds: g
}) {
  let {
    idx: f,
    rowIdx: C
  } = b;
  const T = r.length, v = (O) => {
    for (const E of o) {
      const M = E.idx;
      if (M > f) break;
      const A = pd({
        rows: s,
        topSummaryRows: a,
        bottomSummaryRows: l,
        rowIdx: C,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: y,
        column: E
      });
      if (A && f > M && f < A + M) {
        f = M + (O ? A : 0);
        break;
      }
    }
  }, w = (O) => O.level + u, x = () => {
    if (t) {
      let E = r[f].parent;
      for (; E !== void 0; ) {
        const M = w(E);
        if (C === M) {
          f = E.idx + E.colSpan;
          break;
        }
        E = E.parent;
      }
    } else if (e) {
      let E = r[f].parent, M = !1;
      for (; E !== void 0; ) {
        const A = w(E);
        if (C >= A) {
          f = E.idx, C = A, M = !0;
          break;
        }
        E = E.parent;
      }
      M || (f = p, C = h);
    }
  };
  if (g(b) && (v(t), C < u && x()), n === "CHANGE_ROW" && (f === T ? C === m || (f = 0, C += 1) : f === -1 && (C === c || (C -= 1, f = T - 1), v(!1))), C < u) {
    let E = r[f].parent;
    const M = C;
    for (C = u; E !== void 0; ) {
      const A = w(E);
      A >= M && (C = A, f = E.idx), E = E.parent;
    }
  }
  return {
    idx: f,
    rowIdx: C
  };
}
function hd({
  maxColIdx: e,
  minRowIdx: t,
  maxRowIdx: n,
  selectedPosition: {
    rowIdx: r,
    idx: o
  },
  shiftKey: s
}) {
  return s ? o === 0 && r === t : o === e && r === n;
}
const gd = "cj343x07-0-0-beta-47", wl = `rdg-cell ${gd}`, bd = "csofj7r7-0-0-beta-47", yd = `rdg-cell-frozen ${bd}`;
function ts(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Cl(e, t, n) {
  const r = t + 1, o = `calc(${n - 1} * var(--rdg-header-row-height))`;
  return e.parent === void 0 ? {
    insetBlockStart: 0,
    gridRowStart: 1,
    gridRowEnd: r,
    paddingBlockStart: o
  } : {
    insetBlockStart: `calc(${t - n} * var(--rdg-header-row-height))`,
    gridRowStart: r - n,
    gridRowEnd: r,
    paddingBlockStart: o
  };
}
function Zn(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function Fr(e, ...t) {
  return he(wl, ...t, e.frozen && yd);
}
const {
  min: Sr,
  max: vo,
  floor: Ws,
  sign: vd,
  abs: xd
} = Math;
function vr(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Sl(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = vo(e, t), typeof n == "number" && n >= t ? Sr(e, n) : e;
}
function El(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const wd = "c1bn88vv7-0-0-beta-47", Cd = `rdg-checkbox-input ${wd}`;
function Sd({
  onChange: e,
  indeterminate: t,
  ...n
}) {
  function r(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ P.jsx("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: Cd,
    onChange: r,
    ...n
  });
}
const Ed = "g1s9ylgp7-0-0-beta-47", Td = `rdg-group-cell-content ${Ed}`, Rd = "cz54e4y7-0-0-beta-47", Od = `rdg-caret ${Rd}`;
function kd(e) {
  return /* @__PURE__ */ P.jsx(Pd, {
    ...e
  });
}
function Pd({
  groupKey: e,
  isExpanded: t,
  tabIndex: n,
  toggleGroup: r
}) {
  function o({
    key: a
  }) {
    a === "Enter" && r();
  }
  const s = t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7";
  return /* @__PURE__ */ P.jsxs("span", {
    className: Td,
    tabIndex: n,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ P.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Od,
      "aria-hidden": !0,
      children: /* @__PURE__ */ P.jsx("path", {
        d: s
      })
    })]
  });
}
function Id(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Tl = /* @__PURE__ */ Ar(void 0), Md = Tl.Provider;
function Ao() {
  return fn(Tl);
}
function ns({
  value: e,
  tabIndex: t,
  indeterminate: n,
  disabled: r,
  onChange: o,
  "aria-label": s,
  "aria-labelledby": a
}) {
  const l = Ao().renderCheckbox;
  return l({
    "aria-label": s,
    "aria-labelledby": a,
    tabIndex: t,
    indeterminate: n,
    disabled: r,
    checked: e,
    onChange: o
  });
}
const Rl = /* @__PURE__ */ Ar(void 0), Ol = Rl.Provider, kl = /* @__PURE__ */ Ar(void 0), Nd = kl.Provider;
function Pl() {
  const e = fn(Rl), t = fn(kl);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Il = /* @__PURE__ */ Ar(void 0), $d = Il.Provider, Ml = /* @__PURE__ */ Ar(void 0), Dd = Ml.Provider;
function Ad() {
  const e = fn(Il), t = fn(Ml);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Yn = "rdg-select-column";
function Fd(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Ad();
  return /* @__PURE__ */ P.jsx(ns, {
    "aria-label": "Select All",
    tabIndex: e.tabIndex,
    indeterminate: t,
    value: n,
    onChange: (o) => {
      r({
        checked: t ? !1 : o
      });
    }
  });
}
function _d(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Pl();
  return /* @__PURE__ */ P.jsx(ns, {
    "aria-label": "Select",
    tabIndex: e.tabIndex,
    disabled: t,
    value: n,
    onChange: (o, s) => {
      r({
        row: e.row,
        checked: o,
        isShiftClick: s
      });
    }
  });
}
function jd(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = Pl();
  return /* @__PURE__ */ P.jsx(ns, {
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
const Ld = {
  key: Yn,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ P.jsx(Fd, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ P.jsx(_d, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ P.jsx(jd, {
      ...e
    });
  }
}, Bd = "auto", zd = 50;
function Wd({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: o,
  enableVirtualization: s
}) {
  const a = (t == null ? void 0 : t.width) ?? Bd, l = (t == null ? void 0 : t.minWidth) ?? zd, c = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? Id, m = (t == null ? void 0 : t.sortable) ?? !1, p = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: b,
    colSpanColumns: y,
    lastFrozenColumnIndex: g,
    headerRowsCount: f
  } = Ze(() => {
    let E = -1, M = 1;
    const A = [];
    d(e, 1);
    function d(_, F, U) {
      for (const N of _) {
        if ("children" in N) {
          const J = {
            name: N.name,
            parent: U,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: N.headerCellClass
          };
          d(N.children, F + 1, J);
          continue;
        }
        const W = N.frozen ?? !1, ee = {
          ...N,
          parent: U,
          idx: 0,
          level: 0,
          frozen: W,
          width: N.width ?? a,
          minWidth: N.minWidth ?? l,
          maxWidth: N.maxWidth ?? c,
          sortable: N.sortable ?? m,
          resizable: N.resizable ?? p,
          draggable: N.draggable ?? h,
          renderCell: N.renderCell ?? u
        };
        A.push(ee), W && E++, F > M && (M = F);
      }
    }
    A.sort(({
      key: _,
      frozen: F
    }, {
      key: U,
      frozen: N
    }) => _ === Yn ? -1 : U === Yn ? 1 : F ? N ? 0 : -1 : N ? 1 : 0);
    const k = [];
    return A.forEach((_, F) => {
      _.idx = F, Nl(_, F, 0), _.colSpan != null && k.push(_);
    }), {
      columns: A,
      colSpanColumns: k,
      lastFrozenColumnIndex: E,
      headerRowsCount: M
    };
  }, [e, a, l, c, u, p, m, h]), {
    templateColumns: C,
    layoutCssVars: T,
    totalFrozenColumnWidth: v,
    columnMetrics: w
  } = Ze(() => {
    const E = /* @__PURE__ */ new Map();
    let M = 0, A = 0;
    const d = [];
    for (const _ of b) {
      let F = n(_);
      typeof F == "number" ? F = Sl(F, _) : F = _.minWidth, d.push(`${F}px`), E.set(_, {
        width: F,
        left: M
      }), M += F;
    }
    if (g !== -1) {
      const _ = E.get(b[g]);
      A = _.left + _.width;
    }
    const k = {};
    for (let _ = 0; _ <= g; _++) {
      const F = b[_];
      k[`--rdg-frozen-left-${F.idx}`] = `${E.get(F).left}px`;
    }
    return {
      templateColumns: d,
      layoutCssVars: k,
      totalFrozenColumnWidth: A,
      columnMetrics: E
    };
  }, [n, b, g]), [x, O] = Ze(() => {
    if (!s)
      return [0, b.length - 1];
    const E = o + v, M = o + r, A = b.length - 1, d = Sr(g + 1, A);
    if (E >= M)
      return [d, d];
    let k = d;
    for (; k < A; ) {
      const {
        left: N,
        width: W
      } = w.get(b[k]);
      if (N + W > E)
        break;
      k++;
    }
    let _ = k;
    for (; _ < A; ) {
      const {
        left: N,
        width: W
      } = w.get(b[_]);
      if (N + W >= M)
        break;
      _++;
    }
    const F = vo(d, k - 1), U = Sr(A, _ + 1);
    return [F, U];
  }, [w, b, g, o, v, r, s]);
  return {
    columns: b,
    colSpanColumns: y,
    colOverscanStartIdx: x,
    colOverscanEndIdx: O,
    templateColumns: C,
    layoutCssVars: T,
    headerRowsCount: f,
    lastFrozenColumnIndex: g,
    totalFrozenColumnWidth: v
  };
}
function Nl(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Nl(r, t, n - 1);
  }
}
const qn = typeof window > "u" ? Do : Ju;
function Vd(e, t, n, r, o, s, a, l, c, u) {
  const m = Kt(o), p = e.length === t.length, h = p && o !== m.current, b = [...n], y = [];
  for (const {
    key: T,
    idx: v,
    width: w
  } of t)
    typeof w == "string" && (h || !a.has(T)) && !s.has(T) && (b[v] = w, y.push(T));
  const g = b.join(" ");
  qn(() => {
    m.current = o, f(y);
  });
  function f(T) {
    T.length !== 0 && c((v) => {
      const w = new Map(v);
      let x = !1;
      for (const O of T) {
        const E = Vs(r, O);
        x || (x = E !== v.get(O)), E === void 0 ? w.delete(O) : w.set(O, E);
      }
      return x ? w : v;
    });
  }
  function C(T, v) {
    const {
      key: w
    } = T, x = [...n], O = [];
    for (const {
      key: M,
      idx: A,
      width: d
    } of t)
      if (w === M) {
        const k = typeof v == "number" ? `${v}px` : v;
        x[A] = k;
      } else p && typeof d == "string" && !s.has(M) && (x[A] = d, O.push(M));
    r.current.style.gridTemplateColumns = x.join(" ");
    const E = typeof v == "number" ? v : Vs(r, w);
    bo(() => {
      l((M) => {
        const A = new Map(M);
        return A.set(w, E), A;
      }), f(O);
    }), u == null || u(T.idx, E);
  }
  return {
    gridTemplateColumns: g,
    handleColumnResize: C
  };
}
function Vs(e, t) {
  var o;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (o = e.current) == null ? void 0 : o.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Ud() {
  const e = Kt(null), [t, n] = pt(1), [r, o] = pt(1), [s, a] = pt(0);
  return qn(() => {
    const {
      ResizeObserver: l
    } = window;
    if (l == null) return;
    const {
      clientWidth: c,
      clientHeight: u,
      offsetWidth: m,
      offsetHeight: p
    } = e.current, {
      width: h,
      height: b
    } = e.current.getBoundingClientRect(), y = p - u, g = h - m + c, f = b - y;
    n(g), o(f), a(y);
    const C = new l((T) => {
      const v = T[0].contentBoxSize[0], {
        clientHeight: w,
        offsetHeight: x
      } = e.current;
      bo(() => {
        n(v.inlineSize), o(v.blockSize), a(x - w);
      });
    });
    return C.observe(e.current), () => {
      C.disconnect();
    };
  }, []), [e, t, r, s];
}
function Ct(e) {
  const t = Kt(e);
  Do(() => {
    t.current = e;
  });
  const n = on((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function _r(e) {
  const [t, n] = pt(!1);
  t && !e && n(!1);
  function r(s) {
    s.target !== s.currentTarget && n(!0);
  }
  return {
    tabIndex: e && !t ? 0 : -1,
    childTabIndex: e ? 0 : -1,
    onFocus: e ? r : void 0
  };
}
function Hd({
  columns: e,
  colSpanColumns: t,
  rows: n,
  topSummaryRows: r,
  bottomSummaryRows: o,
  colOverscanStartIdx: s,
  colOverscanEndIdx: a,
  lastFrozenColumnIndex: l,
  rowOverscanStartIdx: c,
  rowOverscanEndIdx: u
}) {
  const m = Ze(() => {
    if (s === 0) return 0;
    let p = s;
    const h = (b, y) => y !== void 0 && b + y > s ? (p = b, !0) : !1;
    for (const b of t) {
      const y = b.idx;
      if (y >= p || h(y, Dt(b, l, {
        type: "HEADER"
      })))
        break;
      for (let g = c; g <= u; g++) {
        const f = n[g];
        if (h(y, Dt(b, l, {
          type: "ROW",
          row: f
        })))
          break;
      }
      if (r != null) {
        for (const g of r)
          if (h(y, Dt(b, l, {
            type: "SUMMARY",
            row: g
          })))
            break;
      }
      if (o != null) {
        for (const g of o)
          if (h(y, Dt(b, l, {
            type: "SUMMARY",
            row: g
          })))
            break;
      }
    }
    return p;
  }, [c, u, n, r, o, s, l, t]);
  return Ze(() => {
    const p = [];
    for (let h = 0; h <= a; h++) {
      const b = e[h];
      h < m && !b.frozen || p.push(b);
    }
    return p;
  }, [m, a, e]);
}
function Yd({
  rows: e,
  rowHeight: t,
  clientHeight: n,
  scrollTop: r,
  enableVirtualization: o
}) {
  const {
    totalRowHeight: s,
    gridTemplateRows: a,
    getRowTop: l,
    getRowHeight: c,
    findRowIdx: u
  } = Ze(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (f) => f * t,
        getRowHeight: () => t,
        findRowIdx: (f) => Ws(f / t)
      };
    let h = 0, b = " ";
    const y = e.map((f) => {
      const C = t(f), T = {
        top: h,
        height: C
      };
      return b += `${C}px `, h += C, T;
    }), g = (f) => vo(0, Sr(e.length - 1, f));
    return {
      totalRowHeight: h,
      gridTemplateRows: b,
      getRowTop: (f) => y[g(f)].top,
      getRowHeight: (f) => y[g(f)].height,
      findRowIdx(f) {
        let C = 0, T = y.length - 1;
        for (; C <= T; ) {
          const v = C + Ws((T - C) / 2), w = y[v].top;
          if (w === f) return v;
          if (w < f ? C = v + 1 : w > f && (T = v - 1), C > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let m = 0, p = e.length - 1;
  if (o) {
    const b = u(r), y = u(r + n);
    m = vo(0, b - 4), p = Sr(e.length - 1, y + 4);
  }
  return {
    rowOverscanStartIdx: m,
    rowOverscanEndIdx: p,
    totalRowHeight: s,
    gridTemplateRows: a,
    getRowTop: l,
    getRowHeight: c,
    findRowIdx: u
  };
}
const qd = "c1w9bbhr7-0-0-beta-47", Gd = "c1creorc7-0-0-beta-47", Kd = `rdg-cell-drag-handle ${qd}`;
function Xd({
  gridRowStart: e,
  rows: t,
  column: n,
  columnWidth: r,
  maxColIdx: o,
  isLastRow: s,
  selectedPosition: a,
  latestDraggedOverRowIdx: l,
  isCellEditable: c,
  onRowsChange: u,
  onFill: m,
  onClick: p,
  setDragging: h,
  setDraggedOverRowIdx: b
}) {
  const {
    idx: y,
    rowIdx: g
  } = a;
  function f(x) {
    if (x.preventDefault(), x.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", O), window.addEventListener("mouseup", E);
    function O(M) {
      M.buttons !== 1 && E();
    }
    function E() {
      window.removeEventListener("mouseover", O), window.removeEventListener("mouseup", E), h(!1), C();
    }
  }
  function C() {
    const x = l.current;
    if (x === void 0) return;
    const O = g < x ? g + 1 : x, E = g < x ? x + 1 : g;
    v(O, E), b(void 0);
  }
  function T(x) {
    x.stopPropagation(), v(g + 1, t.length);
  }
  function v(x, O) {
    const E = t[g], M = [...t], A = [];
    for (let d = x; d < O; d++)
      if (c({
        rowIdx: d,
        idx: y
      })) {
        const k = m({
          columnKey: n.key,
          sourceRow: E,
          targetRow: t[d]
        });
        k !== t[d] && (M[d] = k, A.push(d));
      }
    A.length > 0 && (u == null || u(M, {
      indexes: A,
      column: n
    }));
  }
  function w() {
    var d;
    const x = ((d = n.colSpan) == null ? void 0 : d.call(n, {
      type: "ROW",
      row: t[g]
    })) ?? 1, {
      insetInlineStart: O,
      ...E
    } = Zn(n, x), M = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", A = n.idx + x - 1 === o;
    return {
      ...E,
      gridRowStart: e,
      marginInlineEnd: A ? void 0 : M,
      marginBlockEnd: s ? void 0 : M,
      insetInlineStart: O ? `calc(${O} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ P.jsx("div", {
    style: w(),
    className: he(Kd, n.frozen && Gd),
    onClick: p,
    onMouseDown: f,
    onDoubleClick: T
  });
}
const Zd = "cis5rrm7-0-0-beta-47";
function Qd({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  onRowChange: o,
  closeEditor: s,
  onKeyDown: a,
  navigate: l
}) {
  var C, T, v;
  const c = Kt(void 0), u = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, m = Ct(() => {
    b(!0, !1);
  });
  Do(() => {
    if (!u) return;
    function w() {
      c.current = requestAnimationFrame(m);
    }
    return addEventListener("mousedown", w, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", w, {
        capture: !0
      }), p();
    };
  }, [u, m]);
  function p() {
    cancelAnimationFrame(c.current);
  }
  function h(w) {
    if (a) {
      const x = yr(w);
      if (a({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          l(w);
        },
        onClose: b
      }, x), x.isGridDefaultPrevented()) return;
    }
    w.key === "Escape" ? b() : w.key === "Enter" ? b(!0) : cd(w) && l(w);
  }
  function b(w = !1, x = !0) {
    w ? o(n, !0, x) : s(x);
  }
  function y(w, x = !1) {
    o(w, x, x);
  }
  const {
    cellClass: g
  } = e, f = Fr(e, "rdg-editor-container", typeof g == "function" ? g(n) : g, !((T = e.editorOptions) != null && T.displayCellContent) && Zd);
  return /* @__PURE__ */ P.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: f,
    style: Zn(e, t),
    onKeyDown: h,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ P.jsxs(P.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: y,
        onClose: b
      }), ((v = e.editorOptions) == null ? void 0 : v.displayCellContent) && e.renderCell({
        column: e,
        row: n,
        rowIdx: r,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: y
      })]
    })
  });
}
function Jd({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: o,
    onFocus: s
  } = _r(n), {
    colSpan: a
  } = e, l = El(e, t), c = e.idx + 1;
  function u() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ P.jsx("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": a,
    "aria-rowspan": l,
    "aria-selected": n,
    tabIndex: o,
    className: he(wl, e.headerCellClass),
    style: {
      ...Cl(e, t, l),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: s,
    onClick: u,
    children: e.name
  });
}
const ef = "h44jtk67-0-0-beta-47", tf = "hcgkhxz7-0-0-beta-47", nf = `rdg-header-sort-name ${tf}`;
function $l({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ P.jsx(rf, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function rf({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = Ao().renderSortStatus;
  return /* @__PURE__ */ P.jsxs("span", {
    className: ef,
    children: [/* @__PURE__ */ P.jsx("span", {
      className: nf,
      children: n
    }), /* @__PURE__ */ P.jsx("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const of = "c6l2wv17-0-0-beta-47", sf = "c1kqdw7y7-0-0-beta-47", af = `rdg-cell-resizable ${sf}`, lf = "r1y6ywlx7-0-0-beta-47", cf = "rdg-cell-draggable", uf = "c1bezg5o7-0-0-beta-47", df = `rdg-cell-dragging ${uf}`, ff = "c1vc96037-0-0-beta-47", pf = `rdg-cell-drag-over ${ff}`;
function mf({
  column: e,
  colSpan: t,
  rowIdx: n,
  isCellSelected: r,
  onColumnResize: o,
  onColumnsReorder: s,
  sortColumns: a,
  onSortColumnsChange: l,
  selectCell: c,
  shouldFocusGrid: u,
  direction: m,
  dragDropKey: p
}) {
  const [h, b] = pt(!1), [y, g] = pt(!1), f = m === "rtl", C = El(e, n), {
    tabIndex: T,
    childTabIndex: v,
    onFocus: w
  } = _r(r), x = a == null ? void 0 : a.findIndex((D) => D.columnKey === e.key), O = x !== void 0 && x > -1 ? a[x] : void 0, E = O == null ? void 0 : O.direction, M = O !== void 0 && a.length > 1 ? x + 1 : void 0, A = E && !M ? E === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: d,
    resizable: k,
    draggable: _
  } = e, F = Fr(e, e.headerCellClass, d && of, k && af, _ && cf, h && df, y && pf), U = e.renderHeaderCell ?? $l;
  function N(D) {
    if (D.pointerType === "mouse" && D.buttons !== 1)
      return;
    D.preventDefault();
    const {
      currentTarget: Y,
      pointerId: Z
    } = D, V = Y.parentElement, {
      right: ne,
      left: L
    } = V.getBoundingClientRect(), fe = f ? D.clientX - L : ne - D.clientX;
    let I = !1;
    function ae(Ee) {
      const {
        width: be,
        right: st,
        left: xe
      } = V.getBoundingClientRect();
      let tt = f ? st + fe - Ee.clientX : Ee.clientX + fe - xe;
      tt = Sl(tt, e), be > 0 && tt !== be && o(e, tt);
    }
    function ge() {
      I = !0, o(e, "max-content");
    }
    function Re(Ee) {
      I || ae(Ee), Y.removeEventListener("pointermove", ae), Y.removeEventListener("dblclick", ge), Y.removeEventListener("lostpointercapture", Re);
    }
    Y.setPointerCapture(Z), Y.addEventListener("pointermove", ae), Y.addEventListener("dblclick", ge), Y.addEventListener("lostpointercapture", Re);
  }
  function W(D) {
    if (l == null) return;
    const {
      sortDescendingFirst: Y
    } = e;
    if (O === void 0) {
      const Z = {
        columnKey: e.key,
        direction: Y ? "DESC" : "ASC"
      };
      l(a && D ? [...a, Z] : [Z]);
    } else {
      let Z;
      if ((Y === !0 && E === "DESC" || Y !== !0 && E === "ASC") && (Z = {
        columnKey: e.key,
        direction: E === "ASC" ? "DESC" : "ASC"
      }), D) {
        const V = [...a];
        Z ? V[x] = Z : V.splice(x, 1), l(V);
      } else
        l(Z ? [Z] : []);
    }
  }
  function ee(D) {
    c({
      idx: e.idx,
      rowIdx: n
    }), d && W(D.ctrlKey || D.metaKey);
  }
  function J(D) {
    w == null || w(D), u && c({
      idx: 0,
      rowIdx: n
    });
  }
  function oe(D) {
    (D.key === " " || D.key === "Enter") && (D.preventDefault(), W(D.ctrlKey || D.metaKey));
  }
  function B(D) {
    D.dataTransfer.setData(p, e.key), D.dataTransfer.dropEffect = "move", b(!0);
  }
  function K() {
    b(!1);
  }
  function re(D) {
    D.preventDefault(), D.dataTransfer.dropEffect = "move";
  }
  function Q(D) {
    if (g(!1), D.dataTransfer.types.includes(p.toLowerCase())) {
      const Y = D.dataTransfer.getData(p.toLowerCase());
      Y !== e.key && (D.preventDefault(), s == null || s(Y, e.key));
    }
  }
  function $(D) {
    Us(D) && g(!0);
  }
  function z(D) {
    Us(D) && g(!1);
  }
  let H;
  return _ && (H = {
    draggable: !0,
    onDragStart: B,
    onDragEnd: K,
    onDragOver: re,
    onDragEnter: $,
    onDragLeave: z,
    onDrop: Q
  }), /* @__PURE__ */ P.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": C,
    "aria-selected": r,
    "aria-sort": A,
    tabIndex: u ? 0 : T,
    className: F,
    style: {
      ...Cl(e, n, C),
      ...Zn(e, t)
    },
    onFocus: J,
    onClick: ee,
    onKeyDown: d ? oe : void 0,
    ...H,
    children: [U({
      column: e,
      sortDirection: E,
      priority: M,
      tabIndex: v
    }), k && /* @__PURE__ */ P.jsx("div", {
      className: lf,
      onClick: sd,
      onPointerDown: N
    })]
  });
}
function Us(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const hf = "r1upfr807-0-0-beta-47", rs = `rdg-row ${hf}`, gf = "r190mhd37-0-0-beta-47", Fo = "rdg-row-selected", bf = "r139qu9m7-0-0-beta-47", yf = "rdg-top-summary-row", vf = "rdg-bottom-summary-row", xf = "h10tskcx7-0-0-beta-47", Dl = `rdg-header-row ${xf}`;
function wf({
  rowIdx: e,
  columns: t,
  onColumnResize: n,
  onColumnsReorder: r,
  sortColumns: o,
  onSortColumnsChange: s,
  lastFrozenColumnIndex: a,
  selectedCellIdx: l,
  selectCell: c,
  shouldFocusGrid: u,
  direction: m
}) {
  const p = ed(), h = [];
  for (let b = 0; b < t.length; b++) {
    const y = t[b], g = Dt(y, a, {
      type: "HEADER"
    });
    g !== void 0 && (b += g - 1), h.push(/* @__PURE__ */ P.jsx(mf, {
      column: y,
      colSpan: g,
      rowIdx: e,
      isCellSelected: l === y.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: s,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: u && b === 0,
      direction: m,
      dragDropKey: p
    }, y.key));
  }
  return /* @__PURE__ */ P.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: he(Dl, l === -1 && Fo),
    children: h
  });
}
const Cf = /* @__PURE__ */ gn(wf);
function Sf({
  rowIdx: e,
  level: t,
  columns: n,
  selectedCellIdx: r,
  selectCell: o
}) {
  const s = [], a = /* @__PURE__ */ new Set();
  for (const l of n) {
    let {
      parent: c
    } = l;
    if (c !== void 0) {
      for (; c.level > t && c.parent !== void 0; )
        c = c.parent;
      if (c.level === t && !a.has(c)) {
        a.add(c);
        const {
          idx: u
        } = c;
        s.push(/* @__PURE__ */ P.jsx(Jd, {
          column: c,
          rowIdx: e,
          isCellSelected: r === u,
          selectCell: o
        }, u));
      }
    }
  }
  return /* @__PURE__ */ P.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: Dl,
    children: s
  });
}
const Ef = /* @__PURE__ */ gn(Sf), Tf = "c6ra8a37-0-0-beta-47", Rf = `rdg-cell-copied ${Tf}`, Of = "cq910m07-0-0-beta-47", kf = `rdg-cell-dragged-over ${Of}`;
function Pf({
  column: e,
  colSpan: t,
  isCellSelected: n,
  isCopied: r,
  isDraggedOver: o,
  row: s,
  rowIdx: a,
  onClick: l,
  onDoubleClick: c,
  onContextMenu: u,
  onRowChange: m,
  selectCell: p,
  ...h
}) {
  const {
    tabIndex: b,
    childTabIndex: y,
    onFocus: g
  } = _r(n), {
    cellClass: f
  } = e, C = Fr(e, typeof f == "function" ? f(s) : f, r && Rf, o && kf), T = xl(e, s);
  function v(M) {
    p({
      rowIdx: a,
      idx: e.idx
    }, M);
  }
  function w(M) {
    if (l) {
      const A = yr(M);
      if (l({
        row: s,
        column: e,
        selectCell: v
      }, A), A.isGridDefaultPrevented()) return;
    }
    v();
  }
  function x(M) {
    if (u) {
      const A = yr(M);
      if (u({
        row: s,
        column: e,
        selectCell: v
      }, A), A.isGridDefaultPrevented()) return;
    }
    v();
  }
  function O(M) {
    if (c) {
      const A = yr(M);
      if (c({
        row: s,
        column: e,
        selectCell: v
      }, A), A.isGridDefaultPrevented()) return;
    }
    v(!0);
  }
  function E(M) {
    m(e, M);
  }
  return /* @__PURE__ */ P.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !T || void 0,
    tabIndex: b,
    className: C,
    style: Zn(e, t),
    onClick: w,
    onDoubleClick: O,
    onContextMenu: x,
    onFocus: g,
    ...h,
    children: e.renderCell({
      column: e,
      row: s,
      rowIdx: a,
      isCellEditable: T,
      tabIndex: y,
      onRowChange: E
    })
  });
}
const If = /* @__PURE__ */ gn(Pf);
function Mf({
  className: e,
  rowIdx: t,
  gridRowStart: n,
  selectedCellIdx: r,
  isRowSelectionDisabled: o,
  isRowSelected: s,
  copiedCellIdx: a,
  draggedOverCellIdx: l,
  lastFrozenColumnIndex: c,
  row: u,
  viewportColumns: m,
  selectedCellEditor: p,
  onCellClick: h,
  onCellDoubleClick: b,
  onCellContextMenu: y,
  rowClass: g,
  setDraggedOverRowIdx: f,
  onMouseEnter: C,
  onRowChange: T,
  selectCell: v,
  ...w
}, x) {
  const O = Ct((d, k) => {
    T(d, t, k);
  });
  function E(d) {
    f == null || f(t), C == null || C(d);
  }
  e = he(rs, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, g == null ? void 0 : g(u, t), e, r === -1 && Fo);
  const M = [];
  for (let d = 0; d < m.length; d++) {
    const k = m[d], {
      idx: _
    } = k, F = Dt(k, c, {
      type: "ROW",
      row: u
    });
    F !== void 0 && (d += F - 1);
    const U = r === _;
    U && p ? M.push(p) : M.push(/* @__PURE__ */ P.jsx(If, {
      column: k,
      colSpan: F,
      row: u,
      rowIdx: t,
      isCopied: a === _,
      isDraggedOver: l === _,
      isCellSelected: U,
      onClick: h,
      onDoubleClick: b,
      onContextMenu: y,
      onRowChange: O,
      selectCell: v
    }, k.key));
  }
  const A = Ze(() => ({
    isRowSelected: s,
    isRowSelectionDisabled: o
  }), [o, s]);
  return /* @__PURE__ */ P.jsx(Ol, {
    value: A,
    children: /* @__PURE__ */ P.jsx("div", {
      role: "row",
      ref: x,
      className: e,
      onMouseEnter: E,
      style: ts(n),
      ...w,
      children: M
    })
  });
}
const Al = /* @__PURE__ */ gn(/* @__PURE__ */ $o(Mf)), bx = Al;
function Fl(e, t) {
  return /* @__PURE__ */ P.jsx(Al, {
    ...t
  }, e);
}
function Nf({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const o = Kt(null);
  return qn(() => {
    uo(o.current);
  }), qn(() => {
    function s() {
      r(null);
    }
    const a = new IntersectionObserver(s, {
      root: n,
      threshold: 1
    });
    return a.observe(o.current), () => {
      a.disconnect();
    };
  }, [n, r]), /* @__PURE__ */ P.jsx("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const $f = "a3ejtar7-0-0-beta-47", Df = `rdg-sort-arrow ${$f}`;
function Af({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ P.jsxs(P.Fragment, {
    children: [Ff({
      sortDirection: e
    }), _f({
      priority: t
    })]
  });
}
function Ff({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ P.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Df,
    "aria-hidden": !0,
    children: /* @__PURE__ */ P.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function _f({
  priority: e
}) {
  return e;
}
const jf = "rnvodz57-0-0-beta-47", Lf = `rdg ${jf}`, Bf = "vlqv91k7-0-0-beta-47", zf = `rdg-viewport-dragging ${Bf}`, Wf = "f1lsfrzw7-0-0-beta-47", Vf = "f1cte0lg7-0-0-beta-47", Uf = "s8wc6fl7-0-0-beta-47";
function Hf({
  column: e,
  colSpan: t,
  row: n,
  rowIdx: r,
  isCellSelected: o,
  selectCell: s
}) {
  var h;
  const {
    tabIndex: a,
    childTabIndex: l,
    onFocus: c
  } = _r(o), {
    summaryCellClass: u
  } = e, m = Fr(e, Uf, typeof u == "function" ? u(n) : u);
  function p() {
    s({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ P.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: a,
    className: m,
    style: Zn(e, t),
    onClick: p,
    onFocus: c,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: n,
      tabIndex: l
    })
  });
}
const Yf = /* @__PURE__ */ gn(Hf), qf = "skuhp557-0-0-beta-47", Gf = "tf8l5ub7-0-0-beta-47", Kf = `rdg-summary-row ${qf}`;
function Xf({
  rowIdx: e,
  gridRowStart: t,
  row: n,
  viewportColumns: r,
  top: o,
  bottom: s,
  lastFrozenColumnIndex: a,
  selectedCellIdx: l,
  isTop: c,
  selectCell: u,
  "aria-rowindex": m
}) {
  const p = [];
  for (let h = 0; h < r.length; h++) {
    const b = r[h], y = Dt(b, a, {
      type: "SUMMARY",
      row: n
    });
    y !== void 0 && (h += y - 1);
    const g = l === b.idx;
    p.push(/* @__PURE__ */ P.jsx(Yf, {
      column: b,
      colSpan: y,
      row: n,
      rowIdx: e,
      isCellSelected: g,
      selectCell: u
    }, b.key));
  }
  return /* @__PURE__ */ P.jsx("div", {
    role: "row",
    "aria-rowindex": m,
    className: he(rs, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Kf, c ? `${yf} ${Gf}` : vf, l === -1 && Fo),
    style: {
      ...ts(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": s !== void 0 ? `${s}px` : void 0
    },
    children: p
  });
}
const Hs = /* @__PURE__ */ gn(Xf);
function Zf(e, t) {
  const {
    columns: n,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: s,
    rowKeyGetter: a,
    onRowsChange: l,
    rowHeight: c,
    headerRowHeight: u,
    summaryRowHeight: m,
    selectedRows: p,
    isRowSelectionDisabled: h,
    onSelectedRowsChange: b,
    sortColumns: y,
    onSortColumnsChange: g,
    defaultColumnOptions: f,
    onCellClick: C,
    onCellDoubleClick: T,
    onCellContextMenu: v,
    onCellKeyDown: w,
    onSelectedCellChange: x,
    onScroll: O,
    onColumnResize: E,
    onColumnsReorder: M,
    onFill: A,
    onCopy: d,
    onPaste: k,
    enableVirtualization: _,
    renderers: F,
    className: U,
    style: N,
    rowClass: W,
    direction: ee,
    role: J,
    "aria-label": oe,
    "aria-labelledby": B,
    "aria-describedby": K,
    "aria-rowcount": re,
    "data-testid": Q
  } = e, $ = Ao(), z = J ?? "grid", H = c ?? 35, D = u ?? (typeof H == "number" ? H : 35), Y = m ?? (typeof H == "number" ? H : 35), Z = (F == null ? void 0 : F.renderRow) ?? ($ == null ? void 0 : $.renderRow) ?? Fl, V = (F == null ? void 0 : F.renderSortStatus) ?? ($ == null ? void 0 : $.renderSortStatus) ?? Af, ne = (F == null ? void 0 : F.renderCheckbox) ?? ($ == null ? void 0 : $.renderCheckbox) ?? Sd, L = (F == null ? void 0 : F.noRowsFallback) ?? ($ == null ? void 0 : $.noRowsFallback), fe = _ ?? !0, I = ee ?? "ltr", [ae, ge] = pt(0), [Re, Ee] = pt(0), [be, st] = pt(() => /* @__PURE__ */ new Map()), [xe, tt] = pt(() => /* @__PURE__ */ new Map()), [se, Ye] = pt(null), [Tt, Rt] = pt(!1), [at, zt] = pt(void 0), [lt, Ot] = pt(null), we = on((G) => be.get(G.key) ?? xe.get(G.key) ?? G.width, [xe, be]), [gt, Wt, yn, ce] = Ud(), {
    columns: de,
    colSpanColumns: qe,
    lastFrozenColumnIndex: Qe,
    headerRowsCount: vt,
    colOverscanStartIdx: Yr,
    colOverscanEndIdx: en,
    templateColumns: er,
    layoutCssVars: tr,
    totalFrozenColumnWidth: qr
  } = Wd({
    rawColumns: n,
    defaultColumnOptions: f,
    getColumnWidth: we,
    scrollLeft: Re,
    viewportWidth: Wt,
    enableVirtualization: fe
  }), vn = (o == null ? void 0 : o.length) ?? 0, tn = (s == null ? void 0 : s.length) ?? 0, Gr = vn + tn, nn = vt + vn, In = vt - 1, bt = -nn, Mn = bt + In, Vt = r.length + tn - 1, [ie, ln] = pt(() => ({
    idx: -1,
    rowIdx: bt - 1,
    mode: "SELECT"
  })), nr = Kt(ie), Kr = Kt(at), Xr = Kt(-1), S = Kt(null), q = Kt(!1), te = z === "treegrid", pe = vt * D, Se = Gr * Y, Te = yn - pe - Se, ve = p != null && b != null, ye = I === "rtl", ct = ye ? "ArrowRight" : "ArrowLeft", Be = ye ? "ArrowLeft" : "ArrowRight", We = re ?? vt + r.length + Gr, xt = Ze(() => ({
    renderCheckbox: ne,
    renderSortStatus: V
  }), [ne, V]), cn = Ze(() => {
    let G = !1, X = !1;
    if (a != null && p != null && p.size > 0) {
      for (const le of r)
        if (p.has(a(le)) ? G = !0 : X = !0, G && X) break;
    }
    return {
      isRowSelected: G && !X,
      isIndeterminate: G && X
    };
  }, [r, p, a]), {
    rowOverscanStartIdx: kt,
    rowOverscanEndIdx: nt,
    totalRowHeight: xn,
    gridTemplateRows: ii,
    getRowTop: Zr,
    getRowHeight: Cu,
    findRowIdx: Ms
  } = Yd({
    rows: r,
    rowHeight: H,
    clientHeight: Te,
    scrollTop: ae,
    enableVirtualization: fe
  }), un = Hd({
    columns: de,
    colSpanColumns: qe,
    colOverscanStartIdx: Yr,
    colOverscanEndIdx: en,
    lastFrozenColumnIndex: Qe,
    rowOverscanStartIdx: kt,
    rowOverscanEndIdx: nt,
    rows: r,
    topSummaryRows: o,
    bottomSummaryRows: s
  }), {
    gridTemplateColumns: Su,
    handleColumnResize: Eu
  } = Vd(de, un, er, gt, Wt, be, xe, st, tt, E), Tu = te ? -1 : 0, Nn = de.length - 1, si = ci(ie), Qr = Fs(ie), Ru = D + xn + Se + ce, Ou = Ct(Eu), ku = Ct(M), Pu = Ct(g), Iu = Ct(C), Mu = Ct(T), Nu = Ct(v), $u = Ct(Fu), Du = Ct($s), Au = Ct(Jr), ai = Ct(rr), Ns = Ct(({
    idx: G,
    rowIdx: X
  }) => {
    rr({
      rowIdx: bt + X - 1,
      idx: G
    });
  });
  qn(() => {
    if (!si || fi(ie, nr.current)) {
      nr.current = ie;
      return;
    }
    nr.current = ie, ie.idx === -1 && (S.current.focus({
      preventScroll: !0
    }), uo(S.current));
  }), qn(() => {
    q.current && (q.current = !1, js());
  }), Qu(t, () => ({
    element: gt.current,
    scrollToCell({
      idx: G,
      rowIdx: X
    }) {
      const le = G !== void 0 && G > Qe && G < de.length ? G : void 0, ue = X !== void 0 && $n(X) ? X : void 0;
      (le !== void 0 || ue !== void 0) && Ot({
        idx: le,
        rowIdx: ue
      });
    },
    selectCell: rr
  }));
  const li = on((G) => {
    zt(G), Kr.current = G;
  }, []);
  function Fu(G) {
    if (!b) return;
    vr(a);
    const X = new Set(p);
    for (const le of r) {
      if ((h == null ? void 0 : h(le)) === !0) continue;
      const ue = a(le);
      G.checked ? X.add(ue) : X.delete(ue);
    }
    b(X);
  }
  function $s(G) {
    if (!b) return;
    vr(a);
    const {
      row: X,
      checked: le,
      isShiftClick: ue
    } = G;
    if ((h == null ? void 0 : h(X)) === !0) return;
    const Ce = new Set(p), Fe = a(X), Ve = Xr.current, Ge = r.indexOf(X);
    if (Xr.current = Ge, le ? Ce.add(Fe) : Ce.delete(Fe), ue && Ve !== -1 && Ve !== Ge && Ve < r.length) {
      const Pt = vd(Ge - Ve);
      for (let wt = Ve + Pt; wt !== Ge; wt += Pt) {
        const Ut = r[wt];
        (h == null ? void 0 : h(Ut)) !== !0 && (le ? Ce.add(a(Ut)) : Ce.delete(a(Ut)));
      }
    }
    b(Ce);
  }
  function _u(G) {
    var Ge;
    const {
      idx: X,
      rowIdx: le,
      mode: ue
    } = ie;
    if (ue === "EDIT") return;
    if (w && $n(le)) {
      const Pt = r[le], wt = yr(G);
      if (w({
        mode: "SELECT",
        row: Pt,
        column: de[X],
        rowIdx: le,
        selectCell: rr
      }, wt), wt.isGridDefaultPrevented()) return;
    }
    if (!(G.target instanceof Element)) return;
    const Ce = G.target.closest(".rdg-cell") !== null, Fe = te && G.target === S.current;
    if (!Ce && !Fe) return;
    const {
      keyCode: Ve
    } = G;
    if (Qr && (k != null || d != null) && yo(G)) {
      if (Ve === 67) {
        if (((Ge = window.getSelection()) == null ? void 0 : Ge.isCollapsed) === !1) return;
        Lu();
        return;
      }
      if (Ve === 86) {
        Bu();
        return;
      }
    }
    switch (G.key) {
      case "Escape":
        Ye(null);
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
        _s(G);
        break;
      default:
        zu(G);
        break;
    }
  }
  function ju(G) {
    const {
      scrollTop: X,
      scrollLeft: le
    } = G.currentTarget;
    bo(() => {
      ge(X), Ee(xd(le));
    }), O == null || O(G);
  }
  function Jr(G, X, le) {
    if (typeof l != "function" || le === r[X]) return;
    const ue = [...r];
    ue[X] = le, l(ue, {
      indexes: [X],
      column: G
    });
  }
  function Ds() {
    ie.mode === "EDIT" && Jr(de[ie.idx], ie.rowIdx, ie.row);
  }
  function Lu() {
    const {
      idx: G,
      rowIdx: X
    } = ie, le = r[X], ue = de[G].key;
    Ye({
      row: le,
      columnKey: ue
    }), d == null || d({
      sourceRow: le,
      sourceColumnKey: ue
    });
  }
  function Bu() {
    if (!k || !l || se === null || !eo(ie))
      return;
    const {
      idx: G,
      rowIdx: X
    } = ie, le = de[G], ue = r[X], Ce = k({
      sourceRow: se.row,
      sourceColumnKey: se.columnKey,
      targetRow: ue,
      targetColumnKey: le.key
    });
    Jr(le, X, Ce);
  }
  function zu(G) {
    if (!Qr) return;
    const X = r[ie.rowIdx], {
      key: le,
      shiftKey: ue
    } = G;
    if (ve && ue && le === " ") {
      vr(a);
      const Ce = a(X);
      $s({
        row: X,
        checked: !p.has(Ce),
        isShiftClick: !1
      }), G.preventDefault();
      return;
    }
    eo(ie) && ld(G) && ln(({
      idx: Ce,
      rowIdx: Fe
    }) => ({
      idx: Ce,
      rowIdx: Fe,
      mode: "EDIT",
      row: X,
      originalRow: X
    }));
  }
  function As(G) {
    return G >= Tu && G <= Nn;
  }
  function $n(G) {
    return G >= 0 && G < r.length;
  }
  function ci({
    idx: G,
    rowIdx: X
  }) {
    return X >= bt && X <= Vt && As(G);
  }
  function Wu({
    idx: G,
    rowIdx: X
  }) {
    return $n(X) && G >= 0 && G <= Nn;
  }
  function Fs({
    idx: G,
    rowIdx: X
  }) {
    return $n(X) && As(G);
  }
  function eo(G) {
    return Wu(G) && fd({
      columns: de,
      rows: r,
      selectedPosition: G
    });
  }
  function rr(G, X) {
    if (!ci(G)) return;
    Ds();
    const le = r[G.rowIdx], ue = fi(ie, G);
    X && eo(G) ? ln({
      ...G,
      mode: "EDIT",
      row: le,
      originalRow: le
    }) : ue ? uo(Ys(gt.current)) : (q.current = !0, ln({
      ...G,
      mode: "SELECT"
    })), x && !ue && x({
      rowIdx: G.rowIdx,
      row: le,
      column: de[G.idx]
    });
  }
  function Vu(G, X, le) {
    const {
      idx: ue,
      rowIdx: Ce
    } = ie, Fe = si && ue === -1;
    switch (G) {
      case "ArrowUp":
        return {
          idx: ue,
          rowIdx: Ce - 1
        };
      case "ArrowDown":
        return {
          idx: ue,
          rowIdx: Ce + 1
        };
      case ct:
        return {
          idx: ue - 1,
          rowIdx: Ce
        };
      case Be:
        return {
          idx: ue + 1,
          rowIdx: Ce
        };
      case "Tab":
        return {
          idx: ue + (le ? -1 : 1),
          rowIdx: Ce
        };
      case "Home":
        return Fe ? {
          idx: ue,
          rowIdx: bt
        } : {
          idx: 0,
          rowIdx: X ? bt : Ce
        };
      case "End":
        return Fe ? {
          idx: ue,
          rowIdx: Vt
        } : {
          idx: Nn,
          rowIdx: X ? Vt : Ce
        };
      case "PageUp": {
        if (ie.rowIdx === bt) return ie;
        const Ve = Zr(Ce) + Cu(Ce) - Te;
        return {
          idx: ue,
          rowIdx: Ve > 0 ? Ms(Ve) : 0
        };
      }
      case "PageDown": {
        if (ie.rowIdx >= r.length) return ie;
        const Ve = Zr(Ce) + Te;
        return {
          idx: ue,
          rowIdx: Ve < xn ? Ms(Ve) : r.length - 1
        };
      }
      default:
        return ie;
    }
  }
  function _s(G) {
    const {
      key: X,
      shiftKey: le
    } = G;
    let ue = "NONE";
    if (X === "Tab") {
      if (hd({
        shiftKey: le,
        maxColIdx: Nn,
        minRowIdx: bt,
        maxRowIdx: Vt,
        selectedPosition: ie
      })) {
        Ds();
        return;
      }
      ue = "CHANGE_ROW";
    }
    G.preventDefault();
    const Ce = yo(G), Fe = Vu(X, Ce, le);
    if (fi(ie, Fe)) return;
    const Ve = md({
      moveUp: X === "ArrowUp",
      moveNext: X === Be || X === "Tab" && !le,
      columns: de,
      colSpanColumns: qe,
      rows: r,
      topSummaryRows: o,
      bottomSummaryRows: s,
      minRowIdx: bt,
      mainHeaderRowIdx: Mn,
      maxRowIdx: Vt,
      lastFrozenColumnIndex: Qe,
      cellNavigationMode: ue,
      currentPosition: ie,
      nextPosition: Fe,
      isCellWithinBounds: ci
    });
    rr(Ve);
  }
  function Uu(G) {
    if (at === void 0) return;
    const {
      rowIdx: X
    } = ie;
    return (X < at ? X < G && G <= at : X > G && G >= at) ? ie.idx : void 0;
  }
  function js() {
    const G = Ys(gt.current);
    if (G === null) return;
    uo(G), (G.querySelector('[tabindex="0"]') ?? G).focus({
      preventScroll: !0
    });
  }
  function Hu() {
    if (A == null || ie.mode === "EDIT" || !Fs(ie))
      return;
    const {
      idx: G,
      rowIdx: X
    } = ie, le = de[G];
    if (le.renderEditCell == null || le.editable === !1)
      return;
    const ue = we(le);
    return /* @__PURE__ */ P.jsx(Xd, {
      gridRowStart: nn + X + 1,
      rows: r,
      column: le,
      columnWidth: ue,
      maxColIdx: Nn,
      isLastRow: X === Vt,
      selectedPosition: ie,
      isCellEditable: eo,
      latestDraggedOverRowIdx: Kr,
      onRowsChange: l,
      onClick: js,
      onFill: A,
      setDragging: Rt,
      setDraggedOverRowIdx: li
    });
  }
  function Yu(G) {
    if (ie.rowIdx !== G || ie.mode === "SELECT") return;
    const {
      idx: X,
      row: le
    } = ie, ue = de[X], Ce = Dt(ue, Qe, {
      type: "ROW",
      row: le
    }), Fe = (Ge) => {
      q.current = Ge, ln(({
        idx: Pt,
        rowIdx: wt
      }) => ({
        idx: Pt,
        rowIdx: wt,
        mode: "SELECT"
      }));
    }, Ve = (Ge, Pt, wt) => {
      Pt ? bo(() => {
        Jr(ue, ie.rowIdx, Ge), Fe(wt);
      }) : ln((Ut) => ({
        ...Ut,
        row: Ge
      }));
    };
    return r[ie.rowIdx] !== ie.originalRow && Fe(!1), /* @__PURE__ */ P.jsx(Qd, {
      column: ue,
      colSpan: Ce,
      row: le,
      rowIdx: G,
      onRowChange: Ve,
      closeEditor: Fe,
      onKeyDown: w,
      navigate: _s
    }, ue.key);
  }
  function or(G) {
    const X = ie.idx === -1 ? void 0 : de[ie.idx];
    return X !== void 0 && ie.rowIdx === G && !un.includes(X) ? ie.idx > en ? [...un, X] : [...un.slice(0, Qe + 1), X, ...un.slice(Qe + 1)] : un;
  }
  function qu() {
    const G = [], {
      idx: X,
      rowIdx: le
    } = ie, ue = Qr && le < kt ? kt - 1 : kt, Ce = Qr && le > nt ? nt + 1 : nt;
    for (let Fe = ue; Fe <= Ce; Fe++) {
      const Ve = Fe === kt - 1 || Fe === nt + 1, Ge = Ve ? le : Fe;
      let Pt = un;
      const wt = X === -1 ? void 0 : de[X];
      wt !== void 0 && (Ve ? Pt = [wt] : Pt = or(Ge));
      const Ut = r[Ge], Gu = nn + Ge + 1;
      let ui = Ge, di = !1;
      typeof a == "function" && (ui = a(Ut), di = (p == null ? void 0 : p.has(ui)) ?? !1), G.push(Z(ui, {
        "aria-rowindex": nn + Ge + 1,
        "aria-selected": ve ? di : void 0,
        rowIdx: Ge,
        row: Ut,
        viewportColumns: Pt,
        isRowSelectionDisabled: (h == null ? void 0 : h(Ut)) ?? !1,
        isRowSelected: di,
        onCellClick: Iu,
        onCellDoubleClick: Mu,
        onCellContextMenu: Nu,
        rowClass: W,
        gridRowStart: Gu,
        copiedCellIdx: se !== null && se.row === Ut ? de.findIndex((Ku) => Ku.key === se.columnKey) : void 0,
        selectedCellIdx: le === Ge ? X : void 0,
        draggedOverCellIdx: Uu(Ge),
        setDraggedOverRowIdx: Tt ? li : void 0,
        lastFrozenColumnIndex: Qe,
        onRowChange: Au,
        selectCell: ai,
        selectedCellEditor: Yu(Ge)
      }));
    }
    return G;
  }
  (ie.idx > Nn || ie.rowIdx > Vt) && (ln({
    idx: -1,
    rowIdx: bt - 1,
    mode: "SELECT"
  }), li(void 0));
  let to = `repeat(${vt}, ${D}px)`;
  vn > 0 && (to += ` repeat(${vn}, ${Y}px)`), r.length > 0 && (to += ii), tn > 0 && (to += ` repeat(${tn}, ${Y}px)`);
  const Ls = ie.idx === -1 && ie.rowIdx !== bt - 1;
  return /* @__PURE__ */ P.jsxs("div", {
    role: z,
    "aria-label": oe,
    "aria-labelledby": B,
    "aria-describedby": K,
    "aria-multiselectable": ve ? !0 : void 0,
    "aria-colcount": de.length,
    "aria-rowcount": We,
    className: he(Lf, U, Tt && zf),
    style: {
      ...N,
      scrollPaddingInlineStart: ie.idx > Qe || (lt == null ? void 0 : lt.idx) !== void 0 ? `${qr}px` : void 0,
      scrollPaddingBlock: $n(ie.rowIdx) || (lt == null ? void 0 : lt.rowIdx) !== void 0 ? `${pe + vn * Y}px ${tn * Y}px` : void 0,
      gridTemplateColumns: Su,
      gridTemplateRows: to,
      "--rdg-header-row-height": `${D}px`,
      "--rdg-scroll-height": `${Ru}px`,
      ...tr
    },
    dir: I,
    ref: gt,
    onScroll: ju,
    onKeyDown: _u,
    "data-testid": Q,
    children: [/* @__PURE__ */ P.jsxs(Md, {
      value: xt,
      children: [/* @__PURE__ */ P.jsx(Dd, {
        value: $u,
        children: /* @__PURE__ */ P.jsxs($d, {
          value: cn,
          children: [Array.from({
            length: In
          }, (G, X) => /* @__PURE__ */ P.jsx(Ef, {
            rowIdx: X + 1,
            level: -In + X,
            columns: or(bt + X),
            selectedCellIdx: ie.rowIdx === bt + X ? ie.idx : void 0,
            selectCell: Ns
          }, X)), /* @__PURE__ */ P.jsx(Cf, {
            rowIdx: vt,
            columns: or(Mn),
            onColumnResize: Ou,
            onColumnsReorder: ku,
            sortColumns: y,
            onSortColumnsChange: Pu,
            lastFrozenColumnIndex: Qe,
            selectedCellIdx: ie.rowIdx === Mn ? ie.idx : void 0,
            selectCell: Ns,
            shouldFocusGrid: !si,
            direction: I
          })]
        })
      }), r.length === 0 && L ? L : /* @__PURE__ */ P.jsxs(P.Fragment, {
        children: [o == null ? void 0 : o.map((G, X) => {
          const le = vt + 1 + X, ue = Mn + 1 + X, Ce = ie.rowIdx === ue, Fe = pe + Y * X;
          return /* @__PURE__ */ P.jsx(Hs, {
            "aria-rowindex": le,
            rowIdx: ue,
            gridRowStart: le,
            row: G,
            top: Fe,
            bottom: void 0,
            viewportColumns: or(ue),
            lastFrozenColumnIndex: Qe,
            selectedCellIdx: Ce ? ie.idx : void 0,
            isTop: !0,
            selectCell: ai
          }, X);
        }), /* @__PURE__ */ P.jsx(Nd, {
          value: Du,
          children: qu()
        }), s == null ? void 0 : s.map((G, X) => {
          const le = nn + r.length + X + 1, ue = r.length + X, Ce = ie.rowIdx === ue, Fe = Te > xn ? yn - Y * (s.length - X) : void 0, Ve = Fe === void 0 ? Y * (s.length - 1 - X) : void 0;
          return /* @__PURE__ */ P.jsx(Hs, {
            "aria-rowindex": We - tn + X + 1,
            rowIdx: ue,
            gridRowStart: le,
            row: G,
            top: Fe,
            bottom: Ve,
            viewportColumns: or(ue),
            lastFrozenColumnIndex: Qe,
            selectedCellIdx: Ce ? ie.idx : void 0,
            isTop: !1,
            selectCell: ai
          }, X);
        })]
      })]
    }), Hu(), dd(un), te && /* @__PURE__ */ P.jsx("div", {
      ref: S,
      tabIndex: Ls ? 0 : -1,
      className: he(Wf, Ls && [gf, Qe !== -1 && bf], !$n(ie.rowIdx) && Vf),
      style: {
        gridRowStart: ie.rowIdx + nn + 1
      }
    }), lt !== null && /* @__PURE__ */ P.jsx(Nf, {
      scrollToPosition: lt,
      setScrollToCellPosition: Ot,
      gridElement: gt.current
    })]
  });
}
function Ys(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function fi(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const _l = /* @__PURE__ */ $o(Zf);
function Qf({
  id: e,
  groupKey: t,
  childRows: n,
  isExpanded: r,
  isCellSelected: o,
  column: s,
  row: a,
  groupColumnIndex: l,
  isGroupByColumn: c,
  toggleGroup: u
}) {
  var g;
  const {
    tabIndex: m,
    childTabIndex: p,
    onFocus: h
  } = _r(o);
  function b() {
    u(e);
  }
  const y = c && l === s.idx;
  return /* @__PURE__ */ P.jsx("div", {
    role: "gridcell",
    "aria-colindex": s.idx + 1,
    "aria-selected": o,
    tabIndex: m,
    className: Fr(s),
    style: {
      ...Zn(s),
      cursor: y ? "pointer" : "default"
    },
    onClick: y ? b : void 0,
    onFocus: h,
    children: (!c || y) && ((g = s.renderGroupCell) == null ? void 0 : g.call(s, {
      groupKey: t,
      childRows: n,
      column: s,
      row: a,
      isExpanded: r,
      tabIndex: p,
      toggleGroup: b
    }))
  }, s.key);
}
const Jf = /* @__PURE__ */ gn(Qf), ep = "g1yxluv37-0-0-beta-47", tp = `rdg-group-row ${ep}`;
function np({
  className: e,
  row: t,
  rowIdx: n,
  viewportColumns: r,
  selectedCellIdx: o,
  isRowSelected: s,
  selectCell: a,
  gridRowStart: l,
  groupBy: c,
  toggleGroup: u,
  isRowSelectionDisabled: m,
  ...p
}) {
  const h = r[0].key === Yn ? t.level + 1 : t.level;
  function b() {
    a({
      rowIdx: n,
      idx: -1
    });
  }
  const y = Ze(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: s
  }), [s]);
  return /* @__PURE__ */ P.jsx(Ol, {
    value: y,
    children: /* @__PURE__ */ P.jsx("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: he(rs, tp, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, o === -1 && Fo),
      onClick: b,
      style: ts(l),
      ...p,
      children: r.map((g) => /* @__PURE__ */ P.jsx(Jf, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === g.idx,
        column: g,
        row: t,
        groupColumnIndex: h,
        toggleGroup: u,
        isGroupByColumn: c.includes(g.key)
      }, g.key))
    })
  });
}
const rp = /* @__PURE__ */ gn(np);
function op({
  columns: e,
  rows: t,
  rowHeight: n,
  rowKeyGetter: r,
  onCellKeyDown: o,
  onRowsChange: s,
  selectedRows: a,
  onSelectedRowsChange: l,
  renderers: c,
  groupBy: u,
  rowGrouper: m,
  expandedGroupIds: p,
  onExpandedGroupIdsChange: h,
  ...b
}, y) {
  var K, re, Q;
  const g = Ao(), f = (c == null ? void 0 : c.renderRow) ?? (g == null ? void 0 : g.renderRow) ?? Fl, C = 1 + (((K = b.topSummaryRows) == null ? void 0 : K.length) ?? 0), T = b.direction === "rtl", v = T ? "ArrowRight" : "ArrowLeft", w = T ? "ArrowLeft" : "ArrowRight", x = Ct(oe), {
    columns: O,
    groupBy: E
  } = Ze(() => {
    const $ = [...e].sort(({
      key: H
    }, {
      key: D
    }) => H === Yn ? -1 : D === Yn ? 1 : u.includes(H) ? u.includes(D) ? u.indexOf(H) - u.indexOf(D) : -1 : u.includes(D) ? 1 : 0), z = [];
    for (const [H, D] of $.entries())
      u.includes(D.key) && (z.push(D.key), $[H] = {
        ...D,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: D.renderGroupCell ?? kd,
        editable: !1
      });
    return {
      columns: $,
      groupBy: z
    };
  }, [e, u]), [M, A] = Ze(() => {
    if (E.length === 0) return [void 0, t.length];
    const $ = (z, [H, ...D], Y) => {
      let Z = 0;
      const V = {};
      for (const [ne, L] of Object.entries(m(z, H))) {
        const [fe, I] = D.length === 0 ? [L, L.length] : $(L, D, Y + Z + 1);
        V[ne] = {
          childRows: L,
          childGroups: fe,
          startRowIndex: Y + Z
        }, Z += I + 1;
      }
      return [V, Z];
    };
    return $(t, E, 0);
  }, [E, m, t]), [d, k] = Ze(() => {
    const $ = /* @__PURE__ */ new Set();
    if (!M) return [t, D];
    const z = [], H = (Y, Z, V) => {
      if (ip(Y)) {
        z.push(...Y);
        return;
      }
      Object.keys(Y).forEach((ne, L, fe) => {
        const I = Z !== void 0 ? `${Z}__${ne}` : ne, ae = p.has(I), {
          childRows: ge,
          childGroups: Re,
          startRowIndex: Ee
        } = Y[ne], be = {
          id: I,
          parentId: Z,
          groupKey: ne,
          isExpanded: ae,
          childRows: ge,
          level: V,
          posInSet: L,
          startRowIndex: Ee,
          setSize: fe.length
        };
        z.push(be), $.add(be), ae && H(Re, I, V + 1);
      });
    };
    return H(M, void 0, 0), [z, D];
    function D(Y) {
      return $.has(Y);
    }
  }, [p, M, t]), _ = Ze(() => typeof n == "function" ? ($) => k($) ? n({
    type: "GROUP",
    row: $
  }) : n({
    type: "ROW",
    row: $
  }) : n, [k, n]), F = on(($) => {
    const z = d.indexOf($);
    for (let H = z - 1; H >= 0; H--) {
      const D = d[H];
      if (k(D) && (!k($) || $.parentId === D.id))
        return [D, H];
    }
  }, [k, d]), U = on(($) => {
    if (k($))
      return $.id;
    if (typeof r == "function")
      return r($);
    const z = F($);
    if (z !== void 0) {
      const {
        startRowIndex: H,
        childRows: D
      } = z[0], Y = D.indexOf($);
      return H + Y + 1;
    }
    return d.indexOf($);
  }, [F, k, r, d]), N = Ze(() => {
    if (a == null) return null;
    vr(r);
    const $ = new Set(a);
    for (const z of d)
      k(z) && z.childRows.every((D) => a.has(r(D))) && $.add(z.id);
    return $;
  }, [k, r, a, d]);
  function W($) {
    if (!l) return;
    vr(r);
    const z = new Set(a);
    for (const H of d) {
      const D = U(H);
      if (N != null && N.has(D) && !$.has(D))
        if (k(H))
          for (const Y of H.childRows)
            z.delete(r(Y));
        else
          z.delete(D);
      else if (!(N != null && N.has(D)) && $.has(D))
        if (k(H))
          for (const Y of H.childRows)
            z.add(r(Y));
        else
          z.add(D);
    }
    l(z);
  }
  function ee($, z) {
    if (o == null || o($, z), z.isGridDefaultPrevented() || $.mode === "EDIT") return;
    const {
      column: H,
      rowIdx: D,
      selectCell: Y
    } = $, Z = (H == null ? void 0 : H.idx) ?? -1, V = d[D];
    if (k(V)) {
      if (Z === -1 && (z.key === v && V.isExpanded || z.key === w && !V.isExpanded) && (z.preventDefault(), z.preventGridDefault(), oe(V.id)), Z === -1 && z.key === v && !V.isExpanded && V.level !== 0) {
        const ne = F(V);
        ne !== void 0 && (z.preventGridDefault(), Y({
          idx: Z,
          rowIdx: ne[1]
        }));
      }
      yo(z) && (z.keyCode === 67 || z.keyCode === 86) && z.preventGridDefault();
    }
  }
  function J($, {
    indexes: z,
    column: H
  }) {
    if (!s) return;
    const D = [...t], Y = [];
    for (const Z of z) {
      const V = t.indexOf(d[Z]);
      D[V] = $[Z], Y.push(V);
    }
    s(D, {
      indexes: Y,
      column: H
    });
  }
  function oe($) {
    const z = new Set(p);
    z.has($) ? z.delete($) : z.add($), h(z);
  }
  function B($, {
    row: z,
    rowClass: H,
    onCellClick: D,
    onCellDoubleClick: Y,
    onCellContextMenu: Z,
    onRowChange: V,
    lastFrozenColumnIndex: ne,
    copiedCellIdx: L,
    draggedOverCellIdx: fe,
    setDraggedOverRowIdx: I,
    selectedCellEditor: ae,
    ...ge
  }) {
    if (k(z)) {
      const {
        startRowIndex: be
      } = z;
      return /* @__PURE__ */ P.jsx(rp, {
        ...ge,
        "aria-rowindex": C + be + 1,
        row: z,
        groupBy: E,
        toggleGroup: x
      }, $);
    }
    let Re = ge["aria-rowindex"];
    const Ee = F(z);
    if (Ee !== void 0) {
      const {
        startRowIndex: be,
        childRows: st
      } = Ee[0], xe = st.indexOf(z);
      Re = be + C + xe + 2;
    }
    return f($, {
      ...ge,
      "aria-rowindex": Re,
      row: z,
      rowClass: H,
      onCellClick: D,
      onCellDoubleClick: Y,
      onCellContextMenu: Z,
      onRowChange: V,
      lastFrozenColumnIndex: ne,
      copiedCellIdx: L,
      draggedOverCellIdx: fe,
      setDraggedOverRowIdx: I,
      selectedCellEditor: ae
    });
  }
  return /* @__PURE__ */ P.jsx(_l, {
    ...b,
    role: "treegrid",
    "aria-rowcount": A + 1 + (((re = b.topSummaryRows) == null ? void 0 : re.length) ?? 0) + (((Q = b.bottomSummaryRows) == null ? void 0 : Q.length) ?? 0),
    ref: y,
    columns: O,
    rows: d,
    rowHeight: _,
    rowKeyGetter: U,
    onRowsChange: J,
    selectedRows: N,
    onSelectedRowsChange: W,
    onCellKeyDown: ee,
    renderers: {
      ...c,
      renderRow: B
    }
  });
}
function ip(e) {
  return Array.isArray(e);
}
const yx = /* @__PURE__ */ $o(op), sp = "t7vyx3i7-0-0-beta-47", ap = `rdg-text-editor ${sp}`;
function lp(e) {
  e == null || e.focus(), e == null || e.select();
}
function vx({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ P.jsx("input", {
    className: ap,
    ref: lp,
    value: e[t.key],
    onChange: (o) => n({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const it = {
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
}, cp = {
  "--rdg-color": it.gray800,
  "--rdg-header-color": it.gray700,
  "--rdg-border-color": it.gray400,
  "--rdg-background-color": it.forcewhite,
  "--rdg-header-background-color": it.forcewhite,
  "--rdg-row-hover-background-color": it.forcewhite,
  "--rdg-row-selected-hover-background-color": it.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": it.primary400,
  "--rdg-row-selected-color": it.forcewhite
};
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xo.apply(null, arguments);
}
function jl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var up = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, dp = /* @__PURE__ */ jl(
  function(e) {
    return up.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), fp = !1;
function pp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function mp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var hp = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, s), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !fp : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(mp(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = pp(o);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ft = "-ms-", wo = "-moz-", Oe = "-webkit-", Ll = "comm", os = "rule", is = "decl", gp = "@import", Bl = "@keyframes", bp = "@layer", yp = Math.abs, _o = String.fromCharCode, vp = Object.assign;
function xp(e, t) {
  return ut(e, 0) ^ 45 ? (((t << 2 ^ ut(e, 0)) << 2 ^ ut(e, 1)) << 2 ^ ut(e, 2)) << 2 ^ ut(e, 3) : 0;
}
function zl(e) {
  return e.trim();
}
function wp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ke(e, t, n) {
  return e.replace(t, n);
}
function Fi(e, t) {
  return e.indexOf(t);
}
function ut(e, t) {
  return e.charCodeAt(t) | 0;
}
function Er(e, t, n) {
  return e.slice(t, n);
}
function qt(e) {
  return e.length;
}
function ss(e) {
  return e.length;
}
function ro(e, t) {
  return t.push(e), e;
}
function Cp(e, t) {
  return e.map(t).join("");
}
var jo = 1, Gn = 1, Wl = 0, Et = 0, rt = 0, Qn = "";
function Lo(e, t, n, r, o, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: jo, column: Gn, length: a, return: "" };
}
function lr(e, t) {
  return vp(Lo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Sp() {
  return rt;
}
function Ep() {
  return rt = Et > 0 ? ut(Qn, --Et) : 0, Gn--, rt === 10 && (Gn = 1, jo--), rt;
}
function Mt() {
  return rt = Et < Wl ? ut(Qn, Et++) : 0, Gn++, rt === 10 && (Gn = 1, jo++), rt;
}
function Zt() {
  return ut(Qn, Et);
}
function fo() {
  return Et;
}
function jr(e, t) {
  return Er(Qn, e, t);
}
function Tr(e) {
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
function Vl(e) {
  return jo = Gn = 1, Wl = qt(Qn = e), Et = 0, [];
}
function Ul(e) {
  return Qn = "", e;
}
function po(e) {
  return zl(jr(Et - 1, _i(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tp(e) {
  for (; (rt = Zt()) && rt < 33; )
    Mt();
  return Tr(e) > 2 || Tr(rt) > 3 ? "" : " ";
}
function Rp(e, t) {
  for (; --t && Mt() && !(rt < 48 || rt > 102 || rt > 57 && rt < 65 || rt > 70 && rt < 97); )
    ;
  return jr(e, fo() + (t < 6 && Zt() == 32 && Mt() == 32));
}
function _i(e) {
  for (; Mt(); )
    switch (rt) {
      case e:
        return Et;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _i(rt);
        break;
      case 40:
        e === 41 && _i(e);
        break;
      case 92:
        Mt();
        break;
    }
  return Et;
}
function Op(e, t) {
  for (; Mt() && e + rt !== 57; )
    if (e + rt === 84 && Zt() === 47)
      break;
  return "/*" + jr(t, Et - 1) + "*" + _o(e === 47 ? e : Mt());
}
function kp(e) {
  for (; !Tr(Zt()); )
    Mt();
  return jr(e, Et);
}
function Pp(e) {
  return Ul(mo("", null, null, null, [""], e = Vl(e), 0, [0], e));
}
function mo(e, t, n, r, o, s, a, l, c) {
  for (var u = 0, m = 0, p = a, h = 0, b = 0, y = 0, g = 1, f = 1, C = 1, T = 0, v = "", w = o, x = s, O = r, E = v; f; )
    switch (y = T, T = Mt()) {
      case 40:
        if (y != 108 && ut(E, p - 1) == 58) {
          Fi(E += ke(po(T), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += po(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Tp(y);
        break;
      case 92:
        E += Rp(fo() - 1, 7);
        continue;
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            ro(Ip(Op(Mt(), fo()), t, n), c);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        l[u++] = qt(E) * C;
      case 125 * g:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            f = 0;
          case 59 + m:
            C == -1 && (E = ke(E, /\f/g, "")), b > 0 && qt(E) - p && ro(b > 32 ? Gs(E + ";", r, n, p - 1) : Gs(ke(E, " ", "") + ";", r, n, p - 2), c);
            break;
          case 59:
            E += ";";
          default:
            if (ro(O = qs(E, t, n, u, m, o, l, v, w = [], x = [], p), s), T === 123)
              if (m === 0)
                mo(E, t, O, O, w, s, p, l, x);
              else
                switch (h === 99 && ut(E, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mo(e, O, O, r && ro(qs(e, O, O, 0, 0, o, l, v, o, w = [], p), x), o, x, p, l, r ? w : x);
                    break;
                  default:
                    mo(E, O, O, O, [""], x, 0, l, x);
                }
        }
        u = m = b = 0, g = C = 1, v = E = "", p = a;
        break;
      case 58:
        p = 1 + qt(E), b = y;
      default:
        if (g < 1) {
          if (T == 123)
            --g;
          else if (T == 125 && g++ == 0 && Ep() == 125)
            continue;
        }
        switch (E += _o(T), T * g) {
          case 38:
            C = m > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            l[u++] = (qt(E) - 1) * C, C = 1;
            break;
          case 64:
            Zt() === 45 && (E += po(Mt())), h = Zt(), m = p = qt(v = E += kp(fo())), T++;
            break;
          case 45:
            y === 45 && qt(E) == 2 && (g = 0);
        }
    }
  return s;
}
function qs(e, t, n, r, o, s, a, l, c, u, m) {
  for (var p = o - 1, h = o === 0 ? s : [""], b = ss(h), y = 0, g = 0, f = 0; y < r; ++y)
    for (var C = 0, T = Er(e, p + 1, p = yp(g = a[y])), v = e; C < b; ++C)
      (v = zl(g > 0 ? h[C] + " " + T : ke(T, /&\f/g, h[C]))) && (c[f++] = v);
  return Lo(e, t, n, o === 0 ? os : l, c, u, m);
}
function Ip(e, t, n) {
  return Lo(e, t, n, Ll, _o(Sp()), Er(e, 2, -2), 0);
}
function Gs(e, t, n, r) {
  return Lo(e, t, n, is, Er(e, 0, r), Er(e, r + 1, -1), r);
}
function Un(e, t) {
  for (var n = "", r = ss(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Mp(e, t, n, r) {
  switch (e.type) {
    case bp:
      if (e.children.length) break;
    case gp:
    case is:
      return e.return = e.return || e.value;
    case Ll:
      return "";
    case Bl:
      return e.return = e.value + "{" + Un(e.children, r) + "}";
    case os:
      e.value = e.props.join(",");
  }
  return qt(n = Un(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Np(e) {
  var t = ss(e);
  return function(n, r, o, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, o, s) || "";
    return a;
  };
}
function $p(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Dp = function(t, n, r) {
  for (var o = 0, s = 0; o = s, s = Zt(), o === 38 && s === 12 && (n[r] = 1), !Tr(s); )
    Mt();
  return jr(t, Et);
}, Ap = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Tr(o)) {
      case 0:
        o === 38 && Zt() === 12 && (n[r] = 1), t[r] += Dp(Et - 1, n, r);
        break;
      case 2:
        t[r] += po(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Zt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += _o(o);
    }
  while (o = Mt());
  return t;
}, Fp = function(t, n) {
  return Ul(Ap(Vl(t), n));
}, Ks = /* @__PURE__ */ new WeakMap(), _p = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ks.get(r)) && !o) {
      Ks.set(t, !0);
      for (var s = [], a = Fp(n, s), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var m = 0; m < l.length; m++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[m]) : l[m] + " " + a[c];
    }
  }
}, jp = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Hl(e, t) {
  switch (xp(e, t)) {
    case 5103:
      return Oe + "print-" + e + e;
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
      return Oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + e + wo + e + ft + e + e;
    case 6828:
    case 4268:
      return Oe + e + ft + e + e;
    case 6165:
      return Oe + e + ft + "flex-" + e + e;
    case 5187:
      return Oe + e + ke(e, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + ft + "flex-$1$2") + e;
    case 5443:
      return Oe + e + ft + "flex-item-" + ke(e, /flex-|-self/, "") + e;
    case 4675:
      return Oe + e + ft + "flex-line-pack" + ke(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Oe + e + ft + ke(e, "shrink", "negative") + e;
    case 5292:
      return Oe + e + ft + ke(e, "basis", "preferred-size") + e;
    case 6060:
      return Oe + "box-" + ke(e, "-grow", "") + Oe + e + ft + ke(e, "grow", "positive") + e;
    case 4554:
      return Oe + ke(e, /([^-])(transform)/g, "$1" + Oe + "$2") + e;
    case 6187:
      return ke(ke(ke(e, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ke(e, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return ke(ke(e, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(e, /(.+)-inline(.+)/, Oe + "$1$2") + e;
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
      if (qt(e) - 1 - t > 6) switch (ut(e, t + 1)) {
        case 109:
          if (ut(e, t + 4) !== 45) break;
        case 102:
          return ke(e, /(.+:)(.+)-([^]+)/, "$1" + Oe + "$2-$3$1" + wo + (ut(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Fi(e, "stretch") ? Hl(ke(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (ut(e, t + 1) !== 115) break;
    case 6444:
      switch (ut(e, qt(e) - 3 - (~Fi(e, "!important") && 10))) {
        case 107:
          return ke(e, ":", ":" + Oe) + e;
        case 101:
          return ke(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Oe + (ut(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Oe + "$2$3$1" + ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ut(e, t + 11)) {
        case 114:
          return Oe + e + ft + ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Oe + e + ft + ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Oe + e + ft + ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Oe + e + ft + e + e;
  }
  return e;
}
var Lp = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case is:
      t.return = Hl(t.value, t.length);
      break;
    case Bl:
      return Un([lr(t, {
        value: ke(t.value, "@", "@" + Oe)
      })], o);
    case os:
      if (t.length) return Cp(t.props, function(s) {
        switch (wp(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Un([lr(t, {
              props: [ke(s, /:(read-\w+)/, ":" + wo + "$1")]
            })], o);
          case "::placeholder":
            return Un([lr(t, {
              props: [ke(s, /:(plac\w+)/, ":" + Oe + "input-$1")]
            }), lr(t, {
              props: [ke(s, /:(plac\w+)/, ":" + wo + "$1")]
            }), lr(t, {
              props: [ke(s, /:(plac\w+)/, ft + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Bp = [Lp], zp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var f = g.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Bp, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var f = g.getAttribute("data-emotion").split(" "), C = 1; C < f.length; C++)
        s[f[C]] = !0;
      l.push(g);
    }
  );
  var c, u = [_p, jp];
  {
    var m, p = [Mp, $p(function(g) {
      m.insert(g);
    })], h = Np(u.concat(o, p)), b = function(f) {
      return Un(Pp(f), h);
    };
    c = function(f, C, T, v) {
      m = T, b(f ? f + "{" + C.styles + "}" : C.styles), v && (y.inserted[C.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new hp({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return y.sheet.hydrate(l), y;
}, ji = { exports: {} }, Pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function Wp() {
  if (Xs) return Pe;
  Xs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var O = x.$$typeof;
      switch (O) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case r:
            case s:
            case o:
            case p:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case m:
                case y:
                case b:
                case a:
                  return x;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  function w(x) {
    return v(x) === u;
  }
  return Pe.AsyncMode = c, Pe.ConcurrentMode = u, Pe.ContextConsumer = l, Pe.ContextProvider = a, Pe.Element = t, Pe.ForwardRef = m, Pe.Fragment = r, Pe.Lazy = y, Pe.Memo = b, Pe.Portal = n, Pe.Profiler = s, Pe.StrictMode = o, Pe.Suspense = p, Pe.isAsyncMode = function(x) {
    return w(x) || v(x) === c;
  }, Pe.isConcurrentMode = w, Pe.isContextConsumer = function(x) {
    return v(x) === l;
  }, Pe.isContextProvider = function(x) {
    return v(x) === a;
  }, Pe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Pe.isForwardRef = function(x) {
    return v(x) === m;
  }, Pe.isFragment = function(x) {
    return v(x) === r;
  }, Pe.isLazy = function(x) {
    return v(x) === y;
  }, Pe.isMemo = function(x) {
    return v(x) === b;
  }, Pe.isPortal = function(x) {
    return v(x) === n;
  }, Pe.isProfiler = function(x) {
    return v(x) === s;
  }, Pe.isStrictMode = function(x) {
    return v(x) === o;
  }, Pe.isSuspense = function(x) {
    return v(x) === p;
  }, Pe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === s || x === o || x === p || x === h || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === b || x.$$typeof === a || x.$$typeof === l || x.$$typeof === m || x.$$typeof === f || x.$$typeof === C || x.$$typeof === T || x.$$typeof === g);
  }, Pe.typeOf = v, Pe;
}
var Ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs;
function Vp() {
  return Zs || (Zs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function v(L) {
      return typeof L == "string" || typeof L == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      L === r || L === u || L === s || L === o || L === p || L === h || typeof L == "object" && L !== null && (L.$$typeof === y || L.$$typeof === b || L.$$typeof === a || L.$$typeof === l || L.$$typeof === m || L.$$typeof === f || L.$$typeof === C || L.$$typeof === T || L.$$typeof === g);
    }
    function w(L) {
      if (typeof L == "object" && L !== null) {
        var fe = L.$$typeof;
        switch (fe) {
          case t:
            var I = L.type;
            switch (I) {
              case c:
              case u:
              case r:
              case s:
              case o:
              case p:
                return I;
              default:
                var ae = I && I.$$typeof;
                switch (ae) {
                  case l:
                  case m:
                  case y:
                  case b:
                  case a:
                    return ae;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var x = c, O = u, E = l, M = a, A = t, d = m, k = r, _ = y, F = b, U = n, N = s, W = o, ee = p, J = !1;
    function oe(L) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), B(L) || w(L) === c;
    }
    function B(L) {
      return w(L) === u;
    }
    function K(L) {
      return w(L) === l;
    }
    function re(L) {
      return w(L) === a;
    }
    function Q(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function $(L) {
      return w(L) === m;
    }
    function z(L) {
      return w(L) === r;
    }
    function H(L) {
      return w(L) === y;
    }
    function D(L) {
      return w(L) === b;
    }
    function Y(L) {
      return w(L) === n;
    }
    function Z(L) {
      return w(L) === s;
    }
    function V(L) {
      return w(L) === o;
    }
    function ne(L) {
      return w(L) === p;
    }
    Ie.AsyncMode = x, Ie.ConcurrentMode = O, Ie.ContextConsumer = E, Ie.ContextProvider = M, Ie.Element = A, Ie.ForwardRef = d, Ie.Fragment = k, Ie.Lazy = _, Ie.Memo = F, Ie.Portal = U, Ie.Profiler = N, Ie.StrictMode = W, Ie.Suspense = ee, Ie.isAsyncMode = oe, Ie.isConcurrentMode = B, Ie.isContextConsumer = K, Ie.isContextProvider = re, Ie.isElement = Q, Ie.isForwardRef = $, Ie.isFragment = z, Ie.isLazy = H, Ie.isMemo = D, Ie.isPortal = Y, Ie.isProfiler = Z, Ie.isStrictMode = V, Ie.isSuspense = ne, Ie.isValidElementType = v, Ie.typeOf = w;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? ji.exports = Wp() : ji.exports = Vp();
var as = ji.exports, Yl = as, Up = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Hp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ql = {};
ql[Yl.ForwardRef] = Up;
ql[Yl.Memo] = Hp;
var Yp = !0;
function qp(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Gl = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Yp === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Kl = function(t, n, r) {
  Gl(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Gp(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
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
var Kp = {
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
}, Xp = !1, Zp = /[A-Z]|^ms/g, Qp = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Xl = function(t) {
  return t.charCodeAt(1) === 45;
}, Qs = function(t) {
  return t != null && typeof t != "boolean";
}, pi = /* @__PURE__ */ jl(function(e) {
  return Xl(e) ? e : e.replace(Zp, "-$&").toLowerCase();
}), Js = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Qp, function(r, o, s) {
          return Gt = {
            name: o,
            styles: s,
            next: Gt
          }, o;
        });
  }
  return Kp[t] !== 1 && !Xl(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Jp = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Rr(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return Gt = {
          name: o.name,
          styles: o.styles,
          next: Gt
        }, o.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Gt = {
              name: a.name,
              styles: a.styles,
              next: Gt
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return em(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Gt, u = n(e);
        return Gt = c, Rr(e, t, u);
      }
      break;
    }
  }
  var m = n;
  if (t == null)
    return m;
  var p = t[m];
  return p !== void 0 ? p : m;
}
function em(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Rr(e, t, n[o]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : Qs(l) && (r += pi(s) + ":" + Js(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Xp)
          throw new Error(Jp);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Qs(a[c]) && (r += pi(s) + ":" + Js(s, a[c]) + ";");
        else {
          var u = Rr(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += pi(s) + ":" + u + ";";
              break;
            }
            default:
              r += s + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var ea = /label:\s*([^\s;{]+)\s*(;|$)/g, Gt;
function Bo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Gt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, o += Rr(n, t, s);
  else {
    var a = s;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Rr(n, t, e[l]), r) {
      var c = s;
      o += c[l];
    }
  ea.lastIndex = 0;
  for (var u = "", m; (m = ea.exec(o)) !== null; )
    u += "-" + m[1];
  var p = Gp(o) + u;
  return {
    name: p,
    styles: o,
    next: Gt
  };
}
var tm = function(t) {
  return t();
}, Zl = R.useInsertionEffect ? R.useInsertionEffect : !1, nm = Zl || tm, ta = Zl || R.useLayoutEffect, Ql = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ zp({
    key: "css"
  }) : null
);
Ql.Provider;
var Jl = function(t) {
  return /* @__PURE__ */ $o(function(n, r) {
    var o = fn(Ql);
    return t(n, o, r);
  });
}, ls = /* @__PURE__ */ R.createContext({}), rm = /* @__PURE__ */ Jl(function(e, t) {
  var n = e.styles, r = Bo([n], void 0, R.useContext(ls)), o = R.useRef();
  return ta(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), o.current = [a, l], function() {
      a.flush();
    };
  }, [t]), ta(function() {
    var s = o.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && Kl(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function om() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Bo(t);
}
var cs = function() {
  var t = om.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, im = dp, sm = function(t) {
  return t !== "theme";
}, na = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? im : sm;
}, ra = function(t, n, r) {
  var o;
  if (n) {
    var s = n.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, am = !1, lm = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Gl(n, r, o), nm(function() {
    return Kl(n, r, o);
  }), null;
}, cm = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var l = ra(t, n, r), c = l || na(o), u = !c("as");
  return function() {
    var m = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), m[0] == null || m[0].raw === void 0)
      p.push.apply(p, m);
    else {
      p.push(m[0][0]);
      for (var h = m.length, b = 1; b < h; b++)
        p.push(m[b], m[0][b]);
    }
    var y = Jl(function(g, f, C) {
      var T = u && g.as || o, v = "", w = [], x = g;
      if (g.theme == null) {
        x = {};
        for (var O in g)
          x[O] = g[O];
        x.theme = R.useContext(ls);
      }
      typeof g.className == "string" ? v = qp(f.registered, w, g.className) : g.className != null && (v = g.className + " ");
      var E = Bo(p.concat(w), f.registered, x);
      v += f.key + "-" + E.name, a !== void 0 && (v += " " + a);
      var M = u && l === void 0 ? na(T) : c, A = {};
      for (var d in g)
        u && d === "as" || M(d) && (A[d] = g[d]);
      return A.className = v, C && (A.ref = C), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(lm, {
        cache: f,
        serialized: E,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ R.createElement(T, A));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = p, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && am ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(g, f) {
      return e(g, xo({}, n, f, {
        shouldForwardProp: ra(y, f, !0)
      })).apply(void 0, p);
    }, y;
  };
}, um = [
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
], pn = cm.bind();
um.forEach(function(e) {
  pn[e] = pn(e);
});
const dm = pn.div`
  width: 100%;
  position: relative;
  height: 100%;

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${it.primary500};
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background-color: ${it.gray100};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color ${it.primary500};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${it.gray200};
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
var Rn = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e))(Rn || {});
function fm(e, t, n) {
  return (r, o) => {
    const s = r[e], a = o[e];
    try {
      if (n)
        return n(s, a);
      if (t === Rn.NUMBER) {
        const l = Number(s), c = Number(a);
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid number for sorting:", { a: s, b: a }), isNaN(l) ? 1 : -1) : l - c;
      } else if (t === Rn.DATE) {
        const l = new Date(s).getTime(), c = new Date(a).getTime();
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid date for sorting:", { a: s, b: a }), isNaN(l) ? 1 : -1) : l - c;
      }
      return t === Rn.STRING || !t ? String(s).localeCompare(String(a)) : 0;
    } catch (l) {
      return console.error("Error in sorting:", l), 0;
    }
  };
}
const pm = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, o] = pt(n ?? []);
  return {
    sortedRows: Ze(() => r.length === 0 ? t : [...t].sort((a, l) => {
      for (const c of r) {
        const u = e.find((h) => h.key === c.columnKey), p = fm(
          c.columnKey,
          u == null ? void 0 : u.type,
          u == null ? void 0 : u.sortComparator
        )(a, l);
        if (p !== 0)
          return c.direction === "ASC" ? p : -p;
      }
      return 0;
    }), [t, r]),
    sortColumns: r,
    setSortedColumns: o
  };
};
function Qt(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
var Li = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mi, oa;
function mm() {
  if (oa) return mi;
  oa = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        u[m] = m;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return mi = o() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          n.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, mi;
}
var hi, ia;
function us() {
  if (ia) return hi;
  ia = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return hi = e, hi;
}
var gi, sa;
function ec() {
  return sa || (sa = 1, gi = Function.call.bind(Object.prototype.hasOwnProperty)), gi;
}
var bi, aa;
function hm() {
  if (aa) return bi;
  aa = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = us(), n = {}, r = ec();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in s)
        if (r(s, m)) {
          var p;
          try {
            if (typeof s[m] != "function") {
              var h = Error(
                (c || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = s[m](a, m, c, l, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, bi = o, bi;
}
var yi, la;
function gm() {
  if (la) return yi;
  la = 1;
  var e = as, t = mm(), n = us(), r = ec(), o = hm(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return yi = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(B) {
      var K = B && (u && B[u] || B[m]);
      if (typeof K == "function")
        return K;
    }
    var h = "<<anonymous>>", b = {
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
      element: w(),
      elementType: x(),
      instanceOf: O,
      node: d(),
      objectOf: M,
      oneOf: E,
      oneOfType: A,
      shape: _,
      exact: F
    };
    function y(B, K) {
      return B === K ? B !== 0 || 1 / B === 1 / K : B !== B && K !== K;
    }
    function g(B, K) {
      this.message = B, this.data = K && typeof K == "object" ? K : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function f(B) {
      if (process.env.NODE_ENV !== "production")
        var K = {}, re = 0;
      function Q(z, H, D, Y, Z, V, ne) {
        if (Y = Y || h, V = V || D, ne !== n) {
          if (c) {
            var L = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw L.name = "Invariant Violation", L;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = Y + ":" + D;
            !K[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), K[fe] = !0, re++);
          }
        }
        return H[D] == null ? z ? H[D] === null ? new g("The " + Z + " `" + V + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new g("The " + Z + " `" + V + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : B(H, D, Y, Z, V);
      }
      var $ = Q.bind(null, !1);
      return $.isRequired = Q.bind(null, !0), $;
    }
    function C(B) {
      function K(re, Q, $, z, H, D) {
        var Y = re[Q], Z = W(Y);
        if (Z !== B) {
          var V = ee(Y);
          return new g(
            "Invalid " + z + " `" + H + "` of type " + ("`" + V + "` supplied to `" + $ + "`, expected ") + ("`" + B + "`."),
            { expectedType: B }
          );
        }
        return null;
      }
      return f(K);
    }
    function T() {
      return f(a);
    }
    function v(B) {
      function K(re, Q, $, z, H) {
        if (typeof B != "function")
          return new g("Property `" + H + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var D = re[Q];
        if (!Array.isArray(D)) {
          var Y = W(D);
          return new g("Invalid " + z + " `" + H + "` of type " + ("`" + Y + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var Z = 0; Z < D.length; Z++) {
          var V = B(D, Z, $, z, H + "[" + Z + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return f(K);
    }
    function w() {
      function B(K, re, Q, $, z) {
        var H = K[re];
        if (!l(H)) {
          var D = W(H);
          return new g("Invalid " + $ + " `" + z + "` of type " + ("`" + D + "` supplied to `" + Q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(B);
    }
    function x() {
      function B(K, re, Q, $, z) {
        var H = K[re];
        if (!e.isValidElementType(H)) {
          var D = W(H);
          return new g("Invalid " + $ + " `" + z + "` of type " + ("`" + D + "` supplied to `" + Q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(B);
    }
    function O(B) {
      function K(re, Q, $, z, H) {
        if (!(re[Q] instanceof B)) {
          var D = B.name || h, Y = oe(re[Q]);
          return new g("Invalid " + z + " `" + H + "` of type " + ("`" + Y + "` supplied to `" + $ + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return f(K);
    }
    function E(B) {
      if (!Array.isArray(B))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function K(re, Q, $, z, H) {
        for (var D = re[Q], Y = 0; Y < B.length; Y++)
          if (y(D, B[Y]))
            return null;
        var Z = JSON.stringify(B, function(ne, L) {
          var fe = ee(L);
          return fe === "symbol" ? String(L) : L;
        });
        return new g("Invalid " + z + " `" + H + "` of value `" + String(D) + "` " + ("supplied to `" + $ + "`, expected one of " + Z + "."));
      }
      return f(K);
    }
    function M(B) {
      function K(re, Q, $, z, H) {
        if (typeof B != "function")
          return new g("Property `" + H + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var D = re[Q], Y = W(D);
        if (Y !== "object")
          return new g("Invalid " + z + " `" + H + "` of type " + ("`" + Y + "` supplied to `" + $ + "`, expected an object."));
        for (var Z in D)
          if (r(D, Z)) {
            var V = B(D, Z, $, z, H + "." + Z, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return f(K);
    }
    function A(B) {
      if (!Array.isArray(B))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var K = 0; K < B.length; K++) {
        var re = B[K];
        if (typeof re != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(re) + " at index " + K + "."
          ), a;
      }
      function Q($, z, H, D, Y) {
        for (var Z = [], V = 0; V < B.length; V++) {
          var ne = B[V], L = ne($, z, H, D, Y, n);
          if (L == null)
            return null;
          L.data && r(L.data, "expectedType") && Z.push(L.data.expectedType);
        }
        var fe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new g("Invalid " + D + " `" + Y + "` supplied to " + ("`" + H + "`" + fe + "."));
      }
      return f(Q);
    }
    function d() {
      function B(K, re, Q, $, z) {
        return U(K[re]) ? null : new g("Invalid " + $ + " `" + z + "` supplied to " + ("`" + Q + "`, expected a ReactNode."));
      }
      return f(B);
    }
    function k(B, K, re, Q, $) {
      return new g(
        (B || "React class") + ": " + K + " type `" + re + "." + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function _(B) {
      function K(re, Q, $, z, H) {
        var D = re[Q], Y = W(D);
        if (Y !== "object")
          return new g("Invalid " + z + " `" + H + "` of type `" + Y + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var Z in B) {
          var V = B[Z];
          if (typeof V != "function")
            return k($, z, H, Z, ee(V));
          var ne = V(D, Z, $, z, H + "." + Z, n);
          if (ne)
            return ne;
        }
        return null;
      }
      return f(K);
    }
    function F(B) {
      function K(re, Q, $, z, H) {
        var D = re[Q], Y = W(D);
        if (Y !== "object")
          return new g("Invalid " + z + " `" + H + "` of type `" + Y + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var Z = t({}, re[Q], B);
        for (var V in Z) {
          var ne = B[V];
          if (r(B, V) && typeof ne != "function")
            return k($, z, H, V, ee(ne));
          if (!ne)
            return new g(
              "Invalid " + z + " `" + H + "` key `" + V + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(re[Q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(B), null, "  ")
            );
          var L = ne(D, V, $, z, H + "." + V, n);
          if (L)
            return L;
        }
        return null;
      }
      return f(K);
    }
    function U(B) {
      switch (typeof B) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !B;
        case "object":
          if (Array.isArray(B))
            return B.every(U);
          if (B === null || l(B))
            return !0;
          var K = p(B);
          if (K) {
            var re = K.call(B), Q;
            if (K !== B.entries) {
              for (; !(Q = re.next()).done; )
                if (!U(Q.value))
                  return !1;
            } else
              for (; !(Q = re.next()).done; ) {
                var $ = Q.value;
                if ($ && !U($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(B, K) {
      return B === "symbol" ? !0 : K ? K["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && K instanceof Symbol : !1;
    }
    function W(B) {
      var K = typeof B;
      return Array.isArray(B) ? "array" : B instanceof RegExp ? "object" : N(K, B) ? "symbol" : K;
    }
    function ee(B) {
      if (typeof B > "u" || B === null)
        return "" + B;
      var K = W(B);
      if (K === "object") {
        if (B instanceof Date)
          return "date";
        if (B instanceof RegExp)
          return "regexp";
      }
      return K;
    }
    function J(B) {
      var K = ee(B);
      switch (K) {
        case "array":
        case "object":
          return "an " + K;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + K;
        default:
          return K;
      }
    }
    function oe(B) {
      return !B.constructor || !B.constructor.name ? h : B.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, yi;
}
var vi, ca;
function bm() {
  if (ca) return vi;
  ca = 1;
  var e = us();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, vi = function() {
    function r(a, l, c, u, m, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, vi;
}
if (process.env.NODE_ENV !== "production") {
  var ym = as, vm = !0;
  Li.exports = gm()(ym.isElement, vm);
} else
  Li.exports = bm()();
var xm = Li.exports;
const i = /* @__PURE__ */ rd(xm);
function wm(e) {
  return e == null || Object.keys(e).length === 0;
}
function tc(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(wm(o) ? n : o) : t;
  return /* @__PURE__ */ P.jsx(rm, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (tc.propTypes = {
  defaultTheme: i.object,
  styles: i.oneOfType([i.array, i.string, i.object, i.func])
});
/**
 * @mui/styled-engine v6.1.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function nc(e, t) {
  const n = pn(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Cm(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const ua = [];
function da(e) {
  return ua[0] = e, Bo(ua);
}
function Xt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function rc(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || !Xt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = rc(e[n]);
  }), t;
}
function mt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Xt(e) && Xt(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ R.isValidElement(t[o]) ? r[o] = t[o] : Xt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Xt(e[o]) ? r[o] = mt(e[o], t[o], n) : n.clone ? r[o] = Xt(t[o]) ? rc(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Sm = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Em(e) {
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
    ...o
  } = e, s = Sm(t), a = Object.keys(s);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, b) {
    const y = a.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : b) - r / 100}${n})`;
  }
  function m(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : l(h);
  }
  function p(h) {
    const b = a.indexOf(h);
    return b === 0 ? l(a[1]) : b === a.length - 1 ? c(a[b]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: m,
    not: p,
    unit: n,
    ...o
  };
}
function Tm(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var a, l;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((a = r.match(s)) == null ? void 0 : a[1]) || 0) - +(((l = o.match(s)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const s = t[o];
    return delete r[o], r[o] = s, r;
  }, {
    ...t
  }) : t;
}
function Rm(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Om(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Qt(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(s);
}
function km(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function n(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, o = (s) => (n(r, s), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const Pm = {
  borderRadius: 4
}, bn = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.string, i.object, i.array]) : {};
function xr(e, t) {
  return t ? mt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const zo = {
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
}, fa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${zo[e]}px)`
}, Im = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : zo[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function sn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || fa;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || fa;
    return Object.keys(t).reduce((a, l) => {
      if (Rm(s.keys, l)) {
        const c = Om(r.containerQueries ? r : Im, l);
        c && (a[c] = n(t[l], l));
      } else if (Object.keys(s.values || zo).includes(l)) {
        const c = s.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Mm(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const s = e.up(o);
    return r[s] = {}, r;
  }, {})) || {};
}
function Nm(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Le(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Qt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Wo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Co(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Wo(e, n) || r, t && (o = t(o, r, e)), o;
}
function Je(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Wo(c, r) || {};
    return sn(a, l, (p) => {
      let h = Co(u, o, p);
      return p === h && typeof p == "string" && (h = Co(u, o, `${t}${p === "default" ? "" : Le(p)}`, p)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: bn
  } : {}, s.filterProps = [t], s;
}
function $m(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Dm = {
  m: "margin",
  p: "padding"
}, Am = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, pa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Fm = $m((e) => {
  if (e.length > 2)
    if (pa[e])
      e = pa[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Dm[t], o = Am[n] || "";
  return Array.isArray(o) ? o.map((s) => r + s) : [r + o];
}), Vo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Uo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], _m = [...Vo, ...Uo];
function Lr(e, t, n, r) {
  const o = Wo(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), typeof o == "string" ? `calc(${s} * ${o})` : o * s) : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[a];
    return s >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ds(e) {
  return Lr(e, "spacing", 8, "spacing");
}
function Br(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function jm(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Br(t, n), r), {});
}
function Lm(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = Fm(n), s = jm(o, r), a = e[n];
  return sn(e, a, s);
}
function oc(e, t) {
  const n = ds(e.theme);
  return Object.keys(e).map((r) => Lm(e, t, r, n)).reduce(xr, {});
}
function Ke(e) {
  return oc(e, Vo);
}
Ke.propTypes = process.env.NODE_ENV !== "production" ? Vo.reduce((e, t) => (e[t] = bn, e), {}) : {};
Ke.filterProps = Vo;
function Xe(e) {
  return oc(e, Uo);
}
Xe.propTypes = process.env.NODE_ENV !== "production" ? Uo.reduce((e, t) => (e[t] = bn, e), {}) : {};
Xe.filterProps = Uo;
process.env.NODE_ENV !== "production" && _m.reduce((e, t) => (e[t] = bn, e), {});
function ic(e = 8, t = ds({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function Ho(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((s) => {
    r[s] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, s) => t[s] ? xr(o, t[s](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function $t(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function At(e, t) {
  return Je({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Bm = At("border", $t), zm = At("borderTop", $t), Wm = At("borderRight", $t), Vm = At("borderBottom", $t), Um = At("borderLeft", $t), Hm = At("borderColor"), Ym = At("borderTopColor"), qm = At("borderRightColor"), Gm = At("borderBottomColor"), Km = At("borderLeftColor"), Xm = At("outline", $t), Zm = At("outlineColor"), Yo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Lr(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Br(t, r)
    });
    return sn(e, e.borderRadius, n);
  }
  return null;
};
Yo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: bn
} : {};
Yo.filterProps = ["borderRadius"];
Ho(Bm, zm, Wm, Vm, Um, Hm, Ym, qm, Gm, Km, Yo, Xm, Zm);
const qo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Lr(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Br(t, r)
    });
    return sn(e, e.gap, n);
  }
  return null;
};
qo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: bn
} : {};
qo.filterProps = ["gap"];
const Go = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Lr(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Br(t, r)
    });
    return sn(e, e.columnGap, n);
  }
  return null;
};
Go.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: bn
} : {};
Go.filterProps = ["columnGap"];
const Ko = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Lr(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Br(t, r)
    });
    return sn(e, e.rowGap, n);
  }
  return null;
};
Ko.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: bn
} : {};
Ko.filterProps = ["rowGap"];
const Qm = Je({
  prop: "gridColumn"
}), Jm = Je({
  prop: "gridRow"
}), eh = Je({
  prop: "gridAutoFlow"
}), th = Je({
  prop: "gridAutoColumns"
}), nh = Je({
  prop: "gridAutoRows"
}), rh = Je({
  prop: "gridTemplateColumns"
}), oh = Je({
  prop: "gridTemplateRows"
}), ih = Je({
  prop: "gridTemplateAreas"
}), sh = Je({
  prop: "gridArea"
});
Ho(qo, Go, Ko, Qm, Jm, eh, th, nh, rh, oh, ih, sh);
function Hn(e, t) {
  return t === "grey" ? t : e;
}
const ah = Je({
  prop: "color",
  themeKey: "palette",
  transform: Hn
}), lh = Je({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Hn
}), ch = Je({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Hn
});
Ho(ah, lh, ch);
function It(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const uh = Je({
  prop: "width",
  transform: It
}), fs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, s, a, l, c;
      const r = ((a = (s = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[n]) || zo[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: It(n)
      };
    };
    return sn(e, e.maxWidth, t);
  }
  return null;
};
fs.filterProps = ["maxWidth"];
const dh = Je({
  prop: "minWidth",
  transform: It
}), fh = Je({
  prop: "height",
  transform: It
}), ph = Je({
  prop: "maxHeight",
  transform: It
}), mh = Je({
  prop: "minHeight",
  transform: It
});
Je({
  prop: "size",
  cssProperty: "width",
  transform: It
});
Je({
  prop: "size",
  cssProperty: "height",
  transform: It
});
const hh = Je({
  prop: "boxSizing"
});
Ho(uh, fs, dh, fh, ph, mh, hh);
const zr = {
  // borders
  border: {
    themeKey: "borders",
    transform: $t
  },
  borderTop: {
    themeKey: "borders",
    transform: $t
  },
  borderRight: {
    themeKey: "borders",
    transform: $t
  },
  borderBottom: {
    themeKey: "borders",
    transform: $t
  },
  borderLeft: {
    themeKey: "borders",
    transform: $t
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
    transform: $t
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Yo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Hn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Hn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Hn
  },
  // spacing
  p: {
    style: Xe
  },
  pt: {
    style: Xe
  },
  pr: {
    style: Xe
  },
  pb: {
    style: Xe
  },
  pl: {
    style: Xe
  },
  px: {
    style: Xe
  },
  py: {
    style: Xe
  },
  padding: {
    style: Xe
  },
  paddingTop: {
    style: Xe
  },
  paddingRight: {
    style: Xe
  },
  paddingBottom: {
    style: Xe
  },
  paddingLeft: {
    style: Xe
  },
  paddingX: {
    style: Xe
  },
  paddingY: {
    style: Xe
  },
  paddingInline: {
    style: Xe
  },
  paddingInlineStart: {
    style: Xe
  },
  paddingInlineEnd: {
    style: Xe
  },
  paddingBlock: {
    style: Xe
  },
  paddingBlockStart: {
    style: Xe
  },
  paddingBlockEnd: {
    style: Xe
  },
  m: {
    style: Ke
  },
  mt: {
    style: Ke
  },
  mr: {
    style: Ke
  },
  mb: {
    style: Ke
  },
  ml: {
    style: Ke
  },
  mx: {
    style: Ke
  },
  my: {
    style: Ke
  },
  margin: {
    style: Ke
  },
  marginTop: {
    style: Ke
  },
  marginRight: {
    style: Ke
  },
  marginBottom: {
    style: Ke
  },
  marginLeft: {
    style: Ke
  },
  marginX: {
    style: Ke
  },
  marginY: {
    style: Ke
  },
  marginInline: {
    style: Ke
  },
  marginInlineStart: {
    style: Ke
  },
  marginInlineEnd: {
    style: Ke
  },
  marginBlock: {
    style: Ke
  },
  marginBlockStart: {
    style: Ke
  },
  marginBlockEnd: {
    style: Ke
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
    style: qo
  },
  rowGap: {
    style: Ko
  },
  columnGap: {
    style: Go
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
    transform: It
  },
  maxWidth: {
    style: fs
  },
  minWidth: {
    transform: It
  },
  height: {
    transform: It
  },
  maxHeight: {
    transform: It
  },
  minHeight: {
    transform: It
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
function gh(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function bh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yh() {
  function e(n, r, o, s) {
    const a = {
      [n]: r,
      theme: o
    }, l = s[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: m,
      style: p
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Wo(o, u) || {};
    return p ? p(a) : sn(a, r, (y) => {
      let g = Co(h, m, y);
      return y === g && typeof y == "string" && (g = Co(h, m, `${n}${y === "default" ? "" : Le(y)}`, y)), c === !1 ? g : {
        [c]: g
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: o = {}
    } = n || {};
    if (!r)
      return null;
    const s = o.unstable_sxConfig ?? zr;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(o);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Mm(o.breakpoints), m = Object.keys(u);
      let p = u;
      return Object.keys(c).forEach((h) => {
        const b = bh(c[h], o);
        if (b != null)
          if (typeof b == "object")
            if (s[h])
              p = xr(p, e(h, b, o, s));
            else {
              const y = sn({
                theme: o
              }, b, (g) => ({
                [h]: g
              }));
              gh(y, b) ? p[h] = t({
                sx: b,
                theme: o
              }) : p = xr(p, y);
            }
          else
            p = xr(p, e(h, b, o, s));
      }), Tm(o, Nm(m, p));
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return t;
}
const On = yh();
On.filterProps = ["sx"];
function vh(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function ps(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: s = {},
    ...a
  } = e, l = Em(n), c = ic(o);
  let u = mt({
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
      ...Pm,
      ...s
    }
  }, a);
  return u = km(u), u.applyStyles = vh, u = t.reduce((m, p) => mt(m, p), u), u.unstable_sxConfig = {
    ...zr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return On({
      sx: p,
      theme: this
    });
  }, u;
}
function xh(e) {
  return Object.keys(e).length === 0;
}
function wh(e = null) {
  const t = R.useContext(ls);
  return !t || xh(t) ? e : t;
}
const Ch = ps();
function ms(e = Ch) {
  return wh(e);
}
function sc({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ms(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ P.jsx(tc, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (sc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: i.object,
  /**
   * @ignore
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool]),
  /**
   * @ignore
   */
  themeId: i.string
});
const Sh = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? zr;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Eh(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = Sh(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Xt(l) ? {
      ...r,
      ...l
    } : r;
  } : s = {
    ...r,
    ...t
  }, {
    ...o,
    sx: s
  };
}
const ma = (e) => e, Th = () => {
  let e = ma;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ma;
    }
  };
}, ac = Th();
function Rh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, s = nc("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(On);
  return /* @__PURE__ */ R.forwardRef(function(c, u) {
    const m = ms(n), {
      className: p,
      component: h = "div",
      ...b
    } = Eh(c);
    return /* @__PURE__ */ P.jsx(s, {
      as: h,
      ref: u,
      className: he(p, o ? o(r) : r),
      theme: t && m[t] || m,
      ...b
    });
  });
}
const Oh = {
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
function Ue(e, t, n = "Mui") {
  const r = Oh[t];
  return r ? `${n}-${r}` : `${ac.generate(e)}-${t}`;
}
function He(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ue(e, o, n);
  }), r;
}
var Bi = { exports: {} }, Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ha;
function kh() {
  if (ha) return Me;
  ha = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function g(f) {
    if (typeof f == "object" && f !== null) {
      var C = f.$$typeof;
      switch (C) {
        case e:
          switch (f = f.type, f) {
            case n:
            case o:
            case r:
            case u:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case a:
                case c:
                case h:
                case p:
                case s:
                  return f;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return Me.ContextConsumer = a, Me.ContextProvider = s, Me.Element = e, Me.ForwardRef = c, Me.Fragment = n, Me.Lazy = h, Me.Memo = p, Me.Portal = t, Me.Profiler = o, Me.StrictMode = r, Me.Suspense = u, Me.SuspenseList = m, Me.isAsyncMode = function() {
    return !1;
  }, Me.isConcurrentMode = function() {
    return !1;
  }, Me.isContextConsumer = function(f) {
    return g(f) === a;
  }, Me.isContextProvider = function(f) {
    return g(f) === s;
  }, Me.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Me.isForwardRef = function(f) {
    return g(f) === c;
  }, Me.isFragment = function(f) {
    return g(f) === n;
  }, Me.isLazy = function(f) {
    return g(f) === h;
  }, Me.isMemo = function(f) {
    return g(f) === p;
  }, Me.isPortal = function(f) {
    return g(f) === t;
  }, Me.isProfiler = function(f) {
    return g(f) === o;
  }, Me.isStrictMode = function(f) {
    return g(f) === r;
  }, Me.isSuspense = function(f) {
    return g(f) === u;
  }, Me.isSuspenseList = function(f) {
    return g(f) === m;
  }, Me.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === o || f === r || f === u || f === m || f === b || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === s || f.$$typeof === a || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
  }, Me.typeOf = g, Me;
}
var Ne = {};
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
function Ph() {
  return ga || (ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = !1, g = !1, f = !1, C = !1, T = !1, v;
    v = Symbol.for("react.module.reference");
    function w(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === o || T || I === r || I === u || I === m || C || I === b || y || g || f || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === p || I.$$typeof === s || I.$$typeof === a || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === v || I.getModuleId !== void 0));
    }
    function x(I) {
      if (typeof I == "object" && I !== null) {
        var ae = I.$$typeof;
        switch (ae) {
          case e:
            var ge = I.type;
            switch (ge) {
              case n:
              case o:
              case r:
              case u:
              case m:
                return ge;
              default:
                var Re = ge && ge.$$typeof;
                switch (Re) {
                  case l:
                  case a:
                  case c:
                  case h:
                  case p:
                  case s:
                    return Re;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var O = a, E = s, M = e, A = c, d = n, k = h, _ = p, F = t, U = o, N = r, W = u, ee = m, J = !1, oe = !1;
    function B(I) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(I) {
      return oe || (oe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(I) {
      return x(I) === a;
    }
    function Q(I) {
      return x(I) === s;
    }
    function $(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function z(I) {
      return x(I) === c;
    }
    function H(I) {
      return x(I) === n;
    }
    function D(I) {
      return x(I) === h;
    }
    function Y(I) {
      return x(I) === p;
    }
    function Z(I) {
      return x(I) === t;
    }
    function V(I) {
      return x(I) === o;
    }
    function ne(I) {
      return x(I) === r;
    }
    function L(I) {
      return x(I) === u;
    }
    function fe(I) {
      return x(I) === m;
    }
    Ne.ContextConsumer = O, Ne.ContextProvider = E, Ne.Element = M, Ne.ForwardRef = A, Ne.Fragment = d, Ne.Lazy = k, Ne.Memo = _, Ne.Portal = F, Ne.Profiler = U, Ne.StrictMode = N, Ne.Suspense = W, Ne.SuspenseList = ee, Ne.isAsyncMode = B, Ne.isConcurrentMode = K, Ne.isContextConsumer = re, Ne.isContextProvider = Q, Ne.isElement = $, Ne.isForwardRef = z, Ne.isFragment = H, Ne.isLazy = D, Ne.isMemo = Y, Ne.isPortal = Z, Ne.isProfiler = V, Ne.isStrictMode = ne, Ne.isSuspense = L, Ne.isSuspenseList = fe, Ne.isValidElementType = w, Ne.typeOf = x;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? Bi.exports = kh() : Bi.exports = Ph();
var ba = Bi.exports;
function lc(e, t = "") {
  return e.displayName || e.name || t;
}
function ya(e, t, n) {
  const r = lc(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Ih(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return lc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ba.ForwardRef:
          return ya(e, e.render, "ForwardRef");
        case ba.Memo:
          return ya(e, e.type, "memo");
        default:
          return;
      }
  }
}
function cc(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: da(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = da(o.style));
  }), r;
}
const Mh = ps();
function xi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Nh(e) {
  return e ? (t, n) => n[e] : null;
}
function $h(e, t, n) {
  e.theme = _h(e.theme) ? n : e.theme[t] || e.theme;
}
function ho(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => ho(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed)
      r = n.style;
    else {
      const {
        variants: o,
        ...s
      } = n;
      r = s;
    }
    return uc(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function uc(e, t, n = []) {
  var o;
  let r;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(r))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && ((o = e.ownerState) == null ? void 0 : o[l]) !== a.props[l])
          continue e;
    typeof a.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(a.style(r))) : n.push(a.style);
  }
  return n;
}
function Dh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Mh,
    rootShouldForwardProp: r = xi,
    slotShouldForwardProp: o = xi
  } = e;
  function s(l) {
    $h(l, t, n);
  }
  return (l, c = {}) => {
    Cm(l, (x) => x.filter((O) => O !== On));
    const {
      name: u,
      slot: m,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = Nh(dc(m)),
      ...y
    } = c, g = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), f = h || !1;
    let C = xi;
    m === "Root" || m === "root" ? C = r : m ? C = o : jh(l) && (C = void 0);
    const T = nc(l, {
      shouldForwardProp: C,
      label: Fh(u, m),
      ...y
    }), v = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x)
        return function(E) {
          return ho(E, x);
        };
      if (Xt(x)) {
        const O = cc(x);
        return O.variants ? function(M) {
          return ho(M, O);
        } : O.style;
      }
      return x;
    }, w = (...x) => {
      const O = [], E = x.map(v), M = [];
      if (O.push(s), u && b && M.push(function(_) {
        var W, ee;
        const U = (ee = (W = _.theme.components) == null ? void 0 : W[u]) == null ? void 0 : ee.styleOverrides;
        if (!U)
          return null;
        const N = {};
        for (const J in U)
          N[J] = ho(_, U[J]);
        return b(_, N);
      }), u && !g && M.push(function(_) {
        var N, W;
        const F = _.theme, U = (W = (N = F == null ? void 0 : F.components) == null ? void 0 : N[u]) == null ? void 0 : W.variants;
        return U ? uc(_, U) : null;
      }), f || M.push(On), Array.isArray(E[0])) {
        const k = E.shift(), _ = new Array(O.length).fill(""), F = new Array(M.length).fill("");
        let U;
        U = [..._, ...k, ...F], U.raw = [..._, ...k.raw, ...F], O.unshift(U);
      }
      const A = [...O, ...E, ...M], d = T(...A);
      return l.muiName && (d.muiName = l.muiName), process.env.NODE_ENV !== "production" && (d.displayName = Ah(u, m, l)), d;
    };
    return T.withConfig && (w.withConfig = T.withConfig), w;
  };
}
function Ah(e, t, n) {
  return e ? `${e}${Le(t || "")}` : `Styled(${Ih(n)})`;
}
function Fh(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${dc(t || "Root")}`), n;
}
function _h(e) {
  for (const t in e)
    return !1;
  return !0;
}
function jh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function dc(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function zi(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r;
      if (o === "components" || o === "slots")
        n[o] = {
          ...e[o],
          ...n[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const s = e[o], a = t[o];
        if (!a)
          n[o] = s || {};
        else if (!s)
          n[o] = a;
        else {
          n[o] = {
            ...a
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const c = l;
              n[o][c] = zi(s[c], a[c]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
const kn = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function Lh(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function hs(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Lh(e, t, n);
}
function Bh(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function mn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return mn(Bh(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Qt(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Qt(10, o));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const zh = (e) => {
  const t = mn(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, hr = (e, t) => {
  try {
    return zh(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Xo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function fc(e) {
  e = mn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, s = r * Math.min(o, 1 - o), a = (u, m = (u + n / 30) % 12) => o - s * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Xo({
    type: l,
    values: c
  });
}
function Wi(e) {
  e = mn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? mn(fc(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function va(e, t) {
  const n = Wi(e), r = Wi(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Or(e, t) {
  return e = mn(e), t = hs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Xo(e);
}
function oo(e, t, n) {
  try {
    return Or(e, t);
  } catch {
    return e;
  }
}
function gs(e, t) {
  if (e = mn(e), t = hs(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Xo(e);
}
function _e(e, t, n) {
  try {
    return gs(e, t);
  } catch {
    return e;
  }
}
function bs(e, t) {
  if (e = mn(e), t = hs(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Xo(e);
}
function je(e, t, n) {
  try {
    return bs(e, t);
  } catch {
    return e;
  }
}
function Wh(e, t = 0.15) {
  return Wi(e) > 0.5 ? gs(e, t) : bs(e, t);
}
function io(e, t, n) {
  try {
    return Wh(e, t);
  } catch {
    return e;
  }
}
function Wr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Vh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pc(e, t, n, r, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Vh(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Vr = Wr(i.element, pc);
Vr.isRequired = Wr(i.element.isRequired, pc);
function Uh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Hh(e, t, n, r, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Uh(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ys = Wr(i.elementType, Hh), Yh = "exact-prop: ​";
function mc(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Yh]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function kr(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Lt = i.oneOfType([i.func, i.object]);
function xa(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function hc(e, t = 166) {
  let n;
  function r(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function wi(e, t) {
  var n, r, o;
  return /* @__PURE__ */ R.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
function jt(e) {
  return e && e.ownerDocument || document;
}
function an(e) {
  return jt(e).defaultView || window;
}
function Vi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let wa = 0;
function qh(e) {
  const [t, n] = R.useState(e), r = e || t;
  return R.useEffect(() => {
    t == null && (wa += 1, n(`mui-${wa}`));
  }, [t]), r;
}
const Gh = {
  ...R
}, Ca = Gh.useId;
function gc(e) {
  if (Ca !== void 0) {
    const t = Ca();
    return e ?? t;
  }
  return qh(e);
}
function Ui({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = R.useRef(e !== void 0), [s, a] = R.useState(t), l = o ? e : s;
  if (process.env.NODE_ENV !== "production") {
    R.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = R.useRef(t);
    R.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = R.useCallback((u) => {
    o || a(u);
  }, []);
  return [l, c];
}
function Vn(e) {
  const t = R.useRef(e);
  return kn(() => {
    t.current = e;
  }), R.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ht(...e) {
  return R.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Vi(n, t);
    });
  }, e);
}
const Sa = {};
function bc(e, t) {
  const n = R.useRef(Sa);
  return n.current === Sa && (n.current = e(t)), n;
}
const Kh = [];
function Xh(e) {
  R.useEffect(e, Kh);
}
class vs {
  constructor() {
    ir(this, "currentId", null);
    ir(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ir(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new vs();
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
function yc() {
  const e = bc(vs.create).current;
  return Xh(e.disposeEffect), e;
}
function Ea(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function vc(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Zh(e) {
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
function xc(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const s = Zh(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function wc(e, t, ...n) {
  return e[t] === void 0 ? null : xc(e, t, ...n);
}
function Hi() {
  return null;
}
wc.isRequired = xc;
Hi.isRequired = Hi;
const Cc = process.env.NODE_ENV === "production" ? Hi : wc;
function et(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const s = e[o];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (a += " " + n[u]));
    }
    r[o] = a;
  }
  return r;
}
function Qh(e) {
  return typeof e == "string";
}
function Sc(e, t, n) {
  return e === void 0 || Qh(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Ec(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Ta(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Tc(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const b = he(n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, g = {
      ...n,
      ...o,
      ...r
    };
    return b.length > 0 && (g.className = b), Object.keys(y).length > 0 && (g.style = y), {
      props: g,
      internalRef: void 0
    };
  }
  const a = Ec({
    ...o,
    ...r
  }), l = Ta(r), c = Ta(o), u = t(a), m = he(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return m.length > 0 && (h.className = m), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: u.ref
  };
}
function Rc(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ra(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, a = o ? {} : Rc(n, r), {
    props: l,
    internalRef: c
  } = Tc({
    ...s,
    externalSlotProps: a
  }), u = ht(c, a == null ? void 0 : a.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Sc(t, {
    ...l,
    ref: u
  }, r);
}
function Ur(e) {
  var t;
  return parseInt(R.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Jh = /* @__PURE__ */ R.createContext();
process.env.NODE_ENV !== "production" && (i.node, i.bool);
const eg = () => R.useContext(Jh) ?? !1, tg = /* @__PURE__ */ R.createContext(void 0);
process.env.NODE_ENV !== "production" && (i.node, i.object);
function ng(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? zi(o.defaultProps, r) : !o.styleOverrides && !o.variants ? zi(o, r) : r;
}
function rg({
  props: e,
  name: t
}) {
  const n = R.useContext(tg);
  return ng({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Oa = {
  theme: void 0
};
function og(e) {
  let t, n;
  return function(o) {
    let s = t;
    return (s === void 0 || o.theme !== n) && (Oa.theme = o.theme, s = cc(e(Oa)), t = s, n = o.theme), s;
  };
}
function ig(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const ka = (e, t, n, r = []) => {
  let o = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  });
}, sg = (e, t, n) => {
  function r(o, s = [], a = []) {
    Object.entries(o).forEach(([l, c]) => {
      (!n || n && !n([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  r(e);
}, ag = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Ci(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, s = {}, a = {};
  return sg(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const m = `--${n ? `${n}-` : ""}${l.join("-")}`, p = ag(l, c);
        Object.assign(o, {
          [m]: p
        }), ka(s, l, `var(${m})`, u), ka(a, l, `var(${m}, ${p})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: a
  };
}
function lg(e, t = {}) {
  const {
    getSelector: n = f,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: u,
    css: m,
    varsWithDefaults: p
  } = Ci(c, t);
  let h = p;
  const b = {}, {
    [l]: y,
    ...g
  } = s;
  if (Object.entries(g || {}).forEach(([v, w]) => {
    const {
      vars: x,
      css: O,
      varsWithDefaults: E
    } = Ci(w, t);
    h = mt(h, E), b[v] = {
      css: O,
      vars: x
    };
  }), y) {
    const {
      css: v,
      vars: w,
      varsWithDefaults: x
    } = Ci(y, t);
    h = mt(h, x), b[l] = {
      css: v,
      vars: w
    };
  }
  function f(v, w) {
    var O, E;
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (x = `[${o}="%s"]`), v) {
      if (x === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (O = s[v]) == null ? void 0 : O.palette) == null ? void 0 : E.mode) || v})`]: {
            ":root": w
          }
        };
      if (x)
        return e.defaultColorScheme === v ? `:root, ${x.replace("%s", String(v))}` : x.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let v = {
        ...u
      };
      return Object.entries(b).forEach(([, {
        vars: w
      }]) => {
        v = mt(v, w);
      }), v;
    },
    generateStyleSheets: () => {
      var M, A;
      const v = [], w = e.defaultColorScheme || "light";
      function x(d, k) {
        Object.keys(k).length && v.push(typeof d == "string" ? {
          [d]: {
            ...k
          }
        } : d);
      }
      x(n(void 0, {
        ...m
      }), m);
      const {
        [w]: O,
        ...E
      } = b;
      if (O) {
        const {
          css: d
        } = O, k = (A = (M = s[w]) == null ? void 0 : M.palette) == null ? void 0 : A.mode, _ = !r && k ? {
          colorScheme: k,
          ...d
        } : {
          ...d
        };
        x(n(w, {
          ..._
        }), _);
      }
      return Object.entries(E).forEach(([d, {
        css: k
      }]) => {
        var U, N;
        const _ = (N = (U = s[d]) == null ? void 0 : U.palette) == null ? void 0 : N.mode, F = !r && _ ? {
          colorScheme: _,
          ...k
        } : {
          ...k
        };
        x(n(d, {
          ...F
        }), F);
      }), v;
    }
  };
}
function cg(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Zo = "$$material", Pr = {
  black: "#000",
  white: "#fff"
}, ug = {
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
}, Dn = {
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
}, An = {
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
}, cr = {
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
}, Fn = {
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
}, _n = {
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
}, jn = {
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
function Oc() {
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
      paper: Pr.white,
      default: Pr.white
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
const dg = Oc();
function kc() {
  return {
    text: {
      primary: Pr.white,
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
      active: Pr.white,
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
const Pa = kc();
function Ia(e, t, n, r) {
  const o = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = bs(e.main, o) : t === "dark" && (e.dark = gs(e.main, s)));
}
function fg(e = "light") {
  return e === "dark" ? {
    main: Fn[200],
    light: Fn[50],
    dark: Fn[400]
  } : {
    main: Fn[700],
    light: Fn[400],
    dark: Fn[800]
  };
}
function pg(e = "light") {
  return e === "dark" ? {
    main: Dn[200],
    light: Dn[50],
    dark: Dn[400]
  } : {
    main: Dn[500],
    light: Dn[300],
    dark: Dn[700]
  };
}
function mg(e = "light") {
  return e === "dark" ? {
    main: An[500],
    light: An[300],
    dark: An[700]
  } : {
    main: An[700],
    light: An[400],
    dark: An[800]
  };
}
function hg(e = "light") {
  return e === "dark" ? {
    main: _n[400],
    light: _n[300],
    dark: _n[700]
  } : {
    main: _n[700],
    light: _n[500],
    dark: _n[900]
  };
}
function gg(e = "light") {
  return e === "dark" ? {
    main: jn[400],
    light: jn[300],
    dark: jn[700]
  } : {
    main: jn[800],
    light: jn[500],
    dark: jn[900]
  };
}
function bg(e = "light") {
  return e === "dark" ? {
    main: cr[400],
    light: cr[300],
    dark: cr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: cr[500],
    dark: cr[900]
  };
}
function xs(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, s = e.primary || fg(t), a = e.secondary || pg(t), l = e.error || mg(t), c = e.info || hg(t), u = e.success || gg(t), m = e.warning || bg(t);
  function p(g) {
    const f = va(g, Pa.text.primary) >= n ? Pa.text.primary : dg.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = va(g, f);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${f} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return f;
  }
  const h = ({
    color: g,
    name: f,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: v = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[C] && (g.main = g[C]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Qt(11, f ? ` (${f})` : "", C));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Qt(12, f ? ` (${f})` : "", JSON.stringify(g.main)));
    return Ia(g, "light", T, r), Ia(g, "dark", v, r), g.contrastText || (g.contrastText = p(g.main)), g;
  };
  let b;
  return t === "light" ? b = Oc() : t === "dark" && (b = kc()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), mt({
    // A collection of common colors.
    common: {
      ...Pr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: a,
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
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: ug,
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
    ...b
  }, o);
}
function yg(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, s] = r;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function vg(e, t) {
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
function xg(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ma = {
  textTransform: "uppercase"
}, Na = '"Roboto", "Helvetica", "Arial", sans-serif';
function wg(e, t) {
  const {
    fontFamily: n = Na,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: m,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = r / 14, b = m || ((f) => `${f / c * h}rem`), y = (f, C, T, v, w) => ({
    fontFamily: n,
    fontWeight: f,
    fontSize: b(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Na ? {
      letterSpacing: `${xg(v / C)}em`
    } : {},
    ...w,
    ...u
  }), g = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, Ma),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Ma),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return mt({
    htmlFontSize: c,
    pxToRem: b,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...g
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Cg = 0.2, Sg = 0.14, Eg = 0.12;
function ze(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Cg})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Sg})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Eg})`].join(",");
}
const Tg = ["none", ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Rg = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Og = {
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
function $a(e) {
  return `${Math.round(e)}ms`;
}
function kg(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Pg(e) {
  const t = {
    ...Rg,
    ...e.easing
  }, n = {
    ...Og,
    ...e.duration
  };
  return {
    getAutoHeightDuration: kg,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const m = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !m(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : $a(a)} ${l} ${typeof c == "string" ? c : $a(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Ig = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Mg(e) {
  return Xt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Pc(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let s = 0; s < o.length; s++) {
      const [a, l] = o[s];
      !Mg(l) || a.startsWith("unstable_") ? delete r[a] : Xt(l) && (r[a] = {
        ...l
      }, n(r[a]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Yi(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Qt(20));
  const m = xs(s), p = ps(e);
  let h = mt(p, {
    mixins: vg(p.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Tg.slice(),
    typography: wg(m, l),
    transitions: Pg(a),
    zIndex: {
      ...Ig
    }
  });
  if (h = mt(h, u), h = t.reduce((b, y) => mt(b, y), h), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (g, f) => {
      let C;
      for (C in g) {
        const T = g[C];
        if (b.includes(C) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Ue("", C);
            console.error([`MUI: The \`${f}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[C] = {};
        }
      }
    };
    Object.keys(h.components).forEach((g) => {
      const f = h.components[g].styleOverrides;
      f && g.startsWith("Mui") && y(f, g);
    });
  }
  return h.unstable_sxConfig = {
    ...zr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return On({
      sx: y,
      theme: this
    });
  }, h.toRuntimeSource = Pc, h;
}
function qi(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ng = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = qi(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Ic(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Mc(e) {
  return e === "dark" ? Ng : [];
}
function $g(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, s = xs(t);
  return {
    palette: s,
    opacity: {
      ...Ic(s.mode),
      ...n
    },
    overlays: r || Mc(s.mode),
    ...o
  };
}
function Dg(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ag = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Fg = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ag(e.cssVarPrefix).forEach((l) => {
        a[l] = n[l], delete n[l];
      }), s === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${r}, ${s.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...a
        }
      };
    }
    if (s && s !== "media")
      return `${r}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return r;
};
function _g(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function j(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function gr(e) {
  return !e || !e.startsWith("hsl") ? e : fc(e);
}
function rn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = hr(gr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function jg(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ht = (e) => {
  try {
    return e();
  } catch {
  }
}, Lg = (e = "mui") => ig(e);
function Si(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = $g({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: s,
    ...a
  } = Yi({
    ...n,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: s,
    opacity: {
      ...Ic(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Mc(o)
  }, a;
}
function Bg(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: a = Dg,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, m = Object.keys(n)[0], p = r || (n.light && m !== "light" ? "light" : m), h = Lg(s), {
    [p]: b,
    light: y,
    dark: g,
    ...f
  } = n, C = {
    ...f
  };
  let T = b;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Qt(21, p));
  const v = Si(C, T, u, p);
  y && !C.light && Si(C, y, void 0, "light"), g && !C.dark && Si(C, g, void 0, "dark");
  let w = {
    defaultColorScheme: p,
    ...v,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: C,
    font: {
      ...yg(v.typography),
      ...v.font
    },
    spacing: jg(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach((A) => {
    const d = w.colorSchemes[A].palette, k = (_) => {
      const F = _.split("-"), U = F[1], N = F[2];
      return h(_, d[U][N]);
    };
    if (d.mode === "light" && (j(d.common, "background", "#fff"), j(d.common, "onBackground", "#000")), d.mode === "dark" && (j(d.common, "background", "#000"), j(d.common, "onBackground", "#fff")), _g(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      j(d.Alert, "errorColor", _e(d.error.light, 0.6)), j(d.Alert, "infoColor", _e(d.info.light, 0.6)), j(d.Alert, "successColor", _e(d.success.light, 0.6)), j(d.Alert, "warningColor", _e(d.warning.light, 0.6)), j(d.Alert, "errorFilledBg", k("palette-error-main")), j(d.Alert, "infoFilledBg", k("palette-info-main")), j(d.Alert, "successFilledBg", k("palette-success-main")), j(d.Alert, "warningFilledBg", k("palette-warning-main")), j(d.Alert, "errorFilledColor", Ht(() => d.getContrastText(d.error.main))), j(d.Alert, "infoFilledColor", Ht(() => d.getContrastText(d.info.main))), j(d.Alert, "successFilledColor", Ht(() => d.getContrastText(d.success.main))), j(d.Alert, "warningFilledColor", Ht(() => d.getContrastText(d.warning.main))), j(d.Alert, "errorStandardBg", je(d.error.light, 0.9)), j(d.Alert, "infoStandardBg", je(d.info.light, 0.9)), j(d.Alert, "successStandardBg", je(d.success.light, 0.9)), j(d.Alert, "warningStandardBg", je(d.warning.light, 0.9)), j(d.Alert, "errorIconColor", k("palette-error-main")), j(d.Alert, "infoIconColor", k("palette-info-main")), j(d.Alert, "successIconColor", k("palette-success-main")), j(d.Alert, "warningIconColor", k("palette-warning-main")), j(d.AppBar, "defaultBg", k("palette-grey-100")), j(d.Avatar, "defaultBg", k("palette-grey-400")), j(d.Button, "inheritContainedBg", k("palette-grey-300")), j(d.Button, "inheritContainedHoverBg", k("palette-grey-A100")), j(d.Chip, "defaultBorder", k("palette-grey-400")), j(d.Chip, "defaultAvatarColor", k("palette-grey-700")), j(d.Chip, "defaultIconColor", k("palette-grey-700")), j(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), j(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), j(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), j(d.LinearProgress, "primaryBg", je(d.primary.main, 0.62)), j(d.LinearProgress, "secondaryBg", je(d.secondary.main, 0.62)), j(d.LinearProgress, "errorBg", je(d.error.main, 0.62)), j(d.LinearProgress, "infoBg", je(d.info.main, 0.62)), j(d.LinearProgress, "successBg", je(d.success.main, 0.62)), j(d.LinearProgress, "warningBg", je(d.warning.main, 0.62)), j(d.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.11)`), j(d.Slider, "primaryTrack", je(d.primary.main, 0.62)), j(d.Slider, "secondaryTrack", je(d.secondary.main, 0.62)), j(d.Slider, "errorTrack", je(d.error.main, 0.62)), j(d.Slider, "infoTrack", je(d.info.main, 0.62)), j(d.Slider, "successTrack", je(d.success.main, 0.62)), j(d.Slider, "warningTrack", je(d.warning.main, 0.62));
      const _ = io(d.background.default, 0.8);
      j(d.SnackbarContent, "bg", _), j(d.SnackbarContent, "color", Ht(() => d.getContrastText(_))), j(d.SpeedDialAction, "fabHoverBg", io(d.background.paper, 0.15)), j(d.StepConnector, "border", k("palette-grey-400")), j(d.StepContent, "border", k("palette-grey-400")), j(d.Switch, "defaultColor", k("palette-common-white")), j(d.Switch, "defaultDisabledColor", k("palette-grey-100")), j(d.Switch, "primaryDisabledColor", je(d.primary.main, 0.62)), j(d.Switch, "secondaryDisabledColor", je(d.secondary.main, 0.62)), j(d.Switch, "errorDisabledColor", je(d.error.main, 0.62)), j(d.Switch, "infoDisabledColor", je(d.info.main, 0.62)), j(d.Switch, "successDisabledColor", je(d.success.main, 0.62)), j(d.Switch, "warningDisabledColor", je(d.warning.main, 0.62)), j(d.TableCell, "border", je(oo(d.divider, 1), 0.88)), j(d.Tooltip, "bg", oo(d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      j(d.Alert, "errorColor", je(d.error.light, 0.6)), j(d.Alert, "infoColor", je(d.info.light, 0.6)), j(d.Alert, "successColor", je(d.success.light, 0.6)), j(d.Alert, "warningColor", je(d.warning.light, 0.6)), j(d.Alert, "errorFilledBg", k("palette-error-dark")), j(d.Alert, "infoFilledBg", k("palette-info-dark")), j(d.Alert, "successFilledBg", k("palette-success-dark")), j(d.Alert, "warningFilledBg", k("palette-warning-dark")), j(d.Alert, "errorFilledColor", Ht(() => d.getContrastText(d.error.dark))), j(d.Alert, "infoFilledColor", Ht(() => d.getContrastText(d.info.dark))), j(d.Alert, "successFilledColor", Ht(() => d.getContrastText(d.success.dark))), j(d.Alert, "warningFilledColor", Ht(() => d.getContrastText(d.warning.dark))), j(d.Alert, "errorStandardBg", _e(d.error.light, 0.9)), j(d.Alert, "infoStandardBg", _e(d.info.light, 0.9)), j(d.Alert, "successStandardBg", _e(d.success.light, 0.9)), j(d.Alert, "warningStandardBg", _e(d.warning.light, 0.9)), j(d.Alert, "errorIconColor", k("palette-error-main")), j(d.Alert, "infoIconColor", k("palette-info-main")), j(d.Alert, "successIconColor", k("palette-success-main")), j(d.Alert, "warningIconColor", k("palette-warning-main")), j(d.AppBar, "defaultBg", k("palette-grey-900")), j(d.AppBar, "darkBg", k("palette-background-paper")), j(d.AppBar, "darkColor", k("palette-text-primary")), j(d.Avatar, "defaultBg", k("palette-grey-600")), j(d.Button, "inheritContainedBg", k("palette-grey-800")), j(d.Button, "inheritContainedHoverBg", k("palette-grey-700")), j(d.Chip, "defaultBorder", k("palette-grey-700")), j(d.Chip, "defaultAvatarColor", k("palette-grey-300")), j(d.Chip, "defaultIconColor", k("palette-grey-300")), j(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), j(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), j(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), j(d.LinearProgress, "primaryBg", _e(d.primary.main, 0.5)), j(d.LinearProgress, "secondaryBg", _e(d.secondary.main, 0.5)), j(d.LinearProgress, "errorBg", _e(d.error.main, 0.5)), j(d.LinearProgress, "infoBg", _e(d.info.main, 0.5)), j(d.LinearProgress, "successBg", _e(d.success.main, 0.5)), j(d.LinearProgress, "warningBg", _e(d.warning.main, 0.5)), j(d.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.13)`), j(d.Slider, "primaryTrack", _e(d.primary.main, 0.5)), j(d.Slider, "secondaryTrack", _e(d.secondary.main, 0.5)), j(d.Slider, "errorTrack", _e(d.error.main, 0.5)), j(d.Slider, "infoTrack", _e(d.info.main, 0.5)), j(d.Slider, "successTrack", _e(d.success.main, 0.5)), j(d.Slider, "warningTrack", _e(d.warning.main, 0.5));
      const _ = io(d.background.default, 0.98);
      j(d.SnackbarContent, "bg", _), j(d.SnackbarContent, "color", Ht(() => d.getContrastText(_))), j(d.SpeedDialAction, "fabHoverBg", io(d.background.paper, 0.15)), j(d.StepConnector, "border", k("palette-grey-600")), j(d.StepContent, "border", k("palette-grey-600")), j(d.Switch, "defaultColor", k("palette-grey-300")), j(d.Switch, "defaultDisabledColor", k("palette-grey-600")), j(d.Switch, "primaryDisabledColor", _e(d.primary.main, 0.55)), j(d.Switch, "secondaryDisabledColor", _e(d.secondary.main, 0.55)), j(d.Switch, "errorDisabledColor", _e(d.error.main, 0.55)), j(d.Switch, "infoDisabledColor", _e(d.info.main, 0.55)), j(d.Switch, "successDisabledColor", _e(d.success.main, 0.55)), j(d.Switch, "warningDisabledColor", _e(d.warning.main, 0.55)), j(d.TableCell, "border", _e(oo(d.divider, 1), 0.68)), j(d.Tooltip, "bg", oo(d.grey[700], 0.92));
    }
    rn(d.background, "default"), rn(d.background, "paper"), rn(d.common, "background"), rn(d.common, "onBackground"), rn(d, "divider"), Object.keys(d).forEach((_) => {
      const F = d[_];
      F && typeof F == "object" && (F.main && j(d[_], "mainChannel", hr(gr(F.main))), F.light && j(d[_], "lightChannel", hr(gr(F.light))), F.dark && j(d[_], "darkChannel", hr(gr(F.dark))), F.contrastText && j(d[_], "contrastTextChannel", hr(gr(F.contrastText))), _ === "text" && (rn(d[_], "primary"), rn(d[_], "secondary")), _ === "action" && (F.active && rn(d[_], "active"), F.selected && rn(d[_], "selected")));
    });
  }), w = t.reduce((A, d) => mt(A, d), w);
  const x = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Fg(w)
  }, {
    vars: O,
    generateThemeVars: E,
    generateStyleSheets: M
  } = lg(w, x);
  return w.vars = O, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([A, d]) => {
    w[A] = d;
  }), w.generateThemeVars = E, w.generateStyleSheets = M, w.generateSpacing = function() {
    return ic(u.spacing, ds(this));
  }, w.getColorSchemeSelector = cg(l), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = a, w.unstable_sxConfig = {
    ...zr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(d) {
    return On({
      sx: d,
      theme: this
    });
  }, w.toRuntimeSource = Pc, w;
}
function Da(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: xs({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Nc(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = n == null ? void 0 : n.mode,
    ...a
  } = e, l = s || "light", c = o == null ? void 0 : o[l], u = {
    ...o,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Yi(e, ...t);
    let m = n;
    "palette" in e || u[l] && (u[l] !== !0 ? m = u[l].palette : l === "dark" && (m = {
      mode: "dark"
    }));
    const p = Yi({
      ...e,
      palette: m
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, Da(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, Da(p, "light", u.light)), p;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Bg({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const ws = Nc();
function Cs() {
  const e = ms(ws);
  return process.env.NODE_ENV !== "production" && R.useDebugValue(e), e[Zo] || e;
}
function $c(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ft = (e) => $c(e) && e !== "classes", me = Dh({
  themeId: Zo,
  defaultTheme: ws,
  rootShouldForwardProp: Ft
}), zg = He("MuiBox", ["root"]), Wg = Nc(), Dc = Rh({
  themeId: Zo,
  defaultTheme: Wg,
  defaultClassName: zg.root,
  generateClassName: ac.generate
});
process.env.NODE_ENV !== "production" && (Dc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: i.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function Ac(e) {
  return /* @__PURE__ */ P.jsx(sc, {
    ...e,
    defaultTheme: ws,
    themeId: Zo
  });
}
process.env.NODE_ENV !== "production" && (Ac.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool])
});
function Vg(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ P.jsx(Ac, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (i.node, i.object.isRequired);
function ot(e) {
  return rg(e);
}
function so(e) {
  return parseInt(e, 10) || 0;
}
const Ug = {
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
function Hg(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const Fc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = R.useRef(l != null), m = R.useRef(null), p = ht(n, m), h = R.useRef(null), b = R.useRef(null), y = R.useCallback(() => {
    const C = m.current, v = an(C).getComputedStyle(C);
    if (v.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const w = b.current;
    w.style.width = v.width, w.value = C.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const x = v.boxSizing, O = so(v.paddingBottom) + so(v.paddingTop), E = so(v.borderBottomWidth) + so(v.borderTopWidth), M = w.scrollHeight;
    w.value = "x";
    const A = w.scrollHeight;
    let d = M;
    s && (d = Math.max(Number(s) * A, d)), o && (d = Math.min(Number(o) * A, d)), d = Math.max(d, A);
    const k = d + (x === "border-box" ? O + E : 0), _ = Math.abs(d - M) <= 1;
    return {
      outerHeightStyle: k,
      overflowing: _
    };
  }, [o, s, t.placeholder]), g = R.useCallback(() => {
    const C = y();
    if (Hg(C))
      return;
    const T = C.outerHeightStyle, v = m.current;
    h.current !== T && (h.current = T, v.style.height = `${T}px`), v.style.overflow = C.overflowing ? "hidden" : "";
  }, [y]);
  kn(() => {
    const C = () => {
      g();
    };
    let T;
    const v = () => {
      cancelAnimationFrame(T), T = requestAnimationFrame(() => {
        C();
      });
    }, w = hc(C), x = m.current, O = an(x);
    O.addEventListener("resize", w);
    let E;
    return typeof ResizeObserver < "u" && (E = new ResizeObserver(process.env.NODE_ENV === "test" ? v : C), E.observe(x)), () => {
      w.clear(), cancelAnimationFrame(T), O.removeEventListener("resize", w), E && E.disconnect();
    };
  }, [y, g]), kn(() => {
    g();
  });
  const f = (C) => {
    u || g(), r && r(C);
  };
  return /* @__PURE__ */ P.jsxs(R.Fragment, {
    children: [/* @__PURE__ */ P.jsx("textarea", {
      value: l,
      onChange: f,
      ref: p,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ P.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: b,
      tabIndex: -1,
      style: {
        ...Ug.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: i.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  onChange: i.func,
  /**
   * @ignore
   */
  placeholder: i.string,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * @ignore
   */
  value: i.oneOfType([i.arrayOf(i.string), i.number, i.string])
});
function Gi(e) {
  return typeof e == "string";
}
function Jn({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const Qo = /* @__PURE__ */ R.createContext(void 0);
process.env.NODE_ENV !== "production" && (Qo.displayName = "FormControlContext");
function Pn() {
  return R.useContext(Qo);
}
const dt = og;
function Aa(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function So(e, t = !1) {
  return e && (Aa(e.value) && e.value !== "" || t && Aa(e.defaultValue) && e.defaultValue !== "");
}
function Yg(e) {
  return e.startAdornment;
}
function qg(e) {
  return Ue("MuiInputBase", e);
}
const Kn = He("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Fa;
const Jo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Le(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, ei = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Gg = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: m,
    readOnly: p,
    size: h,
    startAdornment: b,
    type: y
  } = e, g = {
    root: ["root", `color${Le(n)}`, r && "disabled", o && "error", c && "fullWidth", a && "focused", l && "formControl", h && h !== "medium" && `size${Le(h)}`, m && "multiline", b && "adornedStart", s && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", m && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", b && "inputAdornedStart", s && "inputAdornedEnd", p && "readOnly"]
  };
  return et(g, qg, t);
}, ti = me("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Jo
})(dt(({
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
  [`&.${Kn.disabled}`]: {
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
}))), ni = me("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ei
})(dt(({
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
  }, o = e.vars ? {
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
    [`label[data-shrink=false] + .${Kn.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": o,
      "&:focus::-moz-placeholder": o,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": o
      // Edge
    },
    [`&.${Kn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableInjectingGlobalStyles,
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
        ownerState: s
      }) => s.multiline,
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
})), _a = Vg({
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
}), ri = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    autoComplete: s,
    autoFocus: a,
    className: l,
    color: c,
    components: u = {},
    componentsProps: m = {},
    defaultValue: p,
    disabled: h,
    disableInjectingGlobalStyles: b,
    endAdornment: y,
    error: g,
    fullWidth: f = !1,
    id: C,
    inputComponent: T = "input",
    inputProps: v = {},
    inputRef: w,
    margin: x,
    maxRows: O,
    minRows: E,
    multiline: M = !1,
    name: A,
    onBlur: d,
    onChange: k,
    onClick: _,
    onFocus: F,
    onKeyDown: U,
    onKeyUp: N,
    placeholder: W,
    readOnly: ee,
    renderSuffix: J,
    rows: oe,
    size: B,
    slotProps: K = {},
    slots: re = {},
    startAdornment: Q,
    type: $ = "text",
    value: z,
    ...H
  } = r, D = v.value != null ? v.value : z, {
    current: Y
  } = R.useRef(D != null), Z = R.useRef(), V = R.useCallback((we) => {
    process.env.NODE_ENV !== "production" && we && we.nodeName !== "INPUT" && !we.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ne = ht(Z, w, v.ref, V), [L, fe] = R.useState(!1), I = Pn();
  process.env.NODE_ENV !== "production" && R.useEffect(() => {
    if (I)
      return I.registerEffect();
  }, [I]);
  const ae = Jn({
    props: r,
    muiFormControl: I,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ae.focused = I ? I.focused : L, R.useEffect(() => {
    !I && h && L && (fe(!1), d && d());
  }, [I, h, L, d]);
  const ge = I && I.onFilled, Re = I && I.onEmpty, Ee = R.useCallback((we) => {
    So(we) ? ge && ge() : Re && Re();
  }, [ge, Re]);
  kn(() => {
    Y && Ee({
      value: D
    });
  }, [D, Ee, Y]);
  const be = (we) => {
    F && F(we), v.onFocus && v.onFocus(we), I && I.onFocus ? I.onFocus(we) : fe(!0);
  }, st = (we) => {
    d && d(we), v.onBlur && v.onBlur(we), I && I.onBlur ? I.onBlur(we) : fe(!1);
  }, xe = (we, ...gt) => {
    if (!Y) {
      const Wt = we.target || Z.current;
      if (Wt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Qt(1));
      Ee({
        value: Wt.value
      });
    }
    v.onChange && v.onChange(we, ...gt), k && k(we, ...gt);
  };
  R.useEffect(() => {
    Ee(Z.current);
  }, []);
  const tt = (we) => {
    Z.current && we.currentTarget === we.target && Z.current.focus(), _ && _(we);
  };
  let se = T, Ye = v;
  M && se === "input" && (oe ? (process.env.NODE_ENV !== "production" && (E || O) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Ye = {
    type: void 0,
    minRows: oe,
    maxRows: oe,
    ...Ye
  }) : Ye = {
    type: void 0,
    maxRows: O,
    minRows: E,
    ...Ye
  }, se = Fc);
  const Tt = (we) => {
    Ee(we.animationName === "mui-auto-fill-cancel" ? Z.current : {
      value: "x"
    });
  };
  R.useEffect(() => {
    I && I.setAdornedStart(!!Q);
  }, [I, Q]);
  const Rt = {
    ...r,
    color: ae.color || "primary",
    disabled: ae.disabled,
    endAdornment: y,
    error: ae.error,
    focused: ae.focused,
    formControl: I,
    fullWidth: f,
    hiddenLabel: ae.hiddenLabel,
    multiline: M,
    size: ae.size,
    startAdornment: Q,
    type: $
  }, at = Gg(Rt), zt = re.root || u.Root || ti, lt = K.root || m.root || {}, Ot = re.input || u.Input || ni;
  return Ye = {
    ...Ye,
    ...K.input ?? m.input
  }, /* @__PURE__ */ P.jsxs(R.Fragment, {
    children: [!b && typeof _a == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Fa || (Fa = /* @__PURE__ */ P.jsx(_a, {}))), /* @__PURE__ */ P.jsxs(zt, {
      ...lt,
      ref: n,
      onClick: tt,
      ...H,
      ...!Gi(zt) && {
        ownerState: {
          ...Rt,
          ...lt.ownerState
        }
      },
      className: he(at.root, lt.className, l, ee && "MuiInputBase-readOnly"),
      children: [Q, /* @__PURE__ */ P.jsx(Qo.Provider, {
        value: null,
        children: /* @__PURE__ */ P.jsx(Ot, {
          "aria-invalid": ae.error,
          "aria-describedby": o,
          autoComplete: s,
          autoFocus: a,
          defaultValue: p,
          disabled: ae.disabled,
          id: C,
          onAnimationStart: Tt,
          name: A,
          placeholder: W,
          readOnly: ee,
          required: ae.required,
          rows: oe,
          value: D,
          onKeyDown: U,
          onKeyUp: N,
          type: $,
          ...Ye,
          ...!Gi(Ot) && {
            as: se,
            ownerState: {
              ...Rt,
              ...Ye.ownerState
            }
          },
          ref: ne,
          className: he(at.input, Ye.className, ee && "MuiInputBase-readOnly"),
          onBlur: st,
          onChange: xe,
          onFocus: be
        })
      }), y, J ? J({
        ...ae,
        startAdornment: Q
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: ys,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Lt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * @ignore
   */
  renderSuffix: i.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
function Kg(e) {
  return typeof e.main == "string";
}
function Xg(e, t = []) {
  if (!Kg(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Xn(e = []) {
  return ([, t]) => t && Xg(t, e);
}
function Zg(e) {
  return Ue("MuiInput", e);
}
const ur = {
  ...Kn,
  ...He("MuiInput", ["root", "underline", "input"])
}, Qg = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = et({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Zg, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, Jg = me(ti, {
  shouldForwardProp: (e) => Ft(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Jo(e, t), !n.disableUnderline && t.underline];
  }
})(dt(({
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
        [`&.${ur.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ur.error}`]: {
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
        [`&:hover:not(.${ur.disabled}, .${ur.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${ur.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Xn()).map(([r]) => ({
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
})), eb = me(ni, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ei
})({}), Ir = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: u = !1,
    slotProps: m,
    slots: p = {},
    type: h = "text",
    ...b
  } = r, y = Qg(r), f = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = m ?? a ? mt(m ?? a, f) : f, T = p.root ?? s.Root ?? Jg, v = p.input ?? s.Input ?? eb;
  return /* @__PURE__ */ P.jsx(ri, {
    slots: {
      root: T,
      input: v
    },
    slotProps: C,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: n,
    type: h,
    ...b,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (Ir.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Lt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
Ir && (Ir.muiName = "Input");
function tb(e) {
  return Ue("MuiFilledInput", e);
}
const wn = {
  ...Kn,
  ...He("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function nb(e) {
  return Ue("MuiSvgIcon", e);
}
He("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const rb = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Le(t)}`, `fontSize${Le(n)}`]
  };
  return et(o, nb, r);
}, ob = me("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Le(n.color)}`], t[`fontSize${Le(n.fontSize)}`]];
  }
})(dt(({
  theme: e
}) => {
  var t, n, r, o, s, a, l, c, u, m, p, h, b, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (g) => !g.hasSvgAsChild,
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
          fontSize: ((a = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem"
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
          fontSize: ((m = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : m.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, g]) => g && g.main).map(([g]) => {
        var f, C;
        return {
          props: {
            color: g
          },
          style: {
            color: (C = (f = (e.vars ?? e).palette) == null ? void 0 : f[g]) == null ? void 0 : C.main
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
          color: (y = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : y.disabled
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
})), Mr = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: m = !1,
    titleAccess: p,
    viewBox: h = "0 0 24 24",
    ...b
  } = r, y = /* @__PURE__ */ R.isValidElement(o) && o.type === "svg", g = {
    ...r,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: h,
    hasSvgAsChild: y
  }, f = {};
  m || (f.viewBox = h);
  const C = rb(g);
  return /* @__PURE__ */ P.jsxs(ob, {
    as: l,
    className: he(C.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...f,
    ...b,
    ...y && o.props,
    ownerState: g,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ P.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Mr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: i.oneOfType([i.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: i.oneOfType([i.oneOf(["inherit", "large", "medium", "small"]), i.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: i.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: i.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: i.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: i.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: i.string
});
Mr && (Mr.muiName = "SvgIcon");
function oi(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ P.jsx(Mr, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Mr.muiName, /* @__PURE__ */ R.memo(/* @__PURE__ */ R.forwardRef(n));
}
const ib = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", s === "small" && `size${Le(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = et(c, tb, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, sb = me(ti, {
  shouldForwardProp: (e) => Ft(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Jo(e, t), !n.disableUnderline && t.underline];
  }
})(dt(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
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
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${wn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${wn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableUnderline,
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
        [`&.${wn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${wn.error}`]: {
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
        [`&:hover:not(.${wn.disabled}, .${wn.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${wn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Xn()).map(([a]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: a
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[a]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: a
      }) => a.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: a,
        size: l
      }) => a.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel && a.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), ab = me(ni, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ei
})(dt(({
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
}))), Nr = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: m = !1,
    slotProps: p,
    slots: h = {},
    type: b = "text",
    ...y
  } = r, g = {
    ...r,
    disableUnderline: o,
    fullWidth: l,
    inputComponent: u,
    multiline: m,
    type: b
  }, f = ib(r), C = {
    root: {
      ownerState: g
    },
    input: {
      ownerState: g
    }
  }, T = p ?? a ? mt(C, p ?? a) : C, v = h.root ?? s.Root ?? sb, w = h.input ?? s.Input ?? ab;
  return /* @__PURE__ */ P.jsx(ri, {
    slots: {
      root: v,
      input: w
    },
    componentsProps: T,
    fullWidth: l,
    inputComponent: u,
    multiline: m,
    ref: n,
    type: b,
    ...y,
    classes: f
  });
});
process.env.NODE_ENV !== "production" && (Nr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Lt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
Nr && (Nr.muiName = "Input");
var ja;
const lb = me("fieldset", {
  shouldForwardProp: Ft
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
}), cb = me("legend", {
  shouldForwardProp: Ft
})(dt(({
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
function _c(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: s,
    ...a
  } = e, l = o != null && o !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ P.jsx(lb, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ P.jsx(cb, {
      ownerState: c,
      children: l ? /* @__PURE__ */ P.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ja || (ja = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (_c.propTypes = {
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The label.
   */
  label: i.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool.isRequired,
  /**
   * @ignore
   */
  style: i.object
});
function ub(e) {
  return Ue("MuiOutlinedInput", e);
}
const Yt = {
  ...Kn,
  ...He("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, db = (e) => {
  const {
    classes: t
  } = e, r = et({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, ub, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, fb = me(ti, {
  shouldForwardProp: (e) => Ft(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Jo
})(dt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Yt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Yt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${Yt.focused} .${Yt.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Xn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Yt.focused} .${Yt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${Yt.error} .${Yt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Yt.disabled} .${Yt.notchedOutline}`]: {
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
})), pb = me(_c, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(dt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), mb = me(ni, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ei
})(dt(({
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
}))), $r = /* @__PURE__ */ R.forwardRef(function(t, n) {
  var r;
  const o = ot({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: s = {},
    fullWidth: a = !1,
    inputComponent: l = "input",
    label: c,
    multiline: u = !1,
    notched: m,
    slots: p = {},
    type: h = "text",
    ...b
  } = o, y = db(o), g = Pn(), f = Jn({
    props: o,
    muiFormControl: g,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...o,
    color: f.color || "primary",
    disabled: f.disabled,
    error: f.error,
    focused: f.focused,
    formControl: g,
    fullWidth: a,
    hiddenLabel: f.hiddenLabel,
    multiline: u,
    size: f.size,
    type: h
  }, T = p.root ?? s.Root ?? fb, v = p.input ?? s.Input ?? mb;
  return /* @__PURE__ */ P.jsx(ri, {
    slots: {
      root: T,
      input: v
    },
    renderSuffix: (w) => /* @__PURE__ */ P.jsx(pb, {
      ownerState: C,
      className: y.notchedOutline,
      label: c != null && c !== "" && f.required ? r || (r = /* @__PURE__ */ P.jsxs(R.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof m < "u" ? m : !!(w.startAdornment || w.filled || w.focused)
    }),
    fullWidth: a,
    inputComponent: l,
    multiline: u,
    ref: n,
    type: h,
    ...b,
    classes: {
      ...y,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && ($r.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Lt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: i.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
$r && ($r.muiName = "Input");
function hb(e) {
  return Ue("MuiFormLabel", e);
}
const wr = He("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), gb = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${Le(n)}`, o && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return et(c, hb, t);
}, bb = me("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(dt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Xn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${wr.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${wr.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${wr.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), yb = me("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(dt(({
  theme: e
}) => ({
  [`&.${wr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), jc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: s,
    color: a,
    component: l = "label",
    disabled: c,
    error: u,
    filled: m,
    focused: p,
    required: h,
    ...b
  } = r, y = Pn(), g = Jn({
    props: r,
    muiFormControl: y,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), f = {
    ...r,
    color: g.color || "primary",
    component: l,
    disabled: g.disabled,
    error: g.error,
    filled: g.filled,
    focused: g.focused,
    required: g.required
  }, C = gb(f);
  return /* @__PURE__ */ P.jsxs(bb, {
    as: l,
    ownerState: f,
    className: he(C.root, s),
    ref: n,
    ...b,
    children: [o, g.required && /* @__PURE__ */ P.jsxs(yb, {
      ownerState: f,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (jc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: i.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function vb(e) {
  return Ue("MuiInputLabel", e);
}
He("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const xb = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", o && "shrink", r && r !== "normal" && `size${Le(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = et(c, vb, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, wb = me(jc, {
  shouldForwardProp: (e) => Ft(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${wr.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(dt(({
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
}))), Lc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = r, m = Pn();
  let p = a;
  typeof p > "u" && m && (p = m.filled || m.focused || m.adornedStart);
  const h = Jn({
    props: r,
    muiFormControl: m,
    states: ["size", "variant", "required", "focused"]
  }), b = {
    ...r,
    disableAnimation: o,
    formControl: m,
    shrink: p,
    size: h.size,
    variant: h.variant,
    required: h.required,
    focused: h.focused
  }, y = xb(b);
  return /* @__PURE__ */ P.jsx(wb, {
    "data-shrink": p,
    ref: n,
    className: he(y.root, c),
    ...u,
    ownerState: b,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: i.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: i.oneOfType([i.oneOf(["normal", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function Cb(e) {
  return Ue("MuiFormControl", e);
}
He("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Sb = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${Le(n)}`, r && "fullWidth"]
  };
  return et(o, Cb, t);
}, Eb = me("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${Le(e.margin)}`],
    ...e.fullWidth && t.fullWidth
  })
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
}), Bc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: m,
    fullWidth: p = !1,
    hiddenLabel: h = !1,
    margin: b = "none",
    required: y = !1,
    size: g = "medium",
    variant: f = "outlined",
    ...C
  } = r, T = {
    ...r,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: h,
    margin: b,
    required: y,
    size: g,
    variant: f
  }, v = Sb(T), [w, x] = R.useState(() => {
    let U = !1;
    return o && R.Children.forEach(o, (N) => {
      if (!wi(N, ["Input", "Select"]))
        return;
      const W = wi(N, ["Select"]) ? N.props.input : N;
      W && Yg(W.props) && (U = !0);
    }), U;
  }), [O, E] = R.useState(() => {
    let U = !1;
    return o && R.Children.forEach(o, (N) => {
      wi(N, ["Input", "Select"]) && (So(N.props, !0) || So(N.props.inputProps, !0)) && (U = !0);
    }), U;
  }), [M, A] = R.useState(!1);
  c && M && A(!1);
  const d = m !== void 0 && !c ? m : M;
  let k;
  const _ = R.useRef(!1);
  process.env.NODE_ENV !== "production" && (k = () => (_.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), _.current = !0, () => {
    _.current = !1;
  }));
  const F = R.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: x,
    color: a,
    disabled: c,
    error: u,
    filled: O,
    focused: d,
    fullWidth: p,
    hiddenLabel: h,
    size: g,
    onBlur: () => {
      A(!1);
    },
    onEmpty: () => {
      E(!1);
    },
    onFilled: () => {
      E(!0);
    },
    onFocus: () => {
      A(!0);
    },
    registerEffect: k,
    required: y,
    variant: f
  }), [w, a, c, u, O, d, p, h, k, y, g, f]);
  return /* @__PURE__ */ P.jsx(Qo.Provider, {
    value: F,
    children: /* @__PURE__ */ P.jsx(Eb, {
      as: l,
      ownerState: T,
      className: he(v.root, s),
      ref: n,
      ...C,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Bc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: i.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function Tb(e) {
  return Ue("MuiFormHelperText", e);
}
const La = He("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Ba;
const Rb = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", o && "disabled", s && "error", r && `size${Le(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return et(u, Tb, t);
}, Ob = me("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${Le(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(dt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${La.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${La.error}`]: {
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
}))), zc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: s,
    component: a = "p",
    disabled: l,
    error: c,
    filled: u,
    focused: m,
    margin: p,
    required: h,
    variant: b,
    ...y
  } = r, g = Pn(), f = Jn({
    props: r,
    muiFormControl: g,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: a,
    contained: f.variant === "filled" || f.variant === "outlined",
    variant: f.variant,
    size: f.size,
    disabled: f.disabled,
    error: f.error,
    filled: f.filled,
    focused: f.focused,
    required: f.required
  };
  delete C.ownerState;
  const T = Rb(C);
  return /* @__PURE__ */ P.jsx(Ob, {
    as: a,
    className: he(T.root, s),
    ref: n,
    ...y,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ba || (Ba = /* @__PURE__ */ P.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  });
});
process.env.NODE_ENV !== "production" && (zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined", "standard"]), i.string])
});
var Ki = { exports: {} }, $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function kb() {
  if (za) return $e;
  za = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function g(f) {
    if (typeof f == "object" && f !== null) {
      var C = f.$$typeof;
      switch (C) {
        case e:
          switch (f = f.type, f) {
            case n:
            case o:
            case r:
            case u:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case a:
                case c:
                case h:
                case p:
                case s:
                  return f;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return $e.ContextConsumer = a, $e.ContextProvider = s, $e.Element = e, $e.ForwardRef = c, $e.Fragment = n, $e.Lazy = h, $e.Memo = p, $e.Portal = t, $e.Profiler = o, $e.StrictMode = r, $e.Suspense = u, $e.SuspenseList = m, $e.isAsyncMode = function() {
    return !1;
  }, $e.isConcurrentMode = function() {
    return !1;
  }, $e.isContextConsumer = function(f) {
    return g(f) === a;
  }, $e.isContextProvider = function(f) {
    return g(f) === s;
  }, $e.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, $e.isForwardRef = function(f) {
    return g(f) === c;
  }, $e.isFragment = function(f) {
    return g(f) === n;
  }, $e.isLazy = function(f) {
    return g(f) === h;
  }, $e.isMemo = function(f) {
    return g(f) === p;
  }, $e.isPortal = function(f) {
    return g(f) === t;
  }, $e.isProfiler = function(f) {
    return g(f) === o;
  }, $e.isStrictMode = function(f) {
    return g(f) === r;
  }, $e.isSuspense = function(f) {
    return g(f) === u;
  }, $e.isSuspenseList = function(f) {
    return g(f) === m;
  }, $e.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === o || f === r || f === u || f === m || f === b || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === s || f.$$typeof === a || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
  }, $e.typeOf = g, $e;
}
var De = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function Pb() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = !1, g = !1, f = !1, C = !1, T = !1, v;
    v = Symbol.for("react.module.reference");
    function w(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === o || T || I === r || I === u || I === m || C || I === b || y || g || f || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === p || I.$$typeof === s || I.$$typeof === a || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === v || I.getModuleId !== void 0));
    }
    function x(I) {
      if (typeof I == "object" && I !== null) {
        var ae = I.$$typeof;
        switch (ae) {
          case e:
            var ge = I.type;
            switch (ge) {
              case n:
              case o:
              case r:
              case u:
              case m:
                return ge;
              default:
                var Re = ge && ge.$$typeof;
                switch (Re) {
                  case l:
                  case a:
                  case c:
                  case h:
                  case p:
                  case s:
                    return Re;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var O = a, E = s, M = e, A = c, d = n, k = h, _ = p, F = t, U = o, N = r, W = u, ee = m, J = !1, oe = !1;
    function B(I) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(I) {
      return oe || (oe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(I) {
      return x(I) === a;
    }
    function Q(I) {
      return x(I) === s;
    }
    function $(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function z(I) {
      return x(I) === c;
    }
    function H(I) {
      return x(I) === n;
    }
    function D(I) {
      return x(I) === h;
    }
    function Y(I) {
      return x(I) === p;
    }
    function Z(I) {
      return x(I) === t;
    }
    function V(I) {
      return x(I) === o;
    }
    function ne(I) {
      return x(I) === r;
    }
    function L(I) {
      return x(I) === u;
    }
    function fe(I) {
      return x(I) === m;
    }
    De.ContextConsumer = O, De.ContextProvider = E, De.Element = M, De.ForwardRef = A, De.Fragment = d, De.Lazy = k, De.Memo = _, De.Portal = F, De.Profiler = U, De.StrictMode = N, De.Suspense = W, De.SuspenseList = ee, De.isAsyncMode = B, De.isConcurrentMode = K, De.isContextConsumer = re, De.isContextProvider = Q, De.isElement = $, De.isForwardRef = z, De.isFragment = H, De.isLazy = D, De.isMemo = Y, De.isPortal = Z, De.isProfiler = V, De.isStrictMode = ne, De.isSuspense = L, De.isSuspenseList = fe, De.isValidElementType = w, De.typeOf = x;
  }()), De;
}
process.env.NODE_ENV === "production" ? Ki.exports = kb() : Ki.exports = Pb();
var Ss = Ki.exports;
const Wc = /* @__PURE__ */ R.createContext({});
process.env.NODE_ENV !== "production" && (Wc.displayName = "ListContext");
function Ib(e) {
  return Ue("MuiList", e);
}
He("MuiList", ["root", "padding", "dense", "subheader"]);
const Mb = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return et({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, Ib, t);
}, Nb = me("ul", {
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
}), Vc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...m
  } = r, p = R.useMemo(() => ({
    dense: l
  }), [l]), h = {
    ...r,
    component: a,
    dense: l,
    disablePadding: c
  }, b = Mb(h);
  return /* @__PURE__ */ P.jsx(Wc.Provider, {
    value: p,
    children: /* @__PURE__ */ P.jsxs(Nb, {
      as: a,
      className: he(b.root, s),
      ref: n,
      ownerState: h,
      ...m,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: i.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: i.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function Ei(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Va(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Uc(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function dr(e, t, n, r, o, s) {
  let a = !1, l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Uc(l, s) || c)
      l = o(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Hc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: m,
    variant: p = "selectedMenu",
    ...h
  } = t, b = R.useRef(null), y = R.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  kn(() => {
    o && b.current.focus();
  }, [o]), R.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: w
    }) => {
      const x = !b.current.style.width;
      if (v.clientHeight < b.current.clientHeight && x) {
        const O = `${vc(an(v))}px`;
        b.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = O, b.current.style.width = `calc(100% + ${O})`;
      }
      return b.current;
    }
  }), []);
  const g = (v) => {
    const w = b.current, x = v.key;
    if (v.ctrlKey || v.metaKey || v.altKey) {
      m && m(v);
      return;
    }
    const E = jt(w).activeElement;
    if (x === "ArrowDown")
      v.preventDefault(), dr(w, E, u, c, Ei);
    else if (x === "ArrowUp")
      v.preventDefault(), dr(w, E, u, c, Va);
    else if (x === "Home")
      v.preventDefault(), dr(w, null, u, c, Ei);
    else if (x === "End")
      v.preventDefault(), dr(w, null, u, c, Va);
    else if (x.length === 1) {
      const M = y.current, A = x.toLowerCase(), d = performance.now();
      M.keys.length > 0 && (d - M.lastTime > 500 ? (M.keys = [], M.repeating = !0, M.previousKeyMatched = !0) : M.repeating && A !== M.keys[0] && (M.repeating = !1)), M.lastTime = d, M.keys.push(A);
      const k = E && !M.repeating && Uc(E, M);
      M.previousKeyMatched && (k || dr(w, E, !1, c, Ei, M)) ? v.preventDefault() : M.previousKeyMatched = !1;
    }
    m && m(v);
  }, f = ht(b, n);
  let C = -1;
  R.Children.forEach(a, (v, w) => {
    if (!/* @__PURE__ */ R.isValidElement(v)) {
      C === w && (C += 1, C >= a.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ss.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (p === "selectedMenu" && v.props.selected || C === -1) && (C = w), C === w && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (C += 1, C >= a.length && (C = -1));
  });
  const T = R.Children.map(a, (v, w) => {
    if (w === C) {
      const x = {};
      return s && (x.autoFocus = !0), v.props.tabIndex === void 0 && p === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ R.cloneElement(v, x);
    }
    return v;
  });
  return /* @__PURE__ */ P.jsx(Vc, {
    role: "menu",
    ref: f,
    className: l,
    onKeyDown: g,
    tabIndex: o ? 0 : -1,
    ...h,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (Hc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: i.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function Yc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Xi(e, t) {
  return Xi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Xi(e, t);
}
function qc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xi(e, t);
}
const Ua = {
  disabled: !1
};
var $b = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.shape({
  enter: i.number,
  exit: i.number,
  appear: i.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && i.oneOfType([i.string, i.shape({
  enter: i.string,
  exit: i.string,
  active: i.string
}), i.shape({
  enter: i.string,
  enterDone: i.string,
  enterActive: i.string,
  exit: i.string,
  exitDone: i.string,
  exitActive: i.string
})]);
const Eo = St.createContext(null);
var Db = function(t) {
  return t.scrollTop;
}, br = "unmounted", Cn = "exited", Sn = "entering", zn = "entered", Zi = "exiting", Jt = /* @__PURE__ */ function(e) {
  qc(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var a = o, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Cn, s.appearStatus = Sn) : c = zn : r.unmountOnExit || r.mountOnEnter ? c = br : c = Cn, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var a = o.in;
    return a && s.status === br ? {
      status: Cn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Sn && a !== zn && (s = Sn) : (a === Sn || a === zn) && (s = Zi);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, s, a, l;
    return s = a = l = o, o != null && typeof o != "number" && (s = o.exit, a = o.enter, l = o.appear !== void 0 ? o.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === Sn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : no.findDOMNode(this);
          a && Db(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Cn && this.setState({
      status: br
    });
  }, n.performEnter = function(o) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [no.findDOMNode(this), l], u = c[0], m = c[1], p = this.getTimeouts(), h = l ? p.appear : p.enter;
    if (!o && !a || Ua.disabled) {
      this.safeSetState({
        status: zn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, m), this.safeSetState({
      status: Sn
    }, function() {
      s.props.onEntering(u, m), s.onTransitionEnd(h, function() {
        s.safeSetState({
          status: zn
        }, function() {
          s.props.onEntered(u, m);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : no.findDOMNode(this);
    if (!s || Ua.disabled) {
      this.safeSetState({
        status: Cn
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Zi
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Cn
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, n.setNextCallback = function(o) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : no.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], m = c[1];
      this.props.addEndListener(u, m);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === br)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = Yc(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ St.createElement(Eo.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : St.cloneElement(St.Children.only(a), l))
    );
  }, t;
}(St.Component);
Jt.contextType = Eo;
Jt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: i.shape({
    current: typeof Element > "u" ? i.any : function(e, t, n, r, o, s) {
      var a = e[t];
      return i.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, s);
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
  children: i.oneOfType([i.func.isRequired, i.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: i.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: i.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: i.bool,
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
  appear: i.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: i.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: i.bool,
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
    var n = $b;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      o[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(o));
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
  addEndListener: i.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: i.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: i.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: i.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: i.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: i.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: i.func
} : {};
function Ln() {
}
Jt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ln,
  onEntering: Ln,
  onEntered: Ln,
  onExit: Ln,
  onExiting: Ln,
  onExited: Ln
};
Jt.UNMOUNTED = br;
Jt.EXITED = Cn;
Jt.ENTERING = Sn;
Jt.ENTERED = zn;
Jt.EXITING = Zi;
function Ab(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Es(e, t) {
  var n = function(s) {
    return t && lo(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && td.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Fb(e, t) {
  e = e || {}, t = t || {};
  function n(m) {
    return m in t ? t[m] : e[m];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (r[s] = o, o = []) : o.push(s);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < o.length; a++)
    l[o[a]] = n(o[a]);
  return l;
}
function Tn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function _b(e, t) {
  return Es(e.children, function(n) {
    return co(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Tn(n, "appear", e),
      enter: Tn(n, "enter", e),
      exit: Tn(n, "exit", e)
    });
  });
}
function jb(e, t, n) {
  var r = Es(e.children), o = Fb(t, r);
  return Object.keys(o).forEach(function(s) {
    var a = o[s];
    if (lo(a)) {
      var l = s in t, c = s in r, u = t[s], m = lo(u) && !u.props.in;
      c && (!l || m) ? o[s] = co(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: Tn(a, "exit", e),
        enter: Tn(a, "enter", e)
      }) : !c && l && !m ? o[s] = co(a, {
        in: !1
      }) : c && l && lo(u) && (o[s] = co(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: Tn(a, "exit", e),
        enter: Tn(a, "enter", e)
      }));
    }
  }), o;
}
var Lb = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Bb = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ts = /* @__PURE__ */ function(e) {
  qc(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var a = s.handleExited.bind(Ab(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
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
  }, t.getDerivedStateFromProps = function(o, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? _b(o, l) : jb(o, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(o, s) {
    var a = Es(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = xo({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, s = o.component, a = o.childFactory, l = Yc(o, ["component", "childFactory"]), c = this.state.contextValue, u = Lb(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ St.createElement(Eo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ St.createElement(Eo.Provider, {
      value: c
    }, /* @__PURE__ */ St.createElement(s, l, u));
  }, t;
}(St.Component);
Ts.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: i.any,
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
  children: i.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: i.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: i.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: i.bool,
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
  childFactory: i.func
} : {};
Ts.defaultProps = Bb;
const Gc = (e) => e.scrollTop;
function To(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Qi(e) {
  return `scale(${e}, ${e ** 2})`;
}
const zb = {
  entering: {
    opacity: 1,
    transform: Qi(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ti = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ro = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: m,
    onExit: p,
    onExited: h,
    onExiting: b,
    style: y,
    timeout: g = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: f = Jt,
    ...C
  } = t, T = yc(), v = R.useRef(), w = Cs(), x = R.useRef(null), O = ht(x, Ur(s), n), E = (N) => (W) => {
    if (N) {
      const ee = x.current;
      W === void 0 ? N(ee) : N(ee, W);
    }
  }, M = E(m), A = E((N, W) => {
    Gc(N);
    const {
      duration: ee,
      delay: J,
      easing: oe
    } = To({
      style: y,
      timeout: g,
      easing: a
    }, {
      mode: "enter"
    });
    let B;
    g === "auto" ? (B = w.transitions.getAutoHeightDuration(N.clientHeight), v.current = B) : B = ee, N.style.transition = [w.transitions.create("opacity", {
      duration: B,
      delay: J
    }), w.transitions.create("transform", {
      duration: Ti ? B : B * 0.666,
      delay: J,
      easing: oe
    })].join(","), c && c(N, W);
  }), d = E(u), k = E(b), _ = E((N) => {
    const {
      duration: W,
      delay: ee,
      easing: J
    } = To({
      style: y,
      timeout: g,
      easing: a
    }, {
      mode: "exit"
    });
    let oe;
    g === "auto" ? (oe = w.transitions.getAutoHeightDuration(N.clientHeight), v.current = oe) : oe = W, N.style.transition = [w.transitions.create("opacity", {
      duration: oe,
      delay: ee
    }), w.transitions.create("transform", {
      duration: Ti ? oe : oe * 0.666,
      delay: Ti ? ee : ee || oe * 0.333,
      easing: J
    })].join(","), N.style.opacity = 0, N.style.transform = Qi(0.75), p && p(N);
  }), F = E(h), U = (N) => {
    g === "auto" && T.start(v.current || 0, N), r && r(x.current, N);
  };
  return /* @__PURE__ */ P.jsx(f, {
    appear: o,
    in: l,
    nodeRef: x,
    onEnter: A,
    onEntered: d,
    onEntering: M,
    onExit: _,
    onExited: F,
    onExiting: k,
    addEndListener: U,
    timeout: g === "auto" ? null : g,
    ...C,
    children: (N, W) => /* @__PURE__ */ R.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Qi(0.75),
        visibility: N === "exited" && !l ? "hidden" : void 0,
        ...zb[N],
        ...y,
        ...s.props.style
      },
      ref: O,
      ...W
    })
  });
});
process.env.NODE_ENV !== "production" && (Ro.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: Vr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
Ro && (Ro.muiSupportAuto = !0);
function Wb(e) {
  const t = jt(e);
  return t.body === e ? an(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Cr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ha(e) {
  return parseInt(an(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Vb(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Ya(e, t, n, r, o) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !Vb(a);
    l && c && Cr(a, o);
  });
}
function Ri(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Ub(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Wb(r)) {
      const a = vc(an(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Ha(r) + a}px`;
      const l = jt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Ha(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = jt(r).body;
    else {
      const a = r.parentElement, l = an(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Hb(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Yb {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Cr(t.modalRef, !1);
    const o = Hb(n);
    Ya(n, t.mount, t.modalRef, o, !0);
    const s = Ri(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Ri(this.containers, (s) => s.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = Ub(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Ri(this.containers, (a) => a.modals.includes(t)), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Cr(t.modalRef, n), Ya(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Cr(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const qb = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Gb(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Kb(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Xb(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Kb(e));
}
function Zb(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(qb)).forEach((r, o) => {
    const s = Gb(r);
    s === -1 || !Xb(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function Qb() {
  return !0;
}
function Oo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = Zb,
    isEnabled: a = Qb,
    open: l
  } = e, c = R.useRef(!1), u = R.useRef(null), m = R.useRef(null), p = R.useRef(null), h = R.useRef(null), b = R.useRef(!1), y = R.useRef(null), g = ht(Ur(t), y), f = R.useRef(null);
  R.useEffect(() => {
    !l || !y.current || (b.current = !n);
  }, [n, l]), R.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = jt(y.current);
    return y.current.contains(v.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), b.current && y.current.focus()), () => {
      o || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), R.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = jt(y.current), w = (E) => {
      f.current = E, !(r || !a() || E.key !== "Tab") && v.activeElement === y.current && E.shiftKey && (c.current = !0, m.current && m.current.focus());
    }, x = () => {
      var A, d;
      const E = y.current;
      if (E === null)
        return;
      if (!v.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (E.contains(v.activeElement) || r && v.activeElement !== u.current && v.activeElement !== m.current)
        return;
      if (v.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!b.current)
        return;
      let M = [];
      if ((v.activeElement === u.current || v.activeElement === m.current) && (M = s(y.current)), M.length > 0) {
        const k = !!((A = f.current) != null && A.shiftKey && ((d = f.current) == null ? void 0 : d.key) === "Tab"), _ = M[0], F = M[M.length - 1];
        typeof _ != "string" && typeof F != "string" && (k ? F.focus() : _.focus());
      } else
        E.focus();
    };
    v.addEventListener("focusin", x), v.addEventListener("keydown", w, !0);
    const O = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(O), v.removeEventListener("focusin", x), v.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, a, l, s]);
  const C = (v) => {
    p.current === null && (p.current = v.relatedTarget), b.current = !0, h.current = v.target;
    const w = t.props.onFocus;
    w && w(v);
  }, T = (v) => {
    p.current === null && (p.current = v.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ P.jsxs(R.Fragment, {
    children: [/* @__PURE__ */ P.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ R.cloneElement(t, {
      ref: g,
      onFocus: C
    }), /* @__PURE__ */ P.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: m,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Oo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Vr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: i.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: i.func,
  /**
   * If `true`, focus is locked.
   */
  open: i.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Oo.propTypes = mc(Oo.propTypes));
function Jb(e) {
  return typeof e == "function" ? e() : e;
}
const ko = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: s = !1
  } = t, [a, l] = R.useState(null), c = ht(/* @__PURE__ */ R.isValidElement(r) ? Ur(r) : null, n);
  if (kn(() => {
    s || l(Jb(o) || document.body);
  }, [o, s]), kn(() => {
    if (a && !s)
      return Vi(n, a), () => {
        Vi(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ R.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ R.cloneElement(r, u);
    }
    return /* @__PURE__ */ P.jsx(R.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ P.jsx(R.Fragment, {
    children: a && /* @__PURE__ */ nd.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (ko.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: i.node,
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
  container: i.oneOfType([kr, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool
});
process.env.NODE_ENV !== "production" && (ko.propTypes = mc(ko.propTypes));
function _t(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: s,
    getSlotOwnerState: a,
    internalForwardedProps: l,
    ...c
  } = t, {
    component: u,
    slots: m = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...h
  } = s, b = m[e] || r, y = Rc(p[e], o), {
    props: {
      component: g,
      ...f
    },
    internalRef: C
  } = Tc({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), T = ht(C, y == null ? void 0 : y.ref, t.ref), v = a ? a(f) : {}, w = {
    ...o,
    ...v
  }, x = e === "root" ? g || u : g, O = Sc(b, {
    ...e === "root" && !u && !m[e] && l,
    ...e !== "root" && !m[e] && l,
    ...f,
    ...x && {
      as: x
    },
    ref: T
  }, w);
  return Object.keys(v).forEach((E) => {
    delete O[E];
  }), [b, O];
}
const ey = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Kc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = Cs(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: m,
    onEntered: p,
    onEntering: h,
    onExit: b,
    onExited: y,
    onExiting: g,
    style: f,
    timeout: C = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Jt,
    ...v
  } = t, w = R.useRef(null), x = ht(w, Ur(l), n), O = (U) => (N) => {
    if (U) {
      const W = w.current;
      N === void 0 ? U(W) : U(W, N);
    }
  }, E = O(h), M = O((U, N) => {
    Gc(U);
    const W = To({
      style: f,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    U.style.webkitTransition = r.transitions.create("opacity", W), U.style.transition = r.transitions.create("opacity", W), m && m(U, N);
  }), A = O(p), d = O(g), k = O((U) => {
    const N = To({
      style: f,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    U.style.webkitTransition = r.transitions.create("opacity", N), U.style.transition = r.transitions.create("opacity", N), b && b(U);
  }), _ = O(y), F = (U) => {
    s && s(w.current, U);
  };
  return /* @__PURE__ */ P.jsx(T, {
    appear: a,
    in: u,
    nodeRef: w,
    onEnter: M,
    onEntered: A,
    onEntering: E,
    onExit: k,
    onExited: _,
    onExiting: d,
    addEndListener: F,
    timeout: C,
    ...v,
    children: (U, N) => /* @__PURE__ */ R.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: U === "exited" && !u ? "hidden" : void 0,
        ...ey[U],
        ...f,
        ...l.props.style
      },
      ref: x,
      ...N
    })
  });
});
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: Vr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function ty(e) {
  return Ue("MuiBackdrop", e);
}
He("MuiBackdrop", ["root", "invisible"]);
const ny = (e) => {
  const {
    ownerState: t,
    ...n
  } = e;
  return n;
}, ry = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return et({
    root: ["root", n && "invisible"]
  }, ty, t);
}, oy = me("div", {
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
}), Xc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: s,
    component: a = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: m = {},
    slotProps: p = {},
    slots: h = {},
    TransitionComponent: b,
    transitionDuration: y,
    ...g
  } = r, f = {
    ...r,
    component: a,
    invisible: l
  }, C = ry(f), T = {
    transition: b,
    root: u.Root,
    ...h
  }, v = {
    ...m,
    ...p
  }, w = {
    slots: T,
    slotProps: v
  }, [x, O] = _t("root", {
    elementType: oy,
    externalForwardedProps: w,
    className: he(C.root, s),
    ownerState: f
  }), [E, M] = _t("transition", {
    elementType: Kc,
    externalForwardedProps: w,
    ownerState: f
  }), A = ny(M);
  return /* @__PURE__ */ P.jsx(E, {
    in: c,
    timeout: y,
    ...g,
    ...A,
    children: /* @__PURE__ */ P.jsx(x, {
      "aria-hidden": !0,
      ...O,
      classes: C,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Xc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    root: i.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: i.bool,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: i.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function iy(e) {
  return typeof e == "function" ? e() : e;
}
function sy(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ao = new Yb();
function ay(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: m
  } = e, p = R.useRef({}), h = R.useRef(null), b = R.useRef(null), y = ht(b, m), [g, f] = R.useState(!u), C = sy(l);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const v = () => jt(h.current), w = () => (p.current.modalRef = b.current, p.current.mount = h.current, p.current), x = () => {
    ao.mount(w(), {
      disableScrollLock: r
    }), b.current && (b.current.scrollTop = 0);
  }, O = Vn(() => {
    const N = iy(t) || v().body;
    ao.add(w(), N), b.current && x();
  }), E = () => ao.isTopModal(w()), M = Vn((N) => {
    h.current = N, N && (u && E() ? x() : b.current && Cr(b.current, T));
  }), A = R.useCallback(() => {
    ao.remove(w(), T);
  }, [T]);
  R.useEffect(() => () => {
    A();
  }, [A]), R.useEffect(() => {
    u ? O() : (!C || !o) && A();
  }, [u, A, C, o, O]);
  const d = (N) => (W) => {
    var ee;
    (ee = N.onKeyDown) == null || ee.call(N, W), !(W.key !== "Escape" || W.which === 229 || // Wait until IME is settled.
    !E()) && (n || (W.stopPropagation(), c && c(W, "escapeKeyDown")));
  }, k = (N) => (W) => {
    var ee;
    (ee = N.onClick) == null || ee.call(N, W), W.target === W.currentTarget && c && c(W, "backdropClick");
  };
  return {
    getRootProps: (N = {}) => {
      const W = Ec(e);
      delete W.onTransitionEnter, delete W.onTransitionExited;
      const ee = {
        ...W,
        ...N
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...ee,
        onKeyDown: d(ee),
        ref: y
      };
    },
    getBackdropProps: (N = {}) => {
      const W = N;
      return {
        "aria-hidden": !0,
        ...W,
        onClick: k(W),
        open: u
      };
    },
    getTransitionProps: () => {
      const N = () => {
        f(!1), s && s();
      }, W = () => {
        f(!0), a && a(), o && A();
      };
      return {
        onEnter: xa(N, l == null ? void 0 : l.props.onEnter),
        onExited: xa(W, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: y,
    portalRef: M,
    isTopModal: E,
    exited: g,
    hasTransition: C
  };
}
function ly(e) {
  return Ue("MuiModal", e);
}
He("MuiModal", ["root", "hidden", "backdrop"]);
const cy = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return et({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, ly, r);
}, uy = me("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(dt(({
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
}))), dy = me(Xc, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Zc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = dy,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: m,
    component: p,
    components: h = {},
    componentsProps: b = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: g = !1,
    disableEscapeKeyDown: f = !1,
    disablePortal: C = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: v = !1,
    hideBackdrop: w = !1,
    keepMounted: x = !1,
    onBackdropClick: O,
    onClose: E,
    onTransitionEnter: M,
    onTransitionExited: A,
    open: d,
    slotProps: k = {},
    slots: _ = {},
    // eslint-disable-next-line react/prop-types
    theme: F,
    ...U
  } = r, N = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: g,
    disableEscapeKeyDown: f,
    disablePortal: C,
    disableRestoreFocus: T,
    disableScrollLock: v,
    hideBackdrop: w,
    keepMounted: x
  }, {
    getRootProps: W,
    getBackdropProps: ee,
    getTransitionProps: J,
    portalRef: oe,
    isTopModal: B,
    exited: K,
    hasTransition: re
  } = ay({
    ...N,
    rootRef: n
  }), Q = {
    ...N,
    exited: K
  }, $ = cy(Q), z = {};
  if (u.props.tabIndex === void 0 && (z.tabIndex = "-1"), re) {
    const {
      onEnter: L,
      onExited: fe
    } = J();
    z.onEnter = L, z.onExited = fe;
  }
  const H = {
    ...U,
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ..._
    },
    slotProps: {
      ...b,
      ...k
    }
  }, [D, Y] = _t("root", {
    elementType: uy,
    externalForwardedProps: H,
    getSlotProps: W,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: Q,
    className: he(l, $ == null ? void 0 : $.root, !Q.open && Q.exited && ($ == null ? void 0 : $.hidden))
  }), [Z, V] = _t("backdrop", {
    elementType: o,
    externalForwardedProps: H,
    additionalProps: s,
    getSlotProps: (L) => ee({
      ...L,
      onClick: (fe) => {
        O && O(fe), L != null && L.onClick && L.onClick(fe);
      }
    }),
    className: he(s == null ? void 0 : s.className, $ == null ? void 0 : $.backdrop),
    ownerState: Q
  }), ne = ht(s == null ? void 0 : s.ref, V.ref);
  return !x && !d && (!re || K) ? null : /* @__PURE__ */ P.jsx(ko, {
    ref: oe,
    container: m,
    disablePortal: C,
    children: /* @__PURE__ */ P.jsxs(D, {
      ...Y,
      children: [!w && o ? /* @__PURE__ */ P.jsx(Z, {
        ...V,
        ref: ne
      }) : null, /* @__PURE__ */ P.jsx(Oo, {
        disableEnforceFocus: g,
        disableAutoFocus: y,
        disableRestoreFocus: T,
        isEnabled: B,
        open: d,
        children: /* @__PURE__ */ R.cloneElement(u, z)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Zc.propTypes = {
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
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * A single child content element.
   */
  children: Vr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Backdrop: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
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
  container: i.oneOfType([kr, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function fy(e) {
  return Ue("MuiPaper", e);
}
He("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const py = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return et(s, fy, o);
}, my = me("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(dt(({
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
}))), Qc = /* @__PURE__ */ R.forwardRef(function(t, n) {
  var b;
  const r = ot({
    props: t,
    name: "MuiPaper"
  }), o = Cs(), {
    className: s,
    component: a = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...m
  } = r, p = {
    ...r,
    component: a,
    elevation: l,
    square: c,
    variant: u
  }, h = py(p);
  return process.env.NODE_ENV !== "production" && o.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ P.jsx(my, {
    as: a,
    ownerState: p,
    className: he(h.root, s),
    ref: n,
    ...m,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (b = o.vars.overlays) == null ? void 0 : b[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Or("#fff", qi(l))}, ${Or("#fff", qi(l))})`
        }
      },
      ...m.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Wr(Cc, (e) => {
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
  square: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: i.oneOfType([i.oneOf(["elevation", "outlined"]), i.string])
});
function hy(e) {
  return Ue("MuiPopover", e);
}
He("MuiPopover", ["root", "paper"]);
function qa(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Ga(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ka(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function go(e) {
  return typeof e == "function" ? e() : e;
}
const gy = (e) => {
  const {
    classes: t
  } = e;
  return et({
    root: ["root"],
    paper: ["paper"]
  }, hy, t);
}, by = me(Zc, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Jc = me(Qc, {
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
}), eu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: m,
    container: p,
    elevation: h = 8,
    marginThreshold: b = 16,
    open: y,
    PaperProps: g = {},
    slots: f = {},
    slotProps: C = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = Ro,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: x,
      ...O
    } = {},
    disableScrollLock: E = !1,
    ...M
  } = r, A = (C == null ? void 0 : C.paper) ?? g, d = R.useRef(), k = {
    ...r,
    anchorOrigin: a,
    anchorReference: c,
    elevation: h,
    marginThreshold: b,
    externalPaperSlotProps: A,
    transformOrigin: T,
    TransitionComponent: v,
    transitionDuration: w,
    TransitionProps: O
  }, _ = gy(k), F = R.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const V = go(s), ne = V && V.nodeType === 1 ? V : jt(d.current).body, L = ne.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const fe = ne.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && fe.top === 0 && fe.left === 0 && fe.right === 0 && fe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: L.top + qa(L, a.vertical),
      left: L.left + Ga(L, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), U = R.useCallback((V) => ({
    vertical: qa(V, T.vertical),
    horizontal: Ga(V, T.horizontal)
  }), [T.horizontal, T.vertical]), N = R.useCallback((V) => {
    const ne = {
      width: V.offsetWidth,
      height: V.offsetHeight
    }, L = U(ne);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ka(L)
      };
    const fe = F();
    let I = fe.top - L.vertical, ae = fe.left - L.horizontal;
    const ge = I + ne.height, Re = ae + ne.width, Ee = an(go(s)), be = Ee.innerHeight - b, st = Ee.innerWidth - b;
    if (b !== null && I < b) {
      const xe = I - b;
      I -= xe, L.vertical += xe;
    } else if (b !== null && ge > be) {
      const xe = ge - be;
      I -= xe, L.vertical += xe;
    }
    if (process.env.NODE_ENV !== "production" && ne.height > be && ne.height && be && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ne.height - be}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), b !== null && ae < b) {
      const xe = ae - b;
      ae -= xe, L.horizontal += xe;
    } else if (Re > st) {
      const xe = Re - st;
      ae -= xe, L.horizontal += xe;
    }
    return {
      top: `${Math.round(I)}px`,
      left: `${Math.round(ae)}px`,
      transformOrigin: Ka(L)
    };
  }, [s, c, F, U, b]), [W, ee] = R.useState(y), J = R.useCallback(() => {
    const V = d.current;
    if (!V)
      return;
    const ne = N(V);
    ne.top !== null && V.style.setProperty("top", ne.top), ne.left !== null && (V.style.left = ne.left), V.style.transformOrigin = ne.transformOrigin, ee(!0);
  }, [N]);
  R.useEffect(() => (E && window.addEventListener("scroll", J), () => window.removeEventListener("scroll", J)), [s, E, J]);
  const oe = (V, ne) => {
    x && x(V, ne), J();
  }, B = () => {
    ee(!1);
  };
  R.useEffect(() => {
    y && J();
  }), R.useImperativeHandle(o, () => y ? {
    updatePosition: () => {
      J();
    }
  } : null, [y, J]), R.useEffect(() => {
    if (!y)
      return;
    const V = hc(() => {
      J();
    }), ne = an(s);
    return ne.addEventListener("resize", V), () => {
      V.clear(), ne.removeEventListener("resize", V);
    };
  }, [s, y, J]);
  let K = w;
  w === "auto" && !v.muiSupportAuto && (K = void 0);
  const re = p || (s ? jt(go(s)).body : void 0), Q = {
    slots: f,
    slotProps: {
      ...C,
      paper: A
    }
  }, [$, z] = _t("paper", {
    elementType: Jc,
    externalForwardedProps: Q,
    additionalProps: {
      elevation: h,
      className: he(_.paper, A == null ? void 0 : A.className),
      style: W ? A.style : {
        ...A.style,
        opacity: 0
      }
    },
    ownerState: k
  }), [H, {
    slotProps: D,
    ...Y
  }] = _t("root", {
    elementType: by,
    externalForwardedProps: Q,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: re,
      open: y
    },
    ownerState: k,
    className: he(_.root, m)
  }), Z = ht(d, z.ref);
  return /* @__PURE__ */ P.jsx(H, {
    ...Y,
    ...!Gi(H) && {
      slotProps: D,
      disableScrollLock: E
    },
    ...M,
    ref: n,
    children: /* @__PURE__ */ P.jsx(v, {
      appear: !0,
      in: y,
      onEntering: oe,
      onExited: B,
      timeout: K,
      ...O,
      children: /* @__PURE__ */ P.jsx($, {
        ...z,
        ref: Z,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (eu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Lt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Wr(i.oneOfType([kr, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = go(e.anchorEl);
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
  anchorOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: i.shape({
    left: i.number.isRequired,
    top: i.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: i.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([kr, i.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Cc,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: i.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: i.shape({
    component: ys
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
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
  transformOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: i.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object
});
function yy(e) {
  return Ue("MuiMenu", e);
}
He("MuiMenu", ["root", "paper", "list"]);
const vy = {
  vertical: "top",
  horizontal: "right"
}, xy = {
  vertical: "top",
  horizontal: "left"
}, wy = (e) => {
  const {
    classes: t
  } = e;
  return et({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, yy, t);
}, Cy = me(eu, {
  shouldForwardProp: (e) => Ft(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Sy = me(Jc, {
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
}), Ey = me(Hc, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), tu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: s,
    className: a,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: m,
    PaperProps: p = {},
    PopoverClasses: h,
    transitionDuration: b = "auto",
    TransitionProps: {
      onEntering: y,
      ...g
    } = {},
    variant: f = "selectedMenu",
    slots: C = {},
    slotProps: T = {},
    ...v
  } = r, w = eg(), x = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: p,
    transitionDuration: b,
    TransitionProps: g,
    variant: f
  }, O = wy(x), E = o && !l && m, M = R.useRef(null), A = (W, ee) => {
    M.current && M.current.adjustStyleForScrollbar(W, {
      direction: w ? "rtl" : "ltr"
    }), y && y(W, ee);
  }, d = (W) => {
    W.key === "Tab" && (W.preventDefault(), u && u(W, "tabKeyDown"));
  };
  let k = -1;
  R.Children.map(s, (W, ee) => {
    /* @__PURE__ */ R.isValidElement(W) && (process.env.NODE_ENV !== "production" && Ss.isFragment(W) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), W.props.disabled || (f === "selectedMenu" && W.props.selected || k === -1) && (k = ee));
  });
  const _ = C.paper ?? Sy, F = T.paper ?? p, U = Ra({
    elementType: C.root,
    externalSlotProps: T.root,
    ownerState: x,
    className: [O.root, a]
  }), N = Ra({
    elementType: _,
    externalSlotProps: F,
    ownerState: x,
    className: O.paper
  });
  return /* @__PURE__ */ P.jsx(Cy, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? vy : xy,
    slots: {
      paper: _,
      root: C.root
    },
    slotProps: {
      root: U,
      paper: N
    },
    open: m,
    ref: n,
    transitionDuration: b,
    TransitionProps: {
      onEntering: A,
      ...g
    },
    ownerState: x,
    ...v,
    classes: h,
    children: /* @__PURE__ */ P.jsx(Ey, {
      onKeyDown: d,
      actions: M,
      autoFocus: o && (k === -1 || l),
      autoFocusItem: E,
      variant: f,
      ...c,
      className: he(O.list, c.className),
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (tu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([kr, i.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: i.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: i.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: i.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: i.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: i.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function Ty(e) {
  return Ue("MuiNativeSelect", e);
}
const Rs = He("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Ry = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${Le(n)}`, s && "iconOpen", r && "disabled"]
  };
  return et(l, Ty, t);
}, nu = me("select")(({
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
  [`&.${Rs.disabled}`]: {
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
})), Oy = me(nu, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Ft,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Rs.multiple}`]: t.multiple
    }];
  }
})({}), ru = me("svg")(({
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
  [`&.${Rs.disabled}`]: {
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
})), ky = me(ru, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Le(n.variant)}`], n.open && t.iconOpen];
  }
})({}), ou = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard",
    ...u
  } = t, m = {
    ...t,
    disabled: o,
    variant: c,
    error: s
  }, p = Ry(m);
  return /* @__PURE__ */ P.jsxs(R.Fragment, {
    children: [/* @__PURE__ */ P.jsx(Oy, {
      ownerState: m,
      className: he(p.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ P.jsx(ky, {
      as: a,
      ownerState: m,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (ou.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Lt,
  /**
   * @ignore
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
function Py(e) {
  return Ue("MuiSelect", e);
}
const fr = He("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Xa;
const Iy = me(nu, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${fr.select}`]: t.select
      },
      {
        [`&.${fr.select}`]: t[n.variant]
      },
      {
        [`&.${fr.error}`]: t.error
      },
      {
        [`&.${fr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${fr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), My = me(ru, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Le(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Ny = me("input", {
  shouldForwardProp: (e) => $c(e) && e !== "classes",
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
function Za(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function $y(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Dy = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${Le(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return et(l, Py, t);
}, iu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  var yn;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: m,
    disabled: p,
    displayEmpty: h,
    error: b = !1,
    IconComponent: y,
    inputRef: g,
    labelId: f,
    MenuProps: C = {},
    multiple: T,
    name: v,
    onBlur: w,
    onChange: x,
    onClose: O,
    onFocus: E,
    onOpen: M,
    open: A,
    readOnly: d,
    renderValue: k,
    SelectDisplayProps: _ = {},
    tabIndex: F,
    // catching `type` from Input which makes no sense for SelectInput
    type: U,
    value: N,
    variant: W = "standard",
    ...ee
  } = t, [J, oe] = Ui({
    controlled: N,
    default: m,
    name: "Select"
  }), [B, K] = Ui({
    controlled: A,
    default: u,
    name: "Select"
  }), re = R.useRef(null), Q = R.useRef(null), [$, z] = R.useState(null), {
    current: H
  } = R.useRef(A != null), [D, Y] = R.useState(), Z = ht(n, g), V = R.useCallback((ce) => {
    Q.current = ce, ce && z(ce);
  }, []), ne = $ == null ? void 0 : $.parentNode;
  R.useImperativeHandle(Z, () => ({
    focus: () => {
      Q.current.focus();
    },
    node: re.current,
    value: J
  }), [J]), R.useEffect(() => {
    u && B && $ && !H && (Y(a ? null : ne.clientWidth), Q.current.focus());
  }, [$, a]), R.useEffect(() => {
    s && Q.current.focus();
  }, [s]), R.useEffect(() => {
    if (!f)
      return;
    const ce = jt(Q.current).getElementById(f);
    if (ce) {
      const de = () => {
        getSelection().isCollapsed && Q.current.focus();
      };
      return ce.addEventListener("click", de), () => {
        ce.removeEventListener("click", de);
      };
    }
  }, [f]);
  const L = (ce, de) => {
    ce ? M && M(de) : O && O(de), H || (Y(a ? null : ne.clientWidth), K(ce));
  }, fe = (ce) => {
    ce.button === 0 && (ce.preventDefault(), Q.current.focus(), L(!0, ce));
  }, I = (ce) => {
    L(!1, ce);
  }, ae = R.Children.toArray(l), ge = (ce) => {
    const de = ae.find((qe) => qe.props.value === ce.target.value);
    de !== void 0 && (oe(de.props.value), x && x(ce, de));
  }, Re = (ce) => (de) => {
    let qe;
    if (de.currentTarget.hasAttribute("tabindex")) {
      if (T) {
        qe = Array.isArray(J) ? J.slice() : [];
        const Qe = J.indexOf(ce.props.value);
        Qe === -1 ? qe.push(ce.props.value) : qe.splice(Qe, 1);
      } else
        qe = ce.props.value;
      if (ce.props.onClick && ce.props.onClick(de), J !== qe && (oe(qe), x)) {
        const Qe = de.nativeEvent || de, vt = new Qe.constructor(Qe.type, Qe);
        Object.defineProperty(vt, "target", {
          writable: !0,
          value: {
            value: qe,
            name: v
          }
        }), x(vt, ce);
      }
      T || L(!1, de);
    }
  }, Ee = (ce) => {
    d || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(ce.key) && (ce.preventDefault(), L(!0, ce));
  }, be = $ !== null && B, st = (ce) => {
    !be && w && (Object.defineProperty(ce, "target", {
      writable: !0,
      value: {
        value: J,
        name: v
      }
    }), w(ce));
  };
  delete ee["aria-invalid"];
  let xe, tt;
  const se = [];
  let Ye = !1, Tt = !1;
  (So({
    value: J
  }) || h) && (k ? xe = k(J) : Ye = !0);
  const Rt = ae.map((ce) => {
    if (!/* @__PURE__ */ R.isValidElement(ce))
      return null;
    process.env.NODE_ENV !== "production" && Ss.isFragment(ce) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let de;
    if (T) {
      if (!Array.isArray(J))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Qt(2));
      de = J.some((qe) => Za(qe, ce.props.value)), de && Ye && se.push(ce.props.children);
    } else
      de = Za(J, ce.props.value), de && Ye && (tt = ce.props.children);
    return de && (Tt = !0), /* @__PURE__ */ R.cloneElement(ce, {
      "aria-selected": de ? "true" : "false",
      onClick: Re(ce),
      onKeyUp: (qe) => {
        qe.key === " " && qe.preventDefault(), ce.props.onKeyUp && ce.props.onKeyUp(qe);
      },
      role: "option",
      selected: de,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ce.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && R.useEffect(() => {
    if (!Tt && !T && J !== "") {
      const ce = ae.map((de) => de.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${J}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ce.filter((de) => de != null).map((de) => `\`${de}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Tt, ae, T, v, J]), Ye && (T ? se.length === 0 ? xe = null : xe = se.reduce((ce, de, qe) => (ce.push(de), qe < se.length - 1 && ce.push(", "), ce), []) : xe = tt);
  let at = D;
  !a && H && $ && (at = ne.clientWidth);
  let zt;
  typeof F < "u" ? zt = F : zt = p ? null : 0;
  const lt = _.id || (v ? `mui-component-select-${v}` : void 0), Ot = {
    ...t,
    variant: W,
    value: J,
    open: be,
    error: b
  }, we = Dy(Ot), gt = {
    ...C.PaperProps,
    ...(yn = C.slotProps) == null ? void 0 : yn.paper
  }, Wt = gc();
  return /* @__PURE__ */ P.jsxs(R.Fragment, {
    children: [/* @__PURE__ */ P.jsx(Iy, {
      as: "div",
      ref: V,
      tabIndex: zt,
      role: "combobox",
      "aria-controls": Wt,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": be ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [f, lt].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: Ee,
      onMouseDown: p || d ? null : fe,
      onBlur: st,
      onFocus: E,
      ..._,
      ownerState: Ot,
      className: he(_.className, we.select, c),
      id: lt,
      children: $y(xe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Xa || (Xa = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : xe
    }), /* @__PURE__ */ P.jsx(Ny, {
      "aria-invalid": b,
      value: Array.isArray(J) ? J.join(",") : J,
      name: v,
      ref: re,
      "aria-hidden": !0,
      onChange: ge,
      tabIndex: -1,
      disabled: p,
      className: we.nativeInput,
      autoFocus: s,
      ...ee,
      ownerState: Ot
    }), /* @__PURE__ */ P.jsx(My, {
      as: y,
      className: we.icon,
      ownerState: Ot
    }), /* @__PURE__ */ P.jsx(tu, {
      id: `menu-${v || ""}`,
      anchorEl: ne,
      open: be,
      onClose: I,
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
        "aria-labelledby": f,
        role: "listbox",
        "aria-multiselectable": T ? "true" : void 0,
        disableListWrap: !0,
        id: Wt,
        ...C.MenuListProps
      },
      slotProps: {
        ...C.slotProps,
        paper: {
          ...gt,
          style: {
            minWidth: at,
            ...gt != null ? gt.style : null
          }
        }
      },
      children: Rt
    })]
  });
});
process.env.NODE_ENV !== "production" && (iu.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * @ignore
   */
  "aria-label": i.string,
  /**
   * @ignore
   */
  autoFocus: i.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Lt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * @ignore
   */
  readOnly: i.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  type: i.any,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
const Ay = oi(/* @__PURE__ */ P.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Fy = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Os = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Ft(e) && e !== "variant",
  slot: "Root"
}, _y = me(Ir, Os)(""), jy = me($r, Os)(""), Ly = me(Nr, Os)(""), ks = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: m = Ay,
    id: p,
    input: h,
    inputProps: b,
    label: y,
    labelId: g,
    MenuProps: f,
    multiple: C = !1,
    native: T = !1,
    onClose: v,
    onOpen: w,
    open: x,
    renderValue: O,
    SelectDisplayProps: E,
    variant: M = "outlined",
    ...A
  } = r, d = T ? ou : iu, k = Pn(), _ = Jn({
    props: r,
    muiFormControl: k,
    states: ["variant", "error"]
  }), F = _.variant || M, U = {
    ...r,
    variant: F,
    classes: a
  }, N = Fy(U), {
    root: W,
    ...ee
  } = N, J = h || {
    standard: /* @__PURE__ */ P.jsx(_y, {
      ownerState: U
    }),
    outlined: /* @__PURE__ */ P.jsx(jy, {
      label: y,
      ownerState: U
    }),
    filled: /* @__PURE__ */ P.jsx(Ly, {
      ownerState: U
    })
  }[F], oe = ht(n, Ur(J));
  return /* @__PURE__ */ P.jsx(R.Fragment, {
    children: /* @__PURE__ */ R.cloneElement(J, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: d,
      inputProps: {
        children: s,
        error: _.error,
        IconComponent: m,
        variant: F,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C,
        ...T ? {
          id: p
        } : {
          autoWidth: o,
          defaultOpen: c,
          displayEmpty: u,
          labelId: g,
          MenuProps: f,
          onClose: v,
          onOpen: w,
          open: x,
          renderValue: O,
          SelectDisplayProps: {
            id: p,
            ...E
          }
        },
        ...b,
        classes: b ? mt(ee, b.classes) : ee,
        ...h ? h.props.inputProps : {}
      },
      ...(C && T || u) && F === "outlined" ? {
        notched: !0
      } : {},
      ref: oe,
      className: he(J.props.className, l, N.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: F
      },
      ...A
    })
  });
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
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
  displayEmpty: i.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: i.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: i.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: i.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: i.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: i.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: i.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: i.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: i.oneOfType([i.oneOf([""]), i.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
ks.muiName = "Select";
function By(e) {
  return Ue("MuiTextField", e);
}
He("MuiTextField", ["root"]);
const zy = {
  standard: Ir,
  filled: Nr,
  outlined: $r
}, Wy = (e) => {
  const {
    classes: t
  } = e;
  return et({
    root: ["root"]
  }, By, t);
}, Vy = me(Bc, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), su = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: m = !1,
    error: p = !1,
    FormHelperTextProps: h,
    fullWidth: b = !1,
    helperText: y,
    id: g,
    InputLabelProps: f,
    inputProps: C,
    InputProps: T,
    inputRef: v,
    label: w,
    maxRows: x,
    minRows: O,
    multiline: E = !1,
    name: M,
    onBlur: A,
    onChange: d,
    onFocus: k,
    placeholder: _,
    required: F = !1,
    rows: U,
    select: N = !1,
    SelectProps: W,
    slots: ee = {},
    slotProps: J = {},
    type: oe,
    value: B,
    variant: K = "outlined",
    ...re
  } = r, Q = {
    ...r,
    autoFocus: s,
    color: c,
    disabled: m,
    error: p,
    fullWidth: b,
    multiline: E,
    required: F,
    select: N,
    variant: K
  }, $ = Wy(Q);
  process.env.NODE_ENV !== "production" && N && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const z = gc(g), H = y && z ? `${z}-helper-text` : void 0, D = w && z ? `${z}-label` : void 0, Y = zy[K], Z = {
    slots: ee,
    slotProps: {
      input: T,
      inputLabel: f,
      htmlInput: C,
      formHelperText: h,
      select: W,
      ...J
    }
  }, V = {}, ne = Z.slotProps.inputLabel;
  K === "outlined" && (ne && typeof ne.shrink < "u" && (V.notched = ne.shrink), V.label = w), N && ((!W || !W.native) && (V.id = void 0), V["aria-describedby"] = void 0);
  const [L, fe] = _t("input", {
    elementType: Y,
    externalForwardedProps: Z,
    additionalProps: V,
    ownerState: Q
  }), [I, ae] = _t("inputLabel", {
    elementType: Lc,
    externalForwardedProps: Z,
    ownerState: Q
  }), [ge, Re] = _t("htmlInput", {
    elementType: "input",
    externalForwardedProps: Z,
    ownerState: Q
  }), [Ee, be] = _t("formHelperText", {
    elementType: zc,
    externalForwardedProps: Z,
    ownerState: Q
  }), [st, xe] = _t("select", {
    elementType: ks,
    externalForwardedProps: Z,
    ownerState: Q
  }), tt = /* @__PURE__ */ P.jsx(L, {
    "aria-describedby": H,
    autoComplete: o,
    autoFocus: s,
    defaultValue: u,
    fullWidth: b,
    multiline: E,
    name: M,
    rows: U,
    maxRows: x,
    minRows: O,
    type: oe,
    value: B,
    id: z,
    inputRef: v,
    onBlur: A,
    onChange: d,
    onFocus: k,
    placeholder: _,
    inputProps: Re,
    slots: {
      input: ee.htmlInput ? ge : void 0
    },
    ...fe
  });
  return /* @__PURE__ */ P.jsxs(Vy, {
    className: he($.root, l),
    disabled: m,
    error: p,
    fullWidth: b,
    ref: n,
    required: F,
    color: c,
    variant: K,
    ownerState: Q,
    ...re,
    children: [w != null && w !== "" && /* @__PURE__ */ P.jsx(I, {
      htmlFor: z,
      id: D,
      ...ae,
      children: w
    }), N ? /* @__PURE__ */ P.jsx(st, {
      "aria-describedby": H,
      id: z,
      labelId: D,
      value: B,
      input: tt,
      ...xe,
      children: a
    }) : tt, y && /* @__PURE__ */ P.jsx(Ee, {
      id: H,
      ...be,
      children: y
    })]
  });
});
process.env.NODE_ENV !== "production" && (su.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * @ignore
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: i.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The helper text content.
   */
  helperText: i.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: i.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: i.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: i.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Lt,
  /**
   * The label content.
   */
  label: i.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: i.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: i.object,
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    formHelperText: i.oneOfType([i.func, i.object]),
    htmlInput: i.oneOfType([i.func, i.object]),
    input: i.oneOfType([i.func, i.object]),
    inputLabel: i.oneOfType([i.func, i.object]),
    select: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    formHelperText: i.elementType,
    htmlInput: i.elementType,
    input: i.elementType,
    inputLabel: i.elementType,
    select: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
const Uy = pn(su)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${it.gray800};

  & input {
    padding: 0.5rem;
  }

  & label,
  & label.Mui-focused {
    color: ${it.gray800};
  }

  & .MuiOutlinedInput-root {
    &:hover fieldset,
    fieldset,
    &.Mui-focused fieldset {
      border-color: ${it.gray400};
    }
  }
}
`, Ps = St.createContext({
  filters: {},
  setFilters: () => {
  }
}), Hy = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, o] = St.useState({});
  return /* @__PURE__ */ P.jsx(
    Ps.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? o
      },
      children: e
    }
  );
}, Yy = pn(Dc)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, Qa = (e) => e.stopPropagation(), Ja = ({ children: e, ...t }) => /* @__PURE__ */ P.jsxs(Yy, { children: [
  $l(t),
  e
] }), qy = (e) => (t) => {
  const { filters: n, setFilters: r } = fn(Ps), o = Ze(() => n[e.key], [n, e]), s = on(
    (a) => {
      r({ ...n, [e.key]: a.target.value });
    },
    [e]
  );
  return e.filterEnabled ? /* @__PURE__ */ P.jsx(Ja, { ...t, children: /* @__PURE__ */ P.jsx(
    Uy,
    {
      onClick: Qa,
      onKeyDown: Qa,
      value: o ?? "",
      onChange: s
    }
  ) }) : /* @__PURE__ */ P.jsx(Ja, { ...t });
}, Gy = {
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
}, Ky = (e, t, n) => {
  let r;
  const o = Gy[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Oi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Xy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Zy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Qy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Jy = {
  date: Oi({
    formats: Xy,
    defaultWidth: "full"
  }),
  time: Oi({
    formats: Zy,
    defaultWidth: "full"
  }),
  dateTime: Oi({
    formats: Qy,
    defaultWidth: "full"
  })
}, e0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, t0 = (e, t, n, r) => e0[e];
function pr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[l] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[l] || e.values[a];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const n0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, r0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, o0 = {
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
}, i0 = {
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
}, s0 = {
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
}, a0 = {
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
}, l0 = (e, t) => {
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
}, c0 = {
  ordinalNumber: l0,
  era: pr({
    values: n0,
    defaultWidth: "wide"
  }),
  quarter: pr({
    values: r0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: pr({
    values: o0,
    defaultWidth: "wide"
  }),
  day: pr({
    values: i0,
    defaultWidth: "wide"
  }),
  dayPeriod: pr({
    values: s0,
    defaultWidth: "wide",
    formattingValues: a0,
    defaultFormattingWidth: "wide"
  })
};
function mr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? d0(l, (p) => p.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      u0(l, (p) => p.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const m = t.slice(a.length);
    return { value: u, rest: m };
  };
}
function u0(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function d0(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function f0(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const l = t.slice(o.length);
    return { value: a, rest: l };
  };
}
const p0 = /^(\d+)(th|st|nd|rd)?/i, m0 = /\d+/i, h0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, g0 = {
  any: [/^b/i, /^(a|c)/i]
}, b0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, y0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, v0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, x0 = {
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
}, w0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, C0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, S0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, E0 = {
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
}, T0 = {
  ordinalNumber: f0({
    matchPattern: p0,
    parsePattern: m0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: mr({
    matchPatterns: h0,
    defaultMatchWidth: "wide",
    parsePatterns: g0,
    defaultParseWidth: "any"
  }),
  quarter: mr({
    matchPatterns: b0,
    defaultMatchWidth: "wide",
    parsePatterns: y0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: mr({
    matchPatterns: v0,
    defaultMatchWidth: "wide",
    parsePatterns: x0,
    defaultParseWidth: "any"
  }),
  day: mr({
    matchPatterns: w0,
    defaultMatchWidth: "wide",
    parsePatterns: C0,
    defaultParseWidth: "any"
  }),
  dayPeriod: mr({
    matchPatterns: S0,
    defaultMatchWidth: "any",
    parsePatterns: E0,
    defaultParseWidth: "any"
  })
}, R0 = {
  code: "en-US",
  formatDistance: Ky,
  formatLong: Jy,
  formatRelative: t0,
  localize: c0,
  match: T0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let O0 = {};
function Hr() {
  return O0;
}
const au = 6048e5, k0 = 864e5, el = Symbol.for("constructDateFrom");
function hn(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && el in e ? e[el](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Bt(e, t) {
  return hn(t || e, e);
}
function tl(e) {
  const t = Bt(e), n = new Date(
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
function P0(e, ...t) {
  const n = hn.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function nl(e, t) {
  const n = Bt(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function I0(e, t, n) {
  const [r, o] = P0(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = nl(r), a = nl(o), l = +s - tl(s), c = +a - tl(a);
  return Math.round((l - c) / k0);
}
function M0(e, t) {
  const n = Bt(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function N0(e, t) {
  const n = Bt(e, t == null ? void 0 : t.in);
  return I0(n, M0(n)) + 1;
}
function Dr(e, t) {
  var l, c, u, m;
  const n = Hr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((m = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = Bt(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Po(e, t) {
  return Dr(e, { ...t, weekStartsOn: 1 });
}
function lu(e, t) {
  const n = Bt(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = hn(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Po(o), a = hn(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const l = Po(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function $0(e, t) {
  const n = lu(e, t), r = hn(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Po(r);
}
function D0(e, t) {
  const n = Bt(e, t == null ? void 0 : t.in), r = +Po(n) - +$0(n);
  return Math.round(r / au) + 1;
}
function cu(e, t) {
  var m, p, h, b;
  const n = Bt(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Hr(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((b = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, a = hn((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const l = Dr(a, t), c = hn((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const u = Dr(c, t);
  return +n >= +l ? r + 1 : +n >= +u ? r : r - 1;
}
function A0(e, t) {
  var l, c, u, m;
  const n = Hr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((m = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, o = cu(e, t), s = hn((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), Dr(s, t);
}
function F0(e, t) {
  const n = Bt(e, t == null ? void 0 : t.in), r = +Dr(n, t) - +A0(n, t);
  return Math.round(r / au) + 1;
}
function Ae(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const dn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ae(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ae(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ae(e.getDate(), t.length);
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
    return Ae(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ae(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ae(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ae(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ae(o, t.length);
  }
}, Bn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, rl = {
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
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return dn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = cu(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return Ae(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Ae(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = lu(e);
    return Ae(n, t.length);
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
    return Ae(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Ae(r, 2);
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
        return Ae(r, 2);
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
        return dn.M(e, t);
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
        return Ae(r + 1, 2);
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
    const o = F0(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ae(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = D0(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ae(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : dn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = N0(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ae(r, t.length);
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
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(s);
      case "ee":
        return Ae(s, 2);
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(s);
      case "cc":
        return Ae(s, t.length);
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return Ae(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
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
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Bn.noon : r === 0 ? o = Bn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Bn.evening : r >= 12 ? o = Bn.afternoon : r >= 4 ? o = Bn.morning : o = Bn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
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
    return dn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : dn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ae(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ae(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : dn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : dn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return dn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return il(r);
      case "XXXX":
      case "XX":
        return En(r);
      case "XXXXX":
      case "XXX":
      default:
        return En(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return il(r);
      case "xxxx":
      case "xx":
        return En(r);
      case "xxxxx":
      case "xxx":
      default:
        return En(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ol(r, ":");
      case "OOOO":
      default:
        return "GMT" + En(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ol(r, ":");
      case "zzzz":
      default:
        return "GMT" + En(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Ae(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Ae(+e, t.length);
  }
};
function ol(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + Ae(s, 2);
}
function il(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ae(Math.abs(e) / 60, 2) : En(e, t);
}
function En(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ae(Math.trunc(r / 60), 2), s = Ae(r % 60, 2);
  return n + o + t + s;
}
const sl = (e, t) => {
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
}, uu = (e, t) => {
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
}, _0 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return sl(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", sl(r, t)).replace("{{time}}", uu(o, t));
}, j0 = {
  p: uu,
  P: _0
}, L0 = /^D+$/, B0 = /^Y+$/, z0 = ["D", "DD", "YY", "YYYY"];
function W0(e) {
  return L0.test(e);
}
function V0(e) {
  return B0.test(e);
}
function U0(e, t, n) {
  const r = H0(e, t, n);
  if (console.warn(r), z0.includes(e)) throw new RangeError(r);
}
function H0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function du(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function fu(e) {
  return !(!du(e) && typeof e != "number" || isNaN(+Bt(e)));
}
const Y0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, q0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, G0 = /^'([^]*?)'?$/, K0 = /''/g, X0 = /[a-zA-Z]/;
function Z0(e, t, n) {
  var m, p, h, b, y, g, f, C;
  const r = Hr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? R0, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((C = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = Bt(e, n == null ? void 0 : n.in);
  if (!fu(l))
    throw new RangeError("Invalid time value");
  let c = t.match(q0).map((T) => {
    const v = T[0];
    if (v === "p" || v === "P") {
      const w = j0[v];
      return w(T, o.formatLong);
    }
    return T;
  }).join("").match(Y0).map((T) => {
    if (T === "''")
      return { isToken: !1, value: "'" };
    const v = T[0];
    if (v === "'")
      return { isToken: !1, value: Q0(T) };
    if (rl[v])
      return { isToken: !0, value: T };
    if (v.match(X0))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: T };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(l, c));
  const u = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: o
  };
  return c.map((T) => {
    if (!T.isToken) return T.value;
    const v = T.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && V0(v) || !(n != null && n.useAdditionalDayOfYearTokens) && W0(v)) && U0(v, t, String(e));
    const w = rl[v[0]];
    return w(l, v, o.localize, u);
  }).join("");
}
function Q0(e) {
  const t = e.match(G0);
  return t ? t[1].replace(K0, "'") : e;
}
function J0() {
  return Object.assign({}, Hr());
}
function al(e, t, n) {
  const r = J0(), o = nv(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in o ? ev(o, t) : tv(o, t);
}
function ev(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function tv(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function nv(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function rv(e, t) {
  const n = lv(t);
  return "formatToParts" in n ? iv(n, e) : sv(n, e);
}
const ov = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function iv(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let o = 0; o < n.length; o++) {
      const s = ov[n[o].type];
      s !== void 0 && (r[s] = parseInt(n[o].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function sv(e, t) {
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
const ki = {}, ll = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), av = ll === "06/25/2014, 00:00:00" || ll === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function lv(e) {
  return ki[e] || (ki[e] = av ? new Intl.DateTimeFormat("en-US", {
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
  })), ki[e];
}
function pu(e, t, n, r, o, s, a) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, o, s, a), l;
}
const cl = 36e5, cv = 6e4, Pi = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Is(e, t, n) {
  if (!e)
    return 0;
  let r = Pi.timezoneZ.exec(e);
  if (r)
    return 0;
  let o, s;
  if (r = Pi.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), ul(o) ? -(o * cl) : NaN;
  if (r = Pi.timezoneHHMM.exec(e), r) {
    o = parseInt(r[2], 10);
    const a = parseInt(r[3], 10);
    return ul(o, a) ? (s = Math.abs(o) * cl + a * cv, r[1] === "+" ? -s : s) : NaN;
  }
  if (fv(e)) {
    t = new Date(t || Date.now());
    const a = n ? t : uv(t), l = Ji(a, e);
    return -(n ? l : dv(t, l, e));
  }
  return NaN;
}
function uv(e) {
  return pu(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Ji(e, t) {
  const n = rv(e, t), r = pu(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let o = e.getTime();
  const s = o % 1e3;
  return o -= s >= 0 ? s : 1e3 + s, r - o;
}
function dv(e, t, n) {
  let o = e.getTime() - t;
  const s = Ji(new Date(o), n);
  if (t === s)
    return t;
  o -= s - t;
  const a = Ji(new Date(o), n);
  return s === a ? s : Math.max(s, a);
}
function ul(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const dl = {};
function fv(e) {
  if (dl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), dl[e] = !0, !0;
  } catch {
    return !1;
  }
}
const pv = 60 * 1e3, mv = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = Ii(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return fl(r);
      case "XXXX":
      case "XX":
        return Wn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Wn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = Ii(n.timeZone, e);
    switch (t) {
      case "x":
        return fl(r);
      case "xxxx":
      case "xx":
        return Wn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Wn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = Ii(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + hv(r, ":");
      case "OOOO":
      default:
        return "GMT" + Wn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return al("short", e, n);
      case "zzzz":
      default:
        return al("long", e, n);
    }
  }
};
function Ii(e, t) {
  const n = e ? Is(e, t, !0) / pv : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function Io(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Wn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Io(Math.floor(r / 60), 2), s = Io(Math.floor(r % 60), 2);
  return n + o + t + s;
}
function fl(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Io(Math.abs(e) / 60, 2) : Wn(e, t);
}
function hv(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + Io(s, 2);
}
function pl(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const gv = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Mi = 36e5, ml = 6e4, bv = 2, yt = {
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
  timeZone: gv
};
function mu(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? bv : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = yv(e), { year: o, restDateString: s } = vv(r.date, n), a = xv(s, o);
  if (a === null || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (a) {
    const l = a.getTime();
    let c = 0, u;
    if (r.time && (c = wv(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (u = Is(r.timeZone || t.timeZone, new Date(l + c)), isNaN(u))
        return /* @__PURE__ */ new Date(NaN);
    } else
      u = pl(new Date(l + c)), u = pl(new Date(l + c + u));
    return new Date(l + c + u);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function yv(e) {
  const t = {};
  let n = yt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = yt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const o = yt.timeZone.exec(r);
    o ? (t.time = r.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = r;
  }
  return t;
}
function vv(e, t) {
  if (e) {
    const n = yt.YYY[t], r = yt.YYYYY[t];
    let o = yt.YYYY.exec(e) || r.exec(e);
    if (o) {
      const s = o[1];
      return {
        year: parseInt(s, 10),
        restDateString: e.slice(s.length)
      };
    }
    if (o = yt.YY.exec(e) || n.exec(e), o) {
      const s = o[1];
      return {
        year: parseInt(s, 10) * 100,
        restDateString: e.slice(s.length)
      };
    }
  }
  return {
    year: null
  };
}
function xv(e, t) {
  if (t === null)
    return null;
  let n, r, o;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let s = yt.MM.exec(e);
  if (s)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(s[1], 10) - 1, gl(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (s = yt.DDD.exec(e), s) {
    n = /* @__PURE__ */ new Date(0);
    const a = parseInt(s[1], 10);
    return Ev(t, a) ? (n.setUTCFullYear(t, 0, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (s = yt.MMDD.exec(e), s) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(s[1], 10) - 1;
    const a = parseInt(s[2], 10);
    return gl(t, r, a) ? (n.setUTCFullYear(t, r, a), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (s = yt.Www.exec(e), s)
    return o = parseInt(s[1], 10) - 1, bl(o) ? hl(t, o) : /* @__PURE__ */ new Date(NaN);
  if (s = yt.WwwD.exec(e), s) {
    o = parseInt(s[1], 10) - 1;
    const a = parseInt(s[2], 10) - 1;
    return bl(o, a) ? hl(t, o, a) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function wv(e) {
  let t, n, r = yt.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), Ni(t) ? t % 24 * Mi : NaN;
  if (r = yt.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), Ni(t, n) ? t % 24 * Mi + n * ml : NaN;
  if (r = yt.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const o = parseFloat(r[3].replace(",", "."));
    return Ni(t, n, o) ? t % 24 * Mi + n * ml + o * 1e3 : NaN;
  }
  return null;
}
function hl(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7, s = t * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + s), r;
}
const Cv = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Sv = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function hu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function gl(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = hu(e);
    if (r && n > Sv[t] || !r && n > Cv[t])
      return !1;
  }
  return !0;
}
function Ev(e, t) {
  if (t < 1)
    return !1;
  const n = hu(e);
  return !(n && t > 366 || !n && t > 365);
}
function bl(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Ni(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const Tv = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function Rv(e, t, n = {}) {
  t = String(t);
  const r = t.match(Tv);
  if (r) {
    const o = mu(n.originalDate || e, n);
    t = r.reduce(function(s, a) {
      if (a[0] === "'")
        return s;
      const l = s.indexOf(a), c = s[l - 1] === "'", u = s.replace(a, "'" + mv[a[0]](o, a, n) + "'");
      return c ? u.substring(0, l - 1) + u.substring(l + 1) : u;
    }, t);
  }
  return Z0(e, t, n);
}
function Ov(e, t, n) {
  e = mu(e, n);
  const r = Is(t, e, !0), o = new Date(e.getTime() - r), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), s.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), s;
}
function kv(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, Rv(Ov(e, t, { timeZone: r.timeZone }), n, r);
}
var gu = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.TEXT = "dd-MM-yyyy HH:mm", e.TEXT_WITHOUT_TIME = "dd-MM-yyyy", e))(gu || {});
const Pv = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'") => {
  if (!e)
    return "";
  const n = !du(e) && typeof e == "string" ? new Date(e) : e;
  if (!fu(n))
    return "--";
  const r = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return kv(e, r, t);
}, yl = (e) => e.trim().toLowerCase(), Iv = ({
  columns: e,
  selectionEnabled: t
}) => {
  const n = on((r) => {
    const o = () => {
      if (r.renderCell)
        return r.renderCell;
      if (r.type === Rn.DATE)
        return ({ row: a }) => Pv(a[r.key], gu.TEXT);
    }, s = () => r.renderHeaderCell ? r.renderHeaderCell : qy(r);
    return { ...r, renderCell: o(), renderHeaderCell: s() };
  }, []);
  return Ze(() => {
    const r = [];
    return t && r.push({
      ...Ld,
      minWidth: 50,
      maxWidth: 50
    }), r.push(...e.map((o) => n(o))), r;
  }, [e, n]);
};
class Mo {
  constructor() {
    ir(this, "mountEffect", () => {
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
    return new Mo();
  }
  static use() {
    const t = bc(Mo.create).current, [n, r] = R.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, R.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Nv(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Mv() {
  return Mo.use();
}
function Nv() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function bu(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [m, p] = R.useState(!1), h = he(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + o
  }, y = he(n.child, m && n.childLeaving, r && n.childPulsate);
  return !l && !m && p(!0), R.useEffect(() => {
    if (!l && c != null) {
      const g = setTimeout(c, u);
      return () => {
        clearTimeout(g);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ P.jsx("span", {
    className: h,
    style: b,
    children: /* @__PURE__ */ P.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (bu.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object.isRequired,
  className: i.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: i.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: i.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: i.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: i.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: i.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: i.number,
  /**
   * exit delay
   */
  timeout: i.number.isRequired
});
const Nt = He("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), es = 550, $v = 80, Dv = cs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Av = cs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Fv = cs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, _v = me("span", {
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
}), jv = me(bu, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Nt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Dv};
    animation-duration: ${es}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Nt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Nt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Nt.childLeaving} {
    opacity: 0;
    animation-name: ${Av};
    animation-duration: ${es}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Nt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Fv};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, yu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: a,
    ...l
  } = r, [c, u] = R.useState([]), m = R.useRef(0), p = R.useRef(null);
  R.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const h = R.useRef(!1), b = yc(), y = R.useRef(null), g = R.useRef(null), f = R.useCallback((w) => {
    const {
      pulsate: x,
      rippleX: O,
      rippleY: E,
      rippleSize: M,
      cb: A
    } = w;
    u((d) => [...d, /* @__PURE__ */ P.jsx(jv, {
      classes: {
        ripple: he(s.ripple, Nt.ripple),
        rippleVisible: he(s.rippleVisible, Nt.rippleVisible),
        ripplePulsate: he(s.ripplePulsate, Nt.ripplePulsate),
        child: he(s.child, Nt.child),
        childLeaving: he(s.childLeaving, Nt.childLeaving),
        childPulsate: he(s.childPulsate, Nt.childPulsate)
      },
      timeout: es,
      pulsate: x,
      rippleX: O,
      rippleY: E,
      rippleSize: M
    }, m.current)]), m.current += 1, p.current = A;
  }, [s]), C = R.useCallback((w = {}, x = {}, O = () => {
  }) => {
    const {
      pulsate: E = !1,
      center: M = o || x.pulsate,
      fakeElement: A = !1
      // For test purposes
    } = x;
    if ((w == null ? void 0 : w.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (h.current = !0);
    const d = A ? null : g.current, k = d ? d.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let _, F, U;
    if (M || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      _ = Math.round(k.width / 2), F = Math.round(k.height / 2);
    else {
      const {
        clientX: N,
        clientY: W
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      _ = Math.round(N - k.left), F = Math.round(W - k.top);
    }
    if (M)
      U = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), U % 2 === 0 && (U += 1);
    else {
      const N = Math.max(Math.abs((d ? d.clientWidth : 0) - _), _) * 2 + 2, W = Math.max(Math.abs((d ? d.clientHeight : 0) - F), F) * 2 + 2;
      U = Math.sqrt(N ** 2 + W ** 2);
    }
    w != null && w.touches ? y.current === null && (y.current = () => {
      f({
        pulsate: E,
        rippleX: _,
        rippleY: F,
        rippleSize: U,
        cb: O
      });
    }, b.start($v, () => {
      y.current && (y.current(), y.current = null);
    })) : f({
      pulsate: E,
      rippleX: _,
      rippleY: F,
      rippleSize: U,
      cb: O
    });
  }, [o, f, b]), T = R.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), v = R.useCallback((w, x) => {
    if (b.clear(), (w == null ? void 0 : w.type) === "touchend" && y.current) {
      y.current(), y.current = null, b.start(0, () => {
        v(w, x);
      });
      return;
    }
    y.current = null, u((O) => O.length > 0 ? O.slice(1) : O), p.current = x;
  }, [b]);
  return R.useImperativeHandle(n, () => ({
    pulsate: T,
    start: C,
    stop: v
  }), [T, C, v]), /* @__PURE__ */ P.jsx(_v, {
    className: he(Nt.root, s.root, a),
    ref: g,
    ...l,
    children: /* @__PURE__ */ P.jsx(Ts, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (yu.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string
});
function Lv(e) {
  return Ue("MuiButtonBase", e);
}
const Bv = He("MuiButtonBase", ["root", "disabled", "focusVisible"]), zv = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = et({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Lv, o);
  return n && r && (a.root += ` ${r}`), a;
}, Wv = me("button", {
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
  [`&.${Bv.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), vu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: m = !1,
    disableTouchRipple: p = !1,
    focusRipple: h = !1,
    focusVisibleClassName: b,
    LinkComponent: y = "a",
    onBlur: g,
    onClick: f,
    onContextMenu: C,
    onDragLeave: T,
    onFocus: v,
    onFocusVisible: w,
    onKeyDown: x,
    onKeyUp: O,
    onMouseDown: E,
    onMouseLeave: M,
    onMouseUp: A,
    onTouchEnd: d,
    onTouchMove: k,
    onTouchStart: _,
    tabIndex: F = 0,
    TouchRippleProps: U,
    touchRippleRef: N,
    type: W,
    ...ee
  } = r, J = R.useRef(null), oe = Mv(), B = ht(oe.ref, N), [K, re] = R.useState(!1);
  u && K && re(!1), R.useImperativeHandle(o, () => ({
    focusVisible: () => {
      re(!0), J.current.focus();
    }
  }), []);
  const Q = oe.shouldMount && !m && !u;
  R.useEffect(() => {
    K && h && !m && oe.pulsate();
  }, [m, h, K, oe]);
  function $(se, Ye, Tt = p) {
    return Vn((Rt) => (Ye && Ye(Rt), Tt || oe[se](Rt), !0));
  }
  const z = $("start", E), H = $("stop", C), D = $("stop", T), Y = $("stop", A), Z = $("stop", (se) => {
    K && se.preventDefault(), M && M(se);
  }), V = $("start", _), ne = $("stop", d), L = $("stop", k), fe = $("stop", (se) => {
    Ea(se.target) || re(!1), g && g(se);
  }, !1), I = Vn((se) => {
    J.current || (J.current = se.currentTarget), Ea(se.target) && (re(!0), w && w(se)), v && v(se);
  }), ae = () => {
    const se = J.current;
    return c && c !== "button" && !(se.tagName === "A" && se.href);
  }, ge = Vn((se) => {
    h && !se.repeat && K && se.key === " " && oe.stop(se, () => {
      oe.start(se);
    }), se.target === se.currentTarget && ae() && se.key === " " && se.preventDefault(), x && x(se), se.target === se.currentTarget && ae() && se.key === "Enter" && !u && (se.preventDefault(), f && f(se));
  }), Re = Vn((se) => {
    h && se.key === " " && K && !se.defaultPrevented && oe.stop(se, () => {
      oe.pulsate(se);
    }), O && O(se), f && se.target === se.currentTarget && ae() && se.key === " " && !se.defaultPrevented && f(se);
  });
  let Ee = c;
  Ee === "button" && (ee.href || ee.to) && (Ee = y);
  const be = {};
  Ee === "button" ? (be.type = W === void 0 ? "button" : W, be.disabled = u) : (!ee.href && !ee.to && (be.role = "button"), u && (be["aria-disabled"] = u));
  const st = ht(n, J), xe = {
    ...r,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: m,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: F,
    focusVisible: K
  }, tt = zv(xe);
  return /* @__PURE__ */ P.jsxs(Wv, {
    as: Ee,
    className: he(tt.root, l),
    ownerState: xe,
    onBlur: fe,
    onClick: f,
    onContextMenu: H,
    onFocus: I,
    onKeyDown: ge,
    onKeyUp: Re,
    onMouseDown: z,
    onMouseLeave: Z,
    onMouseUp: Y,
    onDragLeave: D,
    onTouchEnd: ne,
    onTouchMove: L,
    onTouchStart: V,
    ref: st,
    tabIndex: u ? -1 : F,
    type: W,
    ...be,
    ...ee,
    children: [a, Q ? /* @__PURE__ */ P.jsx(yu, {
      ref: B,
      center: s,
      ...U
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (vu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Lt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ys,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: i.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  href: i.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: i.elementType,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onContextMenu: i.func,
  /**
   * @ignore
   */
  onDragLeave: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * @ignore
   */
  onMouseDown: i.func,
  /**
   * @ignore
   */
  onMouseLeave: i.func,
  /**
   * @ignore
   */
  onMouseUp: i.func,
  /**
   * @ignore
   */
  onTouchEnd: i.func,
  /**
   * @ignore
   */
  onTouchMove: i.func,
  /**
   * @ignore
   */
  onTouchStart: i.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: i.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: i.oneOfType([i.func, i.shape({
    current: i.shape({
      pulsate: i.func.isRequired,
      start: i.func.isRequired,
      stop: i.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string])
});
function Vv(e) {
  return Ue("PrivateSwitchBase", e);
}
He("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Uv = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, s = {
    root: ["root", n && "checked", r && "disabled", o && `edge${Le(o)}`],
    input: ["input"]
  };
  return et(s, Vv, t);
}, Hv = me(vu)({
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
}), Yv = me("input", {
  shouldForwardProp: Ft
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
}), xu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: o,
    checkedIcon: s,
    className: a,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: m = !1,
    icon: p,
    id: h,
    inputProps: b,
    inputRef: y,
    name: g,
    onBlur: f,
    onChange: C,
    onFocus: T,
    readOnly: v,
    required: w = !1,
    tabIndex: x,
    type: O,
    value: E,
    ...M
  } = t, [A, d] = Ui({
    controlled: o,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), k = Pn(), _ = (oe) => {
    T && T(oe), k && k.onFocus && k.onFocus(oe);
  }, F = (oe) => {
    f && f(oe), k && k.onBlur && k.onBlur(oe);
  }, U = (oe) => {
    if (oe.nativeEvent.defaultPrevented)
      return;
    const B = oe.target.checked;
    d(B), C && C(oe, B);
  };
  let N = c;
  k && typeof N > "u" && (N = k.disabled);
  const W = O === "checkbox" || O === "radio", ee = {
    ...t,
    checked: A,
    disabled: N,
    disableFocusRipple: u,
    edge: m
  }, J = Uv(ee);
  return /* @__PURE__ */ P.jsxs(Hv, {
    component: "span",
    className: he(J.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: N,
    tabIndex: null,
    role: void 0,
    onFocus: _,
    onBlur: F,
    ownerState: ee,
    ref: n,
    ...M,
    children: [/* @__PURE__ */ P.jsx(Yv, {
      autoFocus: r,
      checked: o,
      defaultChecked: l,
      className: J.input,
      disabled: N,
      id: W ? h : void 0,
      name: g,
      onChange: U,
      readOnly: v,
      ref: y,
      required: w,
      ownerState: ee,
      tabIndex: x,
      type: O,
      ...O === "checkbox" && E === void 0 ? {} : {
        value: E
      },
      ...b
    }), A ? s : p]
  });
});
process.env.NODE_ENV !== "production" && (xu.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: i.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: i.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * @ignore
   */
  defaultChecked: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: i.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: i.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Lt,
  /*
   * @ignore
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * The input component prop `type`.
   */
  type: i.string.isRequired,
  /**
   * The value of the component.
   */
  value: i.any
});
const qv = oi(/* @__PURE__ */ P.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Gv = oi(/* @__PURE__ */ P.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Kv = oi(/* @__PURE__ */ P.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function Xv(e) {
  return Ue("MuiCheckbox", e);
}
const $i = He("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Zv = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: o
  } = e, s = {
    root: ["root", n && "indeterminate", `color${Le(r)}`, `size${Le(o)}`]
  }, a = et(s, Xv, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, Qv = me(xu, {
  shouldForwardProp: (e) => Ft(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${Le(n.size)}`], n.color !== "default" && t[`color${Le(n.color)}`]];
  }
})(dt(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Or(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Xn()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Or(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Xn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${$i.checked}, &.${$i.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${$i.disabled}`]: {
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
}))), Jv = /* @__PURE__ */ P.jsx(Gv, {}), ex = /* @__PURE__ */ P.jsx(qv, {}), tx = /* @__PURE__ */ P.jsx(Kv, {}), wu = /* @__PURE__ */ R.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: o = Jv,
    color: s = "primary",
    icon: a = ex,
    indeterminate: l = !1,
    indeterminateIcon: c = tx,
    inputProps: u,
    size: m = "medium",
    disableRipple: p = !1,
    className: h,
    ...b
  } = r, y = l ? c : a, g = l ? c : o, f = {
    ...r,
    disableRipple: p,
    color: s,
    indeterminate: l,
    size: m
  }, C = Zv(f);
  return /* @__PURE__ */ P.jsx(Qv, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": l,
      ...u
    },
    icon: /* @__PURE__ */ R.cloneElement(y, {
      fontSize: y.props.fontSize ?? m
    }),
    checkedIcon: /* @__PURE__ */ R.cloneElement(g, {
      fontSize: g.props.fontSize ?? m
    }),
    ownerState: f,
    ref: n,
    className: he(C.root, h),
    disableRipple: p,
    ...b,
    classes: C
  });
});
process.env.NODE_ENV !== "production" && (wu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: i.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: i.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: i.node,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: i.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: i.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Lt,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: i.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: i.any
});
const nx = pn(wu)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${it.primary500};
    }
`;
var rx = {
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
function ox(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return rx[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Di(e) {
  var t = ox(e);
  return "".concat(t.value).concat(t.unit);
}
var ix = function(e, t, n) {
  var r = "react-spinners-".concat(e, "-").concat(n);
  if (typeof window > "u" || !window.document)
    return r;
  var o = document.createElement("style");
  document.head.appendChild(o);
  var s = o.sheet, a = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
  return s && s.insertRule(a, 0), r;
}, No = function() {
  return No = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, No.apply(this, arguments);
}, sx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, ax = ix("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function lx(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, o = r === void 0 ? "#000000" : r, s = e.speedMultiplier, a = s === void 0 ? 1 : s, l = e.cssOverride, c = l === void 0 ? {} : l, u = e.size, m = u === void 0 ? 15 : u, p = e.margin, h = p === void 0 ? 2 : p, b = sx(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), y = No({ display: "inherit" }, c), g = function(f) {
    return {
      backgroundColor: o,
      width: Di(m),
      height: Di(m),
      margin: Di(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(ax, " ").concat(0.75 / a, "s ").concat(f * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? R.createElement(
    "span",
    No({ style: y }, b),
    R.createElement("span", { style: g(1) }),
    R.createElement("span", { style: g(2) }),
    R.createElement("span", { style: g(3) })
  ) : null;
}
const cx = ({
  comparator: e,
  type: t,
  value: n,
  valueToMatch: r
}) => e ? e(n, r) : t === Rn.STRING && typeof n == "string" && typeof r == "string" ? yl(n).includes(yl(r)) : !1, ux = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = fn(Ps);
  return Ze(() => n ? [...t].filter(
    (o) => Object.entries(r).every(([s, a]) => {
      if (a === void 0 || typeof a == "string" && a === "")
        return !0;
      const l = e.find((c) => c.key === s);
      return l ? cx({
        comparator: l.filterComparator,
        type: l.type ?? Rn.STRING,
        value: o[s],
        valueToMatch: a
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, dx = pn.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${it.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, fx = St.memo(({ checked: e, onChange: t }) => {
  const n = on(
    (r, o) => {
      t(o, r.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ P.jsx(nx, { checked: e, onChange: n });
}), px = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: o,
  onSortColumnsChange: s,
  defaultSortColumns: a,
  selectedRows: l,
  onSelectedRowsChange: c,
  noDataMessage: u,
  filters: m,
  setFilters: p,
  ...h
}) => {
  const b = Iv({
    columns: r,
    selectionEnabled: !!c
  }), y = Ze(
    () => b.some((O) => O.filterEnabled),
    [b]
  ), g = Ze(() => !p, [p]), f = ux({
    columns: b,
    rows: n,
    enabled: g
  }), C = Ze(() => !s, [s]), {
    sortedRows: T,
    sortColumns: v,
    setSortedColumns: w
  } = pm({
    columns: b,
    rows: f,
    defaultSortColumns: a
  }), x = on(
    (O, E) => E === 0 ? "first-row" : E === n.length - 1 ? "last-row" : "",
    [n]
  );
  return Do(() => {
    const O = l == null ? void 0 : l.filter(
      (E) => n.some((M) => M.id === E)
    );
    (O == null ? void 0 : O.length) != (l == null ? void 0 : l.length) && (c == null || c(O ?? []));
  }, [n, l]), /* @__PURE__ */ P.jsxs(dm, { children: [
    /* @__PURE__ */ P.jsx(
      _l,
      {
        ...h,
        selectedRows: l ? new Set(l) : void 0,
        onSelectedRowsChange: (O) => {
          c == null || c(Array.from(O));
        },
        rowKeyGetter: (O) => O.id,
        rows: T,
        onSortColumnsChange: C ? w : s,
        sortColumns: C ? v : o,
        columns: b,
        rowClass: x,
        rowHeight: 50,
        headerRowHeight: y ? 70 : void 0,
        renderers: {
          renderCheckbox: (O) => /* @__PURE__ */ P.jsx(fx, { ...O }),
          ...h.renderers
        },
        style: { ...cp, ...e ?? {} }
      }
    ),
    t ? /* @__PURE__ */ P.jsxs(dx, { children: [
      /* @__PURE__ */ P.jsx("div", {}),
      /* @__PURE__ */ P.jsx(lx, { color: it.primary500 })
    ] }) : null
  ] });
}, xx = ({
  filters: e,
  setFilters: t,
  ...n
}) => /* @__PURE__ */ P.jsx(Hy, { filters: e, setFilters: t, children: /* @__PURE__ */ P.jsx(px, { ...n, filters: e, setFilters: t }) });
export {
  Rn as ColumnType,
  gu as DATE_FORMAT,
  xx as DataGrid,
  Md as DataGridDefaultRenderersProvider,
  bx as Row,
  Yn as SELECT_COLUMN_KEY,
  ns as SelectCellFormatter,
  Ld as SelectColumn,
  Pd as ToggleGroup,
  yx as TreeDataGrid,
  Pv as convertDate,
  cp as defaultTheme,
  yl as getStringToCompare,
  Sd as renderCheckbox,
  $l as renderHeaderCell,
  Ff as renderSortIcon,
  _f as renderSortPriority,
  kd as renderToggleGroup,
  Id as renderValue,
  it as taktikTheme,
  vx as textEditor,
  Ad as useHeaderRowSelection,
  Pl as useRowSelection
};
