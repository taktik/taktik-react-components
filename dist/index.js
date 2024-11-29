var ms = Object.defineProperty;
var ys = (e, t, r) => t in e ? ms(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var wr = (e, t, r) => ys(e, typeof t != "symbol" ? t + "" : t, r);
import * as W from "react";
import Ot, { forwardRef as xo, useContext as Wi, Children as bs, isValidElement as cn, cloneElement as ln, createContext as Fr, useState as Ge, useCallback as mn, useRef as wt, useMemo as It, useImperativeHandle as vs, useEffect as So, useLayoutEffect as Cs, memo as dr, useId as ws } from "react";
import { flushSync as yn } from "react-dom";
function bn() {
  return bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bn.apply(null, arguments);
}
function Ui(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var xs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ss = /* @__PURE__ */ Ui(
  function(e) {
    return xs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Es = !1;
function Rs(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ts(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var $s = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Es : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ts(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Rs(o);
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
}(), Ke = "-ms-", vn = "-moz-", he = "-webkit-", Hi = "comm", Eo = "rule", Ro = "decl", ks = "@import", Ki = "@keyframes", Os = "@layer", Is = Math.abs, Rn = String.fromCharCode, Ps = Object.assign;
function As(e, t) {
  return He(e, 0) ^ 45 ? (((t << 2 ^ He(e, 0)) << 2 ^ He(e, 1)) << 2 ^ He(e, 2)) << 2 ^ He(e, 3) : 0;
}
function Yi(e) {
  return e.trim();
}
function _s(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function me(e, t, r) {
  return e.replace(t, r);
}
function lo(e, t) {
  return e.indexOf(t);
}
function He(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ir(e, t, r) {
  return e.slice(t, r);
}
function vt(e) {
  return e.length;
}
function To(e) {
  return e.length;
}
function nn(e, t) {
  return t.push(e), e;
}
function Ds(e, t) {
  return e.map(t).join("");
}
var Tn = 1, cr = 1, Gi = 0, Ze = 0, ze = 0, fr = "";
function $n(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Tn, column: cr, length: a, return: "" };
}
function xr(e, t) {
  return Ps($n("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ms() {
  return ze;
}
function js() {
  return ze = Ze > 0 ? He(fr, --Ze) : 0, cr--, ze === 10 && (cr = 1, Tn--), ze;
}
function ot() {
  return ze = Ze < Gi ? He(fr, Ze++) : 0, cr++, ze === 10 && (cr = 1, Tn++), ze;
}
function xt() {
  return He(fr, Ze);
}
function un() {
  return Ze;
}
function zr(e, t) {
  return Ir(fr, e, t);
}
function Pr(e) {
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
function qi(e) {
  return Tn = cr = 1, Gi = vt(fr = e), Ze = 0, [];
}
function Xi(e) {
  return fr = "", e;
}
function dn(e) {
  return Yi(zr(Ze - 1, uo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ns(e) {
  for (; (ze = xt()) && ze < 33; )
    ot();
  return Pr(e) > 2 || Pr(ze) > 3 ? "" : " ";
}
function Fs(e, t) {
  for (; --t && ot() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return zr(e, un() + (t < 6 && xt() == 32 && ot() == 32));
}
function uo(e) {
  for (; ot(); )
    switch (ze) {
      case e:
        return Ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uo(ze);
        break;
      case 40:
        e === 41 && uo(e);
        break;
      case 92:
        ot();
        break;
    }
  return Ze;
}
function zs(e, t) {
  for (; ot() && e + ze !== 57; )
    if (e + ze === 84 && xt() === 47)
      break;
  return "/*" + zr(t, Ze - 1) + "*" + Rn(e === 47 ? e : ot());
}
function Bs(e) {
  for (; !Pr(xt()); )
    ot();
  return zr(e, Ze);
}
function Ls(e) {
  return Xi(fn("", null, null, null, [""], e = qi(e), 0, [0], e));
}
function fn(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, g = 0, d = a, h = 0, v = 0, C = 0, m = 1, p = 1, x = 1, T = 0, E = "", w = o, y = i, k = n, S = E; p; )
    switch (C = T, T = ot()) {
      case 40:
        if (C != 108 && He(S, d - 1) == 58) {
          lo(S += me(dn(T), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += dn(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Ns(C);
        break;
      case 92:
        S += Fs(un() - 1, 7);
        continue;
      case 47:
        switch (xt()) {
          case 42:
          case 47:
            nn(Vs(zs(ot(), un()), t, r), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        s[u++] = vt(S) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            p = 0;
          case 59 + g:
            x == -1 && (S = me(S, /\f/g, "")), v > 0 && vt(S) - d && nn(v > 32 ? Qo(S + ";", n, r, d - 1) : Qo(me(S, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            S += ";";
          default:
            if (nn(k = Jo(S, t, r, u, g, o, s, E, w = [], y = [], d), i), T === 123)
              if (g === 0)
                fn(S, t, k, k, w, i, d, s, y);
              else
                switch (h === 99 && He(S, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fn(e, k, k, n && nn(Jo(e, k, k, 0, 0, o, s, E, o, w = [], d), y), o, y, d, s, n ? w : y);
                    break;
                  default:
                    fn(S, k, k, k, [""], y, 0, s, y);
                }
        }
        u = g = v = 0, m = x = 1, E = S = "", d = a;
        break;
      case 58:
        d = 1 + vt(S), v = C;
      default:
        if (m < 1) {
          if (T == 123)
            --m;
          else if (T == 125 && m++ == 0 && js() == 125)
            continue;
        }
        switch (S += Rn(T), T * m) {
          case 38:
            x = g > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[u++] = (vt(S) - 1) * x, x = 1;
            break;
          case 64:
            xt() === 45 && (S += dn(ot())), h = xt(), g = d = vt(E = S += Bs(un())), T++;
            break;
          case 45:
            C === 45 && vt(S) == 2 && (m = 0);
        }
    }
  return i;
}
function Jo(e, t, r, n, o, i, a, s, l, u, g) {
  for (var d = o - 1, h = o === 0 ? i : [""], v = To(h), C = 0, m = 0, p = 0; C < n; ++C)
    for (var x = 0, T = Ir(e, d + 1, d = Is(m = a[C])), E = e; x < v; ++x)
      (E = Yi(m > 0 ? h[x] + " " + T : me(T, /&\f/g, h[x]))) && (l[p++] = E);
  return $n(e, t, r, o === 0 ? Eo : s, l, u, g);
}
function Vs(e, t, r) {
  return $n(e, t, r, Hi, Rn(Ms()), Ir(e, 2, -2), 0);
}
function Qo(e, t, r, n) {
  return $n(e, t, r, Ro, Ir(e, 0, n), Ir(e, n + 1, -1), n);
}
function ar(e, t) {
  for (var r = "", n = To(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ws(e, t, r, n) {
  switch (e.type) {
    case Os:
      if (e.children.length) break;
    case ks:
    case Ro:
      return e.return = e.return || e.value;
    case Hi:
      return "";
    case Ki:
      return e.return = e.value + "{" + ar(e.children, n) + "}";
    case Eo:
      e.value = e.props.join(",");
  }
  return vt(r = ar(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Us(e) {
  var t = To(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function Hs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ks = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = xt(), o === 38 && i === 12 && (r[n] = 1), !Pr(i); )
    ot();
  return zr(t, Ze);
}, Ys = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Pr(o)) {
      case 0:
        o === 38 && xt() === 12 && (r[n] = 1), t[n] += Ks(Ze - 1, r, n);
        break;
      case 2:
        t[n] += dn(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = xt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Rn(o);
    }
  while (o = ot());
  return t;
}, Gs = function(t, r) {
  return Xi(Ys(qi(t), r));
}, Zo = /* @__PURE__ */ new WeakMap(), qs = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Zo.get(n)) && !o) {
      Zo.set(t, !0);
      for (var i = [], a = Gs(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var g = 0; g < s.length; g++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[g]) : s[g] + " " + a[l];
    }
  }
}, Xs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ji(e, t) {
  switch (As(e, t)) {
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
      return he + e + vn + e + Ke + e + e;
    case 6828:
    case 4268:
      return he + e + Ke + e + e;
    case 6165:
      return he + e + Ke + "flex-" + e + e;
    case 5187:
      return he + e + me(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + Ke + "flex-$1$2") + e;
    case 5443:
      return he + e + Ke + "flex-item-" + me(e, /flex-|-self/, "") + e;
    case 4675:
      return he + e + Ke + "flex-line-pack" + me(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return he + e + Ke + me(e, "shrink", "negative") + e;
    case 5292:
      return he + e + Ke + me(e, "basis", "preferred-size") + e;
    case 6060:
      return he + "box-" + me(e, "-grow", "") + he + e + Ke + me(e, "grow", "positive") + e;
    case 4554:
      return he + me(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    case 6187:
      return me(me(me(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return me(e, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return me(me(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + Ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
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
      if (vt(e) - 1 - t > 6) switch (He(e, t + 1)) {
        case 109:
          if (He(e, t + 4) !== 45) break;
        case 102:
          return me(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + vn + (He(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~lo(e, "stretch") ? Ji(me(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (He(e, t + 1) !== 115) break;
    case 6444:
      switch (He(e, vt(e) - 3 - (~lo(e, "!important") && 10))) {
        case 107:
          return me(e, ":", ":" + he) + e;
        case 101:
          return me(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (He(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + Ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (He(e, t + 11)) {
        case 114:
          return he + e + Ke + me(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return he + e + Ke + me(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return he + e + Ke + me(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + Ke + e + e;
  }
  return e;
}
var Js = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Ro:
      t.return = Ji(t.value, t.length);
      break;
    case Ki:
      return ar([xr(t, {
        value: me(t.value, "@", "@" + he)
      })], o);
    case Eo:
      if (t.length) return Ds(t.props, function(i) {
        switch (_s(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ar([xr(t, {
              props: [me(i, /:(read-\w+)/, ":" + vn + "$1")]
            })], o);
          case "::placeholder":
            return ar([xr(t, {
              props: [me(i, /:(plac\w+)/, ":" + he + "input-$1")]
            }), xr(t, {
              props: [me(i, /:(plac\w+)/, ":" + vn + "$1")]
            }), xr(t, {
              props: [me(i, /:(plac\w+)/, Ke + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Qs = [Js], Zs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var p = m.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Qs, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(m) {
      for (var p = m.getAttribute("data-emotion").split(" "), x = 1; x < p.length; x++)
        i[p[x]] = !0;
      s.push(m);
    }
  );
  var l, u = [qs, Xs];
  {
    var g, d = [Ws, Hs(function(m) {
      g.insert(m);
    })], h = Us(u.concat(o, d)), v = function(p) {
      return ar(Ls(p), h);
    };
    l = function(p, x, T, E) {
      g = T, v(p ? p + "{" + x.styles + "}" : x.styles), E && (C.inserted[x.name] = !0);
    };
  }
  var C = {
    key: r,
    sheet: new $s({
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
  return C.sheet.hydrate(s), C;
};
function ec(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fo = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function tc() {
  if (ei) return ye;
  ei = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function E(y) {
    if (typeof y == "object" && y !== null) {
      var k = y.$$typeof;
      switch (k) {
        case t:
          switch (y = y.type, y) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case g:
                case C:
                case v:
                case a:
                  return y;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function w(y) {
    return E(y) === u;
  }
  return ye.AsyncMode = l, ye.ConcurrentMode = u, ye.ContextConsumer = s, ye.ContextProvider = a, ye.Element = t, ye.ForwardRef = g, ye.Fragment = n, ye.Lazy = C, ye.Memo = v, ye.Portal = r, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = d, ye.isAsyncMode = function(y) {
    return w(y) || E(y) === l;
  }, ye.isConcurrentMode = w, ye.isContextConsumer = function(y) {
    return E(y) === s;
  }, ye.isContextProvider = function(y) {
    return E(y) === a;
  }, ye.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, ye.isForwardRef = function(y) {
    return E(y) === g;
  }, ye.isFragment = function(y) {
    return E(y) === n;
  }, ye.isLazy = function(y) {
    return E(y) === C;
  }, ye.isMemo = function(y) {
    return E(y) === v;
  }, ye.isPortal = function(y) {
    return E(y) === r;
  }, ye.isProfiler = function(y) {
    return E(y) === i;
  }, ye.isStrictMode = function(y) {
    return E(y) === o;
  }, ye.isSuspense = function(y) {
    return E(y) === d;
  }, ye.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === i || y === o || y === d || y === h || typeof y == "object" && y !== null && (y.$$typeof === C || y.$$typeof === v || y.$$typeof === a || y.$$typeof === s || y.$$typeof === g || y.$$typeof === p || y.$$typeof === x || y.$$typeof === T || y.$$typeof === m);
  }, ye.typeOf = E, ye;
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
var ti;
function rc() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function E(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === n || F === u || F === i || F === o || F === d || F === h || typeof F == "object" && F !== null && (F.$$typeof === C || F.$$typeof === v || F.$$typeof === a || F.$$typeof === s || F.$$typeof === g || F.$$typeof === p || F.$$typeof === x || F.$$typeof === T || F.$$typeof === m);
    }
    function w(F) {
      if (typeof F == "object" && F !== null) {
        var Ae = F.$$typeof;
        switch (Ae) {
          case t:
            var H = F.type;
            switch (H) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case d:
                return H;
              default:
                var je = H && H.$$typeof;
                switch (je) {
                  case s:
                  case g:
                  case C:
                  case v:
                  case a:
                    return je;
                  default:
                    return Ae;
                }
            }
          case r:
            return Ae;
        }
      }
    }
    var y = l, k = u, S = s, _ = a, j = t, c = g, $ = n, D = C, P = v, K = r, q = i, ie = o, ge = d, we = !1;
    function ce(F) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(F) || w(F) === l;
    }
    function A(F) {
      return w(F) === u;
    }
    function z(F) {
      return w(F) === s;
    }
    function ne(F) {
      return w(F) === a;
    }
    function oe(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function V(F) {
      return w(F) === g;
    }
    function ae(F) {
      return w(F) === n;
    }
    function X(F) {
      return w(F) === C;
    }
    function N(F) {
      return w(F) === v;
    }
    function U(F) {
      return w(F) === r;
    }
    function ee(F) {
      return w(F) === i;
    }
    function Z(F) {
      return w(F) === o;
    }
    function Te(F) {
      return w(F) === d;
    }
    be.AsyncMode = y, be.ConcurrentMode = k, be.ContextConsumer = S, be.ContextProvider = _, be.Element = j, be.ForwardRef = c, be.Fragment = $, be.Lazy = D, be.Memo = P, be.Portal = K, be.Profiler = q, be.StrictMode = ie, be.Suspense = ge, be.isAsyncMode = ce, be.isConcurrentMode = A, be.isContextConsumer = z, be.isContextProvider = ne, be.isElement = oe, be.isForwardRef = V, be.isFragment = ae, be.isLazy = X, be.isMemo = N, be.isPortal = U, be.isProfiler = ee, be.isStrictMode = Z, be.isSuspense = Te, be.isValidElementType = E, be.typeOf = w;
  }()), be;
}
process.env.NODE_ENV === "production" ? fo.exports = tc() : fo.exports = rc();
var $o = fo.exports, Qi = $o, nc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, oc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Zi = {};
Zi[Qi.ForwardRef] = nc;
Zi[Qi.Memo] = oc;
var ic = !0;
function ac(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var ea = function(t, r, n) {
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
  ic === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, sc = function(t, r, n) {
  ea(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function cc(e) {
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
var lc = {
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
}, uc = !1, dc = /[A-Z]|^ms/g, fc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ta = function(t) {
  return t.charCodeAt(1) === 45;
}, ri = function(t) {
  return t != null && typeof t != "boolean";
}, Xn = /* @__PURE__ */ Ui(function(e) {
  return ta(e) ? e : e.replace(dc, "-$&").toLowerCase();
}), ni = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(fc, function(n, o, i) {
          return Ct = {
            name: o,
            styles: i,
            next: Ct
          }, o;
        });
  }
  return lc[t] !== 1 && !ta(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, pc = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ar(e, t, r) {
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
      return gc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ct, u = r(e);
        return Ct = l, Ar(e, t, u);
      }
      break;
    }
  }
  var g = r;
  if (t == null)
    return g;
  var d = t[g];
  return d !== void 0 ? d : g;
}
function gc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ar(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : ri(s) && (n += Xn(i) + ":" + ni(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && uc)
          throw new Error(pc);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            ri(a[l]) && (n += Xn(i) + ":" + ni(i, a[l]) + ";");
        else {
          var u = Ar(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Xn(i) + ":" + u + ";";
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
var oi = /label:\s*([^\s;{]+)\s*(;|$)/g, Ct;
function ko(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ct = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Ar(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Ar(r, t, e[s]), n) {
      var l = i;
      o += l[s];
    }
  oi.lastIndex = 0;
  for (var u = "", g; (g = oi.exec(o)) !== null; )
    u += "-" + g[1];
  var d = cc(o) + u;
  return {
    name: d,
    styles: o,
    next: Ct
  };
}
var hc = function(t) {
  return t();
}, mc = W.useInsertionEffect ? W.useInsertionEffect : !1, yc = mc || hc, ra = /* @__PURE__ */ W.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Zs({
    key: "css"
  }) : null
);
ra.Provider;
var bc = function(t) {
  return /* @__PURE__ */ xo(function(r, n) {
    var o = Wi(ra);
    return t(r, o, n);
  });
}, vc = /* @__PURE__ */ W.createContext({});
function pn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ko(t);
}
var Oo = function() {
  var t = pn.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Cc = Ss, wc = function(t) {
  return t !== "theme";
}, ii = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Cc : wc;
}, ai = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, xc = !1, Sc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return ea(r, n, o), yc(function() {
    return sc(r, n, o);
  }), null;
}, Ec = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = ai(t, r, n), l = s || ii(o), u = !l("as");
  return function() {
    var g = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), g[0] == null || g[0].raw === void 0)
      d.push.apply(d, g);
    else {
      d.push(g[0][0]);
      for (var h = g.length, v = 1; v < h; v++)
        d.push(g[v], g[0][v]);
    }
    var C = bc(function(m, p, x) {
      var T = u && m.as || o, E = "", w = [], y = m;
      if (m.theme == null) {
        y = {};
        for (var k in m)
          y[k] = m[k];
        y.theme = W.useContext(vc);
      }
      typeof m.className == "string" ? E = ac(p.registered, w, m.className) : m.className != null && (E = m.className + " ");
      var S = ko(d.concat(w), p.registered, y);
      E += p.key + "-" + S.name, a !== void 0 && (E += " " + a);
      var _ = u && s === void 0 ? ii(T) : l, j = {};
      for (var c in m)
        u && c === "as" || _(c) && (j[c] = m[c]);
      return j.className = E, x && (j.ref = x), /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(Sc, {
        cache: p,
        serialized: S,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ W.createElement(T, j));
    });
    return C.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", C.defaultProps = t.defaultProps, C.__emotion_real = C, C.__emotion_base = o, C.__emotion_styles = d, C.__emotion_forwardProp = s, Object.defineProperty(C, "toString", {
      value: function() {
        return a === void 0 && xc ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), C.withComponent = function(m, p) {
      return e(m, bn({}, r, p, {
        shouldForwardProp: ai(C, p, !0)
      })).apply(void 0, d);
    }, C;
  };
}, Rc = [
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
], Pt = Ec.bind();
Rc.forEach(function(e) {
  Pt[e] = Pt(e);
});
var po = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jn, si;
function Tc() {
  if (si) return Jn;
  si = 1;
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
      var l = Object.getOwnPropertyNames(a).map(function(g) {
        return a[g];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        u[g] = g;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Jn = o() ? Object.assign : function(i, a) {
    for (var s, l = n(i), u, g = 1; g < arguments.length; g++) {
      s = Object(arguments[g]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        u = e(s);
        for (var h = 0; h < u.length; h++)
          r.call(s, u[h]) && (l[u[h]] = s[u[h]]);
      }
    }
    return l;
  }, Jn;
}
var Qn, ci;
function Io() {
  if (ci) return Qn;
  ci = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qn = e, Qn;
}
var Zn, li;
function na() {
  return li || (li = 1, Zn = Function.call.bind(Object.prototype.hasOwnProperty)), Zn;
}
var eo, ui;
function $c() {
  if (ui) return eo;
  ui = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Io(), r = {}, n = na();
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
      for (var g in i)
        if (n(i, g)) {
          var d;
          try {
            if (typeof i[g] != "function") {
              var h = Error(
                (l || "React class") + ": " + s + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = i[g](a, g, l, s, null, t);
          } catch (C) {
            d = C;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var v = u ? u() : "";
            e(
              "Failed " + s + " type: " + d.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, eo = o, eo;
}
var to, di;
function kc() {
  if (di) return to;
  di = 1;
  var e = $o, t = Tc(), r = Io(), n = na(), o = $c(), i = function() {
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
  return to = function(s, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function d(A) {
      var z = A && (u && A[u] || A[g]);
      if (typeof z == "function")
        return z;
    }
    var h = "<<anonymous>>", v = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: T(),
      arrayOf: E,
      element: w(),
      elementType: y(),
      instanceOf: k,
      node: c(),
      objectOf: _,
      oneOf: S,
      oneOfType: j,
      shape: D,
      exact: P
    };
    function C(A, z) {
      return A === z ? A !== 0 || 1 / A === 1 / z : A !== A && z !== z;
    }
    function m(A, z) {
      this.message = A, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function p(A) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, ne = 0;
      function oe(ae, X, N, U, ee, Z, Te) {
        if (U = U || h, Z = Z || N, Te !== r) {
          if (l) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ae = U + ":" + N;
            !z[Ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[Ae] = !0, ne++);
          }
        }
        return X[N] == null ? ae ? X[N] === null ? new m("The " + ee + " `" + Z + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new m("The " + ee + " `" + Z + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : A(X, N, U, ee, Z);
      }
      var V = oe.bind(null, !1);
      return V.isRequired = oe.bind(null, !0), V;
    }
    function x(A) {
      function z(ne, oe, V, ae, X, N) {
        var U = ne[oe], ee = ie(U);
        if (ee !== A) {
          var Z = ge(U);
          return new m(
            "Invalid " + ae + " `" + X + "` of type " + ("`" + Z + "` supplied to `" + V + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return p(z);
    }
    function T() {
      return p(a);
    }
    function E(A) {
      function z(ne, oe, V, ae, X) {
        if (typeof A != "function")
          return new m("Property `" + X + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var N = ne[oe];
        if (!Array.isArray(N)) {
          var U = ie(N);
          return new m("Invalid " + ae + " `" + X + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an array."));
        }
        for (var ee = 0; ee < N.length; ee++) {
          var Z = A(N, ee, V, ae, X + "[" + ee + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return p(z);
    }
    function w() {
      function A(z, ne, oe, V, ae) {
        var X = z[ne];
        if (!s(X)) {
          var N = ie(X);
          return new m("Invalid " + V + " `" + ae + "` of type " + ("`" + N + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(A);
    }
    function y() {
      function A(z, ne, oe, V, ae) {
        var X = z[ne];
        if (!e.isValidElementType(X)) {
          var N = ie(X);
          return new m("Invalid " + V + " `" + ae + "` of type " + ("`" + N + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(A);
    }
    function k(A) {
      function z(ne, oe, V, ae, X) {
        if (!(ne[oe] instanceof A)) {
          var N = A.name || h, U = ce(ne[oe]);
          return new m("Invalid " + ae + " `" + X + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return p(z);
    }
    function S(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function z(ne, oe, V, ae, X) {
        for (var N = ne[oe], U = 0; U < A.length; U++)
          if (C(N, A[U]))
            return null;
        var ee = JSON.stringify(A, function(Te, F) {
          var Ae = ge(F);
          return Ae === "symbol" ? String(F) : F;
        });
        return new m("Invalid " + ae + " `" + X + "` of value `" + String(N) + "` " + ("supplied to `" + V + "`, expected one of " + ee + "."));
      }
      return p(z);
    }
    function _(A) {
      function z(ne, oe, V, ae, X) {
        if (typeof A != "function")
          return new m("Property `" + X + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var N = ne[oe], U = ie(N);
        if (U !== "object")
          return new m("Invalid " + ae + " `" + X + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an object."));
        for (var ee in N)
          if (n(N, ee)) {
            var Z = A(N, ee, V, ae, X + "." + ee, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return p(z);
    }
    function j(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var z = 0; z < A.length; z++) {
        var ne = A[z];
        if (typeof ne != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + we(ne) + " at index " + z + "."
          ), a;
      }
      function oe(V, ae, X, N, U) {
        for (var ee = [], Z = 0; Z < A.length; Z++) {
          var Te = A[Z], F = Te(V, ae, X, N, U, r);
          if (F == null)
            return null;
          F.data && n(F.data, "expectedType") && ee.push(F.data.expectedType);
        }
        var Ae = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new m("Invalid " + N + " `" + U + "` supplied to " + ("`" + X + "`" + Ae + "."));
      }
      return p(oe);
    }
    function c() {
      function A(z, ne, oe, V, ae) {
        return K(z[ne]) ? null : new m("Invalid " + V + " `" + ae + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return p(A);
    }
    function $(A, z, ne, oe, V) {
      return new m(
        (A || "React class") + ": " + z + " type `" + ne + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function D(A) {
      function z(ne, oe, V, ae, X) {
        var N = ne[oe], U = ie(N);
        if (U !== "object")
          return new m("Invalid " + ae + " `" + X + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var ee in A) {
          var Z = A[ee];
          if (typeof Z != "function")
            return $(V, ae, X, ee, ge(Z));
          var Te = Z(N, ee, V, ae, X + "." + ee, r);
          if (Te)
            return Te;
        }
        return null;
      }
      return p(z);
    }
    function P(A) {
      function z(ne, oe, V, ae, X) {
        var N = ne[oe], U = ie(N);
        if (U !== "object")
          return new m("Invalid " + ae + " `" + X + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        var ee = t({}, ne[oe], A);
        for (var Z in ee) {
          var Te = A[Z];
          if (n(A, Z) && typeof Te != "function")
            return $(V, ae, X, Z, ge(Te));
          if (!Te)
            return new m(
              "Invalid " + ae + " `" + X + "` key `" + Z + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(ne[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var F = Te(N, Z, V, ae, X + "." + Z, r);
          if (F)
            return F;
        }
        return null;
      }
      return p(z);
    }
    function K(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(K);
          if (A === null || s(A))
            return !0;
          var z = d(A);
          if (z) {
            var ne = z.call(A), oe;
            if (z !== A.entries) {
              for (; !(oe = ne.next()).done; )
                if (!K(oe.value))
                  return !1;
            } else
              for (; !(oe = ne.next()).done; ) {
                var V = oe.value;
                if (V && !K(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(A, z) {
      return A === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function ie(A) {
      var z = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : q(z, A) ? "symbol" : z;
    }
    function ge(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var z = ie(A);
      if (z === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function we(A) {
      var z = ge(A);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function ce(A) {
      return !A.constructor || !A.constructor.name ? h : A.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, to;
}
var ro, fi;
function Oc() {
  if (fi) return ro;
  fi = 1;
  var e = Io();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ro = function() {
    function n(a, s, l, u, g, d) {
      if (d !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, ro;
}
if (process.env.NODE_ENV !== "production") {
  var Ic = $o, Pc = !0;
  po.exports = kc()(Ic.isElement, Pc);
} else
  po.exports = Oc()();
var Ac = po.exports;
const b = /* @__PURE__ */ ec(Ac);
function oa(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = oa(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function xe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = oa(e)) && (n && (n += " "), n += t);
  return n;
}
function Cn(e, t) {
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
              r[o][l] = Cn(i[l], a[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Br(e, t, r = void 0) {
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
function Nt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function _c(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Po(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), _c(e, t, r);
}
function Dc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ft(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ft(Dc(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Nt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Nt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Mc = (e) => {
  const t = Ft(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Tr = (e, t) => {
  try {
    return Mc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function kn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ia(e) {
  e = Ft(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (u, g = (u + r / 30) % 12) => o - i * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), kn({
    type: s,
    values: l
  });
}
function go(e) {
  e = Ft(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ft(ia(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function pi(e, t) {
  const r = go(e), n = go(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Le(e, t) {
  return e = Ft(e), t = Po(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, kn(e);
}
function on(e, t, r) {
  try {
    return Le(e, t);
  } catch {
    return e;
  }
}
function Ao(e, t) {
  if (e = Ft(e), t = Po(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return kn(e);
}
function Ee(e, t, r) {
  try {
    return Ao(e, t);
  } catch {
    return e;
  }
}
function _o(e, t) {
  if (e = Ft(e), t = Po(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return kn(e);
}
function Re(e, t, r) {
  try {
    return _o(e, t);
  } catch {
    return e;
  }
}
function jc(e, t = 0.15) {
  return go(e) > 0.5 ? Ao(e, t) : _o(e, t);
}
function an(e, t, r) {
  try {
    return jc(e, t);
  } catch {
    return e;
  }
}
function Nc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const aa = (e) => Nc(e) && e !== "classes";
function Q(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Nt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function kt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function sa(e) {
  if (/* @__PURE__ */ W.isValidElement(e) || !kt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = sa(e[r]);
  }), t;
}
function it(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return kt(e) && kt(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ W.isValidElement(t[o]) ? n[o] = t[o] : kt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && kt(e[o]) ? n[o] = it(e[o], t[o], r) : r.clone ? n[o] = kt(t[o]) ? sa(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function kr(e, t) {
  return t ? it(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const zt = process.env.NODE_ENV !== "production" ? b.oneOfType([b.number, b.string, b.object, b.array]) : {};
function Fc(e, t) {
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
function zc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Bc(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Nt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Lc(e) {
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
const On = {
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
}, gi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${On[e]}px)`
}, Vc = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : On[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function At(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || gi;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || gi;
    return Object.keys(t).reduce((a, s) => {
      if (zc(i.keys, s)) {
        const l = Bc(n.containerQueries ? n : Vc, s);
        l && (a[l] = r(t[s], s));
      } else if (Object.keys(i.values || On).includes(s)) {
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
function Wc(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Uc(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function In(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function wn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = In(e, r) || n, t && (o = t(o, n, e)), o;
}
function Ne(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, u = In(l, n) || {};
    return At(a, s, (d) => {
      let h = wn(u, o, d);
      return d === h && typeof d == "string" && (h = wn(u, o, `${t}${d === "default" ? "" : Q(d)}`, d)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: zt
  } : {}, i.filterProps = [t], i;
}
function Hc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Kc = {
  m: "margin",
  p: "padding"
}, Yc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, hi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Gc = Hc((e) => {
  if (e.length > 2)
    if (hi[e])
      e = hi[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Kc[t], o = Yc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Pn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], An = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], qc = [...Pn, ...An];
function Lr(e, t, r, n) {
  const o = In(e, t, !0) ?? r;
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
function Do(e) {
  return Lr(e, "spacing", 8, "spacing");
}
function Vr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Xc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Vr(t, r), n), {});
}
function Jc(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Gc(r), i = Xc(o, n), a = e[r];
  return At(e, a, i);
}
function ca(e, t) {
  const r = Do(e.theme);
  return Object.keys(e).map((n) => Jc(e, t, n, r)).reduce(kr, {});
}
function De(e) {
  return ca(e, Pn);
}
De.propTypes = process.env.NODE_ENV !== "production" ? Pn.reduce((e, t) => (e[t] = zt, e), {}) : {};
De.filterProps = Pn;
function Me(e) {
  return ca(e, An);
}
Me.propTypes = process.env.NODE_ENV !== "production" ? An.reduce((e, t) => (e[t] = zt, e), {}) : {};
Me.filterProps = An;
process.env.NODE_ENV !== "production" && qc.reduce((e, t) => (e[t] = zt, e), {});
function _n(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? kr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ut(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ft(e, t) {
  return Ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Qc = ft("border", ut), Zc = ft("borderTop", ut), el = ft("borderRight", ut), tl = ft("borderBottom", ut), rl = ft("borderLeft", ut), nl = ft("borderColor"), ol = ft("borderTopColor"), il = ft("borderRightColor"), al = ft("borderBottomColor"), sl = ft("borderLeftColor"), cl = ft("outline", ut), ll = ft("outlineColor"), Dn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Lr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Vr(t, n)
    });
    return At(e, e.borderRadius, r);
  }
  return null;
};
Dn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: zt
} : {};
Dn.filterProps = ["borderRadius"];
_n(Qc, Zc, el, tl, rl, nl, ol, il, al, sl, Dn, cl, ll);
const Mn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Lr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Vr(t, n)
    });
    return At(e, e.gap, r);
  }
  return null;
};
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: zt
} : {};
Mn.filterProps = ["gap"];
const jn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Lr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Vr(t, n)
    });
    return At(e, e.columnGap, r);
  }
  return null;
};
jn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: zt
} : {};
jn.filterProps = ["columnGap"];
const Nn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Lr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Vr(t, n)
    });
    return At(e, e.rowGap, r);
  }
  return null;
};
Nn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: zt
} : {};
Nn.filterProps = ["rowGap"];
const ul = Ne({
  prop: "gridColumn"
}), dl = Ne({
  prop: "gridRow"
}), fl = Ne({
  prop: "gridAutoFlow"
}), pl = Ne({
  prop: "gridAutoColumns"
}), gl = Ne({
  prop: "gridAutoRows"
}), hl = Ne({
  prop: "gridTemplateColumns"
}), ml = Ne({
  prop: "gridTemplateRows"
}), yl = Ne({
  prop: "gridTemplateAreas"
}), bl = Ne({
  prop: "gridArea"
});
_n(Mn, jn, Nn, ul, dl, fl, pl, gl, hl, ml, yl, bl);
function sr(e, t) {
  return t === "grey" ? t : e;
}
const vl = Ne({
  prop: "color",
  themeKey: "palette",
  transform: sr
}), Cl = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: sr
}), wl = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: sr
});
_n(vl, Cl, wl);
function nt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xl = Ne({
  prop: "width",
  transform: nt
}), Mo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || On[r];
      return n ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: nt(r)
      };
    };
    return At(e, e.maxWidth, t);
  }
  return null;
};
Mo.filterProps = ["maxWidth"];
const Sl = Ne({
  prop: "minWidth",
  transform: nt
}), El = Ne({
  prop: "height",
  transform: nt
}), Rl = Ne({
  prop: "maxHeight",
  transform: nt
}), Tl = Ne({
  prop: "minHeight",
  transform: nt
});
Ne({
  prop: "size",
  cssProperty: "width",
  transform: nt
});
Ne({
  prop: "size",
  cssProperty: "height",
  transform: nt
});
const $l = Ne({
  prop: "boxSizing"
});
_n(xl, Mo, Sl, El, Rl, Tl, $l);
const Fn = {
  // borders
  border: {
    themeKey: "borders",
    transform: ut
  },
  borderTop: {
    themeKey: "borders",
    transform: ut
  },
  borderRight: {
    themeKey: "borders",
    transform: ut
  },
  borderBottom: {
    themeKey: "borders",
    transform: ut
  },
  borderLeft: {
    themeKey: "borders",
    transform: ut
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
    transform: ut
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Dn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: sr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: sr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: sr
  },
  // spacing
  p: {
    style: Me
  },
  pt: {
    style: Me
  },
  pr: {
    style: Me
  },
  pb: {
    style: Me
  },
  pl: {
    style: Me
  },
  px: {
    style: Me
  },
  py: {
    style: Me
  },
  padding: {
    style: Me
  },
  paddingTop: {
    style: Me
  },
  paddingRight: {
    style: Me
  },
  paddingBottom: {
    style: Me
  },
  paddingLeft: {
    style: Me
  },
  paddingX: {
    style: Me
  },
  paddingY: {
    style: Me
  },
  paddingInline: {
    style: Me
  },
  paddingInlineStart: {
    style: Me
  },
  paddingInlineEnd: {
    style: Me
  },
  paddingBlock: {
    style: Me
  },
  paddingBlockStart: {
    style: Me
  },
  paddingBlockEnd: {
    style: Me
  },
  m: {
    style: De
  },
  mt: {
    style: De
  },
  mr: {
    style: De
  },
  mb: {
    style: De
  },
  ml: {
    style: De
  },
  mx: {
    style: De
  },
  my: {
    style: De
  },
  margin: {
    style: De
  },
  marginTop: {
    style: De
  },
  marginRight: {
    style: De
  },
  marginBottom: {
    style: De
  },
  marginLeft: {
    style: De
  },
  marginX: {
    style: De
  },
  marginY: {
    style: De
  },
  marginInline: {
    style: De
  },
  marginInlineStart: {
    style: De
  },
  marginInlineEnd: {
    style: De
  },
  marginBlock: {
    style: De
  },
  marginBlockStart: {
    style: De
  },
  marginBlockEnd: {
    style: De
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
    style: Mn
  },
  rowGap: {
    style: Nn
  },
  columnGap: {
    style: jn
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
    transform: nt
  },
  maxWidth: {
    style: Mo
  },
  minWidth: {
    transform: nt
  },
  height: {
    transform: nt
  },
  maxHeight: {
    transform: nt
  },
  minHeight: {
    transform: nt
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
function kl(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ol(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Il() {
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
      transform: g,
      style: d
    } = s;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = In(o, u) || {};
    return d ? d(a) : At(a, n, (C) => {
      let m = wn(h, g, C);
      return C === m && typeof C == "string" && (m = wn(h, g, `${r}${C === "default" ? "" : Q(C)}`, C)), l === !1 ? m : {
        [l]: m
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
    const i = o.unstable_sxConfig ?? Fn;
    function a(s) {
      let l = s;
      if (typeof s == "function")
        l = s(o);
      else if (typeof s != "object")
        return s;
      if (!l)
        return null;
      const u = Wc(o.breakpoints), g = Object.keys(u);
      let d = u;
      return Object.keys(l).forEach((h) => {
        const v = Ol(l[h], o);
        if (v != null)
          if (typeof v == "object")
            if (i[h])
              d = kr(d, e(h, v, o, i));
            else {
              const C = At({
                theme: o
              }, v, (m) => ({
                [h]: m
              }));
              kl(C, v) ? d[h] = t({
                sx: v,
                theme: o
              }) : d = kr(d, C);
            }
          else
            d = kr(d, e(h, v, o, i));
      }), Fc(o, Uc(g, d));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const lr = Il();
lr.filterProps = ["sx"];
var ho = { exports: {} }, Sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mi;
function Pl() {
  if (mi) return Sr;
  mi = 1;
  var e = Ot, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, u) {
    var g, d = {}, h = null, v = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (g in l) n.call(l, g) && !i.hasOwnProperty(g) && (d[g] = l[g]);
    if (s && s.defaultProps) for (g in l = s.defaultProps, l) d[g] === void 0 && (d[g] = l[g]);
    return { $$typeof: t, type: s, key: h, ref: v, props: d, _owner: o.current };
  }
  return Sr.Fragment = r, Sr.jsx = a, Sr.jsxs = a, Sr;
}
var Er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function Al() {
  return yi || (yi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ot, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), C = Symbol.iterator, m = "@@iterator";
    function p(f) {
      if (f === null || typeof f != "object")
        return null;
      var O = C && f[C] || f[m];
      return typeof O == "function" ? O : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(f) {
      {
        for (var O = arguments.length, B = new Array(O > 1 ? O - 1 : 0), re = 1; re < O; re++)
          B[re - 1] = arguments[re];
        E("error", f, B);
      }
    }
    function E(f, O, B) {
      {
        var re = x.ReactDebugCurrentFrame, fe = re.getStackAddendum();
        fe !== "" && (O += "%s", B = B.concat([fe]));
        var pe = B.map(function(le) {
          return String(le);
        });
        pe.unshift("Warning: " + O), Function.prototype.apply.call(console[f], console, pe);
      }
    }
    var w = !1, y = !1, k = !1, S = !1, _ = !1, j;
    j = Symbol.for("react.module.reference");
    function c(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === i || _ || f === o || f === u || f === g || S || f === v || w || y || k || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === a || f.$$typeof === s || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === j || f.getModuleId !== void 0));
    }
    function $(f, O, B) {
      var re = f.displayName;
      if (re)
        return re;
      var fe = O.displayName || O.name || "";
      return fe !== "" ? B + "(" + fe + ")" : B;
    }
    function D(f) {
      return f.displayName || "Context";
    }
    function P(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
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
        case g:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case s:
            var O = f;
            return D(O) + ".Consumer";
          case a:
            var B = f;
            return D(B._context) + ".Provider";
          case l:
            return $(f, f.render, "ForwardRef");
          case d:
            var re = f.displayName || null;
            return re !== null ? re : P(f.type) || "Memo";
          case h: {
            var fe = f, pe = fe._payload, le = fe._init;
            try {
              return P(le(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, q = 0, ie, ge, we, ce, A, z, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function V() {
      {
        if (q === 0) {
          ie = console.log, ge = console.info, we = console.warn, ce = console.error, A = console.group, z = console.groupCollapsed, ne = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        q++;
      }
    }
    function ae() {
      {
        if (q--, q === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, f, {
              value: ie
            }),
            info: K({}, f, {
              value: ge
            }),
            warn: K({}, f, {
              value: we
            }),
            error: K({}, f, {
              value: ce
            }),
            group: K({}, f, {
              value: A
            }),
            groupCollapsed: K({}, f, {
              value: z
            }),
            groupEnd: K({}, f, {
              value: ne
            })
          });
        }
        q < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = x.ReactCurrentDispatcher, N;
    function U(f, O, B) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (fe) {
            var re = fe.stack.trim().match(/\n( *(at )?)/);
            N = re && re[1] || "";
          }
        return `
` + N + f;
      }
    }
    var ee = !1, Z;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new Te();
    }
    function F(f, O) {
      if (!f || ee)
        return "";
      {
        var B = Z.get(f);
        if (B !== void 0)
          return B;
      }
      var re;
      ee = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = X.current, X.current = null, V();
      try {
        if (O) {
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
            } catch (Fe) {
              re = Fe;
            }
            Reflect.construct(f, [], le);
          } else {
            try {
              le.call();
            } catch (Fe) {
              re = Fe;
            }
            f.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            re = Fe;
          }
          f();
        }
      } catch (Fe) {
        if (Fe && re && typeof Fe.stack == "string") {
          for (var se = Fe.stack.split(`
`), Ue = re.stack.split(`
`), $e = se.length - 1, Oe = Ue.length - 1; $e >= 1 && Oe >= 0 && se[$e] !== Ue[Oe]; )
            Oe--;
          for (; $e >= 1 && Oe >= 0; $e--, Oe--)
            if (se[$e] !== Ue[Oe]) {
              if ($e !== 1 || Oe !== 1)
                do
                  if ($e--, Oe--, Oe < 0 || se[$e] !== Ue[Oe]) {
                    var Je = `
` + se[$e].replace(" at new ", " at ");
                    return f.displayName && Je.includes("<anonymous>") && (Je = Je.replace("<anonymous>", f.displayName)), typeof f == "function" && Z.set(f, Je), Je;
                  }
                while ($e >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        ee = !1, X.current = pe, ae(), Error.prepareStackTrace = fe;
      }
      var Mt = f ? f.displayName || f.name : "", et = Mt ? U(Mt) : "";
      return typeof f == "function" && Z.set(f, et), et;
    }
    function Ae(f, O, B) {
      return F(f, !1);
    }
    function H(f) {
      var O = f.prototype;
      return !!(O && O.isReactComponent);
    }
    function je(f, O, B) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return F(f, H(f));
      if (typeof f == "string")
        return U(f);
      switch (f) {
        case u:
          return U("Suspense");
        case g:
          return U("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return Ae(f.render);
          case d:
            return je(f.type, O, B);
          case h: {
            var re = f, fe = re._payload, pe = re._init;
            try {
              return je(pe(fe), O, B);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, at = {}, qe = x.ReactDebugCurrentFrame;
    function We(f) {
      if (f) {
        var O = f._owner, B = je(f.type, f._source, O ? O.type : null);
        qe.setExtraStackFrame(B);
      } else
        qe.setExtraStackFrame(null);
    }
    function Bt(f, O, B, re, fe) {
      {
        var pe = Function.call.bind(Ve);
        for (var le in f)
          if (pe(f, le)) {
            var se = void 0;
            try {
              if (typeof f[le] != "function") {
                var Ue = Error((re || "React class") + ": " + B + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ue.name = "Invariant Violation", Ue;
              }
              se = f[le](O, le, re, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($e) {
              se = $e;
            }
            se && !(se instanceof Error) && (We(fe), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", B, le, typeof se), We(null)), se instanceof Error && !(se.message in at) && (at[se.message] = !0, We(fe), T("Failed %s type: %s", B, se.message), We(null));
          }
      }
    }
    var ht = Array.isArray;
    function st(f) {
      return ht(f);
    }
    function te(f) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, B = O && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return B;
      }
    }
    function Lt(f) {
      try {
        return Vt(f), !1;
      } catch {
        return !0;
      }
    }
    function Vt(f) {
      return "" + f;
    }
    function Wt(f) {
      if (Lt(f))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", te(f)), Vt(f);
    }
    var ct = x.ReactCurrentOwner, Ln = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pt, hr, qt;
    qt = {};
    function _t(f) {
      if (Ve.call(f, "ref")) {
        var O = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Ur(f) {
      if (Ve.call(f, "key")) {
        var O = Object.getOwnPropertyDescriptor(f, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Hr(f, O) {
      if (typeof f.ref == "string" && ct.current && O && ct.current.stateNode !== O) {
        var B = P(ct.current.type);
        qt[B] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(ct.current.type), f.ref), qt[B] = !0);
      }
    }
    function Vn(f, O) {
      {
        var B = function() {
          pt || (pt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        B.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function Be(f, O) {
      {
        var B = function() {
          hr || (hr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        B.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var Kr = function(f, O, B, re, fe, pe, le) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: O,
        ref: B,
        props: le,
        // Record the component responsible for creating this element.
        _owner: pe
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
        value: re
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Xe(f, O, B, re, fe) {
      {
        var pe, le = {}, se = null, Ue = null;
        B !== void 0 && (Wt(B), se = "" + B), Ur(O) && (Wt(O.key), se = "" + O.key), _t(O) && (Ue = O.ref, Hr(O, fe));
        for (pe in O)
          Ve.call(O, pe) && !Ln.hasOwnProperty(pe) && (le[pe] = O[pe]);
        if (f && f.defaultProps) {
          var $e = f.defaultProps;
          for (pe in $e)
            le[pe] === void 0 && (le[pe] = $e[pe]);
        }
        if (se || Ue) {
          var Oe = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          se && Vn(le, Oe), Ue && Be(le, Oe);
        }
        return Kr(f, se, Ue, fe, re, ct.current, le);
      }
    }
    var gt = x.ReactCurrentOwner, Yr = x.ReactDebugCurrentFrame;
    function Et(f) {
      if (f) {
        var O = f._owner, B = je(f.type, f._source, O ? O.type : null);
        Yr.setExtraStackFrame(B);
      } else
        Yr.setExtraStackFrame(null);
    }
    var mr;
    mr = !1;
    function yr(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function Gr() {
      {
        if (gt.current) {
          var f = P(gt.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Ut(f) {
      return "";
    }
    var Rt = {};
    function qr(f) {
      {
        var O = Gr();
        if (!O) {
          var B = typeof f == "string" ? f : f.displayName || f.name;
          B && (O = `

Check the top-level render call using <` + B + ">.");
        }
        return O;
      }
    }
    function Tt(f, O) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var B = qr(O);
        if (Rt[B])
          return;
        Rt[B] = !0;
        var re = "";
        f && f._owner && f._owner !== gt.current && (re = " It was passed a child from " + P(f._owner.type) + "."), Et(f), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, re), Et(null);
      }
    }
    function Xt(f, O) {
      {
        if (typeof f != "object")
          return;
        if (st(f))
          for (var B = 0; B < f.length; B++) {
            var re = f[B];
            yr(re) && Tt(re, O);
          }
        else if (yr(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var fe = p(f);
          if (typeof fe == "function" && fe !== f.entries)
            for (var pe = fe.call(f), le; !(le = pe.next()).done; )
              yr(le.value) && Tt(le.value, O);
        }
      }
    }
    function Ye(f) {
      {
        var O = f.type;
        if (O == null || typeof O == "string")
          return;
        var B;
        if (typeof O == "function")
          B = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === d))
          B = O.propTypes;
        else
          return;
        if (B) {
          var re = P(O);
          Bt(B, f.props, "prop", re, f);
        } else if (O.PropTypes !== void 0 && !mr) {
          mr = !0;
          var fe = P(O);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jt(f) {
      {
        for (var O = Object.keys(f.props), B = 0; B < O.length; B++) {
          var re = O[B];
          if (re !== "children" && re !== "key") {
            Et(f), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Et(null);
            break;
          }
        }
        f.ref !== null && (Et(f), T("Invalid attribute `ref` supplied to `React.Fragment`."), Et(null));
      }
    }
    var mt = {};
    function Y(f, O, B, re, fe, pe) {
      {
        var le = c(f);
        if (!le) {
          var se = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = Ut();
          Ue ? se += Ue : se += Gr();
          var $e;
          f === null ? $e = "null" : st(f) ? $e = "array" : f !== void 0 && f.$$typeof === t ? ($e = "<" + (P(f.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : $e = typeof f, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $e, se);
        }
        var Oe = Xe(f, O, B, fe, pe);
        if (Oe == null)
          return Oe;
        if (le) {
          var Je = O.children;
          if (Je !== void 0)
            if (re)
              if (st(Je)) {
                for (var Mt = 0; Mt < Je.length; Mt++)
                  Xt(Je[Mt], f);
                Object.freeze && Object.freeze(Je);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xt(Je, f);
        }
        if (Ve.call(O, "key")) {
          var et = P(f), Fe = Object.keys(O).filter(function(Qr) {
            return Qr !== "key";
          }), Ht = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mt[et + Ht]) {
            var Wn = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ht, et, Wn, et), mt[et + Ht] = !0;
          }
        }
        return f === n ? Jt(Oe) : Ye(Oe), Oe;
      }
    }
    function Dt(f, O, B) {
      return Y(f, O, B, !0);
    }
    function br(f, O, B) {
      return Y(f, O, B, !1);
    }
    var Xr = br, Jr = Dt;
    Er.Fragment = n, Er.jsx = Xr, Er.jsxs = Jr;
  }()), Er;
}
process.env.NODE_ENV === "production" ? ho.exports = Pl() : ho.exports = Al();
var L = ho.exports;
/**
 * @mui/styled-engine v6.1.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function _l(e, t) {
  const r = Pt(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Dl(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const bi = [];
function vi(e) {
  return bi[0] = e, ko(bi);
}
const Ml = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function jl(e) {
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
  } = e, i = Ml(t), a = Object.keys(i);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function u(h, v) {
    const C = a.indexOf(v);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(C !== -1 && typeof t[a[C]] == "number" ? t[a[C]] : v) - n / 100}${r})`;
  }
  function g(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : s(h);
  }
  function d(h) {
    const v = a.indexOf(h);
    return v === 0 ? s(a[1]) : v === a.length - 1 ? l(a[v]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: l,
    between: u,
    only: g,
    not: d,
    unit: r,
    ...o
  };
}
const Nl = {
  borderRadius: 4
};
function la(e = 8, t = Do({
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
function Fl(e, t) {
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
function ua(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = jl(r), l = la(o);
  let u = it({
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
      ...Nl,
      ...i
    }
  }, a);
  return u = Lc(u), u.applyStyles = Fl, u = t.reduce((g, d) => it(g, d), u), u.unstable_sxConfig = {
    ...Fn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return lr({
      sx: d,
      theme: this
    });
  }, u;
}
const Ci = (e) => e, zl = () => {
  let e = Ci;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ci;
    }
  };
}, Bl = zl(), Ll = {
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
function Gt(e, t, r = "Mui") {
  const n = Ll[t];
  return n ? `${r}-${n}` : `${Bl.generate(e)}-${t}`;
}
function pr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Gt(e, o, r);
  }), n;
}
var mo = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wi;
function Vl() {
  if (wi) return ve;
  wi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case u:
            case g:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case l:
                case h:
                case d:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ve.ContextConsumer = a, ve.ContextProvider = i, ve.Element = e, ve.ForwardRef = l, ve.Fragment = r, ve.Lazy = h, ve.Memo = d, ve.Portal = t, ve.Profiler = o, ve.StrictMode = n, ve.Suspense = u, ve.SuspenseList = g, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(p) {
    return m(p) === a;
  }, ve.isContextProvider = function(p) {
    return m(p) === i;
  }, ve.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ve.isForwardRef = function(p) {
    return m(p) === l;
  }, ve.isFragment = function(p) {
    return m(p) === r;
  }, ve.isLazy = function(p) {
    return m(p) === h;
  }, ve.isMemo = function(p) {
    return m(p) === d;
  }, ve.isPortal = function(p) {
    return m(p) === t;
  }, ve.isProfiler = function(p) {
    return m(p) === o;
  }, ve.isStrictMode = function(p) {
    return m(p) === n;
  }, ve.isSuspense = function(p) {
    return m(p) === u;
  }, ve.isSuspenseList = function(p) {
    return m(p) === g;
  }, ve.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === u || p === g || p === v || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === i || p.$$typeof === a || p.$$typeof === l || p.$$typeof === C || p.getModuleId !== void 0);
  }, ve.typeOf = m, ve;
}
var Ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi;
function Wl() {
  return xi || (xi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), C = !1, m = !1, p = !1, x = !1, T = !1, E;
    E = Symbol.for("react.module.reference");
    function w(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === o || T || H === n || H === u || H === g || x || H === v || C || m || p || typeof H == "object" && H !== null && (H.$$typeof === h || H.$$typeof === d || H.$$typeof === i || H.$$typeof === a || H.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === E || H.getModuleId !== void 0));
    }
    function y(H) {
      if (typeof H == "object" && H !== null) {
        var je = H.$$typeof;
        switch (je) {
          case e:
            var Ve = H.type;
            switch (Ve) {
              case r:
              case o:
              case n:
              case u:
              case g:
                return Ve;
              default:
                var at = Ve && Ve.$$typeof;
                switch (at) {
                  case s:
                  case a:
                  case l:
                  case h:
                  case d:
                  case i:
                    return at;
                  default:
                    return je;
                }
            }
          case t:
            return je;
        }
      }
    }
    var k = a, S = i, _ = e, j = l, c = r, $ = h, D = d, P = t, K = o, q = n, ie = u, ge = g, we = !1, ce = !1;
    function A(H) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(H) {
      return ce || (ce = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(H) {
      return y(H) === a;
    }
    function oe(H) {
      return y(H) === i;
    }
    function V(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function ae(H) {
      return y(H) === l;
    }
    function X(H) {
      return y(H) === r;
    }
    function N(H) {
      return y(H) === h;
    }
    function U(H) {
      return y(H) === d;
    }
    function ee(H) {
      return y(H) === t;
    }
    function Z(H) {
      return y(H) === o;
    }
    function Te(H) {
      return y(H) === n;
    }
    function F(H) {
      return y(H) === u;
    }
    function Ae(H) {
      return y(H) === g;
    }
    Ce.ContextConsumer = k, Ce.ContextProvider = S, Ce.Element = _, Ce.ForwardRef = j, Ce.Fragment = c, Ce.Lazy = $, Ce.Memo = D, Ce.Portal = P, Ce.Profiler = K, Ce.StrictMode = q, Ce.Suspense = ie, Ce.SuspenseList = ge, Ce.isAsyncMode = A, Ce.isConcurrentMode = z, Ce.isContextConsumer = ne, Ce.isContextProvider = oe, Ce.isElement = V, Ce.isForwardRef = ae, Ce.isFragment = X, Ce.isLazy = N, Ce.isMemo = U, Ce.isPortal = ee, Ce.isProfiler = Z, Ce.isStrictMode = Te, Ce.isSuspense = F, Ce.isSuspenseList = Ae, Ce.isValidElementType = w, Ce.typeOf = y;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? mo.exports = Vl() : mo.exports = Wl();
var Si = mo.exports;
function da(e, t = "") {
  return e.displayName || e.name || t;
}
function Ei(e, t, r) {
  const n = da(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ul(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return da(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Si.ForwardRef:
          return Ei(e, e.render, "ForwardRef");
        case Si.Memo:
          return Ei(e, e.type, "memo");
        default:
          return;
      }
  }
}
function fa(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: vi(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = vi(o.style));
  }), n;
}
const Hl = ua();
function no(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Kl(e) {
  return e ? (t, r) => r[e] : null;
}
function Yl(e, t, r) {
  e.theme = Jl(e.theme) ? r : e.theme[t] || e.theme;
}
function gn(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => gn(e, n));
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
    return pa(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function pa(e, t, r = []) {
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
function Gl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Hl,
    rootShouldForwardProp: n = no,
    slotShouldForwardProp: o = no
  } = e;
  function i(s) {
    Yl(s, t, r);
  }
  return (s, l = {}) => {
    Dl(s, (y) => y.filter((k) => k !== lr));
    const {
      name: u,
      slot: g,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Kl(ga(g)),
      ...C
    } = l, m = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      g && g !== "Root" && g !== "root" || !1
    ), p = h || !1;
    let x = no;
    g === "Root" || g === "root" ? x = n : g ? x = o : Ql(s) && (x = void 0);
    const T = _l(s, {
      shouldForwardProp: x,
      label: Xl(u, g),
      ...C
    }), E = (y) => {
      if (typeof y == "function" && y.__emotion_real !== y)
        return function(S) {
          return gn(S, y);
        };
      if (kt(y)) {
        const k = fa(y);
        return k.variants ? function(_) {
          return gn(_, k);
        } : k.style;
      }
      return y;
    }, w = (...y) => {
      const k = [], S = y.map(E), _ = [];
      if (k.push(i), u && v && _.push(function(D) {
        var ie, ge;
        const K = (ge = (ie = D.theme.components) == null ? void 0 : ie[u]) == null ? void 0 : ge.styleOverrides;
        if (!K)
          return null;
        const q = {};
        for (const we in K)
          q[we] = gn(D, K[we]);
        return v(D, q);
      }), u && !m && _.push(function(D) {
        var q, ie;
        const P = D.theme, K = (ie = (q = P == null ? void 0 : P.components) == null ? void 0 : q[u]) == null ? void 0 : ie.variants;
        return K ? pa(D, K) : null;
      }), p || _.push(lr), Array.isArray(S[0])) {
        const $ = S.shift(), D = new Array(k.length).fill(""), P = new Array(_.length).fill("");
        let K;
        K = [...D, ...$, ...P], K.raw = [...D, ...$.raw, ...P], k.unshift(K);
      }
      const j = [...k, ...S, ..._], c = T(...j);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = ql(u, g, s)), c;
    };
    return T.withConfig && (w.withConfig = T.withConfig), w;
  };
}
function ql(e, t, r) {
  return e ? `${e}${Q(t || "")}` : `Styled(${Ul(r)})`;
}
function Xl(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ga(t || "Root")}`), r;
}
function Jl(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ql(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ga(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Zl = typeof window < "u" ? W.useLayoutEffect : W.useEffect;
function ha(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function eu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function tu(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !eu(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ru = ha(b.elementType, tu), nu = b.oneOfType([b.func, b.object]);
function ou(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function iu(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function sn(e) {
  const t = W.useRef(e);
  return Zl(() => {
    t.current = e;
  }), W.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function yo(...e) {
  return W.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      ou(r, t);
    });
  }, e);
}
const Ri = {};
function ma(e, t) {
  const r = W.useRef(Ri);
  return r.current === Ri && (r.current = e(t)), r;
}
const au = [];
function su(e) {
  W.useEffect(e, au);
}
class jo {
  constructor() {
    wr(this, "currentId", null);
    wr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    wr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new jo();
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
function cu() {
  const e = ma(jo.create).current;
  return su(e.disposeEffect), e;
}
function Ti(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const lu = /* @__PURE__ */ W.createContext(void 0);
process.env.NODE_ENV !== "production" && (b.node, b.object);
function uu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Cn(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Cn(o, n) : n;
}
function du({
  props: e,
  name: t
}) {
  const r = W.useContext(lu);
  return uu({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const $i = {
  theme: void 0
};
function fu(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && ($i.theme = o.theme, i = fa(e($i)), t = i, r = o.theme), i;
  };
}
function pu(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ki = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, gu = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, l]) => {
      (!r || r && !r([...i, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, s], Array.isArray(l) ? [...a, s] : a) : t([...i, s], l, a));
    });
  }
  n(e);
}, hu = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function oo(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return gu(
    e,
    (s, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(s, l))) {
        const g = `--${r ? `${r}-` : ""}${s.join("-")}`, d = hu(s, l);
        Object.assign(o, {
          [g]: d
        }), ki(i, s, `var(${g})`, u), ki(a, s, `var(${g}, ${d})`, u);
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
function mu(e, t = {}) {
  const {
    getSelector: r = p,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...l
  } = e, {
    vars: u,
    css: g,
    varsWithDefaults: d
  } = oo(l, t);
  let h = d;
  const v = {}, {
    [s]: C,
    ...m
  } = i;
  if (Object.entries(m || {}).forEach(([E, w]) => {
    const {
      vars: y,
      css: k,
      varsWithDefaults: S
    } = oo(w, t);
    h = it(h, S), v[E] = {
      css: k,
      vars: y
    };
  }), C) {
    const {
      css: E,
      vars: w,
      varsWithDefaults: y
    } = oo(C, t);
    h = it(h, y), v[s] = {
      css: E,
      vars: w
    };
  }
  function p(E, w) {
    var k, S;
    let y = o;
    if (o === "class" && (y = ".%s"), o === "data" && (y = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (y = `[${o}="%s"]`), E) {
      if (y === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${((S = (k = i[E]) == null ? void 0 : k.palette) == null ? void 0 : S.mode) || E})`]: {
            ":root": w
          }
        };
      if (y)
        return e.defaultColorScheme === E ? `:root, ${y.replace("%s", String(E))}` : y.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let E = {
        ...u
      };
      return Object.entries(v).forEach(([, {
        vars: w
      }]) => {
        E = it(E, w);
      }), E;
    },
    generateStyleSheets: () => {
      var _, j;
      const E = [], w = e.defaultColorScheme || "light";
      function y(c, $) {
        Object.keys($).length && E.push(typeof c == "string" ? {
          [c]: {
            ...$
          }
        } : c);
      }
      y(r(void 0, {
        ...g
      }), g);
      const {
        [w]: k,
        ...S
      } = v;
      if (k) {
        const {
          css: c
        } = k, $ = (j = (_ = i[w]) == null ? void 0 : _.palette) == null ? void 0 : j.mode, D = !n && $ ? {
          colorScheme: $,
          ...c
        } : {
          ...c
        };
        y(r(w, {
          ...D
        }), D);
      }
      return Object.entries(S).forEach(([c, {
        css: $
      }]) => {
        var K, q;
        const D = (q = (K = i[c]) == null ? void 0 : K.palette) == null ? void 0 : q.mode, P = !n && D ? {
          colorScheme: D,
          ...$
        } : {
          ...$
        };
        y(r(c, {
          ...P
        }), P);
      }), E;
    }
  };
}
function yu(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const _r = {
  black: "#000",
  white: "#fff"
}, bu = {
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
}, er = {
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
}, tr = {
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
}, Rr = {
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
}, rr = {
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
}, nr = {
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
}, or = {
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
function ya() {
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
      paper: _r.white,
      default: _r.white
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
const vu = ya();
function ba() {
  return {
    text: {
      primary: _r.white,
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
      active: _r.white,
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
const Oi = ba();
function Ii(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = _o(e.main, o) : t === "dark" && (e.dark = Ao(e.main, i)));
}
function Cu(e = "light") {
  return e === "dark" ? {
    main: rr[200],
    light: rr[50],
    dark: rr[400]
  } : {
    main: rr[700],
    light: rr[400],
    dark: rr[800]
  };
}
function wu(e = "light") {
  return e === "dark" ? {
    main: er[200],
    light: er[50],
    dark: er[400]
  } : {
    main: er[500],
    light: er[300],
    dark: er[700]
  };
}
function xu(e = "light") {
  return e === "dark" ? {
    main: tr[500],
    light: tr[300],
    dark: tr[700]
  } : {
    main: tr[700],
    light: tr[400],
    dark: tr[800]
  };
}
function Su(e = "light") {
  return e === "dark" ? {
    main: nr[400],
    light: nr[300],
    dark: nr[700]
  } : {
    main: nr[700],
    light: nr[500],
    dark: nr[900]
  };
}
function Eu(e = "light") {
  return e === "dark" ? {
    main: or[400],
    light: or[300],
    dark: or[700]
  } : {
    main: or[800],
    light: or[500],
    dark: or[900]
  };
}
function Ru(e = "light") {
  return e === "dark" ? {
    main: Rr[400],
    light: Rr[300],
    dark: Rr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Rr[500],
    dark: Rr[900]
  };
}
function No(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Cu(t), a = e.secondary || wu(t), s = e.error || xu(t), l = e.info || Su(t), u = e.success || Eu(t), g = e.warning || Ru(t);
  function d(m) {
    const p = pi(m, Oi.text.primary) >= r ? Oi.text.primary : vu.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = pi(m, p);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${p} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return p;
  }
  const h = ({
    color: m,
    name: p,
    mainShade: x = 500,
    lightShade: T = 300,
    darkShade: E = 700
  }) => {
    if (m = {
      ...m
    }, !m.main && m[x] && (m.main = m[x]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${p ? ` (${p})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Nt(11, p ? ` (${p})` : "", x));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${p ? ` (${p})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Nt(12, p ? ` (${p})` : "", JSON.stringify(m.main)));
    return Ii(m, "light", T, n), Ii(m, "dark", E, n), m.contrastText || (m.contrastText = d(m.main)), m;
  };
  let v;
  return t === "light" ? v = ya() : t === "dark" && (v = ba()), process.env.NODE_ENV !== "production" && (v || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), it({
    // A collection of common colors.
    common: {
      ..._r
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
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
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: bu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...v
  }, o);
}
function Tu(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function $u(e, t) {
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
function ku(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Pi = {
  textTransform: "uppercase"
}, Ai = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ou(e, t) {
  const {
    fontFamily: r = Ai,
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
    pxToRem: g,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, v = g || ((p) => `${p / l * h}rem`), C = (p, x, T, E, w) => ({
    fontFamily: r,
    fontWeight: p,
    fontSize: v(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Ai ? {
      letterSpacing: `${ku(E / x)}em`
    } : {},
    ...w,
    ...u
  }), m = {
    h1: C(o, 96, 1.167, -1.5),
    h2: C(o, 60, 1.2, -0.5),
    h3: C(i, 48, 1.167, 0),
    h4: C(i, 34, 1.235, 0.25),
    h5: C(i, 24, 1.334, 0),
    h6: C(a, 20, 1.6, 0.15),
    subtitle1: C(i, 16, 1.75, 0.15),
    subtitle2: C(a, 14, 1.57, 0.1),
    body1: C(i, 16, 1.5, 0.15),
    body2: C(i, 14, 1.43, 0.15),
    button: C(a, 14, 1.75, 0.4, Pi),
    caption: C(i, 12, 1.66, 0.4),
    overline: C(i, 12, 2.66, 1, Pi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return it({
    htmlFontSize: l,
    pxToRem: v,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...m
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const Iu = 0.2, Pu = 0.14, Au = 0.12;
function ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Iu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Pu})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Au})`].join(",");
}
const _u = ["none", ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Du = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Mu = {
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
function _i(e) {
  return `${Math.round(e)}ms`;
}
function ju(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Nu(e) {
  const t = {
    ...Du,
    ...e.easing
  }, r = {
    ...Mu,
    ...e.duration
  };
  return {
    getAutoHeightDuration: ju,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const g = (h) => typeof h == "string", d = (h) => !Number.isNaN(parseFloat(h));
        !g(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !g(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), g(s) || console.error('MUI: Argument "easing" must be a string.'), !d(l) && !g(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((g) => `${g} ${typeof a == "string" ? a : _i(a)} ${s} ${typeof l == "string" ? l : _i(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Fu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function zu(e) {
  return kt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function va(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !zu(s) || a.startsWith("unstable_") ? delete n[a] : kt(s) && (n[a] = {
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
function bo(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Nt(20));
  const g = No(i), d = ua(e);
  let h = it(d, {
    mixins: $u(d.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: _u.slice(),
    typography: Ou(g, s),
    transitions: Nu(a),
    zIndex: {
      ...Fu
    }
  });
  if (h = it(h, u), h = t.reduce((v, C) => it(v, C), h), process.env.NODE_ENV !== "production") {
    const v = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (m, p) => {
      let x;
      for (x in m) {
        const T = m[x];
        if (v.includes(x) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = Gt("", x);
            console.error([`MUI: The \`${p}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[x] = {};
        }
      }
    };
    Object.keys(h.components).forEach((m) => {
      const p = h.components[m].styleOverrides;
      p && m.startsWith("Mui") && C(p, m);
    });
  }
  return h.unstable_sxConfig = {
    ...Fn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(C) {
    return lr({
      sx: C,
      theme: this
    });
  }, h.toRuntimeSource = va, h;
}
function Bu(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Lu = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Bu(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Ca(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function wa(e) {
  return e === "dark" ? Lu : [];
}
function Vu(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = No(t);
  return {
    palette: i,
    opacity: {
      ...Ca(i.mode),
      ...r
    },
    overlays: n || wa(i.mode),
    ...o
  };
}
function Wu(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Uu = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Hu = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Uu(e.cssVarPrefix).forEach((s) => {
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
function Ku(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function R(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function $r(e) {
  return !e || !e.startsWith("hsl") ? e : ia(e);
}
function $t(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Tr($r(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Yu(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const bt = (e) => {
  try {
    return e();
  } catch {
  }
}, Gu = (e = "mui") => pu(e);
function io(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Vu({
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
  } = bo({
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
      ...Ca(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || wa(o)
  }, a;
}
function qu(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Wu,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, g = Object.keys(r)[0], d = n || (r.light && g !== "light" ? "light" : g), h = Gu(i), {
    [d]: v,
    light: C,
    dark: m,
    ...p
  } = r, x = {
    ...p
  };
  let T = v;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Nt(21, d));
  const E = io(x, T, u, d);
  C && !x.light && io(x, C, void 0, "light"), m && !x.dark && io(x, m, void 0, "dark");
  let w = {
    defaultColorScheme: d,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: l,
    getCssVar: h,
    colorSchemes: x,
    font: {
      ...Tu(E.typography),
      ...E.font
    },
    spacing: Yu(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach((j) => {
    const c = w.colorSchemes[j].palette, $ = (D) => {
      const P = D.split("-"), K = P[1], q = P[2];
      return h(D, c[K][q]);
    };
    if (c.mode === "light" && (R(c.common, "background", "#fff"), R(c.common, "onBackground", "#000")), c.mode === "dark" && (R(c.common, "background", "#000"), R(c.common, "onBackground", "#fff")), Ku(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      R(c.Alert, "errorColor", Ee(c.error.light, 0.6)), R(c.Alert, "infoColor", Ee(c.info.light, 0.6)), R(c.Alert, "successColor", Ee(c.success.light, 0.6)), R(c.Alert, "warningColor", Ee(c.warning.light, 0.6)), R(c.Alert, "errorFilledBg", $("palette-error-main")), R(c.Alert, "infoFilledBg", $("palette-info-main")), R(c.Alert, "successFilledBg", $("palette-success-main")), R(c.Alert, "warningFilledBg", $("palette-warning-main")), R(c.Alert, "errorFilledColor", bt(() => c.getContrastText(c.error.main))), R(c.Alert, "infoFilledColor", bt(() => c.getContrastText(c.info.main))), R(c.Alert, "successFilledColor", bt(() => c.getContrastText(c.success.main))), R(c.Alert, "warningFilledColor", bt(() => c.getContrastText(c.warning.main))), R(c.Alert, "errorStandardBg", Re(c.error.light, 0.9)), R(c.Alert, "infoStandardBg", Re(c.info.light, 0.9)), R(c.Alert, "successStandardBg", Re(c.success.light, 0.9)), R(c.Alert, "warningStandardBg", Re(c.warning.light, 0.9)), R(c.Alert, "errorIconColor", $("palette-error-main")), R(c.Alert, "infoIconColor", $("palette-info-main")), R(c.Alert, "successIconColor", $("palette-success-main")), R(c.Alert, "warningIconColor", $("palette-warning-main")), R(c.AppBar, "defaultBg", $("palette-grey-100")), R(c.Avatar, "defaultBg", $("palette-grey-400")), R(c.Button, "inheritContainedBg", $("palette-grey-300")), R(c.Button, "inheritContainedHoverBg", $("palette-grey-A100")), R(c.Chip, "defaultBorder", $("palette-grey-400")), R(c.Chip, "defaultAvatarColor", $("palette-grey-700")), R(c.Chip, "defaultIconColor", $("palette-grey-700")), R(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), R(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), R(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), R(c.LinearProgress, "primaryBg", Re(c.primary.main, 0.62)), R(c.LinearProgress, "secondaryBg", Re(c.secondary.main, 0.62)), R(c.LinearProgress, "errorBg", Re(c.error.main, 0.62)), R(c.LinearProgress, "infoBg", Re(c.info.main, 0.62)), R(c.LinearProgress, "successBg", Re(c.success.main, 0.62)), R(c.LinearProgress, "warningBg", Re(c.warning.main, 0.62)), R(c.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), R(c.Slider, "primaryTrack", Re(c.primary.main, 0.62)), R(c.Slider, "secondaryTrack", Re(c.secondary.main, 0.62)), R(c.Slider, "errorTrack", Re(c.error.main, 0.62)), R(c.Slider, "infoTrack", Re(c.info.main, 0.62)), R(c.Slider, "successTrack", Re(c.success.main, 0.62)), R(c.Slider, "warningTrack", Re(c.warning.main, 0.62));
      const D = an(c.background.default, 0.8);
      R(c.SnackbarContent, "bg", D), R(c.SnackbarContent, "color", bt(() => c.getContrastText(D))), R(c.SpeedDialAction, "fabHoverBg", an(c.background.paper, 0.15)), R(c.StepConnector, "border", $("palette-grey-400")), R(c.StepContent, "border", $("palette-grey-400")), R(c.Switch, "defaultColor", $("palette-common-white")), R(c.Switch, "defaultDisabledColor", $("palette-grey-100")), R(c.Switch, "primaryDisabledColor", Re(c.primary.main, 0.62)), R(c.Switch, "secondaryDisabledColor", Re(c.secondary.main, 0.62)), R(c.Switch, "errorDisabledColor", Re(c.error.main, 0.62)), R(c.Switch, "infoDisabledColor", Re(c.info.main, 0.62)), R(c.Switch, "successDisabledColor", Re(c.success.main, 0.62)), R(c.Switch, "warningDisabledColor", Re(c.warning.main, 0.62)), R(c.TableCell, "border", Re(on(c.divider, 1), 0.88)), R(c.Tooltip, "bg", on(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      R(c.Alert, "errorColor", Re(c.error.light, 0.6)), R(c.Alert, "infoColor", Re(c.info.light, 0.6)), R(c.Alert, "successColor", Re(c.success.light, 0.6)), R(c.Alert, "warningColor", Re(c.warning.light, 0.6)), R(c.Alert, "errorFilledBg", $("palette-error-dark")), R(c.Alert, "infoFilledBg", $("palette-info-dark")), R(c.Alert, "successFilledBg", $("palette-success-dark")), R(c.Alert, "warningFilledBg", $("palette-warning-dark")), R(c.Alert, "errorFilledColor", bt(() => c.getContrastText(c.error.dark))), R(c.Alert, "infoFilledColor", bt(() => c.getContrastText(c.info.dark))), R(c.Alert, "successFilledColor", bt(() => c.getContrastText(c.success.dark))), R(c.Alert, "warningFilledColor", bt(() => c.getContrastText(c.warning.dark))), R(c.Alert, "errorStandardBg", Ee(c.error.light, 0.9)), R(c.Alert, "infoStandardBg", Ee(c.info.light, 0.9)), R(c.Alert, "successStandardBg", Ee(c.success.light, 0.9)), R(c.Alert, "warningStandardBg", Ee(c.warning.light, 0.9)), R(c.Alert, "errorIconColor", $("palette-error-main")), R(c.Alert, "infoIconColor", $("palette-info-main")), R(c.Alert, "successIconColor", $("palette-success-main")), R(c.Alert, "warningIconColor", $("palette-warning-main")), R(c.AppBar, "defaultBg", $("palette-grey-900")), R(c.AppBar, "darkBg", $("palette-background-paper")), R(c.AppBar, "darkColor", $("palette-text-primary")), R(c.Avatar, "defaultBg", $("palette-grey-600")), R(c.Button, "inheritContainedBg", $("palette-grey-800")), R(c.Button, "inheritContainedHoverBg", $("palette-grey-700")), R(c.Chip, "defaultBorder", $("palette-grey-700")), R(c.Chip, "defaultAvatarColor", $("palette-grey-300")), R(c.Chip, "defaultIconColor", $("palette-grey-300")), R(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), R(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), R(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), R(c.LinearProgress, "primaryBg", Ee(c.primary.main, 0.5)), R(c.LinearProgress, "secondaryBg", Ee(c.secondary.main, 0.5)), R(c.LinearProgress, "errorBg", Ee(c.error.main, 0.5)), R(c.LinearProgress, "infoBg", Ee(c.info.main, 0.5)), R(c.LinearProgress, "successBg", Ee(c.success.main, 0.5)), R(c.LinearProgress, "warningBg", Ee(c.warning.main, 0.5)), R(c.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), R(c.Slider, "primaryTrack", Ee(c.primary.main, 0.5)), R(c.Slider, "secondaryTrack", Ee(c.secondary.main, 0.5)), R(c.Slider, "errorTrack", Ee(c.error.main, 0.5)), R(c.Slider, "infoTrack", Ee(c.info.main, 0.5)), R(c.Slider, "successTrack", Ee(c.success.main, 0.5)), R(c.Slider, "warningTrack", Ee(c.warning.main, 0.5));
      const D = an(c.background.default, 0.98);
      R(c.SnackbarContent, "bg", D), R(c.SnackbarContent, "color", bt(() => c.getContrastText(D))), R(c.SpeedDialAction, "fabHoverBg", an(c.background.paper, 0.15)), R(c.StepConnector, "border", $("palette-grey-600")), R(c.StepContent, "border", $("palette-grey-600")), R(c.Switch, "defaultColor", $("palette-grey-300")), R(c.Switch, "defaultDisabledColor", $("palette-grey-600")), R(c.Switch, "primaryDisabledColor", Ee(c.primary.main, 0.55)), R(c.Switch, "secondaryDisabledColor", Ee(c.secondary.main, 0.55)), R(c.Switch, "errorDisabledColor", Ee(c.error.main, 0.55)), R(c.Switch, "infoDisabledColor", Ee(c.info.main, 0.55)), R(c.Switch, "successDisabledColor", Ee(c.success.main, 0.55)), R(c.Switch, "warningDisabledColor", Ee(c.warning.main, 0.55)), R(c.TableCell, "border", Ee(on(c.divider, 1), 0.68)), R(c.Tooltip, "bg", on(c.grey[700], 0.92));
    }
    $t(c.background, "default"), $t(c.background, "paper"), $t(c.common, "background"), $t(c.common, "onBackground"), $t(c, "divider"), Object.keys(c).forEach((D) => {
      const P = c[D];
      P && typeof P == "object" && (P.main && R(c[D], "mainChannel", Tr($r(P.main))), P.light && R(c[D], "lightChannel", Tr($r(P.light))), P.dark && R(c[D], "darkChannel", Tr($r(P.dark))), P.contrastText && R(c[D], "contrastTextChannel", Tr($r(P.contrastText))), D === "text" && ($t(c[D], "primary"), $t(c[D], "secondary")), D === "action" && (P.active && $t(c[D], "active"), P.selected && $t(c[D], "selected")));
    });
  }), w = t.reduce((j, c) => it(j, c), w);
  const y = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Hu(w)
  }, {
    vars: k,
    generateThemeVars: S,
    generateStyleSheets: _
  } = mu(w, y);
  return w.vars = k, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([j, c]) => {
    w[j] = c;
  }), w.generateThemeVars = S, w.generateStyleSheets = _, w.generateSpacing = function() {
    return la(u.spacing, Do(this));
  }, w.getColorSchemeSelector = yu(s), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = a, w.unstable_sxConfig = {
    ...Fn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(c) {
    return lr({
      sx: c,
      theme: this
    });
  }, w.toRuntimeSource = va, w;
}
function Di(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: No({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Xu(e = {}, ...t) {
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
      return bo(e, ...t);
    let g = r;
    "palette" in e || u[s] && (u[s] !== !0 ? g = u[s].palette : s === "dark" && (g = {
      mode: "dark"
    }));
    const d = bo({
      ...e,
      palette: g
    }, ...t);
    return d.defaultColorScheme = s, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, Di(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, Di(d, "light", u.light)), d;
  }
  return !r && !("light" in u) && s === "light" && (u.light = !0), qu({
    ...a,
    colorSchemes: u,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Ju = Xu(), Qu = "$$material", St = Gl({
  themeId: Qu,
  defaultTheme: Ju,
  rootShouldForwardProp: aa
}), Dr = fu;
process.env.NODE_ENV !== "production" && (b.node, b.object.isRequired);
function gr(e) {
  return du(e);
}
class xn {
  constructor() {
    wr(this, "mountEffect", () => {
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
    return new xn();
  }
  static use() {
    const t = ma(xn.create).current, [r, n] = W.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, W.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = ed(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Zu() {
  return xn.use();
}
function ed() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function td(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function vo(e, t) {
  return vo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, vo(e, t);
}
function rd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, vo(e, t);
}
const Mi = Ot.createContext(null);
function nd(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fo(e, t) {
  var r = function(i) {
    return t && cn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && bs.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function od(e, t) {
  e = e || {}, t = t || {};
  function r(g) {
    return g in t ? t[g] : e[g];
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
function id(e, t) {
  return Fo(e.children, function(r) {
    return ln(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Kt(r, "appear", e),
      enter: Kt(r, "enter", e),
      exit: Kt(r, "exit", e)
    });
  });
}
function ad(e, t, r) {
  var n = Fo(e.children), o = od(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (cn(a)) {
      var s = i in t, l = i in n, u = t[i], g = cn(u) && !u.props.in;
      l && (!s || g) ? o[i] = ln(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Kt(a, "exit", e),
        enter: Kt(a, "enter", e)
      }) : !l && s && !g ? o[i] = ln(a, {
        in: !1
      }) : l && s && cn(u) && (o[i] = ln(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Kt(a, "exit", e),
        enter: Kt(a, "enter", e)
      }));
    }
  }), o;
}
var sd = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, cd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, zo = /* @__PURE__ */ function(e) {
  rd(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(nd(i));
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
      children: l ? id(o, s) : ad(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = Fo(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = bn({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = td(o, ["component", "childFactory"]), l = this.state.contextValue, u = sd(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Ot.createElement(Mi.Provider, {
      value: l
    }, u) : /* @__PURE__ */ Ot.createElement(Mi.Provider, {
      value: l
    }, /* @__PURE__ */ Ot.createElement(i, s, u));
  }, t;
}(Ot.Component);
zo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: b.any,
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
  children: b.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: b.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: b.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: b.bool,
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
  childFactory: b.func
} : {};
zo.defaultProps = cd;
function xa(e) {
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
  } = e, [g, d] = W.useState(!1), h = xe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, C = xe(r.child, g && r.childLeaving, n && r.childPulsate);
  return !s && !g && d(!0), W.useEffect(() => {
    if (!s && l != null) {
      const m = setTimeout(l, u);
      return () => {
        clearTimeout(m);
      };
    }
  }, [l, s, u]), /* @__PURE__ */ L.jsx("span", {
    className: h,
    style: v,
    children: /* @__PURE__ */ L.jsx("span", {
      className: C
    })
  });
}
process.env.NODE_ENV !== "production" && (xa.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object.isRequired,
  className: b.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: b.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: b.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: b.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: b.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: b.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: b.number,
  /**
   * exit delay
   */
  timeout: b.number.isRequired
});
const lt = pr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Co = 550, ld = 80, ud = Oo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, dd = Oo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, fd = Oo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, pd = St("span", {
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
}), gd = St(xa, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${lt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ud};
    animation-duration: ${Co}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${lt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${lt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${lt.childLeaving} {
    opacity: 0;
    animation-name: ${dd};
    animation-duration: ${Co}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${lt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${fd};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Sa = /* @__PURE__ */ W.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [l, u] = W.useState([]), g = W.useRef(0), d = W.useRef(null);
  W.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const h = W.useRef(!1), v = cu(), C = W.useRef(null), m = W.useRef(null), p = W.useCallback((w) => {
    const {
      pulsate: y,
      rippleX: k,
      rippleY: S,
      rippleSize: _,
      cb: j
    } = w;
    u((c) => [...c, /* @__PURE__ */ L.jsx(gd, {
      classes: {
        ripple: xe(i.ripple, lt.ripple),
        rippleVisible: xe(i.rippleVisible, lt.rippleVisible),
        ripplePulsate: xe(i.ripplePulsate, lt.ripplePulsate),
        child: xe(i.child, lt.child),
        childLeaving: xe(i.childLeaving, lt.childLeaving),
        childPulsate: xe(i.childPulsate, lt.childPulsate)
      },
      timeout: Co,
      pulsate: y,
      rippleX: k,
      rippleY: S,
      rippleSize: _
    }, g.current)]), g.current += 1, d.current = j;
  }, [i]), x = W.useCallback((w = {}, y = {}, k = () => {
  }) => {
    const {
      pulsate: S = !1,
      center: _ = o || y.pulsate,
      fakeElement: j = !1
      // For test purposes
    } = y;
    if ((w == null ? void 0 : w.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (h.current = !0);
    const c = j ? null : m.current, $ = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let D, P, K;
    if (_ || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      D = Math.round($.width / 2), P = Math.round($.height / 2);
    else {
      const {
        clientX: q,
        clientY: ie
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      D = Math.round(q - $.left), P = Math.round(ie - $.top);
    }
    if (_)
      K = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), K % 2 === 0 && (K += 1);
    else {
      const q = Math.max(Math.abs((c ? c.clientWidth : 0) - D), D) * 2 + 2, ie = Math.max(Math.abs((c ? c.clientHeight : 0) - P), P) * 2 + 2;
      K = Math.sqrt(q ** 2 + ie ** 2);
    }
    w != null && w.touches ? C.current === null && (C.current = () => {
      p({
        pulsate: S,
        rippleX: D,
        rippleY: P,
        rippleSize: K,
        cb: k
      });
    }, v.start(ld, () => {
      C.current && (C.current(), C.current = null);
    })) : p({
      pulsate: S,
      rippleX: D,
      rippleY: P,
      rippleSize: K,
      cb: k
    });
  }, [o, p, v]), T = W.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), E = W.useCallback((w, y) => {
    if (v.clear(), (w == null ? void 0 : w.type) === "touchend" && C.current) {
      C.current(), C.current = null, v.start(0, () => {
        E(w, y);
      });
      return;
    }
    C.current = null, u((k) => k.length > 0 ? k.slice(1) : k), d.current = y;
  }, [v]);
  return W.useImperativeHandle(r, () => ({
    pulsate: T,
    start: x,
    stop: E
  }), [T, x, E]), /* @__PURE__ */ L.jsx(pd, {
    className: xe(lt.root, i.root, a),
    ref: m,
    ...s,
    children: /* @__PURE__ */ L.jsx(zo, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Sa.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: b.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string
});
function hd(e) {
  return Gt("MuiButtonBase", e);
}
const md = pr("MuiButtonBase", ["root", "disabled", "focusVisible"]), yd = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Br({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, hd, o);
  return r && n && (a.root += ` ${n}`), a;
}, bd = St("button", {
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
  [`&.${md.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Mr = /* @__PURE__ */ W.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: l = "button",
    disabled: u = !1,
    disableRipple: g = !1,
    disableTouchRipple: d = !1,
    focusRipple: h = !1,
    focusVisibleClassName: v,
    LinkComponent: C = "a",
    onBlur: m,
    onClick: p,
    onContextMenu: x,
    onDragLeave: T,
    onFocus: E,
    onFocusVisible: w,
    onKeyDown: y,
    onKeyUp: k,
    onMouseDown: S,
    onMouseLeave: _,
    onMouseUp: j,
    onTouchEnd: c,
    onTouchMove: $,
    onTouchStart: D,
    tabIndex: P = 0,
    TouchRippleProps: K,
    touchRippleRef: q,
    type: ie,
    ...ge
  } = n, we = W.useRef(null), ce = Zu(), A = yo(ce.ref, q), [z, ne] = W.useState(!1);
  u && z && ne(!1), W.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ne(!0), we.current.focus();
    }
  }), []);
  const oe = ce.shouldMount && !g && !u;
  W.useEffect(() => {
    z && h && !g && ce.pulsate();
  }, [g, h, z, ce]);
  function V(te, Lt, Vt = d) {
    return sn((Wt) => (Lt && Lt(Wt), Vt || ce[te](Wt), !0));
  }
  const ae = V("start", S), X = V("stop", x), N = V("stop", T), U = V("stop", j), ee = V("stop", (te) => {
    z && te.preventDefault(), _ && _(te);
  }), Z = V("start", D), Te = V("stop", c), F = V("stop", $), Ae = V("stop", (te) => {
    Ti(te.target) || ne(!1), m && m(te);
  }, !1), H = sn((te) => {
    we.current || (we.current = te.currentTarget), Ti(te.target) && (ne(!0), w && w(te)), E && E(te);
  }), je = () => {
    const te = we.current;
    return l && l !== "button" && !(te.tagName === "A" && te.href);
  }, Ve = sn((te) => {
    h && !te.repeat && z && te.key === " " && ce.stop(te, () => {
      ce.start(te);
    }), te.target === te.currentTarget && je() && te.key === " " && te.preventDefault(), y && y(te), te.target === te.currentTarget && je() && te.key === "Enter" && !u && (te.preventDefault(), p && p(te));
  }), at = sn((te) => {
    h && te.key === " " && z && !te.defaultPrevented && ce.stop(te, () => {
      ce.pulsate(te);
    }), k && k(te), p && te.target === te.currentTarget && je() && te.key === " " && !te.defaultPrevented && p(te);
  });
  let qe = l;
  qe === "button" && (ge.href || ge.to) && (qe = C);
  const We = {};
  qe === "button" ? (We.type = ie === void 0 ? "button" : ie, We.disabled = u) : (!ge.href && !ge.to && (We.role = "button"), u && (We["aria-disabled"] = u));
  const Bt = yo(r, we), ht = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: g,
    disableTouchRipple: d,
    focusRipple: h,
    tabIndex: P,
    focusVisible: z
  }, st = yd(ht);
  return /* @__PURE__ */ L.jsxs(bd, {
    as: qe,
    className: xe(st.root, s),
    ownerState: ht,
    onBlur: Ae,
    onClick: p,
    onContextMenu: X,
    onFocus: H,
    onKeyDown: Ve,
    onKeyUp: at,
    onMouseDown: ae,
    onMouseLeave: ee,
    onMouseUp: U,
    onDragLeave: N,
    onTouchEnd: Te,
    onTouchMove: F,
    onTouchStart: Z,
    ref: Bt,
    tabIndex: u ? -1 : P,
    type: ie,
    ...We,
    ...ge,
    children: [a, oe ? /* @__PURE__ */ L.jsx(Sa, {
      ref: A,
      center: i,
      ...K
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Mr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: nu,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: b.bool,
  /**
   * The content of the component.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ru,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: b.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: b.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: b.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: b.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: b.string,
  /**
   * @ignore
   */
  href: b.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: b.elementType,
  /**
   * @ignore
   */
  onBlur: b.func,
  /**
   * @ignore
   */
  onClick: b.func,
  /**
   * @ignore
   */
  onContextMenu: b.func,
  /**
   * @ignore
   */
  onDragLeave: b.func,
  /**
   * @ignore
   */
  onFocus: b.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: b.func,
  /**
   * @ignore
   */
  onKeyDown: b.func,
  /**
   * @ignore
   */
  onKeyUp: b.func,
  /**
   * @ignore
   */
  onMouseDown: b.func,
  /**
   * @ignore
   */
  onMouseLeave: b.func,
  /**
   * @ignore
   */
  onMouseUp: b.func,
  /**
   * @ignore
   */
  onTouchEnd: b.func,
  /**
   * @ignore
   */
  onTouchMove: b.func,
  /**
   * @ignore
   */
  onTouchStart: b.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * @default 0
   */
  tabIndex: b.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: b.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: b.oneOfType([b.func, b.shape({
    current: b.shape({
      pulsate: b.func.isRequired,
      start: b.func.isRequired,
      stop: b.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: b.oneOfType([b.oneOf(["button", "reset", "submit"]), b.string])
});
function vd(e) {
  return typeof e.main == "string";
}
function Cd(e, t = []) {
  if (!vd(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Yt(e = []) {
  return ([, t]) => t && Cd(t, e);
}
function wd(e) {
  return Gt("MuiButton", e);
}
const ir = pr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Ea = /* @__PURE__ */ W.createContext({});
process.env.NODE_ENV !== "production" && (Ea.displayName = "ButtonGroupContext");
const Ra = /* @__PURE__ */ W.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ra.displayName = "ButtonGroupButtonContext");
const xd = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${Q(t)}`, `size${Q(o)}`, `${i}Size${Q(o)}`, `color${Q(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Q(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Q(o)}`]
  }, l = Br(s, wd, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, Ta = [{
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
}], Sd = St(Mr, {
  shouldForwardProp: (e) => aa(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Q(r.color)}`], t[`size${Q(r.size)}`], t[`${r.variant}Size${Q(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Dr(({
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
    [`&.${ir.disabled}`]: {
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
        [`&.${ir.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ir.disabled}`]: {
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
        [`&.${ir.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Yt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Le(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${ir.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ir.disabled}`]: {
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
})), Ed = St("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${Q(r.size)}`]];
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
  }, ...Ta]
}), Rd = St("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${Q(r.size)}`]];
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
  }, ...Ta]
}), $a = /* @__PURE__ */ W.forwardRef(function(t, r) {
  const n = W.useContext(Ea), o = W.useContext(Ra), i = Cn(n, t), a = gr({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: u = "button",
    className: g,
    disabled: d = !1,
    disableElevation: h = !1,
    disableFocusRipple: v = !1,
    endIcon: C,
    focusVisibleClassName: m,
    fullWidth: p = !1,
    size: x = "medium",
    startIcon: T,
    type: E,
    variant: w = "text",
    ...y
  } = a, k = {
    ...a,
    color: l,
    component: u,
    disabled: d,
    disableElevation: h,
    disableFocusRipple: v,
    fullWidth: p,
    size: x,
    type: E,
    variant: w
  }, S = xd(k), _ = T && /* @__PURE__ */ L.jsx(Ed, {
    className: S.startIcon,
    ownerState: k,
    children: T
  }), j = C && /* @__PURE__ */ L.jsx(Rd, {
    className: S.endIcon,
    ownerState: k,
    children: C
  }), c = o || "";
  return /* @__PURE__ */ L.jsxs(Sd, {
    ownerState: k,
    className: xe(n.className, S.root, g, c),
    component: u,
    disabled: d,
    focusRipple: !v,
    focusVisibleClassName: xe(S.focusVisible, m),
    ref: r,
    type: E,
    ...y,
    classes: S,
    children: [_, s, j]
  });
});
process.env.NODE_ENV !== "production" && ($a.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: b.oneOfType([b.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), b.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: b.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: b.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: b.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: b.bool,
  /**
   * Element placed after the children.
   */
  endIcon: b.node,
  /**
   * @ignore
   */
  focusVisibleClassName: b.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: b.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: b.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: b.oneOfType([b.oneOf(["small", "medium", "large"]), b.string]),
  /**
   * Element placed before the children.
   */
  startIcon: b.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * @ignore
   */
  type: b.oneOfType([b.oneOf(["button", "reset", "submit"]), b.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: b.oneOfType([b.oneOf(["contained", "outlined", "text"]), b.string])
});
const Pe = {
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
}, ka = Pt($a, {
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
      return pn`
                    background: ${Pe.primary500};
                    color: ${Pe.gray100};
                `;
    case "secondary":
      return pn`
                    border: 1px solid ${Pe.primary500};
                    background: ${Pe.gray100};
                    color: ${Pe.primary500};
                `;
    default:
      return pn`
                    background: ${Pe.gray100};
                    color: ${Pe.gray700};
                `;
  }
}}
`;
function dt(e, t, r) {
  const n = typeof e.colSpan == "function" ? e.colSpan(r) : 1;
  if (Number.isInteger(n) && n > 1 && (!e.frozen || e.idx + n - 1 <= t))
    return n;
}
function Td(e) {
  e.stopPropagation();
}
function hn(e) {
  e == null || e.scrollIntoView({
    inline: "nearest",
    block: "nearest"
  });
}
function Or(e) {
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
const $d = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function wo(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function kd(e) {
  return wo(e) && e.keyCode !== 86 ? !1 : !$d.has(e.key);
}
function Od({
  key: e,
  target: t
}) {
  var r;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((r = t.closest(".rdg-editor-container")) == null ? void 0 : r.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const Id = "mlln6zg7-0-0-beta-47";
function Pd(e) {
  return e.map(({
    key: t,
    idx: r,
    minWidth: n,
    maxWidth: o
  }) => /* @__PURE__ */ L.jsx("div", {
    className: Id,
    style: {
      gridColumnStart: r + 1,
      minWidth: n,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function Ad({
  selectedPosition: e,
  columns: t,
  rows: r
}) {
  const n = t[e.idx], o = r[e.rowIdx];
  return Oa(n, o);
}
function Oa(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function _d({
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
    return dt(a, i, {
      type: "HEADER"
    });
  if (t && n > o && n <= s + o)
    return dt(a, i, {
      type: "SUMMARY",
      row: t[n + s]
    });
  if (n >= 0 && n < e.length) {
    const l = e[n];
    return dt(a, i, {
      type: "ROW",
      row: l
    });
  }
  if (r)
    return dt(a, i, {
      type: "SUMMARY",
      row: r[n - e.length]
    });
}
function Dd({
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
  maxRowIdx: g,
  currentPosition: {
    idx: d,
    rowIdx: h
  },
  nextPosition: v,
  lastFrozenColumnIndex: C,
  isCellWithinBounds: m
}) {
  let {
    idx: p,
    rowIdx: x
  } = v;
  const T = n.length, E = (k) => {
    for (const S of o) {
      const _ = S.idx;
      if (_ > p) break;
      const j = _d({
        rows: i,
        topSummaryRows: a,
        bottomSummaryRows: s,
        rowIdx: x,
        mainHeaderRowIdx: u,
        lastFrozenColumnIndex: C,
        column: S
      });
      if (j && p > _ && p < j + _) {
        p = _ + (k ? j : 0);
        break;
      }
    }
  }, w = (k) => k.level + u, y = () => {
    if (t) {
      let S = n[p].parent;
      for (; S !== void 0; ) {
        const _ = w(S);
        if (x === _) {
          p = S.idx + S.colSpan;
          break;
        }
        S = S.parent;
      }
    } else if (e) {
      let S = n[p].parent, _ = !1;
      for (; S !== void 0; ) {
        const j = w(S);
        if (x >= j) {
          p = S.idx, x = j, _ = !0;
          break;
        }
        S = S.parent;
      }
      _ || (p = d, x = h);
    }
  };
  if (m(v) && (E(t), x < u && y()), r === "CHANGE_ROW" && (p === T ? x === g || (p = 0, x += 1) : p === -1 && (x === l || (x -= 1, p = T - 1), E(!1))), x < u) {
    let S = n[p].parent;
    const _ = x;
    for (x = u; S !== void 0; ) {
      const j = w(S);
      j >= _ && (x = j, p = S.idx), S = S.parent;
    }
  }
  return {
    idx: p,
    rowIdx: x
  };
}
function Md({
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
const jd = "cj343x07-0-0-beta-47", Ia = `rdg-cell ${jd}`, Nd = "csofj7r7-0-0-beta-47", Fd = `rdg-cell-frozen ${Nd}`;
function Pa(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Aa(e, t, r) {
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
function Wr(e, t = 1) {
  const r = e.idx + 1;
  return {
    gridColumnStart: r,
    gridColumnEnd: r + t,
    insetInlineStart: e.frozen ? `var(--rdg-frozen-left-${e.idx})` : void 0
  };
}
function zn(e, ...t) {
  return xe(Ia, ...t, e.frozen && Fd);
}
const {
  min: jr,
  max: Sn,
  floor: ji,
  sign: zd,
  abs: Bd
} = Math;
function ao(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function _a(e, {
  minWidth: t,
  maxWidth: r
}) {
  return e = Sn(e, t), typeof r == "number" && r >= t ? jr(e, r) : e;
}
function Da(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const Ld = "c1bn88vv7-0-0-beta-47", Vd = `rdg-checkbox-input ${Ld}`;
function Wd({
  onChange: e,
  indeterminate: t,
  ...r
}) {
  function n(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ L.jsx("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: Vd,
    onChange: n,
    ...r
  });
}
function Ud(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const Ma = /* @__PURE__ */ Fr(void 0), Hd = Ma.Provider;
function ja() {
  return Wi(Ma);
}
const Kd = /* @__PURE__ */ Fr(void 0), Yd = Kd.Provider, Gd = /* @__PURE__ */ Fr(void 0), qd = Gd.Provider, Xd = /* @__PURE__ */ Fr(void 0), Jd = Xd.Provider, Qd = /* @__PURE__ */ Fr(void 0), Zd = Qd.Provider, Ni = "rdg-select-column", ef = "auto", tf = 50;
function rf({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: r,
  viewportWidth: n,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? ef, s = (t == null ? void 0 : t.minWidth) ?? tf, l = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? Ud, g = (t == null ? void 0 : t.sortable) ?? !1, d = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: v,
    colSpanColumns: C,
    lastFrozenColumnIndex: m,
    headerRowsCount: p
  } = It(() => {
    let S = -1, _ = 1;
    const j = [];
    c(e, 1);
    function c(D, P, K) {
      for (const q of D) {
        if ("children" in q) {
          const we = {
            name: q.name,
            parent: K,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: q.headerCellClass
          };
          c(q.children, P + 1, we);
          continue;
        }
        const ie = q.frozen ?? !1, ge = {
          ...q,
          parent: K,
          idx: 0,
          level: 0,
          frozen: ie,
          width: q.width ?? a,
          minWidth: q.minWidth ?? s,
          maxWidth: q.maxWidth ?? l,
          sortable: q.sortable ?? g,
          resizable: q.resizable ?? d,
          draggable: q.draggable ?? h,
          renderCell: q.renderCell ?? u
        };
        j.push(ge), ie && S++, P > _ && (_ = P);
      }
    }
    j.sort(({
      key: D,
      frozen: P
    }, {
      key: K,
      frozen: q
    }) => D === Ni ? -1 : K === Ni ? 1 : P ? q ? 0 : -1 : q ? 1 : 0);
    const $ = [];
    return j.forEach((D, P) => {
      D.idx = P, Na(D, P, 0), D.colSpan != null && $.push(D);
    }), {
      columns: j,
      colSpanColumns: $,
      lastFrozenColumnIndex: S,
      headerRowsCount: _
    };
  }, [e, a, s, l, u, d, g, h]), {
    templateColumns: x,
    layoutCssVars: T,
    totalFrozenColumnWidth: E,
    columnMetrics: w
  } = It(() => {
    const S = /* @__PURE__ */ new Map();
    let _ = 0, j = 0;
    const c = [];
    for (const D of v) {
      let P = r(D);
      typeof P == "number" ? P = _a(P, D) : P = D.minWidth, c.push(`${P}px`), S.set(D, {
        width: P,
        left: _
      }), _ += P;
    }
    if (m !== -1) {
      const D = S.get(v[m]);
      j = D.left + D.width;
    }
    const $ = {};
    for (let D = 0; D <= m; D++) {
      const P = v[D];
      $[`--rdg-frozen-left-${P.idx}`] = `${S.get(P).left}px`;
    }
    return {
      templateColumns: c,
      layoutCssVars: $,
      totalFrozenColumnWidth: j,
      columnMetrics: S
    };
  }, [r, v, m]), [y, k] = It(() => {
    if (!i)
      return [0, v.length - 1];
    const S = o + E, _ = o + n, j = v.length - 1, c = jr(m + 1, j);
    if (S >= _)
      return [c, c];
    let $ = c;
    for (; $ < j; ) {
      const {
        left: q,
        width: ie
      } = w.get(v[$]);
      if (q + ie > S)
        break;
      $++;
    }
    let D = $;
    for (; D < j; ) {
      const {
        left: q,
        width: ie
      } = w.get(v[D]);
      if (q + ie >= _)
        break;
      D++;
    }
    const P = Sn(c, $ - 1), K = jr(j, D + 1);
    return [P, K];
  }, [w, v, m, o, E, n, i]);
  return {
    columns: v,
    colSpanColumns: C,
    colOverscanStartIdx: y,
    colOverscanEndIdx: k,
    templateColumns: x,
    layoutCssVars: T,
    headerRowsCount: p,
    lastFrozenColumnIndex: m,
    totalFrozenColumnWidth: E
  };
}
function Na(e, t, r) {
  if (r < e.level && (e.level = r), e.parent !== void 0) {
    const {
      parent: n
    } = e;
    n.idx === -1 && (n.idx = t), n.colSpan += 1, Na(n, t, r - 1);
  }
}
const ur = typeof window > "u" ? So : Cs;
function nf(e, t, r, n, o, i, a, s, l, u) {
  const g = wt(o), d = e.length === t.length, h = d && o !== g.current, v = [...r], C = [];
  for (const {
    key: T,
    idx: E,
    width: w
  } of t)
    typeof w == "string" && (h || !a.has(T)) && !i.has(T) && (v[E] = w, C.push(T));
  const m = v.join(" ");
  ur(() => {
    g.current = o, p(C);
  });
  function p(T) {
    T.length !== 0 && l((E) => {
      const w = new Map(E);
      let y = !1;
      for (const k of T) {
        const S = Fi(n, k);
        y || (y = S !== E.get(k)), S === void 0 ? w.delete(k) : w.set(k, S);
      }
      return y ? w : E;
    });
  }
  function x(T, E) {
    const {
      key: w
    } = T, y = [...r], k = [];
    for (const {
      key: _,
      idx: j,
      width: c
    } of t)
      if (w === _) {
        const $ = typeof E == "number" ? `${E}px` : E;
        y[j] = $;
      } else d && typeof c == "string" && !i.has(_) && (y[j] = c, k.push(_));
    n.current.style.gridTemplateColumns = y.join(" ");
    const S = typeof E == "number" ? E : Fi(n, w);
    yn(() => {
      s((_) => {
        const j = new Map(_);
        return j.set(w, S), j;
      }), p(k);
    }), u == null || u(T.idx, S);
  }
  return {
    gridTemplateColumns: m,
    handleColumnResize: x
  };
}
function Fi(e, t) {
  var o;
  const r = `[data-measuring-cell-key="${CSS.escape(t)}"]`, n = (o = e.current) == null ? void 0 : o.querySelector(r);
  return n == null ? void 0 : n.getBoundingClientRect().width;
}
function of() {
  const e = wt(null), [t, r] = Ge(1), [n, o] = Ge(1), [i, a] = Ge(0);
  return ur(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: l,
      clientHeight: u,
      offsetWidth: g,
      offsetHeight: d
    } = e.current, {
      width: h,
      height: v
    } = e.current.getBoundingClientRect(), C = d - u, m = h - g + l, p = v - C;
    r(m), o(p), a(C);
    const x = new s((T) => {
      const E = T[0].contentBoxSize[0], {
        clientHeight: w,
        offsetHeight: y
      } = e.current;
      yn(() => {
        r(E.inlineSize), o(E.blockSize), a(y - w);
      });
    });
    return x.observe(e.current), () => {
      x.disconnect();
    };
  }, []), [e, t, n, i];
}
function rt(e) {
  const t = wt(e);
  So(() => {
    t.current = e;
  });
  const r = mn((...n) => {
    t.current(...n);
  }, []);
  return e && r;
}
function Bn(e) {
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
function af({
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
  const g = It(() => {
    if (i === 0) return 0;
    let d = i;
    const h = (v, C) => C !== void 0 && v + C > i ? (d = v, !0) : !1;
    for (const v of t) {
      const C = v.idx;
      if (C >= d || h(C, dt(v, s, {
        type: "HEADER"
      })))
        break;
      for (let m = l; m <= u; m++) {
        const p = r[m];
        if (h(C, dt(v, s, {
          type: "ROW",
          row: p
        })))
          break;
      }
      if (n != null) {
        for (const m of n)
          if (h(C, dt(v, s, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
      if (o != null) {
        for (const m of o)
          if (h(C, dt(v, s, {
            type: "SUMMARY",
            row: m
          })))
            break;
      }
    }
    return d;
  }, [l, u, r, n, o, i, s, t]);
  return It(() => {
    const d = [];
    for (let h = 0; h <= a; h++) {
      const v = e[h];
      h < g && !v.frozen || d.push(v);
    }
    return d;
  }, [g, a, e]);
}
function sf({
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
  } = It(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (p) => p * t,
        getRowHeight: () => t,
        findRowIdx: (p) => ji(p / t)
      };
    let h = 0, v = " ";
    const C = e.map((p) => {
      const x = t(p), T = {
        top: h,
        height: x
      };
      return v += `${x}px `, h += x, T;
    }), m = (p) => Sn(0, jr(e.length - 1, p));
    return {
      totalRowHeight: h,
      gridTemplateRows: v,
      getRowTop: (p) => C[m(p)].top,
      getRowHeight: (p) => C[m(p)].height,
      findRowIdx(p) {
        let x = 0, T = C.length - 1;
        for (; x <= T; ) {
          const E = x + ji((T - x) / 2), w = C[E].top;
          if (w === p) return E;
          if (w < p ? x = E + 1 : w > p && (T = E - 1), x > T) return T;
        }
        return 0;
      }
    };
  }, [t, e]);
  let g = 0, d = e.length - 1;
  if (o) {
    const v = u(n), C = u(n + r);
    g = Sn(0, v - 4), d = jr(e.length - 1, C + 4);
  }
  return {
    rowOverscanStartIdx: g,
    rowOverscanEndIdx: d,
    totalRowHeight: i,
    gridTemplateRows: a,
    getRowTop: s,
    getRowHeight: l,
    findRowIdx: u
  };
}
const cf = "c1w9bbhr7-0-0-beta-47", lf = "c1creorc7-0-0-beta-47", uf = `rdg-cell-drag-handle ${cf}`;
function df({
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
  onFill: g,
  onClick: d,
  setDragging: h,
  setDraggedOverRowIdx: v
}) {
  const {
    idx: C,
    rowIdx: m
  } = a;
  function p(y) {
    if (y.preventDefault(), y.buttons !== 1) return;
    h(!0), window.addEventListener("mouseover", k), window.addEventListener("mouseup", S);
    function k(_) {
      _.buttons !== 1 && S();
    }
    function S() {
      window.removeEventListener("mouseover", k), window.removeEventListener("mouseup", S), h(!1), x();
    }
  }
  function x() {
    const y = s.current;
    if (y === void 0) return;
    const k = m < y ? m + 1 : y, S = m < y ? y + 1 : m;
    E(k, S), v(void 0);
  }
  function T(y) {
    y.stopPropagation(), E(m + 1, t.length);
  }
  function E(y, k) {
    const S = t[m], _ = [...t], j = [];
    for (let c = y; c < k; c++)
      if (l({
        rowIdx: c,
        idx: C
      })) {
        const $ = g({
          columnKey: r.key,
          sourceRow: S,
          targetRow: t[c]
        });
        $ !== t[c] && (_[c] = $, j.push(c));
      }
    j.length > 0 && (u == null || u(_, {
      indexes: j,
      column: r
    }));
  }
  function w() {
    var c;
    const y = ((c = r.colSpan) == null ? void 0 : c.call(r, {
      type: "ROW",
      row: t[m]
    })) ?? 1, {
      insetInlineStart: k,
      ...S
    } = Wr(r, y), _ = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)", j = r.idx + y - 1 === o;
    return {
      ...S,
      gridRowStart: e,
      marginInlineEnd: j ? void 0 : _,
      marginBlockEnd: i ? void 0 : _,
      insetInlineStart: k ? `calc(${k} + ${n}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
  }
  return /* @__PURE__ */ L.jsx("div", {
    style: w(),
    className: xe(uf, r.frozen && lf),
    onClick: d,
    onMouseDown: p,
    onDoubleClick: T
  });
}
const ff = "cis5rrm7-0-0-beta-47";
function pf({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  onRowChange: o,
  closeEditor: i,
  onKeyDown: a,
  navigate: s
}) {
  var x, T, E;
  const l = wt(void 0), u = ((x = e.editorOptions) == null ? void 0 : x.commitOnOutsideClick) !== !1, g = rt(() => {
    v(!0, !1);
  });
  So(() => {
    if (!u) return;
    function w() {
      l.current = requestAnimationFrame(g);
    }
    return addEventListener("mousedown", w, {
      capture: !0
    }), () => {
      removeEventListener("mousedown", w, {
        capture: !0
      }), d();
    };
  }, [u, g]);
  function d() {
    cancelAnimationFrame(l.current);
  }
  function h(w) {
    if (a) {
      const y = Or(w);
      if (a({
        mode: "EDIT",
        row: r,
        column: e,
        rowIdx: n,
        navigate() {
          s(w);
        },
        onClose: v
      }, y), y.isGridDefaultPrevented()) return;
    }
    w.key === "Escape" ? v() : w.key === "Enter" ? v(!0) : Od(w) && s(w);
  }
  function v(w = !1, y = !0) {
    w ? o(r, !0, y) : i(y);
  }
  function C(w, y = !1) {
    o(w, y, y);
  }
  const {
    cellClass: m
  } = e, p = zn(e, "rdg-editor-container", typeof m == "function" ? m(r) : m, !((T = e.editorOptions) != null && T.displayCellContent) && ff);
  return /* @__PURE__ */ L.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: p,
    style: Wr(e, t),
    onKeyDown: h,
    onMouseDownCapture: d,
    children: e.renderEditCell != null && /* @__PURE__ */ L.jsxs(L.Fragment, {
      children: [e.renderEditCell({
        column: e,
        row: r,
        rowIdx: n,
        onRowChange: C,
        onClose: v
      }), ((E = e.editorOptions) == null ? void 0 : E.displayCellContent) && e.renderCell({
        column: e,
        row: r,
        rowIdx: n,
        isCellEditable: !0,
        tabIndex: -1,
        onRowChange: C
      })]
    })
  });
}
function gf({
  column: e,
  rowIdx: t,
  isCellSelected: r,
  selectCell: n
}) {
  const {
    tabIndex: o,
    onFocus: i
  } = Bn(r), {
    colSpan: a
  } = e, s = Da(e, t), l = e.idx + 1;
  function u() {
    n({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "columnheader",
    "aria-colindex": l,
    "aria-colspan": a,
    "aria-rowspan": s,
    "aria-selected": r,
    tabIndex: o,
    className: xe(Ia, e.headerCellClass),
    style: {
      ...Aa(e, t, s),
      gridColumnStart: l,
      gridColumnEnd: l + a
    },
    onFocus: i,
    onClick: u,
    children: e.name
  });
}
const hf = "h44jtk67-0-0-beta-47", mf = "hcgkhxz7-0-0-beta-47", yf = `rdg-header-sort-name ${mf}`;
function bf({
  column: e,
  sortDirection: t,
  priority: r
}) {
  return e.sortable ? /* @__PURE__ */ L.jsx(vf, {
    sortDirection: t,
    priority: r,
    children: e.name
  }) : e.name;
}
function vf({
  sortDirection: e,
  priority: t,
  children: r
}) {
  const n = ja().renderSortStatus;
  return /* @__PURE__ */ L.jsxs("span", {
    className: hf,
    children: [/* @__PURE__ */ L.jsx("span", {
      className: yf,
      children: r
    }), /* @__PURE__ */ L.jsx("span", {
      children: n({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const Cf = "c6l2wv17-0-0-beta-47", wf = "c1kqdw7y7-0-0-beta-47", xf = `rdg-cell-resizable ${wf}`, Sf = "r1y6ywlx7-0-0-beta-47", Ef = "rdg-cell-draggable", Rf = "c1bezg5o7-0-0-beta-47", Tf = `rdg-cell-dragging ${Rf}`, $f = "c1vc96037-0-0-beta-47", kf = `rdg-cell-drag-over ${$f}`;
function Of({
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
  direction: g,
  dragDropKey: d
}) {
  const [h, v] = Ge(!1), [C, m] = Ge(!1), p = g === "rtl", x = Da(e, r), {
    tabIndex: T,
    childTabIndex: E,
    onFocus: w
  } = Bn(n), y = a == null ? void 0 : a.findIndex((N) => N.columnKey === e.key), k = y !== void 0 && y > -1 ? a[y] : void 0, S = k == null ? void 0 : k.direction, _ = k !== void 0 && a.length > 1 ? y + 1 : void 0, j = S && !_ ? S === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: c,
    resizable: $,
    draggable: D
  } = e, P = zn(e, e.headerCellClass, c && Cf, $ && xf, D && Ef, h && Tf, C && kf), K = e.renderHeaderCell ?? bf;
  function q(N) {
    if (N.pointerType === "mouse" && N.buttons !== 1)
      return;
    N.preventDefault();
    const {
      currentTarget: U,
      pointerId: ee
    } = N, Z = U.parentElement, {
      right: Te,
      left: F
    } = Z.getBoundingClientRect(), Ae = p ? N.clientX - F : Te - N.clientX;
    let H = !1;
    function je(qe) {
      const {
        width: We,
        right: Bt,
        left: ht
      } = Z.getBoundingClientRect();
      let st = p ? Bt + Ae - qe.clientX : qe.clientX + Ae - ht;
      st = _a(st, e), We > 0 && st !== We && o(e, st);
    }
    function Ve() {
      H = !0, o(e, "max-content");
    }
    function at(qe) {
      H || je(qe), U.removeEventListener("pointermove", je), U.removeEventListener("dblclick", Ve), U.removeEventListener("lostpointercapture", at);
    }
    U.setPointerCapture(ee), U.addEventListener("pointermove", je), U.addEventListener("dblclick", Ve), U.addEventListener("lostpointercapture", at);
  }
  function ie(N) {
    if (s == null) return;
    const {
      sortDescendingFirst: U
    } = e;
    if (k === void 0) {
      const ee = {
        columnKey: e.key,
        direction: U ? "DESC" : "ASC"
      };
      s(a && N ? [...a, ee] : [ee]);
    } else {
      let ee;
      if ((U === !0 && S === "DESC" || U !== !0 && S === "ASC") && (ee = {
        columnKey: e.key,
        direction: S === "ASC" ? "DESC" : "ASC"
      }), N) {
        const Z = [...a];
        ee ? Z[y] = ee : Z.splice(y, 1), s(Z);
      } else
        s(ee ? [ee] : []);
    }
  }
  function ge(N) {
    l({
      idx: e.idx,
      rowIdx: r
    }), c && ie(N.ctrlKey || N.metaKey);
  }
  function we(N) {
    w == null || w(N), u && l({
      idx: 0,
      rowIdx: r
    });
  }
  function ce(N) {
    (N.key === " " || N.key === "Enter") && (N.preventDefault(), ie(N.ctrlKey || N.metaKey));
  }
  function A(N) {
    N.dataTransfer.setData(d, e.key), N.dataTransfer.dropEffect = "move", v(!0);
  }
  function z() {
    v(!1);
  }
  function ne(N) {
    N.preventDefault(), N.dataTransfer.dropEffect = "move";
  }
  function oe(N) {
    if (m(!1), N.dataTransfer.types.includes(d.toLowerCase())) {
      const U = N.dataTransfer.getData(d.toLowerCase());
      U !== e.key && (N.preventDefault(), i == null || i(U, e.key));
    }
  }
  function V(N) {
    zi(N) && m(!0);
  }
  function ae(N) {
    zi(N) && m(!1);
  }
  let X;
  return D && (X = {
    draggable: !0,
    onDragStart: A,
    onDragEnd: z,
    onDragOver: ne,
    onDragEnter: V,
    onDragLeave: ae,
    onDrop: oe
  }), /* @__PURE__ */ L.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": x,
    "aria-selected": n,
    "aria-sort": j,
    tabIndex: u ? 0 : T,
    className: P,
    style: {
      ...Aa(e, r, x),
      ...Wr(e, t)
    },
    onFocus: we,
    onClick: ge,
    onKeyDown: c ? ce : void 0,
    ...X,
    children: [K({
      column: e,
      sortDirection: S,
      priority: _,
      tabIndex: E
    }), $ && /* @__PURE__ */ L.jsx("div", {
      className: Sf,
      onClick: Td,
      onPointerDown: q
    })]
  });
}
function zi(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const If = "r1upfr807-0-0-beta-47", Fa = `rdg-row ${If}`, Pf = "r190mhd37-0-0-beta-47", Bo = "rdg-row-selected", Af = "r139qu9m7-0-0-beta-47", _f = "rdg-top-summary-row", Df = "rdg-bottom-summary-row", Mf = "h10tskcx7-0-0-beta-47", za = `rdg-header-row ${Mf}`;
function jf({
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
  direction: g
}) {
  const d = ws(), h = [];
  for (let v = 0; v < t.length; v++) {
    const C = t[v], m = dt(C, a, {
      type: "HEADER"
    });
    m !== void 0 && (v += m - 1), h.push(/* @__PURE__ */ L.jsx(Of, {
      column: C,
      colSpan: m,
      rowIdx: e,
      isCellSelected: s === C.idx,
      onColumnResize: r,
      onColumnsReorder: n,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: l,
      shouldFocusGrid: u && v === 0,
      direction: g,
      dragDropKey: d
    }, C.key));
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: xe(za, s === -1 && Bo),
    children: h
  });
}
const Nf = /* @__PURE__ */ dr(jf);
function Ff({
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
        i.push(/* @__PURE__ */ L.jsx(gf, {
          column: l,
          rowIdx: e,
          isCellSelected: n === u,
          selectCell: o
        }, u));
      }
    }
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: za,
    children: i
  });
}
const zf = /* @__PURE__ */ dr(Ff), Bf = "c6ra8a37-0-0-beta-47", Lf = `rdg-cell-copied ${Bf}`, Vf = "cq910m07-0-0-beta-47", Wf = `rdg-cell-dragged-over ${Vf}`;
function Uf({
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
  onRowChange: g,
  selectCell: d,
  ...h
}) {
  const {
    tabIndex: v,
    childTabIndex: C,
    onFocus: m
  } = Bn(r), {
    cellClass: p
  } = e, x = zn(e, typeof p == "function" ? p(i) : p, n && Lf, o && Wf), T = Oa(e, i);
  function E(_) {
    d({
      rowIdx: a,
      idx: e.idx
    }, _);
  }
  function w(_) {
    if (s) {
      const j = Or(_);
      if (s({
        row: i,
        column: e,
        selectCell: E
      }, j), j.isGridDefaultPrevented()) return;
    }
    E();
  }
  function y(_) {
    if (u) {
      const j = Or(_);
      if (u({
        row: i,
        column: e,
        selectCell: E
      }, j), j.isGridDefaultPrevented()) return;
    }
    E();
  }
  function k(_) {
    if (l) {
      const j = Or(_);
      if (l({
        row: i,
        column: e,
        selectCell: E
      }, j), j.isGridDefaultPrevented()) return;
    }
    E(!0);
  }
  function S(_) {
    g(e, _);
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": r,
    "aria-readonly": !T || void 0,
    tabIndex: v,
    className: x,
    style: Wr(e, t),
    onClick: w,
    onDoubleClick: k,
    onContextMenu: y,
    onFocus: m,
    ...h,
    children: e.renderCell({
      column: e,
      row: i,
      rowIdx: a,
      isCellEditable: T,
      tabIndex: C,
      onRowChange: S
    })
  });
}
const Hf = /* @__PURE__ */ dr(Uf);
function Kf({
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
  viewportColumns: g,
  selectedCellEditor: d,
  onCellClick: h,
  onCellDoubleClick: v,
  onCellContextMenu: C,
  rowClass: m,
  setDraggedOverRowIdx: p,
  onMouseEnter: x,
  onRowChange: T,
  selectCell: E,
  ...w
}, y) {
  const k = rt((c, $) => {
    T(c, t, $);
  });
  function S(c) {
    p == null || p(t), x == null || x(c);
  }
  e = xe(Fa, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, m == null ? void 0 : m(u, t), e, n === -1 && Bo);
  const _ = [];
  for (let c = 0; c < g.length; c++) {
    const $ = g[c], {
      idx: D
    } = $, P = dt($, l, {
      type: "ROW",
      row: u
    });
    P !== void 0 && (c += P - 1);
    const K = n === D;
    K && d ? _.push(d) : _.push(/* @__PURE__ */ L.jsx(Hf, {
      column: $,
      colSpan: P,
      row: u,
      rowIdx: t,
      isCopied: a === D,
      isDraggedOver: s === D,
      isCellSelected: K,
      onClick: h,
      onDoubleClick: v,
      onContextMenu: C,
      onRowChange: k,
      selectCell: E
    }, $.key));
  }
  const j = It(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ L.jsx(Yd, {
    value: j,
    children: /* @__PURE__ */ L.jsx("div", {
      role: "row",
      ref: y,
      className: e,
      onMouseEnter: S,
      style: Pa(r),
      ...w,
      children: _
    })
  });
}
const Yf = /* @__PURE__ */ dr(/* @__PURE__ */ xo(Kf));
function Gf(e, t) {
  return /* @__PURE__ */ L.jsx(Yf, {
    ...t
  }, e);
}
function qf({
  scrollToPosition: {
    idx: e,
    rowIdx: t
  },
  gridElement: r,
  setScrollToCellPosition: n
}) {
  const o = wt(null);
  return ur(() => {
    hn(o.current);
  }), ur(() => {
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
  }, [r, n]), /* @__PURE__ */ L.jsx("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Xf = "a3ejtar7-0-0-beta-47", Jf = `rdg-sort-arrow ${Xf}`;
function Qf({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ L.jsxs(L.Fragment, {
    children: [Zf({
      sortDirection: e
    }), ep({
      priority: t
    })]
  });
}
function Zf({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ L.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: Jf,
    "aria-hidden": !0,
    children: /* @__PURE__ */ L.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function ep({
  priority: e
}) {
  return e;
}
const tp = "rnvodz57-0-0-beta-47", rp = `rdg ${tp}`, np = "vlqv91k7-0-0-beta-47", op = `rdg-viewport-dragging ${np}`, ip = "f1lsfrzw7-0-0-beta-47", ap = "f1cte0lg7-0-0-beta-47", sp = "s8wc6fl7-0-0-beta-47";
function cp({
  column: e,
  colSpan: t,
  row: r,
  rowIdx: n,
  isCellSelected: o,
  selectCell: i
}) {
  var h;
  const {
    tabIndex: a,
    childTabIndex: s,
    onFocus: l
  } = Bn(o), {
    summaryCellClass: u
  } = e, g = zn(e, sp, typeof u == "function" ? u(r) : u);
  function d() {
    i({
      rowIdx: n,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: a,
    className: g,
    style: Wr(e, t),
    onClick: d,
    onFocus: l,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: r,
      tabIndex: s
    })
  });
}
const lp = /* @__PURE__ */ dr(cp), up = "skuhp557-0-0-beta-47", dp = "tf8l5ub7-0-0-beta-47", fp = `rdg-summary-row ${up}`;
function pp({
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
  "aria-rowindex": g
}) {
  const d = [];
  for (let h = 0; h < n.length; h++) {
    const v = n[h], C = dt(v, a, {
      type: "SUMMARY",
      row: r
    });
    C !== void 0 && (h += C - 1);
    const m = s === v.idx;
    d.push(/* @__PURE__ */ L.jsx(lp, {
      column: v,
      colSpan: C,
      row: r,
      rowIdx: e,
      isCellSelected: m,
      selectCell: u
    }, v.key));
  }
  return /* @__PURE__ */ L.jsx("div", {
    role: "row",
    "aria-rowindex": g,
    className: xe(Fa, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, fp, l ? `${_f} ${dp}` : Df, s === -1 && Bo),
    style: {
      ...Pa(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: d
  });
}
const Bi = /* @__PURE__ */ dr(pp);
function gp(e, t) {
  const {
    columns: r,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: i,
    rowKeyGetter: a,
    onRowsChange: s,
    rowHeight: l,
    headerRowHeight: u,
    summaryRowHeight: g,
    selectedRows: d,
    isRowSelectionDisabled: h,
    onSelectedRowsChange: v,
    sortColumns: C,
    onSortColumnsChange: m,
    defaultColumnOptions: p,
    onCellClick: x,
    onCellDoubleClick: T,
    onCellContextMenu: E,
    onCellKeyDown: w,
    onSelectedCellChange: y,
    onScroll: k,
    onColumnResize: S,
    onColumnsReorder: _,
    onFill: j,
    onCopy: c,
    onPaste: $,
    enableVirtualization: D,
    renderers: P,
    className: K,
    style: q,
    rowClass: ie,
    direction: ge,
    role: we,
    "aria-label": ce,
    "aria-labelledby": A,
    "aria-describedby": z,
    "aria-rowcount": ne,
    "data-testid": oe
  } = e, V = ja(), ae = we ?? "grid", X = l ?? 35, N = u ?? (typeof X == "number" ? X : 35), U = g ?? (typeof X == "number" ? X : 35), ee = (P == null ? void 0 : P.renderRow) ?? (V == null ? void 0 : V.renderRow) ?? Gf, Z = (P == null ? void 0 : P.renderSortStatus) ?? (V == null ? void 0 : V.renderSortStatus) ?? Qf, Te = (P == null ? void 0 : P.renderCheckbox) ?? (V == null ? void 0 : V.renderCheckbox) ?? Wd, F = (P == null ? void 0 : P.noRowsFallback) ?? (V == null ? void 0 : V.noRowsFallback), Ae = D ?? !0, H = ge ?? "ltr", [je, Ve] = Ge(0), [at, qe] = Ge(0), [We, Bt] = Ge(() => /* @__PURE__ */ new Map()), [ht, st] = Ge(() => /* @__PURE__ */ new Map()), [te, Lt] = Ge(null), [Vt, Wt] = Ge(!1), [ct, Ln] = Ge(void 0), [pt, hr] = Ge(null), qt = mn((I) => We.get(I.key) ?? ht.get(I.key) ?? I.width, [ht, We]), [_t, Ur, Hr, Vn] = of(), {
    columns: Be,
    colSpanColumns: Kr,
    lastFrozenColumnIndex: Xe,
    headerRowsCount: gt,
    colOverscanStartIdx: Yr,
    colOverscanEndIdx: Et,
    templateColumns: mr,
    layoutCssVars: yr,
    totalFrozenColumnWidth: Gr
  } = rf({
    rawColumns: r,
    defaultColumnOptions: p,
    getColumnWidth: qt,
    scrollLeft: at,
    viewportWidth: Ur,
    enableVirtualization: Ae
  }), Ut = (o == null ? void 0 : o.length) ?? 0, Rt = (i == null ? void 0 : i.length) ?? 0, qr = Ut + Rt, Tt = gt + Ut, Xt = gt - 1, Ye = -Tt, Jt = Ye + Xt, mt = n.length + Rt - 1, [Y, Dt] = Ge(() => ({
    idx: -1,
    rowIdx: Ye - 1,
    mode: "SELECT"
  })), br = wt(Y), Xr = wt(ct), Jr = wt(-1), f = wt(null), O = wt(!1), B = ae === "treegrid", re = gt * N, fe = qr * U, pe = Hr - re - fe, le = d != null && v != null, se = H === "rtl", Ue = se ? "ArrowRight" : "ArrowLeft", $e = se ? "ArrowLeft" : "ArrowRight", Oe = ne ?? gt + n.length + qr, Je = It(() => ({
    renderCheckbox: Te,
    renderSortStatus: Z
  }), [Te, Z]), Mt = It(() => {
    let I = !1, M = !1;
    if (a != null && d != null && d.size > 0) {
      for (const G of n)
        if (d.has(a(G)) ? I = !0 : M = !0, I && M) break;
    }
    return {
      isRowSelected: I && !M,
      isIndeterminate: I && M
    };
  }, [n, d, a]), {
    rowOverscanStartIdx: et,
    rowOverscanEndIdx: Fe,
    totalRowHeight: Ht,
    gridTemplateRows: Wn,
    getRowTop: Qr,
    getRowHeight: Va,
    findRowIdx: Vo
  } = sf({
    rows: n,
    rowHeight: X,
    clientHeight: pe,
    scrollTop: je,
    enableVirtualization: Ae
  }), jt = af({
    columns: Be,
    colSpanColumns: Kr,
    colOverscanStartIdx: Yr,
    colOverscanEndIdx: Et,
    lastFrozenColumnIndex: Xe,
    rowOverscanStartIdx: et,
    rowOverscanEndIdx: Fe,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: Wa,
    handleColumnResize: Ua
  } = nf(Be, jt, mr, _t, Ur, We, ht, Bt, st, S), Ha = B ? -1 : 0, Qt = Be.length - 1, Un = Yn(Y), Zr = Yo(Y), Ka = N + Ht + fe + Vn, Ya = rt(Ua), Ga = rt(_), qa = rt(m), Xa = rt(x), Ja = rt(T), Qa = rt(E), Za = rt(rs), es = rt(Uo), ts = rt(en), Hn = rt(vr), Wo = rt(({
    idx: I,
    rowIdx: M
  }) => {
    vr({
      rowIdx: Ye + M - 1,
      idx: I
    });
  });
  ur(() => {
    if (!Un || so(Y, br.current)) {
      br.current = Y;
      return;
    }
    br.current = Y, Y.idx === -1 && (f.current.focus({
      preventScroll: !0
    }), hn(f.current));
  }), ur(() => {
    O.current && (O.current = !1, qo());
  }), vs(t, () => ({
    element: _t.current,
    scrollToCell({
      idx: I,
      rowIdx: M
    }) {
      const G = I !== void 0 && I > Xe && I < Be.length ? I : void 0, J = M !== void 0 && Zt(M) ? M : void 0;
      (G !== void 0 || J !== void 0) && hr({
        idx: G,
        rowIdx: J
      });
    },
    selectCell: vr
  }));
  const Kn = mn((I) => {
    Ln(I), Xr.current = I;
  }, []);
  function rs(I) {
    if (!v) return;
    ao(a);
    const M = new Set(d);
    for (const G of n) {
      if ((h == null ? void 0 : h(G)) === !0) continue;
      const J = a(G);
      I.checked ? M.add(J) : M.delete(J);
    }
    v(M);
  }
  function Uo(I) {
    if (!v) return;
    ao(a);
    const {
      row: M,
      checked: G,
      isShiftClick: J
    } = I;
    if ((h == null ? void 0 : h(M)) === !0) return;
    const de = new Set(d), Se = a(M), Ie = Jr.current, _e = n.indexOf(M);
    if (Jr.current = _e, G ? de.add(Se) : de.delete(Se), J && Ie !== -1 && Ie !== _e && Ie < n.length) {
      const tt = zd(_e - Ie);
      for (let Qe = Ie + tt; Qe !== _e; Qe += tt) {
        const yt = n[Qe];
        (h == null ? void 0 : h(yt)) !== !0 && (G ? de.add(a(yt)) : de.delete(a(yt)));
      }
    }
    v(de);
  }
  function ns(I) {
    var _e;
    const {
      idx: M,
      rowIdx: G,
      mode: J
    } = Y;
    if (J === "EDIT") return;
    if (w && Zt(G)) {
      const tt = n[G], Qe = Or(I);
      if (w({
        mode: "SELECT",
        row: tt,
        column: Be[M],
        rowIdx: G,
        selectCell: vr
      }, Qe), Qe.isGridDefaultPrevented()) return;
    }
    if (!(I.target instanceof Element)) return;
    const de = I.target.closest(".rdg-cell") !== null, Se = B && I.target === f.current;
    if (!de && !Se) return;
    const {
      keyCode: Ie
    } = I;
    if (Zr && ($ != null || c != null) && wo(I)) {
      if (Ie === 67) {
        if (((_e = window.getSelection()) == null ? void 0 : _e.isCollapsed) === !1) return;
        is();
        return;
      }
      if (Ie === 86) {
        as();
        return;
      }
    }
    switch (I.key) {
      case "Escape":
        Lt(null);
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
        Go(I);
        break;
      default:
        ss(I);
        break;
    }
  }
  function os(I) {
    const {
      scrollTop: M,
      scrollLeft: G
    } = I.currentTarget;
    yn(() => {
      Ve(M), qe(Bd(G));
    }), k == null || k(I);
  }
  function en(I, M, G) {
    if (typeof s != "function" || G === n[M]) return;
    const J = [...n];
    J[M] = G, s(J, {
      indexes: [M],
      column: I
    });
  }
  function Ho() {
    Y.mode === "EDIT" && en(Be[Y.idx], Y.rowIdx, Y.row);
  }
  function is() {
    const {
      idx: I,
      rowIdx: M
    } = Y, G = n[M], J = Be[I].key;
    Lt({
      row: G,
      columnKey: J
    }), c == null || c({
      sourceRow: G,
      sourceColumnKey: J
    });
  }
  function as() {
    if (!$ || !s || te === null || !tn(Y))
      return;
    const {
      idx: I,
      rowIdx: M
    } = Y, G = Be[I], J = n[M], de = $({
      sourceRow: te.row,
      sourceColumnKey: te.columnKey,
      targetRow: J,
      targetColumnKey: G.key
    });
    en(G, M, de);
  }
  function ss(I) {
    if (!Zr) return;
    const M = n[Y.rowIdx], {
      key: G,
      shiftKey: J
    } = I;
    if (le && J && G === " ") {
      ao(a);
      const de = a(M);
      Uo({
        row: M,
        checked: !d.has(de),
        isShiftClick: !1
      }), I.preventDefault();
      return;
    }
    tn(Y) && kd(I) && Dt(({
      idx: de,
      rowIdx: Se
    }) => ({
      idx: de,
      rowIdx: Se,
      mode: "EDIT",
      row: M,
      originalRow: M
    }));
  }
  function Ko(I) {
    return I >= Ha && I <= Qt;
  }
  function Zt(I) {
    return I >= 0 && I < n.length;
  }
  function Yn({
    idx: I,
    rowIdx: M
  }) {
    return M >= Ye && M <= mt && Ko(I);
  }
  function cs({
    idx: I,
    rowIdx: M
  }) {
    return Zt(M) && I >= 0 && I <= Qt;
  }
  function Yo({
    idx: I,
    rowIdx: M
  }) {
    return Zt(M) && Ko(I);
  }
  function tn(I) {
    return cs(I) && Ad({
      columns: Be,
      rows: n,
      selectedPosition: I
    });
  }
  function vr(I, M) {
    if (!Yn(I)) return;
    Ho();
    const G = n[I.rowIdx], J = so(Y, I);
    M && tn(I) ? Dt({
      ...I,
      mode: "EDIT",
      row: G,
      originalRow: G
    }) : J ? hn(Li(_t.current)) : (O.current = !0, Dt({
      ...I,
      mode: "SELECT"
    })), y && !J && y({
      rowIdx: I.rowIdx,
      row: G,
      column: Be[I.idx]
    });
  }
  function ls(I, M, G) {
    const {
      idx: J,
      rowIdx: de
    } = Y, Se = Un && J === -1;
    switch (I) {
      case "ArrowUp":
        return {
          idx: J,
          rowIdx: de - 1
        };
      case "ArrowDown":
        return {
          idx: J,
          rowIdx: de + 1
        };
      case Ue:
        return {
          idx: J - 1,
          rowIdx: de
        };
      case $e:
        return {
          idx: J + 1,
          rowIdx: de
        };
      case "Tab":
        return {
          idx: J + (G ? -1 : 1),
          rowIdx: de
        };
      case "Home":
        return Se ? {
          idx: J,
          rowIdx: Ye
        } : {
          idx: 0,
          rowIdx: M ? Ye : de
        };
      case "End":
        return Se ? {
          idx: J,
          rowIdx: mt
        } : {
          idx: Qt,
          rowIdx: M ? mt : de
        };
      case "PageUp": {
        if (Y.rowIdx === Ye) return Y;
        const Ie = Qr(de) + Va(de) - pe;
        return {
          idx: J,
          rowIdx: Ie > 0 ? Vo(Ie) : 0
        };
      }
      case "PageDown": {
        if (Y.rowIdx >= n.length) return Y;
        const Ie = Qr(de) + pe;
        return {
          idx: J,
          rowIdx: Ie < Ht ? Vo(Ie) : n.length - 1
        };
      }
      default:
        return Y;
    }
  }
  function Go(I) {
    const {
      key: M,
      shiftKey: G
    } = I;
    let J = "NONE";
    if (M === "Tab") {
      if (Md({
        shiftKey: G,
        maxColIdx: Qt,
        minRowIdx: Ye,
        maxRowIdx: mt,
        selectedPosition: Y
      })) {
        Ho();
        return;
      }
      J = "CHANGE_ROW";
    }
    I.preventDefault();
    const de = wo(I), Se = ls(M, de, G);
    if (so(Y, Se)) return;
    const Ie = Dd({
      moveUp: M === "ArrowUp",
      moveNext: M === $e || M === "Tab" && !G,
      columns: Be,
      colSpanColumns: Kr,
      rows: n,
      topSummaryRows: o,
      bottomSummaryRows: i,
      minRowIdx: Ye,
      mainHeaderRowIdx: Jt,
      maxRowIdx: mt,
      lastFrozenColumnIndex: Xe,
      cellNavigationMode: J,
      currentPosition: Y,
      nextPosition: Se,
      isCellWithinBounds: Yn
    });
    vr(Ie);
  }
  function us(I) {
    if (ct === void 0) return;
    const {
      rowIdx: M
    } = Y;
    return (M < ct ? M < I && I <= ct : M > I && I >= ct) ? Y.idx : void 0;
  }
  function qo() {
    const I = Li(_t.current);
    if (I === null) return;
    hn(I), (I.querySelector('[tabindex="0"]') ?? I).focus({
      preventScroll: !0
    });
  }
  function ds() {
    if (j == null || Y.mode === "EDIT" || !Yo(Y))
      return;
    const {
      idx: I,
      rowIdx: M
    } = Y, G = Be[I];
    if (G.renderEditCell == null || G.editable === !1)
      return;
    const J = qt(G);
    return /* @__PURE__ */ L.jsx(df, {
      gridRowStart: Tt + M + 1,
      rows: n,
      column: G,
      columnWidth: J,
      maxColIdx: Qt,
      isLastRow: M === mt,
      selectedPosition: Y,
      isCellEditable: tn,
      latestDraggedOverRowIdx: Xr,
      onRowsChange: s,
      onClick: qo,
      onFill: j,
      setDragging: Wt,
      setDraggedOverRowIdx: Kn
    });
  }
  function fs(I) {
    if (Y.rowIdx !== I || Y.mode === "SELECT") return;
    const {
      idx: M,
      row: G
    } = Y, J = Be[M], de = dt(J, Xe, {
      type: "ROW",
      row: G
    }), Se = (_e) => {
      O.current = _e, Dt(({
        idx: tt,
        rowIdx: Qe
      }) => ({
        idx: tt,
        rowIdx: Qe,
        mode: "SELECT"
      }));
    }, Ie = (_e, tt, Qe) => {
      tt ? yn(() => {
        en(J, Y.rowIdx, _e), Se(Qe);
      }) : Dt((yt) => ({
        ...yt,
        row: _e
      }));
    };
    return n[Y.rowIdx] !== Y.originalRow && Se(!1), /* @__PURE__ */ L.jsx(pf, {
      column: J,
      colSpan: de,
      row: G,
      rowIdx: I,
      onRowChange: Ie,
      closeEditor: Se,
      onKeyDown: w,
      navigate: Go
    }, J.key);
  }
  function Cr(I) {
    const M = Y.idx === -1 ? void 0 : Be[Y.idx];
    return M !== void 0 && Y.rowIdx === I && !jt.includes(M) ? Y.idx > Et ? [...jt, M] : [...jt.slice(0, Xe + 1), M, ...jt.slice(Xe + 1)] : jt;
  }
  function ps() {
    const I = [], {
      idx: M,
      rowIdx: G
    } = Y, J = Zr && G < et ? et - 1 : et, de = Zr && G > Fe ? Fe + 1 : Fe;
    for (let Se = J; Se <= de; Se++) {
      const Ie = Se === et - 1 || Se === Fe + 1, _e = Ie ? G : Se;
      let tt = jt;
      const Qe = M === -1 ? void 0 : Be[M];
      Qe !== void 0 && (Ie ? tt = [Qe] : tt = Cr(_e));
      const yt = n[_e], gs = Tt + _e + 1;
      let Gn = _e, qn = !1;
      typeof a == "function" && (Gn = a(yt), qn = (d == null ? void 0 : d.has(Gn)) ?? !1), I.push(ee(Gn, {
        "aria-rowindex": Tt + _e + 1,
        "aria-selected": le ? qn : void 0,
        rowIdx: _e,
        row: yt,
        viewportColumns: tt,
        isRowSelectionDisabled: (h == null ? void 0 : h(yt)) ?? !1,
        isRowSelected: qn,
        onCellClick: Xa,
        onCellDoubleClick: Ja,
        onCellContextMenu: Qa,
        rowClass: ie,
        gridRowStart: gs,
        copiedCellIdx: te !== null && te.row === yt ? Be.findIndex((hs) => hs.key === te.columnKey) : void 0,
        selectedCellIdx: G === _e ? M : void 0,
        draggedOverCellIdx: us(_e),
        setDraggedOverRowIdx: Vt ? Kn : void 0,
        lastFrozenColumnIndex: Xe,
        onRowChange: ts,
        selectCell: Hn,
        selectedCellEditor: fs(_e)
      }));
    }
    return I;
  }
  (Y.idx > Qt || Y.rowIdx > mt) && (Dt({
    idx: -1,
    rowIdx: Ye - 1,
    mode: "SELECT"
  }), Kn(void 0));
  let rn = `repeat(${gt}, ${N}px)`;
  Ut > 0 && (rn += ` repeat(${Ut}, ${U}px)`), n.length > 0 && (rn += Wn), Rt > 0 && (rn += ` repeat(${Rt}, ${U}px)`);
  const Xo = Y.idx === -1 && Y.rowIdx !== Ye - 1;
  return /* @__PURE__ */ L.jsxs("div", {
    role: ae,
    "aria-label": ce,
    "aria-labelledby": A,
    "aria-describedby": z,
    "aria-multiselectable": le ? !0 : void 0,
    "aria-colcount": Be.length,
    "aria-rowcount": Oe,
    className: xe(rp, K, Vt && op),
    style: {
      ...q,
      scrollPaddingInlineStart: Y.idx > Xe || (pt == null ? void 0 : pt.idx) !== void 0 ? `${Gr}px` : void 0,
      scrollPaddingBlock: Zt(Y.rowIdx) || (pt == null ? void 0 : pt.rowIdx) !== void 0 ? `${re + Ut * U}px ${Rt * U}px` : void 0,
      gridTemplateColumns: Wa,
      gridTemplateRows: rn,
      "--rdg-header-row-height": `${N}px`,
      "--rdg-scroll-height": `${Ka}px`,
      ...yr
    },
    dir: H,
    ref: _t,
    onScroll: os,
    onKeyDown: ns,
    "data-testid": oe,
    children: [/* @__PURE__ */ L.jsxs(Hd, {
      value: Je,
      children: [/* @__PURE__ */ L.jsx(Zd, {
        value: Za,
        children: /* @__PURE__ */ L.jsxs(Jd, {
          value: Mt,
          children: [Array.from({
            length: Xt
          }, (I, M) => /* @__PURE__ */ L.jsx(zf, {
            rowIdx: M + 1,
            level: -Xt + M,
            columns: Cr(Ye + M),
            selectedCellIdx: Y.rowIdx === Ye + M ? Y.idx : void 0,
            selectCell: Wo
          }, M)), /* @__PURE__ */ L.jsx(Nf, {
            rowIdx: gt,
            columns: Cr(Jt),
            onColumnResize: Ya,
            onColumnsReorder: Ga,
            sortColumns: C,
            onSortColumnsChange: qa,
            lastFrozenColumnIndex: Xe,
            selectedCellIdx: Y.rowIdx === Jt ? Y.idx : void 0,
            selectCell: Wo,
            shouldFocusGrid: !Un,
            direction: H
          })]
        })
      }), n.length === 0 && F ? F : /* @__PURE__ */ L.jsxs(L.Fragment, {
        children: [o == null ? void 0 : o.map((I, M) => {
          const G = gt + 1 + M, J = Jt + 1 + M, de = Y.rowIdx === J, Se = re + U * M;
          return /* @__PURE__ */ L.jsx(Bi, {
            "aria-rowindex": G,
            rowIdx: J,
            gridRowStart: G,
            row: I,
            top: Se,
            bottom: void 0,
            viewportColumns: Cr(J),
            lastFrozenColumnIndex: Xe,
            selectedCellIdx: de ? Y.idx : void 0,
            isTop: !0,
            selectCell: Hn
          }, M);
        }), /* @__PURE__ */ L.jsx(qd, {
          value: es,
          children: ps()
        }), i == null ? void 0 : i.map((I, M) => {
          const G = Tt + n.length + M + 1, J = n.length + M, de = Y.rowIdx === J, Se = pe > Ht ? Hr - U * (i.length - M) : void 0, Ie = Se === void 0 ? U * (i.length - 1 - M) : void 0;
          return /* @__PURE__ */ L.jsx(Bi, {
            "aria-rowindex": Oe - Rt + M + 1,
            rowIdx: J,
            gridRowStart: G,
            row: I,
            top: Se,
            bottom: Ie,
            viewportColumns: Cr(J),
            lastFrozenColumnIndex: Xe,
            selectedCellIdx: de ? Y.idx : void 0,
            isTop: !1,
            selectCell: Hn
          }, M);
        })]
      })]
    }), ds(), Pd(jt), B && /* @__PURE__ */ L.jsx("div", {
      ref: f,
      tabIndex: Xo ? 0 : -1,
      className: xe(ip, Xo && [Pf, Xe !== -1 && Af], !Zt(Y.rowIdx) && ap),
      style: {
        gridRowStart: Y.rowIdx + Tt + 1
      }
    }), pt !== null && /* @__PURE__ */ L.jsx(qf, {
      scrollToPosition: pt,
      setScrollToCellPosition: hr,
      gridElement: _t.current
    })]
  });
}
function Li(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function so(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const hp = /* @__PURE__ */ xo(gp), mp = {
  "--rdg-color": Pe.gray800,
  "--rdg-header-color": Pe.gray700,
  "--rdg-border-color": Pe.gray400,
  "--rdg-background-color": "transparent",
  "--rdg-header-background-color": "transparent",
  "--rdg-row-hover-background-color": "transparent",
  "--rdg-row-selected-hover-background-color": "transparent",
  "--rdg-selection-color": "transparent",
  "--rdg-border-size": "1px",
  "--rdg-font-size": "14px",
  "--rdg-line-height": "16.94px",
  "--rdg-font-weight": "400",
  "--rdg-font-family": "Inter, Helvetica, sans-serif",
  "--rdg-cell-padding": "8px 12px",
  "--rdg-border-radius-container": "8px"
}, yp = Pt.div`
  width: 100%;
  position: relative;
  height: 100%;

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${Pe.primary500};
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background-color: ${Pe.gray100};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color${Pe.primary500};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${Pe.gray200};
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

  //.rdg-row-even {
  //
  //    .rdg-cell {
  //        border-top: solid var(--rdg-border-size) var(--rdg-border-color);
  //        border-bottom: solid var(--rdg-border-size) var(--rdg-border-color);
  //
  //        &:first-child {
  //            border-left: solid var(--rdg-border-size) var(--rdg-border-color);
  //        }
  //
  //        &:last-child {
  //            border-right: solid var(--rdg-border-size) var(--rdg-border-color);
  //        }
  //    }
  //}
`;
var bp = {
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
function vp(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, r = (e.match(/^[0-9.]*/) || "").toString();
  r.includes(".") ? t = parseFloat(r) : t = parseInt(r, 10);
  var n = (e.match(/[^0-9]*$/) || "").toString();
  return bp[n] ? {
    value: t,
    unit: n
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function co(e) {
  var t = vp(e);
  return "".concat(t.value).concat(t.unit);
}
var Cp = function(e, t, r) {
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
}, En = function() {
  return En = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, En.apply(this, arguments);
}, wp = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, xp = Cp("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function Sp(e) {
  var t = e.loading, r = t === void 0 ? !0 : t, n = e.color, o = n === void 0 ? "#000000" : n, i = e.speedMultiplier, a = i === void 0 ? 1 : i, s = e.cssOverride, l = s === void 0 ? {} : s, u = e.size, g = u === void 0 ? 15 : u, d = e.margin, h = d === void 0 ? 2 : d, v = wp(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), C = En({ display: "inherit" }, l), m = function(p) {
    return {
      backgroundColor: o,
      width: co(g),
      height: co(g),
      margin: co(h),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(xp, " ").concat(0.75 / a, "s ").concat(p * 0.12 / a, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return r ? W.createElement(
    "span",
    En({ style: C }, v),
    W.createElement("span", { style: m(1) }),
    W.createElement("span", { style: m(2) }),
    W.createElement("span", { style: m(3) })
  ) : null;
}
const Ep = Ot.memo(({ color: e }) => /* @__PURE__ */ L.jsx(Sp, { color: e })), Rp = Pt.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${Pe.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, Up = Ot.memo(({ theme: e, loading: t, ...r }) => {
  const n = mn(
    (o, i) => i === 0 ? "first-row" : i === r.rows.length - 1 ? "last-row" : "",
    [r.rows]
  );
  return /* @__PURE__ */ L.jsxs(yp, { children: [
    /* @__PURE__ */ L.jsx(
      hp,
      {
        ...r,
        rowClass: n,
        rowHeight: 50,
        style: { ...mp, ...e ?? {} }
      }
    ),
    t ? /* @__PURE__ */ L.jsxs(Rp, { children: [
      /* @__PURE__ */ L.jsx("div", {}),
      /* @__PURE__ */ L.jsx(Ep, { color: Pe.primary500 })
    ] }) : null
  ] });
});
function Tp(e) {
  return Gt("MuiIconButton", e);
}
const $p = pr("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), kp = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${Q(n)}`, o && `edge${Q(o)}`, `size${Q(i)}`]
  };
  return Br(a, Tp, t);
}, Op = St(Mr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${Q(r.color)}`], r.edge && t[`edge${Q(r.edge)}`], t[`size${Q(r.size)}`]];
  }
})(Dr(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), Dr(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Yt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Yt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${$p.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Ba = /* @__PURE__ */ W.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: g = "medium",
    ...d
  } = n, h = {
    ...n,
    edge: o,
    color: s,
    disabled: l,
    disableFocusRipple: u,
    size: g
  }, v = kp(h);
  return /* @__PURE__ */ L.jsx(Op, {
    className: xe(v.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: r,
    ...d,
    ownerState: h,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (Ba.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: ha(b.node, (e) => W.Children.toArray(e.children).some((r) => /* @__PURE__ */ W.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: b.oneOfType([b.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), b.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: b.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: b.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: b.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: b.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: b.oneOfType([b.oneOf(["small", "medium", "large"]), b.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object])
});
const Hp = Pt(Ba, {
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
        background: ${({ $hoverBackground: e }) => e ?? Pe.gray300};
    }

    &:active {
        background: ${({ $activeBackground: e }) => e ?? Pe.gray400};
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
`;
function Ip(e) {
  return Gt("MuiSvgIcon", e);
}
pr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Pp = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Q(t)}`, `fontSize${Q(r)}`]
  };
  return Br(o, Ip, n);
}, Ap = St("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Q(r.color)}`], t[`fontSize${Q(r.fontSize)}`]];
  }
})(Dr(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, l, u, g, d, h, v, C;
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
        props: (m) => !m.hasSvgAsChild,
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
          fontSize: ((g = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : g.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, m]) => m && m.main).map(([m]) => {
        var p, x;
        return {
          props: {
            color: m
          },
          style: {
            color: (x = (p = (e.vars ?? e).palette) == null ? void 0 : p[m]) == null ? void 0 : x.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (C = (v = (e.vars ?? e).palette) == null ? void 0 : v.action) == null ? void 0 : C.disabled
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
})), Nr = /* @__PURE__ */ W.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: g = !1,
    titleAccess: d,
    viewBox: h = "0 0 24 24",
    ...v
  } = n, C = /* @__PURE__ */ W.isValidElement(o) && o.type === "svg", m = {
    ...n,
    color: a,
    component: s,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: g,
    viewBox: h,
    hasSvgAsChild: C
  }, p = {};
  g || (p.viewBox = h);
  const x = Pp(m);
  return /* @__PURE__ */ L.jsxs(Ap, {
    as: s,
    className: xe(x.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: r,
    ...p,
    ...v,
    ...C && o.props,
    ownerState: m,
    children: [C ? o.props.children : o, d ? /* @__PURE__ */ L.jsx("title", {
      children: d
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Nr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: b.oneOfType([b.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), b.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: b.oneOfType([b.oneOf(["inherit", "large", "medium", "small"]), b.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: b.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: b.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: b.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: b.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: b.string
});
Nr && (Nr.muiName = "SvgIcon");
function Lo(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ L.jsx(Nr, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Nr.muiName, /* @__PURE__ */ W.memo(/* @__PURE__ */ W.forwardRef(r));
}
const _p = Lo(/* @__PURE__ */ L.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), Dp = Pt(ka)`
    border: 1px solid ${Pe.red600};
    background: ${Pe.red50};
    color: ${Pe.red600};
`, Kp = (e) => /* @__PURE__ */ L.jsx(Dp, { ...e, startIcon: /* @__PURE__ */ L.jsx(_p, {}) }), Mp = Lo(/* @__PURE__ */ L.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
}), "AddCircle"), Yp = (e) => /* @__PURE__ */ L.jsx(ka, { $level: "secondary", ...e, startIcon: /* @__PURE__ */ L.jsx(Mp, {}) }), jp = Lo(/* @__PURE__ */ L.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Np(e) {
  return Gt("MuiChip", e);
}
const ue = pr("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Fp = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: i,
    onDelete: a,
    clickable: s,
    variant: l
  } = e, u = {
    root: ["root", l, r && "disabled", `size${Q(n)}`, `color${Q(o)}`, s && "clickable", s && `clickableColor${Q(o)}`, a && "deletable", a && `deletableColor${Q(o)}`, `${l}${Q(o)}`],
    label: ["label", `label${Q(n)}`],
    avatar: ["avatar", `avatar${Q(n)}`, `avatarColor${Q(o)}`],
    icon: ["icon", `icon${Q(n)}`, `iconColor${Q(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${Q(n)}`, `deleteIconColor${Q(o)}`, `deleteIcon${Q(l)}Color${Q(o)}`]
  };
  return Br(u, Np, t);
}, zp = St("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      color: n,
      iconColor: o,
      clickable: i,
      onDelete: a,
      size: s,
      variant: l
    } = r;
    return [{
      [`& .${ue.avatar}`]: t.avatar
    }, {
      [`& .${ue.avatar}`]: t[`avatar${Q(s)}`]
    }, {
      [`& .${ue.avatar}`]: t[`avatarColor${Q(n)}`]
    }, {
      [`& .${ue.icon}`]: t.icon
    }, {
      [`& .${ue.icon}`]: t[`icon${Q(s)}`]
    }, {
      [`& .${ue.icon}`]: t[`iconColor${Q(o)}`]
    }, {
      [`& .${ue.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ue.deleteIcon}`]: t[`deleteIcon${Q(s)}`]
    }, {
      [`& .${ue.deleteIcon}`]: t[`deleteIconColor${Q(n)}`]
    }, {
      [`& .${ue.deleteIcon}`]: t[`deleteIcon${Q(l)}Color${Q(n)}`]
    }, t.root, t[`size${Q(s)}`], t[`color${Q(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${Q(n)})`], a && t.deletable, a && n !== "default" && t[`deletableColor${Q(n)}`], t[l], t[`${l}${Q(n)}`]];
  }
})(Dr(({
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
    [`&.${ue.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ue.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ue.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ue.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ue.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ue.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${ue.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Le(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Le(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${ue.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${ue.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Yt(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${ue.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : Le(e.palette[r].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].contrastText
          }
        }
      }
    })), {
      props: (r) => r.iconColor === r.color,
      style: {
        [`& .${ue.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (r) => r.iconColor === r.color && r.color !== "default",
      style: {
        [`& .${ue.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${ue.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Le(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Yt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        onDelete: !0
      },
      style: {
        [`&.${ue.focusVisible}`]: {
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Le(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${ue.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Le(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Yt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        clickable: !0
      },
      style: {
        [`&:hover, &.${ue.focusVisible}`]: {
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
        [`&.${ue.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${ue.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${ue.avatar}`]: {
          marginLeft: 4
        },
        [`& .${ue.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${ue.icon}`]: {
          marginLeft: 4
        },
        [`& .${ue.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${ue.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${ue.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Yt()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Le(e.palette[r].main, 0.7)}`,
        [`&.${ue.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette[r].main, e.palette.action.hoverOpacity)
        },
        [`&.${ue.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Le(e.palette[r].main, e.palette.action.focusOpacity)
        },
        [`& .${ue.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Le(e.palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), Bp = St("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${Q(n)}`]];
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
function Vi(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const La = /* @__PURE__ */ W.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: a,
    color: s = "default",
    component: l,
    deleteIcon: u,
    disabled: g = !1,
    icon: d,
    label: h,
    onClick: v,
    onDelete: C,
    onKeyDown: m,
    onKeyUp: p,
    size: x = "medium",
    variant: T = "filled",
    tabIndex: E,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...y
  } = n, k = W.useRef(null), S = yo(k, r), _ = (ce) => {
    ce.stopPropagation(), C && C(ce);
  }, j = (ce) => {
    ce.currentTarget === ce.target && Vi(ce) && ce.preventDefault(), m && m(ce);
  }, c = (ce) => {
    ce.currentTarget === ce.target && C && Vi(ce) && C(ce), p && p(ce);
  }, $ = a !== !1 && v ? !0 : a, D = $ || C ? Mr : l || "div", P = {
    ...n,
    component: D,
    disabled: g,
    size: x,
    color: s,
    iconColor: /* @__PURE__ */ W.isValidElement(d) && d.props.color || s,
    onDelete: !!C,
    clickable: $,
    variant: T
  }, K = Fp(P), q = D === Mr ? {
    component: l || "div",
    focusVisibleClassName: K.focusVisible,
    ...C && {
      disableRipple: !0
    }
  } : {};
  let ie = null;
  C && (ie = u && /* @__PURE__ */ W.isValidElement(u) ? /* @__PURE__ */ W.cloneElement(u, {
    className: xe(u.props.className, K.deleteIcon),
    onClick: _
  }) : /* @__PURE__ */ L.jsx(jp, {
    className: xe(K.deleteIcon),
    onClick: _
  }));
  let ge = null;
  o && /* @__PURE__ */ W.isValidElement(o) && (ge = /* @__PURE__ */ W.cloneElement(o, {
    className: xe(K.avatar, o.props.className)
  }));
  let we = null;
  return d && /* @__PURE__ */ W.isValidElement(d) && (we = /* @__PURE__ */ W.cloneElement(d, {
    className: xe(K.icon, d.props.className)
  })), process.env.NODE_ENV !== "production" && ge && we && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ L.jsxs(zp, {
    as: D,
    className: xe(K.root, i),
    disabled: $ && g ? !0 : void 0,
    onClick: v,
    onKeyDown: j,
    onKeyUp: c,
    ref: S,
    tabIndex: w && g ? -1 : E,
    ownerState: P,
    ...q,
    ...y,
    children: [ge || we, /* @__PURE__ */ L.jsx(Bp, {
      className: xe(K.label),
      ownerState: P,
      children: h
    }), ie]
  });
});
process.env.NODE_ENV !== "production" && (La.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: b.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: iu,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: b.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: b.oneOfType([b.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), b.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: b.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: b.bool,
  /**
   * Icon element.
   */
  icon: b.element,
  /**
   * The content of the component.
   */
  label: b.node,
  /**
   * @ignore
   */
  onClick: b.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: b.func,
  /**
   * @ignore
   */
  onKeyDown: b.func,
  /**
   * @ignore
   */
  onKeyUp: b.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: b.oneOfType([b.oneOf(["medium", "small"]), b.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: b.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * @ignore
   */
  tabIndex: b.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: b.oneOfType([b.oneOf(["filled", "outlined"]), b.string])
});
const Gp = Pt(La, { shouldForwardProp: (e) => !e.startsWith("$") })`
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
    color: ${({ $color: e }) => e ?? Pe.primary500};
    background: ${({ $backgroundColor: e }) => e ?? Pe.primary100};
    width: fit-content;
`;
export {
  Yp as AddButton,
  ka as Button,
  Gp as Chip,
  Up as DataGrid,
  Kp as DeleteButton,
  Hp as IconButton,
  Ep as Loader,
  Dp as StyledButton,
  Pe as taktikTheme
};
