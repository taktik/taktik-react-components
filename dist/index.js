var kf = Object.defineProperty;
var $f = (e, t, n) => t in e ? kf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Wr = (e, t, n) => $f(e, typeof t != "symbol" ? t + "" : t, n);
import * as T from "react";
import At, { useContext as Xn, forwardRef as Ii, createContext as Ro, memo as Jn, useMemo as at, useCallback as pn, useRef as Pn, useEffect as Po, useState as Ot, useImperativeHandle as Mf, useLayoutEffect as Nf, useId as Df, Children as Af, isValidElement as Qo, cloneElement as Jo, createElement as jf } from "react";
import * as Ff from "react-dom";
import Uo, { flushSync as si } from "react-dom";
function Lf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ja = { exports: {} }, Vr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ys;
function _f() {
  if (Ys) return Vr;
  Ys = 1;
  var e = At, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, p = {}, h = null, g = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (d in c) r.call(c, d) && !a.hasOwnProperty(d) && (p[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: t, type: l, key: h, ref: g, props: p, _owner: i.current };
  }
  return Vr.Fragment = n, Vr.jsx = s, Vr.jsxs = s, Vr;
}
var Hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function Bf() {
  return qs || (qs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = At, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function f(E) {
      if (E === null || typeof E != "object")
        return null;
      var q = y && E[y] || E[b];
      return typeof q == "function" ? q : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(E) {
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
    var w = !1, x = !1, I = !1, O = !1, $ = !1, M;
    M = Symbol.for("react.module.reference");
    function m(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === a || $ || E === i || E === u || E === d || O || E === g || w || x || I || typeof E == "object" && E !== null && (E.$$typeof === h || E.$$typeof === p || E.$$typeof === s || E.$$typeof === l || E.$$typeof === c || // This needs to include all possible module reference object
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
    function k(E) {
      return E.displayName || "Context";
    }
    function N(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
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
            return k(q) + ".Consumer";
          case s:
            var ae = E;
            return k(ae._context) + ".Provider";
          case c:
            return P(E, E.render, "ForwardRef");
          case p:
            var j = E.displayName || null;
            return j !== null ? j : N(E.type) || "Memo";
          case h: {
            var L = E, J = L._payload, le = L._init;
            try {
              return N(le(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, D = 0, B, ee, Z, ne, U, G, ue;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function F() {
      {
        if (D === 0) {
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
        D++;
      }
    }
    function z() {
      {
        if (D--, D === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, E, {
              value: B
            }),
            info: V({}, E, {
              value: ee
            }),
            warn: V({}, E, {
              value: Z
            }),
            error: V({}, E, {
              value: ne
            }),
            group: V({}, E, {
              value: U
            }),
            groupCollapsed: V({}, E, {
              value: G
            }),
            groupEnd: V({}, E, {
              value: ue
            })
          });
        }
        D < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    function W(E, q) {
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
`), Ce = se.length - 1, ke = Oe.length - 1; Ce >= 1 && ke >= 0 && se[Ce] !== Oe[ke]; )
            ke--;
          for (; Ce >= 1 && ke >= 0; Ce--, ke--)
            if (se[Ce] !== Oe[ke]) {
              if (Ce !== 1 || ke !== 1)
                do
                  if (Ce--, ke--, ke < 0 || se[Ce] !== Oe[ke]) {
                    var yt = `
` + se[Ce].replace(" at new ", " at ");
                    return E.displayName && yt.includes("<anonymous>") && (yt = yt.replace("<anonymous>", E.displayName)), typeof E == "function" && X.set(E, yt), yt;
                  }
                while (Ce >= 1 && ke >= 0);
              break;
            }
        }
      } finally {
        Q = !1, K.current = J, z(), Error.prepareStackTrace = L;
      }
      var _n = E ? E.displayName || E.name : "", Nt = _n ? H(_n) : "";
      return typeof E == "function" && X.set(E, Nt), Nt;
    }
    function ve(E, q, ae) {
      return W(E, !1);
    }
    function A(E) {
      var q = E.prototype;
      return !!(q && q.isReactComponent);
    }
    function de(E, q, ae) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return W(E, A(E));
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
            se && !(se instanceof Error) && (Te(L), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", ae, le, typeof se), Te(null)), se instanceof Error && !(se.message in $e) && ($e[se.message] = !0, Te(L), S("Failed %s type: %s", ae, se.message), Te(null));
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
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fe(E)), bt(E);
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
    function Mt(E) {
      if (ie.call(E, "key")) {
        var q = Object.getOwnPropertyDescriptor(E, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Rt(E, q) {
      if (typeof E.ref == "string" && Qe.current && q && Qe.current.stateNode !== q) {
        var ae = N(Qe.current.type);
        Pe[ae] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(Qe.current.type), E.ref), Pe[ae] = !0);
      }
    }
    function he(E, q) {
      {
        var ae = function() {
          Re || (Re = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
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
          st || (st = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
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
    function it(E, q, ae, j, L) {
      {
        var J, le = {}, se = null, Oe = null;
        ae !== void 0 && (xt(ae), se = "" + ae), Mt(q) && (xt(q.key), se = "" + q.key), ft(q) && (Oe = q.ref, Rt(q, L));
        for (J in q)
          ie.call(q, J) && !Je.hasOwnProperty(J) && (le[J] = q[J]);
        if (E && E.defaultProps) {
          var Ce = E.defaultProps;
          for (J in Ce)
            le[J] === void 0 && (le[J] = Ce[J]);
        }
        if (se || Oe) {
          var ke = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          se && he(le, ke), Oe && xe(le, ke);
        }
        return et(E, se, Oe, L, j, Qe.current, le);
      }
    }
    var lt = C.ReactCurrentOwner, jt = C.ReactDebugCurrentFrame;
    function Et(E) {
      if (E) {
        var q = E._owner, ae = de(E.type, E._source, q ? q.type : null);
        jt.setExtraStackFrame(ae);
      } else
        jt.setExtraStackFrame(null);
    }
    var nn;
    nn = !1;
    function Ht(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function bn() {
      {
        if (lt.current) {
          var E = N(lt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Ut(E) {
      return "";
    }
    var Ft = {};
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
    function Yt(E, q) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var ae = yn(q);
        if (Ft[ae])
          return;
        Ft[ae] = !0;
        var j = "";
        E && E._owner && E._owner !== lt.current && (j = " It was passed a child from " + N(E._owner.type) + "."), Et(E), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, j), Et(null);
      }
    }
    function vn(E, q) {
      {
        if (typeof E != "object")
          return;
        if (We(E))
          for (var ae = 0; ae < E.length; ae++) {
            var j = E[ae];
            Ht(j) && Yt(j, q);
          }
        else if (Ht(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var L = f(E);
          if (typeof L == "function" && L !== E.entries)
            for (var J = L.call(E), le; !(le = J.next()).done; )
              Ht(le.value) && Yt(le.value, q);
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
          var j = N(q);
          Fe(ae, E.props, "prop", j, E);
        } else if (q.PropTypes !== void 0 && !nn) {
          nn = !0;
          var L = N(q);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rn(E) {
      {
        for (var q = Object.keys(E.props), ae = 0; ae < q.length; ae++) {
          var j = q[ae];
          if (j !== "children" && j !== "key") {
            Et(E), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Et(null);
            break;
          }
        }
        E.ref !== null && (Et(E), S("Invalid attribute `ref` supplied to `React.Fragment`."), Et(null));
      }
    }
    var It = {};
    function ge(E, q, ae, j, L, J) {
      {
        var le = m(E);
        if (!le) {
          var se = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = Ut();
          Oe ? se += Oe : se += bn();
          var Ce;
          E === null ? Ce = "null" : We(E) ? Ce = "array" : E !== void 0 && E.$$typeof === t ? (Ce = "<" + (N(E.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof E, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, se);
        }
        var ke = it(E, q, ae, L, J);
        if (ke == null)
          return ke;
        if (le) {
          var yt = q.children;
          if (yt !== void 0)
            if (j)
              if (We(yt)) {
                for (var _n = 0; _n < yt.length; _n++)
                  vn(yt[_n], E);
                Object.freeze && Object.freeze(yt);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vn(yt, E);
        }
        if (ie.call(q, "key")) {
          var Nt = N(E), ut = Object.keys(q).filter(function(qn) {
            return qn !== "key";
          }), an = ut.length > 0 ? "{key: someKey, " + ut.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!It[Nt + an]) {
            var Yn = ut.length > 0 ? "{" + ut.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, an, Nt, Yn, Nt), It[Nt + an] = !0;
          }
        }
        return E === r ? rn(ke) : pt(ke), ke;
      }
    }
    function on(E, q, ae) {
      return ge(E, q, ae, !0);
    }
    function wn(E, q, ae) {
      return ge(E, q, ae, !1);
    }
    var nr = wn, Cn = on;
    Hr.Fragment = r, Hr.jsx = nr, Hr.jsxs = Cn;
  }()), Hr;
}
process.env.NODE_ENV === "production" ? ja.exports = _f() : ja.exports = Bf();
var R = ja.exports;
function zc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = zc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ye() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = zc(e)) && (r && (r += " "), r += t);
  return r;
}
function un(e, t, n) {
  const r = typeof e.colSpan == "function" ? e.colSpan(n) : 1;
  if (Number.isInteger(r) && r > 1 && (!e.frozen || e.idx + r - 1 <= t))
    return r;
}
function zf(e) {
  e.stopPropagation();
}
function ei(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function no(e) {
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
const Wf = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function li(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function Vf(e) {
  return li(e) && e.keyCode !== 86 ? !1 : !Wf.has(e.key);
}
function Hf({
  key: e,
  target: t
}) {
  var n;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((n = t.closest(".rdg-editor-container")) == null ? void 0 : n.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const Uf = "mlln6zg7-0-0-beta-47";
function Yf(e) {
  return e.map(({
    key: t,
    idx: n,
    minWidth: r,
    maxWidth: i
  }) => /* @__PURE__ */ R.jsx("div", {
    className: Uf,
    style: {
      gridColumnStart: n + 1,
      minWidth: r,
      maxWidth: i
    },
    "data-measuring-cell-key": t
  }, t));
}
function qf({
  selectedPosition: e,
  columns: t,
  rows: n
}) {
  const r = t[e.idx], i = n[e.rowIdx];
  return Wc(r, i);
}
function Wc(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Gf({
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
    return un(s, a, {
      type: "HEADER"
    });
  if (t && r > i && r <= l + i)
    return un(s, a, {
      type: "SUMMARY",
      row: t[r + l]
    });
  if (r >= 0 && r < e.length) {
    const c = e[r];
    return un(s, a, {
      type: "ROW",
      row: c
    });
  }
  if (n)
    return un(s, a, {
      type: "SUMMARY",
      row: n[r - e.length]
    });
}
function Kf({
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
  const S = r.length, v = (I) => {
    for (const O of i) {
      const $ = O.idx;
      if ($ > f) break;
      const M = Gf({
        rows: a,
        topSummaryRows: s,
        bottomSummaryRows: l,
        rowIdx: C,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: y,
        column: O
      });
      if (M && f > $ && f < M + $) {
        f = $ + (I ? M : 0);
        break;
      }
    }
  }, w = (I) => I.level + u, x = () => {
    if (t) {
      let O = r[f].parent;
      for (; O !== void 0; ) {
        const $ = w(O);
        if (C === $) {
          f = O.idx + O.colSpan;
          break;
        }
        O = O.parent;
      }
    } else if (e) {
      let O = r[f].parent, $ = !1;
      for (; O !== void 0; ) {
        const M = w(O);
        if (C >= M) {
          f = O.idx, C = M, $ = !0;
          break;
        }
        O = O.parent;
      }
      $ || (f = p, C = h);
    }
  };
  if (b(g) && (v(t), C < u && x()), n === "CHANGE_ROW" && (f === S ? C === d || (f = 0, C += 1) : f === -1 && (C === c || (C -= 1, f = S - 1), v(!1))), C < u) {
    let O = r[f].parent;
    const $ = C;
    for (C = u; O !== void 0; ) {
      const M = w(O);
      M >= $ && (C = M, f = O.idx), O = O.parent;
    }
  }
  return {
    idx: f,
    rowIdx: C
  };
}
function Xf({
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
const Zf = "cj343x07-0-0-beta-47", Vc = `rdg-cell ${Zf}`, Qf = "csofj7r7-0-0-beta-47", Jf = `rdg-cell-frozen ${Qf}`;
function ns(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Hc(e, t, n) {
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
function Fr(e, t = 1) {
  const n = e.idx + 1;
  return {
    gridColumnStart: n,
    gridColumnEnd: n + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function Io(e, ...t) {
  return ye(Vc, ...t, e.frozen && Jf);
}
const {
  min: fo,
  max: ci,
  floor: Gs,
  sign: ep,
  abs: tp
} = Math;
function ro(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Uc(e, {
  minWidth: t,
  maxWidth: n
}) {
  return e = ci(e, t), typeof n == "number" && n >= t ? fo(e, n) : e;
}
function Yc(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const np = "c1bn88vv7-0-0-beta-47", rp = `rdg-checkbox-input ${np}`;
function op({
  onChange: e,
  indeterminate: t,
  ...n
}) {
  function r(i) {
    e(i.target.checked, i.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ R.jsx("input", {
    ref: (i) => {
      i && (i.indeterminate = t === !0);
    },
    type: "checkbox",
    className: rp,
    onChange: r,
    ...n
  });
}
const ip = "g1s9ylgp7-0-0-beta-47", ap = `rdg-group-cell-content ${ip}`, sp = "cz54e4y7-0-0-beta-47", lp = `rdg-caret ${sp}`;
function cp(e) {
  return /* @__PURE__ */ R.jsx(up, {
    ...e
  });
}
function up({
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
  return /* @__PURE__ */ R.jsxs("span", {
    className: ap,
    tabIndex: n,
    onKeyDown: i,
    children: [e, /* @__PURE__ */ R.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: lp,
      "aria-hidden": !0,
      children: /* @__PURE__ */ R.jsx("path", {
        d: a
      })
    })]
  });
}
function dp(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const qc = /* @__PURE__ */ Ro(void 0), fp = qc.Provider;
function ki() {
  return Xn(qc);
}
function rs({
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
const Gc = /* @__PURE__ */ Ro(void 0), Kc = Gc.Provider, Xc = /* @__PURE__ */ Ro(void 0), pp = Xc.Provider;
function Zc() {
  const e = Xn(Gc), t = Xn(Xc);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Qc = /* @__PURE__ */ Ro(void 0), mp = Qc.Provider, Jc = /* @__PURE__ */ Ro(void 0), hp = Jc.Provider;
function gp() {
  const e = Xn(Qc), t = Xn(Jc);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Ir = "rdg-select-column";
function bp(e) {
  const {
    isIndeterminate: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = gp();
  return /* @__PURE__ */ R.jsx(rs, {
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
function yp(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: n,
    onRowSelectionChange: r
  } = Zc();
  return /* @__PURE__ */ R.jsx(rs, {
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
function vp(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: n
  } = Zc();
  return /* @__PURE__ */ R.jsx(rs, {
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
const xp = {
  key: Ir,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ R.jsx(bp, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ R.jsx(yp, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ R.jsx(vp, {
      ...e
    });
  }
}, wp = "auto", Cp = 50;
function Sp({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: n,
  viewportWidth: r,
  scrollLeft: i,
  enableVirtualization: a
}) {
  const s = (t == null ? void 0 : t.width) ?? wp, l = (t == null ? void 0 : t.minWidth) ?? Cp, c = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? dp, d = (t == null ? void 0 : t.sortable) ?? !1, p = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: g,
    colSpanColumns: y,
    lastFrozenColumnIndex: b,
    headerRowsCount: f
  } = at(() => {
    let O = -1, $ = 1;
    const M = [];
    m(e, 1);
    function m(k, N, V) {
      for (const D of k) {
        if ("children" in D) {
          const Z = {
            name: D.name,
            parent: V,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: D.headerCellClass
          };
          m(D.children, N + 1, Z);
          continue;
        }
        const B = D.frozen ?? !1, ee = {
          ...D,
          parent: V,
          idx: 0,
          level: 0,
          frozen: B,
          width: D.width ?? s,
          minWidth: D.minWidth ?? l,
          maxWidth: D.maxWidth ?? c,
          sortable: D.sortable ?? d,
          resizable: D.resizable ?? p,
          draggable: D.draggable ?? h,
          renderCell: D.renderCell ?? u
        };
        M.push(ee), B && O++, N > $ && ($ = N);
      }
    }
    M.sort(({
      key: k,
      frozen: N
    }, {
      key: V,
      frozen: D
    }) => k === Ir ? -1 : V === Ir ? 1 : N ? D ? 0 : -1 : D ? 1 : 0);
    const P = [];
    return M.forEach((k, N) => {
      k.idx = N, eu(k, N, 0), k.colSpan != null && P.push(k);
    }), {
      columns: M,
      colSpanColumns: P,
      lastFrozenColumnIndex: O,
      headerRowsCount: $
    };
  }, [e, s, l, c, u, p, d, h]), {
    templateColumns: C,
    layoutCssVars: S,
    totalFrozenColumnWidth: v,
    columnMetrics: w
  } = at(() => {
    const O = /* @__PURE__ */ new Map();
    let $ = 0, M = 0;
    const m = [];
    for (const k of g) {
      let N = n(k);
      typeof N == "number" ? N = Uc(N, k) : N = k.minWidth, m.push(`${N}px`), O.set(k, {
        width: N,
        left: $
      }), $ += N;
    }
    if (b !== -1) {
      const k = O.get(g[b]);
      M = k.left + k.width;
    }
    const P = {};
    for (let k = 0; k <= b; k++) {
      const N = g[k];
      P[`--rdg-frozen-left-${N.idx}`] = `${O.get(N).left}px`;
    }
    return {
      templateColumns: m,
      layoutCssVars: P,
      totalFrozenColumnWidth: M,
      columnMetrics: O
    };
  }, [n, g, b]), [x, I] = at(() => {
    if (!a)
      return [0, g.length - 1];
    const O = i + v, $ = i + r, M = g.length - 1, m = fo(b + 1, M);
    if (O >= $)
      return [m, m];
    let P = m;
    for (; P < M; ) {
      const {
        left: D,
        width: B
      } = w.get(g[P]);
      if (D + B > O)
        break;
      P++;
    }
    let k = P;
    for (; k < M; ) {
      const {
        left: D,
        width: B
      } = w.get(g[k]);
      if (D + B >= $)
        break;
      k++;
    }
    const N = ci(m, P - 1), V = fo(M, k + 1);
    return [N, V];
  }, [w, g, b, i, v, r, a]);
  return {
    columns: g,
    colSpanColumns: y,
    colOverscanStartIdx: x,
    colOverscanEndIdx: I,
    templateColumns: C,
    layoutCssVars: S,
    headerRowsCount: f,
    lastFrozenColumnIndex: b,
    totalFrozenColumnWidth: v
  };
}
function eu(e, t, n) {
  if (n < e.level && (e.level = n), e.parent !== void 0) {
    const {
      parent: r
    } = e;
    r.idx === -1 && (r.idx = t), r.colSpan += 1, eu(r, t, n - 1);
  }
}
const kr = typeof window > "u" ? Po : Nf;
function Tp(e, t, n, r, i, a, s, l, c, u) {
  const d = Pn(i), p = e.length === t.length, h = p && i !== d.current, g = [...n], y = [];
  for (const {
    key: S,
    idx: v,
    width: w
  } of t)
    typeof w == "string" && (h || !s.has(S)) && !a.has(S) && (g[v] = w, y.push(S));
  const b = g.join(" ");
  kr(() => {
    d.current = i, f(y);
  });
  function f(S) {
    S.length !== 0 && c((v) => {
      const w = new Map(v);
      let x = !1;
      for (const I of S) {
        const O = Ks(r, I);
        x || (x = O !== v.get(I)), O === void 0 ? w.delete(I) : w.set(I, O);
      }
      return x ? w : v;
    });
  }
  function C(S, v) {
    const {
      key: w
    } = S, x = [...n], I = [];
    for (const {
      key: $,
      idx: M,
      width: m
    } of t)
      if (w === $) {
        const P = typeof v == "number" ? `${v}px` : v;
        x[M] = P;
      } else p && typeof m == "string" && !a.has($) && (x[M] = m, I.push($));
    r.current.style.gridTemplateColumns = x.join(" ");
    const O = typeof v == "number" ? v : Ks(r, w);
    si(() => {
      l(($) => {
        const M = new Map($);
        return M.set(w, O), M;
      }), f(I);
    }), u == null || u(S.idx, O);
  }
  return {
    gridTemplateColumns: b,
    handleColumnResize: C
  };
}
function Ks(e, t) {
  var i;
  const n = `[data-measuring-cell-key="${CSS.escape(t)}"]`, r = (i = e.current) == null ? void 0 : i.querySelector(n);
  return r == null ? void 0 : r.getBoundingClientRect().width;
}
function Ep() {
  const e = Pn(null), [t, n] = Ot(1), [r, i] = Ot(1), [a, s] = Ot(0);
  return kr(() => {
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
    const C = new l((S) => {
      const v = S[0].contentBoxSize[0], {
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
function _t(e) {
  const t = Pn(e);
  Po(() => {
    t.current = e;
  });
  const n = pn((...r) => {
    t.current(...r);
  }, []);
  return e && n;
}
function ko(e) {
  const [t, n] = Ot(!1);
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
function Op({
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
  const d = at(() => {
    if (a === 0) return 0;
    let p = a;
    const h = (g, y) => y !== void 0 && g + y > a ? (p = g, !0) : !1;
    for (const g of t) {
      const y = g.idx;
      if (y >= p || h(y, un(g, l, {
        type: "HEADER"
      })))
        break;
      for (let b = c; b <= u; b++) {
        const f = n[b];
        if (h(y, un(g, l, {
          type: "ROW",
          row: f
        })))
          break;
      }
      if (r != null) {
        for (const b of r)
          if (h(y, un(g, l, {
            type: "SUMMARY",
            row: b
          })))
            break;
      }
      if (i != null) {
        for (const b of i)
          if (h(y, un(g, l, {
            type: "SUMMARY",
            row: b
          })))
            break;
      }
    }
    return p;
  }, [c, u, n, r, i, a, l, t]);
  return at(() => {
    const p = [];
    for (let h = 0; h <= s; h++) {
      const g = e[h];
      h < d && !g.frozen || p.push(g);
    }
    return p;
  }, [d, s, e]);
}
function Rp({
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
  } = at(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (f) => f * t,
        getRowHeight: () => t,
        findRowIdx: (f) => Gs(f / t)
      };
    let h = 0, g = " ";
    const y = e.map((f) => {
      const C = t(f), S = {
        top: h,
        height: C
      };
      return g += `${C}px `, h += C, S;
    }), b = (f) => ci(0, fo(e.length - 1, f));
    return {
      totalRowHeight: h,
      gridTemplateRows: g,
      getRowTop: (f) => y[b(f)].top,
      getRowHeight: (f) => y[b(f)].height,
      findRowIdx(f) {
        let C = 0, S = y.length - 1;
        for (; C <= S; ) {
          const v = C + Gs((S - C) / 2), w = y[v].top;
          if (w === f) return v;
          if (w < f ? C = v + 1 : w > f && (S = v - 1), C > S) return S;
        }
        return 0;
      }
    };
  }, [t, e]);
  let d = 0, p = e.length - 1;
  if (i) {
    const g = u(r), y = u(r + n);
    d = ci(0, g - 4), p = fo(e.length - 1, y + 4);
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
const Pp = "c1w9bbhr7-0-0-beta-47", Ip = "c1creorc7-0-0-beta-47", kp = `rdg-cell-drag-handle ${Pp}`;
function $p({
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
    h(!0), window.addEventListener("mouseover", I), window.addEventListener("mouseup", O);
    function I($) {
      $.buttons !== 1 && O();
    }
    function O() {
      window.removeEventListener("mouseover", I), window.removeEventListener("mouseup", O), h(!1), C();
    }
  }
  function C() {
    const x = l.current;
    if (x === void 0) return;
    const I = b < x ? b + 1 : x, O = b < x ? x + 1 : b;
    v(I, O), g(void 0);
  }
  function S(x) {
    x.stopPropagation(), v(b + 1, t.length);
  }
  function v(x, I) {
    const O = t[b], $ = [...t], M = [];
    for (let m = x; m < I; m++)
      if (c({
        rowIdx: m,
        idx: y
      })) {
        const P = d({
          columnKey: n.key,
          sourceRow: O,
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
      insetInlineStart: I,
      ...O
    } = Fr(n, x), $ = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", M = n.idx + x - 1 === i;
    return {
      ...O,
      gridRowStart: e,
      marginInlineEnd: M ? void 0 : $,
      marginBlockEnd: a ? void 0 : $,
      insetInlineStart: I ? `calc(${I} + ${r}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ R.jsx("div", {
    style: w(),
    className: ye(kp, n.frozen && Ip),
    onClick: p,
    onMouseDown: f,
    onDoubleClick: S
  });
}
const Mp = "cis5rrm7-0-0-beta-47";
function Np({
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
  const c = Pn(void 0), u = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, d = _t(() => {
    g(!0, !1);
  });
  Po(() => {
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
      const x = no(w);
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
    w.key === "Escape" ? g() : w.key === "Enter" ? g(!0) : Hf(w) && l(w);
  }
  function g(w = !1, x = !0) {
    w ? i(n, !0, x) : a(x);
  }
  function y(w, x = !1) {
    i(w, x, x);
  }
  const {
    cellClass: b
  } = e, f = Io(e, "rdg-editor-container", typeof b == "function" ? b(n) : b, !((S = e.editorOptions) != null && S.displayCellContent) && Mp);
  return /* @__PURE__ */ R.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: f,
    style: Fr(e, t),
    onKeyDown: h,
    onMouseDownCapture: p,
    children: e.renderEditCell != null && /* @__PURE__ */ R.jsxs(R.Fragment, {
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
function Dp({
  column: e,
  rowIdx: t,
  isCellSelected: n,
  selectCell: r
}) {
  const {
    tabIndex: i,
    onFocus: a
  } = ko(n), {
    colSpan: s
  } = e, l = Yc(e, t), c = e.idx + 1;
  function u() {
    r({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ R.jsx("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": s,
    "aria-rowspan": l,
    "aria-selected": n,
    tabIndex: i,
    className: ye(Vc, e.headerCellClass),
    style: {
      ...Hc(e, t, l),
      gridColumnStart: c,
      gridColumnEnd: c + s
    },
    onFocus: a,
    onClick: u,
    children: e.name
  });
}
const Ap = "h44jtk67-0-0-beta-47", jp = "hcgkhxz7-0-0-beta-47", Fp = `rdg-header-sort-name ${jp}`;
function tu({
  column: e,
  sortDirection: t,
  priority: n
}) {
  return e.sortable ? /* @__PURE__ */ R.jsx(Lp, {
    sortDirection: t,
    priority: n,
    children: e.name
  }) : e.name;
}
function Lp({
  sortDirection: e,
  priority: t,
  children: n
}) {
  const r = ki().renderSortStatus;
  return /* @__PURE__ */ R.jsxs("span", {
    className: Ap,
    children: [/* @__PURE__ */ R.jsx("span", {
      className: Fp,
      children: n
    }), /* @__PURE__ */ R.jsx("span", {
      children: r({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const _p = "c6l2wv17-0-0-beta-47", Bp = "c1kqdw7y7-0-0-beta-47", zp = `rdg-cell-resizable ${Bp}`, Wp = "r1y6ywlx7-0-0-beta-47", Vp = "rdg-cell-draggable", Hp = "c1bezg5o7-0-0-beta-47", Up = `rdg-cell-dragging ${Hp}`, Yp = "c1vc96037-0-0-beta-47", qp = `rdg-cell-drag-over ${Yp}`;
function Gp({
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
  const [h, g] = Ot(!1), [y, b] = Ot(!1), f = d === "rtl", C = Yc(e, n), {
    tabIndex: S,
    childTabIndex: v,
    onFocus: w
  } = ko(r), x = s == null ? void 0 : s.findIndex((_) => _.columnKey === e.key), I = x !== void 0 && x > -1 ? s[x] : void 0, O = I == null ? void 0 : I.direction, $ = I !== void 0 && s.length > 1 ? x + 1 : void 0, M = O && !$ ? O === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: m,
    resizable: P,
    draggable: k
  } = e, N = Io(e, e.headerCellClass, m && _p, P && zp, k && Vp, h && Up, y && qp), V = e.renderHeaderCell ?? tu;
  function D(_) {
    if (_.pointerType === "mouse" && _.buttons !== 1)
      return;
    _.preventDefault();
    const {
      currentTarget: H,
      pointerId: Q
    } = _, X = H.parentElement, {
      right: ce,
      left: W
    } = X.getBoundingClientRect(), ve = f ? _.clientX - W : ce - _.clientX;
    let A = !1;
    function de(be) {
      const {
        width: Te,
        right: Fe,
        left: Ee
      } = X.getBoundingClientRect();
      let We = f ? Fe + ve - be.clientX : be.clientX + ve - Ee;
      We = Uc(We, e), Te > 0 && We !== Te && i(e, We);
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
    if (I === void 0) {
      const Q = {
        columnKey: e.key,
        direction: H ? "DESC" : "ASC"
      };
      l(s && _ ? [...s, Q] : [Q]);
    } else {
      let Q;
      if ((H === !0 && O === "DESC" || H !== !0 && O === "ASC") && (Q = {
        columnKey: e.key,
        direction: O === "ASC" ? "DESC" : "ASC"
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
    Xs(_) && b(!0);
  }
  function z(_) {
    Xs(_) && b(!1);
  }
  let K;
  return k && (K = {
    draggable: !0,
    onDragStart: U,
    onDragEnd: G,
    onDragOver: ue,
    onDragEnter: F,
    onDragLeave: z,
    onDrop: re
  }), /* @__PURE__ */ R.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": C,
    "aria-selected": r,
    "aria-sort": M,
    tabIndex: u ? 0 : S,
    className: N,
    style: {
      ...Hc(e, n, C),
      ...Fr(e, t)
    },
    onFocus: Z,
    onClick: ee,
    onKeyDown: m ? ne : void 0,
    ...K,
    children: [V({
      column: e,
      sortDirection: O,
      priority: $,
      tabIndex: v
    }), P && /* @__PURE__ */ R.jsx("div", {
      className: Wp,
      onClick: zf,
      onPointerDown: D
    })]
  });
}
function Xs(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const Kp = "r1upfr807-0-0-beta-47", os = `rdg-row ${Kp}`, Xp = "r190mhd37-0-0-beta-47", $i = "rdg-row-selected", Zp = "r139qu9m7-0-0-beta-47", Qp = "rdg-top-summary-row", Jp = "rdg-bottom-summary-row", em = "h10tskcx7-0-0-beta-47", nu = `rdg-header-row ${em}`;
function tm({
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
  const p = Df(), h = [];
  for (let g = 0; g < t.length; g++) {
    const y = t[g], b = un(y, s, {
      type: "HEADER"
    });
    b !== void 0 && (g += b - 1), h.push(/* @__PURE__ */ R.jsx(Gp, {
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
  return /* @__PURE__ */ R.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: ye(nu, l === -1 && $i),
    children: h
  });
}
const nm = /* @__PURE__ */ Jn(tm);
function rm({
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
        a.push(/* @__PURE__ */ R.jsx(Dp, {
          column: c,
          rowIdx: e,
          isCellSelected: r === u,
          selectCell: i
        }, u));
      }
    }
  }
  return /* @__PURE__ */ R.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: nu,
    children: a
  });
}
const om = /* @__PURE__ */ Jn(rm), im = "c6ra8a37-0-0-beta-47", am = `rdg-cell-copied ${im}`, sm = "cq910m07-0-0-beta-47", lm = `rdg-cell-dragged-over ${sm}`;
function cm({
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
  } = ko(n), {
    cellClass: f
  } = e, C = Io(e, typeof f == "function" ? f(a) : f, r && am, i && lm), S = Wc(e, a);
  function v($) {
    p({
      rowIdx: s,
      idx: e.idx
    }, $);
  }
  function w($) {
    if (l) {
      const M = no($);
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
      const M = no($);
      if (u({
        row: a,
        column: e,
        selectCell: v
      }, M), M.isGridDefaultPrevented()) return;
    }
    v();
  }
  function I($) {
    if (c) {
      const M = no($);
      if (c({
        row: a,
        column: e,
        selectCell: v
      }, M), M.isGridDefaultPrevented()) return;
    }
    v(!0);
  }
  function O($) {
    d(e, $);
  }
  return /* @__PURE__ */ R.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": n,
    "aria-readonly": !S || void 0,
    tabIndex: g,
    className: C,
    style: Fr(e, t),
    onClick: w,
    onDoubleClick: I,
    onContextMenu: x,
    onFocus: b,
    ...h,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: s,
      isCellEditable: S,
      tabIndex: y,
      onRowChange: O
    })
  });
}
const um = /* @__PURE__ */ Jn(cm);
function dm({
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
  onRowChange: S,
  selectCell: v,
  ...w
}, x) {
  const I = _t((m, P) => {
    S(m, t, P);
  });
  function O(m) {
    f == null || f(t), C == null || C(m);
  }
  e = ye(os, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, b == null ? void 0 : b(u, t), e, r === -1 && $i);
  const $ = [];
  for (let m = 0; m < d.length; m++) {
    const P = d[m], {
      idx: k
    } = P, N = un(P, c, {
      type: "ROW",
      row: u
    });
    N !== void 0 && (m += N - 1);
    const V = r === k;
    V && p ? $.push(p) : $.push(/* @__PURE__ */ R.jsx(um, {
      column: P,
      colSpan: N,
      row: u,
      rowIdx: t,
      isCopied: s === k,
      isDraggedOver: l === k,
      isCellSelected: V,
      onClick: h,
      onDoubleClick: g,
      onContextMenu: y,
      onRowChange: I,
      selectCell: v
    }, P.key));
  }
  const M = at(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: i
  }), [i, a]);
  return /* @__PURE__ */ R.jsx(Kc, {
    value: M,
    children: /* @__PURE__ */ R.jsx("div", {
      role: "row",
      ref: x,
      className: e,
      onMouseEnter: O,
      style: ns(n),
      ...w,
      children: $
    })
  });
}
const ru = /* @__PURE__ */ Jn(/* @__PURE__ */ Ii(dm)), gS = ru;
function ou(e, t) {
  return /* @__PURE__ */ R.jsx(ru, {
    ...t
  }, e);
}
function fm({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: n,
  setScrollToCellPosition: r
}) {
  const i = Pn(null);
  return kr(() => {
    ei(i.current);
  }), kr(() => {
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
  }, [n, r]), /* @__PURE__ */ R.jsx("div", {
    ref: i,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const pm = "a3ejtar7-0-0-beta-47", mm = `rdg-sort-arrow ${pm}`;
function hm({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ R.jsxs(R.Fragment, {
    children: [gm({
      sortDirection: e
    }), bm({
      priority: t
    })]
  });
}
function gm({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ R.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: mm,
    "aria-hidden": !0,
    children: /* @__PURE__ */ R.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function bm({
  priority: e
}) {
  return e;
}
const ym = "rnvodz57-0-0-beta-47", vm = `rdg ${ym}`, xm = "vlqv91k7-0-0-beta-47", wm = `rdg-viewport-dragging ${xm}`, Cm = "f1lsfrzw7-0-0-beta-47", Sm = "f1cte0lg7-0-0-beta-47", Tm = "s8wc6fl7-0-0-beta-47";
function Em({
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
  } = ko(i), {
    summaryCellClass: u
  } = e, d = Io(e, Tm, typeof u == "function" ? u(n) : u);
  function p() {
    a({
      rowIdx: r,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ R.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": i,
    tabIndex: s,
    className: d,
    style: Fr(e, t),
    onClick: p,
    onFocus: c,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: n,
      tabIndex: l
    })
  });
}
const Om = /* @__PURE__ */ Jn(Em), Rm = "skuhp557-0-0-beta-47", Pm = "tf8l5ub7-0-0-beta-47", Im = `rdg-summary-row ${Rm}`;
function km({
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
    const g = r[h], y = un(g, s, {
      type: "SUMMARY",
      row: n
    });
    y !== void 0 && (h += y - 1);
    const b = l === g.idx;
    p.push(/* @__PURE__ */ R.jsx(Om, {
      column: g,
      colSpan: y,
      row: n,
      rowIdx: e,
      isCellSelected: b,
      selectCell: u
    }, g.key));
  }
  return /* @__PURE__ */ R.jsx("div", {
    role: "row",
    "aria-rowindex": d,
    className: ye(os, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Im, c ? `${Qp} ${Pm}` : Jp, l === -1 && $i),
    style: {
      ...ns(t),
      "--rdg-summary-row-top": i !== void 0 ? `${i}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: p
  });
}
const Zs = /* @__PURE__ */ Jn(km);
function $m(e, t) {
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
    onCellDoubleClick: S,
    onCellContextMenu: v,
    onCellKeyDown: w,
    onSelectedCellChange: x,
    onScroll: I,
    onColumnResize: O,
    onColumnsReorder: $,
    onFill: M,
    onCopy: m,
    onPaste: P,
    enableVirtualization: k,
    renderers: N,
    className: V,
    style: D,
    rowClass: B,
    direction: ee,
    role: Z,
    "aria-label": ne,
    "aria-labelledby": U,
    "aria-describedby": G,
    "aria-rowcount": ue,
    "data-testid": re
  } = e, F = ki(), z = Z ?? "grid", K = c ?? 35, _ = u ?? (typeof K == "number" ? K : 35), H = d ?? (typeof K == "number" ? K : 35), Q = (N == null ? void 0 : N.renderRow) ?? (F == null ? void 0 : F.renderRow) ?? ou, X = (N == null ? void 0 : N.renderSortStatus) ?? (F == null ? void 0 : F.renderSortStatus) ?? hm, ce = (N == null ? void 0 : N.renderCheckbox) ?? (F == null ? void 0 : F.renderCheckbox) ?? op, W = (N == null ? void 0 : N.noRowsFallback) ?? (F == null ? void 0 : F.noRowsFallback), ve = k ?? !0, A = ee ?? "ltr", [de, ie] = Ot(0), [$e, be] = Ot(0), [Te, Fe] = Ot(() => /* @__PURE__ */ new Map()), [Ee, We] = Ot(() => /* @__PURE__ */ new Map()), [fe, _e] = Ot(null), [bt, xt] = Ot(!1), [Qe, Je] = Ot(void 0), [Re, st] = Ot(null), Pe = pn((te) => Te.get(te.key) ?? Ee.get(te.key) ?? te.width, [Ee, Te]), [ft, Mt, Rt, he] = Ep(), {
    columns: xe,
    colSpanColumns: et,
    lastFrozenColumnIndex: it,
    headerRowsCount: lt,
    colOverscanStartIdx: jt,
    colOverscanEndIdx: Et,
    templateColumns: nn,
    layoutCssVars: Ht,
    totalFrozenColumnWidth: bn
  } = Sp({
    rawColumns: n,
    defaultColumnOptions: f,
    getColumnWidth: Pe,
    scrollLeft: $e,
    viewportWidth: Mt,
    enableVirtualization: ve
  }), Ut = (i == null ? void 0 : i.length) ?? 0, Ft = (a == null ? void 0 : a.length) ?? 0, yn = Ut + Ft, Yt = lt + Ut, vn = lt - 1, pt = -Yt, rn = pt + vn, It = r.length + Ft - 1, [ge, on] = Ot(() => ({
    idx: -1,
    rowIdx: pt - 1,
    mode: "SELECT"
  })), wn = Pn(ge), nr = Pn(Qe), Cn = Pn(-1), E = Pn(null), q = Pn(!1), ae = z === "treegrid", j = lt * _, L = yn * H, J = Rt - j - L, le = p != null && g != null, se = A === "rtl", Oe = se ? "ArrowRight" : "ArrowLeft", Ce = se ? "ArrowLeft" : "ArrowRight", ke = ue ?? lt + r.length + yn, yt = at(() => ({
    renderCheckbox: ce,
    renderSortStatus: X
  }), [ce, X]), _n = at(() => {
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
    rowOverscanStartIdx: Nt,
    rowOverscanEndIdx: ut,
    totalRowHeight: an,
    gridTemplateRows: Yn,
    getRowTop: qn,
    getRowHeight: pr,
    findRowIdx: Ne
  } = Rp({
    rows: r,
    rowHeight: K,
    clientHeight: J,
    scrollTop: de,
    enableVirtualization: ve
  }), St = Op({
    columns: xe,
    colSpanColumns: et,
    colOverscanStartIdx: jt,
    colOverscanEndIdx: Et,
    lastFrozenColumnIndex: it,
    rowOverscanStartIdx: Nt,
    rowOverscanEndIdx: ut,
    rows: r,
    topSummaryRows: i,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: Sn,
    handleColumnResize: rr
  } = Tp(xe, St, nn, ft, Mt, Te, Ee, Fe, We, O), oa = ae ? -1 : 0, mr = xe.length - 1, ia = la(ge), zo = Ws(ge), af = _ + an + L + he, sf = _t(rr), lf = _t($), cf = _t(b), uf = _t(C), df = _t(S), ff = _t(v), pf = _t(gf), mf = _t(_s), hf = _t(Wo), aa = _t(Br), Ls = _t(({
    idx: te,
    rowIdx: oe
  }) => {
    Br({
      rowIdx: pt + oe - 1,
      idx: te
    });
  });
  kr(() => {
    if (!ia || da(ge, wn.current)) {
      wn.current = ge;
      return;
    }
    wn.current = ge, ge.idx === -1 && (E.current.focus({
      preventScroll: !0
    }), ei(E.current));
  }), kr(() => {
    q.current && (q.current = !1, Hs());
  }), Mf(t, () => ({
    element: ft.current,
    scrollToCell({
      idx: te,
      rowIdx: oe
    }) {
      const we = te !== void 0 && te > it && te < xe.length ? te : void 0, Se = oe !== void 0 && hr(oe) ? oe : void 0;
      (we !== void 0 || Se !== void 0) && st({
        idx: we,
        rowIdx: Se
      });
    },
    selectCell: Br
  }));
  const sa = pn((te) => {
    Je(te), nr.current = te;
  }, []);
  function gf(te) {
    if (!g) return;
    ro(s);
    const oe = new Set(p);
    for (const we of r) {
      if ((h == null ? void 0 : h(we)) === !0) continue;
      const Se = s(we);
      te.checked ? oe.add(Se) : oe.delete(Se);
    }
    g(oe);
  }
  function _s(te) {
    if (!g) return;
    ro(s);
    const {
      row: oe,
      checked: we,
      isShiftClick: Se
    } = te;
    if ((h == null ? void 0 : h(oe)) === !0) return;
    const Ae = new Set(p), tt = s(oe), dt = Cn.current, mt = r.indexOf(oe);
    if (Cn.current = mt, we ? Ae.add(tt) : Ae.delete(tt), Se && dt !== -1 && dt !== mt && dt < r.length) {
      const qt = ep(mt - dt);
      for (let Lt = dt + qt; Lt !== mt; Lt += qt) {
        const Tn = r[Lt];
        (h == null ? void 0 : h(Tn)) !== !0 && (we ? Ae.add(s(Tn)) : Ae.delete(s(Tn)));
      }
    }
    g(Ae);
  }
  function bf(te) {
    var mt;
    const {
      idx: oe,
      rowIdx: we,
      mode: Se
    } = ge;
    if (Se === "EDIT") return;
    if (w && hr(we)) {
      const qt = r[we], Lt = no(te);
      if (w({
        mode: "SELECT",
        row: qt,
        column: xe[oe],
        rowIdx: we,
        selectCell: Br
      }, Lt), Lt.isGridDefaultPrevented()) return;
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
        vf();
        return;
      }
      if (dt === 86) {
        xf();
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
        Vs(te);
        break;
      default:
        wf(te);
        break;
    }
  }
  function yf(te) {
    const {
      scrollTop: oe,
      scrollLeft: we
    } = te.currentTarget;
    si(() => {
      ie(oe), be(tp(we));
    }), I == null || I(te);
  }
  function Wo(te, oe, we) {
    if (typeof l != "function" || we === r[oe]) return;
    const Se = [...r];
    Se[oe] = we, l(Se, {
      indexes: [oe],
      column: te
    });
  }
  function Bs() {
    ge.mode === "EDIT" && Wo(xe[ge.idx], ge.rowIdx, ge.row);
  }
  function vf() {
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
  function xf() {
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
  function wf(te) {
    if (!zo) return;
    const oe = r[ge.rowIdx], {
      key: we,
      shiftKey: Se
    } = te;
    if (le && Se && we === " ") {
      ro(s);
      const Ae = s(oe);
      _s({
        row: oe,
        checked: !p.has(Ae),
        isShiftClick: !1
      }), te.preventDefault();
      return;
    }
    Vo(ge) && Vf(te) && on(({
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
  function zs(te) {
    return te >= oa && te <= mr;
  }
  function hr(te) {
    return te >= 0 && te < r.length;
  }
  function la({
    idx: te,
    rowIdx: oe
  }) {
    return oe >= pt && oe <= It && zs(te);
  }
  function Cf({
    idx: te,
    rowIdx: oe
  }) {
    return hr(oe) && te >= 0 && te <= mr;
  }
  function Ws({
    idx: te,
    rowIdx: oe
  }) {
    return hr(oe) && zs(te);
  }
  function Vo(te) {
    return Cf(te) && qf({
      columns: xe,
      rows: r,
      selectedPosition: te
    });
  }
  function Br(te, oe) {
    if (!la(te)) return;
    Bs();
    const we = r[te.rowIdx], Se = da(ge, te);
    oe && Vo(te) ? on({
      ...te,
      mode: "EDIT",
      row: we,
      originalRow: we
    }) : Se ? ei(Qs(ft.current)) : (q.current = !0, on({
      ...te,
      mode: "SELECT"
    })), x && !Se && x({
      rowIdx: te.rowIdx,
      row: we,
      column: xe[te.idx]
    });
  }
  function Sf(te, oe, we) {
    const {
      idx: Se,
      rowIdx: Ae
    } = ge, tt = ia && Se === -1;
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
        const dt = qn(Ae) + pr(Ae) - J;
        return {
          idx: Se,
          rowIdx: dt > 0 ? Ne(dt) : 0
        };
      }
      case "PageDown": {
        if (ge.rowIdx >= r.length) return ge;
        const dt = qn(Ae) + J;
        return {
          idx: Se,
          rowIdx: dt < an ? Ne(dt) : r.length - 1
        };
      }
      default:
        return ge;
    }
  }
  function Vs(te) {
    const {
      key: oe,
      shiftKey: we
    } = te;
    let Se = "NONE";
    if (oe === "Tab") {
      if (Xf({
        shiftKey: we,
        maxColIdx: mr,
        minRowIdx: pt,
        maxRowIdx: It,
        selectedPosition: ge
      })) {
        Bs();
        return;
      }
      Se = "CHANGE_ROW";
    }
    te.preventDefault();
    const Ae = li(te), tt = Sf(oe, Ae, we);
    if (da(ge, tt)) return;
    const dt = Kf({
      moveUp: oe === "ArrowUp",
      moveNext: oe === Ce || oe === "Tab" && !we,
      columns: xe,
      colSpanColumns: et,
      rows: r,
      topSummaryRows: i,
      bottomSummaryRows: a,
      minRowIdx: pt,
      mainHeaderRowIdx: rn,
      maxRowIdx: It,
      lastFrozenColumnIndex: it,
      cellNavigationMode: Se,
      currentPosition: ge,
      nextPosition: tt,
      isCellWithinBounds: la
    });
    Br(dt);
  }
  function Tf(te) {
    if (Qe === void 0) return;
    const {
      rowIdx: oe
    } = ge;
    return (oe < Qe ? oe < te && te <= Qe : oe > te && te >= Qe) ? ge.idx : void 0;
  }
  function Hs() {
    const te = Qs(ft.current);
    if (te === null) return;
    ei(te), (te.querySelector('[tabindex="0"]') ?? te).focus({
      preventScroll: !0
    });
  }
  function Ef() {
    if (M == null || ge.mode === "EDIT" || !Ws(ge))
      return;
    const {
      idx: te,
      rowIdx: oe
    } = ge, we = xe[te];
    if (we.renderEditCell == null || we.editable === !1)
      return;
    const Se = Pe(we);
    return /* @__PURE__ */ R.jsx($p, {
      gridRowStart: Yt + oe + 1,
      rows: r,
      column: we,
      columnWidth: Se,
      maxColIdx: mr,
      isLastRow: oe === It,
      selectedPosition: ge,
      isCellEditable: Vo,
      latestDraggedOverRowIdx: nr,
      onRowsChange: l,
      onClick: Hs,
      onFill: M,
      setDragging: xt,
      setDraggedOverRowIdx: sa
    });
  }
  function Of(te) {
    if (ge.rowIdx !== te || ge.mode === "SELECT") return;
    const {
      idx: oe,
      row: we
    } = ge, Se = xe[oe], Ae = un(Se, it, {
      type: "ROW",
      row: we
    }), tt = (mt) => {
      q.current = mt, on(({
        idx: qt,
        rowIdx: Lt
      }) => ({
        idx: qt,
        rowIdx: Lt,
        mode: "SELECT"
      }));
    }, dt = (mt, qt, Lt) => {
      qt ? si(() => {
        Wo(Se, ge.rowIdx, mt), tt(Lt);
      }) : on((Tn) => ({
        ...Tn,
        row: mt
      }));
    };
    return r[ge.rowIdx] !== ge.originalRow && tt(!1), /* @__PURE__ */ R.jsx(Np, {
      column: Se,
      colSpan: Ae,
      row: we,
      rowIdx: te,
      onRowChange: dt,
      closeEditor: tt,
      onKeyDown: w,
      navigate: Vs
    }, Se.key);
  }
  function zr(te) {
    const oe = ge.idx === -1 ? void 0 : xe[ge.idx];
    return oe !== void 0 && ge.rowIdx === te && !St.includes(oe) ? ge.idx > Et ? [...St, oe] : [...St.slice(0, it + 1), oe, ...St.slice(it + 1)] : St;
  }
  function Rf() {
    const te = [], {
      idx: oe,
      rowIdx: we
    } = ge, Se = zo && we < Nt ? Nt - 1 : Nt, Ae = zo && we > ut ? ut + 1 : ut;
    for (let tt = Se; tt <= Ae; tt++) {
      const dt = tt === Nt - 1 || tt === ut + 1, mt = dt ? we : tt;
      let qt = St;
      const Lt = oe === -1 ? void 0 : xe[oe];
      Lt !== void 0 && (dt ? qt = [Lt] : qt = zr(mt));
      const Tn = r[mt], Pf = Yt + mt + 1;
      let ca = mt, ua = !1;
      typeof s == "function" && (ca = s(Tn), ua = (p == null ? void 0 : p.has(ca)) ?? !1), te.push(Q(ca, {
        "aria-rowindex": Yt + mt + 1,
        "aria-selected": le ? ua : void 0,
        rowIdx: mt,
        row: Tn,
        viewportColumns: qt,
        isRowSelectionDisabled: (h == null ? void 0 : h(Tn)) ?? !1,
        isRowSelected: ua,
        onCellClick: uf,
        onCellDoubleClick: df,
        onCellContextMenu: ff,
        rowClass: B,
        gridRowStart: Pf,
        copiedCellIdx: fe !== null && fe.row === Tn ? xe.findIndex((If) => If.key === fe.columnKey) : void 0,
        selectedCellIdx: we === mt ? oe : void 0,
        draggedOverCellIdx: Tf(mt),
        setDraggedOverRowIdx: bt ? sa : void 0,
        lastFrozenColumnIndex: it,
        onRowChange: hf,
        selectCell: aa,
        selectedCellEditor: Of(mt)
      }));
    }
    return te;
  }
  (ge.idx > mr || ge.rowIdx > It) && (on({
    idx: -1,
    rowIdx: pt - 1,
    mode: "SELECT"
  }), sa(void 0));
  let Ho = `repeat(${lt}, ${_}px)`;
  Ut > 0 && (Ho += ` repeat(${Ut}, ${H}px)`), r.length > 0 && (Ho += Yn), Ft > 0 && (Ho += ` repeat(${Ft}, ${H}px)`);
  const Us = ge.idx === -1 && ge.rowIdx !== pt - 1;
  return /* @__PURE__ */ R.jsxs("div", {
    role: z,
    "aria-label": ne,
    "aria-labelledby": U,
    "aria-describedby": G,
    "aria-multiselectable": le ? !0 : void 0,
    "aria-colcount": xe.length,
    "aria-rowcount": ke,
    className: ye(vm, V, bt && wm),
    style: {
      ...D,
      scrollPaddingInlineStart: ge.idx > it || (Re == null ? void 0 : Re.idx) !== void 0 ? `${bn}px` : void 0,
      scrollPaddingBlock: hr(ge.rowIdx) || (Re == null ? void 0 : Re.rowIdx) !== void 0 ? `${j + Ut * H}px ${Ft * H}px` : void 0,
      gridTemplateColumns: Sn,
      gridTemplateRows: Ho,
      "--rdg-header-row-height": `${_}px`,
      "--rdg-scroll-height": `${af}px`,
      ...Ht
    },
    dir: A,
    ref: ft,
    onScroll: yf,
    onKeyDown: bf,
    "data-testid": re,
    children: [/* @__PURE__ */ R.jsxs(fp, {
      value: yt,
      children: [/* @__PURE__ */ R.jsx(hp, {
        value: pf,
        children: /* @__PURE__ */ R.jsxs(mp, {
          value: _n,
          children: [Array.from({
            length: vn
          }, (te, oe) => /* @__PURE__ */ R.jsx(om, {
            rowIdx: oe + 1,
            level: -vn + oe,
            columns: zr(pt + oe),
            selectedCellIdx: ge.rowIdx === pt + oe ? ge.idx : void 0,
            selectCell: Ls
          }, oe)), /* @__PURE__ */ R.jsx(nm, {
            rowIdx: lt,
            columns: zr(rn),
            onColumnResize: sf,
            onColumnsReorder: lf,
            sortColumns: y,
            onSortColumnsChange: cf,
            lastFrozenColumnIndex: it,
            selectedCellIdx: ge.rowIdx === rn ? ge.idx : void 0,
            selectCell: Ls,
            shouldFocusGrid: !ia,
            direction: A
          })]
        })
      }), r.length === 0 && W ? W : /* @__PURE__ */ R.jsxs(R.Fragment, {
        children: [i == null ? void 0 : i.map((te, oe) => {
          const we = lt + 1 + oe, Se = rn + 1 + oe, Ae = ge.rowIdx === Se, tt = j + H * oe;
          return /* @__PURE__ */ R.jsx(Zs, {
            "aria-rowindex": we,
            rowIdx: Se,
            gridRowStart: we,
            row: te,
            top: tt,
            bottom: void 0,
            viewportColumns: zr(Se),
            lastFrozenColumnIndex: it,
            selectedCellIdx: Ae ? ge.idx : void 0,
            isTop: !0,
            selectCell: aa
          }, oe);
        }), /* @__PURE__ */ R.jsx(pp, {
          value: mf,
          children: Rf()
        }), a == null ? void 0 : a.map((te, oe) => {
          const we = Yt + r.length + oe + 1, Se = r.length + oe, Ae = ge.rowIdx === Se, tt = J > an ? Rt - H * (a.length - oe) : void 0, dt = tt === void 0 ? H * (a.length - 1 - oe) : void 0;
          return /* @__PURE__ */ R.jsx(Zs, {
            "aria-rowindex": ke - Ft + oe + 1,
            rowIdx: Se,
            gridRowStart: we,
            row: te,
            top: tt,
            bottom: dt,
            viewportColumns: zr(Se),
            lastFrozenColumnIndex: it,
            selectedCellIdx: Ae ? ge.idx : void 0,
            isTop: !1,
            selectCell: aa
          }, oe);
        })]
      })]
    }), Ef(), Yf(St), ae && /* @__PURE__ */ R.jsx("div", {
      ref: E,
      tabIndex: Us ? 0 : -1,
      className: ye(Cm, Us && [Xp, it !== -1 && Zp], !hr(ge.rowIdx) && Sm),
      style: {
        gridRowStart: ge.rowIdx + Yt + 1
      }
    }), Re !== null && /* @__PURE__ */ R.jsx(fm, {
      scrollToPosition: Re,
      setScrollToCellPosition: st,
      gridElement: ft.current
    })]
  });
}
function Qs(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function da(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const iu = /* @__PURE__ */ Ii($m);
function Mm({
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
  } = ko(i);
  function g() {
    u(e);
  }
  const y = c && l === a.idx;
  return /* @__PURE__ */ R.jsx("div", {
    role: "gridcell",
    "aria-colindex": a.idx + 1,
    "aria-selected": i,
    tabIndex: d,
    className: Io(a),
    style: {
      ...Fr(a),
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
const Nm = /* @__PURE__ */ Jn(Mm), Dm = "g1yxluv37-0-0-beta-47", Am = `rdg-group-row ${Dm}`;
function jm({
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
  const h = r[0].key === Ir ? t.level + 1 : t.level;
  function g() {
    s({
      rowIdx: n,
      idx: -1
    });
  }
  const y = at(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: a
  }), [a]);
  return /* @__PURE__ */ R.jsx(Kc, {
    value: y,
    children: /* @__PURE__ */ R.jsx("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: ye(os, Am, `rdg-row-${n % 2 === 0 ? "even" : "odd"}`, e, i === -1 && $i),
      onClick: g,
      style: ns(l),
      ...p,
      children: r.map((b) => /* @__PURE__ */ R.jsx(Nm, {
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
const Fm = /* @__PURE__ */ Jn(jm);
function Lm({
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
  const b = ki(), f = (c == null ? void 0 : c.renderRow) ?? (b == null ? void 0 : b.renderRow) ?? ou, C = 1 + (((G = g.topSummaryRows) == null ? void 0 : G.length) ?? 0), S = g.direction === "rtl", v = S ? "ArrowRight" : "ArrowLeft", w = S ? "ArrowLeft" : "ArrowRight", x = _t(ne), {
    columns: I,
    groupBy: O
  } = at(() => {
    const F = [...e].sort(({
      key: K
    }, {
      key: _
    }) => K === Ir ? -1 : _ === Ir ? 1 : u.includes(K) ? u.includes(_) ? u.indexOf(K) - u.indexOf(_) : -1 : u.includes(_) ? 1 : 0), z = [];
    for (const [K, _] of F.entries())
      u.includes(_.key) && (z.push(_.key), F[K] = {
        ..._,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: _.renderGroupCell ?? cp,
        editable: !1
      });
    return {
      columns: F,
      groupBy: z
    };
  }, [e, u]), [$, M] = at(() => {
    if (O.length === 0) return [void 0, t.length];
    const F = (z, [K, ..._], H) => {
      let Q = 0;
      const X = {};
      for (const [ce, W] of Object.entries(d(z, K))) {
        const [ve, A] = _.length === 0 ? [W, W.length] : F(W, _, H + Q + 1);
        X[ce] = {
          childRows: W,
          childGroups: ve,
          startRowIndex: H + Q
        }, Q += A + 1;
      }
      return [X, Q];
    };
    return F(t, O, 0);
  }, [O, d, t]), [m, P] = at(() => {
    const F = /* @__PURE__ */ new Set();
    if (!$) return [t, _];
    const z = [], K = (H, Q, X) => {
      if (_m(H)) {
        z.push(...H);
        return;
      }
      Object.keys(H).forEach((ce, W, ve) => {
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
          posInSet: W,
          startRowIndex: be,
          setSize: ve.length
        };
        z.push(Te), F.add(Te), de && K($e, A, X + 1);
      });
    };
    return K($, void 0, 0), [z, _];
    function _(H) {
      return F.has(H);
    }
  }, [p, $, t]), k = at(() => typeof n == "function" ? (F) => P(F) ? n({
    type: "GROUP",
    row: F
  }) : n({
    type: "ROW",
    row: F
  }) : n, [P, n]), N = pn((F) => {
    const z = m.indexOf(F);
    for (let K = z - 1; K >= 0; K--) {
      const _ = m[K];
      if (P(_) && (!P(F) || F.parentId === _.id))
        return [_, K];
    }
  }, [P, m]), V = pn((F) => {
    if (P(F))
      return F.id;
    if (typeof r == "function")
      return r(F);
    const z = N(F);
    if (z !== void 0) {
      const {
        startRowIndex: K,
        childRows: _
      } = z[0], H = _.indexOf(F);
      return K + H + 1;
    }
    return m.indexOf(F);
  }, [N, P, r, m]), D = at(() => {
    if (s == null) return null;
    ro(r);
    const F = new Set(s);
    for (const z of m)
      P(z) && z.childRows.every((_) => s.has(r(_))) && F.add(z.id);
    return F;
  }, [P, r, s, m]);
  function B(F) {
    if (!l) return;
    ro(r);
    const z = new Set(s);
    for (const K of m) {
      const _ = V(K);
      if (D != null && D.has(_) && !F.has(_))
        if (P(K))
          for (const H of K.childRows)
            z.delete(r(H));
        else
          z.delete(_);
      else if (!(D != null && D.has(_)) && F.has(_))
        if (P(K))
          for (const H of K.childRows)
            z.add(r(H));
        else
          z.add(_);
    }
    l(z);
  }
  function ee(F, z) {
    if (i == null || i(F, z), z.isGridDefaultPrevented() || F.mode === "EDIT") return;
    const {
      column: K,
      rowIdx: _,
      selectCell: H
    } = F, Q = (K == null ? void 0 : K.idx) ?? -1, X = m[_];
    if (P(X)) {
      if (Q === -1 && (z.key === v && X.isExpanded || z.key === w && !X.isExpanded) && (z.preventDefault(), z.preventGridDefault(), ne(X.id)), Q === -1 && z.key === v && !X.isExpanded && X.level !== 0) {
        const ce = N(X);
        ce !== void 0 && (z.preventGridDefault(), H({
          idx: Q,
          rowIdx: ce[1]
        }));
      }
      li(z) && (z.keyCode === 67 || z.keyCode === 86) && z.preventGridDefault();
    }
  }
  function Z(F, {
    indexes: z,
    column: K
  }) {
    if (!a) return;
    const _ = [...t], H = [];
    for (const Q of z) {
      const X = t.indexOf(m[Q]);
      _[X] = F[Q], H.push(X);
    }
    a(_, {
      indexes: H,
      column: K
    });
  }
  function ne(F) {
    const z = new Set(p);
    z.has(F) ? z.delete(F) : z.add(F), h(z);
  }
  function U(F, {
    row: z,
    rowClass: K,
    onCellClick: _,
    onCellDoubleClick: H,
    onCellContextMenu: Q,
    onRowChange: X,
    lastFrozenColumnIndex: ce,
    copiedCellIdx: W,
    draggedOverCellIdx: ve,
    setDraggedOverRowIdx: A,
    selectedCellEditor: de,
    ...ie
  }) {
    if (P(z)) {
      const {
        startRowIndex: Te
      } = z;
      return /* @__PURE__ */ R.jsx(Fm, {
        ...ie,
        "aria-rowindex": C + Te + 1,
        row: z,
        groupBy: O,
        toggleGroup: x
      }, F);
    }
    let $e = ie["aria-rowindex"];
    const be = N(z);
    if (be !== void 0) {
      const {
        startRowIndex: Te,
        childRows: Fe
      } = be[0], Ee = Fe.indexOf(z);
      $e = Te + C + Ee + 2;
    }
    return f(F, {
      ...ie,
      "aria-rowindex": $e,
      row: z,
      rowClass: K,
      onCellClick: _,
      onCellDoubleClick: H,
      onCellContextMenu: Q,
      onRowChange: X,
      lastFrozenColumnIndex: ce,
      copiedCellIdx: W,
      draggedOverCellIdx: ve,
      setDraggedOverRowIdx: A,
      selectedCellEditor: de
    });
  }
  return /* @__PURE__ */ R.jsx(iu, {
    ...g,
    role: "treegrid",
    "aria-rowcount": M + 1 + (((ue = g.topSummaryRows) == null ? void 0 : ue.length) ?? 0) + (((re = g.bottomSummaryRows) == null ? void 0 : re.length) ?? 0),
    ref: y,
    columns: I,
    rows: m,
    rowHeight: k,
    rowKeyGetter: V,
    onRowsChange: Z,
    selectedRows: D,
    onSelectedRowsChange: B,
    onCellKeyDown: ee,
    renderers: {
      ...c,
      renderRow: U
    }
  });
}
function _m(e) {
  return Array.isArray(e);
}
const bS = /* @__PURE__ */ Ii(Lm), Bm = "t7vyx3i7-0-0-beta-47", zm = `rdg-text-editor ${Bm}`;
function Wm(e) {
  e == null || e.focus(), e == null || e.select();
}
function yS({
  row: e,
  column: t,
  onRowChange: n,
  onClose: r
}) {
  return /* @__PURE__ */ R.jsx("input", {
    className: zm,
    ref: Wm,
    value: e[t.key],
    onChange: (i) => n({
      ...e,
      [t.key]: i.target.value
    }),
    onBlur: () => r(!0, !1)
  });
}
const Tt = {
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
}, Vm = {
  "--rdg-color": Tt.gray800,
  "--rdg-header-color": Tt.gray700,
  "--rdg-border-color": Tt.gray400,
  "--rdg-background-color": Tt.forcewhite,
  "--rdg-header-background-color": Tt.forcewhite,
  "--rdg-row-hover-background-color": Tt.forcewhite,
  "--rdg-row-selected-hover-background-color": Tt.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": Tt.primary400,
  "--rdg-row-selected-color": Tt.forcewhite,
  "--rdg-scrollbar-width": "8px",
  "--rdg-scrollbar-height": "8px",
  "--rdg-scrollbar-thumb-background": Tt.primary500,
  "--rdg-scrollbar-track-background": Tt.gray100,
  "--rdg--scrollbar-thumb-hover-background": Tt.primary500,
  "--rdg--scrollbar-track-hover-background": Tt.gray200
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
function au(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Hm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Um = /* @__PURE__ */ au(
  function(e) {
    return Hm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ym = !1;
function qm(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Gm(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Km = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var a;
      r.tags.length === 0 ? r.insertionPoint ? a = r.insertionPoint.nextSibling : r.prepend ? a = r.container.firstChild : a = r.before : a = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, a), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !Ym : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gm(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = qm(i);
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
}(), kt = "-ms-", di = "-moz-", Be = "-webkit-", su = "comm", is = "rule", as = "decl", Xm = "@import", lu = "@keyframes", Zm = "@layer", Qm = Math.abs, Mi = String.fromCharCode, Jm = Object.assign;
function eh(e, t) {
  return Pt(e, 0) ^ 45 ? (((t << 2 ^ Pt(e, 0)) << 2 ^ Pt(e, 1)) << 2 ^ Pt(e, 2)) << 2 ^ Pt(e, 3) : 0;
}
function cu(e) {
  return e.trim();
}
function th(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, n) {
  return e.replace(t, n);
}
function Fa(e, t) {
  return e.indexOf(t);
}
function Pt(e, t) {
  return e.charCodeAt(t) | 0;
}
function po(e, t, n) {
  return e.slice(t, n);
}
function On(e) {
  return e.length;
}
function ss(e) {
  return e.length;
}
function Yo(e, t) {
  return t.push(e), e;
}
function nh(e, t) {
  return e.map(t).join("");
}
var Ni = 1, $r = 1, uu = 0, Vt = 0, wt = 0, Lr = "";
function Di(e, t, n, r, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: a, line: Ni, column: $r, length: s, return: "" };
}
function Ur(e, t) {
  return Jm(Di("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function rh() {
  return wt;
}
function oh() {
  return wt = Vt > 0 ? Pt(Lr, --Vt) : 0, $r--, wt === 10 && ($r = 1, Ni--), wt;
}
function Zt() {
  return wt = Vt < uu ? Pt(Lr, Vt++) : 0, $r++, wt === 10 && ($r = 1, Ni++), wt;
}
function $n() {
  return Pt(Lr, Vt);
}
function ti() {
  return Vt;
}
function $o(e, t) {
  return po(Lr, e, t);
}
function mo(e) {
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
function du(e) {
  return Ni = $r = 1, uu = On(Lr = e), Vt = 0, [];
}
function fu(e) {
  return Lr = "", e;
}
function ni(e) {
  return cu($o(Vt - 1, La(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ih(e) {
  for (; (wt = $n()) && wt < 33; )
    Zt();
  return mo(e) > 2 || mo(wt) > 3 ? "" : " ";
}
function ah(e, t) {
  for (; --t && Zt() && !(wt < 48 || wt > 102 || wt > 57 && wt < 65 || wt > 70 && wt < 97); )
    ;
  return $o(e, ti() + (t < 6 && $n() == 32 && Zt() == 32));
}
function La(e) {
  for (; Zt(); )
    switch (wt) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && La(wt);
        break;
      case 40:
        e === 41 && La(e);
        break;
      case 92:
        Zt();
        break;
    }
  return Vt;
}
function sh(e, t) {
  for (; Zt() && e + wt !== 57; )
    if (e + wt === 84 && $n() === 47)
      break;
  return "/*" + $o(t, Vt - 1) + "*" + Mi(e === 47 ? e : Zt());
}
function lh(e) {
  for (; !mo($n()); )
    Zt();
  return $o(e, Vt);
}
function ch(e) {
  return fu(ri("", null, null, null, [""], e = du(e), 0, [0], e));
}
function ri(e, t, n, r, i, a, s, l, c) {
  for (var u = 0, d = 0, p = s, h = 0, g = 0, y = 0, b = 1, f = 1, C = 1, S = 0, v = "", w = i, x = a, I = r, O = v; f; )
    switch (y = S, S = Zt()) {
      case 40:
        if (y != 108 && Pt(O, p - 1) == 58) {
          Fa(O += ze(ni(S), "&", "&\f"), "&\f") != -1 && (C = -1);
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
        O += ih(y);
        break;
      case 92:
        O += ah(ti() - 1, 7);
        continue;
      case 47:
        switch ($n()) {
          case 42:
          case 47:
            Yo(uh(sh(Zt(), ti()), t, n), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * b:
        l[u++] = On(O) * C;
      case 125 * b:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            f = 0;
          case 59 + d:
            C == -1 && (O = ze(O, /\f/g, "")), g > 0 && On(O) - p && Yo(g > 32 ? el(O + ";", r, n, p - 1) : el(ze(O, " ", "") + ";", r, n, p - 2), c);
            break;
          case 59:
            O += ";";
          default:
            if (Yo(I = Js(O, t, n, u, d, i, l, v, w = [], x = [], p), a), S === 123)
              if (d === 0)
                ri(O, t, I, I, w, a, p, l, x);
              else
                switch (h === 99 && Pt(O, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ri(e, I, I, r && Yo(Js(e, I, I, 0, 0, i, l, v, i, w = [], p), x), i, x, p, l, r ? w : x);
                    break;
                  default:
                    ri(O, I, I, I, [""], x, 0, l, x);
                }
        }
        u = d = g = 0, b = C = 1, v = O = "", p = s;
        break;
      case 58:
        p = 1 + On(O), g = y;
      default:
        if (b < 1) {
          if (S == 123)
            --b;
          else if (S == 125 && b++ == 0 && oh() == 125)
            continue;
        }
        switch (O += Mi(S), S * b) {
          case 38:
            C = d > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            l[u++] = (On(O) - 1) * C, C = 1;
            break;
          case 64:
            $n() === 45 && (O += ni(Zt())), h = $n(), d = p = On(v = O += lh(ti())), S++;
            break;
          case 45:
            y === 45 && On(O) == 2 && (b = 0);
        }
    }
  return a;
}
function Js(e, t, n, r, i, a, s, l, c, u, d) {
  for (var p = i - 1, h = i === 0 ? a : [""], g = ss(h), y = 0, b = 0, f = 0; y < r; ++y)
    for (var C = 0, S = po(e, p + 1, p = Qm(b = s[y])), v = e; C < g; ++C)
      (v = cu(b > 0 ? h[C] + " " + S : ze(S, /&\f/g, h[C]))) && (c[f++] = v);
  return Di(e, t, n, i === 0 ? is : l, c, u, d);
}
function uh(e, t, n) {
  return Di(e, t, n, su, Mi(rh()), po(e, 2, -2), 0);
}
function el(e, t, n, r) {
  return Di(e, t, n, as, po(e, 0, r), po(e, r + 1, -1), r);
}
function Er(e, t) {
  for (var n = "", r = ss(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function dh(e, t, n, r) {
  switch (e.type) {
    case Zm:
      if (e.children.length) break;
    case Xm:
    case as:
      return e.return = e.return || e.value;
    case su:
      return "";
    case lu:
      return e.return = e.value + "{" + Er(e.children, r) + "}";
    case is:
      e.value = e.props.join(",");
  }
  return On(n = Er(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function fh(e) {
  var t = ss(e);
  return function(n, r, i, a) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, i, a) || "";
    return s;
  };
}
function ph(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var mh = function(t, n, r) {
  for (var i = 0, a = 0; i = a, a = $n(), i === 38 && a === 12 && (n[r] = 1), !mo(a); )
    Zt();
  return $o(t, Vt);
}, hh = function(t, n) {
  var r = -1, i = 44;
  do
    switch (mo(i)) {
      case 0:
        i === 38 && $n() === 12 && (n[r] = 1), t[r] += mh(Vt - 1, n, r);
        break;
      case 2:
        t[r] += ni(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = $n() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Mi(i);
    }
  while (i = Zt());
  return t;
}, gh = function(t, n) {
  return fu(hh(du(t), n));
}, tl = /* @__PURE__ */ new WeakMap(), bh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !tl.get(r)) && !i) {
      tl.set(t, !0);
      for (var a = [], s = gh(n, a), l = r.props, c = 0, u = 0; c < s.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = a[c] ? s[c].replace(/&\f/g, l[d]) : l[d] + " " + s[c];
    }
  }
}, yh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function pu(e, t) {
  switch (eh(e, t)) {
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
      return Be + e + di + e + kt + e + e;
    case 6828:
    case 4268:
      return Be + e + kt + e + e;
    case 6165:
      return Be + e + kt + "flex-" + e + e;
    case 5187:
      return Be + e + ze(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + kt + "flex-$1$2") + e;
    case 5443:
      return Be + e + kt + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + kt + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + kt + ze(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + kt + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + ze(e, "-grow", "") + Be + e + kt + ze(e, "grow", "positive") + e;
    case 4554:
      return Be + ze(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + kt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
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
      if (On(e) - 1 - t > 6) switch (Pt(e, t + 1)) {
        case 109:
          if (Pt(e, t + 4) !== 45) break;
        case 102:
          return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + di + (Pt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Fa(e, "stretch") ? pu(ze(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Pt(e, t + 1) !== 115) break;
    case 6444:
      switch (Pt(e, On(e) - 3 - (~Fa(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + Be) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (Pt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + kt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Pt(e, t + 11)) {
        case 114:
          return Be + e + kt + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + kt + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + kt + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + kt + e + e;
  }
  return e;
}
var vh = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case as:
      t.return = pu(t.value, t.length);
      break;
    case lu:
      return Er([Ur(t, {
        value: ze(t.value, "@", "@" + Be)
      })], i);
    case is:
      if (t.length) return nh(t.props, function(a) {
        switch (th(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Er([Ur(t, {
              props: [ze(a, /:(read-\w+)/, ":" + di + "$1")]
            })], i);
          case "::placeholder":
            return Er([Ur(t, {
              props: [ze(a, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), Ur(t, {
              props: [ze(a, /:(plac\w+)/, ":" + di + "$1")]
            }), Ur(t, {
              props: [ze(a, /:(plac\w+)/, kt + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, xh = [vh], wh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var f = b.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || xh, a = {}, s, l = [];
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
  var c, u = [bh, yh];
  {
    var d, p = [dh, ph(function(b) {
      d.insert(b);
    })], h = fh(u.concat(i, p)), g = function(f) {
      return Er(ch(f), h);
    };
    c = function(f, C, S, v) {
      d = S, g(f ? f + "{" + C.styles + "}" : C.styles), v && (y.inserted[C.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new Km({
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
}, _a = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl;
function Ch() {
  if (nl) return Ve;
  nl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var I = x.$$typeof;
      switch (I) {
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
                  return I;
              }
          }
        case n:
          return I;
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
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === a || x === i || x === p || x === h || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === g || x.$$typeof === s || x.$$typeof === l || x.$$typeof === d || x.$$typeof === f || x.$$typeof === C || x.$$typeof === S || x.$$typeof === b);
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
var rl;
function Sh() {
  return rl || (rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function v(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === r || W === u || W === a || W === i || W === p || W === h || typeof W == "object" && W !== null && (W.$$typeof === y || W.$$typeof === g || W.$$typeof === s || W.$$typeof === l || W.$$typeof === d || W.$$typeof === f || W.$$typeof === C || W.$$typeof === S || W.$$typeof === b);
    }
    function w(W) {
      if (typeof W == "object" && W !== null) {
        var ve = W.$$typeof;
        switch (ve) {
          case t:
            var A = W.type;
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
    var x = c, I = u, O = l, $ = s, M = t, m = d, P = r, k = y, N = g, V = n, D = a, B = i, ee = p, Z = !1;
    function ne(W) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(W) || w(W) === c;
    }
    function U(W) {
      return w(W) === u;
    }
    function G(W) {
      return w(W) === l;
    }
    function ue(W) {
      return w(W) === s;
    }
    function re(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function F(W) {
      return w(W) === d;
    }
    function z(W) {
      return w(W) === r;
    }
    function K(W) {
      return w(W) === y;
    }
    function _(W) {
      return w(W) === g;
    }
    function H(W) {
      return w(W) === n;
    }
    function Q(W) {
      return w(W) === a;
    }
    function X(W) {
      return w(W) === i;
    }
    function ce(W) {
      return w(W) === p;
    }
    He.AsyncMode = x, He.ConcurrentMode = I, He.ContextConsumer = O, He.ContextProvider = $, He.Element = M, He.ForwardRef = m, He.Fragment = P, He.Lazy = k, He.Memo = N, He.Portal = V, He.Profiler = D, He.StrictMode = B, He.Suspense = ee, He.isAsyncMode = ne, He.isConcurrentMode = U, He.isContextConsumer = G, He.isContextProvider = ue, He.isElement = re, He.isForwardRef = F, He.isFragment = z, He.isLazy = K, He.isMemo = _, He.isPortal = H, He.isProfiler = Q, He.isStrictMode = X, He.isSuspense = ce, He.isValidElementType = v, He.typeOf = w;
  }()), He;
}
process.env.NODE_ENV === "production" ? _a.exports = Ch() : _a.exports = Sh();
var ls = _a.exports, mu = ls, Th = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Eh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hu = {};
hu[mu.ForwardRef] = Th;
hu[mu.Memo] = Eh;
var Oh = !0;
function Rh(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var gu = function(t, n, r) {
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
  Oh === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, bu = function(t, n, r) {
  gu(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Ph(e) {
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
var Ih = {
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
}, kh = !1, $h = /[A-Z]|^ms/g, Mh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, yu = function(t) {
  return t.charCodeAt(1) === 45;
}, ol = function(t) {
  return t != null && typeof t != "boolean";
}, fa = /* @__PURE__ */ au(function(e) {
  return yu(e) ? e : e.replace($h, "-$&").toLowerCase();
}), il = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Mh, function(r, i, a) {
          return Rn = {
            name: i,
            styles: a,
            next: Rn
          }, i;
        });
  }
  return Ih[t] !== 1 && !yu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Nh = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ho(e, t, n) {
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
        return Rn = {
          name: i.name,
          styles: i.styles,
          next: Rn
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Rn = {
              name: s.name,
              styles: s.styles,
              next: Rn
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return Dh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Rn, u = n(e);
        return Rn = c, ho(e, t, u);
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
function Dh(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += ho(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += a + "{" + t[l] + "}" : ol(l) && (r += fa(a) + ":" + il(a, l) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && kh)
          throw new Error(Nh);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            ol(s[c]) && (r += fa(a) + ":" + il(a, s[c]) + ";");
        else {
          var u = ho(e, t, s);
          switch (a) {
            case "animation":
            case "animationName": {
              r += fa(a) + ":" + u + ";";
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
var al = /label:\s*([^\s;{]+)\s*(;|$)/g, Rn;
function Ai(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  Rn = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += ho(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += ho(n, t, e[l]), r) {
      var c = a;
      i += c[l];
    }
  al.lastIndex = 0;
  for (var u = "", d; (d = al.exec(i)) !== null; )
    u += "-" + d[1];
  var p = Ph(i) + u;
  return {
    name: p,
    styles: i,
    next: Rn
  };
}
var Ah = function(t) {
  return t();
}, vu = T.useInsertionEffect ? T.useInsertionEffect : !1, jh = vu || Ah, sl = vu || T.useLayoutEffect, xu = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wh({
    key: "css"
  }) : null
);
xu.Provider;
var wu = function(t) {
  return /* @__PURE__ */ Ii(function(n, r) {
    var i = Xn(xu);
    return t(n, i, r);
  });
}, cs = /* @__PURE__ */ T.createContext({}), Fh = /* @__PURE__ */ wu(function(e, t) {
  var n = e.styles, r = Ai([n], void 0, T.useContext(cs)), i = T.useRef();
  return sl(function() {
    var a = t.key + "-global", s = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), s.hydrate([c])), i.current = [s, l], function() {
      s.flush();
    };
  }, [t]), sl(function() {
    var a = i.current, s = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && bu(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Lh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ai(t);
}
var us = function() {
  var t = Lh.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, _h = Um, Bh = function(t) {
  return t !== "theme";
}, ll = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? _h : Bh;
}, cl = function(t, n, r) {
  var i;
  if (n) {
    var a = n.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, zh = !1, Wh = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return gu(n, r, i), jh(function() {
    return bu(n, r, i);
  }), null;
}, Vh = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, a, s;
  n !== void 0 && (a = n.label, s = n.target);
  var l = cl(t, n, r), c = l || ll(i), u = !c("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && p.push("label:" + a + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      p.push(d[0][0]);
      for (var h = d.length, g = 1; g < h; g++)
        p.push(d[g], d[0][g]);
    }
    var y = wu(function(b, f, C) {
      var S = u && b.as || i, v = "", w = [], x = b;
      if (b.theme == null) {
        x = {};
        for (var I in b)
          x[I] = b[I];
        x.theme = T.useContext(cs);
      }
      typeof b.className == "string" ? v = Rh(f.registered, w, b.className) : b.className != null && (v = b.className + " ");
      var O = Ai(p.concat(w), f.registered, x);
      v += f.key + "-" + O.name, s !== void 0 && (v += " " + s);
      var $ = u && l === void 0 ? ll(S) : c, M = {};
      for (var m in b)
        u && m === "as" || $(m) && (M[m] = b[m]);
      return M.className = v, C && (M.ref = C), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Wh, {
        cache: f,
        serialized: O,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ T.createElement(S, M));
    });
    return y.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = p, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return s === void 0 && zh ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), y.withComponent = function(b, f) {
      return e(b, ui({}, n, f, {
        shouldForwardProp: cl(y, f, !0)
      })).apply(void 0, p);
    }, y;
  };
}, Hh = [
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
], zn = Vh.bind();
Hh.forEach(function(e) {
  zn[e] = zn(e);
});
const Uh = zn.div`
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
var oo = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e))(oo || {}), go = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.AUTOCOMPLETE = "autocomplete", e))(go || {});
function Yh(e, t, n) {
  return (r, i) => {
    const a = r[e], s = i[e];
    try {
      if (n)
        return n(a, s);
      if (t === oo.NUMBER) {
        const l = Number(a), c = Number(s);
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid number for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      } else if (t === oo.DATE) {
        const l = new Date(a).getTime(), c = new Date(s).getTime();
        return isNaN(l) || isNaN(c) ? (console.warn("Invalid date for sorting:", { a, b: s }), isNaN(l) ? 1 : -1) : l - c;
      }
      return t === oo.STRING || !t ? String(a).localeCompare(String(s)) : 0;
    } catch (l) {
      return console.error("Error in sorting:", l), 0;
    }
  };
}
const qh = ({
  columns: e,
  rows: t,
  defaultSortColumns: n
}) => {
  const [r, i] = Ot(n ?? []);
  return {
    sortedRows: at(() => r.length === 0 ? t : [...t].sort((s, l) => {
      for (const c of r) {
        const u = e.find((h) => h.key === c.columnKey), p = Yh(
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
function Nn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
var Ba = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pa, ul;
function Gh() {
  if (ul) return pa;
  ul = 1;
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
  return pa = i() ? Object.assign : function(a, s) {
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
  }, pa;
}
var ma, dl;
function ds() {
  if (dl) return ma;
  dl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ma = e, ma;
}
var ha, fl;
function Cu() {
  return fl || (fl = 1, ha = Function.call.bind(Object.prototype.hasOwnProperty)), ha;
}
var ga, pl;
function Kh() {
  if (pl) return ga;
  pl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ds(), n = {}, r = Cu();
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
  }, ga = i, ga;
}
var ba, ml;
function Xh() {
  if (ml) return ba;
  ml = 1;
  var e = ls, t = Gh(), n = ds(), r = Cu(), i = Kh(), a = function() {
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
  return ba = function(l, c) {
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
      any: S(),
      arrayOf: v,
      element: w(),
      elementType: x(),
      instanceOf: I,
      node: m(),
      objectOf: $,
      oneOf: O,
      oneOfType: M,
      shape: k,
      exact: N
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
      function re(z, K, _, H, Q, X, ce) {
        if (H = H || h, X = X || _, ce !== n) {
          if (c) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = H + ":" + _;
            !G[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            ue < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), G[ve] = !0, ue++);
          }
        }
        return K[_] == null ? z ? K[_] === null ? new b("The " + Q + " `" + X + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new b("The " + Q + " `" + X + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : U(K, _, H, Q, X);
      }
      var F = re.bind(null, !1);
      return F.isRequired = re.bind(null, !0), F;
    }
    function C(U) {
      function G(ue, re, F, z, K, _) {
        var H = ue[re], Q = B(H);
        if (Q !== U) {
          var X = ee(H);
          return new b(
            "Invalid " + z + " `" + K + "` of type " + ("`" + X + "` supplied to `" + F + "`, expected ") + ("`" + U + "`."),
            { expectedType: U }
          );
        }
        return null;
      }
      return f(G);
    }
    function S() {
      return f(s);
    }
    function v(U) {
      function G(ue, re, F, z, K) {
        if (typeof U != "function")
          return new b("Property `" + K + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var _ = ue[re];
        if (!Array.isArray(_)) {
          var H = B(_);
          return new b("Invalid " + z + " `" + K + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an array."));
        }
        for (var Q = 0; Q < _.length; Q++) {
          var X = U(_, Q, F, z, K + "[" + Q + "]", n);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return f(G);
    }
    function w() {
      function U(G, ue, re, F, z) {
        var K = G[ue];
        if (!l(K)) {
          var _ = B(K);
          return new b("Invalid " + F + " `" + z + "` of type " + ("`" + _ + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(U);
    }
    function x() {
      function U(G, ue, re, F, z) {
        var K = G[ue];
        if (!e.isValidElementType(K)) {
          var _ = B(K);
          return new b("Invalid " + F + " `" + z + "` of type " + ("`" + _ + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(U);
    }
    function I(U) {
      function G(ue, re, F, z, K) {
        if (!(ue[re] instanceof U)) {
          var _ = U.name || h, H = ne(ue[re]);
          return new b("Invalid " + z + " `" + K + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return f(G);
    }
    function O(U) {
      if (!Array.isArray(U))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function G(ue, re, F, z, K) {
        for (var _ = ue[re], H = 0; H < U.length; H++)
          if (y(_, U[H]))
            return null;
        var Q = JSON.stringify(U, function(ce, W) {
          var ve = ee(W);
          return ve === "symbol" ? String(W) : W;
        });
        return new b("Invalid " + z + " `" + K + "` of value `" + String(_) + "` " + ("supplied to `" + F + "`, expected one of " + Q + "."));
      }
      return f(G);
    }
    function $(U) {
      function G(ue, re, F, z, K) {
        if (typeof U != "function")
          return new b("Property `" + K + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var _ = ue[re], H = B(_);
        if (H !== "object")
          return new b("Invalid " + z + " `" + K + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an object."));
        for (var Q in _)
          if (r(_, Q)) {
            var X = U(_, Q, F, z, K + "." + Q, n);
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
      function re(F, z, K, _, H) {
        for (var Q = [], X = 0; X < U.length; X++) {
          var ce = U[X], W = ce(F, z, K, _, H, n);
          if (W == null)
            return null;
          W.data && r(W.data, "expectedType") && Q.push(W.data.expectedType);
        }
        var ve = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new b("Invalid " + _ + " `" + H + "` supplied to " + ("`" + K + "`" + ve + "."));
      }
      return f(re);
    }
    function m() {
      function U(G, ue, re, F, z) {
        return V(G[ue]) ? null : new b("Invalid " + F + " `" + z + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return f(U);
    }
    function P(U, G, ue, re, F) {
      return new b(
        (U || "React class") + ": " + G + " type `" + ue + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function k(U) {
      function G(ue, re, F, z, K) {
        var _ = ue[re], H = B(_);
        if (H !== "object")
          return new b("Invalid " + z + " `" + K + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var Q in U) {
          var X = U[Q];
          if (typeof X != "function")
            return P(F, z, K, Q, ee(X));
          var ce = X(_, Q, F, z, K + "." + Q, n);
          if (ce)
            return ce;
        }
        return null;
      }
      return f(G);
    }
    function N(U) {
      function G(ue, re, F, z, K) {
        var _ = ue[re], H = B(_);
        if (H !== "object")
          return new b("Invalid " + z + " `" + K + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        var Q = t({}, ue[re], U);
        for (var X in Q) {
          var ce = U[X];
          if (r(U, X) && typeof ce != "function")
            return P(F, z, K, X, ee(ce));
          if (!ce)
            return new b(
              "Invalid " + z + " `" + K + "` key `" + X + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(ue[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(U), null, "  ")
            );
          var W = ce(_, X, F, z, K + "." + X, n);
          if (W)
            return W;
        }
        return null;
      }
      return f(G);
    }
    function V(U) {
      switch (typeof U) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !U;
        case "object":
          if (Array.isArray(U))
            return U.every(V);
          if (U === null || l(U))
            return !0;
          var G = p(U);
          if (G) {
            var ue = G.call(U), re;
            if (G !== U.entries) {
              for (; !(re = ue.next()).done; )
                if (!V(re.value))
                  return !1;
            } else
              for (; !(re = ue.next()).done; ) {
                var F = re.value;
                if (F && !V(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(U, G) {
      return U === "symbol" ? !0 : G ? G["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && G instanceof Symbol : !1;
    }
    function B(U) {
      var G = typeof U;
      return Array.isArray(U) ? "array" : U instanceof RegExp ? "object" : D(G, U) ? "symbol" : G;
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
  }, ba;
}
var ya, hl;
function Zh() {
  if (hl) return ya;
  hl = 1;
  var e = ds();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ya = function() {
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
  }, ya;
}
if (process.env.NODE_ENV !== "production") {
  var Qh = ls, Jh = !0;
  Ba.exports = Xh()(Qh.isElement, Jh);
} else
  Ba.exports = Zh()();
var eg = Ba.exports;
const o = /* @__PURE__ */ Lf(eg);
function tg(e) {
  return e == null || Object.keys(e).length === 0;
}
function Su(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(tg(i) ? n : i) : t;
  return /* @__PURE__ */ R.jsx(Fh, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (Su.propTypes = {
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
function Tu(e, t) {
  const n = zn(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function ng(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const gl = [];
function bl(e) {
  return gl[0] = e, Ai(gl);
}
function In(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Eu(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || !In(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Eu(e[n]);
  }), t;
}
function $t(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return In(e) && In(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ T.isValidElement(t[i]) ? r[i] = t[i] : In(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && In(e[i]) ? r[i] = $t(e[i], t[i], n) : n.clone ? r[i] = In(t[i]) ? Eu(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const rg = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function og(e) {
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
  } = e, a = rg(t), s = Object.keys(a);
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
function ig(e, t) {
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
function ag(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function sg(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Nn(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(a);
}
function lg(e) {
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
const cg = {
  borderRadius: 4
}, er = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function io(e, t) {
  return t ? $t(e, t, {
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
}, yl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ji[e]}px)`
}, ug = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : ji[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Wn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || yl;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || yl;
    return Object.keys(t).reduce((s, l) => {
      if (ag(a.keys, l)) {
        const c = sg(r.containerQueries ? r : ug, l);
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
function dg(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function fg(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Nn(7));
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
    return Wn(s, l, (p) => {
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
function pg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const mg = {
  m: "margin",
  p: "padding"
}, hg = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, vl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, gg = pg((e) => {
  if (e.length > 2)
    if (vl[e])
      e = vl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = mg[t], i = hg[n] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Li = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _i = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], bg = [...Li, ..._i];
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
function fs(e) {
  return Mo(e, "spacing", 8, "spacing");
}
function No(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function yg(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = No(t, n), r), {});
}
function vg(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = gg(n), a = yg(i, r), s = e[n];
  return Wn(e, s, a);
}
function Ou(e, t) {
  const n = fs(e.theme);
  return Object.keys(e).map((r) => vg(e, t, r, n)).reduce(io, {});
}
function ht(e) {
  return Ou(e, Li);
}
ht.propTypes = process.env.NODE_ENV !== "production" ? Li.reduce((e, t) => (e[t] = er, e), {}) : {};
ht.filterProps = Li;
function gt(e) {
  return Ou(e, _i);
}
gt.propTypes = process.env.NODE_ENV !== "production" ? _i.reduce((e, t) => (e[t] = er, e), {}) : {};
gt.filterProps = _i;
process.env.NODE_ENV !== "production" && bg.reduce((e, t) => (e[t] = er, e), {});
function Ru(e = 8, t = fs({
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
  }), r), {}), n = (r) => Object.keys(r).reduce((i, a) => t[a] ? io(i, t[a](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function cn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function gn(e, t) {
  return vt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const xg = gn("border", cn), wg = gn("borderTop", cn), Cg = gn("borderRight", cn), Sg = gn("borderBottom", cn), Tg = gn("borderLeft", cn), Eg = gn("borderColor"), Og = gn("borderTopColor"), Rg = gn("borderRightColor"), Pg = gn("borderBottomColor"), Ig = gn("borderLeftColor"), kg = gn("outline", cn), $g = gn("outlineColor"), zi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Mo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: No(t, r)
    });
    return Wn(e, e.borderRadius, n);
  }
  return null;
};
zi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: er
} : {};
zi.filterProps = ["borderRadius"];
Bi(xg, wg, Cg, Sg, Tg, Eg, Og, Rg, Pg, Ig, zi, kg, $g);
const Wi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Mo(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: No(t, r)
    });
    return Wn(e, e.gap, n);
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
    return Wn(e, e.columnGap, n);
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
    return Wn(e, e.rowGap, n);
  }
  return null;
};
Hi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: er
} : {};
Hi.filterProps = ["rowGap"];
const Mg = vt({
  prop: "gridColumn"
}), Ng = vt({
  prop: "gridRow"
}), Dg = vt({
  prop: "gridAutoFlow"
}), Ag = vt({
  prop: "gridAutoColumns"
}), jg = vt({
  prop: "gridAutoRows"
}), Fg = vt({
  prop: "gridTemplateColumns"
}), Lg = vt({
  prop: "gridTemplateRows"
}), _g = vt({
  prop: "gridTemplateAreas"
}), Bg = vt({
  prop: "gridArea"
});
Bi(Wi, Vi, Hi, Mg, Ng, Dg, Ag, jg, Fg, Lg, _g, Bg);
function Or(e, t) {
  return t === "grey" ? t : e;
}
const zg = vt({
  prop: "color",
  themeKey: "palette",
  transform: Or
}), Wg = vt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Or
}), Vg = vt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Or
});
Bi(zg, Wg, Vg);
function Xt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Hg = vt({
  prop: "width",
  transform: Xt
}), ps = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const r = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || ji[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Xt(n)
      };
    };
    return Wn(e, e.maxWidth, t);
  }
  return null;
};
ps.filterProps = ["maxWidth"];
const Ug = vt({
  prop: "minWidth",
  transform: Xt
}), Yg = vt({
  prop: "height",
  transform: Xt
}), qg = vt({
  prop: "maxHeight",
  transform: Xt
}), Gg = vt({
  prop: "minHeight",
  transform: Xt
});
vt({
  prop: "size",
  cssProperty: "width",
  transform: Xt
});
vt({
  prop: "size",
  cssProperty: "height",
  transform: Xt
});
const Kg = vt({
  prop: "boxSizing"
});
Bi(Hg, ps, Ug, Yg, qg, Gg, Kg);
const Do = {
  // borders
  border: {
    themeKey: "borders",
    transform: cn
  },
  borderTop: {
    themeKey: "borders",
    transform: cn
  },
  borderRight: {
    themeKey: "borders",
    transform: cn
  },
  borderBottom: {
    themeKey: "borders",
    transform: cn
  },
  borderLeft: {
    themeKey: "borders",
    transform: cn
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
    transform: cn
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
    transform: Xt
  },
  maxWidth: {
    style: ps
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
function Xg(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Zg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qg() {
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
    return p ? p(s) : Wn(s, r, (y) => {
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
      const u = dg(i.breakpoints), d = Object.keys(u);
      let p = u;
      return Object.keys(c).forEach((h) => {
        const g = Zg(c[h], i);
        if (g != null)
          if (typeof g == "object")
            if (a[h])
              p = io(p, e(h, g, i, a));
            else {
              const y = Wn({
                theme: i
              }, g, (b) => ({
                [h]: b
              }));
              Xg(y, g) ? p[h] = t({
                sx: g,
                theme: i
              }) : p = io(p, y);
            }
          else
            p = io(p, e(h, g, i, a));
      }), ig(i, fg(d, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const ur = Qg();
ur.filterProps = ["sx"];
function Jg(e, t) {
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
function ms(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = og(n), c = Ru(i);
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
      ...cg,
      ...a
    }
  }, s);
  return u = lg(u), u.applyStyles = Jg, u = t.reduce((d, p) => $t(d, p), u), u.unstable_sxConfig = {
    ...Do,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return ur({
      sx: p,
      theme: this
    });
  }, u;
}
function eb(e) {
  return Object.keys(e).length === 0;
}
function tb(e = null) {
  const t = T.useContext(cs);
  return !t || eb(t) ? e : t;
}
const nb = ms();
function hs(e = nb) {
  return tb(e);
}
function Pu({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = hs(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ R.jsx(Su, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Pu.propTypes = {
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
const rb = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Do;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function ob(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = rb(n);
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
const xl = (e) => e, ib = () => {
  let e = xl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = xl;
    }
  };
}, Iu = ib();
function ab(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = Tu("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(ur);
  return /* @__PURE__ */ T.forwardRef(function(c, u) {
    const d = hs(n), {
      className: p,
      component: h = "div",
      ...g
    } = ob(c);
    return /* @__PURE__ */ R.jsx(a, {
      as: h,
      ref: u,
      className: ye(p, i ? i(r) : r),
      theme: t && d[t] || d,
      ...g
    });
  });
}
const sb = {
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
  const r = sb[t];
  return r ? `${n}-${r}` : `${Iu.generate(e)}-${t}`;
}
function De(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Le(e, i, n);
  }), r;
}
var za = { exports: {} }, Ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wl;
function lb() {
  if (wl) return Ue;
  wl = 1;
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
var Cl;
function cb() {
  return Cl || (Cl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, b = !1, f = !1, C = !1, S = !1, v;
    v = Symbol.for("react.module.reference");
    function w(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === i || S || A === r || A === u || A === d || C || A === g || y || b || f || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === p || A.$$typeof === a || A.$$typeof === s || A.$$typeof === c || // This needs to include all possible module reference object
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
    var I = s, O = a, $ = e, M = c, m = n, P = h, k = p, N = t, V = i, D = r, B = u, ee = d, Z = !1, ne = !1;
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
    function z(A) {
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
    function W(A) {
      return x(A) === u;
    }
    function ve(A) {
      return x(A) === d;
    }
    Ye.ContextConsumer = I, Ye.ContextProvider = O, Ye.Element = $, Ye.ForwardRef = M, Ye.Fragment = m, Ye.Lazy = P, Ye.Memo = k, Ye.Portal = N, Ye.Profiler = V, Ye.StrictMode = D, Ye.Suspense = B, Ye.SuspenseList = ee, Ye.isAsyncMode = U, Ye.isConcurrentMode = G, Ye.isContextConsumer = ue, Ye.isContextProvider = re, Ye.isElement = F, Ye.isForwardRef = z, Ye.isFragment = K, Ye.isLazy = _, Ye.isMemo = H, Ye.isPortal = Q, Ye.isProfiler = X, Ye.isStrictMode = ce, Ye.isSuspense = W, Ye.isSuspenseList = ve, Ye.isValidElementType = w, Ye.typeOf = x;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? za.exports = lb() : za.exports = cb();
var Sl = za.exports;
function ku(e, t = "") {
  return e.displayName || e.name || t;
}
function Tl(e, t, n) {
  const r = ku(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function ub(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ku(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Sl.ForwardRef:
          return Tl(e, e.render, "ForwardRef");
        case Sl.Memo:
          return Tl(e, e.type, "memo");
        default:
          return;
      }
  }
}
function $u(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: bl(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = bl(i.style));
  }), r;
}
const db = ms();
function va(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function fb(e) {
  return e ? (t, n) => n[e] : null;
}
function pb(e, t, n) {
  e.theme = bb(e.theme) ? n : e.theme[t] || e.theme;
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
    return Mu(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Mu(e, t, n = []) {
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
function mb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = db,
    rootShouldForwardProp: r = va,
    slotShouldForwardProp: i = va
  } = e;
  function a(l) {
    pb(l, t, n);
  }
  return (l, c = {}) => {
    ng(l, (x) => x.filter((I) => I !== ur));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = fb(Nu(d)),
      ...y
    } = c, b = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), f = h || !1;
    let C = va;
    d === "Root" || d === "root" ? C = r : d ? C = i : yb(l) && (C = void 0);
    const S = Tu(l, {
      shouldForwardProp: C,
      label: gb(u, d),
      ...y
    }), v = (x) => {
      if (typeof x == "function" && x.__emotion_real !== x)
        return function(O) {
          return oi(O, x);
        };
      if (In(x)) {
        const I = $u(x);
        return I.variants ? function($) {
          return oi($, I);
        } : I.style;
      }
      return x;
    }, w = (...x) => {
      const I = [], O = x.map(v), $ = [];
      if (I.push(a), u && g && $.push(function(k) {
        var B, ee;
        const V = (ee = (B = k.theme.components) == null ? void 0 : B[u]) == null ? void 0 : ee.styleOverrides;
        if (!V)
          return null;
        const D = {};
        for (const Z in V)
          D[Z] = oi(k, V[Z]);
        return g(k, D);
      }), u && !b && $.push(function(k) {
        var D, B;
        const N = k.theme, V = (B = (D = N == null ? void 0 : N.components) == null ? void 0 : D[u]) == null ? void 0 : B.variants;
        return V ? Mu(k, V) : null;
      }), f || $.push(ur), Array.isArray(O[0])) {
        const P = O.shift(), k = new Array(I.length).fill(""), N = new Array($.length).fill("");
        let V;
        V = [...k, ...P, ...N], V.raw = [...k, ...P.raw, ...N], I.unshift(V);
      }
      const M = [...I, ...O, ...$], m = S(...M);
      return l.muiName && (m.muiName = l.muiName), process.env.NODE_ENV !== "production" && (m.displayName = hb(u, d, l)), m;
    };
    return S.withConfig && (w.withConfig = S.withConfig), w;
  };
}
function hb(e, t, n) {
  return e ? `${e}${pe(t || "")}` : `Styled(${ub(n)})`;
}
function gb(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Nu(t || "Root")}`), n;
}
function bb(e) {
  for (const t in e)
    return !1;
  return !0;
}
function yb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Nu(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Wa(e, t) {
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
              n[i][c] = Wa(a[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Dn = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function vb(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function gs(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), vb(e, t, n);
}
function xb(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Zn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Zn(xb(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Nn(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Nn(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const wb = (e) => {
  const t = Zn(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Jr = (e, t) => {
  try {
    return wb(e);
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
function Du(e) {
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
function Va(e) {
  e = Zn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Zn(Du(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function El(e, t) {
  const n = Va(e), r = Va(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ot(e, t) {
  return e = Zn(e), t = gs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ui(e);
}
function qo(e, t, n) {
  try {
    return ot(e, t);
  } catch {
    return e;
  }
}
function Yi(e, t) {
  if (e = Zn(e), t = gs(t), e.type.includes("hsl"))
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
  if (e = Zn(e), t = gs(t), e.type.includes("hsl"))
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
function Cb(e, t = 0.15) {
  return Va(e) > 0.5 ? Yi(e, t) : qi(e, t);
}
function Go(e, t, n) {
  try {
    return Cb(e, t);
  } catch {
    return e;
  }
}
function An(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Sb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Au(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !Sb(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ao = An(o.element, Au);
Ao.isRequired = An(o.element.isRequired, Au);
function Tb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Eb(e, t, n, r, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !Tb(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const bs = An(o.elementType, Eb), Ob = "exact-prop: ​";
function ju(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ob]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Vn(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const en = o.oneOfType([o.func, o.object]);
function Ol(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Fu(e, t = 166) {
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
function xa(e, t) {
  var n, r, i;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function Qt(e) {
  return e && e.ownerDocument || document;
}
function Hn(e) {
  return Qt(e).defaultView || window;
}
function pi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Rl = 0;
function Rb(e) {
  const [t, n] = T.useState(e), r = e || t;
  return T.useEffect(() => {
    t == null && (Rl += 1, n(`mui-${Rl}`));
  }, [t]), r;
}
const Pb = {
  ...T
}, Pl = Pb.useId;
function bo(e) {
  if (Pl !== void 0) {
    const t = Pl();
    return e ?? t;
  }
  return Rb(e);
}
function Ib(e, t, n, r, i) {
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
  } = T.useRef(e !== void 0), [a, s] = T.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = T.useRef(t);
    T.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = T.useCallback((u) => {
    i || s(u);
  }, []);
  return [l, c];
}
function kn(e) {
  const t = T.useRef(e);
  return Dn(() => {
    t.current = e;
  }), T.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ct(...e) {
  return T.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      pi(n, t);
    });
  }, e);
}
const Il = {};
function Lu(e, t) {
  const n = T.useRef(Il);
  return n.current === Il && (n.current = e(t)), n;
}
const kb = [];
function $b(e) {
  T.useEffect(e, kb);
}
class ys {
  constructor() {
    Wr(this, "currentId", null);
    Wr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Wr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ys();
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
function _u() {
  const e = Lu(ys.create).current;
  return $b(e.disposeEffect), e;
}
function kl(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Bu(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
const Mb = (e) => {
  const t = T.useRef({});
  return T.useEffect(() => {
    t.current = e;
  }), t.current;
};
function Nb(e) {
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
function zu(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = Nb(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Wu(e, t, ...n) {
  return e[t] === void 0 ? null : zu(e, t, ...n);
}
function Ha() {
  return null;
}
Wu.isRequired = zu;
Ha.isRequired = Ha;
const Pr = process.env.NODE_ENV === "production" ? Ha : Wu;
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
function Db(e) {
  return typeof e == "string";
}
function Vu(e, t, n) {
  return e === void 0 || Db(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Hu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function $l(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Uu(e) {
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
  const s = Hu({
    ...i,
    ...r
  }), l = $l(r), c = $l(i), u = t(s), d = ye(u == null ? void 0 : u.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = {
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
function Yu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ua(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : Yu(n, r), {
    props: l,
    internalRef: c
  } = Uu({
    ...a,
    externalSlotProps: s
  }), u = Ct(c, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Vu(t, {
    ...l,
    ref: u
  }, r);
}
function jo(e) {
  var t;
  return parseInt(T.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Ab = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const vs = () => T.useContext(Ab) ?? !1, jb = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function Fb(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? Wa(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Wa(i, r) : r;
}
function Lb({
  props: e,
  name: t
}) {
  const n = T.useContext(jb);
  return Fb({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Ml = {
  theme: void 0
};
function _b(e) {
  let t, n;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== n) && (Ml.theme = i.theme, a = $u(e(Ml)), t = a, n = i.theme), a;
  };
}
function Bb(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Nl = (e, t, n, r = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, zb = (e, t, n) => {
  function r(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  r(e);
}, Wb = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function wa(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, s = {};
  return zb(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, p = Wb(l, c);
        Object.assign(i, {
          [d]: p
        }), Nl(a, l, `var(${d})`, u), Nl(s, l, `var(${d}, ${p})`, u);
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
function Vb(e, t = {}) {
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
  } = wa(c, t);
  let h = p;
  const g = {}, {
    [l]: y,
    ...b
  } = a;
  if (Object.entries(b || {}).forEach(([v, w]) => {
    const {
      vars: x,
      css: I,
      varsWithDefaults: O
    } = wa(w, t);
    h = $t(h, O), g[v] = {
      css: I,
      vars: x
    };
  }), y) {
    const {
      css: v,
      vars: w,
      varsWithDefaults: x
    } = wa(y, t);
    h = $t(h, x), g[l] = {
      css: v,
      vars: w
    };
  }
  function f(v, w) {
    var I, O;
    let x = i;
    if (i === "class" && (x = ".%s"), i === "data" && (x = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (x = `[${i}="%s"]`), v) {
      if (x === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((O = (I = a[v]) == null ? void 0 : I.palette) == null ? void 0 : O.mode) || v})`]: {
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
        v = $t(v, w);
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
        [w]: I,
        ...O
      } = g;
      if (I) {
        const {
          css: m
        } = I, P = (M = ($ = a[w]) == null ? void 0 : $.palette) == null ? void 0 : M.mode, k = !r && P ? {
          colorScheme: P,
          ...m
        } : {
          ...m
        };
        x(n(w, {
          ...k
        }), k);
      }
      return Object.entries(O).forEach(([m, {
        css: P
      }]) => {
        var V, D;
        const k = (D = (V = a[m]) == null ? void 0 : V.palette) == null ? void 0 : D.mode, N = !r && k ? {
          colorScheme: k,
          ...P
        } : {
          ...P
        };
        x(n(m, {
          ...N
        }), N);
      }), v;
    }
  };
}
function Hb(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Gi = "$$material", yo = {
  black: "#000",
  white: "#fff"
}, Ub = {
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
}, Yr = {
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
function qu() {
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
      paper: yo.white,
      default: yo.white
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
const Yb = qu();
function Gu() {
  return {
    text: {
      primary: yo.white,
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
      active: yo.white,
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
const Dl = Gu();
function Al(e, t, n, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = qi(e.main, i) : t === "dark" && (e.dark = Yi(e.main, a)));
}
function qb(e = "light") {
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
function Gb(e = "light") {
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
function Kb(e = "light") {
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
function Xb(e = "light") {
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
function Zb(e = "light") {
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
function Qb(e = "light") {
  return e === "dark" ? {
    main: Yr[400],
    light: Yr[300],
    dark: Yr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Yr[500],
    dark: Yr[900]
  };
}
function xs(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || qb(t), s = e.secondary || Gb(t), l = e.error || Kb(t), c = e.info || Xb(t), u = e.success || Zb(t), d = e.warning || Qb(t);
  function p(b) {
    const f = El(b, Dl.text.primary) >= n ? Dl.text.primary : Yb.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = El(b, f);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${f} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return f;
  }
  const h = ({
    color: b,
    name: f,
    mainShade: C = 500,
    lightShade: S = 300,
    darkShade: v = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[C] && (b.main = b[C]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Nn(11, f ? ` (${f})` : "", C));
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
} });` : Nn(12, f ? ` (${f})` : "", JSON.stringify(b.main)));
    return Al(b, "light", S, r), Al(b, "dark", v, r), b.contrastText || (b.contrastText = p(b.main)), b;
  };
  let g;
  return t === "light" ? g = qu() : t === "dark" && (g = Gu()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), $t({
    // A collection of common colors.
    common: {
      ...yo
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
    grey: Ub,
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
function Jb(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function ey(e, t) {
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
function ty(e) {
  return Math.round(e * 1e5) / 1e5;
}
const jl = {
  textTransform: "uppercase"
}, Fl = '"Roboto", "Helvetica", "Arial", sans-serif';
function ny(e, t) {
  const {
    fontFamily: n = Fl,
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
  const h = r / 14, g = d || ((f) => `${f / c * h}rem`), y = (f, C, S, v, w) => ({
    fontFamily: n,
    fontWeight: f,
    fontSize: g(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Fl ? {
      letterSpacing: `${ty(v / C)}em`
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
    button: y(s, 14, 1.75, 0.4, jl),
    caption: y(a, 12, 1.66, 0.4),
    overline: y(a, 12, 2.66, 1, jl),
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
const ry = 0.2, oy = 0.14, iy = 0.12;
function ct(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ry})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${oy})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${iy})`].join(",");
}
const ay = ["none", ct(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ct(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ct(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ct(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ct(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ct(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ct(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ct(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ct(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ct(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ct(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ct(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ct(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ct(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ct(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ct(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ct(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ct(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ct(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ct(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ct(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ct(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ct(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ct(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], sy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ly = {
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
function Ll(e) {
  return `${Math.round(e)}ms`;
}
function cy(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function uy(e) {
  const t = {
    ...sy,
    ...e.easing
  }, n = {
    ...ly,
    ...e.duration
  };
  return {
    getAutoHeightDuration: cy,
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
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof s == "string" ? s : Ll(s)} ${l} ${typeof c == "string" ? c : Ll(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const dy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function fy(e) {
  return In(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ku(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !fy(l) || s.startsWith("unstable_") ? delete r[s] : In(l) && (r[s] = {
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
function Ya(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Nn(20));
  const d = xs(a), p = ms(e);
  let h = $t(p, {
    mixins: ey(p.breakpoints, r),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ay.slice(),
    typography: ny(d, l),
    transitions: uy(s),
    zIndex: {
      ...dy
    }
  });
  if (h = $t(h, u), h = t.reduce((g, y) => $t(g, y), h), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (b, f) => {
      let C;
      for (C in b) {
        const S = b[C];
        if (g.includes(C) && Object.keys(S).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Le("", C);
            console.error([`MUI: The \`${f}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: S
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
  }, h.toRuntimeSource = Ku, h;
}
function qa(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const py = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = qa(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Xu(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Zu(e) {
  return e === "dark" ? py : [];
}
function my(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, a = xs(t);
  return {
    palette: a,
    opacity: {
      ...Xu(a.mode),
      ...n
    },
    overlays: r || Zu(a.mode),
    ...i
  };
}
function hy(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const gy = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], by = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return gy(e.cssVarPrefix).forEach((l) => {
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
function yy(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function Y(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function eo(e) {
  return !e || !e.startsWith("hsl") ? e : Du(e);
}
function Bn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Jr(eo(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function vy(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const En = (e) => {
  try {
    return e();
  } catch {
  }
}, xy = (e = "mui") => Bb(e);
function Ca(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = my({
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
  } = Ya({
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
      ...Xu(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Zu(i)
  }, s;
}
function wy(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = hy,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, d = Object.keys(n)[0], p = r || (n.light && d !== "light" ? "light" : d), h = xy(a), {
    [p]: g,
    light: y,
    dark: b,
    ...f
  } = n, C = {
    ...f
  };
  let S = g;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Nn(21, p));
  const v = Ca(C, S, u, p);
  y && !C.light && Ca(C, y, void 0, "light"), b && !C.dark && Ca(C, b, void 0, "dark");
  let w = {
    defaultColorScheme: p,
    ...v,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: C,
    font: {
      ...Jb(v.typography),
      ...v.font
    },
    spacing: vy(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach((M) => {
    const m = w.colorSchemes[M].palette, P = (k) => {
      const N = k.split("-"), V = N[1], D = N[2];
      return h(k, m[V][D]);
    };
    if (m.mode === "light" && (Y(m.common, "background", "#fff"), Y(m.common, "onBackground", "#000")), m.mode === "dark" && (Y(m.common, "background", "#000"), Y(m.common, "onBackground", "#fff")), yy(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      Y(m.Alert, "errorColor", nt(m.error.light, 0.6)), Y(m.Alert, "infoColor", nt(m.info.light, 0.6)), Y(m.Alert, "successColor", nt(m.success.light, 0.6)), Y(m.Alert, "warningColor", nt(m.warning.light, 0.6)), Y(m.Alert, "errorFilledBg", P("palette-error-main")), Y(m.Alert, "infoFilledBg", P("palette-info-main")), Y(m.Alert, "successFilledBg", P("palette-success-main")), Y(m.Alert, "warningFilledBg", P("palette-warning-main")), Y(m.Alert, "errorFilledColor", En(() => m.getContrastText(m.error.main))), Y(m.Alert, "infoFilledColor", En(() => m.getContrastText(m.info.main))), Y(m.Alert, "successFilledColor", En(() => m.getContrastText(m.success.main))), Y(m.Alert, "warningFilledColor", En(() => m.getContrastText(m.warning.main))), Y(m.Alert, "errorStandardBg", rt(m.error.light, 0.9)), Y(m.Alert, "infoStandardBg", rt(m.info.light, 0.9)), Y(m.Alert, "successStandardBg", rt(m.success.light, 0.9)), Y(m.Alert, "warningStandardBg", rt(m.warning.light, 0.9)), Y(m.Alert, "errorIconColor", P("palette-error-main")), Y(m.Alert, "infoIconColor", P("palette-info-main")), Y(m.Alert, "successIconColor", P("palette-success-main")), Y(m.Alert, "warningIconColor", P("palette-warning-main")), Y(m.AppBar, "defaultBg", P("palette-grey-100")), Y(m.Avatar, "defaultBg", P("palette-grey-400")), Y(m.Button, "inheritContainedBg", P("palette-grey-300")), Y(m.Button, "inheritContainedHoverBg", P("palette-grey-A100")), Y(m.Chip, "defaultBorder", P("palette-grey-400")), Y(m.Chip, "defaultAvatarColor", P("palette-grey-700")), Y(m.Chip, "defaultIconColor", P("palette-grey-700")), Y(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), Y(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), Y(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), Y(m.LinearProgress, "primaryBg", rt(m.primary.main, 0.62)), Y(m.LinearProgress, "secondaryBg", rt(m.secondary.main, 0.62)), Y(m.LinearProgress, "errorBg", rt(m.error.main, 0.62)), Y(m.LinearProgress, "infoBg", rt(m.info.main, 0.62)), Y(m.LinearProgress, "successBg", rt(m.success.main, 0.62)), Y(m.LinearProgress, "warningBg", rt(m.warning.main, 0.62)), Y(m.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), Y(m.Slider, "primaryTrack", rt(m.primary.main, 0.62)), Y(m.Slider, "secondaryTrack", rt(m.secondary.main, 0.62)), Y(m.Slider, "errorTrack", rt(m.error.main, 0.62)), Y(m.Slider, "infoTrack", rt(m.info.main, 0.62)), Y(m.Slider, "successTrack", rt(m.success.main, 0.62)), Y(m.Slider, "warningTrack", rt(m.warning.main, 0.62));
      const k = Go(m.background.default, 0.8);
      Y(m.SnackbarContent, "bg", k), Y(m.SnackbarContent, "color", En(() => m.getContrastText(k))), Y(m.SpeedDialAction, "fabHoverBg", Go(m.background.paper, 0.15)), Y(m.StepConnector, "border", P("palette-grey-400")), Y(m.StepContent, "border", P("palette-grey-400")), Y(m.Switch, "defaultColor", P("palette-common-white")), Y(m.Switch, "defaultDisabledColor", P("palette-grey-100")), Y(m.Switch, "primaryDisabledColor", rt(m.primary.main, 0.62)), Y(m.Switch, "secondaryDisabledColor", rt(m.secondary.main, 0.62)), Y(m.Switch, "errorDisabledColor", rt(m.error.main, 0.62)), Y(m.Switch, "infoDisabledColor", rt(m.info.main, 0.62)), Y(m.Switch, "successDisabledColor", rt(m.success.main, 0.62)), Y(m.Switch, "warningDisabledColor", rt(m.warning.main, 0.62)), Y(m.TableCell, "border", rt(qo(m.divider, 1), 0.88)), Y(m.Tooltip, "bg", qo(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      Y(m.Alert, "errorColor", rt(m.error.light, 0.6)), Y(m.Alert, "infoColor", rt(m.info.light, 0.6)), Y(m.Alert, "successColor", rt(m.success.light, 0.6)), Y(m.Alert, "warningColor", rt(m.warning.light, 0.6)), Y(m.Alert, "errorFilledBg", P("palette-error-dark")), Y(m.Alert, "infoFilledBg", P("palette-info-dark")), Y(m.Alert, "successFilledBg", P("palette-success-dark")), Y(m.Alert, "warningFilledBg", P("palette-warning-dark")), Y(m.Alert, "errorFilledColor", En(() => m.getContrastText(m.error.dark))), Y(m.Alert, "infoFilledColor", En(() => m.getContrastText(m.info.dark))), Y(m.Alert, "successFilledColor", En(() => m.getContrastText(m.success.dark))), Y(m.Alert, "warningFilledColor", En(() => m.getContrastText(m.warning.dark))), Y(m.Alert, "errorStandardBg", nt(m.error.light, 0.9)), Y(m.Alert, "infoStandardBg", nt(m.info.light, 0.9)), Y(m.Alert, "successStandardBg", nt(m.success.light, 0.9)), Y(m.Alert, "warningStandardBg", nt(m.warning.light, 0.9)), Y(m.Alert, "errorIconColor", P("palette-error-main")), Y(m.Alert, "infoIconColor", P("palette-info-main")), Y(m.Alert, "successIconColor", P("palette-success-main")), Y(m.Alert, "warningIconColor", P("palette-warning-main")), Y(m.AppBar, "defaultBg", P("palette-grey-900")), Y(m.AppBar, "darkBg", P("palette-background-paper")), Y(m.AppBar, "darkColor", P("palette-text-primary")), Y(m.Avatar, "defaultBg", P("palette-grey-600")), Y(m.Button, "inheritContainedBg", P("palette-grey-800")), Y(m.Button, "inheritContainedHoverBg", P("palette-grey-700")), Y(m.Chip, "defaultBorder", P("palette-grey-700")), Y(m.Chip, "defaultAvatarColor", P("palette-grey-300")), Y(m.Chip, "defaultIconColor", P("palette-grey-300")), Y(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), Y(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), Y(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), Y(m.LinearProgress, "primaryBg", nt(m.primary.main, 0.5)), Y(m.LinearProgress, "secondaryBg", nt(m.secondary.main, 0.5)), Y(m.LinearProgress, "errorBg", nt(m.error.main, 0.5)), Y(m.LinearProgress, "infoBg", nt(m.info.main, 0.5)), Y(m.LinearProgress, "successBg", nt(m.success.main, 0.5)), Y(m.LinearProgress, "warningBg", nt(m.warning.main, 0.5)), Y(m.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), Y(m.Slider, "primaryTrack", nt(m.primary.main, 0.5)), Y(m.Slider, "secondaryTrack", nt(m.secondary.main, 0.5)), Y(m.Slider, "errorTrack", nt(m.error.main, 0.5)), Y(m.Slider, "infoTrack", nt(m.info.main, 0.5)), Y(m.Slider, "successTrack", nt(m.success.main, 0.5)), Y(m.Slider, "warningTrack", nt(m.warning.main, 0.5));
      const k = Go(m.background.default, 0.98);
      Y(m.SnackbarContent, "bg", k), Y(m.SnackbarContent, "color", En(() => m.getContrastText(k))), Y(m.SpeedDialAction, "fabHoverBg", Go(m.background.paper, 0.15)), Y(m.StepConnector, "border", P("palette-grey-600")), Y(m.StepContent, "border", P("palette-grey-600")), Y(m.Switch, "defaultColor", P("palette-grey-300")), Y(m.Switch, "defaultDisabledColor", P("palette-grey-600")), Y(m.Switch, "primaryDisabledColor", nt(m.primary.main, 0.55)), Y(m.Switch, "secondaryDisabledColor", nt(m.secondary.main, 0.55)), Y(m.Switch, "errorDisabledColor", nt(m.error.main, 0.55)), Y(m.Switch, "infoDisabledColor", nt(m.info.main, 0.55)), Y(m.Switch, "successDisabledColor", nt(m.success.main, 0.55)), Y(m.Switch, "warningDisabledColor", nt(m.warning.main, 0.55)), Y(m.TableCell, "border", nt(qo(m.divider, 1), 0.68)), Y(m.Tooltip, "bg", qo(m.grey[700], 0.92));
    }
    Bn(m.background, "default"), Bn(m.background, "paper"), Bn(m.common, "background"), Bn(m.common, "onBackground"), Bn(m, "divider"), Object.keys(m).forEach((k) => {
      const N = m[k];
      N && typeof N == "object" && (N.main && Y(m[k], "mainChannel", Jr(eo(N.main))), N.light && Y(m[k], "lightChannel", Jr(eo(N.light))), N.dark && Y(m[k], "darkChannel", Jr(eo(N.dark))), N.contrastText && Y(m[k], "contrastTextChannel", Jr(eo(N.contrastText))), k === "text" && (Bn(m[k], "primary"), Bn(m[k], "secondary")), k === "action" && (N.active && Bn(m[k], "active"), N.selected && Bn(m[k], "selected")));
    });
  }), w = t.reduce((M, m) => $t(M, m), w);
  const x = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: by(w)
  }, {
    vars: I,
    generateThemeVars: O,
    generateStyleSheets: $
  } = Vb(w, x);
  return w.vars = I, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([M, m]) => {
    w[M] = m;
  }), w.generateThemeVars = O, w.generateStyleSheets = $, w.generateSpacing = function() {
    return Ru(u.spacing, fs(this));
  }, w.getColorSchemeSelector = Hb(l), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = s, w.unstable_sxConfig = {
    ...Do,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(m) {
    return ur({
      sx: m,
      theme: this
    });
  }, w.toRuntimeSource = Ku, w;
}
function _l(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: xs({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Qu(e = {}, ...t) {
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
      return Ya(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const p = Ya({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, _l(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, _l(p, "light", u.light)), p;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), wy({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const ws = Qu();
function Cs() {
  const e = hs(ws);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Gi] || e;
}
function Ju(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const tn = (e) => Ju(e) && e !== "classes", me = mb({
  themeId: Gi,
  defaultTheme: ws,
  rootShouldForwardProp: tn
}), Cy = De("MuiBox", ["root"]), Sy = Qu(), ed = ab({
  themeId: Gi,
  defaultTheme: Sy,
  defaultClassName: Cy.root,
  generateClassName: Iu.generate
});
process.env.NODE_ENV !== "production" && (ed.propTypes = {
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
function td(e) {
  return /* @__PURE__ */ R.jsx(Pu, {
    ...e,
    defaultTheme: ws,
    themeId: Gi
  });
}
process.env.NODE_ENV !== "production" && (td.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Ty(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ R.jsx(td, {
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
  return Lb(e);
}
function Ko(e) {
  return parseInt(e, 10) || 0;
}
const Ey = {
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
function Oy(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const nd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l,
    ...c
  } = t, {
    current: u
  } = T.useRef(l != null), d = T.useRef(null), p = Ct(n, d), h = T.useRef(null), g = T.useRef(null), y = T.useCallback(() => {
    const C = d.current, v = Hn(C).getComputedStyle(C);
    if (v.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const w = g.current;
    w.style.width = v.width, w.value = C.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const x = v.boxSizing, I = Ko(v.paddingBottom) + Ko(v.paddingTop), O = Ko(v.borderBottomWidth) + Ko(v.borderTopWidth), $ = w.scrollHeight;
    w.value = "x";
    const M = w.scrollHeight;
    let m = $;
    a && (m = Math.max(Number(a) * M, m)), i && (m = Math.min(Number(i) * M, m)), m = Math.max(m, M);
    const P = m + (x === "border-box" ? I + O : 0), k = Math.abs(m - $) <= 1;
    return {
      outerHeightStyle: P,
      overflowing: k
    };
  }, [i, a, t.placeholder]), b = T.useCallback(() => {
    const C = y();
    if (Oy(C))
      return;
    const S = C.outerHeightStyle, v = d.current;
    h.current !== S && (h.current = S, v.style.height = `${S}px`), v.style.overflow = C.overflowing ? "hidden" : "";
  }, [y]);
  Dn(() => {
    const C = () => {
      b();
    };
    let S;
    const v = () => {
      cancelAnimationFrame(S), S = requestAnimationFrame(() => {
        C();
      });
    }, w = Fu(C), x = d.current, I = Hn(x);
    I.addEventListener("resize", w);
    let O;
    return typeof ResizeObserver < "u" && (O = new ResizeObserver(process.env.NODE_ENV === "test" ? v : C), O.observe(x)), () => {
      w.clear(), cancelAnimationFrame(S), I.removeEventListener("resize", w), O && O.disconnect();
    };
  }, [y, b]), Dn(() => {
    b();
  });
  const f = (C) => {
    u || b(), r && r(C);
  };
  return /* @__PURE__ */ R.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ R.jsx("textarea", {
      value: l,
      onChange: f,
      ref: p,
      rows: a,
      style: s,
      ...c
    }), /* @__PURE__ */ R.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: g,
      tabIndex: -1,
      style: {
        ...Ey.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (nd.propTypes = {
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
function _r({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const Ki = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ki.displayName = "FormControlContext");
function fr() {
  return T.useContext(Ki);
}
const je = _b;
function Bl(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function hi(e, t = !1) {
  return e && (Bl(e.value) && e.value !== "" || t && Bl(e.defaultValue) && e.defaultValue !== "");
}
function Ry(e) {
  return e.startAdornment;
}
function Py(e) {
  return Le("MuiInputBase", e);
}
const Gt = De("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var zl;
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
}, Iy = (e) => {
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
  return Ke(b, Py, t);
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
})), Wl = Ty({
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
}), Fo = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    inputComponent: S = "input",
    inputProps: v = {},
    inputRef: w,
    margin: x,
    maxRows: I,
    minRows: O,
    multiline: $ = !1,
    name: M,
    onBlur: m,
    onChange: P,
    onClick: k,
    onFocus: N,
    onKeyDown: V,
    onKeyUp: D,
    placeholder: B,
    readOnly: ee,
    renderSuffix: Z,
    rows: ne,
    size: U,
    slotProps: G = {},
    slots: ue = {},
    startAdornment: re,
    type: F = "text",
    value: z,
    ...K
  } = r, _ = v.value != null ? v.value : z, {
    current: H
  } = T.useRef(_ != null), Q = T.useRef(), X = T.useCallback((Pe) => {
    process.env.NODE_ENV !== "production" && Pe && Pe.nodeName !== "INPUT" && !Pe.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ce = Ct(Q, w, v.ref, X), [W, ve] = T.useState(!1), A = fr();
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (A)
      return A.registerEffect();
  }, [A]);
  const de = _r({
    props: r,
    muiFormControl: A,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  de.focused = A ? A.focused : W, T.useEffect(() => {
    !A && h && W && (ve(!1), m && m());
  }, [A, h, W, m]);
  const ie = A && A.onFilled, $e = A && A.onEmpty, be = T.useCallback((Pe) => {
    hi(Pe) ? ie && ie() : $e && $e();
  }, [ie, $e]);
  Dn(() => {
    H && be({
      value: _
    });
  }, [_, be, H]);
  const Te = (Pe) => {
    N && N(Pe), v.onFocus && v.onFocus(Pe), A && A.onFocus ? A.onFocus(Pe) : ve(!0);
  }, Fe = (Pe) => {
    m && m(Pe), v.onBlur && v.onBlur(Pe), A && A.onBlur ? A.onBlur(Pe) : ve(!1);
  }, Ee = (Pe, ...ft) => {
    if (!H) {
      const Mt = Pe.target || Q.current;
      if (Mt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Nn(1));
      be({
        value: Mt.value
      });
    }
    v.onChange && v.onChange(Pe, ...ft), P && P(Pe, ...ft);
  };
  T.useEffect(() => {
    be(Q.current);
  }, []);
  const We = (Pe) => {
    Q.current && Pe.currentTarget === Pe.target && Q.current.focus(), k && k(Pe);
  };
  let fe = S, _e = v;
  $ && fe === "input" && (ne ? (process.env.NODE_ENV !== "production" && (O || I) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), _e = {
    type: void 0,
    minRows: ne,
    maxRows: ne,
    ..._e
  }) : _e = {
    type: void 0,
    maxRows: I,
    minRows: O,
    ..._e
  }, fe = nd);
  const bt = (Pe) => {
    be(Pe.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  T.useEffect(() => {
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
  }, Qe = Iy(xt), Je = ue.root || u.Root || Qi, Re = G.root || d.root || {}, st = ue.input || u.Input || Ji;
  return _e = {
    ..._e,
    ...G.input ?? d.input
  }, /* @__PURE__ */ R.jsxs(T.Fragment, {
    children: [!g && typeof Wl == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (zl || (zl = /* @__PURE__ */ R.jsx(Wl, {}))), /* @__PURE__ */ R.jsxs(Je, {
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
      children: [re, /* @__PURE__ */ R.jsx(Ki.Provider, {
        value: null,
        children: /* @__PURE__ */ R.jsx(st, {
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
          onKeyDown: V,
          onKeyUp: D,
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
  inputComponent: bs,
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
function ky(e) {
  return typeof e.main == "string";
}
function $y(e, t = []) {
  if (!ky(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function dn(e = []) {
  return ([, t]) => t && $y(t, e);
}
function My(e) {
  return Le("MuiInput", e);
}
const Kn = {
  ...Gt,
  ...De("MuiInput", ["root", "underline", "input"])
}, Ny = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ke({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, My, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Dy = me(Qi, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
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
        [`&.${Kn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Kn.error}`]: {
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
        [`&:hover:not(.${Kn.disabled}, .${Kn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Kn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(dn()).map(([r]) => ({
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
})), Ay = me(Ji, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Zi
})({}), vo = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, y = Ny(r), f = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, C = d ?? s ? $t(d ?? s, f) : f, S = p.root ?? a.Root ?? Dy, v = p.input ?? a.Input ?? Ay;
  return /* @__PURE__ */ R.jsx(Fo, {
    slots: {
      root: S,
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
process.env.NODE_ENV !== "production" && (vo.propTypes = {
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
vo && (vo.muiName = "Input");
function jy(e) {
  return Le("MuiFilledInput", e);
}
const Kt = {
  ...Gt,
  ...De("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Fy(e) {
  return Le("MuiSvgIcon", e);
}
De("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ly = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(n)}`]
  };
  return Ke(i, Fy, r);
}, _y = me("svg", {
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
})), xo = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, y = /* @__PURE__ */ T.isValidElement(i) && i.type === "svg", b = {
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
  const C = Ly(b);
  return /* @__PURE__ */ R.jsxs(_y, {
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
    children: [y ? i.props.children : i, p ? /* @__PURE__ */ R.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
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
xo && (xo.muiName = "SvgIcon");
function Fn(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ R.jsx(xo, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = xo.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
}
const By = (e) => {
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
  }, u = Ke(c, jy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, zy = me(Qi, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
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
    }, ...Object.entries(e.palette).filter(dn()).map(([s]) => {
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
})), Wy = me(Ji, {
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
}))), wo = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, f = By(r), C = {
    root: {
      ownerState: b
    },
    input: {
      ownerState: b
    }
  }, S = p ?? s ? $t(C, p ?? s) : C, v = h.root ?? a.Root ?? zy, w = h.input ?? a.Input ?? Wy;
  return /* @__PURE__ */ R.jsx(Fo, {
    slots: {
      root: v,
      input: w
    },
    componentsProps: S,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: n,
    type: g,
    ...y,
    classes: f
  });
});
process.env.NODE_ENV !== "production" && (wo.propTypes = {
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
wo && (wo.muiName = "Input");
var Vl;
const Vy = me("fieldset", {
  shouldForwardProp: tn
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
}), Hy = me("legend", {
  shouldForwardProp: tn
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
function rd(e) {
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
  return /* @__PURE__ */ R.jsx(Vy, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...s,
    children: /* @__PURE__ */ R.jsx(Hy, {
      ownerState: c,
      children: l ? /* @__PURE__ */ R.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Vl || (Vl = /* @__PURE__ */ R.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (rd.propTypes = {
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
function Uy(e) {
  return Le("MuiOutlinedInput", e);
}
const sn = {
  ...Gt,
  ...De("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, Yy = (e) => {
  const {
    classes: t
  } = e, r = Ke({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Uy, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, qy = me(Qi, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
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
    [`&:hover .${sn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${sn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${sn.focused} .${sn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(dn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${sn.focused} .${sn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${sn.error} .${sn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${sn.disabled} .${sn.notchedOutline}`]: {
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
})), Gy = me(rd, {
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
})), Ky = me(Ji, {
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
}))), Co = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = i, y = Yy(i), b = fr(), f = _r({
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
  }, S = p.root ?? a.Root ?? qy, v = p.input ?? a.Input ?? Ky;
  return /* @__PURE__ */ R.jsx(Fo, {
    slots: {
      root: S,
      input: v
    },
    renderSuffix: (w) => /* @__PURE__ */ R.jsx(Gy, {
      ownerState: C,
      className: y.notchedOutline,
      label: c != null && c !== "" && f.required ? r || (r = /* @__PURE__ */ R.jsxs(T.Fragment, {
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
Co && (Co.muiName = "Input");
function Xy(e) {
  return Le("MuiFormLabel", e);
}
const ao = De("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Zy = (e) => {
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
  return Ke(c, Xy, t);
}, Qy = me("label", {
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
  variants: [...Object.entries(e.palette).filter(dn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${ao.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${ao.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${ao.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Jy = me("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(je(({
  theme: e
}) => ({
  [`&.${ao.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), od = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, y = fr(), b = _r({
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
  }, C = Zy(f);
  return /* @__PURE__ */ R.jsxs(Qy, {
    as: l,
    ownerState: f,
    className: ye(C.root, a),
    ref: n,
    ...g,
    children: [i, b.required && /* @__PURE__ */ R.jsxs(Jy, {
      ownerState: f,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (od.propTypes = {
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
function ev(e) {
  return Le("MuiInputLabel", e);
}
De("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const tv = (e) => {
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
  }, u = Ke(c, ev, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, nv = me(od, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ao.asterisk}`]: t.asterisk
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
}))), id = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  const h = _r({
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
  }, y = tv(g);
  return /* @__PURE__ */ R.jsx(nv, {
    "data-shrink": p,
    ref: n,
    className: ye(y.root, c),
    ...u,
    ownerState: g,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (id.propTypes = {
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
function rv(e) {
  return Le("MuiFormControl", e);
}
De("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const ov = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${pe(n)}`, r && "fullWidth"]
  };
  return Ke(i, rv, t);
}, iv = me("div", {
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
}), ad = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, S = {
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
  }, v = ov(S), [w, x] = T.useState(() => {
    let V = !1;
    return i && T.Children.forEach(i, (D) => {
      if (!xa(D, ["Input", "Select"]))
        return;
      const B = xa(D, ["Select"]) ? D.props.input : D;
      B && Ry(B.props) && (V = !0);
    }), V;
  }), [I, O] = T.useState(() => {
    let V = !1;
    return i && T.Children.forEach(i, (D) => {
      xa(D, ["Input", "Select"]) && (hi(D.props, !0) || hi(D.props.inputProps, !0)) && (V = !0);
    }), V;
  }), [$, M] = T.useState(!1);
  c && $ && M(!1);
  const m = d !== void 0 && !c ? d : $;
  let P;
  const k = T.useRef(!1);
  process.env.NODE_ENV !== "production" && (P = () => (k.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), k.current = !0, () => {
    k.current = !1;
  }));
  const N = T.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: x,
    color: s,
    disabled: c,
    error: u,
    filled: I,
    focused: m,
    fullWidth: p,
    hiddenLabel: h,
    size: b,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      O(!1);
    },
    onFilled: () => {
      O(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: P,
    required: y,
    variant: f
  }), [w, s, c, u, I, m, p, h, P, y, b, f]);
  return /* @__PURE__ */ R.jsx(Ki.Provider, {
    value: N,
    children: /* @__PURE__ */ R.jsx(iv, {
      as: l,
      ownerState: S,
      className: ye(v.root, a),
      ref: n,
      ...C,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ad.propTypes = {
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
function av(e) {
  return Le("MuiFormHelperText", e);
}
const Hl = De("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Ul;
const sv = (e) => {
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
  return Ke(u, av, t);
}, lv = me("p", {
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
  [`&.${Hl.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Hl.error}`]: {
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
}))), sd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, b = fr(), f = _r({
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
  const S = sv(C);
  return /* @__PURE__ */ R.jsx(lv, {
    as: s,
    className: ye(S.root, a),
    ref: n,
    ...y,
    ownerState: C,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ul || (Ul = /* @__PURE__ */ R.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (sd.propTypes = {
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
var Ga = { exports: {} }, qe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yl;
function cv() {
  if (Yl) return qe;
  Yl = 1;
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
var ql;
function uv() {
  return ql || (ql = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, b = !1, f = !1, C = !1, S = !1, v;
    v = Symbol.for("react.module.reference");
    function w(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === i || S || A === r || A === u || A === d || C || A === g || y || b || f || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === p || A.$$typeof === a || A.$$typeof === s || A.$$typeof === c || // This needs to include all possible module reference object
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
    var I = s, O = a, $ = e, M = c, m = n, P = h, k = p, N = t, V = i, D = r, B = u, ee = d, Z = !1, ne = !1;
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
    function z(A) {
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
    function W(A) {
      return x(A) === u;
    }
    function ve(A) {
      return x(A) === d;
    }
    Ge.ContextConsumer = I, Ge.ContextProvider = O, Ge.Element = $, Ge.ForwardRef = M, Ge.Fragment = m, Ge.Lazy = P, Ge.Memo = k, Ge.Portal = N, Ge.Profiler = V, Ge.StrictMode = D, Ge.Suspense = B, Ge.SuspenseList = ee, Ge.isAsyncMode = U, Ge.isConcurrentMode = G, Ge.isContextConsumer = ue, Ge.isContextProvider = re, Ge.isElement = F, Ge.isForwardRef = z, Ge.isFragment = K, Ge.isLazy = _, Ge.isMemo = H, Ge.isPortal = Q, Ge.isProfiler = X, Ge.isStrictMode = ce, Ge.isSuspense = W, Ge.isSuspenseList = ve, Ge.isValidElementType = w, Ge.typeOf = x;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? Ga.exports = cv() : Ga.exports = uv();
var Ss = Ga.exports;
const gi = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (gi.displayName = "ListContext");
function dv(e) {
  return Le("MuiList", e);
}
De("MuiList", ["root", "padding", "dense", "subheader"]);
const fv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ke({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, dv, t);
}, pv = me("ul", {
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
}), ld = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, p = T.useMemo(() => ({
    dense: l
  }), [l]), h = {
    ...r,
    component: s,
    dense: l,
    disablePadding: c
  }, g = fv(h);
  return /* @__PURE__ */ R.jsx(gi.Provider, {
    value: p,
    children: /* @__PURE__ */ R.jsxs(pv, {
      as: s,
      className: ye(g.root, a),
      ref: n,
      ownerState: h,
      ...d,
      children: [u, i]
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
function Sa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Gl(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function cd(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function qr(e, t, n, r, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !cd(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const ud = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = t, g = T.useRef(null), y = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Dn(() => {
    i && g.current.focus();
  }, [i]), T.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: w
    }) => {
      const x = !g.current.style.width;
      if (v.clientHeight < g.current.clientHeight && x) {
        const I = `${Bu(Hn(v))}px`;
        g.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = I, g.current.style.width = `calc(100% + ${I})`;
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
    const O = Qt(w).activeElement;
    if (x === "ArrowDown")
      v.preventDefault(), qr(w, O, u, c, Sa);
    else if (x === "ArrowUp")
      v.preventDefault(), qr(w, O, u, c, Gl);
    else if (x === "Home")
      v.preventDefault(), qr(w, null, u, c, Sa);
    else if (x === "End")
      v.preventDefault(), qr(w, null, u, c, Gl);
    else if (x.length === 1) {
      const $ = y.current, M = x.toLowerCase(), m = performance.now();
      $.keys.length > 0 && (m - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && M !== $.keys[0] && ($.repeating = !1)), $.lastTime = m, $.keys.push(M);
      const P = O && !$.repeating && cd(O, $);
      $.previousKeyMatched && (P || qr(w, O, !1, c, Sa, $)) ? v.preventDefault() : $.previousKeyMatched = !1;
    }
    d && d(v);
  }, f = Ct(g, n);
  let C = -1;
  T.Children.forEach(s, (v, w) => {
    if (!/* @__PURE__ */ T.isValidElement(v)) {
      C === w && (C += 1, C >= s.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ss.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (p === "selectedMenu" && v.props.selected || C === -1) && (C = w), C === w && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (C += 1, C >= s.length && (C = -1));
  });
  const S = T.Children.map(s, (v, w) => {
    if (w === C) {
      const x = {};
      return a && (x.autoFocus = !0), v.props.tabIndex === void 0 && p === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ T.cloneElement(v, x);
    }
    return v;
  });
  return /* @__PURE__ */ R.jsx(ld, {
    role: "menu",
    ref: f,
    className: l,
    onKeyDown: b,
    tabIndex: i ? 0 : -1,
    ...h,
    children: S
  });
});
process.env.NODE_ENV !== "production" && (ud.propTypes = {
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
function dd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ka(e, t);
}
function fd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ka(e, t);
}
const Kl = {
  disabled: !1
};
var mv = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const bi = At.createContext(null);
var hv = function(t) {
  return t.scrollTop;
}, to = "unmounted", or = "exited", ir = "entering", Sr = "entered", Xa = "exiting", Ln = /* @__PURE__ */ function(e) {
  fd(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = i, l = s && !s.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = or, a.appearStatus = ir) : c = Sr : r.unmountOnExit || r.mountOnEnter ? c = to : c = or, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === to ? {
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
      this.props.in ? s !== ir && s !== Sr && (a = ir) : (s === ir || s === Sr) && (a = Xa);
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
          s && hv(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === or && this.setState({
      status: to
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Uo.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), h = l ? p.appear : p.enter;
    if (!i && !s || Kl.disabled) {
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
    if (!a || Kl.disabled) {
      this.safeSetState({
        status: or
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Xa
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
    if (i === to)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = dd(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ At.createElement(bi.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : At.cloneElement(At.Children.only(s), l))
    );
  }, t;
}(At.Component);
Ln.contextType = bi;
Ln.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = mv;
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
Ln.defaultProps = {
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
Ln.UNMOUNTED = to;
Ln.EXITED = or;
Ln.ENTERING = ir;
Ln.ENTERED = Sr;
Ln.EXITING = Xa;
function gv(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ts(e, t) {
  var n = function(a) {
    return t && Qo(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Af.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function bv(e, t) {
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
function yv(e, t) {
  return Ts(e.children, function(n) {
    return Jo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: sr(n, "appear", e),
      enter: sr(n, "enter", e),
      exit: sr(n, "exit", e)
    });
  });
}
function vv(e, t, n) {
  var r = Ts(e.children), i = bv(t, r);
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
var xv = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, wv = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Es = /* @__PURE__ */ function(e) {
  fd(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var s = a.handleExited.bind(gv(a));
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
      children: c ? yv(i, l) : vv(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = Ts(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = ui({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = dd(i, ["component", "childFactory"]), c = this.state.contextValue, u = xv(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ At.createElement(bi.Provider, {
      value: c
    }, u) : /* @__PURE__ */ At.createElement(bi.Provider, {
      value: c
    }, /* @__PURE__ */ At.createElement(a, l, u));
  }, t;
}(At.Component);
Es.propTypes = process.env.NODE_ENV !== "production" ? {
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
Es.defaultProps = wv;
const pd = (e) => e.scrollTop;
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
function Za(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Cv = {
  entering: {
    opacity: 1,
    transform: Za(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ta = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), vi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    TransitionComponent: f = Ln,
    ...C
  } = t, S = _u(), v = T.useRef(), w = Cs(), x = T.useRef(null), I = Ct(x, jo(a), n), O = (D) => (B) => {
    if (D) {
      const ee = x.current;
      B === void 0 ? D(ee) : D(ee, B);
    }
  }, $ = O(d), M = O((D, B) => {
    pd(D);
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
    b === "auto" ? (U = w.transitions.getAutoHeightDuration(D.clientHeight), v.current = U) : U = ee, D.style.transition = [w.transitions.create("opacity", {
      duration: U,
      delay: Z
    }), w.transitions.create("transform", {
      duration: Ta ? U : U * 0.666,
      delay: Z,
      easing: ne
    })].join(","), c && c(D, B);
  }), m = O(u), P = O(g), k = O((D) => {
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
    b === "auto" ? (ne = w.transitions.getAutoHeightDuration(D.clientHeight), v.current = ne) : ne = B, D.style.transition = [w.transitions.create("opacity", {
      duration: ne,
      delay: ee
    }), w.transitions.create("transform", {
      duration: Ta ? ne : ne * 0.666,
      delay: Ta ? ee : ee || ne * 0.333,
      easing: Z
    })].join(","), D.style.opacity = 0, D.style.transform = Za(0.75), p && p(D);
  }), N = O(h), V = (D) => {
    b === "auto" && S.start(v.current || 0, D), r && r(x.current, D);
  };
  return /* @__PURE__ */ R.jsx(f, {
    appear: i,
    in: l,
    nodeRef: x,
    onEnter: M,
    onEntered: m,
    onEntering: $,
    onExit: k,
    onExited: N,
    onExiting: P,
    addEndListener: V,
    timeout: b === "auto" ? null : b,
    ...C,
    children: (D, B) => /* @__PURE__ */ T.cloneElement(a, {
      style: {
        opacity: 0,
        transform: Za(0.75),
        visibility: D === "exited" && !l ? "hidden" : void 0,
        ...Cv[D],
        ...y,
        ...a.props.style
      },
      ref: I,
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
function Sv(e) {
  const t = Qt(e);
  return t.body === e ? Hn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function so(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Xl(e) {
  return parseInt(Hn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Tv(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Zl(e, t, n, r, i) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !a.includes(s), c = !Tv(s);
    l && c && so(s, i);
  });
}
function Ea(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Ev(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Sv(r)) {
      const s = Bu(Hn(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Xl(r) + s}px`;
      const l = Qt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Xl(c) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = Qt(r).body;
    else {
      const s = r.parentElement, l = Hn(r);
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
function Ov(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Rv {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && so(t.modalRef, !1);
    const i = Ov(n);
    Zl(n, t.mount, t.modalRef, i, !0);
    const a = Ea(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Ea(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Ev(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Ea(this.containers, (s) => s.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && so(t.modalRef, n), Zl(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && so(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Pv = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Iv(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function kv(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function $v(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || kv(e));
}
function Mv(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Pv)).forEach((r, i) => {
    const a = Iv(r);
    a === -1 || !$v(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Nv() {
  return !0;
}
function xi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Mv,
    isEnabled: s = Nv,
    open: l
  } = e, c = T.useRef(!1), u = T.useRef(null), d = T.useRef(null), p = T.useRef(null), h = T.useRef(null), g = T.useRef(!1), y = T.useRef(null), b = Ct(jo(t), y), f = T.useRef(null);
  T.useEffect(() => {
    !l || !y.current || (g.current = !n);
  }, [n, l]), T.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = Qt(y.current);
    return y.current.contains(v.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), T.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = Qt(y.current), w = (O) => {
      f.current = O, !(r || !s() || O.key !== "Tab") && v.activeElement === y.current && O.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, x = () => {
      var M, m;
      const O = y.current;
      if (O === null)
        return;
      if (!v.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (O.contains(v.activeElement) || r && v.activeElement !== u.current && v.activeElement !== d.current)
        return;
      if (v.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let $ = [];
      if ((v.activeElement === u.current || v.activeElement === d.current) && ($ = a(y.current)), $.length > 0) {
        const P = !!((M = f.current) != null && M.shiftKey && ((m = f.current) == null ? void 0 : m.key) === "Tab"), k = $[0], N = $[$.length - 1];
        typeof k != "string" && typeof N != "string" && (P ? N.focus() : k.focus());
      } else
        O.focus();
    };
    v.addEventListener("focusin", x), v.addEventListener("keydown", w, !0);
    const I = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(I), v.removeEventListener("focusin", x), v.removeEventListener("keydown", w, !0);
    };
  }, [n, r, i, s, l, a]);
  const C = (v) => {
    p.current === null && (p.current = v.relatedTarget), g.current = !0, h.current = v.target;
    const w = t.props.onFocus;
    w && w(v);
  }, S = (v) => {
    p.current === null && (p.current = v.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ R.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ R.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: b,
      onFocus: C
    }), /* @__PURE__ */ R.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
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
process.env.NODE_ENV !== "production" && (xi.propTypes = ju(xi.propTypes));
function Dv(e) {
  return typeof e == "function" ? e() : e;
}
const So = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = T.useState(null), c = Ct(/* @__PURE__ */ T.isValidElement(r) ? jo(r) : null, n);
  if (Dn(() => {
    a || l(Dv(i) || document.body);
  }, [i, a]), Dn(() => {
    if (s && !a)
      return pi(n, s), () => {
        pi(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ T.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ T.cloneElement(r, u);
    }
    return /* @__PURE__ */ R.jsx(T.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ R.jsx(T.Fragment, {
    children: s && /* @__PURE__ */ Ff.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (So.propTypes = {
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
  container: o.oneOfType([Vn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (So.propTypes = ju(So.propTypes));
function Bt(e, t) {
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
  } = a, g = d[e] || r, y = Yu(p[e], i), {
    props: {
      component: b,
      ...f
    },
    internalRef: C
  } = Uu({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), S = Ct(C, y == null ? void 0 : y.ref, t.ref), v = s ? s(f) : {}, w = {
    ...i,
    ...v
  }, x = e === "root" ? b || u : b, I = Vu(g, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...f,
    ...x && {
      as: x
    },
    ref: S
  }, w);
  return Object.keys(v).forEach((O) => {
    delete I[O];
  }), [g, I];
}
const Av = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, md = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Cs(), i = {
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
    TransitionComponent: S = Ln,
    ...v
  } = t, w = T.useRef(null), x = Ct(w, jo(l), n), I = (V) => (D) => {
    if (V) {
      const B = w.current;
      D === void 0 ? V(B) : V(B, D);
    }
  }, O = I(h), $ = I((V, D) => {
    pd(V);
    const B = yi({
      style: f,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    V.style.webkitTransition = r.transitions.create("opacity", B), V.style.transition = r.transitions.create("opacity", B), d && d(V, D);
  }), M = I(p), m = I(b), P = I((V) => {
    const D = yi({
      style: f,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    V.style.webkitTransition = r.transitions.create("opacity", D), V.style.transition = r.transitions.create("opacity", D), g && g(V);
  }), k = I(y), N = (V) => {
    a && a(w.current, V);
  };
  return /* @__PURE__ */ R.jsx(S, {
    appear: s,
    in: u,
    nodeRef: w,
    onEnter: $,
    onEntered: M,
    onEntering: O,
    onExit: P,
    onExited: k,
    onExiting: m,
    addEndListener: N,
    timeout: C,
    ...v,
    children: (V, D) => /* @__PURE__ */ T.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: V === "exited" && !u ? "hidden" : void 0,
        ...Av[V],
        ...f,
        ...l.props.style
      },
      ref: x,
      ...D
    })
  });
});
process.env.NODE_ENV !== "production" && (md.propTypes = {
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
function jv(e) {
  return Le("MuiBackdrop", e);
}
De("MuiBackdrop", ["root", "invisible"]);
const Fv = (e) => {
  const {
    ownerState: t,
    ...n
  } = e;
  return n;
}, Lv = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ke({
    root: ["root", n && "invisible"]
  }, jv, t);
}, _v = me("div", {
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
}), hd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, C = Lv(f), S = {
    transition: g,
    root: u.Root,
    ...h
  }, v = {
    ...d,
    ...p
  }, w = {
    slots: S,
    slotProps: v
  }, [x, I] = Bt("root", {
    elementType: _v,
    externalForwardedProps: w,
    className: ye(C.root, a),
    ownerState: f
  }), [O, $] = Bt("transition", {
    elementType: md,
    externalForwardedProps: w,
    ownerState: f
  }), M = Fv($);
  return /* @__PURE__ */ R.jsx(O, {
    in: c,
    timeout: y,
    ...b,
    ...M,
    children: /* @__PURE__ */ R.jsx(x, {
      "aria-hidden": !0,
      ...I,
      classes: C,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (hd.propTypes = {
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
function Bv(e) {
  return typeof e == "function" ? e() : e;
}
function zv(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Xo = new Rv();
function Wv(e) {
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
  } = e, p = T.useRef({}), h = T.useRef(null), g = T.useRef(null), y = Ct(g, d), [b, f] = T.useState(!u), C = zv(l);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const v = () => Qt(h.current), w = () => (p.current.modalRef = g.current, p.current.mount = h.current, p.current), x = () => {
    Xo.mount(w(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, I = kn(() => {
    const D = Bv(t) || v().body;
    Xo.add(w(), D), g.current && x();
  }), O = () => Xo.isTopModal(w()), $ = kn((D) => {
    h.current = D, D && (u && O() ? x() : g.current && so(g.current, S));
  }), M = T.useCallback(() => {
    Xo.remove(w(), S);
  }, [S]);
  T.useEffect(() => () => {
    M();
  }, [M]), T.useEffect(() => {
    u ? I() : (!C || !i) && M();
  }, [u, M, C, i, I]);
  const m = (D) => (B) => {
    var ee;
    (ee = D.onKeyDown) == null || ee.call(D, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !O()) && (n || (B.stopPropagation(), c && c(B, "escapeKeyDown")));
  }, P = (D) => (B) => {
    var ee;
    (ee = D.onClick) == null || ee.call(D, B), B.target === B.currentTarget && c && c(B, "backdropClick");
  };
  return {
    getRootProps: (D = {}) => {
      const B = Hu(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const ee = {
        ...B,
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
        ...ee,
        onKeyDown: m(ee),
        ref: y
      };
    },
    getBackdropProps: (D = {}) => {
      const B = D;
      return {
        "aria-hidden": !0,
        ...B,
        onClick: P(B),
        open: u
      };
    },
    getTransitionProps: () => {
      const D = () => {
        f(!1), a && a();
      }, B = () => {
        f(!0), s && s(), i && M();
      };
      return {
        onEnter: Ol(D, l == null ? void 0 : l.props.onEnter),
        onExited: Ol(B, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: y,
    portalRef: $,
    isTopModal: O,
    exited: b,
    hasTransition: C
  };
}
function Vv(e) {
  return Le("MuiModal", e);
}
De("MuiModal", ["root", "hidden", "backdrop"]);
const Hv = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ke({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Vv, r);
}, Uv = me("div", {
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
}))), Yv = me(hd, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), gd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Yv,
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
    disableRestoreFocus: S = !1,
    disableScrollLock: v = !1,
    hideBackdrop: w = !1,
    keepMounted: x = !1,
    onBackdropClick: I,
    onClose: O,
    onTransitionEnter: $,
    onTransitionExited: M,
    open: m,
    slotProps: P = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: N,
    ...V
  } = r, D = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: b,
    disableEscapeKeyDown: f,
    disablePortal: C,
    disableRestoreFocus: S,
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
  } = Wv({
    ...D,
    rootRef: n
  }), re = {
    ...D,
    exited: G
  }, F = Hv(re), z = {};
  if (u.props.tabIndex === void 0 && (z.tabIndex = "-1"), ue) {
    const {
      onEnter: W,
      onExited: ve
    } = Z();
    z.onEnter = W, z.onExited = ve;
  }
  const K = {
    ...V,
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...k
    },
    slotProps: {
      ...g,
      ...P
    }
  }, [_, H] = Bt("root", {
    elementType: Uv,
    externalForwardedProps: K,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: re,
    className: ye(l, F == null ? void 0 : F.root, !re.open && re.exited && (F == null ? void 0 : F.hidden))
  }), [Q, X] = Bt("backdrop", {
    elementType: i,
    externalForwardedProps: K,
    additionalProps: a,
    getSlotProps: (W) => ee({
      ...W,
      onClick: (ve) => {
        I && I(ve), W != null && W.onClick && W.onClick(ve);
      }
    }),
    className: ye(a == null ? void 0 : a.className, F == null ? void 0 : F.backdrop),
    ownerState: re
  }), ce = Ct(a == null ? void 0 : a.ref, X.ref);
  return !x && !m && (!ue || G) ? null : /* @__PURE__ */ R.jsx(So, {
    ref: ne,
    container: d,
    disablePortal: C,
    children: /* @__PURE__ */ R.jsxs(_, {
      ...H,
      children: [!w && i ? /* @__PURE__ */ R.jsx(Q, {
        ...X,
        ref: ce
      }) : null, /* @__PURE__ */ R.jsx(xi, {
        disableEnforceFocus: b,
        disableAutoFocus: y,
        disableRestoreFocus: S,
        isEnabled: U,
        open: m,
        children: /* @__PURE__ */ T.cloneElement(u, z)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (gd.propTypes = {
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
  container: o.oneOfType([Vn, o.func]),
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
function qv(e) {
  return Le("MuiPaper", e);
}
De("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Gv = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ke(a, qv, i);
}, Kv = me("div", {
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
}))), ea = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var g;
  const r = Ze({
    props: t,
    name: "MuiPaper"
  }), i = Cs(), {
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
  }, h = Gv(p);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ R.jsx(Kv, {
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
          "--Paper-overlay": `linear-gradient(${ot("#fff", qa(l))}, ${ot("#fff", qa(l))})`
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
  elevation: An(Pr, (e) => {
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
function Xv(e) {
  return Le("MuiPopover", e);
}
De("MuiPopover", ["root", "paper"]);
function Ql(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Jl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ec(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ii(e) {
  return typeof e == "function" ? e() : e;
}
const Zv = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
    root: ["root"],
    paper: ["paper"]
  }, Xv, t);
}, Qv = me(gd, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), bd = me(ea, {
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
}), yd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    transformOrigin: S = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = vi,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: x,
      ...I
    } = {},
    disableScrollLock: O = !1,
    ...$
  } = r, M = (C == null ? void 0 : C.paper) ?? b, m = T.useRef(), P = {
    ...r,
    anchorOrigin: s,
    anchorReference: c,
    elevation: h,
    marginThreshold: g,
    externalPaperSlotProps: M,
    transformOrigin: S,
    TransitionComponent: v,
    transitionDuration: w,
    TransitionProps: I
  }, k = Zv(P), N = T.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const X = ii(a), ce = X && X.nodeType === 1 ? X : Qt(m.current).body, W = ce.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ve = ce.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ve.top === 0 && ve.left === 0 && ve.right === 0 && ve.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: W.top + Ql(W, s.vertical),
      left: W.left + Jl(W, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), V = T.useCallback((X) => ({
    vertical: Ql(X, S.vertical),
    horizontal: Jl(X, S.horizontal)
  }), [S.horizontal, S.vertical]), D = T.useCallback((X) => {
    const ce = {
      width: X.offsetWidth,
      height: X.offsetHeight
    }, W = V(ce);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ec(W)
      };
    const ve = N();
    let A = ve.top - W.vertical, de = ve.left - W.horizontal;
    const ie = A + ce.height, $e = de + ce.width, be = Hn(ii(a)), Te = be.innerHeight - g, Fe = be.innerWidth - g;
    if (g !== null && A < g) {
      const Ee = A - g;
      A -= Ee, W.vertical += Ee;
    } else if (g !== null && ie > Te) {
      const Ee = ie - Te;
      A -= Ee, W.vertical += Ee;
    }
    if (process.env.NODE_ENV !== "production" && ce.height > Te && ce.height && Te && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ce.height - Te}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && de < g) {
      const Ee = de - g;
      de -= Ee, W.horizontal += Ee;
    } else if ($e > Fe) {
      const Ee = $e - Fe;
      de -= Ee, W.horizontal += Ee;
    }
    return {
      top: `${Math.round(A)}px`,
      left: `${Math.round(de)}px`,
      transformOrigin: ec(W)
    };
  }, [a, c, N, V, g]), [B, ee] = T.useState(y), Z = T.useCallback(() => {
    const X = m.current;
    if (!X)
      return;
    const ce = D(X);
    ce.top !== null && X.style.setProperty("top", ce.top), ce.left !== null && (X.style.left = ce.left), X.style.transformOrigin = ce.transformOrigin, ee(!0);
  }, [D]);
  T.useEffect(() => (O && window.addEventListener("scroll", Z), () => window.removeEventListener("scroll", Z)), [a, O, Z]);
  const ne = (X, ce) => {
    x && x(X, ce), Z();
  }, U = () => {
    ee(!1);
  };
  T.useEffect(() => {
    y && Z();
  }), T.useImperativeHandle(i, () => y ? {
    updatePosition: () => {
      Z();
    }
  } : null, [y, Z]), T.useEffect(() => {
    if (!y)
      return;
    const X = Fu(() => {
      Z();
    }), ce = Hn(a);
    return ce.addEventListener("resize", X), () => {
      X.clear(), ce.removeEventListener("resize", X);
    };
  }, [a, y, Z]);
  let G = w;
  w === "auto" && !v.muiSupportAuto && (G = void 0);
  const ue = p || (a ? Qt(ii(a)).body : void 0), re = {
    slots: f,
    slotProps: {
      ...C,
      paper: M
    }
  }, [F, z] = Bt("paper", {
    elementType: bd,
    externalForwardedProps: re,
    additionalProps: {
      elevation: h,
      className: ye(k.paper, M == null ? void 0 : M.className),
      style: B ? M.style : {
        ...M.style,
        opacity: 0
      }
    },
    ownerState: P
  }), [K, {
    slotProps: _,
    ...H
  }] = Bt("root", {
    elementType: Qv,
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
    className: ye(k.root, d)
  }), Q = Ct(m, z.ref);
  return /* @__PURE__ */ R.jsx(K, {
    ...H,
    ...!mi(K) && {
      slotProps: _,
      disableScrollLock: O
    },
    ...$,
    ref: n,
    children: /* @__PURE__ */ R.jsx(v, {
      appear: !0,
      in: y,
      onEntering: ne,
      onExited: U,
      timeout: G,
      ...I,
      children: /* @__PURE__ */ R.jsx(F, {
        ...z,
        ref: Q,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
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
  anchorEl: An(o.oneOfType([Vn, o.func]), (e) => {
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
  container: o.oneOfType([Vn, o.func]),
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
    component: bs
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
function Jv(e) {
  return Le("MuiMenu", e);
}
De("MuiMenu", ["root", "paper", "list"]);
const e0 = {
  vertical: "top",
  horizontal: "right"
}, t0 = {
  vertical: "top",
  horizontal: "left"
}, n0 = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Jv, t);
}, r0 = me(yd, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), o0 = me(bd, {
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
}), i0 = me(ud, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), vd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    slotProps: S = {},
    ...v
  } = r, w = vs(), x = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: p,
    transitionDuration: g,
    TransitionProps: b,
    variant: f
  }, I = n0(x), O = i && !l && d, $ = T.useRef(null), M = (B, ee) => {
    $.current && $.current.adjustStyleForScrollbar(B, {
      direction: w ? "rtl" : "ltr"
    }), y && y(B, ee);
  }, m = (B) => {
    B.key === "Tab" && (B.preventDefault(), u && u(B, "tabKeyDown"));
  };
  let P = -1;
  T.Children.map(a, (B, ee) => {
    /* @__PURE__ */ T.isValidElement(B) && (process.env.NODE_ENV !== "production" && Ss.isFragment(B) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), B.props.disabled || (f === "selectedMenu" && B.props.selected || P === -1) && (P = ee));
  });
  const k = C.paper ?? o0, N = S.paper ?? p, V = Ua({
    elementType: C.root,
    externalSlotProps: S.root,
    ownerState: x,
    className: [I.root, s]
  }), D = Ua({
    elementType: k,
    externalSlotProps: N,
    ownerState: x,
    className: I.paper
  });
  return /* @__PURE__ */ R.jsx(r0, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? e0 : t0,
    slots: {
      paper: k,
      root: C.root
    },
    slotProps: {
      root: V,
      paper: D
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
    children: /* @__PURE__ */ R.jsx(i0, {
      onKeyDown: m,
      actions: $,
      autoFocus: i && (P === -1 || l),
      autoFocusItem: O,
      variant: f,
      ...c,
      className: ye(I.list, c.className),
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Vn, o.func]),
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
function a0(e) {
  return Le("MuiNativeSelect", e);
}
const Os = De("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), s0 = (e) => {
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
  return Ke(l, a0, t);
}, xd = me("select")(({
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
  [`&.${Os.disabled}`]: {
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
})), l0 = me(xd, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: tn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Os.multiple}`]: t.multiple
    }];
  }
})({}), wd = me("svg")(({
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
  [`&.${Os.disabled}`]: {
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
})), c0 = me(wd, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${pe(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Cd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, p = s0(d);
  return /* @__PURE__ */ R.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ R.jsx(l0, {
      ownerState: d,
      className: ye(p.select, r),
      disabled: i,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ R.jsx(c0, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Cd.propTypes = {
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
function u0(e) {
  return Le("MuiSelect", e);
}
const Gr = De("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var tc;
const d0 = me(xd, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Gr.select}`]: t.select
      },
      {
        [`&.${Gr.select}`]: t[n.variant]
      },
      {
        [`&.${Gr.error}`]: t.error
      },
      {
        [`&.${Gr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Gr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), f0 = me(wd, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${pe(n.variant)}`], n.open && t.iconOpen];
  }
})({}), p0 = me("input", {
  shouldForwardProp: (e) => Ju(e) && e !== "classes",
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
function nc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function m0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const h0 = (e) => {
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
  return Ke(l, u0, t);
}, Sd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var Rt;
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
    multiple: S,
    name: v,
    onBlur: w,
    onChange: x,
    onClose: I,
    onFocus: O,
    onOpen: $,
    open: M,
    readOnly: m,
    renderValue: P,
    SelectDisplayProps: k = {},
    tabIndex: N,
    // catching `type` from Input which makes no sense for SelectInput
    type: V,
    value: D,
    variant: B = "standard",
    ...ee
  } = t, [Z, ne] = Rr({
    controlled: D,
    default: d,
    name: "Select"
  }), [U, G] = Rr({
    controlled: M,
    default: u,
    name: "Select"
  }), ue = T.useRef(null), re = T.useRef(null), [F, z] = T.useState(null), {
    current: K
  } = T.useRef(M != null), [_, H] = T.useState(), Q = Ct(n, b), X = T.useCallback((he) => {
    re.current = he, he && z(he);
  }, []), ce = F == null ? void 0 : F.parentNode;
  T.useImperativeHandle(Q, () => ({
    focus: () => {
      re.current.focus();
    },
    node: ue.current,
    value: Z
  }), [Z]), T.useEffect(() => {
    u && U && F && !K && (H(s ? null : ce.clientWidth), re.current.focus());
  }, [F, s]), T.useEffect(() => {
    a && re.current.focus();
  }, [a]), T.useEffect(() => {
    if (!f)
      return;
    const he = Qt(re.current).getElementById(f);
    if (he) {
      const xe = () => {
        getSelection().isCollapsed && re.current.focus();
      };
      return he.addEventListener("click", xe), () => {
        he.removeEventListener("click", xe);
      };
    }
  }, [f]);
  const W = (he, xe) => {
    he ? $ && $(xe) : I && I(xe), K || (H(s ? null : ce.clientWidth), G(he));
  }, ve = (he) => {
    he.button === 0 && (he.preventDefault(), re.current.focus(), W(!0, he));
  }, A = (he) => {
    W(!1, he);
  }, de = T.Children.toArray(l), ie = (he) => {
    const xe = de.find((et) => et.props.value === he.target.value);
    xe !== void 0 && (ne(xe.props.value), x && x(he, xe));
  }, $e = (he) => (xe) => {
    let et;
    if (xe.currentTarget.hasAttribute("tabindex")) {
      if (S) {
        et = Array.isArray(Z) ? Z.slice() : [];
        const it = Z.indexOf(he.props.value);
        it === -1 ? et.push(he.props.value) : et.splice(it, 1);
      } else
        et = he.props.value;
      if (he.props.onClick && he.props.onClick(xe), Z !== et && (ne(et), x)) {
        const it = xe.nativeEvent || xe, lt = new it.constructor(it.type, it);
        Object.defineProperty(lt, "target", {
          writable: !0,
          value: {
            value: et,
            name: v
          }
        }), x(lt, he);
      }
      S || W(!1, xe);
    }
  }, be = (he) => {
    m || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(he.key) && (he.preventDefault(), W(!0, he));
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
    if (!/* @__PURE__ */ T.isValidElement(he))
      return null;
    process.env.NODE_ENV !== "production" && Ss.isFragment(he) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let xe;
    if (S) {
      if (!Array.isArray(Z))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Nn(2));
      xe = Z.some((et) => nc(et, he.props.value)), xe && _e && fe.push(he.props.children);
    } else
      xe = nc(Z, he.props.value), xe && _e && (We = he.props.children);
    return xe && (bt = !0), /* @__PURE__ */ T.cloneElement(he, {
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
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (!bt && !S && Z !== "") {
      const he = de.map((xe) => xe.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${Z}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${he.filter((xe) => xe != null).map((xe) => `\`${xe}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [bt, de, S, v, Z]), _e && (S ? fe.length === 0 ? Ee = null : Ee = fe.reduce((he, xe, et) => (he.push(xe), et < fe.length - 1 && he.push(", "), he), []) : Ee = We);
  let Qe = _;
  !s && K && F && (Qe = ce.clientWidth);
  let Je;
  typeof N < "u" ? Je = N : Je = p ? null : 0;
  const Re = k.id || (v ? `mui-component-select-${v}` : void 0), st = {
    ...t,
    variant: B,
    value: Z,
    open: Te,
    error: g
  }, Pe = h0(st), ft = {
    ...C.PaperProps,
    ...(Rt = C.slotProps) == null ? void 0 : Rt.paper
  }, Mt = bo();
  return /* @__PURE__ */ R.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ R.jsx(d0, {
      as: "div",
      ref: X,
      tabIndex: Je,
      role: "combobox",
      "aria-controls": Mt,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Te ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [f, Re].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: be,
      onMouseDown: p || m ? null : ve,
      onBlur: Fe,
      onFocus: O,
      ...k,
      ownerState: st,
      className: ye(k.className, Pe.select, c),
      id: Re,
      children: m0(Ee) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        tc || (tc = /* @__PURE__ */ R.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ee
    }), /* @__PURE__ */ R.jsx(p0, {
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
    }), /* @__PURE__ */ R.jsx(f0, {
      as: y,
      className: Pe.icon,
      ownerState: st
    }), /* @__PURE__ */ R.jsx(vd, {
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
        "aria-multiselectable": S ? "true" : void 0,
        disableListWrap: !0,
        id: Mt,
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
process.env.NODE_ENV !== "production" && (Sd.propTypes = {
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
const Td = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), g0 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Rs = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => tn(e) && e !== "variant",
  slot: "Root"
}, b0 = me(vo, Rs)(""), y0 = me(Co, Rs)(""), v0 = me(wo, Rs)(""), ta = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    IconComponent: d = Td,
    id: p,
    input: h,
    inputProps: g,
    label: y,
    labelId: b,
    MenuProps: f,
    multiple: C = !1,
    native: S = !1,
    onClose: v,
    onOpen: w,
    open: x,
    renderValue: I,
    SelectDisplayProps: O,
    variant: $ = "outlined",
    ...M
  } = r, m = S ? Cd : Sd, P = fr(), k = _r({
    props: r,
    muiFormControl: P,
    states: ["variant", "error"]
  }), N = k.variant || $, V = {
    ...r,
    variant: N,
    classes: s
  }, D = g0(V), {
    root: B,
    ...ee
  } = D, Z = h || {
    standard: /* @__PURE__ */ R.jsx(b0, {
      ownerState: V
    }),
    outlined: /* @__PURE__ */ R.jsx(y0, {
      label: y,
      ownerState: V
    }),
    filled: /* @__PURE__ */ R.jsx(v0, {
      ownerState: V
    })
  }[N], ne = Ct(n, jo(Z));
  return /* @__PURE__ */ R.jsx(T.Fragment, {
    children: /* @__PURE__ */ T.cloneElement(Z, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: m,
      inputProps: {
        children: a,
        error: k.error,
        IconComponent: d,
        variant: N,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C,
        ...S ? {
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
          renderValue: I,
          SelectDisplayProps: {
            id: p,
            ...O
          }
        },
        ...g,
        classes: g ? $t(ee, g.classes) : ee,
        ...h ? h.props.inputProps : {}
      },
      ...(C && S || u) && N === "outlined" ? {
        notched: !0
      } : {},
      ref: ne,
      className: ye(Z.props.className, l, D.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: N
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
function x0(e) {
  return Le("MuiTextField", e);
}
De("MuiTextField", ["root"]);
const w0 = {
  standard: vo,
  filled: wo,
  outlined: Co
}, C0 = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
    root: ["root"]
  }, x0, t);
}, S0 = me(ad, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ed = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    InputProps: S,
    inputRef: v,
    label: w,
    maxRows: x,
    minRows: I,
    multiline: O = !1,
    name: $,
    onBlur: M,
    onChange: m,
    onFocus: P,
    placeholder: k,
    required: N = !1,
    rows: V,
    select: D = !1,
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
    multiline: O,
    required: N,
    select: D,
    variant: G
  }, F = C0(re);
  process.env.NODE_ENV !== "production" && D && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const z = bo(b), K = y && z ? `${z}-helper-text` : void 0, _ = w && z ? `${z}-label` : void 0, H = w0[G], Q = {
    slots: ee,
    slotProps: {
      input: S,
      inputLabel: f,
      htmlInput: C,
      formHelperText: h,
      select: B,
      ...Z
    }
  }, X = {}, ce = Q.slotProps.inputLabel;
  G === "outlined" && (ce && typeof ce.shrink < "u" && (X.notched = ce.shrink), X.label = w), D && ((!B || !B.native) && (X.id = void 0), X["aria-describedby"] = void 0);
  const [W, ve] = Bt("input", {
    elementType: H,
    externalForwardedProps: Q,
    additionalProps: X,
    ownerState: re
  }), [A, de] = Bt("inputLabel", {
    elementType: id,
    externalForwardedProps: Q,
    ownerState: re
  }), [ie, $e] = Bt("htmlInput", {
    elementType: "input",
    externalForwardedProps: Q,
    ownerState: re
  }), [be, Te] = Bt("formHelperText", {
    elementType: sd,
    externalForwardedProps: Q,
    ownerState: re
  }), [Fe, Ee] = Bt("select", {
    elementType: ta,
    externalForwardedProps: Q,
    ownerState: re
  }), We = /* @__PURE__ */ R.jsx(W, {
    "aria-describedby": K,
    autoComplete: i,
    autoFocus: a,
    defaultValue: u,
    fullWidth: g,
    multiline: O,
    name: $,
    rows: V,
    maxRows: x,
    minRows: I,
    type: ne,
    value: U,
    id: z,
    inputRef: v,
    onBlur: M,
    onChange: m,
    onFocus: P,
    placeholder: k,
    inputProps: $e,
    slots: {
      input: ee.htmlInput ? ie : void 0
    },
    ...ve
  });
  return /* @__PURE__ */ R.jsxs(S0, {
    className: ye(F.root, l),
    disabled: d,
    error: p,
    fullWidth: g,
    ref: n,
    required: N,
    color: c,
    variant: G,
    ownerState: re,
    ...ue,
    children: [w != null && w !== "" && /* @__PURE__ */ R.jsx(A, {
      htmlFor: z,
      id: _,
      ...de,
      children: w
    }), D ? /* @__PURE__ */ R.jsx(Fe, {
      "aria-describedby": K,
      id: z,
      labelId: _,
      value: U,
      input: We,
      ...Ee,
      children: s
    }) : We, y && /* @__PURE__ */ R.jsx(be, {
      id: K,
      ...Te,
      children: y
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ed.propTypes = {
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
const Od = zn(Ed)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${Tt.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
  }

  & label,
  & label.Mui-focused {
    color: ${Tt.gray800};
  }

  & .MuiOutlinedInput-root {
    &:hover fieldset,
    fieldset,
    &.Mui-focused fieldset {
      border-color: ${Tt.gray400};
    }
  }
}
`, Ps = At.createContext({
  filters: {},
  setFilters: () => {
  }
}), T0 = ({
  children: e,
  filters: t,
  setFilters: n
}) => {
  const [r, i] = At.useState({});
  return /* @__PURE__ */ R.jsx(
    Ps.Provider,
    {
      value: {
        filters: n ? t ?? {} : r,
        setFilters: n ?? i
      },
      children: e
    }
  );
};
function rc(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function E0(e = {}) {
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
    n && (d = d.toLowerCase()), t && (d = rc(d));
    const p = d ? l.filter((h) => {
      let g = (a || u)(h);
      return n && (g = g.toLowerCase()), t && (g = rc(g)), i === "start" ? g.startsWith(d) : g.includes(d);
    }) : l;
    return typeof r == "number" ? p.slice(0, r) : p;
  };
}
const O0 = E0(), oc = 5, R0 = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
}, P0 = [];
function I0(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = R0,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? P0 : null,
    disableClearable: p = !1,
    disableCloseOnSelect: h = !1,
    disabled: g,
    disabledItemsFocusable: y = !1,
    disableListWrap: b = !1,
    filterOptions: f = O0,
    filterSelectedOptions: C = !1,
    freeSolo: S = !1,
    getOptionDisabled: v,
    getOptionKey: w,
    getOptionLabel: x = (j) => j.label ?? j,
    groupBy: I,
    handleHomeEndKeys: O = !e.freeSolo,
    id: $,
    includeInputInList: M = !1,
    inputValue: m,
    isOptionEqualToValue: P = (j, L) => j === L,
    multiple: k = !1,
    onChange: N,
    onClose: V,
    onHighlightChange: D,
    onInputChange: B,
    onOpen: ee,
    open: Z,
    openOnFocus: ne = !1,
    options: U,
    readOnly: G = !1,
    selectOnFocus: ue = !e.freeSolo,
    value: re
  } = e, F = bo($);
  let z = x;
  z = (j) => {
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
  const K = T.useRef(!1), _ = T.useRef(!0), H = T.useRef(null), Q = T.useRef(null), [X, ce] = T.useState(null), [W, ve] = T.useState(-1), A = i ? 0 : -1, de = T.useRef(A), [ie, $e] = Rr({
    controlled: re,
    default: d,
    name: u
  }), [be, Te] = Rr({
    controlled: m,
    default: "",
    name: u,
    state: "inputValue"
  }), [Fe, Ee] = T.useState(!1), We = T.useCallback((j, L, J) => {
    if (!(k ? ie.length < L.length : L !== null) && !l)
      return;
    let se;
    if (k)
      se = "";
    else if (L == null)
      se = "";
    else {
      const Oe = z(L);
      se = typeof Oe == "string" ? Oe : "";
    }
    be !== se && (Te(se), B && B(j, se, J));
  }, [z, be, k, B, Te, l, ie]), [fe, _e] = Rr({
    controlled: Z,
    default: !1,
    name: u,
    state: "open"
  }), [bt, xt] = T.useState(!0), Qe = !k && ie != null && be === z(ie), Je = fe && !G, Re = Je ? f(
    U.filter((j) => !(C && (k ? ie : [ie]).some((L) => L !== null && P(j, L)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Qe && bt ? "" : be,
      getOptionLabel: z
    }
  ) : [], st = Mb({
    filteredOptions: Re,
    value: ie,
    inputValue: be
  });
  T.useEffect(() => {
    const j = ie !== st.value;
    Fe && !j || S && !j || We(null, ie, "reset");
  }, [ie, We, Fe, st.value, S]);
  const Pe = fe && Re.length > 0 && !G, ft = kn((j) => {
    j === -1 ? H.current.focus() : X.querySelector(`[data-tag-index="${j}"]`).focus();
  });
  T.useEffect(() => {
    k && W > ie.length - 1 && (ve(-1), ft(-1));
  }, [ie, k, W, ft]);
  function Mt(j, L) {
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
  const Rt = kn(({
    event: j,
    index: L,
    reason: J = "auto"
  }) => {
    if (de.current = L, L === -1 ? H.current.removeAttribute("aria-activedescendant") : H.current.setAttribute("aria-activedescendant", `${F}-option-${L}`), D && D(j, L === -1 ? null : Re[L], J), !Q.current)
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
      const Ce = Oe, ke = se.clientHeight + se.scrollTop, yt = Ce.offsetTop + Ce.offsetHeight;
      yt > ke ? se.scrollTop = yt - se.clientHeight : Ce.offsetTop - Ce.offsetHeight * (I ? 1.3 : 0) < se.scrollTop && (se.scrollTop = Ce.offsetTop - Ce.offsetHeight * (I ? 1.3 : 0));
    }
  }), he = kn(({
    event: j,
    diff: L,
    direction: J = "next",
    reason: le = "auto"
  }) => {
    if (!Je)
      return;
    const Oe = Mt((() => {
      const Ce = Re.length - 1;
      if (L === "reset")
        return A;
      if (L === "start")
        return 0;
      if (L === "end")
        return Ce;
      const ke = de.current + L;
      return ke < 0 ? ke === -1 && M ? -1 : b && de.current !== -1 || Math.abs(L) > 1 ? 0 : Ce : ke > Ce ? ke === Ce + 1 && M ? -1 : b || Math.abs(L) > 1 ? Ce : 0 : ke;
    })(), J);
    if (Rt({
      index: Oe,
      reason: le,
      event: j
    }), r && L !== "reset")
      if (Oe === -1)
        H.current.value = be;
      else {
        const Ce = z(Re[Oe]);
        H.current.value = Ce, Ce.toLowerCase().indexOf(be.toLowerCase()) === 0 && be.length > 0 && H.current.setSelectionRange(be.length, Ce.length);
      }
  }), xe = () => {
    const j = (L, J) => {
      const le = L ? z(L) : "", se = J ? z(J) : "";
      return le === se;
    };
    if (de.current !== -1 && st.filteredOptions && st.filteredOptions.length !== Re.length && st.inputValue === be && (k ? ie.length === st.value.length && st.value.every((L, J) => z(ie[J]) === z(L)) : j(st.value, ie))) {
      const L = st.filteredOptions[de.current];
      if (L)
        return Re.findIndex((J) => z(J) === z(L));
    }
    return -1;
  }, et = T.useCallback(() => {
    if (!Je)
      return;
    const j = xe();
    if (j !== -1) {
      de.current = j;
      return;
    }
    const L = k ? ie[0] : ie;
    if (Re.length === 0 || L == null) {
      he({
        diff: "reset"
      });
      return;
    }
    if (Q.current) {
      if (L != null) {
        const J = Re[de.current];
        if (k && J && ie.findIndex((se) => P(J, se)) !== -1)
          return;
        const le = Re.findIndex((se) => P(se, L));
        le === -1 ? he({
          diff: "reset"
        }) : Rt({
          index: le
        });
        return;
      }
      if (de.current >= Re.length - 1) {
        Rt({
          index: Re.length - 1
        });
        return;
      }
      Rt({
        index: de.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Re.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    k ? !1 : ie,
    C,
    he,
    Rt,
    Je,
    be,
    k
  ]), it = kn((j) => {
    pi(Q, j), j && et();
  });
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    (!H.current || H.current.nodeName !== "INPUT") && (H.current && H.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${H.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), T.useEffect(() => {
    et();
  }, [et]);
  const lt = (j) => {
    fe || (_e(!0), xt(!0), ee && ee(j));
  }, jt = (j, L) => {
    fe && (_e(!1), V && V(j, L));
  }, Et = (j, L, J, le) => {
    if (k) {
      if (ie.length === L.length && ie.every((se, Oe) => se === L[Oe]))
        return;
    } else if (ie === L)
      return;
    N && N(j, L, J, le), $e(L);
  }, nn = T.useRef(!1), Ht = (j, L, J = "selectOption", le = "options") => {
    let se = J, Oe = L;
    if (k) {
      if (Oe = Array.isArray(ie) ? ie.slice() : [], process.env.NODE_ENV !== "production") {
        const ke = Oe.filter((yt) => P(L, yt));
        ke.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${ke.length} matches.`].join(`
`));
      }
      const Ce = Oe.findIndex((ke) => P(L, ke));
      Ce === -1 ? Oe.push(L) : le !== "freeSolo" && (Oe.splice(Ce, 1), se = "removeOption");
    }
    We(j, Oe, se), Et(j, Oe, se, {
      option: L
    }), !h && (!j || !j.ctrlKey && !j.metaKey) && jt(j, se), (s === !0 || s === "touch" && nn.current || s === "mouse" && !nn.current) && H.current.blur();
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
  const Ut = (j, L) => {
    if (!k)
      return;
    be === "" && jt(j, "toggleInput");
    let J = W;
    W === -1 ? be === "" && L === "previous" && (J = ie.length - 1) : (J += L === "next" ? 1 : -1, J < 0 && (J = 0), J === ie.length && (J = -1)), J = bn(J, L), ve(J), ft(J);
  }, Ft = (j) => {
    K.current = !0, Te(""), B && B(j, "", "clear"), Et(j, k ? [] : null, "clear");
  }, yn = (j) => (L) => {
    if (j.onKeyDown && j.onKeyDown(L), !L.defaultMuiPrevented && (W !== -1 && !["ArrowLeft", "ArrowRight"].includes(L.key) && (ve(-1), ft(-1)), L.which !== 229))
      switch (L.key) {
        case "Home":
          Je && O && (L.preventDefault(), he({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: L
          }));
          break;
        case "End":
          Je && O && (L.preventDefault(), he({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: L
          }));
          break;
        case "PageUp":
          L.preventDefault(), he({
            diff: -oc,
            direction: "previous",
            reason: "keyboard",
            event: L
          }), lt(L);
          break;
        case "PageDown":
          L.preventDefault(), he({
            diff: oc,
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
          Ut(L, "previous");
          break;
        case "ArrowRight":
          Ut(L, "next");
          break;
        case "Enter":
          if (de.current !== -1 && Je) {
            const J = Re[de.current], le = v ? v(J) : !1;
            if (L.preventDefault(), le)
              return;
            Ht(L, J, "selectOption"), r && H.current.setSelectionRange(H.current.value.length, H.current.value.length);
          } else S && be !== "" && Qe === !1 && (k && L.preventDefault(), Ht(L, be, "createOption", "freeSolo"));
          break;
        case "Escape":
          Je ? (L.preventDefault(), L.stopPropagation(), jt(L, "escape")) : c && (be !== "" || k && ie.length > 0) && (L.preventDefault(), L.stopPropagation(), Ft(L));
          break;
        case "Backspace":
          if (k && !G && be === "" && ie.length > 0) {
            const J = W === -1 ? ie.length - 1 : W, le = ie.slice();
            le.splice(J, 1), Et(L, le, "removeOption", {
              option: ie[J]
            });
          }
          break;
        case "Delete":
          if (k && !G && be === "" && ie.length > 0 && W !== -1) {
            const J = W, le = ie.slice();
            le.splice(J, 1), Et(L, le, "removeOption", {
              option: ie[J]
            });
          }
          break;
      }
  }, Yt = (j) => {
    Ee(!0), ne && !K.current && lt(j);
  }, vn = (j) => {
    if (t(Q)) {
      H.current.focus();
      return;
    }
    Ee(!1), _.current = !0, K.current = !1, a && de.current !== -1 && Je ? Ht(j, Re[de.current], "blur") : a && S && be !== "" ? Ht(j, be, "blur", "freeSolo") : l && We(j, ie, "blur"), jt(j, "blur");
  }, pt = (j) => {
    const L = j.target.value;
    be !== L && (Te(L), xt(!1), B && B(j, L, "input")), L === "" ? !p && !k && Et(j, null, "clear") : lt(j);
  }, rn = (j) => {
    const L = Number(j.currentTarget.getAttribute("data-option-index"));
    de.current !== L && Rt({
      event: j,
      index: L,
      reason: "mouse"
    });
  }, It = (j) => {
    Rt({
      event: j,
      index: Number(j.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), nn.current = !0;
  }, ge = (j) => {
    const L = Number(j.currentTarget.getAttribute("data-option-index"));
    Ht(j, Re[L], "selectOption"), nn.current = !1;
  }, on = (j) => (L) => {
    const J = ie.slice();
    J.splice(j, 1), Et(L, J, "removeOption", {
      option: ie[j]
    });
  }, wn = (j) => {
    fe ? jt(j, "toggleInput") : lt(j);
  }, nr = (j) => {
    j.currentTarget.contains(j.target) && j.target.getAttribute("id") !== F && j.preventDefault();
  }, Cn = (j) => {
    j.currentTarget.contains(j.target) && (H.current.focus(), ue && _.current && H.current.selectionEnd - H.current.selectionStart === 0 && H.current.select(), _.current = !1);
  }, E = (j) => {
    !g && (be === "" || !fe) && wn(j);
  };
  let q = S && be.length > 0;
  q = q || (k ? ie.length > 0 : ie !== null);
  let ae = Re;
  if (I) {
    const j = /* @__PURE__ */ new Map();
    let L = !1;
    ae = Re.reduce((J, le, se) => {
      const Oe = I(le);
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
      onClick: Cn
    }),
    getInputLabelProps: () => ({
      id: `${F}-label`,
      htmlFor: F
    }),
    getInputProps: () => ({
      id: F,
      value: be,
      onBlur: vn,
      onFocus: Yt,
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
      onClick: Ft
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: wn
    }),
    getTagProps: ({
      index: j
    }) => ({
      key: j,
      "data-tag-index": j,
      tabIndex: -1,
      ...!G && {
        onDelete: on(j)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${F}-listbox`,
      "aria-labelledby": `${F}-label`,
      ref: it,
      onMouseDown: (j) => {
        j.preventDefault();
      }
    }),
    getOptionProps: ({
      index: j,
      option: L
    }) => {
      const J = (k ? ie : [ie]).some((se) => se != null && P(L, se)), le = v ? v(L) : !1;
      return {
        key: (w == null ? void 0 : w(L)) ?? z(L),
        tabIndex: -1,
        role: "option",
        id: `${F}-option-${j}`,
        onMouseMove: rn,
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
    focused: Fe || W !== -1,
    anchorEl: X,
    setAnchorEl: ce,
    focusedTag: W,
    groupedOptions: ae
  };
}
var zt = "top", mn = "bottom", hn = "right", Wt = "left", Is = "auto", Lo = [zt, mn, hn, Wt], Mr = "start", To = "end", k0 = "clippingParents", Rd = "viewport", Kr = "popper", $0 = "reference", ic = /* @__PURE__ */ Lo.reduce(function(e, t) {
  return e.concat([t + "-" + Mr, t + "-" + To]);
}, []), Pd = /* @__PURE__ */ [].concat(Lo, [Is]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Mr, t + "-" + To]);
}, []), M0 = "beforeRead", N0 = "read", D0 = "afterRead", A0 = "beforeMain", j0 = "main", F0 = "afterMain", L0 = "beforeWrite", _0 = "write", B0 = "afterWrite", z0 = [M0, N0, D0, A0, j0, F0, L0, _0, B0];
function jn(e) {
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
function dr(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function fn(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ks(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function W0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !fn(a) || !jn(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function V0(e) {
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
      !fn(i) || !jn(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const H0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: W0,
  effect: V0,
  requires: ["computeStyles"]
};
function Mn(e) {
  return e.split("-")[0];
}
var cr = Math.max, wi = Math.min, Nr = Math.round;
function Qa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Id() {
  return !/^((?!chrome|android).)*safari/i.test(Qa());
}
function Dr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && fn(e) && (i = e.offsetWidth > 0 && Nr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Nr(r.height) / e.offsetHeight || 1);
  var s = dr(e) ? Jt(e) : window, l = s.visualViewport, c = !Id() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, d = (r.top + (c && l ? l.offsetTop : 0)) / a, p = r.width / i, h = r.height / a;
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
function $s(e) {
  var t = Dr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function kd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ks(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Un(e) {
  return Jt(e).getComputedStyle(e);
}
function U0(e) {
  return ["table", "td", "th"].indexOf(jn(e)) >= 0;
}
function tr(e) {
  return ((dr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function na(e) {
  return jn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ks(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    tr(e)
  );
}
function ac(e) {
  return !fn(e) || // https://github.com/popperjs/popper-core/issues/837
  Un(e).position === "fixed" ? null : e.offsetParent;
}
function Y0(e) {
  var t = /firefox/i.test(Qa()), n = /Trident/i.test(Qa());
  if (n && fn(e)) {
    var r = Un(e);
    if (r.position === "fixed")
      return null;
  }
  var i = na(e);
  for (ks(i) && (i = i.host); fn(i) && ["html", "body"].indexOf(jn(i)) < 0; ) {
    var a = Un(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function _o(e) {
  for (var t = Jt(e), n = ac(e); n && U0(n) && Un(n).position === "static"; )
    n = ac(n);
  return n && (jn(n) === "html" || jn(n) === "body" && Un(n).position === "static") ? t : n || Y0(e) || t;
}
function Ms(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function lo(e, t, n) {
  return cr(e, wi(t, n));
}
function q0(e, t, n) {
  var r = lo(e, t, n);
  return r > n ? n : r;
}
function $d() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Md(e) {
  return Object.assign({}, $d(), e);
}
function Nd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var G0 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Md(typeof t != "number" ? t : Nd(t, Lo));
};
function K0(e) {
  var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Mn(n.placement), c = Ms(l), u = [Wt, hn].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = G0(i.padding, n), h = $s(a), g = c === "y" ? zt : Wt, y = c === "y" ? mn : hn, b = n.rects.reference[d] + n.rects.reference[c] - s[c] - n.rects.popper[d], f = s[c] - n.rects.reference[c], C = _o(a), S = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, v = b / 2 - f / 2, w = p[g], x = S - h[d] - p[y], I = S / 2 - h[d] / 2 + v, O = lo(w, I, x), $ = c;
    n.modifiersData[r] = (t = {}, t[$] = O, t.centerOffset = O - I, t);
  }
}
function X0(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || kd(t.elements.popper, i) && (t.elements.arrow = i));
}
const Z0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: K0,
  effect: X0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ar(e) {
  return e.split("-")[1];
}
var Q0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function J0(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Nr(n * i) / i || 0,
    y: Nr(r * i) / i || 0
  };
}
function sc(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, y = s.y, b = y === void 0 ? 0 : y, f = typeof d == "function" ? d({
    x: g,
    y: b
  }) : {
    x: g,
    y: b
  };
  g = f.x, b = f.y;
  var C = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), v = Wt, w = zt, x = window;
  if (u) {
    var I = _o(n), O = "clientHeight", $ = "clientWidth";
    if (I === Jt(n) && (I = tr(n), Un(I).position !== "static" && l === "absolute" && (O = "scrollHeight", $ = "scrollWidth")), I = I, i === zt || (i === Wt || i === hn) && a === To) {
      w = mn;
      var M = p && I === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[O]
      );
      b -= M - r.height, b *= c ? 1 : -1;
    }
    if (i === Wt || (i === zt || i === mn) && a === To) {
      v = hn;
      var m = p && I === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[$]
      );
      g -= m - r.width, g *= c ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, u && Q0), k = d === !0 ? J0({
    x: g,
    y: b
  }, Jt(n)) : {
    x: g,
    y: b
  };
  if (g = k.x, b = k.y, c) {
    var N;
    return Object.assign({}, P, (N = {}, N[w] = S ? "0" : "", N[v] = C ? "0" : "", N.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", N));
  }
  return Object.assign({}, P, (t = {}, t[w] = S ? b + "px" : "", t[v] = C ? g + "px" : "", t.transform = "", t));
}
function ex(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Mn(t.placement),
    variation: Ar(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, sc(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, sc(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const tx = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ex,
  data: {}
};
var Zo = {
  passive: !0
};
function nx(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, c = Jt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Zo);
  }), l && c.addEventListener("resize", n.update, Zo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Zo);
    }), l && c.removeEventListener("resize", n.update, Zo);
  };
}
const rx = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: nx,
  data: {}
};
var ox = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ai(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ox[t];
  });
}
var ix = {
  start: "end",
  end: "start"
};
function lc(e) {
  return e.replace(/start|end/g, function(t) {
    return ix[t];
  });
}
function Ns(e) {
  var t = Jt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ds(e) {
  return Dr(tr(e)).left + Ns(e).scrollLeft;
}
function ax(e, t) {
  var n = Jt(e), r = tr(e), i = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = Id();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + Ds(e),
    y: c
  };
}
function sx(e) {
  var t, n = tr(e), r = Ns(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = cr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = cr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Ds(e), c = -r.scrollTop;
  return Un(i || n).direction === "rtl" && (l += cr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function As(e) {
  var t = Un(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Dd(e) {
  return ["html", "body", "#document"].indexOf(jn(e)) >= 0 ? e.ownerDocument.body : fn(e) && As(e) ? e : Dd(na(e));
}
function co(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Dd(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Jt(r), s = i ? [a].concat(a.visualViewport || [], As(r) ? r : []) : r, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(co(na(s)))
  );
}
function Ja(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function lx(e, t) {
  var n = Dr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function cc(e, t, n) {
  return t === Rd ? Ja(ax(e, n)) : dr(t) ? lx(t, n) : Ja(sx(tr(e)));
}
function cx(e) {
  var t = co(na(e)), n = ["absolute", "fixed"].indexOf(Un(e).position) >= 0, r = n && fn(e) ? _o(e) : e;
  return dr(r) ? t.filter(function(i) {
    return dr(i) && kd(i, r) && jn(i) !== "body";
  }) : [];
}
function ux(e, t, n, r) {
  var i = t === "clippingParents" ? cx(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, u) {
    var d = cc(e, u, r);
    return c.top = cr(d.top, c.top), c.right = wi(d.right, c.right), c.bottom = wi(d.bottom, c.bottom), c.left = cr(d.left, c.left), c;
  }, cc(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ad(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Mn(r) : null, a = r ? Ar(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case zt:
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
  var u = i ? Ms(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Mr:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case To:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Eo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? k0 : l, u = n.rootBoundary, d = u === void 0 ? Rd : u, p = n.elementContext, h = p === void 0 ? Kr : p, g = n.altBoundary, y = g === void 0 ? !1 : g, b = n.padding, f = b === void 0 ? 0 : b, C = Md(typeof f != "number" ? f : Nd(f, Lo)), S = h === Kr ? $0 : Kr, v = e.rects.popper, w = e.elements[y ? S : h], x = ux(dr(w) ? w : w.contextElement || tr(e.elements.popper), c, d, s), I = Dr(e.elements.reference), O = Ad({
    reference: I,
    element: v,
    strategy: "absolute",
    placement: i
  }), $ = Ja(Object.assign({}, v, O)), M = h === Kr ? $ : I, m = {
    top: x.top - M.top + C.top,
    bottom: M.bottom - x.bottom + C.bottom,
    left: x.left - M.left + C.left,
    right: M.right - x.right + C.right
  }, P = e.modifiersData.offset;
  if (h === Kr && P) {
    var k = P[i];
    Object.keys(m).forEach(function(N) {
      var V = [hn, mn].indexOf(N) >= 0 ? 1 : -1, D = [zt, mn].indexOf(N) >= 0 ? "y" : "x";
      m[N] += k[D] * V;
    });
  }
  return m;
}
function dx(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Pd : c, d = Ar(r), p = d ? l ? ic : ic.filter(function(y) {
    return Ar(y) === d;
  }) : Lo, h = p.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  h.length === 0 && (h = p);
  var g = h.reduce(function(y, b) {
    return y[b] = Eo(e, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Mn(b)], y;
  }, {});
  return Object.keys(g).sort(function(y, b) {
    return g[y] - g[b];
  });
}
function fx(e) {
  if (Mn(e) === Is)
    return [];
  var t = ai(e);
  return [lc(e), t, lc(t)];
}
function px(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, y = g === void 0 ? !0 : g, b = n.allowedAutoPlacements, f = t.options.placement, C = Mn(f), S = C === f, v = c || (S || !y ? [ai(f)] : fx(f)), w = [f].concat(v).reduce(function(F, z) {
      return F.concat(Mn(z) === Is ? dx(t, {
        placement: z,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : z);
    }, []), x = t.rects.reference, I = t.rects.popper, O = /* @__PURE__ */ new Map(), $ = !0, M = w[0], m = 0; m < w.length; m++) {
      var P = w[m], k = Mn(P), N = Ar(P) === Mr, V = [zt, mn].indexOf(k) >= 0, D = V ? "width" : "height", B = Eo(t, {
        placement: P,
        boundary: d,
        rootBoundary: p,
        altBoundary: h,
        padding: u
      }), ee = V ? N ? hn : Wt : N ? mn : zt;
      x[D] > I[D] && (ee = ai(ee));
      var Z = ai(ee), ne = [];
      if (a && ne.push(B[k] <= 0), l && ne.push(B[ee] <= 0, B[Z] <= 0), ne.every(function(F) {
        return F;
      })) {
        M = P, $ = !1;
        break;
      }
      O.set(P, ne);
    }
    if ($)
      for (var U = y ? 3 : 1, G = function(z) {
        var K = w.find(function(_) {
          var H = O.get(_);
          if (H)
            return H.slice(0, z).every(function(Q) {
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
const mx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: px,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function uc(e, t, n) {
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
function dc(e) {
  return [zt, hn, mn, Wt].some(function(t) {
    return e[t] >= 0;
  });
}
function hx(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = Eo(t, {
    elementContext: "reference"
  }), l = Eo(t, {
    altBoundary: !0
  }), c = uc(s, r), u = uc(l, i, a), d = dc(c), p = dc(u);
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
const gx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hx
};
function bx(e, t, n) {
  var r = Mn(e), i = [Wt, zt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [Wt, hn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function yx(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = Pd.reduce(function(d, p) {
    return d[p] = bx(p, t.rects, a), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const vx = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: yx
};
function xx(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ad({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const wx = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xx,
  data: {}
};
function Cx(e) {
  return e === "x" ? "y" : "x";
}
function Sx(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, h = n.tether, g = h === void 0 ? !0 : h, y = n.tetherOffset, b = y === void 0 ? 0 : y, f = Eo(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), C = Mn(t.placement), S = Ar(t.placement), v = !S, w = Ms(C), x = Cx(w), I = t.modifiersData.popperOffsets, O = t.rects.reference, $ = t.rects.popper, M = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, m = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, k = {
    x: 0,
    y: 0
  };
  if (I) {
    if (a) {
      var N, V = w === "y" ? zt : Wt, D = w === "y" ? mn : hn, B = w === "y" ? "height" : "width", ee = I[w], Z = ee + f[V], ne = ee - f[D], U = g ? -$[B] / 2 : 0, G = S === Mr ? O[B] : $[B], ue = S === Mr ? -$[B] : -O[B], re = t.elements.arrow, F = g && re ? $s(re) : {
        width: 0,
        height: 0
      }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : $d(), K = z[V], _ = z[D], H = lo(0, O[B], F[B]), Q = v ? O[B] / 2 - U - H - K - m.mainAxis : G - H - K - m.mainAxis, X = v ? -O[B] / 2 + U + H + _ + m.mainAxis : ue + H + _ + m.mainAxis, ce = t.elements.arrow && _o(t.elements.arrow), W = ce ? w === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, ve = (N = P == null ? void 0 : P[w]) != null ? N : 0, A = ee + Q - ve - W, de = ee + X - ve, ie = lo(g ? wi(Z, A) : Z, ee, g ? cr(ne, de) : ne);
      I[w] = ie, k[w] = ie - ee;
    }
    if (l) {
      var $e, be = w === "x" ? zt : Wt, Te = w === "x" ? mn : hn, Fe = I[x], Ee = x === "y" ? "height" : "width", We = Fe + f[be], fe = Fe - f[Te], _e = [zt, Wt].indexOf(C) !== -1, bt = ($e = P == null ? void 0 : P[x]) != null ? $e : 0, xt = _e ? We : Fe - O[Ee] - $[Ee] - bt + m.altAxis, Qe = _e ? Fe + O[Ee] + $[Ee] - bt - m.altAxis : fe, Je = g && _e ? q0(xt, Fe, Qe) : lo(g ? xt : We, Fe, g ? Qe : fe);
      I[x] = Je, k[x] = Je - Fe;
    }
    t.modifiersData[r] = k;
  }
}
const Tx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Sx,
  requiresIfExists: ["offset"]
};
function Ex(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ox(e) {
  return e === Jt(e) || !fn(e) ? Ns(e) : Ex(e);
}
function Rx(e) {
  var t = e.getBoundingClientRect(), n = Nr(t.width) / e.offsetWidth || 1, r = Nr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Px(e, t, n) {
  n === void 0 && (n = !1);
  var r = fn(t), i = fn(t) && Rx(t), a = tr(t), s = Dr(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((jn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  As(a)) && (l = Ox(t)), fn(t) ? (c = Dr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Ds(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Ix(e) {
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
function kx(e) {
  var t = Ix(e);
  return z0.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function $x(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Mx(e) {
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
var fc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Nx(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? fc : i;
  return function(l, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fc, a),
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
        var S = typeof C == "function" ? C(d.options) : C;
        b(), d.options = Object.assign({}, a, d.options, S), d.scrollParents = {
          reference: dr(l) ? co(l) : l.contextElement ? co(l.contextElement) : [],
          popper: co(c)
        };
        var v = kx(Mx([].concat(r, d.options.modifiers)));
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
          var C = d.elements, S = C.reference, v = C.popper;
          if (pc(S, v)) {
            d.rects = {
              reference: Px(S, _o(v), d.options.strategy === "fixed"),
              popper: $s(v)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(m) {
              return d.modifiersData[m.name] = Object.assign({}, m.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var x = d.orderedModifiers[w], I = x.fn, O = x.options, $ = O === void 0 ? {} : O, M = x.name;
              typeof I == "function" && (d = I({
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
      update: $x(function() {
        return new Promise(function(f) {
          g.forceUpdate(), f(d);
        });
      }),
      destroy: function() {
        b(), h = !0;
      }
    };
    if (!pc(l, c))
      return g;
    g.setOptions(u).then(function(f) {
      !h && u.onFirstUpdate && u.onFirstUpdate(f);
    });
    function y() {
      d.orderedModifiers.forEach(function(f) {
        var C = f.name, S = f.options, v = S === void 0 ? {} : S, w = f.effect;
        if (typeof w == "function") {
          var x = w({
            state: d,
            name: C,
            instance: g,
            options: v
          }), I = function() {
          };
          p.push(x || I);
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
var Dx = [rx, wx, tx, H0, vx, mx, Tx, Z0, gx], Ax = /* @__PURE__ */ Nx({
  defaultModifiers: Dx
});
function jx(e) {
  return Le("MuiPopper", e);
}
De("MuiPopper", ["root"]);
function Fx(e, t) {
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
function Lx(e) {
  return !ra(e);
}
const _x = (e) => {
  const {
    classes: t
  } = e;
  return Ke({
    root: ["root"]
  }, jx, t);
}, Bx = {}, zx = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = t, C = T.useRef(null), S = Ct(C, n), v = T.useRef(null), w = Ct(v, p), x = T.useRef(w);
  Dn(() => {
    x.current = w;
  }, [w]), T.useImperativeHandle(p, () => v.current, []);
  const I = Fx(u, a), [O, $] = T.useState(I), [M, m] = T.useState(Ci(r));
  T.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), T.useEffect(() => {
    r && m(Ci(r));
  }, [r]), Dn(() => {
    if (!M || !c)
      return;
    const D = (Z) => {
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
        D(Z);
      }
    }];
    l != null && (B = B.concat(l)), d && d.modifiers != null && (B = B.concat(d.modifiers));
    const ee = Ax(M, C.current, {
      placement: I,
      ...d,
      modifiers: B
    });
    return x.current(ee), () => {
      ee.destroy(), x.current(null);
    };
  }, [M, s, l, c, d, I]);
  const P = {
    placement: O
  };
  y !== null && (P.TransitionProps = y);
  const k = _x(t), N = g.root ?? "div", V = Ua({
    elementType: N,
    externalSlotProps: h.root,
    externalForwardedProps: f,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: k.root
  });
  return /* @__PURE__ */ R.jsx(N, {
    ...V,
    children: typeof i == "function" ? i(P) : i
  });
}), jd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    popperOptions: h = Bx,
    popperRef: g,
    style: y,
    transition: b = !1,
    slotProps: f = {},
    slots: C = {},
    ...S
  } = t, [v, w] = T.useState(!0), x = () => {
    w(!1);
  }, I = () => {
    w(!0);
  };
  if (!c && !d && (!b || v))
    return null;
  let O;
  if (a)
    O = a;
  else if (r) {
    const m = Ci(r);
    O = m && ra(m) ? Qt(m).body : Qt(null).body;
  }
  const $ = !d && c && (!b || v) ? "none" : void 0, M = b ? {
    in: d,
    onEnter: x,
    onExited: I
  } : void 0;
  return /* @__PURE__ */ R.jsx(So, {
    disablePortal: l,
    container: O,
    children: /* @__PURE__ */ R.jsx(zx, {
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
      ...S,
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
process.env.NODE_ENV !== "production" && (jd.propTypes = {
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
  anchorEl: An(o.oneOfType([Vn, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Ci(e.anchorEl);
      if (t && ra(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Lx(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: o.oneOfType([Vn, o.func]),
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
const Wx = me(jd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), js = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = vs(), i = Ze({
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
    slots: S,
    slotProps: v,
    ...w
  } = i, x = (S == null ? void 0 : S.root) ?? (l == null ? void 0 : l.Root), I = {
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
  return /* @__PURE__ */ R.jsx(Wx, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: x
    },
    slotProps: v ?? c,
    ...I,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
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
  anchorEl: o.oneOfType([Vn, o.object, o.func]),
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
  container: o.oneOfType([Vn, o.func]),
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
function Vx(e) {
  return Le("MuiListSubheader", e);
}
De("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Hx = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${pe(n)}`, !r && "gutters", i && "inset", !a && "sticky"]
  };
  return Ke(s, Vx, t);
}, Ux = me("li", {
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
}))), Si = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, h = Hx(p);
  return /* @__PURE__ */ R.jsx(Ux, {
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
    Wr(this, "mountEffect", () => {
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
    const t = Lu(Ti.create).current, [n, r] = T.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, T.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = qx(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Yx() {
  return Ti.use();
}
function qx() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Fd(e) {
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
  } = e, [d, p] = T.useState(!1), h = ye(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, y = ye(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && p(!0), T.useEffect(() => {
    if (!l && c != null) {
      const b = setTimeout(c, u);
      return () => {
        clearTimeout(b);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ R.jsx("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ R.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Fd.propTypes = {
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
const ln = De("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), es = 550, Gx = 80, Kx = us`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Xx = us`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Zx = us`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Qx = me("span", {
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
}), Jx = me(Fd, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ln.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Kx};
    animation-duration: ${es}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ln.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ln.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ln.childLeaving} {
    opacity: 0;
    animation-name: ${Xx};
    animation-duration: ${es}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ln.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Zx};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ld = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = r, [c, u] = T.useState([]), d = T.useRef(0), p = T.useRef(null);
  T.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const h = T.useRef(!1), g = _u(), y = T.useRef(null), b = T.useRef(null), f = T.useCallback((w) => {
    const {
      pulsate: x,
      rippleX: I,
      rippleY: O,
      rippleSize: $,
      cb: M
    } = w;
    u((m) => [...m, /* @__PURE__ */ R.jsx(Jx, {
      classes: {
        ripple: ye(a.ripple, ln.ripple),
        rippleVisible: ye(a.rippleVisible, ln.rippleVisible),
        ripplePulsate: ye(a.ripplePulsate, ln.ripplePulsate),
        child: ye(a.child, ln.child),
        childLeaving: ye(a.childLeaving, ln.childLeaving),
        childPulsate: ye(a.childPulsate, ln.childPulsate)
      },
      timeout: es,
      pulsate: x,
      rippleX: I,
      rippleY: O,
      rippleSize: $
    }, d.current)]), d.current += 1, p.current = M;
  }, [a]), C = T.useCallback((w = {}, x = {}, I = () => {
  }) => {
    const {
      pulsate: O = !1,
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
    let k, N, V;
    if ($ || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      k = Math.round(P.width / 2), N = Math.round(P.height / 2);
    else {
      const {
        clientX: D,
        clientY: B
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      k = Math.round(D - P.left), N = Math.round(B - P.top);
    }
    if ($)
      V = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), V % 2 === 0 && (V += 1);
    else {
      const D = Math.max(Math.abs((m ? m.clientWidth : 0) - k), k) * 2 + 2, B = Math.max(Math.abs((m ? m.clientHeight : 0) - N), N) * 2 + 2;
      V = Math.sqrt(D ** 2 + B ** 2);
    }
    w != null && w.touches ? y.current === null && (y.current = () => {
      f({
        pulsate: O,
        rippleX: k,
        rippleY: N,
        rippleSize: V,
        cb: I
      });
    }, g.start(Gx, () => {
      y.current && (y.current(), y.current = null);
    })) : f({
      pulsate: O,
      rippleX: k,
      rippleY: N,
      rippleSize: V,
      cb: I
    });
  }, [i, f, g]), S = T.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), v = T.useCallback((w, x) => {
    if (g.clear(), (w == null ? void 0 : w.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.start(0, () => {
        v(w, x);
      });
      return;
    }
    y.current = null, u((I) => I.length > 0 ? I.slice(1) : I), p.current = x;
  }, [g]);
  return T.useImperativeHandle(n, () => ({
    pulsate: S,
    start: C,
    stop: v
  }), [S, C, v]), /* @__PURE__ */ R.jsx(Qx, {
    className: ye(ln.root, a.root, s),
    ref: b,
    ...l,
    children: /* @__PURE__ */ R.jsx(Es, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Ld.propTypes = {
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
function ew(e) {
  return Le("MuiButtonBase", e);
}
const tw = De("MuiButtonBase", ["root", "disabled", "focusVisible"]), nw = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = Ke({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, ew, i);
  return n && r && (s.root += ` ${r}`), s;
}, rw = me("button", {
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
  [`&.${tw.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), jr = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    onDragLeave: S,
    onFocus: v,
    onFocusVisible: w,
    onKeyDown: x,
    onKeyUp: I,
    onMouseDown: O,
    onMouseLeave: $,
    onMouseUp: M,
    onTouchEnd: m,
    onTouchMove: P,
    onTouchStart: k,
    tabIndex: N = 0,
    TouchRippleProps: V,
    touchRippleRef: D,
    type: B,
    ...ee
  } = r, Z = T.useRef(null), ne = Yx(), U = Ct(ne.ref, D), [G, ue] = T.useState(!1);
  u && G && ue(!1), T.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ue(!0), Z.current.focus();
    }
  }), []);
  const re = ne.shouldMount && !d && !u;
  T.useEffect(() => {
    G && h && !d && ne.pulsate();
  }, [d, h, G, ne]);
  function F(fe, _e, bt = p) {
    return kn((xt) => (_e && _e(xt), bt || ne[fe](xt), !0));
  }
  const z = F("start", O), K = F("stop", C), _ = F("stop", S), H = F("stop", M), Q = F("stop", (fe) => {
    G && fe.preventDefault(), $ && $(fe);
  }), X = F("start", k), ce = F("stop", m), W = F("stop", P), ve = F("stop", (fe) => {
    kl(fe.target) || ue(!1), b && b(fe);
  }, !1), A = kn((fe) => {
    Z.current || (Z.current = fe.currentTarget), kl(fe.target) && (ue(!0), w && w(fe)), v && v(fe);
  }), de = () => {
    const fe = Z.current;
    return c && c !== "button" && !(fe.tagName === "A" && fe.href);
  }, ie = kn((fe) => {
    h && !fe.repeat && G && fe.key === " " && ne.stop(fe, () => {
      ne.start(fe);
    }), fe.target === fe.currentTarget && de() && fe.key === " " && fe.preventDefault(), x && x(fe), fe.target === fe.currentTarget && de() && fe.key === "Enter" && !u && (fe.preventDefault(), f && f(fe));
  }), $e = kn((fe) => {
    h && fe.key === " " && G && !fe.defaultPrevented && ne.stop(fe, () => {
      ne.pulsate(fe);
    }), I && I(fe), f && fe.target === fe.currentTarget && de() && fe.key === " " && !fe.defaultPrevented && f(fe);
  });
  let be = c;
  be === "button" && (ee.href || ee.to) && (be = y);
  const Te = {};
  be === "button" ? (Te.type = B === void 0 ? "button" : B, Te.disabled = u) : (!ee.href && !ee.to && (Te.role = "button"), u && (Te["aria-disabled"] = u));
  const Fe = Ct(n, Z), Ee = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: N,
    focusVisible: G
  }, We = nw(Ee);
  return /* @__PURE__ */ R.jsxs(rw, {
    as: be,
    className: ye(We.root, l),
    ownerState: Ee,
    onBlur: ve,
    onClick: f,
    onContextMenu: K,
    onFocus: A,
    onKeyDown: ie,
    onKeyUp: $e,
    onMouseDown: z,
    onMouseLeave: Q,
    onMouseUp: H,
    onDragLeave: _,
    onTouchEnd: ce,
    onTouchMove: W,
    onTouchStart: X,
    ref: Fe,
    tabIndex: u ? -1 : N,
    type: B,
    ...Te,
    ...ee,
    children: [s, re ? /* @__PURE__ */ R.jsx(Ld, {
      ref: U,
      center: a,
      ...V
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
  component: bs,
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
function ow(e) {
  return Le("MuiIconButton", e);
}
const iw = De("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), aw = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: a
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${pe(r)}`, i && `edge${pe(i)}`, `size${pe(a)}`]
  };
  return Ke(s, ow, t);
}, sw = me(jr, {
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
  }, ...Object.entries(e.palette).filter(dn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(dn()).map(([t]) => ({
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
  [`&.${iw.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), lr = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, g = aw(h);
  return /* @__PURE__ */ R.jsx(sw, {
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
  children: An(o.node, (e) => T.Children.toArray(e.children).some((n) => /* @__PURE__ */ T.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const lw = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function cw(e) {
  return Le("MuiChip", e);
}
const Me = De("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), uw = (e) => {
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
  return Ke(u, cw, t);
}, dw = me("div", {
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
    }, ...Object.entries(e.palette).filter(dn(["contrastText"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(dn(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(dn(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(dn()).map(([n]) => ({
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
})), fw = me("span", {
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
function mc(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const _d = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    variant: S = "filled",
    tabIndex: v,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...x
  } = r, I = T.useRef(null), O = Ct(I, n), $ = (ne) => {
    ne.stopPropagation(), y && y(ne);
  }, M = (ne) => {
    ne.currentTarget === ne.target && mc(ne) && ne.preventDefault(), b && b(ne);
  }, m = (ne) => {
    ne.currentTarget === ne.target && y && mc(ne) && y(ne), f && f(ne);
  }, P = s !== !1 && g ? !0 : s, k = P || y ? jr : c || "div", N = {
    ...r,
    component: k,
    disabled: d,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ T.isValidElement(p) && p.props.color || l,
    onDelete: !!y,
    clickable: P,
    variant: S
  }, V = uw(N), D = k === jr ? {
    component: c || "div",
    focusVisibleClassName: V.focusVisible,
    ...y && {
      disableRipple: !0
    }
  } : {};
  let B = null;
  y && (B = u && /* @__PURE__ */ T.isValidElement(u) ? /* @__PURE__ */ T.cloneElement(u, {
    className: ye(u.props.className, V.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ R.jsx(lw, {
    className: ye(V.deleteIcon),
    onClick: $
  }));
  let ee = null;
  i && /* @__PURE__ */ T.isValidElement(i) && (ee = /* @__PURE__ */ T.cloneElement(i, {
    className: ye(V.avatar, i.props.className)
  }));
  let Z = null;
  return p && /* @__PURE__ */ T.isValidElement(p) && (Z = /* @__PURE__ */ T.cloneElement(p, {
    className: ye(V.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && ee && Z && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ R.jsxs(dw, {
    as: k,
    className: ye(V.root, a),
    disabled: P && d ? !0 : void 0,
    onClick: g,
    onKeyDown: M,
    onKeyUp: m,
    ref: O,
    tabIndex: w && d ? -1 : v,
    ownerState: N,
    ...D,
    ...x,
    children: [ee || Z, /* @__PURE__ */ R.jsx(fw, {
      className: ye(V.label),
      ownerState: N,
      children: h
    }), B]
  });
});
process.env.NODE_ENV !== "production" && (_d.propTypes = {
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
  children: Ib,
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
const pw = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function mw(e) {
  return Le("MuiAutocomplete", e);
}
const Ie = De("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var hc, gc;
const hw = (e) => {
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
  return Ke(p, mw, t);
}, gw = me("div", {
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
      [`& .${Ie.tag}`]: t[`tagSize${pe(l)}`]
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
  [`& .${Kn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${Kn.root}.${Gt.sizeSmall}`]: {
    [`& .${Kn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${sn.root}`]: {
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
  [`& .${sn.root}.${Gt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Ie.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Kt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Ie.hasPopupIcon}&, .${Ie.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${Ie.hasPopupIcon}.${Ie.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Kt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Ie.endAdornment}`]: {
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
    [`& .${Ie.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Kt.root}.${Gt.hiddenLabel}.${Gt.sizeSmall}`]: {
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
}), bw = me("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), yw = me(lr, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), vw = me(lr, {
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
}), xw = me(js, {
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
}))), ww = me(ea, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(je(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), Cw = me("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(je(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Sw = me("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(je(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Tw = me("ul", {
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ot(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Ie.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ot(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Ie.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ot(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), Ew = me(Si, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(je(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), Ow = me("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${Ie.option}`]: {
    paddingLeft: 24
  }
}), Bd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    clearIcon: d = hc || (hc = /* @__PURE__ */ R.jsx(pw, {
      fontSize: "small"
    })),
    clearOnBlur: p = !r.freeSolo,
    clearOnEscape: h = !1,
    clearText: g = "Clear",
    closeText: y = "Close",
    componentsProps: b,
    defaultValue: f = r.multiple ? [] : null,
    disableClearable: C = !1,
    disableCloseOnSelect: S = !1,
    disabled: v = !1,
    disabledItemsFocusable: w = !1,
    disableListWrap: x = !1,
    disablePortal: I = !1,
    filterOptions: O,
    filterSelectedOptions: $ = !1,
    forcePopupIcon: M = "auto",
    freeSolo: m = !1,
    fullWidth: P = !1,
    getLimitTagsText: k = (Ne) => `+${Ne}`,
    getOptionDisabled: N,
    getOptionKey: V,
    getOptionLabel: D,
    isOptionEqualToValue: B,
    groupBy: ee,
    handleHomeEndKeys: Z = !r.freeSolo,
    id: ne,
    includeInputInList: U = !1,
    inputValue: G,
    limitTags: ue = -1,
    ListboxComponent: re,
    ListboxProps: F,
    loading: z = !1,
    loadingText: K = "Loading…",
    multiple: _ = !1,
    noOptionsText: H = "No options",
    onChange: Q,
    onClose: X,
    onHighlightChange: ce,
    onInputChange: W,
    onOpen: ve,
    open: A,
    openOnFocus: de = !1,
    openText: ie = "Open",
    options: $e,
    PaperComponent: be,
    PopperComponent: Te,
    popupIcon: Fe = gc || (gc = /* @__PURE__ */ R.jsx(Td, {})),
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
    getInputProps: Mt,
    getInputLabelProps: Rt,
    getPopupIndicatorProps: he,
    getClearProps: xe,
    getTagProps: et,
    getListboxProps: it,
    getOptionProps: lt,
    value: jt,
    dirty: Et,
    expanded: nn,
    id: Ht,
    popupOpen: bn,
    focused: Ut,
    focusedTag: Ft,
    anchorEl: yn,
    setAnchorEl: Yt,
    inputValue: vn,
    groupedOptions: pt
  } = I0({
    ...r,
    componentName: "Autocomplete"
  }), rn = !C && !v && Et && !Ee, It = (!m || M === !0) && M !== !1, {
    onMouseDown: ge
  } = Mt(), {
    ref: on,
    ...wn
  } = it(), Cn = D || ((Ne) => Ne.label ?? Ne), E = {
    ...r,
    disablePortal: I,
    expanded: nn,
    focused: Ut,
    fullWidth: P,
    getOptionLabel: Cn,
    hasClearIcon: rn,
    hasPopupIcon: It,
    inputFocused: Ft === -1,
    popupOpen: bn,
    size: Qe
  }, q = hw(E), ae = {
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
  }, [j, L] = Bt("listbox", {
    elementType: Tw,
    externalForwardedProps: ae,
    ownerState: E,
    className: q.listbox,
    additionalProps: wn,
    ref: on
  }), [J, le] = Bt("paper", {
    elementType: ea,
    externalForwardedProps: ae,
    ownerState: E,
    className: q.paper
  }), [se, Oe] = Bt("popper", {
    elementType: js,
    externalForwardedProps: ae,
    ownerState: E,
    className: q.popper,
    additionalProps: {
      disablePortal: I,
      style: {
        width: yn ? yn.clientWidth : null
      },
      role: "presentation",
      anchorEl: yn,
      open: bn
    }
  });
  let Ce;
  if (_ && jt.length > 0) {
    const Ne = (St) => ({
      className: q.tag,
      disabled: v,
      ...et(St)
    });
    bt ? Ce = bt(jt, Ne, E) : Ce = jt.map((St, Sn) => {
      const {
        key: rr,
        ...oa
      } = Ne({
        index: Sn
      });
      return /* @__PURE__ */ R.jsx(_d, {
        label: Cn(St),
        size: Qe,
        ...oa,
        ...ae.slotProps.chip
      }, rr);
    });
  }
  if (ue > -1 && Array.isArray(Ce)) {
    const Ne = Ce.length - ue;
    !Ut && Ne > 0 && (Ce = Ce.splice(0, ue), Ce.push(/* @__PURE__ */ R.jsx("span", {
      className: q.tag,
      children: k(Ne)
    }, Ce.length)));
  }
  const yt = We || ((Ne) => /* @__PURE__ */ R.jsxs("li", {
    children: [/* @__PURE__ */ R.jsx(Ew, {
      className: q.groupLabel,
      ownerState: E,
      component: "div",
      children: Ne.group
    }), /* @__PURE__ */ R.jsx(Ow, {
      className: q.groupUl,
      ownerState: E,
      children: Ne.children
    })]
  }, Ne.key)), Nt = _e || ((Ne, St) => {
    const {
      key: Sn,
      ...rr
    } = Ne;
    return /* @__PURE__ */ R.jsx("li", {
      ...rr,
      children: Cn(St)
    }, Sn);
  }), ut = (Ne, St) => {
    const Sn = lt({
      option: Ne,
      index: St
    });
    return Nt({
      ...Sn,
      className: q.option
    }, Ne, {
      selected: Sn["aria-selected"],
      index: St,
      inputValue: vn
    }, E);
  }, an = ae.slotProps.clearIndicator, Yn = ae.slotProps.popupIndicator, qn = (Ne) => /* @__PURE__ */ R.jsx(xw, {
    as: se,
    ...Oe,
    children: /* @__PURE__ */ R.jsx(ww, {
      as: J,
      ...le,
      children: Ne
    })
  });
  let pr = null;
  return pt.length > 0 ? pr = qn(
    // TODO v7: remove `as` prop and move ListboxComponentProp to externalForwardedProps or remove ListboxComponentProp entirely
    // https://github.com/mui/material-ui/pull/43994#issuecomment-2401945800
    /* @__PURE__ */ R.jsx(j, {
      as: re,
      ...L,
      children: pt.map((Ne, St) => ee ? yt({
        key: Ne.key,
        group: Ne.group,
        children: Ne.options.map((Sn, rr) => ut(Sn, Ne.index + rr))
      }) : ut(Ne, St))
    })
  ) : z && pt.length === 0 ? pr = qn(/* @__PURE__ */ R.jsx(Cw, {
    className: q.loading,
    ownerState: E,
    children: K
  })) : pt.length === 0 && !m && !z && (pr = qn(/* @__PURE__ */ R.jsx(Sw, {
    className: q.noOptions,
    ownerState: E,
    role: "presentation",
    onMouseDown: (Ne) => {
      Ne.preventDefault();
    },
    children: H
  }))), /* @__PURE__ */ R.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ R.jsx(gw, {
      ref: n,
      className: ye(q.root, u),
      ownerState: E,
      ...ft(Pe),
      children: fe({
        id: Ht,
        disabled: v,
        fullWidth: !0,
        size: Qe === "small" ? "small" : void 0,
        InputLabelProps: Rt(),
        InputProps: {
          ref: Yt,
          className: q.inputRoot,
          startAdornment: Ce,
          onMouseDown: (Ne) => {
            Ne.target === Ne.currentTarget && ge(Ne);
          },
          ...(rn || It) && {
            endAdornment: /* @__PURE__ */ R.jsxs(bw, {
              className: q.endAdornment,
              ownerState: E,
              children: [rn ? /* @__PURE__ */ R.jsx(yw, {
                ...xe(),
                "aria-label": g,
                title: g,
                ownerState: E,
                ...an,
                className: ye(q.clearIndicator, an == null ? void 0 : an.className),
                children: d
              }) : null, It ? /* @__PURE__ */ R.jsx(vw, {
                ...he(),
                disabled: v,
                "aria-label": bn ? y : ie,
                title: bn ? y : ie,
                ownerState: E,
                ...Yn,
                className: ye(q.popupIndicator, Yn == null ? void 0 : Yn.className),
                children: Fe
              }) : null]
            })
          }
        },
        inputProps: {
          className: q.input,
          disabled: v,
          readOnly: Ee,
          ...Mt()
        }
      })
    }), yn ? pr : null]
  });
});
process.env.NODE_ENV !== "production" && (Bd.propTypes = {
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
  defaultValue: An(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
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
  value: An(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Oa = (e) => e.stopPropagation(), Rw = ({ options: e, ...t }) => {
  const n = at(
    () => e.find((r) => r.value === t.value),
    [e, t.value]
  );
  return /* @__PURE__ */ R.jsx(
    Bd,
    {
      onChange: (r, i) => {
        var a;
        return (a = t.onChange) == null ? void 0 : a.call(t, i == null ? void 0 : i.value);
      },
      value: n ?? null,
      options: e,
      onClick: Oa,
      onKeyDown: Oa,
      getOptionLabel: (r) => r.label,
      renderInput: (r) => /* @__PURE__ */ R.jsx(
        Od,
        {
          ...r,
          onClick: Oa,
          label: t.label,
          error: t.error,
          helperText: t.helperText
        }
      )
    }
  );
}, Pw = zn(ed)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, bc = (e) => e.stopPropagation(), Ra = ({ children: e, ...t }) => /* @__PURE__ */ R.jsxs(Pw, { children: [
  tu(t),
  e
] }), Iw = (e) => (t) => {
  const { filters: n, setFilters: r } = Xn(Ps), i = at(() => n[e.key], [n, e]), a = pn(
    (s) => {
      r({ ...n, [e.key]: s });
    },
    [e]
  );
  return e.filterEnabled ? e.filterType === go.AUTOCOMPLETE && (i === void 0 || typeof i == "string") ? /* @__PURE__ */ R.jsx(Ra, { ...t, children: /* @__PURE__ */ R.jsx(
    Rw,
    {
      options: e.filterOptions ?? [],
      onChange: a,
      value: i
    }
  ) }) : /* @__PURE__ */ R.jsx(Ra, { ...t, children: /* @__PURE__ */ R.jsx(
    Od,
    {
      autoComplete: "off",
      onClick: bc,
      onKeyDown: bc,
      value: i ?? "",
      onChange: (s) => a(s.target.value)
    }
  ) }) : /* @__PURE__ */ R.jsx(Ra, { ...t });
}, kw = {
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
}, $w = (e, t, n) => {
  let r;
  const i = kw[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Pa(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Mw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Nw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Dw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Aw = {
  date: Pa({
    formats: Mw,
    defaultWidth: "full"
  }),
  time: Pa({
    formats: Nw,
    defaultWidth: "full"
  }),
  dateTime: Pa({
    formats: Dw,
    defaultWidth: "full"
  })
}, jw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Fw = (e, t, n, r) => jw[e];
function Xr(e) {
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
const Lw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, _w = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Bw = {
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
}, zw = {
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
}, Ww = {
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
}, Vw = {
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
}, Hw = (e, t) => {
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
}, Uw = {
  ordinalNumber: Hw,
  era: Xr({
    values: Lw,
    defaultWidth: "wide"
  }),
  quarter: Xr({
    values: _w,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Xr({
    values: Bw,
    defaultWidth: "wide"
  }),
  day: Xr({
    values: zw,
    defaultWidth: "wide"
  }),
  dayPeriod: Xr({
    values: Ww,
    defaultWidth: "wide",
    formattingValues: Vw,
    defaultFormattingWidth: "wide"
  })
};
function Zr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const s = a[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? qw(l, (p) => p.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Yw(l, (p) => p.test(s))
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
function Yw(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function qw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Gw(e) {
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
const Kw = /^(\d+)(th|st|nd|rd)?/i, Xw = /\d+/i, Zw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Qw = {
  any: [/^b/i, /^(a|c)/i]
}, Jw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, eC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tC = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, nC = {
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
}, rC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, oC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, iC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, aC = {
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
}, sC = {
  ordinalNumber: Gw({
    matchPattern: Kw,
    parsePattern: Xw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Zr({
    matchPatterns: Zw,
    defaultMatchWidth: "wide",
    parsePatterns: Qw,
    defaultParseWidth: "any"
  }),
  quarter: Zr({
    matchPatterns: Jw,
    defaultMatchWidth: "wide",
    parsePatterns: eC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Zr({
    matchPatterns: tC,
    defaultMatchWidth: "wide",
    parsePatterns: nC,
    defaultParseWidth: "any"
  }),
  day: Zr({
    matchPatterns: rC,
    defaultMatchWidth: "wide",
    parsePatterns: oC,
    defaultParseWidth: "any"
  }),
  dayPeriod: Zr({
    matchPatterns: iC,
    defaultMatchWidth: "any",
    parsePatterns: aC,
    defaultParseWidth: "any"
  })
}, lC = {
  code: "en-US",
  formatDistance: $w,
  formatLong: Aw,
  formatRelative: Fw,
  localize: Uw,
  match: sC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let cC = {};
function Bo() {
  return cC;
}
const zd = 6048e5, uC = 864e5, yc = Symbol.for("constructDateFrom");
function Qn(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && yc in e ? e[yc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function xn(e, t) {
  return Qn(t || e, e);
}
function vc(e) {
  const t = xn(e), n = new Date(
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
function dC(e, ...t) {
  const n = Qn.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function xc(e, t) {
  const n = xn(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function fC(e, t, n) {
  const [r, i] = dC(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = xc(r), s = xc(i), l = +a - vc(a), c = +s - vc(s);
  return Math.round((l - c) / uC);
}
function pC(e, t) {
  const n = xn(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function mC(e, t) {
  const n = xn(e, t == null ? void 0 : t.in);
  return fC(n, pC(n)) + 1;
}
function Oo(e, t) {
  var l, c, u, d;
  const n = Bo(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, i = xn(e, t == null ? void 0 : t.in), a = i.getDay(), s = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Ei(e, t) {
  return Oo(e, { ...t, weekStartsOn: 1 });
}
function Wd(e, t) {
  const n = xn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Qn(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Ei(i), s = Qn(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const l = Ei(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function hC(e, t) {
  const n = Wd(e, t), r = Qn(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ei(r);
}
function gC(e, t) {
  const n = xn(e, t == null ? void 0 : t.in), r = +Ei(n) - +hC(n);
  return Math.round(r / zd) + 1;
}
function Vd(e, t) {
  var d, p, h, g;
  const n = xn(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = Bo(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((g = (h = i.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = Qn((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const l = Oo(s, t), c = Qn((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const u = Oo(c, t);
  return +n >= +l ? r + 1 : +n >= +u ? r : r - 1;
}
function bC(e, t) {
  var l, c, u, d;
  const n = Bo(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, i = Vd(e, t), a = Qn((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Oo(a, t);
}
function yC(e, t) {
  const n = xn(e, t == null ? void 0 : t.in), r = +Oo(n, t) - +bC(n, t);
  return Math.round(r / zd) + 1;
}
function Xe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Gn = {
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
}, wc = {
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
    return Gn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = Vd(e, r), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = a % 100;
      return Xe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Xe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Wd(e);
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
        return Gn.M(e, t);
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
    const i = yC(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Xe(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = gC(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Xe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Gn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = mC(e);
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
    return Gn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Gn.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Gn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Gn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Gn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Sc(r);
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
        return Sc(r);
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
        return "GMT" + Cc(r, ":");
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
        return "GMT" + Cc(r, ":");
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
function Cc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Xe(a, 2);
}
function Sc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Xe(Math.abs(e) / 60, 2) : ar(e, t);
}
function ar(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Xe(Math.trunc(r / 60), 2), a = Xe(r % 60, 2);
  return n + i + t + a;
}
const Tc = (e, t) => {
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
}, Hd = (e, t) => {
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
}, vC = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return Tc(e, t);
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
  return a.replace("{{date}}", Tc(r, t)).replace("{{time}}", Hd(i, t));
}, xC = {
  p: Hd,
  P: vC
}, wC = /^D+$/, CC = /^Y+$/, SC = ["D", "DD", "YY", "YYYY"];
function TC(e) {
  return wC.test(e);
}
function EC(e) {
  return CC.test(e);
}
function OC(e, t, n) {
  const r = RC(e, t, n);
  if (console.warn(r), SC.includes(e)) throw new RangeError(r);
}
function RC(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Ud(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Yd(e) {
  return !(!Ud(e) && typeof e != "number" || isNaN(+xn(e)));
}
const PC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, IC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kC = /^'([^]*?)'?$/, $C = /''/g, MC = /[a-zA-Z]/;
function NC(e, t, n) {
  var d, p, h, g, y, b, f, C;
  const r = Bo(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? lC, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((b = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((C = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = xn(e, n == null ? void 0 : n.in);
  if (!Yd(l))
    throw new RangeError("Invalid time value");
  let c = t.match(IC).map((S) => {
    const v = S[0];
    if (v === "p" || v === "P") {
      const w = xC[v];
      return w(S, i.formatLong);
    }
    return S;
  }).join("").match(PC).map((S) => {
    if (S === "''")
      return { isToken: !1, value: "'" };
    const v = S[0];
    if (v === "'")
      return { isToken: !1, value: DC(S) };
    if (wc[v])
      return { isToken: !0, value: S };
    if (v.match(MC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: S };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(l, c));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: i
  };
  return c.map((S) => {
    if (!S.isToken) return S.value;
    const v = S.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && EC(v) || !(n != null && n.useAdditionalDayOfYearTokens) && TC(v)) && OC(v, t, String(e));
    const w = wc[v[0]];
    return w(l, v, i.localize, u);
  }).join("");
}
function DC(e) {
  const t = e.match(kC);
  return t ? t[1].replace($C, "'") : e;
}
function AC() {
  return Object.assign({}, Bo());
}
function Ec(e, t, n) {
  const r = AC(), i = LC(e, n.timeZone, n.locale ?? r.locale);
  return "formatToParts" in i ? jC(i, t) : FC(i, t);
}
function jC(e, t) {
  const n = e.formatToParts(t);
  for (let r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function FC(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function LC(e, t, n) {
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function _C(e, t) {
  const n = HC(t);
  return "formatToParts" in n ? zC(n, e) : WC(n, e);
}
const BC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function zC(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let i = 0; i < n.length; i++) {
      const a = BC[n[i].type];
      a !== void 0 && (r[a] = parseInt(n[i].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function WC(e, t) {
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
const Ia = {}, Oc = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), VC = Oc === "06/25/2014, 00:00:00" || Oc === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function HC(e) {
  return Ia[e] || (Ia[e] = VC ? new Intl.DateTimeFormat("en-US", {
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
function qd(e, t, n, r, i, a, s) {
  const l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, i, a, s), l;
}
const Rc = 36e5, UC = 6e4, ka = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Fs(e, t, n) {
  if (!e)
    return 0;
  let r = ka.timezoneZ.exec(e);
  if (r)
    return 0;
  let i, a;
  if (r = ka.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), Pc(i) ? -(i * Rc) : NaN;
  if (r = ka.timezoneHHMM.exec(e), r) {
    i = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return Pc(i, s) ? (a = Math.abs(i) * Rc + s * UC, r[1] === "+" ? -a : a) : NaN;
  }
  if (GC(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : YC(t), l = ts(s, e);
    return -(n ? l : qC(t, l, e));
  }
  return NaN;
}
function YC(e) {
  return qd(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function ts(e, t) {
  const n = _C(e, t), r = qd(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let i = e.getTime();
  const a = i % 1e3;
  return i -= a >= 0 ? a : 1e3 + a, r - i;
}
function qC(e, t, n) {
  let i = e.getTime() - t;
  const a = ts(new Date(i), n);
  if (t === a)
    return t;
  i -= a - t;
  const s = ts(new Date(i), n);
  return a === s ? a : Math.max(a, s);
}
function Pc(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Ic = {};
function GC(e) {
  if (Ic[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Ic[e] = !0, !0;
  } catch {
    return !1;
  }
}
const KC = 60 * 1e3, XC = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = $a(n.timeZone, e);
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return kc(r);
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
    const r = $a(n.timeZone, e);
    switch (t) {
      case "x":
        return kc(r);
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
    const r = $a(n.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ZC(r, ":");
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
        return Ec("short", e, n);
      case "zzzz":
      default:
        return Ec("long", e, n);
    }
  }
};
function $a(e, t) {
  const n = e ? Fs(e, t, !0) / KC : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
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
function kc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Oi(Math.abs(e) / 60, 2) : Tr(e, t);
}
function ZC(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Oi(a, 2);
}
function $c(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const QC = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Ma = 36e5, Mc = 6e4, JC = 2, Dt = {
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
  timeZone: QC
};
function Gd(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? JC : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const r = e1(e), { year: i, restDateString: a } = t1(r.date, n), s = n1(a, i);
  if (s === null || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const l = s.getTime();
    let c = 0, u;
    if (r.time && (c = r1(r.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (u = Fs(r.timeZone || t.timeZone, new Date(l + c)), isNaN(u))
        return /* @__PURE__ */ new Date(NaN);
    } else
      u = $c(new Date(l + c)), u = $c(new Date(l + c + u));
    return new Date(l + c + u);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function e1(e) {
  const t = {};
  let n = Dt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Dt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const i = Dt.timeZone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timeZone = i[1].trim()) : t.time = r;
  }
  return t;
}
function t1(e, t) {
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
function n1(e, t) {
  if (t === null)
    return null;
  let n, r, i;
  if (!e || !e.length)
    return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = Dt.MM.exec(e);
  if (a)
    return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, Dc(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = Dt.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return a1(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Dt.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return Dc(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Dt.Www.exec(e), a)
    return i = parseInt(a[1], 10) - 1, Ac(i) ? Nc(t, i) : /* @__PURE__ */ new Date(NaN);
  if (a = Dt.WwwD.exec(e), a) {
    i = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return Ac(i, s) ? Nc(t, i, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function r1(e) {
  let t, n, r = Dt.HH.exec(e);
  if (r)
    return t = parseFloat(r[1].replace(",", ".")), Na(t) ? t % 24 * Ma : NaN;
  if (r = Dt.HHMM.exec(e), r)
    return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), Na(t, n) ? t % 24 * Ma + n * Mc : NaN;
  if (r = Dt.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const i = parseFloat(r[3].replace(",", "."));
    return Na(t, n, i) ? t % 24 * Ma + n * Mc + i * 1e3 : NaN;
  }
  return null;
}
function Nc(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, a = t * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const o1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], i1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Kd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Dc(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    const r = Kd(e);
    if (r && n > i1[t] || !r && n > o1[t])
      return !1;
  }
  return !0;
}
function a1(e, t) {
  if (t < 1)
    return !1;
  const n = Kd(e);
  return !(n && t > 366 || !n && t > 365);
}
function Ac(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Na(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
const s1 = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function l1(e, t, n = {}) {
  t = String(t);
  const r = t.match(s1);
  if (r) {
    const i = Gd(n.originalDate || e, n);
    t = r.reduce(function(a, s) {
      if (s[0] === "'")
        return a;
      const l = a.indexOf(s), c = a[l - 1] === "'", u = a.replace(s, "'" + XC[s[0]](i, s, n) + "'");
      return c ? u.substring(0, l - 1) + u.substring(l + 1) : u;
    }, t);
  }
  return NC(e, t, n);
}
function c1(e, t, n) {
  e = Gd(e, n);
  const r = Fs(t, e, !0), i = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), a.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), a;
}
function u1(e, t, n, r) {
  return r = {
    ...r,
    timeZone: t,
    originalDate: e
  }, l1(c1(e, t, { timeZone: r.timeZone }), n, r);
}
var Xd = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.DATE_WITH_TIME = "dd-MM-yyyy HH:mm", e.DATE = "dd-MM-yyyy", e.TIME = "HH:mm", e))(Xd || {});
const d1 = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'", n = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  if (!e)
    return "";
  const r = !Ud(e) && typeof e == "string" ? new Date(e) : e;
  return Yd(r) ? u1(e, n, t) : "--";
}, jc = (e) => e.trim().toLowerCase(), f1 = ({
  columns: e,
  selectionEnabled: t
}) => {
  const n = pn((r) => {
    const i = () => {
      if (r.renderCell)
        return r.renderCell;
      if (r.type === oo.DATE)
        return ({ row: s }) => {
          var l, c;
          return d1(
            s[r.key],
            ((l = r.dateOptions) == null ? void 0 : l.formatDate) ?? Xd.DATE_WITH_TIME,
            (c = r.dateOptions) == null ? void 0 : c.timeZone
          );
        };
    }, a = () => r.renderHeaderCell ? r.renderHeaderCell : Iw(r);
    return { ...r, renderCell: i(), renderHeaderCell: a() };
  }, []);
  return at(() => {
    const r = [];
    return t && r.push({
      ...xp,
      minWidth: 50,
      maxWidth: 50
    }), r.push(...e.map((i) => n(i))), r;
  }, [e, n]);
};
function p1(e) {
  return Le("PrivateSwitchBase", e);
}
De("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const m1 = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", n && "checked", r && "disabled", i && `edge${pe(i)}`],
    input: ["input"]
  };
  return Ke(a, p1, t);
}, h1 = me(jr)({
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
}), g1 = me("input", {
  shouldForwardProp: tn
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
}), Zd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    onFocus: S,
    readOnly: v,
    required: w = !1,
    tabIndex: x,
    type: I,
    value: O,
    ...$
  } = t, [M, m] = Rr({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), P = fr(), k = (ne) => {
    S && S(ne), P && P.onFocus && P.onFocus(ne);
  }, N = (ne) => {
    f && f(ne), P && P.onBlur && P.onBlur(ne);
  }, V = (ne) => {
    if (ne.nativeEvent.defaultPrevented)
      return;
    const U = ne.target.checked;
    m(U), C && C(ne, U);
  };
  let D = c;
  P && typeof D > "u" && (D = P.disabled);
  const B = I === "checkbox" || I === "radio", ee = {
    ...t,
    checked: M,
    disabled: D,
    disableFocusRipple: u,
    edge: d
  }, Z = m1(ee);
  return /* @__PURE__ */ R.jsxs(h1, {
    component: "span",
    className: ye(Z.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: D,
    tabIndex: null,
    role: void 0,
    onFocus: k,
    onBlur: N,
    ownerState: ee,
    ref: n,
    ...$,
    children: [/* @__PURE__ */ R.jsx(g1, {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      className: Z.input,
      disabled: D,
      id: B ? h : void 0,
      name: b,
      onChange: V,
      readOnly: v,
      ref: y,
      required: w,
      ownerState: ee,
      tabIndex: x,
      type: I,
      ...I === "checkbox" && O === void 0 ? {} : {
        value: O
      },
      ...g
    }), M ? a : p]
  });
});
process.env.NODE_ENV !== "production" && (Zd.propTypes = {
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
const b1 = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), y1 = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), v1 = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function x1(e) {
  return Le("MuiCheckbox", e);
}
const Da = De("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), w1 = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: i
  } = e, a = {
    root: ["root", n && "indeterminate", `color${pe(r)}`, `size${pe(i)}`]
  }, s = Ke(a, x1, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, C1 = me(Zd, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
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
  }, ...Object.entries(e.palette).filter(dn()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ot(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(dn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Da.checked}, &.${Da.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Da.disabled}`]: {
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
}))), S1 = /* @__PURE__ */ R.jsx(y1, {}), T1 = /* @__PURE__ */ R.jsx(b1, {}), E1 = /* @__PURE__ */ R.jsx(v1, {}), Qd = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = S1,
    color: a = "primary",
    icon: s = T1,
    indeterminate: l = !1,
    indeterminateIcon: c = E1,
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
  }, C = w1(f);
  return /* @__PURE__ */ R.jsx(C1, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": l,
      ...u
    },
    icon: /* @__PURE__ */ T.cloneElement(y, {
      fontSize: y.props.fontSize ?? d
    }),
    checkedIcon: /* @__PURE__ */ T.cloneElement(b, {
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
process.env.NODE_ENV !== "production" && (Qd.propTypes = {
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
const O1 = zn(Qd)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${Tt.primary500};
    }
`;
var R1 = {
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
function P1(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return R1[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Aa(e) {
  var t = P1(e);
  return "".concat(t.value).concat(t.unit);
}
var I1 = function(e, t, n) {
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
}, k1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}, $1 = I1("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function M1(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, a = e.speedMultiplier, s = a === void 0 ? 1 : a, l = e.cssOverride, c = l === void 0 ? {} : l, u = e.size, d = u === void 0 ? 15 : u, p = e.margin, h = p === void 0 ? 2 : p, g = k1(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), y = Ri({ display: "inherit" }, c), b = function(f) {
    return {
      backgroundColor: i,
      width: Aa(d),
      height: Aa(d),
      margin: Aa(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat($1, " ").concat(0.75 / s, "s ").concat(f * 0.12 / s, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return n ? T.createElement(
    "span",
    Ri({ style: y }, g),
    T.createElement("span", { style: b(1) }),
    T.createElement("span", { style: b(2) }),
    T.createElement("span", { style: b(3) })
  ) : null;
}
const N1 = ({
  comparator: e,
  filterType: t,
  value: n,
  valueToMatch: r
}) => e ? e(n, r) : t === go.TEXT && typeof n == "string" && typeof r == "string" ? jc(n).includes(jc(r)) : t === go.AUTOCOMPLETE ? n === r : !1, D1 = ({
  columns: e,
  rows: t,
  enabled: n
}) => {
  const { filters: r } = Xn(Ps);
  return at(() => n ? [...t].filter(
    (i) => Object.entries(r).every(([a, s]) => {
      if (s === void 0 || typeof s == "string" && s === "")
        return !0;
      const l = e.find((c) => c.key === a);
      return l ? N1({
        comparator: l.filterComparator,
        filterType: l.filterType ?? go.TEXT,
        value: i[a],
        valueToMatch: s
      }) : !0;
    })
  ) : t, [n, r, t, e]);
}, Fc = De("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Lc = De("MuiListItemIcon", ["root", "alignItemsFlexStart"]), _c = De("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function A1(e) {
  return Le("MuiMenuItem", e);
}
const Qr = De("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), j1 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, F1 = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: s
  } = e, c = Ke({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, A1, s);
  return {
    ...s,
    ...c
  };
}, L1 = me(jr, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: j1
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
  [`&.${Qr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ot(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Qr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ot(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Qr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ot(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ot(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Qr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Qr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Fc.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Fc.inset}`]: {
    marginLeft: 52
  },
  [`& .${_c.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${_c.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Lc.root}`]: {
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
      [`& .${Lc.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Jd = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = r, y = T.useContext(gi), b = T.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: c
  }), [y.dense, s, c]), f = T.useRef(null);
  Dn(() => {
    i && (f.current ? f.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const C = {
    ...r,
    dense: b.dense,
    divider: l,
    disableGutters: c
  }, S = F1(r), v = Ct(f, n);
  let w;
  return r.disabled || (w = p !== void 0 ? p : -1), /* @__PURE__ */ R.jsx(gi.Provider, {
    value: b,
    children: /* @__PURE__ */ R.jsx(L1, {
      ref: v,
      role: d,
      tabIndex: w,
      component: a,
      focusVisibleClassName: ye(S.focusVisible, u),
      className: ye(S.root, h),
      ...g,
      ownerState: C,
      classes: S
    })
  });
});
process.env.NODE_ENV !== "production" && (Jd.propTypes = {
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
const ef = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (ef.displayName = "TableContext");
const tf = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (tf.displayName = "Tablelvl2Context");
function _1(e) {
  return Le("MuiTableCell", e);
}
const B1 = De("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), z1 = (e) => {
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
  return Ke(l, _1, t);
}, W1 = me("td", {
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
      [`&.${B1.paddingCheckbox}`]: {
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
  } = r, g = T.useContext(ef), y = T.useContext(tf), b = y && y.variant === "head";
  let f;
  s ? f = s : f = b ? "th" : "td";
  let C = c;
  f === "td" ? C = void 0 : !C && b && (C = "col");
  const S = p || y && y.variant, v = {
    ...r,
    align: i,
    component: f,
    padding: l || (g && g.padding ? g.padding : "normal"),
    size: u || (g && g.size ? g.size : "medium"),
    sortDirection: d,
    stickyHeader: S === "head" && g && g.stickyHeader,
    variant: S
  }, w = z1(v);
  let x = null;
  return d && (x = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ R.jsx(W1, {
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
function V1(e) {
  return Le("MuiToolbar", e);
}
De("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const H1 = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return Ke({
    root: ["root", !n && "gutters", r]
  }, V1, t);
}, U1 = me("div", {
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
}))), nf = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, d = H1(u);
  return /* @__PURE__ */ R.jsx(U1, {
    as: a,
    className: ye(d.root, i),
    ref: n,
    ownerState: u,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (nf.propTypes = {
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
const Y1 = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), q1 = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight"), G1 = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage"), K1 = Fn(/* @__PURE__ */ R.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage"), rf = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = t, f = vs(), C = (G) => {
    c(G, 0);
  }, S = (G) => {
    c(G, u - 1);
  }, v = (G) => {
    c(G, u + 1);
  }, w = (G) => {
    c(G, Math.max(0, Math.ceil(i / d) - 1));
  }, x = g.firstButton ?? lr, I = g.lastButton ?? lr, O = g.nextButton ?? lr, $ = g.previousButton ?? lr, M = g.firstButtonIcon ?? K1, m = g.lastButtonIcon ?? G1, P = g.nextButtonIcon ?? q1, k = g.previousButtonIcon ?? Y1, N = f ? I : x, V = f ? O : $, D = f ? $ : O, B = f ? x : I, ee = f ? y.lastButton : y.firstButton, Z = f ? y.nextButton : y.previousButton, ne = f ? y.previousButton : y.nextButton, U = f ? y.firstButton : y.lastButton;
  return /* @__PURE__ */ R.jsxs("div", {
    ref: n,
    ...b,
    children: [p && /* @__PURE__ */ R.jsx(N, {
      onClick: C,
      disabled: a || u === 0,
      "aria-label": s("first", u),
      title: s("first", u),
      ...ee,
      children: f ? /* @__PURE__ */ R.jsx(m, {
        ...y.lastButtonIcon
      }) : /* @__PURE__ */ R.jsx(M, {
        ...y.firstButtonIcon
      })
    }), /* @__PURE__ */ R.jsx(V, {
      onClick: S,
      disabled: a || u === 0,
      color: "inherit",
      "aria-label": s("previous", u),
      title: s("previous", u),
      ...Z ?? r,
      children: f ? /* @__PURE__ */ R.jsx(P, {
        ...y.nextButtonIcon
      }) : /* @__PURE__ */ R.jsx(k, {
        ...y.previousButtonIcon
      })
    }), /* @__PURE__ */ R.jsx(D, {
      onClick: v,
      disabled: a || (i !== -1 ? u >= Math.ceil(i / d) - 1 : !1),
      color: "inherit",
      "aria-label": s("next", u),
      title: s("next", u),
      ...ne ?? l,
      children: f ? /* @__PURE__ */ R.jsx(k, {
        ...y.previousButtonIcon
      }) : /* @__PURE__ */ R.jsx(P, {
        ...y.nextButtonIcon
      })
    }), h && /* @__PURE__ */ R.jsx(B, {
      onClick: w,
      disabled: a || u >= Math.ceil(i / d) - 1,
      "aria-label": s("last", u),
      title: s("last", u),
      ...U,
      children: f ? /* @__PURE__ */ R.jsx(M, {
        ...y.firstButtonIcon
      }) : /* @__PURE__ */ R.jsx(m, {
        ...y.lastButtonIcon
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (rf.propTypes = {
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
function X1(e) {
  return Le("MuiTablePagination", e);
}
const uo = De("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var Bc;
const Z1 = me(Pi, {
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
}))), Q1 = me(nf, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (e, t) => ({
    [`& .${uo.actions}`]: t.actions,
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
  [`& .${uo.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}))), J1 = me("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})({
  flex: "1 1 100%"
}), eS = me("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (e, t) => t.selectLabel
})(je(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
}))), tS = me(ta, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (e, t) => ({
    [`& .${uo.selectIcon}`]: t.selectIcon,
    [`& .${uo.select}`]: t.select,
    ...t.input,
    ...t.selectRoot
  })
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${uo.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
}), nS = me(Jd, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (e, t) => t.menuItem
})({}), rS = me("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (e, t) => t.displayedRows
})(je(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
})));
function oS({
  from: e,
  to: t,
  count: n
}) {
  return `${e}–${t} of ${n !== -1 ? n : `more than ${t}`}`;
}
function iS(e) {
  return `Go to ${e} page`;
}
const aS = (e) => {
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
  }, X1, t);
}, of = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ze({
    props: t,
    name: "MuiTablePagination"
  }), {
    ActionsComponent: i = rf,
    backIconButtonProps: a,
    className: s,
    colSpan: l,
    component: c = Pi,
    count: u,
    disabled: d = !1,
    getItemAriaLabel: p = iS,
    labelDisplayedRows: h = oS,
    labelRowsPerPage: g = "Rows per page:",
    nextIconButtonProps: y,
    onPageChange: b,
    onRowsPerPageChange: f,
    page: C,
    rowsPerPage: S,
    rowsPerPageOptions: v = [10, 25, 50, 100],
    SelectProps: w = {},
    showFirstButton: x = !1,
    showLastButton: I = !1,
    slotProps: O = {},
    slots: $ = {},
    ...M
  } = r, m = r, P = aS(m), k = (O == null ? void 0 : O.select) ?? w, N = k.native ? "option" : nS;
  let V;
  (c === Pi || c === "td") && (V = l || 1e3);
  const D = bo(k.id), B = bo(k.labelId), ee = () => u === -1 ? (C + 1) * S : S === -1 ? u : Math.min(u, (C + 1) * S);
  return /* @__PURE__ */ R.jsx(Z1, {
    colSpan: V,
    ref: n,
    as: c,
    ownerState: m,
    className: ye(P.root, s),
    ...M,
    children: /* @__PURE__ */ R.jsxs(Q1, {
      className: P.toolbar,
      children: [/* @__PURE__ */ R.jsx(J1, {
        className: P.spacer
      }), v.length > 1 && /* @__PURE__ */ R.jsx(eS, {
        className: P.selectLabel,
        id: B,
        children: g
      }), v.length > 1 && /* @__PURE__ */ R.jsx(tS, {
        variant: "standard",
        ...!k.variant && {
          input: Bc || (Bc = /* @__PURE__ */ R.jsx(Fo, {}))
        },
        value: S,
        onChange: f,
        id: D,
        labelId: B,
        ...k,
        classes: {
          ...k.classes,
          // TODO v5 remove `classes.input`
          root: ye(P.input, P.selectRoot, (k.classes || {}).root),
          select: ye(P.select, (k.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: ye(P.selectIcon, (k.classes || {}).icon)
        },
        disabled: d,
        children: v.map((Z) => /* @__PURE__ */ jf(N, {
          ...!mi(N) && {
            ownerState: m
          },
          className: P.menuItem,
          key: Z.label ? Z.label : Z,
          value: Z.value ? Z.value : Z
        }, Z.label ? Z.label : Z))
      }), /* @__PURE__ */ R.jsx(rS, {
        className: P.displayedRows,
        children: h({
          from: u === 0 ? 0 : C * S + 1,
          to: ee(),
          count: u === -1 ? -1 : u,
          page: C
        })
      }), /* @__PURE__ */ R.jsx(i, {
        className: P.actions,
        backIconButtonProps: a,
        count: u,
        nextIconButtonProps: y,
        onPageChange: b,
        page: C,
        rowsPerPage: S,
        showFirstButton: x,
        showLastButton: I,
        slotProps: O.actions,
        slots: $.actions,
        getItemAriaLabel: p,
        disabled: d
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (of.propTypes = {
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
  page: An(Pr.isRequired, (e) => {
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
const sS = zn.div`
    height: 80px;
    width: 100%;
`, lS = At.memo(
  ({ currentPage: e, setCurrentPage: t, setPageSize: n, pageSize: r, totalCount: i, labels: a }) => {
    const s = pn(
      (c, u) => {
        t(u);
      },
      []
    ), l = pn(
      (c) => {
        n(parseInt(c.target.value, 10)), t(0);
      },
      []
    );
    return /* @__PURE__ */ R.jsx(sS, { children: /* @__PURE__ */ R.jsx(
      of,
      {
        labelRowsPerPage: a != null && a.rowsPerPageLabel ? /* @__PURE__ */ R.jsx("span", { children: a == null ? void 0 : a.rowsPerPageLabel }) : void 0,
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
), cS = (e = 10) => {
  const [t, n] = Ot(0), [r, i] = Ot(e), a = pn(() => {
    n(0), i(e);
  }, []);
  return Po(() => {
    n(0);
  }, [r]), {
    currentPage: t,
    pageSize: r,
    defaultPageSize: e,
    setCurrentPage: n,
    setPageSize: i,
    resetPagination: a
  };
}, uS = zn.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${Tt.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, dS = At.memo(({ checked: e, onChange: t }) => {
  const n = pn(
    (r, i) => {
      t(i, r.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ R.jsx(O1, { checked: e, onChange: n });
}), fS = ({
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
  const { pageSize: y, currentPage: b, setCurrentPage: f, setPageSize: C } = cS(
    h == null ? void 0 : h.defaultPageSize
  ), S = f1({
    columns: r,
    selectionEnabled: !!c
  }), v = at(
    () => S.some((N) => N.filterEnabled),
    [S]
  ), w = at(
    () => (h == null ? void 0 : h.enabled) && !h.remotePagination,
    [h]
  ), x = at(() => !p, [p]), I = D1({
    columns: S,
    rows: n,
    enabled: x
  }), O = at(() => !a, [a]), {
    sortedRows: $,
    sortColumns: M,
    setSortedColumns: m
  } = qh({
    columns: S,
    rows: I,
    defaultSortColumns: s
  }), P = at(() => w ? $.slice(b * y, (b + 1) * y) : $, [$, w, b, y]), k = pn(
    (N, V) => V === 0 ? "first-row" : V === n.length - 1 ? "last-row" : "",
    [n]
  );
  return Po(() => {
    const N = l == null ? void 0 : l.filter(
      (V) => n.some((D) => D.id === V)
    );
    (N == null ? void 0 : N.length) != (l == null ? void 0 : l.length) && (c == null || c(N ?? []));
  }, [n, l]), /* @__PURE__ */ R.jsxs(Uh, { $pagination: !!(h != null && h.enabled), children: [
    /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx(
      iu,
      {
        rowHeight: 50,
        selectedRows: l ? new Set(l) : void 0,
        onSelectedRowsChange: (N) => {
          c == null || c(Array.from(N));
        },
        rowKeyGetter: (N) => N.id,
        rows: P,
        onSortColumnsChange: O ? m : a,
        sortColumns: O ? M : i,
        columns: S,
        rowClass: k,
        headerRowHeight: v ? 70 : void 0,
        renderers: {
          renderCheckbox: (N) => /* @__PURE__ */ R.jsx(dS, { ...N }),
          ...g.renderers
        },
        ...g,
        style: { ...Vm, ...e ?? {} }
      }
    ) }),
    h != null && h.enabled ? /* @__PURE__ */ R.jsx(
      lS,
      {
        ...(h == null ? void 0 : h.remotePagination) ?? {
          currentPage: b,
          setCurrentPage: f,
          pageSize: y,
          setPageSize: C,
          totalCount: I.length
        }
      }
    ) : null,
    t ? /* @__PURE__ */ R.jsxs(uS, { children: [
      /* @__PURE__ */ R.jsx("div", {}),
      /* @__PURE__ */ R.jsx(M1, { color: Tt.primary500 })
    ] }) : null
  ] });
}, vS = ({
  filters: e,
  setFilters: t,
  ...n
}) => /* @__PURE__ */ R.jsx(T0, { filters: e, setFilters: t, children: /* @__PURE__ */ R.jsx(fS, { ...n, filters: e, setFilters: t }) });
export {
  oo as ColumnType,
  Xd as DATE_FORMAT,
  vS as DataGrid,
  fp as DataGridDefaultRenderersProvider,
  go as FilterType,
  gS as Row,
  Ir as SELECT_COLUMN_KEY,
  rs as SelectCellFormatter,
  xp as SelectColumn,
  up as ToggleGroup,
  bS as TreeDataGrid,
  d1 as convertDate,
  Vm as defaultTheme,
  jc as getStringToCompare,
  op as renderCheckbox,
  tu as renderHeaderCell,
  gm as renderSortIcon,
  bm as renderSortPriority,
  cp as renderToggleGroup,
  dp as renderValue,
  Tt as taktikTheme,
  yS as textEditor,
  gp as useHeaderRowSelection,
  Zc as useRowSelection
};
