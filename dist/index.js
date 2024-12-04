var bf = Object.defineProperty;
var yf = (e, t, n) => t in e ? bf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Lr = (e, t, n) => yf(e, typeof t != "symbol" ? t + "" : t, n);
import * as E from "react";
import Bt, { useContext as Gn, forwardRef as vi, createContext as Co, memo as Qn, useMemo as ut, useCallback as Fn, useRef as Rn, useEffect as xi, useState as It, useImperativeHandle as vf, useLayoutEffect as xf, useId as wf, Children as Cf, isValidElement as Uo, cloneElement as Yo } from "react";
import * as Sf from "react-dom";
import _o, { flushSync as ei } from "react-dom";
function Ef(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ta = { exports: {} }, Br = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function Tf() {
  if (zs) return Br;
  zs = 1;
  var e = Bt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, f = {}, g = null, h = null;
    u !== void 0 && (g = "" + u), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (d in c) r.call(c, d) && !a.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: g, ref: h, props: f, _owner: i.current };
  }
  return Br.Fragment = n, Br.jsx = s, Br.jsxs = s, Br;
}
var zr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws;
function Of() {
  return Ws || (Ws = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function m(S) {
      if (S === null || typeof S != "object")
        return null;
      var q = y && S[y] || S[b];
      return typeof q == "function" ? q : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(S) {
      {
        for (var q = arguments.length, ae = new Array(q > 1 ? q - 1 : 0), A = 1; A < q; A++)
          ae[A - 1] = arguments[A];
        v("error", S, ae);
      }
    }
    function v(S, q, ae) {
      {
        var A = C.ReactDebugCurrentFrame, _ = A.getStackAddendum();
        _ !== "" && (q += "%s", ae = ae.concat([_]));
        var Q = ae.map(function(le) {
          return String(le);
        });
        Q.unshift("Warning: " + q), Function.prototype.apply.call(console[S], console, Q);
      }
    }
    var w = !1, x = !1, R = !1, O = !1, I = !1, $;
    $ = Symbol.for("react.module.reference");
    function p(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === a || I || S === i || S === u || S === d || O || S === h || w || x || R || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === f || S.$$typeof === s || S.$$typeof === l || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === $ || S.getModuleId !== void 0));
    }
    function P(S, q, ae) {
      var A = S.displayName;
      if (A)
        return A;
      var _ = q.displayName || q.name || "";
      return _ !== "" ? ae + "(" + _ + ")" : ae;
    }
    function M(S) {
      return S.displayName || "Context";
    }
    function j(S) {
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
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case l:
            var q = S;
            return M(q) + ".Consumer";
          case s:
            var ae = S;
            return M(ae._context) + ".Provider";
          case c:
            return P(S, S.render, "ForwardRef");
          case f:
            var A = S.displayName || null;
            return A !== null ? A : j(S.type) || "Memo";
          case g: {
            var _ = S, Q = _._payload, le = _._init;
            try {
              return j(le(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, N = 0, B, ee, te, re, H, X, ue;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function F() {
      {
        if (N === 0) {
          B = console.log, ee = console.info, te = console.warn, re = console.error, H = console.group, X = console.groupCollapsed, ue = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: ne,
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
              value: B
            }),
            info: U({}, S, {
              value: ee
            }),
            warn: U({}, S, {
              value: te
            }),
            error: U({}, S, {
              value: re
            }),
            group: U({}, S, {
              value: H
            }),
            groupCollapsed: U({}, S, {
              value: X
            }),
            groupEnd: U({}, S, {
              value: ue
            })
          });
        }
        N < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = C.ReactCurrentDispatcher, L;
    function V(S, q, ae) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (_) {
            var A = _.stack.trim().match(/\n( *(at )?)/);
            L = A && A[1] || "";
          }
        return `
` + L + S;
      }
    }
    var Z = !1, K;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ce();
    }
    function W(S, q) {
      if (!S || Z)
        return "";
      {
        var ae = K.get(S);
        if (ae !== void 0)
          return ae;
      }
      var A;
      Z = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = G.current, G.current = null, F();
      try {
        if (q) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (lt) {
              A = lt;
            }
            Reflect.construct(S, [], le);
          } else {
            try {
              le.call();
            } catch (lt) {
              A = lt;
            }
            S.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (lt) {
            A = lt;
          }
          S();
        }
      } catch (lt) {
        if (lt && A && typeof lt.stack == "string") {
          for (var se = lt.stack.split(`
`), Oe = A.stack.split(`
`), we = se.length - 1, Ie = Oe.length - 1; we >= 1 && Ie >= 0 && se[we] !== Oe[Ie]; )
            Ie--;
          for (; we >= 1 && Ie >= 0; we--, Ie--)
            if (se[we] !== Oe[Ie]) {
              if (we !== 1 || Ie !== 1)
                do
                  if (we--, Ie--, Ie < 0 || se[we] !== Oe[Ie]) {
                    var bt = `
` + se[we].replace(" at new ", " at ");
                    return S.displayName && bt.includes("<anonymous>") && (bt = bt.replace("<anonymous>", S.displayName)), typeof S == "function" && K.set(S, bt), bt;
                  }
                while (we >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = Q, z(), Error.prepareStackTrace = _;
      }
      var An = S ? S.displayName || S.name : "", Nt = An ? V(An) : "";
      return typeof S == "function" && K.set(S, Nt), Nt;
    }
    function ye(S, q, ae) {
      return W(S, !1);
    }
    function D(S) {
      var q = S.prototype;
      return !!(q && q.isReactComponent);
    }
    function de(S, q, ae) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return W(S, D(S));
      if (typeof S == "string")
        return V(S);
      switch (S) {
        case u:
          return V("Suspense");
        case d:
          return V("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return ye(S.render);
          case f:
            return de(S.type, q, ae);
          case g: {
            var A = S, _ = A._payload, Q = A._init;
            try {
              return de(Q(_), q, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, $e = {}, ge = C.ReactDebugCurrentFrame;
    function Ee(S) {
      if (S) {
        var q = S._owner, ae = de(S.type, S._source, q ? q.type : null);
        ge.setExtraStackFrame(ae);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ae(S, q, ae, A, _) {
      {
        var Q = Function.call.bind(ie);
        for (var le in S)
          if (Q(S, le)) {
            var se = void 0;
            try {
              if (typeof S[le] != "function") {
                var Oe = Error((A || "React class") + ": " + ae + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              se = S[le](q, le, A, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              se = we;
            }
            se && !(se instanceof Error) && (Ee(_), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", ae, le, typeof se), Ee(null)), se instanceof Error && !(se.message in $e) && ($e[se.message] = !0, Ee(_), T("Failed %s type: %s", ae, se.message), Ee(null));
          }
      }
    }
    var Te = Array.isArray;
    function Le(S) {
      return Te(S);
    }
    function fe(S) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, ae = q && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return ae;
      }
    }
    function je(S) {
      try {
        return gt(S), !1;
      } catch {
        return !0;
      }
    }
    function gt(S) {
      return "" + S;
    }
    function vt(S) {
      if (je(S))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fe(S)), gt(S);
    }
    var qe = C.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, it, Pe;
    Pe = {};
    function dt(S) {
      if (ie.call(S, "ref")) {
        var q = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Mt(S) {
      if (ie.call(S, "key")) {
        var q = Object.getOwnPropertyDescriptor(S, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Ot(S, q) {
      if (typeof S.ref == "string" && qe.current && q && qe.current.stateNode !== q) {
        var ae = j(qe.current.type);
        Pe[ae] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(qe.current.type), S.ref), Pe[ae] = !0);
      }
    }
    function pe(S, q) {
      {
        var ae = function() {
          Re || (Re = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ae.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function ve(S, q) {
      {
        var ae = function() {
          it || (it = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ae.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var Ke = function(S, q, ae, A, _, Q, le) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: q,
        ref: ae,
        props: le,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function rt(S, q, ae, A, _) {
      {
        var Q, le = {}, se = null, Oe = null;
        ae !== void 0 && (vt(ae), se = "" + ae), Mt(q) && (vt(q.key), se = "" + q.key), dt(q) && (Oe = q.ref, Ot(q, _));
        for (Q in q)
          ie.call(q, Q) && !Ge.hasOwnProperty(Q) && (le[Q] = q[Q]);
        if (S && S.defaultProps) {
          var we = S.defaultProps;
          for (Q in we)
            le[Q] === void 0 && (le[Q] = we[Q]);
        }
        if (se || Oe) {
          var Ie = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          se && pe(le, Ie), Oe && ve(le, Ie);
        }
        return Ke(S, se, Oe, _, A, qe.current, le);
      }
    }
    var at = C.ReactCurrentOwner, At = C.ReactDebugCurrentFrame;
    function Tt(S) {
      if (S) {
        var q = S._owner, ae = de(S.type, S._source, q ? q.type : null);
        At.setExtraStackFrame(ae);
      } else
        At.setExtraStackFrame(null);
    }
    var tn;
    tn = !1;
    function Ht(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function gn() {
      {
        if (at.current) {
          var S = j(at.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function Ut(S) {
      return "";
    }
    var jt = {};
    function bn(S) {
      {
        var q = gn();
        if (!q) {
          var ae = typeof S == "string" ? S : S.displayName || S.name;
          ae && (q = `

Check the top-level render call using <` + ae + ">.");
        }
        return q;
      }
    }
    function Yt(S, q) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var ae = bn(q);
        if (jt[ae])
          return;
        jt[ae] = !0;
        var A = "";
        S && S._owner && S._owner !== at.current && (A = " It was passed a child from " + j(S._owner.type) + "."), Tt(S), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, A), Tt(null);
      }
    }
    function yn(S, q) {
      {
        if (typeof S != "object")
          return;
        if (Le(S))
          for (var ae = 0; ae < S.length; ae++) {
            var A = S[ae];
            Ht(A) && Yt(A, q);
          }
        else if (Ht(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var _ = m(S);
          if (typeof _ == "function" && _ !== S.entries)
            for (var Q = _.call(S), le; !(le = Q.next()).done; )
              Ht(le.value) && Yt(le.value, q);
        }
      }
    }
    function ft(S) {
      {
        var q = S.type;
        if (q == null || typeof q == "string")
          return;
        var ae;
        if (typeof q == "function")
          ae = q.propTypes;
        else if (typeof q == "object" && (q.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        q.$$typeof === f))
          ae = q.propTypes;
        else
          return;
        if (ae) {
          var A = j(q);
          Ae(ae, S.props, "prop", A, S);
        } else if (q.PropTypes !== void 0 && !tn) {
          tn = !0;
          var _ = j(q);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nn(S) {
      {
        for (var q = Object.keys(S.props), ae = 0; ae < q.length; ae++) {
          var A = q[ae];
          if (A !== "children" && A !== "key") {
            Tt(S), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), Tt(null);
            break;
          }
        }
        S.ref !== null && (Tt(S), T("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
      }
    }
    var Pt = {};
    function me(S, q, ae, A, _, Q) {
      {
        var le = p(S);
        if (!le) {
          var se = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = Ut();
          Oe ? se += Oe : se += gn();
          var we;
          S === null ? we = "null" : Le(S) ? we = "array" : S !== void 0 && S.$$typeof === t ? (we = "<" + (j(S.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : we = typeof S, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, se);
        }
        var Ie = rt(S, q, ae, _, Q);
        if (Ie == null)
          return Ie;
        if (le) {
          var bt = q.children;
          if (bt !== void 0)
            if (A)
              if (Le(bt)) {
                for (var An = 0; An < bt.length; An++)
                  yn(bt[An], S);
                Object.freeze && Object.freeze(bt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yn(bt, S);
        }
        if (ie.call(q, "key")) {
          var Nt = j(S), lt = Object.keys(q).filter(function(Un) {
            return Un !== "key";
          }), on = lt.length > 0 ? "{key: someKey, " + lt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pt[Nt + on]) {
            var Hn = lt.length > 0 ? "{" + lt.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, on, Nt, Hn, Nt), Pt[Nt + on] = !0;
          }
        }
        return S === r ? nn(Ie) : ft(Ie), Ie;
      }
    }
    function rn(S, q, ae) {
      return me(S, q, ae, !0);
    }
    function xn(S, q, ae) {
      return me(S, q, ae, !1);
    }
    var tr = xn, wn = rn;
    zr.Fragment = r, zr.jsx = tr, zr.jsxs = wn;
  }()), zr;
}
process.env.NODE_ENV === "production" ? Ta.exports = Tf() : Ta.exports = Of();
var k = Ta.exports;
function Mc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Mc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ce() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Mc(e)) && (r && (r += " "), r += t);
  return r;
}
function cn(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function Rf(e) {
  e.stopPropagation();
}
function qo(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function Qr(e) {
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
const Pf = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function ti(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function kf(e) {
  return ti(e) && e.keyCode !== 86 ? !1 : !Pf.has(e.key);
}
function If({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const $f = "mlln6zg7-0-0-beta-47";
function Mf(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: i
  }) => /* @__PURE__ */ k.jsx("div", {
    className: $f,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: i
    },
    "data-measuring-cell-key": t
  }, t));
}
function Nf({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], i = n[e.rowIdx];
  return Nc(r, i);
}
function Nc(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Df({
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
    return cn(s, a, {
      type: "HEADER"
    });
  if (t && r > i && r <= l + i)
    return cn(s, a, {
      type: "SUMMARY",
      row: t[r + l]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return cn(s, a, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return cn(s, a, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function Af({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: n,
  columns: r,
  colSpanColumns: i,
  rows: a,
  topSummaryRows: s,
  bottomSummaryRows: l,
  minRowIdx: c,
  mainHeaderRowIdx: u,
  maxRowIdx: d,
  currentPosition: {
    idx: f,
    rowIdx: g
  },
  nextPosition: h,
  lastFrozenColumnIndex: y,
  isCellWithinBounds: b
}) {
  let {
    idx: m,
    rowIdx: C
  } = h;
  const T = r.length, v = (R) => {
    for (const O of i) {
      const I = O.idx;
      if (I > m) break;
      const $ = Df({
        rows: a,
        topSummaryRows: s,
        bottomSummaryRows: l,
        rowIdx: C,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: y,
        column: O
      });
      if ($ && m > I && m < $ + I) {
        m = I + (R ? $ : 0);
        break;
      }
    }
  }, w = (R) => R.level + u, x = () => {
    if (t) {
      let O = r[m].parent;
      for (; O !== void 0; ) {
        const I = w(O);
        if (C === I) {
          m = O.idx + O.colSpan;
          break;
        }
        O = O.parent;
      }
    } else if (e) {
      let O = r[m].parent, I = !1;
      for (; O !== void 0; ) {
        const $ = w(O);
        if (C >= $) {
          m = O.idx, C = $, I = !0;
          break;
        }
        O = O.parent;
      }
      I || (m = f, C = g);
    }
  };
  if (b(h) && (v(t), C < u && x()), n === "CHANGE_ROW" && (m === T ? C === d || (m = 0, C += 1) : m === -1 && (C === c || (C -= 1, m = T - 1), v(!1))), C < u) {
    let O = r[m].parent;
    const I = C;
    for (C = u; O !== void 0; ) {
      const $ = w(O);
      $ >= I && (C = $, m = O.idx), O = O.parent;
    }
  }
  return {
    idx: m,
    rowIdx: C
  };
}
function jf({
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
const Ff = "cj343x07-0-0-beta-47", Dc = `rdg-cell ${Ff}`, _f = "csofj7r7-0-0-beta-47", Lf = `rdg-cell-frozen ${_f}`;
function Ya(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Ac(e, t, n) {
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
function Nr(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function So(e, ...t) {
  return Ce(Dc, ...t, e.frozen && Lf);
}
const {
  min: ao,
  max: ni,
  floor: Vs,
  sign: Bf,
  abs: zf
} = Math;
function Jr(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function jc(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = ni(e, t), typeof n == "number" && n >= t ? ao(e, n) : e;
}
function Fc(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const Wf = "c1bn88vv7-0-0-beta-47", Vf = `rdg-checkbox-input ${Wf}`;
function Hf({
  onChange: e,
  indeterminate: t,
  ...n
}) {
  function r(i) {
    e(i.target.checked, i.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ k.jsx("input", {
    ref: (i) => {
      i && (i.indeterminate = t === !0);
    },
    type: "checkbox",
    className: Vf,
    onChange: r,
    ...n
  });
}
const Uf = "g1s9ylgp7-0-0-beta-47", Yf = `rdg-group-cell-content ${Uf}`, qf = "cz54e4y7-0-0-beta-47", Gf = `rdg-caret ${qf}`;
function Kf(e) {
  return /* @__PURE__ */ k.jsx(Xf, {
    ...e
  });
}
function Xf({
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
  return /* @__PURE__ */ k.jsxs("span", {
    className: Yf,
    tabIndex: n,
    onKeyDown: i,
    children: [e, /* @__PURE__ */ k.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: Gf,
      "aria-hidden": !0,
      children: /* @__PURE__ */ k.jsx("path", {
        d: a
      })
    })]
  });
}
function Zf(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const _c = /* @__PURE__ */ Co(void 0), Qf = _c.Provider;
function wi() {
  return Gn(_c);
}
function qa({
  value: e,
  tabIndex: t,
  indeterminate: n,
  disabled: r,
  onChange: i,
  "aria-label": a,
  "aria-labelledby": s
}) {
  const l = wi().renderCheckbox;
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
const Lc = /* @__PURE__ */ Co(void 0), Bc = Lc.Provider, zc = /* @__PURE__ */ Co(void 0), Jf = zc.Provider;
function Wc() {
  const e = Gn(Lc), t = Gn(zc);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Vc = /* @__PURE__ */ Co(void 0), ep = Vc.Provider, Hc = /* @__PURE__ */ Co(void 0), tp = Hc.Provider;
function np() {
  const e = Gn(Vc), t = Gn(Hc);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Or = "rdg-select-column";
function rp(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = np();
  return /* @__PURE__ */ k.jsx(qa, {
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
function op(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Wc();
  return /* @__PURE__ */ k.jsx(qa, {
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
function ip(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = Wc();
  return /* @__PURE__ */ k.jsx(qa, {
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
const ap = {
  key: Or,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ k.jsx(rp, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ k.jsx(op, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ k.jsx(ip, {
      ...e
    });
  }
}, sp = "auto", lp = 50;
function cp({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: i,
  enableVirtualization: a
}) {
  const s = (t == null ? void 0 : t.width) ?? sp, l = (t == null ? void 0 : t.minWidth) ?? lp, c = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? Zf, d = (t == null ? void 0 : t.sortable) ?? !1, f = (t == null ? void 0 : t.resizable) ?? !1, g = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: h,
    colSpanColumns: y,
    lastFrozenColumnIndex: b,
    headerRowsCount: m
  } = ut(() => {
    let O = -1, I = 1;
    const $ = [];
    p(e, 1);
    function p(M, j, U) {
      for (const N of M) {
        if ("children" in N) {
          const te = {
            name: N.name,
            parent: U,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: N.headerCellClass
          };
          p(N.children, j + 1, te);
          continue;
        }
        const B = N.frozen ?? !1, ee = {
          ...N,
          parent: U,
          idx: 0,
          level: 0,
          frozen: B,
          width: N.width ?? s,
          minWidth: N.minWidth ?? l,
          maxWidth: N.maxWidth ?? c,
          sortable: N.sortable ?? d,
          resizable: N.resizable ?? f,
          draggable: N.draggable ?? g,
          renderCell: N.renderCell ?? u
        };
        $.push(ee), B && O++, j > I && (I = j);
      }
    }
    $.sort(({
      key: M,
      frozen: j
    }, {
      key: U,
      frozen: N
    }) => M === Or ? -1 : U === Or ? 1 : j ? N ? 0 : -1 : N ? 1 : 0);
    const P = [];
    return $.forEach((M, j) => {
      M.idx = j, Uc(M, j, 0), M.colSpan != null && P.push(M);
    }), {
      columns: $,
      colSpanColumns: P,
      lastFrozenColumnIndex: O,
      headerRowsCount: I
    };
  }, [e, s, l, c, u, f, d, g]), {
    templateColumns: C,
    layoutCssVars: T,
    totalFrozenColumnWidth: v,
    columnMetrics: w
  } = ut(() => {
    const O = /* @__PURE__ */ new Map();
    let I = 0, $ = 0;
    const p = [];
    for (const M of h) {
      let j = n(M);
      typeof j == "number" ? j = jc(j, M) : j = M.minWidth, p.push(`${j}px`), O.set(M, {
        width: j,
        left: I
      }), I += j;
    }
    if (b !== -1) {
      const M = O.get(h[b]);
      $ = M.left + M.width;
    }
    const P = {};
    for (let M = 0; M <= b; M++) {
      const j = h[M];
      P[`--rdg-frozen-left-${j.idx}`] = `${O.get(j).left}px`;
    }
    return {
      templateColumns: p,
      layoutCssVars: P,
      totalFrozenColumnWidth: $,
      columnMetrics: O
    };
  }, [n, h, b]), [x, R] = ut(() => {
    if (!a)
      return [0, h.length - 1];
    const O = i + v, I = i + r, $ = h.length - 1, p = ao(b + 1, $);
    if (O >= I)
      return [p, p];
    let P = p;
    for (; P < $; ) {
      const {
        left: N,
        width: B
      } = w.get(h[P]);
      if (N + B > O)
        break;
      P++;
    }
    let M = P;
    for (; M < $; ) {
      const {
        left: N,
        width: B
      } = w.get(h[M]);
      if (N + B >= I)
        break;
      M++;
    }
    const j = ni(p, P - 1), U = ao($, M + 1);
    return [j, U];
  }, [w, h, b, i, v, r, a]);
  return {
    columns: h,
    colSpanColumns: y,
    colOverscanStartIdx: x,
    colOverscanEndIdx: R,
    templateColumns: C,
    layoutCssVars: T,
    headerRowsCount: m,
    lastFrozenColumnIndex: b,
    totalFrozenColumnWidth: v
  };
}
function Uc(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, Uc(r, t, n - 1);
  }
}
const Rr = typeof window > "u" ? xi : xf;
function up(e, t, n, r, i, a, s, l, c, u) {
  const d = Rn(i), f = e.length === t.length, g = f && i !== d.current, h = [...n], y = [];
  for (const {
    key: T,
    idx: v,
    width: w
  } of t)
    typeof w == "string" && (g || !s.has(T)) && !a.has(T) && (h[v] = w, y.push(T));
  const b = h.join(" ");
  Rr(() => {
    d.current = i, m(y);
  });
  function m(T) {
    T.length !== 0 && c((v) => {
      const w = new Map(v);
      let x = !1;
      for (const R of T) {
        const O = Hs(r, R);
        x || (x = O !== v.get(R)), O === void 0 ? w.delete(R) : w.set(R, O);
      }
      return x ? w : v;
    });
  }
  function C(T, v) {
    const {
      key: w
    } = T, x = [...n], R = [];
    for (const {
      key: I,
      idx: $,
      width: p
    } of t)
      if (w === I) {
        const P = typeof v == "number" ? `${v}px` : v;
        x[$] = P;
      } else f && typeof p == "string" && !a.has(I) && (x[$] = p, R.push(I));
    r.current.style.gridTemplateColumns = x.join(" ");
    const O = typeof v == "number" ? v : Hs(r, w);
    ei(() => {
      l((I) => {
        const $ = new Map(I);
        return $.set(w, O), $;
      }), m(R);
    }), u == null || u(T.idx, O);
  }
  return {
    gridTemplateColumns: b,
    handleColumnResize: C
  };
}
function Hs(e, t) {
  var i;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (i = e.current) == null ? void 0 : i.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function dp() {
  const e = Rn(null), [t, n] = It(1), [r, i] = It(1), [a, s] = It(0);
  return Rr(() => {
    const {
      ResizeObserver: l
    } = window;
    if (l == null) return;
    const {
      clientWidth: c,
      clientHeight: u,
      offsetWidth: d,
      offsetHeight: f
    } = e.current, {
      width: g,
      height: h
    } = e.current.getBoundingClientRect(), y = f - u, b = g - d + c, m = h - y;
    n(b), i(m), s(y);
    const C = new l((T) => {
      const v = T[0].contentBoxSize[0], {
        clientHeight: w,
        offsetHeight: x
      } = e.current;
      ei(() => {
        n(v.inlineSize), i(v.blockSize), s(x - w);
      });
    });
    return C.observe(e.current), () => {
      C.disconnect();
    };
  }, []), [e, t, r, a];
}
function _t(e) {
  const t = Rn(e);
  xi(() => {
    t.current = e;
  });
  const n = Fn((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Eo(e) {
  const [t, n] = It(!1);
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
function fp({
  columns: e,
  colSpanColumns: t,
  rows: n,
  topSummaryRows: r,
  bottomSummaryRows: i,
  colOverscanStartIdx: a,
  colOverscanEndIdx: s,
  lastFrozenColumnIndex: l,
  rowOverscanStartIdx: c,
  rowOverscanEndIdx: u
}) {
  const d = ut(() => {
    if (a === 0) return 0;
    let f = a;
    const g = (h, y) => y !== void 0 && h + y > a ? (f = h, !0) : !1;
    for (const h of t) {
      const y = h.idx;
      if (y >= f || g(y, cn(h, l, {
        type: "HEADER"
      })))
        break;
      for (let b = c; b <= u; b++) {
        const m = n[b];
        if (g(y, cn(h, l, {
          type: "ROW",
          row: m
        })))
          break;
      }
      if (r != null) {
        for (const b of r)
          if (g(y, cn(h, l, {
            type: "SUMMARY",
            row: b
          })))
            break;
      }
      if (i != null) {
        for (const b of i)
          if (g(y, cn(h, l, {
            type: "SUMMARY",
            row: b
          })))
            break;
      }
    }
    return f;
  }, [c, u, n, r, i, a, l, t]);
  return ut(() => {
    const f = [];
    for (let g = 0; g <= s; g++) {
      const h = e[g];
      g < d && !h.frozen || f.push(h);
    }
    return f;
  }, [d, s, e]);
}
function pp({
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
    findRowIdx: u
  } = ut(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (m) => m * t,
        getRowHeight: () => t,
        findRowIdx: (m) => Vs(m / t)
      };
    let g = 0, h = " ";
    const y = e.map((m) => {
      const C = t(m), T = {
        top: g,
        height: C
      };
      return h += `${C}px `, g += C, T;
    }), b = (m) => ni(0, ao(e.length - 1, m));
    return {
      totalRowHeight: g,
      gridTemplateRows: h,
      getRowTop: (m) => y[b(m)].top,
      getRowHeight: (m) => y[b(m)].height,
      findRowIdx(m) {
        let C = 0, T = y.length - 1;
        for (; C <= T; ) {
          const v = C + Vs((T - C) / 2), w = y[v].top;
          if (w === m) return v;
          if (w < m ? C = v + 1 : w > m && (T = v - 1), C > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let d = 0, f = e.length - 1;
  if (i) {
    const h = u(r), y = u(r + n);
    d = ni(0, h - 4), f = ao(e.length - 1, y + 4);
  }
  return {
    rowOverscanStartIdx: d,
    rowOverscanEndIdx: f,
    totalRowHeight: a,
    gridTemplateRows: s,
    getRowTop: l,
    getRowHeight: c,
    findRowIdx: u
  };
}
const mp = "c1w9bbhr7-0-0-beta-47", hp = "c1creorc7-0-0-beta-47", gp = `rdg-cell-drag-handle ${mp}`;
function bp({
  gridRowStart: e,
  rows: t,
  column: n,
  columnWidth: r,
  maxColIdx: i,
  isLastRow: a,
  selectedPosition: s,
  latestDraggedOverRowIdx: l,
  isCellEditable: c,
  onRowsChange: u,
  onFill: d,
  onClick: f,
  setDragging: g,
  setDraggedOverRowIdx: h
}) {
  const {
    idx: y,
    rowIdx: b
  } = s;
  function m(x) {
    if (x.preventDefault(), x.buttons !== 1) return;
    g(!0), window.addEventListener("mouseover", R), window.addEventListener("mouseup", O);
    function R(I) {
      I.buttons !== 1 && O();
    }
    function O() {
      window.removeEventListener("mouseover", R), window.removeEventListener("mouseup", O), g(!1), C();
    }
  }
  function C() {
    const x = l.current;
    if (x === void 0) return;
    const R = b < x ? b + 1 : x, O = b < x ? x + 1 : b;
    v(R, O), h(void 0);
  }
  function T(x) {
    x.stopPropagation(), v(b + 1, t.length);
  }
  function v(x, R) {
    const O = t[b], I = [...t], $ = [];
    for (let p = x; p < R; p++)
      if (c({
        rowIdx: p,
        idx: y
      })) {
        const P = d({
          columnKey: n.key,
          sourceRow: O,
          targetRow: t[p]
        });
        P !== t[p] && (I[p] = P, $.push(p));
      }
    $.length > 0 && (u == null || u(I, {
      indexes: $,
      column: n
    }));
  }
  function w() {
    var p;
    const x = ((p = n.colSpan) == null ? void 0 : p.call(n, {
      type: "ROW",
      row: t[b]
    })) ?? 1, {
      insetInlineStart: R,
      ...O
    } = Nr(n, x), I = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", $ = n.idx + x - 1 === i;
    return {
      ...O,
      gridRowStart: e,
      marginInlineEnd: $ ? void 0 : I,
      marginBlockEnd: a ? void 0 : I,
      insetInlineStart: R ? `calc(${R} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ k.jsx("div", {
    style: w(),
    className: Ce(gp, n.frozen && hp),
    onClick: f,
    onMouseDown: m,
    onDoubleClick: T
  });
}
const yp = "cis5rrm7-0-0-beta-47";
function vp({
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
  const c = Rn(void 0), u = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, d = _t(() => {
    h(!0, !1);
  });
  xi(() => {
    if (!u) return;
    function w() {
      c.current = requestAnimationFrame(d);
    }
    return addEventListener("mousedown", w, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", w, {
        capture: !0
      }), f();
    };
  }, [u, d]);
  function f() {
    cancelAnimationFrame(c.current);
  }
  function g(w) {
    if (s) {
      const x = Qr(w);
      if (s({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          l(w);
        },
        onClose: h
      }, x), x.isGridDefaultPrevented()) return;
    }
    w.key === "Escape" ? h() : w.key === "Enter" ? h(!0) : If(w) && l(w);
  }
  function h(w = !1, x = !0) {
    w ? i(n, !0, x) : a(x);
  }
  function y(w, x = !1) {
    i(w, x, x);
  }
  const {
    cellClass: b
  } = e, m = So(e, "rdg-editor-container", typeof b == "function" ? b(n) : b, !((T = e.editorOptions) != null && T.displayCellContent) && yp);
  return /* @__PURE__ */ k.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: m,
    style: Nr(e, t),
    onKeyDown: g,
    onMouseDownCapture: f,
    children: e.renderEditCell != null && /* @__PURE__ */ k.jsxs(k.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: y,
        onClose: h
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
function xp({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: i,
    onFocus: a
  } = Eo(n), {
    colSpan: s
  } = e, l = Fc(e, t), c = e.idx + 1;
  function u() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ k.jsx("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": s,
    "aria-rowspan": l,
    "aria-selected": n,
    tabIndex: i,
    className: Ce(Dc, e.headerCellClass),
    style: {
      ...Ac(e, t, l),
      gridColumnStart: c,
      gridColumnEnd: c + s
    },
    onFocus: a,
    onClick: u,
    children: e.name
  });
}
const wp = "h44jtk67-0-0-beta-47", Cp = "hcgkhxz7-0-0-beta-47", Sp = `rdg-header-sort-name ${Cp}`;
function Yc({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ k.jsx(Ep, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Ep({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = wi().renderSortStatus;
  return /* @__PURE__ */ k.jsxs("span", {
    className: wp,
    children: [/* @__PURE__ */ k.jsx("span", {
      className: Sp,
      children: n
    }), /* @__PURE__ */ k.jsx("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Tp = "c6l2wv17-0-0-beta-47", Op = "c1kqdw7y7-0-0-beta-47", Rp = `rdg-cell-resizable ${Op}`, Pp = "r1y6ywlx7-0-0-beta-47", kp = "rdg-cell-draggable", Ip = "c1bezg5o7-0-0-beta-47", $p = `rdg-cell-dragging ${Ip}`, Mp = "c1vc96037-0-0-beta-47", Np = `rdg-cell-drag-over ${Mp}`;
function Dp({
  column: e,
  colSpan: t,
  rowIdx: n,
  isCellSelected: r,
  onColumnResize: i,
  onColumnsReorder: a,
  sortColumns: s,
  onSortColumnsChange: l,
  selectCell: c,
  shouldFocusGrid: u,
  direction: d,
  dragDropKey: f
}) {
  const [g, h] = It(!1), [y, b] = It(!1), m = d === "rtl", C = Fc(e, n), {
    tabIndex: T,
    childTabIndex: v,
    onFocus: w
  } = Eo(r), x = s == null ? void 0 : s.findIndex((L) => L.columnKey === e.key), R = x !== void 0 && x > -1 ? s[x] : void 0, O = R == null ? void 0 : R.direction, I = R !== void 0 && s.length > 1 ? x + 1 : void 0, $ = O && !I ? O === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: p,
    resizable: P,
    draggable: M
  } = e, j = So(e, e.headerCellClass, p && Tp, P && Rp, M && kp, g && $p, y && Np), U = e.renderHeaderCell ?? Yc;
  function N(L) {
    if (L.pointerType === "mouse" && L.buttons !== 1)
      return;
    L.preventDefault();
    const {
      currentTarget: V,
      pointerId: Z
    } = L, K = V.parentElement, {
      right: ce,
      left: W
    } = K.getBoundingClientRect(), ye = m ? L.clientX - W : ce - L.clientX;
    let D = !1;
    function de(ge) {
      const {
        width: Ee,
        right: Ae,
        left: Te
      } = K.getBoundingClientRect();
      let Le = m ? Ae + ye - ge.clientX : ge.clientX + ye - Te;
      Le = jc(Le, e), Ee > 0 && Le !== Ee && i(e, Le);
    }
    function ie() {
      D = !0, i(e, "max-content");
    }
    function $e(ge) {
      D || de(ge), V.removeEventListener("pointermove", de), V.removeEventListener("dblclick", ie), V.removeEventListener("lostpointercapture", $e);
    }
    V.setPointerCapture(Z), V.addEventListener("pointermove", de), V.addEventListener("dblclick", ie), V.addEventListener("lostpointercapture", $e);
  }
  function B(L) {
    if (l == null) return;
    const {
      sortDescendingFirst: V
    } = e;
    if (R === void 0) {
      const Z = {
        columnKey: e.key,
        direction: V ? "DESC" : "ASC"
      };
      l(s && L ? [...s, Z] : [Z]);
    } else {
      let Z;
      if ((V === !0 && O === "DESC" || V !== !0 && O === "ASC") && (Z = {
        columnKey: e.key,
        direction: O === "ASC" ? "DESC" : "ASC"
      }), L) {
        const K = [...s];
        Z ? K[x] = Z : K.splice(x, 1), l(K);
      } else
        l(Z ? [Z] : []);
    }
  }
  function ee(L) {
    c({
      idx: e.idx,
      rowIdx: n
    }), p && B(L.ctrlKey || L.metaKey);
  }
  function te(L) {
    w == null || w(L), u && c({
      idx: 0,
      rowIdx: n
    });
  }
  function re(L) {
    (L.key === " " || L.key === "Enter") && (L.preventDefault(), B(L.ctrlKey || L.metaKey));
  }
  function H(L) {
    L.dataTransfer.setData(f, e.key), L.dataTransfer.dropEffect = "move", h(!0);
  }
  function X() {
    h(!1);
  }
  function ue(L) {
    L.preventDefault(), L.dataTransfer.dropEffect = "move";
  }
  function ne(L) {
    if (b(!1), L.dataTransfer.types.includes(f.toLowerCase())) {
      const V = L.dataTransfer.getData(f.toLowerCase());
      V !== e.key && (L.preventDefault(), a == null || a(V, e.key));
    }
  }
  function F(L) {
    Us(L) && b(!0);
  }
  function z(L) {
    Us(L) && b(!1);
  }
  let G;
  return M && (G = {
    draggable: !0,
    onDragStart: H,
    onDragEnd: X,
    onDragOver: ue,
    onDragEnter: F,
    onDragLeave: z,
    onDrop: ne
  }), /* @__PURE__ */ k.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": C,
    "aria-selected": r,
    "aria-sort": $,
    tabIndex: u ? 0 : T,
    className: j,
    style: {
      ...Ac(e, n, C),
      ...Nr(e, t)
    },
    onFocus: te,
    onClick: ee,
    onKeyDown: p ? re : void 0,
    ...G,
    children: [U({
      column: e,
      sortDirection: O,
      priority: I,
      tabIndex: v
    }), P && /* @__PURE__ */ k.jsx("div", {
      className: Pp,
      onClick: Rf,
      onPointerDown: N
    })]
  });
}
function Us(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const Ap = "r1upfr807-0-0-beta-47", Ga = `rdg-row ${Ap}`, jp = "r190mhd37-0-0-beta-47", Ci = "rdg-row-selected", Fp = "r139qu9m7-0-0-beta-47", _p = "rdg-top-summary-row", Lp = "rdg-bottom-summary-row", Bp = "h10tskcx7-0-0-beta-47", qc = `rdg-header-row ${Bp}`;
function zp({
  rowIdx: e,
  columns: t,
  onColumnResize: n,
  onColumnsReorder: r,
  sortColumns: i,
  onSortColumnsChange: a,
  lastFrozenColumnIndex: s,
  selectedCellIdx: l,
  selectCell: c,
  shouldFocusGrid: u,
  direction: d
}) {
  const f = wf(), g = [];
  for (let h = 0; h < t.length; h++) {
    const y = t[h], b = cn(y, s, {
      type: "HEADER"
    });
    b !== void 0 && (h += b - 1), g.push(/* @__PURE__ */ k.jsx(Dp, {
      column: y,
      colSpan: b,
      rowIdx: e,
      isCellSelected: l === y.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: a,
      sortColumns: i,
      selectCell: c,
      shouldFocusGrid: u && h === 0,
      direction: d,
      dragDropKey: f
    }, y.key));
  }
  return /* @__PURE__ */ k.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: Ce(qc, l === -1 && Ci),
    children: g
  });
}
const Wp = /* @__PURE__ */ Qn(zp);
function Vp({
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
          idx: u
        } = c;
        a.push(/* @__PURE__ */ k.jsx(xp, {
          column: c,
          rowIdx: e,
          isCellSelected: r === u,
          selectCell: i
        }, u));
      }
    }
  }
  return /* @__PURE__ */ k.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: qc,
    children: a
  });
}
const Hp = /* @__PURE__ */ Qn(Vp), Up = "c6ra8a37-0-0-beta-47", Yp = `rdg-cell-copied ${Up}`, qp = "cq910m07-0-0-beta-47", Gp = `rdg-cell-dragged-over ${qp}`;
function Kp({
  column: e,
  colSpan: t,
  isCellSelected: n,
  isCopied: r,
  isDraggedOver: i,
  row: a,
  rowIdx: s,
  onClick: l,
  onDoubleClick: c,
  onContextMenu: u,
  onRowChange: d,
  selectCell: f,
  ...g
}) {
  const {
    tabIndex: h,
    childTabIndex: y,
    onFocus: b
  } = Eo(n), {
    cellClass: m
  } = e, C = So(e, typeof m == "function" ? m(a) : m, r && Yp, i && Gp), T = Nc(e, a);
  function v(I) {
    f({
      rowIdx: s,
      idx: e.idx
    }, I);
  }
  function w(I) {
    if (l) {
      const $ = Qr(I);
      if (l({
        row: a,
        column: e,
        selectCell: v
      }, $), $.isGridDefaultPrevented()) return;
    }
    v();
  }
  function x(I) {
    if (u) {
      const $ = Qr(I);
      if (u({
        row: a,
        column: e,
        selectCell: v
      }, $), $.isGridDefaultPrevented()) return;
    }
    v();
  }
  function R(I) {
    if (c) {
      const $ = Qr(I);
      if (c({
        row: a,
        column: e,
        selectCell: v
      }, $), $.isGridDefaultPrevented()) return;
    }
    v(!0);
  }
  function O(I) {
    d(e, I);
  }
  return /* @__PURE__ */ k.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !T || void 0,
    tabIndex: h,
    className: C,
    style: Nr(e, t),
    onClick: w,
    onDoubleClick: R,
    onContextMenu: x,
    onFocus: b,
    ...g,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: s,
      isCellEditable: T,
      tabIndex: y,
      onRowChange: O
    })
  });
}
const Xp = /* @__PURE__ */ Qn(Kp);
function Zp({
  className: e,
  rowIdx: t,
  gridRowStart: n,
  selectedCellIdx: r,
  isRowSelectionDisabled: i,
  isRowSelected: a,
  copiedCellIdx: s,
  draggedOverCellIdx: l,
  lastFrozenColumnIndex: c,
  row: u,
  viewportColumns: d,
  selectedCellEditor: f,
  onCellClick: g,
  onCellDoubleClick: h,
  onCellContextMenu: y,
  rowClass: b,
  setDraggedOverRowIdx: m,
  onMouseEnter: C,
  onRowChange: T,
  selectCell: v,
  ...w
}, x) {
  const R = _t((p, P) => {
    T(p, t, P);
  });
  function O(p) {
    m == null || m(t), C == null || C(p);
  }
  e = Ce(Ga, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, b == null ? void 0 : b(u, t), e, r === -1 && Ci);
  const I = [];
  for (let p = 0; p < d.length; p++) {
    const P = d[p], {
      idx: M
    } = P, j = cn(P, c, {
      type: "ROW",
      row: u
    });
    j !== void 0 && (p += j - 1);
    const U = r === M;
    U && f ? I.push(f) : I.push(/* @__PURE__ */ k.jsx(Xp, {
      column: P,
      colSpan: j,
      row: u,
      rowIdx: t,
      isCopied: s === M,
      isDraggedOver: l === M,
      isCellSelected: U,
      onClick: g,
      onDoubleClick: h,
      onContextMenu: y,
      onRowChange: R,
      selectCell: v
    }, P.key));
  }
  const $ = ut(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: i
  }), [i, a]);
  return /* @__PURE__ */ k.jsx(Bc, {
    value: $,
    children: /* @__PURE__ */ k.jsx("div", {
      role: "row",
      ref: x,
      className: e,
      onMouseEnter: O,
      style: Ya(n),
      ...w,
      children: I
    })
  });
}
const Gc = /* @__PURE__ */ Qn(/* @__PURE__ */ vi(Zp)), R1 = Gc;
function Kc(e, t) {
  return /* @__PURE__ */ k.jsx(Gc, {
    ...t
  }, e);
}
function Qp({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const i = Rn(null);
  return Rr(() => {
    qo(i.current);
  }), Rr(() => {
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
  }, [n, r]), /* @__PURE__ */ k.jsx("div", {
    ref: i,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Jp = "a3ejtar7-0-0-beta-47", em = `rdg-sort-arrow ${Jp}`;
function tm({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ k.jsxs(k.Fragment, {
    children: [nm({
      sortDirection: e
    }), rm({
      priority: t
    })]
  });
}
function nm({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ k.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: em,
    "aria-hidden": !0,
    children: /* @__PURE__ */ k.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function rm({
  priority: e
}) {
  return e;
}
const om = "rnvodz57-0-0-beta-47", im = `rdg ${om}`, am = "vlqv91k7-0-0-beta-47", sm = `rdg-viewport-dragging ${am}`, lm = "f1lsfrzw7-0-0-beta-47", cm = "f1cte0lg7-0-0-beta-47", um = "s8wc6fl7-0-0-beta-47";
function dm({
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
  } = Eo(i), {
    summaryCellClass: u
  } = e, d = So(e, um, typeof u == "function" ? u(n) : u);
  function f() {
    a({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ k.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": i,
    tabIndex: s,
    className: d,
    style: Nr(e, t),
    onClick: f,
    onFocus: c,
    children: (g = e.renderSummaryCell) == null ? void 0 : g.call(e, {
      column: e,
      row: n,
      tabIndex: l
    })
  });
}
const fm = /* @__PURE__ */ Qn(dm), pm = "skuhp557-0-0-beta-47", mm = "tf8l5ub7-0-0-beta-47", hm = `rdg-summary-row ${pm}`;
function gm({
  rowIdx: e,
  gridRowStart: t,
  row: n,
  viewportColumns: r,
  top: i,
  bottom: a,
  lastFrozenColumnIndex: s,
  selectedCellIdx: l,
  isTop: c,
  selectCell: u,
  "aria-rowindex": d
}) {
  const f = [];
  for (let g = 0; g < r.length; g++) {
    const h = r[g], y = cn(h, s, {
      type: "SUMMARY",
      row: n
    });
    y !== void 0 && (g += y - 1);
    const b = l === h.idx;
    f.push(/* @__PURE__ */ k.jsx(fm, {
      column: h,
      colSpan: y,
      row: n,
      rowIdx: e,
      isCellSelected: b,
      selectCell: u
    }, h.key));
  }
  return /* @__PURE__ */ k.jsx("div", {
    role: "row",
    "aria-rowindex": d,
    className: Ce(Ga, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, hm, c ? `${_p} ${mm}` : Lp, l === -1 && Ci),
    style: {
      ...Ya(t),
      "--rdg-summary-row-top": i !== void 0 ? `${i}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: f
  });
}
const Ys = /* @__PURE__ */ Qn(gm);
function bm(e, t) {
  const {
    columns: n,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a,
    rowKeyGetter: s,
    onRowsChange: l,
    rowHeight: c,
    headerRowHeight: u,
    summaryRowHeight: d,
    selectedRows: f,
    isRowSelectionDisabled: g,
    onSelectedRowsChange: h,
    sortColumns: y,
    onSortColumnsChange: b,
    defaultColumnOptions: m,
    onCellClick: C,
    onCellDoubleClick: T,
    onCellContextMenu: v,
    onCellKeyDown: w,
    onSelectedCellChange: x,
    onScroll: R,
    onColumnResize: O,
    onColumnsReorder: I,
    onFill: $,
    onCopy: p,
    onPaste: P,
    enableVirtualization: M,
    renderers: j,
    className: U,
    style: N,
    rowClass: B,
    direction: ee,
    role: te,
    "aria-label": re,
    "aria-labelledby": H,
    "aria-describedby": X,
    "aria-rowcount": ue,
    "data-testid": ne
  } = e, F = wi(), z = te ?? "grid", G = c ?? 35, L = u ?? (typeof G == "number" ? G : 35), V = d ?? (typeof G == "number" ? G : 35), Z = (j == null ? void 0 : j.renderRow) ?? (F == null ? void 0 : F.renderRow) ?? Kc, K = (j == null ? void 0 : j.renderSortStatus) ?? (F == null ? void 0 : F.renderSortStatus) ?? tm, ce = (j == null ? void 0 : j.renderCheckbox) ?? (F == null ? void 0 : F.renderCheckbox) ?? Hf, W = (j == null ? void 0 : j.noRowsFallback) ?? (F == null ? void 0 : F.noRowsFallback), ye = M ?? !0, D = ee ?? "ltr", [de, ie] = It(0), [$e, ge] = It(0), [Ee, Ae] = It(() => /* @__PURE__ */ new Map()), [Te, Le] = It(() => /* @__PURE__ */ new Map()), [fe, je] = It(null), [gt, vt] = It(!1), [qe, Ge] = It(void 0), [Re, it] = It(null), Pe = Fn((J) => Ee.get(J.key) ?? Te.get(J.key) ?? J.width, [Te, Ee]), [dt, Mt, Ot, pe] = dp(), {
    columns: ve,
    colSpanColumns: Ke,
    lastFrozenColumnIndex: rt,
    headerRowsCount: at,
    colOverscanStartIdx: At,
    colOverscanEndIdx: Tt,
    templateColumns: tn,
    layoutCssVars: Ht,
    totalFrozenColumnWidth: gn
  } = cp({
    rawColumns: n,
    defaultColumnOptions: m,
    getColumnWidth: Pe,
    scrollLeft: $e,
    viewportWidth: Mt,
    enableVirtualization: ye
  }), Ut = (i == null ? void 0 : i.length) ?? 0, jt = (a == null ? void 0 : a.length) ?? 0, bn = Ut + jt, Yt = at + Ut, yn = at - 1, ft = -Yt, nn = ft + yn, Pt = r.length + jt - 1, [me, rn] = It(() => ({
    idx: -1,
    rowIdx: ft - 1,
    mode: "SELECT"
  })), xn = Rn(me), tr = Rn(qe), wn = Rn(-1), S = Rn(null), q = Rn(!1), ae = z === "treegrid", A = at * L, _ = bn * V, Q = Ot - A - _, le = f != null && h != null, se = D === "rtl", Oe = se ? "ArrowRight" : "ArrowLeft", we = se ? "ArrowLeft" : "ArrowRight", Ie = ue ?? at + r.length + bn, bt = ut(() => ({
    renderCheckbox: ce,
    renderSortStatus: K
  }), [ce, K]), An = ut(() => {
    let J = !1, oe = !1;
    if (s != null && f != null && f.size > 0) {
      for (const xe of r)
        if (f.has(s(xe)) ? J = !0 : oe = !0, J && oe) break;
    }
    return {
      isRowSelected: J && !oe,
      isIndeterminate: J && oe
    };
  }, [r, f, s]), {
    rowOverscanStartIdx: Nt,
    rowOverscanEndIdx: lt,
    totalRowHeight: on,
    gridTemplateRows: Hn,
    getRowTop: Un,
    getRowHeight: dr,
    findRowIdx: Ne
  } = pp({
    rows: r,
    rowHeight: G,
    clientHeight: Q,
    scrollTop: de,
    enableVirtualization: ye
  }), Ct = fp({
    columns: ve,
    colSpanColumns: Ke,
    colOverscanStartIdx: At,
    colOverscanEndIdx: Tt,
    lastFrozenColumnIndex: rt,
    rowOverscanStartIdx: Nt,
    rowOverscanEndIdx: lt,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: Cn,
    handleColumnResize: nr
  } = up(ve, Ct, tn, dt, Mt, Ee, Te, Ae, Le, O), qi = ae ? -1 : 0, fr = ve.length - 1, Gi = Zi(me), Do = Fs(me), Yd = L + on + _ + pe, qd = _t(nr), Gd = _t(I), Kd = _t(b), Xd = _t(C), Zd = _t(T), Qd = _t(v), Jd = _t(nf), ef = _t(Ds), tf = _t(Ao), Ki = _t(Fr), Ns = _t(({
    idx: J,
    rowIdx: oe
  }) => {
    Fr({
      rowIdx: ft + oe - 1,
      idx: J
    });
  });
  Rr(() => {
    if (!Gi || ea(me, xn.current)) {
      xn.current = me;
      return;
    }
    xn.current = me, me.idx === -1 && (S.current.focus({
      preventScroll: !0
    }), qo(S.current));
  }), Rr(() => {
    q.current && (q.current = !1, Ls());
  }), vf(t, () => ({
    element: dt.current,
    scrollToCell({
      idx: J,
      rowIdx: oe
    }) {
      const xe = J !== void 0 && J > rt && J < ve.length ? J : void 0, Se = oe !== void 0 && pr(oe) ? oe : void 0;
      (xe !== void 0 || Se !== void 0) && it({
        idx: xe,
        rowIdx: Se
      });
    },
    selectCell: Fr
  }));
  const Xi = Fn((J) => {
    Ge(J), tr.current = J;
  }, []);
  function nf(J) {
    if (!h) return;
    Jr(s);
    const oe = new Set(f);
    for (const xe of r) {
      if ((g == null ? void 0 : g(xe)) === !0) continue;
      const Se = s(xe);
      J.checked ? oe.add(Se) : oe.delete(Se);
    }
    h(oe);
  }
  function Ds(J) {
    if (!h) return;
    Jr(s);
    const {
      row: oe,
      checked: xe,
      isShiftClick: Se
    } = J;
    if ((g == null ? void 0 : g(oe)) === !0) return;
    const De = new Set(f), Qe = s(oe), ct = wn.current, pt = r.indexOf(oe);
    if (wn.current = pt, xe ? De.add(Qe) : De.delete(Qe), Se && ct !== -1 && ct !== pt && ct < r.length) {
      const qt = Bf(pt - ct);
      for (let Ft = ct + qt; Ft !== pt; Ft += qt) {
        const Sn = r[Ft];
        (g == null ? void 0 : g(Sn)) !== !0 && (xe ? De.add(s(Sn)) : De.delete(s(Sn)));
      }
    }
    h(De);
  }
  function rf(J) {
    var pt;
    const {
      idx: oe,
      rowIdx: xe,
      mode: Se
    } = me;
    if (Se === "EDIT") return;
    if (w && pr(xe)) {
      const qt = r[xe], Ft = Qr(J);
      if (w({
        mode: "SELECT",
        row: qt,
        column: ve[oe],
        rowIdx: xe,
        selectCell: Fr
      }, Ft), Ft.isGridDefaultPrevented()) return;
    }
    if (!(J.target instanceof Element)) return;
    const De = J.target.closest(".rdg-cell") !== null, Qe = ae && J.target === S.current;
    if (!De && !Qe) return;
    const {
      keyCode: ct
    } = J;
    if (Do && (P != null || p != null) && ti(J)) {
      if (ct === 67) {
        if (((pt = window.getSelection()) == null ? void 0 : pt.isCollapsed) === !1) return;
        af();
        return;
      }
      if (ct === 86) {
        sf();
        return;
      }
    }
    switch (J.key) {
      case "Escape":
        je(null);
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
        _s(J);
        break;
      default:
        lf(J);
        break;
    }
  }
  function of(J) {
    const {
      scrollTop: oe,
      scrollLeft: xe
    } = J.currentTarget;
    ei(() => {
      ie(oe), ge(zf(xe));
    }), R == null || R(J);
  }
  function Ao(J, oe, xe) {
    if (typeof l != "function" || xe === r[oe]) return;
    const Se = [...r];
    Se[oe] = xe, l(Se, {
      indexes: [oe],
      column: J
    });
  }
  function As() {
    me.mode === "EDIT" && Ao(ve[me.idx], me.rowIdx, me.row);
  }
  function af() {
    const {
      idx: J,
      rowIdx: oe
    } = me, xe = r[oe], Se = ve[J].key;
    je({
      row: xe,
      columnKey: Se
    }), p == null || p({
      sourceRow: xe,
      sourceColumnKey: Se
    });
  }
  function sf() {
    if (!P || !l || fe === null || !jo(me))
      return;
    const {
      idx: J,
      rowIdx: oe
    } = me, xe = ve[J], Se = r[oe], De = P({
      sourceRow: fe.row,
      sourceColumnKey: fe.columnKey,
      targetRow: Se,
      targetColumnKey: xe.key
    });
    Ao(xe, oe, De);
  }
  function lf(J) {
    if (!Do) return;
    const oe = r[me.rowIdx], {
      key: xe,
      shiftKey: Se
    } = J;
    if (le && Se && xe === " ") {
      Jr(s);
      const De = s(oe);
      Ds({
        row: oe,
        checked: !f.has(De),
        isShiftClick: !1
      }), J.preventDefault();
      return;
    }
    jo(me) && kf(J) && rn(({
      idx: De,
      rowIdx: Qe
    }) => ({
      idx: De,
      rowIdx: Qe,
      mode: "EDIT",
      row: oe,
      originalRow: oe
    }));
  }
  function js(J) {
    return J >= qi && J <= fr;
  }
  function pr(J) {
    return J >= 0 && J < r.length;
  }
  function Zi({
    idx: J,
    rowIdx: oe
  }) {
    return oe >= ft && oe <= Pt && js(J);
  }
  function cf({
    idx: J,
    rowIdx: oe
  }) {
    return pr(oe) && J >= 0 && J <= fr;
  }
  function Fs({
    idx: J,
    rowIdx: oe
  }) {
    return pr(oe) && js(J);
  }
  function jo(J) {
    return cf(J) && Nf({
      columns: ve,
      rows: r,
      selectedPosition: J
    });
  }
  function Fr(J, oe) {
    if (!Zi(J)) return;
    As();
    const xe = r[J.rowIdx], Se = ea(me, J);
    oe && jo(J) ? rn({
      ...J,
      mode: "EDIT",
      row: xe,
      originalRow: xe
    }) : Se ? qo(qs(dt.current)) : (q.current = !0, rn({
      ...J,
      mode: "SELECT"
    })), x && !Se && x({
      rowIdx: J.rowIdx,
      row: xe,
      column: ve[J.idx]
    });
  }
  function uf(J, oe, xe) {
    const {
      idx: Se,
      rowIdx: De
    } = me, Qe = Gi && Se === -1;
    switch (J) {
      case "ArrowUp":
        return {
          idx: Se,
          rowIdx: De - 1
        };
      case "ArrowDown":
        return {
          idx: Se,
          rowIdx: De + 1
        };
      case Oe:
        return {
          idx: Se - 1,
          rowIdx: De
        };
      case we:
        return {
          idx: Se + 1,
          rowIdx: De
        };
      case "Tab":
        return {
          idx: Se + (xe ? -1 : 1),
          rowIdx: De
        };
      case "Home":
        return Qe ? {
          idx: Se,
          rowIdx: ft
        } : {
          idx: 0,
          rowIdx: oe ? ft : De
        };
      case "End":
        return Qe ? {
          idx: Se,
          rowIdx: Pt
        } : {
          idx: fr,
          rowIdx: oe ? Pt : De
        };
      case "PageUp": {
        if (me.rowIdx === ft) return me;
        const ct = Un(De) + dr(De) - Q;
        return {
          idx: Se,
          rowIdx: ct > 0 ? Ne(ct) : 0
        };
      }
      case "PageDown": {
        if (me.rowIdx >= r.length) return me;
        const ct = Un(De) + Q;
        return {
          idx: Se,
          rowIdx: ct < on ? Ne(ct) : r.length - 1
        };
      }
      default:
        return me;
    }
  }
  function _s(J) {
    const {
      key: oe,
      shiftKey: xe
    } = J;
    let Se = "NONE";
    if (oe === "Tab") {
      if (jf({
        shiftKey: xe,
        maxColIdx: fr,
        minRowIdx: ft,
        maxRowIdx: Pt,
        selectedPosition: me
      })) {
        As();
        return;
      }
      Se = "CHANGE_ROW";
    }
    J.preventDefault();
    const De = ti(J), Qe = uf(oe, De, xe);
    if (ea(me, Qe)) return;
    const ct = Af({
      moveUp: oe === "ArrowUp",
      moveNext: oe === we || oe === "Tab" && !xe,
      columns: ve,
      colSpanColumns: Ke,
      rows: r,
      topSummaryRows: i,
      bottomSummaryRows: a,
      minRowIdx: ft,
      mainHeaderRowIdx: nn,
      maxRowIdx: Pt,
      lastFrozenColumnIndex: rt,
      cellNavigationMode: Se,
      currentPosition: me,
      nextPosition: Qe,
      isCellWithinBounds: Zi
    });
    Fr(ct);
  }
  function df(J) {
    if (qe === void 0) return;
    const {
      rowIdx: oe
    } = me;
    return (oe < qe ? oe < J && J <= qe : oe > J && J >= qe) ? me.idx : void 0;
  }
  function Ls() {
    const J = qs(dt.current);
    if (J === null) return;
    qo(J), (J.querySelector('[tabindex="0"]') ?? J).focus({
      preventScroll: !0
    });
  }
  function ff() {
    if ($ == null || me.mode === "EDIT" || !Fs(me))
      return;
    const {
      idx: J,
      rowIdx: oe
    } = me, xe = ve[J];
    if (xe.renderEditCell == null || xe.editable === !1)
      return;
    const Se = Pe(xe);
    return /* @__PURE__ */ k.jsx(bp, {
      gridRowStart: Yt + oe + 1,
      rows: r,
      column: xe,
      columnWidth: Se,
      maxColIdx: fr,
      isLastRow: oe === Pt,
      selectedPosition: me,
      isCellEditable: jo,
      latestDraggedOverRowIdx: tr,
      onRowsChange: l,
      onClick: Ls,
      onFill: $,
      setDragging: vt,
      setDraggedOverRowIdx: Xi
    });
  }
  function pf(J) {
    if (me.rowIdx !== J || me.mode === "SELECT") return;
    const {
      idx: oe,
      row: xe
    } = me, Se = ve[oe], De = cn(Se, rt, {
      type: "ROW",
      row: xe
    }), Qe = (pt) => {
      q.current = pt, rn(({
        idx: qt,
        rowIdx: Ft
      }) => ({
        idx: qt,
        rowIdx: Ft,
        mode: "SELECT"
      }));
    }, ct = (pt, qt, Ft) => {
      qt ? ei(() => {
        Ao(Se, me.rowIdx, pt), Qe(Ft);
      }) : rn((Sn) => ({
        ...Sn,
        row: pt
      }));
    };
    return r[me.rowIdx] !== me.originalRow && Qe(!1), /* @__PURE__ */ k.jsx(vp, {
      column: Se,
      colSpan: De,
      row: xe,
      rowIdx: J,
      onRowChange: ct,
      closeEditor: Qe,
      onKeyDown: w,
      navigate: _s
    }, Se.key);
  }
  function _r(J) {
    const oe = me.idx === -1 ? void 0 : ve[me.idx];
    return oe !== void 0 && me.rowIdx === J && !Ct.includes(oe) ? me.idx > Tt ? [...Ct, oe] : [...Ct.slice(0, rt + 1), oe, ...Ct.slice(rt + 1)] : Ct;
  }
  function mf() {
    const J = [], {
      idx: oe,
      rowIdx: xe
    } = me, Se = Do && xe < Nt ? Nt - 1 : Nt, De = Do && xe > lt ? lt + 1 : lt;
    for (let Qe = Se; Qe <= De; Qe++) {
      const ct = Qe === Nt - 1 || Qe === lt + 1, pt = ct ? xe : Qe;
      let qt = Ct;
      const Ft = oe === -1 ? void 0 : ve[oe];
      Ft !== void 0 && (ct ? qt = [Ft] : qt = _r(pt));
      const Sn = r[pt], hf = Yt + pt + 1;
      let Qi = pt, Ji = !1;
      typeof s == "function" && (Qi = s(Sn), Ji = (f == null ? void 0 : f.has(Qi)) ?? !1), J.push(Z(Qi, {
        "aria-rowindex": Yt + pt + 1,
        "aria-selected": le ? Ji : void 0,
        rowIdx: pt,
        row: Sn,
        viewportColumns: qt,
        isRowSelectionDisabled: (g == null ? void 0 : g(Sn)) ?? !1,
        isRowSelected: Ji,
        onCellClick: Xd,
        onCellDoubleClick: Zd,
        onCellContextMenu: Qd,
        rowClass: B,
        gridRowStart: hf,
        copiedCellIdx: fe !== null && fe.row === Sn ? ve.findIndex((gf) => gf.key === fe.columnKey) : void 0,
        selectedCellIdx: xe === pt ? oe : void 0,
        draggedOverCellIdx: df(pt),
        setDraggedOverRowIdx: gt ? Xi : void 0,
        lastFrozenColumnIndex: rt,
        onRowChange: tf,
        selectCell: Ki,
        selectedCellEditor: pf(pt)
      }));
    }
    return J;
  }
  (me.idx > fr || me.rowIdx > Pt) && (rn({
    idx: -1,
    rowIdx: ft - 1,
    mode: "SELECT"
  }), Xi(void 0));
  let Fo = `repeat(${at}, ${L}px)`;
  Ut > 0 && (Fo += ` repeat(${Ut}, ${V}px)`), r.length > 0 && (Fo += Hn), jt > 0 && (Fo += ` repeat(${jt}, ${V}px)`);
  const Bs = me.idx === -1 && me.rowIdx !== ft - 1;
  return /* @__PURE__ */ k.jsxs("div", {
    role: z,
    "aria-label": re,
    "aria-labelledby": H,
    "aria-describedby": X,
    "aria-multiselectable": le ? !0 : void 0,
    "aria-colcount": ve.length,
    "aria-rowcount": Ie,
    className: Ce(im, U, gt && sm),
    style: {
      ...N,
      scrollPaddingInlineStart: me.idx > rt || (Re == null ? void 0 : Re.idx) !== void 0 ? `${gn}px` : void 0,
      scrollPaddingBlock: pr(me.rowIdx) || (Re == null ? void 0 : Re.rowIdx) !== void 0 ? `${A + Ut * V}px ${jt * V}px` : void 0,
      gridTemplateColumns: Cn,
      gridTemplateRows: Fo,
      "--rdg-header-row-height": `${L}px`,
      "--rdg-scroll-height": `${Yd}px`,
      ...Ht
    },
    dir: D,
    ref: dt,
    onScroll: of,
    onKeyDown: rf,
    "data-testid": ne,
    children: [/* @__PURE__ */ k.jsxs(Qf, {
      value: bt,
      children: [/* @__PURE__ */ k.jsx(tp, {
        value: Jd,
        children: /* @__PURE__ */ k.jsxs(ep, {
          value: An,
          children: [Array.from({
            length: yn
          }, (J, oe) => /* @__PURE__ */ k.jsx(Hp, {
            rowIdx: oe + 1,
            level: -yn + oe,
            columns: _r(ft + oe),
            selectedCellIdx: me.rowIdx === ft + oe ? me.idx : void 0,
            selectCell: Ns
          }, oe)), /* @__PURE__ */ k.jsx(Wp, {
            rowIdx: at,
            columns: _r(nn),
            onColumnResize: qd,
            onColumnsReorder: Gd,
            sortColumns: y,
            onSortColumnsChange: Kd,
            lastFrozenColumnIndex: rt,
            selectedCellIdx: me.rowIdx === nn ? me.idx : void 0,
            selectCell: Ns,
            shouldFocusGrid: !Gi,
            direction: D
          })]
        })
      }), r.length === 0 && W ? W : /* @__PURE__ */ k.jsxs(k.Fragment, {
        children: [i == null ? void 0 : i.map((J, oe) => {
          const xe = at + 1 + oe, Se = nn + 1 + oe, De = me.rowIdx === Se, Qe = A + V * oe;
          return /* @__PURE__ */ k.jsx(Ys, {
            "aria-rowindex": xe,
            rowIdx: Se,
            gridRowStart: xe,
            row: J,
            top: Qe,
            bottom: void 0,
            viewportColumns: _r(Se),
            lastFrozenColumnIndex: rt,
            selectedCellIdx: De ? me.idx : void 0,
            isTop: !0,
            selectCell: Ki
          }, oe);
        }), /* @__PURE__ */ k.jsx(Jf, {
          value: ef,
          children: mf()
        }), a == null ? void 0 : a.map((J, oe) => {
          const xe = Yt + r.length + oe + 1, Se = r.length + oe, De = me.rowIdx === Se, Qe = Q > on ? Ot - V * (a.length - oe) : void 0, ct = Qe === void 0 ? V * (a.length - 1 - oe) : void 0;
          return /* @__PURE__ */ k.jsx(Ys, {
            "aria-rowindex": Ie - jt + oe + 1,
            rowIdx: Se,
            gridRowStart: xe,
            row: J,
            top: Qe,
            bottom: ct,
            viewportColumns: _r(Se),
            lastFrozenColumnIndex: rt,
            selectedCellIdx: De ? me.idx : void 0,
            isTop: !1,
            selectCell: Ki
          }, oe);
        })]
      })]
    }), ff(), Mf(Ct), ae && /* @__PURE__ */ k.jsx("div", {
      ref: S,
      tabIndex: Bs ? 0 : -1,
      className: Ce(lm, Bs && [jp, rt !== -1 && Fp], !pr(me.rowIdx) && cm),
      style: {
        gridRowStart: me.rowIdx + Yt + 1
      }
    }), Re !== null && /* @__PURE__ */ k.jsx(Qp, {
      scrollToPosition: Re,
      setScrollToCellPosition: it,
      gridElement: dt.current
    })]
  });
}
function qs(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function ea(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const Xc = /* @__PURE__ */ vi(bm);
function ym({
  id: e,
  groupKey: t,
  childRows: n,
  isExpanded: r,
  isCellSelected: i,
  column: a,
  row: s,
  groupColumnIndex: l,
  isGroupByColumn: c,
  toggleGroup: u
}) {
  var b;
  const {
    tabIndex: d,
    childTabIndex: f,
    onFocus: g
  } = Eo(i);
  function h() {
    u(e);
  }
  const y = c && l === a.idx;
  return /* @__PURE__ */ k.jsx("div", {
    role: "gridcell",
    "aria-colindex": a.idx + 1,
    "aria-selected": i,
    tabIndex: d,
    className: So(a),
    style: {
      ...Nr(a),
      cursor: y ? "pointer" : "default"
    },
    onClick: y ? h : void 0,
    onFocus: g,
    children: (!c || y) && ((b = a.renderGroupCell) == null ? void 0 : b.call(a, {
      groupKey: t,
      childRows: n,
      column: a,
      row: s,
      isExpanded: r,
      tabIndex: f,
      toggleGroup: h
    }))
  }, a.key);
}
const vm = /* @__PURE__ */ Qn(ym), xm = "g1yxluv37-0-0-beta-47", wm = `rdg-group-row ${xm}`;
function Cm({
  className: e,
  row: t,
  rowIdx: n,
  viewportColumns: r,
  selectedCellIdx: i,
  isRowSelected: a,
  selectCell: s,
  gridRowStart: l,
  groupBy: c,
  toggleGroup: u,
  isRowSelectionDisabled: d,
  ...f
}) {
  const g = r[0].key === Or ? t.level + 1 : t.level;
  function h() {
    s({
      rowIdx: n,
      idx: -1
    });
  }
  const y = ut(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: a
  }), [a]);
  return /* @__PURE__ */ k.jsx(Bc, {
    value: y,
    children: /* @__PURE__ */ k.jsx("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: Ce(Ga, wm, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, i === -1 && Ci),
      onClick: h,
      style: Ya(l),
      ...f,
      children: r.map((b) => /* @__PURE__ */ k.jsx(vm, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: i === b.idx,
        column: b,
        row: t,
        groupColumnIndex: g,
        toggleGroup: u,
        isGroupByColumn: c.includes(b.key)
      }, b.key))
    })
  });
}
const Sm = /* @__PURE__ */ Qn(Cm);
function Em({
  columns: e,
  rows: t,
  rowHeight: n,
  rowKeyGetter: r,
  onCellKeyDown: i,
  onRowsChange: a,
  selectedRows: s,
  onSelectedRowsChange: l,
  renderers: c,
  groupBy: u,
  rowGrouper: d,
  expandedGroupIds: f,
  onExpandedGroupIdsChange: g,
  ...h
}, y) {
  var X, ue, ne;
  const b = wi(), m = (c == null ? void 0 : c.renderRow) ?? (b == null ? void 0 : b.renderRow) ?? Kc, C = 1 + (((X = h.topSummaryRows) == null ? void 0 : X.length) ?? 0), T = h.direction === "rtl", v = T ? "ArrowRight" : "ArrowLeft", w = T ? "ArrowLeft" : "ArrowRight", x = _t(re), {
    columns: R,
    groupBy: O
  } = ut(() => {
    const F = [...e].sort(({
      key: G
    }, {
      key: L
    }) => G === Or ? -1 : L === Or ? 1 : u.includes(G) ? u.includes(L) ? u.indexOf(G) - u.indexOf(L) : -1 : u.includes(L) ? 1 : 0), z = [];
    for (const [G, L] of F.entries())
      u.includes(L.key) && (z.push(L.key), F[G] = {
        ...L,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: L.renderGroupCell ?? Kf,
        editable: !1
      });
    return {
      columns: F,
      groupBy: z
    };
  }, [e, u]), [I, $] = ut(() => {
    if (O.length === 0) return [void 0, t.length];
    const F = (z, [G, ...L], V) => {
      let Z = 0;
      const K = {};
      for (const [ce, W] of Object.entries(d(z, G))) {
        const [ye, D] = L.length === 0 ? [W, W.length] : F(W, L, V + Z + 1);
        K[ce] = {
          childRows: W,
          childGroups: ye,
          startRowIndex: V + Z
        }, Z += D + 1;
      }
      return [K, Z];
    };
    return F(t, O, 0);
  }, [O, d, t]), [p, P] = ut(() => {
    const F = /* @__PURE__ */ new Set();
    if (!I) return [t, L];
    const z = [], G = (V, Z, K) => {
      if (Tm(V)) {
        z.push(...V);
        return;
      }
      Object.keys(V).forEach((ce, W, ye) => {
        const D = Z !== void 0 ? `${Z}__${ce}` : ce, de = f.has(D), {
          childRows: ie,
          childGroups: $e,
          startRowIndex: ge
        } = V[ce], Ee = {
          id: D,
          parentId: Z,
          groupKey: ce,
          isExpanded: de,
          childRows: ie,
          level: K,
          posInSet: W,
          startRowIndex: ge,
          setSize: ye.length
        };
        z.push(Ee), F.add(Ee), de && G($e, D, K + 1);
      });
    };
    return G(I, void 0, 0), [z, L];
    function L(V) {
      return F.has(V);
    }
  }, [f, I, t]), M = ut(() => typeof n == "function" ? (F) => P(F) ? n({
    type: "GROUP",
    row: F
  }) : n({
    type: "ROW",
    row: F
  }) : n, [P, n]), j = Fn((F) => {
    const z = p.indexOf(F);
    for (let G = z - 1; G >= 0; G--) {
      const L = p[G];
      if (P(L) && (!P(F) || F.parentId === L.id))
        return [L, G];
    }
  }, [P, p]), U = Fn((F) => {
    if (P(F))
      return F.id;
    if (typeof r == "function")
      return r(F);
    const z = j(F);
    if (z !== void 0) {
      const {
        startRowIndex: G,
        childRows: L
      } = z[0], V = L.indexOf(F);
      return G + V + 1;
    }
    return p.indexOf(F);
  }, [j, P, r, p]), N = ut(() => {
    if (s == null) return null;
    Jr(r);
    const F = new Set(s);
    for (const z of p)
      P(z) && z.childRows.every((L) => s.has(r(L))) && F.add(z.id);
    return F;
  }, [P, r, s, p]);
  function B(F) {
    if (!l) return;
    Jr(r);
    const z = new Set(s);
    for (const G of p) {
      const L = U(G);
      if (N != null && N.has(L) && !F.has(L))
        if (P(G))
          for (const V of G.childRows)
            z.delete(r(V));
        else
          z.delete(L);
      else if (!(N != null && N.has(L)) && F.has(L))
        if (P(G))
          for (const V of G.childRows)
            z.add(r(V));
        else
          z.add(L);
    }
    l(z);
  }
  function ee(F, z) {
    if (i == null || i(F, z), z.isGridDefaultPrevented() || F.mode === "EDIT") return;
    const {
      column: G,
      rowIdx: L,
      selectCell: V
    } = F, Z = (G == null ? void 0 : G.idx) ?? -1, K = p[L];
    if (P(K)) {
      if (Z === -1 && (z.key === v && K.isExpanded || z.key === w && !K.isExpanded) && (z.preventDefault(), z.preventGridDefault(), re(K.id)), Z === -1 && z.key === v && !K.isExpanded && K.level !== 0) {
        const ce = j(K);
        ce !== void 0 && (z.preventGridDefault(), V({
          idx: Z,
          rowIdx: ce[1]
        }));
      }
      ti(z) && (z.keyCode === 67 || z.keyCode === 86) && z.preventGridDefault();
    }
  }
  function te(F, {
    indexes: z,
    column: G
  }) {
    if (!a) return;
    const L = [...t], V = [];
    for (const Z of z) {
      const K = t.indexOf(p[Z]);
      L[K] = F[Z], V.push(K);
    }
    a(L, {
      indexes: V,
      column: G
    });
  }
  function re(F) {
    const z = new Set(f);
    z.has(F) ? z.delete(F) : z.add(F), g(z);
  }
  function H(F, {
    row: z,
    rowClass: G,
    onCellClick: L,
    onCellDoubleClick: V,
    onCellContextMenu: Z,
    onRowChange: K,
    lastFrozenColumnIndex: ce,
    copiedCellIdx: W,
    draggedOverCellIdx: ye,
    setDraggedOverRowIdx: D,
    selectedCellEditor: de,
    ...ie
  }) {
    if (P(z)) {
      const {
        startRowIndex: Ee
      } = z;
      return /* @__PURE__ */ k.jsx(Sm, {
        ...ie,
        "aria-rowindex": C + Ee + 1,
        row: z,
        groupBy: O,
        toggleGroup: x
      }, F);
    }
    let $e = ie["aria-rowindex"];
    const ge = j(z);
    if (ge !== void 0) {
      const {
        startRowIndex: Ee,
        childRows: Ae
      } = ge[0], Te = Ae.indexOf(z);
      $e = Ee + C + Te + 2;
    }
    return m(F, {
      ...ie,
      "aria-rowindex": $e,
      row: z,
      rowClass: G,
      onCellClick: L,
      onCellDoubleClick: V,
      onCellContextMenu: Z,
      onRowChange: K,
      lastFrozenColumnIndex: ce,
      copiedCellIdx: W,
      draggedOverCellIdx: ye,
      setDraggedOverRowIdx: D,
      selectedCellEditor: de
    });
  }
  return /* @__PURE__ */ k.jsx(Xc, {
    ...h,
    role: "treegrid",
    "aria-rowcount": $ + 1 + (((ue = h.topSummaryRows) == null ? void 0 : ue.length) ?? 0) + (((ne = h.bottomSummaryRows) == null ? void 0 : ne.length) ?? 0),
    ref: y,
    columns: R,
    rows: p,
    rowHeight: M,
    rowKeyGetter: U,
    onRowsChange: te,
    selectedRows: N,
    onSelectedRowsChange: B,
    onCellKeyDown: ee,
    renderers: {
      ...c,
      renderRow: H
    }
  });
}
function Tm(e) {
  return Array.isArray(e);
}
const P1 = /* @__PURE__ */ vi(Em), Om = "t7vyx3i7-0-0-beta-47", Rm = `rdg-text-editor ${Om}`;
function Pm(e) {
  e == null || e.focus(), e == null || e.select();
}
function k1({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ k.jsx("input", {
    className: Rm,
    ref: Pm,
    value: e[t.key],
    onChange: (i) => n({
      ...e,
      [t.key]: i.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const St = {
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
}, km = {
  "--rdg-color": St.gray800,
  "--rdg-header-color": St.gray700,
  "--rdg-border-color": St.gray400,
  "--rdg-background-color": St.forcewhite,
  "--rdg-header-background-color": St.forcewhite,
  "--rdg-row-hover-background-color": St.forcewhite,
  "--rdg-row-selected-hover-background-color": St.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": St.primary400,
  "--rdg-row-selected-color": St.forcewhite
};
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ri.apply(null, arguments);
}
function Zc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Im = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $m = /* @__PURE__ */ Zc(
  function(e) {
    return Im.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Mm = !1;
function Nm(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Dm(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Am = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var a;
      r.tags.length === 0 ? r.insertionPoint ? a = r.insertionPoint.nextSibling : r.prepend ? a = r.container.firstChild : a = r.before : a = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, a), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !Mm : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Dm(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = Nm(i);
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
}(), kt = "-ms-", oi = "-moz-", Fe = "-webkit-", Qc = "comm", Ka = "rule", Xa = "decl", jm = "@import", Jc = "@keyframes", Fm = "@layer", _m = Math.abs, Si = String.fromCharCode, Lm = Object.assign;
function Bm(e, t) {
  return Rt(e, 0) ^ 45 ? (((t << 2 ^ Rt(e, 0)) << 2 ^ Rt(e, 1)) << 2 ^ Rt(e, 2)) << 2 ^ Rt(e, 3) : 0;
}
function eu(e) {
  return e.trim();
}
function zm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _e(e, t, n) {
  return e.replace(t, n);
}
function Oa(e, t) {
  return e.indexOf(t);
}
function Rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function so(e, t, n) {
  return e.slice(t, n);
}
function Tn(e) {
  return e.length;
}
function Za(e) {
  return e.length;
}
function Lo(e, t) {
  return t.push(e), e;
}
function Wm(e, t) {
  return e.map(t).join("");
}
var Ei = 1, Pr = 1, tu = 0, Vt = 0, wt = 0, Dr = "";
function Ti(e, t, n, r, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: a, line: Ei, column: Pr, length: s, return: "" };
}
function Wr(e, t) {
  return Lm(Ti("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Vm() {
  return wt;
}
function Hm() {
  return wt = Vt > 0 ? Rt(Dr, --Vt) : 0, Pr--, wt === 10 && (Pr = 1, Ei--), wt;
}
function Zt() {
  return wt = Vt < tu ? Rt(Dr, Vt++) : 0, Pr++, wt === 10 && (Pr = 1, Ei++), wt;
}
function In() {
  return Rt(Dr, Vt);
}
function Go() {
  return Vt;
}
function To(e, t) {
  return so(Dr, e, t);
}
function lo(e) {
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
function nu(e) {
  return Ei = Pr = 1, tu = Tn(Dr = e), Vt = 0, [];
}
function ru(e) {
  return Dr = "", e;
}
function Ko(e) {
  return eu(To(Vt - 1, Ra(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Um(e) {
  for (; (wt = In()) && wt < 33; )
    Zt();
  return lo(e) > 2 || lo(wt) > 3 ? "" : " ";
}
function Ym(e, t) {
  for (; --t && Zt() && !(wt < 48 || wt > 102 || wt > 57 && wt < 65 || wt > 70 && wt < 97); )
    ;
  return To(e, Go() + (t < 6 && In() == 32 && Zt() == 32));
}
function Ra(e) {
  for (; Zt(); )
    switch (wt) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ra(wt);
        break;
      case 40:
        e === 41 && Ra(e);
        break;
      case 92:
        Zt();
        break;
    }
  return Vt;
}
function qm(e, t) {
  for (; Zt() && e + wt !== 57; )
    if (e + wt === 84 && In() === 47)
      break;
  return "/*" + To(t, Vt - 1) + "*" + Si(e === 47 ? e : Zt());
}
function Gm(e) {
  for (; !lo(In()); )
    Zt();
  return To(e, Vt);
}
function Km(e) {
  return ru(Xo("", null, null, null, [""], e = nu(e), 0, [0], e));
}
function Xo(e, t, n, r, i, a, s, l, c) {
  for (var u = 0, d = 0, f = s, g = 0, h = 0, y = 0, b = 1, m = 1, C = 1, T = 0, v = "", w = i, x = a, R = r, O = v; m; )
    switch (y = T, T = Zt()) {
      case 40:
        if (y != 108 && Rt(O, f - 1) == 58) {
          Oa(O += _e(Ko(T), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Ko(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Um(y);
        break;
      case 92:
        O += Ym(Go() - 1, 7);
        continue;
      case 47:
        switch (In()) {
          case 42:
          case 47:
            Lo(Xm(qm(Zt(), Go()), t, n), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * b:
        l[u++] = Tn(O) * C;
      case 125 * b:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            C == -1 && (O = _e(O, /\f/g, "")), h > 0 && Tn(O) - f && Lo(h > 32 ? Ks(O + ";", r, n, f - 1) : Ks(_e(O, " ", "") + ";", r, n, f - 2), c);
            break;
          case 59:
            O += ";";
          default:
            if (Lo(R = Gs(O, t, n, u, d, i, l, v, w = [], x = [], f), a), T === 123)
              if (d === 0)
                Xo(O, t, R, R, w, a, f, l, x);
              else
                switch (g === 99 && Rt(O, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xo(e, R, R, r && Lo(Gs(e, R, R, 0, 0, i, l, v, i, w = [], f), x), i, x, f, l, r ? w : x);
                    break;
                  default:
                    Xo(O, R, R, R, [""], x, 0, l, x);
                }
        }
        u = d = h = 0, b = C = 1, v = O = "", f = s;
        break;
      case 58:
        f = 1 + Tn(O), h = y;
      default:
        if (b < 1) {
          if (T == 123)
            --b;
          else if (T == 125 && b++ == 0 && Hm() == 125)
            continue;
        }
        switch (O += Si(T), T * b) {
          case 38:
            C = d > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            l[u++] = (Tn(O) - 1) * C, C = 1;
            break;
          case 64:
            In() === 45 && (O += Ko(Zt())), g = In(), d = f = Tn(v = O += Gm(Go())), T++;
            break;
          case 45:
            y === 45 && Tn(O) == 2 && (b = 0);
        }
    }
  return a;
}
function Gs(e, t, n, r, i, a, s, l, c, u, d) {
  for (var f = i - 1, g = i === 0 ? a : [""], h = Za(g), y = 0, b = 0, m = 0; y < r; ++y)
    for (var C = 0, T = so(e, f + 1, f = _m(b = s[y])), v = e; C < h; ++C)
      (v = eu(b > 0 ? g[C] + " " + T : _e(T, /&\f/g, g[C]))) && (c[m++] = v);
  return Ti(e, t, n, i === 0 ? Ka : l, c, u, d);
}
function Xm(e, t, n) {
  return Ti(e, t, n, Qc, Si(Vm()), so(e, 2, -2), 0);
}
function Ks(e, t, n, r) {
  return Ti(e, t, n, Xa, so(e, 0, r), so(e, r + 1, -1), r);
}
function Sr(e, t) {
  for (var n = "", r = Za(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Zm(e, t, n, r) {
  switch (e.type) {
    case Fm:
      if (e.children.length) break;
    case jm:
    case Xa:
      return e.return = e.return || e.value;
    case Qc:
      return "";
    case Jc:
      return e.return = e.value + "{" + Sr(e.children, r) + "}";
    case Ka:
      e.value = e.props.join(",");
  }
  return Tn(n = Sr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Qm(e) {
  var t = Za(e);
  return function(n, r, i, a) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, i, a) || "";
    return s;
  };
}
function Jm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var eh = function(t, n, r) {
  for (var i = 0, a = 0; i = a, a = In(), i === 38 && a === 12 && (n[r] = 1), !lo(a); )
    Zt();
  return To(t, Vt);
}, th = function(t, n) {
  var r = -1, i = 44;
  do
    switch (lo(i)) {
      case 0:
        i === 38 && In() === 12 && (n[r] = 1), t[r] += eh(Vt - 1, n, r);
        break;
      case 2:
        t[r] += Ko(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = In() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Si(i);
    }
  while (i = Zt());
  return t;
}, nh = function(t, n) {
  return ru(th(nu(t), n));
}, Xs = /* @__PURE__ */ new WeakMap(), rh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xs.get(r)) && !i) {
      Xs.set(t, !0);
      for (var a = [], s = nh(n, a), l = r.props, c = 0, u = 0; c < s.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = a[c] ? s[c].replace(/&\f/g, l[d]) : l[d] + " " + s[c];
    }
  }
}, oh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ou(e, t) {
  switch (Bm(e, t)) {
    case 5103:
      return Fe + "print-" + e + e;
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
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Fe + e + oi + e + kt + e + e;
    case 6828:
    case 4268:
      return Fe + e + kt + e + e;
    case 6165:
      return Fe + e + kt + "flex-" + e + e;
    case 5187:
      return Fe + e + _e(e, /(\w+).+(:[^]+)/, Fe + "box-$1$2" + kt + "flex-$1$2") + e;
    case 5443:
      return Fe + e + kt + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return Fe + e + kt + "flex-line-pack" + _e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Fe + e + kt + _e(e, "shrink", "negative") + e;
    case 5292:
      return Fe + e + kt + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return Fe + "box-" + _e(e, "-grow", "") + Fe + e + kt + _e(e, "grow", "positive") + e;
    case 4554:
      return Fe + _e(e, /([^-])(transform)/g, "$1" + Fe + "$2") + e;
    case 6187:
      return _e(_e(_e(e, /(zoom-|grab)/, Fe + "$1"), /(image-set)/, Fe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, Fe + "$1$`$1");
    case 4968:
      return _e(_e(e, /(.+:)(flex-)?(.*)/, Fe + "box-pack:$3" + kt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Fe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(e, /(.+)-inline(.+)/, Fe + "$1$2") + e;
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
      if (Tn(e) - 1 - t > 6) switch (Rt(e, t + 1)) {
        case 109:
          if (Rt(e, t + 4) !== 45) break;
        case 102:
          return _e(e, /(.+:)(.+)-([^]+)/, "$1" + Fe + "$2-$3$1" + oi + (Rt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Oa(e, "stretch") ? ou(_e(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Rt(e, t + 1) !== 115) break;
    case 6444:
      switch (Rt(e, Tn(e) - 3 - (~Oa(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + Fe) + e;
        case 101:
          return _e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Fe + (Rt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Fe + "$2$3$1" + kt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Rt(e, t + 11)) {
        case 114:
          return Fe + e + kt + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Fe + e + kt + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Fe + e + kt + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Fe + e + kt + e + e;
  }
  return e;
}
var ih = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Xa:
      t.return = ou(t.value, t.length);
      break;
    case Jc:
      return Sr([Wr(t, {
        value: _e(t.value, "@", "@" + Fe)
      })], i);
    case Ka:
      if (t.length) return Wm(t.props, function(a) {
        switch (zm(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Sr([Wr(t, {
              props: [_e(a, /:(read-\w+)/, ":" + oi + "$1")]
            })], i);
          case "::placeholder":
            return Sr([Wr(t, {
              props: [_e(a, /:(plac\w+)/, ":" + Fe + "input-$1")]
            }), Wr(t, {
              props: [_e(a, /:(plac\w+)/, ":" + oi + "$1")]
            }), Wr(t, {
              props: [_e(a, /:(plac\w+)/, kt + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, ah = [ih], sh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var m = b.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || ah, a = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(b) {
      for (var m = b.getAttribute("data-emotion").split(" "), C = 1; C < m.length; C++)
        a[m[C]] = !0;
      l.push(b);
    }
  );
  var c, u = [rh, oh];
  {
    var d, f = [Zm, Jm(function(b) {
      d.insert(b);
    })], g = Qm(u.concat(i, f)), h = function(m) {
      return Sr(Km(m), g);
    };
    c = function(m, C, T, v) {
      d = T, h(m ? m + "{" + C.styles + "}" : C.styles), v && (y.inserted[C.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new Am({
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
  return y.sheet.hydrate(l), y;
}, Pa = { exports: {} }, Be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs;
function lh() {
  if (Zs) return Be;
  Zs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var R = x.$$typeof;
      switch (R) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case r:
            case a:
            case i:
            case f:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case d:
                case y:
                case h:
                case s:
                  return x;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function w(x) {
    return v(x) === u;
  }
  return Be.AsyncMode = c, Be.ConcurrentMode = u, Be.ContextConsumer = l, Be.ContextProvider = s, Be.Element = t, Be.ForwardRef = d, Be.Fragment = r, Be.Lazy = y, Be.Memo = h, Be.Portal = n, Be.Profiler = a, Be.StrictMode = i, Be.Suspense = f, Be.isAsyncMode = function(x) {
    return w(x) || v(x) === c;
  }, Be.isConcurrentMode = w, Be.isContextConsumer = function(x) {
    return v(x) === l;
  }, Be.isContextProvider = function(x) {
    return v(x) === s;
  }, Be.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Be.isForwardRef = function(x) {
    return v(x) === d;
  }, Be.isFragment = function(x) {
    return v(x) === r;
  }, Be.isLazy = function(x) {
    return v(x) === y;
  }, Be.isMemo = function(x) {
    return v(x) === h;
  }, Be.isPortal = function(x) {
    return v(x) === n;
  }, Be.isProfiler = function(x) {
    return v(x) === a;
  }, Be.isStrictMode = function(x) {
    return v(x) === i;
  }, Be.isSuspense = function(x) {
    return v(x) === f;
  }, Be.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === a || x === i || x === f || x === g || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === h || x.$$typeof === s || x.$$typeof === l || x.$$typeof === d || x.$$typeof === m || x.$$typeof === C || x.$$typeof === T || x.$$typeof === b);
  }, Be.typeOf = v, Be;
}
var ze = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function ch() {
  return Qs || (Qs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function v(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === r || W === u || W === a || W === i || W === f || W === g || typeof W == "object" && W !== null && (W.$$typeof === y || W.$$typeof === h || W.$$typeof === s || W.$$typeof === l || W.$$typeof === d || W.$$typeof === m || W.$$typeof === C || W.$$typeof === T || W.$$typeof === b);
    }
    function w(W) {
      if (typeof W == "object" && W !== null) {
        var ye = W.$$typeof;
        switch (ye) {
          case t:
            var D = W.type;
            switch (D) {
              case c:
              case u:
              case r:
              case a:
              case i:
              case f:
                return D;
              default:
                var de = D && D.$$typeof;
                switch (de) {
                  case l:
                  case d:
                  case y:
                  case h:
                  case s:
                    return de;
                  default:
                    return ye;
                }
            }
          case n:
            return ye;
        }
      }
    }
    var x = c, R = u, O = l, I = s, $ = t, p = d, P = r, M = y, j = h, U = n, N = a, B = i, ee = f, te = !1;
    function re(W) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(W) || w(W) === c;
    }
    function H(W) {
      return w(W) === u;
    }
    function X(W) {
      return w(W) === l;
    }
    function ue(W) {
      return w(W) === s;
    }
    function ne(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function F(W) {
      return w(W) === d;
    }
    function z(W) {
      return w(W) === r;
    }
    function G(W) {
      return w(W) === y;
    }
    function L(W) {
      return w(W) === h;
    }
    function V(W) {
      return w(W) === n;
    }
    function Z(W) {
      return w(W) === a;
    }
    function K(W) {
      return w(W) === i;
    }
    function ce(W) {
      return w(W) === f;
    }
    ze.AsyncMode = x, ze.ConcurrentMode = R, ze.ContextConsumer = O, ze.ContextProvider = I, ze.Element = $, ze.ForwardRef = p, ze.Fragment = P, ze.Lazy = M, ze.Memo = j, ze.Portal = U, ze.Profiler = N, ze.StrictMode = B, ze.Suspense = ee, ze.isAsyncMode = re, ze.isConcurrentMode = H, ze.isContextConsumer = X, ze.isContextProvider = ue, ze.isElement = ne, ze.isForwardRef = F, ze.isFragment = z, ze.isLazy = G, ze.isMemo = L, ze.isPortal = V, ze.isProfiler = Z, ze.isStrictMode = K, ze.isSuspense = ce, ze.isValidElementType = v, ze.typeOf = w;
  }()), ze;
}
process.env.NODE_ENV === "production" ? Pa.exports = lh() : Pa.exports = ch();
var Qa = Pa.exports, iu = Qa, uh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, dh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, au = {};
au[iu.ForwardRef] = uh;
au[iu.Memo] = dh;
var fh = !0;
function ph(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var su = function(t, n, r) {
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
  fh === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, lu = function(t, n, r) {
  su(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function mh(e) {
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
var hh = {
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
}, gh = !1, bh = /[A-Z]|^ms/g, yh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, cu = function(t) {
  return t.charCodeAt(1) === 45;
}, Js = function(t) {
  return t != null && typeof t != "boolean";
}, ta = /* @__PURE__ */ Zc(function(e) {
  return cu(e) ? e : e.replace(bh, "-$&").toLowerCase();
}), el = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(yh, function(r, i, a) {
          return On = {
            name: i,
            styles: a,
            next: On
          }, i;
        });
  }
  return hh[t] !== 1 && !cu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, vh = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function co(e, t, n) {
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
        return On = {
          name: i.name,
          styles: i.styles,
          next: On
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            On = {
              name: s.name,
              styles: s.styles,
              next: On
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return xh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = On, u = n(e);
        return On = c, co(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function xh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += co(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += a + "{" + t[l] + "}" : Js(l) && (r += ta(a) + ":" + el(a, l) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && gh)
          throw new Error(vh);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            Js(s[c]) && (r += ta(a) + ":" + el(a, s[c]) + ";");
        else {
          var u = co(e, t, s);
          switch (a) {
            case "animation":
            case "animationName": {
              r += ta(a) + ":" + u + ";";
              break;
            }
            default:
              r += a + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var tl = /label:\s*([^\s;{]+)\s*(;|$)/g, On;
function Oi(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  On = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += co(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += co(n, t, e[l]), r) {
      var c = a;
      i += c[l];
    }
  tl.lastIndex = 0;
  for (var u = "", d; (d = tl.exec(i)) !== null; )
    u += "-" + d[1];
  var f = mh(i) + u;
  return {
    name: f,
    styles: i,
    next: On
  };
}
var wh = function(t) {
  return t();
}, uu = E.useInsertionEffect ? E.useInsertionEffect : !1, Ch = uu || wh, nl = uu || E.useLayoutEffect, du = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ sh({
    key: "css"
  }) : null
);
du.Provider;
var fu = function(t) {
  return /* @__PURE__ */ vi(function(n, r) {
    var i = Gn(du);
    return t(n, i, r);
  });
}, Ja = /* @__PURE__ */ E.createContext({}), Sh = /* @__PURE__ */ fu(function(e, t) {
  var n = e.styles, r = Oi([n], void 0, E.useContext(Ja)), i = E.useRef();
  return nl(function() {
    var a = t.key + "-global", s = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), s.hydrate([c])), i.current = [s, l], function() {
      s.flush();
    };
  }, [t]), nl(function() {
    var a = i.current, s = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && lu(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Eh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Oi(t);
}
var es = function() {
  var t = Eh.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Th = $m, Oh = function(t) {
  return t !== "theme";
}, rl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Th : Oh;
}, ol = function(t, n, r) {
  var i;
  if (n) {
    var a = n.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Rh = !1, Ph = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return su(n, r, i), Ch(function() {
    return lu(n, r, i);
  }), null;
}, kh = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, a, s;
  n !== void 0 && (a = n.label, s = n.target);
  var l = ol(t, n, r), c = l || rl(i), u = !c("as");
  return function() {
    var d = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && f.push("label:" + a + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      f.push(d[0][0]);
      for (var g = d.length, h = 1; h < g; h++)
        f.push(d[h], d[0][h]);
    }
    var y = fu(function(b, m, C) {
      var T = u && b.as || i, v = "", w = [], x = b;
      if (b.theme == null) {
        x = {};
        for (var R in b)
          x[R] = b[R];
        x.theme = E.useContext(Ja);
      }
      typeof b.className == "string" ? v = ph(m.registered, w, b.className) : b.className != null && (v = b.className + " ");
      var O = Oi(f.concat(w), m.registered, x);
      v += m.key + "-" + O.name, s !== void 0 && (v += " " + s);
      var I = u && l === void 0 ? rl(T) : c, $ = {};
      for (var p in b)
        u && p === "as" || I(p) && ($[p] = b[p]);
      return $.className = v, C && ($.ref = C), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Ph, {
        cache: m,
        serialized: O,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ E.createElement(T, $));
    });
    return y.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = f, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return s === void 0 && Rh ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), y.withComponent = function(b, m) {
      return e(b, ri({}, n, m, {
        shouldForwardProp: ol(y, m, !0)
      })).apply(void 0, f);
    }, y;
  };
}, Ih = [
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
], Kn = kh.bind();
Ih.forEach(function(e) {
  Kn[e] = Kn(e);
});
const $h = Kn.div`
  width: 100%;
  position: relative;
  height: 100%;

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${St.primary500};
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background-color: ${St.gray100};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color ${St.primary500};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${St.gray200};
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
var eo = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e))(eo || {}), uo = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(uo || {});
function Mh(e, t, n) {
  return (r, i) => {
    const a = r[e], s = i[e];
    try {
      if (n)
        return n(a, s);
      if (t === eo.NUMBER) {
        const l = Number(a), c = Number(s);
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid number for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      } else if (t === eo.DATE) {
        const l = new Date(a).getTime(), c = new Date(s).getTime();
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid date for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      }
      return t === eo.STRING || !t ? String(a).localeCompare(String(s)) : 0;
    } catch (l) {
      return console.error("Error in sorting:", l), 0;
    }
  };
}
const Nh = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, i] = It(n ?? []);
  return {
    sortedRows: ut(() => r.length === 0 ? t : [...t].sort((s, l) => {
      for (const c of r) {
        const u = e.find((g) => g.key === c.columnKey), f = Mh(
          c.columnKey,
          u == null ? void 0 : u.type,
          u == null ? void 0 : u.sortComparator
        )(s, l);
        if (f !== 0)
          return c.direction === "ASC" ? f : -f;
      }
      return 0;
    }), [t, r]),
    sortColumns: r,
    setSortedColumns: i
  };
};
function Mn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
var ka = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var na, il;
function Dh() {
  if (il) return na;
  il = 1;
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
      var c = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return na = i() ? Object.assign : function(a, s) {
    for (var l, c = r(a), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var g = 0; g < u.length; g++)
          n.call(l, u[g]) && (c[u[g]] = l[u[g]]);
      }
    }
    return c;
  }, na;
}
var ra, al;
function ts() {
  if (al) return ra;
  al = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ra = e, ra;
}
var oa, sl;
function pu() {
  return sl || (sl = 1, oa = Function.call.bind(Object.prototype.hasOwnProperty)), oa;
}
var ia, ll;
function Ah() {
  if (ll) return ia;
  ll = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ts(), n = {}, r = pu();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (r(a, d)) {
          var f;
          try {
            if (typeof a[d] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            f = a[d](s, d, c, l, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var h = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ia = i, ia;
}
var aa, cl;
function jh() {
  if (cl) return aa;
  cl = 1;
  var e = Qa, t = Dh(), n = ts(), r = pu(), i = Ah(), a = function() {
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
  return aa = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(H) {
      var X = H && (u && H[u] || H[d]);
      if (typeof X == "function")
        return X;
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
      element: w(),
      elementType: x(),
      instanceOf: R,
      node: p(),
      objectOf: I,
      oneOf: O,
      oneOfType: $,
      shape: M,
      exact: j
    };
    function y(H, X) {
      return H === X ? H !== 0 || 1 / H === 1 / X : H !== H && X !== X;
    }
    function b(H, X) {
      this.message = H, this.data = X && typeof X == "object" ? X : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function m(H) {
      if (process.env.NODE_ENV !== "production")
        var X = {}, ue = 0;
      function ne(z, G, L, V, Z, K, ce) {
        if (V = V || g, K = K || L, ce !== n) {
          if (c) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = V + ":" + L;
            !X[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            ue < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), X[ye] = !0, ue++);
          }
        }
        return G[L] == null ? z ? G[L] === null ? new b("The " + Z + " `" + K + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new b("The " + Z + " `" + K + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : H(G, L, V, Z, K);
      }
      var F = ne.bind(null, !1);
      return F.isRequired = ne.bind(null, !0), F;
    }
    function C(H) {
      function X(ue, ne, F, z, G, L) {
        var V = ue[ne], Z = B(V);
        if (Z !== H) {
          var K = ee(V);
          return new b(
            "Invalid " + z + " `" + G + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected ") + ("`" + H + "`."),
            { expectedType: H }
          );
        }
        return null;
      }
      return m(X);
    }
    function T() {
      return m(s);
    }
    function v(H) {
      function X(ue, ne, F, z, G) {
        if (typeof H != "function")
          return new b("Property `" + G + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var L = ue[ne];
        if (!Array.isArray(L)) {
          var V = B(L);
          return new b("Invalid " + z + " `" + G + "` of type " + ("`" + V + "` supplied to `" + F + "`, expected an array."));
        }
        for (var Z = 0; Z < L.length; Z++) {
          var K = H(L, Z, F, z, G + "[" + Z + "]", n);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return m(X);
    }
    function w() {
      function H(X, ue, ne, F, z) {
        var G = X[ue];
        if (!l(G)) {
          var L = B(G);
          return new b("Invalid " + F + " `" + z + "` of type " + ("`" + L + "` supplied to `" + ne + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(H);
    }
    function x() {
      function H(X, ue, ne, F, z) {
        var G = X[ue];
        if (!e.isValidElementType(G)) {
          var L = B(G);
          return new b("Invalid " + F + " `" + z + "` of type " + ("`" + L + "` supplied to `" + ne + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(H);
    }
    function R(H) {
      function X(ue, ne, F, z, G) {
        if (!(ue[ne] instanceof H)) {
          var L = H.name || g, V = re(ue[ne]);
          return new b("Invalid " + z + " `" + G + "` of type " + ("`" + V + "` supplied to `" + F + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return m(X);
    }
    function O(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function X(ue, ne, F, z, G) {
        for (var L = ue[ne], V = 0; V < H.length; V++)
          if (y(L, H[V]))
            return null;
        var Z = JSON.stringify(H, function(ce, W) {
          var ye = ee(W);
          return ye === "symbol" ? String(W) : W;
        });
        return new b("Invalid " + z + " `" + G + "` of value `" + String(L) + "` " + ("supplied to `" + F + "`, expected one of " + Z + "."));
      }
      return m(X);
    }
    function I(H) {
      function X(ue, ne, F, z, G) {
        if (typeof H != "function")
          return new b("Property `" + G + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var L = ue[ne], V = B(L);
        if (V !== "object")
          return new b("Invalid " + z + " `" + G + "` of type " + ("`" + V + "` supplied to `" + F + "`, expected an object."));
        for (var Z in L)
          if (r(L, Z)) {
            var K = H(L, Z, F, z, G + "." + Z, n);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return m(X);
    }
    function $(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var X = 0; X < H.length; X++) {
        var ue = H[X];
        if (typeof ue != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(ue) + " at index " + X + "."
          ), s;
      }
      function ne(F, z, G, L, V) {
        for (var Z = [], K = 0; K < H.length; K++) {
          var ce = H[K], W = ce(F, z, G, L, V, n);
          if (W == null)
            return null;
          W.data && r(W.data, "expectedType") && Z.push(W.data.expectedType);
        }
        var ye = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new b("Invalid " + L + " `" + V + "` supplied to " + ("`" + G + "`" + ye + "."));
      }
      return m(ne);
    }
    function p() {
      function H(X, ue, ne, F, z) {
        return U(X[ue]) ? null : new b("Invalid " + F + " `" + z + "` supplied to " + ("`" + ne + "`, expected a ReactNode."));
      }
      return m(H);
    }
    function P(H, X, ue, ne, F) {
      return new b(
        (H || "React class") + ": " + X + " type `" + ue + "." + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function M(H) {
      function X(ue, ne, F, z, G) {
        var L = ue[ne], V = B(L);
        if (V !== "object")
          return new b("Invalid " + z + " `" + G + "` of type `" + V + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var Z in H) {
          var K = H[Z];
          if (typeof K != "function")
            return P(F, z, G, Z, ee(K));
          var ce = K(L, Z, F, z, G + "." + Z, n);
          if (ce)
            return ce;
        }
        return null;
      }
      return m(X);
    }
    function j(H) {
      function X(ue, ne, F, z, G) {
        var L = ue[ne], V = B(L);
        if (V !== "object")
          return new b("Invalid " + z + " `" + G + "` of type `" + V + "` " + ("supplied to `" + F + "`, expected `object`."));
        var Z = t({}, ue[ne], H);
        for (var K in Z) {
          var ce = H[K];
          if (r(H, K) && typeof ce != "function")
            return P(F, z, G, K, ee(ce));
          if (!ce)
            return new b(
              "Invalid " + z + " `" + G + "` key `" + K + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(ue[ne], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(H), null, "  ")
            );
          var W = ce(L, K, F, z, G + "." + K, n);
          if (W)
            return W;
        }
        return null;
      }
      return m(X);
    }
    function U(H) {
      switch (typeof H) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !H;
        case "object":
          if (Array.isArray(H))
            return H.every(U);
          if (H === null || l(H))
            return !0;
          var X = f(H);
          if (X) {
            var ue = X.call(H), ne;
            if (X !== H.entries) {
              for (; !(ne = ue.next()).done; )
                if (!U(ne.value))
                  return !1;
            } else
              for (; !(ne = ue.next()).done; ) {
                var F = ne.value;
                if (F && !U(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(H, X) {
      return H === "symbol" ? !0 : X ? X["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && X instanceof Symbol : !1;
    }
    function B(H) {
      var X = typeof H;
      return Array.isArray(H) ? "array" : H instanceof RegExp ? "object" : N(X, H) ? "symbol" : X;
    }
    function ee(H) {
      if (typeof H > "u" || H === null)
        return "" + H;
      var X = B(H);
      if (X === "object") {
        if (H instanceof Date)
          return "date";
        if (H instanceof RegExp)
          return "regexp";
      }
      return X;
    }
    function te(H) {
      var X = ee(H);
      switch (X) {
        case "array":
        case "object":
          return "an " + X;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + X;
        default:
          return X;
      }
    }
    function re(H) {
      return !H.constructor || !H.constructor.name ? g : H.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, aa;
}
var sa, ul;
function Fh() {
  if (ul) return sa;
  ul = 1;
  var e = ts();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, sa = function() {
    function r(s, l, c, u, d, f) {
      if (f !== e) {
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
  }, sa;
}
if (process.env.NODE_ENV !== "production") {
  var _h = Qa, Lh = !0;
  ka.exports = jh()(_h.isElement, Lh);
} else
  ka.exports = Fh()();
var Bh = ka.exports;
const o = /* @__PURE__ */ Ef(Bh);
function zh(e) {
  return e == null || Object.keys(e).length === 0;
}
function mu(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(zh(i) ? n : i) : t;
  return /* @__PURE__ */ k.jsx(Sh, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (mu.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v6.1.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function hu(e, t) {
  const n = Kn(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Wh(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const dl = [];
function fl(e) {
  return dl[0] = e, Oi(dl);
}
function Pn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function gu(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !Pn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = gu(e[n]);
  }), t;
}
function $t(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Pn(e) && Pn(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ E.isValidElement(t[i]) ? r[i] = t[i] : Pn(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Pn(e[i]) ? r[i] = $t(e[i], t[i], n) : n.clone ? r[i] = Pn(t[i]) ? gu(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Vh = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Hh(e) {
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
  } = e, a = Vh(t), s = Object.keys(a);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - r / 100}${n})`;
  }
  function u(g, h) {
    const y = s.indexOf(h);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : h) - r / 100}${n})`;
  }
  function d(g) {
    return s.indexOf(g) + 1 < s.length ? u(g, s[s.indexOf(g) + 1]) : l(g);
  }
  function f(g) {
    const h = s.indexOf(g);
    return h === 0 ? l(s[1]) : h === s.length - 1 ? c(s[h]) : u(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n,
    ...i
  };
}
function Uh(e, t) {
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
function Yh(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function qh(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Mn(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(a);
}
function Gh(e) {
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
const Kh = {
  borderRadius: 4
}, Jn = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function to(e, t) {
  return t ? $t(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ri = {
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
}, pl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ri[e]}px)`
}, Xh = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ri[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function _n(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || pl;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || pl;
    return Object.keys(t).reduce((s, l) => {
      if (Yh(a.keys, l)) {
        const c = qh(r.containerQueries ? r : Xh, l);
        c && (s[c] = n(t[l], l));
      } else if (Object.keys(a.values || Ri).includes(l)) {
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
function Zh(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function Qh(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function he(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Mn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Pi(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function ii(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Pi(e, n) || r, t && (i = t(i, r, e)), i;
}
function yt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = Pi(c, r) || {};
    return _n(s, l, (f) => {
      let g = ii(u, i, f);
      return f === g && typeof f == "string" && (g = ii(u, i, `${t}${f === "default" ? "" : he(f)}`, f)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Jn
  } : {}, a.filterProps = [t], a;
}
function Jh(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const eg = {
  m: "margin",
  p: "padding"
}, tg = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ml = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ng = Jh((e) => {
  if (e.length > 2)
    if (ml[e])
      e = ml[e];
    else
      return [e];
  const [t, n] = e.split(""), r = eg[t], i = tg[n] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), ki = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ii = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], rg = [...ki, ...Ii];
function Oo(e, t, n, r) {
  const i = Pi(e, t, !0) ?? n;
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
function ns(e) {
  return Oo(e, "spacing", 8, "spacing");
}
function Ro(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function og(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Ro(t, n), r), {});
}
function ig(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = ng(n), a = og(i, r), s = e[n];
  return _n(e, s, a);
}
function bu(e, t) {
  const n = ns(e.theme);
  return Object.keys(e).map((r) => ig(e, t, r, n)).reduce(to, {});
}
function mt(e) {
  return bu(e, ki);
}
mt.propTypes = process.env.NODE_ENV !== "production" ? ki.reduce((e, t) => (e[t] = Jn, e), {}) : {};
mt.filterProps = ki;
function ht(e) {
  return bu(e, Ii);
}
ht.propTypes = process.env.NODE_ENV !== "production" ? Ii.reduce((e, t) => (e[t] = Jn, e), {}) : {};
ht.filterProps = Ii;
process.env.NODE_ENV !== "production" && rg.reduce((e, t) => (e[t] = Jn, e), {});
function yu(e = 8, t = ns({
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
function $i(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, a) => t[a] ? to(i, t[a](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function ln(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function mn(e, t) {
  return yt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ag = mn("border", ln), sg = mn("borderTop", ln), lg = mn("borderRight", ln), cg = mn("borderBottom", ln), ug = mn("borderLeft", ln), dg = mn("borderColor"), fg = mn("borderTopColor"), pg = mn("borderRightColor"), mg = mn("borderBottomColor"), hg = mn("borderLeftColor"), gg = mn("outline", ln), bg = mn("outlineColor"), Mi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Oo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Ro(t, r)
    });
    return _n(e, e.borderRadius, n);
  }
  return null;
};
Mi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Jn
} : {};
Mi.filterProps = ["borderRadius"];
$i(ag, sg, lg, cg, ug, dg, fg, pg, mg, hg, Mi, gg, bg);
const Ni = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Oo(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Ro(t, r)
    });
    return _n(e, e.gap, n);
  }
  return null;
};
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Jn
} : {};
Ni.filterProps = ["gap"];
const Di = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Oo(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Ro(t, r)
    });
    return _n(e, e.columnGap, n);
  }
  return null;
};
Di.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Jn
} : {};
Di.filterProps = ["columnGap"];
const Ai = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Oo(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Ro(t, r)
    });
    return _n(e, e.rowGap, n);
  }
  return null;
};
Ai.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Jn
} : {};
Ai.filterProps = ["rowGap"];
const yg = yt({
  prop: "gridColumn"
}), vg = yt({
  prop: "gridRow"
}), xg = yt({
  prop: "gridAutoFlow"
}), wg = yt({
  prop: "gridAutoColumns"
}), Cg = yt({
  prop: "gridAutoRows"
}), Sg = yt({
  prop: "gridTemplateColumns"
}), Eg = yt({
  prop: "gridTemplateRows"
}), Tg = yt({
  prop: "gridTemplateAreas"
}), Og = yt({
  prop: "gridArea"
});
$i(Ni, Di, Ai, yg, vg, xg, wg, Cg, Sg, Eg, Tg, Og);
function Er(e, t) {
  return t === "grey" ? t : e;
}
const Rg = yt({
  prop: "color",
  themeKey: "palette",
  transform: Er
}), Pg = yt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Er
}), kg = yt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Er
});
$i(Rg, Pg, kg);
function Xt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ig = yt({
  prop: "width",
  transform: Xt
}), rs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const r = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || Ri[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Xt(n)
      };
    };
    return _n(e, e.maxWidth, t);
  }
  return null;
};
rs.filterProps = ["maxWidth"];
const $g = yt({
  prop: "minWidth",
  transform: Xt
}), Mg = yt({
  prop: "height",
  transform: Xt
}), Ng = yt({
  prop: "maxHeight",
  transform: Xt
}), Dg = yt({
  prop: "minHeight",
  transform: Xt
});
yt({
  prop: "size",
  cssProperty: "width",
  transform: Xt
});
yt({
  prop: "size",
  cssProperty: "height",
  transform: Xt
});
const Ag = yt({
  prop: "boxSizing"
});
$i(Ig, rs, $g, Mg, Ng, Dg, Ag);
const Po = {
  // borders
  border: {
    themeKey: "borders",
    transform: ln
  },
  borderTop: {
    themeKey: "borders",
    transform: ln
  },
  borderRight: {
    themeKey: "borders",
    transform: ln
  },
  borderBottom: {
    themeKey: "borders",
    transform: ln
  },
  borderLeft: {
    themeKey: "borders",
    transform: ln
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
    transform: ln
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Mi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Er
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Er
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Er
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
    style: Ni
  },
  rowGap: {
    style: Ai
  },
  columnGap: {
    style: Di
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
    transform: Xt
  },
  maxWidth: {
    style: rs
  },
  minWidth: {
    transform: Xt
  },
  height: {
    transform: Xt
  },
  maxHeight: {
    transform: Xt
  },
  minHeight: {
    transform: Xt
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
function jg(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Fg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _g() {
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
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const g = Pi(i, u) || {};
    return f ? f(s) : _n(s, r, (y) => {
      let b = ii(g, d, y);
      return y === b && typeof y == "string" && (b = ii(g, d, `${n}${y === "default" ? "" : he(y)}`, y)), c === !1 ? b : {
        [c]: b
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
    const a = i.unstable_sxConfig ?? Po;
    function s(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Zh(i.breakpoints), d = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((g) => {
        const h = Fg(c[g], i);
        if (h != null)
          if (typeof h == "object")
            if (a[g])
              f = to(f, e(g, h, i, a));
            else {
              const y = _n({
                theme: i
              }, h, (b) => ({
                [g]: b
              }));
              jg(y, h) ? f[g] = t({
                sx: h,
                theme: i
              }) : f = to(f, y);
            }
          else
            f = to(f, e(g, h, i, a));
      }), Uh(i, Qh(d, f));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const lr = _g();
lr.filterProps = ["sx"];
function Lg(e, t) {
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
function os(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = Hh(n), c = yu(i);
  let u = $t({
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
      ...Kh,
      ...a
    }
  }, s);
  return u = Gh(u), u.applyStyles = Lg, u = t.reduce((d, f) => $t(d, f), u), u.unstable_sxConfig = {
    ...Po,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return lr({
      sx: f,
      theme: this
    });
  }, u;
}
function Bg(e) {
  return Object.keys(e).length === 0;
}
function zg(e = null) {
  const t = E.useContext(Ja);
  return !t || Bg(t) ? e : t;
}
const Wg = os();
function is(e = Wg) {
  return zg(e);
}
function vu({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = is(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ k.jsx(mu, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (vu.propTypes = {
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
const Vg = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Po;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function Hg(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = Vg(n);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...s) => {
    const l = t(...s);
    return Pn(l) ? {
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
const hl = (e) => e, Ug = () => {
  let e = hl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = hl;
    }
  };
}, xu = Ug();
function Yg(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = hu("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(lr);
  return /* @__PURE__ */ E.forwardRef(function(c, u) {
    const d = is(n), {
      className: f,
      component: g = "div",
      ...h
    } = Hg(c);
    return /* @__PURE__ */ k.jsx(a, {
      as: g,
      ref: u,
      className: Ce(f, i ? i(r) : r),
      theme: t && d[t] || d,
      ...h
    });
  });
}
const qg = {
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
function Xe(e, t, n = "Mui") {
  const r = qg[t];
  return r ? `${n}-${r}` : `${xu.generate(e)}-${t}`;
}
function Ze(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Xe(e, i, n);
  }), r;
}
var Ia = { exports: {} }, We = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function Gg() {
  if (gl) return We;
  gl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var C = m.$$typeof;
      switch (C) {
        case e:
          switch (m = m.type, m) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case s:
                case c:
                case g:
                case f:
                case a:
                  return m;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return We.ContextConsumer = s, We.ContextProvider = a, We.Element = e, We.ForwardRef = c, We.Fragment = n, We.Lazy = g, We.Memo = f, We.Portal = t, We.Profiler = i, We.StrictMode = r, We.Suspense = u, We.SuspenseList = d, We.isAsyncMode = function() {
    return !1;
  }, We.isConcurrentMode = function() {
    return !1;
  }, We.isContextConsumer = function(m) {
    return b(m) === s;
  }, We.isContextProvider = function(m) {
    return b(m) === a;
  }, We.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, We.isForwardRef = function(m) {
    return b(m) === c;
  }, We.isFragment = function(m) {
    return b(m) === n;
  }, We.isLazy = function(m) {
    return b(m) === g;
  }, We.isMemo = function(m) {
    return b(m) === f;
  }, We.isPortal = function(m) {
    return b(m) === t;
  }, We.isProfiler = function(m) {
    return b(m) === i;
  }, We.isStrictMode = function(m) {
    return b(m) === r;
  }, We.isSuspense = function(m) {
    return b(m) === u;
  }, We.isSuspenseList = function(m) {
    return b(m) === d;
  }, We.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === i || m === r || m === u || m === d || m === h || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === f || m.$$typeof === a || m.$$typeof === s || m.$$typeof === c || m.$$typeof === y || m.getModuleId !== void 0);
  }, We.typeOf = b, We;
}
var Ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bl;
function Kg() {
  return bl || (bl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = !1, b = !1, m = !1, C = !1, T = !1, v;
    v = Symbol.for("react.module.reference");
    function w(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === i || T || D === r || D === u || D === d || C || D === h || y || b || m || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === f || D.$$typeof === a || D.$$typeof === s || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === v || D.getModuleId !== void 0));
    }
    function x(D) {
      if (typeof D == "object" && D !== null) {
        var de = D.$$typeof;
        switch (de) {
          case e:
            var ie = D.type;
            switch (ie) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return ie;
              default:
                var $e = ie && ie.$$typeof;
                switch ($e) {
                  case l:
                  case s:
                  case c:
                  case g:
                  case f:
                  case a:
                    return $e;
                  default:
                    return de;
                }
            }
          case t:
            return de;
        }
      }
    }
    var R = s, O = a, I = e, $ = c, p = n, P = g, M = f, j = t, U = i, N = r, B = u, ee = d, te = !1, re = !1;
    function H(D) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(D) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(D) {
      return x(D) === s;
    }
    function ne(D) {
      return x(D) === a;
    }
    function F(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function z(D) {
      return x(D) === c;
    }
    function G(D) {
      return x(D) === n;
    }
    function L(D) {
      return x(D) === g;
    }
    function V(D) {
      return x(D) === f;
    }
    function Z(D) {
      return x(D) === t;
    }
    function K(D) {
      return x(D) === i;
    }
    function ce(D) {
      return x(D) === r;
    }
    function W(D) {
      return x(D) === u;
    }
    function ye(D) {
      return x(D) === d;
    }
    Ve.ContextConsumer = R, Ve.ContextProvider = O, Ve.Element = I, Ve.ForwardRef = $, Ve.Fragment = p, Ve.Lazy = P, Ve.Memo = M, Ve.Portal = j, Ve.Profiler = U, Ve.StrictMode = N, Ve.Suspense = B, Ve.SuspenseList = ee, Ve.isAsyncMode = H, Ve.isConcurrentMode = X, Ve.isContextConsumer = ue, Ve.isContextProvider = ne, Ve.isElement = F, Ve.isForwardRef = z, Ve.isFragment = G, Ve.isLazy = L, Ve.isMemo = V, Ve.isPortal = Z, Ve.isProfiler = K, Ve.isStrictMode = ce, Ve.isSuspense = W, Ve.isSuspenseList = ye, Ve.isValidElementType = w, Ve.typeOf = x;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? Ia.exports = Gg() : Ia.exports = Kg();
var yl = Ia.exports;
function wu(e, t = "") {
  return e.displayName || e.name || t;
}
function vl(e, t, n) {
  const r = wu(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Xg(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return wu(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yl.ForwardRef:
          return vl(e, e.render, "ForwardRef");
        case yl.Memo:
          return vl(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Cu(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: fl(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = fl(i.style));
  }), r;
}
const Zg = os();
function la(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Qg(e) {
  return e ? (t, n) => n[e] : null;
}
function Jg(e, t, n) {
  e.theme = rb(e.theme) ? n : e.theme[t] || e.theme;
}
function Zo(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Zo(e, r));
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
    return Su(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Su(e, t, n = []) {
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
function eb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Zg,
    rootShouldForwardProp: r = la,
    slotShouldForwardProp: i = la
  } = e;
  function a(l) {
    Jg(l, t, n);
  }
  return (l, c = {}) => {
    Wh(l, (x) => x.filter((R) => R !== lr));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = Qg(Eu(d)),
      ...y
    } = c, b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), m = g || !1;
    let C = la;
    d === "Root" || d === "root" ? C = r : d ? C = i : ob(l) && (C = void 0);
    const T = hu(l, {
      shouldForwardProp: C,
      label: nb(u, d),
      ...y
    }), v = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x)
        return function(O) {
          return Zo(O, x);
        };
      if (Pn(x)) {
        const R = Cu(x);
        return R.variants ? function(I) {
          return Zo(I, R);
        } : R.style;
      }
      return x;
    }, w = (...x) => {
      const R = [], O = x.map(v), I = [];
      if (R.push(a), u && h && I.push(function(M) {
        var B, ee;
        const U = (ee = (B = M.theme.components) == null ? void 0 : B[u]) == null ? void 0 : ee.styleOverrides;
        if (!U)
          return null;
        const N = {};
        for (const te in U)
          N[te] = Zo(M, U[te]);
        return h(M, N);
      }), u && !b && I.push(function(M) {
        var N, B;
        const j = M.theme, U = (B = (N = j == null ? void 0 : j.components) == null ? void 0 : N[u]) == null ? void 0 : B.variants;
        return U ? Su(M, U) : null;
      }), m || I.push(lr), Array.isArray(O[0])) {
        const P = O.shift(), M = new Array(R.length).fill(""), j = new Array(I.length).fill("");
        let U;
        U = [...M, ...P, ...j], U.raw = [...M, ...P.raw, ...j], R.unshift(U);
      }
      const $ = [...R, ...O, ...I], p = T(...$);
      return l.muiName && (p.muiName = l.muiName), process.env.NODE_ENV !== "production" && (p.displayName = tb(u, d, l)), p;
    };
    return T.withConfig && (w.withConfig = T.withConfig), w;
  };
}
function tb(e, t, n) {
  return e ? `${e}${he(t || "")}` : `Styled(${Xg(n)})`;
}
function nb(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Eu(t || "Root")}`), n;
}
function rb(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ob(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Eu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function $a(e, t) {
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
              n[i][c] = $a(a[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Ln = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function ib(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function as(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), ib(e, t, n);
}
function ab(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xn(ab(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Mn(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Mn(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const sb = (e) => {
  const t = Xn(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Kr = (e, t) => {
  try {
    return sb(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function ji(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Tu(e) {
  e = Xn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (u, d = (u + n / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), ji({
    type: l,
    values: c
  });
}
function Ma(e) {
  e = Xn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xn(Tu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function xl(e, t) {
  const n = Ma(e), r = Ma(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function xt(e, t) {
  return e = Xn(e), t = as(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ji(e);
}
function Bo(e, t, n) {
  try {
    return xt(e, t);
  } catch {
    return e;
  }
}
function ss(e, t) {
  if (e = Xn(e), t = as(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ji(e);
}
function Je(e, t, n) {
  try {
    return ss(e, t);
  } catch {
    return e;
  }
}
function ls(e, t) {
  if (e = Xn(e), t = as(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ji(e);
}
function et(e, t, n) {
  try {
    return ls(e, t);
  } catch {
    return e;
  }
}
function lb(e, t = 0.15) {
  return Ma(e) > 0.5 ? ss(e, t) : ls(e, t);
}
function zo(e, t, n) {
  try {
    return lb(e, t);
  } catch {
    return e;
  }
}
function Bn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function cb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ou(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !cb(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ko = Bn(o.element, Ou);
ko.isRequired = Bn(o.element.isRequired, Ou);
function ub(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function db(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !ub(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const cs = Bn(o.elementType, db), fb = "exact-prop: ​";
function Ru(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [fb]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function zn(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const en = o.oneOfType([o.func, o.object]);
function wl(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Pu(e, t = 166) {
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
function ca(e, t) {
  var n, r, i;
  return /* @__PURE__ */ E.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function Qt(e) {
  return e && e.ownerDocument || document;
}
function Wn(e) {
  return Qt(e).defaultView || window;
}
function ai(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Cl = 0;
function pb(e) {
  const [t, n] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (Cl += 1, n(`mui-${Cl}`));
  }, [t]), r;
}
const mb = {
  ...E
}, Sl = mb.useId;
function us(e) {
  if (Sl !== void 0) {
    const t = Sl();
    return e ?? t;
  }
  return pb(e);
}
function hb(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function Tr({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = E.useRef(e !== void 0), [a, s] = E.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    E.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = E.useRef(t);
    E.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = E.useCallback((u) => {
    i || s(u);
  }, []);
  return [l, c];
}
function kn(e) {
  const t = E.useRef(e);
  return Ln(() => {
    t.current = e;
  }), E.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Et(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      ai(n, t);
    });
  }, e);
}
const El = {};
function ku(e, t) {
  const n = E.useRef(El);
  return n.current === El && (n.current = e(t)), n;
}
const gb = [];
function bb(e) {
  E.useEffect(e, gb);
}
class ds {
  constructor() {
    Lr(this, "currentId", null);
    Lr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Lr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ds();
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
function Iu() {
  const e = ku(ds.create).current;
  return bb(e.disposeEffect), e;
}
function Tl(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function $u(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
const yb = (e) => {
  const t = E.useRef({});
  return E.useEffect(() => {
    t.current = e;
  }), t.current;
};
function vb(e) {
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
function Mu(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = vb(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Nu(e, t, ...n) {
  return e[t] === void 0 ? null : Mu(e, t, ...n);
}
function Na() {
  return null;
}
Nu.isRequired = Mu;
Na.isRequired = Na;
const fs = process.env.NODE_ENV === "production" ? Na : Nu;
function nt(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const a = e[i];
    let s = "", l = !0;
    for (let c = 0; c < a.length; c += 1) {
      const u = a[c];
      u && (s += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (s += " " + n[u]));
    }
    r[i] = s;
  }
  return r;
}
function xb(e) {
  return typeof e == "string";
}
function Du(e, t, n) {
  return e === void 0 || xb(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Au(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Ol(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ju(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const h = Ce(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), y = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, b = {
      ...n,
      ...i,
      ...r
    };
    return h.length > 0 && (b.className = h), Object.keys(y).length > 0 && (b.style = y), {
      props: b,
      internalRef: void 0
    };
  }
  const s = Au({
    ...i,
    ...r
  }), l = Ol(r), c = Ol(i), u = t(s), d = Ce(u == null ? void 0 : u.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, g = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return d.length > 0 && (g.className = d), Object.keys(f).length > 0 && (g.style = f), {
    props: g,
    internalRef: u.ref
  };
}
function Fu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Da(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : Fu(n, r), {
    props: l,
    internalRef: c
  } = ju({
    ...a,
    externalSlotProps: s
  }), u = Et(c, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return Du(t, {
    ...l,
    ref: u
  }, r);
}
function Io(e) {
  var t;
  return parseInt(E.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const wb = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const _u = () => E.useContext(wb) ?? !1, Cb = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function Sb(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? $a(i.defaultProps, r) : !i.styleOverrides && !i.variants ? $a(i, r) : r;
}
function Eb({
  props: e,
  name: t
}) {
  const n = E.useContext(Cb);
  return Sb({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Rl = {
  theme: void 0
};
function Tb(e) {
  let t, n;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== n) && (Rl.theme = i.theme, a = Cu(e(Rl)), t = a, n = i.theme), a;
  };
}
function Ob(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Pl = (e, t, n, r = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, Rb = (e, t, n) => {
  function r(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  r(e);
}, Pb = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ua(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, s = {};
  return Rb(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, f = Pb(l, c);
        Object.assign(i, {
          [d]: f
        }), Pl(a, l, `var(${d})`, u), Pl(s, l, `var(${d}, ${f})`, u);
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
function kb(e, t = {}) {
  const {
    getSelector: n = m,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: u,
    css: d,
    varsWithDefaults: f
  } = ua(c, t);
  let g = f;
  const h = {}, {
    [l]: y,
    ...b
  } = a;
  if (Object.entries(b || {}).forEach(([v, w]) => {
    const {
      vars: x,
      css: R,
      varsWithDefaults: O
    } = ua(w, t);
    g = $t(g, O), h[v] = {
      css: R,
      vars: x
    };
  }), y) {
    const {
      css: v,
      vars: w,
      varsWithDefaults: x
    } = ua(y, t);
    g = $t(g, x), h[l] = {
      css: v,
      vars: w
    };
  }
  function m(v, w) {
    var R, O;
    let x = i;
    if (i === "class" && (x = ".%s"), i === "data" && (x = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (x = `[${i}="%s"]`), v) {
      if (x === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((O = (R = a[v]) == null ? void 0 : R.palette) == null ? void 0 : O.mode) || v})`]: {
            ":root": w
          }
        };
      if (x)
        return e.defaultColorScheme === v ? `:root, ${x.replace("%s", String(v))}` : x.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let v = {
        ...u
      };
      return Object.entries(h).forEach(([, {
        vars: w
      }]) => {
        v = $t(v, w);
      }), v;
    },
    generateStyleSheets: () => {
      var I, $;
      const v = [], w = e.defaultColorScheme || "light";
      function x(p, P) {
        Object.keys(P).length && v.push(typeof p == "string" ? {
          [p]: {
            ...P
          }
        } : p);
      }
      x(n(void 0, {
        ...d
      }), d);
      const {
        [w]: R,
        ...O
      } = h;
      if (R) {
        const {
          css: p
        } = R, P = ($ = (I = a[w]) == null ? void 0 : I.palette) == null ? void 0 : $.mode, M = !r && P ? {
          colorScheme: P,
          ...p
        } : {
          ...p
        };
        x(n(w, {
          ...M
        }), M);
      }
      return Object.entries(O).forEach(([p, {
        css: P
      }]) => {
        var U, N;
        const M = (N = (U = a[p]) == null ? void 0 : U.palette) == null ? void 0 : N.mode, j = !r && M ? {
          colorScheme: M,
          ...P
        } : {
          ...P
        };
        x(n(p, {
          ...j
        }), j);
      }), v;
    }
  };
}
function Ib(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Fi = "$$material", fo = {
  black: "#000",
  white: "#fff"
}, $b = {
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
}, mr = {
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
}, hr = {
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
}, Vr = {
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
}, gr = {
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
}, br = {
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
}, yr = {
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
function Lu() {
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
      paper: fo.white,
      default: fo.white
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
const Mb = Lu();
function Bu() {
  return {
    text: {
      primary: fo.white,
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
      active: fo.white,
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
const kl = Bu();
function Il(e, t, n, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = ls(e.main, i) : t === "dark" && (e.dark = ss(e.main, a)));
}
function Nb(e = "light") {
  return e === "dark" ? {
    main: gr[200],
    light: gr[50],
    dark: gr[400]
  } : {
    main: gr[700],
    light: gr[400],
    dark: gr[800]
  };
}
function Db(e = "light") {
  return e === "dark" ? {
    main: mr[200],
    light: mr[50],
    dark: mr[400]
  } : {
    main: mr[500],
    light: mr[300],
    dark: mr[700]
  };
}
function Ab(e = "light") {
  return e === "dark" ? {
    main: hr[500],
    light: hr[300],
    dark: hr[700]
  } : {
    main: hr[700],
    light: hr[400],
    dark: hr[800]
  };
}
function jb(e = "light") {
  return e === "dark" ? {
    main: br[400],
    light: br[300],
    dark: br[700]
  } : {
    main: br[700],
    light: br[500],
    dark: br[900]
  };
}
function Fb(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: yr[800],
    light: yr[500],
    dark: yr[900]
  };
}
function _b(e = "light") {
  return e === "dark" ? {
    main: Vr[400],
    light: Vr[300],
    dark: Vr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Vr[500],
    dark: Vr[900]
  };
}
function ps(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || Nb(t), s = e.secondary || Db(t), l = e.error || Ab(t), c = e.info || jb(t), u = e.success || Fb(t), d = e.warning || _b(t);
  function f(b) {
    const m = xl(b, kl.text.primary) >= n ? kl.text.primary : Mb.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = xl(b, m);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${m} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const g = ({
    color: b,
    name: m,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: v = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[C] && (b.main = b[C]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Mn(11, m ? ` (${m})` : "", C));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Mn(12, m ? ` (${m})` : "", JSON.stringify(b.main)));
    return Il(b, "light", T, r), Il(b, "dark", v, r), b.contrastText || (b.contrastText = f(b.main)), b;
  };
  let h;
  return t === "light" ? h = Lu() : t === "dark" && (h = Bu()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), $t({
    // A collection of common colors.
    common: {
      ...fo
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
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: $b,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
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
function Lb(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function Bb(e, t) {
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
function zb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const $l = {
  textTransform: "uppercase"
}, Ml = '"Roboto", "Helvetica", "Arial", sans-serif';
function Wb(e, t) {
  const {
    fontFamily: n = Ml,
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
    allVariants: u,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = r / 14, h = d || ((m) => `${m / c * g}rem`), y = (m, C, T, v, w) => ({
    fontFamily: n,
    fontWeight: m,
    fontSize: h(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ml ? {
      letterSpacing: `${zb(v / C)}em`
    } : {},
    ...w,
    ...u
  }), b = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(a, 48, 1.167, 0),
    h4: y(a, 34, 1.235, 0.25),
    h5: y(a, 24, 1.334, 0),
    h6: y(s, 20, 1.6, 0.15),
    subtitle1: y(a, 16, 1.75, 0.15),
    subtitle2: y(s, 14, 1.57, 0.1),
    body1: y(a, 16, 1.5, 0.15),
    body2: y(a, 14, 1.43, 0.15),
    button: y(s, 14, 1.75, 0.4, $l),
    caption: y(a, 12, 1.66, 0.4),
    overline: y(a, 12, 2.66, 1, $l),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return $t({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...b
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const Vb = 0.2, Hb = 0.14, Ub = 0.12;
function st(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Vb})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Hb})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ub})`].join(",");
}
const Yb = ["none", st(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), st(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), st(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), st(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), st(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), st(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), st(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), st(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), st(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), st(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), st(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), st(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), st(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), st(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), st(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), st(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), st(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), st(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), st(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), st(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), st(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), st(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), st(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), st(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], qb = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gb = {
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
function Nl(e) {
  return `${Math.round(e)}ms`;
}
function Kb(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Xb(e) {
  const t = {
    ...qb,
    ...e.easing
  }, n = {
    ...Gb,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Kb,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const d = (g) => typeof g == "string", f = (g) => !Number.isNaN(parseFloat(g));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof s == "string" ? s : Nl(s)} ${l} ${typeof c == "string" ? c : Nl(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Zb = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Qb(e) {
  return Pn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function zu(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !Qb(l) || s.startsWith("unstable_") ? delete r[s] : Pn(l) && (r[s] = {
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
function Aa(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: a = {},
    transitions: s = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Mn(20));
  const d = ps(a), f = os(e);
  let g = $t(f, {
    mixins: Bb(f.breakpoints, r),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Yb.slice(),
    typography: Wb(d, l),
    transitions: Xb(s),
    zIndex: {
      ...Zb
    }
  });
  if (g = $t(g, u), g = t.reduce((h, y) => $t(h, y), g), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (b, m) => {
      let C;
      for (C in b) {
        const T = b[C];
        if (h.includes(C) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Xe("", C);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[C] = {};
        }
      }
    };
    Object.keys(g.components).forEach((b) => {
      const m = g.components[b].styleOverrides;
      m && b.startsWith("Mui") && y(m, b);
    });
  }
  return g.unstable_sxConfig = {
    ...Po,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, g.unstable_sx = function(y) {
    return lr({
      sx: y,
      theme: this
    });
  }, g.toRuntimeSource = zu, g;
}
function ja(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Jb = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = ja(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Wu(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Vu(e) {
  return e === "dark" ? Jb : [];
}
function ey(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, a = ps(t);
  return {
    palette: a,
    opacity: {
      ...Wu(a.mode),
      ...n
    },
    overlays: r || Vu(a.mode),
    ...i
  };
}
function ty(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ny = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ry = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return ny(e.cssVarPrefix).forEach((l) => {
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
function oy(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function Y(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Xr(e) {
  return !e || !e.startsWith("hsl") ? e : Tu(e);
}
function jn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Kr(Xr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function iy(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const En = (e) => {
  try {
    return e();
  } catch {
  }
}, ay = (e = "mui") => Ob(e);
function da(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = ey({
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
  } = Aa({
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
      ...Wu(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Vu(i)
  }, s;
}
function sy(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = ty,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, d = Object.keys(n)[0], f = r || (n.light && d !== "light" ? "light" : d), g = ay(a), {
    [f]: h,
    light: y,
    dark: b,
    ...m
  } = n, C = {
    ...m
  };
  let T = h;
  if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : Mn(21, f));
  const v = da(C, T, u, f);
  y && !C.light && da(C, y, void 0, "light"), b && !C.dark && da(C, b, void 0, "dark");
  let w = {
    defaultColorScheme: f,
    ...v,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: g,
    colorSchemes: C,
    font: {
      ...Lb(v.typography),
      ...v.font
    },
    spacing: iy(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach(($) => {
    const p = w.colorSchemes[$].palette, P = (M) => {
      const j = M.split("-"), U = j[1], N = j[2];
      return g(M, p[U][N]);
    };
    if (p.mode === "light" && (Y(p.common, "background", "#fff"), Y(p.common, "onBackground", "#000")), p.mode === "dark" && (Y(p.common, "background", "#000"), Y(p.common, "onBackground", "#fff")), oy(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      Y(p.Alert, "errorColor", Je(p.error.light, 0.6)), Y(p.Alert, "infoColor", Je(p.info.light, 0.6)), Y(p.Alert, "successColor", Je(p.success.light, 0.6)), Y(p.Alert, "warningColor", Je(p.warning.light, 0.6)), Y(p.Alert, "errorFilledBg", P("palette-error-main")), Y(p.Alert, "infoFilledBg", P("palette-info-main")), Y(p.Alert, "successFilledBg", P("palette-success-main")), Y(p.Alert, "warningFilledBg", P("palette-warning-main")), Y(p.Alert, "errorFilledColor", En(() => p.getContrastText(p.error.main))), Y(p.Alert, "infoFilledColor", En(() => p.getContrastText(p.info.main))), Y(p.Alert, "successFilledColor", En(() => p.getContrastText(p.success.main))), Y(p.Alert, "warningFilledColor", En(() => p.getContrastText(p.warning.main))), Y(p.Alert, "errorStandardBg", et(p.error.light, 0.9)), Y(p.Alert, "infoStandardBg", et(p.info.light, 0.9)), Y(p.Alert, "successStandardBg", et(p.success.light, 0.9)), Y(p.Alert, "warningStandardBg", et(p.warning.light, 0.9)), Y(p.Alert, "errorIconColor", P("palette-error-main")), Y(p.Alert, "infoIconColor", P("palette-info-main")), Y(p.Alert, "successIconColor", P("palette-success-main")), Y(p.Alert, "warningIconColor", P("palette-warning-main")), Y(p.AppBar, "defaultBg", P("palette-grey-100")), Y(p.Avatar, "defaultBg", P("palette-grey-400")), Y(p.Button, "inheritContainedBg", P("palette-grey-300")), Y(p.Button, "inheritContainedHoverBg", P("palette-grey-A100")), Y(p.Chip, "defaultBorder", P("palette-grey-400")), Y(p.Chip, "defaultAvatarColor", P("palette-grey-700")), Y(p.Chip, "defaultIconColor", P("palette-grey-700")), Y(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), Y(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), Y(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), Y(p.LinearProgress, "primaryBg", et(p.primary.main, 0.62)), Y(p.LinearProgress, "secondaryBg", et(p.secondary.main, 0.62)), Y(p.LinearProgress, "errorBg", et(p.error.main, 0.62)), Y(p.LinearProgress, "infoBg", et(p.info.main, 0.62)), Y(p.LinearProgress, "successBg", et(p.success.main, 0.62)), Y(p.LinearProgress, "warningBg", et(p.warning.main, 0.62)), Y(p.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), Y(p.Slider, "primaryTrack", et(p.primary.main, 0.62)), Y(p.Slider, "secondaryTrack", et(p.secondary.main, 0.62)), Y(p.Slider, "errorTrack", et(p.error.main, 0.62)), Y(p.Slider, "infoTrack", et(p.info.main, 0.62)), Y(p.Slider, "successTrack", et(p.success.main, 0.62)), Y(p.Slider, "warningTrack", et(p.warning.main, 0.62));
      const M = zo(p.background.default, 0.8);
      Y(p.SnackbarContent, "bg", M), Y(p.SnackbarContent, "color", En(() => p.getContrastText(M))), Y(p.SpeedDialAction, "fabHoverBg", zo(p.background.paper, 0.15)), Y(p.StepConnector, "border", P("palette-grey-400")), Y(p.StepContent, "border", P("palette-grey-400")), Y(p.Switch, "defaultColor", P("palette-common-white")), Y(p.Switch, "defaultDisabledColor", P("palette-grey-100")), Y(p.Switch, "primaryDisabledColor", et(p.primary.main, 0.62)), Y(p.Switch, "secondaryDisabledColor", et(p.secondary.main, 0.62)), Y(p.Switch, "errorDisabledColor", et(p.error.main, 0.62)), Y(p.Switch, "infoDisabledColor", et(p.info.main, 0.62)), Y(p.Switch, "successDisabledColor", et(p.success.main, 0.62)), Y(p.Switch, "warningDisabledColor", et(p.warning.main, 0.62)), Y(p.TableCell, "border", et(Bo(p.divider, 1), 0.88)), Y(p.Tooltip, "bg", Bo(p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      Y(p.Alert, "errorColor", et(p.error.light, 0.6)), Y(p.Alert, "infoColor", et(p.info.light, 0.6)), Y(p.Alert, "successColor", et(p.success.light, 0.6)), Y(p.Alert, "warningColor", et(p.warning.light, 0.6)), Y(p.Alert, "errorFilledBg", P("palette-error-dark")), Y(p.Alert, "infoFilledBg", P("palette-info-dark")), Y(p.Alert, "successFilledBg", P("palette-success-dark")), Y(p.Alert, "warningFilledBg", P("palette-warning-dark")), Y(p.Alert, "errorFilledColor", En(() => p.getContrastText(p.error.dark))), Y(p.Alert, "infoFilledColor", En(() => p.getContrastText(p.info.dark))), Y(p.Alert, "successFilledColor", En(() => p.getContrastText(p.success.dark))), Y(p.Alert, "warningFilledColor", En(() => p.getContrastText(p.warning.dark))), Y(p.Alert, "errorStandardBg", Je(p.error.light, 0.9)), Y(p.Alert, "infoStandardBg", Je(p.info.light, 0.9)), Y(p.Alert, "successStandardBg", Je(p.success.light, 0.9)), Y(p.Alert, "warningStandardBg", Je(p.warning.light, 0.9)), Y(p.Alert, "errorIconColor", P("palette-error-main")), Y(p.Alert, "infoIconColor", P("palette-info-main")), Y(p.Alert, "successIconColor", P("palette-success-main")), Y(p.Alert, "warningIconColor", P("palette-warning-main")), Y(p.AppBar, "defaultBg", P("palette-grey-900")), Y(p.AppBar, "darkBg", P("palette-background-paper")), Y(p.AppBar, "darkColor", P("palette-text-primary")), Y(p.Avatar, "defaultBg", P("palette-grey-600")), Y(p.Button, "inheritContainedBg", P("palette-grey-800")), Y(p.Button, "inheritContainedHoverBg", P("palette-grey-700")), Y(p.Chip, "defaultBorder", P("palette-grey-700")), Y(p.Chip, "defaultAvatarColor", P("palette-grey-300")), Y(p.Chip, "defaultIconColor", P("palette-grey-300")), Y(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), Y(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), Y(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), Y(p.LinearProgress, "primaryBg", Je(p.primary.main, 0.5)), Y(p.LinearProgress, "secondaryBg", Je(p.secondary.main, 0.5)), Y(p.LinearProgress, "errorBg", Je(p.error.main, 0.5)), Y(p.LinearProgress, "infoBg", Je(p.info.main, 0.5)), Y(p.LinearProgress, "successBg", Je(p.success.main, 0.5)), Y(p.LinearProgress, "warningBg", Je(p.warning.main, 0.5)), Y(p.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), Y(p.Slider, "primaryTrack", Je(p.primary.main, 0.5)), Y(p.Slider, "secondaryTrack", Je(p.secondary.main, 0.5)), Y(p.Slider, "errorTrack", Je(p.error.main, 0.5)), Y(p.Slider, "infoTrack", Je(p.info.main, 0.5)), Y(p.Slider, "successTrack", Je(p.success.main, 0.5)), Y(p.Slider, "warningTrack", Je(p.warning.main, 0.5));
      const M = zo(p.background.default, 0.98);
      Y(p.SnackbarContent, "bg", M), Y(p.SnackbarContent, "color", En(() => p.getContrastText(M))), Y(p.SpeedDialAction, "fabHoverBg", zo(p.background.paper, 0.15)), Y(p.StepConnector, "border", P("palette-grey-600")), Y(p.StepContent, "border", P("palette-grey-600")), Y(p.Switch, "defaultColor", P("palette-grey-300")), Y(p.Switch, "defaultDisabledColor", P("palette-grey-600")), Y(p.Switch, "primaryDisabledColor", Je(p.primary.main, 0.55)), Y(p.Switch, "secondaryDisabledColor", Je(p.secondary.main, 0.55)), Y(p.Switch, "errorDisabledColor", Je(p.error.main, 0.55)), Y(p.Switch, "infoDisabledColor", Je(p.info.main, 0.55)), Y(p.Switch, "successDisabledColor", Je(p.success.main, 0.55)), Y(p.Switch, "warningDisabledColor", Je(p.warning.main, 0.55)), Y(p.TableCell, "border", Je(Bo(p.divider, 1), 0.68)), Y(p.Tooltip, "bg", Bo(p.grey[700], 0.92));
    }
    jn(p.background, "default"), jn(p.background, "paper"), jn(p.common, "background"), jn(p.common, "onBackground"), jn(p, "divider"), Object.keys(p).forEach((M) => {
      const j = p[M];
      j && typeof j == "object" && (j.main && Y(p[M], "mainChannel", Kr(Xr(j.main))), j.light && Y(p[M], "lightChannel", Kr(Xr(j.light))), j.dark && Y(p[M], "darkChannel", Kr(Xr(j.dark))), j.contrastText && Y(p[M], "contrastTextChannel", Kr(Xr(j.contrastText))), M === "text" && (jn(p[M], "primary"), jn(p[M], "secondary")), M === "action" && (j.active && jn(p[M], "active"), j.selected && jn(p[M], "selected")));
    });
  }), w = t.reduce(($, p) => $t($, p), w);
  const x = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: ry(w)
  }, {
    vars: R,
    generateThemeVars: O,
    generateStyleSheets: I
  } = kb(w, x);
  return w.vars = R, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([$, p]) => {
    w[$] = p;
  }), w.generateThemeVars = O, w.generateStyleSheets = I, w.generateSpacing = function() {
    return yu(u.spacing, ns(this));
  }, w.getColorSchemeSelector = Ib(l), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = s, w.unstable_sxConfig = {
    ...Po,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(p) {
    return lr({
      sx: p,
      theme: this
    });
  }, w.toRuntimeSource = zu, w;
}
function Dl(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: ps({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Hu(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = n == null ? void 0 : n.mode,
    ...s
  } = e, l = a || "light", c = i == null ? void 0 : i[l], u = {
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
      return Aa(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = Aa({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, Dl(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, Dl(f, "light", u.light)), f;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), sy({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const ms = Hu();
function hs() {
  const e = is(ms);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[Fi] || e;
}
function Uu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const hn = (e) => Uu(e) && e !== "classes", be = eb({
  themeId: Fi,
  defaultTheme: ms,
  rootShouldForwardProp: hn
}), ly = Ze("MuiBox", ["root"]), cy = Hu(), Yu = Yg({
  themeId: Fi,
  defaultTheme: cy,
  defaultClassName: ly.root,
  generateClassName: xu.generate
});
process.env.NODE_ENV !== "production" && (Yu.propTypes = {
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
function qu(e) {
  return /* @__PURE__ */ k.jsx(vu, {
    ...e,
    defaultTheme: ms,
    themeId: Fi
  });
}
process.env.NODE_ENV !== "production" && (qu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function uy(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ k.jsx(qu, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function ot(e) {
  return Eb(e);
}
function Wo(e) {
  return parseInt(e, 10) || 0;
}
const dy = {
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
function fy(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const Gu = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l,
    ...c
  } = t, {
    current: u
  } = E.useRef(l != null), d = E.useRef(null), f = Et(n, d), g = E.useRef(null), h = E.useRef(null), y = E.useCallback(() => {
    const C = d.current, v = Wn(C).getComputedStyle(C);
    if (v.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const w = h.current;
    w.style.width = v.width, w.value = C.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const x = v.boxSizing, R = Wo(v.paddingBottom) + Wo(v.paddingTop), O = Wo(v.borderBottomWidth) + Wo(v.borderTopWidth), I = w.scrollHeight;
    w.value = "x";
    const $ = w.scrollHeight;
    let p = I;
    a && (p = Math.max(Number(a) * $, p)), i && (p = Math.min(Number(i) * $, p)), p = Math.max(p, $);
    const P = p + (x === "border-box" ? R + O : 0), M = Math.abs(p - I) <= 1;
    return {
      outerHeightStyle: P,
      overflowing: M
    };
  }, [i, a, t.placeholder]), b = E.useCallback(() => {
    const C = y();
    if (fy(C))
      return;
    const T = C.outerHeightStyle, v = d.current;
    g.current !== T && (g.current = T, v.style.height = `${T}px`), v.style.overflow = C.overflowing ? "hidden" : "";
  }, [y]);
  Ln(() => {
    const C = () => {
      b();
    };
    let T;
    const v = () => {
      cancelAnimationFrame(T), T = requestAnimationFrame(() => {
        C();
      });
    }, w = Pu(C), x = d.current, R = Wn(x);
    R.addEventListener("resize", w);
    let O;
    return typeof ResizeObserver < "u" && (O = new ResizeObserver(process.env.NODE_ENV === "test" ? v : C), O.observe(x)), () => {
      w.clear(), cancelAnimationFrame(T), R.removeEventListener("resize", w), O && O.disconnect();
    };
  }, [y, b]), Ln(() => {
    b();
  });
  const m = (C) => {
    u || b(), r && r(C);
  };
  return /* @__PURE__ */ k.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ k.jsx("textarea", {
      value: l,
      onChange: m,
      ref: f,
      rows: a,
      style: s,
      ...c
    }), /* @__PURE__ */ k.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: h,
      tabIndex: -1,
      style: {
        ...dy.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (Gu.propTypes = {
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
function Fa(e) {
  return typeof e == "string";
}
function Ar({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const _i = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (_i.displayName = "FormControlContext");
function ur() {
  return E.useContext(_i);
}
const tt = Tb;
function Al(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function si(e, t = !1) {
  return e && (Al(e.value) && e.value !== "" || t && Al(e.defaultValue) && e.defaultValue !== "");
}
function py(e) {
  return e.startAdornment;
}
function my(e) {
  return Xe("MuiInputBase", e);
}
const Gt = Ze("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var jl;
const Li = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${he(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Bi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, hy = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: i,
    endAdornment: a,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: g,
    startAdornment: h,
    type: y
  } = e, b = {
    root: ["root", `color${he(n)}`, r && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", g && g !== "medium" && `size${he(g)}`, d && "multiline", h && "adornedStart", a && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", d && "inputMultiline", g === "small" && "inputSizeSmall", u && "inputHiddenLabel", h && "inputAdornedStart", a && "inputAdornedEnd", f && "readOnly"]
  };
  return nt(b, my, t);
}, zi = be("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Li
})(tt(({
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
  [`&.${Gt.disabled}`]: {
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
}))), Wi = be("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Bi
})(tt(({
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
    [`label[data-shrink=false] + .${Gt.formControl} &`]: {
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
    [`&.${Gt.disabled}`]: {
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
})), Fl = uy({
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
}), Vi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: s,
    className: l,
    color: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: g,
    disableInjectingGlobalStyles: h,
    endAdornment: y,
    error: b,
    fullWidth: m = !1,
    id: C,
    inputComponent: T = "input",
    inputProps: v = {},
    inputRef: w,
    margin: x,
    maxRows: R,
    minRows: O,
    multiline: I = !1,
    name: $,
    onBlur: p,
    onChange: P,
    onClick: M,
    onFocus: j,
    onKeyDown: U,
    onKeyUp: N,
    placeholder: B,
    readOnly: ee,
    renderSuffix: te,
    rows: re,
    size: H,
    slotProps: X = {},
    slots: ue = {},
    startAdornment: ne,
    type: F = "text",
    value: z,
    ...G
  } = r, L = v.value != null ? v.value : z, {
    current: V
  } = E.useRef(L != null), Z = E.useRef(), K = E.useCallback((Pe) => {
    process.env.NODE_ENV !== "production" && Pe && Pe.nodeName !== "INPUT" && !Pe.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ce = Et(Z, w, v.ref, K), [W, ye] = E.useState(!1), D = ur();
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (D)
      return D.registerEffect();
  }, [D]);
  const de = Ar({
    props: r,
    muiFormControl: D,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  de.focused = D ? D.focused : W, E.useEffect(() => {
    !D && g && W && (ye(!1), p && p());
  }, [D, g, W, p]);
  const ie = D && D.onFilled, $e = D && D.onEmpty, ge = E.useCallback((Pe) => {
    si(Pe) ? ie && ie() : $e && $e();
  }, [ie, $e]);
  Ln(() => {
    V && ge({
      value: L
    });
  }, [L, ge, V]);
  const Ee = (Pe) => {
    j && j(Pe), v.onFocus && v.onFocus(Pe), D && D.onFocus ? D.onFocus(Pe) : ye(!0);
  }, Ae = (Pe) => {
    p && p(Pe), v.onBlur && v.onBlur(Pe), D && D.onBlur ? D.onBlur(Pe) : ye(!1);
  }, Te = (Pe, ...dt) => {
    if (!V) {
      const Mt = Pe.target || Z.current;
      if (Mt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Mn(1));
      ge({
        value: Mt.value
      });
    }
    v.onChange && v.onChange(Pe, ...dt), P && P(Pe, ...dt);
  };
  E.useEffect(() => {
    ge(Z.current);
  }, []);
  const Le = (Pe) => {
    Z.current && Pe.currentTarget === Pe.target && Z.current.focus(), M && M(Pe);
  };
  let fe = T, je = v;
  I && fe === "input" && (re ? (process.env.NODE_ENV !== "production" && (O || R) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), je = {
    type: void 0,
    minRows: re,
    maxRows: re,
    ...je
  }) : je = {
    type: void 0,
    maxRows: R,
    minRows: O,
    ...je
  }, fe = Gu);
  const gt = (Pe) => {
    ge(Pe.animationName === "mui-auto-fill-cancel" ? Z.current : {
      value: "x"
    });
  };
  E.useEffect(() => {
    D && D.setAdornedStart(!!ne);
  }, [D, ne]);
  const vt = {
    ...r,
    color: de.color || "primary",
    disabled: de.disabled,
    endAdornment: y,
    error: de.error,
    focused: de.focused,
    formControl: D,
    fullWidth: m,
    hiddenLabel: de.hiddenLabel,
    multiline: I,
    size: de.size,
    startAdornment: ne,
    type: F
  }, qe = hy(vt), Ge = ue.root || u.Root || zi, Re = X.root || d.root || {}, it = ue.input || u.Input || Wi;
  return je = {
    ...je,
    ...X.input ?? d.input
  }, /* @__PURE__ */ k.jsxs(E.Fragment, {
    children: [!h && typeof Fl == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (jl || (jl = /* @__PURE__ */ k.jsx(Fl, {}))), /* @__PURE__ */ k.jsxs(Ge, {
      ...Re,
      ref: n,
      onClick: Le,
      ...G,
      ...!Fa(Ge) && {
        ownerState: {
          ...vt,
          ...Re.ownerState
        }
      },
      className: Ce(qe.root, Re.className, l, ee && "MuiInputBase-readOnly"),
      children: [ne, /* @__PURE__ */ k.jsx(_i.Provider, {
        value: null,
        children: /* @__PURE__ */ k.jsx(it, {
          "aria-invalid": de.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: s,
          defaultValue: f,
          disabled: de.disabled,
          id: C,
          onAnimationStart: gt,
          name: $,
          placeholder: B,
          readOnly: ee,
          required: de.required,
          rows: re,
          value: L,
          onKeyDown: U,
          onKeyUp: N,
          type: F,
          ...je,
          ...!Fa(it) && {
            as: fe,
            ownerState: {
              ...vt,
              ...je.ownerState
            }
          },
          ref: ce,
          className: Ce(qe.input, je.className, ee && "MuiInputBase-readOnly"),
          onBlur: Ae,
          onChange: Te,
          onFocus: Ee
        })
      }), y, te ? te({
        ...de,
        startAdornment: ne
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Vi.propTypes = {
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
  inputComponent: cs,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: en,
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
function gy(e) {
  return typeof e.main == "string";
}
function by(e, t = []) {
  if (!gy(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function un(e = []) {
  return ([, t]) => t && by(t, e);
}
function yy(e) {
  return Xe("MuiInput", e);
}
const qn = {
  ...Gt,
  ...Ze("MuiInput", ["root", "underline", "input"])
}, vy = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = nt({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, yy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, xy = be(zi, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Li(e, t), !n.disableUnderline && t.underline];
  }
})(tt(({
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
        [`&.${qn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${qn.error}`]: {
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
        [`&:hover:not(.${qn.disabled}, .${qn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${qn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(un()).map(([r]) => ({
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
})), wy = be(Wi, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Bi
})({}), po = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: i = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: u = !1,
    slotProps: d,
    slots: f = {},
    type: g = "text",
    ...h
  } = r, y = vy(r), m = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, C = d ?? s ? $t(d ?? s, m) : m, T = f.root ?? a.Root ?? xy, v = f.input ?? a.Input ?? wy;
  return /* @__PURE__ */ k.jsx(Vi, {
    slots: {
      root: T,
      input: v
    },
    slotProps: C,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: n,
    type: g,
    ...h,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (po.propTypes = {
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
  inputRef: en,
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
po && (po.muiName = "Input");
function Cy(e) {
  return Xe("MuiFilledInput", e);
}
const Kt = {
  ...Gt,
  ...Ze("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Sy(e) {
  return Xe("MuiSvgIcon", e);
}
Ze("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ey = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${he(t)}`, `fontSize${he(n)}`]
  };
  return nt(i, Sy, r);
}, Ty = be("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${he(n.color)}`], t[`fontSize${he(n.fontSize)}`]];
  }
})(tt(({
  theme: e
}) => {
  var t, n, r, i, a, s, l, c, u, d, f, g, h, y;
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
        props: (b) => !b.hasSvgAsChild,
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
          fontSize: ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, b]) => b && b.main).map(([b]) => {
        var m, C;
        return {
          props: {
            color: b
          },
          style: {
            color: (C = (m = (e.vars ?? e).palette) == null ? void 0 : m[b]) == null ? void 0 : C.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : y.disabled
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
})), mo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: g = "0 0 24 24",
    ...h
  } = r, y = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: g,
    hasSvgAsChild: y
  }, m = {};
  d || (m.viewBox = g);
  const C = Ey(b);
  return /* @__PURE__ */ k.jsxs(Ty, {
    as: l,
    className: Ce(C.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...m,
    ...h,
    ...y && i.props,
    ownerState: b,
    children: [y ? i.props.children : i, f ? /* @__PURE__ */ k.jsx("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (mo.propTypes = {
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
mo && (mo.muiName = "SvgIcon");
function jr(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ k.jsx(mo, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = mo.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(n));
}
const Oy = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: i,
    size: a,
    hiddenLabel: s,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", r && "adornedStart", i && "adornedEnd", a === "small" && `size${he(a)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = nt(c, Cy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, Ry = be(zi, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Li(e, t), !n.disableUnderline && t.underline];
  }
})(tt(({
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
    [`&.${Kt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Kt.disabled}`]: {
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
        [`&.${Kt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Kt.error}`]: {
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
        [`&:hover:not(.${Kt.disabled}, .${Kt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Kt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(un()).map(([s]) => {
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
})), Py = be(Wi, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Bi
})(tt(({
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
}))), ho = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: i = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: d = !1,
    slotProps: f,
    slots: g = {},
    type: h = "text",
    ...y
  } = r, b = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    type: h
  }, m = Oy(r), C = {
    root: {
      ownerState: b
    },
    input: {
      ownerState: b
    }
  }, T = f ?? s ? $t(C, f ?? s) : C, v = g.root ?? a.Root ?? Ry, w = g.input ?? a.Input ?? Py;
  return /* @__PURE__ */ k.jsx(Vi, {
    slots: {
      root: v,
      input: w
    },
    componentsProps: T,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: n,
    type: h,
    ...y,
    classes: m
  });
});
process.env.NODE_ENV !== "production" && (ho.propTypes = {
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
  inputRef: en,
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
ho && (ho.muiName = "Input");
var _l;
const ky = be("fieldset", {
  shouldForwardProp: hn
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
}), Iy = be("legend", {
  shouldForwardProp: hn
})(tt(({
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
function Ku(e) {
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
  return /* @__PURE__ */ k.jsx(ky, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...s,
    children: /* @__PURE__ */ k.jsx(Iy, {
      ownerState: c,
      children: l ? /* @__PURE__ */ k.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _l || (_l = /* @__PURE__ */ k.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (Ku.propTypes = {
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
function $y(e) {
  return Xe("MuiOutlinedInput", e);
}
const an = {
  ...Gt,
  ...Ze("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, My = (e) => {
  const {
    classes: t
  } = e, r = nt({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, $y, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, Ny = be(zi, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Li
})(tt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${an.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${an.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${an.focused} .${an.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(un()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${an.focused} .${an.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${an.error} .${an.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${an.disabled} .${an.notchedOutline}`]: {
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
})), Dy = be(Ku, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(tt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), Ay = be(Wi, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Bi
})(tt(({
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
}))), go = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r;
  const i = ot({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: a = {},
    fullWidth: s = !1,
    inputComponent: l = "input",
    label: c,
    multiline: u = !1,
    notched: d,
    slots: f = {},
    type: g = "text",
    ...h
  } = i, y = My(i), b = ur(), m = Ar({
    props: i,
    muiFormControl: b,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...i,
    color: m.color || "primary",
    disabled: m.disabled,
    error: m.error,
    focused: m.focused,
    formControl: b,
    fullWidth: s,
    hiddenLabel: m.hiddenLabel,
    multiline: u,
    size: m.size,
    type: g
  }, T = f.root ?? a.Root ?? Ny, v = f.input ?? a.Input ?? Ay;
  return /* @__PURE__ */ k.jsx(Vi, {
    slots: {
      root: T,
      input: v
    },
    renderSuffix: (w) => /* @__PURE__ */ k.jsx(Dy, {
      ownerState: C,
      className: y.notchedOutline,
      label: c != null && c !== "" && m.required ? r || (r = /* @__PURE__ */ k.jsxs(E.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof d < "u" ? d : !!(w.startAdornment || w.filled || w.focused)
    }),
    fullWidth: s,
    inputComponent: l,
    multiline: u,
    ref: n,
    type: g,
    ...h,
    classes: {
      ...y,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (go.propTypes = {
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
  inputRef: en,
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
go && (go.muiName = "Input");
function jy(e) {
  return Xe("MuiFormLabel", e);
}
const no = Ze("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Fy = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${he(n)}`, i && "disabled", a && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return nt(c, jy, t);
}, _y = be("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(tt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(un()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${no.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${no.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${no.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Ly = be("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(tt(({
  theme: e
}) => ({
  [`&.${no.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Xu = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    color: s,
    component: l = "label",
    disabled: c,
    error: u,
    filled: d,
    focused: f,
    required: g,
    ...h
  } = r, y = ur(), b = Ar({
    props: r,
    muiFormControl: y,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), m = {
    ...r,
    color: b.color || "primary",
    component: l,
    disabled: b.disabled,
    error: b.error,
    filled: b.filled,
    focused: b.focused,
    required: b.required
  }, C = Fy(m);
  return /* @__PURE__ */ k.jsxs(_y, {
    as: l,
    ownerState: m,
    className: Ce(C.root, a),
    ref: n,
    ...h,
    children: [i, b.required && /* @__PURE__ */ k.jsxs(Ly, {
      ownerState: m,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Xu.propTypes = {
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
function By(e) {
  return Xe("MuiInputLabel", e);
}
Ze("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const zy = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !a && "animated", i && "shrink", r && r !== "normal" && `size${he(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = nt(c, By, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, Wy = be(Xu, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${no.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(tt(({
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
}))), Zu = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: a,
    shrink: s,
    variant: l,
    className: c,
    ...u
  } = r, d = ur();
  let f = s;
  typeof f > "u" && d && (f = d.filled || d.focused || d.adornedStart);
  const g = Ar({
    props: r,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), h = {
    ...r,
    disableAnimation: i,
    formControl: d,
    shrink: f,
    size: g.size,
    variant: g.variant,
    required: g.required,
    focused: g.focused
  }, y = zy(h);
  return /* @__PURE__ */ k.jsx(Wy, {
    "data-shrink": f,
    ref: n,
    className: Ce(y.root, c),
    ...u,
    ownerState: h,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (Zu.propTypes = {
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
function Vy(e) {
  return Xe("MuiFormControl", e);
}
Ze("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Hy = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${he(n)}`, r && "fullWidth"]
  };
  return nt(i, Vy, t);
}, Uy = be("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${he(e.margin)}`],
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
}), Qu = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: a,
    color: s = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: g = !1,
    margin: h = "none",
    required: y = !1,
    size: b = "medium",
    variant: m = "outlined",
    ...C
  } = r, T = {
    ...r,
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: g,
    margin: h,
    required: y,
    size: b,
    variant: m
  }, v = Hy(T), [w, x] = E.useState(() => {
    let U = !1;
    return i && E.Children.forEach(i, (N) => {
      if (!ca(N, ["Input", "Select"]))
        return;
      const B = ca(N, ["Select"]) ? N.props.input : N;
      B && py(B.props) && (U = !0);
    }), U;
  }), [R, O] = E.useState(() => {
    let U = !1;
    return i && E.Children.forEach(i, (N) => {
      ca(N, ["Input", "Select"]) && (si(N.props, !0) || si(N.props.inputProps, !0)) && (U = !0);
    }), U;
  }), [I, $] = E.useState(!1);
  c && I && $(!1);
  const p = d !== void 0 && !c ? d : I;
  let P;
  const M = E.useRef(!1);
  process.env.NODE_ENV !== "production" && (P = () => (M.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), M.current = !0, () => {
    M.current = !1;
  }));
  const j = E.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: x,
    color: s,
    disabled: c,
    error: u,
    filled: R,
    focused: p,
    fullWidth: f,
    hiddenLabel: g,
    size: b,
    onBlur: () => {
      $(!1);
    },
    onEmpty: () => {
      O(!1);
    },
    onFilled: () => {
      O(!0);
    },
    onFocus: () => {
      $(!0);
    },
    registerEffect: P,
    required: y,
    variant: m
  }), [w, s, c, u, R, p, f, g, P, y, b, m]);
  return /* @__PURE__ */ k.jsx(_i.Provider, {
    value: j,
    children: /* @__PURE__ */ k.jsx(Uy, {
      as: l,
      ownerState: T,
      className: Ce(v.root, a),
      ref: n,
      ...C,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Qu.propTypes = {
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
function Yy(e) {
  return Xe("MuiFormHelperText", e);
}
const Ll = Ze("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Bl;
const qy = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: i,
    error: a,
    filled: s,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", a && "error", r && `size${he(r)}`, n && "contained", l && "focused", s && "filled", c && "required"]
  };
  return nt(u, Yy, t);
}, Gy = be("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${he(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(tt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ll.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ll.error}`]: {
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
}))), Ju = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: a,
    component: s = "p",
    disabled: l,
    error: c,
    filled: u,
    focused: d,
    margin: f,
    required: g,
    variant: h,
    ...y
  } = r, b = ur(), m = Ar({
    props: r,
    muiFormControl: b,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: s,
    contained: m.variant === "filled" || m.variant === "outlined",
    variant: m.variant,
    size: m.size,
    disabled: m.disabled,
    error: m.error,
    filled: m.filled,
    focused: m.focused,
    required: m.required
  };
  delete C.ownerState;
  const T = qy(C);
  return /* @__PURE__ */ k.jsx(Gy, {
    as: s,
    className: Ce(T.root, a),
    ref: n,
    ...y,
    ownerState: C,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Bl || (Bl = /* @__PURE__ */ k.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (Ju.propTypes = {
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
var _a = { exports: {} }, He = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zl;
function Ky() {
  if (zl) return He;
  zl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var C = m.$$typeof;
      switch (C) {
        case e:
          switch (m = m.type, m) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case s:
                case c:
                case g:
                case f:
                case a:
                  return m;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return He.ContextConsumer = s, He.ContextProvider = a, He.Element = e, He.ForwardRef = c, He.Fragment = n, He.Lazy = g, He.Memo = f, He.Portal = t, He.Profiler = i, He.StrictMode = r, He.Suspense = u, He.SuspenseList = d, He.isAsyncMode = function() {
    return !1;
  }, He.isConcurrentMode = function() {
    return !1;
  }, He.isContextConsumer = function(m) {
    return b(m) === s;
  }, He.isContextProvider = function(m) {
    return b(m) === a;
  }, He.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, He.isForwardRef = function(m) {
    return b(m) === c;
  }, He.isFragment = function(m) {
    return b(m) === n;
  }, He.isLazy = function(m) {
    return b(m) === g;
  }, He.isMemo = function(m) {
    return b(m) === f;
  }, He.isPortal = function(m) {
    return b(m) === t;
  }, He.isProfiler = function(m) {
    return b(m) === i;
  }, He.isStrictMode = function(m) {
    return b(m) === r;
  }, He.isSuspense = function(m) {
    return b(m) === u;
  }, He.isSuspenseList = function(m) {
    return b(m) === d;
  }, He.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === i || m === r || m === u || m === d || m === h || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === f || m.$$typeof === a || m.$$typeof === s || m.$$typeof === c || m.$$typeof === y || m.getModuleId !== void 0);
  }, He.typeOf = b, He;
}
var Ue = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wl;
function Xy() {
  return Wl || (Wl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = !1, b = !1, m = !1, C = !1, T = !1, v;
    v = Symbol.for("react.module.reference");
    function w(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === i || T || D === r || D === u || D === d || C || D === h || y || b || m || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === f || D.$$typeof === a || D.$$typeof === s || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === v || D.getModuleId !== void 0));
    }
    function x(D) {
      if (typeof D == "object" && D !== null) {
        var de = D.$$typeof;
        switch (de) {
          case e:
            var ie = D.type;
            switch (ie) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return ie;
              default:
                var $e = ie && ie.$$typeof;
                switch ($e) {
                  case l:
                  case s:
                  case c:
                  case g:
                  case f:
                  case a:
                    return $e;
                  default:
                    return de;
                }
            }
          case t:
            return de;
        }
      }
    }
    var R = s, O = a, I = e, $ = c, p = n, P = g, M = f, j = t, U = i, N = r, B = u, ee = d, te = !1, re = !1;
    function H(D) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(D) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(D) {
      return x(D) === s;
    }
    function ne(D) {
      return x(D) === a;
    }
    function F(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function z(D) {
      return x(D) === c;
    }
    function G(D) {
      return x(D) === n;
    }
    function L(D) {
      return x(D) === g;
    }
    function V(D) {
      return x(D) === f;
    }
    function Z(D) {
      return x(D) === t;
    }
    function K(D) {
      return x(D) === i;
    }
    function ce(D) {
      return x(D) === r;
    }
    function W(D) {
      return x(D) === u;
    }
    function ye(D) {
      return x(D) === d;
    }
    Ue.ContextConsumer = R, Ue.ContextProvider = O, Ue.Element = I, Ue.ForwardRef = $, Ue.Fragment = p, Ue.Lazy = P, Ue.Memo = M, Ue.Portal = j, Ue.Profiler = U, Ue.StrictMode = N, Ue.Suspense = B, Ue.SuspenseList = ee, Ue.isAsyncMode = H, Ue.isConcurrentMode = X, Ue.isContextConsumer = ue, Ue.isContextProvider = ne, Ue.isElement = F, Ue.isForwardRef = z, Ue.isFragment = G, Ue.isLazy = L, Ue.isMemo = V, Ue.isPortal = Z, Ue.isProfiler = K, Ue.isStrictMode = ce, Ue.isSuspense = W, Ue.isSuspenseList = ye, Ue.isValidElementType = w, Ue.typeOf = x;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? _a.exports = Ky() : _a.exports = Xy();
var gs = _a.exports;
const ed = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (ed.displayName = "ListContext");
function Zy(e) {
  return Xe("MuiList", e);
}
Ze("MuiList", ["root", "padding", "dense", "subheader"]);
const Qy = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return nt({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, Zy, t);
}, Jy = be("ul", {
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
}), td = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...d
  } = r, f = E.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...r,
    component: s,
    dense: l,
    disablePadding: c
  }, h = Qy(g);
  return /* @__PURE__ */ k.jsx(ed.Provider, {
    value: f,
    children: /* @__PURE__ */ k.jsxs(Jy, {
      as: s,
      className: Ce(h.root, a),
      ref: n,
      ownerState: g,
      ...d,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (td.propTypes = {
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
function fa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Vl(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function nd(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Hr(e, t, n, r, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !nd(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const rd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu",
    ...g
  } = t, h = E.useRef(null), y = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Ln(() => {
    i && h.current.focus();
  }, [i]), E.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: w
    }) => {
      const x = !h.current.style.width;
      if (v.clientHeight < h.current.clientHeight && x) {
        const R = `${$u(Wn(v))}px`;
        h.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = R, h.current.style.width = `calc(100% + ${R})`;
      }
      return h.current;
    }
  }), []);
  const b = (v) => {
    const w = h.current, x = v.key;
    if (v.ctrlKey || v.metaKey || v.altKey) {
      d && d(v);
      return;
    }
    const O = Qt(w).activeElement;
    if (x === "ArrowDown")
      v.preventDefault(), Hr(w, O, u, c, fa);
    else if (x === "ArrowUp")
      v.preventDefault(), Hr(w, O, u, c, Vl);
    else if (x === "Home")
      v.preventDefault(), Hr(w, null, u, c, fa);
    else if (x === "End")
      v.preventDefault(), Hr(w, null, u, c, Vl);
    else if (x.length === 1) {
      const I = y.current, $ = x.toLowerCase(), p = performance.now();
      I.keys.length > 0 && (p - I.lastTime > 500 ? (I.keys = [], I.repeating = !0, I.previousKeyMatched = !0) : I.repeating && $ !== I.keys[0] && (I.repeating = !1)), I.lastTime = p, I.keys.push($);
      const P = O && !I.repeating && nd(O, I);
      I.previousKeyMatched && (P || Hr(w, O, !1, c, fa, I)) ? v.preventDefault() : I.previousKeyMatched = !1;
    }
    d && d(v);
  }, m = Et(h, n);
  let C = -1;
  E.Children.forEach(s, (v, w) => {
    if (!/* @__PURE__ */ E.isValidElement(v)) {
      C === w && (C += 1, C >= s.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && gs.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (f === "selectedMenu" && v.props.selected || C === -1) && (C = w), C === w && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (C += 1, C >= s.length && (C = -1));
  });
  const T = E.Children.map(s, (v, w) => {
    if (w === C) {
      const x = {};
      return a && (x.autoFocus = !0), v.props.tabIndex === void 0 && f === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ E.cloneElement(v, x);
    }
    return v;
  });
  return /* @__PURE__ */ k.jsx(td, {
    role: "menu",
    ref: m,
    className: l,
    onKeyDown: b,
    tabIndex: i ? 0 : -1,
    ...g,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (rd.propTypes = {
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
function od(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function La(e, t) {
  return La = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, La(e, t);
}
function id(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, La(e, t);
}
const Hl = {
  disabled: !1
};
var ev = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const li = Bt.createContext(null);
var tv = function(t) {
  return t.scrollTop;
}, Zr = "unmounted", rr = "exited", or = "entering", wr = "entered", Ba = "exiting", Dn = /* @__PURE__ */ function(e) {
  id(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = rr, a.appearStatus = or) : c = wr : r.unmountOnExit || r.mountOnEnter ? c = Zr : c = rr, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === Zr ? {
      status: rr
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== or && s !== wr && (a = or) : (s === or || s === wr) && (a = Ba);
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
      if (this.cancelNextCallback(), a === or) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : _o.findDOMNode(this);
          s && tv(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === rr && this.setState({
      status: Zr
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [_o.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), g = l ? f.appear : f.enter;
    if (!i && !s || Hl.disabled) {
      this.safeSetState({
        status: wr
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: or
    }, function() {
      a.props.onEntering(u, d), a.onTransitionEnd(g, function() {
        a.safeSetState({
          status: wr
        }, function() {
          a.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : _o.findDOMNode(this);
    if (!a || Hl.disabled) {
      this.safeSetState({
        status: rr
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Ba
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: rr
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : _o.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Zr)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = od(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Bt.createElement(li.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : Bt.cloneElement(Bt.Children.only(s), l))
    );
  }, t;
}(Bt.Component);
Dn.contextType = li;
Dn.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = ev;
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
function vr() {
}
Dn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vr,
  onEntering: vr,
  onEntered: vr,
  onExit: vr,
  onExiting: vr,
  onExited: vr
};
Dn.UNMOUNTED = Zr;
Dn.EXITED = rr;
Dn.ENTERING = or;
Dn.ENTERED = wr;
Dn.EXITING = Ba;
function nv(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bs(e, t) {
  var n = function(a) {
    return t && Uo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Cf.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function rv(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (r[a] = i, i = []) : i.push(a);
  var s, l = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var u = r[c][s];
        l[r[c][s]] = n(u);
      }
    l[c] = n(c);
  }
  for (s = 0; s < i.length; s++)
    l[i[s]] = n(i[s]);
  return l;
}
function ar(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function ov(e, t) {
  return bs(e.children, function(n) {
    return Yo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ar(n, "appear", e),
      enter: ar(n, "enter", e),
      exit: ar(n, "exit", e)
    });
  });
}
function iv(e, t, n) {
  var r = bs(e.children), i = rv(t, r);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (Uo(s)) {
      var l = a in t, c = a in r, u = t[a], d = Uo(u) && !u.props.in;
      c && (!l || d) ? i[a] = Yo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: ar(s, "exit", e),
        enter: ar(s, "enter", e)
      }) : !c && l && !d ? i[a] = Yo(s, {
        in: !1
      }) : c && l && Uo(u) && (i[a] = Yo(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: ar(s, "exit", e),
        enter: ar(s, "enter", e)
      }));
    }
  }), i;
}
var av = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, sv = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ys = /* @__PURE__ */ function(e) {
  id(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(nv(a));
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
      children: c ? ov(i, l) : iv(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = bs(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = ri({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = od(i, ["component", "childFactory"]), c = this.state.contextValue, u = av(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ Bt.createElement(li.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Bt.createElement(li.Provider, {
      value: c
    }, /* @__PURE__ */ Bt.createElement(a, l, u));
  }, t;
}(Bt.Component);
ys.propTypes = process.env.NODE_ENV !== "production" ? {
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
ys.defaultProps = sv;
const ad = (e) => e.scrollTop;
function ci(e, t) {
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
function za(e) {
  return `scale(${e}, ${e ** 2})`;
}
const lv = {
  entering: {
    opacity: 1,
    transform: za(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, pa = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ui = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: g,
    onExiting: h,
    style: y,
    timeout: b = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Dn,
    ...C
  } = t, T = Iu(), v = E.useRef(), w = hs(), x = E.useRef(null), R = Et(x, Io(a), n), O = (N) => (B) => {
    if (N) {
      const ee = x.current;
      B === void 0 ? N(ee) : N(ee, B);
    }
  }, I = O(d), $ = O((N, B) => {
    ad(N);
    const {
      duration: ee,
      delay: te,
      easing: re
    } = ci({
      style: y,
      timeout: b,
      easing: s
    }, {
      mode: "enter"
    });
    let H;
    b === "auto" ? (H = w.transitions.getAutoHeightDuration(N.clientHeight), v.current = H) : H = ee, N.style.transition = [w.transitions.create("opacity", {
      duration: H,
      delay: te
    }), w.transitions.create("transform", {
      duration: pa ? H : H * 0.666,
      delay: te,
      easing: re
    })].join(","), c && c(N, B);
  }), p = O(u), P = O(h), M = O((N) => {
    const {
      duration: B,
      delay: ee,
      easing: te
    } = ci({
      style: y,
      timeout: b,
      easing: s
    }, {
      mode: "exit"
    });
    let re;
    b === "auto" ? (re = w.transitions.getAutoHeightDuration(N.clientHeight), v.current = re) : re = B, N.style.transition = [w.transitions.create("opacity", {
      duration: re,
      delay: ee
    }), w.transitions.create("transform", {
      duration: pa ? re : re * 0.666,
      delay: pa ? ee : ee || re * 0.333,
      easing: te
    })].join(","), N.style.opacity = 0, N.style.transform = za(0.75), f && f(N);
  }), j = O(g), U = (N) => {
    b === "auto" && T.start(v.current || 0, N), r && r(x.current, N);
  };
  return /* @__PURE__ */ k.jsx(m, {
    appear: i,
    in: l,
    nodeRef: x,
    onEnter: $,
    onEntered: p,
    onEntering: I,
    onExit: M,
    onExited: j,
    onExiting: P,
    addEndListener: U,
    timeout: b === "auto" ? null : b,
    ...C,
    children: (N, B) => /* @__PURE__ */ E.cloneElement(a, {
      style: {
        opacity: 0,
        transform: za(0.75),
        visibility: N === "exited" && !l ? "hidden" : void 0,
        ...lv[N],
        ...y,
        ...a.props.style
      },
      ref: R,
      ...B
    })
  });
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
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
  children: ko.isRequired,
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
ui && (ui.muiSupportAuto = !0);
function cv(e) {
  const t = Qt(e);
  return t.body === e ? Wn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ro(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ul(e) {
  return parseInt(Wn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function uv(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Yl(e, t, n, r, i) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !a.includes(s), c = !uv(s);
    l && c && ro(s, i);
  });
}
function ma(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function dv(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (cv(r)) {
      const s = $u(Wn(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Ul(r) + s}px`;
      const l = Qt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Ul(c) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = Qt(r).body;
    else {
      const s = r.parentElement, l = Wn(r);
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
function fv(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class pv {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ro(t.modalRef, !1);
    const i = fv(n);
    Yl(n, t.mount, t.modalRef, i, !0);
    const a = ma(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = ma(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = dv(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = ma(this.containers, (s) => s.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && ro(t.modalRef, n), Yl(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && ro(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const mv = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function hv(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function gv(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function bv(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || gv(e));
}
function yv(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(mv)).forEach((r, i) => {
    const a = hv(r);
    a === -1 || !bv(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function vv() {
  return !0;
}
function di(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = yv,
    isEnabled: s = vv,
    open: l
  } = e, c = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), f = E.useRef(null), g = E.useRef(null), h = E.useRef(!1), y = E.useRef(null), b = Et(Io(t), y), m = E.useRef(null);
  E.useEffect(() => {
    !l || !y.current || (h.current = !n);
  }, [n, l]), E.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = Qt(y.current);
    return y.current.contains(v.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), h.current && y.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), E.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = Qt(y.current), w = (O) => {
      m.current = O, !(r || !s() || O.key !== "Tab") && v.activeElement === y.current && O.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, x = () => {
      var $, p;
      const O = y.current;
      if (O === null)
        return;
      if (!v.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (O.contains(v.activeElement) || r && v.activeElement !== u.current && v.activeElement !== d.current)
        return;
      if (v.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!h.current)
        return;
      let I = [];
      if ((v.activeElement === u.current || v.activeElement === d.current) && (I = a(y.current)), I.length > 0) {
        const P = !!(($ = m.current) != null && $.shiftKey && ((p = m.current) == null ? void 0 : p.key) === "Tab"), M = I[0], j = I[I.length - 1];
        typeof M != "string" && typeof j != "string" && (P ? j.focus() : M.focus());
      } else
        O.focus();
    };
    v.addEventListener("focusin", x), v.addEventListener("keydown", w, !0);
    const R = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(R), v.removeEventListener("focusin", x), v.removeEventListener("keydown", w, !0);
    };
  }, [n, r, i, s, l, a]);
  const C = (v) => {
    f.current === null && (f.current = v.relatedTarget), h.current = !0, g.current = v.target;
    const w = t.props.onFocus;
    w && w(v);
  }, T = (v) => {
    f.current === null && (f.current = v.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ k.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ k.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: b,
      onFocus: C
    }), /* @__PURE__ */ k.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: ko,
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
process.env.NODE_ENV !== "production" && (di.propTypes = Ru(di.propTypes));
function xv(e) {
  return typeof e == "function" ? e() : e;
}
const bo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = E.useState(null), c = Et(/* @__PURE__ */ E.isValidElement(r) ? Io(r) : null, n);
  if (Ln(() => {
    a || l(xv(i) || document.body);
  }, [i, a]), Ln(() => {
    if (s && !a)
      return ai(n, s), () => {
        ai(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ E.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ E.cloneElement(r, u);
    }
    return /* @__PURE__ */ k.jsx(E.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ k.jsx(E.Fragment, {
    children: s && /* @__PURE__ */ Sf.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (bo.propTypes = {
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
  container: o.oneOfType([zn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (bo.propTypes = Ru(bo.propTypes));
function Lt(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: i,
    externalForwardedProps: a,
    getSlotOwnerState: s,
    internalForwardedProps: l,
    ...c
  } = t, {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...g
  } = a, h = d[e] || r, y = Fu(f[e], i), {
    props: {
      component: b,
      ...m
    },
    internalRef: C
  } = ju({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: y
  }), T = Et(C, y == null ? void 0 : y.ref, t.ref), v = s ? s(m) : {}, w = {
    ...i,
    ...v
  }, x = e === "root" ? b || u : b, R = Du(h, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...m,
    ...x && {
      as: x
    },
    ref: T
  }, w);
  return Object.keys(v).forEach((O) => {
    delete R[O];
  }), [h, R];
}
const wv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, sd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = hs(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: g,
    onExit: h,
    onExited: y,
    onExiting: b,
    style: m,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Dn,
    ...v
  } = t, w = E.useRef(null), x = Et(w, Io(l), n), R = (U) => (N) => {
    if (U) {
      const B = w.current;
      N === void 0 ? U(B) : U(B, N);
    }
  }, O = R(g), I = R((U, N) => {
    ad(U);
    const B = ci({
      style: m,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    U.style.webkitTransition = r.transitions.create("opacity", B), U.style.transition = r.transitions.create("opacity", B), d && d(U, N);
  }), $ = R(f), p = R(b), P = R((U) => {
    const N = ci({
      style: m,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    U.style.webkitTransition = r.transitions.create("opacity", N), U.style.transition = r.transitions.create("opacity", N), h && h(U);
  }), M = R(y), j = (U) => {
    a && a(w.current, U);
  };
  return /* @__PURE__ */ k.jsx(T, {
    appear: s,
    in: u,
    nodeRef: w,
    onEnter: I,
    onEntered: $,
    onEntering: O,
    onExit: P,
    onExited: M,
    onExiting: p,
    addEndListener: j,
    timeout: C,
    ...v,
    children: (U, N) => /* @__PURE__ */ E.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: U === "exited" && !u ? "hidden" : void 0,
        ...wv[U],
        ...m,
        ...l.props.style
      },
      ref: x,
      ...N
    })
  });
});
process.env.NODE_ENV !== "production" && (sd.propTypes = {
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
  children: ko.isRequired,
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
function Cv(e) {
  return Xe("MuiBackdrop", e);
}
Ze("MuiBackdrop", ["root", "invisible"]);
const Sv = (e) => {
  const {
    ownerState: t,
    ...n
  } = e;
  return n;
}, Ev = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return nt({
    root: ["root", n && "invisible"]
  }, Cv, t);
}, Tv = be("div", {
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
}), ld = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: s = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: d = {},
    slotProps: f = {},
    slots: g = {},
    TransitionComponent: h,
    transitionDuration: y,
    ...b
  } = r, m = {
    ...r,
    component: s,
    invisible: l
  }, C = Ev(m), T = {
    transition: h,
    root: u.Root,
    ...g
  }, v = {
    ...d,
    ...f
  }, w = {
    slots: T,
    slotProps: v
  }, [x, R] = Lt("root", {
    elementType: Tv,
    externalForwardedProps: w,
    className: Ce(C.root, a),
    ownerState: m
  }), [O, I] = Lt("transition", {
    elementType: sd,
    externalForwardedProps: w,
    ownerState: m
  }), $ = Sv(I);
  return /* @__PURE__ */ k.jsx(O, {
    in: c,
    timeout: y,
    ...b,
    ...$,
    children: /* @__PURE__ */ k.jsx(x, {
      "aria-hidden": !0,
      ...R,
      classes: C,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ld.propTypes = {
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
function Ov(e) {
  return typeof e == "function" ? e() : e;
}
function Rv(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Vo = new pv();
function Pv(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: s,
    children: l,
    onClose: c,
    open: u,
    rootRef: d
  } = e, f = E.useRef({}), g = E.useRef(null), h = E.useRef(null), y = Et(h, d), [b, m] = E.useState(!u), C = Rv(l);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const v = () => Qt(g.current), w = () => (f.current.modalRef = h.current, f.current.mount = g.current, f.current), x = () => {
    Vo.mount(w(), {
      disableScrollLock: r
    }), h.current && (h.current.scrollTop = 0);
  }, R = kn(() => {
    const N = Ov(t) || v().body;
    Vo.add(w(), N), h.current && x();
  }), O = () => Vo.isTopModal(w()), I = kn((N) => {
    g.current = N, N && (u && O() ? x() : h.current && ro(h.current, T));
  }), $ = E.useCallback(() => {
    Vo.remove(w(), T);
  }, [T]);
  E.useEffect(() => () => {
    $();
  }, [$]), E.useEffect(() => {
    u ? R() : (!C || !i) && $();
  }, [u, $, C, i, R]);
  const p = (N) => (B) => {
    var ee;
    (ee = N.onKeyDown) == null || ee.call(N, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !O()) && (n || (B.stopPropagation(), c && c(B, "escapeKeyDown")));
  }, P = (N) => (B) => {
    var ee;
    (ee = N.onClick) == null || ee.call(N, B), B.target === B.currentTarget && c && c(B, "backdropClick");
  };
  return {
    getRootProps: (N = {}) => {
      const B = Au(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const ee = {
        ...B,
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
        onKeyDown: p(ee),
        ref: y
      };
    },
    getBackdropProps: (N = {}) => {
      const B = N;
      return {
        "aria-hidden": !0,
        ...B,
        onClick: P(B),
        open: u
      };
    },
    getTransitionProps: () => {
      const N = () => {
        m(!1), a && a();
      }, B = () => {
        m(!0), s && s(), i && $();
      };
      return {
        onEnter: wl(N, l == null ? void 0 : l.props.onEnter),
        onExited: wl(B, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: y,
    portalRef: I,
    isTopModal: O,
    exited: b,
    hasTransition: C
  };
}
function kv(e) {
  return Xe("MuiModal", e);
}
Ze("MuiModal", ["root", "hidden", "backdrop"]);
const Iv = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return nt({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, kv, r);
}, $v = be("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(tt(({
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
}))), Mv = be(ld, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), cd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Mv,
    BackdropProps: a,
    classes: s,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: f,
    components: g = {},
    componentsProps: h = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: b = !1,
    disableEscapeKeyDown: m = !1,
    disablePortal: C = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: v = !1,
    hideBackdrop: w = !1,
    keepMounted: x = !1,
    onBackdropClick: R,
    onClose: O,
    onTransitionEnter: I,
    onTransitionExited: $,
    open: p,
    slotProps: P = {},
    slots: M = {},
    // eslint-disable-next-line react/prop-types
    theme: j,
    ...U
  } = r, N = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: b,
    disableEscapeKeyDown: m,
    disablePortal: C,
    disableRestoreFocus: T,
    disableScrollLock: v,
    hideBackdrop: w,
    keepMounted: x
  }, {
    getRootProps: B,
    getBackdropProps: ee,
    getTransitionProps: te,
    portalRef: re,
    isTopModal: H,
    exited: X,
    hasTransition: ue
  } = Pv({
    ...N,
    rootRef: n
  }), ne = {
    ...N,
    exited: X
  }, F = Iv(ne), z = {};
  if (u.props.tabIndex === void 0 && (z.tabIndex = "-1"), ue) {
    const {
      onEnter: W,
      onExited: ye
    } = te();
    z.onEnter = W, z.onExited = ye;
  }
  const G = {
    ...U,
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...M
    },
    slotProps: {
      ...h,
      ...P
    }
  }, [L, V] = Lt("root", {
    elementType: $v,
    externalForwardedProps: G,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: f
    },
    ownerState: ne,
    className: Ce(l, F == null ? void 0 : F.root, !ne.open && ne.exited && (F == null ? void 0 : F.hidden))
  }), [Z, K] = Lt("backdrop", {
    elementType: i,
    externalForwardedProps: G,
    additionalProps: a,
    getSlotProps: (W) => ee({
      ...W,
      onClick: (ye) => {
        R && R(ye), W != null && W.onClick && W.onClick(ye);
      }
    }),
    className: Ce(a == null ? void 0 : a.className, F == null ? void 0 : F.backdrop),
    ownerState: ne
  }), ce = Et(a == null ? void 0 : a.ref, K.ref);
  return !x && !p && (!ue || X) ? null : /* @__PURE__ */ k.jsx(bo, {
    ref: re,
    container: d,
    disablePortal: C,
    children: /* @__PURE__ */ k.jsxs(L, {
      ...V,
      children: [!w && i ? /* @__PURE__ */ k.jsx(Z, {
        ...K,
        ref: ce
      }) : null, /* @__PURE__ */ k.jsx(di, {
        disableEnforceFocus: b,
        disableAutoFocus: y,
        disableRestoreFocus: T,
        isEnabled: H,
        open: p,
        children: /* @__PURE__ */ E.cloneElement(u, z)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (cd.propTypes = {
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
  children: ko.isRequired,
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
  container: o.oneOfType([zn, o.func]),
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
function Nv(e) {
  return Xe("MuiPaper", e);
}
Ze("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Dv = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return nt(a, Nv, i);
}, Av = be("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(tt(({
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
}))), Hi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var h;
  const r = ot({
    props: t,
    name: "MuiPaper"
  }), i = hs(), {
    className: a,
    component: s = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...d
  } = r, f = {
    ...r,
    component: s,
    elevation: l,
    square: c,
    variant: u
  }, g = Dv(f);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ k.jsx(Av, {
    as: s,
    ownerState: f,
    className: Ce(g.root, a),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (h = i.vars.overlays) == null ? void 0 : h[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${xt("#fff", ja(l))}, ${xt("#fff", ja(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
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
  elevation: Bn(fs, (e) => {
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
function jv(e) {
  return Xe("MuiPopover", e);
}
Ze("MuiPopover", ["root", "paper"]);
function ql(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Gl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Kl(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Qo(e) {
  return typeof e == "function" ? e() : e;
}
const Fv = (e) => {
  const {
    classes: t
  } = e;
  return nt({
    root: ["root"],
    paper: ["paper"]
  }, jv, t);
}, _v = be(cd, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ud = be(Hi, {
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
}), dd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
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
    children: u,
    className: d,
    container: f,
    elevation: g = 8,
    marginThreshold: h = 16,
    open: y,
    PaperProps: b = {},
    slots: m = {},
    slotProps: C = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = ui,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: x,
      ...R
    } = {},
    disableScrollLock: O = !1,
    ...I
  } = r, $ = (C == null ? void 0 : C.paper) ?? b, p = E.useRef(), P = {
    ...r,
    anchorOrigin: s,
    anchorReference: c,
    elevation: g,
    marginThreshold: h,
    externalPaperSlotProps: $,
    transformOrigin: T,
    TransitionComponent: v,
    transitionDuration: w,
    TransitionProps: R
  }, M = Fv(P), j = E.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const K = Qo(a), ce = K && K.nodeType === 1 ? K : Qt(p.current).body, W = ce.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ye = ce.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ye.top === 0 && ye.left === 0 && ye.right === 0 && ye.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: W.top + ql(W, s.vertical),
      left: W.left + Gl(W, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), U = E.useCallback((K) => ({
    vertical: ql(K, T.vertical),
    horizontal: Gl(K, T.horizontal)
  }), [T.horizontal, T.vertical]), N = E.useCallback((K) => {
    const ce = {
      width: K.offsetWidth,
      height: K.offsetHeight
    }, W = U(ce);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Kl(W)
      };
    const ye = j();
    let D = ye.top - W.vertical, de = ye.left - W.horizontal;
    const ie = D + ce.height, $e = de + ce.width, ge = Wn(Qo(a)), Ee = ge.innerHeight - h, Ae = ge.innerWidth - h;
    if (h !== null && D < h) {
      const Te = D - h;
      D -= Te, W.vertical += Te;
    } else if (h !== null && ie > Ee) {
      const Te = ie - Ee;
      D -= Te, W.vertical += Te;
    }
    if (process.env.NODE_ENV !== "production" && ce.height > Ee && ce.height && Ee && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ce.height - Ee}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), h !== null && de < h) {
      const Te = de - h;
      de -= Te, W.horizontal += Te;
    } else if ($e > Ae) {
      const Te = $e - Ae;
      de -= Te, W.horizontal += Te;
    }
    return {
      top: `${Math.round(D)}px`,
      left: `${Math.round(de)}px`,
      transformOrigin: Kl(W)
    };
  }, [a, c, j, U, h]), [B, ee] = E.useState(y), te = E.useCallback(() => {
    const K = p.current;
    if (!K)
      return;
    const ce = N(K);
    ce.top !== null && K.style.setProperty("top", ce.top), ce.left !== null && (K.style.left = ce.left), K.style.transformOrigin = ce.transformOrigin, ee(!0);
  }, [N]);
  E.useEffect(() => (O && window.addEventListener("scroll", te), () => window.removeEventListener("scroll", te)), [a, O, te]);
  const re = (K, ce) => {
    x && x(K, ce), te();
  }, H = () => {
    ee(!1);
  };
  E.useEffect(() => {
    y && te();
  }), E.useImperativeHandle(i, () => y ? {
    updatePosition: () => {
      te();
    }
  } : null, [y, te]), E.useEffect(() => {
    if (!y)
      return;
    const K = Pu(() => {
      te();
    }), ce = Wn(a);
    return ce.addEventListener("resize", K), () => {
      K.clear(), ce.removeEventListener("resize", K);
    };
  }, [a, y, te]);
  let X = w;
  w === "auto" && !v.muiSupportAuto && (X = void 0);
  const ue = f || (a ? Qt(Qo(a)).body : void 0), ne = {
    slots: m,
    slotProps: {
      ...C,
      paper: $
    }
  }, [F, z] = Lt("paper", {
    elementType: ud,
    externalForwardedProps: ne,
    additionalProps: {
      elevation: g,
      className: Ce(M.paper, $ == null ? void 0 : $.className),
      style: B ? $.style : {
        ...$.style,
        opacity: 0
      }
    },
    ownerState: P
  }), [G, {
    slotProps: L,
    ...V
  }] = Lt("root", {
    elementType: _v,
    externalForwardedProps: ne,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: ue,
      open: y
    },
    ownerState: P,
    className: Ce(M.root, d)
  }), Z = Et(p, z.ref);
  return /* @__PURE__ */ k.jsx(G, {
    ...V,
    ...!Fa(G) && {
      slotProps: L,
      disableScrollLock: O
    },
    ...I,
    ref: n,
    children: /* @__PURE__ */ k.jsx(v, {
      appear: !0,
      in: y,
      onEntering: re,
      onExited: H,
      timeout: X,
      ...R,
      children: /* @__PURE__ */ k.jsx(F, {
        ...z,
        ref: Z,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (dd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: en,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Bn(o.oneOfType([zn, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Qo(e.anchorEl);
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
  container: o.oneOfType([zn, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: fs,
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
    component: cs
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
function Lv(e) {
  return Xe("MuiMenu", e);
}
Ze("MuiMenu", ["root", "paper", "list"]);
const Bv = {
  vertical: "top",
  horizontal: "right"
}, zv = {
  vertical: "top",
  horizontal: "left"
}, Wv = (e) => {
  const {
    classes: t
  } = e;
  return nt({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Lv, t);
}, Vv = be(dd, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Hv = be(ud, {
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
}), Uv = be(rd, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), fd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: s,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: d,
    PaperProps: f = {},
    PopoverClasses: g,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: y,
      ...b
    } = {},
    variant: m = "selectedMenu",
    slots: C = {},
    slotProps: T = {},
    ...v
  } = r, w = _u(), x = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: f,
    transitionDuration: h,
    TransitionProps: b,
    variant: m
  }, R = Wv(x), O = i && !l && d, I = E.useRef(null), $ = (B, ee) => {
    I.current && I.current.adjustStyleForScrollbar(B, {
      direction: w ? "rtl" : "ltr"
    }), y && y(B, ee);
  }, p = (B) => {
    B.key === "Tab" && (B.preventDefault(), u && u(B, "tabKeyDown"));
  };
  let P = -1;
  E.Children.map(a, (B, ee) => {
    /* @__PURE__ */ E.isValidElement(B) && (process.env.NODE_ENV !== "production" && gs.isFragment(B) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), B.props.disabled || (m === "selectedMenu" && B.props.selected || P === -1) && (P = ee));
  });
  const M = C.paper ?? Hv, j = T.paper ?? f, U = Da({
    elementType: C.root,
    externalSlotProps: T.root,
    ownerState: x,
    className: [R.root, s]
  }), N = Da({
    elementType: M,
    externalSlotProps: j,
    ownerState: x,
    className: R.paper
  });
  return /* @__PURE__ */ k.jsx(Vv, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? Bv : zv,
    slots: {
      paper: M,
      root: C.root
    },
    slotProps: {
      root: U,
      paper: N
    },
    open: d,
    ref: n,
    transitionDuration: h,
    TransitionProps: {
      onEntering: $,
      ...b
    },
    ownerState: x,
    ...v,
    classes: g,
    children: /* @__PURE__ */ k.jsx(Uv, {
      onKeyDown: p,
      actions: I,
      autoFocus: i && (P === -1 || l),
      autoFocusItem: O,
      variant: m,
      ...c,
      className: Ce(R.list, c.className),
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (fd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([zn, o.func]),
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
function Yv(e) {
  return Xe("MuiNativeSelect", e);
}
const vs = Ze("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), qv = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${he(n)}`, a && "iconOpen", r && "disabled"]
  };
  return nt(l, Yv, t);
}, pd = be("select")(({
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
  [`&.${vs.disabled}`]: {
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
})), Gv = be(pd, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: hn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${vs.multiple}`]: t.multiple
    }];
  }
})({}), md = be("svg")(({
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
  [`&.${vs.disabled}`]: {
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
})), Kv = be(md, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${he(n.variant)}`], n.open && t.iconOpen];
  }
})({}), hd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: i,
    error: a,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard",
    ...u
  } = t, d = {
    ...t,
    disabled: i,
    variant: c,
    error: a
  }, f = qv(d);
  return /* @__PURE__ */ k.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ k.jsx(Gv, {
      ownerState: d,
      className: Ce(f.select, r),
      disabled: i,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ k.jsx(Kv, {
      as: s,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (hd.propTypes = {
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
  inputRef: en,
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
function Xv(e) {
  return Xe("MuiSelect", e);
}
const Ur = Ze("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Xl;
const Zv = be(pd, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Ur.select}`]: t.select
      },
      {
        [`&.${Ur.select}`]: t[n.variant]
      },
      {
        [`&.${Ur.error}`]: t.error
      },
      {
        [`&.${Ur.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Ur.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Qv = be(md, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${he(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Jv = be("input", {
  shouldForwardProp: (e) => Uu(e) && e !== "classes",
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
function Zl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function e0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const t0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${he(n)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return nt(l, Xv, t);
}, gd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var Ot;
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: a,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: g,
    error: h = !1,
    IconComponent: y,
    inputRef: b,
    labelId: m,
    MenuProps: C = {},
    multiple: T,
    name: v,
    onBlur: w,
    onChange: x,
    onClose: R,
    onFocus: O,
    onOpen: I,
    open: $,
    readOnly: p,
    renderValue: P,
    SelectDisplayProps: M = {},
    tabIndex: j,
    // catching `type` from Input which makes no sense for SelectInput
    type: U,
    value: N,
    variant: B = "standard",
    ...ee
  } = t, [te, re] = Tr({
    controlled: N,
    default: d,
    name: "Select"
  }), [H, X] = Tr({
    controlled: $,
    default: u,
    name: "Select"
  }), ue = E.useRef(null), ne = E.useRef(null), [F, z] = E.useState(null), {
    current: G
  } = E.useRef($ != null), [L, V] = E.useState(), Z = Et(n, b), K = E.useCallback((pe) => {
    ne.current = pe, pe && z(pe);
  }, []), ce = F == null ? void 0 : F.parentNode;
  E.useImperativeHandle(Z, () => ({
    focus: () => {
      ne.current.focus();
    },
    node: ue.current,
    value: te
  }), [te]), E.useEffect(() => {
    u && H && F && !G && (V(s ? null : ce.clientWidth), ne.current.focus());
  }, [F, s]), E.useEffect(() => {
    a && ne.current.focus();
  }, [a]), E.useEffect(() => {
    if (!m)
      return;
    const pe = Qt(ne.current).getElementById(m);
    if (pe) {
      const ve = () => {
        getSelection().isCollapsed && ne.current.focus();
      };
      return pe.addEventListener("click", ve), () => {
        pe.removeEventListener("click", ve);
      };
    }
  }, [m]);
  const W = (pe, ve) => {
    pe ? I && I(ve) : R && R(ve), G || (V(s ? null : ce.clientWidth), X(pe));
  }, ye = (pe) => {
    pe.button === 0 && (pe.preventDefault(), ne.current.focus(), W(!0, pe));
  }, D = (pe) => {
    W(!1, pe);
  }, de = E.Children.toArray(l), ie = (pe) => {
    const ve = de.find((Ke) => Ke.props.value === pe.target.value);
    ve !== void 0 && (re(ve.props.value), x && x(pe, ve));
  }, $e = (pe) => (ve) => {
    let Ke;
    if (ve.currentTarget.hasAttribute("tabindex")) {
      if (T) {
        Ke = Array.isArray(te) ? te.slice() : [];
        const rt = te.indexOf(pe.props.value);
        rt === -1 ? Ke.push(pe.props.value) : Ke.splice(rt, 1);
      } else
        Ke = pe.props.value;
      if (pe.props.onClick && pe.props.onClick(ve), te !== Ke && (re(Ke), x)) {
        const rt = ve.nativeEvent || ve, at = new rt.constructor(rt.type, rt);
        Object.defineProperty(at, "target", {
          writable: !0,
          value: {
            value: Ke,
            name: v
          }
        }), x(at, pe);
      }
      T || W(!1, ve);
    }
  }, ge = (pe) => {
    p || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(pe.key) && (pe.preventDefault(), W(!0, pe));
  }, Ee = F !== null && H, Ae = (pe) => {
    !Ee && w && (Object.defineProperty(pe, "target", {
      writable: !0,
      value: {
        value: te,
        name: v
      }
    }), w(pe));
  };
  delete ee["aria-invalid"];
  let Te, Le;
  const fe = [];
  let je = !1, gt = !1;
  (si({
    value: te
  }) || g) && (P ? Te = P(te) : je = !0);
  const vt = de.map((pe) => {
    if (!/* @__PURE__ */ E.isValidElement(pe))
      return null;
    process.env.NODE_ENV !== "production" && gs.isFragment(pe) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let ve;
    if (T) {
      if (!Array.isArray(te))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Mn(2));
      ve = te.some((Ke) => Zl(Ke, pe.props.value)), ve && je && fe.push(pe.props.children);
    } else
      ve = Zl(te, pe.props.value), ve && je && (Le = pe.props.children);
    return ve && (gt = !0), /* @__PURE__ */ E.cloneElement(pe, {
      "aria-selected": ve ? "true" : "false",
      onClick: $e(pe),
      onKeyUp: (Ke) => {
        Ke.key === " " && Ke.preventDefault(), pe.props.onKeyUp && pe.props.onKeyUp(Ke);
      },
      role: "option",
      selected: ve,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": pe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (!gt && !T && te !== "") {
      const pe = de.map((ve) => ve.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${te}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${pe.filter((ve) => ve != null).map((ve) => `\`${ve}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [gt, de, T, v, te]), je && (T ? fe.length === 0 ? Te = null : Te = fe.reduce((pe, ve, Ke) => (pe.push(ve), Ke < fe.length - 1 && pe.push(", "), pe), []) : Te = Le);
  let qe = L;
  !s && G && F && (qe = ce.clientWidth);
  let Ge;
  typeof j < "u" ? Ge = j : Ge = f ? null : 0;
  const Re = M.id || (v ? `mui-component-select-${v}` : void 0), it = {
    ...t,
    variant: B,
    value: te,
    open: Ee,
    error: h
  }, Pe = t0(it), dt = {
    ...C.PaperProps,
    ...(Ot = C.slotProps) == null ? void 0 : Ot.paper
  }, Mt = us();
  return /* @__PURE__ */ k.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ k.jsx(Zv, {
      as: "div",
      ref: K,
      tabIndex: Ge,
      role: "combobox",
      "aria-controls": Mt,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Ee ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [m, Re].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: ge,
      onMouseDown: f || p ? null : ye,
      onBlur: Ae,
      onFocus: O,
      ...M,
      ownerState: it,
      className: Ce(M.className, Pe.select, c),
      id: Re,
      children: e0(Te) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Xl || (Xl = /* @__PURE__ */ k.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Te
    }), /* @__PURE__ */ k.jsx(Jv, {
      "aria-invalid": h,
      value: Array.isArray(te) ? te.join(",") : te,
      name: v,
      ref: ue,
      "aria-hidden": !0,
      onChange: ie,
      tabIndex: -1,
      disabled: f,
      className: Pe.nativeInput,
      autoFocus: a,
      ...ee,
      ownerState: it
    }), /* @__PURE__ */ k.jsx(Qv, {
      as: y,
      className: Pe.icon,
      ownerState: it
    }), /* @__PURE__ */ k.jsx(fd, {
      id: `menu-${v || ""}`,
      anchorEl: ce,
      open: Ee,
      onClose: D,
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
        "aria-labelledby": m,
        role: "listbox",
        "aria-multiselectable": T ? "true" : void 0,
        disableListWrap: !0,
        id: Mt,
        ...C.MenuListProps
      },
      slotProps: {
        ...C.slotProps,
        paper: {
          ...dt,
          style: {
            minWidth: qe,
            ...dt != null ? dt.style : null
          }
        }
      },
      children: vt
    })]
  });
});
process.env.NODE_ENV !== "production" && (gd.propTypes = {
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
  inputRef: en,
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
const bd = jr(/* @__PURE__ */ k.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), n0 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, xs = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => hn(e) && e !== "variant",
  slot: "Root"
}, r0 = be(po, xs)(""), o0 = be(go, xs)(""), i0 = be(ho, xs)(""), ws = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = bd,
    id: f,
    input: g,
    inputProps: h,
    label: y,
    labelId: b,
    MenuProps: m,
    multiple: C = !1,
    native: T = !1,
    onClose: v,
    onOpen: w,
    open: x,
    renderValue: R,
    SelectDisplayProps: O,
    variant: I = "outlined",
    ...$
  } = r, p = T ? hd : gd, P = ur(), M = Ar({
    props: r,
    muiFormControl: P,
    states: ["variant", "error"]
  }), j = M.variant || I, U = {
    ...r,
    variant: j,
    classes: s
  }, N = n0(U), {
    root: B,
    ...ee
  } = N, te = g || {
    standard: /* @__PURE__ */ k.jsx(r0, {
      ownerState: U
    }),
    outlined: /* @__PURE__ */ k.jsx(o0, {
      label: y,
      ownerState: U
    }),
    filled: /* @__PURE__ */ k.jsx(i0, {
      ownerState: U
    })
  }[j], re = Et(n, Io(te));
  return /* @__PURE__ */ k.jsx(E.Fragment, {
    children: /* @__PURE__ */ E.cloneElement(te, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: p,
      inputProps: {
        children: a,
        error: M.error,
        IconComponent: d,
        variant: j,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C,
        ...T ? {
          id: f
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: b,
          MenuProps: m,
          onClose: v,
          onOpen: w,
          open: x,
          renderValue: R,
          SelectDisplayProps: {
            id: f,
            ...O
          }
        },
        ...h,
        classes: h ? $t(ee, h.classes) : ee,
        ...g ? g.props.inputProps : {}
      },
      ...(C && T || u) && j === "outlined" ? {
        notched: !0
      } : {},
      ref: re,
      className: Ce(te.props.className, l, N.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!g && {
        variant: j
      },
      ...$
    })
  });
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
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
ws.muiName = "Select";
function a0(e) {
  return Xe("MuiTextField", e);
}
Ze("MuiTextField", ["root"]);
const s0 = {
  standard: po,
  filled: ho,
  outlined: go
}, l0 = (e) => {
  const {
    classes: t
  } = e;
  return nt({
    root: ["root"]
  }, a0, t);
}, c0 = be(Qu, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), yd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: a = !1,
    children: s,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: g,
    fullWidth: h = !1,
    helperText: y,
    id: b,
    InputLabelProps: m,
    inputProps: C,
    InputProps: T,
    inputRef: v,
    label: w,
    maxRows: x,
    minRows: R,
    multiline: O = !1,
    name: I,
    onBlur: $,
    onChange: p,
    onFocus: P,
    placeholder: M,
    required: j = !1,
    rows: U,
    select: N = !1,
    SelectProps: B,
    slots: ee = {},
    slotProps: te = {},
    type: re,
    value: H,
    variant: X = "outlined",
    ...ue
  } = r, ne = {
    ...r,
    autoFocus: a,
    color: c,
    disabled: d,
    error: f,
    fullWidth: h,
    multiline: O,
    required: j,
    select: N,
    variant: X
  }, F = l0(ne);
  process.env.NODE_ENV !== "production" && N && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const z = us(b), G = y && z ? `${z}-helper-text` : void 0, L = w && z ? `${z}-label` : void 0, V = s0[X], Z = {
    slots: ee,
    slotProps: {
      input: T,
      inputLabel: m,
      htmlInput: C,
      formHelperText: g,
      select: B,
      ...te
    }
  }, K = {}, ce = Z.slotProps.inputLabel;
  X === "outlined" && (ce && typeof ce.shrink < "u" && (K.notched = ce.shrink), K.label = w), N && ((!B || !B.native) && (K.id = void 0), K["aria-describedby"] = void 0);
  const [W, ye] = Lt("input", {
    elementType: V,
    externalForwardedProps: Z,
    additionalProps: K,
    ownerState: ne
  }), [D, de] = Lt("inputLabel", {
    elementType: Zu,
    externalForwardedProps: Z,
    ownerState: ne
  }), [ie, $e] = Lt("htmlInput", {
    elementType: "input",
    externalForwardedProps: Z,
    ownerState: ne
  }), [ge, Ee] = Lt("formHelperText", {
    elementType: Ju,
    externalForwardedProps: Z,
    ownerState: ne
  }), [Ae, Te] = Lt("select", {
    elementType: ws,
    externalForwardedProps: Z,
    ownerState: ne
  }), Le = /* @__PURE__ */ k.jsx(W, {
    "aria-describedby": G,
    autoComplete: i,
    autoFocus: a,
    defaultValue: u,
    fullWidth: h,
    multiline: O,
    name: I,
    rows: U,
    maxRows: x,
    minRows: R,
    type: re,
    value: H,
    id: z,
    inputRef: v,
    onBlur: $,
    onChange: p,
    onFocus: P,
    placeholder: M,
    inputProps: $e,
    slots: {
      input: ee.htmlInput ? ie : void 0
    },
    ...ye
  });
  return /* @__PURE__ */ k.jsxs(c0, {
    className: Ce(F.root, l),
    disabled: d,
    error: f,
    fullWidth: h,
    ref: n,
    required: j,
    color: c,
    variant: X,
    ownerState: ne,
    ...ue,
    children: [w != null && w !== "" && /* @__PURE__ */ k.jsx(D, {
      htmlFor: z,
      id: L,
      ...de,
      children: w
    }), N ? /* @__PURE__ */ k.jsx(Ae, {
      "aria-describedby": G,
      id: z,
      labelId: L,
      value: H,
      input: Le,
      ...Te,
      children: s
    }) : Le, y && /* @__PURE__ */ k.jsx(ge, {
      id: G,
      ...Ee,
      children: y
    })]
  });
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
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
  inputRef: en,
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
const vd = Kn(yd)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${St.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
  }

  & label,
  & label.Mui-focused {
    color: ${St.gray800};
  }

  & .MuiOutlinedInput-root {
    &:hover fieldset,
    fieldset,
    &.Mui-focused fieldset {
      border-color: ${St.gray400};
    }
  }
}
`, Cs = Bt.createContext({
  filters: {},
  setFilters: () => {
  }
}), u0 = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, i] = Bt.useState({});
  return /* @__PURE__ */ k.jsx(
    Cs.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? i
      },
      children: e
    }
  );
};
function Ql(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function d0(e = {}) {
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
    getOptionLabel: u
  }) => {
    let d = s ? c.trim() : c;
    n && (d = d.toLowerCase()), t && (d = Ql(d));
    const f = d ? l.filter((g) => {
      let h = (a || u)(g);
      return n && (h = h.toLowerCase()), t && (h = Ql(h)), i === "start" ? h.startsWith(d) : h.includes(d);
    }) : l;
    return typeof r == "number" ? f.slice(0, r) : f;
  };
}
const f0 = d0(), Jl = 5, p0 = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
}, m0 = [];
function h0(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = p0,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? m0 : null,
    disableClearable: f = !1,
    disableCloseOnSelect: g = !1,
    disabled: h,
    disabledItemsFocusable: y = !1,
    disableListWrap: b = !1,
    filterOptions: m = f0,
    filterSelectedOptions: C = !1,
    freeSolo: T = !1,
    getOptionDisabled: v,
    getOptionKey: w,
    getOptionLabel: x = (A) => A.label ?? A,
    groupBy: R,
    handleHomeEndKeys: O = !e.freeSolo,
    id: I,
    includeInputInList: $ = !1,
    inputValue: p,
    isOptionEqualToValue: P = (A, _) => A === _,
    multiple: M = !1,
    onChange: j,
    onClose: U,
    onHighlightChange: N,
    onInputChange: B,
    onOpen: ee,
    open: te,
    openOnFocus: re = !1,
    options: H,
    readOnly: X = !1,
    selectOnFocus: ue = !e.freeSolo,
    value: ne
  } = e, F = us(I);
  let z = x;
  z = (A) => {
    const _ = x(A);
    if (typeof _ != "string") {
      if (process.env.NODE_ENV !== "production") {
        const Q = _ === void 0 ? "undefined" : `${typeof _} (${_})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${Q} instead of a string for ${JSON.stringify(A)}.`);
      }
      return String(_);
    }
    return _;
  };
  const G = E.useRef(!1), L = E.useRef(!0), V = E.useRef(null), Z = E.useRef(null), [K, ce] = E.useState(null), [W, ye] = E.useState(-1), D = i ? 0 : -1, de = E.useRef(D), [ie, $e] = Tr({
    controlled: ne,
    default: d,
    name: u
  }), [ge, Ee] = Tr({
    controlled: p,
    default: "",
    name: u,
    state: "inputValue"
  }), [Ae, Te] = E.useState(!1), Le = E.useCallback((A, _, Q) => {
    if (!(M ? ie.length < _.length : _ !== null) && !l)
      return;
    let se;
    if (M)
      se = "";
    else if (_ == null)
      se = "";
    else {
      const Oe = z(_);
      se = typeof Oe == "string" ? Oe : "";
    }
    ge !== se && (Ee(se), B && B(A, se, Q));
  }, [z, ge, M, B, Ee, l, ie]), [fe, je] = Tr({
    controlled: te,
    default: !1,
    name: u,
    state: "open"
  }), [gt, vt] = E.useState(!0), qe = !M && ie != null && ge === z(ie), Ge = fe && !X, Re = Ge ? m(
    H.filter((A) => !(C && (M ? ie : [ie]).some((_) => _ !== null && P(A, _)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: qe && gt ? "" : ge,
      getOptionLabel: z
    }
  ) : [], it = yb({
    filteredOptions: Re,
    value: ie,
    inputValue: ge
  });
  E.useEffect(() => {
    const A = ie !== it.value;
    Ae && !A || T && !A || Le(null, ie, "reset");
  }, [ie, Le, Ae, it.value, T]);
  const Pe = fe && Re.length > 0 && !X, dt = kn((A) => {
    A === -1 ? V.current.focus() : K.querySelector(`[data-tag-index="${A}"]`).focus();
  });
  E.useEffect(() => {
    M && W > ie.length - 1 && (ye(-1), dt(-1));
  }, [ie, M, W, dt]);
  function Mt(A, _) {
    if (!Z.current || A < 0 || A >= Re.length)
      return -1;
    let Q = A;
    for (; ; ) {
      const le = Z.current.querySelector(`[data-option-index="${Q}"]`), se = y ? !1 : !le || le.disabled || le.getAttribute("aria-disabled") === "true";
      if (le && le.hasAttribute("tabindex") && !se)
        return Q;
      if (_ === "next" ? Q = (Q + 1) % Re.length : Q = (Q - 1 + Re.length) % Re.length, Q === A)
        return -1;
    }
  }
  const Ot = kn(({
    event: A,
    index: _,
    reason: Q = "auto"
  }) => {
    if (de.current = _, _ === -1 ? V.current.removeAttribute("aria-activedescendant") : V.current.setAttribute("aria-activedescendant", `${F}-option-${_}`), N && N(A, _ === -1 ? null : Re[_], Q), !Z.current)
      return;
    const le = Z.current.querySelector(`[role="option"].${n}-focused`);
    le && (le.classList.remove(`${n}-focused`), le.classList.remove(`${n}-focusVisible`));
    let se = Z.current;
    if (Z.current.getAttribute("role") !== "listbox" && (se = Z.current.parentElement.querySelector('[role="listbox"]')), !se)
      return;
    if (_ === -1) {
      se.scrollTop = 0;
      return;
    }
    const Oe = Z.current.querySelector(`[data-option-index="${_}"]`);
    if (Oe && (Oe.classList.add(`${n}-focused`), Q === "keyboard" && Oe.classList.add(`${n}-focusVisible`), se.scrollHeight > se.clientHeight && Q !== "mouse" && Q !== "touch")) {
      const we = Oe, Ie = se.clientHeight + se.scrollTop, bt = we.offsetTop + we.offsetHeight;
      bt > Ie ? se.scrollTop = bt - se.clientHeight : we.offsetTop - we.offsetHeight * (R ? 1.3 : 0) < se.scrollTop && (se.scrollTop = we.offsetTop - we.offsetHeight * (R ? 1.3 : 0));
    }
  }), pe = kn(({
    event: A,
    diff: _,
    direction: Q = "next",
    reason: le = "auto"
  }) => {
    if (!Ge)
      return;
    const Oe = Mt((() => {
      const we = Re.length - 1;
      if (_ === "reset")
        return D;
      if (_ === "start")
        return 0;
      if (_ === "end")
        return we;
      const Ie = de.current + _;
      return Ie < 0 ? Ie === -1 && $ ? -1 : b && de.current !== -1 || Math.abs(_) > 1 ? 0 : we : Ie > we ? Ie === we + 1 && $ ? -1 : b || Math.abs(_) > 1 ? we : 0 : Ie;
    })(), Q);
    if (Ot({
      index: Oe,
      reason: le,
      event: A
    }), r && _ !== "reset")
      if (Oe === -1)
        V.current.value = ge;
      else {
        const we = z(Re[Oe]);
        V.current.value = we, we.toLowerCase().indexOf(ge.toLowerCase()) === 0 && ge.length > 0 && V.current.setSelectionRange(ge.length, we.length);
      }
  }), ve = () => {
    const A = (_, Q) => {
      const le = _ ? z(_) : "", se = Q ? z(Q) : "";
      return le === se;
    };
    if (de.current !== -1 && it.filteredOptions && it.filteredOptions.length !== Re.length && it.inputValue === ge && (M ? ie.length === it.value.length && it.value.every((_, Q) => z(ie[Q]) === z(_)) : A(it.value, ie))) {
      const _ = it.filteredOptions[de.current];
      if (_)
        return Re.findIndex((Q) => z(Q) === z(_));
    }
    return -1;
  }, Ke = E.useCallback(() => {
    if (!Ge)
      return;
    const A = ve();
    if (A !== -1) {
      de.current = A;
      return;
    }
    const _ = M ? ie[0] : ie;
    if (Re.length === 0 || _ == null) {
      pe({
        diff: "reset"
      });
      return;
    }
    if (Z.current) {
      if (_ != null) {
        const Q = Re[de.current];
        if (M && Q && ie.findIndex((se) => P(Q, se)) !== -1)
          return;
        const le = Re.findIndex((se) => P(se, _));
        le === -1 ? pe({
          diff: "reset"
        }) : Ot({
          index: le
        });
        return;
      }
      if (de.current >= Re.length - 1) {
        Ot({
          index: Re.length - 1
        });
        return;
      }
      Ot({
        index: de.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Re.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    M ? !1 : ie,
    C,
    pe,
    Ot,
    Ge,
    ge,
    M
  ]), rt = kn((A) => {
    ai(Z, A), A && Ke();
  });
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    (!V.current || V.current.nodeName !== "INPUT") && (V.current && V.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${V.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), E.useEffect(() => {
    Ke();
  }, [Ke]);
  const at = (A) => {
    fe || (je(!0), vt(!0), ee && ee(A));
  }, At = (A, _) => {
    fe && (je(!1), U && U(A, _));
  }, Tt = (A, _, Q, le) => {
    if (M) {
      if (ie.length === _.length && ie.every((se, Oe) => se === _[Oe]))
        return;
    } else if (ie === _)
      return;
    j && j(A, _, Q, le), $e(_);
  }, tn = E.useRef(!1), Ht = (A, _, Q = "selectOption", le = "options") => {
    let se = Q, Oe = _;
    if (M) {
      if (Oe = Array.isArray(ie) ? ie.slice() : [], process.env.NODE_ENV !== "production") {
        const Ie = Oe.filter((bt) => P(_, bt));
        Ie.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ie.length} matches.`].join(`
`));
      }
      const we = Oe.findIndex((Ie) => P(_, Ie));
      we === -1 ? Oe.push(_) : le !== "freeSolo" && (Oe.splice(we, 1), se = "removeOption");
    }
    Le(A, Oe, se), Tt(A, Oe, se, {
      option: _
    }), !g && (!A || !A.ctrlKey && !A.metaKey) && At(A, se), (s === !0 || s === "touch" && tn.current || s === "mouse" && !tn.current) && V.current.blur();
  };
  function gn(A, _) {
    if (A === -1)
      return -1;
    let Q = A;
    for (; ; ) {
      if (_ === "next" && Q === ie.length || _ === "previous" && Q === -1)
        return -1;
      const le = K.querySelector(`[data-tag-index="${Q}"]`);
      if (!le || !le.hasAttribute("tabindex") || le.disabled || le.getAttribute("aria-disabled") === "true")
        Q += _ === "next" ? 1 : -1;
      else
        return Q;
    }
  }
  const Ut = (A, _) => {
    if (!M)
      return;
    ge === "" && At(A, "toggleInput");
    let Q = W;
    W === -1 ? ge === "" && _ === "previous" && (Q = ie.length - 1) : (Q += _ === "next" ? 1 : -1, Q < 0 && (Q = 0), Q === ie.length && (Q = -1)), Q = gn(Q, _), ye(Q), dt(Q);
  }, jt = (A) => {
    G.current = !0, Ee(""), B && B(A, "", "clear"), Tt(A, M ? [] : null, "clear");
  }, bn = (A) => (_) => {
    if (A.onKeyDown && A.onKeyDown(_), !_.defaultMuiPrevented && (W !== -1 && !["ArrowLeft", "ArrowRight"].includes(_.key) && (ye(-1), dt(-1)), _.which !== 229))
      switch (_.key) {
        case "Home":
          Ge && O && (_.preventDefault(), pe({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: _
          }));
          break;
        case "End":
          Ge && O && (_.preventDefault(), pe({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: _
          }));
          break;
        case "PageUp":
          _.preventDefault(), pe({
            diff: -Jl,
            direction: "previous",
            reason: "keyboard",
            event: _
          }), at(_);
          break;
        case "PageDown":
          _.preventDefault(), pe({
            diff: Jl,
            direction: "next",
            reason: "keyboard",
            event: _
          }), at(_);
          break;
        case "ArrowDown":
          _.preventDefault(), pe({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: _
          }), at(_);
          break;
        case "ArrowUp":
          _.preventDefault(), pe({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: _
          }), at(_);
          break;
        case "ArrowLeft":
          Ut(_, "previous");
          break;
        case "ArrowRight":
          Ut(_, "next");
          break;
        case "Enter":
          if (de.current !== -1 && Ge) {
            const Q = Re[de.current], le = v ? v(Q) : !1;
            if (_.preventDefault(), le)
              return;
            Ht(_, Q, "selectOption"), r && V.current.setSelectionRange(V.current.value.length, V.current.value.length);
          } else T && ge !== "" && qe === !1 && (M && _.preventDefault(), Ht(_, ge, "createOption", "freeSolo"));
          break;
        case "Escape":
          Ge ? (_.preventDefault(), _.stopPropagation(), At(_, "escape")) : c && (ge !== "" || M && ie.length > 0) && (_.preventDefault(), _.stopPropagation(), jt(_));
          break;
        case "Backspace":
          if (M && !X && ge === "" && ie.length > 0) {
            const Q = W === -1 ? ie.length - 1 : W, le = ie.slice();
            le.splice(Q, 1), Tt(_, le, "removeOption", {
              option: ie[Q]
            });
          }
          break;
        case "Delete":
          if (M && !X && ge === "" && ie.length > 0 && W !== -1) {
            const Q = W, le = ie.slice();
            le.splice(Q, 1), Tt(_, le, "removeOption", {
              option: ie[Q]
            });
          }
          break;
      }
  }, Yt = (A) => {
    Te(!0), re && !G.current && at(A);
  }, yn = (A) => {
    if (t(Z)) {
      V.current.focus();
      return;
    }
    Te(!1), L.current = !0, G.current = !1, a && de.current !== -1 && Ge ? Ht(A, Re[de.current], "blur") : a && T && ge !== "" ? Ht(A, ge, "blur", "freeSolo") : l && Le(A, ie, "blur"), At(A, "blur");
  }, ft = (A) => {
    const _ = A.target.value;
    ge !== _ && (Ee(_), vt(!1), B && B(A, _, "input")), _ === "" ? !f && !M && Tt(A, null, "clear") : at(A);
  }, nn = (A) => {
    const _ = Number(A.currentTarget.getAttribute("data-option-index"));
    de.current !== _ && Ot({
      event: A,
      index: _,
      reason: "mouse"
    });
  }, Pt = (A) => {
    Ot({
      event: A,
      index: Number(A.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), tn.current = !0;
  }, me = (A) => {
    const _ = Number(A.currentTarget.getAttribute("data-option-index"));
    Ht(A, Re[_], "selectOption"), tn.current = !1;
  }, rn = (A) => (_) => {
    const Q = ie.slice();
    Q.splice(A, 1), Tt(_, Q, "removeOption", {
      option: ie[A]
    });
  }, xn = (A) => {
    fe ? At(A, "toggleInput") : at(A);
  }, tr = (A) => {
    A.currentTarget.contains(A.target) && A.target.getAttribute("id") !== F && A.preventDefault();
  }, wn = (A) => {
    A.currentTarget.contains(A.target) && (V.current.focus(), ue && L.current && V.current.selectionEnd - V.current.selectionStart === 0 && V.current.select(), L.current = !1);
  }, S = (A) => {
    !h && (ge === "" || !fe) && xn(A);
  };
  let q = T && ge.length > 0;
  q = q || (M ? ie.length > 0 : ie !== null);
  let ae = Re;
  if (R) {
    const A = /* @__PURE__ */ new Map();
    let _ = !1;
    ae = Re.reduce((Q, le, se) => {
      const Oe = R(le);
      return Q.length > 0 && Q[Q.length - 1].group === Oe ? Q[Q.length - 1].options.push(le) : (process.env.NODE_ENV !== "production" && (A.get(Oe) && !_ && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), _ = !0), A.set(Oe, !0)), Q.push({
        key: se,
        index: se,
        group: Oe,
        options: [le]
      })), Q;
    }, []);
  }
  return h && Ae && yn(), {
    getRootProps: (A = {}) => ({
      "aria-owns": Pe ? `${F}-listbox` : null,
      ...A,
      onKeyDown: bn(A),
      onMouseDown: tr,
      onClick: wn
    }),
    getInputLabelProps: () => ({
      id: `${F}-label`,
      htmlFor: F
    }),
    getInputProps: () => ({
      id: F,
      value: ge,
      onBlur: yn,
      onFocus: Yt,
      onChange: ft,
      onMouseDown: S,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Ge ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": Pe ? `${F}-listbox` : void 0,
      "aria-expanded": Pe,
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
      onClick: jt
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: xn
    }),
    getTagProps: ({
      index: A
    }) => ({
      key: A,
      "data-tag-index": A,
      tabIndex: -1,
      ...!X && {
        onDelete: rn(A)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${F}-listbox`,
      "aria-labelledby": `${F}-label`,
      ref: rt,
      onMouseDown: (A) => {
        A.preventDefault();
      }
    }),
    getOptionProps: ({
      index: A,
      option: _
    }) => {
      const Q = (M ? ie : [ie]).some((se) => se != null && P(_, se)), le = v ? v(_) : !1;
      return {
        key: (w == null ? void 0 : w(_)) ?? z(_),
        tabIndex: -1,
        role: "option",
        id: `${F}-option-${A}`,
        onMouseMove: nn,
        onClick: me,
        onTouchStart: Pt,
        "data-option-index": A,
        "aria-disabled": le,
        "aria-selected": Q
      };
    },
    id: F,
    inputValue: ge,
    value: ie,
    dirty: q,
    expanded: Ge && K,
    popupOpen: Ge,
    focused: Ae || W !== -1,
    anchorEl: K,
    setAnchorEl: ce,
    focusedTag: W,
    groupedOptions: ae
  };
}
var zt = "top", fn = "bottom", pn = "right", Wt = "left", Ss = "auto", $o = [zt, fn, pn, Wt], kr = "start", yo = "end", g0 = "clippingParents", xd = "viewport", Yr = "popper", b0 = "reference", ec = /* @__PURE__ */ $o.reduce(function(e, t) {
  return e.concat([t + "-" + kr, t + "-" + yo]);
}, []), wd = /* @__PURE__ */ [].concat($o, [Ss]).reduce(function(e, t) {
  return e.concat([t, t + "-" + kr, t + "-" + yo]);
}, []), y0 = "beforeRead", v0 = "read", x0 = "afterRead", w0 = "beforeMain", C0 = "main", S0 = "afterMain", E0 = "beforeWrite", T0 = "write", O0 = "afterWrite", R0 = [y0, v0, x0, w0, C0, S0, E0, T0, O0];
function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function cr(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function dn(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Es(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function P0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !dn(a) || !Nn(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function k0(e) {
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
      var i = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !dn(i) || !Nn(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const I0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: P0,
  effect: k0,
  requires: ["computeStyles"]
};
function $n(e) {
  return e.split("-")[0];
}
var sr = Math.max, fi = Math.min, Ir = Math.round;
function Wa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Cd() {
  return !/^((?!chrome|android).)*safari/i.test(Wa());
}
function $r(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && dn(e) && (i = e.offsetWidth > 0 && Ir(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ir(r.height) / e.offsetHeight || 1);
  var s = cr(e) ? Jt(e) : window, l = s.visualViewport, c = !Cd() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, d = (r.top + (c && l ? l.offsetTop : 0)) / a, f = r.width / i, g = r.height / a;
  return {
    width: f,
    height: g,
    top: d,
    right: u + f,
    bottom: d + g,
    left: u,
    x: u,
    y: d
  };
}
function Ts(e) {
  var t = $r(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Sd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Es(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Vn(e) {
  return Jt(e).getComputedStyle(e);
}
function $0(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0;
}
function er(e) {
  return ((cr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ui(e) {
  return Nn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Es(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    er(e)
  );
}
function tc(e) {
  return !dn(e) || // https://github.com/popperjs/popper-core/issues/837
  Vn(e).position === "fixed" ? null : e.offsetParent;
}
function M0(e) {
  var t = /firefox/i.test(Wa()), n = /Trident/i.test(Wa());
  if (n && dn(e)) {
    var r = Vn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Ui(e);
  for (Es(i) && (i = i.host); dn(i) && ["html", "body"].indexOf(Nn(i)) < 0; ) {
    var a = Vn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Mo(e) {
  for (var t = Jt(e), n = tc(e); n && $0(n) && Vn(n).position === "static"; )
    n = tc(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && Vn(n).position === "static") ? t : n || M0(e) || t;
}
function Os(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function oo(e, t, n) {
  return sr(e, fi(t, n));
}
function N0(e, t, n) {
  var r = oo(e, t, n);
  return r > n ? n : r;
}
function Ed() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Td(e) {
  return Object.assign({}, Ed(), e);
}
function Od(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var D0 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Td(typeof t != "number" ? t : Od(t, $o));
};
function A0(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = $n(n.placement), c = Os(l), u = [Wt, pn].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var f = D0(i.padding, n), g = Ts(a), h = c === "y" ? zt : Wt, y = c === "y" ? fn : pn, b = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], m = s[c] - n.rects.reference[c], C = Mo(a), T = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, v = b / 2 - m / 2, w = f[h], x = T - g[d] - f[y], R = T / 2 - g[d] / 2 + v, O = oo(w, R, x), I = c;
    n.modifiersData[r] = (t = {}, t[I] = O, t.centerOffset = O - R, t);
  }
}
function j0(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Sd(t.elements.popper, i) && (t.elements.arrow = i));
}
const F0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: A0,
  effect: j0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Mr(e) {
  return e.split("-")[1];
}
var _0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function L0(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Ir(n * i) / i || 0,
    y: Ir(r * i) / i || 0
  };
}
function nc(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, g = s.x, h = g === void 0 ? 0 : g, y = s.y, b = y === void 0 ? 0 : y, m = typeof d == "function" ? d({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = m.x, b = m.y;
  var C = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), v = Wt, w = zt, x = window;
  if (u) {
    var R = Mo(n), O = "clientHeight", I = "clientWidth";
    if (R === Jt(n) && (R = er(n), Vn(R).position !== "static" && l === "absolute" && (O = "scrollHeight", I = "scrollWidth")), R = R, i === zt || (i === Wt || i === pn) && a === yo) {
      w = fn;
      var $ = f && R === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[O]
      );
      b -= $ - r.height, b *= c ? 1 : -1;
    }
    if (i === Wt || (i === zt || i === fn) && a === yo) {
      v = pn;
      var p = f && R === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[I]
      );
      h -= p - r.width, h *= c ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, u && _0), M = d === !0 ? L0({
    x: h,
    y: b
  }, Jt(n)) : {
    x: h,
    y: b
  };
  if (h = M.x, b = M.y, c) {
    var j;
    return Object.assign({}, P, (j = {}, j[w] = T ? "0" : "", j[v] = C ? "0" : "", j.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", j));
  }
  return Object.assign({}, P, (t = {}, t[w] = T ? b + "px" : "", t[v] = C ? h + "px" : "", t.transform = "", t));
}
function B0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: $n(t.placement),
    variation: Mr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, nc(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, nc(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const z0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: B0,
  data: {}
};
var Ho = {
  passive: !0
};
function W0(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = Jt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Ho);
  }), l && c.addEventListener("resize", n.update, Ho), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Ho);
    }), l && c.removeEventListener("resize", n.update, Ho);
  };
}
const V0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: W0,
  data: {}
};
var H0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return H0[t];
  });
}
var U0 = {
  start: "end",
  end: "start"
};
function rc(e) {
  return e.replace(/start|end/g, function(t) {
    return U0[t];
  });
}
function Rs(e) {
  var t = Jt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ps(e) {
  return $r(er(e)).left + Rs(e).scrollLeft;
}
function Y0(e, t) {
  var n = Jt(e), r = er(e), i = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = Cd();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + Ps(e),
    y: c
  };
}
function q0(e) {
  var t, n = er(e), r = Rs(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = sr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = sr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Ps(e), c = -r.scrollTop;
  return Vn(i || n).direction === "rtl" && (l += sr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function ks(e) {
  var t = Vn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Rd(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : dn(e) && ks(e) ? e : Rd(Ui(e));
}
function io(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Rd(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Jt(r), s = i ? [a].concat(a.visualViewport || [], ks(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(io(Ui(s)))
  );
}
function Va(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function G0(e, t) {
  var n = $r(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function oc(e, t, n) {
  return t === xd ? Va(Y0(e, n)) : cr(t) ? G0(t, n) : Va(q0(er(e)));
}
function K0(e) {
  var t = io(Ui(e)), n = ["absolute", "fixed"].indexOf(Vn(e).position) >= 0, r = n && dn(e) ? Mo(e) : e;
  return cr(r) ? t.filter(function(i) {
    return cr(i) && Sd(i, r) && Nn(i) !== "body";
  }) : [];
}
function X0(e, t, n, r) {
  var i = t === "clippingParents" ? K0(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, u) {
    var d = oc(e, u, r);
    return c.top = sr(d.top, c.top), c.right = fi(d.right, c.right), c.bottom = fi(d.bottom, c.bottom), c.left = sr(d.left, c.left), c;
  }, oc(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Pd(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? $n(r) : null, a = r ? Mr(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case zt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case fn:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case pn:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Wt:
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
  var u = i ? Os(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case kr:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case yo:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function vo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? g0 : l, u = n.rootBoundary, d = u === void 0 ? xd : u, f = n.elementContext, g = f === void 0 ? Yr : f, h = n.altBoundary, y = h === void 0 ? !1 : h, b = n.padding, m = b === void 0 ? 0 : b, C = Td(typeof m != "number" ? m : Od(m, $o)), T = g === Yr ? b0 : Yr, v = e.rects.popper, w = e.elements[y ? T : g], x = X0(cr(w) ? w : w.contextElement || er(e.elements.popper), c, d, s), R = $r(e.elements.reference), O = Pd({
    reference: R,
    element: v,
    strategy: "absolute",
    placement: i
  }), I = Va(Object.assign({}, v, O)), $ = g === Yr ? I : R, p = {
    top: x.top - $.top + C.top,
    bottom: $.bottom - x.bottom + C.bottom,
    left: x.left - $.left + C.left,
    right: $.right - x.right + C.right
  }, P = e.modifiersData.offset;
  if (g === Yr && P) {
    var M = P[i];
    Object.keys(p).forEach(function(j) {
      var U = [pn, fn].indexOf(j) >= 0 ? 1 : -1, N = [zt, fn].indexOf(j) >= 0 ? "y" : "x";
      p[j] += M[N] * U;
    });
  }
  return p;
}
function Z0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? wd : c, d = Mr(r), f = d ? l ? ec : ec.filter(function(y) {
    return Mr(y) === d;
  }) : $o, g = f.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  g.length === 0 && (g = f);
  var h = g.reduce(function(y, b) {
    return y[b] = vo(e, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[$n(b)], y;
  }, {});
  return Object.keys(h).sort(function(y, b) {
    return h[y] - h[b];
  });
}
function Q0(e) {
  if ($n(e) === Ss)
    return [];
  var t = Jo(e);
  return [rc(e), t, rc(t)];
}
function J0(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, g = n.altBoundary, h = n.flipVariations, y = h === void 0 ? !0 : h, b = n.allowedAutoPlacements, m = t.options.placement, C = $n(m), T = C === m, v = c || (T || !y ? [Jo(m)] : Q0(m)), w = [m].concat(v).reduce(function(F, z) {
      return F.concat($n(z) === Ss ? Z0(t, {
        placement: z,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : z);
    }, []), x = t.rects.reference, R = t.rects.popper, O = /* @__PURE__ */ new Map(), I = !0, $ = w[0], p = 0; p < w.length; p++) {
      var P = w[p], M = $n(P), j = Mr(P) === kr, U = [zt, fn].indexOf(M) >= 0, N = U ? "width" : "height", B = vo(t, {
        placement: P,
        boundary: d,
        rootBoundary: f,
        altBoundary: g,
        padding: u
      }), ee = U ? j ? pn : Wt : j ? fn : zt;
      x[N] > R[N] && (ee = Jo(ee));
      var te = Jo(ee), re = [];
      if (a && re.push(B[M] <= 0), l && re.push(B[ee] <= 0, B[te] <= 0), re.every(function(F) {
        return F;
      })) {
        $ = P, I = !1;
        break;
      }
      O.set(P, re);
    }
    if (I)
      for (var H = y ? 3 : 1, X = function(z) {
        var G = w.find(function(L) {
          var V = O.get(L);
          if (V)
            return V.slice(0, z).every(function(Z) {
              return Z;
            });
        });
        if (G)
          return $ = G, "break";
      }, ue = H; ue > 0; ue--) {
        var ne = X(ue);
        if (ne === "break") break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const ex = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: J0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ic(e, t, n) {
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
function ac(e) {
  return [zt, pn, fn, Wt].some(function(t) {
    return e[t] >= 0;
  });
}
function tx(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = vo(t, {
    elementContext: "reference"
  }), l = vo(t, {
    altBoundary: !0
  }), c = ic(s, r), u = ic(l, i, a), d = ac(c), f = ac(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const nx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: tx
};
function rx(e, t, n) {
  var r = $n(e), i = [Wt, zt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [Wt, pn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function ox(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = wd.reduce(function(d, f) {
    return d[f] = rx(f, t.rects, a), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const ix = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ox
};
function ax(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Pd({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const sx = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ax,
  data: {}
};
function lx(e) {
  return e === "x" ? "y" : "x";
}
function cx(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, g = n.tether, h = g === void 0 ? !0 : g, y = n.tetherOffset, b = y === void 0 ? 0 : y, m = vo(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), C = $n(t.placement), T = Mr(t.placement), v = !T, w = Os(C), x = lx(w), R = t.modifiersData.popperOffsets, O = t.rects.reference, I = t.rects.popper, $ = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, p = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (R) {
    if (a) {
      var j, U = w === "y" ? zt : Wt, N = w === "y" ? fn : pn, B = w === "y" ? "height" : "width", ee = R[w], te = ee + m[U], re = ee - m[N], H = h ? -I[B] / 2 : 0, X = T === kr ? O[B] : I[B], ue = T === kr ? -I[B] : -O[B], ne = t.elements.arrow, F = h && ne ? Ts(ne) : {
        width: 0,
        height: 0
      }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ed(), G = z[U], L = z[N], V = oo(0, O[B], F[B]), Z = v ? O[B] / 2 - H - V - G - p.mainAxis : X - V - G - p.mainAxis, K = v ? -O[B] / 2 + H + V + L + p.mainAxis : ue + V + L + p.mainAxis, ce = t.elements.arrow && Mo(t.elements.arrow), W = ce ? w === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, ye = (j = P == null ? void 0 : P[w]) != null ? j : 0, D = ee + Z - ye - W, de = ee + K - ye, ie = oo(h ? fi(te, D) : te, ee, h ? sr(re, de) : re);
      R[w] = ie, M[w] = ie - ee;
    }
    if (l) {
      var $e, ge = w === "x" ? zt : Wt, Ee = w === "x" ? fn : pn, Ae = R[x], Te = x === "y" ? "height" : "width", Le = Ae + m[ge], fe = Ae - m[Ee], je = [zt, Wt].indexOf(C) !== -1, gt = ($e = P == null ? void 0 : P[x]) != null ? $e : 0, vt = je ? Le : Ae - O[Te] - I[Te] - gt + p.altAxis, qe = je ? Ae + O[Te] + I[Te] - gt - p.altAxis : fe, Ge = h && je ? N0(vt, Ae, qe) : oo(h ? vt : Le, Ae, h ? qe : fe);
      R[x] = Ge, M[x] = Ge - Ae;
    }
    t.modifiersData[r] = M;
  }
}
const ux = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: cx,
  requiresIfExists: ["offset"]
};
function dx(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function fx(e) {
  return e === Jt(e) || !dn(e) ? Rs(e) : dx(e);
}
function px(e) {
  var t = e.getBoundingClientRect(), n = Ir(t.width) / e.offsetWidth || 1, r = Ir(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function mx(e, t, n) {
  n === void 0 && (n = !1);
  var r = dn(t), i = dn(t) && px(t), a = er(t), s = $r(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Nn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ks(a)) && (l = fx(t)), dn(t) ? (c = $r(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Ps(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function hx(e) {
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
function gx(e) {
  var t = hx(e);
  return R0.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function bx(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function yx(e) {
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
var sc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function lc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function vx(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? sc : i;
  return function(l, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, sc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], g = !1, h = {
      state: d,
      setOptions: function(C) {
        var T = typeof C == "function" ? C(d.options) : C;
        b(), d.options = Object.assign({}, a, d.options, T), d.scrollParents = {
          reference: cr(l) ? io(l) : l.contextElement ? io(l.contextElement) : [],
          popper: io(c)
        };
        var v = gx(yx([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = v.filter(function(w) {
          return w.enabled;
        }), y(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var C = d.elements, T = C.reference, v = C.popper;
          if (lc(T, v)) {
            d.rects = {
              reference: mx(T, Mo(v), d.options.strategy === "fixed"),
              popper: Ts(v)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
              return d.modifiersData[p.name] = Object.assign({}, p.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var x = d.orderedModifiers[w], R = x.fn, O = x.options, I = O === void 0 ? {} : O, $ = x.name;
              typeof R == "function" && (d = R({
                state: d,
                options: I,
                name: $,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: bx(function() {
        return new Promise(function(m) {
          h.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        b(), g = !0;
      }
    };
    if (!lc(l, c))
      return h;
    h.setOptions(u).then(function(m) {
      !g && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function y() {
      d.orderedModifiers.forEach(function(m) {
        var C = m.name, T = m.options, v = T === void 0 ? {} : T, w = m.effect;
        if (typeof w == "function") {
          var x = w({
            state: d,
            name: C,
            instance: h,
            options: v
          }), R = function() {
          };
          f.push(x || R);
        }
      });
    }
    function b() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return h;
  };
}
var xx = [V0, sx, z0, I0, ix, ex, ux, F0, nx], wx = /* @__PURE__ */ vx({
  defaultModifiers: xx
});
function Cx(e) {
  return Xe("MuiPopper", e);
}
Ze("MuiPopper", ["root"]);
function Sx(e, t) {
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
function pi(e) {
  return typeof e == "function" ? e() : e;
}
function Yi(e) {
  return e.nodeType !== void 0;
}
function Ex(e) {
  return !Yi(e);
}
const Tx = (e) => {
  const {
    classes: t
  } = e;
  return nt({
    root: ["root"]
  }, Cx, t);
}, Ox = {}, Rx = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: d,
    popperRef: f,
    slotProps: g = {},
    slots: h = {},
    TransitionProps: y,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...m
  } = t, C = E.useRef(null), T = Et(C, n), v = E.useRef(null), w = Et(v, f), x = E.useRef(w);
  Ln(() => {
    x.current = w;
  }, [w]), E.useImperativeHandle(f, () => v.current, []);
  const R = Sx(u, a), [O, I] = E.useState(R), [$, p] = E.useState(pi(r));
  E.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), E.useEffect(() => {
    r && p(pi(r));
  }, [r]), Ln(() => {
    if (!$ || !c)
      return;
    const N = (te) => {
      I(te.placement);
    };
    if (process.env.NODE_ENV !== "production" && $ && Yi($) && $.nodeType === 1) {
      const te = $.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && te.top === 0 && te.left === 0 && te.right === 0 && te.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let B = [{
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
        state: te
      }) => {
        N(te);
      }
    }];
    l != null && (B = B.concat(l)), d && d.modifiers != null && (B = B.concat(d.modifiers));
    const ee = wx($, C.current, {
      placement: R,
      ...d,
      modifiers: B
    });
    return x.current(ee), () => {
      ee.destroy(), x.current(null);
    };
  }, [$, s, l, c, d, R]);
  const P = {
    placement: O
  };
  y !== null && (P.TransitionProps = y);
  const M = Tx(t), j = h.root ?? "div", U = Da({
    elementType: j,
    externalSlotProps: g.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ k.jsx(j, {
    ...U,
    children: typeof i == "function" ? i(P) : i
  });
}), kd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: g = Ox,
    popperRef: h,
    style: y,
    transition: b = !1,
    slotProps: m = {},
    slots: C = {},
    ...T
  } = t, [v, w] = E.useState(!0), x = () => {
    w(!1);
  }, R = () => {
    w(!0);
  };
  if (!c && !d && (!b || v))
    return null;
  let O;
  if (a)
    O = a;
  else if (r) {
    const p = pi(r);
    O = p && Yi(p) ? Qt(p).body : Qt(null).body;
  }
  const I = !d && c && (!b || v) ? "none" : void 0, $ = b ? {
    in: d,
    onEnter: x,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ k.jsx(bo, {
    disablePortal: l,
    container: O,
    children: /* @__PURE__ */ k.jsx(Rx, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: b ? !v : d,
      placement: f,
      popperOptions: g,
      popperRef: h,
      slotProps: m,
      slots: C,
      ...T,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: I,
        ...y
      },
      TransitionProps: $,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (kd.propTypes = {
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
  anchorEl: Bn(o.oneOfType([zn, o.object, o.func]), (e) => {
    if (e.open) {
      const t = pi(e.anchorEl);
      if (t && Yi(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Ex(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: o.oneOfType([zn, o.func]),
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
  popperRef: en,
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
const Px = be(kd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Is = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = _u(), i = ot({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: g,
    open: h,
    placement: y,
    popperOptions: b,
    popperRef: m,
    transition: C,
    slots: T,
    slotProps: v,
    ...w
  } = i, x = (T == null ? void 0 : T.root) ?? (l == null ? void 0 : l.Root), R = {
    anchorEl: a,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: g,
    open: h,
    placement: y,
    popperOptions: b,
    popperRef: m,
    transition: C,
    ...w
  };
  return /* @__PURE__ */ k.jsx(Px, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: x
    },
    slotProps: v ?? c,
    ...R,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
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
  anchorEl: o.oneOfType([zn, o.object, o.func]),
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
  container: o.oneOfType([zn, o.func]),
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
  popperRef: en,
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
function kx(e) {
  return Xe("MuiListSubheader", e);
}
Ze("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Ix = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${he(n)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return nt(s, kx, t);
}, $x = be("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${he(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(tt(({
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
}))), mi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: a = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1,
    ...d
  } = r, f = {
    ...r,
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }, g = Ix(f);
  return /* @__PURE__ */ k.jsx($x, {
    as: s,
    className: Ce(g.root, i),
    ref: n,
    ownerState: f,
    ...d
  });
});
mi && (mi.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (mi.propTypes = {
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
class hi {
  constructor() {
    Lr(this, "mountEffect", () => {
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
    return new hi();
  }
  static use() {
    const t = ku(hi.create).current, [n, r] = E.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, E.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Nx(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Mx() {
  return hi.use();
}
function Nx() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Id(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = E.useState(!1), g = Ce(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, y = Ce(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), E.useEffect(() => {
    if (!l && c != null) {
      const b = setTimeout(c, u);
      return () => {
        clearTimeout(b);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ k.jsx("span", {
    className: g,
    style: h,
    children: /* @__PURE__ */ k.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Id.propTypes = {
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
const sn = Ze("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ha = 550, Dx = 80, Ax = es`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, jx = es`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Fx = es`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, _x = be("span", {
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
}), Lx = be(Id, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${sn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ax};
    animation-duration: ${Ha}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${sn.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${sn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${sn.childLeaving} {
    opacity: 0;
    animation-name: ${jx};
    animation-duration: ${Ha}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${sn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Fx};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, $d = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = r, [c, u] = E.useState([]), d = E.useRef(0), f = E.useRef(null);
  E.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const g = E.useRef(!1), h = Iu(), y = E.useRef(null), b = E.useRef(null), m = E.useCallback((w) => {
    const {
      pulsate: x,
      rippleX: R,
      rippleY: O,
      rippleSize: I,
      cb: $
    } = w;
    u((p) => [...p, /* @__PURE__ */ k.jsx(Lx, {
      classes: {
        ripple: Ce(a.ripple, sn.ripple),
        rippleVisible: Ce(a.rippleVisible, sn.rippleVisible),
        ripplePulsate: Ce(a.ripplePulsate, sn.ripplePulsate),
        child: Ce(a.child, sn.child),
        childLeaving: Ce(a.childLeaving, sn.childLeaving),
        childPulsate: Ce(a.childPulsate, sn.childPulsate)
      },
      timeout: Ha,
      pulsate: x,
      rippleX: R,
      rippleY: O,
      rippleSize: I
    }, d.current)]), d.current += 1, f.current = $;
  }, [a]), C = E.useCallback((w = {}, x = {}, R = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: I = i || x.pulsate,
      fakeElement: $ = !1
      // For test purposes
    } = x;
    if ((w == null ? void 0 : w.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (g.current = !0);
    const p = $ ? null : b.current, P = p ? p.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let M, j, U;
    if (I || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      M = Math.round(P.width / 2), j = Math.round(P.height / 2);
    else {
      const {
        clientX: N,
        clientY: B
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      M = Math.round(N - P.left), j = Math.round(B - P.top);
    }
    if (I)
      U = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), U % 2 === 0 && (U += 1);
    else {
      const N = Math.max(Math.abs((p ? p.clientWidth : 0) - M), M) * 2 + 2, B = Math.max(Math.abs((p ? p.clientHeight : 0) - j), j) * 2 + 2;
      U = Math.sqrt(N ** 2 + B ** 2);
    }
    w != null && w.touches ? y.current === null && (y.current = () => {
      m({
        pulsate: O,
        rippleX: M,
        rippleY: j,
        rippleSize: U,
        cb: R
      });
    }, h.start(Dx, () => {
      y.current && (y.current(), y.current = null);
    })) : m({
      pulsate: O,
      rippleX: M,
      rippleY: j,
      rippleSize: U,
      cb: R
    });
  }, [i, m, h]), T = E.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), v = E.useCallback((w, x) => {
    if (h.clear(), (w == null ? void 0 : w.type) === "touchend" && y.current) {
      y.current(), y.current = null, h.start(0, () => {
        v(w, x);
      });
      return;
    }
    y.current = null, u((R) => R.length > 0 ? R.slice(1) : R), f.current = x;
  }, [h]);
  return E.useImperativeHandle(n, () => ({
    pulsate: T,
    start: C,
    stop: v
  }), [T, C, v]), /* @__PURE__ */ k.jsx(_x, {
    className: Ce(sn.root, a.root, s),
    ref: b,
    ...l,
    children: /* @__PURE__ */ k.jsx(ys, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && ($d.propTypes = {
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
function Bx(e) {
  return Xe("MuiButtonBase", e);
}
const zx = Ze("MuiButtonBase", ["root", "disabled", "focusVisible"]), Wx = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = nt({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Bx, i);
  return n && r && (s.root += ` ${r}`), s;
}, Vx = be("button", {
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
  [`&.${zx.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), xo = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: g = !1,
    focusVisibleClassName: h,
    LinkComponent: y = "a",
    onBlur: b,
    onClick: m,
    onContextMenu: C,
    onDragLeave: T,
    onFocus: v,
    onFocusVisible: w,
    onKeyDown: x,
    onKeyUp: R,
    onMouseDown: O,
    onMouseLeave: I,
    onMouseUp: $,
    onTouchEnd: p,
    onTouchMove: P,
    onTouchStart: M,
    tabIndex: j = 0,
    TouchRippleProps: U,
    touchRippleRef: N,
    type: B,
    ...ee
  } = r, te = E.useRef(null), re = Mx(), H = Et(re.ref, N), [X, ue] = E.useState(!1);
  u && X && ue(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ue(!0), te.current.focus();
    }
  }), []);
  const ne = re.shouldMount && !d && !u;
  E.useEffect(() => {
    X && g && !d && re.pulsate();
  }, [d, g, X, re]);
  function F(fe, je, gt = f) {
    return kn((vt) => (je && je(vt), gt || re[fe](vt), !0));
  }
  const z = F("start", O), G = F("stop", C), L = F("stop", T), V = F("stop", $), Z = F("stop", (fe) => {
    X && fe.preventDefault(), I && I(fe);
  }), K = F("start", M), ce = F("stop", p), W = F("stop", P), ye = F("stop", (fe) => {
    Tl(fe.target) || ue(!1), b && b(fe);
  }, !1), D = kn((fe) => {
    te.current || (te.current = fe.currentTarget), Tl(fe.target) && (ue(!0), w && w(fe)), v && v(fe);
  }), de = () => {
    const fe = te.current;
    return c && c !== "button" && !(fe.tagName === "A" && fe.href);
  }, ie = kn((fe) => {
    g && !fe.repeat && X && fe.key === " " && re.stop(fe, () => {
      re.start(fe);
    }), fe.target === fe.currentTarget && de() && fe.key === " " && fe.preventDefault(), x && x(fe), fe.target === fe.currentTarget && de() && fe.key === "Enter" && !u && (fe.preventDefault(), m && m(fe));
  }), $e = kn((fe) => {
    g && fe.key === " " && X && !fe.defaultPrevented && re.stop(fe, () => {
      re.pulsate(fe);
    }), R && R(fe), m && fe.target === fe.currentTarget && de() && fe.key === " " && !fe.defaultPrevented && m(fe);
  });
  let ge = c;
  ge === "button" && (ee.href || ee.to) && (ge = y);
  const Ee = {};
  ge === "button" ? (Ee.type = B === void 0 ? "button" : B, Ee.disabled = u) : (!ee.href && !ee.to && (Ee.role = "button"), u && (Ee["aria-disabled"] = u));
  const Ae = Et(n, te), Te = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: g,
    tabIndex: j,
    focusVisible: X
  }, Le = Wx(Te);
  return /* @__PURE__ */ k.jsxs(Vx, {
    as: ge,
    className: Ce(Le.root, l),
    ownerState: Te,
    onBlur: ye,
    onClick: m,
    onContextMenu: G,
    onFocus: D,
    onKeyDown: ie,
    onKeyUp: $e,
    onMouseDown: z,
    onMouseLeave: Z,
    onMouseUp: V,
    onDragLeave: L,
    onTouchEnd: ce,
    onTouchMove: W,
    onTouchStart: K,
    ref: Ae,
    tabIndex: u ? -1 : j,
    type: B,
    ...Ee,
    ...ee,
    children: [s, ne ? /* @__PURE__ */ k.jsx($d, {
      ref: H,
      center: a,
      ...U
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: en,
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
  component: cs,
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
function Hx(e) {
  return Xe("MuiIconButton", e);
}
const Ux = Ze("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Yx = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: a
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${he(r)}`, i && `edge${he(i)}`, `size${he(a)}`]
  };
  return nt(s, Hx, t);
}, qx = be(xo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${he(n.color)}`], n.edge && t[`edge${he(n.edge)}`], t[`size${he(n.size)}`]];
  }
})(tt(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), tt(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(un()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(un()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xt((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${Ux.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), $s = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium",
    ...f
  } = r, g = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }, h = Yx(g);
  return /* @__PURE__ */ k.jsx(qx, {
    className: Ce(h.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n,
    ...f,
    ownerState: g,
    children: a
  });
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Bn(o.node, (e) => E.Children.toArray(e.children).some((n) => /* @__PURE__ */ E.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const Gx = jr(/* @__PURE__ */ k.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Kx(e) {
  return Xe("MuiChip", e);
}
const Me = Ze("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Xx = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: i,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, n && "disabled", `size${he(r)}`, `color${he(i)}`, l && "clickable", l && `clickableColor${he(i)}`, s && "deletable", s && `deletableColor${he(i)}`, `${c}${he(i)}`],
    label: ["label", `label${he(r)}`],
    avatar: ["avatar", `avatar${he(r)}`, `avatarColor${he(i)}`],
    icon: ["icon", `icon${he(r)}`, `iconColor${he(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${he(r)}`, `deleteIconColor${he(i)}`, `deleteIcon${he(c)}Color${he(i)}`]
  };
  return nt(u, Kx, t);
}, Zx = be("div", {
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
      [`& .${Me.avatar}`]: t.avatar
    }, {
      [`& .${Me.avatar}`]: t[`avatar${he(l)}`]
    }, {
      [`& .${Me.avatar}`]: t[`avatarColor${he(r)}`]
    }, {
      [`& .${Me.icon}`]: t.icon
    }, {
      [`& .${Me.icon}`]: t[`icon${he(l)}`]
    }, {
      [`& .${Me.icon}`]: t[`iconColor${he(i)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIcon${he(l)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIconColor${he(r)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIcon${he(c)}Color${he(r)}`]
    }, t.root, t[`size${he(l)}`], t[`color${he(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${he(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${he(r)}`], t[c], t[`${c}${he(r)}`]];
  }
})(tt(({
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
    [`&.${Me.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Me.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Me.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Me.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Me.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Me.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Me.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : xt(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : xt(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Me.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Me.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(un(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Me.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : xt(e.palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Me.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Me.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Me.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : xt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(un(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Me.focusVisible}`]: {
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : xt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${Me.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : xt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(un(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Me.focusVisible}`]: {
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
        [`&.${Me.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Me.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Me.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Me.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Me.icon}`]: {
          marginLeft: 4
        },
        [`& .${Me.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Me.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Me.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(un()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : xt(e.palette[n].main, 0.7)}`,
        [`&.${Me.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette[n].main, e.palette.action.hoverOpacity)
        },
        [`&.${Me.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : xt(e.palette[n].main, e.palette.action.focusOpacity)
        },
        [`& .${Me.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : xt(e.palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), Qx = be("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${he(r)}`]];
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
function cc(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Md = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: g,
    onClick: h,
    onDelete: y,
    onKeyDown: b,
    onKeyUp: m,
    size: C = "medium",
    variant: T = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...x
  } = r, R = E.useRef(null), O = Et(R, n), I = (re) => {
    re.stopPropagation(), y && y(re);
  }, $ = (re) => {
    re.currentTarget === re.target && cc(re) && re.preventDefault(), b && b(re);
  }, p = (re) => {
    re.currentTarget === re.target && y && cc(re) && y(re), m && m(re);
  }, P = s !== !1 && h ? !0 : s, M = P || y ? xo : c || "div", j = {
    ...r,
    component: M,
    disabled: d,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ E.isValidElement(f) && f.props.color || l,
    onDelete: !!y,
    clickable: P,
    variant: T
  }, U = Xx(j), N = M === xo ? {
    component: c || "div",
    focusVisibleClassName: U.focusVisible,
    ...y && {
      disableRipple: !0
    }
  } : {};
  let B = null;
  y && (B = u && /* @__PURE__ */ E.isValidElement(u) ? /* @__PURE__ */ E.cloneElement(u, {
    className: Ce(u.props.className, U.deleteIcon),
    onClick: I
  }) : /* @__PURE__ */ k.jsx(Gx, {
    className: Ce(U.deleteIcon),
    onClick: I
  }));
  let ee = null;
  i && /* @__PURE__ */ E.isValidElement(i) && (ee = /* @__PURE__ */ E.cloneElement(i, {
    className: Ce(U.avatar, i.props.className)
  }));
  let te = null;
  return f && /* @__PURE__ */ E.isValidElement(f) && (te = /* @__PURE__ */ E.cloneElement(f, {
    className: Ce(U.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && ee && te && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ k.jsxs(Zx, {
    as: M,
    className: Ce(U.root, a),
    disabled: P && d ? !0 : void 0,
    onClick: h,
    onKeyDown: $,
    onKeyUp: p,
    ref: O,
    tabIndex: w && d ? -1 : v,
    ownerState: j,
    ...N,
    ...x,
    children: [ee || te, /* @__PURE__ */ k.jsx(Qx, {
      className: Ce(U.label),
      ownerState: j,
      children: g
    }), B]
  });
});
process.env.NODE_ENV !== "production" && (Md.propTypes = {
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
  children: hb,
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
const Jx = jr(/* @__PURE__ */ k.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function ew(e) {
  return Xe("MuiAutocomplete", e);
}
const ke = Ze("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var uc, dc;
const tw = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: r,
    focused: i,
    fullWidth: a,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: d
  } = e, f = {
    root: ["root", r && "expanded", i && "focused", a && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${he(d)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", u && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return nt(f, ew, t);
}, nw = be("div", {
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
      [`& .${ke.tag}`]: t[`tagSize${he(l)}`]
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
  [`& .${qn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${qn.root}.${Gt.sizeSmall}`]: {
    [`& .${qn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${an.root}`]: {
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
  [`& .${an.root}.${Gt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${ke.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Kt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${ke.hasPopupIcon}&, .${ke.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${ke.hasPopupIcon}.${ke.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Kt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${ke.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Kt.root}.${Gt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Kt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${Gt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Kt.root}.${Gt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${ke.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Kt.root}.${Gt.hiddenLabel}.${Gt.sizeSmall}`]: {
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
}), rw = be("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), ow = be($s, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), iw = be($s, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.popupIndicator,
    ...e.popupOpen && t.popupIndicatorOpen
  })
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
}), aw = be(Is, {
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
})(tt(({
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
}))), sw = be(Hi, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(tt(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), lw = be("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(tt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), cw = be("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(tt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), uw = be("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(tt(({
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : xt(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${ke.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : xt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${ke.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : xt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), dw = be(mi, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(tt(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), fw = be("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${ke.option}`]: {
    paddingLeft: 24
  }
}), Nd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: i = !1,
    autoHighlight: a = !1,
    autoSelect: s = !1,
    blurOnSelect: l = !1,
    ChipProps: c,
    className: u,
    clearIcon: d = uc || (uc = /* @__PURE__ */ k.jsx(Jx, {
      fontSize: "small"
    })),
    clearOnBlur: f = !r.freeSolo,
    clearOnEscape: g = !1,
    clearText: h = "Clear",
    closeText: y = "Close",
    componentsProps: b,
    defaultValue: m = r.multiple ? [] : null,
    disableClearable: C = !1,
    disableCloseOnSelect: T = !1,
    disabled: v = !1,
    disabledItemsFocusable: w = !1,
    disableListWrap: x = !1,
    disablePortal: R = !1,
    filterOptions: O,
    filterSelectedOptions: I = !1,
    forcePopupIcon: $ = "auto",
    freeSolo: p = !1,
    fullWidth: P = !1,
    getLimitTagsText: M = (Ne) => `+${Ne}`,
    getOptionDisabled: j,
    getOptionKey: U,
    getOptionLabel: N,
    isOptionEqualToValue: B,
    groupBy: ee,
    handleHomeEndKeys: te = !r.freeSolo,
    id: re,
    includeInputInList: H = !1,
    inputValue: X,
    limitTags: ue = -1,
    ListboxComponent: ne,
    ListboxProps: F,
    loading: z = !1,
    loadingText: G = "Loading…",
    multiple: L = !1,
    noOptionsText: V = "No options",
    onChange: Z,
    onClose: K,
    onHighlightChange: ce,
    onInputChange: W,
    onOpen: ye,
    open: D,
    openOnFocus: de = !1,
    openText: ie = "Open",
    options: $e,
    PaperComponent: ge,
    PopperComponent: Ee,
    popupIcon: Ae = dc || (dc = /* @__PURE__ */ k.jsx(bd, {})),
    readOnly: Te = !1,
    renderGroup: Le,
    renderInput: fe,
    renderOption: je,
    renderTags: gt,
    selectOnFocus: vt = !r.freeSolo,
    size: qe = "medium",
    slots: Ge = {},
    slotProps: Re = {},
    value: it,
    ...Pe
  } = r, {
    getRootProps: dt,
    getInputProps: Mt,
    getInputLabelProps: Ot,
    getPopupIndicatorProps: pe,
    getClearProps: ve,
    getTagProps: Ke,
    getListboxProps: rt,
    getOptionProps: at,
    value: At,
    dirty: Tt,
    expanded: tn,
    id: Ht,
    popupOpen: gn,
    focused: Ut,
    focusedTag: jt,
    anchorEl: bn,
    setAnchorEl: Yt,
    inputValue: yn,
    groupedOptions: ft
  } = h0({
    ...r,
    componentName: "Autocomplete"
  }), nn = !C && !v && Tt && !Te, Pt = (!p || $ === !0) && $ !== !1, {
    onMouseDown: me
  } = Mt(), {
    ref: rn,
    ...xn
  } = rt(), wn = N || ((Ne) => Ne.label ?? Ne), S = {
    ...r,
    disablePortal: R,
    expanded: tn,
    focused: Ut,
    fullWidth: P,
    getOptionLabel: wn,
    hasClearIcon: nn,
    hasPopupIcon: Pt,
    inputFocused: jt === -1,
    popupOpen: gn,
    size: qe
  }, q = tw(S), ae = {
    slots: {
      paper: ge,
      popper: Ee,
      ...Ge
    },
    slotProps: {
      chip: c,
      listbox: F,
      ...b,
      ...Re
    }
  }, [A, _] = Lt("listbox", {
    elementType: uw,
    externalForwardedProps: ae,
    ownerState: S,
    className: q.listbox,
    additionalProps: xn,
    ref: rn
  }), [Q, le] = Lt("paper", {
    elementType: Hi,
    externalForwardedProps: ae,
    ownerState: S,
    className: q.paper
  }), [se, Oe] = Lt("popper", {
    elementType: Is,
    externalForwardedProps: ae,
    ownerState: S,
    className: q.popper,
    additionalProps: {
      disablePortal: R,
      style: {
        width: bn ? bn.clientWidth : null
      },
      role: "presentation",
      anchorEl: bn,
      open: gn
    }
  });
  let we;
  if (L && At.length > 0) {
    const Ne = (Ct) => ({
      className: q.tag,
      disabled: v,
      ...Ke(Ct)
    });
    gt ? we = gt(At, Ne, S) : we = At.map((Ct, Cn) => {
      const {
        key: nr,
        ...qi
      } = Ne({
        index: Cn
      });
      return /* @__PURE__ */ k.jsx(Md, {
        label: wn(Ct),
        size: qe,
        ...qi,
        ...ae.slotProps.chip
      }, nr);
    });
  }
  if (ue > -1 && Array.isArray(we)) {
    const Ne = we.length - ue;
    !Ut && Ne > 0 && (we = we.splice(0, ue), we.push(/* @__PURE__ */ k.jsx("span", {
      className: q.tag,
      children: M(Ne)
    }, we.length)));
  }
  const bt = Le || ((Ne) => /* @__PURE__ */ k.jsxs("li", {
    children: [/* @__PURE__ */ k.jsx(dw, {
      className: q.groupLabel,
      ownerState: S,
      component: "div",
      children: Ne.group
    }), /* @__PURE__ */ k.jsx(fw, {
      className: q.groupUl,
      ownerState: S,
      children: Ne.children
    })]
  }, Ne.key)), Nt = je || ((Ne, Ct) => {
    const {
      key: Cn,
      ...nr
    } = Ne;
    return /* @__PURE__ */ k.jsx("li", {
      ...nr,
      children: wn(Ct)
    }, Cn);
  }), lt = (Ne, Ct) => {
    const Cn = at({
      option: Ne,
      index: Ct
    });
    return Nt({
      ...Cn,
      className: q.option
    }, Ne, {
      selected: Cn["aria-selected"],
      index: Ct,
      inputValue: yn
    }, S);
  }, on = ae.slotProps.clearIndicator, Hn = ae.slotProps.popupIndicator, Un = (Ne) => /* @__PURE__ */ k.jsx(aw, {
    as: se,
    ...Oe,
    children: /* @__PURE__ */ k.jsx(sw, {
      as: Q,
      ...le,
      children: Ne
    })
  });
  let dr = null;
  return ft.length > 0 ? dr = Un(
    // TODO v7: remove `as` prop and move ListboxComponentProp to externalForwardedProps or remove ListboxComponentProp entirely
    // https://github.com/mui/material-ui/pull/43994#issuecomment-2401945800
    /* @__PURE__ */ k.jsx(A, {
      as: ne,
      ..._,
      children: ft.map((Ne, Ct) => ee ? bt({
        key: Ne.key,
        group: Ne.group,
        children: Ne.options.map((Cn, nr) => lt(Cn, Ne.index + nr))
      }) : lt(Ne, Ct))
    })
  ) : z && ft.length === 0 ? dr = Un(/* @__PURE__ */ k.jsx(lw, {
    className: q.loading,
    ownerState: S,
    children: G
  })) : ft.length === 0 && !p && !z && (dr = Un(/* @__PURE__ */ k.jsx(cw, {
    className: q.noOptions,
    ownerState: S,
    role: "presentation",
    onMouseDown: (Ne) => {
      Ne.preventDefault();
    },
    children: V
  }))), /* @__PURE__ */ k.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ k.jsx(nw, {
      ref: n,
      className: Ce(q.root, u),
      ownerState: S,
      ...dt(Pe),
      children: fe({
        id: Ht,
        disabled: v,
        fullWidth: !0,
        size: qe === "small" ? "small" : void 0,
        InputLabelProps: Ot(),
        InputProps: {
          ref: Yt,
          className: q.inputRoot,
          startAdornment: we,
          onMouseDown: (Ne) => {
            Ne.target === Ne.currentTarget && me(Ne);
          },
          ...(nn || Pt) && {
            endAdornment: /* @__PURE__ */ k.jsxs(rw, {
              className: q.endAdornment,
              ownerState: S,
              children: [nn ? /* @__PURE__ */ k.jsx(ow, {
                ...ve(),
                "aria-label": h,
                title: h,
                ownerState: S,
                ...on,
                className: Ce(q.clearIndicator, on == null ? void 0 : on.className),
                children: d
              }) : null, Pt ? /* @__PURE__ */ k.jsx(iw, {
                ...pe(),
                disabled: v,
                "aria-label": gn ? y : ie,
                title: gn ? y : ie,
                ownerState: S,
                ...Hn,
                className: Ce(q.popupIndicator, Hn == null ? void 0 : Hn.className),
                children: Ae
              }) : null]
            })
          }
        },
        inputProps: {
          className: q.input,
          disabled: v,
          readOnly: Te,
          ...Mt()
        }
      })
    }), bn ? dr : null]
  });
});
process.env.NODE_ENV !== "production" && (Nd.propTypes = {
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
  defaultValue: Bn(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
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
   * @param {Value} options The options to group.
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
  limitTags: fs,
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
  value: Bn(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const ha = (e) => e.stopPropagation(), pw = ({ options: e, ...t }) => {
  const n = ut(
    () => e.find((r) => r.value === t.value),
    [e, t.value]
  );
  return /* @__PURE__ */ k.jsx(
    Nd,
    {
      onChange: (r, i) => {
        var a;
        return (a = t.onChange) == null ? void 0 : a.call(t, i == null ? void 0 : i.value);
      },
      value: n ?? null,
      options: e,
      onClick: ha,
      onKeyDown: ha,
      getOptionLabel: (r) => r.label,
      renderInput: (r) => /* @__PURE__ */ k.jsx(
        vd,
        {
          ...r,
          onClick: ha,
          label: t.label,
          error: t.error,
          helperText: t.helperText
        }
      )
    }
  );
}, mw = Kn(Yu)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, fc = (e) => e.stopPropagation(), ga = ({ children: e, ...t }) => /* @__PURE__ */ k.jsxs(mw, { children: [
  Yc(t),
  e
] }), hw = (e) => (t) => {
  const { filters: n, setFilters: r } = Gn(Cs), i = ut(() => n[e.key], [n, e]), a = Fn(
    (s) => {
      r({ ...n, [e.key]: s });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === uo.AUTOCOMPLETE && (i === void 0 || typeof i == "string") ? /* @__PURE__ */ k.jsx(ga, { ...t, children: /* @__PURE__ */ k.jsx(
    pw,
    {
      options: e.filterOptions ?? [],
      onChange: a,
      value: i
    }
  ) }) : /* @__PURE__ */ k.jsx(ga, { ...t, children: /* @__PURE__ */ k.jsx(
    vd,
    {
      autoComplete: "off",
      onClick: fc,
      onKeyDown: fc,
      value: i ?? "",
      onChange: (s) => a(s.target.value)
    }
  ) }) : /* @__PURE__ */ k.jsx(ga, { ...t });
}, gw = {
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
}, bw = (e, t, n) => {
  let r;
  const i = gw[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ba(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const yw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, vw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, xw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ww = {
  date: ba({
    formats: yw,
    defaultWidth: "full"
  }),
  time: ba({
    formats: vw,
    defaultWidth: "full"
  }),
  dateTime: ba({
    formats: xw,
    defaultWidth: "full"
  })
}, Cw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Sw = (e, t, n, r) => Cw[e];
function qr(e) {
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
const Ew = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Tw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ow = {
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
}, Rw = {
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
}, Pw = {
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
}, kw = {
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
}, Iw = (e, t) => {
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
}, $w = {
  ordinalNumber: Iw,
  era: qr({
    values: Ew,
    defaultWidth: "wide"
  }),
  quarter: qr({
    values: Tw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: qr({
    values: Ow,
    defaultWidth: "wide"
  }),
  day: qr({
    values: Rw,
    defaultWidth: "wide"
  }),
  dayPeriod: qr({
    values: Pw,
    defaultWidth: "wide",
    formattingValues: kw,
    defaultFormattingWidth: "wide"
  })
};
function Gr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? Nw(l, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Mw(l, (f) => f.test(s))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(s.length);
    return { value: u, rest: d };
  };
}
function Mw(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Nw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Dw(e) {
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
const Aw = /^(\d+)(th|st|nd|rd)?/i, jw = /\d+/i, Fw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, _w = {
  any: [/^b/i, /^(a|c)/i]
}, Lw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Bw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, zw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ww = {
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
}, Vw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Hw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Uw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Yw = {
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
}, qw = {
  ordinalNumber: Dw({
    matchPattern: Aw,
    parsePattern: jw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Gr({
    matchPatterns: Fw,
    defaultMatchWidth: "wide",
    parsePatterns: _w,
    defaultParseWidth: "any"
  }),
  quarter: Gr({
    matchPatterns: Lw,
    defaultMatchWidth: "wide",
    parsePatterns: Bw,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Gr({
    matchPatterns: zw,
    defaultMatchWidth: "wide",
    parsePatterns: Ww,
    defaultParseWidth: "any"
  }),
  day: Gr({
    matchPatterns: Vw,
    defaultMatchWidth: "wide",
    parsePatterns: Hw,
    defaultParseWidth: "any"
  }),
  dayPeriod: Gr({
    matchPatterns: Uw,
    defaultMatchWidth: "any",
    parsePatterns: Yw,
    defaultParseWidth: "any"
  })
}, Gw = {
  code: "en-US",
  formatDistance: bw,
  formatLong: ww,
  formatRelative: Sw,
  localize: $w,
  match: qw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let Kw = {};
function No() {
  return Kw;
}
const Dd = 6048e5, Xw = 864e5, pc = Symbol.for("constructDateFrom");
function Zn(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && pc in e ? e[pc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function vn(e, t) {
  return Zn(t || e, e);
}
function mc(e) {
  const t = vn(e), n = new Date(
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
function Zw(e, ...t) {
  const n = Zn.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function hc(e, t) {
  const n = vn(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Qw(e, t, n) {
  const [r, i] = Zw(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = hc(r), s = hc(i), l = +a - mc(a), c = +s - mc(s);
  return Math.round((l - c) / Xw);
}
function Jw(e, t) {
  const n = vn(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function eC(e, t) {
  const n = vn(e, t == null ? void 0 : t.in);
  return Qw(n, Jw(n)) + 1;
}
function wo(e, t) {
  var l, c, u, d;
  const n = No(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, i = vn(e, t == null ? void 0 : t.in), a = i.getDay(), s = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function gi(e, t) {
  return wo(e, { ...t, weekStartsOn: 1 });
}
function Ad(e, t) {
  const n = vn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Zn(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = gi(i), s = Zn(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const l = gi(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function tC(e, t) {
  const n = Ad(e, t), r = Zn(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), gi(r);
}
function nC(e, t) {
  const n = vn(e, t == null ? void 0 : t.in), r = +gi(n) - +tC(n);
  return Math.round(r / Dd) + 1;
}
function jd(e, t) {
  var d, f, g, h;
  const n = vn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = No(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((h = (g = i.locale) == null ? void 0 : g.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Zn((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const l = wo(s, t), c = Zn((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const u = wo(c, t);
  return +n >= +l ? r + 1 : +n >= +u ? r : r - 1;
}
function rC(e, t) {
  var l, c, u, d;
  const n = No(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, i = jd(e, t), a = Zn((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), wo(a, t);
}
function oC(e, t) {
  const n = vn(e, t == null ? void 0 : t.in), r = +wo(n, t) - +rC(n, t);
  return Math.round(r / Dd) + 1;
}
function Ye(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Yn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ye(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ye(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ye(e.getDate(), t.length);
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
    return Ye(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ye(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ye(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ye(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ye(i, t.length);
  }
}, xr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, gc = {
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
    return Yn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = jd(e, r), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = a % 100;
      return Ye(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Ye(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Ad(e);
    return Ye(n, t.length);
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
    return Ye(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Ye(r, 2);
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
        return Ye(r, 2);
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
        return Yn.M(e, t);
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
        return Ye(r + 1, 2);
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
    const i = oC(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Ye(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = nC(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ye(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Yn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = eC(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ye(r, t.length);
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
        return Ye(a, 2);
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
        return Ye(a, t.length);
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
        return Ye(i, t.length);
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
    switch (r === 12 ? i = xr.noon : r === 0 ? i = xr.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? i = xr.evening : r >= 12 ? i = xr.afternoon : r >= 4 ? i = xr.morning : i = xr.night, t) {
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
    return Yn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Yn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ye(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ye(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Yn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Yn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Yn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return yc(r);
      case "XXXX":
      case "XX":
        return ir(r);
      case "XXXXX":
      case "XXX":
      default:
        return ir(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return yc(r);
      case "xxxx":
      case "xx":
        return ir(r);
      case "xxxxx":
      case "xxx":
      default:
        return ir(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + bc(r, ":");
      case "OOOO":
      default:
        return "GMT" + ir(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + bc(r, ":");
      case "zzzz":
      default:
        return "GMT" + ir(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Ye(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Ye(+e, t.length);
  }
};
function bc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Ye(a, 2);
}
function yc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ye(Math.abs(e) / 60, 2) : ir(e, t);
}
function ir(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Ye(Math.trunc(r / 60), 2), a = Ye(r % 60, 2);
  return n + i + t + a;
}
const vc = (e, t) => {
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
}, Fd = (e, t) => {
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
}, iC = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return vc(e, t);
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
  return a.replace("{{date}}", vc(r, t)).replace("{{time}}", Fd(i, t));
}, aC = {
  p: Fd,
  P: iC
}, sC = /^D+$/, lC = /^Y+$/, cC = ["D", "DD", "YY", "YYYY"];
function uC(e) {
  return sC.test(e);
}
function dC(e) {
  return lC.test(e);
}
function fC(e, t, n) {
  const r = pC(e, t, n);
  if (console.warn(r), cC.includes(e)) throw new RangeError(r);
}
function pC(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function _d(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ld(e) {
  return !(!_d(e) && typeof e != "number" || isNaN(+vn(e)));
}
const mC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gC = /^'([^]*?)'?$/, bC = /''/g, yC = /[a-zA-Z]/;
function vC(e, t, n) {
  var d, f, g, h, y, b, m, C;
  const r = No(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? Gw, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((b = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((C = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = vn(e, n == null ? void 0 : n.in);
  if (!Ld(l))
    throw new RangeError("Invalid time value");
  let c = t.match(hC).map((T) => {
    const v = T[0];
    if (v === "p" || v === "P") {
      const w = aC[v];
      return w(T, i.formatLong);
    }
    return T;
  }).join("").match(mC).map((T) => {
    if (T === "''")
      return { isToken: !1, value: "'" };
    const v = T[0];
    if (v === "'")
      return { isToken: !1, value: xC(T) };
    if (gc[v])
      return { isToken: !0, value: T };
    if (v.match(yC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: T };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(l, c));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: i
  };
  return c.map((T) => {
    if (!T.isToken) return T.value;
    const v = T.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && dC(v) || !(n != null && n.useAdditionalDayOfYearTokens) && uC(v)) && fC(v, t, String(e));
    const w = gc[v[0]];
    return w(l, v, i.localize, u);
  }).join("");
}
function xC(e) {
  const t = e.match(gC);
  return t ? t[1].replace(bC, "'") : e;
}
function wC() {
  return Object.assign({}, No());
}
function xc(e, t, n) {
  const r = wC(), i = EC(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in i ? CC(i, t) : SC(i, t);
}
function CC(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function SC(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function EC(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function TC(e, t) {
  const n = IC(t);
  return "formatToParts" in n ? RC(n, e) : PC(n, e);
}
const OC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function RC(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let i = 0; i < n.length; i++) {
      const a = OC[n[i].type];
      a !== void 0 && (r[a] = parseInt(n[i].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function PC(e, t) {
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
const ya = {}, wc = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), kC = wc === "06/25/2014, 00:00:00" || wc === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function IC(e) {
  return ya[e] || (ya[e] = kC ? new Intl.DateTimeFormat("en-US", {
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
  })), ya[e];
}
function Bd(e, t, n, r, i, a, s) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, i, a, s), l;
}
const Cc = 36e5, $C = 6e4, va = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Ms(e, t, n) {
  if (!e)
    return 0;
  let r = va.timezoneZ.exec(e);
  if (r)
    return 0;
  let i, a;
  if (r = va.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), Sc(i) ? -(i * Cc) : NaN;
  if (r = va.timezoneHHMM.exec(e), r) {
    i = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return Sc(i, s) ? (a = Math.abs(i) * Cc + s * $C, r[1] === "+" ? -a : a) : NaN;
  }
  if (DC(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : MC(t), l = Ua(s, e);
    return -(n ? l : NC(t, l, e));
  }
  return NaN;
}
function MC(e) {
  return Bd(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Ua(e, t) {
  const n = TC(e, t), r = Bd(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let i = e.getTime();
  const a = i % 1e3;
  return i -= a >= 0 ? a : 1e3 + a, r - i;
}
function NC(e, t, n) {
  let i = e.getTime() - t;
  const a = Ua(new Date(i), n);
  if (t === a)
    return t;
  i -= a - t;
  const s = Ua(new Date(i), n);
  return a === s ? a : Math.max(a, s);
}
function Sc(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Ec = {};
function DC(e) {
  if (Ec[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Ec[e] = !0, !0;
  } catch {
    return !1;
  }
}
const AC = 60 * 1e3, jC = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = xa(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Tc(r);
      case "XXXX":
      case "XX":
        return Cr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Cr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = xa(n.timeZone, e);
    switch (t) {
      case "x":
        return Tc(r);
      case "xxxx":
      case "xx":
        return Cr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Cr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = xa(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + FC(r, ":");
      case "OOOO":
      default:
        return "GMT" + Cr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return xc("short", e, n);
      case "zzzz":
      default:
        return xc("long", e, n);
    }
  }
};
function xa(e, t) {
  const n = e ? Ms(e, t, !0) / AC : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function bi(e, t) {
  const n = e < 0 ? "-" : "";
  let r = Math.abs(e).toString();
  for (; r.length < t; )
    r = "0" + r;
  return n + r;
}
function Cr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = bi(Math.floor(r / 60), 2), a = bi(Math.floor(r % 60), 2);
  return n + i + t + a;
}
function Tc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + bi(Math.abs(e) / 60, 2) : Cr(e, t);
}
function FC(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + bi(a, 2);
}
function Oc(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const _C = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, wa = 36e5, Rc = 6e4, LC = 2, Dt = {
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
  timeZone: _C
};
function zd(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? LC : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = BC(e), { year: i, restDateString: a } = zC(r.date, n), s = WC(a, i);
  if (s === null || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const l = s.getTime();
    let c = 0, u;
    if (r.time && (c = VC(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (u = Ms(r.timeZone || t.timeZone, new Date(l + c)), isNaN(u))
        return /* @__PURE__ */ new Date(NaN);
    } else
      u = Oc(new Date(l + c)), u = Oc(new Date(l + c + u));
    return new Date(l + c + u);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function BC(e) {
  const t = {};
  let n = Dt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Dt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const i = Dt.timeZone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timeZone = i[1].trim()) : t.time = r;
  }
  return t;
}
function zC(e, t) {
  if (e) {
    const n = Dt.YYY[t], r = Dt.YYYYY[t];
    let i = Dt.YYYY.exec(e) || r.exec(e);
    if (i) {
      const a = i[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (i = Dt.YY.exec(e) || n.exec(e), i) {
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
function WC(e, t) {
  if (t === null)
    return null;
  let n, r, i;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = Dt.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, kc(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = Dt.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return YC(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Dt.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return kc(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Dt.Www.exec(e), a)
    return i = parseInt(a[1], 10) - 1, Ic(i) ? Pc(t, i) : /* @__PURE__ */ new Date(NaN);
  if (a = Dt.WwwD.exec(e), a) {
    i = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return Ic(i, s) ? Pc(t, i, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function VC(e) {
  let t, n, r = Dt.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), Ca(t) ? t % 24 * wa : NaN;
  if (r = Dt.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), Ca(t, n) ? t % 24 * wa + n * Rc : NaN;
  if (r = Dt.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const i = parseFloat(r[3].replace(",", "."));
    return Ca(t, n, i) ? t % 24 * wa + n * Rc + i * 1e3 : NaN;
  }
  return null;
}
function Pc(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, a = t * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const HC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], UC = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Wd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function kc(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = Wd(e);
    if (r && n > UC[t] || !r && n > HC[t])
      return !1;
  }
  return !0;
}
function YC(e, t) {
  if (t < 1)
    return !1;
  const n = Wd(e);
  return !(n && t > 366 || !n && t > 365);
}
function Ic(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Ca(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const qC = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function GC(e, t, n = {}) {
  t = String(t);
  const r = t.match(qC);
  if (r) {
    const i = zd(n.originalDate || e, n);
    t = r.reduce(function(a, s) {
      if (s[0] === "'")
        return a;
      const l = a.indexOf(s), c = a[l - 1] === "'", u = a.replace(s, "'" + jC[s[0]](i, s, n) + "'");
      return c ? u.substring(0, l - 1) + u.substring(l + 1) : u;
    }, t);
  }
  return vC(e, t, n);
}
function KC(e, t, n) {
  e = zd(e, n);
  const r = Ms(t, e, !0), i = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), a.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), a;
}
function XC(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, GC(KC(e, t, { timeZone: r.timeZone }), n, r);
}
var Vd = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.TEXT = "dd-MM-yyyy HH:mm", e.TEXT_WITHOUT_TIME = "dd-MM-yyyy", e))(Vd || {});
const ZC = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'") => {
  if (!e)
    return "";
  const n = !_d(e) && typeof e == "string" ? new Date(e) : e;
  if (!Ld(n))
    return "--";
  const r = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return XC(e, r, t);
}, $c = (e) => e.trim().toLowerCase(), QC = ({
  columns: e,
  selectionEnabled: t
}) => {
  const n = Fn((r) => {
    const i = () => {
      if (r.renderCell)
        return r.renderCell;
      if (r.type === eo.DATE)
        return ({ row: s }) => ZC(s[r.key], Vd.TEXT);
    }, a = () => r.renderHeaderCell ? r.renderHeaderCell : hw(r);
    return { ...r, renderCell: i(), renderHeaderCell: a() };
  }, []);
  return ut(() => {
    const r = [];
    return t && r.push({
      ...ap,
      minWidth: 50,
      maxWidth: 50
    }), r.push(...e.map((i) => n(i))), r;
  }, [e, n]);
};
function JC(e) {
  return Xe("PrivateSwitchBase", e);
}
Ze("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const e1 = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", n && "checked", r && "disabled", i && `edge${he(i)}`],
    input: ["input"]
  };
  return nt(a, JC, t);
}, t1 = be(xo)({
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
}), n1 = be("input", {
  shouldForwardProp: hn
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
}), Hd = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: a,
    className: s,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: d = !1,
    icon: f,
    id: g,
    inputProps: h,
    inputRef: y,
    name: b,
    onBlur: m,
    onChange: C,
    onFocus: T,
    readOnly: v,
    required: w = !1,
    tabIndex: x,
    type: R,
    value: O,
    ...I
  } = t, [$, p] = Tr({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), P = ur(), M = (re) => {
    T && T(re), P && P.onFocus && P.onFocus(re);
  }, j = (re) => {
    m && m(re), P && P.onBlur && P.onBlur(re);
  }, U = (re) => {
    if (re.nativeEvent.defaultPrevented)
      return;
    const H = re.target.checked;
    p(H), C && C(re, H);
  };
  let N = c;
  P && typeof N > "u" && (N = P.disabled);
  const B = R === "checkbox" || R === "radio", ee = {
    ...t,
    checked: $,
    disabled: N,
    disableFocusRipple: u,
    edge: d
  }, te = e1(ee);
  return /* @__PURE__ */ k.jsxs(t1, {
    component: "span",
    className: Ce(te.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: N,
    tabIndex: null,
    role: void 0,
    onFocus: M,
    onBlur: j,
    ownerState: ee,
    ref: n,
    ...I,
    children: [/* @__PURE__ */ k.jsx(n1, {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      className: te.input,
      disabled: N,
      id: B ? g : void 0,
      name: b,
      onChange: U,
      readOnly: v,
      ref: y,
      required: w,
      ownerState: ee,
      tabIndex: x,
      type: R,
      ...R === "checkbox" && O === void 0 ? {} : {
        value: O
      },
      ...h
    }), $ ? a : f]
  });
});
process.env.NODE_ENV !== "production" && (Hd.propTypes = {
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
  inputRef: en,
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
const r1 = jr(/* @__PURE__ */ k.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), o1 = jr(/* @__PURE__ */ k.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), i1 = jr(/* @__PURE__ */ k.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function a1(e) {
  return Xe("MuiCheckbox", e);
}
const Sa = Ze("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), s1 = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: i
  } = e, a = {
    root: ["root", n && "indeterminate", `color${he(r)}`, `size${he(i)}`]
  }, s = nt(a, a1, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, l1 = be(Hd, {
  shouldForwardProp: (e) => hn(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${he(n.size)}`], n.color !== "default" && t[`color${he(n.color)}`]];
  }
})(tt(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(un()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xt(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(un()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Sa.checked}, &.${Sa.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Sa.disabled}`]: {
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
}))), c1 = /* @__PURE__ */ k.jsx(o1, {}), u1 = /* @__PURE__ */ k.jsx(r1, {}), d1 = /* @__PURE__ */ k.jsx(i1, {}), Ud = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = ot({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = c1,
    color: a = "primary",
    icon: s = u1,
    indeterminate: l = !1,
    indeterminateIcon: c = d1,
    inputProps: u,
    size: d = "medium",
    disableRipple: f = !1,
    className: g,
    ...h
  } = r, y = l ? c : s, b = l ? c : i, m = {
    ...r,
    disableRipple: f,
    color: a,
    indeterminate: l,
    size: d
  }, C = s1(m);
  return /* @__PURE__ */ k.jsx(l1, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": l,
      ...u
    },
    icon: /* @__PURE__ */ E.cloneElement(y, {
      fontSize: y.props.fontSize ?? d
    }),
    checkedIcon: /* @__PURE__ */ E.cloneElement(b, {
      fontSize: b.props.fontSize ?? d
    }),
    ownerState: m,
    ref: n,
    className: Ce(C.root, g),
    disableRipple: f,
    ...h,
    classes: C
  });
});
process.env.NODE_ENV !== "production" && (Ud.propTypes = {
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
  inputRef: en,
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
const f1 = Kn(Ud)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${St.primary500};
    }
`;
var p1 = {
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
function m1(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return p1[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Ea(e) {
  var t = m1(e);
  return "".concat(t.value).concat(t.unit);
}
var h1 = function(e, t, n) {
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
}, yi = function() {
  return yi = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, yi.apply(this, arguments);
}, g1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, b1 = h1("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function y1(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, a = e.speedMultiplier, s = a === void 0 ? 1 : a, l = e.cssOverride, c = l === void 0 ? {} : l, u = e.size, d = u === void 0 ? 15 : u, f = e.margin, g = f === void 0 ? 2 : f, h = g1(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), y = yi({ display: "inherit" }, c), b = function(m) {
    return {
      backgroundColor: i,
      width: Ea(d),
      height: Ea(d),
      margin: Ea(g),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(b1, " ").concat(0.75 / s, "s ").concat(m * 0.12 / s, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? E.createElement(
    "span",
    yi({ style: y }, h),
    E.createElement("span", { style: b(1) }),
    E.createElement("span", { style: b(2) }),
    E.createElement("span", { style: b(3) })
  ) : null;
}
const v1 = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r
}) => e ? e(n, r) : t === uo.TEXT && typeof n == "string" && typeof r == "string" ? $c(n).includes($c(r)) : t === uo.AUTOCOMPLETE ? n === r : !1, x1 = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = Gn(Cs);
  return ut(() => n ? [...t].filter(
    (i) => Object.entries(r).every(([a, s]) => {
      if (s === void 0 || typeof s == "string" && s === "")
        return !0;
      const l = e.find((c) => c.key === a);
      return l ? v1({
        comparator: l.filterComparator,
        filterType: l.filterType ?? uo.TEXT,
        value: i[a],
        valueToMatch: s
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, w1 = Kn.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${St.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, C1 = Bt.memo(({ checked: e, onChange: t }) => {
  const n = Fn(
    (r, i) => {
      t(i, r.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ k.jsx(f1, { checked: e, onChange: n });
}), S1 = ({
  theme: e,
  loading: t,
  rows: n,
  columns: r,
  sortColumns: i,
  onSortColumnsChange: a,
  defaultSortColumns: s,
  selectedRows: l,
  onSelectedRowsChange: c,
  noDataMessage: u,
  filters: d,
  setFilters: f,
  ...g
}) => {
  const h = QC({
    columns: r,
    selectionEnabled: !!c
  }), y = ut(
    () => h.some((R) => R.filterEnabled),
    [h]
  ), b = ut(() => !f, [f]), m = x1({
    columns: h,
    rows: n,
    enabled: b
  }), C = ut(() => !a, [a]), {
    sortedRows: T,
    sortColumns: v,
    setSortedColumns: w
  } = Nh({
    columns: h,
    rows: m,
    defaultSortColumns: s
  }), x = Fn(
    (R, O) => O === 0 ? "first-row" : O === n.length - 1 ? "last-row" : "",
    [n]
  );
  return xi(() => {
    const R = l == null ? void 0 : l.filter(
      (O) => n.some((I) => I.id === O)
    );
    (R == null ? void 0 : R.length) != (l == null ? void 0 : l.length) && (c == null || c(R ?? []));
  }, [n, l]), /* @__PURE__ */ k.jsxs($h, { children: [
    /* @__PURE__ */ k.jsx(
      Xc,
      {
        ...g,
        selectedRows: l ? new Set(l) : void 0,
        onSelectedRowsChange: (R) => {
          c == null || c(Array.from(R));
        },
        rowKeyGetter: (R) => R.id,
        rows: T,
        onSortColumnsChange: C ? w : a,
        sortColumns: C ? v : i,
        columns: h,
        rowClass: x,
        rowHeight: 50,
        headerRowHeight: y ? 70 : void 0,
        renderers: {
          renderCheckbox: (R) => /* @__PURE__ */ k.jsx(C1, { ...R }),
          ...g.renderers
        },
        style: { ...km, ...e ?? {} }
      }
    ),
    t ? /* @__PURE__ */ k.jsxs(w1, { children: [
      /* @__PURE__ */ k.jsx("div", {}),
      /* @__PURE__ */ k.jsx(y1, { color: St.primary500 })
    ] }) : null
  ] });
}, I1 = ({
  filters: e,
  setFilters: t,
  ...n
}) => /* @__PURE__ */ k.jsx(u0, { filters: e, setFilters: t, children: /* @__PURE__ */ k.jsx(S1, { ...n, filters: e, setFilters: t }) });
export {
  eo as ColumnType,
  Vd as DATE_FORMAT,
  I1 as DataGrid,
  Qf as DataGridDefaultRenderersProvider,
  uo as FilterType,
  R1 as Row,
  Or as SELECT_COLUMN_KEY,
  qa as SelectCellFormatter,
  ap as SelectColumn,
  Xf as ToggleGroup,
  P1 as TreeDataGrid,
  ZC as convertDate,
  km as defaultTheme,
  $c as getStringToCompare,
  Hf as renderCheckbox,
  Yc as renderHeaderCell,
  nm as renderSortIcon,
  rm as renderSortPriority,
  Kf as renderToggleGroup,
  Zf as renderValue,
  St as taktikTheme,
  k1 as textEditor,
  np as useHeaderRowSelection,
  Wc as useRowSelection
};
