var Mf = Object.defineProperty;
var Nf = (e, t, n) => t in e ? Mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Vr = (e, t, n) => Nf(e, typeof t != "symbol" ? t + "" : t, n);
import * as S from "react";
import Ct, { useContext as xn, forwardRef as ki, createContext as Po, memo as Jn, useMemo as it, useCallback as Mt, useRef as kn, useEffect as Fr, useState as Rt, useImperativeHandle as Df, useLayoutEffect as Af, useId as jf, Children as Ff, isValidElement as Qo, cloneElement as Jo, createElement as Lf } from "react";
import * as _f from "react-dom";
import Uo, { flushSync as si } from "react-dom";
function Bf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fa = { exports: {} }, Hr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ks;
function zf() {
  if (Ks) return Hr;
  Ks = 1;
  var e = Ct, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, p = {}, h = null, g = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (d in c) r.call(c, d) && !a.hasOwnProperty(d) && (p[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: t, type: l, key: h, ref: g, props: p, _owner: i.current };
  }
  return Hr.Fragment = n, Hr.jsx = s, Hr.jsxs = s, Hr;
}
var Ur = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function Wf() {
  return Xs || (Xs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ct, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function f(E) {
      if (E === null || typeof E != "object")
        return null;
      var q = y && E[y] || E[b];
      return typeof q == "function" ? q : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(E) {
      {
        for (var q = arguments.length, ae = new Array(q > 1 ? q - 1 : 0), j = 1; j < q; j++)
          ae[j - 1] = arguments[j];
        v("error", E, ae);
      }
    }
    function v(E, q, ae) {
      {
        var j = C.ReactDebugCurrentFrame, L = j.getStackAddendum();
        L !== "" && (q += "%s", ae = ae.concat([L]));
        var J = ae.map(function(le) {
          return String(le);
        });
        J.unshift("Warning: " + q), Function.prototype.apply.call(console[E], console, J);
      }
    }
    var w = !1, x = !1, k = !1, R = !1, $ = !1, M;
    M = Symbol.for("react.module.reference");
    function m(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === a || $ || E === i || E === u || E === d || R || E === g || w || x || k || typeof E == "object" && E !== null && (E.$$typeof === h || E.$$typeof === p || E.$$typeof === s || E.$$typeof === l || E.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === M || E.getModuleId !== void 0));
    }
    function P(E, q, ae) {
      var j = E.displayName;
      if (j)
        return j;
      var L = q.displayName || q.name || "";
      return L !== "" ? ae + "(" + L + ")" : ae;
    }
    function I(E) {
      return E.displayName || "Context";
    }
    function D(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
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
      if (typeof E == "object")
        switch (E.$$typeof) {
          case l:
            var q = E;
            return I(q) + ".Consumer";
          case s:
            var ae = E;
            return I(ae._context) + ".Provider";
          case c:
            return P(E, E.render, "ForwardRef");
          case p:
            var j = E.displayName || null;
            return j !== null ? j : D(E.type) || "Memo";
          case h: {
            var L = E, J = L._payload, le = L._init;
            try {
              return D(le(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, N = 0, B, ee, Z, ne, U, G, ue;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function F() {
      {
        if (N === 0) {
          B = console.log, ee = console.info, Z = console.warn, ne = console.error, U = console.group, G = console.groupCollapsed, ue = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        N++;
      }
    }
    function W() {
      {
        if (N--, N === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, E, {
              value: B
            }),
            info: z({}, E, {
              value: ee
            }),
            warn: z({}, E, {
              value: Z
            }),
            error: z({}, E, {
              value: ne
            }),
            group: z({}, E, {
              value: U
            }),
            groupCollapsed: z({}, E, {
              value: G
            }),
            groupEnd: z({}, E, {
              value: ue
            })
          });
        }
        N < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = C.ReactCurrentDispatcher, _;
    function H(E, q, ae) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch (L) {
            var j = L.stack.trim().match(/\n( *(at )?)/);
            _ = j && j[1] || "";
          }
        return `
` + _ + E;
      }
    }
    var Q = !1, X;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      X = new ce();
    }
    function V(E, q) {
      if (!E || Q)
        return "";
      {
        var ae = X.get(E);
        if (ae !== void 0)
          return ae;
      }
      var j;
      Q = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = K.current, K.current = null, F();
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
            } catch (ut) {
              j = ut;
            }
            Reflect.construct(E, [], le);
          } else {
            try {
              le.call();
            } catch (ut) {
              j = ut;
            }
            E.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ut) {
            j = ut;
          }
          E();
        }
      } catch (ut) {
        if (ut && j && typeof ut.stack == "string") {
          for (var se = ut.stack.split(`
`), Oe = j.stack.split(`
`), Ce = se.length - 1, Ie = Oe.length - 1; Ce >= 1 && Ie >= 0 && se[Ce] !== Oe[Ie]; )
            Ie--;
          for (; Ce >= 1 && Ie >= 0; Ce--, Ie--)
            if (se[Ce] !== Oe[Ie]) {
              if (Ce !== 1 || Ie !== 1)
                do
                  if (Ce--, Ie--, Ie < 0 || se[Ce] !== Oe[Ie]) {
                    var yt = `
` + se[Ce].replace(" at new ", " at ");
                    return E.displayName && yt.includes("<anonymous>") && (yt = yt.replace("<anonymous>", E.displayName)), typeof E == "function" && X.set(E, yt), yt;
                  }
                while (Ce >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        Q = !1, K.current = J, W(), Error.prepareStackTrace = L;
      }
      var zn = E ? E.displayName || E.name : "", At = zn ? H(zn) : "";
      return typeof E == "function" && X.set(E, At), At;
    }
    function ve(E, q, ae) {
      return V(E, !1);
    }
    function A(E) {
      var q = E.prototype;
      return !!(q && q.isReactComponent);
    }
    function de(E, q, ae) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return V(E, A(E));
      if (typeof E == "string")
        return H(E);
      switch (E) {
        case u:
          return H("Suspense");
        case d:
          return H("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case c:
            return ve(E.render);
          case p:
            return de(E.type, q, ae);
          case h: {
            var j = E, L = j._payload, J = j._init;
            try {
              return de(J(L), q, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, $e = {}, be = C.ReactDebugCurrentFrame;
    function Te(E) {
      if (E) {
        var q = E._owner, ae = de(E.type, E._source, q ? q.type : null);
        be.setExtraStackFrame(ae);
      } else
        be.setExtraStackFrame(null);
    }
    function Fe(E, q, ae, j, L) {
      {
        var J = Function.call.bind(ie);
        for (var le in E)
          if (J(E, le)) {
            var se = void 0;
            try {
              if (typeof E[le] != "function") {
                var Oe = Error((j || "React class") + ": " + ae + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              se = E[le](q, le, j, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ce) {
              se = Ce;
            }
            se && !(se instanceof Error) && (Te(L), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", ae, le, typeof se), Te(null)), se instanceof Error && !(se.message in $e) && ($e[se.message] = !0, Te(L), T("Failed %s type: %s", ae, se.message), Te(null));
          }
      }
    }
    var Ee = Array.isArray;
    function We(E) {
      return Ee(E);
    }
    function fe(E) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, ae = q && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return ae;
      }
    }
    function _e(E) {
      try {
        return bt(E), !1;
      } catch {
        return !0;
      }
    }
    function bt(E) {
      return "" + E;
    }
    function xt(E) {
      if (_e(E))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fe(E)), bt(E);
    }
    var Qe = C.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, st, Pe;
    Pe = {};
    function ft(E) {
      if (ie.call(E, "ref")) {
        var q = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Dt(E) {
      if (ie.call(E, "key")) {
        var q = Object.getOwnPropertyDescriptor(E, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Pt(E, q) {
      if (typeof E.ref == "string" && Qe.current && q && Qe.current.stateNode !== q) {
        var ae = D(Qe.current.type);
        Pe[ae] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Qe.current.type), E.ref), Pe[ae] = !0);
      }
    }
    function he(E, q) {
      {
        var ae = function() {
          Re || (Re = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ae.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function xe(E, q) {
      {
        var ae = function() {
          st || (st = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ae.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var et = function(E, q, ae, j, L, J, le) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: q,
        ref: ae,
        props: le,
        // Record the component responsible for creating this element.
        _owner: J
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
        value: j
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function at(E, q, ae, j, L) {
      {
        var J, le = {}, se = null, Oe = null;
        ae !== void 0 && (xt(ae), se = "" + ae), Dt(q) && (xt(q.key), se = "" + q.key), ft(q) && (Oe = q.ref, Pt(q, L));
        for (J in q)
          ie.call(q, J) && !Je.hasOwnProperty(J) && (le[J] = q[J]);
        if (E && E.defaultProps) {
          var Ce = E.defaultProps;
          for (J in Ce)
            le[J] === void 0 && (le[J] = Ce[J]);
        }
        if (se || Oe) {
          var Ie = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          se && he(le, Ie), Oe && xe(le, Ie);
        }
        return et(E, se, Oe, L, j, Qe.current, le);
      }
    }
    var lt = C.ReactCurrentOwner, Ft = C.ReactDebugCurrentFrame;
    function Ot(E) {
      if (E) {
        var q = E._owner, ae = de(E.type, E._source, q ? q.type : null);
        Ft.setExtraStackFrame(ae);
      } else
        Ft.setExtraStackFrame(null);
    }
    var rn;
    rn = !1;
    function Ut(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function bn() {
      {
        if (lt.current) {
          var E = D(lt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Yt(E) {
      return "";
    }
    var Lt = {};
    function yn(E) {
      {
        var q = bn();
        if (!q) {
          var ae = typeof E == "string" ? E : E.displayName || E.name;
          ae && (q = `

Check the top-level render call using <` + ae + ">.");
        }
        return q;
      }
    }
    function qt(E, q) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var ae = yn(q);
        if (Lt[ae])
          return;
        Lt[ae] = !0;
        var j = "";
        E && E._owner && E._owner !== lt.current && (j = " It was passed a child from " + D(E._owner.type) + "."), Ot(E), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, j), Ot(null);
      }
    }
    function vn(E, q) {
      {
        if (typeof E != "object")
          return;
        if (We(E))
          for (var ae = 0; ae < E.length; ae++) {
            var j = E[ae];
            Ut(j) && qt(j, q);
          }
        else if (Ut(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var L = f(E);
          if (typeof L == "function" && L !== E.entries)
            for (var J = L.call(E), le; !(le = J.next()).done; )
              Ut(le.value) && qt(le.value, q);
        }
      }
    }
    function pt(E) {
      {
        var q = E.type;
        if (q == null || typeof q == "string")
          return;
        var ae;
        if (typeof q == "function")
          ae = q.propTypes;
        else if (typeof q == "object" && (q.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        q.$$typeof === p))
          ae = q.propTypes;
        else
          return;
        if (ae) {
          var j = D(q);
          Fe(ae, E.props, "prop", j, E);
        } else if (q.PropTypes !== void 0 && !rn) {
          rn = !0;
          var L = D(q);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function on(E) {
      {
        for (var q = Object.keys(E.props), ae = 0; ae < q.length; ae++) {
          var j = q[ae];
          if (j !== "children" && j !== "key") {
            Ot(E), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Ot(null);
            break;
          }
        }
        E.ref !== null && (Ot(E), T("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
      }
    }
    var It = {};
    function ge(E, q, ae, j, L, J) {
      {
        var le = m(E);
        if (!le) {
          var se = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = Yt();
          Oe ? se += Oe : se += bn();
          var Ce;
          E === null ? Ce = "null" : We(E) ? Ce = "array" : E !== void 0 && E.$$typeof === t ? (Ce = "<" + (D(E.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof E, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, se);
        }
        var Ie = at(E, q, ae, L, J);
        if (Ie == null)
          return Ie;
        if (le) {
          var yt = q.children;
          if (yt !== void 0)
            if (j)
              if (We(yt)) {
                for (var zn = 0; zn < yt.length; zn++)
                  vn(yt[zn], E);
                Object.freeze && Object.freeze(yt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vn(yt, E);
        }
        if (ie.call(q, "key")) {
          var At = D(E), ut = Object.keys(q).filter(function(Gn) {
            return Gn !== "key";
          }), sn = ut.length > 0 ? "{key: someKey, " + ut.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!It[At + sn]) {
            var qn = ut.length > 0 ? "{" + ut.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, sn, At, qn, At), It[At + sn] = !0;
          }
        }
        return E === r ? on(Ie) : pt(Ie), Ie;
      }
    }
    function an(E, q, ae) {
      return ge(E, q, ae, !0);
    }
    function Cn(E, q, ae) {
      return ge(E, q, ae, !1);
    }
    var nr = Cn, Sn = an;
    Ur.Fragment = r, Ur.jsx = nr, Ur.jsxs = Sn;
  }()), Ur;
}
process.env.NODE_ENV === "production" ? Fa.exports = zf() : Fa.exports = Wf();
var O = Fa.exports;
function Hc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Hc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ye() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Hc(e)) && (r && (r += " "), r += t);
  return r;
}
function dn(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function Vf(e) {
  e.stopPropagation();
}
function ei(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function ro(e) {
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
const Hf = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function li(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function Uf(e) {
  return li(e) && e.keyCode !== 86 ? !1 : !Hf.has(e.key);
}
function Yf({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const qf = "mlln6zg7-0-0-beta-47";
function Gf(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: i
  }) => /* @__PURE__ */ O.jsx("div", {
    className: qf,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: i
    },
    "data-measuring-cell-key": t
  }, t));
}
function Kf({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], i = n[e.rowIdx];
  return Uc(r, i);
}
function Uc(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Xf({
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
    return dn(s, a, {
      type: "HEADER"
    });
  if (t && r > i && r <= l + i)
    return dn(s, a, {
      type: "SUMMARY",
      row: t[r + l]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return dn(s, a, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return dn(s, a, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function Zf({
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
    idx: p,
    rowIdx: h
  },
  nextPosition: g,
  lastFrozenColumnIndex: y,
  isCellWithinBounds: b
}) {
  let {
    idx: f,
    rowIdx: C
  } = g;
  const T = r.length, v = (k) => {
    for (const R of i) {
      const $ = R.idx;
      if ($ > f) break;
      const M = Xf({
        rows: a,
        topSummaryRows: s,
        bottomSummaryRows: l,
        rowIdx: C,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: y,
        column: R
      });
      if (M && f > $ && f < M + $) {
        f = $ + (k ? M : 0);
        break;
      }
    }
  }, w = (k) => k.level + u, x = () => {
    if (t) {
      let R = r[f].parent;
      for (; R !== void 0; ) {
        const $ = w(R);
        if (C === $) {
          f = R.idx + R.colSpan;
          break;
        }
        R = R.parent;
      }
    } else if (e) {
      let R = r[f].parent, $ = !1;
      for (; R !== void 0; ) {
        const M = w(R);
        if (C >= M) {
          f = R.idx, C = M, $ = !0;
          break;
        }
        R = R.parent;
      }
      $ || (f = p, C = h);
    }
  };
  if (b(g) && (v(t), C < u && x()), n === "CHANGE_ROW" && (f === T ? C === d || (f = 0, C += 1) : f === -1 && (C === c || (C -= 1, f = T - 1), v(!1))), C < u) {
    let R = r[f].parent;
    const $ = C;
    for (C = u; R !== void 0; ) {
      const M = w(R);
      M >= $ && (C = M, f = R.idx), R = R.parent;
    }
  }
  return {
    idx: f,
    rowIdx: C
  };
}
function Qf({
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
const Jf = "cj343x07-0-0-beta-47", Yc = `rdg-cell ${Jf}`, ep = "csofj7r7-0-0-beta-47", tp = `rdg-cell-frozen ${ep}`;
function rs(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function qc(e, t, n) {
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
function ko(e, ...t) {
  return ye(Yc, ...t, e.frozen && tp);
}
const {
  min: po,
  max: ci,
  floor: Zs,
  sign: np,
  abs: rp
} = Math;
function oo(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Gc(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = ci(e, t), typeof n == "number" && n >= t ? po(e, n) : e;
}
function Kc(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const op = "c1bn88vv7-0-0-beta-47", ip = `rdg-checkbox-input ${op}`;
function ap({
  onChange: e,
  indeterminate: t,
  ...n
}) {
  function r(i) {
    e(i.target.checked, i.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ O.jsx("input", {
    ref: (i) => {
      i && (i.indeterminate = t === !0);
    },
    type: "checkbox",
    className: ip,
    onChange: r,
    ...n
  });
}
const sp = "g1s9ylgp7-0-0-beta-47", lp = `rdg-group-cell-content ${sp}`, cp = "cz54e4y7-0-0-beta-47", up = `rdg-caret ${cp}`;
function dp(e) {
  return /* @__PURE__ */ O.jsx(fp, {
    ...e
  });
}
function fp({
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
  return /* @__PURE__ */ O.jsxs("span", {
    className: lp,
    tabIndex: n,
    onKeyDown: i,
    children: [e, /* @__PURE__ */ O.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: up,
      "aria-hidden": !0,
      children: /* @__PURE__ */ O.jsx("path", {
        d: a
      })
    })]
  });
}
function pp(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Xc = /* @__PURE__ */ Po(void 0), mp = Xc.Provider;
function Ii() {
  return xn(Xc);
}
function os({
  value: e,
  tabIndex: t,
  indeterminate: n,
  disabled: r,
  onChange: i,
  "aria-label": a,
  "aria-labelledby": s
}) {
  const l = Ii().renderCheckbox;
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
const Zc = /* @__PURE__ */ Po(void 0), Qc = Zc.Provider, Jc = /* @__PURE__ */ Po(void 0), hp = Jc.Provider;
function eu() {
  const e = xn(Zc), t = xn(Jc);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const tu = /* @__PURE__ */ Po(void 0), gp = tu.Provider, nu = /* @__PURE__ */ Po(void 0), bp = nu.Provider;
function yp() {
  const e = xn(tu), t = xn(nu);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const kr = "rdg-select-column";
function vp(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = yp();
  return /* @__PURE__ */ O.jsx(os, {
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
function xp(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = eu();
  return /* @__PURE__ */ O.jsx(os, {
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
function wp(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = eu();
  return /* @__PURE__ */ O.jsx(os, {
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
const Cp = {
  key: kr,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ O.jsx(vp, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ O.jsx(xp, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ O.jsx(wp, {
      ...e
    });
  }
}, Sp = "auto", Tp = 50;
function Ep({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: i,
  enableVirtualization: a
}) {
  const s = (t == null ? void 0 : t.width) ?? Sp, l = (t == null ? void 0 : t.minWidth) ?? Tp, c = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? pp, d = (t == null ? void 0 : t.sortable) ?? !1, p = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: g,
    colSpanColumns: y,
    lastFrozenColumnIndex: b,
    headerRowsCount: f
  } = it(() => {
    let R = -1, $ = 1;
    const M = [];
    m(e, 1);
    function m(I, D, z) {
      for (const N of I) {
        if ("children" in N) {
          const Z = {
            name: N.name,
            parent: z,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: N.headerCellClass
          };
          m(N.children, D + 1, Z);
          continue;
        }
        const B = N.frozen ?? !1, ee = {
          ...N,
          parent: z,
          idx: 0,
          level: 0,
          frozen: B,
          width: N.width ?? s,
          minWidth: N.minWidth ?? l,
          maxWidth: N.maxWidth ?? c,
          sortable: N.sortable ?? d,
          resizable: N.resizable ?? p,
          draggable: N.draggable ?? h,
          renderCell: N.renderCell ?? u
        };
        M.push(ee), B && R++, D > $ && ($ = D);
      }
    }
    M.sort(({
      key: I,
      frozen: D
    }, {
      key: z,
      frozen: N
    }) => I === kr ? -1 : z === kr ? 1 : D ? N ? 0 : -1 : N ? 1 : 0);
    const P = [];
    return M.forEach((I, D) => {
      I.idx = D, ru(I, D, 0), I.colSpan != null && P.push(I);
    }), {
      columns: M,
      colSpanColumns: P,
      lastFrozenColumnIndex: R,
      headerRowsCount: $
    };
  }, [e, s, l, c, u, p, d, h]), {
    templateColumns: C,
    layoutCssVars: T,
    totalFrozenColumnWidth: v,
    columnMetrics: w
  } = it(() => {
    const R = /* @__PURE__ */ new Map();
    let $ = 0, M = 0;
    const m = [];
    for (const I of g) {
      let D = n(I);
      typeof D == "number" ? D = Gc(D, I) : D = I.minWidth, m.push(`${D}px`), R.set(I, {
        width: D,
        left: $
      }), $ += D;
    }
    if (b !== -1) {
      const I = R.get(g[b]);
      M = I.left + I.width;
    }
    const P = {};
    for (let I = 0; I <= b; I++) {
      const D = g[I];
      P[`--rdg-frozen-left-${D.idx}`] = `${R.get(D).left}px`;
    }
    return {
      templateColumns: m,
      layoutCssVars: P,
      totalFrozenColumnWidth: M,
      columnMetrics: R
    };
  }, [n, g, b]), [x, k] = it(() => {
    if (!a)
      return [0, g.length - 1];
    const R = i + v, $ = i + r, M = g.length - 1, m = po(b + 1, M);
    if (R >= $)
      return [m, m];
    let P = m;
    for (; P < M; ) {
      const {
        left: N,
        width: B
      } = w.get(g[P]);
      if (N + B > R)
        break;
      P++;
    }
    let I = P;
    for (; I < M; ) {
      const {
        left: N,
        width: B
      } = w.get(g[I]);
      if (N + B >= $)
        break;
      I++;
    }
    const D = ci(m, P - 1), z = po(M, I + 1);
    return [D, z];
  }, [w, g, b, i, v, r, a]);
  return {
    columns: g,
    colSpanColumns: y,
    colOverscanStartIdx: x,
    colOverscanEndIdx: k,
    templateColumns: C,
    layoutCssVars: T,
    headerRowsCount: f,
    lastFrozenColumnIndex: b,
    totalFrozenColumnWidth: v
  };
}
function ru(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, ru(r, t, n - 1);
  }
}
const Ir = typeof window > "u" ? Fr : Af;
function Op(e, t, n, r, i, a, s, l, c, u) {
  const d = kn(i), p = e.length === t.length, h = p && i !== d.current, g = [...n], y = [];
  for (const {
    key: T,
    idx: v,
    width: w
  } of t)
    typeof w == "string" && (h || !s.has(T)) && !a.has(T) && (g[v] = w, y.push(T));
  const b = g.join(" ");
  Ir(() => {
    d.current = i, f(y);
  });
  function f(T) {
    T.length !== 0 && c((v) => {
      const w = new Map(v);
      let x = !1;
      for (const k of T) {
        const R = Qs(r, k);
        x || (x = R !== v.get(k)), R === void 0 ? w.delete(k) : w.set(k, R);
      }
      return x ? w : v;
    });
  }
  function C(T, v) {
    const {
      key: w
    } = T, x = [...n], k = [];
    for (const {
      key: $,
      idx: M,
      width: m
    } of t)
      if (w === $) {
        const P = typeof v == "number" ? `${v}px` : v;
        x[M] = P;
      } else p && typeof m == "string" && !a.has($) && (x[M] = m, k.push($));
    r.current.style.gridTemplateColumns = x.join(" ");
    const R = typeof v == "number" ? v : Qs(r, w);
    si(() => {
      l(($) => {
        const M = new Map($);
        return M.set(w, R), M;
      }), f(k);
    }), u == null || u(T.idx, R);
  }
  return {
    gridTemplateColumns: b,
    handleColumnResize: C
  };
}
function Qs(e, t) {
  var i;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (i = e.current) == null ? void 0 : i.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Rp() {
  const e = kn(null), [t, n] = Rt(1), [r, i] = Rt(1), [a, s] = Rt(0);
  return Ir(() => {
    const {
      ResizeObserver: l
    } = window;
    if (l == null) return;
    const {
      clientWidth: c,
      clientHeight: u,
      offsetWidth: d,
      offsetHeight: p
    } = e.current, {
      width: h,
      height: g
    } = e.current.getBoundingClientRect(), y = p - u, b = h - d + c, f = g - y;
    n(b), i(f), s(y);
    const C = new l((T) => {
      const v = T[0].contentBoxSize[0], {
        clientHeight: w,
        offsetHeight: x
      } = e.current;
      si(() => {
        n(v.inlineSize), i(v.blockSize), s(x - w);
      });
    });
    return C.observe(e.current), () => {
      C.disconnect();
    };
  }, []), [e, t, r, a];
}
function Bt(e) {
  const t = kn(e);
  Fr(() => {
    t.current = e;
  });
  const n = Mt((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function Io(e) {
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
function Pp({
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
  const d = it(() => {
    if (a === 0) return 0;
    let p = a;
    const h = (g, y) => y !== void 0 && g + y > a ? (p = g, !0) : !1;
    for (const g of t) {
      const y = g.idx;
      if (y >= p || h(y, dn(g, l, {
        type: "HEADER"
      })))
        break;
      for (let b = c; b <= u; b++) {
        const f = n[b];
        if (h(y, dn(g, l, {
          type: "ROW",
          row: f
        })))
          break;
      }
      if (r != null) {
        for (const b of r)
          if (h(y, dn(g, l, {
            type: "SUMMARY",
            row: b
          })))
            break;
      }
      if (i != null) {
        for (const b of i)
          if (h(y, dn(g, l, {
            type: "SUMMARY",
            row: b
          })))
            break;
      }
    }
    return p;
  }, [c, u, n, r, i, a, l, t]);
  return it(() => {
    const p = [];
    for (let h = 0; h <= s; h++) {
      const g = e[h];
      h < d && !g.frozen || p.push(g);
    }
    return p;
  }, [d, s, e]);
}
function kp({
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
  } = it(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (f) => f * t,
        getRowHeight: () => t,
        findRowIdx: (f) => Zs(f / t)
      };
    let h = 0, g = " ";
    const y = e.map((f) => {
      const C = t(f), T = {
        top: h,
        height: C
      };
      return g += `${C}px `, h += C, T;
    }), b = (f) => ci(0, po(e.length - 1, f));
    return {
      totalRowHeight: h,
      gridTemplateRows: g,
      getRowTop: (f) => y[b(f)].top,
      getRowHeight: (f) => y[b(f)].height,
      findRowIdx(f) {
        let C = 0, T = y.length - 1;
        for (; C <= T; ) {
          const v = C + Zs((T - C) / 2), w = y[v].top;
          if (w === f) return v;
          if (w < f ? C = v + 1 : w > f && (T = v - 1), C > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let d = 0, p = e.length - 1;
  if (i) {
    const g = u(r), y = u(r + n);
    d = ci(0, g - 4), p = po(e.length - 1, y + 4);
  }
  return {
    rowOverscanStartIdx: d,
    rowOverscanEndIdx: p,
    totalRowHeight: a,
    gridTemplateRows: s,
    getRowTop: l,
    getRowHeight: c,
    findRowIdx: u
  };
}
const Ip = "c1w9bbhr7-0-0-beta-47", $p = "c1creorc7-0-0-beta-47", Mp = `rdg-cell-drag-handle ${Ip}`;
function Np({
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
  onClick: p,
  setDragging: h,
  setDraggedOverRowIdx: g
}) {
  const {
    idx: y,
    rowIdx: b
  } = s;
  function f(x) {
    if (x.preventDefault(), x.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", k), window.addEventListener("mouseup", R);
    function k($) {
      $.buttons !== 1 && R();
    }
    function R() {
      window.removeEventListener("mouseover", k), window.removeEventListener("mouseup", R), h(!1), C();
    }
  }
  function C() {
    const x = l.current;
    if (x === void 0) return;
    const k = b < x ? b + 1 : x, R = b < x ? x + 1 : b;
    v(k, R), g(void 0);
  }
  function T(x) {
    x.stopPropagation(), v(b + 1, t.length);
  }
  function v(x, k) {
    const R = t[b], $ = [...t], M = [];
    for (let m = x; m < k; m++)
      if (c({
        rowIdx: m,
        idx: y
      })) {
        const P = d({
          columnKey: n.key,
          sourceRow: R,
          targetRow: t[m]
        });
        P !== t[m] && ($[m] = P, M.push(m));
      }
    M.length > 0 && (u == null || u($, {
      indexes: M,
      column: n
    }));
  }
  function w() {
    var m;
    const x = ((m = n.colSpan) == null ? void 0 : m.call(n, {
      type: "ROW",
      row: t[b]
    })) ?? 1, {
      insetInlineStart: k,
      ...R
    } = Lr(n, x), $ = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", M = n.idx + x - 1 === i;
    return {
      ...R,
      gridRowStart: e,
      marginInlineEnd: M ? void 0 : $,
      marginBlockEnd: a ? void 0 : $,
      insetInlineStart: k ? `calc(${k} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ O.jsx("div", {
    style: w(),
    className: ye(Mp, n.frozen && $p),
    onClick: p,
    onMouseDown: f,
    onDoubleClick: T
  });
}
const Dp = "cis5rrm7-0-0-beta-47";
function Ap({
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
  const c = kn(void 0), u = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, d = Bt(() => {
    g(!0, !1);
  });
  Fr(() => {
    if (!u) return;
    function w() {
      c.current = requestAnimationFrame(d);
    }
    return addEventListener("mousedown", w, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", w, {
        capture: !0
      }), p();
    };
  }, [u, d]);
  function p() {
    cancelAnimationFrame(c.current);
  }
  function h(w) {
    if (s) {
      const x = ro(w);
      if (s({
        mode: "EDIT",
        row: n,
        column: e,
        rowIdx: r,
        navigate() {
          l(w);
        },
        onClose: g
      }, x), x.isGridDefaultPrevented()) return;
    }
    w.key === "Escape" ? g() : w.key === "Enter" ? g(!0) : Yf(w) && l(w);
  }
  function g(w = !1, x = !0) {
    w ? i(n, !0, x) : a(x);
  }
  function y(w, x = !1) {
    i(w, x, x);
  }
  const {
    cellClass: b
  } = e, f = ko(e, "rdg-editor-container", typeof b == "function" ? b(n) : b, !((T = e.editorOptions) != null && T.displayCellContent) && Dp);
  return /* @__PURE__ */ O.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: f,
    style: Lr(e, t),
    onKeyDown: h,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ O.jsxs(O.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: n,
        rowIdx: r,
        onRowChange: y,
        onClose: g
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
function jp({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: i,
    onFocus: a
  } = Io(n), {
    colSpan: s
  } = e, l = Kc(e, t), c = e.idx + 1;
  function u() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ O.jsx("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": s,
    "aria-rowspan": l,
    "aria-selected": n,
    tabIndex: i,
    className: ye(Yc, e.headerCellClass),
    style: {
      ...qc(e, t, l),
      gridColumnStart: c,
      gridColumnEnd: c + s
    },
    onFocus: a,
    onClick: u,
    children: e.name
  });
}
const Fp = "h44jtk67-0-0-beta-47", Lp = "hcgkhxz7-0-0-beta-47", _p = `rdg-header-sort-name ${Lp}`;
function ou({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ O.jsx(Bp, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Bp({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = Ii().renderSortStatus;
  return /* @__PURE__ */ O.jsxs("span", {
    className: Fp,
    children: [/* @__PURE__ */ O.jsx("span", {
      className: _p,
      children: n
    }), /* @__PURE__ */ O.jsx("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const zp = "c6l2wv17-0-0-beta-47", Wp = "c1kqdw7y7-0-0-beta-47", Vp = `rdg-cell-resizable ${Wp}`, Hp = "r1y6ywlx7-0-0-beta-47", Up = "rdg-cell-draggable", Yp = "c1bezg5o7-0-0-beta-47", qp = `rdg-cell-dragging ${Yp}`, Gp = "c1vc96037-0-0-beta-47", Kp = `rdg-cell-drag-over ${Gp}`;
function Xp({
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
  dragDropKey: p
}) {
  const [h, g] = Rt(!1), [y, b] = Rt(!1), f = d === "rtl", C = Kc(e, n), {
    tabIndex: T,
    childTabIndex: v,
    onFocus: w
  } = Io(r), x = s == null ? void 0 : s.findIndex((_) => _.columnKey === e.key), k = x !== void 0 && x > -1 ? s[x] : void 0, R = k == null ? void 0 : k.direction, $ = k !== void 0 && s.length > 1 ? x + 1 : void 0, M = R && !$ ? R === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: m,
    resizable: P,
    draggable: I
  } = e, D = ko(e, e.headerCellClass, m && zp, P && Vp, I && Up, h && qp, y && Kp), z = e.renderHeaderCell ?? ou;
  function N(_) {
    if (_.pointerType === "mouse" && _.buttons !== 1)
      return;
    _.preventDefault();
    const {
      currentTarget: H,
      pointerId: Q
    } = _, X = H.parentElement, {
      right: ce,
      left: V
    } = X.getBoundingClientRect(), ve = f ? _.clientX - V : ce - _.clientX;
    let A = !1;
    function de(be) {
      const {
        width: Te,
        right: Fe,
        left: Ee
      } = X.getBoundingClientRect();
      let We = f ? Fe + ve - be.clientX : be.clientX + ve - Ee;
      We = Gc(We, e), Te > 0 && We !== Te && i(e, We);
    }
    function ie() {
      A = !0, i(e, "max-content");
    }
    function $e(be) {
      A || de(be), H.removeEventListener("pointermove", de), H.removeEventListener("dblclick", ie), H.removeEventListener("lostpointercapture", $e);
    }
    H.setPointerCapture(Q), H.addEventListener("pointermove", de), H.addEventListener("dblclick", ie), H.addEventListener("lostpointercapture", $e);
  }
  function B(_) {
    if (l == null) return;
    const {
      sortDescendingFirst: H
    } = e;
    if (k === void 0) {
      const Q = {
        columnKey: e.key,
        direction: H ? "DESC" : "ASC"
      };
      l(s && _ ? [...s, Q] : [Q]);
    } else {
      let Q;
      if ((H === !0 && R === "DESC" || H !== !0 && R === "ASC") && (Q = {
        columnKey: e.key,
        direction: R === "ASC" ? "DESC" : "ASC"
      }), _) {
        const X = [...s];
        Q ? X[x] = Q : X.splice(x, 1), l(X);
      } else
        l(Q ? [Q] : []);
    }
  }
  function ee(_) {
    c({
      idx: e.idx,
      rowIdx: n
    }), m && B(_.ctrlKey || _.metaKey);
  }
  function Z(_) {
    w == null || w(_), u && c({
      idx: 0,
      rowIdx: n
    });
  }
  function ne(_) {
    (_.key === " " || _.key === "Enter") && (_.preventDefault(), B(_.ctrlKey || _.metaKey));
  }
  function U(_) {
    _.dataTransfer.setData(p, e.key), _.dataTransfer.dropEffect = "move", g(!0);
  }
  function G() {
    g(!1);
  }
  function ue(_) {
    _.preventDefault(), _.dataTransfer.dropEffect = "move";
  }
  function re(_) {
    if (b(!1), _.dataTransfer.types.includes(p.toLowerCase())) {
      const H = _.dataTransfer.getData(p.toLowerCase());
      H !== e.key && (_.preventDefault(), a == null || a(H, e.key));
    }
  }
  function F(_) {
    Js(_) && b(!0);
  }
  function W(_) {
    Js(_) && b(!1);
  }
  let K;
  return I && (K = {
    draggable: !0,
    onDragStart: U,
    onDragEnd: G,
    onDragOver: ue,
    onDragEnter: F,
    onDragLeave: W,
    onDrop: re
  }), /* @__PURE__ */ O.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": C,
    "aria-selected": r,
    "aria-sort": M,
    tabIndex: u ? 0 : T,
    className: D,
    style: {
      ...qc(e, n, C),
      ...Lr(e, t)
    },
    onFocus: Z,
    onClick: ee,
    onKeyDown: m ? ne : void 0,
    ...K,
    children: [z({
      column: e,
      sortDirection: R,
      priority: $,
      tabIndex: v
    }), P && /* @__PURE__ */ O.jsx("div", {
      className: Hp,
      onClick: Vf,
      onPointerDown: N
    })]
  });
}
function Js(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const Zp = "r1upfr807-0-0-beta-47", is = `rdg-row ${Zp}`, Qp = "r190mhd37-0-0-beta-47", $i = "rdg-row-selected", Jp = "r139qu9m7-0-0-beta-47", em = "rdg-top-summary-row", tm = "rdg-bottom-summary-row", nm = "h10tskcx7-0-0-beta-47", iu = `rdg-header-row ${nm}`;
function rm({
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
  const p = jf(), h = [];
  for (let g = 0; g < t.length; g++) {
    const y = t[g], b = dn(y, s, {
      type: "HEADER"
    });
    b !== void 0 && (g += b - 1), h.push(/* @__PURE__ */ O.jsx(Xp, {
      column: y,
      colSpan: b,
      rowIdx: e,
      isCellSelected: l === y.idx,
      onColumnResize: n,
      onColumnsReorder: r,
      onSortColumnsChange: a,
      sortColumns: i,
      selectCell: c,
      shouldFocusGrid: u && g === 0,
      direction: d,
      dragDropKey: p
    }, y.key));
  }
  return /* @__PURE__ */ O.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: ye(iu, l === -1 && $i),
    children: h
  });
}
const om = /* @__PURE__ */ Jn(rm);
function im({
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
        a.push(/* @__PURE__ */ O.jsx(jp, {
          column: c,
          rowIdx: e,
          isCellSelected: r === u,
          selectCell: i
        }, u));
      }
    }
  }
  return /* @__PURE__ */ O.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: iu,
    children: a
  });
}
const am = /* @__PURE__ */ Jn(im), sm = "c6ra8a37-0-0-beta-47", lm = `rdg-cell-copied ${sm}`, cm = "cq910m07-0-0-beta-47", um = `rdg-cell-dragged-over ${cm}`;
function dm({
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
  selectCell: p,
  ...h
}) {
  const {
    tabIndex: g,
    childTabIndex: y,
    onFocus: b
  } = Io(n), {
    cellClass: f
  } = e, C = ko(e, typeof f == "function" ? f(a) : f, r && lm, i && um), T = Uc(e, a);
  function v($) {
    p({
      rowIdx: s,
      idx: e.idx
    }, $);
  }
  function w($) {
    if (l) {
      const M = ro($);
      if (l({
        row: a,
        column: e,
        selectCell: v
      }, M), M.isGridDefaultPrevented()) return;
    }
    v();
  }
  function x($) {
    if (u) {
      const M = ro($);
      if (u({
        row: a,
        column: e,
        selectCell: v
      }, M), M.isGridDefaultPrevented()) return;
    }
    v();
  }
  function k($) {
    if (c) {
      const M = ro($);
      if (c({
        row: a,
        column: e,
        selectCell: v
      }, M), M.isGridDefaultPrevented()) return;
    }
    v(!0);
  }
  function R($) {
    d(e, $);
  }
  return /* @__PURE__ */ O.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !T || void 0,
    tabIndex: g,
    className: C,
    style: Lr(e, t),
    onClick: w,
    onDoubleClick: k,
    onContextMenu: x,
    onFocus: b,
    ...h,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: s,
      isCellEditable: T,
      tabIndex: y,
      onRowChange: R
    })
  });
}
const fm = /* @__PURE__ */ Jn(dm);
function pm({
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
  selectedCellEditor: p,
  onCellClick: h,
  onCellDoubleClick: g,
  onCellContextMenu: y,
  rowClass: b,
  setDraggedOverRowIdx: f,
  onMouseEnter: C,
  onRowChange: T,
  selectCell: v,
  ...w
}, x) {
  const k = Bt((m, P) => {
    T(m, t, P);
  });
  function R(m) {
    f == null || f(t), C == null || C(m);
  }
  e = ye(is, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, b == null ? void 0 : b(u, t), e, r === -1 && $i);
  const $ = [];
  for (let m = 0; m < d.length; m++) {
    const P = d[m], {
      idx: I
    } = P, D = dn(P, c, {
      type: "ROW",
      row: u
    });
    D !== void 0 && (m += D - 1);
    const z = r === I;
    z && p ? $.push(p) : $.push(/* @__PURE__ */ O.jsx(fm, {
      column: P,
      colSpan: D,
      row: u,
      rowIdx: t,
      isCopied: s === I,
      isDraggedOver: l === I,
      isCellSelected: z,
      onClick: h,
      onDoubleClick: g,
      onContextMenu: y,
      onRowChange: k,
      selectCell: v
    }, P.key));
  }
  const M = it(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: i
  }), [i, a]);
  return /* @__PURE__ */ O.jsx(Qc, {
    value: M,
    children: /* @__PURE__ */ O.jsx("div", {
      role: "row",
      ref: x,
      className: e,
      onMouseEnter: R,
      style: rs(n),
      ...w,
      children: $
    })
  });
}
const au = /* @__PURE__ */ Jn(/* @__PURE__ */ ki(pm)), xS = au;
function su(e, t) {
  return /* @__PURE__ */ O.jsx(au, {
    ...t
  }, e);
}
function mm({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const i = kn(null);
  return Ir(() => {
    ei(i.current);
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
  }, [n, r]), /* @__PURE__ */ O.jsx("div", {
    ref: i,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const hm = "a3ejtar7-0-0-beta-47", gm = `rdg-sort-arrow ${hm}`;
function bm({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ O.jsxs(O.Fragment, {
    children: [ym({
      sortDirection: e
    }), vm({
      priority: t
    })]
  });
}
function ym({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ O.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: gm,
    "aria-hidden": !0,
    children: /* @__PURE__ */ O.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function vm({
  priority: e
}) {
  return e;
}
const xm = "rnvodz57-0-0-beta-47", wm = `rdg ${xm}`, Cm = "vlqv91k7-0-0-beta-47", Sm = `rdg-viewport-dragging ${Cm}`, Tm = "f1lsfrzw7-0-0-beta-47", Em = "f1cte0lg7-0-0-beta-47", Om = "s8wc6fl7-0-0-beta-47";
function Rm({
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
  } = Io(i), {
    summaryCellClass: u
  } = e, d = ko(e, Om, typeof u == "function" ? u(n) : u);
  function p() {
    a({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ O.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": i,
    tabIndex: s,
    className: d,
    style: Lr(e, t),
    onClick: p,
    onFocus: c,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: n,
      tabIndex: l
    })
  });
}
const Pm = /* @__PURE__ */ Jn(Rm), km = "skuhp557-0-0-beta-47", Im = "tf8l5ub7-0-0-beta-47", $m = `rdg-summary-row ${km}`;
function Mm({
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
  const p = [];
  for (let h = 0; h < r.length; h++) {
    const g = r[h], y = dn(g, s, {
      type: "SUMMARY",
      row: n
    });
    y !== void 0 && (h += y - 1);
    const b = l === g.idx;
    p.push(/* @__PURE__ */ O.jsx(Pm, {
      column: g,
      colSpan: y,
      row: n,
      rowIdx: e,
      isCellSelected: b,
      selectCell: u
    }, g.key));
  }
  return /* @__PURE__ */ O.jsx("div", {
    role: "row",
    "aria-rowindex": d,
    className: ye(is, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, $m, c ? `${em} ${Im}` : tm, l === -1 && $i),
    style: {
      ...rs(t),
      "--rdg-summary-row-top": i !== void 0 ? `${i}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: p
  });
}
const el = /* @__PURE__ */ Jn(Mm);
function Nm(e, t) {
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
    selectedRows: p,
    isRowSelectionDisabled: h,
    onSelectedRowsChange: g,
    sortColumns: y,
    onSortColumnsChange: b,
    defaultColumnOptions: f,
    onCellClick: C,
    onCellDoubleClick: T,
    onCellContextMenu: v,
    onCellKeyDown: w,
    onSelectedCellChange: x,
    onScroll: k,
    onColumnResize: R,
    onColumnsReorder: $,
    onFill: M,
    onCopy: m,
    onPaste: P,
    enableVirtualization: I,
    renderers: D,
    className: z,
    style: N,
    rowClass: B,
    direction: ee,
    role: Z,
    "aria-label": ne,
    "aria-labelledby": U,
    "aria-describedby": G,
    "aria-rowcount": ue,
    "data-testid": re
  } = e, F = Ii(), W = Z ?? "grid", K = c ?? 35, _ = u ?? (typeof K == "number" ? K : 35), H = d ?? (typeof K == "number" ? K : 35), Q = (D == null ? void 0 : D.renderRow) ?? (F == null ? void 0 : F.renderRow) ?? su, X = (D == null ? void 0 : D.renderSortStatus) ?? (F == null ? void 0 : F.renderSortStatus) ?? bm, ce = (D == null ? void 0 : D.renderCheckbox) ?? (F == null ? void 0 : F.renderCheckbox) ?? ap, V = (D == null ? void 0 : D.noRowsFallback) ?? (F == null ? void 0 : F.noRowsFallback), ve = I ?? !0, A = ee ?? "ltr", [de, ie] = Rt(0), [$e, be] = Rt(0), [Te, Fe] = Rt(() => /* @__PURE__ */ new Map()), [Ee, We] = Rt(() => /* @__PURE__ */ new Map()), [fe, _e] = Rt(null), [bt, xt] = Rt(!1), [Qe, Je] = Rt(void 0), [Re, st] = Rt(null), Pe = Mt((te) => Te.get(te.key) ?? Ee.get(te.key) ?? te.width, [Ee, Te]), [ft, Dt, Pt, he] = Rp(), {
    columns: xe,
    colSpanColumns: et,
    lastFrozenColumnIndex: at,
    headerRowsCount: lt,
    colOverscanStartIdx: Ft,
    colOverscanEndIdx: Ot,
    templateColumns: rn,
    layoutCssVars: Ut,
    totalFrozenColumnWidth: bn
  } = Ep({
    rawColumns: n,
    defaultColumnOptions: f,
    getColumnWidth: Pe,
    scrollLeft: $e,
    viewportWidth: Dt,
    enableVirtualization: ve
  }), Yt = (i == null ? void 0 : i.length) ?? 0, Lt = (a == null ? void 0 : a.length) ?? 0, yn = Yt + Lt, qt = lt + Yt, vn = lt - 1, pt = -qt, on = pt + vn, It = r.length + Lt - 1, [ge, an] = Rt(() => ({
    idx: -1,
    rowIdx: pt - 1,
    mode: "SELECT"
  })), Cn = kn(ge), nr = kn(Qe), Sn = kn(-1), E = kn(null), q = kn(!1), ae = W === "treegrid", j = lt * _, L = yn * H, J = Pt - j - L, le = p != null && g != null, se = A === "rtl", Oe = se ? "ArrowRight" : "ArrowLeft", Ce = se ? "ArrowLeft" : "ArrowRight", Ie = ue ?? lt + r.length + yn, yt = it(() => ({
    renderCheckbox: ce,
    renderSortStatus: X
  }), [ce, X]), zn = it(() => {
    let te = !1, oe = !1;
    if (s != null && p != null && p.size > 0) {
      for (const we of r)
        if (p.has(s(we)) ? te = !0 : oe = !0, te && oe) break;
    }
    return {
      isRowSelected: te && !oe,
      isIndeterminate: te && oe
    };
  }, [r, p, s]), {
    rowOverscanStartIdx: At,
    rowOverscanEndIdx: ut,
    totalRowHeight: sn,
    gridTemplateRows: qn,
    getRowTop: Gn,
    getRowHeight: pr,
    findRowIdx: Ne
  } = kp({
    rows: r,
    rowHeight: K,
    clientHeight: J,
    scrollTop: de,
    enableVirtualization: ve
  }), Tt = Pp({
    columns: xe,
    colSpanColumns: et,
    colOverscanStartIdx: Ft,
    colOverscanEndIdx: Ot,
    lastFrozenColumnIndex: at,
    rowOverscanStartIdx: At,
    rowOverscanEndIdx: ut,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: Tn,
    handleColumnResize: rr
  } = Op(xe, Tt, rn, ft, Dt, Te, Ee, Fe, We, R), ia = ae ? -1 : 0, mr = xe.length - 1, aa = ca(ge), zo = Us(ge), lf = _ + sn + L + he, cf = Bt(rr), uf = Bt($), df = Bt(b), ff = Bt(C), pf = Bt(T), mf = Bt(v), hf = Bt(yf), gf = Bt(Ws), bf = Bt(Wo), sa = Bt(zr), zs = Bt(({
    idx: te,
    rowIdx: oe
  }) => {
    zr({
      rowIdx: pt + oe - 1,
      idx: te
    });
  });
  Ir(() => {
    if (!aa || fa(ge, Cn.current)) {
      Cn.current = ge;
      return;
    }
    Cn.current = ge, ge.idx === -1 && (E.current.focus({
      preventScroll: !0
    }), ei(E.current));
  }), Ir(() => {
    q.current && (q.current = !1, qs());
  }), Df(t, () => ({
    element: ft.current,
    scrollToCell({
      idx: te,
      rowIdx: oe
    }) {
      const we = te !== void 0 && te > at && te < xe.length ? te : void 0, Se = oe !== void 0 && hr(oe) ? oe : void 0;
      (we !== void 0 || Se !== void 0) && st({
        idx: we,
        rowIdx: Se
      });
    },
    selectCell: zr
  }));
  const la = Mt((te) => {
    Je(te), nr.current = te;
  }, []);
  function yf(te) {
    if (!g) return;
    oo(s);
    const oe = new Set(p);
    for (const we of r) {
      if ((h == null ? void 0 : h(we)) === !0) continue;
      const Se = s(we);
      te.checked ? oe.add(Se) : oe.delete(Se);
    }
    g(oe);
  }
  function Ws(te) {
    if (!g) return;
    oo(s);
    const {
      row: oe,
      checked: we,
      isShiftClick: Se
    } = te;
    if ((h == null ? void 0 : h(oe)) === !0) return;
    const Ae = new Set(p), tt = s(oe), dt = Sn.current, mt = r.indexOf(oe);
    if (Sn.current = mt, we ? Ae.add(tt) : Ae.delete(tt), Se && dt !== -1 && dt !== mt && dt < r.length) {
      const Gt = np(mt - dt);
      for (let _t = dt + Gt; _t !== mt; _t += Gt) {
        const En = r[_t];
        (h == null ? void 0 : h(En)) !== !0 && (we ? Ae.add(s(En)) : Ae.delete(s(En)));
      }
    }
    g(Ae);
  }
  function vf(te) {
    var mt;
    const {
      idx: oe,
      rowIdx: we,
      mode: Se
    } = ge;
    if (Se === "EDIT") return;
    if (w && hr(we)) {
      const Gt = r[we], _t = ro(te);
      if (w({
        mode: "SELECT",
        row: Gt,
        column: xe[oe],
        rowIdx: we,
        selectCell: zr
      }, _t), _t.isGridDefaultPrevented()) return;
    }
    if (!(te.target instanceof Element)) return;
    const Ae = te.target.closest(".rdg-cell") !== null, tt = ae && te.target === E.current;
    if (!Ae && !tt) return;
    const {
      keyCode: dt
    } = te;
    if (zo && (P != null || m != null) && li(te)) {
      if (dt === 67) {
        if (((mt = window.getSelection()) == null ? void 0 : mt.isCollapsed) === !1) return;
        wf();
        return;
      }
      if (dt === 86) {
        Cf();
        return;
      }
    }
    switch (te.key) {
      case "Escape":
        _e(null);
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
        Ys(te);
        break;
      default:
        Sf(te);
        break;
    }
  }
  function xf(te) {
    const {
      scrollTop: oe,
      scrollLeft: we
    } = te.currentTarget;
    si(() => {
      ie(oe), be(rp(we));
    }), k == null || k(te);
  }
  function Wo(te, oe, we) {
    if (typeof l != "function" || we === r[oe]) return;
    const Se = [...r];
    Se[oe] = we, l(Se, {
      indexes: [oe],
      column: te
    });
  }
  function Vs() {
    ge.mode === "EDIT" && Wo(xe[ge.idx], ge.rowIdx, ge.row);
  }
  function wf() {
    const {
      idx: te,
      rowIdx: oe
    } = ge, we = r[oe], Se = xe[te].key;
    _e({
      row: we,
      columnKey: Se
    }), m == null || m({
      sourceRow: we,
      sourceColumnKey: Se
    });
  }
  function Cf() {
    if (!P || !l || fe === null || !Vo(ge))
      return;
    const {
      idx: te,
      rowIdx: oe
    } = ge, we = xe[te], Se = r[oe], Ae = P({
      sourceRow: fe.row,
      sourceColumnKey: fe.columnKey,
      targetRow: Se,
      targetColumnKey: we.key
    });
    Wo(we, oe, Ae);
  }
  function Sf(te) {
    if (!zo) return;
    const oe = r[ge.rowIdx], {
      key: we,
      shiftKey: Se
    } = te;
    if (le && Se && we === " ") {
      oo(s);
      const Ae = s(oe);
      Ws({
        row: oe,
        checked: !p.has(Ae),
        isShiftClick: !1
      }), te.preventDefault();
      return;
    }
    Vo(ge) && Uf(te) && an(({
      idx: Ae,
      rowIdx: tt
    }) => ({
      idx: Ae,
      rowIdx: tt,
      mode: "EDIT",
      row: oe,
      originalRow: oe
    }));
  }
  function Hs(te) {
    return te >= ia && te <= mr;
  }
  function hr(te) {
    return te >= 0 && te < r.length;
  }
  function ca({
    idx: te,
    rowIdx: oe
  }) {
    return oe >= pt && oe <= It && Hs(te);
  }
  function Tf({
    idx: te,
    rowIdx: oe
  }) {
    return hr(oe) && te >= 0 && te <= mr;
  }
  function Us({
    idx: te,
    rowIdx: oe
  }) {
    return hr(oe) && Hs(te);
  }
  function Vo(te) {
    return Tf(te) && Kf({
      columns: xe,
      rows: r,
      selectedPosition: te
    });
  }
  function zr(te, oe) {
    if (!ca(te)) return;
    Vs();
    const we = r[te.rowIdx], Se = fa(ge, te);
    oe && Vo(te) ? an({
      ...te,
      mode: "EDIT",
      row: we,
      originalRow: we
    }) : Se ? ei(tl(ft.current)) : (q.current = !0, an({
      ...te,
      mode: "SELECT"
    })), x && !Se && x({
      rowIdx: te.rowIdx,
      row: we,
      column: xe[te.idx]
    });
  }
  function Ef(te, oe, we) {
    const {
      idx: Se,
      rowIdx: Ae
    } = ge, tt = aa && Se === -1;
    switch (te) {
      case "ArrowUp":
        return {
          idx: Se,
          rowIdx: Ae - 1
        };
      case "ArrowDown":
        return {
          idx: Se,
          rowIdx: Ae + 1
        };
      case Oe:
        return {
          idx: Se - 1,
          rowIdx: Ae
        };
      case Ce:
        return {
          idx: Se + 1,
          rowIdx: Ae
        };
      case "Tab":
        return {
          idx: Se + (we ? -1 : 1),
          rowIdx: Ae
        };
      case "Home":
        return tt ? {
          idx: Se,
          rowIdx: pt
        } : {
          idx: 0,
          rowIdx: oe ? pt : Ae
        };
      case "End":
        return tt ? {
          idx: Se,
          rowIdx: It
        } : {
          idx: mr,
          rowIdx: oe ? It : Ae
        };
      case "PageUp": {
        if (ge.rowIdx === pt) return ge;
        const dt = Gn(Ae) + pr(Ae) - J;
        return {
          idx: Se,
          rowIdx: dt > 0 ? Ne(dt) : 0
        };
      }
      case "PageDown": {
        if (ge.rowIdx >= r.length) return ge;
        const dt = Gn(Ae) + J;
        return {
          idx: Se,
          rowIdx: dt < sn ? Ne(dt) : r.length - 1
        };
      }
      default:
        return ge;
    }
  }
  function Ys(te) {
    const {
      key: oe,
      shiftKey: we
    } = te;
    let Se = "NONE";
    if (oe === "Tab") {
      if (Qf({
        shiftKey: we,
        maxColIdx: mr,
        minRowIdx: pt,
        maxRowIdx: It,
        selectedPosition: ge
      })) {
        Vs();
        return;
      }
      Se = "CHANGE_ROW";
    }
    te.preventDefault();
    const Ae = li(te), tt = Ef(oe, Ae, we);
    if (fa(ge, tt)) return;
    const dt = Zf({
      moveUp: oe === "ArrowUp",
      moveNext: oe === Ce || oe === "Tab" && !we,
      columns: xe,
      colSpanColumns: et,
      rows: r,
      topSummaryRows: i,
      bottomSummaryRows: a,
      minRowIdx: pt,
      mainHeaderRowIdx: on,
      maxRowIdx: It,
      lastFrozenColumnIndex: at,
      cellNavigationMode: Se,
      currentPosition: ge,
      nextPosition: tt,
      isCellWithinBounds: ca
    });
    zr(dt);
  }
  function Of(te) {
    if (Qe === void 0) return;
    const {
      rowIdx: oe
    } = ge;
    return (oe < Qe ? oe < te && te <= Qe : oe > te && te >= Qe) ? ge.idx : void 0;
  }
  function qs() {
    const te = tl(ft.current);
    if (te === null) return;
    ei(te), (te.querySelector('[tabindex="0"]') ?? te).focus({
      preventScroll: !0
    });
  }
  function Rf() {
    if (M == null || ge.mode === "EDIT" || !Us(ge))
      return;
    const {
      idx: te,
      rowIdx: oe
    } = ge, we = xe[te];
    if (we.renderEditCell == null || we.editable === !1)
      return;
    const Se = Pe(we);
    return /* @__PURE__ */ O.jsx(Np, {
      gridRowStart: qt + oe + 1,
      rows: r,
      column: we,
      columnWidth: Se,
      maxColIdx: mr,
      isLastRow: oe === It,
      selectedPosition: ge,
      isCellEditable: Vo,
      latestDraggedOverRowIdx: nr,
      onRowsChange: l,
      onClick: qs,
      onFill: M,
      setDragging: xt,
      setDraggedOverRowIdx: la
    });
  }
  function Pf(te) {
    if (ge.rowIdx !== te || ge.mode === "SELECT") return;
    const {
      idx: oe,
      row: we
    } = ge, Se = xe[oe], Ae = dn(Se, at, {
      type: "ROW",
      row: we
    }), tt = (mt) => {
      q.current = mt, an(({
        idx: Gt,
        rowIdx: _t
      }) => ({
        idx: Gt,
        rowIdx: _t,
        mode: "SELECT"
      }));
    }, dt = (mt, Gt, _t) => {
      Gt ? si(() => {
        Wo(Se, ge.rowIdx, mt), tt(_t);
      }) : an((En) => ({
        ...En,
        row: mt
      }));
    };
    return r[ge.rowIdx] !== ge.originalRow && tt(!1), /* @__PURE__ */ O.jsx(Ap, {
      column: Se,
      colSpan: Ae,
      row: we,
      rowIdx: te,
      onRowChange: dt,
      closeEditor: tt,
      onKeyDown: w,
      navigate: Ys
    }, Se.key);
  }
  function Wr(te) {
    const oe = ge.idx === -1 ? void 0 : xe[ge.idx];
    return oe !== void 0 && ge.rowIdx === te && !Tt.includes(oe) ? ge.idx > Ot ? [...Tt, oe] : [...Tt.slice(0, at + 1), oe, ...Tt.slice(at + 1)] : Tt;
  }
  function kf() {
    const te = [], {
      idx: oe,
      rowIdx: we
    } = ge, Se = zo && we < At ? At - 1 : At, Ae = zo && we > ut ? ut + 1 : ut;
    for (let tt = Se; tt <= Ae; tt++) {
      const dt = tt === At - 1 || tt === ut + 1, mt = dt ? we : tt;
      let Gt = Tt;
      const _t = oe === -1 ? void 0 : xe[oe];
      _t !== void 0 && (dt ? Gt = [_t] : Gt = Wr(mt));
      const En = r[mt], If = qt + mt + 1;
      let ua = mt, da = !1;
      typeof s == "function" && (ua = s(En), da = (p == null ? void 0 : p.has(ua)) ?? !1), te.push(Q(ua, {
        "aria-rowindex": qt + mt + 1,
        "aria-selected": le ? da : void 0,
        rowIdx: mt,
        row: En,
        viewportColumns: Gt,
        isRowSelectionDisabled: (h == null ? void 0 : h(En)) ?? !1,
        isRowSelected: da,
        onCellClick: ff,
        onCellDoubleClick: pf,
        onCellContextMenu: mf,
        rowClass: B,
        gridRowStart: If,
        copiedCellIdx: fe !== null && fe.row === En ? xe.findIndex(($f) => $f.key === fe.columnKey) : void 0,
        selectedCellIdx: we === mt ? oe : void 0,
        draggedOverCellIdx: Of(mt),
        setDraggedOverRowIdx: bt ? la : void 0,
        lastFrozenColumnIndex: at,
        onRowChange: bf,
        selectCell: sa,
        selectedCellEditor: Pf(mt)
      }));
    }
    return te;
  }
  (ge.idx > mr || ge.rowIdx > It) && (an({
    idx: -1,
    rowIdx: pt - 1,
    mode: "SELECT"
  }), la(void 0));
  let Ho = `repeat(${lt}, ${_}px)`;
  Yt > 0 && (Ho += ` repeat(${Yt}, ${H}px)`), r.length > 0 && (Ho += qn), Lt > 0 && (Ho += ` repeat(${Lt}, ${H}px)`);
  const Gs = ge.idx === -1 && ge.rowIdx !== pt - 1;
  return /* @__PURE__ */ O.jsxs("div", {
    role: W,
    "aria-label": ne,
    "aria-labelledby": U,
    "aria-describedby": G,
    "aria-multiselectable": le ? !0 : void 0,
    "aria-colcount": xe.length,
    "aria-rowcount": Ie,
    className: ye(wm, z, bt && Sm),
    style: {
      ...N,
      scrollPaddingInlineStart: ge.idx > at || (Re == null ? void 0 : Re.idx) !== void 0 ? `${bn}px` : void 0,
      scrollPaddingBlock: hr(ge.rowIdx) || (Re == null ? void 0 : Re.rowIdx) !== void 0 ? `${j + Yt * H}px ${Lt * H}px` : void 0,
      gridTemplateColumns: Tn,
      gridTemplateRows: Ho,
      "--rdg-header-row-height": `${_}px`,
      "--rdg-scroll-height": `${lf}px`,
      ...Ut
    },
    dir: A,
    ref: ft,
    onScroll: xf,
    onKeyDown: vf,
    "data-testid": re,
    children: [/* @__PURE__ */ O.jsxs(mp, {
      value: yt,
      children: [/* @__PURE__ */ O.jsx(bp, {
        value: hf,
        children: /* @__PURE__ */ O.jsxs(gp, {
          value: zn,
          children: [Array.from({
            length: vn
          }, (te, oe) => /* @__PURE__ */ O.jsx(am, {
            rowIdx: oe + 1,
            level: -vn + oe,
            columns: Wr(pt + oe),
            selectedCellIdx: ge.rowIdx === pt + oe ? ge.idx : void 0,
            selectCell: zs
          }, oe)), /* @__PURE__ */ O.jsx(om, {
            rowIdx: lt,
            columns: Wr(on),
            onColumnResize: cf,
            onColumnsReorder: uf,
            sortColumns: y,
            onSortColumnsChange: df,
            lastFrozenColumnIndex: at,
            selectedCellIdx: ge.rowIdx === on ? ge.idx : void 0,
            selectCell: zs,
            shouldFocusGrid: !aa,
            direction: A
          })]
        })
      }), r.length === 0 && V ? V : /* @__PURE__ */ O.jsxs(O.Fragment, {
        children: [i == null ? void 0 : i.map((te, oe) => {
          const we = lt + 1 + oe, Se = on + 1 + oe, Ae = ge.rowIdx === Se, tt = j + H * oe;
          return /* @__PURE__ */ O.jsx(el, {
            "aria-rowindex": we,
            rowIdx: Se,
            gridRowStart: we,
            row: te,
            top: tt,
            bottom: void 0,
            viewportColumns: Wr(Se),
            lastFrozenColumnIndex: at,
            selectedCellIdx: Ae ? ge.idx : void 0,
            isTop: !0,
            selectCell: sa
          }, oe);
        }), /* @__PURE__ */ O.jsx(hp, {
          value: gf,
          children: kf()
        }), a == null ? void 0 : a.map((te, oe) => {
          const we = qt + r.length + oe + 1, Se = r.length + oe, Ae = ge.rowIdx === Se, tt = J > sn ? Pt - H * (a.length - oe) : void 0, dt = tt === void 0 ? H * (a.length - 1 - oe) : void 0;
          return /* @__PURE__ */ O.jsx(el, {
            "aria-rowindex": Ie - Lt + oe + 1,
            rowIdx: Se,
            gridRowStart: we,
            row: te,
            top: tt,
            bottom: dt,
            viewportColumns: Wr(Se),
            lastFrozenColumnIndex: at,
            selectedCellIdx: Ae ? ge.idx : void 0,
            isTop: !1,
            selectCell: sa
          }, oe);
        })]
      })]
    }), Rf(), Gf(Tt), ae && /* @__PURE__ */ O.jsx("div", {
      ref: E,
      tabIndex: Gs ? 0 : -1,
      className: ye(Tm, Gs && [Qp, at !== -1 && Jp], !hr(ge.rowIdx) && Em),
      style: {
        gridRowStart: ge.rowIdx + qt + 1
      }
    }), Re !== null && /* @__PURE__ */ O.jsx(mm, {
      scrollToPosition: Re,
      setScrollToCellPosition: st,
      gridElement: ft.current
    })]
  });
}
function tl(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function fa(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const lu = /* @__PURE__ */ ki(Nm);
function Dm({
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
    childTabIndex: p,
    onFocus: h
  } = Io(i);
  function g() {
    u(e);
  }
  const y = c && l === a.idx;
  return /* @__PURE__ */ O.jsx("div", {
    role: "gridcell",
    "aria-colindex": a.idx + 1,
    "aria-selected": i,
    tabIndex: d,
    className: ko(a),
    style: {
      ...Lr(a),
      cursor: y ? "pointer" : "default"
    },
    onClick: y ? g : void 0,
    onFocus: h,
    children: (!c || y) && ((b = a.renderGroupCell) == null ? void 0 : b.call(a, {
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
const Am = /* @__PURE__ */ Jn(Dm), jm = "g1yxluv37-0-0-beta-47", Fm = `rdg-group-row ${jm}`;
function Lm({
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
  ...p
}) {
  const h = r[0].key === kr ? t.level + 1 : t.level;
  function g() {
    s({
      rowIdx: n,
      idx: -1
    });
  }
  const y = it(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: a
  }), [a]);
  return /* @__PURE__ */ O.jsx(Qc, {
    value: y,
    children: /* @__PURE__ */ O.jsx("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: ye(is, Fm, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, i === -1 && $i),
      onClick: g,
      style: rs(l),
      ...p,
      children: r.map((b) => /* @__PURE__ */ O.jsx(Am, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: i === b.idx,
        column: b,
        row: t,
        groupColumnIndex: h,
        toggleGroup: u,
        isGroupByColumn: c.includes(b.key)
      }, b.key))
    })
  });
}
const _m = /* @__PURE__ */ Jn(Lm);
function Bm({
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
  expandedGroupIds: p,
  onExpandedGroupIdsChange: h,
  ...g
}, y) {
  var G, ue, re;
  const b = Ii(), f = (c == null ? void 0 : c.renderRow) ?? (b == null ? void 0 : b.renderRow) ?? su, C = 1 + (((G = g.topSummaryRows) == null ? void 0 : G.length) ?? 0), T = g.direction === "rtl", v = T ? "ArrowRight" : "ArrowLeft", w = T ? "ArrowLeft" : "ArrowRight", x = Bt(ne), {
    columns: k,
    groupBy: R
  } = it(() => {
    const F = [...e].sort(({
      key: K
    }, {
      key: _
    }) => K === kr ? -1 : _ === kr ? 1 : u.includes(K) ? u.includes(_) ? u.indexOf(K) - u.indexOf(_) : -1 : u.includes(_) ? 1 : 0), W = [];
    for (const [K, _] of F.entries())
      u.includes(_.key) && (W.push(_.key), F[K] = {
        ..._,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: _.renderGroupCell ?? dp,
        editable: !1
      });
    return {
      columns: F,
      groupBy: W
    };
  }, [e, u]), [$, M] = it(() => {
    if (R.length === 0) return [void 0, t.length];
    const F = (W, [K, ..._], H) => {
      let Q = 0;
      const X = {};
      for (const [ce, V] of Object.entries(d(W, K))) {
        const [ve, A] = _.length === 0 ? [V, V.length] : F(V, _, H + Q + 1);
        X[ce] = {
          childRows: V,
          childGroups: ve,
          startRowIndex: H + Q
        }, Q += A + 1;
      }
      return [X, Q];
    };
    return F(t, R, 0);
  }, [R, d, t]), [m, P] = it(() => {
    const F = /* @__PURE__ */ new Set();
    if (!$) return [t, _];
    const W = [], K = (H, Q, X) => {
      if (zm(H)) {
        W.push(...H);
        return;
      }
      Object.keys(H).forEach((ce, V, ve) => {
        const A = Q !== void 0 ? `${Q}__${ce}` : ce, de = p.has(A), {
          childRows: ie,
          childGroups: $e,
          startRowIndex: be
        } = H[ce], Te = {
          id: A,
          parentId: Q,
          groupKey: ce,
          isExpanded: de,
          childRows: ie,
          level: X,
          posInSet: V,
          startRowIndex: be,
          setSize: ve.length
        };
        W.push(Te), F.add(Te), de && K($e, A, X + 1);
      });
    };
    return K($, void 0, 0), [W, _];
    function _(H) {
      return F.has(H);
    }
  }, [p, $, t]), I = it(() => typeof n == "function" ? (F) => P(F) ? n({
    type: "GROUP",
    row: F
  }) : n({
    type: "ROW",
    row: F
  }) : n, [P, n]), D = Mt((F) => {
    const W = m.indexOf(F);
    for (let K = W - 1; K >= 0; K--) {
      const _ = m[K];
      if (P(_) && (!P(F) || F.parentId === _.id))
        return [_, K];
    }
  }, [P, m]), z = Mt((F) => {
    if (P(F))
      return F.id;
    if (typeof r == "function")
      return r(F);
    const W = D(F);
    if (W !== void 0) {
      const {
        startRowIndex: K,
        childRows: _
      } = W[0], H = _.indexOf(F);
      return K + H + 1;
    }
    return m.indexOf(F);
  }, [D, P, r, m]), N = it(() => {
    if (s == null) return null;
    oo(r);
    const F = new Set(s);
    for (const W of m)
      P(W) && W.childRows.every((_) => s.has(r(_))) && F.add(W.id);
    return F;
  }, [P, r, s, m]);
  function B(F) {
    if (!l) return;
    oo(r);
    const W = new Set(s);
    for (const K of m) {
      const _ = z(K);
      if (N != null && N.has(_) && !F.has(_))
        if (P(K))
          for (const H of K.childRows)
            W.delete(r(H));
        else
          W.delete(_);
      else if (!(N != null && N.has(_)) && F.has(_))
        if (P(K))
          for (const H of K.childRows)
            W.add(r(H));
        else
          W.add(_);
    }
    l(W);
  }
  function ee(F, W) {
    if (i == null || i(F, W), W.isGridDefaultPrevented() || F.mode === "EDIT") return;
    const {
      column: K,
      rowIdx: _,
      selectCell: H
    } = F, Q = (K == null ? void 0 : K.idx) ?? -1, X = m[_];
    if (P(X)) {
      if (Q === -1 && (W.key === v && X.isExpanded || W.key === w && !X.isExpanded) && (W.preventDefault(), W.preventGridDefault(), ne(X.id)), Q === -1 && W.key === v && !X.isExpanded && X.level !== 0) {
        const ce = D(X);
        ce !== void 0 && (W.preventGridDefault(), H({
          idx: Q,
          rowIdx: ce[1]
        }));
      }
      li(W) && (W.keyCode === 67 || W.keyCode === 86) && W.preventGridDefault();
    }
  }
  function Z(F, {
    indexes: W,
    column: K
  }) {
    if (!a) return;
    const _ = [...t], H = [];
    for (const Q of W) {
      const X = t.indexOf(m[Q]);
      _[X] = F[Q], H.push(X);
    }
    a(_, {
      indexes: H,
      column: K
    });
  }
  function ne(F) {
    const W = new Set(p);
    W.has(F) ? W.delete(F) : W.add(F), h(W);
  }
  function U(F, {
    row: W,
    rowClass: K,
    onCellClick: _,
    onCellDoubleClick: H,
    onCellContextMenu: Q,
    onRowChange: X,
    lastFrozenColumnIndex: ce,
    copiedCellIdx: V,
    draggedOverCellIdx: ve,
    setDraggedOverRowIdx: A,
    selectedCellEditor: de,
    ...ie
  }) {
    if (P(W)) {
      const {
        startRowIndex: Te
      } = W;
      return /* @__PURE__ */ O.jsx(_m, {
        ...ie,
        "aria-rowindex": C + Te + 1,
        row: W,
        groupBy: R,
        toggleGroup: x
      }, F);
    }
    let $e = ie["aria-rowindex"];
    const be = D(W);
    if (be !== void 0) {
      const {
        startRowIndex: Te,
        childRows: Fe
      } = be[0], Ee = Fe.indexOf(W);
      $e = Te + C + Ee + 2;
    }
    return f(F, {
      ...ie,
      "aria-rowindex": $e,
      row: W,
      rowClass: K,
      onCellClick: _,
      onCellDoubleClick: H,
      onCellContextMenu: Q,
      onRowChange: X,
      lastFrozenColumnIndex: ce,
      copiedCellIdx: V,
      draggedOverCellIdx: ve,
      setDraggedOverRowIdx: A,
      selectedCellEditor: de
    });
  }
  return /* @__PURE__ */ O.jsx(lu, {
    ...g,
    role: "treegrid",
    "aria-rowcount": M + 1 + (((ue = g.topSummaryRows) == null ? void 0 : ue.length) ?? 0) + (((re = g.bottomSummaryRows) == null ? void 0 : re.length) ?? 0),
    ref: y,
    columns: k,
    rows: m,
    rowHeight: I,
    rowKeyGetter: z,
    onRowsChange: Z,
    selectedRows: N,
    onSelectedRowsChange: B,
    onCellKeyDown: ee,
    renderers: {
      ...c,
      renderRow: U
    }
  });
}
function zm(e) {
  return Array.isArray(e);
}
const wS = /* @__PURE__ */ ki(Bm), Wm = "t7vyx3i7-0-0-beta-47", Vm = `rdg-text-editor ${Wm}`;
function Hm(e) {
  e == null || e.focus(), e == null || e.select();
}
function CS({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ O.jsx("input", {
    className: Vm,
    ref: Hm,
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
}, Um = {
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
function cu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ym = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qm = /* @__PURE__ */ cu(
  function(e) {
    return Ym.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Gm = !1;
function Km(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Xm(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Zm = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var a;
      r.tags.length === 0 ? r.insertionPoint ? a = r.insertionPoint.nextSibling : r.prepend ? a = r.container.firstChild : a = r.before : a = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, a), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !Gm : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Xm(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = Km(i);
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
}(), $t = "-ms-", di = "-moz-", Be = "-webkit-", uu = "comm", as = "rule", ss = "decl", Qm = "@import", du = "@keyframes", Jm = "@layer", eh = Math.abs, Mi = String.fromCharCode, th = Object.assign;
function nh(e, t) {
  return kt(e, 0) ^ 45 ? (((t << 2 ^ kt(e, 0)) << 2 ^ kt(e, 1)) << 2 ^ kt(e, 2)) << 2 ^ kt(e, 3) : 0;
}
function fu(e) {
  return e.trim();
}
function rh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, n) {
  return e.replace(t, n);
}
function La(e, t) {
  return e.indexOf(t);
}
function kt(e, t) {
  return e.charCodeAt(t) | 0;
}
function mo(e, t, n) {
  return e.slice(t, n);
}
function Rn(e) {
  return e.length;
}
function ls(e) {
  return e.length;
}
function Yo(e, t) {
  return t.push(e), e;
}
function oh(e, t) {
  return e.map(t).join("");
}
var Ni = 1, $r = 1, pu = 0, Ht = 0, wt = 0, _r = "";
function Di(e, t, n, r, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: a, line: Ni, column: $r, length: s, return: "" };
}
function Yr(e, t) {
  return th(Di("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ih() {
  return wt;
}
function ah() {
  return wt = Ht > 0 ? kt(_r, --Ht) : 0, $r--, wt === 10 && ($r = 1, Ni--), wt;
}
function Qt() {
  return wt = Ht < pu ? kt(_r, Ht++) : 0, $r++, wt === 10 && ($r = 1, Ni++), wt;
}
function Mn() {
  return kt(_r, Ht);
}
function ti() {
  return Ht;
}
function $o(e, t) {
  return mo(_r, e, t);
}
function ho(e) {
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
function mu(e) {
  return Ni = $r = 1, pu = Rn(_r = e), Ht = 0, [];
}
function hu(e) {
  return _r = "", e;
}
function ni(e) {
  return fu($o(Ht - 1, _a(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sh(e) {
  for (; (wt = Mn()) && wt < 33; )
    Qt();
  return ho(e) > 2 || ho(wt) > 3 ? "" : " ";
}
function lh(e, t) {
  for (; --t && Qt() && !(wt < 48 || wt > 102 || wt > 57 && wt < 65 || wt > 70 && wt < 97); )
    ;
  return $o(e, ti() + (t < 6 && Mn() == 32 && Qt() == 32));
}
function _a(e) {
  for (; Qt(); )
    switch (wt) {
      case e:
        return Ht;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _a(wt);
        break;
      case 40:
        e === 41 && _a(e);
        break;
      case 92:
        Qt();
        break;
    }
  return Ht;
}
function ch(e, t) {
  for (; Qt() && e + wt !== 57; )
    if (e + wt === 84 && Mn() === 47)
      break;
  return "/*" + $o(t, Ht - 1) + "*" + Mi(e === 47 ? e : Qt());
}
function uh(e) {
  for (; !ho(Mn()); )
    Qt();
  return $o(e, Ht);
}
function dh(e) {
  return hu(ri("", null, null, null, [""], e = mu(e), 0, [0], e));
}
function ri(e, t, n, r, i, a, s, l, c) {
  for (var u = 0, d = 0, p = s, h = 0, g = 0, y = 0, b = 1, f = 1, C = 1, T = 0, v = "", w = i, x = a, k = r, R = v; f; )
    switch (y = T, T = Qt()) {
      case 40:
        if (y != 108 && kt(R, p - 1) == 58) {
          La(R += ze(ni(T), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += ni(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += sh(y);
        break;
      case 92:
        R += lh(ti() - 1, 7);
        continue;
      case 47:
        switch (Mn()) {
          case 42:
          case 47:
            Yo(fh(ch(Qt(), ti()), t, n), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * b:
        l[u++] = Rn(R) * C;
      case 125 * b:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            f = 0;
          case 59 + d:
            C == -1 && (R = ze(R, /\f/g, "")), g > 0 && Rn(R) - p && Yo(g > 32 ? rl(R + ";", r, n, p - 1) : rl(ze(R, " ", "") + ";", r, n, p - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (Yo(k = nl(R, t, n, u, d, i, l, v, w = [], x = [], p), a), T === 123)
              if (d === 0)
                ri(R, t, k, k, w, a, p, l, x);
              else
                switch (h === 99 && kt(R, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ri(e, k, k, r && Yo(nl(e, k, k, 0, 0, i, l, v, i, w = [], p), x), i, x, p, l, r ? w : x);
                    break;
                  default:
                    ri(R, k, k, k, [""], x, 0, l, x);
                }
        }
        u = d = g = 0, b = C = 1, v = R = "", p = s;
        break;
      case 58:
        p = 1 + Rn(R), g = y;
      default:
        if (b < 1) {
          if (T == 123)
            --b;
          else if (T == 125 && b++ == 0 && ah() == 125)
            continue;
        }
        switch (R += Mi(T), T * b) {
          case 38:
            C = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (Rn(R) - 1) * C, C = 1;
            break;
          case 64:
            Mn() === 45 && (R += ni(Qt())), h = Mn(), d = p = Rn(v = R += uh(ti())), T++;
            break;
          case 45:
            y === 45 && Rn(R) == 2 && (b = 0);
        }
    }
  return a;
}
function nl(e, t, n, r, i, a, s, l, c, u, d) {
  for (var p = i - 1, h = i === 0 ? a : [""], g = ls(h), y = 0, b = 0, f = 0; y < r; ++y)
    for (var C = 0, T = mo(e, p + 1, p = eh(b = s[y])), v = e; C < g; ++C)
      (v = fu(b > 0 ? h[C] + " " + T : ze(T, /&\f/g, h[C]))) && (c[f++] = v);
  return Di(e, t, n, i === 0 ? as : l, c, u, d);
}
function fh(e, t, n) {
  return Di(e, t, n, uu, Mi(ih()), mo(e, 2, -2), 0);
}
function rl(e, t, n, r) {
  return Di(e, t, n, ss, mo(e, 0, r), mo(e, r + 1, -1), r);
}
function Er(e, t) {
  for (var n = "", r = ls(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function ph(e, t, n, r) {
  switch (e.type) {
    case Jm:
      if (e.children.length) break;
    case Qm:
    case ss:
      return e.return = e.return || e.value;
    case uu:
      return "";
    case du:
      return e.return = e.value + "{" + Er(e.children, r) + "}";
    case as:
      e.value = e.props.join(",");
  }
  return Rn(n = Er(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function mh(e) {
  var t = ls(e);
  return function(n, r, i, a) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, i, a) || "";
    return s;
  };
}
function hh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var gh = function(t, n, r) {
  for (var i = 0, a = 0; i = a, a = Mn(), i === 38 && a === 12 && (n[r] = 1), !ho(a); )
    Qt();
  return $o(t, Ht);
}, bh = function(t, n) {
  var r = -1, i = 44;
  do
    switch (ho(i)) {
      case 0:
        i === 38 && Mn() === 12 && (n[r] = 1), t[r] += gh(Ht - 1, n, r);
        break;
      case 2:
        t[r] += ni(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Mn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Mi(i);
    }
  while (i = Qt());
  return t;
}, yh = function(t, n) {
  return hu(bh(mu(t), n));
}, ol = /* @__PURE__ */ new WeakMap(), vh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ol.get(r)) && !i) {
      ol.set(t, !0);
      for (var a = [], s = yh(n, a), l = r.props, c = 0, u = 0; c < s.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = a[c] ? s[c].replace(/&\f/g, l[d]) : l[d] + " " + s[c];
    }
  }
}, xh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function gu(e, t) {
  switch (nh(e, t)) {
    case 5103:
      return Be + "print-" + e + e;
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
      return Be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Be + e + di + e + $t + e + e;
    case 6828:
    case 4268:
      return Be + e + $t + e + e;
    case 6165:
      return Be + e + $t + "flex-" + e + e;
    case 5187:
      return Be + e + ze(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + $t + "flex-$1$2") + e;
    case 5443:
      return Be + e + $t + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + $t + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + $t + ze(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + $t + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + ze(e, "-grow", "") + Be + e + $t + ze(e, "grow", "positive") + e;
    case 4554:
      return Be + ze(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + $t + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ze(e, /(.+)-inline(.+)/, Be + "$1$2") + e;
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
      if (Rn(e) - 1 - t > 6) switch (kt(e, t + 1)) {
        case 109:
          if (kt(e, t + 4) !== 45) break;
        case 102:
          return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + di + (kt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~La(e, "stretch") ? gu(ze(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (kt(e, t + 1) !== 115) break;
    case 6444:
      switch (kt(e, Rn(e) - 3 - (~La(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + Be) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (kt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + $t + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (kt(e, t + 11)) {
        case 114:
          return Be + e + $t + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + $t + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + $t + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + $t + e + e;
  }
  return e;
}
var wh = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ss:
      t.return = gu(t.value, t.length);
      break;
    case du:
      return Er([Yr(t, {
        value: ze(t.value, "@", "@" + Be)
      })], i);
    case as:
      if (t.length) return oh(t.props, function(a) {
        switch (rh(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Er([Yr(t, {
              props: [ze(a, /:(read-\w+)/, ":" + di + "$1")]
            })], i);
          case "::placeholder":
            return Er([Yr(t, {
              props: [ze(a, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), Yr(t, {
              props: [ze(a, /:(plac\w+)/, ":" + di + "$1")]
            }), Yr(t, {
              props: [ze(a, /:(plac\w+)/, $t + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Ch = [wh], Sh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var f = b.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Ch, a = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(b) {
      for (var f = b.getAttribute("data-emotion").split(" "), C = 1; C < f.length; C++)
        a[f[C]] = !0;
      l.push(b);
    }
  );
  var c, u = [vh, xh];
  {
    var d, p = [ph, hh(function(b) {
      d.insert(b);
    })], h = mh(u.concat(i, p)), g = function(f) {
      return Er(dh(f), h);
    };
    c = function(f, C, T, v) {
      d = T, g(f ? f + "{" + C.styles + "}" : C.styles), v && (y.inserted[C.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new Zm({
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
}, Ba = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var il;
function Th() {
  if (il) return Ve;
  il = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var k = x.$$typeof;
      switch (k) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case r:
            case a:
            case i:
            case p:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case d:
                case y:
                case g:
                case s:
                  return x;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function w(x) {
    return v(x) === u;
  }
  return Ve.AsyncMode = c, Ve.ConcurrentMode = u, Ve.ContextConsumer = l, Ve.ContextProvider = s, Ve.Element = t, Ve.ForwardRef = d, Ve.Fragment = r, Ve.Lazy = y, Ve.Memo = g, Ve.Portal = n, Ve.Profiler = a, Ve.StrictMode = i, Ve.Suspense = p, Ve.isAsyncMode = function(x) {
    return w(x) || v(x) === c;
  }, Ve.isConcurrentMode = w, Ve.isContextConsumer = function(x) {
    return v(x) === l;
  }, Ve.isContextProvider = function(x) {
    return v(x) === s;
  }, Ve.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ve.isForwardRef = function(x) {
    return v(x) === d;
  }, Ve.isFragment = function(x) {
    return v(x) === r;
  }, Ve.isLazy = function(x) {
    return v(x) === y;
  }, Ve.isMemo = function(x) {
    return v(x) === g;
  }, Ve.isPortal = function(x) {
    return v(x) === n;
  }, Ve.isProfiler = function(x) {
    return v(x) === a;
  }, Ve.isStrictMode = function(x) {
    return v(x) === i;
  }, Ve.isSuspense = function(x) {
    return v(x) === p;
  }, Ve.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === a || x === i || x === p || x === h || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === g || x.$$typeof === s || x.$$typeof === l || x.$$typeof === d || x.$$typeof === f || x.$$typeof === C || x.$$typeof === T || x.$$typeof === b);
  }, Ve.typeOf = v, Ve;
}
var He = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al;
function Eh() {
  return al || (al = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function v(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === u || V === a || V === i || V === p || V === h || typeof V == "object" && V !== null && (V.$$typeof === y || V.$$typeof === g || V.$$typeof === s || V.$$typeof === l || V.$$typeof === d || V.$$typeof === f || V.$$typeof === C || V.$$typeof === T || V.$$typeof === b);
    }
    function w(V) {
      if (typeof V == "object" && V !== null) {
        var ve = V.$$typeof;
        switch (ve) {
          case t:
            var A = V.type;
            switch (A) {
              case c:
              case u:
              case r:
              case a:
              case i:
              case p:
                return A;
              default:
                var de = A && A.$$typeof;
                switch (de) {
                  case l:
                  case d:
                  case y:
                  case g:
                  case s:
                    return de;
                  default:
                    return ve;
                }
            }
          case n:
            return ve;
        }
      }
    }
    var x = c, k = u, R = l, $ = s, M = t, m = d, P = r, I = y, D = g, z = n, N = a, B = i, ee = p, Z = !1;
    function ne(V) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(V) || w(V) === c;
    }
    function U(V) {
      return w(V) === u;
    }
    function G(V) {
      return w(V) === l;
    }
    function ue(V) {
      return w(V) === s;
    }
    function re(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function F(V) {
      return w(V) === d;
    }
    function W(V) {
      return w(V) === r;
    }
    function K(V) {
      return w(V) === y;
    }
    function _(V) {
      return w(V) === g;
    }
    function H(V) {
      return w(V) === n;
    }
    function Q(V) {
      return w(V) === a;
    }
    function X(V) {
      return w(V) === i;
    }
    function ce(V) {
      return w(V) === p;
    }
    He.AsyncMode = x, He.ConcurrentMode = k, He.ContextConsumer = R, He.ContextProvider = $, He.Element = M, He.ForwardRef = m, He.Fragment = P, He.Lazy = I, He.Memo = D, He.Portal = z, He.Profiler = N, He.StrictMode = B, He.Suspense = ee, He.isAsyncMode = ne, He.isConcurrentMode = U, He.isContextConsumer = G, He.isContextProvider = ue, He.isElement = re, He.isForwardRef = F, He.isFragment = W, He.isLazy = K, He.isMemo = _, He.isPortal = H, He.isProfiler = Q, He.isStrictMode = X, He.isSuspense = ce, He.isValidElementType = v, He.typeOf = w;
  }()), He;
}
process.env.NODE_ENV === "production" ? Ba.exports = Th() : Ba.exports = Eh();
var cs = Ba.exports, bu = cs, Oh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Rh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yu = {};
yu[bu.ForwardRef] = Oh;
yu[bu.Memo] = Rh;
var Ph = !0;
function kh(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var vu = function(t, n, r) {
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
  Ph === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, xu = function(t, n, r) {
  vu(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Ih(e) {
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
var $h = {
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
}, Mh = !1, Nh = /[A-Z]|^ms/g, Dh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wu = function(t) {
  return t.charCodeAt(1) === 45;
}, sl = function(t) {
  return t != null && typeof t != "boolean";
}, pa = /* @__PURE__ */ cu(function(e) {
  return wu(e) ? e : e.replace(Nh, "-$&").toLowerCase();
}), ll = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Dh, function(r, i, a) {
          return Pn = {
            name: i,
            styles: a,
            next: Pn
          }, i;
        });
  }
  return $h[t] !== 1 && !wu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Ah = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function go(e, t, n) {
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
        return Pn = {
          name: i.name,
          styles: i.styles,
          next: Pn
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Pn = {
              name: s.name,
              styles: s.styles,
              next: Pn
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return jh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Pn, u = n(e);
        return Pn = c, go(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function jh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += go(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += a + "{" + t[l] + "}" : sl(l) && (r += pa(a) + ":" + ll(a, l) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && Mh)
          throw new Error(Ah);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            sl(s[c]) && (r += pa(a) + ":" + ll(a, s[c]) + ";");
        else {
          var u = go(e, t, s);
          switch (a) {
            case "animation":
            case "animationName": {
              r += pa(a) + ":" + u + ";";
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
var cl = /label:\s*([^\s;{]+)\s*(;|$)/g, Pn;
function Ai(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  Pn = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += go(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += go(n, t, e[l]), r) {
      var c = a;
      i += c[l];
    }
  cl.lastIndex = 0;
  for (var u = "", d; (d = cl.exec(i)) !== null; )
    u += "-" + d[1];
  var p = Ih(i) + u;
  return {
    name: p,
    styles: i,
    next: Pn
  };
}
var Fh = function(t) {
  return t();
}, Cu = S.useInsertionEffect ? S.useInsertionEffect : !1, Lh = Cu || Fh, ul = Cu || S.useLayoutEffect, Su = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Sh({
    key: "css"
  }) : null
);
Su.Provider;
var Tu = function(t) {
  return /* @__PURE__ */ ki(function(n, r) {
    var i = xn(Su);
    return t(n, i, r);
  });
}, us = /* @__PURE__ */ S.createContext({}), _h = /* @__PURE__ */ Tu(function(e, t) {
  var n = e.styles, r = Ai([n], void 0, S.useContext(us)), i = S.useRef();
  return ul(function() {
    var a = t.key + "-global", s = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), s.hydrate([c])), i.current = [s, l], function() {
      s.flush();
    };
  }, [t]), ul(function() {
    var a = i.current, s = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && xu(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Bh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ai(t);
}
var ds = function() {
  var t = Bh.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, zh = qm, Wh = function(t) {
  return t !== "theme";
}, dl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? zh : Wh;
}, fl = function(t, n, r) {
  var i;
  if (n) {
    var a = n.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Vh = !1, Hh = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return vu(n, r, i), Lh(function() {
    return xu(n, r, i);
  }), null;
}, Uh = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, a, s;
  n !== void 0 && (a = n.label, s = n.target);
  var l = fl(t, n, r), c = l || dl(i), u = !c("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && p.push("label:" + a + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      p.push(d[0][0]);
      for (var h = d.length, g = 1; g < h; g++)
        p.push(d[g], d[0][g]);
    }
    var y = Tu(function(b, f, C) {
      var T = u && b.as || i, v = "", w = [], x = b;
      if (b.theme == null) {
        x = {};
        for (var k in b)
          x[k] = b[k];
        x.theme = S.useContext(us);
      }
      typeof b.className == "string" ? v = kh(f.registered, w, b.className) : b.className != null && (v = b.className + " ");
      var R = Ai(p.concat(w), f.registered, x);
      v += f.key + "-" + R.name, s !== void 0 && (v += " " + s);
      var $ = u && l === void 0 ? dl(T) : c, M = {};
      for (var m in b)
        u && m === "as" || $(m) && (M[m] = b[m]);
      return M.className = v, C && (M.ref = C), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Hh, {
        cache: f,
        serialized: R,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ S.createElement(T, M));
    });
    return y.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = p, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return s === void 0 && Vh ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), y.withComponent = function(b, f) {
      return e(b, ui({}, n, f, {
        shouldForwardProp: fl(y, f, !0)
      })).apply(void 0, p);
    }, y;
  };
}, Yh = [
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
], Dn = Uh.bind();
Yh.forEach(function(e) {
  Dn[e] = Dn(e);
});
const qh = Dn.div`
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
var io = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e))(io || {}), bo = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(bo || {});
function Gh(e, t, n) {
  return (r, i) => {
    const a = r[e], s = i[e];
    try {
      if (n)
        return n(a, s);
      if (t === io.NUMBER) {
        const l = Number(a), c = Number(s);
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid number for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      } else if (t === io.DATE) {
        const l = new Date(a).getTime(), c = new Date(s).getTime();
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid date for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      }
      return t === io.STRING || !t ? String(a).localeCompare(String(s)) : 0;
    } catch (l) {
      return console.error("Error in sorting:", l), 0;
    }
  };
}
const Kh = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, i] = Rt(n ?? []);
  return {
    sortedRows: it(() => r.length === 0 ? t : [...t].sort((s, l) => {
      for (const c of r) {
        const u = e.find((h) => h.key === c.columnKey), p = Gh(
          c.columnKey,
          u == null ? void 0 : u.type,
          u == null ? void 0 : u.sortComparator
        )(s, l);
        if (p !== 0)
          return c.direction === "ASC" ? p : -p;
      }
      return 0;
    }), [t, r]),
    sortColumns: r,
    setSortedColumns: i
  };
};
function An(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
var za = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ma, pl;
function Xh() {
  if (pl) return ma;
  pl = 1;
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
  return ma = i() ? Object.assign : function(a, s) {
    for (var l, c = r(a), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          n.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, ma;
}
var ha, ml;
function fs() {
  if (ml) return ha;
  ml = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ha = e, ha;
}
var ga, hl;
function Eu() {
  return hl || (hl = 1, ga = Function.call.bind(Object.prototype.hasOwnProperty)), ga;
}
var ba, gl;
function Zh() {
  if (gl) return ba;
  gl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = fs(), n = {}, r = Eu();
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
          var p;
          try {
            if (typeof a[d] != "function") {
              var h = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = a[d](s, d, c, l, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ba = i, ba;
}
var ya, bl;
function Qh() {
  if (bl) return ya;
  bl = 1;
  var e = cs, t = Xh(), n = fs(), r = Eu(), i = Zh(), a = function() {
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
  return ya = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(U) {
      var G = U && (u && U[u] || U[d]);
      if (typeof G == "function")
        return G;
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
      any: T(),
      arrayOf: v,
      element: w(),
      elementType: x(),
      instanceOf: k,
      node: m(),
      objectOf: $,
      oneOf: R,
      oneOfType: M,
      shape: I,
      exact: D
    };
    function y(U, G) {
      return U === G ? U !== 0 || 1 / U === 1 / G : U !== U && G !== G;
    }
    function b(U, G) {
      this.message = U, this.data = G && typeof G == "object" ? G : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function f(U) {
      if (process.env.NODE_ENV !== "production")
        var G = {}, ue = 0;
      function re(W, K, _, H, Q, X, ce) {
        if (H = H || h, X = X || _, ce !== n) {
          if (c) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = H + ":" + _;
            !G[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            ue < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), G[ve] = !0, ue++);
          }
        }
        return K[_] == null ? W ? K[_] === null ? new b("The " + Q + " `" + X + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new b("The " + Q + " `" + X + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : U(K, _, H, Q, X);
      }
      var F = re.bind(null, !1);
      return F.isRequired = re.bind(null, !0), F;
    }
    function C(U) {
      function G(ue, re, F, W, K, _) {
        var H = ue[re], Q = B(H);
        if (Q !== U) {
          var X = ee(H);
          return new b(
            "Invalid " + W + " `" + K + "` of type " + ("`" + X + "` supplied to `" + F + "`, expected ") + ("`" + U + "`."),
            { expectedType: U }
          );
        }
        return null;
      }
      return f(G);
    }
    function T() {
      return f(s);
    }
    function v(U) {
      function G(ue, re, F, W, K) {
        if (typeof U != "function")
          return new b("Property `" + K + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var _ = ue[re];
        if (!Array.isArray(_)) {
          var H = B(_);
          return new b("Invalid " + W + " `" + K + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an array."));
        }
        for (var Q = 0; Q < _.length; Q++) {
          var X = U(_, Q, F, W, K + "[" + Q + "]", n);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return f(G);
    }
    function w() {
      function U(G, ue, re, F, W) {
        var K = G[ue];
        if (!l(K)) {
          var _ = B(K);
          return new b("Invalid " + F + " `" + W + "` of type " + ("`" + _ + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(U);
    }
    function x() {
      function U(G, ue, re, F, W) {
        var K = G[ue];
        if (!e.isValidElementType(K)) {
          var _ = B(K);
          return new b("Invalid " + F + " `" + W + "` of type " + ("`" + _ + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(U);
    }
    function k(U) {
      function G(ue, re, F, W, K) {
        if (!(ue[re] instanceof U)) {
          var _ = U.name || h, H = ne(ue[re]);
          return new b("Invalid " + W + " `" + K + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return f(G);
    }
    function R(U) {
      if (!Array.isArray(U))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function G(ue, re, F, W, K) {
        for (var _ = ue[re], H = 0; H < U.length; H++)
          if (y(_, U[H]))
            return null;
        var Q = JSON.stringify(U, function(ce, V) {
          var ve = ee(V);
          return ve === "symbol" ? String(V) : V;
        });
        return new b("Invalid " + W + " `" + K + "` of value `" + String(_) + "` " + ("supplied to `" + F + "`, expected one of " + Q + "."));
      }
      return f(G);
    }
    function $(U) {
      function G(ue, re, F, W, K) {
        if (typeof U != "function")
          return new b("Property `" + K + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var _ = ue[re], H = B(_);
        if (H !== "object")
          return new b("Invalid " + W + " `" + K + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an object."));
        for (var Q in _)
          if (r(_, Q)) {
            var X = U(_, Q, F, W, K + "." + Q, n);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return f(G);
    }
    function M(U) {
      if (!Array.isArray(U))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var G = 0; G < U.length; G++) {
        var ue = U[G];
        if (typeof ue != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(ue) + " at index " + G + "."
          ), s;
      }
      function re(F, W, K, _, H) {
        for (var Q = [], X = 0; X < U.length; X++) {
          var ce = U[X], V = ce(F, W, K, _, H, n);
          if (V == null)
            return null;
          V.data && r(V.data, "expectedType") && Q.push(V.data.expectedType);
        }
        var ve = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new b("Invalid " + _ + " `" + H + "` supplied to " + ("`" + K + "`" + ve + "."));
      }
      return f(re);
    }
    function m() {
      function U(G, ue, re, F, W) {
        return z(G[ue]) ? null : new b("Invalid " + F + " `" + W + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return f(U);
    }
    function P(U, G, ue, re, F) {
      return new b(
        (U || "React class") + ": " + G + " type `" + ue + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function I(U) {
      function G(ue, re, F, W, K) {
        var _ = ue[re], H = B(_);
        if (H !== "object")
          return new b("Invalid " + W + " `" + K + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var Q in U) {
          var X = U[Q];
          if (typeof X != "function")
            return P(F, W, K, Q, ee(X));
          var ce = X(_, Q, F, W, K + "." + Q, n);
          if (ce)
            return ce;
        }
        return null;
      }
      return f(G);
    }
    function D(U) {
      function G(ue, re, F, W, K) {
        var _ = ue[re], H = B(_);
        if (H !== "object")
          return new b("Invalid " + W + " `" + K + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        var Q = t({}, ue[re], U);
        for (var X in Q) {
          var ce = U[X];
          if (r(U, X) && typeof ce != "function")
            return P(F, W, K, X, ee(ce));
          if (!ce)
            return new b(
              "Invalid " + W + " `" + K + "` key `" + X + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(ue[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(U), null, "  ")
            );
          var V = ce(_, X, F, W, K + "." + X, n);
          if (V)
            return V;
        }
        return null;
      }
      return f(G);
    }
    function z(U) {
      switch (typeof U) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !U;
        case "object":
          if (Array.isArray(U))
            return U.every(z);
          if (U === null || l(U))
            return !0;
          var G = p(U);
          if (G) {
            var ue = G.call(U), re;
            if (G !== U.entries) {
              for (; !(re = ue.next()).done; )
                if (!z(re.value))
                  return !1;
            } else
              for (; !(re = ue.next()).done; ) {
                var F = re.value;
                if (F && !z(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(U, G) {
      return U === "symbol" ? !0 : G ? G["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && G instanceof Symbol : !1;
    }
    function B(U) {
      var G = typeof U;
      return Array.isArray(U) ? "array" : U instanceof RegExp ? "object" : N(G, U) ? "symbol" : G;
    }
    function ee(U) {
      if (typeof U > "u" || U === null)
        return "" + U;
      var G = B(U);
      if (G === "object") {
        if (U instanceof Date)
          return "date";
        if (U instanceof RegExp)
          return "regexp";
      }
      return G;
    }
    function Z(U) {
      var G = ee(U);
      switch (G) {
        case "array":
        case "object":
          return "an " + G;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + G;
        default:
          return G;
      }
    }
    function ne(U) {
      return !U.constructor || !U.constructor.name ? h : U.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, ya;
}
var va, yl;
function Jh() {
  if (yl) return va;
  yl = 1;
  var e = fs();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, va = function() {
    function r(s, l, c, u, d, p) {
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
  }, va;
}
if (process.env.NODE_ENV !== "production") {
  var eg = cs, tg = !0;
  za.exports = Qh()(eg.isElement, tg);
} else
  za.exports = Jh()();
var ng = za.exports;
const o = /* @__PURE__ */ Bf(ng);
function rg(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ou(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(rg(i) ? n : i) : t;
  return /* @__PURE__ */ O.jsx(_h, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (Ou.propTypes = {
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
function Ru(e, t) {
  const n = Dn(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function og(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const vl = [];
function xl(e) {
  return vl[0] = e, Ai(vl);
}
function In(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pu(e) {
  if (/* @__PURE__ */ S.isValidElement(e) || !In(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Pu(e[n]);
  }), t;
}
function Nt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return In(e) && In(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ S.isValidElement(t[i]) ? r[i] = t[i] : In(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && In(e[i]) ? r[i] = Nt(e[i], t[i], n) : n.clone ? r[i] = In(t[i]) ? Pu(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const ig = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function ag(e) {
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
  } = e, a = ig(t), s = Object.keys(a);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, g) {
    const y = s.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : g) - r / 100}${n})`;
  }
  function d(h) {
    return s.indexOf(h) + 1 < s.length ? u(h, s[s.indexOf(h) + 1]) : l(h);
  }
  function p(h) {
    const g = s.indexOf(h);
    return g === 0 ? l(s[1]) : g === s.length - 1 ? c(s[g]) : u(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: n,
    ...i
  };
}
function sg(e, t) {
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
function lg(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function cg(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : An(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(a);
}
function ug(e) {
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
const dg = {
  borderRadius: 4
}, er = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function ao(e, t) {
  return t ? Nt(e, t, {
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
}, wl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ji[e]}px)`
}, fg = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : ji[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Vn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || wl;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || wl;
    return Object.keys(t).reduce((s, l) => {
      if (lg(a.keys, l)) {
        const c = cg(r.containerQueries ? r : fg, l);
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
function pg(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function mg(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : An(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Fi(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function fi(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Fi(e, n) || r, t && (i = t(i, r, e)), i;
}
function vt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = Fi(c, r) || {};
    return Vn(s, l, (p) => {
      let h = fi(u, i, p);
      return p === h && typeof p == "string" && (h = fi(u, i, `${t}${p === "default" ? "" : pe(p)}`, p)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: er
  } : {}, a.filterProps = [t], a;
}
function hg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const gg = {
  m: "margin",
  p: "padding"
}, bg = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Cl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, yg = hg((e) => {
  if (e.length > 2)
    if (Cl[e])
      e = Cl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = gg[t], i = bg[n] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Li = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _i = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], vg = [...Li, ..._i];
function Mo(e, t, n, r) {
  const i = Fi(e, t, !0) ?? n;
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
function ps(e) {
  return Mo(e, "spacing", 8, "spacing");
}
function No(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function xg(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = No(t, n), r), {});
}
function wg(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = yg(n), a = xg(i, r), s = e[n];
  return Vn(e, s, a);
}
function ku(e, t) {
  const n = ps(e.theme);
  return Object.keys(e).map((r) => wg(e, t, r, n)).reduce(ao, {});
}
function ht(e) {
  return ku(e, Li);
}
ht.propTypes = process.env.NODE_ENV !== "production" ? Li.reduce((e, t) => (e[t] = er, e), {}) : {};
ht.filterProps = Li;
function gt(e) {
  return ku(e, _i);
}
gt.propTypes = process.env.NODE_ENV !== "production" ? _i.reduce((e, t) => (e[t] = er, e), {}) : {};
gt.filterProps = _i;
process.env.NODE_ENV !== "production" && vg.reduce((e, t) => (e[t] = er, e), {});
function Iu(e = 8, t = ps({
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
  }), r), {}), n = (r) => Object.keys(r).reduce((i, a) => t[a] ? ao(i, t[a](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function un(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function gn(e, t) {
  return vt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Cg = gn("border", un), Sg = gn("borderTop", un), Tg = gn("borderRight", un), Eg = gn("borderBottom", un), Og = gn("borderLeft", un), Rg = gn("borderColor"), Pg = gn("borderTopColor"), kg = gn("borderRightColor"), Ig = gn("borderBottomColor"), $g = gn("borderLeftColor"), Mg = gn("outline", un), Ng = gn("outlineColor"), zi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Mo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: No(t, r)
    });
    return Vn(e, e.borderRadius, n);
  }
  return null;
};
zi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: er
} : {};
zi.filterProps = ["borderRadius"];
Bi(Cg, Sg, Tg, Eg, Og, Rg, Pg, kg, Ig, $g, zi, Mg, Ng);
const Wi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Mo(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: No(t, r)
    });
    return Vn(e, e.gap, n);
  }
  return null;
};
Wi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: er
} : {};
Wi.filterProps = ["gap"];
const Vi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Mo(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: No(t, r)
    });
    return Vn(e, e.columnGap, n);
  }
  return null;
};
Vi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: er
} : {};
Vi.filterProps = ["columnGap"];
const Hi = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Mo(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: No(t, r)
    });
    return Vn(e, e.rowGap, n);
  }
  return null;
};
Hi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: er
} : {};
Hi.filterProps = ["rowGap"];
const Dg = vt({
  prop: "gridColumn"
}), Ag = vt({
  prop: "gridRow"
}), jg = vt({
  prop: "gridAutoFlow"
}), Fg = vt({
  prop: "gridAutoColumns"
}), Lg = vt({
  prop: "gridAutoRows"
}), _g = vt({
  prop: "gridTemplateColumns"
}), Bg = vt({
  prop: "gridTemplateRows"
}), zg = vt({
  prop: "gridTemplateAreas"
}), Wg = vt({
  prop: "gridArea"
});
Bi(Wi, Vi, Hi, Dg, Ag, jg, Fg, Lg, _g, Bg, zg, Wg);
function Or(e, t) {
  return t === "grey" ? t : e;
}
const Vg = vt({
  prop: "color",
  themeKey: "palette",
  transform: Or
}), Hg = vt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Or
}), Ug = vt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Or
});
Bi(Vg, Hg, Ug);
function Zt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Yg = vt({
  prop: "width",
  transform: Zt
}), ms = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const r = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || ji[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Zt(n)
      };
    };
    return Vn(e, e.maxWidth, t);
  }
  return null;
};
ms.filterProps = ["maxWidth"];
const qg = vt({
  prop: "minWidth",
  transform: Zt
}), Gg = vt({
  prop: "height",
  transform: Zt
}), Kg = vt({
  prop: "maxHeight",
  transform: Zt
}), Xg = vt({
  prop: "minHeight",
  transform: Zt
});
vt({
  prop: "size",
  cssProperty: "width",
  transform: Zt
});
vt({
  prop: "size",
  cssProperty: "height",
  transform: Zt
});
const Zg = vt({
  prop: "boxSizing"
});
Bi(Yg, ms, qg, Gg, Kg, Xg, Zg);
const Do = {
  // borders
  border: {
    themeKey: "borders",
    transform: un
  },
  borderTop: {
    themeKey: "borders",
    transform: un
  },
  borderRight: {
    themeKey: "borders",
    transform: un
  },
  borderBottom: {
    themeKey: "borders",
    transform: un
  },
  borderLeft: {
    themeKey: "borders",
    transform: un
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
    transform: un
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
    style: gt
  },
  pt: {
    style: gt
  },
  pr: {
    style: gt
  },
  pb: {
    style: gt
  },
  pl: {
    style: gt
  },
  px: {
    style: gt
  },
  py: {
    style: gt
  },
  padding: {
    style: gt
  },
  paddingTop: {
    style: gt
  },
  paddingRight: {
    style: gt
  },
  paddingBottom: {
    style: gt
  },
  paddingLeft: {
    style: gt
  },
  paddingX: {
    style: gt
  },
  paddingY: {
    style: gt
  },
  paddingInline: {
    style: gt
  },
  paddingInlineStart: {
    style: gt
  },
  paddingInlineEnd: {
    style: gt
  },
  paddingBlock: {
    style: gt
  },
  paddingBlockStart: {
    style: gt
  },
  paddingBlockEnd: {
    style: gt
  },
  m: {
    style: ht
  },
  mt: {
    style: ht
  },
  mr: {
    style: ht
  },
  mb: {
    style: ht
  },
  ml: {
    style: ht
  },
  mx: {
    style: ht
  },
  my: {
    style: ht
  },
  margin: {
    style: ht
  },
  marginTop: {
    style: ht
  },
  marginRight: {
    style: ht
  },
  marginBottom: {
    style: ht
  },
  marginLeft: {
    style: ht
  },
  marginX: {
    style: ht
  },
  marginY: {
    style: ht
  },
  marginInline: {
    style: ht
  },
  marginInlineStart: {
    style: ht
  },
  marginInlineEnd: {
    style: ht
  },
  marginBlock: {
    style: ht
  },
  marginBlockStart: {
    style: ht
  },
  marginBlockEnd: {
    style: ht
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
    transform: Zt
  },
  maxWidth: {
    style: ms
  },
  minWidth: {
    transform: Zt
  },
  height: {
    transform: Zt
  },
  maxHeight: {
    transform: Zt
  },
  minHeight: {
    transform: Zt
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
function Qg(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Jg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function eb() {
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
      style: p
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Fi(i, u) || {};
    return p ? p(s) : Vn(s, r, (y) => {
      let b = fi(h, d, y);
      return y === b && typeof y == "string" && (b = fi(h, d, `${n}${y === "default" ? "" : pe(y)}`, y)), c === !1 ? b : {
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
    const a = i.unstable_sxConfig ?? Do;
    function s(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = pg(i.breakpoints), d = Object.keys(u);
      let p = u;
      return Object.keys(c).forEach((h) => {
        const g = Jg(c[h], i);
        if (g != null)
          if (typeof g == "object")
            if (a[h])
              p = ao(p, e(h, g, i, a));
            else {
              const y = Vn({
                theme: i
              }, g, (b) => ({
                [h]: b
              }));
              Qg(y, g) ? p[h] = t({
                sx: g,
                theme: i
              }) : p = ao(p, y);
            }
          else
            p = ao(p, e(h, g, i, a));
      }), sg(i, mg(d, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const ur = eb();
ur.filterProps = ["sx"];
function tb(e, t) {
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
function hs(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = ag(n), c = Iu(i);
  let u = Nt({
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
      ...dg,
      ...a
    }
  }, s);
  return u = ug(u), u.applyStyles = tb, u = t.reduce((d, p) => Nt(d, p), u), u.unstable_sxConfig = {
    ...Do,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return ur({
      sx: p,
      theme: this
    });
  }, u;
}
function nb(e) {
  return Object.keys(e).length === 0;
}
function rb(e = null) {
  const t = S.useContext(us);
  return !t || nb(t) ? e : t;
}
const ob = hs();
function gs(e = ob) {
  return rb(e);
}
function $u({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = gs(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ O.jsx(Ou, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && ($u.propTypes = {
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
const ib = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Do;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function ab(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = ib(n);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...s) => {
    const l = t(...s);
    return In(l) ? {
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
const Sl = (e) => e, sb = () => {
  let e = Sl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Sl;
    }
  };
}, Mu = sb();
function lb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = Ru("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(ur);
  return /* @__PURE__ */ S.forwardRef(function(c, u) {
    const d = gs(n), {
      className: p,
      component: h = "div",
      ...g
    } = ab(c);
    return /* @__PURE__ */ O.jsx(a, {
      as: h,
      ref: u,
      className: ye(p, i ? i(r) : r),
      theme: t && d[t] || d,
      ...g
    });
  });
}
const cb = {
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
function Le(e, t, n = "Mui") {
  const r = cb[t];
  return r ? `${n}-${r}` : `${Mu.generate(e)}-${t}`;
}
function De(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Le(e, i, n);
  }), r;
}
var Wa = { exports: {} }, Ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tl;
function ub() {
  if (Tl) return Ue;
  Tl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var C = f.$$typeof;
      switch (C) {
        case e:
          switch (f = f.type, f) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case s:
                case c:
                case h:
                case p:
                case a:
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
  return Ue.ContextConsumer = s, Ue.ContextProvider = a, Ue.Element = e, Ue.ForwardRef = c, Ue.Fragment = n, Ue.Lazy = h, Ue.Memo = p, Ue.Portal = t, Ue.Profiler = i, Ue.StrictMode = r, Ue.Suspense = u, Ue.SuspenseList = d, Ue.isAsyncMode = function() {
    return !1;
  }, Ue.isConcurrentMode = function() {
    return !1;
  }, Ue.isContextConsumer = function(f) {
    return b(f) === s;
  }, Ue.isContextProvider = function(f) {
    return b(f) === a;
  }, Ue.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Ue.isForwardRef = function(f) {
    return b(f) === c;
  }, Ue.isFragment = function(f) {
    return b(f) === n;
  }, Ue.isLazy = function(f) {
    return b(f) === h;
  }, Ue.isMemo = function(f) {
    return b(f) === p;
  }, Ue.isPortal = function(f) {
    return b(f) === t;
  }, Ue.isProfiler = function(f) {
    return b(f) === i;
  }, Ue.isStrictMode = function(f) {
    return b(f) === r;
  }, Ue.isSuspense = function(f) {
    return b(f) === u;
  }, Ue.isSuspenseList = function(f) {
    return b(f) === d;
  }, Ue.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === r || f === u || f === d || f === g || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
  }, Ue.typeOf = b, Ue;
}
var Ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var El;
function db() {
  return El || (El = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, b = !1, f = !1, C = !1, T = !1, v;
    v = Symbol.for("react.module.reference");
    function w(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === i || T || A === r || A === u || A === d || C || A === g || y || b || f || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === p || A.$$typeof === a || A.$$typeof === s || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === v || A.getModuleId !== void 0));
    }
    function x(A) {
      if (typeof A == "object" && A !== null) {
        var de = A.$$typeof;
        switch (de) {
          case e:
            var ie = A.type;
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
                  case h:
                  case p:
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
    var k = s, R = a, $ = e, M = c, m = n, P = h, I = p, D = t, z = i, N = r, B = u, ee = d, Z = !1, ne = !1;
    function U(A) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(A) {
      return ne || (ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(A) {
      return x(A) === s;
    }
    function re(A) {
      return x(A) === a;
    }
    function F(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function W(A) {
      return x(A) === c;
    }
    function K(A) {
      return x(A) === n;
    }
    function _(A) {
      return x(A) === h;
    }
    function H(A) {
      return x(A) === p;
    }
    function Q(A) {
      return x(A) === t;
    }
    function X(A) {
      return x(A) === i;
    }
    function ce(A) {
      return x(A) === r;
    }
    function V(A) {
      return x(A) === u;
    }
    function ve(A) {
      return x(A) === d;
    }
    Ye.ContextConsumer = k, Ye.ContextProvider = R, Ye.Element = $, Ye.ForwardRef = M, Ye.Fragment = m, Ye.Lazy = P, Ye.Memo = I, Ye.Portal = D, Ye.Profiler = z, Ye.StrictMode = N, Ye.Suspense = B, Ye.SuspenseList = ee, Ye.isAsyncMode = U, Ye.isConcurrentMode = G, Ye.isContextConsumer = ue, Ye.isContextProvider = re, Ye.isElement = F, Ye.isForwardRef = W, Ye.isFragment = K, Ye.isLazy = _, Ye.isMemo = H, Ye.isPortal = Q, Ye.isProfiler = X, Ye.isStrictMode = ce, Ye.isSuspense = V, Ye.isSuspenseList = ve, Ye.isValidElementType = w, Ye.typeOf = x;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? Wa.exports = ub() : Wa.exports = db();
var Ol = Wa.exports;
function Nu(e, t = "") {
  return e.displayName || e.name || t;
}
function Rl(e, t, n) {
  const r = Nu(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function fb(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Nu(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ol.ForwardRef:
          return Rl(e, e.render, "ForwardRef");
        case Ol.Memo:
          return Rl(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Du(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: xl(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = xl(i.style));
  }), r;
}
const pb = hs();
function xa(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function mb(e) {
  return e ? (t, n) => n[e] : null;
}
function hb(e, t, n) {
  e.theme = vb(e.theme) ? n : e.theme[t] || e.theme;
}
function oi(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => oi(e, r));
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
    return Au(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Au(e, t, n = []) {
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
function gb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = pb,
    rootShouldForwardProp: r = xa,
    slotShouldForwardProp: i = xa
  } = e;
  function a(l) {
    hb(l, t, n);
  }
  return (l, c = {}) => {
    og(l, (x) => x.filter((k) => k !== ur));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = mb(ju(d)),
      ...y
    } = c, b = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), f = h || !1;
    let C = xa;
    d === "Root" || d === "root" ? C = r : d ? C = i : xb(l) && (C = void 0);
    const T = Ru(l, {
      shouldForwardProp: C,
      label: yb(u, d),
      ...y
    }), v = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x)
        return function(R) {
          return oi(R, x);
        };
      if (In(x)) {
        const k = Du(x);
        return k.variants ? function($) {
          return oi($, k);
        } : k.style;
      }
      return x;
    }, w = (...x) => {
      const k = [], R = x.map(v), $ = [];
      if (k.push(a), u && g && $.push(function(I) {
        var B, ee;
        const z = (ee = (B = I.theme.components) == null ? void 0 : B[u]) == null ? void 0 : ee.styleOverrides;
        if (!z)
          return null;
        const N = {};
        for (const Z in z)
          N[Z] = oi(I, z[Z]);
        return g(I, N);
      }), u && !b && $.push(function(I) {
        var N, B;
        const D = I.theme, z = (B = (N = D == null ? void 0 : D.components) == null ? void 0 : N[u]) == null ? void 0 : B.variants;
        return z ? Au(I, z) : null;
      }), f || $.push(ur), Array.isArray(R[0])) {
        const P = R.shift(), I = new Array(k.length).fill(""), D = new Array($.length).fill("");
        let z;
        z = [...I, ...P, ...D], z.raw = [...I, ...P.raw, ...D], k.unshift(z);
      }
      const M = [...k, ...R, ...$], m = T(...M);
      return l.muiName && (m.muiName = l.muiName), process.env.NODE_ENV !== "production" && (m.displayName = bb(u, d, l)), m;
    };
    return T.withConfig && (w.withConfig = T.withConfig), w;
  };
}
function bb(e, t, n) {
  return e ? `${e}${pe(t || "")}` : `Styled(${fb(n)})`;
}
function yb(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${ju(t || "Root")}`), n;
}
function vb(e) {
  for (const t in e)
    return !1;
  return !0;
}
function xb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ju(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Va(e, t) {
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
              n[i][c] = Va(a[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const jn = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function wb(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function bs(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), wb(e, t, n);
}
function Cb(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Zn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Zn(Cb(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : An(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : An(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Sb = (e) => {
  const t = Zn(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, eo = (e, t) => {
  try {
    return Sb(e);
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
function Fu(e) {
  e = Zn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (u, d = (u + n / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Ui({
    type: l,
    values: c
  });
}
function Ha(e) {
  e = Zn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Zn(Fu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Pl(e, t) {
  const n = Ha(e), r = Ha(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ot(e, t) {
  return e = Zn(e), t = bs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ui(e);
}
function qo(e, t, n) {
  try {
    return ot(e, t);
  } catch {
    return e;
  }
}
function Yi(e, t) {
  if (e = Zn(e), t = bs(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Ui(e);
}
function nt(e, t, n) {
  try {
    return Yi(e, t);
  } catch {
    return e;
  }
}
function qi(e, t) {
  if (e = Zn(e), t = bs(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Ui(e);
}
function rt(e, t, n) {
  try {
    return qi(e, t);
  } catch {
    return e;
  }
}
function Tb(e, t = 0.15) {
  return Ha(e) > 0.5 ? Yi(e, t) : qi(e, t);
}
function Go(e, t, n) {
  try {
    return Tb(e, t);
  } catch {
    return e;
  }
}
function Fn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Eb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Lu(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !Eb(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ao = Fn(o.element, Lu);
Ao.isRequired = Fn(o.element.isRequired, Lu);
function Ob(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Rb(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !Ob(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ys = Fn(o.elementType, Rb), Pb = "exact-prop: ​";
function _u(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Pb]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Hn(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const tn = o.oneOfType([o.func, o.object]);
function kl(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Bu(e, t = 166) {
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
function wa(e, t) {
  var n, r, i;
  return /* @__PURE__ */ S.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function Jt(e) {
  return e && e.ownerDocument || document;
}
function Un(e) {
  return Jt(e).defaultView || window;
}
function pi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Il = 0;
function kb(e) {
  const [t, n] = S.useState(e), r = e || t;
  return S.useEffect(() => {
    t == null && (Il += 1, n(`mui-${Il}`));
  }, [t]), r;
}
const Ib = {
  ...S
}, $l = Ib.useId;
function yo(e) {
  if ($l !== void 0) {
    const t = $l();
    return e ?? t;
  }
  return kb(e);
}
function $b(e, t, n, r, i) {
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
      current: u
    } = S.useRef(t);
    S.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = S.useCallback((u) => {
    i || s(u);
  }, []);
  return [l, c];
}
function $n(e) {
  const t = S.useRef(e);
  return jn(() => {
    t.current = e;
  }), S.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function St(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      pi(n, t);
    });
  }, e);
}
const Ml = {};
function zu(e, t) {
  const n = S.useRef(Ml);
  return n.current === Ml && (n.current = e(t)), n;
}
const Mb = [];
function Nb(e) {
  S.useEffect(e, Mb);
}
class vs {
  constructor() {
    Vr(this, "currentId", null);
    Vr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Vr(this, "disposeEffect", () => this.clear);
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
function Wu() {
  const e = zu(vs.create).current;
  return Nb(e.disposeEffect), e;
}
function Nl(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Vu(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
const Db = (e) => {
  const t = S.useRef({});
  return S.useEffect(() => {
    t.current = e;
  }), t.current;
};
function Ab(e) {
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
function Hu(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = Ab(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Uu(e, t, ...n) {
  return e[t] === void 0 ? null : Hu(e, t, ...n);
}
function Ua() {
  return null;
}
Uu.isRequired = Hu;
Ua.isRequired = Ua;
const Pr = process.env.NODE_ENV === "production" ? Ua : Uu;
function Ke(e, t, n = void 0) {
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
function jb(e) {
  return typeof e == "string";
}
function Yu(e, t, n) {
  return e === void 0 || jb(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function qu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Dl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Gu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const g = ye(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), y = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, b = {
      ...n,
      ...i,
      ...r
    };
    return g.length > 0 && (b.className = g), Object.keys(y).length > 0 && (b.style = y), {
      props: b,
      internalRef: void 0
    };
  }
  const s = qu({
    ...i,
    ...r
  }), l = Dl(r), c = Dl(i), u = t(s), d = ye(u == null ? void 0 : u.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return d.length > 0 && (h.className = d), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: u.ref
  };
}
function Ku(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ya(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : Ku(n, r), {
    props: l,
    internalRef: c
  } = Gu({
    ...a,
    externalSlotProps: s
  }), u = St(c, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Yu(t, {
    ...l,
    ref: u
  }, r);
}
function jo(e) {
  var t;
  return parseInt(S.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Fb = /* @__PURE__ */ S.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const xs = () => S.useContext(Fb) ?? !1, Lb = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function _b(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? Va(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Va(i, r) : r;
}
function Bb({
  props: e,
  name: t
}) {
  const n = S.useContext(Lb);
  return _b({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Al = {
  theme: void 0
};
function zb(e) {
  let t, n;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== n) && (Al.theme = i.theme, a = Du(e(Al)), t = a, n = i.theme), a;
  };
}
function Wb(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const jl = (e, t, n, r = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, Vb = (e, t, n) => {
  function r(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  r(e);
}, Hb = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Ca(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, s = {};
  return Vb(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, p = Hb(l, c);
        Object.assign(i, {
          [d]: p
        }), jl(a, l, `var(${d})`, u), jl(s, l, `var(${d}, ${p})`, u);
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
function Ub(e, t = {}) {
  const {
    getSelector: n = f,
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
    varsWithDefaults: p
  } = Ca(c, t);
  let h = p;
  const g = {}, {
    [l]: y,
    ...b
  } = a;
  if (Object.entries(b || {}).forEach(([v, w]) => {
    const {
      vars: x,
      css: k,
      varsWithDefaults: R
    } = Ca(w, t);
    h = Nt(h, R), g[v] = {
      css: k,
      vars: x
    };
  }), y) {
    const {
      css: v,
      vars: w,
      varsWithDefaults: x
    } = Ca(y, t);
    h = Nt(h, x), g[l] = {
      css: v,
      vars: w
    };
  }
  function f(v, w) {
    var k, R;
    let x = i;
    if (i === "class" && (x = ".%s"), i === "data" && (x = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (x = `[${i}="%s"]`), v) {
      if (x === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((R = (k = a[v]) == null ? void 0 : k.palette) == null ? void 0 : R.mode) || v})`]: {
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
      return Object.entries(g).forEach(([, {
        vars: w
      }]) => {
        v = Nt(v, w);
      }), v;
    },
    generateStyleSheets: () => {
      var $, M;
      const v = [], w = e.defaultColorScheme || "light";
      function x(m, P) {
        Object.keys(P).length && v.push(typeof m == "string" ? {
          [m]: {
            ...P
          }
        } : m);
      }
      x(n(void 0, {
        ...d
      }), d);
      const {
        [w]: k,
        ...R
      } = g;
      if (k) {
        const {
          css: m
        } = k, P = (M = ($ = a[w]) == null ? void 0 : $.palette) == null ? void 0 : M.mode, I = !r && P ? {
          colorScheme: P,
          ...m
        } : {
          ...m
        };
        x(n(w, {
          ...I
        }), I);
      }
      return Object.entries(R).forEach(([m, {
        css: P
      }]) => {
        var z, N;
        const I = (N = (z = a[m]) == null ? void 0 : z.palette) == null ? void 0 : N.mode, D = !r && I ? {
          colorScheme: I,
          ...P
        } : {
          ...P
        };
        x(n(m, {
          ...D
        }), D);
      }), v;
    }
  };
}
function Yb(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Gi = "$$material", vo = {
  black: "#000",
  white: "#fff"
}, qb = {
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
}, br = {
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
}, qr = {
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
}, yr = {
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
}, vr = {
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
}, xr = {
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
function Xu() {
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
const Gb = Xu();
function Zu() {
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
const Fl = Zu();
function Ll(e, t, n, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = qi(e.main, i) : t === "dark" && (e.dark = Yi(e.main, a)));
}
function Kb(e = "light") {
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
function Xb(e = "light") {
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
function Zb(e = "light") {
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
function Qb(e = "light") {
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
function Jb(e = "light") {
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
function ey(e = "light") {
  return e === "dark" ? {
    main: qr[400],
    light: qr[300],
    dark: qr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: qr[500],
    dark: qr[900]
  };
}
function ws(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || Kb(t), s = e.secondary || Xb(t), l = e.error || Zb(t), c = e.info || Qb(t), u = e.success || Jb(t), d = e.warning || ey(t);
  function p(b) {
    const f = Pl(b, Fl.text.primary) >= n ? Fl.text.primary : Gb.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Pl(b, f);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${f} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return f;
  }
  const h = ({
    color: b,
    name: f,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: v = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[C] && (b.main = b[C]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : An(11, f ? ` (${f})` : "", C));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : An(12, f ? ` (${f})` : "", JSON.stringify(b.main)));
    return Ll(b, "light", T, r), Ll(b, "dark", v, r), b.contrastText || (b.contrastText = p(b.main)), b;
  };
  let g;
  return t === "light" ? g = Xu() : t === "dark" && (g = Zu()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Nt({
    // A collection of common colors.
    common: {
      ...vo
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
      color: d,
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
    grey: qb,
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
function ty(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function ny(e, t) {
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
function ry(e) {
  return Math.round(e * 1e5) / 1e5;
}
const _l = {
  textTransform: "uppercase"
}, Bl = '"Roboto", "Helvetica", "Arial", sans-serif';
function oy(e, t) {
  const {
    fontFamily: n = Bl,
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
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = r / 14, g = d || ((f) => `${f / c * h}rem`), y = (f, C, T, v, w) => ({
    fontFamily: n,
    fontWeight: f,
    fontSize: g(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Bl ? {
      letterSpacing: `${ry(v / C)}em`
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
    button: y(s, 14, 1.75, 0.4, _l),
    caption: y(a, 12, 1.66, 0.4),
    overline: y(a, 12, 2.66, 1, _l),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Nt({
    htmlFontSize: c,
    pxToRem: g,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...b
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const iy = 0.2, ay = 0.14, sy = 0.12;
function ct(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${iy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ay})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${sy})`].join(",");
}
const ly = ["none", ct(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ct(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ct(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ct(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ct(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ct(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ct(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ct(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ct(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ct(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ct(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ct(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ct(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ct(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ct(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ct(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ct(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ct(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ct(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ct(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ct(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ct(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ct(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ct(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], cy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, uy = {
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
function zl(e) {
  return `${Math.round(e)}ms`;
}
function dy(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function fy(e) {
  const t = {
    ...cy,
    ...e.easing
  }, n = {
    ...uy,
    ...e.duration
  };
  return {
    getAutoHeightDuration: dy,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof s == "string" ? s : zl(s)} ${l} ${typeof c == "string" ? c : zl(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const py = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function my(e) {
  return In(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Qu(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !my(l) || s.startsWith("unstable_") ? delete r[s] : In(l) && (r[s] = {
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
function qa(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : An(20));
  const d = ws(a), p = hs(e);
  let h = Nt(p, {
    mixins: ny(p.breakpoints, r),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ly.slice(),
    typography: oy(d, l),
    transitions: fy(s),
    zIndex: {
      ...py
    }
  });
  if (h = Nt(h, u), h = t.reduce((g, y) => Nt(g, y), h), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (b, f) => {
      let C;
      for (C in b) {
        const T = b[C];
        if (g.includes(C) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Le("", C);
            console.error([`MUI: The \`${f}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
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
    Object.keys(h.components).forEach((b) => {
      const f = h.components[b].styleOverrides;
      f && b.startsWith("Mui") && y(f, b);
    });
  }
  return h.unstable_sxConfig = {
    ...Do,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return ur({
      sx: y,
      theme: this
    });
  }, h.toRuntimeSource = Qu, h;
}
function Ga(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const hy = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Ga(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Ju(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ed(e) {
  return e === "dark" ? hy : [];
}
function gy(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, a = ws(t);
  return {
    palette: a,
    opacity: {
      ...Ju(a.mode),
      ...n
    },
    overlays: r || ed(a.mode),
    ...i
  };
}
function by(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const yy = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], vy = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return yy(e.cssVarPrefix).forEach((l) => {
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
function xy(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function Y(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function to(e) {
  return !e || !e.startsWith("hsl") ? e : Fu(e);
}
function Wn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = eo(to(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function wy(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const On = (e) => {
  try {
    return e();
  } catch {
  }
}, Cy = (e = "mui") => Wb(e);
function Sa(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = gy({
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
  } = qa({
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
      ...Ju(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || ed(i)
  }, s;
}
function Sy(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = by,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, d = Object.keys(n)[0], p = r || (n.light && d !== "light" ? "light" : d), h = Cy(a), {
    [p]: g,
    light: y,
    dark: b,
    ...f
  } = n, C = {
    ...f
  };
  let T = g;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : An(21, p));
  const v = Sa(C, T, u, p);
  y && !C.light && Sa(C, y, void 0, "light"), b && !C.dark && Sa(C, b, void 0, "dark");
  let w = {
    defaultColorScheme: p,
    ...v,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: C,
    font: {
      ...ty(v.typography),
      ...v.font
    },
    spacing: wy(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach((M) => {
    const m = w.colorSchemes[M].palette, P = (I) => {
      const D = I.split("-"), z = D[1], N = D[2];
      return h(I, m[z][N]);
    };
    if (m.mode === "light" && (Y(m.common, "background", "#fff"), Y(m.common, "onBackground", "#000")), m.mode === "dark" && (Y(m.common, "background", "#000"), Y(m.common, "onBackground", "#fff")), xy(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      Y(m.Alert, "errorColor", nt(m.error.light, 0.6)), Y(m.Alert, "infoColor", nt(m.info.light, 0.6)), Y(m.Alert, "successColor", nt(m.success.light, 0.6)), Y(m.Alert, "warningColor", nt(m.warning.light, 0.6)), Y(m.Alert, "errorFilledBg", P("palette-error-main")), Y(m.Alert, "infoFilledBg", P("palette-info-main")), Y(m.Alert, "successFilledBg", P("palette-success-main")), Y(m.Alert, "warningFilledBg", P("palette-warning-main")), Y(m.Alert, "errorFilledColor", On(() => m.getContrastText(m.error.main))), Y(m.Alert, "infoFilledColor", On(() => m.getContrastText(m.info.main))), Y(m.Alert, "successFilledColor", On(() => m.getContrastText(m.success.main))), Y(m.Alert, "warningFilledColor", On(() => m.getContrastText(m.warning.main))), Y(m.Alert, "errorStandardBg", rt(m.error.light, 0.9)), Y(m.Alert, "infoStandardBg", rt(m.info.light, 0.9)), Y(m.Alert, "successStandardBg", rt(m.success.light, 0.9)), Y(m.Alert, "warningStandardBg", rt(m.warning.light, 0.9)), Y(m.Alert, "errorIconColor", P("palette-error-main")), Y(m.Alert, "infoIconColor", P("palette-info-main")), Y(m.Alert, "successIconColor", P("palette-success-main")), Y(m.Alert, "warningIconColor", P("palette-warning-main")), Y(m.AppBar, "defaultBg", P("palette-grey-100")), Y(m.Avatar, "defaultBg", P("palette-grey-400")), Y(m.Button, "inheritContainedBg", P("palette-grey-300")), Y(m.Button, "inheritContainedHoverBg", P("palette-grey-A100")), Y(m.Chip, "defaultBorder", P("palette-grey-400")), Y(m.Chip, "defaultAvatarColor", P("palette-grey-700")), Y(m.Chip, "defaultIconColor", P("palette-grey-700")), Y(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), Y(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), Y(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), Y(m.LinearProgress, "primaryBg", rt(m.primary.main, 0.62)), Y(m.LinearProgress, "secondaryBg", rt(m.secondary.main, 0.62)), Y(m.LinearProgress, "errorBg", rt(m.error.main, 0.62)), Y(m.LinearProgress, "infoBg", rt(m.info.main, 0.62)), Y(m.LinearProgress, "successBg", rt(m.success.main, 0.62)), Y(m.LinearProgress, "warningBg", rt(m.warning.main, 0.62)), Y(m.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), Y(m.Slider, "primaryTrack", rt(m.primary.main, 0.62)), Y(m.Slider, "secondaryTrack", rt(m.secondary.main, 0.62)), Y(m.Slider, "errorTrack", rt(m.error.main, 0.62)), Y(m.Slider, "infoTrack", rt(m.info.main, 0.62)), Y(m.Slider, "successTrack", rt(m.success.main, 0.62)), Y(m.Slider, "warningTrack", rt(m.warning.main, 0.62));
      const I = Go(m.background.default, 0.8);
      Y(m.SnackbarContent, "bg", I), Y(m.SnackbarContent, "color", On(() => m.getContrastText(I))), Y(m.SpeedDialAction, "fabHoverBg", Go(m.background.paper, 0.15)), Y(m.StepConnector, "border", P("palette-grey-400")), Y(m.StepContent, "border", P("palette-grey-400")), Y(m.Switch, "defaultColor", P("palette-common-white")), Y(m.Switch, "defaultDisabledColor", P("palette-grey-100")), Y(m.Switch, "primaryDisabledColor", rt(m.primary.main, 0.62)), Y(m.Switch, "secondaryDisabledColor", rt(m.secondary.main, 0.62)), Y(m.Switch, "errorDisabledColor", rt(m.error.main, 0.62)), Y(m.Switch, "infoDisabledColor", rt(m.info.main, 0.62)), Y(m.Switch, "successDisabledColor", rt(m.success.main, 0.62)), Y(m.Switch, "warningDisabledColor", rt(m.warning.main, 0.62)), Y(m.TableCell, "border", rt(qo(m.divider, 1), 0.88)), Y(m.Tooltip, "bg", qo(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      Y(m.Alert, "errorColor", rt(m.error.light, 0.6)), Y(m.Alert, "infoColor", rt(m.info.light, 0.6)), Y(m.Alert, "successColor", rt(m.success.light, 0.6)), Y(m.Alert, "warningColor", rt(m.warning.light, 0.6)), Y(m.Alert, "errorFilledBg", P("palette-error-dark")), Y(m.Alert, "infoFilledBg", P("palette-info-dark")), Y(m.Alert, "successFilledBg", P("palette-success-dark")), Y(m.Alert, "warningFilledBg", P("palette-warning-dark")), Y(m.Alert, "errorFilledColor", On(() => m.getContrastText(m.error.dark))), Y(m.Alert, "infoFilledColor", On(() => m.getContrastText(m.info.dark))), Y(m.Alert, "successFilledColor", On(() => m.getContrastText(m.success.dark))), Y(m.Alert, "warningFilledColor", On(() => m.getContrastText(m.warning.dark))), Y(m.Alert, "errorStandardBg", nt(m.error.light, 0.9)), Y(m.Alert, "infoStandardBg", nt(m.info.light, 0.9)), Y(m.Alert, "successStandardBg", nt(m.success.light, 0.9)), Y(m.Alert, "warningStandardBg", nt(m.warning.light, 0.9)), Y(m.Alert, "errorIconColor", P("palette-error-main")), Y(m.Alert, "infoIconColor", P("palette-info-main")), Y(m.Alert, "successIconColor", P("palette-success-main")), Y(m.Alert, "warningIconColor", P("palette-warning-main")), Y(m.AppBar, "defaultBg", P("palette-grey-900")), Y(m.AppBar, "darkBg", P("palette-background-paper")), Y(m.AppBar, "darkColor", P("palette-text-primary")), Y(m.Avatar, "defaultBg", P("palette-grey-600")), Y(m.Button, "inheritContainedBg", P("palette-grey-800")), Y(m.Button, "inheritContainedHoverBg", P("palette-grey-700")), Y(m.Chip, "defaultBorder", P("palette-grey-700")), Y(m.Chip, "defaultAvatarColor", P("palette-grey-300")), Y(m.Chip, "defaultIconColor", P("palette-grey-300")), Y(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), Y(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), Y(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), Y(m.LinearProgress, "primaryBg", nt(m.primary.main, 0.5)), Y(m.LinearProgress, "secondaryBg", nt(m.secondary.main, 0.5)), Y(m.LinearProgress, "errorBg", nt(m.error.main, 0.5)), Y(m.LinearProgress, "infoBg", nt(m.info.main, 0.5)), Y(m.LinearProgress, "successBg", nt(m.success.main, 0.5)), Y(m.LinearProgress, "warningBg", nt(m.warning.main, 0.5)), Y(m.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), Y(m.Slider, "primaryTrack", nt(m.primary.main, 0.5)), Y(m.Slider, "secondaryTrack", nt(m.secondary.main, 0.5)), Y(m.Slider, "errorTrack", nt(m.error.main, 0.5)), Y(m.Slider, "infoTrack", nt(m.info.main, 0.5)), Y(m.Slider, "successTrack", nt(m.success.main, 0.5)), Y(m.Slider, "warningTrack", nt(m.warning.main, 0.5));
      const I = Go(m.background.default, 0.98);
      Y(m.SnackbarContent, "bg", I), Y(m.SnackbarContent, "color", On(() => m.getContrastText(I))), Y(m.SpeedDialAction, "fabHoverBg", Go(m.background.paper, 0.15)), Y(m.StepConnector, "border", P("palette-grey-600")), Y(m.StepContent, "border", P("palette-grey-600")), Y(m.Switch, "defaultColor", P("palette-grey-300")), Y(m.Switch, "defaultDisabledColor", P("palette-grey-600")), Y(m.Switch, "primaryDisabledColor", nt(m.primary.main, 0.55)), Y(m.Switch, "secondaryDisabledColor", nt(m.secondary.main, 0.55)), Y(m.Switch, "errorDisabledColor", nt(m.error.main, 0.55)), Y(m.Switch, "infoDisabledColor", nt(m.info.main, 0.55)), Y(m.Switch, "successDisabledColor", nt(m.success.main, 0.55)), Y(m.Switch, "warningDisabledColor", nt(m.warning.main, 0.55)), Y(m.TableCell, "border", nt(qo(m.divider, 1), 0.68)), Y(m.Tooltip, "bg", qo(m.grey[700], 0.92));
    }
    Wn(m.background, "default"), Wn(m.background, "paper"), Wn(m.common, "background"), Wn(m.common, "onBackground"), Wn(m, "divider"), Object.keys(m).forEach((I) => {
      const D = m[I];
      D && typeof D == "object" && (D.main && Y(m[I], "mainChannel", eo(to(D.main))), D.light && Y(m[I], "lightChannel", eo(to(D.light))), D.dark && Y(m[I], "darkChannel", eo(to(D.dark))), D.contrastText && Y(m[I], "contrastTextChannel", eo(to(D.contrastText))), I === "text" && (Wn(m[I], "primary"), Wn(m[I], "secondary")), I === "action" && (D.active && Wn(m[I], "active"), D.selected && Wn(m[I], "selected")));
    });
  }), w = t.reduce((M, m) => Nt(M, m), w);
  const x = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: vy(w)
  }, {
    vars: k,
    generateThemeVars: R,
    generateStyleSheets: $
  } = Ub(w, x);
  return w.vars = k, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([M, m]) => {
    w[M] = m;
  }), w.generateThemeVars = R, w.generateStyleSheets = $, w.generateSpacing = function() {
    return Iu(u.spacing, ps(this));
  }, w.getColorSchemeSelector = Yb(l), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = s, w.unstable_sxConfig = {
    ...Do,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(m) {
    return ur({
      sx: m,
      theme: this
    });
  }, w.toRuntimeSource = Qu, w;
}
function Wl(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: ws({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function td(e = {}, ...t) {
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
      return qa(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const p = qa({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, Wl(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, Wl(p, "light", u.light)), p;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Sy({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Cs = td();
function Ss() {
  const e = gs(Cs);
  return process.env.NODE_ENV !== "production" && S.useDebugValue(e), e[Gi] || e;
}
function nd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const nn = (e) => nd(e) && e !== "classes", me = gb({
  themeId: Gi,
  defaultTheme: Cs,
  rootShouldForwardProp: nn
}), Ty = De("MuiBox", ["root"]), Ey = td(), rd = lb({
  themeId: Gi,
  defaultTheme: Ey,
  defaultClassName: Ty.root,
  generateClassName: Mu.generate
});
process.env.NODE_ENV !== "production" && (rd.propTypes = {
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
function od(e) {
  return /* @__PURE__ */ O.jsx($u, {
    ...e,
    defaultTheme: Cs,
    themeId: Gi
  });
}
process.env.NODE_ENV !== "production" && (od.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Oy(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ O.jsx(od, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function Ze(e) {
  return Bb(e);
}
function Ko(e) {
  return parseInt(e, 10) || 0;
}
const Ry = {
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
function Py(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const id = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l,
    ...c
  } = t, {
    current: u
  } = S.useRef(l != null), d = S.useRef(null), p = St(n, d), h = S.useRef(null), g = S.useRef(null), y = S.useCallback(() => {
    const C = d.current, v = Un(C).getComputedStyle(C);
    if (v.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const w = g.current;
    w.style.width = v.width, w.value = C.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const x = v.boxSizing, k = Ko(v.paddingBottom) + Ko(v.paddingTop), R = Ko(v.borderBottomWidth) + Ko(v.borderTopWidth), $ = w.scrollHeight;
    w.value = "x";
    const M = w.scrollHeight;
    let m = $;
    a && (m = Math.max(Number(a) * M, m)), i && (m = Math.min(Number(i) * M, m)), m = Math.max(m, M);
    const P = m + (x === "border-box" ? k + R : 0), I = Math.abs(m - $) <= 1;
    return {
      outerHeightStyle: P,
      overflowing: I
    };
  }, [i, a, t.placeholder]), b = S.useCallback(() => {
    const C = y();
    if (Py(C))
      return;
    const T = C.outerHeightStyle, v = d.current;
    h.current !== T && (h.current = T, v.style.height = `${T}px`), v.style.overflow = C.overflowing ? "hidden" : "";
  }, [y]);
  jn(() => {
    const C = () => {
      b();
    };
    let T;
    const v = () => {
      cancelAnimationFrame(T), T = requestAnimationFrame(() => {
        C();
      });
    }, w = Bu(C), x = d.current, k = Un(x);
    k.addEventListener("resize", w);
    let R;
    return typeof ResizeObserver < "u" && (R = new ResizeObserver(process.env.NODE_ENV === "test" ? v : C), R.observe(x)), () => {
      w.clear(), cancelAnimationFrame(T), k.removeEventListener("resize", w), R && R.disconnect();
    };
  }, [y, b]), jn(() => {
    b();
  });
  const f = (C) => {
    u || b(), r && r(C);
  };
  return /* @__PURE__ */ O.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ O.jsx("textarea", {
      value: l,
      onChange: f,
      ref: p,
      rows: a,
      style: s,
      ...c
    }), /* @__PURE__ */ O.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: g,
      tabIndex: -1,
      style: {
        ...Ry.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (id.propTypes = {
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
function mi(e) {
  return typeof e == "string";
}
function Br({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const Ki = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ki.displayName = "FormControlContext");
function fr() {
  return S.useContext(Ki);
}
const je = zb;
function Vl(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function hi(e, t = !1) {
  return e && (Vl(e.value) && e.value !== "" || t && Vl(e.defaultValue) && e.defaultValue !== "");
}
function ky(e) {
  return e.startAdornment;
}
function Iy(e) {
  return Le("MuiInputBase", e);
}
const Kt = De("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Hl;
const Xi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${pe(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Zi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, $y = (e) => {
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
    readOnly: p,
    size: h,
    startAdornment: g,
    type: y
  } = e, b = {
    root: ["root", `color${pe(n)}`, r && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", h && h !== "medium" && `size${pe(h)}`, d && "multiline", g && "adornedStart", a && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", d && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", g && "inputAdornedStart", a && "inputAdornedEnd", p && "readOnly"]
  };
  return Ke(b, Iy, t);
}, Qi = me("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Xi
})(je(({
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
  [`&.${Kt.disabled}`]: {
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
}))), Ji = me("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Zi
})(je(({
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
    [`label[data-shrink=false] + .${Kt.formControl} &`]: {
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
    [`&.${Kt.disabled}`]: {
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
})), Ul = Oy({
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
}), Fo = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    defaultValue: p,
    disabled: h,
    disableInjectingGlobalStyles: g,
    endAdornment: y,
    error: b,
    fullWidth: f = !1,
    id: C,
    inputComponent: T = "input",
    inputProps: v = {},
    inputRef: w,
    margin: x,
    maxRows: k,
    minRows: R,
    multiline: $ = !1,
    name: M,
    onBlur: m,
    onChange: P,
    onClick: I,
    onFocus: D,
    onKeyDown: z,
    onKeyUp: N,
    placeholder: B,
    readOnly: ee,
    renderSuffix: Z,
    rows: ne,
    size: U,
    slotProps: G = {},
    slots: ue = {},
    startAdornment: re,
    type: F = "text",
    value: W,
    ...K
  } = r, _ = v.value != null ? v.value : W, {
    current: H
  } = S.useRef(_ != null), Q = S.useRef(), X = S.useCallback((Pe) => {
    process.env.NODE_ENV !== "production" && Pe && Pe.nodeName !== "INPUT" && !Pe.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ce = St(Q, w, v.ref, X), [V, ve] = S.useState(!1), A = fr();
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    if (A)
      return A.registerEffect();
  }, [A]);
  const de = Br({
    props: r,
    muiFormControl: A,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  de.focused = A ? A.focused : V, S.useEffect(() => {
    !A && h && V && (ve(!1), m && m());
  }, [A, h, V, m]);
  const ie = A && A.onFilled, $e = A && A.onEmpty, be = S.useCallback((Pe) => {
    hi(Pe) ? ie && ie() : $e && $e();
  }, [ie, $e]);
  jn(() => {
    H && be({
      value: _
    });
  }, [_, be, H]);
  const Te = (Pe) => {
    D && D(Pe), v.onFocus && v.onFocus(Pe), A && A.onFocus ? A.onFocus(Pe) : ve(!0);
  }, Fe = (Pe) => {
    m && m(Pe), v.onBlur && v.onBlur(Pe), A && A.onBlur ? A.onBlur(Pe) : ve(!1);
  }, Ee = (Pe, ...ft) => {
    if (!H) {
      const Dt = Pe.target || Q.current;
      if (Dt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : An(1));
      be({
        value: Dt.value
      });
    }
    v.onChange && v.onChange(Pe, ...ft), P && P(Pe, ...ft);
  };
  S.useEffect(() => {
    be(Q.current);
  }, []);
  const We = (Pe) => {
    Q.current && Pe.currentTarget === Pe.target && Q.current.focus(), I && I(Pe);
  };
  let fe = T, _e = v;
  $ && fe === "input" && (ne ? (process.env.NODE_ENV !== "production" && (R || k) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), _e = {
    type: void 0,
    minRows: ne,
    maxRows: ne,
    ..._e
  }) : _e = {
    type: void 0,
    maxRows: k,
    minRows: R,
    ..._e
  }, fe = id);
  const bt = (Pe) => {
    be(Pe.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  S.useEffect(() => {
    A && A.setAdornedStart(!!re);
  }, [A, re]);
  const xt = {
    ...r,
    color: de.color || "primary",
    disabled: de.disabled,
    endAdornment: y,
    error: de.error,
    focused: de.focused,
    formControl: A,
    fullWidth: f,
    hiddenLabel: de.hiddenLabel,
    multiline: $,
    size: de.size,
    startAdornment: re,
    type: F
  }, Qe = $y(xt), Je = ue.root || u.Root || Qi, Re = G.root || d.root || {}, st = ue.input || u.Input || Ji;
  return _e = {
    ..._e,
    ...G.input ?? d.input
  }, /* @__PURE__ */ O.jsxs(S.Fragment, {
    children: [!g && typeof Ul == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Hl || (Hl = /* @__PURE__ */ O.jsx(Ul, {}))), /* @__PURE__ */ O.jsxs(Je, {
      ...Re,
      ref: n,
      onClick: We,
      ...K,
      ...!mi(Je) && {
        ownerState: {
          ...xt,
          ...Re.ownerState
        }
      },
      className: ye(Qe.root, Re.className, l, ee && "MuiInputBase-readOnly"),
      children: [re, /* @__PURE__ */ O.jsx(Ki.Provider, {
        value: null,
        children: /* @__PURE__ */ O.jsx(st, {
          "aria-invalid": de.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: s,
          defaultValue: p,
          disabled: de.disabled,
          id: C,
          onAnimationStart: bt,
          name: M,
          placeholder: B,
          readOnly: ee,
          required: de.required,
          rows: ne,
          value: _,
          onKeyDown: z,
          onKeyUp: N,
          type: F,
          ..._e,
          ...!mi(st) && {
            as: fe,
            ownerState: {
              ...xt,
              ..._e.ownerState
            }
          },
          ref: ce,
          className: ye(Qe.input, _e.className, ee && "MuiInputBase-readOnly"),
          onBlur: Fe,
          onChange: Ee,
          onFocus: Te
        })
      }), y, Z ? Z({
        ...de,
        startAdornment: re
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Fo.propTypes = {
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
  inputComponent: ys,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: tn,
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
function My(e) {
  return typeof e.main == "string";
}
function Ny(e, t = []) {
  if (!My(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function fn(e = []) {
  return ([, t]) => t && Ny(t, e);
}
function Dy(e) {
  return Le("MuiInput", e);
}
const Xn = {
  ...Kt,
  ...De("MuiInput", ["root", "underline", "input"])
}, Ay = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ke({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Dy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, jy = me(Qi, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Xi(e, t), !n.disableUnderline && t.underline];
  }
})(je(({
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
        [`&.${Xn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Xn.error}`]: {
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
        [`&:hover:not(.${Xn.disabled}, .${Xn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Xn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(fn()).map(([r]) => ({
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
})), Fy = me(Ji, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Zi
})({}), xo = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    slots: p = {},
    type: h = "text",
    ...g
  } = r, y = Ay(r), f = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, C = d ?? s ? Nt(d ?? s, f) : f, T = p.root ?? a.Root ?? jy, v = p.input ?? a.Input ?? Fy;
  return /* @__PURE__ */ O.jsx(Fo, {
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
    ...g,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
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
  inputRef: tn,
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
xo && (xo.muiName = "Input");
function Ly(e) {
  return Le("MuiFilledInput", e);
}
const Xt = {
  ...Kt,
  ...De("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function _y(e) {
  return Le("MuiSvgIcon", e);
}
De("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const By = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(n)}`]
  };
  return Ke(i, _y, r);
}, zy = me("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${pe(n.color)}`], t[`fontSize${pe(n.fontSize)}`]];
  }
})(je(({
  theme: e
}) => {
  var t, n, r, i, a, s, l, c, u, d, p, h, g, y;
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
        var f, C;
        return {
          props: {
            color: b
          },
          style: {
            color: (C = (f = (e.vars ?? e).palette) == null ? void 0 : f[b]) == null ? void 0 : C.main
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
          color: (y = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : y.disabled
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
})), wo = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    titleAccess: p,
    viewBox: h = "0 0 24 24",
    ...g
  } = r, y = /* @__PURE__ */ S.isValidElement(i) && i.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: y
  }, f = {};
  d || (f.viewBox = h);
  const C = By(b);
  return /* @__PURE__ */ O.jsxs(zy, {
    as: l,
    className: ye(C.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...f,
    ...g,
    ...y && i.props,
    ownerState: b,
    children: [y ? i.props.children : i, p ? /* @__PURE__ */ O.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (wo.propTypes = {
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
wo && (wo.muiName = "SvgIcon");
function _n(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ O.jsx(wo, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = wo.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(n));
}
const Wy = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: i,
    size: a,
    hiddenLabel: s,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", r && "adornedStart", i && "adornedEnd", a === "small" && `size${pe(a)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = Ke(c, Ly, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, Vy = me(Qi, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Xi(e, t), !n.disableUnderline && t.underline];
  }
})(je(({
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
    [`&.${Xt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Xt.disabled}`]: {
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
        [`&.${Xt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Xt.error}`]: {
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
        [`&:hover:not(.${Xt.disabled}, .${Xt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Xt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(fn()).map(([s]) => {
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
})), Hy = me(Ji, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Zi
})(je(({
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
}))), Co = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    slotProps: p,
    slots: h = {},
    type: g = "text",
    ...y
  } = r, b = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    type: g
  }, f = Wy(r), C = {
    root: {
      ownerState: b
    },
    input: {
      ownerState: b
    }
  }, T = p ?? s ? Nt(C, p ?? s) : C, v = h.root ?? a.Root ?? Vy, w = h.input ?? a.Input ?? Hy;
  return /* @__PURE__ */ O.jsx(Fo, {
    slots: {
      root: v,
      input: w
    },
    componentsProps: T,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: n,
    type: g,
    ...y,
    classes: f
  });
});
process.env.NODE_ENV !== "production" && (Co.propTypes = {
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
  inputRef: tn,
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
Co && (Co.muiName = "Input");
var Yl;
const Uy = me("fieldset", {
  shouldForwardProp: nn
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
}), Yy = me("legend", {
  shouldForwardProp: nn
})(je(({
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
function ad(e) {
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
  return /* @__PURE__ */ O.jsx(Uy, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...s,
    children: /* @__PURE__ */ O.jsx(Yy, {
      ownerState: c,
      children: l ? /* @__PURE__ */ O.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Yl || (Yl = /* @__PURE__ */ O.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (ad.propTypes = {
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
function qy(e) {
  return Le("MuiOutlinedInput", e);
}
const ln = {
  ...Kt,
  ...De("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, Gy = (e) => {
  const {
    classes: t
  } = e, r = Ke({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, qy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, Ky = me(Qi, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Xi
})(je(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${ln.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${ln.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${ln.focused} .${ln.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(fn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${ln.focused} .${ln.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${ln.error} .${ln.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${ln.disabled} .${ln.notchedOutline}`]: {
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
})), Xy = me(ad, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(je(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), Zy = me(Ji, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Zi
})(je(({
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
}))), So = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r;
  const i = Ze({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: a = {},
    fullWidth: s = !1,
    inputComponent: l = "input",
    label: c,
    multiline: u = !1,
    notched: d,
    slots: p = {},
    type: h = "text",
    ...g
  } = i, y = Gy(i), b = fr(), f = Br({
    props: i,
    muiFormControl: b,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...i,
    color: f.color || "primary",
    disabled: f.disabled,
    error: f.error,
    focused: f.focused,
    formControl: b,
    fullWidth: s,
    hiddenLabel: f.hiddenLabel,
    multiline: u,
    size: f.size,
    type: h
  }, T = p.root ?? a.Root ?? Ky, v = p.input ?? a.Input ?? Zy;
  return /* @__PURE__ */ O.jsx(Fo, {
    slots: {
      root: T,
      input: v
    },
    renderSuffix: (w) => /* @__PURE__ */ O.jsx(Xy, {
      ownerState: C,
      className: y.notchedOutline,
      label: c != null && c !== "" && f.required ? r || (r = /* @__PURE__ */ O.jsxs(S.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof d < "u" ? d : !!(w.startAdornment || w.filled || w.focused)
    }),
    fullWidth: s,
    inputComponent: l,
    multiline: u,
    ref: n,
    type: h,
    ...g,
    classes: {
      ...y,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (So.propTypes = {
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
  inputRef: tn,
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
So && (So.muiName = "Input");
function Qy(e) {
  return Le("MuiFormLabel", e);
}
const so = De("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Jy = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${pe(n)}`, i && "disabled", a && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return Ke(c, Qy, t);
}, ev = me("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(je(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(fn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${so.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${so.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${so.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), tv = me("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(je(({
  theme: e
}) => ({
  [`&.${so.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), sd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    focused: p,
    required: h,
    ...g
  } = r, y = fr(), b = Br({
    props: r,
    muiFormControl: y,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), f = {
    ...r,
    color: b.color || "primary",
    component: l,
    disabled: b.disabled,
    error: b.error,
    filled: b.filled,
    focused: b.focused,
    required: b.required
  }, C = Jy(f);
  return /* @__PURE__ */ O.jsxs(ev, {
    as: l,
    ownerState: f,
    className: ye(C.root, a),
    ref: n,
    ...g,
    children: [i, b.required && /* @__PURE__ */ O.jsxs(tv, {
      ownerState: f,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (sd.propTypes = {
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
function nv(e) {
  return Le("MuiInputLabel", e);
}
De("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const rv = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !a && "animated", i && "shrink", r && r !== "normal" && `size${pe(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = Ke(c, nv, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, ov = me(sd, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${so.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(je(({
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
}))), ld = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: a,
    shrink: s,
    variant: l,
    className: c,
    ...u
  } = r, d = fr();
  let p = s;
  typeof p > "u" && d && (p = d.filled || d.focused || d.adornedStart);
  const h = Br({
    props: r,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), g = {
    ...r,
    disableAnimation: i,
    formControl: d,
    shrink: p,
    size: h.size,
    variant: h.variant,
    required: h.required,
    focused: h.focused
  }, y = rv(g);
  return /* @__PURE__ */ O.jsx(ov, {
    "data-shrink": p,
    ref: n,
    className: ye(y.root, c),
    ...u,
    ownerState: g,
    classes: y
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
function iv(e) {
  return Le("MuiFormControl", e);
}
De("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const av = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${pe(n)}`, r && "fullWidth"]
  };
  return Ke(i, iv, t);
}, sv = me("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${pe(e.margin)}`],
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
}), cd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    fullWidth: p = !1,
    hiddenLabel: h = !1,
    margin: g = "none",
    required: y = !1,
    size: b = "medium",
    variant: f = "outlined",
    ...C
  } = r, T = {
    ...r,
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: h,
    margin: g,
    required: y,
    size: b,
    variant: f
  }, v = av(T), [w, x] = S.useState(() => {
    let z = !1;
    return i && S.Children.forEach(i, (N) => {
      if (!wa(N, ["Input", "Select"]))
        return;
      const B = wa(N, ["Select"]) ? N.props.input : N;
      B && ky(B.props) && (z = !0);
    }), z;
  }), [k, R] = S.useState(() => {
    let z = !1;
    return i && S.Children.forEach(i, (N) => {
      wa(N, ["Input", "Select"]) && (hi(N.props, !0) || hi(N.props.inputProps, !0)) && (z = !0);
    }), z;
  }), [$, M] = S.useState(!1);
  c && $ && M(!1);
  const m = d !== void 0 && !c ? d : $;
  let P;
  const I = S.useRef(!1);
  process.env.NODE_ENV !== "production" && (P = () => (I.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), I.current = !0, () => {
    I.current = !1;
  }));
  const D = S.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: x,
    color: s,
    disabled: c,
    error: u,
    filled: k,
    focused: m,
    fullWidth: p,
    hiddenLabel: h,
    size: b,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      R(!1);
    },
    onFilled: () => {
      R(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: P,
    required: y,
    variant: f
  }), [w, s, c, u, k, m, p, h, P, y, b, f]);
  return /* @__PURE__ */ O.jsx(Ki.Provider, {
    value: D,
    children: /* @__PURE__ */ O.jsx(sv, {
      as: l,
      ownerState: T,
      className: ye(v.root, a),
      ref: n,
      ...C,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (cd.propTypes = {
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
function lv(e) {
  return Le("MuiFormHelperText", e);
}
const ql = De("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Gl;
const cv = (e) => {
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
    root: ["root", i && "disabled", a && "error", r && `size${pe(r)}`, n && "contained", l && "focused", s && "filled", c && "required"]
  };
  return Ke(u, lv, t);
}, uv = me("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${pe(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(je(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${ql.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ql.error}`]: {
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
}))), ud = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    margin: p,
    required: h,
    variant: g,
    ...y
  } = r, b = fr(), f = Br({
    props: r,
    muiFormControl: b,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: s,
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
  const T = cv(C);
  return /* @__PURE__ */ O.jsx(uv, {
    as: s,
    className: ye(T.root, a),
    ref: n,
    ...y,
    ownerState: C,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Gl || (Gl = /* @__PURE__ */ O.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (ud.propTypes = {
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
var Ka = { exports: {} }, qe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kl;
function dv() {
  if (Kl) return qe;
  Kl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var C = f.$$typeof;
      switch (C) {
        case e:
          switch (f = f.type, f) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case s:
                case c:
                case h:
                case p:
                case a:
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
  return qe.ContextConsumer = s, qe.ContextProvider = a, qe.Element = e, qe.ForwardRef = c, qe.Fragment = n, qe.Lazy = h, qe.Memo = p, qe.Portal = t, qe.Profiler = i, qe.StrictMode = r, qe.Suspense = u, qe.SuspenseList = d, qe.isAsyncMode = function() {
    return !1;
  }, qe.isConcurrentMode = function() {
    return !1;
  }, qe.isContextConsumer = function(f) {
    return b(f) === s;
  }, qe.isContextProvider = function(f) {
    return b(f) === a;
  }, qe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, qe.isForwardRef = function(f) {
    return b(f) === c;
  }, qe.isFragment = function(f) {
    return b(f) === n;
  }, qe.isLazy = function(f) {
    return b(f) === h;
  }, qe.isMemo = function(f) {
    return b(f) === p;
  }, qe.isPortal = function(f) {
    return b(f) === t;
  }, qe.isProfiler = function(f) {
    return b(f) === i;
  }, qe.isStrictMode = function(f) {
    return b(f) === r;
  }, qe.isSuspense = function(f) {
    return b(f) === u;
  }, qe.isSuspenseList = function(f) {
    return b(f) === d;
  }, qe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === r || f === u || f === d || f === g || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
  }, qe.typeOf = b, qe;
}
var Ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xl;
function fv() {
  return Xl || (Xl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, b = !1, f = !1, C = !1, T = !1, v;
    v = Symbol.for("react.module.reference");
    function w(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === i || T || A === r || A === u || A === d || C || A === g || y || b || f || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === p || A.$$typeof === a || A.$$typeof === s || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === v || A.getModuleId !== void 0));
    }
    function x(A) {
      if (typeof A == "object" && A !== null) {
        var de = A.$$typeof;
        switch (de) {
          case e:
            var ie = A.type;
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
                  case h:
                  case p:
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
    var k = s, R = a, $ = e, M = c, m = n, P = h, I = p, D = t, z = i, N = r, B = u, ee = d, Z = !1, ne = !1;
    function U(A) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(A) {
      return ne || (ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(A) {
      return x(A) === s;
    }
    function re(A) {
      return x(A) === a;
    }
    function F(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function W(A) {
      return x(A) === c;
    }
    function K(A) {
      return x(A) === n;
    }
    function _(A) {
      return x(A) === h;
    }
    function H(A) {
      return x(A) === p;
    }
    function Q(A) {
      return x(A) === t;
    }
    function X(A) {
      return x(A) === i;
    }
    function ce(A) {
      return x(A) === r;
    }
    function V(A) {
      return x(A) === u;
    }
    function ve(A) {
      return x(A) === d;
    }
    Ge.ContextConsumer = k, Ge.ContextProvider = R, Ge.Element = $, Ge.ForwardRef = M, Ge.Fragment = m, Ge.Lazy = P, Ge.Memo = I, Ge.Portal = D, Ge.Profiler = z, Ge.StrictMode = N, Ge.Suspense = B, Ge.SuspenseList = ee, Ge.isAsyncMode = U, Ge.isConcurrentMode = G, Ge.isContextConsumer = ue, Ge.isContextProvider = re, Ge.isElement = F, Ge.isForwardRef = W, Ge.isFragment = K, Ge.isLazy = _, Ge.isMemo = H, Ge.isPortal = Q, Ge.isProfiler = X, Ge.isStrictMode = ce, Ge.isSuspense = V, Ge.isSuspenseList = ve, Ge.isValidElementType = w, Ge.typeOf = x;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? Ka.exports = dv() : Ka.exports = fv();
var Ts = Ka.exports;
const gi = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (gi.displayName = "ListContext");
function pv(e) {
  return Le("MuiList", e);
}
De("MuiList", ["root", "padding", "dense", "subheader"]);
const mv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ke({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, pv, t);
}, hv = me("ul", {
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
}), dd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
  } = r, p = S.useMemo(() => ({
    dense: l
  }), [l]), h = {
    ...r,
    component: s,
    dense: l,
    disablePadding: c
  }, g = mv(h);
  return /* @__PURE__ */ O.jsx(gi.Provider, {
    value: p,
    children: /* @__PURE__ */ O.jsxs(hv, {
      as: s,
      className: ye(g.root, a),
      ref: n,
      ownerState: h,
      ...d,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (dd.propTypes = {
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
function Ta(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Zl(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function fd(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Gr(e, t, n, r, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !fd(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const pd = /* @__PURE__ */ S.forwardRef(function(t, n) {
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
    variant: p = "selectedMenu",
    ...h
  } = t, g = S.useRef(null), y = S.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  jn(() => {
    i && g.current.focus();
  }, [i]), S.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: w
    }) => {
      const x = !g.current.style.width;
      if (v.clientHeight < g.current.clientHeight && x) {
        const k = `${Vu(Un(v))}px`;
        g.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = k, g.current.style.width = `calc(100% + ${k})`;
      }
      return g.current;
    }
  }), []);
  const b = (v) => {
    const w = g.current, x = v.key;
    if (v.ctrlKey || v.metaKey || v.altKey) {
      d && d(v);
      return;
    }
    const R = Jt(w).activeElement;
    if (x === "ArrowDown")
      v.preventDefault(), Gr(w, R, u, c, Ta);
    else if (x === "ArrowUp")
      v.preventDefault(), Gr(w, R, u, c, Zl);
    else if (x === "Home")
      v.preventDefault(), Gr(w, null, u, c, Ta);
    else if (x === "End")
      v.preventDefault(), Gr(w, null, u, c, Zl);
    else if (x.length === 1) {
      const $ = y.current, M = x.toLowerCase(), m = performance.now();
      $.keys.length > 0 && (m - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && M !== $.keys[0] && ($.repeating = !1)), $.lastTime = m, $.keys.push(M);
      const P = R && !$.repeating && fd(R, $);
      $.previousKeyMatched && (P || Gr(w, R, !1, c, Ta, $)) ? v.preventDefault() : $.previousKeyMatched = !1;
    }
    d && d(v);
  }, f = St(g, n);
  let C = -1;
  S.Children.forEach(s, (v, w) => {
    if (!/* @__PURE__ */ S.isValidElement(v)) {
      C === w && (C += 1, C >= s.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ts.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (p === "selectedMenu" && v.props.selected || C === -1) && (C = w), C === w && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (C += 1, C >= s.length && (C = -1));
  });
  const T = S.Children.map(s, (v, w) => {
    if (w === C) {
      const x = {};
      return a && (x.autoFocus = !0), v.props.tabIndex === void 0 && p === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ S.cloneElement(v, x);
    }
    return v;
  });
  return /* @__PURE__ */ O.jsx(dd, {
    role: "menu",
    ref: f,
    className: l,
    onKeyDown: b,
    tabIndex: i ? 0 : -1,
    ...h,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (pd.propTypes = {
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
function md(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Xa(e, t) {
  return Xa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Xa(e, t);
}
function hd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xa(e, t);
}
const Ql = {
  disabled: !1
};
var gv = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
var bv = function(t) {
  return t.scrollTop;
}, no = "unmounted", or = "exited", ir = "entering", Sr = "entered", Za = "exiting", Bn = /* @__PURE__ */ function(e) {
  hd(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = or, a.appearStatus = ir) : c = Sr : r.unmountOnExit || r.mountOnEnter ? c = no : c = or, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === no ? {
      status: or
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== ir && s !== Sr && (a = ir) : (s === ir || s === Sr) && (a = Za);
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
      if (this.cancelNextCallback(), a === ir) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Uo.findDOMNode(this);
          s && bv(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === or && this.setState({
      status: no
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Uo.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), h = l ? p.appear : p.enter;
    if (!i && !s || Ql.disabled) {
      this.safeSetState({
        status: Sr
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: ir
    }, function() {
      a.props.onEntering(u, d), a.onTransitionEnd(h, function() {
        a.safeSetState({
          status: Sr
        }, function() {
          a.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Uo.findDOMNode(this);
    if (!a || Ql.disabled) {
      this.safeSetState({
        status: or
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Za
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: or
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Uo.findDOMNode(this), l = i == null && !this.props.addEndListener;
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
    if (i === no)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = md(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
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
    var n = gv;
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
Bn.UNMOUNTED = no;
Bn.EXITED = or;
Bn.ENTERING = ir;
Bn.ENTERED = Sr;
Bn.EXITING = Za;
function yv(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Es(e, t) {
  var n = function(a) {
    return t && Qo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Ff.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function vv(e, t) {
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
function sr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function xv(e, t) {
  return Es(e.children, function(n) {
    return Jo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: sr(n, "appear", e),
      enter: sr(n, "enter", e),
      exit: sr(n, "exit", e)
    });
  });
}
function wv(e, t, n) {
  var r = Es(e.children), i = vv(t, r);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (Qo(s)) {
      var l = a in t, c = a in r, u = t[a], d = Qo(u) && !u.props.in;
      c && (!l || d) ? i[a] = Jo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: sr(s, "exit", e),
        enter: sr(s, "enter", e)
      }) : !c && l && !d ? i[a] = Jo(s, {
        in: !1
      }) : c && l && Qo(u) && (i[a] = Jo(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: sr(s, "exit", e),
        enter: sr(s, "enter", e)
      }));
    }
  }), i;
}
var Cv = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Sv = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Os = /* @__PURE__ */ function(e) {
  hd(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(yv(a));
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
      children: c ? xv(i, l) : wv(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = Es(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = ui({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = md(i, ["component", "childFactory"]), c = this.state.contextValue, u = Cv(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ Ct.createElement(bi.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Ct.createElement(bi.Provider, {
      value: c
    }, /* @__PURE__ */ Ct.createElement(a, l, u));
  }, t;
}(Ct.Component);
Os.propTypes = process.env.NODE_ENV !== "production" ? {
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
Os.defaultProps = Sv;
const gd = (e) => e.scrollTop;
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
function Qa(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Tv = {
  entering: {
    opacity: 1,
    transform: Qa(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ea = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), vi = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: h,
    onExiting: g,
    style: y,
    timeout: b = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: f = Bn,
    ...C
  } = t, T = Wu(), v = S.useRef(), w = Ss(), x = S.useRef(null), k = St(x, jo(a), n), R = (N) => (B) => {
    if (N) {
      const ee = x.current;
      B === void 0 ? N(ee) : N(ee, B);
    }
  }, $ = R(d), M = R((N, B) => {
    gd(N);
    const {
      duration: ee,
      delay: Z,
      easing: ne
    } = yi({
      style: y,
      timeout: b,
      easing: s
    }, {
      mode: "enter"
    });
    let U;
    b === "auto" ? (U = w.transitions.getAutoHeightDuration(N.clientHeight), v.current = U) : U = ee, N.style.transition = [w.transitions.create("opacity", {
      duration: U,
      delay: Z
    }), w.transitions.create("transform", {
      duration: Ea ? U : U * 0.666,
      delay: Z,
      easing: ne
    })].join(","), c && c(N, B);
  }), m = R(u), P = R(g), I = R((N) => {
    const {
      duration: B,
      delay: ee,
      easing: Z
    } = yi({
      style: y,
      timeout: b,
      easing: s
    }, {
      mode: "exit"
    });
    let ne;
    b === "auto" ? (ne = w.transitions.getAutoHeightDuration(N.clientHeight), v.current = ne) : ne = B, N.style.transition = [w.transitions.create("opacity", {
      duration: ne,
      delay: ee
    }), w.transitions.create("transform", {
      duration: Ea ? ne : ne * 0.666,
      delay: Ea ? ee : ee || ne * 0.333,
      easing: Z
    })].join(","), N.style.opacity = 0, N.style.transform = Qa(0.75), p && p(N);
  }), D = R(h), z = (N) => {
    b === "auto" && T.start(v.current || 0, N), r && r(x.current, N);
  };
  return /* @__PURE__ */ O.jsx(f, {
    appear: i,
    in: l,
    nodeRef: x,
    onEnter: M,
    onEntered: m,
    onEntering: $,
    onExit: I,
    onExited: D,
    onExiting: P,
    addEndListener: z,
    timeout: b === "auto" ? null : b,
    ...C,
    children: (N, B) => /* @__PURE__ */ S.cloneElement(a, {
      style: {
        opacity: 0,
        transform: Qa(0.75),
        visibility: N === "exited" && !l ? "hidden" : void 0,
        ...Tv[N],
        ...y,
        ...a.props.style
      },
      ref: k,
      ...B
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
  children: Ao.isRequired,
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
function Ev(e) {
  const t = Jt(e);
  return t.body === e ? Un(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function lo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Jl(e) {
  return parseInt(Un(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ov(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function ec(e, t, n, r, i) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !a.includes(s), c = !Ov(s);
    l && c && lo(s, i);
  });
}
function Oa(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Rv(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Ev(r)) {
      const s = Vu(Un(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Jl(r) + s}px`;
      const l = Jt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Jl(c) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = Jt(r).body;
    else {
      const s = r.parentElement, l = Un(r);
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
function Pv(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class kv {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && lo(t.modalRef, !1);
    const i = Pv(n);
    ec(n, t.mount, t.modalRef, i, !0);
    const a = Oa(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Oa(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Rv(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Oa(this.containers, (s) => s.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && lo(t.modalRef, n), ec(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && lo(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Iv = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function $v(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Mv(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Nv(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Mv(e));
}
function Dv(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Iv)).forEach((r, i) => {
    const a = $v(r);
    a === -1 || !Nv(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Av() {
  return !0;
}
function xi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Dv,
    isEnabled: s = Av,
    open: l
  } = e, c = S.useRef(!1), u = S.useRef(null), d = S.useRef(null), p = S.useRef(null), h = S.useRef(null), g = S.useRef(!1), y = S.useRef(null), b = St(jo(t), y), f = S.useRef(null);
  S.useEffect(() => {
    !l || !y.current || (g.current = !n);
  }, [n, l]), S.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = Jt(y.current);
    return y.current.contains(v.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), S.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = Jt(y.current), w = (R) => {
      f.current = R, !(r || !s() || R.key !== "Tab") && v.activeElement === y.current && R.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, x = () => {
      var M, m;
      const R = y.current;
      if (R === null)
        return;
      if (!v.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (R.contains(v.activeElement) || r && v.activeElement !== u.current && v.activeElement !== d.current)
        return;
      if (v.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let $ = [];
      if ((v.activeElement === u.current || v.activeElement === d.current) && ($ = a(y.current)), $.length > 0) {
        const P = !!((M = f.current) != null && M.shiftKey && ((m = f.current) == null ? void 0 : m.key) === "Tab"), I = $[0], D = $[$.length - 1];
        typeof I != "string" && typeof D != "string" && (P ? D.focus() : I.focus());
      } else
        R.focus();
    };
    v.addEventListener("focusin", x), v.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(k), v.removeEventListener("focusin", x), v.removeEventListener("keydown", w, !0);
    };
  }, [n, r, i, s, l, a]);
  const C = (v) => {
    p.current === null && (p.current = v.relatedTarget), g.current = !0, h.current = v.target;
    const w = t.props.onFocus;
    w && w(v);
  }, T = (v) => {
    p.current === null && (p.current = v.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ O.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ O.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ S.cloneElement(t, {
      ref: b,
      onFocus: C
    }), /* @__PURE__ */ O.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: d,
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
  children: Ao,
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
process.env.NODE_ENV !== "production" && (xi.propTypes = _u(xi.propTypes));
function jv(e) {
  return typeof e == "function" ? e() : e;
}
const To = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = S.useState(null), c = St(/* @__PURE__ */ S.isValidElement(r) ? jo(r) : null, n);
  if (jn(() => {
    a || l(jv(i) || document.body);
  }, [i, a]), jn(() => {
    if (s && !a)
      return pi(n, s), () => {
        pi(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ S.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ S.cloneElement(r, u);
    }
    return /* @__PURE__ */ O.jsx(S.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ O.jsx(S.Fragment, {
    children: s && /* @__PURE__ */ _f.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (To.propTypes = {
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
  container: o.oneOfType([Hn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (To.propTypes = _u(To.propTypes));
function zt(e, t) {
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
    slotProps: p = {
      [e]: void 0
    },
    ...h
  } = a, g = d[e] || r, y = Ku(p[e], i), {
    props: {
      component: b,
      ...f
    },
    internalRef: C
  } = Gu({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), T = St(C, y == null ? void 0 : y.ref, t.ref), v = s ? s(f) : {}, w = {
    ...i,
    ...v
  }, x = e === "root" ? b || u : b, k = Yu(g, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...f,
    ...x && {
      as: x
    },
    ref: T
  }, w);
  return Object.keys(v).forEach((R) => {
    delete k[R];
  }), [g, k];
}
const Fv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, bd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ss(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: h,
    onExit: g,
    onExited: y,
    onExiting: b,
    style: f,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Bn,
    ...v
  } = t, w = S.useRef(null), x = St(w, jo(l), n), k = (z) => (N) => {
    if (z) {
      const B = w.current;
      N === void 0 ? z(B) : z(B, N);
    }
  }, R = k(h), $ = k((z, N) => {
    gd(z);
    const B = yi({
      style: f,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = r.transitions.create("opacity", B), z.style.transition = r.transitions.create("opacity", B), d && d(z, N);
  }), M = k(p), m = k(b), P = k((z) => {
    const N = yi({
      style: f,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = r.transitions.create("opacity", N), z.style.transition = r.transitions.create("opacity", N), g && g(z);
  }), I = k(y), D = (z) => {
    a && a(w.current, z);
  };
  return /* @__PURE__ */ O.jsx(T, {
    appear: s,
    in: u,
    nodeRef: w,
    onEnter: $,
    onEntered: M,
    onEntering: R,
    onExit: P,
    onExited: I,
    onExiting: m,
    addEndListener: D,
    timeout: C,
    ...v,
    children: (z, N) => /* @__PURE__ */ S.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: z === "exited" && !u ? "hidden" : void 0,
        ...Fv[z],
        ...f,
        ...l.props.style
      },
      ref: x,
      ...N
    })
  });
});
process.env.NODE_ENV !== "production" && (bd.propTypes = {
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
  children: Ao.isRequired,
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
function Lv(e) {
  return Le("MuiBackdrop", e);
}
De("MuiBackdrop", ["root", "invisible"]);
const _v = (e) => {
  const {
    ownerState: t,
    ...n
  } = e;
  return n;
}, Bv = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ke({
    root: ["root", n && "invisible"]
  }, Lv, t);
}, zv = me("div", {
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
}), yd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    slotProps: p = {},
    slots: h = {},
    TransitionComponent: g,
    transitionDuration: y,
    ...b
  } = r, f = {
    ...r,
    component: s,
    invisible: l
  }, C = Bv(f), T = {
    transition: g,
    root: u.Root,
    ...h
  }, v = {
    ...d,
    ...p
  }, w = {
    slots: T,
    slotProps: v
  }, [x, k] = zt("root", {
    elementType: zv,
    externalForwardedProps: w,
    className: ye(C.root, a),
    ownerState: f
  }), [R, $] = zt("transition", {
    elementType: bd,
    externalForwardedProps: w,
    ownerState: f
  }), M = _v($);
  return /* @__PURE__ */ O.jsx(R, {
    in: c,
    timeout: y,
    ...b,
    ...M,
    children: /* @__PURE__ */ O.jsx(x, {
      "aria-hidden": !0,
      ...k,
      classes: C,
      ref: n,
      children: i
    })
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
function Wv(e) {
  return typeof e == "function" ? e() : e;
}
function Vv(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Xo = new kv();
function Hv(e) {
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
  } = e, p = S.useRef({}), h = S.useRef(null), g = S.useRef(null), y = St(g, d), [b, f] = S.useState(!u), C = Vv(l);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const v = () => Jt(h.current), w = () => (p.current.modalRef = g.current, p.current.mount = h.current, p.current), x = () => {
    Xo.mount(w(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, k = $n(() => {
    const N = Wv(t) || v().body;
    Xo.add(w(), N), g.current && x();
  }), R = () => Xo.isTopModal(w()), $ = $n((N) => {
    h.current = N, N && (u && R() ? x() : g.current && lo(g.current, T));
  }), M = S.useCallback(() => {
    Xo.remove(w(), T);
  }, [T]);
  S.useEffect(() => () => {
    M();
  }, [M]), S.useEffect(() => {
    u ? k() : (!C || !i) && M();
  }, [u, M, C, i, k]);
  const m = (N) => (B) => {
    var ee;
    (ee = N.onKeyDown) == null || ee.call(N, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !R()) && (n || (B.stopPropagation(), c && c(B, "escapeKeyDown")));
  }, P = (N) => (B) => {
    var ee;
    (ee = N.onClick) == null || ee.call(N, B), B.target === B.currentTarget && c && c(B, "backdropClick");
  };
  return {
    getRootProps: (N = {}) => {
      const B = qu(e);
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
        onKeyDown: m(ee),
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
        f(!1), a && a();
      }, B = () => {
        f(!0), s && s(), i && M();
      };
      return {
        onEnter: kl(N, l == null ? void 0 : l.props.onEnter),
        onExited: kl(B, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: y,
    portalRef: $,
    isTopModal: R,
    exited: b,
    hasTransition: C
  };
}
function Uv(e) {
  return Le("MuiModal", e);
}
De("MuiModal", ["root", "hidden", "backdrop"]);
const Yv = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ke({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Uv, r);
}, qv = me("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(je(({
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
}))), Gv = me(yd, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), vd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Gv,
    BackdropProps: a,
    classes: s,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: p,
    components: h = {},
    componentsProps: g = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: b = !1,
    disableEscapeKeyDown: f = !1,
    disablePortal: C = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: v = !1,
    hideBackdrop: w = !1,
    keepMounted: x = !1,
    onBackdropClick: k,
    onClose: R,
    onTransitionEnter: $,
    onTransitionExited: M,
    open: m,
    slotProps: P = {},
    slots: I = {},
    // eslint-disable-next-line react/prop-types
    theme: D,
    ...z
  } = r, N = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: b,
    disableEscapeKeyDown: f,
    disablePortal: C,
    disableRestoreFocus: T,
    disableScrollLock: v,
    hideBackdrop: w,
    keepMounted: x
  }, {
    getRootProps: B,
    getBackdropProps: ee,
    getTransitionProps: Z,
    portalRef: ne,
    isTopModal: U,
    exited: G,
    hasTransition: ue
  } = Hv({
    ...N,
    rootRef: n
  }), re = {
    ...N,
    exited: G
  }, F = Yv(re), W = {};
  if (u.props.tabIndex === void 0 && (W.tabIndex = "-1"), ue) {
    const {
      onEnter: V,
      onExited: ve
    } = Z();
    W.onEnter = V, W.onExited = ve;
  }
  const K = {
    ...z,
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...I
    },
    slotProps: {
      ...g,
      ...P
    }
  }, [_, H] = zt("root", {
    elementType: qv,
    externalForwardedProps: K,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: re,
    className: ye(l, F == null ? void 0 : F.root, !re.open && re.exited && (F == null ? void 0 : F.hidden))
  }), [Q, X] = zt("backdrop", {
    elementType: i,
    externalForwardedProps: K,
    additionalProps: a,
    getSlotProps: (V) => ee({
      ...V,
      onClick: (ve) => {
        k && k(ve), V != null && V.onClick && V.onClick(ve);
      }
    }),
    className: ye(a == null ? void 0 : a.className, F == null ? void 0 : F.backdrop),
    ownerState: re
  }), ce = St(a == null ? void 0 : a.ref, X.ref);
  return !x && !m && (!ue || G) ? null : /* @__PURE__ */ O.jsx(To, {
    ref: ne,
    container: d,
    disablePortal: C,
    children: /* @__PURE__ */ O.jsxs(_, {
      ...H,
      children: [!w && i ? /* @__PURE__ */ O.jsx(Q, {
        ...X,
        ref: ce
      }) : null, /* @__PURE__ */ O.jsx(xi, {
        disableEnforceFocus: b,
        disableAutoFocus: y,
        disableRestoreFocus: T,
        isEnabled: U,
        open: m,
        children: /* @__PURE__ */ S.cloneElement(u, W)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
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
  children: Ao.isRequired,
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
  container: o.oneOfType([Hn, o.func]),
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
function Kv(e) {
  return Le("MuiPaper", e);
}
De("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Xv = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ke(a, Kv, i);
}, Zv = me("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(je(({
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
}))), ea = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var g;
  const r = Ze({
    props: t,
    name: "MuiPaper"
  }), i = Ss(), {
    className: a,
    component: s = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...d
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: c,
    variant: u
  }, h = Xv(p);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ O.jsx(Zv, {
    as: s,
    ownerState: p,
    className: ye(h.root, a),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (g = i.vars.overlays) == null ? void 0 : g[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${ot("#fff", Ga(l))}, ${ot("#fff", Ga(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ea.propTypes = {
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
  elevation: Fn(Pr, (e) => {
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
function Qv(e) {
  return Le("MuiPopover", e);
}
De("MuiPopover", ["root", "paper"]);
function tc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function nc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function rc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ii(e) {
  return typeof e == "function" ? e() : e;
}
const Jv = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
    root: ["root"],
    paper: ["paper"]
  }, Qv, t);
}, e0 = me(vd, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), xd = me(ea, {
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
}), wd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    container: p,
    elevation: h = 8,
    marginThreshold: g = 16,
    open: y,
    PaperProps: b = {},
    slots: f = {},
    slotProps: C = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = vi,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: x,
      ...k
    } = {},
    disableScrollLock: R = !1,
    ...$
  } = r, M = (C == null ? void 0 : C.paper) ?? b, m = S.useRef(), P = {
    ...r,
    anchorOrigin: s,
    anchorReference: c,
    elevation: h,
    marginThreshold: g,
    externalPaperSlotProps: M,
    transformOrigin: T,
    TransitionComponent: v,
    transitionDuration: w,
    TransitionProps: k
  }, I = Jv(P), D = S.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const X = ii(a), ce = X && X.nodeType === 1 ? X : Jt(m.current).body, V = ce.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ve = ce.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ve.top === 0 && ve.left === 0 && ve.right === 0 && ve.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: V.top + tc(V, s.vertical),
      left: V.left + nc(V, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), z = S.useCallback((X) => ({
    vertical: tc(X, T.vertical),
    horizontal: nc(X, T.horizontal)
  }), [T.horizontal, T.vertical]), N = S.useCallback((X) => {
    const ce = {
      width: X.offsetWidth,
      height: X.offsetHeight
    }, V = z(ce);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: rc(V)
      };
    const ve = D();
    let A = ve.top - V.vertical, de = ve.left - V.horizontal;
    const ie = A + ce.height, $e = de + ce.width, be = Un(ii(a)), Te = be.innerHeight - g, Fe = be.innerWidth - g;
    if (g !== null && A < g) {
      const Ee = A - g;
      A -= Ee, V.vertical += Ee;
    } else if (g !== null && ie > Te) {
      const Ee = ie - Te;
      A -= Ee, V.vertical += Ee;
    }
    if (process.env.NODE_ENV !== "production" && ce.height > Te && ce.height && Te && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ce.height - Te}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && de < g) {
      const Ee = de - g;
      de -= Ee, V.horizontal += Ee;
    } else if ($e > Fe) {
      const Ee = $e - Fe;
      de -= Ee, V.horizontal += Ee;
    }
    return {
      top: `${Math.round(A)}px`,
      left: `${Math.round(de)}px`,
      transformOrigin: rc(V)
    };
  }, [a, c, D, z, g]), [B, ee] = S.useState(y), Z = S.useCallback(() => {
    const X = m.current;
    if (!X)
      return;
    const ce = N(X);
    ce.top !== null && X.style.setProperty("top", ce.top), ce.left !== null && (X.style.left = ce.left), X.style.transformOrigin = ce.transformOrigin, ee(!0);
  }, [N]);
  S.useEffect(() => (R && window.addEventListener("scroll", Z), () => window.removeEventListener("scroll", Z)), [a, R, Z]);
  const ne = (X, ce) => {
    x && x(X, ce), Z();
  }, U = () => {
    ee(!1);
  };
  S.useEffect(() => {
    y && Z();
  }), S.useImperativeHandle(i, () => y ? {
    updatePosition: () => {
      Z();
    }
  } : null, [y, Z]), S.useEffect(() => {
    if (!y)
      return;
    const X = Bu(() => {
      Z();
    }), ce = Un(a);
    return ce.addEventListener("resize", X), () => {
      X.clear(), ce.removeEventListener("resize", X);
    };
  }, [a, y, Z]);
  let G = w;
  w === "auto" && !v.muiSupportAuto && (G = void 0);
  const ue = p || (a ? Jt(ii(a)).body : void 0), re = {
    slots: f,
    slotProps: {
      ...C,
      paper: M
    }
  }, [F, W] = zt("paper", {
    elementType: xd,
    externalForwardedProps: re,
    additionalProps: {
      elevation: h,
      className: ye(I.paper, M == null ? void 0 : M.className),
      style: B ? M.style : {
        ...M.style,
        opacity: 0
      }
    },
    ownerState: P
  }), [K, {
    slotProps: _,
    ...H
  }] = zt("root", {
    elementType: e0,
    externalForwardedProps: re,
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
    className: ye(I.root, d)
  }), Q = St(m, W.ref);
  return /* @__PURE__ */ O.jsx(K, {
    ...H,
    ...!mi(K) && {
      slotProps: _,
      disableScrollLock: R
    },
    ...$,
    ref: n,
    children: /* @__PURE__ */ O.jsx(v, {
      appear: !0,
      in: y,
      onEntering: ne,
      onExited: U,
      timeout: G,
      ...k,
      children: /* @__PURE__ */ O.jsx(F, {
        ...W,
        ref: Q,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (wd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: tn,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Fn(o.oneOfType([Hn, o.func]), (e) => {
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
  container: o.oneOfType([Hn, o.func]),
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
    component: ys
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
function t0(e) {
  return Le("MuiMenu", e);
}
De("MuiMenu", ["root", "paper", "list"]);
const n0 = {
  vertical: "top",
  horizontal: "right"
}, r0 = {
  vertical: "top",
  horizontal: "left"
}, o0 = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, t0, t);
}, i0 = me(wd, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), a0 = me(xd, {
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
}), s0 = me(pd, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Rs = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    PaperProps: p = {},
    PopoverClasses: h,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: y,
      ...b
    } = {},
    variant: f = "selectedMenu",
    slots: C = {},
    slotProps: T = {},
    ...v
  } = r, w = xs(), x = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: p,
    transitionDuration: g,
    TransitionProps: b,
    variant: f
  }, k = o0(x), R = i && !l && d, $ = S.useRef(null), M = (B, ee) => {
    $.current && $.current.adjustStyleForScrollbar(B, {
      direction: w ? "rtl" : "ltr"
    }), y && y(B, ee);
  }, m = (B) => {
    B.key === "Tab" && (B.preventDefault(), u && u(B, "tabKeyDown"));
  };
  let P = -1;
  S.Children.map(a, (B, ee) => {
    /* @__PURE__ */ S.isValidElement(B) && (process.env.NODE_ENV !== "production" && Ts.isFragment(B) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), B.props.disabled || (f === "selectedMenu" && B.props.selected || P === -1) && (P = ee));
  });
  const I = C.paper ?? a0, D = T.paper ?? p, z = Ya({
    elementType: C.root,
    externalSlotProps: T.root,
    ownerState: x,
    className: [k.root, s]
  }), N = Ya({
    elementType: I,
    externalSlotProps: D,
    ownerState: x,
    className: k.paper
  });
  return /* @__PURE__ */ O.jsx(i0, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? n0 : r0,
    slots: {
      paper: I,
      root: C.root
    },
    slotProps: {
      root: z,
      paper: N
    },
    open: d,
    ref: n,
    transitionDuration: g,
    TransitionProps: {
      onEntering: M,
      ...b
    },
    ownerState: x,
    ...v,
    classes: h,
    children: /* @__PURE__ */ O.jsx(s0, {
      onKeyDown: m,
      actions: $,
      autoFocus: i && (P === -1 || l),
      autoFocusItem: R,
      variant: f,
      ...c,
      className: ye(k.list, c.className),
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Hn, o.func]),
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
function l0(e) {
  return Le("MuiNativeSelect", e);
}
const Ps = De("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), c0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${pe(n)}`, a && "iconOpen", r && "disabled"]
  };
  return Ke(l, l0, t);
}, Cd = me("select")(({
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
  [`&.${Ps.disabled}`]: {
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
})), u0 = me(Cd, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: nn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Ps.multiple}`]: t.multiple
    }];
  }
})({}), Sd = me("svg")(({
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
  [`&.${Ps.disabled}`]: {
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
})), d0 = me(Sd, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${pe(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Td = /* @__PURE__ */ S.forwardRef(function(t, n) {
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
  }, p = c0(d);
  return /* @__PURE__ */ O.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ O.jsx(u0, {
      ownerState: d,
      className: ye(p.select, r),
      disabled: i,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ O.jsx(d0, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Td.propTypes = {
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
  inputRef: tn,
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
function f0(e) {
  return Le("MuiSelect", e);
}
const Kr = De("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var oc;
const p0 = me(Cd, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Kr.select}`]: t.select
      },
      {
        [`&.${Kr.select}`]: t[n.variant]
      },
      {
        [`&.${Kr.error}`]: t.error
      },
      {
        [`&.${Kr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Kr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), m0 = me(Sd, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${pe(n.variant)}`], n.open && t.iconOpen];
  }
})({}), h0 = me("input", {
  shouldForwardProp: (e) => nd(e) && e !== "classes",
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
function ic(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function g0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const b0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${pe(n)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Ke(l, f0, t);
}, Ed = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var Pt;
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: a,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: p,
    displayEmpty: h,
    error: g = !1,
    IconComponent: y,
    inputRef: b,
    labelId: f,
    MenuProps: C = {},
    multiple: T,
    name: v,
    onBlur: w,
    onChange: x,
    onClose: k,
    onFocus: R,
    onOpen: $,
    open: M,
    readOnly: m,
    renderValue: P,
    SelectDisplayProps: I = {},
    tabIndex: D,
    // catching `type` from Input which makes no sense for SelectInput
    type: z,
    value: N,
    variant: B = "standard",
    ...ee
  } = t, [Z, ne] = Rr({
    controlled: N,
    default: d,
    name: "Select"
  }), [U, G] = Rr({
    controlled: M,
    default: u,
    name: "Select"
  }), ue = S.useRef(null), re = S.useRef(null), [F, W] = S.useState(null), {
    current: K
  } = S.useRef(M != null), [_, H] = S.useState(), Q = St(n, b), X = S.useCallback((he) => {
    re.current = he, he && W(he);
  }, []), ce = F == null ? void 0 : F.parentNode;
  S.useImperativeHandle(Q, () => ({
    focus: () => {
      re.current.focus();
    },
    node: ue.current,
    value: Z
  }), [Z]), S.useEffect(() => {
    u && U && F && !K && (H(s ? null : ce.clientWidth), re.current.focus());
  }, [F, s]), S.useEffect(() => {
    a && re.current.focus();
  }, [a]), S.useEffect(() => {
    if (!f)
      return;
    const he = Jt(re.current).getElementById(f);
    if (he) {
      const xe = () => {
        getSelection().isCollapsed && re.current.focus();
      };
      return he.addEventListener("click", xe), () => {
        he.removeEventListener("click", xe);
      };
    }
  }, [f]);
  const V = (he, xe) => {
    he ? $ && $(xe) : k && k(xe), K || (H(s ? null : ce.clientWidth), G(he));
  }, ve = (he) => {
    he.button === 0 && (he.preventDefault(), re.current.focus(), V(!0, he));
  }, A = (he) => {
    V(!1, he);
  }, de = S.Children.toArray(l), ie = (he) => {
    const xe = de.find((et) => et.props.value === he.target.value);
    xe !== void 0 && (ne(xe.props.value), x && x(he, xe));
  }, $e = (he) => (xe) => {
    let et;
    if (xe.currentTarget.hasAttribute("tabindex")) {
      if (T) {
        et = Array.isArray(Z) ? Z.slice() : [];
        const at = Z.indexOf(he.props.value);
        at === -1 ? et.push(he.props.value) : et.splice(at, 1);
      } else
        et = he.props.value;
      if (he.props.onClick && he.props.onClick(xe), Z !== et && (ne(et), x)) {
        const at = xe.nativeEvent || xe, lt = new at.constructor(at.type, at);
        Object.defineProperty(lt, "target", {
          writable: !0,
          value: {
            value: et,
            name: v
          }
        }), x(lt, he);
      }
      T || V(!1, xe);
    }
  }, be = (he) => {
    m || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(he.key) && (he.preventDefault(), V(!0, he));
  }, Te = F !== null && U, Fe = (he) => {
    !Te && w && (Object.defineProperty(he, "target", {
      writable: !0,
      value: {
        value: Z,
        name: v
      }
    }), w(he));
  };
  delete ee["aria-invalid"];
  let Ee, We;
  const fe = [];
  let _e = !1, bt = !1;
  (hi({
    value: Z
  }) || h) && (P ? Ee = P(Z) : _e = !0);
  const xt = de.map((he) => {
    if (!/* @__PURE__ */ S.isValidElement(he))
      return null;
    process.env.NODE_ENV !== "production" && Ts.isFragment(he) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let xe;
    if (T) {
      if (!Array.isArray(Z))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : An(2));
      xe = Z.some((et) => ic(et, he.props.value)), xe && _e && fe.push(he.props.children);
    } else
      xe = ic(Z, he.props.value), xe && _e && (We = he.props.children);
    return xe && (bt = !0), /* @__PURE__ */ S.cloneElement(he, {
      "aria-selected": xe ? "true" : "false",
      onClick: $e(he),
      onKeyUp: (et) => {
        et.key === " " && et.preventDefault(), he.props.onKeyUp && he.props.onKeyUp(et);
      },
      role: "option",
      selected: xe,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": he.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    if (!bt && !T && Z !== "") {
      const he = de.map((xe) => xe.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${Z}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${he.filter((xe) => xe != null).map((xe) => `\`${xe}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [bt, de, T, v, Z]), _e && (T ? fe.length === 0 ? Ee = null : Ee = fe.reduce((he, xe, et) => (he.push(xe), et < fe.length - 1 && he.push(", "), he), []) : Ee = We);
  let Qe = _;
  !s && K && F && (Qe = ce.clientWidth);
  let Je;
  typeof D < "u" ? Je = D : Je = p ? null : 0;
  const Re = I.id || (v ? `mui-component-select-${v}` : void 0), st = {
    ...t,
    variant: B,
    value: Z,
    open: Te,
    error: g
  }, Pe = b0(st), ft = {
    ...C.PaperProps,
    ...(Pt = C.slotProps) == null ? void 0 : Pt.paper
  }, Dt = yo();
  return /* @__PURE__ */ O.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ O.jsx(p0, {
      as: "div",
      ref: X,
      tabIndex: Je,
      role: "combobox",
      "aria-controls": Dt,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Te ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [f, Re].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: be,
      onMouseDown: p || m ? null : ve,
      onBlur: Fe,
      onFocus: R,
      ...I,
      ownerState: st,
      className: ye(I.className, Pe.select, c),
      id: Re,
      children: g0(Ee) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        oc || (oc = /* @__PURE__ */ O.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ee
    }), /* @__PURE__ */ O.jsx(h0, {
      "aria-invalid": g,
      value: Array.isArray(Z) ? Z.join(",") : Z,
      name: v,
      ref: ue,
      "aria-hidden": !0,
      onChange: ie,
      tabIndex: -1,
      disabled: p,
      className: Pe.nativeInput,
      autoFocus: a,
      ...ee,
      ownerState: st
    }), /* @__PURE__ */ O.jsx(m0, {
      as: y,
      className: Pe.icon,
      ownerState: st
    }), /* @__PURE__ */ O.jsx(Rs, {
      id: `menu-${v || ""}`,
      anchorEl: ce,
      open: Te,
      onClose: A,
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
        id: Dt,
        ...C.MenuListProps
      },
      slotProps: {
        ...C.slotProps,
        paper: {
          ...ft,
          style: {
            minWidth: Qe,
            ...ft != null ? ft.style : null
          }
        }
      },
      children: xt
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ed.propTypes = {
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
  inputRef: tn,
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
const Od = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), y0 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, ks = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => nn(e) && e !== "variant",
  slot: "Root"
}, v0 = me(xo, ks)(""), x0 = me(So, ks)(""), w0 = me(Co, ks)(""), ta = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = Od,
    id: p,
    input: h,
    inputProps: g,
    label: y,
    labelId: b,
    MenuProps: f,
    multiple: C = !1,
    native: T = !1,
    onClose: v,
    onOpen: w,
    open: x,
    renderValue: k,
    SelectDisplayProps: R,
    variant: $ = "outlined",
    ...M
  } = r, m = T ? Td : Ed, P = fr(), I = Br({
    props: r,
    muiFormControl: P,
    states: ["variant", "error"]
  }), D = I.variant || $, z = {
    ...r,
    variant: D,
    classes: s
  }, N = y0(z), {
    root: B,
    ...ee
  } = N, Z = h || {
    standard: /* @__PURE__ */ O.jsx(v0, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ O.jsx(x0, {
      label: y,
      ownerState: z
    }),
    filled: /* @__PURE__ */ O.jsx(w0, {
      ownerState: z
    })
  }[D], ne = St(n, jo(Z));
  return /* @__PURE__ */ O.jsx(S.Fragment, {
    children: /* @__PURE__ */ S.cloneElement(Z, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: m,
      inputProps: {
        children: a,
        error: I.error,
        IconComponent: d,
        variant: D,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C,
        ...T ? {
          id: p
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: b,
          MenuProps: f,
          onClose: v,
          onOpen: w,
          open: x,
          renderValue: k,
          SelectDisplayProps: {
            id: p,
            ...R
          }
        },
        ...g,
        classes: g ? Nt(ee, g.classes) : ee,
        ...h ? h.props.inputProps : {}
      },
      ...(C && T || u) && D === "outlined" ? {
        notched: !0
      } : {},
      ref: ne,
      className: ye(Z.props.className, l, N.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: D
      },
      ...M
    })
  });
});
process.env.NODE_ENV !== "production" && (ta.propTypes = {
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
ta.muiName = "Select";
function C0(e) {
  return Le("MuiTextField", e);
}
De("MuiTextField", ["root"]);
const S0 = {
  standard: xo,
  filled: Co,
  outlined: So
}, T0 = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
    root: ["root"]
  }, C0, t);
}, E0 = me(cd, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Rd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    error: p = !1,
    FormHelperTextProps: h,
    fullWidth: g = !1,
    helperText: y,
    id: b,
    InputLabelProps: f,
    inputProps: C,
    InputProps: T,
    inputRef: v,
    label: w,
    maxRows: x,
    minRows: k,
    multiline: R = !1,
    name: $,
    onBlur: M,
    onChange: m,
    onFocus: P,
    placeholder: I,
    required: D = !1,
    rows: z,
    select: N = !1,
    SelectProps: B,
    slots: ee = {},
    slotProps: Z = {},
    type: ne,
    value: U,
    variant: G = "outlined",
    ...ue
  } = r, re = {
    ...r,
    autoFocus: a,
    color: c,
    disabled: d,
    error: p,
    fullWidth: g,
    multiline: R,
    required: D,
    select: N,
    variant: G
  }, F = T0(re);
  process.env.NODE_ENV !== "production" && N && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const W = yo(b), K = y && W ? `${W}-helper-text` : void 0, _ = w && W ? `${W}-label` : void 0, H = S0[G], Q = {
    slots: ee,
    slotProps: {
      input: T,
      inputLabel: f,
      htmlInput: C,
      formHelperText: h,
      select: B,
      ...Z
    }
  }, X = {}, ce = Q.slotProps.inputLabel;
  G === "outlined" && (ce && typeof ce.shrink < "u" && (X.notched = ce.shrink), X.label = w), N && ((!B || !B.native) && (X.id = void 0), X["aria-describedby"] = void 0);
  const [V, ve] = zt("input", {
    elementType: H,
    externalForwardedProps: Q,
    additionalProps: X,
    ownerState: re
  }), [A, de] = zt("inputLabel", {
    elementType: ld,
    externalForwardedProps: Q,
    ownerState: re
  }), [ie, $e] = zt("htmlInput", {
    elementType: "input",
    externalForwardedProps: Q,
    ownerState: re
  }), [be, Te] = zt("formHelperText", {
    elementType: ud,
    externalForwardedProps: Q,
    ownerState: re
  }), [Fe, Ee] = zt("select", {
    elementType: ta,
    externalForwardedProps: Q,
    ownerState: re
  }), We = /* @__PURE__ */ O.jsx(V, {
    "aria-describedby": K,
    autoComplete: i,
    autoFocus: a,
    defaultValue: u,
    fullWidth: g,
    multiline: R,
    name: $,
    rows: z,
    maxRows: x,
    minRows: k,
    type: ne,
    value: U,
    id: W,
    inputRef: v,
    onBlur: M,
    onChange: m,
    onFocus: P,
    placeholder: I,
    inputProps: $e,
    slots: {
      input: ee.htmlInput ? ie : void 0
    },
    ...ve
  });
  return /* @__PURE__ */ O.jsxs(E0, {
    className: ye(F.root, l),
    disabled: d,
    error: p,
    fullWidth: g,
    ref: n,
    required: D,
    color: c,
    variant: G,
    ownerState: re,
    ...ue,
    children: [w != null && w !== "" && /* @__PURE__ */ O.jsx(A, {
      htmlFor: W,
      id: _,
      ...de,
      children: w
    }), N ? /* @__PURE__ */ O.jsx(Fe, {
      "aria-describedby": K,
      id: W,
      labelId: _,
      value: U,
      input: We,
      ...Ee,
      children: s
    }) : We, y && /* @__PURE__ */ O.jsx(be, {
      id: K,
      ...Te,
      children: y
    })]
  });
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
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
  inputRef: tn,
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
const Pd = Dn(Rd)`
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
`, Is = Ct.createContext({
  filters: {},
  setFilters: () => {
  }
}), O0 = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, i] = Ct.useState({});
  return /* @__PURE__ */ O.jsx(
    Is.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? i
      },
      children: e
    }
  );
};
function ac(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function R0(e = {}) {
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
    n && (d = d.toLowerCase()), t && (d = ac(d));
    const p = d ? l.filter((h) => {
      let g = (a || u)(h);
      return n && (g = g.toLowerCase()), t && (g = ac(g)), i === "start" ? g.startsWith(d) : g.includes(d);
    }) : l;
    return typeof r == "number" ? p.slice(0, r) : p;
  };
}
const P0 = R0(), sc = 5, k0 = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
}, I0 = [];
function $0(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = k0,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? I0 : null,
    disableClearable: p = !1,
    disableCloseOnSelect: h = !1,
    disabled: g,
    disabledItemsFocusable: y = !1,
    disableListWrap: b = !1,
    filterOptions: f = P0,
    filterSelectedOptions: C = !1,
    freeSolo: T = !1,
    getOptionDisabled: v,
    getOptionKey: w,
    getOptionLabel: x = (j) => j.label ?? j,
    groupBy: k,
    handleHomeEndKeys: R = !e.freeSolo,
    id: $,
    includeInputInList: M = !1,
    inputValue: m,
    isOptionEqualToValue: P = (j, L) => j === L,
    multiple: I = !1,
    onChange: D,
    onClose: z,
    onHighlightChange: N,
    onInputChange: B,
    onOpen: ee,
    open: Z,
    openOnFocus: ne = !1,
    options: U,
    readOnly: G = !1,
    selectOnFocus: ue = !e.freeSolo,
    value: re
  } = e, F = yo($);
  let W = x;
  W = (j) => {
    const L = x(j);
    if (typeof L != "string") {
      if (process.env.NODE_ENV !== "production") {
        const J = L === void 0 ? "undefined" : `${typeof L} (${L})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${J} instead of a string for ${JSON.stringify(j)}.`);
      }
      return String(L);
    }
    return L;
  };
  const K = S.useRef(!1), _ = S.useRef(!0), H = S.useRef(null), Q = S.useRef(null), [X, ce] = S.useState(null), [V, ve] = S.useState(-1), A = i ? 0 : -1, de = S.useRef(A), [ie, $e] = Rr({
    controlled: re,
    default: d,
    name: u
  }), [be, Te] = Rr({
    controlled: m,
    default: "",
    name: u,
    state: "inputValue"
  }), [Fe, Ee] = S.useState(!1), We = S.useCallback((j, L, J) => {
    if (!(I ? ie.length < L.length : L !== null) && !l)
      return;
    let se;
    if (I)
      se = "";
    else if (L == null)
      se = "";
    else {
      const Oe = W(L);
      se = typeof Oe == "string" ? Oe : "";
    }
    be !== se && (Te(se), B && B(j, se, J));
  }, [W, be, I, B, Te, l, ie]), [fe, _e] = Rr({
    controlled: Z,
    default: !1,
    name: u,
    state: "open"
  }), [bt, xt] = S.useState(!0), Qe = !I && ie != null && be === W(ie), Je = fe && !G, Re = Je ? f(
    U.filter((j) => !(C && (I ? ie : [ie]).some((L) => L !== null && P(j, L)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Qe && bt ? "" : be,
      getOptionLabel: W
    }
  ) : [], st = Db({
    filteredOptions: Re,
    value: ie,
    inputValue: be
  });
  S.useEffect(() => {
    const j = ie !== st.value;
    Fe && !j || T && !j || We(null, ie, "reset");
  }, [ie, We, Fe, st.value, T]);
  const Pe = fe && Re.length > 0 && !G, ft = $n((j) => {
    j === -1 ? H.current.focus() : X.querySelector(`[data-tag-index="${j}"]`).focus();
  });
  S.useEffect(() => {
    I && V > ie.length - 1 && (ve(-1), ft(-1));
  }, [ie, I, V, ft]);
  function Dt(j, L) {
    if (!Q.current || j < 0 || j >= Re.length)
      return -1;
    let J = j;
    for (; ; ) {
      const le = Q.current.querySelector(`[data-option-index="${J}"]`), se = y ? !1 : !le || le.disabled || le.getAttribute("aria-disabled") === "true";
      if (le && le.hasAttribute("tabindex") && !se)
        return J;
      if (L === "next" ? J = (J + 1) % Re.length : J = (J - 1 + Re.length) % Re.length, J === j)
        return -1;
    }
  }
  const Pt = $n(({
    event: j,
    index: L,
    reason: J = "auto"
  }) => {
    if (de.current = L, L === -1 ? H.current.removeAttribute("aria-activedescendant") : H.current.setAttribute("aria-activedescendant", `${F}-option-${L}`), N && N(j, L === -1 ? null : Re[L], J), !Q.current)
      return;
    const le = Q.current.querySelector(`[role="option"].${n}-focused`);
    le && (le.classList.remove(`${n}-focused`), le.classList.remove(`${n}-focusVisible`));
    let se = Q.current;
    if (Q.current.getAttribute("role") !== "listbox" && (se = Q.current.parentElement.querySelector('[role="listbox"]')), !se)
      return;
    if (L === -1) {
      se.scrollTop = 0;
      return;
    }
    const Oe = Q.current.querySelector(`[data-option-index="${L}"]`);
    if (Oe && (Oe.classList.add(`${n}-focused`), J === "keyboard" && Oe.classList.add(`${n}-focusVisible`), se.scrollHeight > se.clientHeight && J !== "mouse" && J !== "touch")) {
      const Ce = Oe, Ie = se.clientHeight + se.scrollTop, yt = Ce.offsetTop + Ce.offsetHeight;
      yt > Ie ? se.scrollTop = yt - se.clientHeight : Ce.offsetTop - Ce.offsetHeight * (k ? 1.3 : 0) < se.scrollTop && (se.scrollTop = Ce.offsetTop - Ce.offsetHeight * (k ? 1.3 : 0));
    }
  }), he = $n(({
    event: j,
    diff: L,
    direction: J = "next",
    reason: le = "auto"
  }) => {
    if (!Je)
      return;
    const Oe = Dt((() => {
      const Ce = Re.length - 1;
      if (L === "reset")
        return A;
      if (L === "start")
        return 0;
      if (L === "end")
        return Ce;
      const Ie = de.current + L;
      return Ie < 0 ? Ie === -1 && M ? -1 : b && de.current !== -1 || Math.abs(L) > 1 ? 0 : Ce : Ie > Ce ? Ie === Ce + 1 && M ? -1 : b || Math.abs(L) > 1 ? Ce : 0 : Ie;
    })(), J);
    if (Pt({
      index: Oe,
      reason: le,
      event: j
    }), r && L !== "reset")
      if (Oe === -1)
        H.current.value = be;
      else {
        const Ce = W(Re[Oe]);
        H.current.value = Ce, Ce.toLowerCase().indexOf(be.toLowerCase()) === 0 && be.length > 0 && H.current.setSelectionRange(be.length, Ce.length);
      }
  }), xe = () => {
    const j = (L, J) => {
      const le = L ? W(L) : "", se = J ? W(J) : "";
      return le === se;
    };
    if (de.current !== -1 && st.filteredOptions && st.filteredOptions.length !== Re.length && st.inputValue === be && (I ? ie.length === st.value.length && st.value.every((L, J) => W(ie[J]) === W(L)) : j(st.value, ie))) {
      const L = st.filteredOptions[de.current];
      if (L)
        return Re.findIndex((J) => W(J) === W(L));
    }
    return -1;
  }, et = S.useCallback(() => {
    if (!Je)
      return;
    const j = xe();
    if (j !== -1) {
      de.current = j;
      return;
    }
    const L = I ? ie[0] : ie;
    if (Re.length === 0 || L == null) {
      he({
        diff: "reset"
      });
      return;
    }
    if (Q.current) {
      if (L != null) {
        const J = Re[de.current];
        if (I && J && ie.findIndex((se) => P(J, se)) !== -1)
          return;
        const le = Re.findIndex((se) => P(se, L));
        le === -1 ? he({
          diff: "reset"
        }) : Pt({
          index: le
        });
        return;
      }
      if (de.current >= Re.length - 1) {
        Pt({
          index: Re.length - 1
        });
        return;
      }
      Pt({
        index: de.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Re.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    I ? !1 : ie,
    C,
    he,
    Pt,
    Je,
    be,
    I
  ]), at = $n((j) => {
    pi(Q, j), j && et();
  });
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    (!H.current || H.current.nodeName !== "INPUT") && (H.current && H.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${H.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), S.useEffect(() => {
    et();
  }, [et]);
  const lt = (j) => {
    fe || (_e(!0), xt(!0), ee && ee(j));
  }, Ft = (j, L) => {
    fe && (_e(!1), z && z(j, L));
  }, Ot = (j, L, J, le) => {
    if (I) {
      if (ie.length === L.length && ie.every((se, Oe) => se === L[Oe]))
        return;
    } else if (ie === L)
      return;
    D && D(j, L, J, le), $e(L);
  }, rn = S.useRef(!1), Ut = (j, L, J = "selectOption", le = "options") => {
    let se = J, Oe = L;
    if (I) {
      if (Oe = Array.isArray(ie) ? ie.slice() : [], process.env.NODE_ENV !== "production") {
        const Ie = Oe.filter((yt) => P(L, yt));
        Ie.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ie.length} matches.`].join(`
`));
      }
      const Ce = Oe.findIndex((Ie) => P(L, Ie));
      Ce === -1 ? Oe.push(L) : le !== "freeSolo" && (Oe.splice(Ce, 1), se = "removeOption");
    }
    We(j, Oe, se), Ot(j, Oe, se, {
      option: L
    }), !h && (!j || !j.ctrlKey && !j.metaKey) && Ft(j, se), (s === !0 || s === "touch" && rn.current || s === "mouse" && !rn.current) && H.current.blur();
  };
  function bn(j, L) {
    if (j === -1)
      return -1;
    let J = j;
    for (; ; ) {
      if (L === "next" && J === ie.length || L === "previous" && J === -1)
        return -1;
      const le = X.querySelector(`[data-tag-index="${J}"]`);
      if (!le || !le.hasAttribute("tabindex") || le.disabled || le.getAttribute("aria-disabled") === "true")
        J += L === "next" ? 1 : -1;
      else
        return J;
    }
  }
  const Yt = (j, L) => {
    if (!I)
      return;
    be === "" && Ft(j, "toggleInput");
    let J = V;
    V === -1 ? be === "" && L === "previous" && (J = ie.length - 1) : (J += L === "next" ? 1 : -1, J < 0 && (J = 0), J === ie.length && (J = -1)), J = bn(J, L), ve(J), ft(J);
  }, Lt = (j) => {
    K.current = !0, Te(""), B && B(j, "", "clear"), Ot(j, I ? [] : null, "clear");
  }, yn = (j) => (L) => {
    if (j.onKeyDown && j.onKeyDown(L), !L.defaultMuiPrevented && (V !== -1 && !["ArrowLeft", "ArrowRight"].includes(L.key) && (ve(-1), ft(-1)), L.which !== 229))
      switch (L.key) {
        case "Home":
          Je && R && (L.preventDefault(), he({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: L
          }));
          break;
        case "End":
          Je && R && (L.preventDefault(), he({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: L
          }));
          break;
        case "PageUp":
          L.preventDefault(), he({
            diff: -sc,
            direction: "previous",
            reason: "keyboard",
            event: L
          }), lt(L);
          break;
        case "PageDown":
          L.preventDefault(), he({
            diff: sc,
            direction: "next",
            reason: "keyboard",
            event: L
          }), lt(L);
          break;
        case "ArrowDown":
          L.preventDefault(), he({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: L
          }), lt(L);
          break;
        case "ArrowUp":
          L.preventDefault(), he({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: L
          }), lt(L);
          break;
        case "ArrowLeft":
          Yt(L, "previous");
          break;
        case "ArrowRight":
          Yt(L, "next");
          break;
        case "Enter":
          if (de.current !== -1 && Je) {
            const J = Re[de.current], le = v ? v(J) : !1;
            if (L.preventDefault(), le)
              return;
            Ut(L, J, "selectOption"), r && H.current.setSelectionRange(H.current.value.length, H.current.value.length);
          } else T && be !== "" && Qe === !1 && (I && L.preventDefault(), Ut(L, be, "createOption", "freeSolo"));
          break;
        case "Escape":
          Je ? (L.preventDefault(), L.stopPropagation(), Ft(L, "escape")) : c && (be !== "" || I && ie.length > 0) && (L.preventDefault(), L.stopPropagation(), Lt(L));
          break;
        case "Backspace":
          if (I && !G && be === "" && ie.length > 0) {
            const J = V === -1 ? ie.length - 1 : V, le = ie.slice();
            le.splice(J, 1), Ot(L, le, "removeOption", {
              option: ie[J]
            });
          }
          break;
        case "Delete":
          if (I && !G && be === "" && ie.length > 0 && V !== -1) {
            const J = V, le = ie.slice();
            le.splice(J, 1), Ot(L, le, "removeOption", {
              option: ie[J]
            });
          }
          break;
      }
  }, qt = (j) => {
    Ee(!0), ne && !K.current && lt(j);
  }, vn = (j) => {
    if (t(Q)) {
      H.current.focus();
      return;
    }
    Ee(!1), _.current = !0, K.current = !1, a && de.current !== -1 && Je ? Ut(j, Re[de.current], "blur") : a && T && be !== "" ? Ut(j, be, "blur", "freeSolo") : l && We(j, ie, "blur"), Ft(j, "blur");
  }, pt = (j) => {
    const L = j.target.value;
    be !== L && (Te(L), xt(!1), B && B(j, L, "input")), L === "" ? !p && !I && Ot(j, null, "clear") : lt(j);
  }, on = (j) => {
    const L = Number(j.currentTarget.getAttribute("data-option-index"));
    de.current !== L && Pt({
      event: j,
      index: L,
      reason: "mouse"
    });
  }, It = (j) => {
    Pt({
      event: j,
      index: Number(j.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), rn.current = !0;
  }, ge = (j) => {
    const L = Number(j.currentTarget.getAttribute("data-option-index"));
    Ut(j, Re[L], "selectOption"), rn.current = !1;
  }, an = (j) => (L) => {
    const J = ie.slice();
    J.splice(j, 1), Ot(L, J, "removeOption", {
      option: ie[j]
    });
  }, Cn = (j) => {
    fe ? Ft(j, "toggleInput") : lt(j);
  }, nr = (j) => {
    j.currentTarget.contains(j.target) && j.target.getAttribute("id") !== F && j.preventDefault();
  }, Sn = (j) => {
    j.currentTarget.contains(j.target) && (H.current.focus(), ue && _.current && H.current.selectionEnd - H.current.selectionStart === 0 && H.current.select(), _.current = !1);
  }, E = (j) => {
    !g && (be === "" || !fe) && Cn(j);
  };
  let q = T && be.length > 0;
  q = q || (I ? ie.length > 0 : ie !== null);
  let ae = Re;
  if (k) {
    const j = /* @__PURE__ */ new Map();
    let L = !1;
    ae = Re.reduce((J, le, se) => {
      const Oe = k(le);
      return J.length > 0 && J[J.length - 1].group === Oe ? J[J.length - 1].options.push(le) : (process.env.NODE_ENV !== "production" && (j.get(Oe) && !L && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), L = !0), j.set(Oe, !0)), J.push({
        key: se,
        index: se,
        group: Oe,
        options: [le]
      })), J;
    }, []);
  }
  return g && Fe && vn(), {
    getRootProps: (j = {}) => ({
      "aria-owns": Pe ? `${F}-listbox` : null,
      ...j,
      onKeyDown: yn(j),
      onMouseDown: nr,
      onClick: Sn
    }),
    getInputLabelProps: () => ({
      id: `${F}-label`,
      htmlFor: F
    }),
    getInputProps: () => ({
      id: F,
      value: be,
      onBlur: vn,
      onFocus: qt,
      onChange: pt,
      onMouseDown: E,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Je ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": Pe ? `${F}-listbox` : void 0,
      "aria-expanded": Pe,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: H,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: g
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Lt
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Cn
    }),
    getTagProps: ({
      index: j
    }) => ({
      key: j,
      "data-tag-index": j,
      tabIndex: -1,
      ...!G && {
        onDelete: an(j)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${F}-listbox`,
      "aria-labelledby": `${F}-label`,
      ref: at,
      onMouseDown: (j) => {
        j.preventDefault();
      }
    }),
    getOptionProps: ({
      index: j,
      option: L
    }) => {
      const J = (I ? ie : [ie]).some((se) => se != null && P(L, se)), le = v ? v(L) : !1;
      return {
        key: (w == null ? void 0 : w(L)) ?? W(L),
        tabIndex: -1,
        role: "option",
        id: `${F}-option-${j}`,
        onMouseMove: on,
        onClick: ge,
        onTouchStart: It,
        "data-option-index": j,
        "aria-disabled": le,
        "aria-selected": J
      };
    },
    id: F,
    inputValue: be,
    value: ie,
    dirty: q,
    expanded: Je && X,
    popupOpen: Je,
    focused: Fe || V !== -1,
    anchorEl: X,
    setAnchorEl: ce,
    focusedTag: V,
    groupedOptions: ae
  };
}
var Wt = "top", mn = "bottom", hn = "right", Vt = "left", $s = "auto", Lo = [Wt, mn, hn, Vt], Mr = "start", Eo = "end", M0 = "clippingParents", kd = "viewport", Xr = "popper", N0 = "reference", lc = /* @__PURE__ */ Lo.reduce(function(e, t) {
  return e.concat([t + "-" + Mr, t + "-" + Eo]);
}, []), Id = /* @__PURE__ */ [].concat(Lo, [$s]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Mr, t + "-" + Eo]);
}, []), D0 = "beforeRead", A0 = "read", j0 = "afterRead", F0 = "beforeMain", L0 = "main", _0 = "afterMain", B0 = "beforeWrite", z0 = "write", W0 = "afterWrite", V0 = [D0, A0, j0, F0, L0, _0, B0, z0, W0];
function Ln(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function dr(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function pn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ms(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function H0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !pn(a) || !Ln(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function U0(e) {
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
      !pn(i) || !Ln(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Y0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: H0,
  effect: U0,
  requires: ["computeStyles"]
};
function Nn(e) {
  return e.split("-")[0];
}
var cr = Math.max, wi = Math.min, Nr = Math.round;
function Ja() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function $d() {
  return !/^((?!chrome|android).)*safari/i.test(Ja());
}
function Dr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && pn(e) && (i = e.offsetWidth > 0 && Nr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Nr(r.height) / e.offsetHeight || 1);
  var s = dr(e) ? en(e) : window, l = s.visualViewport, c = !$d() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, d = (r.top + (c && l ? l.offsetTop : 0)) / a, p = r.width / i, h = r.height / a;
  return {
    width: p,
    height: h,
    top: d,
    right: u + p,
    bottom: d + h,
    left: u,
    x: u,
    y: d
  };
}
function Ns(e) {
  var t = Dr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Md(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ms(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Yn(e) {
  return en(e).getComputedStyle(e);
}
function q0(e) {
  return ["table", "td", "th"].indexOf(Ln(e)) >= 0;
}
function tr(e) {
  return ((dr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function na(e) {
  return Ln(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ms(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    tr(e)
  );
}
function cc(e) {
  return !pn(e) || // https://github.com/popperjs/popper-core/issues/837
  Yn(e).position === "fixed" ? null : e.offsetParent;
}
function G0(e) {
  var t = /firefox/i.test(Ja()), n = /Trident/i.test(Ja());
  if (n && pn(e)) {
    var r = Yn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = na(e);
  for (Ms(i) && (i = i.host); pn(i) && ["html", "body"].indexOf(Ln(i)) < 0; ) {
    var a = Yn(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function _o(e) {
  for (var t = en(e), n = cc(e); n && q0(n) && Yn(n).position === "static"; )
    n = cc(n);
  return n && (Ln(n) === "html" || Ln(n) === "body" && Yn(n).position === "static") ? t : n || G0(e) || t;
}
function Ds(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function co(e, t, n) {
  return cr(e, wi(t, n));
}
function K0(e, t, n) {
  var r = co(e, t, n);
  return r > n ? n : r;
}
function Nd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Dd(e) {
  return Object.assign({}, Nd(), e);
}
function Ad(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var X0 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Dd(typeof t != "number" ? t : Ad(t, Lo));
};
function Z0(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Nn(n.placement), c = Ds(l), u = [Vt, hn].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = X0(i.padding, n), h = Ns(a), g = c === "y" ? Wt : Vt, y = c === "y" ? mn : hn, b = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], f = s[c] - n.rects.reference[c], C = _o(a), T = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, v = b / 2 - f / 2, w = p[g], x = T - h[d] - p[y], k = T / 2 - h[d] / 2 + v, R = co(w, k, x), $ = c;
    n.modifiersData[r] = (t = {}, t[$] = R, t.centerOffset = R - k, t);
  }
}
function Q0(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Md(t.elements.popper, i) && (t.elements.arrow = i));
}
const J0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Z0,
  effect: Q0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ar(e) {
  return e.split("-")[1];
}
var ex = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function tx(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Nr(n * i) / i || 0,
    y: Nr(r * i) / i || 0
  };
}
function uc(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, y = s.y, b = y === void 0 ? 0 : y, f = typeof d == "function" ? d({
    x: g,
    y: b
  }) : {
    x: g,
    y: b
  };
  g = f.x, b = f.y;
  var C = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), v = Vt, w = Wt, x = window;
  if (u) {
    var k = _o(n), R = "clientHeight", $ = "clientWidth";
    if (k === en(n) && (k = tr(n), Yn(k).position !== "static" && l === "absolute" && (R = "scrollHeight", $ = "scrollWidth")), k = k, i === Wt || (i === Vt || i === hn) && a === Eo) {
      w = mn;
      var M = p && k === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      b -= M - r.height, b *= c ? 1 : -1;
    }
    if (i === Vt || (i === Wt || i === mn) && a === Eo) {
      v = hn;
      var m = p && k === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[$]
      );
      g -= m - r.width, g *= c ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, u && ex), I = d === !0 ? tx({
    x: g,
    y: b
  }, en(n)) : {
    x: g,
    y: b
  };
  if (g = I.x, b = I.y, c) {
    var D;
    return Object.assign({}, P, (D = {}, D[w] = T ? "0" : "", D[v] = C ? "0" : "", D.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", D));
  }
  return Object.assign({}, P, (t = {}, t[w] = T ? b + "px" : "", t[v] = C ? g + "px" : "", t.transform = "", t));
}
function nx(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Nn(t.placement),
    variation: Ar(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, uc(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, uc(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const rx = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nx,
  data: {}
};
var Zo = {
  passive: !0
};
function ox(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Zo);
  }), l && c.addEventListener("resize", n.update, Zo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Zo);
    }), l && c.removeEventListener("resize", n.update, Zo);
  };
}
const ix = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ox,
  data: {}
};
var ax = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ai(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ax[t];
  });
}
var sx = {
  start: "end",
  end: "start"
};
function dc(e) {
  return e.replace(/start|end/g, function(t) {
    return sx[t];
  });
}
function As(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function js(e) {
  return Dr(tr(e)).left + As(e).scrollLeft;
}
function lx(e, t) {
  var n = en(e), r = tr(e), i = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = $d();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + js(e),
    y: c
  };
}
function cx(e) {
  var t, n = tr(e), r = As(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = cr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = cr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + js(e), c = -r.scrollTop;
  return Yn(i || n).direction === "rtl" && (l += cr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function Fs(e) {
  var t = Yn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function jd(e) {
  return ["html", "body", "#document"].indexOf(Ln(e)) >= 0 ? e.ownerDocument.body : pn(e) && Fs(e) ? e : jd(na(e));
}
function uo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = jd(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = en(r), s = i ? [a].concat(a.visualViewport || [], Fs(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(uo(na(s)))
  );
}
function es(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ux(e, t) {
  var n = Dr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fc(e, t, n) {
  return t === kd ? es(lx(e, n)) : dr(t) ? ux(t, n) : es(cx(tr(e)));
}
function dx(e) {
  var t = uo(na(e)), n = ["absolute", "fixed"].indexOf(Yn(e).position) >= 0, r = n && pn(e) ? _o(e) : e;
  return dr(r) ? t.filter(function(i) {
    return dr(i) && Md(i, r) && Ln(i) !== "body";
  }) : [];
}
function fx(e, t, n, r) {
  var i = t === "clippingParents" ? dx(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, u) {
    var d = fc(e, u, r);
    return c.top = cr(d.top, c.top), c.right = wi(d.right, c.right), c.bottom = wi(d.bottom, c.bottom), c.left = cr(d.left, c.left), c;
  }, fc(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Fd(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Nn(r) : null, a = r ? Ar(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case Wt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case mn:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case hn:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Vt:
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
  var u = i ? Ds(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Mr:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Eo:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Oo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? M0 : l, u = n.rootBoundary, d = u === void 0 ? kd : u, p = n.elementContext, h = p === void 0 ? Xr : p, g = n.altBoundary, y = g === void 0 ? !1 : g, b = n.padding, f = b === void 0 ? 0 : b, C = Dd(typeof f != "number" ? f : Ad(f, Lo)), T = h === Xr ? N0 : Xr, v = e.rects.popper, w = e.elements[y ? T : h], x = fx(dr(w) ? w : w.contextElement || tr(e.elements.popper), c, d, s), k = Dr(e.elements.reference), R = Fd({
    reference: k,
    element: v,
    strategy: "absolute",
    placement: i
  }), $ = es(Object.assign({}, v, R)), M = h === Xr ? $ : k, m = {
    top: x.top - M.top + C.top,
    bottom: M.bottom - x.bottom + C.bottom,
    left: x.left - M.left + C.left,
    right: M.right - x.right + C.right
  }, P = e.modifiersData.offset;
  if (h === Xr && P) {
    var I = P[i];
    Object.keys(m).forEach(function(D) {
      var z = [hn, mn].indexOf(D) >= 0 ? 1 : -1, N = [Wt, mn].indexOf(D) >= 0 ? "y" : "x";
      m[D] += I[N] * z;
    });
  }
  return m;
}
function px(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Id : c, d = Ar(r), p = d ? l ? lc : lc.filter(function(y) {
    return Ar(y) === d;
  }) : Lo, h = p.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  h.length === 0 && (h = p);
  var g = h.reduce(function(y, b) {
    return y[b] = Oo(e, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Nn(b)], y;
  }, {});
  return Object.keys(g).sort(function(y, b) {
    return g[y] - g[b];
  });
}
function mx(e) {
  if (Nn(e) === $s)
    return [];
  var t = ai(e);
  return [dc(e), t, dc(t)];
}
function hx(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, y = g === void 0 ? !0 : g, b = n.allowedAutoPlacements, f = t.options.placement, C = Nn(f), T = C === f, v = c || (T || !y ? [ai(f)] : mx(f)), w = [f].concat(v).reduce(function(F, W) {
      return F.concat(Nn(W) === $s ? px(t, {
        placement: W,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : W);
    }, []), x = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), $ = !0, M = w[0], m = 0; m < w.length; m++) {
      var P = w[m], I = Nn(P), D = Ar(P) === Mr, z = [Wt, mn].indexOf(I) >= 0, N = z ? "width" : "height", B = Oo(t, {
        placement: P,
        boundary: d,
        rootBoundary: p,
        altBoundary: h,
        padding: u
      }), ee = z ? D ? hn : Vt : D ? mn : Wt;
      x[N] > k[N] && (ee = ai(ee));
      var Z = ai(ee), ne = [];
      if (a && ne.push(B[I] <= 0), l && ne.push(B[ee] <= 0, B[Z] <= 0), ne.every(function(F) {
        return F;
      })) {
        M = P, $ = !1;
        break;
      }
      R.set(P, ne);
    }
    if ($)
      for (var U = y ? 3 : 1, G = function(W) {
        var K = w.find(function(_) {
          var H = R.get(_);
          if (H)
            return H.slice(0, W).every(function(Q) {
              return Q;
            });
        });
        if (K)
          return M = K, "break";
      }, ue = U; ue > 0; ue--) {
        var re = G(ue);
        if (re === "break") break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const gx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: hx,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function pc(e, t, n) {
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
function mc(e) {
  return [Wt, hn, mn, Vt].some(function(t) {
    return e[t] >= 0;
  });
}
function bx(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = Oo(t, {
    elementContext: "reference"
  }), l = Oo(t, {
    altBoundary: !0
  }), c = pc(s, r), u = pc(l, i, a), d = mc(c), p = mc(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": p
  });
}
const yx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: bx
};
function vx(e, t, n) {
  var r = Nn(e), i = [Vt, Wt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [Vt, hn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function xx(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = Id.reduce(function(d, p) {
    return d[p] = vx(p, t.rects, a), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const wx = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: xx
};
function Cx(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Fd({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Sx = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Cx,
  data: {}
};
function Tx(e) {
  return e === "x" ? "y" : "x";
}
function Ex(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, h = n.tether, g = h === void 0 ? !0 : h, y = n.tetherOffset, b = y === void 0 ? 0 : y, f = Oo(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), C = Nn(t.placement), T = Ar(t.placement), v = !T, w = Ds(C), x = Tx(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, $ = t.rects.popper, M = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, m = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (k) {
    if (a) {
      var D, z = w === "y" ? Wt : Vt, N = w === "y" ? mn : hn, B = w === "y" ? "height" : "width", ee = k[w], Z = ee + f[z], ne = ee - f[N], U = g ? -$[B] / 2 : 0, G = T === Mr ? R[B] : $[B], ue = T === Mr ? -$[B] : -R[B], re = t.elements.arrow, F = g && re ? Ns(re) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Nd(), K = W[z], _ = W[N], H = co(0, R[B], F[B]), Q = v ? R[B] / 2 - U - H - K - m.mainAxis : G - H - K - m.mainAxis, X = v ? -R[B] / 2 + U + H + _ + m.mainAxis : ue + H + _ + m.mainAxis, ce = t.elements.arrow && _o(t.elements.arrow), V = ce ? w === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, ve = (D = P == null ? void 0 : P[w]) != null ? D : 0, A = ee + Q - ve - V, de = ee + X - ve, ie = co(g ? wi(Z, A) : Z, ee, g ? cr(ne, de) : ne);
      k[w] = ie, I[w] = ie - ee;
    }
    if (l) {
      var $e, be = w === "x" ? Wt : Vt, Te = w === "x" ? mn : hn, Fe = k[x], Ee = x === "y" ? "height" : "width", We = Fe + f[be], fe = Fe - f[Te], _e = [Wt, Vt].indexOf(C) !== -1, bt = ($e = P == null ? void 0 : P[x]) != null ? $e : 0, xt = _e ? We : Fe - R[Ee] - $[Ee] - bt + m.altAxis, Qe = _e ? Fe + R[Ee] + $[Ee] - bt - m.altAxis : fe, Je = g && _e ? K0(xt, Fe, Qe) : co(g ? xt : We, Fe, g ? Qe : fe);
      k[x] = Je, I[x] = Je - Fe;
    }
    t.modifiersData[r] = I;
  }
}
const Ox = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ex,
  requiresIfExists: ["offset"]
};
function Rx(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Px(e) {
  return e === en(e) || !pn(e) ? As(e) : Rx(e);
}
function kx(e) {
  var t = e.getBoundingClientRect(), n = Nr(t.width) / e.offsetWidth || 1, r = Nr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Ix(e, t, n) {
  n === void 0 && (n = !1);
  var r = pn(t), i = pn(t) && kx(t), a = tr(t), s = Dr(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ln(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fs(a)) && (l = Px(t)), pn(t) ? (c = Dr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = js(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function $x(e) {
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
function Mx(e) {
  var t = $x(e);
  return V0.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Nx(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Dx(e) {
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
var hc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ax(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? hc : i;
  return function(l, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], h = !1, g = {
      state: d,
      setOptions: function(C) {
        var T = typeof C == "function" ? C(d.options) : C;
        b(), d.options = Object.assign({}, a, d.options, T), d.scrollParents = {
          reference: dr(l) ? uo(l) : l.contextElement ? uo(l.contextElement) : [],
          popper: uo(c)
        };
        var v = Mx(Dx([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = v.filter(function(w) {
          return w.enabled;
        }), y(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var C = d.elements, T = C.reference, v = C.popper;
          if (gc(T, v)) {
            d.rects = {
              reference: Ix(T, _o(v), d.options.strategy === "fixed"),
              popper: Ns(v)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(m) {
              return d.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var x = d.orderedModifiers[w], k = x.fn, R = x.options, $ = R === void 0 ? {} : R, M = x.name;
              typeof k == "function" && (d = k({
                state: d,
                options: $,
                name: M,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Nx(function() {
        return new Promise(function(f) {
          g.forceUpdate(), f(d);
        });
      }),
      destroy: function() {
        b(), h = !0;
      }
    };
    if (!gc(l, c))
      return g;
    g.setOptions(u).then(function(f) {
      !h && u.onFirstUpdate && u.onFirstUpdate(f);
    });
    function y() {
      d.orderedModifiers.forEach(function(f) {
        var C = f.name, T = f.options, v = T === void 0 ? {} : T, w = f.effect;
        if (typeof w == "function") {
          var x = w({
            state: d,
            name: C,
            instance: g,
            options: v
          }), k = function() {
          };
          p.push(x || k);
        }
      });
    }
    function b() {
      p.forEach(function(f) {
        return f();
      }), p = [];
    }
    return g;
  };
}
var jx = [ix, Sx, rx, Y0, wx, gx, Ox, J0, yx], Fx = /* @__PURE__ */ Ax({
  defaultModifiers: jx
});
function Lx(e) {
  return Le("MuiPopper", e);
}
De("MuiPopper", ["root"]);
function _x(e, t) {
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
function ra(e) {
  return e.nodeType !== void 0;
}
function Bx(e) {
  return !ra(e);
}
const zx = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
    root: ["root"]
  }, Lx, t);
}, Wx = {}, Vx = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: d,
    popperRef: p,
    slotProps: h = {},
    slots: g = {},
    TransitionProps: y,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...f
  } = t, C = S.useRef(null), T = St(C, n), v = S.useRef(null), w = St(v, p), x = S.useRef(w);
  jn(() => {
    x.current = w;
  }, [w]), S.useImperativeHandle(p, () => v.current, []);
  const k = _x(u, a), [R, $] = S.useState(k), [M, m] = S.useState(Ci(r));
  S.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), S.useEffect(() => {
    r && m(Ci(r));
  }, [r]), jn(() => {
    if (!M || !c)
      return;
    const N = (Z) => {
      $(Z.placement);
    };
    if (process.env.NODE_ENV !== "production" && M && ra(M) && M.nodeType === 1) {
      const Z = M.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Z.top === 0 && Z.left === 0 && Z.right === 0 && Z.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
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
        state: Z
      }) => {
        N(Z);
      }
    }];
    l != null && (B = B.concat(l)), d && d.modifiers != null && (B = B.concat(d.modifiers));
    const ee = Fx(M, C.current, {
      placement: k,
      ...d,
      modifiers: B
    });
    return x.current(ee), () => {
      ee.destroy(), x.current(null);
    };
  }, [M, s, l, c, d, k]);
  const P = {
    placement: R
  };
  y !== null && (P.TransitionProps = y);
  const I = zx(t), D = g.root ?? "div", z = Ya({
    elementType: D,
    externalSlotProps: h.root,
    externalForwardedProps: f,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: I.root
  });
  return /* @__PURE__ */ O.jsx(D, {
    ...z,
    children: typeof i == "function" ? i(P) : i
  });
}), Ld = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: p = "bottom",
    popperOptions: h = Wx,
    popperRef: g,
    style: y,
    transition: b = !1,
    slotProps: f = {},
    slots: C = {},
    ...T
  } = t, [v, w] = S.useState(!0), x = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!c && !d && (!b || v))
    return null;
  let R;
  if (a)
    R = a;
  else if (r) {
    const m = Ci(r);
    R = m && ra(m) ? Jt(m).body : Jt(null).body;
  }
  const $ = !d && c && (!b || v) ? "none" : void 0, M = b ? {
    in: d,
    onEnter: x,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ O.jsx(To, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ O.jsx(Vx, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: b ? !v : d,
      placement: p,
      popperOptions: h,
      popperRef: g,
      slotProps: f,
      slots: C,
      ...T,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $,
        ...y
      },
      TransitionProps: M,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ld.propTypes = {
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
  anchorEl: Fn(o.oneOfType([Hn, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Ci(e.anchorEl);
      if (t && ra(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Bx(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: o.oneOfType([Hn, o.func]),
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
  popperRef: tn,
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
const Hx = me(Ld, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ls = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = xs(), i = Ze({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: d,
    keepMounted: p,
    modifiers: h,
    open: g,
    placement: y,
    popperOptions: b,
    popperRef: f,
    transition: C,
    slots: T,
    slotProps: v,
    ...w
  } = i, x = (T == null ? void 0 : T.root) ?? (l == null ? void 0 : l.Root), k = {
    anchorEl: a,
    container: u,
    disablePortal: d,
    keepMounted: p,
    modifiers: h,
    open: g,
    placement: y,
    popperOptions: b,
    popperRef: f,
    transition: C,
    ...w
  };
  return /* @__PURE__ */ O.jsx(Hx, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: x
    },
    slotProps: v ?? c,
    ...k,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Ls.propTypes = {
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
  anchorEl: o.oneOfType([Hn, o.object, o.func]),
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
  container: o.oneOfType([Hn, o.func]),
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
  popperRef: tn,
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
function Ux(e) {
  return Le("MuiListSubheader", e);
}
De("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Yx = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${pe(n)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return Ke(s, Ux, t);
}, qx = me("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${pe(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(je(({
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
}))), Si = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
  } = r, p = {
    ...r,
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }, h = Yx(p);
  return /* @__PURE__ */ O.jsx(qx, {
    as: s,
    className: ye(h.root, i),
    ref: n,
    ownerState: p,
    ...d
  });
});
Si && (Si.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (Si.propTypes = {
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
    Vr(this, "mountEffect", () => {
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
    const t = zu(Ti.create).current, [n, r] = S.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, S.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Kx(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Gx() {
  return Ti.use();
}
function Kx() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function _d(e) {
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
  } = e, [d, p] = S.useState(!1), h = ye(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, y = ye(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && p(!0), S.useEffect(() => {
    if (!l && c != null) {
      const b = setTimeout(c, u);
      return () => {
        clearTimeout(b);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ O.jsx("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ O.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (_d.propTypes = {
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
const cn = De("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ts = 550, Xx = 80, Zx = ds`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Qx = ds`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Jx = ds`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, ew = me("span", {
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
}), tw = me(_d, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${cn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Zx};
    animation-duration: ${ts}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${cn.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${cn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${cn.childLeaving} {
    opacity: 0;
    animation-name: ${Qx};
    animation-duration: ${ts}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${cn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jx};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Bd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = r, [c, u] = S.useState([]), d = S.useRef(0), p = S.useRef(null);
  S.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const h = S.useRef(!1), g = Wu(), y = S.useRef(null), b = S.useRef(null), f = S.useCallback((w) => {
    const {
      pulsate: x,
      rippleX: k,
      rippleY: R,
      rippleSize: $,
      cb: M
    } = w;
    u((m) => [...m, /* @__PURE__ */ O.jsx(tw, {
      classes: {
        ripple: ye(a.ripple, cn.ripple),
        rippleVisible: ye(a.rippleVisible, cn.rippleVisible),
        ripplePulsate: ye(a.ripplePulsate, cn.ripplePulsate),
        child: ye(a.child, cn.child),
        childLeaving: ye(a.childLeaving, cn.childLeaving),
        childPulsate: ye(a.childPulsate, cn.childPulsate)
      },
      timeout: ts,
      pulsate: x,
      rippleX: k,
      rippleY: R,
      rippleSize: $
    }, d.current)]), d.current += 1, p.current = M;
  }, [a]), C = S.useCallback((w = {}, x = {}, k = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: $ = i || x.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = x;
    if ((w == null ? void 0 : w.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (h.current = !0);
    const m = M ? null : b.current, P = m ? m.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let I, D, z;
    if ($ || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      I = Math.round(P.width / 2), D = Math.round(P.height / 2);
    else {
      const {
        clientX: N,
        clientY: B
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      I = Math.round(N - P.left), D = Math.round(B - P.top);
    }
    if ($)
      z = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const N = Math.max(Math.abs((m ? m.clientWidth : 0) - I), I) * 2 + 2, B = Math.max(Math.abs((m ? m.clientHeight : 0) - D), D) * 2 + 2;
      z = Math.sqrt(N ** 2 + B ** 2);
    }
    w != null && w.touches ? y.current === null && (y.current = () => {
      f({
        pulsate: R,
        rippleX: I,
        rippleY: D,
        rippleSize: z,
        cb: k
      });
    }, g.start(Xx, () => {
      y.current && (y.current(), y.current = null);
    })) : f({
      pulsate: R,
      rippleX: I,
      rippleY: D,
      rippleSize: z,
      cb: k
    });
  }, [i, f, g]), T = S.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), v = S.useCallback((w, x) => {
    if (g.clear(), (w == null ? void 0 : w.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.start(0, () => {
        v(w, x);
      });
      return;
    }
    y.current = null, u((k) => k.length > 0 ? k.slice(1) : k), p.current = x;
  }, [g]);
  return S.useImperativeHandle(n, () => ({
    pulsate: T,
    start: C,
    stop: v
  }), [T, C, v]), /* @__PURE__ */ O.jsx(ew, {
    className: ye(cn.root, a.root, s),
    ref: b,
    ...l,
    children: /* @__PURE__ */ O.jsx(Os, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Bd.propTypes = {
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
function nw(e) {
  return Le("MuiButtonBase", e);
}
const rw = De("MuiButtonBase", ["root", "disabled", "focusVisible"]), ow = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = Ke({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, nw, i);
  return n && r && (s.root += ` ${r}`), s;
}, iw = me("button", {
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
  [`&.${rw.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), jr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    disableTouchRipple: p = !1,
    focusRipple: h = !1,
    focusVisibleClassName: g,
    LinkComponent: y = "a",
    onBlur: b,
    onClick: f,
    onContextMenu: C,
    onDragLeave: T,
    onFocus: v,
    onFocusVisible: w,
    onKeyDown: x,
    onKeyUp: k,
    onMouseDown: R,
    onMouseLeave: $,
    onMouseUp: M,
    onTouchEnd: m,
    onTouchMove: P,
    onTouchStart: I,
    tabIndex: D = 0,
    TouchRippleProps: z,
    touchRippleRef: N,
    type: B,
    ...ee
  } = r, Z = S.useRef(null), ne = Gx(), U = St(ne.ref, N), [G, ue] = S.useState(!1);
  u && G && ue(!1), S.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ue(!0), Z.current.focus();
    }
  }), []);
  const re = ne.shouldMount && !d && !u;
  S.useEffect(() => {
    G && h && !d && ne.pulsate();
  }, [d, h, G, ne]);
  function F(fe, _e, bt = p) {
    return $n((xt) => (_e && _e(xt), bt || ne[fe](xt), !0));
  }
  const W = F("start", R), K = F("stop", C), _ = F("stop", T), H = F("stop", M), Q = F("stop", (fe) => {
    G && fe.preventDefault(), $ && $(fe);
  }), X = F("start", I), ce = F("stop", m), V = F("stop", P), ve = F("stop", (fe) => {
    Nl(fe.target) || ue(!1), b && b(fe);
  }, !1), A = $n((fe) => {
    Z.current || (Z.current = fe.currentTarget), Nl(fe.target) && (ue(!0), w && w(fe)), v && v(fe);
  }), de = () => {
    const fe = Z.current;
    return c && c !== "button" && !(fe.tagName === "A" && fe.href);
  }, ie = $n((fe) => {
    h && !fe.repeat && G && fe.key === " " && ne.stop(fe, () => {
      ne.start(fe);
    }), fe.target === fe.currentTarget && de() && fe.key === " " && fe.preventDefault(), x && x(fe), fe.target === fe.currentTarget && de() && fe.key === "Enter" && !u && (fe.preventDefault(), f && f(fe));
  }), $e = $n((fe) => {
    h && fe.key === " " && G && !fe.defaultPrevented && ne.stop(fe, () => {
      ne.pulsate(fe);
    }), k && k(fe), f && fe.target === fe.currentTarget && de() && fe.key === " " && !fe.defaultPrevented && f(fe);
  });
  let be = c;
  be === "button" && (ee.href || ee.to) && (be = y);
  const Te = {};
  be === "button" ? (Te.type = B === void 0 ? "button" : B, Te.disabled = u) : (!ee.href && !ee.to && (Te.role = "button"), u && (Te["aria-disabled"] = u));
  const Fe = St(n, Z), Ee = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: D,
    focusVisible: G
  }, We = ow(Ee);
  return /* @__PURE__ */ O.jsxs(iw, {
    as: be,
    className: ye(We.root, l),
    ownerState: Ee,
    onBlur: ve,
    onClick: f,
    onContextMenu: K,
    onFocus: A,
    onKeyDown: ie,
    onKeyUp: $e,
    onMouseDown: W,
    onMouseLeave: Q,
    onMouseUp: H,
    onDragLeave: _,
    onTouchEnd: ce,
    onTouchMove: V,
    onTouchStart: X,
    ref: Fe,
    tabIndex: u ? -1 : D,
    type: B,
    ...Te,
    ...ee,
    children: [s, re ? /* @__PURE__ */ O.jsx(Bd, {
      ref: U,
      center: a,
      ...z
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: tn,
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
  component: ys,
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
function aw(e) {
  return Le("MuiIconButton", e);
}
const sw = De("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), lw = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: a
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${pe(r)}`, i && `edge${pe(i)}`, `size${pe(a)}`]
  };
  return Ke(s, aw, t);
}, cw = me(jr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${pe(n.color)}`], n.edge && t[`edge${pe(n.edge)}`], t[`size${pe(n.size)}`]];
  }
})(je(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), je(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(fn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(fn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ot((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${sw.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), lr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    ...p
  } = r, h = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }, g = lw(h);
  return /* @__PURE__ */ O.jsx(cw, {
    className: ye(g.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n,
    ...p,
    ownerState: h,
    children: a
  });
});
process.env.NODE_ENV !== "production" && (lr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Fn(o.node, (e) => S.Children.toArray(e.children).some((n) => /* @__PURE__ */ S.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const uw = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function dw(e) {
  return Le("MuiChip", e);
}
const Me = De("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), fw = (e) => {
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
    root: ["root", c, n && "disabled", `size${pe(r)}`, `color${pe(i)}`, l && "clickable", l && `clickableColor${pe(i)}`, s && "deletable", s && `deletableColor${pe(i)}`, `${c}${pe(i)}`],
    label: ["label", `label${pe(r)}`],
    avatar: ["avatar", `avatar${pe(r)}`, `avatarColor${pe(i)}`],
    icon: ["icon", `icon${pe(r)}`, `iconColor${pe(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${pe(r)}`, `deleteIconColor${pe(i)}`, `deleteIcon${pe(c)}Color${pe(i)}`]
  };
  return Ke(u, dw, t);
}, pw = me("div", {
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
      [`& .${Me.avatar}`]: t[`avatar${pe(l)}`]
    }, {
      [`& .${Me.avatar}`]: t[`avatarColor${pe(r)}`]
    }, {
      [`& .${Me.icon}`]: t.icon
    }, {
      [`& .${Me.icon}`]: t[`icon${pe(l)}`]
    }, {
      [`& .${Me.icon}`]: t[`iconColor${pe(i)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIcon${pe(l)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIconColor${pe(r)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIcon${pe(c)}Color${pe(r)}`]
    }, t.root, t[`size${pe(l)}`], t[`color${pe(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${pe(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${pe(r)}`], t[c], t[`${c}${pe(r)}`]];
  }
})(je(({
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
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : ot(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : ot(e.palette.text.primary, 0.4)
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
    }, ...Object.entries(e.palette).filter(fn(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Me.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : ot(e.palette[n].contrastText, 0.7),
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ot(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(fn(["dark"])).map(([n]) => ({
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ot(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${Me.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ot(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(fn(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(fn()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ot(e.palette[n].main, 0.7)}`,
        [`&.${Me.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette[n].main, e.palette.action.hoverOpacity)
        },
        [`&.${Me.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : ot(e.palette[n].main, e.palette.action.focusOpacity)
        },
        [`& .${Me.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ot(e.palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), mw = me("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${pe(r)}`]];
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
function bc(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const zd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
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
    icon: p,
    label: h,
    onClick: g,
    onDelete: y,
    onKeyDown: b,
    onKeyUp: f,
    size: C = "medium",
    variant: T = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...x
  } = r, k = S.useRef(null), R = St(k, n), $ = (ne) => {
    ne.stopPropagation(), y && y(ne);
  }, M = (ne) => {
    ne.currentTarget === ne.target && bc(ne) && ne.preventDefault(), b && b(ne);
  }, m = (ne) => {
    ne.currentTarget === ne.target && y && bc(ne) && y(ne), f && f(ne);
  }, P = s !== !1 && g ? !0 : s, I = P || y ? jr : c || "div", D = {
    ...r,
    component: I,
    disabled: d,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ S.isValidElement(p) && p.props.color || l,
    onDelete: !!y,
    clickable: P,
    variant: T
  }, z = fw(D), N = I === jr ? {
    component: c || "div",
    focusVisibleClassName: z.focusVisible,
    ...y && {
      disableRipple: !0
    }
  } : {};
  let B = null;
  y && (B = u && /* @__PURE__ */ S.isValidElement(u) ? /* @__PURE__ */ S.cloneElement(u, {
    className: ye(u.props.className, z.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ O.jsx(uw, {
    className: ye(z.deleteIcon),
    onClick: $
  }));
  let ee = null;
  i && /* @__PURE__ */ S.isValidElement(i) && (ee = /* @__PURE__ */ S.cloneElement(i, {
    className: ye(z.avatar, i.props.className)
  }));
  let Z = null;
  return p && /* @__PURE__ */ S.isValidElement(p) && (Z = /* @__PURE__ */ S.cloneElement(p, {
    className: ye(z.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && ee && Z && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ O.jsxs(pw, {
    as: I,
    className: ye(z.root, a),
    disabled: P && d ? !0 : void 0,
    onClick: g,
    onKeyDown: M,
    onKeyUp: m,
    ref: R,
    tabIndex: w && d ? -1 : v,
    ownerState: D,
    ...N,
    ...x,
    children: [ee || Z, /* @__PURE__ */ O.jsx(mw, {
      className: ye(z.label),
      ownerState: D,
      children: h
    }), B]
  });
});
process.env.NODE_ENV !== "production" && (zd.propTypes = {
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
  children: $b,
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
const hw = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function gw(e) {
  return Le("MuiAutocomplete", e);
}
const ke = De("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var yc, vc;
const bw = (e) => {
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
  } = e, p = {
    root: ["root", r && "expanded", i && "focused", a && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${pe(d)}`],
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
  return Ke(p, gw, t);
}, yw = me("div", {
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
      [`& .${ke.tag}`]: t[`tagSize${pe(l)}`]
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
  [`& .${Xn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${Xn.root}.${Kt.sizeSmall}`]: {
    [`& .${Xn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${ln.root}`]: {
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
  [`& .${ln.root}.${Kt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${ke.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Xt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${ke.hasPopupIcon}&, .${ke.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${ke.hasPopupIcon}.${ke.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Xt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${ke.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Xt.root}.${Kt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Xt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${Kt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Xt.root}.${Kt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${ke.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Xt.root}.${Kt.hiddenLabel}.${Kt.sizeSmall}`]: {
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
}), vw = me("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), xw = me(lr, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), ww = me(lr, {
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
}), Cw = me(Ls, {
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
})(je(({
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
}))), Sw = me(ea, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(je(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), Tw = me("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(je(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Ew = me("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(je(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Ow = me("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(je(({
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ot(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${ke.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ot(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${ke.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ot(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), Rw = me(Si, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(je(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), Pw = me("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${ke.option}`]: {
    paddingLeft: 24
  }
}), Wd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: i = !1,
    autoHighlight: a = !1,
    autoSelect: s = !1,
    blurOnSelect: l = !1,
    ChipProps: c,
    className: u,
    clearIcon: d = yc || (yc = /* @__PURE__ */ O.jsx(hw, {
      fontSize: "small"
    })),
    clearOnBlur: p = !r.freeSolo,
    clearOnEscape: h = !1,
    clearText: g = "Clear",
    closeText: y = "Close",
    componentsProps: b,
    defaultValue: f = r.multiple ? [] : null,
    disableClearable: C = !1,
    disableCloseOnSelect: T = !1,
    disabled: v = !1,
    disabledItemsFocusable: w = !1,
    disableListWrap: x = !1,
    disablePortal: k = !1,
    filterOptions: R,
    filterSelectedOptions: $ = !1,
    forcePopupIcon: M = "auto",
    freeSolo: m = !1,
    fullWidth: P = !1,
    getLimitTagsText: I = (Ne) => `+${Ne}`,
    getOptionDisabled: D,
    getOptionKey: z,
    getOptionLabel: N,
    isOptionEqualToValue: B,
    groupBy: ee,
    handleHomeEndKeys: Z = !r.freeSolo,
    id: ne,
    includeInputInList: U = !1,
    inputValue: G,
    limitTags: ue = -1,
    ListboxComponent: re,
    ListboxProps: F,
    loading: W = !1,
    loadingText: K = "Loading…",
    multiple: _ = !1,
    noOptionsText: H = "No options",
    onChange: Q,
    onClose: X,
    onHighlightChange: ce,
    onInputChange: V,
    onOpen: ve,
    open: A,
    openOnFocus: de = !1,
    openText: ie = "Open",
    options: $e,
    PaperComponent: be,
    PopperComponent: Te,
    popupIcon: Fe = vc || (vc = /* @__PURE__ */ O.jsx(Od, {})),
    readOnly: Ee = !1,
    renderGroup: We,
    renderInput: fe,
    renderOption: _e,
    renderTags: bt,
    selectOnFocus: xt = !r.freeSolo,
    size: Qe = "medium",
    slots: Je = {},
    slotProps: Re = {},
    value: st,
    ...Pe
  } = r, {
    getRootProps: ft,
    getInputProps: Dt,
    getInputLabelProps: Pt,
    getPopupIndicatorProps: he,
    getClearProps: xe,
    getTagProps: et,
    getListboxProps: at,
    getOptionProps: lt,
    value: Ft,
    dirty: Ot,
    expanded: rn,
    id: Ut,
    popupOpen: bn,
    focused: Yt,
    focusedTag: Lt,
    anchorEl: yn,
    setAnchorEl: qt,
    inputValue: vn,
    groupedOptions: pt
  } = $0({
    ...r,
    componentName: "Autocomplete"
  }), on = !C && !v && Ot && !Ee, It = (!m || M === !0) && M !== !1, {
    onMouseDown: ge
  } = Dt(), {
    ref: an,
    ...Cn
  } = at(), Sn = N || ((Ne) => Ne.label ?? Ne), E = {
    ...r,
    disablePortal: k,
    expanded: rn,
    focused: Yt,
    fullWidth: P,
    getOptionLabel: Sn,
    hasClearIcon: on,
    hasPopupIcon: It,
    inputFocused: Lt === -1,
    popupOpen: bn,
    size: Qe
  }, q = bw(E), ae = {
    slots: {
      paper: be,
      popper: Te,
      ...Je
    },
    slotProps: {
      chip: c,
      listbox: F,
      ...b,
      ...Re
    }
  }, [j, L] = zt("listbox", {
    elementType: Ow,
    externalForwardedProps: ae,
    ownerState: E,
    className: q.listbox,
    additionalProps: Cn,
    ref: an
  }), [J, le] = zt("paper", {
    elementType: ea,
    externalForwardedProps: ae,
    ownerState: E,
    className: q.paper
  }), [se, Oe] = zt("popper", {
    elementType: Ls,
    externalForwardedProps: ae,
    ownerState: E,
    className: q.popper,
    additionalProps: {
      disablePortal: k,
      style: {
        width: yn ? yn.clientWidth : null
      },
      role: "presentation",
      anchorEl: yn,
      open: bn
    }
  });
  let Ce;
  if (_ && Ft.length > 0) {
    const Ne = (Tt) => ({
      className: q.tag,
      disabled: v,
      ...et(Tt)
    });
    bt ? Ce = bt(Ft, Ne, E) : Ce = Ft.map((Tt, Tn) => {
      const {
        key: rr,
        ...ia
      } = Ne({
        index: Tn
      });
      return /* @__PURE__ */ O.jsx(zd, {
        label: Sn(Tt),
        size: Qe,
        ...ia,
        ...ae.slotProps.chip
      }, rr);
    });
  }
  if (ue > -1 && Array.isArray(Ce)) {
    const Ne = Ce.length - ue;
    !Yt && Ne > 0 && (Ce = Ce.splice(0, ue), Ce.push(/* @__PURE__ */ O.jsx("span", {
      className: q.tag,
      children: I(Ne)
    }, Ce.length)));
  }
  const yt = We || ((Ne) => /* @__PURE__ */ O.jsxs("li", {
    children: [/* @__PURE__ */ O.jsx(Rw, {
      className: q.groupLabel,
      ownerState: E,
      component: "div",
      children: Ne.group
    }), /* @__PURE__ */ O.jsx(Pw, {
      className: q.groupUl,
      ownerState: E,
      children: Ne.children
    })]
  }, Ne.key)), At = _e || ((Ne, Tt) => {
    const {
      key: Tn,
      ...rr
    } = Ne;
    return /* @__PURE__ */ O.jsx("li", {
      ...rr,
      children: Sn(Tt)
    }, Tn);
  }), ut = (Ne, Tt) => {
    const Tn = lt({
      option: Ne,
      index: Tt
    });
    return At({
      ...Tn,
      className: q.option
    }, Ne, {
      selected: Tn["aria-selected"],
      index: Tt,
      inputValue: vn
    }, E);
  }, sn = ae.slotProps.clearIndicator, qn = ae.slotProps.popupIndicator, Gn = (Ne) => /* @__PURE__ */ O.jsx(Cw, {
    as: se,
    ...Oe,
    children: /* @__PURE__ */ O.jsx(Sw, {
      as: J,
      ...le,
      children: Ne
    })
  });
  let pr = null;
  return pt.length > 0 ? pr = Gn(
    // TODO v7: remove `as` prop and move ListboxComponentProp to externalForwardedProps or remove ListboxComponentProp entirely
    // https://github.com/mui/material-ui/pull/43994#issuecomment-2401945800
    /* @__PURE__ */ O.jsx(j, {
      as: re,
      ...L,
      children: pt.map((Ne, Tt) => ee ? yt({
        key: Ne.key,
        group: Ne.group,
        children: Ne.options.map((Tn, rr) => ut(Tn, Ne.index + rr))
      }) : ut(Ne, Tt))
    })
  ) : W && pt.length === 0 ? pr = Gn(/* @__PURE__ */ O.jsx(Tw, {
    className: q.loading,
    ownerState: E,
    children: K
  })) : pt.length === 0 && !m && !W && (pr = Gn(/* @__PURE__ */ O.jsx(Ew, {
    className: q.noOptions,
    ownerState: E,
    role: "presentation",
    onMouseDown: (Ne) => {
      Ne.preventDefault();
    },
    children: H
  }))), /* @__PURE__ */ O.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ O.jsx(yw, {
      ref: n,
      className: ye(q.root, u),
      ownerState: E,
      ...ft(Pe),
      children: fe({
        id: Ut,
        disabled: v,
        fullWidth: !0,
        size: Qe === "small" ? "small" : void 0,
        InputLabelProps: Pt(),
        InputProps: {
          ref: qt,
          className: q.inputRoot,
          startAdornment: Ce,
          onMouseDown: (Ne) => {
            Ne.target === Ne.currentTarget && ge(Ne);
          },
          ...(on || It) && {
            endAdornment: /* @__PURE__ */ O.jsxs(vw, {
              className: q.endAdornment,
              ownerState: E,
              children: [on ? /* @__PURE__ */ O.jsx(xw, {
                ...xe(),
                "aria-label": g,
                title: g,
                ownerState: E,
                ...sn,
                className: ye(q.clearIndicator, sn == null ? void 0 : sn.className),
                children: d
              }) : null, It ? /* @__PURE__ */ O.jsx(ww, {
                ...he(),
                disabled: v,
                "aria-label": bn ? y : ie,
                title: bn ? y : ie,
                ownerState: E,
                ...qn,
                className: ye(q.popupIndicator, qn == null ? void 0 : qn.className),
                children: Fe
              }) : null]
            })
          }
        },
        inputProps: {
          className: q.input,
          disabled: v,
          readOnly: Ee,
          ...Dt()
        }
      })
    }), yn ? pr : null]
  });
});
process.env.NODE_ENV !== "production" && (Wd.propTypes = {
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
  defaultValue: Fn(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
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
  value: Fn(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Ra = (e) => e.stopPropagation(), kw = ({ options: e, ...t }) => {
  const n = it(
    () => e.find((r) => r.value === t.value),
    [e, t.value]
  );
  return /* @__PURE__ */ O.jsx(
    Wd,
    {
      onChange: (r, i) => {
        var a;
        return (a = t.onChange) == null ? void 0 : a.call(t, i == null ? void 0 : i.value);
      },
      value: n ?? null,
      options: e,
      onClick: Ra,
      onKeyDown: Ra,
      getOptionLabel: (r) => r.label,
      renderInput: (r) => /* @__PURE__ */ O.jsx(
        Pd,
        {
          ...r,
          onClick: Ra,
          label: t.label,
          error: t.error,
          helperText: t.helperText
        }
      )
    }
  );
}, Iw = Dn(rd)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, xc = (e) => e.stopPropagation(), Pa = ({ children: e, ...t }) => /* @__PURE__ */ O.jsxs(Iw, { children: [
  ou(t),
  e
] }), $w = (e) => (t) => {
  const { filters: n, setFilters: r } = xn(Is), i = it(() => n[e.key], [n, e]), a = Mt(
    (s) => {
      r({ ...n, [e.key]: s });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === bo.AUTOCOMPLETE && (i === void 0 || typeof i == "string") ? /* @__PURE__ */ O.jsx(Pa, { ...t, children: /* @__PURE__ */ O.jsx(
    kw,
    {
      options: e.filterOptions ?? [],
      onChange: a,
      value: i
    }
  ) }) : /* @__PURE__ */ O.jsx(Pa, { ...t, children: /* @__PURE__ */ O.jsx(
    Pd,
    {
      autoComplete: "off",
      onClick: xc,
      onKeyDown: xc,
      value: i ?? "",
      onChange: (s) => a(s.target.value)
    }
  ) }) : /* @__PURE__ */ O.jsx(Pa, { ...t });
}, Mw = {
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
}, Nw = (e, t, n) => {
  let r;
  const i = Mw[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ka(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Dw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Aw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, jw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fw = {
  date: ka({
    formats: Dw,
    defaultWidth: "full"
  }),
  time: ka({
    formats: Aw,
    defaultWidth: "full"
  }),
  dateTime: ka({
    formats: jw,
    defaultWidth: "full"
  })
}, Lw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, _w = (e, t, n, r) => Lw[e];
function Zr(e) {
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
const Bw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, zw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ww = {
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
}, Vw = {
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
}, Hw = {
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
}, Uw = {
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
}, Yw = (e, t) => {
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
}, qw = {
  ordinalNumber: Yw,
  era: Zr({
    values: Bw,
    defaultWidth: "wide"
  }),
  quarter: Zr({
    values: zw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Zr({
    values: Ww,
    defaultWidth: "wide"
  }),
  day: Zr({
    values: Vw,
    defaultWidth: "wide"
  }),
  dayPeriod: Zr({
    values: Hw,
    defaultWidth: "wide",
    formattingValues: Uw,
    defaultFormattingWidth: "wide"
  })
};
function Qr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? Kw(l, (p) => p.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Gw(l, (p) => p.test(s))
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
function Gw(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Kw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Xw(e) {
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
const Zw = /^(\d+)(th|st|nd|rd)?/i, Qw = /\d+/i, Jw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, eC = {
  any: [/^b/i, /^(a|c)/i]
}, tC = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, nC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, rC = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, oC = {
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
}, iC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, aC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, sC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, lC = {
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
}, cC = {
  ordinalNumber: Xw({
    matchPattern: Zw,
    parsePattern: Qw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Qr({
    matchPatterns: Jw,
    defaultMatchWidth: "wide",
    parsePatterns: eC,
    defaultParseWidth: "any"
  }),
  quarter: Qr({
    matchPatterns: tC,
    defaultMatchWidth: "wide",
    parsePatterns: nC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Qr({
    matchPatterns: rC,
    defaultMatchWidth: "wide",
    parsePatterns: oC,
    defaultParseWidth: "any"
  }),
  day: Qr({
    matchPatterns: iC,
    defaultMatchWidth: "wide",
    parsePatterns: aC,
    defaultParseWidth: "any"
  }),
  dayPeriod: Qr({
    matchPatterns: sC,
    defaultMatchWidth: "any",
    parsePatterns: lC,
    defaultParseWidth: "any"
  })
}, uC = {
  code: "en-US",
  formatDistance: Nw,
  formatLong: Fw,
  formatRelative: _w,
  localize: qw,
  match: cC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let dC = {};
function Bo() {
  return dC;
}
const Vd = 6048e5, fC = 864e5, wc = Symbol.for("constructDateFrom");
function Qn(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && wc in e ? e[wc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function wn(e, t) {
  return Qn(t || e, e);
}
function Cc(e) {
  const t = wn(e), n = new Date(
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
function pC(e, ...t) {
  const n = Qn.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Sc(e, t) {
  const n = wn(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function mC(e, t, n) {
  const [r, i] = pC(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Sc(r), s = Sc(i), l = +a - Cc(a), c = +s - Cc(s);
  return Math.round((l - c) / fC);
}
function hC(e, t) {
  const n = wn(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function gC(e, t) {
  const n = wn(e, t == null ? void 0 : t.in);
  return mC(n, hC(n)) + 1;
}
function Ro(e, t) {
  var l, c, u, d;
  const n = Bo(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, i = wn(e, t == null ? void 0 : t.in), a = i.getDay(), s = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Ei(e, t) {
  return Ro(e, { ...t, weekStartsOn: 1 });
}
function Hd(e, t) {
  const n = wn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Qn(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Ei(i), s = Qn(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const l = Ei(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function bC(e, t) {
  const n = Hd(e, t), r = Qn(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ei(r);
}
function yC(e, t) {
  const n = wn(e, t == null ? void 0 : t.in), r = +Ei(n) - +bC(n);
  return Math.round(r / Vd) + 1;
}
function Ud(e, t) {
  var d, p, h, g;
  const n = wn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Bo(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((g = (h = i.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = Qn((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const l = Ro(s, t), c = Qn((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const u = Ro(c, t);
  return +n >= +l ? r + 1 : +n >= +u ? r : r - 1;
}
function vC(e, t) {
  var l, c, u, d;
  const n = Bo(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, i = Ud(e, t), a = Qn((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Ro(a, t);
}
function xC(e, t) {
  const n = wn(e, t == null ? void 0 : t.in), r = +Ro(n, t) - +vC(n, t);
  return Math.round(r / Vd) + 1;
}
function Xe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Kn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Xe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Xe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Xe(e.getDate(), t.length);
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
    return Xe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Xe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Xe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Xe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Xe(i, t.length);
  }
}, Cr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Tc = {
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
    return Kn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = Ud(e, r), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = a % 100;
      return Xe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Xe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Hd(e);
    return Xe(n, t.length);
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
    return Xe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Xe(r, 2);
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
        return Xe(r, 2);
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
        return Kn.M(e, t);
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
        return Xe(r + 1, 2);
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
    const i = xC(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Xe(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = yC(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Xe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Kn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = gC(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Xe(r, t.length);
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
        return Xe(a, 2);
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
        return Xe(a, t.length);
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
        return Xe(i, t.length);
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
    return Kn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Kn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Xe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Xe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Kn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Kn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Kn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Oc(r);
      case "XXXX":
      case "XX":
        return ar(r);
      case "XXXXX":
      case "XXX":
      default:
        return ar(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Oc(r);
      case "xxxx":
      case "xx":
        return ar(r);
      case "xxxxx":
      case "xxx":
      default:
        return ar(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ec(r, ":");
      case "OOOO":
      default:
        return "GMT" + ar(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ec(r, ":");
      case "zzzz":
      default:
        return "GMT" + ar(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Xe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Xe(+e, t.length);
  }
};
function Ec(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Xe(a, 2);
}
function Oc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Xe(Math.abs(e) / 60, 2) : ar(e, t);
}
function ar(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Xe(Math.trunc(r / 60), 2), a = Xe(r % 60, 2);
  return n + i + t + a;
}
const Rc = (e, t) => {
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
}, Yd = (e, t) => {
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
}, wC = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return Rc(e, t);
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
  return a.replace("{{date}}", Rc(r, t)).replace("{{time}}", Yd(i, t));
}, CC = {
  p: Yd,
  P: wC
}, SC = /^D+$/, TC = /^Y+$/, EC = ["D", "DD", "YY", "YYYY"];
function OC(e) {
  return SC.test(e);
}
function RC(e) {
  return TC.test(e);
}
function PC(e, t, n) {
  const r = kC(e, t, n);
  if (console.warn(r), EC.includes(e)) throw new RangeError(r);
}
function kC(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function qd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Gd(e) {
  return !(!qd(e) && typeof e != "number" || isNaN(+wn(e)));
}
const IC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $C = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, MC = /^'([^]*?)'?$/, NC = /''/g, DC = /[a-zA-Z]/;
function AC(e, t, n) {
  var d, p, h, g, y, b, f, C;
  const r = Bo(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? uC, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((b = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((C = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = wn(e, n == null ? void 0 : n.in);
  if (!Gd(l))
    throw new RangeError("Invalid time value");
  let c = t.match($C).map((T) => {
    const v = T[0];
    if (v === "p" || v === "P") {
      const w = CC[v];
      return w(T, i.formatLong);
    }
    return T;
  }).join("").match(IC).map((T) => {
    if (T === "''")
      return { isToken: !1, value: "'" };
    const v = T[0];
    if (v === "'")
      return { isToken: !1, value: jC(T) };
    if (Tc[v])
      return { isToken: !0, value: T };
    if (v.match(DC))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && RC(v) || !(n != null && n.useAdditionalDayOfYearTokens) && OC(v)) && PC(v, t, String(e));
    const w = Tc[v[0]];
    return w(l, v, i.localize, u);
  }).join("");
}
function jC(e) {
  const t = e.match(MC);
  return t ? t[1].replace(NC, "'") : e;
}
function FC() {
  return Object.assign({}, Bo());
}
function Pc(e, t, n) {
  const r = FC(), i = BC(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in i ? LC(i, t) : _C(i, t);
}
function LC(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function _C(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function BC(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function zC(e, t) {
  const n = YC(t);
  return "formatToParts" in n ? VC(n, e) : HC(n, e);
}
const WC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function VC(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let i = 0; i < n.length; i++) {
      const a = WC[n[i].type];
      a !== void 0 && (r[a] = parseInt(n[i].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function HC(e, t) {
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
const Ia = {}, kc = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), UC = kc === "06/25/2014, 00:00:00" || kc === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function YC(e) {
  return Ia[e] || (Ia[e] = UC ? new Intl.DateTimeFormat("en-US", {
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
  })), Ia[e];
}
function Kd(e, t, n, r, i, a, s) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, i, a, s), l;
}
const Ic = 36e5, qC = 6e4, $a = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function _s(e, t, n) {
  if (!e)
    return 0;
  let r = $a.timezoneZ.exec(e);
  if (r)
    return 0;
  let i, a;
  if (r = $a.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), $c(i) ? -(i * Ic) : NaN;
  if (r = $a.timezoneHHMM.exec(e), r) {
    i = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return $c(i, s) ? (a = Math.abs(i) * Ic + s * qC, r[1] === "+" ? -a : a) : NaN;
  }
  if (XC(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : GC(t), l = ns(s, e);
    return -(n ? l : KC(t, l, e));
  }
  return NaN;
}
function GC(e) {
  return Kd(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function ns(e, t) {
  const n = zC(e, t), r = Kd(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let i = e.getTime();
  const a = i % 1e3;
  return i -= a >= 0 ? a : 1e3 + a, r - i;
}
function KC(e, t, n) {
  let i = e.getTime() - t;
  const a = ns(new Date(i), n);
  if (t === a)
    return t;
  i -= a - t;
  const s = ns(new Date(i), n);
  return a === s ? a : Math.max(a, s);
}
function $c(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Mc = {};
function XC(e) {
  if (Mc[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Mc[e] = !0, !0;
  } catch {
    return !1;
  }
}
const ZC = 60 * 1e3, QC = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = Ma(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Nc(r);
      case "XXXX":
      case "XX":
        return Tr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Tr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = Ma(n.timeZone, e);
    switch (t) {
      case "x":
        return Nc(r);
      case "xxxx":
      case "xx":
        return Tr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Tr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = Ma(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + JC(r, ":");
      case "OOOO":
      default:
        return "GMT" + Tr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return Pc("short", e, n);
      case "zzzz":
      default:
        return Pc("long", e, n);
    }
  }
};
function Ma(e, t) {
  const n = e ? _s(e, t, !0) / ZC : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
function Tr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Oi(Math.floor(r / 60), 2), a = Oi(Math.floor(r % 60), 2);
  return n + i + t + a;
}
function Nc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Oi(Math.abs(e) / 60, 2) : Tr(e, t);
}
function JC(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Oi(a, 2);
}
function Dc(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const e1 = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Na = 36e5, Ac = 6e4, t1 = 2, jt = {
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
  timeZone: e1
};
function Xd(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? t1 : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = n1(e), { year: i, restDateString: a } = r1(r.date, n), s = o1(a, i);
  if (s === null || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const l = s.getTime();
    let c = 0, u;
    if (r.time && (c = i1(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (u = _s(r.timeZone || t.timeZone, new Date(l + c)), isNaN(u))
        return /* @__PURE__ */ new Date(NaN);
    } else
      u = Dc(new Date(l + c)), u = Dc(new Date(l + c + u));
    return new Date(l + c + u);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function n1(e) {
  const t = {};
  let n = jt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = jt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const i = jt.timeZone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timeZone = i[1].trim()) : t.time = r;
  }
  return t;
}
function r1(e, t) {
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
function o1(e, t) {
  if (t === null)
    return null;
  let n, r, i;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = jt.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, Fc(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = jt.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return l1(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = jt.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return Fc(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = jt.Www.exec(e), a)
    return i = parseInt(a[1], 10) - 1, Lc(i) ? jc(t, i) : /* @__PURE__ */ new Date(NaN);
  if (a = jt.WwwD.exec(e), a) {
    i = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return Lc(i, s) ? jc(t, i, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function i1(e) {
  let t, n, r = jt.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), Da(t) ? t % 24 * Na : NaN;
  if (r = jt.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), Da(t, n) ? t % 24 * Na + n * Ac : NaN;
  if (r = jt.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const i = parseFloat(r[3].replace(",", "."));
    return Da(t, n, i) ? t % 24 * Na + n * Ac + i * 1e3 : NaN;
  }
  return null;
}
function jc(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, a = t * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const a1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], s1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Zd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Fc(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = Zd(e);
    if (r && n > s1[t] || !r && n > a1[t])
      return !1;
  }
  return !0;
}
function l1(e, t) {
  if (t < 1)
    return !1;
  const n = Zd(e);
  return !(n && t > 366 || !n && t > 365);
}
function Lc(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Da(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const c1 = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function u1(e, t, n = {}) {
  t = String(t);
  const r = t.match(c1);
  if (r) {
    const i = Xd(n.originalDate || e, n);
    t = r.reduce(function(a, s) {
      if (s[0] === "'")
        return a;
      const l = a.indexOf(s), c = a[l - 1] === "'", u = a.replace(s, "'" + QC[s[0]](i, s, n) + "'");
      return c ? u.substring(0, l - 1) + u.substring(l + 1) : u;
    }, t);
  }
  return AC(e, t, n);
}
function d1(e, t, n) {
  e = Xd(e, n);
  const r = _s(t, e, !0), i = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), a.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), a;
}
function f1(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, u1(d1(e, t, { timeZone: r.timeZone }), n, r);
}
var Qd = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(Qd || {});
const p1 = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !qd(e) && typeof e == "string" ? new Date(e) : e;
  return Gd(r) ? f1(e, n, t) : "--";
}, _c = (e) => e.trim().toLowerCase(), oa = Ct.createContext({
  columns: [],
  hiddenColumn: [],
  setHiddenColumn: () => {
  },
  enabled: !1
}), m1 = "data-grid-hidden-column-visibility", h1 = ({
  columns: e,
  children: t,
  visibilityFeatureDisabledFor: n,
  hiddenByDefault: r,
  enabled: i,
  localStorageKey: a = m1
}) => {
  const [s, l] = Ct.useState(0), [c, u] = Ct.useState([]);
  Fr(() => {
    const h = localStorage.getItem(a);
    if (h) {
      const g = JSON.parse(h);
      d(Array.isArray(g) ? g : []);
    } else
      d(r || []);
  }, [r]);
  const d = Mt((h) => {
    localStorage.setItem(a, JSON.stringify(h)), l((g) => g + 1), u(h);
  }, []), p = it(
    () => e.filter((h) => !(n != null && n.includes(h.key))),
    [e, n]
  );
  return /* @__PURE__ */ O.jsx(
    oa.Provider,
    {
      value: {
        gridKey: `data-grid-${s}`,
        columns: p,
        hiddenColumn: c,
        setHiddenColumn: d,
        enabled: i
      },
      children: t
    }
  );
}, g1 = ({
  columns: e,
  selectionEnabled: t
}) => {
  const { enabled: n, hiddenColumn: r } = xn(oa), i = Mt((a) => {
    const s = () => {
      if (a.renderCell)
        return a.renderCell;
      if (a.type === io.DATE)
        return ({ row: c }) => {
          var u, d;
          return p1(
            c[a.key],
            ((u = a.dateOptions) == null ? void 0 : u.formatDate) ?? Qd.DATE_WITH_TIME,
            (d = a.dateOptions) == null ? void 0 : d.timeZone
          );
        };
    }, l = () => a.renderHeaderCell ? a.renderHeaderCell : $w(a);
    return { ...a, renderCell: s(), renderHeaderCell: l() };
  }, []);
  return it(() => {
    const a = [];
    return t && a.push({
      ...Cp,
      minWidth: 50,
      maxWidth: 50
    }), a.push(...e.map((s) => i(s))), n && r ? a.filter((s) => !r.includes(s.key)) : a;
  }, [e, i, n, r]);
};
function b1(e) {
  return Le("PrivateSwitchBase", e);
}
De("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const y1 = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", n && "checked", r && "disabled", i && `edge${pe(i)}`],
    input: ["input"]
  };
  return Ke(a, b1, t);
}, v1 = me(jr)({
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
}), x1 = me("input", {
  shouldForwardProp: nn
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
}), Jd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: a,
    className: s,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: d = !1,
    icon: p,
    id: h,
    inputProps: g,
    inputRef: y,
    name: b,
    onBlur: f,
    onChange: C,
    onFocus: T,
    readOnly: v,
    required: w = !1,
    tabIndex: x,
    type: k,
    value: R,
    ...$
  } = t, [M, m] = Rr({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), P = fr(), I = (ne) => {
    T && T(ne), P && P.onFocus && P.onFocus(ne);
  }, D = (ne) => {
    f && f(ne), P && P.onBlur && P.onBlur(ne);
  }, z = (ne) => {
    if (ne.nativeEvent.defaultPrevented)
      return;
    const U = ne.target.checked;
    m(U), C && C(ne, U);
  };
  let N = c;
  P && typeof N > "u" && (N = P.disabled);
  const B = k === "checkbox" || k === "radio", ee = {
    ...t,
    checked: M,
    disabled: N,
    disableFocusRipple: u,
    edge: d
  }, Z = y1(ee);
  return /* @__PURE__ */ O.jsxs(v1, {
    component: "span",
    className: ye(Z.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: N,
    tabIndex: null,
    role: void 0,
    onFocus: I,
    onBlur: D,
    ownerState: ee,
    ref: n,
    ...$,
    children: [/* @__PURE__ */ O.jsx(x1, {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      className: Z.input,
      disabled: N,
      id: B ? h : void 0,
      name: b,
      onChange: z,
      readOnly: v,
      ref: y,
      required: w,
      ownerState: ee,
      tabIndex: x,
      type: k,
      ...k === "checkbox" && R === void 0 ? {} : {
        value: R
      },
      ...g
    }), M ? a : p]
  });
});
process.env.NODE_ENV !== "production" && (Jd.propTypes = {
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
  inputRef: tn,
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
const w1 = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), C1 = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), S1 = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function T1(e) {
  return Le("MuiCheckbox", e);
}
const Aa = De("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), E1 = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: i
  } = e, a = {
    root: ["root", n && "indeterminate", `color${pe(r)}`, `size${pe(i)}`]
  }, s = Ke(a, T1, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, O1 = me(Jd, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${pe(n.size)}`], n.color !== "default" && t[`color${pe(n.color)}`]];
  }
})(je(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(fn()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(fn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Aa.checked}, &.${Aa.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Aa.disabled}`]: {
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
}))), R1 = /* @__PURE__ */ O.jsx(C1, {}), P1 = /* @__PURE__ */ O.jsx(w1, {}), k1 = /* @__PURE__ */ O.jsx(S1, {}), ef = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = R1,
    color: a = "primary",
    icon: s = P1,
    indeterminate: l = !1,
    indeterminateIcon: c = k1,
    inputProps: u,
    size: d = "medium",
    disableRipple: p = !1,
    className: h,
    ...g
  } = r, y = l ? c : s, b = l ? c : i, f = {
    ...r,
    disableRipple: p,
    color: a,
    indeterminate: l,
    size: d
  }, C = E1(f);
  return /* @__PURE__ */ O.jsx(O1, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": l,
      ...u
    },
    icon: /* @__PURE__ */ S.cloneElement(y, {
      fontSize: y.props.fontSize ?? d
    }),
    checkedIcon: /* @__PURE__ */ S.cloneElement(b, {
      fontSize: b.props.fontSize ?? d
    }),
    ownerState: f,
    ref: n,
    className: ye(C.root, h),
    disableRipple: p,
    ...g,
    classes: C
  });
});
process.env.NODE_ENV !== "production" && (ef.propTypes = {
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
  inputRef: tn,
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
const tf = Dn(ef)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${Et.primary500};
    }
`;
var I1 = {
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
function $1(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return I1[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function ja(e) {
  var t = $1(e);
  return "".concat(t.value).concat(t.unit);
}
var M1 = function(e, t, n) {
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
}, N1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, D1 = M1("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function A1(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, a = e.speedMultiplier, s = a === void 0 ? 1 : a, l = e.cssOverride, c = l === void 0 ? {} : l, u = e.size, d = u === void 0 ? 15 : u, p = e.margin, h = p === void 0 ? 2 : p, g = N1(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), y = Ri({ display: "inherit" }, c), b = function(f) {
    return {
      backgroundColor: i,
      width: ja(d),
      height: ja(d),
      margin: ja(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(D1, " ").concat(0.75 / s, "s ").concat(f * 0.12 / s, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? S.createElement(
    "span",
    Ri({ style: y }, g),
    S.createElement("span", { style: b(1) }),
    S.createElement("span", { style: b(2) }),
    S.createElement("span", { style: b(3) })
  ) : null;
}
const j1 = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r
}) => e ? e(n, r) : t === bo.TEXT && typeof n == "string" && typeof r == "string" ? _c(n).includes(_c(r)) : t === bo.AUTOCOMPLETE ? n === r : !1, F1 = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = xn(Is);
  return it(() => n ? [...t].filter(
    (i) => Object.entries(r).every(([a, s]) => {
      if (s === void 0 || typeof s == "string" && s === "")
        return !0;
      const l = e.find((c) => c.key === a);
      return l ? j1({
        comparator: l.filterComparator,
        filterType: l.filterType ?? bo.TEXT,
        value: i[a],
        valueToMatch: s
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, Bc = De("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), zc = De("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Wc = De("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function L1(e) {
  return Le("MuiMenuItem", e);
}
const Jr = De("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), _1 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, B1 = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: s
  } = e, c = Ke({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, L1, s);
  return {
    ...s,
    ...c
  };
}, z1 = me(jr, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: _1
})(je(({
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
  [`&.${Jr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ot(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Jr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ot(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Jr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ot(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ot(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Jr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Jr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Bc.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Bc.inset}`]: {
    marginLeft: 52
  },
  [`& .${Wc.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Wc.inset}`]: {
    paddingLeft: 36
  },
  [`& .${zc.root}`]: {
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
      [`& .${zc.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Bs = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: a = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: p,
    className: h,
    ...g
  } = r, y = S.useContext(gi), b = S.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: c
  }), [y.dense, s, c]), f = S.useRef(null);
  jn(() => {
    i && (f.current ? f.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const C = {
    ...r,
    dense: b.dense,
    divider: l,
    disableGutters: c
  }, T = B1(r), v = St(f, n);
  let w;
  return r.disabled || (w = p !== void 0 ? p : -1), /* @__PURE__ */ O.jsx(gi.Provider, {
    value: b,
    children: /* @__PURE__ */ O.jsx(z1, {
      ref: v,
      role: d,
      tabIndex: w,
      component: a,
      focusVisibleClassName: ye(T.focusVisible, u),
      className: ye(T.root, h),
      ...g,
      ownerState: C,
      classes: T
    })
  });
});
process.env.NODE_ENV !== "production" && (Bs.propTypes = {
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
const nf = /* @__PURE__ */ S.createContext();
process.env.NODE_ENV !== "production" && (nf.displayName = "TableContext");
const rf = /* @__PURE__ */ S.createContext();
process.env.NODE_ENV !== "production" && (rf.displayName = "Tablelvl2Context");
function W1(e) {
  return Le("MuiTableCell", e);
}
const V1 = De("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), H1 = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: i,
    size: a,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${pe(r)}`, i !== "normal" && `padding${pe(i)}`, `size${pe(a)}`]
  };
  return Ke(l, W1, t);
}, U1 = me("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${pe(n.size)}`], n.padding !== "normal" && t[`padding${pe(n.padding)}`], n.align !== "inherit" && t[`align${pe(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(je(({
  theme: e
}) => ({
  ...e.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? qi(ot(e.palette.divider, 1), 0.88) : Yi(ot(e.palette.divider, 1), 0.68)}`,
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
      [`&.${V1.paddingCheckbox}`]: {
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
}))), Pi = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiTableCell"
  }), {
    align: i = "inherit",
    className: a,
    component: s,
    padding: l,
    scope: c,
    size: u,
    sortDirection: d,
    variant: p,
    ...h
  } = r, g = S.useContext(nf), y = S.useContext(rf), b = y && y.variant === "head";
  let f;
  s ? f = s : f = b ? "th" : "td";
  let C = c;
  f === "td" ? C = void 0 : !C && b && (C = "col");
  const T = p || y && y.variant, v = {
    ...r,
    align: i,
    component: f,
    padding: l || (g && g.padding ? g.padding : "normal"),
    size: u || (g && g.size ? g.size : "medium"),
    sortDirection: d,
    stickyHeader: T === "head" && g && g.stickyHeader,
    variant: T
  }, w = H1(v);
  let x = null;
  return d && (x = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ O.jsx(U1, {
    as: f,
    ref: n,
    className: ye(w.root, a),
    "aria-sort": x,
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
function Y1(e) {
  return Le("MuiToolbar", e);
}
De("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const q1 = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return Ke({
    root: ["root", !n && "gutters", r]
  }, Y1, t);
}, G1 = me("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(je(({
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
}))), of = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: a = "div",
    disableGutters: s = !1,
    variant: l = "regular",
    ...c
  } = r, u = {
    ...r,
    component: a,
    disableGutters: s,
    variant: l
  }, d = q1(u);
  return /* @__PURE__ */ O.jsx(G1, {
    as: a,
    className: ye(d.root, i),
    ref: n,
    ownerState: u,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (of.propTypes = {
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
const K1 = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), X1 = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight"), Z1 = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage"), Q1 = _n(/* @__PURE__ */ O.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage"), af = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    backIconButtonProps: r,
    count: i,
    disabled: a = !1,
    getItemAriaLabel: s,
    nextIconButtonProps: l,
    onPageChange: c,
    page: u,
    rowsPerPage: d,
    showFirstButton: p,
    showLastButton: h,
    slots: g = {},
    slotProps: y = {},
    ...b
  } = t, f = xs(), C = (G) => {
    c(G, 0);
  }, T = (G) => {
    c(G, u - 1);
  }, v = (G) => {
    c(G, u + 1);
  }, w = (G) => {
    c(G, Math.max(0, Math.ceil(i / d) - 1));
  }, x = g.firstButton ?? lr, k = g.lastButton ?? lr, R = g.nextButton ?? lr, $ = g.previousButton ?? lr, M = g.firstButtonIcon ?? Q1, m = g.lastButtonIcon ?? Z1, P = g.nextButtonIcon ?? X1, I = g.previousButtonIcon ?? K1, D = f ? k : x, z = f ? R : $, N = f ? $ : R, B = f ? x : k, ee = f ? y.lastButton : y.firstButton, Z = f ? y.nextButton : y.previousButton, ne = f ? y.previousButton : y.nextButton, U = f ? y.firstButton : y.lastButton;
  return /* @__PURE__ */ O.jsxs("div", {
    ref: n,
    ...b,
    children: [p && /* @__PURE__ */ O.jsx(D, {
      onClick: C,
      disabled: a || u === 0,
      "aria-label": s("first", u),
      title: s("first", u),
      ...ee,
      children: f ? /* @__PURE__ */ O.jsx(m, {
        ...y.lastButtonIcon
      }) : /* @__PURE__ */ O.jsx(M, {
        ...y.firstButtonIcon
      })
    }), /* @__PURE__ */ O.jsx(z, {
      onClick: T,
      disabled: a || u === 0,
      color: "inherit",
      "aria-label": s("previous", u),
      title: s("previous", u),
      ...Z ?? r,
      children: f ? /* @__PURE__ */ O.jsx(P, {
        ...y.nextButtonIcon
      }) : /* @__PURE__ */ O.jsx(I, {
        ...y.previousButtonIcon
      })
    }), /* @__PURE__ */ O.jsx(N, {
      onClick: v,
      disabled: a || (i !== -1 ? u >= Math.ceil(i / d) - 1 : !1),
      color: "inherit",
      "aria-label": s("next", u),
      title: s("next", u),
      ...ne ?? l,
      children: f ? /* @__PURE__ */ O.jsx(I, {
        ...y.previousButtonIcon
      }) : /* @__PURE__ */ O.jsx(P, {
        ...y.nextButtonIcon
      })
    }), h && /* @__PURE__ */ O.jsx(B, {
      onClick: w,
      disabled: a || u >= Math.ceil(i / d) - 1,
      "aria-label": s("last", u),
      title: s("last", u),
      ...U,
      children: f ? /* @__PURE__ */ O.jsx(M, {
        ...y.firstButtonIcon
      }) : /* @__PURE__ */ O.jsx(m, {
        ...y.lastButtonIcon
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (af.propTypes = {
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
function J1(e) {
  return Le("MuiTablePagination", e);
}
const fo = De("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var Vc;
const eS = me(Pi, {
  name: "MuiTablePagination",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(je(({
  theme: e
}) => ({
  overflow: "auto",
  color: (e.vars || e).palette.text.primary,
  fontSize: e.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
}))), tS = me(of, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (e, t) => ({
    [`& .${fo.actions}`]: t.actions,
    ...t.toolbar
  })
})(je(({
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
  [`& .${fo.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}))), nS = me("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})({
  flex: "1 1 100%"
}), rS = me("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (e, t) => t.selectLabel
})(je(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
}))), oS = me(ta, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (e, t) => ({
    [`& .${fo.selectIcon}`]: t.selectIcon,
    [`& .${fo.select}`]: t.select,
    ...t.input,
    ...t.selectRoot
  })
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${fo.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
}), iS = me(Bs, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (e, t) => t.menuItem
})({}), aS = me("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (e, t) => t.displayedRows
})(je(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
})));
function sS({
  from: e,
  to: t,
  count: n
}) {
  return `${e}–${t} of ${n !== -1 ? n : `more than ${t}`}`;
}
function lS(e) {
  return `Go to ${e} page`;
}
const cS = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
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
  }, J1, t);
}, sf = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiTablePagination"
  }), {
    ActionsComponent: i = af,
    backIconButtonProps: a,
    className: s,
    colSpan: l,
    component: c = Pi,
    count: u,
    disabled: d = !1,
    getItemAriaLabel: p = lS,
    labelDisplayedRows: h = sS,
    labelRowsPerPage: g = "Rows per page:",
    nextIconButtonProps: y,
    onPageChange: b,
    onRowsPerPageChange: f,
    page: C,
    rowsPerPage: T,
    rowsPerPageOptions: v = [10, 25, 50, 100],
    SelectProps: w = {},
    showFirstButton: x = !1,
    showLastButton: k = !1,
    slotProps: R = {},
    slots: $ = {},
    ...M
  } = r, m = r, P = cS(m), I = (R == null ? void 0 : R.select) ?? w, D = I.native ? "option" : iS;
  let z;
  (c === Pi || c === "td") && (z = l || 1e3);
  const N = yo(I.id), B = yo(I.labelId), ee = () => u === -1 ? (C + 1) * T : T === -1 ? u : Math.min(u, (C + 1) * T);
  return /* @__PURE__ */ O.jsx(eS, {
    colSpan: z,
    ref: n,
    as: c,
    ownerState: m,
    className: ye(P.root, s),
    ...M,
    children: /* @__PURE__ */ O.jsxs(tS, {
      className: P.toolbar,
      children: [/* @__PURE__ */ O.jsx(nS, {
        className: P.spacer
      }), v.length > 1 && /* @__PURE__ */ O.jsx(rS, {
        className: P.selectLabel,
        id: B,
        children: g
      }), v.length > 1 && /* @__PURE__ */ O.jsx(oS, {
        variant: "standard",
        ...!I.variant && {
          input: Vc || (Vc = /* @__PURE__ */ O.jsx(Fo, {}))
        },
        value: T,
        onChange: f,
        id: N,
        labelId: B,
        ...I,
        classes: {
          ...I.classes,
          // TODO v5 remove `classes.input`
          root: ye(P.input, P.selectRoot, (I.classes || {}).root),
          select: ye(P.select, (I.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: ye(P.selectIcon, (I.classes || {}).icon)
        },
        disabled: d,
        children: v.map((Z) => /* @__PURE__ */ Lf(D, {
          ...!mi(D) && {
            ownerState: m
          },
          className: P.menuItem,
          key: Z.label ? Z.label : Z,
          value: Z.value ? Z.value : Z
        }, Z.label ? Z.label : Z))
      }), /* @__PURE__ */ O.jsx(aS, {
        className: P.displayedRows,
        children: h({
          from: u === 0 ? 0 : C * T + 1,
          to: ee(),
          count: u === -1 ? -1 : u,
          page: C
        })
      }), /* @__PURE__ */ O.jsx(i, {
        className: P.actions,
        backIconButtonProps: a,
        count: u,
        nextIconButtonProps: y,
        onPageChange: b,
        page: C,
        rowsPerPage: T,
        showFirstButton: x,
        showLastButton: k,
        slotProps: R.actions,
        slots: $.actions,
        getItemAriaLabel: p,
        disabled: d
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (sf.propTypes = {
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
  className: o.string,
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
  page: Fn(Pr.isRequired, (e) => {
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
   * The props used for each slot inside the TablePagination.
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
    select: o.object
  }),
  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
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
    })
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const uS = Dn.div`
    height: 80px;
    width: 100%;
`, dS = Ct.memo(
  ({ currentPage: e, setCurrentPage: t, setPageSize: n, pageSize: r, totalCount: i, labels: a }) => {
    const s = Mt(
      (c, u) => {
        t(u);
      },
      []
    ), l = Mt(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ O.jsx(uS, { children: /* @__PURE__ */ O.jsx(
      sf,
      {
        labelRowsPerPage: a != null && a.rowsPerPageLabel ? /* @__PURE__ */ O.jsx("span", { children: a == null ? void 0 : a.rowsPerPageLabel }) : void 0,
        labelDisplayedRows: ({ from: c, to: u, count: d }) => `${c}-${u} ${a != null && a.ofLabel ? a.ofLabel : "of"} ${d}`,
        component: "div",
        count: i,
        page: e,
        onPageChange: s,
        rowsPerPage: r,
        onRowsPerPageChange: l
      }
    ) });
  }
), fS = (e = 10) => {
  const [t, n] = Rt(0), [r, i] = Rt(e), a = Mt(() => {
    n(0), i(e);
  }, []);
  return Fr(() => {
    n(0);
  }, [r]), {
    currentPage: t,
    pageSize: r,
    defaultPageSize: e,
    setCurrentPage: n,
    setPageSize: i,
    resetPagination: a
  };
}, pS = Dn.div`
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
`, mS = Ct.memo(({ checked: e, onChange: t }) => {
  const n = Mt(
    (r, i) => {
      t(i, r.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ O.jsx(tf, { checked: e, onChange: n });
}), hS = ({
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
  setFilters: p,
  pagination: h,
  ...g
}) => {
  const { gridKey: y } = xn(oa), { pageSize: b, currentPage: f, setCurrentPage: C, setPageSize: T } = fS(
    h == null ? void 0 : h.defaultPageSize
  ), v = g1({
    columns: r,
    selectionEnabled: !!c
  }), w = it(
    () => v.some((z) => z.filterEnabled),
    [v]
  ), x = it(
    () => (h == null ? void 0 : h.enabled) && !h.remotePagination,
    [h]
  ), k = it(() => !p, [p]), R = F1({
    columns: v,
    rows: n,
    enabled: k
  }), $ = it(() => !a, [a]), {
    sortedRows: M,
    sortColumns: m,
    setSortedColumns: P
  } = Kh({
    columns: v,
    rows: R,
    defaultSortColumns: s
  }), I = it(() => x ? M.slice(f * b, (f + 1) * b) : M, [M, x, f, b]), D = Mt(
    (z, N) => N === 0 ? "first-row" : N === n.length - 1 ? "last-row" : "",
    [n]
  );
  return Fr(() => {
    const z = l == null ? void 0 : l.filter(
      (N) => n.some((B) => B.id === N)
    );
    (z == null ? void 0 : z.length) != (l == null ? void 0 : l.length) && (c == null || c(z ?? []));
  }, [n, l]), /* @__PURE__ */ O.jsxs(qh, { $pagination: !!(h != null && h.enabled), children: [
    /* @__PURE__ */ O.jsx("div", { children: /* @__PURE__ */ O.jsx(
      lu,
      {
        rowHeight: 50,
        selectedRows: l ? new Set(l) : void 0,
        onSelectedRowsChange: (z) => {
          c == null || c(Array.from(z));
        },
        rowKeyGetter: (z) => z.id,
        rows: I,
        onSortColumnsChange: $ ? P : a,
        sortColumns: $ ? m : i,
        columns: v,
        rowClass: D,
        headerRowHeight: w ? 70 : void 0,
        renderers: {
          renderCheckbox: (z) => /* @__PURE__ */ O.jsx(mS, { ...z }),
          ...g.renderers
        },
        ...g,
        style: { ...Um, ...e ?? {} }
      },
      y
    ) }),
    h != null && h.enabled ? /* @__PURE__ */ O.jsx(
      dS,
      {
        ...(h == null ? void 0 : h.remotePagination) ?? {
          currentPage: f,
          setCurrentPage: C,
          pageSize: b,
          setPageSize: T,
          totalCount: R.length
        }
      }
    ) : null,
    t ? /* @__PURE__ */ O.jsxs(pS, { children: [
      /* @__PURE__ */ O.jsx("div", {}),
      /* @__PURE__ */ O.jsx(A1, { color: Et.primary500 })
    ] }) : null
  ] });
}, SS = ({
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
}) => /* @__PURE__ */ O.jsx(O0, { filters: e, setFilters: t, children: /* @__PURE__ */ O.jsx(
  h1,
  {
    columns: n,
    enabled: r,
    hiddenByDefault: a,
    localStorageKey: s,
    visibilityFeatureDisabledFor: i,
    children: /* @__PURE__ */ O.jsx(hS, { ...l, columns: n, filters: e, setFilters: t })
  }
) }), gS = Dn(Bs)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`, TS = ({ IconComponent: e }) => {
  const { columns: t, hiddenColumn: n, setHiddenColumn: r } = xn(oa), i = Ct.useRef(null), [a, s] = Ct.useState(null), l = !!a, c = Mt(() => {
    s(i.current);
  }, []), u = Mt(() => {
    s(null);
  }, []), d = Mt(
    (p) => () => {
      const h = n.indexOf(p);
      r(
        h === -1 ? [...n, p] : n.filter((g) => g !== p)
      );
    },
    [n]
  );
  return /* @__PURE__ */ O.jsxs("div", { ref: i, children: [
    /* @__PURE__ */ O.jsx(e, { onClick: c }),
    /* @__PURE__ */ O.jsx(Rs, { id: "column-visibility-menu", anchorEl: a, open: l, onClose: u, children: t.map((p) => /* @__PURE__ */ O.jsxs(gS, { onClick: d(p.key), children: [
      /* @__PURE__ */ O.jsx(tf, { checked: !n.includes(p.key) }),
      p.name
    ] }, p.key)) })
  ] });
};
export {
  io as ColumnType,
  Qd as DATE_FORMAT,
  SS as DataGrid,
  mp as DataGridDefaultRenderersProvider,
  bo as FilterType,
  xS as Row,
  kr as SELECT_COLUMN_KEY,
  os as SelectCellFormatter,
  Cp as SelectColumn,
  fp as ToggleGroup,
  wS as TreeDataGrid,
  TS as VisibilityColumnChooser,
  p1 as convertDate,
  Um as defaultTheme,
  _c as getStringToCompare,
  ap as renderCheckbox,
  ou as renderHeaderCell,
  ym as renderSortIcon,
  vm as renderSortPriority,
  dp as renderToggleGroup,
  pp as renderValue,
  Et as taktikTheme,
  CS as textEditor,
  yp as useHeaderRowSelection,
  eu as useRowSelection
};
