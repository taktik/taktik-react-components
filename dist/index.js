var Oc = Object.defineProperty;
var $c = (e, t, r) => t in e ? Oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Fr = (e, t, r) => $c(e, typeof t != "symbol" ? t + "" : t, r);
import * as H from "react";
import Rt, { forwardRef as Gn, useContext as xr, Children as Ic, isValidElement as On, cloneElement as $n, createContext as nn, memo as Gt, useState as Ze, useCallback as nr, useRef as kt, useMemo as Ue, useImperativeHandle as Pc, useEffect as qn, useLayoutEffect as Dc, useId as Mc } from "react";
import { flushSync as Nn } from "react-dom";
function Fn() {
  return Fn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fn.apply(null, arguments);
}
function ji(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ac = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _c = /* @__PURE__ */ ji(
  function(e) {
    return Ac.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Nc = !1;
function Fc(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function jc(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var zc = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Nc : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jc(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = Fc(o);
      try {
        a.insertRule(n, a.cssRules.length);
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
}(), Xe = "-ms-", jn = "-moz-", ye = "-webkit-", zi = "comm", Jo = "rule", ea = "decl", Bc = "@import", Bi = "@keyframes", Lc = "@layer", Wc = Math.abs, Kn = String.fromCharCode, Vc = Object.assign;
function Yc(e, t) {
  return Ke(e, 0) ^ 45 ? (((t << 2 ^ Ke(e, 0)) << 2 ^ Ke(e, 1)) << 2 ^ Ke(e, 2)) << 2 ^ Ke(e, 3) : 0;
}
function Li(e) {
  return e.trim();
}
function Hc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function be(e, t, r) {
  return e.replace(t, r);
}
function Lo(e, t) {
  return e.indexOf(t);
}
function Ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xr(e, t, r) {
  return e.slice(t, r);
}
function Et(e) {
  return e.length;
}
function ta(e) {
  return e.length;
}
function En(e, t) {
  return t.push(e), e;
}
function Uc(e, t) {
  return e.map(t).join("");
}
var Xn = 1, Cr = 1, Wi = 0, ot = 0, Ve = 0, Or = "";
function Zn(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Xn, column: Cr, length: i, return: "" };
}
function jr(e, t) {
  return Vc(Zn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Gc() {
  return Ve;
}
function qc() {
  return Ve = ot > 0 ? Ke(Or, --ot) : 0, Cr--, Ve === 10 && (Cr = 1, Xn--), Ve;
}
function ct() {
  return Ve = ot < Wi ? Ke(Or, ot++) : 0, Cr++, Ve === 10 && (Cr = 1, Xn++), Ve;
}
function Ot() {
  return Ke(Or, ot);
}
function In() {
  return ot;
}
function on(e, t) {
  return Xr(Or, e, t);
}
function Zr(e) {
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
function Vi(e) {
  return Xn = Cr = 1, Wi = Et(Or = e), ot = 0, [];
}
function Yi(e) {
  return Or = "", e;
}
function Pn(e) {
  return Li(on(ot - 1, Wo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kc(e) {
  for (; (Ve = Ot()) && Ve < 33; )
    ct();
  return Zr(e) > 2 || Zr(Ve) > 3 ? "" : " ";
}
function Xc(e, t) {
  for (; --t && ct() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return on(e, In() + (t < 6 && Ot() == 32 && ct() == 32));
}
function Wo(e) {
  for (; ct(); )
    switch (Ve) {
      case e:
        return ot;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wo(Ve);
        break;
      case 40:
        e === 41 && Wo(e);
        break;
      case 92:
        ct();
        break;
    }
  return ot;
}
function Zc(e, t) {
  for (; ct() && e + Ve !== 57; )
    if (e + Ve === 84 && Ot() === 47)
      break;
  return "/*" + on(t, ot - 1) + "*" + Kn(e === 47 ? e : ct());
}
function Qc(e) {
  for (; !Zr(Ot()); )
    ct();
  return on(e, ot);
}
function Jc(e) {
  return Yi(Dn("", null, null, null, [""], e = Vi(e), 0, [0], e));
}
function Dn(e, t, r, n, o, a, i, s, c) {
  for (var u = 0, f = 0, d = i, m = 0, b = 0, w = 0, g = 1, h = 1, C = 1, T = 0, S = "", x = o, v = a, $ = n, E = S; h; )
    switch (w = T, T = ct()) {
      case 40:
        if (w != 108 && Ke(E, d - 1) == 58) {
          Lo(E += be(Pn(T), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Pn(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Kc(w);
        break;
      case 92:
        E += Xc(In() - 1, 7);
        continue;
      case 47:
        switch (Ot()) {
          case 42:
          case 47:
            En(el(Zc(ct(), In()), t, r), c);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        s[u++] = Et(E) * C;
      case 125 * g:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            h = 0;
          case 59 + f:
            C == -1 && (E = be(E, /\f/g, "")), b > 0 && Et(E) - d && En(b > 32 ? Ia(E + ";", n, r, d - 1) : Ia(be(E, " ", "") + ";", n, r, d - 2), c);
            break;
          case 59:
            E += ";";
          default:
            if (En($ = $a(E, t, r, u, f, o, s, S, x = [], v = [], d), a), T === 123)
              if (f === 0)
                Dn(E, t, $, $, x, a, d, s, v);
              else
                switch (m === 99 && Ke(E, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Dn(e, $, $, n && En($a(e, $, $, 0, 0, o, s, S, o, x = [], d), v), o, v, d, s, n ? x : v);
                    break;
                  default:
                    Dn(E, $, $, $, [""], v, 0, s, v);
                }
        }
        u = f = b = 0, g = C = 1, S = E = "", d = i;
        break;
      case 58:
        d = 1 + Et(E), b = w;
      default:
        if (g < 1) {
          if (T == 123)
            --g;
          else if (T == 125 && g++ == 0 && qc() == 125)
            continue;
        }
        switch (E += Kn(T), T * g) {
          case 38:
            C = f > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[u++] = (Et(E) - 1) * C, C = 1;
            break;
          case 64:
            Ot() === 45 && (E += Pn(ct())), m = Ot(), f = d = Et(S = E += Qc(In())), T++;
            break;
          case 45:
            w === 45 && Et(E) == 2 && (g = 0);
        }
    }
  return a;
}
function $a(e, t, r, n, o, a, i, s, c, u, f) {
  for (var d = o - 1, m = o === 0 ? a : [""], b = ta(m), w = 0, g = 0, h = 0; w < n; ++w)
    for (var C = 0, T = Xr(e, d + 1, d = Wc(g = i[w])), S = e; C < b; ++C)
      (S = Li(g > 0 ? m[C] + " " + T : be(T, /&\f/g, m[C]))) && (c[h++] = S);
  return Zn(e, t, r, o === 0 ? Jo : s, c, u, f);
}
function el(e, t, r) {
  return Zn(e, t, r, zi, Kn(Gc()), Xr(e, 2, -2), 0);
}
function Ia(e, t, r, n) {
  return Zn(e, t, r, ea, Xr(e, 0, n), Xr(e, n + 1, -1), n);
}
function vr(e, t) {
  for (var r = "", n = ta(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function tl(e, t, r, n) {
  switch (e.type) {
    case Lc:
      if (e.children.length) break;
    case Bc:
    case ea:
      return e.return = e.return || e.value;
    case zi:
      return "";
    case Bi:
      return e.return = e.value + "{" + vr(e.children, n) + "}";
    case Jo:
      e.value = e.props.join(",");
  }
  return Et(r = vr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function rl(e) {
  var t = ta(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function nl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ol = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Ot(), o === 38 && a === 12 && (r[n] = 1), !Zr(a); )
    ct();
  return on(t, ot);
}, al = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Zr(o)) {
      case 0:
        o === 38 && Ot() === 12 && (r[n] = 1), t[n] += ol(ot - 1, r, n);
        break;
      case 2:
        t[n] += Pn(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ot() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Kn(o);
    }
  while (o = ct());
  return t;
}, il = function(t, r) {
  return Yi(al(Vi(t), r));
}, Pa = /* @__PURE__ */ new WeakMap(), sl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Pa.get(n)) && !o) {
      Pa.set(t, !0);
      for (var a = [], i = il(r, a), s = n.props, c = 0, u = 0; c < i.length; c++)
        for (var f = 0; f < s.length; f++, u++)
          t.props[u] = a[c] ? i[c].replace(/&\f/g, s[f]) : s[f] + " " + i[c];
    }
  }
}, cl = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Hi(e, t) {
  switch (Yc(e, t)) {
    case 5103:
      return ye + "print-" + e + e;
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
      return ye + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + e + jn + e + Xe + e + e;
    case 6828:
    case 4268:
      return ye + e + Xe + e + e;
    case 6165:
      return ye + e + Xe + "flex-" + e + e;
    case 5187:
      return ye + e + be(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + Xe + "flex-$1$2") + e;
    case 5443:
      return ye + e + Xe + "flex-item-" + be(e, /flex-|-self/, "") + e;
    case 4675:
      return ye + e + Xe + "flex-line-pack" + be(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ye + e + Xe + be(e, "shrink", "negative") + e;
    case 5292:
      return ye + e + Xe + be(e, "basis", "preferred-size") + e;
    case 6060:
      return ye + "box-" + be(e, "-grow", "") + ye + e + Xe + be(e, "grow", "positive") + e;
    case 4554:
      return ye + be(e, /([^-])(transform)/g, "$1" + ye + "$2") + e;
    case 6187:
      return be(be(be(e, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return be(e, /(image-set\([^]*)/, ye + "$1$`$1");
    case 4968:
      return be(be(e, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + Xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return be(e, /(.+)-inline(.+)/, ye + "$1$2") + e;
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
      if (Et(e) - 1 - t > 6) switch (Ke(e, t + 1)) {
        case 109:
          if (Ke(e, t + 4) !== 45) break;
        case 102:
          return be(e, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + jn + (Ke(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Lo(e, "stretch") ? Hi(be(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ke(e, t + 1) !== 115) break;
    case 6444:
      switch (Ke(e, Et(e) - 3 - (~Lo(e, "!important") && 10))) {
        case 107:
          return be(e, ":", ":" + ye) + e;
        case 101:
          return be(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ye + (Ke(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + Xe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ke(e, t + 11)) {
        case 114:
          return ye + e + Xe + be(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ye + e + Xe + be(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ye + e + Xe + be(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ye + e + Xe + e + e;
  }
  return e;
}
var ll = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ea:
      t.return = Hi(t.value, t.length);
      break;
    case Bi:
      return vr([jr(t, {
        value: be(t.value, "@", "@" + ye)
      })], o);
    case Jo:
      if (t.length) return Uc(t.props, function(a) {
        switch (Hc(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return vr([jr(t, {
              props: [be(a, /:(read-\w+)/, ":" + jn + "$1")]
            })], o);
          case "::placeholder":
            return vr([jr(t, {
              props: [be(a, /:(plac\w+)/, ":" + ye + "input-$1")]
            }), jr(t, {
              props: [be(a, /:(plac\w+)/, ":" + jn + "$1")]
            }), jr(t, {
              props: [be(a, /:(plac\w+)/, Xe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, ul = [ll], dl = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var h = g.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ul, a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var h = g.getAttribute("data-emotion").split(" "), C = 1; C < h.length; C++)
        a[h[C]] = !0;
      s.push(g);
    }
  );
  var c, u = [sl, cl];
  {
    var f, d = [tl, nl(function(g) {
      f.insert(g);
    })], m = rl(u.concat(o, d)), b = function(h) {
      return vr(Jc(h), m);
    };
    c = function(h, C, T, S) {
      f = T, b(h ? h + "{" + C.styles + "}" : C.styles), S && (w.inserted[C.name] = !0);
    };
  }
  var w = {
    key: r,
    sheet: new zc({
      key: r,
      container: i,
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
  return w.sheet.hydrate(s), w;
};
function fl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vo = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function pl() {
  if (Da) return we;
  Da = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function S(v) {
    if (typeof v == "object" && v !== null) {
      var $ = v.$$typeof;
      switch ($) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case n:
            case a:
            case o:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case f:
                case w:
                case b:
                case i:
                  return v;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function x(v) {
    return S(v) === u;
  }
  return we.AsyncMode = c, we.ConcurrentMode = u, we.ContextConsumer = s, we.ContextProvider = i, we.Element = t, we.ForwardRef = f, we.Fragment = n, we.Lazy = w, we.Memo = b, we.Portal = r, we.Profiler = a, we.StrictMode = o, we.Suspense = d, we.isAsyncMode = function(v) {
    return x(v) || S(v) === c;
  }, we.isConcurrentMode = x, we.isContextConsumer = function(v) {
    return S(v) === s;
  }, we.isContextProvider = function(v) {
    return S(v) === i;
  }, we.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, we.isForwardRef = function(v) {
    return S(v) === f;
  }, we.isFragment = function(v) {
    return S(v) === n;
  }, we.isLazy = function(v) {
    return S(v) === w;
  }, we.isMemo = function(v) {
    return S(v) === b;
  }, we.isPortal = function(v) {
    return S(v) === r;
  }, we.isProfiler = function(v) {
    return S(v) === a;
  }, we.isStrictMode = function(v) {
    return S(v) === o;
  }, we.isSuspense = function(v) {
    return S(v) === d;
  }, we.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === u || v === a || v === o || v === d || v === m || typeof v == "object" && v !== null && (v.$$typeof === w || v.$$typeof === b || v.$$typeof === i || v.$$typeof === s || v.$$typeof === f || v.$$typeof === h || v.$$typeof === C || v.$$typeof === T || v.$$typeof === g);
  }, we.typeOf = S, we;
}
var xe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function hl() {
  return Ma || (Ma = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === n || W === u || W === a || W === o || W === d || W === m || typeof W == "object" && W !== null && (W.$$typeof === w || W.$$typeof === b || W.$$typeof === i || W.$$typeof === s || W.$$typeof === f || W.$$typeof === h || W.$$typeof === C || W.$$typeof === T || W.$$typeof === g);
    }
    function x(W) {
      if (typeof W == "object" && W !== null) {
        var ke = W.$$typeof;
        switch (ke) {
          case t:
            var G = W.type;
            switch (G) {
              case c:
              case u:
              case n:
              case a:
              case o:
              case d:
                return G;
              default:
                var Ie = G && G.$$typeof;
                switch (Ie) {
                  case s:
                  case f:
                  case w:
                  case b:
                  case i:
                    return Ie;
                  default:
                    return ke;
                }
            }
          case r:
            return ke;
        }
      }
    }
    var v = c, $ = u, E = s, N = i, z = t, l = f, k = n, F = w, P = b, X = r, K = a, se = o, ue = d, pe = !1;
    function ne(W) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(W) || x(W) === c;
    }
    function M(W) {
      return x(W) === u;
    }
    function Y(W) {
      return x(W) === s;
    }
    function re(W) {
      return x(W) === i;
    }
    function oe(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function I(W) {
      return x(W) === f;
    }
    function j(W) {
      return x(W) === n;
    }
    function V(W) {
      return x(W) === w;
    }
    function O(W) {
      return x(W) === b;
    }
    function L(W) {
      return x(W) === r;
    }
    function Z(W) {
      return x(W) === a;
    }
    function q(W) {
      return x(W) === o;
    }
    function de(W) {
      return x(W) === d;
    }
    xe.AsyncMode = v, xe.ConcurrentMode = $, xe.ContextConsumer = E, xe.ContextProvider = N, xe.Element = z, xe.ForwardRef = l, xe.Fragment = k, xe.Lazy = F, xe.Memo = P, xe.Portal = X, xe.Profiler = K, xe.StrictMode = se, xe.Suspense = ue, xe.isAsyncMode = ne, xe.isConcurrentMode = M, xe.isContextConsumer = Y, xe.isContextProvider = re, xe.isElement = oe, xe.isForwardRef = I, xe.isFragment = j, xe.isLazy = V, xe.isMemo = O, xe.isPortal = L, xe.isProfiler = Z, xe.isStrictMode = q, xe.isSuspense = de, xe.isValidElementType = S, xe.typeOf = x;
  }()), xe;
}
process.env.NODE_ENV === "production" ? Vo.exports = pl() : Vo.exports = hl();
var ra = Vo.exports, Ui = ra, gl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ml = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gi = {};
Gi[Ui.ForwardRef] = gl;
Gi[Ui.Memo] = ml;
var yl = !0;
function bl(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var qi = function(t, r, n) {
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
  yl === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, vl = function(t, r, n) {
  qi(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function wl(e) {
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
var xl = {
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
}, Cl = !1, Sl = /[A-Z]|^ms/g, El = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ki = function(t) {
  return t.charCodeAt(1) === 45;
}, Aa = function(t) {
  return t != null && typeof t != "boolean";
}, Co = /* @__PURE__ */ ji(function(e) {
  return Ki(e) ? e : e.replace(Sl, "-$&").toLowerCase();
}), _a = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(El, function(n, o, a) {
          return Tt = {
            name: o,
            styles: a,
            next: Tt
          }, o;
        });
  }
  return xl[t] !== 1 && !Ki(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, Tl = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Qr(e, t, r) {
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
        return Tt = {
          name: o.name,
          styles: o.styles,
          next: Tt
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var i = a.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Tt = {
              name: i.name,
              styles: i.styles,
              next: Tt
            }, i = i.next;
        var s = a.styles + ";";
        return s;
      }
      return kl(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Tt, u = r(e);
        return Tt = c, Qr(e, t, u);
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
function kl(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Qr(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0 ? n += a + "{" + t[s] + "}" : Aa(s) && (n += Co(a) + ":" + _a(a, s) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && Cl)
          throw new Error(Tl);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var c = 0; c < i.length; c++)
            Aa(i[c]) && (n += Co(a) + ":" + _a(a, i[c]) + ";");
        else {
          var u = Qr(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += Co(a) + ":" + u + ";";
              break;
            }
            default:
              n += a + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Na = /label:\s*([^\s;{]+)\s*(;|$)/g, Tt;
function na(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Tt = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += Qr(r, t, a);
  else {
    var i = a;
    o += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Qr(r, t, e[s]), n) {
      var c = a;
      o += c[s];
    }
  Na.lastIndex = 0;
  for (var u = "", f; (f = Na.exec(o)) !== null; )
    u += "-" + f[1];
  var d = wl(o) + u;
  return {
    name: d,
    styles: o,
    next: Tt
  };
}
var Rl = function(t) {
  return t();
}, Ol = H.useInsertionEffect ? H.useInsertionEffect : !1, $l = Ol || Rl, Xi = /* @__PURE__ */ H.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ dl({
    key: "css"
  }) : null
);
Xi.Provider;
var Il = function(t) {
  return /* @__PURE__ */ Gn(function(r, n) {
    var o = xr(Xi);
    return t(r, o, n);
  });
}, Pl = /* @__PURE__ */ H.createContext({});
function Mn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return na(t);
}
var oa = function() {
  var t = Mn.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Dl = _c, Ml = function(t) {
  return t !== "theme";
}, Fa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Dl : Ml;
}, ja = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Al = !1, _l = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return qi(r, n, o), $l(function() {
    return vl(r, n, o);
  }), null;
}, Nl = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = ja(t, r, n), c = s || Fa(o), u = !c("as");
  return function() {
    var f = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), f[0] == null || f[0].raw === void 0)
      d.push.apply(d, f);
    else {
      d.push(f[0][0]);
      for (var m = f.length, b = 1; b < m; b++)
        d.push(f[b], f[0][b]);
    }
    var w = Il(function(g, h, C) {
      var T = u && g.as || o, S = "", x = [], v = g;
      if (g.theme == null) {
        v = {};
        for (var $ in g)
          v[$] = g[$];
        v.theme = H.useContext(Pl);
      }
      typeof g.className == "string" ? S = bl(h.registered, x, g.className) : g.className != null && (S = g.className + " ");
      var E = na(d.concat(x), h.registered, v);
      S += h.key + "-" + E.name, i !== void 0 && (S += " " + i);
      var N = u && s === void 0 ? Fa(T) : c, z = {};
      for (var l in g)
        u && l === "as" || N(l) && (z[l] = g[l]);
      return z.className = S, C && (z.ref = C), /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(_l, {
        cache: h,
        serialized: E,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ H.createElement(T, z));
    });
    return w.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = d, w.__emotion_forwardProp = s, Object.defineProperty(w, "toString", {
      value: function() {
        return i === void 0 && Al ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), w.withComponent = function(g, h) {
      return e(g, Fn({}, r, h, {
        shouldForwardProp: ja(w, h, !0)
      })).apply(void 0, d);
    }, w;
  };
}, Fl = [
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
], $t = Nl.bind();
Fl.forEach(function(e) {
  $t[e] = $t(e);
});
var Yo = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var So, za;
function jl() {
  if (za) return So;
  za = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(i).map(function(f) {
        return i[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return So = o() ? Object.assign : function(a, i) {
    for (var s, c = n(a), u, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var d in s)
        t.call(s, d) && (c[d] = s[d]);
      if (e) {
        u = e(s);
        for (var m = 0; m < u.length; m++)
          r.call(s, u[m]) && (c[u[m]] = s[u[m]]);
      }
    }
    return c;
  }, So;
}
var Eo, Ba;
function aa() {
  if (Ba) return Eo;
  Ba = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Eo = e, Eo;
}
var To, La;
function Zi() {
  return La || (La = 1, To = Function.call.bind(Object.prototype.hasOwnProperty)), To;
}
var ko, Wa;
function zl() {
  if (Wa) return ko;
  Wa = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = aa(), r = {}, n = Zi();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var d;
          try {
            if (typeof a[f] != "function") {
              var m = Error(
                (c || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = a[f](i, f, c, s, null, t);
          } catch (w) {
            d = w;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + s + " type: " + d.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ko = o, ko;
}
var Ro, Va;
function Bl() {
  if (Va) return Ro;
  Va = 1;
  var e = ra, t = jl(), r = aa(), n = Zi(), o = zl(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Ro = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(M) {
      var Y = M && (u && M[u] || M[f]);
      if (typeof Y == "function")
        return Y;
    }
    var m = "<<anonymous>>", b = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: T(),
      arrayOf: S,
      element: x(),
      elementType: v(),
      instanceOf: $,
      node: l(),
      objectOf: N,
      oneOf: E,
      oneOfType: z,
      shape: F,
      exact: P
    };
    function w(M, Y) {
      return M === Y ? M !== 0 || 1 / M === 1 / Y : M !== M && Y !== Y;
    }
    function g(M, Y) {
      this.message = M, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function h(M) {
      if (process.env.NODE_ENV !== "production")
        var Y = {}, re = 0;
      function oe(j, V, O, L, Z, q, de) {
        if (L = L || m, q = q || O, de !== r) {
          if (c) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ke = L + ":" + O;
            !Y[ke] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Y[ke] = !0, re++);
          }
        }
        return V[O] == null ? j ? V[O] === null ? new g("The " + Z + " `" + q + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new g("The " + Z + " `" + q + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : M(V, O, L, Z, q);
      }
      var I = oe.bind(null, !1);
      return I.isRequired = oe.bind(null, !0), I;
    }
    function C(M) {
      function Y(re, oe, I, j, V, O) {
        var L = re[oe], Z = se(L);
        if (Z !== M) {
          var q = ue(L);
          return new g(
            "Invalid " + j + " `" + V + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return h(Y);
    }
    function T() {
      return h(i);
    }
    function S(M) {
      function Y(re, oe, I, j, V) {
        if (typeof M != "function")
          return new g("Property `" + V + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var O = re[oe];
        if (!Array.isArray(O)) {
          var L = se(O);
          return new g("Invalid " + j + " `" + V + "` of type " + ("`" + L + "` supplied to `" + I + "`, expected an array."));
        }
        for (var Z = 0; Z < O.length; Z++) {
          var q = M(O, Z, I, j, V + "[" + Z + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return h(Y);
    }
    function x() {
      function M(Y, re, oe, I, j) {
        var V = Y[re];
        if (!s(V)) {
          var O = se(V);
          return new g("Invalid " + I + " `" + j + "` of type " + ("`" + O + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(M);
    }
    function v() {
      function M(Y, re, oe, I, j) {
        var V = Y[re];
        if (!e.isValidElementType(V)) {
          var O = se(V);
          return new g("Invalid " + I + " `" + j + "` of type " + ("`" + O + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(M);
    }
    function $(M) {
      function Y(re, oe, I, j, V) {
        if (!(re[oe] instanceof M)) {
          var O = M.name || m, L = ne(re[oe]);
          return new g("Invalid " + j + " `" + V + "` of type " + ("`" + L + "` supplied to `" + I + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return h(Y);
    }
    function E(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function Y(re, oe, I, j, V) {
        for (var O = re[oe], L = 0; L < M.length; L++)
          if (w(O, M[L]))
            return null;
        var Z = JSON.stringify(M, function(de, W) {
          var ke = ue(W);
          return ke === "symbol" ? String(W) : W;
        });
        return new g("Invalid " + j + " `" + V + "` of value `" + String(O) + "` " + ("supplied to `" + I + "`, expected one of " + Z + "."));
      }
      return h(Y);
    }
    function N(M) {
      function Y(re, oe, I, j, V) {
        if (typeof M != "function")
          return new g("Property `" + V + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var O = re[oe], L = se(O);
        if (L !== "object")
          return new g("Invalid " + j + " `" + V + "` of type " + ("`" + L + "` supplied to `" + I + "`, expected an object."));
        for (var Z in O)
          if (n(O, Z)) {
            var q = M(O, Z, I, j, V + "." + Z, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return h(Y);
    }
    function z(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var Y = 0; Y < M.length; Y++) {
        var re = M[Y];
        if (typeof re != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(re) + " at index " + Y + "."
          ), i;
      }
      function oe(I, j, V, O, L) {
        for (var Z = [], q = 0; q < M.length; q++) {
          var de = M[q], W = de(I, j, V, O, L, r);
          if (W == null)
            return null;
          W.data && n(W.data, "expectedType") && Z.push(W.data.expectedType);
        }
        var ke = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new g("Invalid " + O + " `" + L + "` supplied to " + ("`" + V + "`" + ke + "."));
      }
      return h(oe);
    }
    function l() {
      function M(Y, re, oe, I, j) {
        return X(Y[re]) ? null : new g("Invalid " + I + " `" + j + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return h(M);
    }
    function k(M, Y, re, oe, I) {
      return new g(
        (M || "React class") + ": " + Y + " type `" + re + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function F(M) {
      function Y(re, oe, I, j, V) {
        var O = re[oe], L = se(O);
        if (L !== "object")
          return new g("Invalid " + j + " `" + V + "` of type `" + L + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var Z in M) {
          var q = M[Z];
          if (typeof q != "function")
            return k(I, j, V, Z, ue(q));
          var de = q(O, Z, I, j, V + "." + Z, r);
          if (de)
            return de;
        }
        return null;
      }
      return h(Y);
    }
    function P(M) {
      function Y(re, oe, I, j, V) {
        var O = re[oe], L = se(O);
        if (L !== "object")
          return new g("Invalid " + j + " `" + V + "` of type `" + L + "` " + ("supplied to `" + I + "`, expected `object`."));
        var Z = t({}, re[oe], M);
        for (var q in Z) {
          var de = M[q];
          if (n(M, q) && typeof de != "function")
            return k(I, j, V, q, ue(de));
          if (!de)
            return new g(
              "Invalid " + j + " `" + V + "` key `" + q + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(re[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var W = de(O, q, I, j, V + "." + q, r);
          if (W)
            return W;
        }
        return null;
      }
      return h(Y);
    }
    function X(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(X);
          if (M === null || s(M))
            return !0;
          var Y = d(M);
          if (Y) {
            var re = Y.call(M), oe;
            if (Y !== M.entries) {
              for (; !(oe = re.next()).done; )
                if (!X(oe.value))
                  return !1;
            } else
              for (; !(oe = re.next()).done; ) {
                var I = oe.value;
                if (I && !X(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(M, Y) {
      return M === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
    }
    function se(M) {
      var Y = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : K(Y, M) ? "symbol" : Y;
    }
    function ue(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var Y = se(M);
      if (Y === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return Y;
    }
    function pe(M) {
      var Y = ue(M);
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
    function ne(M) {
      return !M.constructor || !M.constructor.name ? m : M.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Ro;
}
var Oo, Ya;
function Ll() {
  if (Ya) return Oo;
  Ya = 1;
  var e = aa();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Oo = function() {
    function n(i, s, c, u, f, d) {
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
    var a = {
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
    return a.PropTypes = a, a;
  }, Oo;
}
if (process.env.NODE_ENV !== "production") {
  var Wl = ra, Vl = !0;
  Yo.exports = Bl()(Wl.isElement, Vl);
} else
  Yo.exports = Ll()();
var Yl = Yo.exports;
const p = /* @__PURE__ */ fl(Yl);
function Qi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Qi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ve() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Qi(e)) && (n && (n += " "), n += t);
  return n;
}
function zn(e, t) {
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
        const a = e[o], i = t[o];
        if (!i)
          r[o] = a || {};
        else if (!a)
          r[o] = i;
        else {
          r[o] = {
            ...i
          };
          for (const s in a)
            if (Object.prototype.hasOwnProperty.call(a, s)) {
              const c = s;
              r[o][c] = zn(a[c], i[c]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function or(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const a = e[o];
    let i = "", s = !0;
    for (let c = 0; c < a.length; c += 1) {
      const u = a[c];
      u && (i += (s === !0 ? "" : " ") + t(u), s = !1, r && r[u] && (i += " " + r[u]));
    }
    n[o] = i;
  }
  return n;
}
function Yt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Hl(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function ia(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Hl(e, t, r);
}
function Ul(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ht(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ht(Ul(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Yt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Yt(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Gl = (e) => {
  const t = Ht(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Yr = (e, t) => {
  try {
    return Gl(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Qn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ji(e) {
  e = Ht(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), i = (u, f = (u + r / 30) % 12) => o - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = "rgb";
  const c = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), Qn({
    type: s,
    values: c
  });
}
function Ho(e) {
  e = Ht(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ht(Ji(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ha(e, t) {
  const r = Ho(e), n = Ho(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function We(e, t) {
  return e = Ht(e), t = ia(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qn(e);
}
function Tn(e, t, r) {
  try {
    return We(e, t);
  } catch {
    return e;
  }
}
function sa(e, t) {
  if (e = Ht(e), t = ia(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Qn(e);
}
function Oe(e, t, r) {
  try {
    return sa(e, t);
  } catch {
    return e;
  }
}
function ca(e, t) {
  if (e = Ht(e), t = ia(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Qn(e);
}
function $e(e, t, r) {
  try {
    return ca(e, t);
  } catch {
    return e;
  }
}
function ql(e, t = 0.15) {
  return Ho(e) > 0.5 ? sa(e, t) : ca(e, t);
}
function kn(e, t, r) {
  try {
    return ql(e, t);
  } catch {
    return e;
  }
}
function Kl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Jn = (e) => Kl(e) && e !== "classes";
function J(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Yt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _t(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function es(e) {
  if (/* @__PURE__ */ H.isValidElement(e) || !_t(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = es(e[r]);
  }), t;
}
function lt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return _t(e) && _t(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ H.isValidElement(t[o]) ? n[o] = t[o] : _t(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && _t(e[o]) ? n[o] = lt(e[o], t[o], r) : r.clone ? n[o] = _t(t[o]) ? es(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Ur(e, t) {
  return t ? lt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const qt = process.env.NODE_ENV !== "production" ? p.oneOfType([p.number, p.string, p.object, p.array]) : {};
function Xl(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var i, s;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((i = n.match(a)) == null ? void 0 : i[1]) || 0) - +(((s = o.match(a)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const a = t[o];
    return delete n[o], n[o] = a, n;
  }, {
    ...t
  }) : t;
}
function Zl(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ql(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Yt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, a = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(a);
}
function Jl(e) {
  const t = (a, i) => a.replace("@media", i ? `@container ${i}` : "@container");
  function r(a, i) {
    a.up = (...s) => t(e.breakpoints.up(...s), i), a.down = (...s) => t(e.breakpoints.down(...s), i), a.between = (...s) => t(e.breakpoints.between(...s), i), a.only = (...s) => t(e.breakpoints.only(...s), i), a.not = (...s) => {
      const c = t(e.breakpoints.not(...s), i);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (a) => (r(n, a), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const eo = {
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
}, Ua = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${eo[e]}px)`
}, eu = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : eo[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ft(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || Ua;
    return t.reduce((i, s, c) => (i[a.up(a.keys[c])] = r(t[c]), i), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || Ua;
    return Object.keys(t).reduce((i, s) => {
      if (Zl(a.keys, s)) {
        const c = Ql(n.containerQueries ? n : eu, s);
        c && (i[c] = r(t[s], s));
      } else if (Object.keys(a.values || eo).includes(s)) {
        const c = a.up(s);
        i[c] = r(t[s], s);
      } else {
        const c = s;
        i[c] = t[c];
      }
      return i;
    }, {});
  }
  return r(t);
}
function tu(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const a = e.up(o);
    return n[a] = {}, n;
  }, {})) || {};
}
function ru(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function to(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Bn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = to(e, r) || n, t && (o = t(o, n, e)), o;
}
function Be(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, a = (i) => {
    if (i[t] == null)
      return null;
    const s = i[t], c = i.theme, u = to(c, n) || {};
    return Ft(i, s, (d) => {
      let m = Bn(u, o, d);
      return d === m && typeof d == "string" && (m = Bn(u, o, `${t}${d === "default" ? "" : J(d)}`, d)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: qt
  } : {}, a.filterProps = [t], a;
}
function nu(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const ou = {
  m: "margin",
  p: "padding"
}, au = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ga = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, iu = nu((e) => {
  if (e.length > 2)
    if (Ga[e])
      e = Ga[e];
    else
      return [e];
  const [t, r] = e.split(""), n = ou[t], o = au[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), ro = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], no = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], su = [...ro, ...no];
function an(e, t, r, n) {
  const o = to(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), typeof o == "string" ? `calc(${a} * ${o})` : o * a) : Array.isArray(o) ? (a) => {
    if (typeof a == "string")
      return a;
    const i = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > o.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${i} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[i];
    return a >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function la(e) {
  return an(e, "spacing", 8, "spacing");
}
function sn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function cu(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = sn(t, r), n), {});
}
function lu(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = iu(r), a = cu(o, n), i = e[r];
  return Ft(e, i, a);
}
function ts(e, t) {
  const r = la(e.theme);
  return Object.keys(e).map((n) => lu(e, t, n, r)).reduce(Ur, {});
}
function je(e) {
  return ts(e, ro);
}
je.propTypes = process.env.NODE_ENV !== "production" ? ro.reduce((e, t) => (e[t] = qt, e), {}) : {};
je.filterProps = ro;
function ze(e) {
  return ts(e, no);
}
ze.propTypes = process.env.NODE_ENV !== "production" ? no.reduce((e, t) => (e[t] = qt, e), {}) : {};
ze.filterProps = no;
process.env.NODE_ENV !== "production" && su.reduce((e, t) => (e[t] = qt, e), {});
function oo(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, a) => t[a] ? Ur(o, t[a](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function gt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function yt(e, t) {
  return Be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const uu = yt("border", gt), du = yt("borderTop", gt), fu = yt("borderRight", gt), pu = yt("borderBottom", gt), hu = yt("borderLeft", gt), gu = yt("borderColor"), mu = yt("borderTopColor"), yu = yt("borderRightColor"), bu = yt("borderBottomColor"), vu = yt("borderLeftColor"), wu = yt("outline", gt), xu = yt("outlineColor"), ao = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = an(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: sn(t, n)
    });
    return Ft(e, e.borderRadius, r);
  }
  return null;
};
ao.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: qt
} : {};
ao.filterProps = ["borderRadius"];
oo(uu, du, fu, pu, hu, gu, mu, yu, bu, vu, ao, wu, xu);
const io = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = an(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: sn(t, n)
    });
    return Ft(e, e.gap, r);
  }
  return null;
};
io.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: qt
} : {};
io.filterProps = ["gap"];
const so = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = an(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: sn(t, n)
    });
    return Ft(e, e.columnGap, r);
  }
  return null;
};
so.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: qt
} : {};
so.filterProps = ["columnGap"];
const co = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = an(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: sn(t, n)
    });
    return Ft(e, e.rowGap, r);
  }
  return null;
};
co.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: qt
} : {};
co.filterProps = ["rowGap"];
const Cu = Be({
  prop: "gridColumn"
}), Su = Be({
  prop: "gridRow"
}), Eu = Be({
  prop: "gridAutoFlow"
}), Tu = Be({
  prop: "gridAutoColumns"
}), ku = Be({
  prop: "gridAutoRows"
}), Ru = Be({
  prop: "gridTemplateColumns"
}), Ou = Be({
  prop: "gridTemplateRows"
}), $u = Be({
  prop: "gridTemplateAreas"
}), Iu = Be({
  prop: "gridArea"
});
oo(io, so, co, Cu, Su, Eu, Tu, ku, Ru, Ou, $u, Iu);
function wr(e, t) {
  return t === "grey" ? t : e;
}
const Pu = Be({
  prop: "color",
  themeKey: "palette",
  transform: wr
}), Du = Be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: wr
}), Mu = Be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: wr
});
oo(Pu, Du, Mu);
function st(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Au = Be({
  prop: "width",
  transform: st
}), ua = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, a, i, s, c;
      const n = ((i = (a = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) == null ? void 0 : i[r]) || eo[r];
      return n ? ((c = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: st(r)
      };
    };
    return Ft(e, e.maxWidth, t);
  }
  return null;
};
ua.filterProps = ["maxWidth"];
const _u = Be({
  prop: "minWidth",
  transform: st
}), Nu = Be({
  prop: "height",
  transform: st
}), Fu = Be({
  prop: "maxHeight",
  transform: st
}), ju = Be({
  prop: "minHeight",
  transform: st
});
Be({
  prop: "size",
  cssProperty: "width",
  transform: st
});
Be({
  prop: "size",
  cssProperty: "height",
  transform: st
});
const zu = Be({
  prop: "boxSizing"
});
oo(Au, ua, _u, Nu, Fu, ju, zu);
const lo = {
  // borders
  border: {
    themeKey: "borders",
    transform: gt
  },
  borderTop: {
    themeKey: "borders",
    transform: gt
  },
  borderRight: {
    themeKey: "borders",
    transform: gt
  },
  borderBottom: {
    themeKey: "borders",
    transform: gt
  },
  borderLeft: {
    themeKey: "borders",
    transform: gt
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
    transform: gt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ao
  },
  // palette
  color: {
    themeKey: "palette",
    transform: wr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: wr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: wr
  },
  // spacing
  p: {
    style: ze
  },
  pt: {
    style: ze
  },
  pr: {
    style: ze
  },
  pb: {
    style: ze
  },
  pl: {
    style: ze
  },
  px: {
    style: ze
  },
  py: {
    style: ze
  },
  padding: {
    style: ze
  },
  paddingTop: {
    style: ze
  },
  paddingRight: {
    style: ze
  },
  paddingBottom: {
    style: ze
  },
  paddingLeft: {
    style: ze
  },
  paddingX: {
    style: ze
  },
  paddingY: {
    style: ze
  },
  paddingInline: {
    style: ze
  },
  paddingInlineStart: {
    style: ze
  },
  paddingInlineEnd: {
    style: ze
  },
  paddingBlock: {
    style: ze
  },
  paddingBlockStart: {
    style: ze
  },
  paddingBlockEnd: {
    style: ze
  },
  m: {
    style: je
  },
  mt: {
    style: je
  },
  mr: {
    style: je
  },
  mb: {
    style: je
  },
  ml: {
    style: je
  },
  mx: {
    style: je
  },
  my: {
    style: je
  },
  margin: {
    style: je
  },
  marginTop: {
    style: je
  },
  marginRight: {
    style: je
  },
  marginBottom: {
    style: je
  },
  marginLeft: {
    style: je
  },
  marginX: {
    style: je
  },
  marginY: {
    style: je
  },
  marginInline: {
    style: je
  },
  marginInlineStart: {
    style: je
  },
  marginInlineEnd: {
    style: je
  },
  marginBlock: {
    style: je
  },
  marginBlockStart: {
    style: je
  },
  marginBlockEnd: {
    style: je
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
    style: io
  },
  rowGap: {
    style: co
  },
  columnGap: {
    style: so
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
    transform: st
  },
  maxWidth: {
    style: ua
  },
  minWidth: {
    transform: st
  },
  height: {
    transform: st
  },
  maxHeight: {
    transform: st
  },
  minHeight: {
    transform: st
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
function Bu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Lu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wu() {
  function e(r, n, o, a) {
    const i = {
      [r]: n,
      theme: o
    }, s = a[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
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
    const m = to(o, u) || {};
    return d ? d(i) : Ft(i, n, (w) => {
      let g = Bn(m, f, w);
      return w === g && typeof w == "string" && (g = Bn(m, f, `${r}${w === "default" ? "" : J(w)}`, w)), c === !1 ? g : {
        [c]: g
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
    const a = o.unstable_sxConfig ?? lo;
    function i(s) {
      let c = s;
      if (typeof s == "function")
        c = s(o);
      else if (typeof s != "object")
        return s;
      if (!c)
        return null;
      const u = tu(o.breakpoints), f = Object.keys(u);
      let d = u;
      return Object.keys(c).forEach((m) => {
        const b = Lu(c[m], o);
        if (b != null)
          if (typeof b == "object")
            if (a[m])
              d = Ur(d, e(m, b, o, a));
            else {
              const w = Ft({
                theme: o
              }, b, (g) => ({
                [m]: g
              }));
              Bu(w, b) ? d[m] = t({
                sx: b,
                theme: o
              }) : d = Ur(d, w);
            }
          else
            d = Ur(d, e(m, b, o, a));
      }), Xl(o, ru(f, d));
    }
    return Array.isArray(n) ? n.map(i) : i(n);
  }
  return t;
}
const Sr = Wu();
Sr.filterProps = ["sx"];
var Uo = { exports: {} }, zr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function Vu() {
  if (qa) return zr;
  qa = 1;
  var e = Rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, u) {
    var f, d = {}, m = null, b = null;
    u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (f in c) n.call(c, f) && !a.hasOwnProperty(f) && (d[f] = c[f]);
    if (s && s.defaultProps) for (f in c = s.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: s, key: m, ref: b, props: d, _owner: o.current };
  }
  return zr.Fragment = r, zr.jsx = i, zr.jsxs = i, zr;
}
var Br = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ka;
function Yu() {
  return Ka || (Ka = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), w = Symbol.iterator, g = "@@iterator";
    function h(y) {
      if (y === null || typeof y != "object")
        return null;
      var A = w && y[w] || y[g];
      return typeof A == "function" ? A : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(y) {
      {
        for (var A = arguments.length, U = new Array(A > 1 ? A - 1 : 0), ie = 1; ie < A; ie++)
          U[ie - 1] = arguments[ie];
        S("error", y, U);
      }
    }
    function S(y, A, U) {
      {
        var ie = C.ReactDebugCurrentFrame, ge = ie.getStackAddendum();
        ge !== "" && (A += "%s", U = U.concat([ge]));
        var me = U.map(function(le) {
          return String(le);
        });
        me.unshift("Warning: " + A), Function.prototype.apply.call(console[y], console, me);
      }
    }
    var x = !1, v = !1, $ = !1, E = !1, N = !1, z;
    z = Symbol.for("react.module.reference");
    function l(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === n || y === a || N || y === o || y === u || y === f || E || y === b || x || v || $ || typeof y == "object" && y !== null && (y.$$typeof === m || y.$$typeof === d || y.$$typeof === i || y.$$typeof === s || y.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === z || y.getModuleId !== void 0));
    }
    function k(y, A, U) {
      var ie = y.displayName;
      if (ie)
        return ie;
      var ge = A.displayName || A.name || "";
      return ge !== "" ? U + "(" + ge + ")" : U;
    }
    function F(y) {
      return y.displayName || "Context";
    }
    function P(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case s:
            var A = y;
            return F(A) + ".Consumer";
          case i:
            var U = y;
            return F(U._context) + ".Provider";
          case c:
            return k(y, y.render, "ForwardRef");
          case d:
            var ie = y.displayName || null;
            return ie !== null ? ie : P(y.type) || "Memo";
          case m: {
            var ge = y, me = ge._payload, le = ge._init;
            try {
              return P(le(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, K = 0, se, ue, pe, ne, M, Y, re;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function I() {
      {
        if (K === 0) {
          se = console.log, ue = console.info, pe = console.warn, ne = console.error, M = console.group, Y = console.groupCollapsed, re = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: y,
            log: y,
            warn: y,
            error: y,
            group: y,
            groupCollapsed: y,
            groupEnd: y
          });
        }
        K++;
      }
    }
    function j() {
      {
        if (K--, K === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, y, {
              value: se
            }),
            info: X({}, y, {
              value: ue
            }),
            warn: X({}, y, {
              value: pe
            }),
            error: X({}, y, {
              value: ne
            }),
            group: X({}, y, {
              value: M
            }),
            groupCollapsed: X({}, y, {
              value: Y
            }),
            groupEnd: X({}, y, {
              value: re
            })
          });
        }
        K < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = C.ReactCurrentDispatcher, O;
    function L(y, A, U) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (ge) {
            var ie = ge.stack.trim().match(/\n( *(at )?)/);
            O = ie && ie[1] || "";
          }
        return `
` + O + y;
      }
    }
    var Z = !1, q;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      q = new de();
    }
    function W(y, A) {
      if (!y || Z)
        return "";
      {
        var U = q.get(y);
        if (U !== void 0)
          return U;
      }
      var ie;
      Z = !0;
      var ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = V.current, V.current = null, I();
      try {
        if (A) {
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
            } catch (Le) {
              ie = Le;
            }
            Reflect.construct(y, [], le);
          } else {
            try {
              le.call();
            } catch (Le) {
              ie = Le;
            }
            y.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Le) {
            ie = Le;
          }
          y();
        }
      } catch (Le) {
        if (Le && ie && typeof Le.stack == "string") {
          for (var ce = Le.stack.split(`
`), qe = ie.stack.split(`
`), De = ce.length - 1, _e = qe.length - 1; De >= 1 && _e >= 0 && ce[De] !== qe[_e]; )
            _e--;
          for (; De >= 1 && _e >= 0; De--, _e--)
            if (ce[De] !== qe[_e]) {
              if (De !== 1 || _e !== 1)
                do
                  if (De--, _e--, _e < 0 || ce[De] !== qe[_e]) {
                    var tt = `
` + ce[De].replace(" at new ", " at ");
                    return y.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", y.displayName)), typeof y == "function" && q.set(y, tt), tt;
                  }
                while (De >= 1 && _e >= 0);
              break;
            }
        }
      } finally {
        Z = !1, V.current = me, j(), Error.prepareStackTrace = ge;
      }
      var Lt = y ? y.displayName || y.name : "", at = Lt ? L(Lt) : "";
      return typeof y == "function" && q.set(y, at), at;
    }
    function ke(y, A, U) {
      return W(y, !1);
    }
    function G(y) {
      var A = y.prototype;
      return !!(A && A.isReactComponent);
    }
    function Ie(y, A, U) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return W(y, G(y));
      if (typeof y == "string")
        return L(y);
      switch (y) {
        case u:
          return L("Suspense");
        case f:
          return L("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case c:
            return ke(y.render);
          case d:
            return Ie(y.type, A, U);
          case m: {
            var ie = y, ge = ie._payload, me = ie._init;
            try {
              return Ie(me(ge), A, U);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, Ge = {}, Ye = C.ReactDebugCurrentFrame;
    function Pe(y) {
      if (y) {
        var A = y._owner, U = Ie(y.type, y._source, A ? A.type : null);
        Ye.setExtraStackFrame(U);
      } else
        Ye.setExtraStackFrame(null);
    }
    function It(y, A, U, ie, ge) {
      {
        var me = Function.call.bind(Ae);
        for (var le in y)
          if (me(y, le)) {
            var ce = void 0;
            try {
              if (typeof y[le] != "function") {
                var qe = Error((ie || "React class") + ": " + U + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              ce = y[le](A, le, ie, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (De) {
              ce = De;
            }
            ce && !(ce instanceof Error) && (Pe(ge), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", U, le, typeof ce), Pe(null)), ce instanceof Error && !(ce.message in Ge) && (Ge[ce.message] = !0, Pe(ge), T("Failed %s type: %s", U, ce.message), Pe(null));
          }
      }
    }
    var dt = Array.isArray;
    function ft(y) {
      return dt(y);
    }
    function ae(y) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, U = A && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return U;
      }
    }
    function Xt(y) {
      try {
        return Zt(y), !1;
      } catch {
        return !0;
      }
    }
    function Zt(y) {
      return "" + y;
    }
    function Qt(y) {
      if (Xt(y))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ae(y)), Zt(y);
    }
    var pt = C.ReactCurrentOwner, po = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bt, Pr, ir;
    ir = {};
    function zt(y) {
      if (Ae.call(y, "ref")) {
        var A = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function dn(y) {
      if (Ae.call(y, "key")) {
        var A = Object.getOwnPropertyDescriptor(y, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function fn(y, A) {
      if (typeof y.ref == "string" && pt.current && A && pt.current.stateNode !== A) {
        var U = P(pt.current.type);
        ir[U] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(pt.current.type), y.ref), ir[U] = !0);
      }
    }
    function ho(y, A) {
      {
        var U = function() {
          bt || (bt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        U.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function He(y, A) {
      {
        var U = function() {
          Pr || (Pr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        U.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var pn = function(y, A, U, ie, ge, me, le) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: y,
        key: A,
        ref: U,
        props: le,
        // Record the component responsible for creating this element.
        _owner: me
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function et(y, A, U, ie, ge) {
      {
        var me, le = {}, ce = null, qe = null;
        U !== void 0 && (Qt(U), ce = "" + U), dn(A) && (Qt(A.key), ce = "" + A.key), zt(A) && (qe = A.ref, fn(A, ge));
        for (me in A)
          Ae.call(A, me) && !po.hasOwnProperty(me) && (le[me] = A[me]);
        if (y && y.defaultProps) {
          var De = y.defaultProps;
          for (me in De)
            le[me] === void 0 && (le[me] = De[me]);
        }
        if (ce || qe) {
          var _e = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          ce && ho(le, _e), qe && He(le, _e);
        }
        return pn(y, ce, qe, ge, ie, pt.current, le);
      }
    }
    var vt = C.ReactCurrentOwner, hn = C.ReactDebugCurrentFrame;
    function Pt(y) {
      if (y) {
        var A = y._owner, U = Ie(y.type, y._source, A ? A.type : null);
        hn.setExtraStackFrame(U);
      } else
        hn.setExtraStackFrame(null);
    }
    var Dr;
    Dr = !1;
    function Mr(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function gn() {
      {
        if (vt.current) {
          var y = P(vt.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function Jt(y) {
      return "";
    }
    var Dt = {};
    function mn(y) {
      {
        var A = gn();
        if (!A) {
          var U = typeof y == "string" ? y : y.displayName || y.name;
          U && (A = `

Check the top-level render call using <` + U + ">.");
        }
        return A;
      }
    }
    function Mt(y, A) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var U = mn(A);
        if (Dt[U])
          return;
        Dt[U] = !0;
        var ie = "";
        y && y._owner && y._owner !== vt.current && (ie = " It was passed a child from " + P(y._owner.type) + "."), Pt(y), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, ie), Pt(null);
      }
    }
    function sr(y, A) {
      {
        if (typeof y != "object")
          return;
        if (ft(y))
          for (var U = 0; U < y.length; U++) {
            var ie = y[U];
            Mr(ie) && Mt(ie, A);
          }
        else if (Mr(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var ge = h(y);
          if (typeof ge == "function" && ge !== y.entries)
            for (var me = ge.call(y), le; !(le = me.next()).done; )
              Mr(le.value) && Mt(le.value, A);
        }
      }
    }
    function Qe(y) {
      {
        var A = y.type;
        if (A == null || typeof A == "string")
          return;
        var U;
        if (typeof A == "function")
          U = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === d))
          U = A.propTypes;
        else
          return;
        if (U) {
          var ie = P(A);
          It(U, y.props, "prop", ie, y);
        } else if (A.PropTypes !== void 0 && !Dr) {
          Dr = !0;
          var ge = P(A);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(y) {
      {
        for (var A = Object.keys(y.props), U = 0; U < A.length; U++) {
          var ie = A[U];
          if (ie !== "children" && ie !== "key") {
            Pt(y), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Pt(null);
            break;
          }
        }
        y.ref !== null && (Pt(y), T("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var xt = {};
    function Q(y, A, U, ie, ge, me) {
      {
        var le = l(y);
        if (!le) {
          var ce = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Jt();
          qe ? ce += qe : ce += gn();
          var De;
          y === null ? De = "null" : ft(y) ? De = "array" : y !== void 0 && y.$$typeof === t ? (De = "<" + (P(y.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : De = typeof y, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", De, ce);
        }
        var _e = et(y, A, U, ge, me);
        if (_e == null)
          return _e;
        if (le) {
          var tt = A.children;
          if (tt !== void 0)
            if (ie)
              if (ft(tt)) {
                for (var Lt = 0; Lt < tt.length; Lt++)
                  sr(tt[Lt], y);
                Object.freeze && Object.freeze(tt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sr(tt, y);
        }
        if (Ae.call(A, "key")) {
          var at = P(y), Le = Object.keys(A).filter(function(vn) {
            return vn !== "key";
          }), er = Le.length > 0 ? "{key: someKey, " + Le.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xt[at + er]) {
            var go = Le.length > 0 ? "{" + Le.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, er, at, go, at), xt[at + er] = !0;
          }
        }
        return y === n ? cr(_e) : Qe(_e), _e;
      }
    }
    function Bt(y, A, U) {
      return Q(y, A, U, !0);
    }
    function Ar(y, A, U) {
      return Q(y, A, U, !1);
    }
    var yn = Ar, bn = Bt;
    Br.Fragment = n, Br.jsx = yn, Br.jsxs = bn;
  }()), Br;
}
process.env.NODE_ENV === "production" ? Uo.exports = Vu() : Uo.exports = Yu();
var D = Uo.exports;
/**
 * @mui/styled-engine v6.1.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Hu(e, t) {
  const r = $t(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Uu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Xa = [];
function Za(e) {
  return Xa[0] = e, na(Xa);
}
const Gu = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function qu(e) {
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
  } = e, a = Gu(t), i = Object.keys(a);
  function s(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, b) {
    const w = i.indexOf(b);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(w !== -1 && typeof t[i[w]] == "number" ? t[i[w]] : b) - n / 100}${r})`;
  }
  function f(m) {
    return i.indexOf(m) + 1 < i.length ? u(m, i[i.indexOf(m) + 1]) : s(m);
  }
  function d(m) {
    const b = i.indexOf(m);
    return b === 0 ? s(i[1]) : b === i.length - 1 ? c(i[b]) : u(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: a,
    up: s,
    down: c,
    between: u,
    only: f,
    not: d,
    unit: r,
    ...o
  };
}
const Ku = {
  borderRadius: 4
};
function rs(e = 8, t = la({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const i = t(a);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return r.mui = !0, r;
}
function Xu(e, t) {
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
function ns(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...i
  } = e, s = qu(r), c = rs(o);
  let u = lt({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...Ku,
      ...a
    }
  }, i);
  return u = Jl(u), u.applyStyles = Xu, u = t.reduce((f, d) => lt(f, d), u), u.unstable_sxConfig = {
    ...lo,
    ...i == null ? void 0 : i.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return Sr({
      sx: d,
      theme: this
    });
  }, u;
}
const Qa = (e) => e, Zu = () => {
  let e = Qa;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Qa;
    }
  };
}, Qu = Zu(), Ju = {
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
function jt(e, t, r = "Mui") {
  const n = Ju[t];
  return n ? `${r}-${n}` : `${Qu.generate(e)}-${t}`;
}
function Kt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = jt(e, o, r);
  }), n;
}
var Go = { exports: {} }, Ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja;
function ed() {
  if (Ja) return Ce;
  Ja = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var C = h.$$typeof;
      switch (C) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case i:
                case c:
                case m:
                case d:
                case a:
                  return h;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return Ce.ContextConsumer = i, Ce.ContextProvider = a, Ce.Element = e, Ce.ForwardRef = c, Ce.Fragment = r, Ce.Lazy = m, Ce.Memo = d, Ce.Portal = t, Ce.Profiler = o, Ce.StrictMode = n, Ce.Suspense = u, Ce.SuspenseList = f, Ce.isAsyncMode = function() {
    return !1;
  }, Ce.isConcurrentMode = function() {
    return !1;
  }, Ce.isContextConsumer = function(h) {
    return g(h) === i;
  }, Ce.isContextProvider = function(h) {
    return g(h) === a;
  }, Ce.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Ce.isForwardRef = function(h) {
    return g(h) === c;
  }, Ce.isFragment = function(h) {
    return g(h) === r;
  }, Ce.isLazy = function(h) {
    return g(h) === m;
  }, Ce.isMemo = function(h) {
    return g(h) === d;
  }, Ce.isPortal = function(h) {
    return g(h) === t;
  }, Ce.isProfiler = function(h) {
    return g(h) === o;
  }, Ce.isStrictMode = function(h) {
    return g(h) === n;
  }, Ce.isSuspense = function(h) {
    return g(h) === u;
  }, Ce.isSuspenseList = function(h) {
    return g(h) === f;
  }, Ce.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === u || h === f || h === b || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === d || h.$$typeof === a || h.$$typeof === i || h.$$typeof === c || h.$$typeof === w || h.getModuleId !== void 0);
  }, Ce.typeOf = g, Ce;
}
var Se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function td() {
  return ei || (ei = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), w = !1, g = !1, h = !1, C = !1, T = !1, S;
    S = Symbol.for("react.module.reference");
    function x(G) {
      return !!(typeof G == "string" || typeof G == "function" || G === r || G === o || T || G === n || G === u || G === f || C || G === b || w || g || h || typeof G == "object" && G !== null && (G.$$typeof === m || G.$$typeof === d || G.$$typeof === a || G.$$typeof === i || G.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      G.$$typeof === S || G.getModuleId !== void 0));
    }
    function v(G) {
      if (typeof G == "object" && G !== null) {
        var Ie = G.$$typeof;
        switch (Ie) {
          case e:
            var Ae = G.type;
            switch (Ae) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return Ae;
              default:
                var Ge = Ae && Ae.$$typeof;
                switch (Ge) {
                  case s:
                  case i:
                  case c:
                  case m:
                  case d:
                  case a:
                    return Ge;
                  default:
                    return Ie;
                }
            }
          case t:
            return Ie;
        }
      }
    }
    var $ = i, E = a, N = e, z = c, l = r, k = m, F = d, P = t, X = o, K = n, se = u, ue = f, pe = !1, ne = !1;
    function M(G) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(G) {
      return ne || (ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(G) {
      return v(G) === i;
    }
    function oe(G) {
      return v(G) === a;
    }
    function I(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function j(G) {
      return v(G) === c;
    }
    function V(G) {
      return v(G) === r;
    }
    function O(G) {
      return v(G) === m;
    }
    function L(G) {
      return v(G) === d;
    }
    function Z(G) {
      return v(G) === t;
    }
    function q(G) {
      return v(G) === o;
    }
    function de(G) {
      return v(G) === n;
    }
    function W(G) {
      return v(G) === u;
    }
    function ke(G) {
      return v(G) === f;
    }
    Se.ContextConsumer = $, Se.ContextProvider = E, Se.Element = N, Se.ForwardRef = z, Se.Fragment = l, Se.Lazy = k, Se.Memo = F, Se.Portal = P, Se.Profiler = X, Se.StrictMode = K, Se.Suspense = se, Se.SuspenseList = ue, Se.isAsyncMode = M, Se.isConcurrentMode = Y, Se.isContextConsumer = re, Se.isContextProvider = oe, Se.isElement = I, Se.isForwardRef = j, Se.isFragment = V, Se.isLazy = O, Se.isMemo = L, Se.isPortal = Z, Se.isProfiler = q, Se.isStrictMode = de, Se.isSuspense = W, Se.isSuspenseList = ke, Se.isValidElementType = x, Se.typeOf = v;
  }()), Se;
}
process.env.NODE_ENV === "production" ? Go.exports = ed() : Go.exports = td();
var ti = Go.exports;
function os(e, t = "") {
  return e.displayName || e.name || t;
}
function ri(e, t, r) {
  const n = os(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function rd(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return os(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ti.ForwardRef:
          return ri(e, e.render, "ForwardRef");
        case ti.Memo:
          return ri(e, e.type, "memo");
        default:
          return;
      }
  }
}
function as(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Za(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Za(o.style));
  }), n;
}
const nd = ns();
function $o(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function od(e) {
  return e ? (t, r) => r[e] : null;
}
function ad(e, t, r) {
  e.theme = ld(e.theme) ? r : e.theme[t] || e.theme;
}
function An(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => An(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...a
      } = r;
      n = a;
    }
    return is(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function is(e, t, r = []) {
  var o;
  let n;
  e: for (let a = 0; a < t.length; a += 1) {
    const i = t[a];
    if (typeof i.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !i.props(n))
        continue;
    } else
      for (const s in i.props)
        if (e[s] !== i.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== i.props[s])
          continue e;
    typeof i.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(i.style(n))) : r.push(i.style);
  }
  return r;
}
function id(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = nd,
    rootShouldForwardProp: n = $o,
    slotShouldForwardProp: o = $o
  } = e;
  function a(s) {
    ad(s, t, r);
  }
  return (s, c = {}) => {
    Uu(s, (v) => v.filter(($) => $ !== Sr));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: d,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = od(ss(f)),
      ...w
    } = c, g = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), h = m || !1;
    let C = $o;
    f === "Root" || f === "root" ? C = n : f ? C = o : ud(s) && (C = void 0);
    const T = Hu(s, {
      shouldForwardProp: C,
      label: cd(u, f),
      ...w
    }), S = (v) => {
      if (typeof v == "function" && v.__emotion_real !== v)
        return function(E) {
          return An(E, v);
        };
      if (_t(v)) {
        const $ = as(v);
        return $.variants ? function(N) {
          return An(N, $);
        } : $.style;
      }
      return v;
    }, x = (...v) => {
      const $ = [], E = v.map(S), N = [];
      if ($.push(a), u && b && N.push(function(F) {
        var se, ue;
        const X = (ue = (se = F.theme.components) == null ? void 0 : se[u]) == null ? void 0 : ue.styleOverrides;
        if (!X)
          return null;
        const K = {};
        for (const pe in X)
          K[pe] = An(F, X[pe]);
        return b(F, K);
      }), u && !g && N.push(function(F) {
        var K, se;
        const P = F.theme, X = (se = (K = P == null ? void 0 : P.components) == null ? void 0 : K[u]) == null ? void 0 : se.variants;
        return X ? is(F, X) : null;
      }), h || N.push(Sr), Array.isArray(E[0])) {
        const k = E.shift(), F = new Array($.length).fill(""), P = new Array(N.length).fill("");
        let X;
        X = [...F, ...k, ...P], X.raw = [...F, ...k.raw, ...P], $.unshift(X);
      }
      const z = [...$, ...E, ...N], l = T(...z);
      return s.muiName && (l.muiName = s.muiName), process.env.NODE_ENV !== "production" && (l.displayName = sd(u, f, s)), l;
    };
    return T.withConfig && (x.withConfig = T.withConfig), x;
  };
}
function sd(e, t, r) {
  return e ? `${e}${J(t || "")}` : `Styled(${rd(r)})`;
}
function cd(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ss(t || "Root")}`), r;
}
function ld(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ud(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ss(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const dd = typeof window < "u" ? H.useLayoutEffect : H.useEffect;
function cs(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function fd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pd(e, t, r, n, o) {
  const a = e[t], i = o || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof a == "function" && !fd(a) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const hd = cs(p.elementType, pd), da = p.oneOfType([p.func, p.object]);
function gd(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function md(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function yd({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = H.useRef(e !== void 0), [a, i] = H.useState(t), s = o ? e : a;
  if (process.env.NODE_ENV !== "production") {
    H.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = H.useRef(t);
    H.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = H.useCallback((u) => {
    o || i(u);
  }, []);
  return [s, c];
}
function Rn(e) {
  const t = H.useRef(e);
  return dd(() => {
    t.current = e;
  }), H.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function qo(...e) {
  return H.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      gd(r, t);
    });
  }, e);
}
const ni = {};
function ls(e, t) {
  const r = H.useRef(ni);
  return r.current === ni && (r.current = e(t)), r;
}
const bd = [];
function vd(e) {
  H.useEffect(e, bd);
}
class fa {
  constructor() {
    Fr(this, "currentId", null);
    Fr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Fr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new fa();
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
function wd() {
  const e = ls(fa.create).current;
  return vd(e.disposeEffect), e;
}
function oi(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const xd = /* @__PURE__ */ H.createContext(void 0);
process.env.NODE_ENV !== "production" && (p.node, p.object);
function Cd(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? zn(o.defaultProps, n) : !o.styleOverrides && !o.variants ? zn(o, n) : n;
}
function Sd({
  props: e,
  name: t
}) {
  const r = H.useContext(xd);
  return Cd({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const ai = {
  theme: void 0
};
function Ed(e) {
  let t, r;
  return function(o) {
    let a = t;
    return (a === void 0 || o.theme !== r) && (ai.theme = o.theme, a = as(e(ai)), t = a, r = o.theme), a;
  };
}
function Td(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ii = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, i) => {
    i === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, kd = (e, t, r) => {
  function n(o, a = [], i = []) {
    Object.entries(o).forEach(([s, c]) => {
      (!r || r && !r([...a, s])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...a, s], Array.isArray(c) ? [...i, s] : i) : t([...a, s], c, i));
    });
  }
  n(e);
}, Rd = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Io(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, i = {};
  return kd(
    e,
    (s, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(s, c))) {
        const f = `--${r ? `${r}-` : ""}${s.join("-")}`, d = Rd(s, c);
        Object.assign(o, {
          [f]: d
        }), ii(a, s, `var(${f})`, u), ii(i, s, `var(${f}, ${d})`, u);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: a,
    varsWithDefaults: i
  };
}
function Od(e, t = {}) {
  const {
    getSelector: r = h,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: a = {},
    components: i,
    defaultColorScheme: s = "light",
    ...c
  } = e, {
    vars: u,
    css: f,
    varsWithDefaults: d
  } = Io(c, t);
  let m = d;
  const b = {}, {
    [s]: w,
    ...g
  } = a;
  if (Object.entries(g || {}).forEach(([S, x]) => {
    const {
      vars: v,
      css: $,
      varsWithDefaults: E
    } = Io(x, t);
    m = lt(m, E), b[S] = {
      css: $,
      vars: v
    };
  }), w) {
    const {
      css: S,
      vars: x,
      varsWithDefaults: v
    } = Io(w, t);
    m = lt(m, v), b[s] = {
      css: S,
      vars: x
    };
  }
  function h(S, x) {
    var $, E;
    let v = o;
    if (o === "class" && (v = ".%s"), o === "data" && (v = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (v = `[${o}="%s"]`), S) {
      if (v === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = ($ = a[S]) == null ? void 0 : $.palette) == null ? void 0 : E.mode) || S})`]: {
            ":root": x
          }
        };
      if (v)
        return e.defaultColorScheme === S ? `:root, ${v.replace("%s", String(S))}` : v.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let S = {
        ...u
      };
      return Object.entries(b).forEach(([, {
        vars: x
      }]) => {
        S = lt(S, x);
      }), S;
    },
    generateStyleSheets: () => {
      var N, z;
      const S = [], x = e.defaultColorScheme || "light";
      function v(l, k) {
        Object.keys(k).length && S.push(typeof l == "string" ? {
          [l]: {
            ...k
          }
        } : l);
      }
      v(r(void 0, {
        ...f
      }), f);
      const {
        [x]: $,
        ...E
      } = b;
      if ($) {
        const {
          css: l
        } = $, k = (z = (N = a[x]) == null ? void 0 : N.palette) == null ? void 0 : z.mode, F = !n && k ? {
          colorScheme: k,
          ...l
        } : {
          ...l
        };
        v(r(x, {
          ...F
        }), F);
      }
      return Object.entries(E).forEach(([l, {
        css: k
      }]) => {
        var X, K;
        const F = (K = (X = a[l]) == null ? void 0 : X.palette) == null ? void 0 : K.mode, P = !n && F ? {
          colorScheme: F,
          ...k
        } : {
          ...k
        };
        v(r(l, {
          ...P
        }), P);
      }), S;
    }
  };
}
function $d(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Jr = {
  black: "#000",
  white: "#fff"
}, Id = {
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
}, dr = {
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
}, fr = {
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
}, Lr = {
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
}, pr = {
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
}, hr = {
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
}, gr = {
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
function us() {
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
      paper: Jr.white,
      default: Jr.white
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
const Pd = us();
function ds() {
  return {
    text: {
      primary: Jr.white,
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
      active: Jr.white,
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
const si = ds();
function ci(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ca(e.main, o) : t === "dark" && (e.dark = sa(e.main, a)));
}
function Dd(e = "light") {
  return e === "dark" ? {
    main: pr[200],
    light: pr[50],
    dark: pr[400]
  } : {
    main: pr[700],
    light: pr[400],
    dark: pr[800]
  };
}
function Md(e = "light") {
  return e === "dark" ? {
    main: dr[200],
    light: dr[50],
    dark: dr[400]
  } : {
    main: dr[500],
    light: dr[300],
    dark: dr[700]
  };
}
function Ad(e = "light") {
  return e === "dark" ? {
    main: fr[500],
    light: fr[300],
    dark: fr[700]
  } : {
    main: fr[700],
    light: fr[400],
    dark: fr[800]
  };
}
function _d(e = "light") {
  return e === "dark" ? {
    main: hr[400],
    light: hr[300],
    dark: hr[700]
  } : {
    main: hr[700],
    light: hr[500],
    dark: hr[900]
  };
}
function Nd(e = "light") {
  return e === "dark" ? {
    main: gr[400],
    light: gr[300],
    dark: gr[700]
  } : {
    main: gr[800],
    light: gr[500],
    dark: gr[900]
  };
}
function Fd(e = "light") {
  return e === "dark" ? {
    main: Lr[400],
    light: Lr[300],
    dark: Lr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Lr[500],
    dark: Lr[900]
  };
}
function pa(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, a = e.primary || Dd(t), i = e.secondary || Md(t), s = e.error || Ad(t), c = e.info || _d(t), u = e.success || Nd(t), f = e.warning || Fd(t);
  function d(g) {
    const h = Ha(g, si.text.primary) >= r ? si.text.primary : Pd.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Ha(g, h);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${h} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const m = ({
    color: g,
    name: h,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: S = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[C] && (g.main = g[C]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Yt(11, h ? ` (${h})` : "", C));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Yt(12, h ? ` (${h})` : "", JSON.stringify(g.main)));
    return ci(g, "light", T, n), ci(g, "dark", S, n), g.contrastText || (g.contrastText = d(g.main)), g;
  };
  let b;
  return t === "light" ? b = us() : t === "dark" && (b = ds()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), lt({
    // A collection of common colors.
    common: {
      ...Jr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: i,
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
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Id,
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
    ...b
  }, o);
}
function jd(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function zd(e, t) {
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
function Bd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const li = {
  textTransform: "uppercase"
}, ui = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ld(e, t) {
  const {
    fontFamily: r = ui,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: i = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: f,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, b = f || ((h) => `${h / c * m}rem`), w = (h, C, T, S, x) => ({
    fontFamily: r,
    fontWeight: h,
    fontSize: b(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ui ? {
      letterSpacing: `${Bd(S / C)}em`
    } : {},
    ...x,
    ...u
  }), g = {
    h1: w(o, 96, 1.167, -1.5),
    h2: w(o, 60, 1.2, -0.5),
    h3: w(a, 48, 1.167, 0),
    h4: w(a, 34, 1.235, 0.25),
    h5: w(a, 24, 1.334, 0),
    h6: w(i, 20, 1.6, 0.15),
    subtitle1: w(a, 16, 1.75, 0.15),
    subtitle2: w(i, 14, 1.57, 0.1),
    body1: w(a, 16, 1.5, 0.15),
    body2: w(a, 14, 1.43, 0.15),
    button: w(i, 14, 1.75, 0.4, li),
    caption: w(a, 12, 1.66, 0.4),
    overline: w(a, 12, 2.66, 1, li),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return lt({
    htmlFontSize: c,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: i,
    fontWeightBold: s,
    ...g
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const Wd = 0.2, Vd = 0.14, Yd = 0.12;
function Me(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Wd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Yd})`].join(",");
}
const Hd = ["none", Me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ud = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gd = {
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
function di(e) {
  return `${Math.round(e)}ms`;
}
function qd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Kd(e) {
  const t = {
    ...Ud,
    ...e.easing
  }, r = {
    ...Gd,
    ...e.duration
  };
  return {
    getAutoHeightDuration: qd,
    create: (o = ["all"], a = {}) => {
      const {
        duration: i = r.standard,
        easing: s = t.easeInOut,
        delay: c = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", d = (m) => !Number.isNaN(parseFloat(m));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(i) && !f(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), f(s) || console.error('MUI: Argument "easing" must be a string.'), !d(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof i == "string" ? i : di(i)} ${s} ${typeof c == "string" ? c : di(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Xd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Zd(e) {
  return _t(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function fs(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [i, s] = o[a];
      !Zd(s) || i.startsWith("unstable_") ? delete n[i] : _t(s) && (n[i] = {
        ...s
      }, r(n[i]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ko(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: a = {},
    transitions: i = {},
    typography: s = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Yt(20));
  const f = pa(a), d = ns(e);
  let m = lt(d, {
    mixins: zd(d.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Hd.slice(),
    typography: Ld(f, s),
    transitions: Kd(i),
    zIndex: {
      ...Xd
    }
  });
  if (m = lt(m, u), m = t.reduce((b, w) => lt(b, w), m), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], w = (g, h) => {
      let C;
      for (C in g) {
        const T = g[C];
        if (b.includes(C) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = jt("", C);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[C] = {};
        }
      }
    };
    Object.keys(m.components).forEach((g) => {
      const h = m.components[g].styleOverrides;
      h && g.startsWith("Mui") && w(h, g);
    });
  }
  return m.unstable_sxConfig = {
    ...lo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, m.unstable_sx = function(w) {
    return Sr({
      sx: w,
      theme: this
    });
  }, m.toRuntimeSource = fs, m;
}
function Qd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Jd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Qd(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ps(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function hs(e) {
  return e === "dark" ? Jd : [];
}
function ef(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, a = pa(t);
  return {
    palette: a,
    opacity: {
      ...ps(a.mode),
      ...r
    },
    overlays: n || hs(a.mode),
    ...o
  };
}
function tf(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const rf = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], nf = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const i = {};
      return rf(e.cssVarPrefix).forEach((s) => {
        i[s] = r[s], delete r[s];
      }), a === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: i
        }
      } : a ? {
        [a.replace("%s", t)]: i,
        [`${n}, ${a.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...i
        }
      };
    }
    if (a && a !== "media")
      return `${n}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return n;
};
function of(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function R(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Hr(e) {
  return !e || !e.startsWith("hsl") ? e : Ji(e);
}
function At(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Yr(Hr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function af(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const St = (e) => {
  try {
    return e();
  } catch {
  }
}, sf = (e = "mui") => Td(e);
function Po(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = ef({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: a,
    ...i
  } = Ko({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: a,
    opacity: {
      ...ps(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || hs(o)
  }, i;
}
function cf(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: i = tf,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, f = Object.keys(r)[0], d = n || (r.light && f !== "light" ? "light" : f), m = sf(a), {
    [d]: b,
    light: w,
    dark: g,
    ...h
  } = r, C = {
    ...h
  };
  let T = b;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Yt(21, d));
  const S = Po(C, T, u, d);
  w && !C.light && Po(C, w, void 0, "light"), g && !C.dark && Po(C, g, void 0, "dark");
  let x = {
    defaultColorScheme: d,
    ...S,
    cssVarPrefix: a,
    colorSchemeSelector: s,
    rootSelector: c,
    getCssVar: m,
    colorSchemes: C,
    font: {
      ...jd(S.typography),
      ...S.font
    },
    spacing: af(u.spacing)
  };
  Object.keys(x.colorSchemes).forEach((z) => {
    const l = x.colorSchemes[z].palette, k = (F) => {
      const P = F.split("-"), X = P[1], K = P[2];
      return m(F, l[X][K]);
    };
    if (l.mode === "light" && (R(l.common, "background", "#fff"), R(l.common, "onBackground", "#000")), l.mode === "dark" && (R(l.common, "background", "#000"), R(l.common, "onBackground", "#fff")), of(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      R(l.Alert, "errorColor", Oe(l.error.light, 0.6)), R(l.Alert, "infoColor", Oe(l.info.light, 0.6)), R(l.Alert, "successColor", Oe(l.success.light, 0.6)), R(l.Alert, "warningColor", Oe(l.warning.light, 0.6)), R(l.Alert, "errorFilledBg", k("palette-error-main")), R(l.Alert, "infoFilledBg", k("palette-info-main")), R(l.Alert, "successFilledBg", k("palette-success-main")), R(l.Alert, "warningFilledBg", k("palette-warning-main")), R(l.Alert, "errorFilledColor", St(() => l.getContrastText(l.error.main))), R(l.Alert, "infoFilledColor", St(() => l.getContrastText(l.info.main))), R(l.Alert, "successFilledColor", St(() => l.getContrastText(l.success.main))), R(l.Alert, "warningFilledColor", St(() => l.getContrastText(l.warning.main))), R(l.Alert, "errorStandardBg", $e(l.error.light, 0.9)), R(l.Alert, "infoStandardBg", $e(l.info.light, 0.9)), R(l.Alert, "successStandardBg", $e(l.success.light, 0.9)), R(l.Alert, "warningStandardBg", $e(l.warning.light, 0.9)), R(l.Alert, "errorIconColor", k("palette-error-main")), R(l.Alert, "infoIconColor", k("palette-info-main")), R(l.Alert, "successIconColor", k("palette-success-main")), R(l.Alert, "warningIconColor", k("palette-warning-main")), R(l.AppBar, "defaultBg", k("palette-grey-100")), R(l.Avatar, "defaultBg", k("palette-grey-400")), R(l.Button, "inheritContainedBg", k("palette-grey-300")), R(l.Button, "inheritContainedHoverBg", k("palette-grey-A100")), R(l.Chip, "defaultBorder", k("palette-grey-400")), R(l.Chip, "defaultAvatarColor", k("palette-grey-700")), R(l.Chip, "defaultIconColor", k("palette-grey-700")), R(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), R(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), R(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), R(l.LinearProgress, "primaryBg", $e(l.primary.main, 0.62)), R(l.LinearProgress, "secondaryBg", $e(l.secondary.main, 0.62)), R(l.LinearProgress, "errorBg", $e(l.error.main, 0.62)), R(l.LinearProgress, "infoBg", $e(l.info.main, 0.62)), R(l.LinearProgress, "successBg", $e(l.success.main, 0.62)), R(l.LinearProgress, "warningBg", $e(l.warning.main, 0.62)), R(l.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.11)`), R(l.Slider, "primaryTrack", $e(l.primary.main, 0.62)), R(l.Slider, "secondaryTrack", $e(l.secondary.main, 0.62)), R(l.Slider, "errorTrack", $e(l.error.main, 0.62)), R(l.Slider, "infoTrack", $e(l.info.main, 0.62)), R(l.Slider, "successTrack", $e(l.success.main, 0.62)), R(l.Slider, "warningTrack", $e(l.warning.main, 0.62));
      const F = kn(l.background.default, 0.8);
      R(l.SnackbarContent, "bg", F), R(l.SnackbarContent, "color", St(() => l.getContrastText(F))), R(l.SpeedDialAction, "fabHoverBg", kn(l.background.paper, 0.15)), R(l.StepConnector, "border", k("palette-grey-400")), R(l.StepContent, "border", k("palette-grey-400")), R(l.Switch, "defaultColor", k("palette-common-white")), R(l.Switch, "defaultDisabledColor", k("palette-grey-100")), R(l.Switch, "primaryDisabledColor", $e(l.primary.main, 0.62)), R(l.Switch, "secondaryDisabledColor", $e(l.secondary.main, 0.62)), R(l.Switch, "errorDisabledColor", $e(l.error.main, 0.62)), R(l.Switch, "infoDisabledColor", $e(l.info.main, 0.62)), R(l.Switch, "successDisabledColor", $e(l.success.main, 0.62)), R(l.Switch, "warningDisabledColor", $e(l.warning.main, 0.62)), R(l.TableCell, "border", $e(Tn(l.divider, 1), 0.88)), R(l.Tooltip, "bg", Tn(l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      R(l.Alert, "errorColor", $e(l.error.light, 0.6)), R(l.Alert, "infoColor", $e(l.info.light, 0.6)), R(l.Alert, "successColor", $e(l.success.light, 0.6)), R(l.Alert, "warningColor", $e(l.warning.light, 0.6)), R(l.Alert, "errorFilledBg", k("palette-error-dark")), R(l.Alert, "infoFilledBg", k("palette-info-dark")), R(l.Alert, "successFilledBg", k("palette-success-dark")), R(l.Alert, "warningFilledBg", k("palette-warning-dark")), R(l.Alert, "errorFilledColor", St(() => l.getContrastText(l.error.dark))), R(l.Alert, "infoFilledColor", St(() => l.getContrastText(l.info.dark))), R(l.Alert, "successFilledColor", St(() => l.getContrastText(l.success.dark))), R(l.Alert, "warningFilledColor", St(() => l.getContrastText(l.warning.dark))), R(l.Alert, "errorStandardBg", Oe(l.error.light, 0.9)), R(l.Alert, "infoStandardBg", Oe(l.info.light, 0.9)), R(l.Alert, "successStandardBg", Oe(l.success.light, 0.9)), R(l.Alert, "warningStandardBg", Oe(l.warning.light, 0.9)), R(l.Alert, "errorIconColor", k("palette-error-main")), R(l.Alert, "infoIconColor", k("palette-info-main")), R(l.Alert, "successIconColor", k("palette-success-main")), R(l.Alert, "warningIconColor", k("palette-warning-main")), R(l.AppBar, "defaultBg", k("palette-grey-900")), R(l.AppBar, "darkBg", k("palette-background-paper")), R(l.AppBar, "darkColor", k("palette-text-primary")), R(l.Avatar, "defaultBg", k("palette-grey-600")), R(l.Button, "inheritContainedBg", k("palette-grey-800")), R(l.Button, "inheritContainedHoverBg", k("palette-grey-700")), R(l.Chip, "defaultBorder", k("palette-grey-700")), R(l.Chip, "defaultAvatarColor", k("palette-grey-300")), R(l.Chip, "defaultIconColor", k("palette-grey-300")), R(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), R(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), R(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), R(l.LinearProgress, "primaryBg", Oe(l.primary.main, 0.5)), R(l.LinearProgress, "secondaryBg", Oe(l.secondary.main, 0.5)), R(l.LinearProgress, "errorBg", Oe(l.error.main, 0.5)), R(l.LinearProgress, "infoBg", Oe(l.info.main, 0.5)), R(l.LinearProgress, "successBg", Oe(l.success.main, 0.5)), R(l.LinearProgress, "warningBg", Oe(l.warning.main, 0.5)), R(l.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.13)`), R(l.Slider, "primaryTrack", Oe(l.primary.main, 0.5)), R(l.Slider, "secondaryTrack", Oe(l.secondary.main, 0.5)), R(l.Slider, "errorTrack", Oe(l.error.main, 0.5)), R(l.Slider, "infoTrack", Oe(l.info.main, 0.5)), R(l.Slider, "successTrack", Oe(l.success.main, 0.5)), R(l.Slider, "warningTrack", Oe(l.warning.main, 0.5));
      const F = kn(l.background.default, 0.98);
      R(l.SnackbarContent, "bg", F), R(l.SnackbarContent, "color", St(() => l.getContrastText(F))), R(l.SpeedDialAction, "fabHoverBg", kn(l.background.paper, 0.15)), R(l.StepConnector, "border", k("palette-grey-600")), R(l.StepContent, "border", k("palette-grey-600")), R(l.Switch, "defaultColor", k("palette-grey-300")), R(l.Switch, "defaultDisabledColor", k("palette-grey-600")), R(l.Switch, "primaryDisabledColor", Oe(l.primary.main, 0.55)), R(l.Switch, "secondaryDisabledColor", Oe(l.secondary.main, 0.55)), R(l.Switch, "errorDisabledColor", Oe(l.error.main, 0.55)), R(l.Switch, "infoDisabledColor", Oe(l.info.main, 0.55)), R(l.Switch, "successDisabledColor", Oe(l.success.main, 0.55)), R(l.Switch, "warningDisabledColor", Oe(l.warning.main, 0.55)), R(l.TableCell, "border", Oe(Tn(l.divider, 1), 0.68)), R(l.Tooltip, "bg", Tn(l.grey[700], 0.92));
    }
    At(l.background, "default"), At(l.background, "paper"), At(l.common, "background"), At(l.common, "onBackground"), At(l, "divider"), Object.keys(l).forEach((F) => {
      const P = l[F];
      P && typeof P == "object" && (P.main && R(l[F], "mainChannel", Yr(Hr(P.main))), P.light && R(l[F], "lightChannel", Yr(Hr(P.light))), P.dark && R(l[F], "darkChannel", Yr(Hr(P.dark))), P.contrastText && R(l[F], "contrastTextChannel", Yr(Hr(P.contrastText))), F === "text" && (At(l[F], "primary"), At(l[F], "secondary")), F === "action" && (P.active && At(l[F], "active"), P.selected && At(l[F], "selected")));
    });
  }), x = t.reduce((z, l) => lt(z, l), x);
  const v = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: i,
    getSelector: nf(x)
  }, {
    vars: $,
    generateThemeVars: E,
    generateStyleSheets: N
  } = Od(x, v);
  return x.vars = $, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([z, l]) => {
    x[z] = l;
  }), x.generateThemeVars = E, x.generateStyleSheets = N, x.generateSpacing = function() {
    return rs(u.spacing, la(this));
  }, x.getColorSchemeSelector = $d(s), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = i, x.unstable_sxConfig = {
    ...lo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, x.unstable_sx = function(l) {
    return Sr({
      sx: l,
      theme: this
    });
  }, x.toRuntimeSource = fs, x;
}
function fi(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: pa({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function lf(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...i
  } = e, s = a || "light", c = o == null ? void 0 : o[s], u = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Ko(e, ...t);
    let f = r;
    "palette" in e || u[s] && (u[s] !== !0 ? f = u[s].palette : s === "dark" && (f = {
      mode: "dark"
    }));
    const d = Ko({
      ...e,
      palette: f
    }, ...t);
    return d.defaultColorScheme = s, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, fi(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, fi(d, "light", u.light)), d;
  }
  return !r && !("light" in u) && s === "light" && (u.light = !0), cf({
    ...i,
    colorSchemes: u,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const uf = lf(), df = "$$material", ut = id({
  themeId: df,
  defaultTheme: uf,
  rootShouldForwardProp: Jn
}), Er = Ed;
process.env.NODE_ENV !== "production" && (p.node, p.object.isRequired);
function ar(e) {
  return Sd(e);
}
class Ln {
  constructor() {
    Fr(this, "mountEffect", () => {
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
    return new Ln();
  }
  static use() {
    const t = ls(Ln.create).current, [r, n] = H.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, H.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = pf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function ff() {
  return Ln.use();
}
function pf() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function hf(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Xo(e, t) {
  return Xo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Xo(e, t);
}
function gf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xo(e, t);
}
const pi = Rt.createContext(null);
function mf(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ha(e, t) {
  var r = function(a) {
    return t && On(a) ? t(a) : a;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ic.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function yf(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var a in e)
    a in t ? o.length && (n[a] = o, o = []) : o.push(a);
  var i, s = {};
  for (var c in t) {
    if (n[c])
      for (i = 0; i < n[c].length; i++) {
        var u = n[c][i];
        s[n[c][i]] = r(u);
      }
    s[c] = r(c);
  }
  for (i = 0; i < o.length; i++)
    s[o[i]] = r(o[i]);
  return s;
}
function rr(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function bf(e, t) {
  return ha(e.children, function(r) {
    return $n(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: rr(r, "appear", e),
      enter: rr(r, "enter", e),
      exit: rr(r, "exit", e)
    });
  });
}
function vf(e, t, r) {
  var n = ha(e.children), o = yf(t, n);
  return Object.keys(o).forEach(function(a) {
    var i = o[a];
    if (On(i)) {
      var s = a in t, c = a in n, u = t[a], f = On(u) && !u.props.in;
      c && (!s || f) ? o[a] = $n(i, {
        onExited: r.bind(null, i),
        in: !0,
        exit: rr(i, "exit", e),
        enter: rr(i, "enter", e)
      }) : !c && s && !f ? o[a] = $n(i, {
        in: !1
      }) : c && s && On(u) && (o[a] = $n(i, {
        onExited: r.bind(null, i),
        in: u.props.in,
        exit: rr(i, "exit", e),
        enter: rr(i, "enter", e)
      }));
    }
  }), o;
}
var wf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, xf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ga = /* @__PURE__ */ function(e) {
  gf(t, e);
  function t(n, o) {
    var a;
    a = e.call(this, n, o) || this;
    var i = a.handleExited.bind(mf(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, a;
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
  }, t.getDerivedStateFromProps = function(o, a) {
    var i = a.children, s = a.handleExited, c = a.firstRender;
    return {
      children: c ? bf(o, s) : vf(o, i, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, a) {
    var i = ha(this.props.children);
    o.key in i || (o.props.onExited && o.props.onExited(a), this.mounted && this.setState(function(s) {
      var c = Fn({}, s.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, a = o.component, i = o.childFactory, s = hf(o, ["component", "childFactory"]), c = this.state.contextValue, u = wf(this.state.children).map(i);
    return delete s.appear, delete s.enter, delete s.exit, a === null ? /* @__PURE__ */ Rt.createElement(pi.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Rt.createElement(pi.Provider, {
      value: c
    }, /* @__PURE__ */ Rt.createElement(a, s, u));
  }, t;
}(Rt.Component);
ga.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: p.any,
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
  children: p.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: p.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: p.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: p.bool,
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
  childFactory: p.func
} : {};
ga.defaultProps = xf;
function gs(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: a,
    rippleSize: i,
    in: s,
    onExited: c,
    timeout: u
  } = e, [f, d] = H.useState(!1), m = ve(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: i,
    height: i,
    top: -(i / 2) + a,
    left: -(i / 2) + o
  }, w = ve(r.child, f && r.childLeaving, n && r.childPulsate);
  return !s && !f && d(!0), H.useEffect(() => {
    if (!s && c != null) {
      const g = setTimeout(c, u);
      return () => {
        clearTimeout(g);
      };
    }
  }, [c, s, u]), /* @__PURE__ */ D.jsx("span", {
    className: m,
    style: b,
    children: /* @__PURE__ */ D.jsx("span", {
      className: w
    })
  });
}
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object.isRequired,
  className: p.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: p.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: p.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: p.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: p.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: p.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: p.number,
  /**
   * exit delay
   */
  timeout: p.number.isRequired
});
const ht = Kt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Zo = 550, Cf = 80, Sf = oa`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ef = oa`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Tf = oa`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, kf = ut("span", {
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
}), Rf = ut(gs, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ht.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Sf};
    animation-duration: ${Zo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ht.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ht.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ht.childLeaving} {
    opacity: 0;
    animation-name: ${Ef};
    animation-duration: ${Zo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ht.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Tf};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ms = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: a = {},
    className: i,
    ...s
  } = n, [c, u] = H.useState([]), f = H.useRef(0), d = H.useRef(null);
  H.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [c]);
  const m = H.useRef(!1), b = wd(), w = H.useRef(null), g = H.useRef(null), h = H.useCallback((x) => {
    const {
      pulsate: v,
      rippleX: $,
      rippleY: E,
      rippleSize: N,
      cb: z
    } = x;
    u((l) => [...l, /* @__PURE__ */ D.jsx(Rf, {
      classes: {
        ripple: ve(a.ripple, ht.ripple),
        rippleVisible: ve(a.rippleVisible, ht.rippleVisible),
        ripplePulsate: ve(a.ripplePulsate, ht.ripplePulsate),
        child: ve(a.child, ht.child),
        childLeaving: ve(a.childLeaving, ht.childLeaving),
        childPulsate: ve(a.childPulsate, ht.childPulsate)
      },
      timeout: Zo,
      pulsate: v,
      rippleX: $,
      rippleY: E,
      rippleSize: N
    }, f.current)]), f.current += 1, d.current = z;
  }, [a]), C = H.useCallback((x = {}, v = {}, $ = () => {
  }) => {
    const {
      pulsate: E = !1,
      center: N = o || v.pulsate,
      fakeElement: z = !1
      // For test purposes
    } = v;
    if ((x == null ? void 0 : x.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (m.current = !0);
    const l = z ? null : g.current, k = l ? l.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, P, X;
    if (N || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      F = Math.round(k.width / 2), P = Math.round(k.height / 2);
    else {
      const {
        clientX: K,
        clientY: se
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      F = Math.round(K - k.left), P = Math.round(se - k.top);
    }
    if (N)
      X = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), X % 2 === 0 && (X += 1);
    else {
      const K = Math.max(Math.abs((l ? l.clientWidth : 0) - F), F) * 2 + 2, se = Math.max(Math.abs((l ? l.clientHeight : 0) - P), P) * 2 + 2;
      X = Math.sqrt(K ** 2 + se ** 2);
    }
    x != null && x.touches ? w.current === null && (w.current = () => {
      h({
        pulsate: E,
        rippleX: F,
        rippleY: P,
        rippleSize: X,
        cb: $
      });
    }, b.start(Cf, () => {
      w.current && (w.current(), w.current = null);
    })) : h({
      pulsate: E,
      rippleX: F,
      rippleY: P,
      rippleSize: X,
      cb: $
    });
  }, [o, h, b]), T = H.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), S = H.useCallback((x, v) => {
    if (b.clear(), (x == null ? void 0 : x.type) === "touchend" && w.current) {
      w.current(), w.current = null, b.start(0, () => {
        S(x, v);
      });
      return;
    }
    w.current = null, u(($) => $.length > 0 ? $.slice(1) : $), d.current = v;
  }, [b]);
  return H.useImperativeHandle(r, () => ({
    pulsate: T,
    start: C,
    stop: S
  }), [T, C, S]), /* @__PURE__ */ D.jsx(kf, {
    className: ve(ht.root, a.root, i),
    ref: g,
    ...s,
    children: /* @__PURE__ */ D.jsx(ga, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (ms.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: p.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string
});
function Of(e) {
  return jt("MuiButtonBase", e);
}
const $f = Kt("MuiButtonBase", ["root", "disabled", "focusVisible"]), If = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, i = or({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Of, o);
  return r && n && (i.root += ` ${n}`), i;
}, Pf = ut("button", {
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
  [`&.${$f.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Tr = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: a = !1,
    children: i,
    className: s,
    component: c = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: d = !1,
    focusRipple: m = !1,
    focusVisibleClassName: b,
    LinkComponent: w = "a",
    onBlur: g,
    onClick: h,
    onContextMenu: C,
    onDragLeave: T,
    onFocus: S,
    onFocusVisible: x,
    onKeyDown: v,
    onKeyUp: $,
    onMouseDown: E,
    onMouseLeave: N,
    onMouseUp: z,
    onTouchEnd: l,
    onTouchMove: k,
    onTouchStart: F,
    tabIndex: P = 0,
    TouchRippleProps: X,
    touchRippleRef: K,
    type: se,
    ...ue
  } = n, pe = H.useRef(null), ne = ff(), M = qo(ne.ref, K), [Y, re] = H.useState(!1);
  u && Y && re(!1), H.useImperativeHandle(o, () => ({
    focusVisible: () => {
      re(!0), pe.current.focus();
    }
  }), []);
  const oe = ne.shouldMount && !f && !u;
  H.useEffect(() => {
    Y && m && !f && ne.pulsate();
  }, [f, m, Y, ne]);
  function I(ae, Xt, Zt = d) {
    return Rn((Qt) => (Xt && Xt(Qt), Zt || ne[ae](Qt), !0));
  }
  const j = I("start", E), V = I("stop", C), O = I("stop", T), L = I("stop", z), Z = I("stop", (ae) => {
    Y && ae.preventDefault(), N && N(ae);
  }), q = I("start", F), de = I("stop", l), W = I("stop", k), ke = I("stop", (ae) => {
    oi(ae.target) || re(!1), g && g(ae);
  }, !1), G = Rn((ae) => {
    pe.current || (pe.current = ae.currentTarget), oi(ae.target) && (re(!0), x && x(ae)), S && S(ae);
  }), Ie = () => {
    const ae = pe.current;
    return c && c !== "button" && !(ae.tagName === "A" && ae.href);
  }, Ae = Rn((ae) => {
    m && !ae.repeat && Y && ae.key === " " && ne.stop(ae, () => {
      ne.start(ae);
    }), ae.target === ae.currentTarget && Ie() && ae.key === " " && ae.preventDefault(), v && v(ae), ae.target === ae.currentTarget && Ie() && ae.key === "Enter" && !u && (ae.preventDefault(), h && h(ae));
  }), Ge = Rn((ae) => {
    m && ae.key === " " && Y && !ae.defaultPrevented && ne.stop(ae, () => {
      ne.pulsate(ae);
    }), $ && $(ae), h && ae.target === ae.currentTarget && Ie() && ae.key === " " && !ae.defaultPrevented && h(ae);
  });
  let Ye = c;
  Ye === "button" && (ue.href || ue.to) && (Ye = w);
  const Pe = {};
  Ye === "button" ? (Pe.type = se === void 0 ? "button" : se, Pe.disabled = u) : (!ue.href && !ue.to && (Pe.role = "button"), u && (Pe["aria-disabled"] = u));
  const It = qo(r, pe), dt = {
    ...n,
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: d,
    focusRipple: m,
    tabIndex: P,
    focusVisible: Y
  }, ft = If(dt);
  return /* @__PURE__ */ D.jsxs(Pf, {
    as: Ye,
    className: ve(ft.root, s),
    ownerState: dt,
    onBlur: ke,
    onClick: h,
    onContextMenu: V,
    onFocus: G,
    onKeyDown: Ae,
    onKeyUp: Ge,
    onMouseDown: j,
    onMouseLeave: Z,
    onMouseUp: L,
    onDragLeave: O,
    onTouchEnd: de,
    onTouchMove: W,
    onTouchStart: q,
    ref: It,
    tabIndex: u ? -1 : P,
    type: se,
    ...Pe,
    ...ue,
    children: [i, oe ? /* @__PURE__ */ D.jsx(ms, {
      ref: M,
      center: a,
      ...X
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Tr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: da,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: p.bool,
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: hd,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: p.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: p.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: p.string,
  /**
   * @ignore
   */
  href: p.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: p.elementType,
  /**
   * @ignore
   */
  onBlur: p.func,
  /**
   * @ignore
   */
  onClick: p.func,
  /**
   * @ignore
   */
  onContextMenu: p.func,
  /**
   * @ignore
   */
  onDragLeave: p.func,
  /**
   * @ignore
   */
  onFocus: p.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: p.func,
  /**
   * @ignore
   */
  onKeyDown: p.func,
  /**
   * @ignore
   */
  onKeyUp: p.func,
  /**
   * @ignore
   */
  onMouseDown: p.func,
  /**
   * @ignore
   */
  onMouseLeave: p.func,
  /**
   * @ignore
   */
  onMouseUp: p.func,
  /**
   * @ignore
   */
  onTouchEnd: p.func,
  /**
   * @ignore
   */
  onTouchMove: p.func,
  /**
   * @ignore
   */
  onTouchStart: p.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @default 0
   */
  tabIndex: p.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: p.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: p.oneOfType([p.func, p.shape({
    current: p.shape({
      pulsate: p.func.isRequired,
      start: p.func.isRequired,
      stop: p.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string])
});
function Df(e) {
  return typeof e.main == "string";
}
function Mf(e, t = []) {
  if (!Df(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Nt(e = []) {
  return ([, t]) => t && Mf(t, e);
}
function Af(e) {
  return jt("MuiButton", e);
}
const mr = Kt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ys = /* @__PURE__ */ H.createContext({});
process.env.NODE_ENV !== "production" && (ys.displayName = "ButtonGroupContext");
const bs = /* @__PURE__ */ H.createContext(void 0);
process.env.NODE_ENV !== "production" && (bs.displayName = "ButtonGroupButtonContext");
const _f = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: a,
    classes: i
  } = e, s = {
    root: ["root", a, `${a}${J(t)}`, `size${J(o)}`, `${a}Size${J(o)}`, `color${J(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${J(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${J(o)}`]
  }, c = or(s, Af, i);
  return {
    ...i,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, vs = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Nf = ut(Tr, {
  shouldForwardProp: (e) => Jn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${J(r.color)}`], t[`size${J(r.size)}`], t[`${r.variant}Size${J(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Er(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${mr.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${mr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${mr.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${mr.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Nt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : We(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${mr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${mr.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), Ff = ut("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${J(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...vs]
}), jf = ut("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${J(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...vs]
}), ws = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const n = H.useContext(ys), o = H.useContext(bs), a = zn(n, t), i = ar({
    props: a,
    name: "MuiButton"
  }), {
    children: s,
    color: c = "primary",
    component: u = "button",
    className: f,
    disabled: d = !1,
    disableElevation: m = !1,
    disableFocusRipple: b = !1,
    endIcon: w,
    focusVisibleClassName: g,
    fullWidth: h = !1,
    size: C = "medium",
    startIcon: T,
    type: S,
    variant: x = "text",
    ...v
  } = i, $ = {
    ...i,
    color: c,
    component: u,
    disabled: d,
    disableElevation: m,
    disableFocusRipple: b,
    fullWidth: h,
    size: C,
    type: S,
    variant: x
  }, E = _f($), N = T && /* @__PURE__ */ D.jsx(Ff, {
    className: E.startIcon,
    ownerState: $,
    children: T
  }), z = w && /* @__PURE__ */ D.jsx(jf, {
    className: E.endIcon,
    ownerState: $,
    children: w
  }), l = o || "";
  return /* @__PURE__ */ D.jsxs(Nf, {
    ownerState: $,
    className: ve(n.className, E.root, f, l),
    component: u,
    disabled: d,
    focusRipple: !b,
    focusVisibleClassName: ve(E.focusVisible, g),
    ref: r,
    type: S,
    ...v,
    classes: E,
    children: [N, s, z]
  });
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: p.oneOfType([p.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), p.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: p.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * Element placed after the children.
   */
  endIcon: p.node,
  /**
   * @ignore
   */
  focusVisibleClassName: p.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: p.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: p.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["small", "medium", "large"]), p.string]),
  /**
   * Element placed before the children.
   */
  startIcon: p.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: p.oneOfType([p.oneOf(["contained", "outlined", "text"]), p.string])
});
const Ee = {
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
}, xs = $t(ws, {
  shouldForwardProp: (e) => e !== "$level"
})`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.125rem 0.75rem 0.125rem 0.5rem;
    height: 2rem;
    border-radius: 4px;
    ${({ $level: e }) => {
  switch (e) {
    case "primary":
      return Mn`
                    background: ${Ee.primary500};
                    color: ${Ee.gray100};
                `;
    case "secondary":
      return Mn`
                    border: 1px solid ${Ee.primary500};
                    background: ${Ee.gray100};
                    color: ${Ee.primary500};
                `;
    default:
      return Mn`
                    background: ${Ee.gray100};
                    color: ${Ee.gray700};
                `;
  }
}}
`;
function mt(e, t, r) {
  const n = typeof e.colSpan == "function" ? e.colSpan(r) : 1;
  if (Number.isInteger(n) && n > 1 && (!e.frozen || e.idx + n - 1 <= t))
    return n;
}
function zf(e) {
  e.stopPropagation();
}
function _n(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function Gr(e) {
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
const Bf = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function Wn(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function Lf(e) {
  return Wn(e) && e.keyCode !== 86 ? !1 : !Bf.has(e.key);
}
function Wf({
  key: e,
  target: t
}) {
  var r;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((r = t.closest(".rdg-editor-container")) == null ? void 0 : r.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const Vf = "mlln6zg7-0-0-beta-47";
function Yf(e) {
  return e.map(({
    key: t,
    idx: r,
    minWidth: n,
    maxWidth: o
  }) => /* @__PURE__ */ D.jsx("div", {
    className: Vf,
    style: {
      gridColumnStart: r + 1,
      minWidth: n,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function Hf({
  selectedPosition: e,
  columns: t,
  rows: r
}) {
  const n = t[e.idx], o = r[e.rowIdx];
  return Cs(n, o);
}
function Cs(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Uf({
  rows: e,
  topSummaryRows: t,
  bottomSummaryRows: r,
  rowIdx: n,
  mainHeaderRowIdx: o,
  lastFrozenColumnIndex: a,
  column: i
}) {
  const s = (t == null ? void 0 : t.length) ?? 0;
  if (n === o)
    return mt(i, a, {
      type: "HEADER"
    });
  if (t && n > o && n <= s + o)
    return mt(i, a, {
      type: "SUMMARY",
      row: t[n + s]
    });
  if (n >= 0 && n < e.length) {
    const c = e[n];
    return mt(i, a, {
      type: "ROW",
      row: c
    });
  }
  if (r)
    return mt(i, a, {
      type: "SUMMARY",
      row: r[n - e.length]
    });
}
function Gf({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: r,
  columns: n,
  colSpanColumns: o,
  rows: a,
  topSummaryRows: i,
  bottomSummaryRows: s,
  minRowIdx: c,
  mainHeaderRowIdx: u,
  maxRowIdx: f,
  currentPosition: {
    idx: d,
    rowIdx: m
  },
  nextPosition: b,
  lastFrozenColumnIndex: w,
  isCellWithinBounds: g
}) {
  let {
    idx: h,
    rowIdx: C
  } = b;
  const T = n.length, S = ($) => {
    for (const E of o) {
      const N = E.idx;
      if (N > h) break;
      const z = Uf({
        rows: a,
        topSummaryRows: i,
        bottomSummaryRows: s,
        rowIdx: C,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: w,
        column: E
      });
      if (z && h > N && h < z + N) {
        h = N + ($ ? z : 0);
        break;
      }
    }
  }, x = ($) => $.level + u, v = () => {
    if (t) {
      let E = n[h].parent;
      for (; E !== void 0; ) {
        const N = x(E);
        if (C === N) {
          h = E.idx + E.colSpan;
          break;
        }
        E = E.parent;
      }
    } else if (e) {
      let E = n[h].parent, N = !1;
      for (; E !== void 0; ) {
        const z = x(E);
        if (C >= z) {
          h = E.idx, C = z, N = !0;
          break;
        }
        E = E.parent;
      }
      N || (h = d, C = m);
    }
  };
  if (g(b) && (S(t), C < u && v()), r === "CHANGE_ROW" && (h === T ? C === f || (h = 0, C += 1) : h === -1 && (C === c || (C -= 1, h = T - 1), S(!1))), C < u) {
    let E = n[h].parent;
    const N = C;
    for (C = u; E !== void 0; ) {
      const z = x(E);
      z >= N && (C = z, h = E.idx), E = E.parent;
    }
  }
  return {
    idx: h,
    rowIdx: C
  };
}
function qf({
  maxColIdx: e,
  minRowIdx: t,
  maxRowIdx: r,
  selectedPosition: {
    rowIdx: n,
    idx: o
  },
  shiftKey: a
}) {
  return a ? o === 0 && n === t : o === e && n === r;
}
const Kf = "cj343x07-0-0-beta-47", Ss = `rdg-cell ${Kf}`, Xf = "csofj7r7-0-0-beta-47", Zf = `rdg-cell-frozen ${Xf}`;
function ma(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Es(e, t, r) {
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
function $r(e, t = 1) {
  const r = e.idx + 1;
  return {
    gridColumnStart: r,
    gridColumnEnd: r + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function cn(e, ...t) {
  return ve(Ss, ...t, e.frozen && Zf);
}
const {
  min: en,
  max: Vn,
  floor: hi,
  sign: Qf,
  abs: Jf
} = Math;
function qr(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Ts(e, {
  minWidth: t,
  maxWidth: r
}) {
  return e = Vn(e, t), typeof r == "number" && r >= t ? en(e, r) : e;
}
function ks(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const ep = "c1bn88vv7-0-0-beta-47", tp = `rdg-checkbox-input ${ep}`;
function rp({
  onChange: e,
  indeterminate: t,
  ...r
}) {
  function n(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ D.jsx("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: tp,
    onChange: n,
    ...r
  });
}
const np = "g1s9ylgp7-0-0-beta-47", op = `rdg-group-cell-content ${np}`, ap = "cz54e4y7-0-0-beta-47", ip = `rdg-caret ${ap}`;
function sp(e) {
  return /* @__PURE__ */ D.jsx(cp, {
    ...e
  });
}
function cp({
  groupKey: e,
  isExpanded: t,
  tabIndex: r,
  toggleGroup: n
}) {
  function o({
    key: i
  }) {
    i === "Enter" && n();
  }
  const a = t ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7";
  return /* @__PURE__ */ D.jsxs("span", {
    className: op,
    tabIndex: r,
    onKeyDown: o,
    children: [e, /* @__PURE__ */ D.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: ip,
      "aria-hidden": !0,
      children: /* @__PURE__ */ D.jsx("path", {
        d: a
      })
    })]
  });
}
function lp(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Rs = /* @__PURE__ */ nn(void 0), up = Rs.Provider;
function uo() {
  return xr(Rs);
}
function ya({
  value: e,
  tabIndex: t,
  indeterminate: r,
  disabled: n,
  onChange: o,
  "aria-label": a,
  "aria-labelledby": i
}) {
  const s = uo().renderCheckbox;
  return s({
    "aria-label": a,
    "aria-labelledby": i,
    tabIndex: t,
    indeterminate: r,
    disabled: n,
    checked: e,
    onChange: o
  });
}
const Os = /* @__PURE__ */ nn(void 0), $s = Os.Provider, Is = /* @__PURE__ */ nn(void 0), dp = Is.Provider;
function Ps() {
  const e = xr(Os), t = xr(Is);
  if (e === void 0 || t === void 0)
    throw new Error("useRowSelection must be used within DataGrid cells");
  return {
    isRowSelectionDisabled: e.isRowSelectionDisabled,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const Ds = /* @__PURE__ */ nn(void 0), fp = Ds.Provider, Ms = /* @__PURE__ */ nn(void 0), pp = Ms.Provider;
function hp() {
  const e = xr(Ds), t = xr(Ms);
  if (e === void 0 || t === void 0)
    throw new Error("useHeaderRowSelection must be used within DataGrid cells");
  return {
    isIndeterminate: e.isIndeterminate,
    isRowSelected: e.isRowSelected,
    onRowSelectionChange: t
  };
}
const kr = "rdg-select-column";
function gp(e) {
  const {
    isIndeterminate: t,
    isRowSelected: r,
    onRowSelectionChange: n
  } = hp();
  return /* @__PURE__ */ D.jsx(ya, {
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
function mp(e) {
  const {
    isRowSelectionDisabled: t,
    isRowSelected: r,
    onRowSelectionChange: n
  } = Ps();
  return /* @__PURE__ */ D.jsx(ya, {
    "aria-label": "Select",
    tabIndex: e.tabIndex,
    disabled: t,
    value: r,
    onChange: (o, a) => {
      n({
        row: e.row,
        checked: o,
        isShiftClick: a
      });
    }
  });
}
function yp(e) {
  const {
    isRowSelected: t,
    onRowSelectionChange: r
  } = Ps();
  return /* @__PURE__ */ D.jsx(ya, {
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
const bp = {
  key: kr,
  name: "",
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: !1,
  sortable: !1,
  frozen: !0,
  renderHeaderCell(e) {
    return /* @__PURE__ */ D.jsx(gp, {
      ...e
    });
  },
  renderCell(e) {
    return /* @__PURE__ */ D.jsx(mp, {
      ...e
    });
  },
  renderGroupCell(e) {
    return /* @__PURE__ */ D.jsx(yp, {
      ...e
    });
  }
}, vp = "auto", wp = 50;
function xp({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: r,
  viewportWidth: n,
  scrollLeft: o,
  enableVirtualization: a
}) {
  const i = (t == null ? void 0 : t.width) ?? vp, s = (t == null ? void 0 : t.minWidth) ?? wp, c = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? lp, f = (t == null ? void 0 : t.sortable) ?? !1, d = (t == null ? void 0 : t.resizable) ?? !1, m = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: b,
    colSpanColumns: w,
    lastFrozenColumnIndex: g,
    headerRowsCount: h
  } = Ue(() => {
    let E = -1, N = 1;
    const z = [];
    l(e, 1);
    function l(F, P, X) {
      for (const K of F) {
        if ("children" in K) {
          const pe = {
            name: K.name,
            parent: X,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: K.headerCellClass
          };
          l(K.children, P + 1, pe);
          continue;
        }
        const se = K.frozen ?? !1, ue = {
          ...K,
          parent: X,
          idx: 0,
          level: 0,
          frozen: se,
          width: K.width ?? i,
          minWidth: K.minWidth ?? s,
          maxWidth: K.maxWidth ?? c,
          sortable: K.sortable ?? f,
          resizable: K.resizable ?? d,
          draggable: K.draggable ?? m,
          renderCell: K.renderCell ?? u
        };
        z.push(ue), se && E++, P > N && (N = P);
      }
    }
    z.sort(({
      key: F,
      frozen: P
    }, {
      key: X,
      frozen: K
    }) => F === kr ? -1 : X === kr ? 1 : P ? K ? 0 : -1 : K ? 1 : 0);
    const k = [];
    return z.forEach((F, P) => {
      F.idx = P, As(F, P, 0), F.colSpan != null && k.push(F);
    }), {
      columns: z,
      colSpanColumns: k,
      lastFrozenColumnIndex: E,
      headerRowsCount: N
    };
  }, [e, i, s, c, u, d, f, m]), {
    templateColumns: C,
    layoutCssVars: T,
    totalFrozenColumnWidth: S,
    columnMetrics: x
  } = Ue(() => {
    const E = /* @__PURE__ */ new Map();
    let N = 0, z = 0;
    const l = [];
    for (const F of b) {
      let P = r(F);
      typeof P == "number" ? P = Ts(P, F) : P = F.minWidth, l.push(`${P}px`), E.set(F, {
        width: P,
        left: N
      }), N += P;
    }
    if (g !== -1) {
      const F = E.get(b[g]);
      z = F.left + F.width;
    }
    const k = {};
    for (let F = 0; F <= g; F++) {
      const P = b[F];
      k[`--rdg-frozen-left-${P.idx}`] = `${E.get(P).left}px`;
    }
    return {
      templateColumns: l,
      layoutCssVars: k,
      totalFrozenColumnWidth: z,
      columnMetrics: E
    };
  }, [r, b, g]), [v, $] = Ue(() => {
    if (!a)
      return [0, b.length - 1];
    const E = o + S, N = o + n, z = b.length - 1, l = en(g + 1, z);
    if (E >= N)
      return [l, l];
    let k = l;
    for (; k < z; ) {
      const {
        left: K,
        width: se
      } = x.get(b[k]);
      if (K + se > E)
        break;
      k++;
    }
    let F = k;
    for (; F < z; ) {
      const {
        left: K,
        width: se
      } = x.get(b[F]);
      if (K + se >= N)
        break;
      F++;
    }
    const P = Vn(l, k - 1), X = en(z, F + 1);
    return [P, X];
  }, [x, b, g, o, S, n, a]);
  return {
    columns: b,
    colSpanColumns: w,
    colOverscanStartIdx: v,
    colOverscanEndIdx: $,
    templateColumns: C,
    layoutCssVars: T,
    headerRowsCount: h,
    lastFrozenColumnIndex: g,
    totalFrozenColumnWidth: S
  };
}
function As(e, t, r) {
  if (r < e.level && (e.level = r), e.parent !== void 0) {
    const {
      parent: n
    } = e;
    n.idx === -1 && (n.idx = t), n.colSpan += 1, As(n, t, r - 1);
  }
}
const Rr = typeof window > "u" ? qn : Dc;
function Cp(e, t, r, n, o, a, i, s, c, u) {
  const f = kt(o), d = e.length === t.length, m = d && o !== f.current, b = [...r], w = [];
  for (const {
    key: T,
    idx: S,
    width: x
  } of t)
    typeof x == "string" && (m || !i.has(T)) && !a.has(T) && (b[S] = x, w.push(T));
  const g = b.join(" ");
  Rr(() => {
    f.current = o, h(w);
  });
  function h(T) {
    T.length !== 0 && c((S) => {
      const x = new Map(S);
      let v = !1;
      for (const $ of T) {
        const E = gi(n, $);
        v || (v = E !== S.get($)), E === void 0 ? x.delete($) : x.set($, E);
      }
      return v ? x : S;
    });
  }
  function C(T, S) {
    const {
      key: x
    } = T, v = [...r], $ = [];
    for (const {
      key: N,
      idx: z,
      width: l
    } of t)
      if (x === N) {
        const k = typeof S == "number" ? `${S}px` : S;
        v[z] = k;
      } else d && typeof l == "string" && !a.has(N) && (v[z] = l, $.push(N));
    n.current.style.gridTemplateColumns = v.join(" ");
    const E = typeof S == "number" ? S : gi(n, x);
    Nn(() => {
      s((N) => {
        const z = new Map(N);
        return z.set(x, E), z;
      }), h($);
    }), u == null || u(T.idx, E);
  }
  return {
    gridTemplateColumns: g,
    handleColumnResize: C
  };
}
function gi(e, t) {
  var o;
  const r = `[data-measuring-cell-key="${CSS.escape(t)}"]`, n = (o = e.current) == null ? void 0 : o.querySelector(r);
  return n == null ? void 0 : n.getBoundingClientRect().width;
}
function Sp() {
  const e = kt(null), [t, r] = Ze(1), [n, o] = Ze(1), [a, i] = Ze(0);
  return Rr(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: c,
      clientHeight: u,
      offsetWidth: f,
      offsetHeight: d
    } = e.current, {
      width: m,
      height: b
    } = e.current.getBoundingClientRect(), w = d - u, g = m - f + c, h = b - w;
    r(g), o(h), i(w);
    const C = new s((T) => {
      const S = T[0].contentBoxSize[0], {
        clientHeight: x,
        offsetHeight: v
      } = e.current;
      Nn(() => {
        r(S.inlineSize), o(S.blockSize), i(v - x);
      });
    });
    return C.observe(e.current), () => {
      C.disconnect();
    };
  }, []), [e, t, n, a];
}
function nt(e) {
  const t = kt(e);
  qn(() => {
    t.current = e;
  });
  const r = nr((...n) => {
    t.current(...n);
  }, []);
  return e && r;
}
function ln(e) {
  const [t, r] = Ze(!1);
  t && !e && r(!1);
  function n(a) {
    a.target !== a.currentTarget && r(!0);
  }
  return {
    tabIndex: e && !t ? 0 : -1,
    childTabIndex: e ? 0 : -1,
    onFocus: e ? n : void 0
  };
}
function Ep({
  columns: e,
  colSpanColumns: t,
  rows: r,
  topSummaryRows: n,
  bottomSummaryRows: o,
  colOverscanStartIdx: a,
  colOverscanEndIdx: i,
  lastFrozenColumnIndex: s,
  rowOverscanStartIdx: c,
  rowOverscanEndIdx: u
}) {
  const f = Ue(() => {
    if (a === 0) return 0;
    let d = a;
    const m = (b, w) => w !== void 0 && b + w > a ? (d = b, !0) : !1;
    for (const b of t) {
      const w = b.idx;
      if (w >= d || m(w, mt(b, s, {
        type: "HEADER"
      })))
        break;
      for (let g = c; g <= u; g++) {
        const h = r[g];
        if (m(w, mt(b, s, {
          type: "ROW",
          row: h
        })))
          break;
      }
      if (n != null) {
        for (const g of n)
          if (m(w, mt(b, s, {
            type: "SUMMARY",
            row: g
          })))
            break;
      }
      if (o != null) {
        for (const g of o)
          if (m(w, mt(b, s, {
            type: "SUMMARY",
            row: g
          })))
            break;
      }
    }
    return d;
  }, [c, u, r, n, o, a, s, t]);
  return Ue(() => {
    const d = [];
    for (let m = 0; m <= i; m++) {
      const b = e[m];
      m < f && !b.frozen || d.push(b);
    }
    return d;
  }, [f, i, e]);
}
function Tp({
  rows: e,
  rowHeight: t,
  clientHeight: r,
  scrollTop: n,
  enableVirtualization: o
}) {
  const {
    totalRowHeight: a,
    gridTemplateRows: i,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: u
  } = Ue(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (h) => h * t,
        getRowHeight: () => t,
        findRowIdx: (h) => hi(h / t)
      };
    let m = 0, b = " ";
    const w = e.map((h) => {
      const C = t(h), T = {
        top: m,
        height: C
      };
      return b += `${C}px `, m += C, T;
    }), g = (h) => Vn(0, en(e.length - 1, h));
    return {
      totalRowHeight: m,
      gridTemplateRows: b,
      getRowTop: (h) => w[g(h)].top,
      getRowHeight: (h) => w[g(h)].height,
      findRowIdx(h) {
        let C = 0, T = w.length - 1;
        for (; C <= T; ) {
          const S = C + hi((T - C) / 2), x = w[S].top;
          if (x === h) return S;
          if (x < h ? C = S + 1 : x > h && (T = S - 1), C > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let f = 0, d = e.length - 1;
  if (o) {
    const b = u(n), w = u(n + r);
    f = Vn(0, b - 4), d = en(e.length - 1, w + 4);
  }
  return {
    rowOverscanStartIdx: f,
    rowOverscanEndIdx: d,
    totalRowHeight: a,
    gridTemplateRows: i,
    getRowTop: s,
    getRowHeight: c,
    findRowIdx: u
  };
}
const kp = "c1w9bbhr7-0-0-beta-47", Rp = "c1creorc7-0-0-beta-47", Op = `rdg-cell-drag-handle ${kp}`;
function $p({
  gridRowStart: e,
  rows: t,
  column: r,
  columnWidth: n,
  maxColIdx: o,
  isLastRow: a,
  selectedPosition: i,
  latestDraggedOverRowIdx: s,
  isCellEditable: c,
  onRowsChange: u,
  onFill: f,
  onClick: d,
  setDragging: m,
  setDraggedOverRowIdx: b
}) {
  const {
    idx: w,
    rowIdx: g
  } = i;
  function h(v) {
    if (v.preventDefault(), v.buttons !== 1) return;
    m(!0), window.addEventListener("mouseover", $), window.addEventListener("mouseup", E);
    function $(N) {
      N.buttons !== 1 && E();
    }
    function E() {
      window.removeEventListener("mouseover", $), window.removeEventListener("mouseup", E), m(!1), C();
    }
  }
  function C() {
    const v = s.current;
    if (v === void 0) return;
    const $ = g < v ? g + 1 : v, E = g < v ? v + 1 : g;
    S($, E), b(void 0);
  }
  function T(v) {
    v.stopPropagation(), S(g + 1, t.length);
  }
  function S(v, $) {
    const E = t[g], N = [...t], z = [];
    for (let l = v; l < $; l++)
      if (c({
        rowIdx: l,
        idx: w
      })) {
        const k = f({
          columnKey: r.key,
          sourceRow: E,
          targetRow: t[l]
        });
        k !== t[l] && (N[l] = k, z.push(l));
      }
    z.length > 0 && (u == null || u(N, {
      indexes: z,
      column: r
    }));
  }
  function x() {
    var l;
    const v = ((l = r.colSpan) == null ? void 0 : l.call(r, {
      type: "ROW",
      row: t[g]
    })) ?? 1, {
      insetInlineStart: $,
      ...E
    } = $r(r, v), N = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", z = r.idx + v - 1 === o;
    return {
      ...E,
      gridRowStart: e,
      marginInlineEnd: z ? void 0 : N,
      marginBlockEnd: a ? void 0 : N,
      insetInlineStart: $ ? `calc(${$} + ${n}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ D.jsx("div", {
    style: x(),
    className: ve(Op, r.frozen && Rp),
    onClick: d,
    onMouseDown: h,
    onDoubleClick: T
  });
}
const Ip = "cis5rrm7-0-0-beta-47";
function Pp({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  onRowChange: o,
  closeEditor: a,
  onKeyDown: i,
  navigate: s
}) {
  var C, T, S;
  const c = kt(void 0), u = ((C = e.editorOptions) == null ? void 0 : C.commitOnOutsideClick) !== !1, f = nt(() => {
    b(!0, !1);
  });
  qn(() => {
    if (!u) return;
    function x() {
      c.current = requestAnimationFrame(f);
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
    cancelAnimationFrame(c.current);
  }
  function m(x) {
    if (i) {
      const v = Gr(x);
      if (i({
        mode: "EDIT",
        row: r,
        column: e,
        rowIdx: n,
        navigate() {
          s(x);
        },
        onClose: b
      }, v), v.isGridDefaultPrevented()) return;
    }
    x.key === "Escape" ? b() : x.key === "Enter" ? b(!0) : Wf(x) && s(x);
  }
  function b(x = !1, v = !0) {
    x ? o(r, !0, v) : a(v);
  }
  function w(x, v = !1) {
    o(x, v, v);
  }
  const {
    cellClass: g
  } = e, h = cn(e, "rdg-editor-container", typeof g == "function" ? g(r) : g, !((T = e.editorOptions) != null && T.displayCellContent) && Ip);
  return /* @__PURE__ */ D.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: h,
    style: $r(e, t),
    onKeyDown: m,
    onMouseDownCapture: d,
    children: e.renderEditCell != null && /* @__PURE__ */ D.jsxs(D.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: r,
        rowIdx: n,
        onRowChange: w,
        onClose: b
      }), ((S = e.editorOptions) == null ? void 0 : S.displayCellContent) && e.renderCell({
        column: e,
        row: r,
        rowIdx: n,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: w
      })]
    })
  });
}
function Dp({
  column: e,
  rowIdx: t,
  isCellSelected: r,
  selectCell: n
}) {
  const {
    tabIndex: o,
    onFocus: a
  } = ln(r), {
    colSpan: i
  } = e, s = ks(e, t), c = e.idx + 1;
  function u() {
    n({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ D.jsx("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": i,
    "aria-rowspan": s,
    "aria-selected": r,
    tabIndex: o,
    className: ve(Ss, e.headerCellClass),
    style: {
      ...Es(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + i
    },
    onFocus: a,
    onClick: u,
    children: e.name
  });
}
const Mp = "h44jtk67-0-0-beta-47", Ap = "hcgkhxz7-0-0-beta-47", _p = `rdg-header-sort-name ${Ap}`;
function Np({
  column: e,
  sortDirection: t,
  priority: r
}) {
  return e.sortable ? /* @__PURE__ */ D.jsx(Fp, {
    sortDirection: t,
    priority: r,
    children: e.name
  }) : e.name;
}
function Fp({
  sortDirection: e,
  priority: t,
  children: r
}) {
  const n = uo().renderSortStatus;
  return /* @__PURE__ */ D.jsxs("span", {
    className: Mp,
    children: [/* @__PURE__ */ D.jsx("span", {
      className: _p,
      children: r
    }), /* @__PURE__ */ D.jsx("span", {
      children: n({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const jp = "c6l2wv17-0-0-beta-47", zp = "c1kqdw7y7-0-0-beta-47", Bp = `rdg-cell-resizable ${zp}`, Lp = "r1y6ywlx7-0-0-beta-47", Wp = "rdg-cell-draggable", Vp = "c1bezg5o7-0-0-beta-47", Yp = `rdg-cell-dragging ${Vp}`, Hp = "c1vc96037-0-0-beta-47", Up = `rdg-cell-drag-over ${Hp}`;
function Gp({
  column: e,
  colSpan: t,
  rowIdx: r,
  isCellSelected: n,
  onColumnResize: o,
  onColumnsReorder: a,
  sortColumns: i,
  onSortColumnsChange: s,
  selectCell: c,
  shouldFocusGrid: u,
  direction: f,
  dragDropKey: d
}) {
  const [m, b] = Ze(!1), [w, g] = Ze(!1), h = f === "rtl", C = ks(e, r), {
    tabIndex: T,
    childTabIndex: S,
    onFocus: x
  } = ln(n), v = i == null ? void 0 : i.findIndex((O) => O.columnKey === e.key), $ = v !== void 0 && v > -1 ? i[v] : void 0, E = $ == null ? void 0 : $.direction, N = $ !== void 0 && i.length > 1 ? v + 1 : void 0, z = E && !N ? E === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: l,
    resizable: k,
    draggable: F
  } = e, P = cn(e, e.headerCellClass, l && jp, k && Bp, F && Wp, m && Yp, w && Up), X = e.renderHeaderCell ?? Np;
  function K(O) {
    if (O.pointerType === "mouse" && O.buttons !== 1)
      return;
    O.preventDefault();
    const {
      currentTarget: L,
      pointerId: Z
    } = O, q = L.parentElement, {
      right: de,
      left: W
    } = q.getBoundingClientRect(), ke = h ? O.clientX - W : de - O.clientX;
    let G = !1;
    function Ie(Ye) {
      const {
        width: Pe,
        right: It,
        left: dt
      } = q.getBoundingClientRect();
      let ft = h ? It + ke - Ye.clientX : Ye.clientX + ke - dt;
      ft = Ts(ft, e), Pe > 0 && ft !== Pe && o(e, ft);
    }
    function Ae() {
      G = !0, o(e, "max-content");
    }
    function Ge(Ye) {
      G || Ie(Ye), L.removeEventListener("pointermove", Ie), L.removeEventListener("dblclick", Ae), L.removeEventListener("lostpointercapture", Ge);
    }
    L.setPointerCapture(Z), L.addEventListener("pointermove", Ie), L.addEventListener("dblclick", Ae), L.addEventListener("lostpointercapture", Ge);
  }
  function se(O) {
    if (s == null) return;
    const {
      sortDescendingFirst: L
    } = e;
    if ($ === void 0) {
      const Z = {
        columnKey: e.key,
        direction: L ? "DESC" : "ASC"
      };
      s(i && O ? [...i, Z] : [Z]);
    } else {
      let Z;
      if ((L === !0 && E === "DESC" || L !== !0 && E === "ASC") && (Z = {
        columnKey: e.key,
        direction: E === "ASC" ? "DESC" : "ASC"
      }), O) {
        const q = [...i];
        Z ? q[v] = Z : q.splice(v, 1), s(q);
      } else
        s(Z ? [Z] : []);
    }
  }
  function ue(O) {
    c({
      idx: e.idx,
      rowIdx: r
    }), l && se(O.ctrlKey || O.metaKey);
  }
  function pe(O) {
    x == null || x(O), u && c({
      idx: 0,
      rowIdx: r
    });
  }
  function ne(O) {
    (O.key === " " || O.key === "Enter") && (O.preventDefault(), se(O.ctrlKey || O.metaKey));
  }
  function M(O) {
    O.dataTransfer.setData(d, e.key), O.dataTransfer.dropEffect = "move", b(!0);
  }
  function Y() {
    b(!1);
  }
  function re(O) {
    O.preventDefault(), O.dataTransfer.dropEffect = "move";
  }
  function oe(O) {
    if (g(!1), O.dataTransfer.types.includes(d.toLowerCase())) {
      const L = O.dataTransfer.getData(d.toLowerCase());
      L !== e.key && (O.preventDefault(), a == null || a(L, e.key));
    }
  }
  function I(O) {
    mi(O) && g(!0);
  }
  function j(O) {
    mi(O) && g(!1);
  }
  let V;
  return F && (V = {
    draggable: !0,
    onDragStart: M,
    onDragEnd: Y,
    onDragOver: re,
    onDragEnter: I,
    onDragLeave: j,
    onDrop: oe
  }), /* @__PURE__ */ D.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": C,
    "aria-selected": n,
    "aria-sort": z,
    tabIndex: u ? 0 : T,
    className: P,
    style: {
      ...Es(e, r, C),
      ...$r(e, t)
    },
    onFocus: pe,
    onClick: ue,
    onKeyDown: l ? ne : void 0,
    ...V,
    children: [X({
      column: e,
      sortDirection: E,
      priority: N,
      tabIndex: S
    }), k && /* @__PURE__ */ D.jsx("div", {
      className: Lp,
      onClick: zf,
      onPointerDown: K
    })]
  });
}
function mi(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const qp = "r1upfr807-0-0-beta-47", ba = `rdg-row ${qp}`, Kp = "r190mhd37-0-0-beta-47", fo = "rdg-row-selected", Xp = "r139qu9m7-0-0-beta-47", Zp = "rdg-top-summary-row", Qp = "rdg-bottom-summary-row", Jp = "h10tskcx7-0-0-beta-47", _s = `rdg-header-row ${Jp}`;
function eh({
  rowIdx: e,
  columns: t,
  onColumnResize: r,
  onColumnsReorder: n,
  sortColumns: o,
  onSortColumnsChange: a,
  lastFrozenColumnIndex: i,
  selectedCellIdx: s,
  selectCell: c,
  shouldFocusGrid: u,
  direction: f
}) {
  const d = Mc(), m = [];
  for (let b = 0; b < t.length; b++) {
    const w = t[b], g = mt(w, i, {
      type: "HEADER"
    });
    g !== void 0 && (b += g - 1), m.push(/* @__PURE__ */ D.jsx(Gp, {
      column: w,
      colSpan: g,
      rowIdx: e,
      isCellSelected: s === w.idx,
      onColumnResize: r,
      onColumnsReorder: n,
      onSortColumnsChange: a,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: u && b === 0,
      direction: f,
      dragDropKey: d
    }, w.key));
  }
  return /* @__PURE__ */ D.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: ve(_s, s === -1 && fo),
    children: m
  });
}
const th = /* @__PURE__ */ Gt(eh);
function rh({
  rowIdx: e,
  level: t,
  columns: r,
  selectedCellIdx: n,
  selectCell: o
}) {
  const a = [], i = /* @__PURE__ */ new Set();
  for (const s of r) {
    let {
      parent: c
    } = s;
    if (c !== void 0) {
      for (; c.level > t && c.parent !== void 0; )
        c = c.parent;
      if (c.level === t && !i.has(c)) {
        i.add(c);
        const {
          idx: u
        } = c;
        a.push(/* @__PURE__ */ D.jsx(Dp, {
          column: c,
          rowIdx: e,
          isCellSelected: n === u,
          selectCell: o
        }, u));
      }
    }
  }
  return /* @__PURE__ */ D.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: _s,
    children: a
  });
}
const nh = /* @__PURE__ */ Gt(rh), oh = "c6ra8a37-0-0-beta-47", ah = `rdg-cell-copied ${oh}`, ih = "cq910m07-0-0-beta-47", sh = `rdg-cell-dragged-over ${ih}`;
function ch({
  column: e,
  colSpan: t,
  isCellSelected: r,
  isCopied: n,
  isDraggedOver: o,
  row: a,
  rowIdx: i,
  onClick: s,
  onDoubleClick: c,
  onContextMenu: u,
  onRowChange: f,
  selectCell: d,
  ...m
}) {
  const {
    tabIndex: b,
    childTabIndex: w,
    onFocus: g
  } = ln(r), {
    cellClass: h
  } = e, C = cn(e, typeof h == "function" ? h(a) : h, n && ah, o && sh), T = Cs(e, a);
  function S(N) {
    d({
      rowIdx: i,
      idx: e.idx
    }, N);
  }
  function x(N) {
    if (s) {
      const z = Gr(N);
      if (s({
        row: a,
        column: e,
        selectCell: S
      }, z), z.isGridDefaultPrevented()) return;
    }
    S();
  }
  function v(N) {
    if (u) {
      const z = Gr(N);
      if (u({
        row: a,
        column: e,
        selectCell: S
      }, z), z.isGridDefaultPrevented()) return;
    }
    S();
  }
  function $(N) {
    if (c) {
      const z = Gr(N);
      if (c({
        row: a,
        column: e,
        selectCell: S
      }, z), z.isGridDefaultPrevented()) return;
    }
    S(!0);
  }
  function E(N) {
    f(e, N);
  }
  return /* @__PURE__ */ D.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": r,
    "aria-readonly": !T || void 0,
    tabIndex: b,
    className: C,
    style: $r(e, t),
    onClick: x,
    onDoubleClick: $,
    onContextMenu: v,
    onFocus: g,
    ...m,
    children: e.renderCell({
      column: e,
      row: a,
      rowIdx: i,
      isCellEditable: T,
      tabIndex: w,
      onRowChange: E
    })
  });
}
const lh = /* @__PURE__ */ Gt(ch);
function uh({
  className: e,
  rowIdx: t,
  gridRowStart: r,
  selectedCellIdx: n,
  isRowSelectionDisabled: o,
  isRowSelected: a,
  copiedCellIdx: i,
  draggedOverCellIdx: s,
  lastFrozenColumnIndex: c,
  row: u,
  viewportColumns: f,
  selectedCellEditor: d,
  onCellClick: m,
  onCellDoubleClick: b,
  onCellContextMenu: w,
  rowClass: g,
  setDraggedOverRowIdx: h,
  onMouseEnter: C,
  onRowChange: T,
  selectCell: S,
  ...x
}, v) {
  const $ = nt((l, k) => {
    T(l, t, k);
  });
  function E(l) {
    h == null || h(t), C == null || C(l);
  }
  e = ve(ba, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, g == null ? void 0 : g(u, t), e, n === -1 && fo);
  const N = [];
  for (let l = 0; l < f.length; l++) {
    const k = f[l], {
      idx: F
    } = k, P = mt(k, c, {
      type: "ROW",
      row: u
    });
    P !== void 0 && (l += P - 1);
    const X = n === F;
    X && d ? N.push(d) : N.push(/* @__PURE__ */ D.jsx(lh, {
      column: k,
      colSpan: P,
      row: u,
      rowIdx: t,
      isCopied: i === F,
      isDraggedOver: s === F,
      isCellSelected: X,
      onClick: m,
      onDoubleClick: b,
      onContextMenu: w,
      onRowChange: $,
      selectCell: S
    }, k.key));
  }
  const z = Ue(() => ({
    isRowSelected: a,
    isRowSelectionDisabled: o
  }), [o, a]);
  return /* @__PURE__ */ D.jsx($s, {
    value: z,
    children: /* @__PURE__ */ D.jsx("div", {
      role: "row",
      ref: v,
      className: e,
      onMouseEnter: E,
      style: ma(r),
      ...x,
      children: N
    })
  });
}
const Ns = /* @__PURE__ */ Gt(/* @__PURE__ */ Gn(uh)), y0 = Ns;
function Fs(e, t) {
  return /* @__PURE__ */ D.jsx(Ns, {
    ...t
  }, e);
}
function dh({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: r,
  setScrollToCellPosition: n
}) {
  const o = kt(null);
  return Rr(() => {
    _n(o.current);
  }), Rr(() => {
    function a() {
      n(null);
    }
    const i = new IntersectionObserver(a, {
      root: r,
      threshold: 1
    });
    return i.observe(o.current), () => {
      i.disconnect();
    };
  }, [r, n]), /* @__PURE__ */ D.jsx("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const fh = "a3ejtar7-0-0-beta-47", ph = `rdg-sort-arrow ${fh}`;
function hh({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ D.jsxs(D.Fragment, {
    children: [gh({
      sortDirection: e
    }), mh({
      priority: t
    })]
  });
}
function gh({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ D.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: ph,
    "aria-hidden": !0,
    children: /* @__PURE__ */ D.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function mh({
  priority: e
}) {
  return e;
}
const yh = "rnvodz57-0-0-beta-47", bh = `rdg ${yh}`, vh = "vlqv91k7-0-0-beta-47", wh = `rdg-viewport-dragging ${vh}`, xh = "f1lsfrzw7-0-0-beta-47", Ch = "f1cte0lg7-0-0-beta-47", Sh = "s8wc6fl7-0-0-beta-47";
function Eh({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  isCellSelected: o,
  selectCell: a
}) {
  var m;
  const {
    tabIndex: i,
    childTabIndex: s,
    onFocus: c
  } = ln(o), {
    summaryCellClass: u
  } = e, f = cn(e, Sh, typeof u == "function" ? u(r) : u);
  function d() {
    a({
      rowIdx: n,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ D.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: i,
    className: f,
    style: $r(e, t),
    onClick: d,
    onFocus: c,
    children: (m = e.renderSummaryCell) == null ? void 0 : m.call(e, {
      column: e,
      row: r,
      tabIndex: s
    })
  });
}
const Th = /* @__PURE__ */ Gt(Eh), kh = "skuhp557-0-0-beta-47", Rh = "tf8l5ub7-0-0-beta-47", Oh = `rdg-summary-row ${kh}`;
function $h({
  rowIdx: e,
  gridRowStart: t,
  row: r,
  viewportColumns: n,
  top: o,
  bottom: a,
  lastFrozenColumnIndex: i,
  selectedCellIdx: s,
  isTop: c,
  selectCell: u,
  "aria-rowindex": f
}) {
  const d = [];
  for (let m = 0; m < n.length; m++) {
    const b = n[m], w = mt(b, i, {
      type: "SUMMARY",
      row: r
    });
    w !== void 0 && (m += w - 1);
    const g = s === b.idx;
    d.push(/* @__PURE__ */ D.jsx(Th, {
      column: b,
      colSpan: w,
      row: r,
      rowIdx: e,
      isCellSelected: g,
      selectCell: u
    }, b.key));
  }
  return /* @__PURE__ */ D.jsx("div", {
    role: "row",
    "aria-rowindex": f,
    className: ve(ba, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, Oh, c ? `${Zp} ${Rh}` : Qp, s === -1 && fo),
    style: {
      ...ma(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": a !== void 0 ? `${a}px` : void 0
    },
    children: d
  });
}
const yi = /* @__PURE__ */ Gt($h);
function Ih(e, t) {
  const {
    columns: r,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: a,
    rowKeyGetter: i,
    onRowsChange: s,
    rowHeight: c,
    headerRowHeight: u,
    summaryRowHeight: f,
    selectedRows: d,
    isRowSelectionDisabled: m,
    onSelectedRowsChange: b,
    sortColumns: w,
    onSortColumnsChange: g,
    defaultColumnOptions: h,
    onCellClick: C,
    onCellDoubleClick: T,
    onCellContextMenu: S,
    onCellKeyDown: x,
    onSelectedCellChange: v,
    onScroll: $,
    onColumnResize: E,
    onColumnsReorder: N,
    onFill: z,
    onCopy: l,
    onPaste: k,
    enableVirtualization: F,
    renderers: P,
    className: X,
    style: K,
    rowClass: se,
    direction: ue,
    role: pe,
    "aria-label": ne,
    "aria-labelledby": M,
    "aria-describedby": Y,
    "aria-rowcount": re,
    "data-testid": oe
  } = e, I = uo(), j = pe ?? "grid", V = c ?? 35, O = u ?? (typeof V == "number" ? V : 35), L = f ?? (typeof V == "number" ? V : 35), Z = (P == null ? void 0 : P.renderRow) ?? (I == null ? void 0 : I.renderRow) ?? Fs, q = (P == null ? void 0 : P.renderSortStatus) ?? (I == null ? void 0 : I.renderSortStatus) ?? hh, de = (P == null ? void 0 : P.renderCheckbox) ?? (I == null ? void 0 : I.renderCheckbox) ?? rp, W = (P == null ? void 0 : P.noRowsFallback) ?? (I == null ? void 0 : I.noRowsFallback), ke = F ?? !0, G = ue ?? "ltr", [Ie, Ae] = Ze(0), [Ge, Ye] = Ze(0), [Pe, It] = Ze(() => /* @__PURE__ */ new Map()), [dt, ft] = Ze(() => /* @__PURE__ */ new Map()), [ae, Xt] = Ze(null), [Zt, Qt] = Ze(!1), [pt, po] = Ze(void 0), [bt, Pr] = Ze(null), ir = nr((_) => Pe.get(_.key) ?? dt.get(_.key) ?? _.width, [dt, Pe]), [zt, dn, fn, ho] = Sp(), {
    columns: He,
    colSpanColumns: pn,
    lastFrozenColumnIndex: et,
    headerRowsCount: vt,
    colOverscanStartIdx: hn,
    colOverscanEndIdx: Pt,
    templateColumns: Dr,
    layoutCssVars: Mr,
    totalFrozenColumnWidth: gn
  } = xp({
    rawColumns: r,
    defaultColumnOptions: h,
    getColumnWidth: ir,
    scrollLeft: Ge,
    viewportWidth: dn,
    enableVirtualization: ke
  }), Jt = (o == null ? void 0 : o.length) ?? 0, Dt = (a == null ? void 0 : a.length) ?? 0, mn = Jt + Dt, Mt = vt + Jt, sr = vt - 1, Qe = -Mt, cr = Qe + sr, xt = n.length + Dt - 1, [Q, Bt] = Ze(() => ({
    idx: -1,
    rowIdx: Qe - 1,
    mode: "SELECT"
  })), Ar = kt(Q), yn = kt(pt), bn = kt(-1), y = kt(null), A = kt(!1), U = j === "treegrid", ie = vt * O, ge = mn * L, me = fn - ie - ge, le = d != null && b != null, ce = G === "rtl", qe = ce ? "ArrowRight" : "ArrowLeft", De = ce ? "ArrowLeft" : "ArrowRight", _e = re ?? vt + n.length + mn, tt = Ue(() => ({
    renderCheckbox: de,
    renderSortStatus: q
  }), [de, q]), Lt = Ue(() => {
    let _ = !1, B = !1;
    if (i != null && d != null && d.size > 0) {
      for (const ee of n)
        if (d.has(i(ee)) ? _ = !0 : B = !0, _ && B) break;
    }
    return {
      isRowSelected: _ && !B,
      isIndeterminate: _ && B
    };
  }, [n, d, i]), {
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: Le,
    totalRowHeight: er,
    gridTemplateRows: go,
    getRowTop: vn,
    getRowHeight: ec,
    findRowIdx: wa
  } = Tp({
    rows: n,
    rowHeight: V,
    clientHeight: me,
    scrollTop: Ie,
    enableVirtualization: ke
  }), Wt = Ep({
    columns: He,
    colSpanColumns: pn,
    colOverscanStartIdx: hn,
    colOverscanEndIdx: Pt,
    lastFrozenColumnIndex: et,
    rowOverscanStartIdx: at,
    rowOverscanEndIdx: Le,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: a
  }), {
    gridTemplateColumns: tc,
    handleColumnResize: rc
  } = Cp(He, Wt, Dr, zt, dn, Pe, dt, It, ft, E), nc = U ? -1 : 0, lr = He.length - 1, mo = vo(Q), wn = Ta(Q), oc = O + er + ge + ho, ac = nt(rc), ic = nt(N), sc = nt(g), cc = nt(C), lc = nt(T), uc = nt(S), dc = nt(hc), fc = nt(Ca), pc = nt(xn), yo = nt(_r), xa = nt(({
    idx: _,
    rowIdx: B
  }) => {
    _r({
      rowIdx: Qe + B - 1,
      idx: _
    });
  });
  Rr(() => {
    if (!mo || Do(Q, Ar.current)) {
      Ar.current = Q;
      return;
    }
    Ar.current = Q, Q.idx === -1 && (y.current.focus({
      preventScroll: !0
    }), _n(y.current));
  }), Rr(() => {
    A.current && (A.current = !1, Ra());
  }), Pc(t, () => ({
    element: zt.current,
    scrollToCell({
      idx: _,
      rowIdx: B
    }) {
      const ee = _ !== void 0 && _ > et && _ < He.length ? _ : void 0, te = B !== void 0 && ur(B) ? B : void 0;
      (ee !== void 0 || te !== void 0) && Pr({
        idx: ee,
        rowIdx: te
      });
    },
    selectCell: _r
  }));
  const bo = nr((_) => {
    po(_), yn.current = _;
  }, []);
  function hc(_) {
    if (!b) return;
    qr(i);
    const B = new Set(d);
    for (const ee of n) {
      if ((m == null ? void 0 : m(ee)) === !0) continue;
      const te = i(ee);
      _.checked ? B.add(te) : B.delete(te);
    }
    b(B);
  }
  function Ca(_) {
    if (!b) return;
    qr(i);
    const {
      row: B,
      checked: ee,
      isShiftClick: te
    } = _;
    if ((m == null ? void 0 : m(B)) === !0) return;
    const he = new Set(d), Re = i(B), Ne = bn.current, Fe = n.indexOf(B);
    if (bn.current = Fe, ee ? he.add(Re) : he.delete(Re), te && Ne !== -1 && Ne !== Fe && Ne < n.length) {
      const it = Qf(Fe - Ne);
      for (let rt = Ne + it; rt !== Fe; rt += it) {
        const Ct = n[rt];
        (m == null ? void 0 : m(Ct)) !== !0 && (ee ? he.add(i(Ct)) : he.delete(i(Ct)));
      }
    }
    b(he);
  }
  function gc(_) {
    var Fe;
    const {
      idx: B,
      rowIdx: ee,
      mode: te
    } = Q;
    if (te === "EDIT") return;
    if (x && ur(ee)) {
      const it = n[ee], rt = Gr(_);
      if (x({
        mode: "SELECT",
        row: it,
        column: He[B],
        rowIdx: ee,
        selectCell: _r
      }, rt), rt.isGridDefaultPrevented()) return;
    }
    if (!(_.target instanceof Element)) return;
    const he = _.target.closest(".rdg-cell") !== null, Re = U && _.target === y.current;
    if (!he && !Re) return;
    const {
      keyCode: Ne
    } = _;
    if (wn && (k != null || l != null) && Wn(_)) {
      if (Ne === 67) {
        if (((Fe = window.getSelection()) == null ? void 0 : Fe.isCollapsed) === !1) return;
        yc();
        return;
      }
      if (Ne === 86) {
        bc();
        return;
      }
    }
    switch (_.key) {
      case "Escape":
        Xt(null);
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
        ka(_);
        break;
      default:
        vc(_);
        break;
    }
  }
  function mc(_) {
    const {
      scrollTop: B,
      scrollLeft: ee
    } = _.currentTarget;
    Nn(() => {
      Ae(B), Ye(Jf(ee));
    }), $ == null || $(_);
  }
  function xn(_, B, ee) {
    if (typeof s != "function" || ee === n[B]) return;
    const te = [...n];
    te[B] = ee, s(te, {
      indexes: [B],
      column: _
    });
  }
  function Sa() {
    Q.mode === "EDIT" && xn(He[Q.idx], Q.rowIdx, Q.row);
  }
  function yc() {
    const {
      idx: _,
      rowIdx: B
    } = Q, ee = n[B], te = He[_].key;
    Xt({
      row: ee,
      columnKey: te
    }), l == null || l({
      sourceRow: ee,
      sourceColumnKey: te
    });
  }
  function bc() {
    if (!k || !s || ae === null || !Cn(Q))
      return;
    const {
      idx: _,
      rowIdx: B
    } = Q, ee = He[_], te = n[B], he = k({
      sourceRow: ae.row,
      sourceColumnKey: ae.columnKey,
      targetRow: te,
      targetColumnKey: ee.key
    });
    xn(ee, B, he);
  }
  function vc(_) {
    if (!wn) return;
    const B = n[Q.rowIdx], {
      key: ee,
      shiftKey: te
    } = _;
    if (le && te && ee === " ") {
      qr(i);
      const he = i(B);
      Ca({
        row: B,
        checked: !d.has(he),
        isShiftClick: !1
      }), _.preventDefault();
      return;
    }
    Cn(Q) && Lf(_) && Bt(({
      idx: he,
      rowIdx: Re
    }) => ({
      idx: he,
      rowIdx: Re,
      mode: "EDIT",
      row: B,
      originalRow: B
    }));
  }
  function Ea(_) {
    return _ >= nc && _ <= lr;
  }
  function ur(_) {
    return _ >= 0 && _ < n.length;
  }
  function vo({
    idx: _,
    rowIdx: B
  }) {
    return B >= Qe && B <= xt && Ea(_);
  }
  function wc({
    idx: _,
    rowIdx: B
  }) {
    return ur(B) && _ >= 0 && _ <= lr;
  }
  function Ta({
    idx: _,
    rowIdx: B
  }) {
    return ur(B) && Ea(_);
  }
  function Cn(_) {
    return wc(_) && Hf({
      columns: He,
      rows: n,
      selectedPosition: _
    });
  }
  function _r(_, B) {
    if (!vo(_)) return;
    Sa();
    const ee = n[_.rowIdx], te = Do(Q, _);
    B && Cn(_) ? Bt({
      ..._,
      mode: "EDIT",
      row: ee,
      originalRow: ee
    }) : te ? _n(bi(zt.current)) : (A.current = !0, Bt({
      ..._,
      mode: "SELECT"
    })), v && !te && v({
      rowIdx: _.rowIdx,
      row: ee,
      column: He[_.idx]
    });
  }
  function xc(_, B, ee) {
    const {
      idx: te,
      rowIdx: he
    } = Q, Re = mo && te === -1;
    switch (_) {
      case "ArrowUp":
        return {
          idx: te,
          rowIdx: he - 1
        };
      case "ArrowDown":
        return {
          idx: te,
          rowIdx: he + 1
        };
      case qe:
        return {
          idx: te - 1,
          rowIdx: he
        };
      case De:
        return {
          idx: te + 1,
          rowIdx: he
        };
      case "Tab":
        return {
          idx: te + (ee ? -1 : 1),
          rowIdx: he
        };
      case "Home":
        return Re ? {
          idx: te,
          rowIdx: Qe
        } : {
          idx: 0,
          rowIdx: B ? Qe : he
        };
      case "End":
        return Re ? {
          idx: te,
          rowIdx: xt
        } : {
          idx: lr,
          rowIdx: B ? xt : he
        };
      case "PageUp": {
        if (Q.rowIdx === Qe) return Q;
        const Ne = vn(he) + ec(he) - me;
        return {
          idx: te,
          rowIdx: Ne > 0 ? wa(Ne) : 0
        };
      }
      case "PageDown": {
        if (Q.rowIdx >= n.length) return Q;
        const Ne = vn(he) + me;
        return {
          idx: te,
          rowIdx: Ne < er ? wa(Ne) : n.length - 1
        };
      }
      default:
        return Q;
    }
  }
  function ka(_) {
    const {
      key: B,
      shiftKey: ee
    } = _;
    let te = "NONE";
    if (B === "Tab") {
      if (qf({
        shiftKey: ee,
        maxColIdx: lr,
        minRowIdx: Qe,
        maxRowIdx: xt,
        selectedPosition: Q
      })) {
        Sa();
        return;
      }
      te = "CHANGE_ROW";
    }
    _.preventDefault();
    const he = Wn(_), Re = xc(B, he, ee);
    if (Do(Q, Re)) return;
    const Ne = Gf({
      moveUp: B === "ArrowUp",
      moveNext: B === De || B === "Tab" && !ee,
      columns: He,
      colSpanColumns: pn,
      rows: n,
      topSummaryRows: o,
      bottomSummaryRows: a,
      minRowIdx: Qe,
      mainHeaderRowIdx: cr,
      maxRowIdx: xt,
      lastFrozenColumnIndex: et,
      cellNavigationMode: te,
      currentPosition: Q,
      nextPosition: Re,
      isCellWithinBounds: vo
    });
    _r(Ne);
  }
  function Cc(_) {
    if (pt === void 0) return;
    const {
      rowIdx: B
    } = Q;
    return (B < pt ? B < _ && _ <= pt : B > _ && _ >= pt) ? Q.idx : void 0;
  }
  function Ra() {
    const _ = bi(zt.current);
    if (_ === null) return;
    _n(_), (_.querySelector('[tabindex="0"]') ?? _).focus({
      preventScroll: !0
    });
  }
  function Sc() {
    if (z == null || Q.mode === "EDIT" || !Ta(Q))
      return;
    const {
      idx: _,
      rowIdx: B
    } = Q, ee = He[_];
    if (ee.renderEditCell == null || ee.editable === !1)
      return;
    const te = ir(ee);
    return /* @__PURE__ */ D.jsx($p, {
      gridRowStart: Mt + B + 1,
      rows: n,
      column: ee,
      columnWidth: te,
      maxColIdx: lr,
      isLastRow: B === xt,
      selectedPosition: Q,
      isCellEditable: Cn,
      latestDraggedOverRowIdx: yn,
      onRowsChange: s,
      onClick: Ra,
      onFill: z,
      setDragging: Qt,
      setDraggedOverRowIdx: bo
    });
  }
  function Ec(_) {
    if (Q.rowIdx !== _ || Q.mode === "SELECT") return;
    const {
      idx: B,
      row: ee
    } = Q, te = He[B], he = mt(te, et, {
      type: "ROW",
      row: ee
    }), Re = (Fe) => {
      A.current = Fe, Bt(({
        idx: it,
        rowIdx: rt
      }) => ({
        idx: it,
        rowIdx: rt,
        mode: "SELECT"
      }));
    }, Ne = (Fe, it, rt) => {
      it ? Nn(() => {
        xn(te, Q.rowIdx, Fe), Re(rt);
      }) : Bt((Ct) => ({
        ...Ct,
        row: Fe
      }));
    };
    return n[Q.rowIdx] !== Q.originalRow && Re(!1), /* @__PURE__ */ D.jsx(Pp, {
      column: te,
      colSpan: he,
      row: ee,
      rowIdx: _,
      onRowChange: Ne,
      closeEditor: Re,
      onKeyDown: x,
      navigate: ka
    }, te.key);
  }
  function Nr(_) {
    const B = Q.idx === -1 ? void 0 : He[Q.idx];
    return B !== void 0 && Q.rowIdx === _ && !Wt.includes(B) ? Q.idx > Pt ? [...Wt, B] : [...Wt.slice(0, et + 1), B, ...Wt.slice(et + 1)] : Wt;
  }
  function Tc() {
    const _ = [], {
      idx: B,
      rowIdx: ee
    } = Q, te = wn && ee < at ? at - 1 : at, he = wn && ee > Le ? Le + 1 : Le;
    for (let Re = te; Re <= he; Re++) {
      const Ne = Re === at - 1 || Re === Le + 1, Fe = Ne ? ee : Re;
      let it = Wt;
      const rt = B === -1 ? void 0 : He[B];
      rt !== void 0 && (Ne ? it = [rt] : it = Nr(Fe));
      const Ct = n[Fe], kc = Mt + Fe + 1;
      let wo = Fe, xo = !1;
      typeof i == "function" && (wo = i(Ct), xo = (d == null ? void 0 : d.has(wo)) ?? !1), _.push(Z(wo, {
        "aria-rowindex": Mt + Fe + 1,
        "aria-selected": le ? xo : void 0,
        rowIdx: Fe,
        row: Ct,
        viewportColumns: it,
        isRowSelectionDisabled: (m == null ? void 0 : m(Ct)) ?? !1,
        isRowSelected: xo,
        onCellClick: cc,
        onCellDoubleClick: lc,
        onCellContextMenu: uc,
        rowClass: se,
        gridRowStart: kc,
        copiedCellIdx: ae !== null && ae.row === Ct ? He.findIndex((Rc) => Rc.key === ae.columnKey) : void 0,
        selectedCellIdx: ee === Fe ? B : void 0,
        draggedOverCellIdx: Cc(Fe),
        setDraggedOverRowIdx: Zt ? bo : void 0,
        lastFrozenColumnIndex: et,
        onRowChange: pc,
        selectCell: yo,
        selectedCellEditor: Ec(Fe)
      }));
    }
    return _;
  }
  (Q.idx > lr || Q.rowIdx > xt) && (Bt({
    idx: -1,
    rowIdx: Qe - 1,
    mode: "SELECT"
  }), bo(void 0));
  let Sn = `repeat(${vt}, ${O}px)`;
  Jt > 0 && (Sn += ` repeat(${Jt}, ${L}px)`), n.length > 0 && (Sn += go), Dt > 0 && (Sn += ` repeat(${Dt}, ${L}px)`);
  const Oa = Q.idx === -1 && Q.rowIdx !== Qe - 1;
  return /* @__PURE__ */ D.jsxs("div", {
    role: j,
    "aria-label": ne,
    "aria-labelledby": M,
    "aria-describedby": Y,
    "aria-multiselectable": le ? !0 : void 0,
    "aria-colcount": He.length,
    "aria-rowcount": _e,
    className: ve(bh, X, Zt && wh),
    style: {
      ...K,
      scrollPaddingInlineStart: Q.idx > et || (bt == null ? void 0 : bt.idx) !== void 0 ? `${gn}px` : void 0,
      scrollPaddingBlock: ur(Q.rowIdx) || (bt == null ? void 0 : bt.rowIdx) !== void 0 ? `${ie + Jt * L}px ${Dt * L}px` : void 0,
      gridTemplateColumns: tc,
      gridTemplateRows: Sn,
      "--rdg-header-row-height": `${O}px`,
      "--rdg-scroll-height": `${oc}px`,
      ...Mr
    },
    dir: G,
    ref: zt,
    onScroll: mc,
    onKeyDown: gc,
    "data-testid": oe,
    children: [/* @__PURE__ */ D.jsxs(up, {
      value: tt,
      children: [/* @__PURE__ */ D.jsx(pp, {
        value: dc,
        children: /* @__PURE__ */ D.jsxs(fp, {
          value: Lt,
          children: [Array.from({
            length: sr
          }, (_, B) => /* @__PURE__ */ D.jsx(nh, {
            rowIdx: B + 1,
            level: -sr + B,
            columns: Nr(Qe + B),
            selectedCellIdx: Q.rowIdx === Qe + B ? Q.idx : void 0,
            selectCell: xa
          }, B)), /* @__PURE__ */ D.jsx(th, {
            rowIdx: vt,
            columns: Nr(cr),
            onColumnResize: ac,
            onColumnsReorder: ic,
            sortColumns: w,
            onSortColumnsChange: sc,
            lastFrozenColumnIndex: et,
            selectedCellIdx: Q.rowIdx === cr ? Q.idx : void 0,
            selectCell: xa,
            shouldFocusGrid: !mo,
            direction: G
          })]
        })
      }), n.length === 0 && W ? W : /* @__PURE__ */ D.jsxs(D.Fragment, {
        children: [o == null ? void 0 : o.map((_, B) => {
          const ee = vt + 1 + B, te = cr + 1 + B, he = Q.rowIdx === te, Re = ie + L * B;
          return /* @__PURE__ */ D.jsx(yi, {
            "aria-rowindex": ee,
            rowIdx: te,
            gridRowStart: ee,
            row: _,
            top: Re,
            bottom: void 0,
            viewportColumns: Nr(te),
            lastFrozenColumnIndex: et,
            selectedCellIdx: he ? Q.idx : void 0,
            isTop: !0,
            selectCell: yo
          }, B);
        }), /* @__PURE__ */ D.jsx(dp, {
          value: fc,
          children: Tc()
        }), a == null ? void 0 : a.map((_, B) => {
          const ee = Mt + n.length + B + 1, te = n.length + B, he = Q.rowIdx === te, Re = me > er ? fn - L * (a.length - B) : void 0, Ne = Re === void 0 ? L * (a.length - 1 - B) : void 0;
          return /* @__PURE__ */ D.jsx(yi, {
            "aria-rowindex": _e - Dt + B + 1,
            rowIdx: te,
            gridRowStart: ee,
            row: _,
            top: Re,
            bottom: Ne,
            viewportColumns: Nr(te),
            lastFrozenColumnIndex: et,
            selectedCellIdx: he ? Q.idx : void 0,
            isTop: !1,
            selectCell: yo
          }, B);
        })]
      })]
    }), Sc(), Yf(Wt), U && /* @__PURE__ */ D.jsx("div", {
      ref: y,
      tabIndex: Oa ? 0 : -1,
      className: ve(xh, Oa && [Kp, et !== -1 && Xp], !ur(Q.rowIdx) && Ch),
      style: {
        gridRowStart: Q.rowIdx + Mt + 1
      }
    }), bt !== null && /* @__PURE__ */ D.jsx(dh, {
      scrollToPosition: bt,
      setScrollToCellPosition: Pr,
      gridElement: zt.current
    })]
  });
}
function bi(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function Do(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const js = /* @__PURE__ */ Gn(Ih);
function Ph({
  id: e,
  groupKey: t,
  childRows: r,
  isExpanded: n,
  isCellSelected: o,
  column: a,
  row: i,
  groupColumnIndex: s,
  isGroupByColumn: c,
  toggleGroup: u
}) {
  var g;
  const {
    tabIndex: f,
    childTabIndex: d,
    onFocus: m
  } = ln(o);
  function b() {
    u(e);
  }
  const w = c && s === a.idx;
  return /* @__PURE__ */ D.jsx("div", {
    role: "gridcell",
    "aria-colindex": a.idx + 1,
    "aria-selected": o,
    tabIndex: f,
    className: cn(a),
    style: {
      ...$r(a),
      cursor: w ? "pointer" : "default"
    },
    onClick: w ? b : void 0,
    onFocus: m,
    children: (!c || w) && ((g = a.renderGroupCell) == null ? void 0 : g.call(a, {
      groupKey: t,
      childRows: r,
      column: a,
      row: i,
      isExpanded: n,
      tabIndex: d,
      toggleGroup: b
    }))
  }, a.key);
}
const Dh = /* @__PURE__ */ Gt(Ph), Mh = "g1yxluv37-0-0-beta-47", Ah = `rdg-group-row ${Mh}`;
function _h({
  className: e,
  row: t,
  rowIdx: r,
  viewportColumns: n,
  selectedCellIdx: o,
  isRowSelected: a,
  selectCell: i,
  gridRowStart: s,
  groupBy: c,
  toggleGroup: u,
  isRowSelectionDisabled: f,
  ...d
}) {
  const m = n[0].key === kr ? t.level + 1 : t.level;
  function b() {
    i({
      rowIdx: r,
      idx: -1
    });
  }
  const w = Ue(() => ({
    isRowSelectionDisabled: !1,
    isRowSelected: a
  }), [a]);
  return /* @__PURE__ */ D.jsx($s, {
    value: w,
    children: /* @__PURE__ */ D.jsx("div", {
      role: "row",
      "aria-level": t.level + 1,
      "aria-setsize": t.setSize,
      "aria-posinset": t.posInSet + 1,
      "aria-expanded": t.isExpanded,
      className: ve(ba, Ah, `rdg-row-${r % 2 === 0 ? "even" : "odd"}`, e, o === -1 && fo),
      onClick: b,
      style: ma(s),
      ...d,
      children: n.map((g) => /* @__PURE__ */ D.jsx(Dh, {
        id: t.id,
        groupKey: t.groupKey,
        childRows: t.childRows,
        isExpanded: t.isExpanded,
        isCellSelected: o === g.idx,
        column: g,
        row: t,
        groupColumnIndex: m,
        toggleGroup: u,
        isGroupByColumn: c.includes(g.key)
      }, g.key))
    })
  });
}
const Nh = /* @__PURE__ */ Gt(_h);
function Fh({
  columns: e,
  rows: t,
  rowHeight: r,
  rowKeyGetter: n,
  onCellKeyDown: o,
  onRowsChange: a,
  selectedRows: i,
  onSelectedRowsChange: s,
  renderers: c,
  groupBy: u,
  rowGrouper: f,
  expandedGroupIds: d,
  onExpandedGroupIdsChange: m,
  ...b
}, w) {
  var Y, re, oe;
  const g = uo(), h = (c == null ? void 0 : c.renderRow) ?? (g == null ? void 0 : g.renderRow) ?? Fs, C = 1 + (((Y = b.topSummaryRows) == null ? void 0 : Y.length) ?? 0), T = b.direction === "rtl", S = T ? "ArrowRight" : "ArrowLeft", x = T ? "ArrowLeft" : "ArrowRight", v = nt(ne), {
    columns: $,
    groupBy: E
  } = Ue(() => {
    const I = [...e].sort(({
      key: V
    }, {
      key: O
    }) => V === kr ? -1 : O === kr ? 1 : u.includes(V) ? u.includes(O) ? u.indexOf(V) - u.indexOf(O) : -1 : u.includes(O) ? 1 : 0), j = [];
    for (const [V, O] of I.entries())
      u.includes(O.key) && (j.push(O.key), I[V] = {
        ...O,
        frozen: !0,
        renderCell: () => null,
        renderGroupCell: O.renderGroupCell ?? sp,
        editable: !1
      });
    return {
      columns: I,
      groupBy: j
    };
  }, [e, u]), [N, z] = Ue(() => {
    if (E.length === 0) return [void 0, t.length];
    const I = (j, [V, ...O], L) => {
      let Z = 0;
      const q = {};
      for (const [de, W] of Object.entries(f(j, V))) {
        const [ke, G] = O.length === 0 ? [W, W.length] : I(W, O, L + Z + 1);
        q[de] = {
          childRows: W,
          childGroups: ke,
          startRowIndex: L + Z
        }, Z += G + 1;
      }
      return [q, Z];
    };
    return I(t, E, 0);
  }, [E, f, t]), [l, k] = Ue(() => {
    const I = /* @__PURE__ */ new Set();
    if (!N) return [t, O];
    const j = [], V = (L, Z, q) => {
      if (jh(L)) {
        j.push(...L);
        return;
      }
      Object.keys(L).forEach((de, W, ke) => {
        const G = Z !== void 0 ? `${Z}__${de}` : de, Ie = d.has(G), {
          childRows: Ae,
          childGroups: Ge,
          startRowIndex: Ye
        } = L[de], Pe = {
          id: G,
          parentId: Z,
          groupKey: de,
          isExpanded: Ie,
          childRows: Ae,
          level: q,
          posInSet: W,
          startRowIndex: Ye,
          setSize: ke.length
        };
        j.push(Pe), I.add(Pe), Ie && V(Ge, G, q + 1);
      });
    };
    return V(N, void 0, 0), [j, O];
    function O(L) {
      return I.has(L);
    }
  }, [d, N, t]), F = Ue(() => typeof r == "function" ? (I) => k(I) ? r({
    type: "GROUP",
    row: I
  }) : r({
    type: "ROW",
    row: I
  }) : r, [k, r]), P = nr((I) => {
    const j = l.indexOf(I);
    for (let V = j - 1; V >= 0; V--) {
      const O = l[V];
      if (k(O) && (!k(I) || I.parentId === O.id))
        return [O, V];
    }
  }, [k, l]), X = nr((I) => {
    if (k(I))
      return I.id;
    if (typeof n == "function")
      return n(I);
    const j = P(I);
    if (j !== void 0) {
      const {
        startRowIndex: V,
        childRows: O
      } = j[0], L = O.indexOf(I);
      return V + L + 1;
    }
    return l.indexOf(I);
  }, [P, k, n, l]), K = Ue(() => {
    if (i == null) return null;
    qr(n);
    const I = new Set(i);
    for (const j of l)
      k(j) && j.childRows.every((O) => i.has(n(O))) && I.add(j.id);
    return I;
  }, [k, n, i, l]);
  function se(I) {
    if (!s) return;
    qr(n);
    const j = new Set(i);
    for (const V of l) {
      const O = X(V);
      if (K != null && K.has(O) && !I.has(O))
        if (k(V))
          for (const L of V.childRows)
            j.delete(n(L));
        else
          j.delete(O);
      else if (!(K != null && K.has(O)) && I.has(O))
        if (k(V))
          for (const L of V.childRows)
            j.add(n(L));
        else
          j.add(O);
    }
    s(j);
  }
  function ue(I, j) {
    if (o == null || o(I, j), j.isGridDefaultPrevented() || I.mode === "EDIT") return;
    const {
      column: V,
      rowIdx: O,
      selectCell: L
    } = I, Z = (V == null ? void 0 : V.idx) ?? -1, q = l[O];
    if (k(q)) {
      if (Z === -1 && (j.key === S && q.isExpanded || j.key === x && !q.isExpanded) && (j.preventDefault(), j.preventGridDefault(), ne(q.id)), Z === -1 && j.key === S && !q.isExpanded && q.level !== 0) {
        const de = P(q);
        de !== void 0 && (j.preventGridDefault(), L({
          idx: Z,
          rowIdx: de[1]
        }));
      }
      Wn(j) && (j.keyCode === 67 || j.keyCode === 86) && j.preventGridDefault();
    }
  }
  function pe(I, {
    indexes: j,
    column: V
  }) {
    if (!a) return;
    const O = [...t], L = [];
    for (const Z of j) {
      const q = t.indexOf(l[Z]);
      O[q] = I[Z], L.push(q);
    }
    a(O, {
      indexes: L,
      column: V
    });
  }
  function ne(I) {
    const j = new Set(d);
    j.has(I) ? j.delete(I) : j.add(I), m(j);
  }
  function M(I, {
    row: j,
    rowClass: V,
    onCellClick: O,
    onCellDoubleClick: L,
    onCellContextMenu: Z,
    onRowChange: q,
    lastFrozenColumnIndex: de,
    copiedCellIdx: W,
    draggedOverCellIdx: ke,
    setDraggedOverRowIdx: G,
    selectedCellEditor: Ie,
    ...Ae
  }) {
    if (k(j)) {
      const {
        startRowIndex: Pe
      } = j;
      return /* @__PURE__ */ D.jsx(Nh, {
        ...Ae,
        "aria-rowindex": C + Pe + 1,
        row: j,
        groupBy: E,
        toggleGroup: v
      }, I);
    }
    let Ge = Ae["aria-rowindex"];
    const Ye = P(j);
    if (Ye !== void 0) {
      const {
        startRowIndex: Pe,
        childRows: It
      } = Ye[0], dt = It.indexOf(j);
      Ge = Pe + C + dt + 2;
    }
    return h(I, {
      ...Ae,
      "aria-rowindex": Ge,
      row: j,
      rowClass: V,
      onCellClick: O,
      onCellDoubleClick: L,
      onCellContextMenu: Z,
      onRowChange: q,
      lastFrozenColumnIndex: de,
      copiedCellIdx: W,
      draggedOverCellIdx: ke,
      setDraggedOverRowIdx: G,
      selectedCellEditor: Ie
    });
  }
  return /* @__PURE__ */ D.jsx(js, {
    ...b,
    role: "treegrid",
    "aria-rowcount": z + 1 + (((re = b.topSummaryRows) == null ? void 0 : re.length) ?? 0) + (((oe = b.bottomSummaryRows) == null ? void 0 : oe.length) ?? 0),
    ref: w,
    columns: $,
    rows: l,
    rowHeight: F,
    rowKeyGetter: X,
    onRowsChange: pe,
    selectedRows: K,
    onSelectedRowsChange: se,
    onCellKeyDown: ue,
    renderers: {
      ...c,
      renderRow: M
    }
  });
}
function jh(e) {
  return Array.isArray(e);
}
const b0 = /* @__PURE__ */ Gn(Fh), zh = "t7vyx3i7-0-0-beta-47", Bh = `rdg-text-editor ${zh}`;
function Lh(e) {
  e == null || e.focus(), e == null || e.select();
}
function v0({
  row: e,
  column: t,
  onRowChange: r,
  onClose: n
}) {
  return /* @__PURE__ */ D.jsx("input", {
    className: Bh,
    ref: Lh,
    value: e[t.key],
    onChange: (o) => r({
      ...e,
      [t.key]: o.target.value
    }),
    onBlur: () => n(!0, !1)
  });
}
const Wh = {
  "--rdg-color": Ee.gray800,
  "--rdg-header-color": Ee.gray700,
  "--rdg-border-color": Ee.gray400,
  "--rdg-background-color": Ee.forcewhite,
  "--rdg-header-background-color": Ee.forcewhite,
  "--rdg-row-hover-background-color": Ee.forcewhite,
  "--rdg-row-selected-hover-background-color": Ee.primary400,
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px",
  "--rdg-row-selected-background-color": Ee.primary400,
  "--rdg-row-selected-color": Ee.forcewhite
}, Vh = $t.div`
  width: 100%;
  position: relative;
  height: 100%;

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${Ee.primary500};
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background-color: ${Ee.gray100};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color${Ee.primary500};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${Ee.gray200};
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
var Yh = {
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
function Hh(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, r = (e.match(/^[0-9.]*/) || "").toString();
  r.includes(".") ? t = parseFloat(r) : t = parseInt(r, 10);
  var n = (e.match(/[^0-9]*$/) || "").toString();
  return Yh[n] ? {
    value: t,
    unit: n
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Mo(e) {
  var t = Hh(e);
  return "".concat(t.value).concat(t.unit);
}
var Uh = function(e, t, r) {
  var n = "react-spinners-".concat(e, "-").concat(r);
  if (typeof window > "u" || !window.document)
    return n;
  var o = document.createElement("style");
  document.head.appendChild(o);
  var a = o.sheet, i = `
    @keyframes `.concat(n, ` {
      `).concat(t, `
    }
  `);
  return a && a.insertRule(i, 0), n;
}, Yn = function() {
  return Yn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Yn.apply(this, arguments);
}, Gh = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, qh = Uh("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function Kh(e) {
  var t = e.loading, r = t === void 0 ? !0 : t, n = e.color, o = n === void 0 ? "#000000" : n, a = e.speedMultiplier, i = a === void 0 ? 1 : a, s = e.cssOverride, c = s === void 0 ? {} : s, u = e.size, f = u === void 0 ? 15 : u, d = e.margin, m = d === void 0 ? 2 : d, b = Gh(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), w = Yn({ display: "inherit" }, c), g = function(h) {
    return {
      backgroundColor: o,
      width: Mo(f),
      height: Mo(f),
      margin: Mo(m),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(qh, " ").concat(0.75 / i, "s ").concat(h * 0.12 / i, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return r ? H.createElement(
    "span",
    Yn({ style: w }, b),
    H.createElement("span", { style: g(1) }),
    H.createElement("span", { style: g(2) }),
    H.createElement("span", { style: g(3) })
  ) : null;
}
const Xh = Rt.memo(({ color: e }) => /* @__PURE__ */ D.jsx(Kh, { color: e }));
var Kr = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.DATE = "date", e))(Kr || {});
function Zh(e, t, r) {
  return (n, o) => {
    const a = n[e], i = o[e];
    try {
      if (r)
        return r(a, i);
      if (t === Kr.NUMBER) {
        const s = Number(a), c = Number(i);
        return isNaN(s) || isNaN(c) ? (console.warn("Invalid number for sorting:", { a, b: i }), isNaN(s) ? 1 : -1) : s - c;
      } else if (t === Kr.DATE) {
        const s = new Date(a).getTime(), c = new Date(i).getTime();
        return isNaN(s) || isNaN(c) ? (console.warn("Invalid date for sorting:", { a, b: i }), isNaN(s) ? 1 : -1) : s - c;
      }
      return t === Kr.STRING || !t ? String(a).localeCompare(String(i)) : 0;
    } catch (s) {
      return console.error("Error in sorting:", s), 0;
    }
  };
}
const Qh = (e, t, r) => {
  const [n, o] = Ze(r ?? []);
  return {
    sortedRows: Ue(() => (console.log(n), n.length === 0 ? t : [...t].sort((i, s) => {
      for (const c of n) {
        const u = e.find((m) => m.key === c.columnKey), d = Zh(
          c.columnKey,
          u == null ? void 0 : u.type,
          u == null ? void 0 : u.sortComparator
        )(i, s);
        if (console.log("compResult", d), console.log("sort.direction", c.direction), d !== 0)
          return c.direction === "ASC" ? d : -d;
      }
      return 0;
    })), [t, n]),
    sortColumns: n,
    setSortedColumns: o
  };
}, Jh = {
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
}, eg = (e, t, r) => {
  let n;
  const o = Jh[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Ao(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const tg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, rg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ng = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, og = {
  date: Ao({
    formats: tg,
    defaultWidth: "full"
  }),
  time: Ao({
    formats: rg,
    defaultWidth: "full"
  }),
  dateTime: Ao({
    formats: ng,
    defaultWidth: "full"
  })
}, ag = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ig = (e, t, r, n) => ag[e];
function Wr(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const sg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, cg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, lg = {
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
}, ug = {
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
}, dg = {
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
}, fg = {
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
}, pg = (e, t) => {
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
}, hg = {
  ordinalNumber: pg,
  era: Wr({
    values: sg,
    defaultWidth: "wide"
  }),
  quarter: Wr({
    values: cg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Wr({
    values: lg,
    defaultWidth: "wide"
  }),
  day: Wr({
    values: ug,
    defaultWidth: "wide"
  }),
  dayPeriod: Wr({
    values: dg,
    defaultWidth: "wide",
    formattingValues: fg,
    defaultFormattingWidth: "wide"
  })
};
function Vr(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? mg(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      gg(s, (d) => d.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(u)
    ) : u;
    const f = t.slice(i.length);
    return { value: u, rest: f };
  };
}
function gg(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function mg(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function yg(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const bg = /^(\d+)(th|st|nd|rd)?/i, vg = /\d+/i, wg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xg = {
  any: [/^b/i, /^(a|c)/i]
}, Cg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Sg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Eg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Tg = {
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
}, kg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Rg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Og = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, $g = {
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
}, Ig = {
  ordinalNumber: yg({
    matchPattern: bg,
    parsePattern: vg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Vr({
    matchPatterns: wg,
    defaultMatchWidth: "wide",
    parsePatterns: xg,
    defaultParseWidth: "any"
  }),
  quarter: Vr({
    matchPatterns: Cg,
    defaultMatchWidth: "wide",
    parsePatterns: Sg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Vr({
    matchPatterns: Eg,
    defaultMatchWidth: "wide",
    parsePatterns: Tg,
    defaultParseWidth: "any"
  }),
  day: Vr({
    matchPatterns: kg,
    defaultMatchWidth: "wide",
    parsePatterns: Rg,
    defaultParseWidth: "any"
  }),
  dayPeriod: Vr({
    matchPatterns: Og,
    defaultMatchWidth: "any",
    parsePatterns: $g,
    defaultParseWidth: "any"
  })
}, Pg = {
  code: "en-US",
  formatDistance: eg,
  formatLong: og,
  formatRelative: ig,
  localize: hg,
  match: Ig,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let Dg = {};
function un() {
  return Dg;
}
const zs = 6048e5, Mg = 864e5, vi = Symbol.for("constructDateFrom");
function Ut(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && vi in e ? e[vi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function wt(e, t) {
  return Ut(t || e, e);
}
function wi(e) {
  const t = wt(e), r = new Date(
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
function Ag(e, ...t) {
  const r = Ut.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function xi(e, t) {
  const r = wt(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function _g(e, t, r) {
  const [n, o] = Ag(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = xi(n), i = xi(o), s = +a - wi(a), c = +i - wi(i);
  return Math.round((s - c) / Mg);
}
function Ng(e, t) {
  const r = wt(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function Fg(e, t) {
  const r = wt(e, t == null ? void 0 : t.in);
  return _g(r, Ng(r)) + 1;
}
function tn(e, t) {
  var s, c, u, f;
  const r = un(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((f = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = wt(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Hn(e, t) {
  return tn(e, { ...t, weekStartsOn: 1 });
}
function Bs(e, t) {
  const r = wt(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Ut(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Hn(o), i = Ut(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Hn(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function jg(e, t) {
  const r = Bs(e, t), n = Ut(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Hn(n);
}
function zg(e, t) {
  const r = wt(e, t == null ? void 0 : t.in), n = +Hn(r) - +jg(r);
  return Math.round(n / zs) + 1;
}
function Ls(e, t) {
  var f, d, m, b;
  const r = wt(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = un(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((b = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, i = Ut((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = tn(i, t), c = Ut((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const u = tn(c, t);
  return +r >= +s ? n + 1 : +r >= +u ? n : n - 1;
}
function Bg(e, t) {
  var s, c, u, f;
  const r = un(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Ls(e, t), a = Ut((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), tn(a, t);
}
function Lg(e, t) {
  const r = wt(e, t == null ? void 0 : t.in), n = +tn(r, t) - +Bg(r, t);
  return Math.round(n / zs) + 1;
}
function Te(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Vt = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return Te(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : Te(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Te(e.getDate(), t.length);
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
    return Te(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Te(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Te(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Te(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return Te(o, t.length);
  }
}, yr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ci = {
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
    return Vt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = Ls(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return Te(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : Te(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Bs(e);
    return Te(r, t.length);
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
    return Te(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return Te(n, 2);
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
        return Te(n, 2);
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
        return Vt.M(e, t);
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
        return Te(n + 1, 2);
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
    const o = Lg(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : Te(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = zg(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : Te(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Vt.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Fg(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : Te(n, t.length);
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
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Te(a, 2);
      case "eo":
        return r.ordinalNumber(a, { unit: "day" });
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
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Te(a, t.length);
      case "co":
        return r.ordinalNumber(a, { unit: "day" });
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
        return Te(o, t.length);
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
    switch (n === 12 ? o = yr.noon : n === 0 ? o = yr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = yr.evening : n >= 12 ? o = yr.afternoon : n >= 4 ? o = yr.morning : o = yr.night, t) {
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
    return Vt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Vt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : Te(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : Te(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Vt.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Vt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Vt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ei(n);
      case "XXXX":
      case "XX":
        return tr(n);
      case "XXXXX":
      case "XXX":
      default:
        return tr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ei(n);
      case "xxxx":
      case "xx":
        return tr(n);
      case "xxxxx":
      case "xxx":
      default:
        return tr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Si(n, ":");
      case "OOOO":
      default:
        return "GMT" + tr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Si(n, ":");
      case "zzzz":
      default:
        return "GMT" + tr(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return Te(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return Te(+e, t.length);
  }
};
function Si(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + Te(a, 2);
}
function Ei(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Te(Math.abs(e) / 60, 2) : tr(e, t);
}
function tr(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Te(Math.trunc(n / 60), 2), a = Te(n % 60, 2);
  return r + o + t + a;
}
const Ti = (e, t) => {
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
}, Ws = (e, t) => {
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
}, Wg = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Ti(e, t);
  let a;
  switch (n) {
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
  return a.replace("{{date}}", Ti(n, t)).replace("{{time}}", Ws(o, t));
}, Vg = {
  p: Ws,
  P: Wg
}, Yg = /^D+$/, Hg = /^Y+$/, Ug = ["D", "DD", "YY", "YYYY"];
function Gg(e) {
  return Yg.test(e);
}
function qg(e) {
  return Hg.test(e);
}
function Kg(e, t, r) {
  const n = Xg(e, t, r);
  if (console.warn(n), Ug.includes(e)) throw new RangeError(n);
}
function Xg(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function Vs(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ys(e) {
  return !(!Vs(e) && typeof e != "number" || isNaN(+wt(e)));
}
const Zg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Qg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Jg = /^'([^]*?)'?$/, em = /''/g, tm = /[a-zA-Z]/;
function rm(e, t, r) {
  var f, d, m, b, w, g, h, C;
  const n = un(), o = (r == null ? void 0 : r.locale) ?? n.locale ?? Pg, a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((d = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((b = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, i = (r == null ? void 0 : r.weekStartsOn) ?? ((g = (w = r == null ? void 0 : r.locale) == null ? void 0 : w.options) == null ? void 0 : g.weekStartsOn) ?? n.weekStartsOn ?? ((C = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : C.weekStartsOn) ?? 0, s = wt(e, r == null ? void 0 : r.in);
  if (!Ys(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Qg).map((T) => {
    const S = T[0];
    if (S === "p" || S === "P") {
      const x = Vg[S];
      return x(T, o.formatLong);
    }
    return T;
  }).join("").match(Zg).map((T) => {
    if (T === "''")
      return { isToken: !1, value: "'" };
    const S = T[0];
    if (S === "'")
      return { isToken: !1, value: nm(T) };
    if (Ci[S])
      return { isToken: !0, value: T };
    if (S.match(tm))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return { isToken: !1, value: T };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((T) => {
    if (!T.isToken) return T.value;
    const S = T.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && qg(S) || !(r != null && r.useAdditionalDayOfYearTokens) && Gg(S)) && Kg(S, t, String(e));
    const x = Ci[S[0]];
    return x(s, S, o.localize, u);
  }).join("");
}
function nm(e) {
  const t = e.match(Jg);
  return t ? t[1].replace(em, "'") : e;
}
function om() {
  return Object.assign({}, un());
}
function ki(e, t, r) {
  const n = om(), o = sm(e, r.timeZone, r.locale ?? n.locale);
  return "formatToParts" in o ? am(o, t) : im(o, t);
}
function am(e, t) {
  const r = e.formatToParts(t);
  for (let n = r.length - 1; n >= 0; --n)
    if (r[n].type === "timeZoneName")
      return r[n].value;
}
function im(e, t) {
  const r = e.format(t).replace(/\u200E/g, ""), n = / [\w-+ ]+$/.exec(r);
  return n ? n[0].substr(1) : "";
}
function sm(e, t, r) {
  return new Intl.DateTimeFormat(r ? [r.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function cm(e, t) {
  const r = pm(t);
  return "formatToParts" in r ? um(r, e) : dm(r, e);
}
const lm = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function um(e, t) {
  try {
    const r = e.formatToParts(t), n = [];
    for (let o = 0; o < r.length; o++) {
      const a = lm[r[o].type];
      a !== void 0 && (n[a] = parseInt(r[o].value, 10));
    }
    return n;
  } catch (r) {
    if (r instanceof RangeError)
      return [NaN];
    throw r;
  }
}
function dm(e, t) {
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
const _o = {}, Ri = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), fm = Ri === "06/25/2014, 00:00:00" || Ri === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function pm(e) {
  return _o[e] || (_o[e] = fm ? new Intl.DateTimeFormat("en-US", {
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
  })), _o[e];
}
function Hs(e, t, r, n, o, a, i) {
  const s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(e, t, r), s.setUTCHours(n, o, a, i), s;
}
const Oi = 36e5, hm = 6e4, No = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function va(e, t, r) {
  if (!e)
    return 0;
  let n = No.timezoneZ.exec(e);
  if (n)
    return 0;
  let o, a;
  if (n = No.timezoneHH.exec(e), n)
    return o = parseInt(n[1], 10), $i(o) ? -(o * Oi) : NaN;
  if (n = No.timezoneHHMM.exec(e), n) {
    o = parseInt(n[2], 10);
    const i = parseInt(n[3], 10);
    return $i(o, i) ? (a = Math.abs(o) * Oi + i * hm, n[1] === "+" ? -a : a) : NaN;
  }
  if (ym(e)) {
    t = new Date(t || Date.now());
    const i = r ? t : gm(t), s = Qo(i, e);
    return -(r ? s : mm(t, s, e));
  }
  return NaN;
}
function gm(e) {
  return Hs(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Qo(e, t) {
  const r = cm(e, t), n = Hs(r[0], r[1] - 1, r[2], r[3] % 24, r[4], r[5], 0).getTime();
  let o = e.getTime();
  const a = o % 1e3;
  return o -= a >= 0 ? a : 1e3 + a, n - o;
}
function mm(e, t, r) {
  let o = e.getTime() - t;
  const a = Qo(new Date(o), r);
  if (t === a)
    return t;
  o -= a - t;
  const i = Qo(new Date(o), r);
  return a === i ? a : Math.max(a, i);
}
function $i(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const Ii = {};
function ym(e) {
  if (Ii[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Ii[e] = !0, !0;
  } catch {
    return !1;
  }
}
const bm = 60 * 1e3, vm = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = Fo(r.timeZone, e);
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return Pi(n);
      case "XXXX":
      case "XX":
        return br(n);
      case "XXXXX":
      case "XXX":
      default:
        return br(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = Fo(r.timeZone, e);
    switch (t) {
      case "x":
        return Pi(n);
      case "xxxx":
      case "xx":
        return br(n);
      case "xxxxx":
      case "xxx":
      default:
        return br(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = Fo(r.timeZone, e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wm(n, ":");
      case "OOOO":
      default:
        return "GMT" + br(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return ki("short", e, r);
      case "zzzz":
      default:
        return ki("long", e, r);
    }
  }
};
function Fo(e, t) {
  const r = e ? va(e, t, !0) / bm : (t == null ? void 0 : t.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(r))
    throw new RangeError("Invalid time zone specified: " + e);
  return r;
}
function Un(e, t) {
  const r = e < 0 ? "-" : "";
  let n = Math.abs(e).toString();
  for (; n.length < t; )
    n = "0" + n;
  return r + n;
}
function br(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Un(Math.floor(n / 60), 2), a = Un(Math.floor(n % 60), 2);
  return r + o + t + a;
}
function Pi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Un(Math.abs(e) / 60, 2) : br(e, t);
}
function wm(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.floor(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + Un(a, 2);
}
function Di(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const xm = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, jo = 36e5, Mi = 6e4, Cm = 2, Je = {
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
  timeZone: xm
};
function Us(e, t = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  const r = t.additionalDigits == null ? Cm : Number(t.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const n = Sm(e), { year: o, restDateString: a } = Em(n.date, r), i = Tm(a, o);
  if (i === null || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    const s = i.getTime();
    let c = 0, u;
    if (n.time && (c = km(n.time), c === null || isNaN(c)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || t.timeZone) {
      if (u = va(n.timeZone || t.timeZone, new Date(s + c)), isNaN(u))
        return /* @__PURE__ */ new Date(NaN);
    } else
      u = Di(new Date(s + c)), u = Di(new Date(s + c + u));
    return new Date(s + c + u);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Sm(e) {
  const t = {};
  let r = Je.dateTimePattern.exec(e), n;
  if (r ? (t.date = r[1], n = r[3]) : (r = Je.datePattern.exec(e), r ? (t.date = r[1], n = r[2]) : (t.date = null, n = e)), n) {
    const o = Je.timeZone.exec(n);
    o ? (t.time = n.replace(o[1], ""), t.timeZone = o[1].trim()) : t.time = n;
  }
  return t;
}
function Em(e, t) {
  if (e) {
    const r = Je.YYY[t], n = Je.YYYYY[t];
    let o = Je.YYYY.exec(e) || n.exec(e);
    if (o) {
      const a = o[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (o = Je.YY.exec(e) || r.exec(e), o) {
      const a = o[1];
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
function Tm(e, t) {
  if (t === null)
    return null;
  let r, n, o;
  if (!e || !e.length)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  let a = Je.MM.exec(e);
  if (a)
    return r = /* @__PURE__ */ new Date(0), n = parseInt(a[1], 10) - 1, _i(t, n) ? (r.setUTCFullYear(t, n), r) : /* @__PURE__ */ new Date(NaN);
  if (a = Je.DDD.exec(e), a) {
    r = /* @__PURE__ */ new Date(0);
    const i = parseInt(a[1], 10);
    return $m(t, i) ? (r.setUTCFullYear(t, 0, i), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Je.MMDD.exec(e), a) {
    r = /* @__PURE__ */ new Date(0), n = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10);
    return _i(t, n, i) ? (r.setUTCFullYear(t, n, i), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Je.Www.exec(e), a)
    return o = parseInt(a[1], 10) - 1, Ni(o) ? Ai(t, o) : /* @__PURE__ */ new Date(NaN);
  if (a = Je.WwwD.exec(e), a) {
    o = parseInt(a[1], 10) - 1;
    const i = parseInt(a[2], 10) - 1;
    return Ni(o, i) ? Ai(t, o, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function km(e) {
  let t, r, n = Je.HH.exec(e);
  if (n)
    return t = parseFloat(n[1].replace(",", ".")), zo(t) ? t % 24 * jo : NaN;
  if (n = Je.HHMM.exec(e), n)
    return t = parseInt(n[1], 10), r = parseFloat(n[2].replace(",", ".")), zo(t, r) ? t % 24 * jo + r * Mi : NaN;
  if (n = Je.HHMMSS.exec(e), n) {
    t = parseInt(n[1], 10), r = parseInt(n[2], 10);
    const o = parseFloat(n[3].replace(",", "."));
    return zo(t, r, o) ? t % 24 * jo + r * Mi + o * 1e3 : NaN;
  }
  return null;
}
function Ai(e, t, r) {
  t = t || 0, r = r || 0;
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const o = n.getUTCDay() || 7, a = t * 7 + r + 1 - o;
  return n.setUTCDate(n.getUTCDate() + a), n;
}
const Rm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Om = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Gs(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function _i(e, t, r) {
  if (t < 0 || t > 11)
    return !1;
  if (r != null) {
    if (r < 1)
      return !1;
    const n = Gs(e);
    if (n && r > Om[t] || !n && r > Rm[t])
      return !1;
  }
  return !0;
}
function $m(e, t) {
  if (t < 1)
    return !1;
  const r = Gs(e);
  return !(r && t > 366 || !r && t > 365);
}
function Ni(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function zo(e, t, r) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || r != null && (r < 0 || r >= 60));
}
const Im = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function Pm(e, t, r = {}) {
  t = String(t);
  const n = t.match(Im);
  if (n) {
    const o = Us(r.originalDate || e, r);
    t = n.reduce(function(a, i) {
      if (i[0] === "'")
        return a;
      const s = a.indexOf(i), c = a[s - 1] === "'", u = a.replace(i, "'" + vm[i[0]](o, i, r) + "'");
      return c ? u.substring(0, s - 1) + u.substring(s + 1) : u;
    }, t);
  }
  return rm(e, t, r);
}
function Dm(e, t, r) {
  e = Us(e, r);
  const n = va(t, e, !0), o = new Date(e.getTime() - n), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
function Mm(e, t, r, n) {
  return n = {
    ...n,
    timeZone: t,
    originalDate: e
  }, Pm(Dm(e, t, { timeZone: n.timeZone }), r, n);
}
var qs = /* @__PURE__ */ ((e) => (e.UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'", e.TEXT = "dd-MM-yyyy HH:mm", e.TEXT_WITHOUT_TIME = "dd-MM-yyyy", e))(qs || {});
const Am = (e, t = "yyyy-MM-dd'T'HH:mm:ss'Z'") => {
  if (!e)
    return "";
  const r = !Vs(e) && typeof e == "string" ? new Date(e) : e;
  if (!Ys(r))
    return "--";
  const n = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return Mm(e, n, t);
}, _m = ({
  columns: e,
  selectionEnabled: t
}) => Ue(() => {
  const r = [];
  return t && r.push({
    ...bp,
    minWidth: 50,
    maxWidth: 50
  }), r.push(
    ...e.map((n) => n.type === Kr.DATE && !n.renderCell ? {
      ...n,
      renderCell: ({ row: o }) => Am(o[n.key], qs.TEXT)
    } : n)
  ), r;
}, [e]), Ks = /* @__PURE__ */ H.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ks.displayName = "FormControlContext");
function Nm() {
  return H.useContext(Ks);
}
function Fm(e) {
  return jt("PrivateSwitchBase", e);
}
Kt("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const jm = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: o
  } = e, a = {
    root: ["root", r && "checked", n && "disabled", o && `edge${J(o)}`],
    input: ["input"]
  };
  return or(a, Fm, t);
}, zm = ut(Tr)({
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
}), Bm = ut("input", {
  shouldForwardProp: Jn
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
}), Xs = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const {
    autoFocus: n,
    checked: o,
    checkedIcon: a,
    className: i,
    defaultChecked: s,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: f = !1,
    icon: d,
    id: m,
    inputProps: b,
    inputRef: w,
    name: g,
    onBlur: h,
    onChange: C,
    onFocus: T,
    readOnly: S,
    required: x = !1,
    tabIndex: v,
    type: $,
    value: E,
    ...N
  } = t, [z, l] = yd({
    controlled: o,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), k = Nm(), F = (ne) => {
    T && T(ne), k && k.onFocus && k.onFocus(ne);
  }, P = (ne) => {
    h && h(ne), k && k.onBlur && k.onBlur(ne);
  }, X = (ne) => {
    if (ne.nativeEvent.defaultPrevented)
      return;
    const M = ne.target.checked;
    l(M), C && C(ne, M);
  };
  let K = c;
  k && typeof K > "u" && (K = k.disabled);
  const se = $ === "checkbox" || $ === "radio", ue = {
    ...t,
    checked: z,
    disabled: K,
    disableFocusRipple: u,
    edge: f
  }, pe = jm(ue);
  return /* @__PURE__ */ D.jsxs(zm, {
    component: "span",
    className: ve(pe.root, i),
    centerRipple: !0,
    focusRipple: !u,
    disabled: K,
    tabIndex: null,
    role: void 0,
    onFocus: F,
    onBlur: P,
    ownerState: ue,
    ref: r,
    ...N,
    children: [/* @__PURE__ */ D.jsx(Bm, {
      autoFocus: n,
      checked: o,
      defaultChecked: s,
      className: pe.input,
      disabled: K,
      id: se ? m : void 0,
      name: g,
      onChange: X,
      readOnly: S,
      ref: w,
      required: x,
      ownerState: ue,
      tabIndex: v,
      type: $,
      ...$ === "checkbox" && E === void 0 ? {} : {
        value: E
      },
      ...b
    }), z ? a : d]
  });
});
process.env.NODE_ENV !== "production" && (Xs.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: p.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: p.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: p.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * @ignore
   */
  defaultChecked: p.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: p.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: p.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: p.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: p.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: p.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: p.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: da,
  /*
   * @ignore
   */
  name: p.string,
  /**
   * @ignore
   */
  onBlur: p.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: p.func,
  /**
   * @ignore
   */
  onFocus: p.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: p.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: p.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.object,
  /**
   * @ignore
   */
  tabIndex: p.oneOfType([p.number, p.string]),
  /**
   * The input component prop `type`.
   */
  type: p.string.isRequired,
  /**
   * The value of the component.
   */
  value: p.any
});
function Lm(e) {
  return jt("MuiSvgIcon", e);
}
Kt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Wm = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(r)}`]
  };
  return or(o, Lm, n);
}, Vm = ut("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${J(r.color)}`], t[`fontSize${J(r.fontSize)}`]];
  }
})(Er(({
  theme: e
}) => {
  var t, r, n, o, a, i, s, c, u, f, d, m, b, w;
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
          fontSize: ((i = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : i.call(a, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : c.call(s, 24)) || "1.5rem"
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
      ...Object.entries((e.vars ?? e).palette).filter(([, g]) => g && g.main).map(([g]) => {
        var h, C;
        return {
          props: {
            color: g
          },
          style: {
            color: (C = (h = (e.vars ?? e).palette) == null ? void 0 : h[g]) == null ? void 0 : C.main
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
          color: (w = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : w.disabled
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
})), rn = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: i = "inherit",
    component: s = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: d,
    viewBox: m = "0 0 24 24",
    ...b
  } = n, w = /* @__PURE__ */ H.isValidElement(o) && o.type === "svg", g = {
    ...n,
    color: i,
    component: s,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: m,
    hasSvgAsChild: w
  }, h = {};
  f || (h.viewBox = m);
  const C = Wm(g);
  return /* @__PURE__ */ D.jsxs(Vm, {
    as: s,
    className: ve(C.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: r,
    ...h,
    ...b,
    ...w && o.props,
    ownerState: g,
    children: [w ? o.props.children : o, d ? /* @__PURE__ */ D.jsx("title", {
      children: d
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (rn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: p.oneOfType([p.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), p.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: p.oneOfType([p.oneOf(["inherit", "large", "medium", "small"]), p.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: p.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: p.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: p.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: p.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: p.string
});
rn && (rn.muiName = "SvgIcon");
function Ir(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ D.jsx(rn, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = rn.muiName, /* @__PURE__ */ H.memo(/* @__PURE__ */ H.forwardRef(r));
}
const Ym = Ir(/* @__PURE__ */ D.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Hm = Ir(/* @__PURE__ */ D.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Um = Ir(/* @__PURE__ */ D.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function Gm(e) {
  return jt("MuiCheckbox", e);
}
const Bo = Kt("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), qm = (e) => {
  const {
    classes: t,
    indeterminate: r,
    color: n,
    size: o
  } = e, a = {
    root: ["root", r && "indeterminate", `color${J(n)}`, `size${J(o)}`]
  }, i = or(a, Gm, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...i
  };
}, Km = ut(Xs, {
  shouldForwardProp: (e) => Jn(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.indeterminate && t.indeterminate, t[`size${J(r.size)}`], r.color !== "default" && t[`color${J(r.color)}`]];
  }
})(Er(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Bo.checked}, &.${Bo.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Bo.disabled}`]: {
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
}))), Xm = /* @__PURE__ */ D.jsx(Hm, {}), Zm = /* @__PURE__ */ D.jsx(Ym, {}), Qm = /* @__PURE__ */ D.jsx(Um, {}), Zs = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: o = Xm,
    color: a = "primary",
    icon: i = Zm,
    indeterminate: s = !1,
    indeterminateIcon: c = Qm,
    inputProps: u,
    size: f = "medium",
    disableRipple: d = !1,
    className: m,
    ...b
  } = n, w = s ? c : i, g = s ? c : o, h = {
    ...n,
    disableRipple: d,
    color: a,
    indeterminate: s,
    size: f
  }, C = qm(h);
  return /* @__PURE__ */ D.jsx(Km, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": s,
      ...u
    },
    icon: /* @__PURE__ */ H.cloneElement(w, {
      fontSize: w.props.fontSize ?? f
    }),
    checkedIcon: /* @__PURE__ */ H.cloneElement(g, {
      fontSize: g.props.fontSize ?? f
    }),
    ownerState: h,
    ref: r,
    className: ve(C.root, m),
    disableRipple: d,
    ...b,
    classes: C
  });
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: p.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: p.oneOfType([p.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), p.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: p.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: p.node,
  /**
   * The id of the `input` element.
   */
  id: p.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: p.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: p.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: p.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: da,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: p.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: p.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["medium", "small"]), p.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: p.any
});
const Jm = $t(Zs)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${Ee.primary500};
    }
`, e0 = $t.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${Ee.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, t0 = Rt.memo(({ checked: e, onChange: t }) => {
  const r = nr(
    (n, o) => {
      t(o, n.nativeEvent.shiftKey);
    },
    [t]
  );
  return /* @__PURE__ */ D.jsx(Jm, { checked: e, onChange: r });
}), w0 = Rt.memo(
  ({
    theme: e,
    loading: t,
    rows: r,
    columns: n,
    sortColumns: o,
    onSortColumnsChange: a,
    defaultSortColumns: i,
    selectedRows: s,
    onSelectedRowsChange: c,
    ...u
  }) => {
    const f = _m({
      columns: n,
      selectionEnabled: !!c
    }), {
      sortedRows: d,
      sortColumns: m,
      setSortedColumns: b
    } = Qh(f, r, i), w = Ue(() => !a, [a]), g = nr(
      (h, C) => C === 0 ? "first-row" : C === r.length - 1 ? "last-row" : "",
      [r]
    );
    return qn(() => {
      const h = s == null ? void 0 : s.filter(
        (C) => r.some((T) => T.id === C)
      );
      (h == null ? void 0 : h.length) != (s == null ? void 0 : s.length) && (c == null || c(h ?? []));
    }, [r, s]), /* @__PURE__ */ D.jsxs(Vh, { children: [
      /* @__PURE__ */ D.jsx(
        js,
        {
          ...u,
          selectedRows: s ? new Set(s) : void 0,
          onSelectedRowsChange: (h) => {
            c == null || c(Array.from(h));
          },
          rowKeyGetter: (h) => h.id,
          rows: w ? d : r,
          onSortColumnsChange: w ? b : a,
          sortColumns: w ? m : o,
          columns: f,
          rowClass: g,
          rowHeight: 50,
          renderers: {
            renderCheckbox: (h) => /* @__PURE__ */ D.jsx(t0, { ...h })
          },
          style: { ...Wh, ...e ?? {} }
        }
      ),
      t ? /* @__PURE__ */ D.jsxs(e0, { children: [
        /* @__PURE__ */ D.jsx("div", {}),
        /* @__PURE__ */ D.jsx(Xh, { color: Ee.primary500 })
      ] }) : null
    ] });
  }
);
function r0(e) {
  return jt("MuiIconButton", e);
}
const n0 = Kt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), o0 = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: a
  } = e, i = {
    root: ["root", r && "disabled", n !== "default" && `color${J(n)}`, o && `edge${J(o)}`, `size${J(a)}`]
  };
  return or(i, r0, t);
}, a0 = ut(Tr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${J(r.color)}`], r.edge && t[`edge${J(r.edge)}`], t[`size${J(r.size)}`]];
  }
})(Er(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), Er(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Nt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${n0.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Qs = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: a,
    className: i,
    color: s = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: f = "medium",
    ...d
  } = n, m = {
    ...n,
    edge: o,
    color: s,
    disabled: c,
    disableFocusRipple: u,
    size: f
  }, b = o0(m);
  return /* @__PURE__ */ D.jsx(a0, {
    className: ve(b.root, i),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r,
    ...d,
    ownerState: m,
    children: a
  });
});
process.env.NODE_ENV !== "production" && (Qs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: cs(p.node, (e) => H.Children.toArray(e.children).some((r) => /* @__PURE__ */ H.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: p.oneOfType([p.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), p.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: p.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["small", "medium", "large"]), p.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object])
});
const x0 = $t(Qs, {
  shouldForwardProp: (e) => !["$background", "$hoverBackground", "$activeBackground", "$color"].includes(e)
})`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    background: ${({ $background: e }) => e ?? "transparent"};

    &:hover {
        background: ${({ $hoverBackground: e }) => e ?? Ee.gray300};
    }

    &:active {
        background: ${({ $activeBackground: e }) => e ?? Ee.gray400};
        transition: background 0.1s ease-in-out;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    > svg {
        width: 24px;
        height: 24px;
    }

    > * {
        color: ${({ $color: e }) => e ?? "#3E4F5F"};
    }
`, i0 = Ir(/* @__PURE__ */ D.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), s0 = $t(xs)`
    border: 1px solid ${Ee.red600};
    background: ${Ee.red50};
    color: ${Ee.red600};
`, C0 = (e) => /* @__PURE__ */ D.jsx(s0, { ...e, startIcon: /* @__PURE__ */ D.jsx(i0, {}) }), c0 = Ir(/* @__PURE__ */ D.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
}), "AddCircle"), S0 = (e) => /* @__PURE__ */ D.jsx(xs, { $level: "secondary", ...e, startIcon: /* @__PURE__ */ D.jsx(c0, {}) }), l0 = Ir(/* @__PURE__ */ D.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function u0(e) {
  return jt("MuiChip", e);
}
const fe = Kt("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), d0 = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: a,
    onDelete: i,
    clickable: s,
    variant: c
  } = e, u = {
    root: ["root", c, r && "disabled", `size${J(n)}`, `color${J(o)}`, s && "clickable", s && `clickableColor${J(o)}`, i && "deletable", i && `deletableColor${J(o)}`, `${c}${J(o)}`],
    label: ["label", `label${J(n)}`],
    avatar: ["avatar", `avatar${J(n)}`, `avatarColor${J(o)}`],
    icon: ["icon", `icon${J(n)}`, `iconColor${J(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${J(n)}`, `deleteIconColor${J(o)}`, `deleteIcon${J(c)}Color${J(o)}`]
  };
  return or(u, u0, t);
}, f0 = ut("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      color: n,
      iconColor: o,
      clickable: a,
      onDelete: i,
      size: s,
      variant: c
    } = r;
    return [{
      [`& .${fe.avatar}`]: t.avatar
    }, {
      [`& .${fe.avatar}`]: t[`avatar${J(s)}`]
    }, {
      [`& .${fe.avatar}`]: t[`avatarColor${J(n)}`]
    }, {
      [`& .${fe.icon}`]: t.icon
    }, {
      [`& .${fe.icon}`]: t[`icon${J(s)}`]
    }, {
      [`& .${fe.icon}`]: t[`iconColor${J(o)}`]
    }, {
      [`& .${fe.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${fe.deleteIcon}`]: t[`deleteIcon${J(s)}`]
    }, {
      [`& .${fe.deleteIcon}`]: t[`deleteIconColor${J(n)}`]
    }, {
      [`& .${fe.deleteIcon}`]: t[`deleteIcon${J(c)}Color${J(n)}`]
    }, t.root, t[`size${J(s)}`], t[`color${J(n)}`], a && t.clickable, a && n !== "default" && t[`clickableColor${J(n)})`], i && t.deletable, i && n !== "default" && t[`deletableColor${J(n)}`], t[c], t[`${c}${J(n)}`]];
  }
})(Er(({
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
    [`&.${fe.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${fe.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${fe.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${fe.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${fe.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${fe.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${fe.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : We(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : We(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${fe.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${fe.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${fe.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : We(e.palette[r].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].contrastText
          }
        }
      }
    })), {
      props: (r) => r.iconColor === r.color,
      style: {
        [`& .${fe.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (r) => r.iconColor === r.color && r.color !== "default",
      style: {
        [`& .${fe.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${fe.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : We(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        onDelete: !0
      },
      style: {
        [`&.${fe.focusVisible}`]: {
          background: (e.vars || e).palette[r].dark
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : We(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${fe.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : We(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Nt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        clickable: !0
      },
      style: {
        [`&:hover, &.${fe.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${fe.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${fe.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${fe.avatar}`]: {
          marginLeft: 4
        },
        [`& .${fe.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${fe.icon}`]: {
          marginLeft: 4
        },
        [`& .${fe.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${fe.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${fe.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Nt()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : We(e.palette[r].main, 0.7)}`,
        [`&.${fe.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[r].main, e.palette.action.hoverOpacity)
        },
        [`&.${fe.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : We(e.palette[r].main, e.palette.action.focusOpacity)
        },
        [`& .${fe.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : We(e.palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), p0 = ut("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${J(n)}`]];
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
function Fi(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Js = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const n = ar({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: a,
    clickable: i,
    color: s = "default",
    component: c,
    deleteIcon: u,
    disabled: f = !1,
    icon: d,
    label: m,
    onClick: b,
    onDelete: w,
    onKeyDown: g,
    onKeyUp: h,
    size: C = "medium",
    variant: T = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: x = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...v
  } = n, $ = H.useRef(null), E = qo($, r), N = (ne) => {
    ne.stopPropagation(), w && w(ne);
  }, z = (ne) => {
    ne.currentTarget === ne.target && Fi(ne) && ne.preventDefault(), g && g(ne);
  }, l = (ne) => {
    ne.currentTarget === ne.target && w && Fi(ne) && w(ne), h && h(ne);
  }, k = i !== !1 && b ? !0 : i, F = k || w ? Tr : c || "div", P = {
    ...n,
    component: F,
    disabled: f,
    size: C,
    color: s,
    iconColor: /* @__PURE__ */ H.isValidElement(d) && d.props.color || s,
    onDelete: !!w,
    clickable: k,
    variant: T
  }, X = d0(P), K = F === Tr ? {
    component: c || "div",
    focusVisibleClassName: X.focusVisible,
    ...w && {
      disableRipple: !0
    }
  } : {};
  let se = null;
  w && (se = u && /* @__PURE__ */ H.isValidElement(u) ? /* @__PURE__ */ H.cloneElement(u, {
    className: ve(u.props.className, X.deleteIcon),
    onClick: N
  }) : /* @__PURE__ */ D.jsx(l0, {
    className: ve(X.deleteIcon),
    onClick: N
  }));
  let ue = null;
  o && /* @__PURE__ */ H.isValidElement(o) && (ue = /* @__PURE__ */ H.cloneElement(o, {
    className: ve(X.avatar, o.props.className)
  }));
  let pe = null;
  return d && /* @__PURE__ */ H.isValidElement(d) && (pe = /* @__PURE__ */ H.cloneElement(d, {
    className: ve(X.icon, d.props.className)
  })), process.env.NODE_ENV !== "production" && ue && pe && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ D.jsxs(f0, {
    as: F,
    className: ve(X.root, a),
    disabled: k && f ? !0 : void 0,
    onClick: b,
    onKeyDown: z,
    onKeyUp: l,
    ref: E,
    tabIndex: x && f ? -1 : S,
    ownerState: P,
    ...K,
    ...v,
    children: [ue || pe, /* @__PURE__ */ D.jsx(p0, {
      className: ve(X.label),
      ownerState: P,
      children: m
    }), se]
  });
});
process.env.NODE_ENV !== "production" && (Js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: p.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: md,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: p.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: p.oneOfType([p.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), p.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: p.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * Icon element.
   */
  icon: p.element,
  /**
   * The content of the component.
   */
  label: p.node,
  /**
   * @ignore
   */
  onClick: p.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: p.func,
  /**
   * @ignore
   */
  onKeyDown: p.func,
  /**
   * @ignore
   */
  onKeyUp: p.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["medium", "small"]), p.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: p.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @ignore
   */
  tabIndex: p.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: p.oneOfType([p.oneOf(["filled", "outlined"]), p.string])
});
const E0 = $t(Js, { shouldForwardProp: (e) => !e.startsWith("$") })`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    height: 1rem;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 0.65625rem;
    color: ${({ $color: e }) => e ?? Ee.primary500};
    background: ${({ $backgroundColor: e }) => e ?? Ee.primary100};
    width: fit-content;
`;
export {
  S0 as AddButton,
  xs as Button,
  Jm as Checkbox,
  E0 as Chip,
  Kr as ColumnType,
  w0 as DataGrid,
  up as DataGridDefaultRenderersProvider,
  C0 as DeleteButton,
  x0 as IconButton,
  Xh as Loader,
  y0 as Row,
  kr as SELECT_COLUMN_KEY,
  ya as SelectCellFormatter,
  bp as SelectColumn,
  s0 as StyledButton,
  cp as ToggleGroup,
  b0 as TreeDataGrid,
  Wh as defaultTheme,
  rp as renderCheckbox,
  Np as renderHeaderCell,
  gh as renderSortIcon,
  mh as renderSortPriority,
  sp as renderToggleGroup,
  lp as renderValue,
  Ee as taktikTheme,
  v0 as textEditor,
  hp as useHeaderRowSelection,
  Ps as useRowSelection
};
