var gs = Object.defineProperty;
var hs = (e, t, r) => t in e ? gs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var wr = (e, t, r) => hs(e, typeof t != "symbol" ? t + "" : t, r);
import * as Y from "react";
import It, { forwardRef as Co, useContext as Li, Children as ms, isValidElement as ln, cloneElement as cn, createContext as Fr, useState as Ge, useCallback as mn, useRef as wt, useMemo as Pt, useImperativeHandle as ys, useEffect as wo, useLayoutEffect as bs, memo as dr, useId as vs } from "react";
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
function Vi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Cs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ws = /* @__PURE__ */ Vi(
  function(e) {
    return Cs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), xs = !1;
function Ss(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Es(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Rs = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !xs : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Es(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ss(o);
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
}(), Ke = "-ms-", vn = "-moz-", he = "-webkit-", Wi = "comm", xo = "rule", So = "decl", Ts = "@import", Ui = "@keyframes", $s = "@layer", ks = Math.abs, En = String.fromCharCode, Os = Object.assign;
function Is(e, t) {
  return He(e, 0) ^ 45 ? (((t << 2 ^ He(e, 0)) << 2 ^ He(e, 1)) << 2 ^ He(e, 2)) << 2 ^ He(e, 3) : 0;
}
function Hi(e) {
  return e.trim();
}
function Ps(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function me(e, t, r) {
  return e.replace(t, r);
}
function so(e, t) {
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
function Eo(e) {
  return e.length;
}
function nn(e, t) {
  return t.push(e), e;
}
function As(e, t) {
  return e.map(t).join("");
}
var Rn = 1, lr = 1, Ki = 0, Ze = 0, ze = 0, fr = "";
function Tn(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Rn, column: lr, length: a, return: "" };
}
function xr(e, t) {
  return Os(Tn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _s() {
  return ze;
}
function Ds() {
  return ze = Ze > 0 ? He(fr, --Ze) : 0, lr--, ze === 10 && (lr = 1, Rn--), ze;
}
function ot() {
  return ze = Ze < Ki ? He(fr, Ze++) : 0, lr++, ze === 10 && (lr = 1, Rn++), ze;
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
function Yi(e) {
  return Rn = lr = 1, Ki = vt(fr = e), Ze = 0, [];
}
function Gi(e) {
  return fr = "", e;
}
function dn(e) {
  return Hi(zr(Ze - 1, lo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ms(e) {
  for (; (ze = xt()) && ze < 33; )
    ot();
  return Pr(e) > 2 || Pr(ze) > 3 ? "" : " ";
}
function js(e, t) {
  for (; --t && ot() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return zr(e, un() + (t < 6 && xt() == 32 && ot() == 32));
}
function lo(e) {
  for (; ot(); )
    switch (ze) {
      case e:
        return Ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lo(ze);
        break;
      case 40:
        e === 41 && lo(e);
        break;
      case 92:
        ot();
        break;
    }
  return Ze;
}
function Ns(e, t) {
  for (; ot() && e + ze !== 57; )
    if (e + ze === 84 && xt() === 47)
      break;
  return "/*" + zr(t, Ze - 1) + "*" + En(e === 47 ? e : ot());
}
function Fs(e) {
  for (; !Pr(xt()); )
    ot();
  return zr(e, Ze);
}
function zs(e) {
  return Gi(fn("", null, null, null, [""], e = Yi(e), 0, [0], e));
}
function fn(e, t, r, n, o, i, a, s, c) {
  for (var u = 0, g = 0, d = a, h = 0, v = 0, C = 0, m = 1, p = 1, x = 1, T = 0, E = "", w = o, y = i, k = n, S = E; p; )
    switch (C = T, T = ot()) {
      case 40:
        if (C != 108 && He(S, d - 1) == 58) {
          so(S += me(dn(T), "&", "&\f"), "&\f") != -1 && (x = -1);
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
        S += Ms(C);
        break;
      case 92:
        S += js(un() - 1, 7);
        continue;
      case 47:
        switch (xt()) {
          case 42:
          case 47:
            nn(Bs(Ns(ot(), un()), t, r), c);
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
            x == -1 && (S = me(S, /\f/g, "")), v > 0 && vt(S) - d && nn(v > 32 ? Xo(S + ";", n, r, d - 1) : Xo(me(S, " ", "") + ";", n, r, d - 2), c);
            break;
          case 59:
            S += ";";
          default:
            if (nn(k = qo(S, t, r, u, g, o, s, E, w = [], y = [], d), i), T === 123)
              if (g === 0)
                fn(S, t, k, k, w, i, d, s, y);
              else
                switch (h === 99 && He(S, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fn(e, k, k, n && nn(qo(e, k, k, 0, 0, o, s, E, o, w = [], d), y), o, y, d, s, n ? w : y);
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
          else if (T == 125 && m++ == 0 && Ds() == 125)
            continue;
        }
        switch (S += En(T), T * m) {
          case 38:
            x = g > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[u++] = (vt(S) - 1) * x, x = 1;
            break;
          case 64:
            xt() === 45 && (S += dn(ot())), h = xt(), g = d = vt(E = S += Fs(un())), T++;
            break;
          case 45:
            C === 45 && vt(S) == 2 && (m = 0);
        }
    }
  return i;
}
function qo(e, t, r, n, o, i, a, s, c, u, g) {
  for (var d = o - 1, h = o === 0 ? i : [""], v = Eo(h), C = 0, m = 0, p = 0; C < n; ++C)
    for (var x = 0, T = Ir(e, d + 1, d = ks(m = a[C])), E = e; x < v; ++x)
      (E = Hi(m > 0 ? h[x] + " " + T : me(T, /&\f/g, h[x]))) && (c[p++] = E);
  return Tn(e, t, r, o === 0 ? xo : s, c, u, g);
}
function Bs(e, t, r) {
  return Tn(e, t, r, Wi, En(_s()), Ir(e, 2, -2), 0);
}
function Xo(e, t, r, n) {
  return Tn(e, t, r, So, Ir(e, 0, n), Ir(e, n + 1, -1), n);
}
function ar(e, t) {
  for (var r = "", n = Eo(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ls(e, t, r, n) {
  switch (e.type) {
    case $s:
      if (e.children.length) break;
    case Ts:
    case So:
      return e.return = e.return || e.value;
    case Wi:
      return "";
    case Ui:
      return e.return = e.value + "{" + ar(e.children, n) + "}";
    case xo:
      e.value = e.props.join(",");
  }
  return vt(r = ar(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Vs(e) {
  var t = Eo(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function Ws(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Us = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = xt(), o === 38 && i === 12 && (r[n] = 1), !Pr(i); )
    ot();
  return zr(t, Ze);
}, Hs = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Pr(o)) {
      case 0:
        o === 38 && xt() === 12 && (r[n] = 1), t[n] += Us(Ze - 1, r, n);
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
        t[n] += En(o);
    }
  while (o = ot());
  return t;
}, Ks = function(t, r) {
  return Gi(Hs(Yi(t), r));
}, Jo = /* @__PURE__ */ new WeakMap(), Ys = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Jo.get(n)) && !o) {
      Jo.set(t, !0);
      for (var i = [], a = Ks(r, i), s = n.props, c = 0, u = 0; c < a.length; c++)
        for (var g = 0; g < s.length; g++, u++)
          t.props[u] = i[c] ? a[c].replace(/&\f/g, s[g]) : s[g] + " " + a[c];
    }
  }
}, Gs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function qi(e, t) {
  switch (Is(e, t)) {
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
          return ~so(e, "stretch") ? qi(me(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (He(e, t + 1) !== 115) break;
    case 6444:
      switch (He(e, vt(e) - 3 - (~so(e, "!important") && 10))) {
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
var qs = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case So:
      t.return = qi(t.value, t.length);
      break;
    case Ui:
      return ar([xr(t, {
        value: me(t.value, "@", "@" + he)
      })], o);
    case xo:
      if (t.length) return As(t.props, function(i) {
        switch (Ps(i, /(::plac\w+|:read-\w+)/)) {
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
}, Xs = [qs], Js = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var p = m.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Xs, i = {}, a, s = [];
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
  var c, u = [Ys, Gs];
  {
    var g, d = [Ls, Ws(function(m) {
      g.insert(m);
    })], h = Vs(u.concat(o, d)), v = function(p) {
      return ar(zs(p), h);
    };
    c = function(p, x, T, E) {
      g = T, v(p ? p + "{" + x.styles + "}" : x.styles), E && (C.inserted[x.name] = !0);
    };
  }
  var C = {
    key: r,
    sheet: new Rs({
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
    insert: c
  };
  return C.sheet.hydrate(s), C;
};
function Qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var co = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo;
function Zs() {
  if (Qo) return ye;
  Qo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function E(y) {
    if (typeof y == "object" && y !== null) {
      var k = y.$$typeof;
      switch (k) {
        case t:
          switch (y = y.type, y) {
            case c:
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
  return ye.AsyncMode = c, ye.ConcurrentMode = u, ye.ContextConsumer = s, ye.ContextProvider = a, ye.Element = t, ye.ForwardRef = g, ye.Fragment = n, ye.Lazy = C, ye.Memo = v, ye.Portal = r, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = d, ye.isAsyncMode = function(y) {
    return w(y) || E(y) === c;
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
var Zo;
function el() {
  return Zo || (Zo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function E(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === n || F === u || F === i || F === o || F === d || F === h || typeof F == "object" && F !== null && (F.$$typeof === C || F.$$typeof === v || F.$$typeof === a || F.$$typeof === s || F.$$typeof === g || F.$$typeof === p || F.$$typeof === x || F.$$typeof === T || F.$$typeof === m);
    }
    function w(F) {
      if (typeof F == "object" && F !== null) {
        var Ae = F.$$typeof;
        switch (Ae) {
          case t:
            var U = F.type;
            switch (U) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case d:
                return U;
              default:
                var je = U && U.$$typeof;
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
    var y = c, k = u, S = s, _ = a, j = t, l = g, $ = n, D = C, P = v, H = r, q = i, ie = o, ge = d, we = !1;
    function le(F) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(F) || w(F) === c;
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
    function W(F) {
      return w(F) === r;
    }
    function ee(F) {
      return w(F) === i;
    }
    function Z(F) {
      return w(F) === o;
    }
    function $e(F) {
      return w(F) === d;
    }
    be.AsyncMode = y, be.ConcurrentMode = k, be.ContextConsumer = S, be.ContextProvider = _, be.Element = j, be.ForwardRef = l, be.Fragment = $, be.Lazy = D, be.Memo = P, be.Portal = H, be.Profiler = q, be.StrictMode = ie, be.Suspense = ge, be.isAsyncMode = le, be.isConcurrentMode = A, be.isContextConsumer = z, be.isContextProvider = ne, be.isElement = oe, be.isForwardRef = V, be.isFragment = ae, be.isLazy = X, be.isMemo = N, be.isPortal = W, be.isProfiler = ee, be.isStrictMode = Z, be.isSuspense = $e, be.isValidElementType = E, be.typeOf = w;
  }()), be;
}
process.env.NODE_ENV === "production" ? co.exports = Zs() : co.exports = el();
var Ro = co.exports, Xi = Ro, tl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, rl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ji = {};
Ji[Xi.ForwardRef] = tl;
Ji[Xi.Memo] = rl;
var nl = !0;
function ol(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Qi = function(t, r, n) {
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
  nl === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, il = function(t, r, n) {
  Qi(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function al(e) {
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
var sl = {
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
}, ll = !1, cl = /[A-Z]|^ms/g, ul = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zi = function(t) {
  return t.charCodeAt(1) === 45;
}, ei = function(t) {
  return t != null && typeof t != "boolean";
}, qn = /* @__PURE__ */ Vi(function(e) {
  return Zi(e) ? e : e.replace(cl, "-$&").toLowerCase();
}), ti = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ul, function(n, o, i) {
          return Ct = {
            name: o,
            styles: i,
            next: Ct
          }, o;
        });
  }
  return sl[t] !== 1 && !Zi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, dl = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      return fl(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Ct, u = r(e);
        return Ct = c, Ar(e, t, u);
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
function fl(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ar(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : ei(s) && (n += qn(i) + ":" + ti(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && ll)
          throw new Error(dl);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            ei(a[c]) && (n += qn(i) + ":" + ti(i, a[c]) + ";");
        else {
          var u = Ar(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += qn(i) + ":" + u + ";";
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
var ri = /label:\s*([^\s;{]+)\s*(;|$)/g, Ct;
function To(e, t, r) {
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
      var c = i;
      o += c[s];
    }
  ri.lastIndex = 0;
  for (var u = "", g; (g = ri.exec(o)) !== null; )
    u += "-" + g[1];
  var d = al(o) + u;
  return {
    name: d,
    styles: o,
    next: Ct
  };
}
var pl = function(t) {
  return t();
}, gl = Y.useInsertionEffect ? Y.useInsertionEffect : !1, hl = gl || pl, ea = /* @__PURE__ */ Y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Js({
    key: "css"
  }) : null
);
ea.Provider;
var ml = function(t) {
  return /* @__PURE__ */ Co(function(r, n) {
    var o = Li(ea);
    return t(r, o, n);
  });
}, yl = /* @__PURE__ */ Y.createContext({});
function pn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return To(t);
}
var $o = function() {
  var t = pn.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, bl = ws, vl = function(t) {
  return t !== "theme";
}, ni = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? bl : vl;
}, oi = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Cl = !1, wl = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Qi(r, n, o), hl(function() {
    return il(r, n, o);
  }), null;
}, xl = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = oi(t, r, n), c = s || ni(o), u = !c("as");
  return function() {
    var g = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), g[0] == null || g[0].raw === void 0)
      d.push.apply(d, g);
    else {
      d.push(g[0][0]);
      for (var h = g.length, v = 1; v < h; v++)
        d.push(g[v], g[0][v]);
    }
    var C = ml(function(m, p, x) {
      var T = u && m.as || o, E = "", w = [], y = m;
      if (m.theme == null) {
        y = {};
        for (var k in m)
          y[k] = m[k];
        y.theme = Y.useContext(yl);
      }
      typeof m.className == "string" ? E = ol(p.registered, w, m.className) : m.className != null && (E = m.className + " ");
      var S = To(d.concat(w), p.registered, y);
      E += p.key + "-" + S.name, a !== void 0 && (E += " " + a);
      var _ = u && s === void 0 ? ni(T) : c, j = {};
      for (var l in m)
        u && l === "as" || _(l) && (j[l] = m[l]);
      return j.className = E, x && (j.ref = x), /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(wl, {
        cache: p,
        serialized: S,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ Y.createElement(T, j));
    });
    return C.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", C.defaultProps = t.defaultProps, C.__emotion_real = C, C.__emotion_base = o, C.__emotion_styles = d, C.__emotion_forwardProp = s, Object.defineProperty(C, "toString", {
      value: function() {
        return a === void 0 && Cl ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), C.withComponent = function(m, p) {
      return e(m, bn({}, r, p, {
        shouldForwardProp: oi(C, p, !0)
      })).apply(void 0, d);
    }, C;
  };
}, Sl = [
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
], St = xl.bind();
Sl.forEach(function(e) {
  St[e] = St(e);
});
var uo = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xn, ii;
function El() {
  if (ii) return Xn;
  ii = 1;
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
      var c = Object.getOwnPropertyNames(a).map(function(g) {
        return a[g];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        u[g] = g;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Xn = o() ? Object.assign : function(i, a) {
    for (var s, c = n(i), u, g = 1; g < arguments.length; g++) {
      s = Object(arguments[g]);
      for (var d in s)
        t.call(s, d) && (c[d] = s[d]);
      if (e) {
        u = e(s);
        for (var h = 0; h < u.length; h++)
          r.call(s, u[h]) && (c[u[h]] = s[u[h]]);
      }
    }
    return c;
  }, Xn;
}
var Jn, ai;
function ko() {
  if (ai) return Jn;
  ai = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jn = e, Jn;
}
var Qn, si;
function ta() {
  return si || (si = 1, Qn = Function.call.bind(Object.prototype.hasOwnProperty)), Qn;
}
var Zn, li;
function Rl() {
  if (li) return Zn;
  li = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ko(), r = {}, n = ta();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in i)
        if (n(i, g)) {
          var d;
          try {
            if (typeof i[g] != "function") {
              var h = Error(
                (c || "React class") + ": " + s + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = i[g](a, g, c, s, null, t);
          } catch (C) {
            d = C;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, Zn = o, Zn;
}
var eo, ci;
function Tl() {
  if (ci) return eo;
  ci = 1;
  var e = Ro, t = El(), r = ko(), n = ta(), o = Rl(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return eo = function(s, c) {
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
      node: l(),
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
      function oe(ae, X, N, W, ee, Z, $e) {
        if (W = W || h, Z = Z || N, $e !== r) {
          if (c) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ae = W + ":" + N;
            !z[Ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[Ae] = !0, ne++);
          }
        }
        return X[N] == null ? ae ? X[N] === null ? new m("The " + ee + " `" + Z + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new m("The " + ee + " `" + Z + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : A(X, N, W, ee, Z);
      }
      var V = oe.bind(null, !1);
      return V.isRequired = oe.bind(null, !0), V;
    }
    function x(A) {
      function z(ne, oe, V, ae, X, N) {
        var W = ne[oe], ee = ie(W);
        if (ee !== A) {
          var Z = ge(W);
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
          var W = ie(N);
          return new m("Invalid " + ae + " `" + X + "` of type " + ("`" + W + "` supplied to `" + V + "`, expected an array."));
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
          var N = A.name || h, W = le(ne[oe]);
          return new m("Invalid " + ae + " `" + X + "` of type " + ("`" + W + "` supplied to `" + V + "`, expected ") + ("instance of `" + N + "`."));
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
        for (var N = ne[oe], W = 0; W < A.length; W++)
          if (C(N, A[W]))
            return null;
        var ee = JSON.stringify(A, function($e, F) {
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
        var N = ne[oe], W = ie(N);
        if (W !== "object")
          return new m("Invalid " + ae + " `" + X + "` of type " + ("`" + W + "` supplied to `" + V + "`, expected an object."));
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
      function oe(V, ae, X, N, W) {
        for (var ee = [], Z = 0; Z < A.length; Z++) {
          var $e = A[Z], F = $e(V, ae, X, N, W, r);
          if (F == null)
            return null;
          F.data && n(F.data, "expectedType") && ee.push(F.data.expectedType);
        }
        var Ae = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new m("Invalid " + N + " `" + W + "` supplied to " + ("`" + X + "`" + Ae + "."));
      }
      return p(oe);
    }
    function l() {
      function A(z, ne, oe, V, ae) {
        return H(z[ne]) ? null : new m("Invalid " + V + " `" + ae + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
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
        var N = ne[oe], W = ie(N);
        if (W !== "object")
          return new m("Invalid " + ae + " `" + X + "` of type `" + W + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var ee in A) {
          var Z = A[ee];
          if (typeof Z != "function")
            return $(V, ae, X, ee, ge(Z));
          var $e = Z(N, ee, V, ae, X + "." + ee, r);
          if ($e)
            return $e;
        }
        return null;
      }
      return p(z);
    }
    function P(A) {
      function z(ne, oe, V, ae, X) {
        var N = ne[oe], W = ie(N);
        if (W !== "object")
          return new m("Invalid " + ae + " `" + X + "` of type `" + W + "` " + ("supplied to `" + V + "`, expected `object`."));
        var ee = t({}, ne[oe], A);
        for (var Z in ee) {
          var $e = A[Z];
          if (n(A, Z) && typeof $e != "function")
            return $(V, ae, X, Z, ge($e));
          if (!$e)
            return new m(
              "Invalid " + ae + " `" + X + "` key `" + Z + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(ne[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var F = $e(N, Z, V, ae, X + "." + Z, r);
          if (F)
            return F;
        }
        return null;
      }
      return p(z);
    }
    function H(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(H);
          if (A === null || s(A))
            return !0;
          var z = d(A);
          if (z) {
            var ne = z.call(A), oe;
            if (z !== A.entries) {
              for (; !(oe = ne.next()).done; )
                if (!H(oe.value))
                  return !1;
            } else
              for (; !(oe = ne.next()).done; ) {
                var V = oe.value;
                if (V && !H(V[1]))
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
    function le(A) {
      return !A.constructor || !A.constructor.name ? h : A.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, eo;
}
var to, ui;
function $l() {
  if (ui) return to;
  ui = 1;
  var e = ko();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, to = function() {
    function n(a, s, c, u, g, d) {
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
  }, to;
}
if (process.env.NODE_ENV !== "production") {
  var kl = Ro, Ol = !0;
  uo.exports = Tl()(kl.isElement, Ol);
} else
  uo.exports = $l()();
var Il = uo.exports;
const b = /* @__PURE__ */ Qs(Il);
function ra(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ra(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function xe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ra(e)) && (n && (n += " "), n += t);
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
              const c = s;
              r[o][c] = Cn(i[c], a[c]);
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
    for (let c = 0; c < i.length; c += 1) {
      const u = i[c];
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
function Pl(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Oo(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Pl(e, t, r);
}
function Al(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ft(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ft(Al(e));
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
const _l = (e) => {
  const t = Ft(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Tr = (e, t) => {
  try {
    return _l(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function $n(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function na(e) {
  e = Ft(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (u, g = (u + r / 30) % 12) => o - i * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let s = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), $n({
    type: s,
    values: c
  });
}
function fo(e) {
  e = Ft(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ft(na(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function di(e, t) {
  const r = fo(e), n = fo(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Le(e, t) {
  return e = Ft(e), t = Oo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, $n(e);
}
function on(e, t, r) {
  try {
    return Le(e, t);
  } catch {
    return e;
  }
}
function Io(e, t) {
  if (e = Ft(e), t = Oo(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return $n(e);
}
function Ee(e, t, r) {
  try {
    return Io(e, t);
  } catch {
    return e;
  }
}
function Po(e, t) {
  if (e = Ft(e), t = Oo(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return $n(e);
}
function Re(e, t, r) {
  try {
    return Po(e, t);
  } catch {
    return e;
  }
}
function Dl(e, t = 0.15) {
  return fo(e) > 0.5 ? Io(e, t) : Po(e, t);
}
function an(e, t, r) {
  try {
    return Dl(e, t);
  } catch {
    return e;
  }
}
function Ml(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const oa = (e) => Ml(e) && e !== "classes";
function Q(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Nt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ot(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ia(e) {
  if (/* @__PURE__ */ Y.isValidElement(e) || !Ot(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = ia(e[r]);
  }), t;
}
function it(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ot(e) && Ot(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ Y.isValidElement(t[o]) ? n[o] = t[o] : Ot(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ot(e[o]) ? n[o] = it(e[o], t[o], r) : r.clone ? n[o] = Ot(t[o]) ? ia(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function kr(e, t) {
  return t ? it(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const zt = process.env.NODE_ENV !== "production" ? b.oneOfType([b.number, b.string, b.object, b.array]) : {};
function jl(e, t) {
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
function Nl(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Fl(e, t) {
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
function zl(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const c = t(e.breakpoints.not(...s), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const kn = {
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
}, fi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${kn[e]}px)`
}, Bl = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : kn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function At(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || fi;
    return t.reduce((a, s, c) => (a[i.up(i.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || fi;
    return Object.keys(t).reduce((a, s) => {
      if (Nl(i.keys, s)) {
        const c = Fl(n.containerQueries ? n : Bl, s);
        c && (a[c] = r(t[s], s));
      } else if (Object.keys(i.values || kn).includes(s)) {
        const c = i.up(s);
        a[c] = r(t[s], s);
      } else {
        const c = s;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Ll(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Vl(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function On(e, t, r = !0) {
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
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = On(e, r) || n, t && (o = t(o, n, e)), o;
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
    const s = a[t], c = a.theme, u = On(c, n) || {};
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
function Wl(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ul = {
  m: "margin",
  p: "padding"
}, Hl = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, pi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Kl = Wl((e) => {
  if (e.length > 2)
    if (pi[e])
      e = pi[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ul[t], o = Hl[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), In = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Pn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Yl = [...In, ...Pn];
function Lr(e, t, r, n) {
  const o = On(e, t, !0) ?? r;
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
function Ao(e) {
  return Lr(e, "spacing", 8, "spacing");
}
function Vr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Gl(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Vr(t, r), n), {});
}
function ql(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Kl(r), i = Gl(o, n), a = e[r];
  return At(e, a, i);
}
function aa(e, t) {
  const r = Ao(e.theme);
  return Object.keys(e).map((n) => ql(e, t, n, r)).reduce(kr, {});
}
function De(e) {
  return aa(e, In);
}
De.propTypes = process.env.NODE_ENV !== "production" ? In.reduce((e, t) => (e[t] = zt, e), {}) : {};
De.filterProps = In;
function Me(e) {
  return aa(e, Pn);
}
Me.propTypes = process.env.NODE_ENV !== "production" ? Pn.reduce((e, t) => (e[t] = zt, e), {}) : {};
Me.filterProps = Pn;
process.env.NODE_ENV !== "production" && Yl.reduce((e, t) => (e[t] = zt, e), {});
function An(...e) {
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
const Xl = ft("border", ut), Jl = ft("borderTop", ut), Ql = ft("borderRight", ut), Zl = ft("borderBottom", ut), ec = ft("borderLeft", ut), tc = ft("borderColor"), rc = ft("borderTopColor"), nc = ft("borderRightColor"), oc = ft("borderBottomColor"), ic = ft("borderLeftColor"), ac = ft("outline", ut), sc = ft("outlineColor"), _n = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Lr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Vr(t, n)
    });
    return At(e, e.borderRadius, r);
  }
  return null;
};
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: zt
} : {};
_n.filterProps = ["borderRadius"];
An(Xl, Jl, Ql, Zl, ec, tc, rc, nc, oc, ic, _n, ac, sc);
const Dn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Lr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Vr(t, n)
    });
    return At(e, e.gap, r);
  }
  return null;
};
Dn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: zt
} : {};
Dn.filterProps = ["gap"];
const Mn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Lr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Vr(t, n)
    });
    return At(e, e.columnGap, r);
  }
  return null;
};
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: zt
} : {};
Mn.filterProps = ["columnGap"];
const jn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Lr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Vr(t, n)
    });
    return At(e, e.rowGap, r);
  }
  return null;
};
jn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: zt
} : {};
jn.filterProps = ["rowGap"];
const lc = Ne({
  prop: "gridColumn"
}), cc = Ne({
  prop: "gridRow"
}), uc = Ne({
  prop: "gridAutoFlow"
}), dc = Ne({
  prop: "gridAutoColumns"
}), fc = Ne({
  prop: "gridAutoRows"
}), pc = Ne({
  prop: "gridTemplateColumns"
}), gc = Ne({
  prop: "gridTemplateRows"
}), hc = Ne({
  prop: "gridTemplateAreas"
}), mc = Ne({
  prop: "gridArea"
});
An(Dn, Mn, jn, lc, cc, uc, dc, fc, pc, gc, hc, mc);
function sr(e, t) {
  return t === "grey" ? t : e;
}
const yc = Ne({
  prop: "color",
  themeKey: "palette",
  transform: sr
}), bc = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: sr
}), vc = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: sr
});
An(yc, bc, vc);
function nt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Cc = Ne({
  prop: "width",
  transform: nt
}), _o = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, c;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || kn[r];
      return n ? ((c = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
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
_o.filterProps = ["maxWidth"];
const wc = Ne({
  prop: "minWidth",
  transform: nt
}), xc = Ne({
  prop: "height",
  transform: nt
}), Sc = Ne({
  prop: "maxHeight",
  transform: nt
}), Ec = Ne({
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
const Rc = Ne({
  prop: "boxSizing"
});
An(Cc, _o, wc, xc, Sc, Ec, Rc);
const Nn = {
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
    style: _n
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
    style: Dn
  },
  rowGap: {
    style: jn
  },
  columnGap: {
    style: Mn
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
    style: _o
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
function Tc(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function $c(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kc() {
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
      cssProperty: c = r,
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
    const h = On(o, u) || {};
    return d ? d(a) : At(a, n, (C) => {
      let m = wn(h, g, C);
      return C === m && typeof C == "string" && (m = wn(h, g, `${r}${C === "default" ? "" : Q(C)}`, C)), c === !1 ? m : {
        [c]: m
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
    const i = o.unstable_sxConfig ?? Nn;
    function a(s) {
      let c = s;
      if (typeof s == "function")
        c = s(o);
      else if (typeof s != "object")
        return s;
      if (!c)
        return null;
      const u = Ll(o.breakpoints), g = Object.keys(u);
      let d = u;
      return Object.keys(c).forEach((h) => {
        const v = $c(c[h], o);
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
              Tc(C, v) ? d[h] = t({
                sx: v,
                theme: o
              }) : d = kr(d, C);
            }
          else
            d = kr(d, e(h, v, o, i));
      }), jl(o, Vl(g, d));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const cr = kc();
cr.filterProps = ["sx"];
var po = { exports: {} }, Sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gi;
function Oc() {
  if (gi) return Sr;
  gi = 1;
  var e = It, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, u) {
    var g, d = {}, h = null, v = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (g in c) n.call(c, g) && !i.hasOwnProperty(g) && (d[g] = c[g]);
    if (s && s.defaultProps) for (g in c = s.defaultProps, c) d[g] === void 0 && (d[g] = c[g]);
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
var hi;
function Ic() {
  return hi || (hi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = It, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), C = Symbol.iterator, m = "@@iterator";
    function p(f) {
      if (f === null || typeof f != "object")
        return null;
      var O = C && f[C] || f[m];
      return typeof O == "function" ? O : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(f) {
      {
        for (var O = arguments.length, L = new Array(O > 1 ? O - 1 : 0), re = 1; re < O; re++)
          L[re - 1] = arguments[re];
        E("error", f, L);
      }
    }
    function E(f, O, L) {
      {
        var re = x.ReactDebugCurrentFrame, fe = re.getStackAddendum();
        fe !== "" && (O += "%s", L = L.concat([fe]));
        var pe = L.map(function(ce) {
          return String(ce);
        });
        pe.unshift("Warning: " + O), Function.prototype.apply.call(console[f], console, pe);
      }
    }
    var w = !1, y = !1, k = !1, S = !1, _ = !1, j;
    j = Symbol.for("react.module.reference");
    function l(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === i || _ || f === o || f === u || f === g || S || f === v || w || y || k || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === j || f.getModuleId !== void 0));
    }
    function $(f, O, L) {
      var re = f.displayName;
      if (re)
        return re;
      var fe = O.displayName || O.name || "";
      return fe !== "" ? L + "(" + fe + ")" : L;
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
            var L = f;
            return D(L._context) + ".Provider";
          case c:
            return $(f, f.render, "ForwardRef");
          case d:
            var re = f.displayName || null;
            return re !== null ? re : P(f.type) || "Memo";
          case h: {
            var fe = f, pe = fe._payload, ce = fe._init;
            try {
              return P(ce(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, q = 0, ie, ge, we, le, A, z, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function V() {
      {
        if (q === 0) {
          ie = console.log, ge = console.info, we = console.warn, le = console.error, A = console.group, z = console.groupCollapsed, ne = console.groupEnd;
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
            log: H({}, f, {
              value: ie
            }),
            info: H({}, f, {
              value: ge
            }),
            warn: H({}, f, {
              value: we
            }),
            error: H({}, f, {
              value: le
            }),
            group: H({}, f, {
              value: A
            }),
            groupCollapsed: H({}, f, {
              value: z
            }),
            groupEnd: H({}, f, {
              value: ne
            })
          });
        }
        q < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = x.ReactCurrentDispatcher, N;
    function W(f, O, L) {
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
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new $e();
    }
    function F(f, O) {
      if (!f || ee)
        return "";
      {
        var L = Z.get(f);
        if (L !== void 0)
          return L;
      }
      var re;
      ee = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = X.current, X.current = null, V();
      try {
        if (O) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Fe) {
              re = Fe;
            }
            Reflect.construct(f, [], ce);
          } else {
            try {
              ce.call();
            } catch (Fe) {
              re = Fe;
            }
            f.call(ce.prototype);
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
`), ke = se.length - 1, Ie = Ue.length - 1; ke >= 1 && Ie >= 0 && se[ke] !== Ue[Ie]; )
            Ie--;
          for (; ke >= 1 && Ie >= 0; ke--, Ie--)
            if (se[ke] !== Ue[Ie]) {
              if (ke !== 1 || Ie !== 1)
                do
                  if (ke--, Ie--, Ie < 0 || se[ke] !== Ue[Ie]) {
                    var Je = `
` + se[ke].replace(" at new ", " at ");
                    return f.displayName && Je.includes("<anonymous>") && (Je = Je.replace("<anonymous>", f.displayName)), typeof f == "function" && Z.set(f, Je), Je;
                  }
                while (ke >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        ee = !1, X.current = pe, ae(), Error.prepareStackTrace = fe;
      }
      var Mt = f ? f.displayName || f.name : "", et = Mt ? W(Mt) : "";
      return typeof f == "function" && Z.set(f, et), et;
    }
    function Ae(f, O, L) {
      return F(f, !1);
    }
    function U(f) {
      var O = f.prototype;
      return !!(O && O.isReactComponent);
    }
    function je(f, O, L) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return F(f, U(f));
      if (typeof f == "string")
        return W(f);
      switch (f) {
        case u:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return Ae(f.render);
          case d:
            return je(f.type, O, L);
          case h: {
            var re = f, fe = re._payload, pe = re._init;
            try {
              return je(pe(fe), O, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, at = {}, qe = x.ReactDebugCurrentFrame;
    function We(f) {
      if (f) {
        var O = f._owner, L = je(f.type, f._source, O ? O.type : null);
        qe.setExtraStackFrame(L);
      } else
        qe.setExtraStackFrame(null);
    }
    function Bt(f, O, L, re, fe) {
      {
        var pe = Function.call.bind(Ve);
        for (var ce in f)
          if (pe(f, ce)) {
            var se = void 0;
            try {
              if (typeof f[ce] != "function") {
                var Ue = Error((re || "React class") + ": " + L + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ue.name = "Invariant Violation", Ue;
              }
              se = f[ce](O, ce, re, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ke) {
              se = ke;
            }
            se && !(se instanceof Error) && (We(fe), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", L, ce, typeof se), We(null)), se instanceof Error && !(se.message in at) && (at[se.message] = !0, We(fe), T("Failed %s type: %s", L, se.message), We(null));
          }
      }
    }
    var ht = Array.isArray;
    function st(f) {
      return ht(f);
    }
    function te(f) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, L = O && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return L;
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
    var lt = x.ReactCurrentOwner, Bn = {
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
      if (typeof f.ref == "string" && lt.current && O && lt.current.stateNode !== O) {
        var L = P(lt.current.type);
        qt[L] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(lt.current.type), f.ref), qt[L] = !0);
      }
    }
    function Ln(f, O) {
      {
        var L = function() {
          pt || (pt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function Be(f, O) {
      {
        var L = function() {
          hr || (hr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var Kr = function(f, O, L, re, fe, pe, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: O,
        ref: L,
        props: ce,
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
    function Xe(f, O, L, re, fe) {
      {
        var pe, ce = {}, se = null, Ue = null;
        L !== void 0 && (Wt(L), se = "" + L), Ur(O) && (Wt(O.key), se = "" + O.key), _t(O) && (Ue = O.ref, Hr(O, fe));
        for (pe in O)
          Ve.call(O, pe) && !Bn.hasOwnProperty(pe) && (ce[pe] = O[pe]);
        if (f && f.defaultProps) {
          var ke = f.defaultProps;
          for (pe in ke)
            ce[pe] === void 0 && (ce[pe] = ke[pe]);
        }
        if (se || Ue) {
          var Ie = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          se && Ln(ce, Ie), Ue && Be(ce, Ie);
        }
        return Kr(f, se, Ue, fe, re, lt.current, ce);
      }
    }
    var gt = x.ReactCurrentOwner, Yr = x.ReactDebugCurrentFrame;
    function Rt(f) {
      if (f) {
        var O = f._owner, L = je(f.type, f._source, O ? O.type : null);
        Yr.setExtraStackFrame(L);
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
    var Tt = {};
    function qr(f) {
      {
        var O = Gr();
        if (!O) {
          var L = typeof f == "string" ? f : f.displayName || f.name;
          L && (O = `

Check the top-level render call using <` + L + ">.");
        }
        return O;
      }
    }
    function $t(f, O) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var L = qr(O);
        if (Tt[L])
          return;
        Tt[L] = !0;
        var re = "";
        f && f._owner && f._owner !== gt.current && (re = " It was passed a child from " + P(f._owner.type) + "."), Rt(f), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, re), Rt(null);
      }
    }
    function Xt(f, O) {
      {
        if (typeof f != "object")
          return;
        if (st(f))
          for (var L = 0; L < f.length; L++) {
            var re = f[L];
            yr(re) && $t(re, O);
          }
        else if (yr(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var fe = p(f);
          if (typeof fe == "function" && fe !== f.entries)
            for (var pe = fe.call(f), ce; !(ce = pe.next()).done; )
              yr(ce.value) && $t(ce.value, O);
        }
      }
    }
    function Ye(f) {
      {
        var O = f.type;
        if (O == null || typeof O == "string")
          return;
        var L;
        if (typeof O == "function")
          L = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === d))
          L = O.propTypes;
        else
          return;
        if (L) {
          var re = P(O);
          Bt(L, f.props, "prop", re, f);
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
        for (var O = Object.keys(f.props), L = 0; L < O.length; L++) {
          var re = O[L];
          if (re !== "children" && re !== "key") {
            Rt(f), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Rt(null);
            break;
          }
        }
        f.ref !== null && (Rt(f), T("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
      }
    }
    var mt = {};
    function K(f, O, L, re, fe, pe) {
      {
        var ce = l(f);
        if (!ce) {
          var se = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = Ut();
          Ue ? se += Ue : se += Gr();
          var ke;
          f === null ? ke = "null" : st(f) ? ke = "array" : f !== void 0 && f.$$typeof === t ? (ke = "<" + (P(f.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof f, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, se);
        }
        var Ie = Xe(f, O, L, fe, pe);
        if (Ie == null)
          return Ie;
        if (ce) {
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
            var Vn = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ht, et, Vn, et), mt[et + Ht] = !0;
          }
        }
        return f === n ? Jt(Ie) : Ye(Ie), Ie;
      }
    }
    function Dt(f, O, L) {
      return K(f, O, L, !0);
    }
    function br(f, O, L) {
      return K(f, O, L, !1);
    }
    var Xr = br, Jr = Dt;
    Er.Fragment = n, Er.jsx = Xr, Er.jsxs = Jr;
  }()), Er;
}
process.env.NODE_ENV === "production" ? po.exports = Oc() : po.exports = Ic();
var B = po.exports;
/**
 * @mui/styled-engine v6.1.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Pc(e, t) {
  const r = St(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ac(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const mi = [];
function yi(e) {
  return mi[0] = e, To(mi);
}
const _c = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Dc(e) {
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
  } = e, i = _c(t), a = Object.keys(i);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function c(h) {
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
    return v === 0 ? s(a[1]) : v === a.length - 1 ? c(a[v]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: c,
    between: u,
    only: g,
    not: d,
    unit: r,
    ...o
  };
}
const Mc = {
  borderRadius: 4
};
function sa(e = 8, t = Ao({
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
function jc(e, t) {
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
function la(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = Dc(r), c = sa(o);
  let u = it({
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
      ...Mc,
      ...i
    }
  }, a);
  return u = zl(u), u.applyStyles = jc, u = t.reduce((g, d) => it(g, d), u), u.unstable_sxConfig = {
    ...Nn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return cr({
      sx: d,
      theme: this
    });
  }, u;
}
const bi = (e) => e, Nc = () => {
  let e = bi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = bi;
    }
  };
}, Fc = Nc(), zc = {
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
  const n = zc[t];
  return n ? `${r}-${n}` : `${Fc.generate(e)}-${t}`;
}
function pr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Gt(e, o, r);
  }), n;
}
var go = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vi;
function Bc() {
  if (vi) return ve;
  vi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), C;
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
                case c:
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
  return ve.ContextConsumer = a, ve.ContextProvider = i, ve.Element = e, ve.ForwardRef = c, ve.Fragment = r, ve.Lazy = h, ve.Memo = d, ve.Portal = t, ve.Profiler = o, ve.StrictMode = n, ve.Suspense = u, ve.SuspenseList = g, ve.isAsyncMode = function() {
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
    return m(p) === c;
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
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === u || p === g || p === v || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === C || p.getModuleId !== void 0);
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
var Ci;
function Lc() {
  return Ci || (Ci = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), C = !1, m = !1, p = !1, x = !1, T = !1, E;
    E = Symbol.for("react.module.reference");
    function w(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === r || U === o || T || U === n || U === u || U === g || x || U === v || C || m || p || typeof U == "object" && U !== null && (U.$$typeof === h || U.$$typeof === d || U.$$typeof === i || U.$$typeof === a || U.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === E || U.getModuleId !== void 0));
    }
    function y(U) {
      if (typeof U == "object" && U !== null) {
        var je = U.$$typeof;
        switch (je) {
          case e:
            var Ve = U.type;
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
                  case c:
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
    var k = a, S = i, _ = e, j = c, l = r, $ = h, D = d, P = t, H = o, q = n, ie = u, ge = g, we = !1, le = !1;
    function A(U) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(U) {
      return le || (le = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(U) {
      return y(U) === a;
    }
    function oe(U) {
      return y(U) === i;
    }
    function V(U) {
      return typeof U == "object" && U !== null && U.$$typeof === e;
    }
    function ae(U) {
      return y(U) === c;
    }
    function X(U) {
      return y(U) === r;
    }
    function N(U) {
      return y(U) === h;
    }
    function W(U) {
      return y(U) === d;
    }
    function ee(U) {
      return y(U) === t;
    }
    function Z(U) {
      return y(U) === o;
    }
    function $e(U) {
      return y(U) === n;
    }
    function F(U) {
      return y(U) === u;
    }
    function Ae(U) {
      return y(U) === g;
    }
    Ce.ContextConsumer = k, Ce.ContextProvider = S, Ce.Element = _, Ce.ForwardRef = j, Ce.Fragment = l, Ce.Lazy = $, Ce.Memo = D, Ce.Portal = P, Ce.Profiler = H, Ce.StrictMode = q, Ce.Suspense = ie, Ce.SuspenseList = ge, Ce.isAsyncMode = A, Ce.isConcurrentMode = z, Ce.isContextConsumer = ne, Ce.isContextProvider = oe, Ce.isElement = V, Ce.isForwardRef = ae, Ce.isFragment = X, Ce.isLazy = N, Ce.isMemo = W, Ce.isPortal = ee, Ce.isProfiler = Z, Ce.isStrictMode = $e, Ce.isSuspense = F, Ce.isSuspenseList = Ae, Ce.isValidElementType = w, Ce.typeOf = y;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? go.exports = Bc() : go.exports = Lc();
var wi = go.exports;
function ca(e, t = "") {
  return e.displayName || e.name || t;
}
function xi(e, t, r) {
  const n = ca(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Vc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ca(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case wi.ForwardRef:
          return xi(e, e.render, "ForwardRef");
        case wi.Memo:
          return xi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ua(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: yi(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = yi(o.style));
  }), n;
}
const Wc = la();
function ro(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Uc(e) {
  return e ? (t, r) => r[e] : null;
}
function Hc(e, t, r) {
  e.theme = qc(e.theme) ? r : e.theme[t] || e.theme;
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
    return da(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function da(e, t, r = []) {
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
function Kc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Wc,
    rootShouldForwardProp: n = ro,
    slotShouldForwardProp: o = ro
  } = e;
  function i(s) {
    Hc(s, t, r);
  }
  return (s, c = {}) => {
    Ac(s, (y) => y.filter((k) => k !== cr));
    const {
      name: u,
      slot: g,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Uc(fa(g)),
      ...C
    } = c, m = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      g && g !== "Root" && g !== "root" || !1
    ), p = h || !1;
    let x = ro;
    g === "Root" || g === "root" ? x = n : g ? x = o : Xc(s) && (x = void 0);
    const T = Pc(s, {
      shouldForwardProp: x,
      label: Gc(u, g),
      ...C
    }), E = (y) => {
      if (typeof y == "function" && y.__emotion_real !== y)
        return function(S) {
          return gn(S, y);
        };
      if (Ot(y)) {
        const k = ua(y);
        return k.variants ? function(_) {
          return gn(_, k);
        } : k.style;
      }
      return y;
    }, w = (...y) => {
      const k = [], S = y.map(E), _ = [];
      if (k.push(i), u && v && _.push(function(D) {
        var ie, ge;
        const H = (ge = (ie = D.theme.components) == null ? void 0 : ie[u]) == null ? void 0 : ge.styleOverrides;
        if (!H)
          return null;
        const q = {};
        for (const we in H)
          q[we] = gn(D, H[we]);
        return v(D, q);
      }), u && !m && _.push(function(D) {
        var q, ie;
        const P = D.theme, H = (ie = (q = P == null ? void 0 : P.components) == null ? void 0 : q[u]) == null ? void 0 : ie.variants;
        return H ? da(D, H) : null;
      }), p || _.push(cr), Array.isArray(S[0])) {
        const $ = S.shift(), D = new Array(k.length).fill(""), P = new Array(_.length).fill("");
        let H;
        H = [...D, ...$, ...P], H.raw = [...D, ...$.raw, ...P], k.unshift(H);
      }
      const j = [...k, ...S, ..._], l = T(...j);
      return s.muiName && (l.muiName = s.muiName), process.env.NODE_ENV !== "production" && (l.displayName = Yc(u, g, s)), l;
    };
    return T.withConfig && (w.withConfig = T.withConfig), w;
  };
}
function Yc(e, t, r) {
  return e ? `${e}${Q(t || "")}` : `Styled(${Vc(r)})`;
}
function Gc(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${fa(t || "Root")}`), r;
}
function qc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Xc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function fa(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Jc = typeof window < "u" ? Y.useLayoutEffect : Y.useEffect;
function pa(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Qc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Zc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !Qc(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const eu = pa(b.elementType, Zc), tu = b.oneOfType([b.func, b.object]);
function ru(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function nu(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function sn(e) {
  const t = Y.useRef(e);
  return Jc(() => {
    t.current = e;
  }), Y.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function ho(...e) {
  return Y.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      ru(r, t);
    });
  }, e);
}
const Si = {};
function ga(e, t) {
  const r = Y.useRef(Si);
  return r.current === Si && (r.current = e(t)), r;
}
const ou = [];
function iu(e) {
  Y.useEffect(e, ou);
}
class Do {
  constructor() {
    wr(this, "currentId", null);
    wr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    wr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Do();
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
function au() {
  const e = ga(Do.create).current;
  return iu(e.disposeEffect), e;
}
function Ei(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const su = /* @__PURE__ */ Y.createContext(void 0);
process.env.NODE_ENV !== "production" && (b.node, b.object);
function lu(e) {
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
function cu({
  props: e,
  name: t
}) {
  const r = Y.useContext(su);
  return lu({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Ri = {
  theme: void 0
};
function uu(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Ri.theme = o.theme, i = ua(e(Ri)), t = i, r = o.theme), i;
  };
}
function du(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Ti = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, fu = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, c]) => {
      (!r || r && !r([...i, s])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...i, s], Array.isArray(c) ? [...a, s] : a) : t([...i, s], c, a));
    });
  }
  n(e);
}, pu = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function no(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return fu(
    e,
    (s, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(s, c))) {
        const g = `--${r ? `${r}-` : ""}${s.join("-")}`, d = pu(s, c);
        Object.assign(o, {
          [g]: d
        }), Ti(i, s, `var(${g})`, u), Ti(a, s, `var(${g}, ${d})`, u);
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
function gu(e, t = {}) {
  const {
    getSelector: r = p,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...c
  } = e, {
    vars: u,
    css: g,
    varsWithDefaults: d
  } = no(c, t);
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
    } = no(w, t);
    h = it(h, S), v[E] = {
      css: k,
      vars: y
    };
  }), C) {
    const {
      css: E,
      vars: w,
      varsWithDefaults: y
    } = no(C, t);
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
      function y(l, $) {
        Object.keys($).length && E.push(typeof l == "string" ? {
          [l]: {
            ...$
          }
        } : l);
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
          css: l
        } = k, $ = (j = (_ = i[w]) == null ? void 0 : _.palette) == null ? void 0 : j.mode, D = !n && $ ? {
          colorScheme: $,
          ...l
        } : {
          ...l
        };
        y(r(w, {
          ...D
        }), D);
      }
      return Object.entries(S).forEach(([l, {
        css: $
      }]) => {
        var H, q;
        const D = (q = (H = i[l]) == null ? void 0 : H.palette) == null ? void 0 : q.mode, P = !n && D ? {
          colorScheme: D,
          ...$
        } : {
          ...$
        };
        y(r(l, {
          ...P
        }), P);
      }), E;
    }
  };
}
function hu(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const _r = {
  black: "#000",
  white: "#fff"
}, mu = {
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
function ha() {
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
const yu = ha();
function ma() {
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
const $i = ma();
function ki(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Po(e.main, o) : t === "dark" && (e.dark = Io(e.main, i)));
}
function bu(e = "light") {
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
function vu(e = "light") {
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
function Cu(e = "light") {
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
function wu(e = "light") {
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
function xu(e = "light") {
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
function Su(e = "light") {
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
function Mo(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || bu(t), a = e.secondary || vu(t), s = e.error || Cu(t), c = e.info || wu(t), u = e.success || xu(t), g = e.warning || Su(t);
  function d(m) {
    const p = di(m, $i.text.primary) >= r ? $i.text.primary : yu.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = di(m, p);
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
    return ki(m, "light", T, n), ki(m, "dark", E, n), m.contrastText || (m.contrastText = d(m.main)), m;
  };
  let v;
  return t === "light" ? v = ha() : t === "dark" && (v = ma()), process.env.NODE_ENV !== "production" && (v || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), it({
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
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: mu,
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
function Eu(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Ru(e, t) {
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
function Tu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Oi = {
  textTransform: "uppercase"
}, Ii = '"Roboto", "Helvetica", "Arial", sans-serif';
function $u(e, t) {
  const {
    fontFamily: r = Ii,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: g,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, v = g || ((p) => `${p / c * h}rem`), C = (p, x, T, E, w) => ({
    fontFamily: r,
    fontWeight: p,
    fontSize: v(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Ii ? {
      letterSpacing: `${Tu(E / x)}em`
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
    button: C(a, 14, 1.75, 0.4, Oi),
    caption: C(i, 12, 1.66, 0.4),
    overline: C(i, 12, 2.66, 1, Oi),
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
    htmlFontSize: c,
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
const ku = 0.2, Ou = 0.14, Iu = 0.12;
function Oe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ku})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ou})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Iu})`].join(",");
}
const Pu = ["none", Oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Au = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, _u = {
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
function Pi(e) {
  return `${Math.round(e)}ms`;
}
function Du(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Mu(e) {
  const t = {
    ...Au,
    ...e.easing
  }, r = {
    ..._u,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Du,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: c = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const g = (h) => typeof h == "string", d = (h) => !Number.isNaN(parseFloat(h));
        !g(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !g(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), g(s) || console.error('MUI: Argument "easing" must be a string.'), !d(c) && !g(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((g) => `${g} ${typeof a == "string" ? a : Pi(a)} ${s} ${typeof c == "string" ? c : Pi(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const ju = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Nu(e) {
  return Ot(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ya(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !Nu(s) || a.startsWith("unstable_") ? delete n[a] : Ot(s) && (n[a] = {
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
function mo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Nt(20));
  const g = Mo(i), d = la(e);
  let h = it(d, {
    mixins: Ru(d.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Pu.slice(),
    typography: $u(g, s),
    transitions: Mu(a),
    zIndex: {
      ...ju
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
    ...Nn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(C) {
    return cr({
      sx: C,
      theme: this
    });
  }, h.toRuntimeSource = ya, h;
}
function Fu(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const zu = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Fu(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ba(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function va(e) {
  return e === "dark" ? zu : [];
}
function Bu(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Mo(t);
  return {
    palette: i,
    opacity: {
      ...ba(i.mode),
      ...r
    },
    overlays: n || va(i.mode),
    ...o
  };
}
function Lu(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Vu = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Wu = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Vu(e.cssVarPrefix).forEach((s) => {
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
function Uu(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function R(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function $r(e) {
  return !e || !e.startsWith("hsl") ? e : na(e);
}
function kt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Tr($r(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Hu(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const bt = (e) => {
  try {
    return e();
  } catch {
  }
}, Ku = (e = "mui") => du(e);
function oo(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Bu({
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
  } = mo({
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
      ...ba(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || va(o)
  }, a;
}
function Yu(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Lu,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, g = Object.keys(r)[0], d = n || (r.light && g !== "light" ? "light" : g), h = Ku(i), {
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
  const E = oo(x, T, u, d);
  C && !x.light && oo(x, C, void 0, "light"), m && !x.dark && oo(x, m, void 0, "dark");
  let w = {
    defaultColorScheme: d,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: x,
    font: {
      ...Eu(E.typography),
      ...E.font
    },
    spacing: Hu(u.spacing)
  };
  Object.keys(w.colorSchemes).forEach((j) => {
    const l = w.colorSchemes[j].palette, $ = (D) => {
      const P = D.split("-"), H = P[1], q = P[2];
      return h(D, l[H][q]);
    };
    if (l.mode === "light" && (R(l.common, "background", "#fff"), R(l.common, "onBackground", "#000")), l.mode === "dark" && (R(l.common, "background", "#000"), R(l.common, "onBackground", "#fff")), Uu(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      R(l.Alert, "errorColor", Ee(l.error.light, 0.6)), R(l.Alert, "infoColor", Ee(l.info.light, 0.6)), R(l.Alert, "successColor", Ee(l.success.light, 0.6)), R(l.Alert, "warningColor", Ee(l.warning.light, 0.6)), R(l.Alert, "errorFilledBg", $("palette-error-main")), R(l.Alert, "infoFilledBg", $("palette-info-main")), R(l.Alert, "successFilledBg", $("palette-success-main")), R(l.Alert, "warningFilledBg", $("palette-warning-main")), R(l.Alert, "errorFilledColor", bt(() => l.getContrastText(l.error.main))), R(l.Alert, "infoFilledColor", bt(() => l.getContrastText(l.info.main))), R(l.Alert, "successFilledColor", bt(() => l.getContrastText(l.success.main))), R(l.Alert, "warningFilledColor", bt(() => l.getContrastText(l.warning.main))), R(l.Alert, "errorStandardBg", Re(l.error.light, 0.9)), R(l.Alert, "infoStandardBg", Re(l.info.light, 0.9)), R(l.Alert, "successStandardBg", Re(l.success.light, 0.9)), R(l.Alert, "warningStandardBg", Re(l.warning.light, 0.9)), R(l.Alert, "errorIconColor", $("palette-error-main")), R(l.Alert, "infoIconColor", $("palette-info-main")), R(l.Alert, "successIconColor", $("palette-success-main")), R(l.Alert, "warningIconColor", $("palette-warning-main")), R(l.AppBar, "defaultBg", $("palette-grey-100")), R(l.Avatar, "defaultBg", $("palette-grey-400")), R(l.Button, "inheritContainedBg", $("palette-grey-300")), R(l.Button, "inheritContainedHoverBg", $("palette-grey-A100")), R(l.Chip, "defaultBorder", $("palette-grey-400")), R(l.Chip, "defaultAvatarColor", $("palette-grey-700")), R(l.Chip, "defaultIconColor", $("palette-grey-700")), R(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), R(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), R(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), R(l.LinearProgress, "primaryBg", Re(l.primary.main, 0.62)), R(l.LinearProgress, "secondaryBg", Re(l.secondary.main, 0.62)), R(l.LinearProgress, "errorBg", Re(l.error.main, 0.62)), R(l.LinearProgress, "infoBg", Re(l.info.main, 0.62)), R(l.LinearProgress, "successBg", Re(l.success.main, 0.62)), R(l.LinearProgress, "warningBg", Re(l.warning.main, 0.62)), R(l.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), R(l.Slider, "primaryTrack", Re(l.primary.main, 0.62)), R(l.Slider, "secondaryTrack", Re(l.secondary.main, 0.62)), R(l.Slider, "errorTrack", Re(l.error.main, 0.62)), R(l.Slider, "infoTrack", Re(l.info.main, 0.62)), R(l.Slider, "successTrack", Re(l.success.main, 0.62)), R(l.Slider, "warningTrack", Re(l.warning.main, 0.62));
      const D = an(l.background.default, 0.8);
      R(l.SnackbarContent, "bg", D), R(l.SnackbarContent, "color", bt(() => l.getContrastText(D))), R(l.SpeedDialAction, "fabHoverBg", an(l.background.paper, 0.15)), R(l.StepConnector, "border", $("palette-grey-400")), R(l.StepContent, "border", $("palette-grey-400")), R(l.Switch, "defaultColor", $("palette-common-white")), R(l.Switch, "defaultDisabledColor", $("palette-grey-100")), R(l.Switch, "primaryDisabledColor", Re(l.primary.main, 0.62)), R(l.Switch, "secondaryDisabledColor", Re(l.secondary.main, 0.62)), R(l.Switch, "errorDisabledColor", Re(l.error.main, 0.62)), R(l.Switch, "infoDisabledColor", Re(l.info.main, 0.62)), R(l.Switch, "successDisabledColor", Re(l.success.main, 0.62)), R(l.Switch, "warningDisabledColor", Re(l.warning.main, 0.62)), R(l.TableCell, "border", Re(on(l.divider, 1), 0.88)), R(l.Tooltip, "bg", on(l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      R(l.Alert, "errorColor", Re(l.error.light, 0.6)), R(l.Alert, "infoColor", Re(l.info.light, 0.6)), R(l.Alert, "successColor", Re(l.success.light, 0.6)), R(l.Alert, "warningColor", Re(l.warning.light, 0.6)), R(l.Alert, "errorFilledBg", $("palette-error-dark")), R(l.Alert, "infoFilledBg", $("palette-info-dark")), R(l.Alert, "successFilledBg", $("palette-success-dark")), R(l.Alert, "warningFilledBg", $("palette-warning-dark")), R(l.Alert, "errorFilledColor", bt(() => l.getContrastText(l.error.dark))), R(l.Alert, "infoFilledColor", bt(() => l.getContrastText(l.info.dark))), R(l.Alert, "successFilledColor", bt(() => l.getContrastText(l.success.dark))), R(l.Alert, "warningFilledColor", bt(() => l.getContrastText(l.warning.dark))), R(l.Alert, "errorStandardBg", Ee(l.error.light, 0.9)), R(l.Alert, "infoStandardBg", Ee(l.info.light, 0.9)), R(l.Alert, "successStandardBg", Ee(l.success.light, 0.9)), R(l.Alert, "warningStandardBg", Ee(l.warning.light, 0.9)), R(l.Alert, "errorIconColor", $("palette-error-main")), R(l.Alert, "infoIconColor", $("palette-info-main")), R(l.Alert, "successIconColor", $("palette-success-main")), R(l.Alert, "warningIconColor", $("palette-warning-main")), R(l.AppBar, "defaultBg", $("palette-grey-900")), R(l.AppBar, "darkBg", $("palette-background-paper")), R(l.AppBar, "darkColor", $("palette-text-primary")), R(l.Avatar, "defaultBg", $("palette-grey-600")), R(l.Button, "inheritContainedBg", $("palette-grey-800")), R(l.Button, "inheritContainedHoverBg", $("palette-grey-700")), R(l.Chip, "defaultBorder", $("palette-grey-700")), R(l.Chip, "defaultAvatarColor", $("palette-grey-300")), R(l.Chip, "defaultIconColor", $("palette-grey-300")), R(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), R(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), R(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), R(l.LinearProgress, "primaryBg", Ee(l.primary.main, 0.5)), R(l.LinearProgress, "secondaryBg", Ee(l.secondary.main, 0.5)), R(l.LinearProgress, "errorBg", Ee(l.error.main, 0.5)), R(l.LinearProgress, "infoBg", Ee(l.info.main, 0.5)), R(l.LinearProgress, "successBg", Ee(l.success.main, 0.5)), R(l.LinearProgress, "warningBg", Ee(l.warning.main, 0.5)), R(l.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), R(l.Slider, "primaryTrack", Ee(l.primary.main, 0.5)), R(l.Slider, "secondaryTrack", Ee(l.secondary.main, 0.5)), R(l.Slider, "errorTrack", Ee(l.error.main, 0.5)), R(l.Slider, "infoTrack", Ee(l.info.main, 0.5)), R(l.Slider, "successTrack", Ee(l.success.main, 0.5)), R(l.Slider, "warningTrack", Ee(l.warning.main, 0.5));
      const D = an(l.background.default, 0.98);
      R(l.SnackbarContent, "bg", D), R(l.SnackbarContent, "color", bt(() => l.getContrastText(D))), R(l.SpeedDialAction, "fabHoverBg", an(l.background.paper, 0.15)), R(l.StepConnector, "border", $("palette-grey-600")), R(l.StepContent, "border", $("palette-grey-600")), R(l.Switch, "defaultColor", $("palette-grey-300")), R(l.Switch, "defaultDisabledColor", $("palette-grey-600")), R(l.Switch, "primaryDisabledColor", Ee(l.primary.main, 0.55)), R(l.Switch, "secondaryDisabledColor", Ee(l.secondary.main, 0.55)), R(l.Switch, "errorDisabledColor", Ee(l.error.main, 0.55)), R(l.Switch, "infoDisabledColor", Ee(l.info.main, 0.55)), R(l.Switch, "successDisabledColor", Ee(l.success.main, 0.55)), R(l.Switch, "warningDisabledColor", Ee(l.warning.main, 0.55)), R(l.TableCell, "border", Ee(on(l.divider, 1), 0.68)), R(l.Tooltip, "bg", on(l.grey[700], 0.92));
    }
    kt(l.background, "default"), kt(l.background, "paper"), kt(l.common, "background"), kt(l.common, "onBackground"), kt(l, "divider"), Object.keys(l).forEach((D) => {
      const P = l[D];
      P && typeof P == "object" && (P.main && R(l[D], "mainChannel", Tr($r(P.main))), P.light && R(l[D], "lightChannel", Tr($r(P.light))), P.dark && R(l[D], "darkChannel", Tr($r(P.dark))), P.contrastText && R(l[D], "contrastTextChannel", Tr($r(P.contrastText))), D === "text" && (kt(l[D], "primary"), kt(l[D], "secondary")), D === "action" && (P.active && kt(l[D], "active"), P.selected && kt(l[D], "selected")));
    });
  }), w = t.reduce((j, l) => it(j, l), w);
  const y = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Wu(w)
  }, {
    vars: k,
    generateThemeVars: S,
    generateStyleSheets: _
  } = gu(w, y);
  return w.vars = k, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([j, l]) => {
    w[j] = l;
  }), w.generateThemeVars = S, w.generateStyleSheets = _, w.generateSpacing = function() {
    return sa(u.spacing, Ao(this));
  }, w.getColorSchemeSelector = hu(s), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = a, w.unstable_sxConfig = {
    ...Nn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, w.unstable_sx = function(l) {
    return cr({
      sx: l,
      theme: this
    });
  }, w.toRuntimeSource = ya, w;
}
function Ai(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Mo({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Gu(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", c = o == null ? void 0 : o[s], u = {
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
      return mo(e, ...t);
    let g = r;
    "palette" in e || u[s] && (u[s] !== !0 ? g = u[s].palette : s === "dark" && (g = {
      mode: "dark"
    }));
    const d = mo({
      ...e,
      palette: g
    }, ...t);
    return d.defaultColorScheme = s, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, Ai(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, Ai(d, "light", u.light)), d;
  }
  return !r && !("light" in u) && s === "light" && (u.light = !0), Yu({
    ...a,
    colorSchemes: u,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const qu = Gu(), Xu = "$$material", Et = Kc({
  themeId: Xu,
  defaultTheme: qu,
  rootShouldForwardProp: oa
}), Dr = uu;
process.env.NODE_ENV !== "production" && (b.node, b.object.isRequired);
function gr(e) {
  return cu(e);
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
    const t = ga(xn.create).current, [r, n] = Y.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, Y.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Qu(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Ju() {
  return xn.use();
}
function Qu() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Zu(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function yo(e, t) {
  return yo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, yo(e, t);
}
function ed(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, yo(e, t);
}
const _i = It.createContext(null);
function td(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jo(e, t) {
  var r = function(i) {
    return t && ln(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ms.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function rd(e, t) {
  e = e || {}, t = t || {};
  function r(g) {
    return g in t ? t[g] : e[g];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var c in t) {
    if (n[c])
      for (a = 0; a < n[c].length; a++) {
        var u = n[c][a];
        s[n[c][a]] = r(u);
      }
    s[c] = r(c);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function Kt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function nd(e, t) {
  return jo(e.children, function(r) {
    return cn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Kt(r, "appear", e),
      enter: Kt(r, "enter", e),
      exit: Kt(r, "exit", e)
    });
  });
}
function od(e, t, r) {
  var n = jo(e.children), o = rd(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (ln(a)) {
      var s = i in t, c = i in n, u = t[i], g = ln(u) && !u.props.in;
      c && (!s || g) ? o[i] = cn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Kt(a, "exit", e),
        enter: Kt(a, "enter", e)
      }) : !c && s && !g ? o[i] = cn(a, {
        in: !1
      }) : c && s && ln(u) && (o[i] = cn(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Kt(a, "exit", e),
        enter: Kt(a, "enter", e)
      }));
    }
  }), o;
}
var id = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, ad = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, No = /* @__PURE__ */ function(e) {
  ed(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(td(i));
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
    var a = i.children, s = i.handleExited, c = i.firstRender;
    return {
      children: c ? nd(o, s) : od(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = jo(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var c = bn({}, s.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = Zu(o, ["component", "childFactory"]), c = this.state.contextValue, u = id(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ It.createElement(_i.Provider, {
      value: c
    }, u) : /* @__PURE__ */ It.createElement(_i.Provider, {
      value: c
    }, /* @__PURE__ */ It.createElement(i, s, u));
  }, t;
}(It.Component);
No.propTypes = process.env.NODE_ENV !== "production" ? {
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
No.defaultProps = ad;
function Ca(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: c,
    timeout: u
  } = e, [g, d] = Y.useState(!1), h = xe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, C = xe(r.child, g && r.childLeaving, n && r.childPulsate);
  return !s && !g && d(!0), Y.useEffect(() => {
    if (!s && c != null) {
      const m = setTimeout(c, u);
      return () => {
        clearTimeout(m);
      };
    }
  }, [c, s, u]), /* @__PURE__ */ B.jsx("span", {
    className: h,
    style: v,
    children: /* @__PURE__ */ B.jsx("span", {
      className: C
    })
  });
}
process.env.NODE_ENV !== "production" && (Ca.propTypes = {
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
const ct = pr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), bo = 550, sd = 80, ld = $o`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, cd = $o`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ud = $o`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, dd = Et("span", {
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
}), fd = Et(Ca, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ct.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ld};
    animation-duration: ${bo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ct.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ct.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ct.childLeaving} {
    opacity: 0;
    animation-name: ${cd};
    animation-duration: ${bo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ct.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ud};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, wa = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [c, u] = Y.useState([]), g = Y.useRef(0), d = Y.useRef(null);
  Y.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [c]);
  const h = Y.useRef(!1), v = au(), C = Y.useRef(null), m = Y.useRef(null), p = Y.useCallback((w) => {
    const {
      pulsate: y,
      rippleX: k,
      rippleY: S,
      rippleSize: _,
      cb: j
    } = w;
    u((l) => [...l, /* @__PURE__ */ B.jsx(fd, {
      classes: {
        ripple: xe(i.ripple, ct.ripple),
        rippleVisible: xe(i.rippleVisible, ct.rippleVisible),
        ripplePulsate: xe(i.ripplePulsate, ct.ripplePulsate),
        child: xe(i.child, ct.child),
        childLeaving: xe(i.childLeaving, ct.childLeaving),
        childPulsate: xe(i.childPulsate, ct.childPulsate)
      },
      timeout: bo,
      pulsate: y,
      rippleX: k,
      rippleY: S,
      rippleSize: _
    }, g.current)]), g.current += 1, d.current = j;
  }, [i]), x = Y.useCallback((w = {}, y = {}, k = () => {
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
    const l = j ? null : m.current, $ = l ? l.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let D, P, H;
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
      H = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), H % 2 === 0 && (H += 1);
    else {
      const q = Math.max(Math.abs((l ? l.clientWidth : 0) - D), D) * 2 + 2, ie = Math.max(Math.abs((l ? l.clientHeight : 0) - P), P) * 2 + 2;
      H = Math.sqrt(q ** 2 + ie ** 2);
    }
    w != null && w.touches ? C.current === null && (C.current = () => {
      p({
        pulsate: S,
        rippleX: D,
        rippleY: P,
        rippleSize: H,
        cb: k
      });
    }, v.start(sd, () => {
      C.current && (C.current(), C.current = null);
    })) : p({
      pulsate: S,
      rippleX: D,
      rippleY: P,
      rippleSize: H,
      cb: k
    });
  }, [o, p, v]), T = Y.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), E = Y.useCallback((w, y) => {
    if (v.clear(), (w == null ? void 0 : w.type) === "touchend" && C.current) {
      C.current(), C.current = null, v.start(0, () => {
        E(w, y);
      });
      return;
    }
    C.current = null, u((k) => k.length > 0 ? k.slice(1) : k), d.current = y;
  }, [v]);
  return Y.useImperativeHandle(r, () => ({
    pulsate: T,
    start: x,
    stop: E
  }), [T, x, E]), /* @__PURE__ */ B.jsx(dd, {
    className: xe(ct.root, i.root, a),
    ref: m,
    ...s,
    children: /* @__PURE__ */ B.jsx(No, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (wa.propTypes = {
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
function pd(e) {
  return Gt("MuiButtonBase", e);
}
const gd = pr("MuiButtonBase", ["root", "disabled", "focusVisible"]), hd = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Br({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, pd, o);
  return r && n && (a.root += ` ${n}`), a;
}, md = Et("button", {
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
  [`&.${gd.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Mr = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: c = "button",
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
    onTouchEnd: l,
    onTouchMove: $,
    onTouchStart: D,
    tabIndex: P = 0,
    TouchRippleProps: H,
    touchRippleRef: q,
    type: ie,
    ...ge
  } = n, we = Y.useRef(null), le = Ju(), A = ho(le.ref, q), [z, ne] = Y.useState(!1);
  u && z && ne(!1), Y.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ne(!0), we.current.focus();
    }
  }), []);
  const oe = le.shouldMount && !g && !u;
  Y.useEffect(() => {
    z && h && !g && le.pulsate();
  }, [g, h, z, le]);
  function V(te, Lt, Vt = d) {
    return sn((Wt) => (Lt && Lt(Wt), Vt || le[te](Wt), !0));
  }
  const ae = V("start", S), X = V("stop", x), N = V("stop", T), W = V("stop", j), ee = V("stop", (te) => {
    z && te.preventDefault(), _ && _(te);
  }), Z = V("start", D), $e = V("stop", l), F = V("stop", $), Ae = V("stop", (te) => {
    Ei(te.target) || ne(!1), m && m(te);
  }, !1), U = sn((te) => {
    we.current || (we.current = te.currentTarget), Ei(te.target) && (ne(!0), w && w(te)), E && E(te);
  }), je = () => {
    const te = we.current;
    return c && c !== "button" && !(te.tagName === "A" && te.href);
  }, Ve = sn((te) => {
    h && !te.repeat && z && te.key === " " && le.stop(te, () => {
      le.start(te);
    }), te.target === te.currentTarget && je() && te.key === " " && te.preventDefault(), y && y(te), te.target === te.currentTarget && je() && te.key === "Enter" && !u && (te.preventDefault(), p && p(te));
  }), at = sn((te) => {
    h && te.key === " " && z && !te.defaultPrevented && le.stop(te, () => {
      le.pulsate(te);
    }), k && k(te), p && te.target === te.currentTarget && je() && te.key === " " && !te.defaultPrevented && p(te);
  });
  let qe = c;
  qe === "button" && (ge.href || ge.to) && (qe = C);
  const We = {};
  qe === "button" ? (We.type = ie === void 0 ? "button" : ie, We.disabled = u) : (!ge.href && !ge.to && (We.role = "button"), u && (We["aria-disabled"] = u));
  const Bt = ho(r, we), ht = {
    ...n,
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: g,
    disableTouchRipple: d,
    focusRipple: h,
    tabIndex: P,
    focusVisible: z
  }, st = hd(ht);
  return /* @__PURE__ */ B.jsxs(md, {
    as: qe,
    className: xe(st.root, s),
    ownerState: ht,
    onBlur: Ae,
    onClick: p,
    onContextMenu: X,
    onFocus: U,
    onKeyDown: Ve,
    onKeyUp: at,
    onMouseDown: ae,
    onMouseLeave: ee,
    onMouseUp: W,
    onDragLeave: N,
    onTouchEnd: $e,
    onTouchMove: F,
    onTouchStart: Z,
    ref: Bt,
    tabIndex: u ? -1 : P,
    type: ie,
    ...We,
    ...ge,
    children: [a, oe ? /* @__PURE__ */ B.jsx(wa, {
      ref: A,
      center: i,
      ...H
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
  action: tu,
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
  component: eu,
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
function yd(e) {
  return typeof e.main == "string";
}
function bd(e, t = []) {
  if (!yd(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Yt(e = []) {
  return ([, t]) => t && bd(t, e);
}
function vd(e) {
  return Gt("MuiButton", e);
}
const ir = pr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), xa = /* @__PURE__ */ Y.createContext({});
process.env.NODE_ENV !== "production" && (xa.displayName = "ButtonGroupContext");
const Sa = /* @__PURE__ */ Y.createContext(void 0);
process.env.NODE_ENV !== "production" && (Sa.displayName = "ButtonGroupButtonContext");
const Cd = (e) => {
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
  }, c = Br(s, vd, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, Ea = [{
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
}], wd = Et(Mr, {
  shouldForwardProp: (e) => oa(e) || e === "classes",
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
})), xd = Et("span", {
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
  }, ...Ea]
}), Sd = Et("span", {
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
  }, ...Ea]
}), Ra = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = Y.useContext(xa), o = Y.useContext(Sa), i = Cn(n, t), a = gr({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: c = "primary",
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
    color: c,
    component: u,
    disabled: d,
    disableElevation: h,
    disableFocusRipple: v,
    fullWidth: p,
    size: x,
    type: E,
    variant: w
  }, S = Cd(k), _ = T && /* @__PURE__ */ B.jsx(xd, {
    className: S.startIcon,
    ownerState: k,
    children: T
  }), j = C && /* @__PURE__ */ B.jsx(Sd, {
    className: S.endIcon,
    ownerState: k,
    children: C
  }), l = o || "";
  return /* @__PURE__ */ B.jsxs(wd, {
    ownerState: k,
    className: xe(n.className, S.root, g, l),
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
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
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
const Te = {
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
}, Ta = St(Ra, {
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
                    background: ${Te.primary500};
                    color: ${Te.gray100};
                `;
    case "secondary":
      return pn`
                    border: 1px solid ${Te.primary500};
                    background: ${Te.gray100};
                    color: ${Te.primary500};
                `;
    default:
      return pn`
                    background: ${Te.gray100};
                    color: ${Te.gray700};
                `;
  }
}}
`;
function dt(e, t, r) {
  const n = typeof e.colSpan == "function" ? e.colSpan(r) : 1;
  if (Number.isInteger(n) && n > 1 && (!e.frozen || e.idx + n - 1 <= t))
    return n;
}
function Ed(e) {
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
const Rd = /* @__PURE__ */ new Set(["Unidentified", "Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", "Insert", "ContextMenu", "Escape", "Pause", "Play", "PrintScreen", "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]);
function vo(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
function Td(e) {
  return vo(e) && e.keyCode !== 86 ? !1 : !Rd.has(e.key);
}
function $d({
  key: e,
  target: t
}) {
  var r;
  return e === "Tab" && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) ? ((r = t.closest(".rdg-editor-container")) == null ? void 0 : r.querySelectorAll("input, textarea, select").length) === 1 : !1;
}
const kd = "mlln6zg7-0-0-beta-47";
function Od(e) {
  return e.map(({
    key: t,
    idx: r,
    minWidth: n,
    maxWidth: o
  }) => /* @__PURE__ */ B.jsx("div", {
    className: kd,
    style: {
      gridColumnStart: r + 1,
      minWidth: n,
      maxWidth: o
    },
    "data-measuring-cell-key": t
  }, t));
}
function Id({
  selectedPosition: e,
  columns: t,
  rows: r
}) {
  const n = t[e.idx], o = r[e.rowIdx];
  return $a(n, o);
}
function $a(e, t) {
  return e.renderEditCell != null && (typeof e.editable == "function" ? e.editable(t) : e.editable) !== !1;
}
function Pd({
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
    const c = e[n];
    return dt(a, i, {
      type: "ROW",
      row: c
    });
  }
  if (r)
    return dt(a, i, {
      type: "SUMMARY",
      row: r[n - e.length]
    });
}
function Ad({
  moveUp: e,
  moveNext: t,
  cellNavigationMode: r,
  columns: n,
  colSpanColumns: o,
  rows: i,
  topSummaryRows: a,
  bottomSummaryRows: s,
  minRowIdx: c,
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
      const j = Pd({
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
  if (m(v) && (E(t), x < u && y()), r === "CHANGE_ROW" && (p === T ? x === g || (p = 0, x += 1) : p === -1 && (x === c || (x -= 1, p = T - 1), E(!1))), x < u) {
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
function _d({
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
const Dd = "cj343x07-0-0-beta-47", ka = `rdg-cell ${Dd}`, Md = "csofj7r7-0-0-beta-47", jd = `rdg-cell-frozen ${Md}`;
function Oa(e) {
  return {
    "--rdg-grid-row-start": e
  };
}
function Ia(e, t, r) {
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
function Fn(e, ...t) {
  return xe(ka, ...t, e.frozen && jd);
}
const {
  min: jr,
  max: Sn,
  floor: Di,
  sign: Nd,
  abs: Fd
} = Math;
function io(e) {
  if (typeof e != "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function Pa(e, {
  minWidth: t,
  maxWidth: r
}) {
  return e = Sn(e, t), typeof r == "number" && r >= t ? jr(e, r) : e;
}
function Aa(e, t) {
  return e.parent === void 0 ? t : e.level - e.parent.level;
}
const zd = "c1bn88vv7-0-0-beta-47", Bd = `rdg-checkbox-input ${zd}`;
function Ld({
  onChange: e,
  indeterminate: t,
  ...r
}) {
  function n(o) {
    e(o.target.checked, o.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ B.jsx("input", {
    ref: (o) => {
      o && (o.indeterminate = t === !0);
    },
    type: "checkbox",
    className: Bd,
    onChange: n,
    ...r
  });
}
function Vd(e) {
  try {
    return e.row[e.column.key];
  } catch {
    return null;
  }
}
const _a = /* @__PURE__ */ Fr(void 0), Wd = _a.Provider;
function Da() {
  return Li(_a);
}
const Ud = /* @__PURE__ */ Fr(void 0), Hd = Ud.Provider, Kd = /* @__PURE__ */ Fr(void 0), Yd = Kd.Provider, Gd = /* @__PURE__ */ Fr(void 0), qd = Gd.Provider, Xd = /* @__PURE__ */ Fr(void 0), Jd = Xd.Provider, Mi = "rdg-select-column", Qd = "auto", Zd = 50;
function ef({
  rawColumns: e,
  defaultColumnOptions: t,
  getColumnWidth: r,
  viewportWidth: n,
  scrollLeft: o,
  enableVirtualization: i
}) {
  const a = (t == null ? void 0 : t.width) ?? Qd, s = (t == null ? void 0 : t.minWidth) ?? Zd, c = (t == null ? void 0 : t.maxWidth) ?? void 0, u = (t == null ? void 0 : t.renderCell) ?? Vd, g = (t == null ? void 0 : t.sortable) ?? !1, d = (t == null ? void 0 : t.resizable) ?? !1, h = (t == null ? void 0 : t.draggable) ?? !1, {
    columns: v,
    colSpanColumns: C,
    lastFrozenColumnIndex: m,
    headerRowsCount: p
  } = Pt(() => {
    let S = -1, _ = 1;
    const j = [];
    l(e, 1);
    function l(D, P, H) {
      for (const q of D) {
        if ("children" in q) {
          const we = {
            name: q.name,
            parent: H,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: q.headerCellClass
          };
          l(q.children, P + 1, we);
          continue;
        }
        const ie = q.frozen ?? !1, ge = {
          ...q,
          parent: H,
          idx: 0,
          level: 0,
          frozen: ie,
          width: q.width ?? a,
          minWidth: q.minWidth ?? s,
          maxWidth: q.maxWidth ?? c,
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
      key: H,
      frozen: q
    }) => D === Mi ? -1 : H === Mi ? 1 : P ? q ? 0 : -1 : q ? 1 : 0);
    const $ = [];
    return j.forEach((D, P) => {
      D.idx = P, Ma(D, P, 0), D.colSpan != null && $.push(D);
    }), {
      columns: j,
      colSpanColumns: $,
      lastFrozenColumnIndex: S,
      headerRowsCount: _
    };
  }, [e, a, s, c, u, d, g, h]), {
    templateColumns: x,
    layoutCssVars: T,
    totalFrozenColumnWidth: E,
    columnMetrics: w
  } = Pt(() => {
    const S = /* @__PURE__ */ new Map();
    let _ = 0, j = 0;
    const l = [];
    for (const D of v) {
      let P = r(D);
      typeof P == "number" ? P = Pa(P, D) : P = D.minWidth, l.push(`${P}px`), S.set(D, {
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
      templateColumns: l,
      layoutCssVars: $,
      totalFrozenColumnWidth: j,
      columnMetrics: S
    };
  }, [r, v, m]), [y, k] = Pt(() => {
    if (!i)
      return [0, v.length - 1];
    const S = o + E, _ = o + n, j = v.length - 1, l = jr(m + 1, j);
    if (S >= _)
      return [l, l];
    let $ = l;
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
    const P = Sn(l, $ - 1), H = jr(j, D + 1);
    return [P, H];
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
function Ma(e, t, r) {
  if (r < e.level && (e.level = r), e.parent !== void 0) {
    const {
      parent: n
    } = e;
    n.idx === -1 && (n.idx = t), n.colSpan += 1, Ma(n, t, r - 1);
  }
}
const ur = typeof window > "u" ? wo : bs;
function tf(e, t, r, n, o, i, a, s, c, u) {
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
    T.length !== 0 && c((E) => {
      const w = new Map(E);
      let y = !1;
      for (const k of T) {
        const S = ji(n, k);
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
      width: l
    } of t)
      if (w === _) {
        const $ = typeof E == "number" ? `${E}px` : E;
        y[j] = $;
      } else d && typeof l == "string" && !i.has(_) && (y[j] = l, k.push(_));
    n.current.style.gridTemplateColumns = y.join(" ");
    const S = typeof E == "number" ? E : ji(n, w);
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
function ji(e, t) {
  var o;
  const r = `[data-measuring-cell-key="${CSS.escape(t)}"]`, n = (o = e.current) == null ? void 0 : o.querySelector(r);
  return n == null ? void 0 : n.getBoundingClientRect().width;
}
function rf() {
  const e = wt(null), [t, r] = Ge(1), [n, o] = Ge(1), [i, a] = Ge(0);
  return ur(() => {
    const {
      ResizeObserver: s
    } = window;
    if (s == null) return;
    const {
      clientWidth: c,
      clientHeight: u,
      offsetWidth: g,
      offsetHeight: d
    } = e.current, {
      width: h,
      height: v
    } = e.current.getBoundingClientRect(), C = d - u, m = h - g + c, p = v - C;
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
  wo(() => {
    t.current = e;
  });
  const r = mn((...n) => {
    t.current(...n);
  }, []);
  return e && r;
}
function zn(e) {
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
function nf({
  columns: e,
  colSpanColumns: t,
  rows: r,
  topSummaryRows: n,
  bottomSummaryRows: o,
  colOverscanStartIdx: i,
  colOverscanEndIdx: a,
  lastFrozenColumnIndex: s,
  rowOverscanStartIdx: c,
  rowOverscanEndIdx: u
}) {
  const g = Pt(() => {
    if (i === 0) return 0;
    let d = i;
    const h = (v, C) => C !== void 0 && v + C > i ? (d = v, !0) : !1;
    for (const v of t) {
      const C = v.idx;
      if (C >= d || h(C, dt(v, s, {
        type: "HEADER"
      })))
        break;
      for (let m = c; m <= u; m++) {
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
  }, [c, u, r, n, o, i, s, t]);
  return Pt(() => {
    const d = [];
    for (let h = 0; h <= a; h++) {
      const v = e[h];
      h < g && !v.frozen || d.push(v);
    }
    return d;
  }, [g, a, e]);
}
function of({
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
    getRowHeight: c,
    findRowIdx: u
  } = Pt(() => {
    if (typeof t == "number")
      return {
        totalRowHeight: t * e.length,
        gridTemplateRows: ` repeat(${e.length}, ${t}px)`,
        getRowTop: (p) => p * t,
        getRowHeight: () => t,
        findRowIdx: (p) => Di(p / t)
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
          const E = x + Di((T - x) / 2), w = C[E].top;
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
    getRowHeight: c,
    findRowIdx: u
  };
}
const af = "c1w9bbhr7-0-0-beta-47", sf = "c1creorc7-0-0-beta-47", lf = `rdg-cell-drag-handle ${af}`;
function cf({
  gridRowStart: e,
  rows: t,
  column: r,
  columnWidth: n,
  maxColIdx: o,
  isLastRow: i,
  selectedPosition: a,
  latestDraggedOverRowIdx: s,
  isCellEditable: c,
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
    for (let l = y; l < k; l++)
      if (c({
        rowIdx: l,
        idx: C
      })) {
        const $ = g({
          columnKey: r.key,
          sourceRow: S,
          targetRow: t[l]
        });
        $ !== t[l] && (_[l] = $, j.push(l));
      }
    j.length > 0 && (u == null || u(_, {
      indexes: j,
      column: r
    }));
  }
  function w() {
    var l;
    const y = ((l = r.colSpan) == null ? void 0 : l.call(r, {
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
  return /* @__PURE__ */ B.jsx("div", {
    style: w(),
    className: xe(lf, r.frozen && sf),
    onClick: d,
    onMouseDown: p,
    onDoubleClick: T
  });
}
const uf = "cis5rrm7-0-0-beta-47";
function df({
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
  const c = wt(void 0), u = ((x = e.editorOptions) == null ? void 0 : x.commitOnOutsideClick) !== !1, g = rt(() => {
    v(!0, !1);
  });
  wo(() => {
    if (!u) return;
    function w() {
      c.current = requestAnimationFrame(g);
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
    cancelAnimationFrame(c.current);
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
    w.key === "Escape" ? v() : w.key === "Enter" ? v(!0) : $d(w) && s(w);
  }
  function v(w = !1, y = !0) {
    w ? o(r, !0, y) : i(y);
  }
  function C(w, y = !1) {
    o(w, y, y);
  }
  const {
    cellClass: m
  } = e, p = Fn(e, "rdg-editor-container", typeof m == "function" ? m(r) : m, !((T = e.editorOptions) != null && T.displayCellContent) && uf);
  return /* @__PURE__ */ B.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": !0,
    className: p,
    style: Wr(e, t),
    onKeyDown: h,
    onMouseDownCapture: d,
    children: e.renderEditCell != null && /* @__PURE__ */ B.jsxs(B.Fragment, {
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
function ff({
  column: e,
  rowIdx: t,
  isCellSelected: r,
  selectCell: n
}) {
  const {
    tabIndex: o,
    onFocus: i
  } = zn(r), {
    colSpan: a
  } = e, s = Aa(e, t), c = e.idx + 1;
  function u() {
    n({
      idx: e.idx,
      rowIdx: t
    });
  }
  return /* @__PURE__ */ B.jsx("div", {
    role: "columnheader",
    "aria-colindex": c,
    "aria-colspan": a,
    "aria-rowspan": s,
    "aria-selected": r,
    tabIndex: o,
    className: xe(ka, e.headerCellClass),
    style: {
      ...Ia(e, t, s),
      gridColumnStart: c,
      gridColumnEnd: c + a
    },
    onFocus: i,
    onClick: u,
    children: e.name
  });
}
const pf = "h44jtk67-0-0-beta-47", gf = "hcgkhxz7-0-0-beta-47", hf = `rdg-header-sort-name ${gf}`;
function mf({
  column: e,
  sortDirection: t,
  priority: r
}) {
  return e.sortable ? /* @__PURE__ */ B.jsx(yf, {
    sortDirection: t,
    priority: r,
    children: e.name
  }) : e.name;
}
function yf({
  sortDirection: e,
  priority: t,
  children: r
}) {
  const n = Da().renderSortStatus;
  return /* @__PURE__ */ B.jsxs("span", {
    className: pf,
    children: [/* @__PURE__ */ B.jsx("span", {
      className: hf,
      children: r
    }), /* @__PURE__ */ B.jsx("span", {
      children: n({
        sortDirection: e,
        priority: t
      })
    })]
  });
}
const bf = "c6l2wv17-0-0-beta-47", vf = "c1kqdw7y7-0-0-beta-47", Cf = `rdg-cell-resizable ${vf}`, wf = "r1y6ywlx7-0-0-beta-47", xf = "rdg-cell-draggable", Sf = "c1bezg5o7-0-0-beta-47", Ef = `rdg-cell-dragging ${Sf}`, Rf = "c1vc96037-0-0-beta-47", Tf = `rdg-cell-drag-over ${Rf}`;
function $f({
  column: e,
  colSpan: t,
  rowIdx: r,
  isCellSelected: n,
  onColumnResize: o,
  onColumnsReorder: i,
  sortColumns: a,
  onSortColumnsChange: s,
  selectCell: c,
  shouldFocusGrid: u,
  direction: g,
  dragDropKey: d
}) {
  const [h, v] = Ge(!1), [C, m] = Ge(!1), p = g === "rtl", x = Aa(e, r), {
    tabIndex: T,
    childTabIndex: E,
    onFocus: w
  } = zn(n), y = a == null ? void 0 : a.findIndex((N) => N.columnKey === e.key), k = y !== void 0 && y > -1 ? a[y] : void 0, S = k == null ? void 0 : k.direction, _ = k !== void 0 && a.length > 1 ? y + 1 : void 0, j = S && !_ ? S === "ASC" ? "ascending" : "descending" : void 0, {
    sortable: l,
    resizable: $,
    draggable: D
  } = e, P = Fn(e, e.headerCellClass, l && bf, $ && Cf, D && xf, h && Ef, C && Tf), H = e.renderHeaderCell ?? mf;
  function q(N) {
    if (N.pointerType === "mouse" && N.buttons !== 1)
      return;
    N.preventDefault();
    const {
      currentTarget: W,
      pointerId: ee
    } = N, Z = W.parentElement, {
      right: $e,
      left: F
    } = Z.getBoundingClientRect(), Ae = p ? N.clientX - F : $e - N.clientX;
    let U = !1;
    function je(qe) {
      const {
        width: We,
        right: Bt,
        left: ht
      } = Z.getBoundingClientRect();
      let st = p ? Bt + Ae - qe.clientX : qe.clientX + Ae - ht;
      st = Pa(st, e), We > 0 && st !== We && o(e, st);
    }
    function Ve() {
      U = !0, o(e, "max-content");
    }
    function at(qe) {
      U || je(qe), W.removeEventListener("pointermove", je), W.removeEventListener("dblclick", Ve), W.removeEventListener("lostpointercapture", at);
    }
    W.setPointerCapture(ee), W.addEventListener("pointermove", je), W.addEventListener("dblclick", Ve), W.addEventListener("lostpointercapture", at);
  }
  function ie(N) {
    if (s == null) return;
    const {
      sortDescendingFirst: W
    } = e;
    if (k === void 0) {
      const ee = {
        columnKey: e.key,
        direction: W ? "DESC" : "ASC"
      };
      s(a && N ? [...a, ee] : [ee]);
    } else {
      let ee;
      if ((W === !0 && S === "DESC" || W !== !0 && S === "ASC") && (ee = {
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
    c({
      idx: e.idx,
      rowIdx: r
    }), l && ie(N.ctrlKey || N.metaKey);
  }
  function we(N) {
    w == null || w(N), u && c({
      idx: 0,
      rowIdx: r
    });
  }
  function le(N) {
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
      const W = N.dataTransfer.getData(d.toLowerCase());
      W !== e.key && (N.preventDefault(), i == null || i(W, e.key));
    }
  }
  function V(N) {
    Ni(N) && m(!0);
  }
  function ae(N) {
    Ni(N) && m(!1);
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
  }), /* @__PURE__ */ B.jsxs("div", {
    role: "columnheader",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-rowspan": x,
    "aria-selected": n,
    "aria-sort": j,
    tabIndex: u ? 0 : T,
    className: P,
    style: {
      ...Ia(e, r, x),
      ...Wr(e, t)
    },
    onFocus: we,
    onClick: ge,
    onKeyDown: l ? le : void 0,
    ...X,
    children: [H({
      column: e,
      sortDirection: S,
      priority: _,
      tabIndex: E
    }), $ && /* @__PURE__ */ B.jsx("div", {
      className: wf,
      onClick: Ed,
      onPointerDown: q
    })]
  });
}
function Ni(e) {
  const t = e.relatedTarget;
  return !e.currentTarget.contains(t);
}
const kf = "r1upfr807-0-0-beta-47", ja = `rdg-row ${kf}`, Of = "r190mhd37-0-0-beta-47", Fo = "rdg-row-selected", If = "r139qu9m7-0-0-beta-47", Pf = "rdg-top-summary-row", Af = "rdg-bottom-summary-row", _f = "h10tskcx7-0-0-beta-47", Na = `rdg-header-row ${_f}`;
function Df({
  rowIdx: e,
  columns: t,
  onColumnResize: r,
  onColumnsReorder: n,
  sortColumns: o,
  onSortColumnsChange: i,
  lastFrozenColumnIndex: a,
  selectedCellIdx: s,
  selectCell: c,
  shouldFocusGrid: u,
  direction: g
}) {
  const d = vs(), h = [];
  for (let v = 0; v < t.length; v++) {
    const C = t[v], m = dt(C, a, {
      type: "HEADER"
    });
    m !== void 0 && (v += m - 1), h.push(/* @__PURE__ */ B.jsx($f, {
      column: C,
      colSpan: m,
      rowIdx: e,
      isCellSelected: s === C.idx,
      onColumnResize: r,
      onColumnsReorder: n,
      onSortColumnsChange: i,
      sortColumns: o,
      selectCell: c,
      shouldFocusGrid: u && v === 0,
      direction: g,
      dragDropKey: d
    }, C.key));
  }
  return /* @__PURE__ */ B.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: xe(Na, s === -1 && Fo),
    children: h
  });
}
const Mf = /* @__PURE__ */ dr(Df);
function jf({
  rowIdx: e,
  level: t,
  columns: r,
  selectedCellIdx: n,
  selectCell: o
}) {
  const i = [], a = /* @__PURE__ */ new Set();
  for (const s of r) {
    let {
      parent: c
    } = s;
    if (c !== void 0) {
      for (; c.level > t && c.parent !== void 0; )
        c = c.parent;
      if (c.level === t && !a.has(c)) {
        a.add(c);
        const {
          idx: u
        } = c;
        i.push(/* @__PURE__ */ B.jsx(ff, {
          column: c,
          rowIdx: e,
          isCellSelected: n === u,
          selectCell: o
        }, u));
      }
    }
  }
  return /* @__PURE__ */ B.jsx("div", {
    role: "row",
    "aria-rowindex": e,
    className: Na,
    children: i
  });
}
const Nf = /* @__PURE__ */ dr(jf), Ff = "c6ra8a37-0-0-beta-47", zf = `rdg-cell-copied ${Ff}`, Bf = "cq910m07-0-0-beta-47", Lf = `rdg-cell-dragged-over ${Bf}`;
function Vf({
  column: e,
  colSpan: t,
  isCellSelected: r,
  isCopied: n,
  isDraggedOver: o,
  row: i,
  rowIdx: a,
  onClick: s,
  onDoubleClick: c,
  onContextMenu: u,
  onRowChange: g,
  selectCell: d,
  ...h
}) {
  const {
    tabIndex: v,
    childTabIndex: C,
    onFocus: m
  } = zn(r), {
    cellClass: p
  } = e, x = Fn(e, typeof p == "function" ? p(i) : p, n && zf, o && Lf), T = $a(e, i);
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
    if (c) {
      const j = Or(_);
      if (c({
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
  return /* @__PURE__ */ B.jsx("div", {
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
const Wf = /* @__PURE__ */ dr(Vf);
function Uf({
  className: e,
  rowIdx: t,
  gridRowStart: r,
  selectedCellIdx: n,
  isRowSelectionDisabled: o,
  isRowSelected: i,
  copiedCellIdx: a,
  draggedOverCellIdx: s,
  lastFrozenColumnIndex: c,
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
  const k = rt((l, $) => {
    T(l, t, $);
  });
  function S(l) {
    p == null || p(t), x == null || x(l);
  }
  e = xe(ja, `rdg-row-${t % 2 === 0 ? "even" : "odd"}`, m == null ? void 0 : m(u, t), e, n === -1 && Fo);
  const _ = [];
  for (let l = 0; l < g.length; l++) {
    const $ = g[l], {
      idx: D
    } = $, P = dt($, c, {
      type: "ROW",
      row: u
    });
    P !== void 0 && (l += P - 1);
    const H = n === D;
    H && d ? _.push(d) : _.push(/* @__PURE__ */ B.jsx(Wf, {
      column: $,
      colSpan: P,
      row: u,
      rowIdx: t,
      isCopied: a === D,
      isDraggedOver: s === D,
      isCellSelected: H,
      onClick: h,
      onDoubleClick: v,
      onContextMenu: C,
      onRowChange: k,
      selectCell: E
    }, $.key));
  }
  const j = Pt(() => ({
    isRowSelected: i,
    isRowSelectionDisabled: o
  }), [o, i]);
  return /* @__PURE__ */ B.jsx(Hd, {
    value: j,
    children: /* @__PURE__ */ B.jsx("div", {
      role: "row",
      ref: y,
      className: e,
      onMouseEnter: S,
      style: Oa(r),
      ...w,
      children: _
    })
  });
}
const Hf = /* @__PURE__ */ dr(/* @__PURE__ */ Co(Uf));
function Kf(e, t) {
  return /* @__PURE__ */ B.jsx(Hf, {
    ...t
  }, e);
}
function Yf({
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
  }, [r, n]), /* @__PURE__ */ B.jsx("div", {
    ref: o,
    style: {
      gridColumn: e === void 0 ? "1/-1" : e + 1,
      gridRow: t === void 0 ? "1/-1" : t + 2
    }
  });
}
const Gf = "a3ejtar7-0-0-beta-47", qf = `rdg-sort-arrow ${Gf}`;
function Xf({
  sortDirection: e,
  priority: t
}) {
  return /* @__PURE__ */ B.jsxs(B.Fragment, {
    children: [Jf({
      sortDirection: e
    }), Qf({
      priority: t
    })]
  });
}
function Jf({
  sortDirection: e
}) {
  return e === void 0 ? null : /* @__PURE__ */ B.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: qf,
    "aria-hidden": !0,
    children: /* @__PURE__ */ B.jsx("path", {
      d: e === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0"
    })
  });
}
function Qf({
  priority: e
}) {
  return e;
}
const Zf = "rnvodz57-0-0-beta-47", ep = `rdg ${Zf}`, tp = "vlqv91k7-0-0-beta-47", rp = `rdg-viewport-dragging ${tp}`, np = "f1lsfrzw7-0-0-beta-47", op = "f1cte0lg7-0-0-beta-47", ip = "s8wc6fl7-0-0-beta-47";
function ap({
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
    onFocus: c
  } = zn(o), {
    summaryCellClass: u
  } = e, g = Fn(e, ip, typeof u == "function" ? u(r) : u);
  function d() {
    i({
      rowIdx: n,
      idx: e.idx
    });
  }
  return /* @__PURE__ */ B.jsx("div", {
    role: "gridcell",
    "aria-colindex": e.idx + 1,
    "aria-colspan": t,
    "aria-selected": o,
    tabIndex: a,
    className: g,
    style: Wr(e, t),
    onClick: d,
    onFocus: c,
    children: (h = e.renderSummaryCell) == null ? void 0 : h.call(e, {
      column: e,
      row: r,
      tabIndex: s
    })
  });
}
const sp = /* @__PURE__ */ dr(ap), lp = "skuhp557-0-0-beta-47", cp = "tf8l5ub7-0-0-beta-47", up = `rdg-summary-row ${lp}`;
function dp({
  rowIdx: e,
  gridRowStart: t,
  row: r,
  viewportColumns: n,
  top: o,
  bottom: i,
  lastFrozenColumnIndex: a,
  selectedCellIdx: s,
  isTop: c,
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
    d.push(/* @__PURE__ */ B.jsx(sp, {
      column: v,
      colSpan: C,
      row: r,
      rowIdx: e,
      isCellSelected: m,
      selectCell: u
    }, v.key));
  }
  return /* @__PURE__ */ B.jsx("div", {
    role: "row",
    "aria-rowindex": g,
    className: xe(ja, `rdg-row-${e % 2 === 0 ? "even" : "odd"}`, up, c ? `${Pf} ${cp}` : Af, s === -1 && Fo),
    style: {
      ...Oa(t),
      "--rdg-summary-row-top": o !== void 0 ? `${o}px` : void 0,
      "--rdg-summary-row-bottom": i !== void 0 ? `${i}px` : void 0
    },
    children: d
  });
}
const Fi = /* @__PURE__ */ dr(dp);
function fp(e, t) {
  const {
    columns: r,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: i,
    rowKeyGetter: a,
    onRowsChange: s,
    rowHeight: c,
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
    onCopy: l,
    onPaste: $,
    enableVirtualization: D,
    renderers: P,
    className: H,
    style: q,
    rowClass: ie,
    direction: ge,
    role: we,
    "aria-label": le,
    "aria-labelledby": A,
    "aria-describedby": z,
    "aria-rowcount": ne,
    "data-testid": oe
  } = e, V = Da(), ae = we ?? "grid", X = c ?? 35, N = u ?? (typeof X == "number" ? X : 35), W = g ?? (typeof X == "number" ? X : 35), ee = (P == null ? void 0 : P.renderRow) ?? (V == null ? void 0 : V.renderRow) ?? Kf, Z = (P == null ? void 0 : P.renderSortStatus) ?? (V == null ? void 0 : V.renderSortStatus) ?? Xf, $e = (P == null ? void 0 : P.renderCheckbox) ?? (V == null ? void 0 : V.renderCheckbox) ?? Ld, F = (P == null ? void 0 : P.noRowsFallback) ?? (V == null ? void 0 : V.noRowsFallback), Ae = D ?? !0, U = ge ?? "ltr", [je, Ve] = Ge(0), [at, qe] = Ge(0), [We, Bt] = Ge(() => /* @__PURE__ */ new Map()), [ht, st] = Ge(() => /* @__PURE__ */ new Map()), [te, Lt] = Ge(null), [Vt, Wt] = Ge(!1), [lt, Bn] = Ge(void 0), [pt, hr] = Ge(null), qt = mn((I) => We.get(I.key) ?? ht.get(I.key) ?? I.width, [ht, We]), [_t, Ur, Hr, Ln] = rf(), {
    columns: Be,
    colSpanColumns: Kr,
    lastFrozenColumnIndex: Xe,
    headerRowsCount: gt,
    colOverscanStartIdx: Yr,
    colOverscanEndIdx: Rt,
    templateColumns: mr,
    layoutCssVars: yr,
    totalFrozenColumnWidth: Gr
  } = ef({
    rawColumns: r,
    defaultColumnOptions: p,
    getColumnWidth: qt,
    scrollLeft: at,
    viewportWidth: Ur,
    enableVirtualization: Ae
  }), Ut = (o == null ? void 0 : o.length) ?? 0, Tt = (i == null ? void 0 : i.length) ?? 0, qr = Ut + Tt, $t = gt + Ut, Xt = gt - 1, Ye = -$t, Jt = Ye + Xt, mt = n.length + Tt - 1, [K, Dt] = Ge(() => ({
    idx: -1,
    rowIdx: Ye - 1,
    mode: "SELECT"
  })), br = wt(K), Xr = wt(lt), Jr = wt(-1), f = wt(null), O = wt(!1), L = ae === "treegrid", re = gt * N, fe = qr * W, pe = Hr - re - fe, ce = d != null && v != null, se = U === "rtl", Ue = se ? "ArrowRight" : "ArrowLeft", ke = se ? "ArrowLeft" : "ArrowRight", Ie = ne ?? gt + n.length + qr, Je = Pt(() => ({
    renderCheckbox: $e,
    renderSortStatus: Z
  }), [$e, Z]), Mt = Pt(() => {
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
    gridTemplateRows: Vn,
    getRowTop: Qr,
    getRowHeight: Ba,
    findRowIdx: Bo
  } = of({
    rows: n,
    rowHeight: X,
    clientHeight: pe,
    scrollTop: je,
    enableVirtualization: Ae
  }), jt = nf({
    columns: Be,
    colSpanColumns: Kr,
    colOverscanStartIdx: Yr,
    colOverscanEndIdx: Rt,
    lastFrozenColumnIndex: Xe,
    rowOverscanStartIdx: et,
    rowOverscanEndIdx: Fe,
    rows: n,
    topSummaryRows: o,
    bottomSummaryRows: i
  }), {
    gridTemplateColumns: La,
    handleColumnResize: Va
  } = tf(Be, jt, mr, _t, Ur, We, ht, Bt, st, S), Wa = L ? -1 : 0, Qt = Be.length - 1, Wn = Kn(K), Zr = Ho(K), Ua = N + Ht + fe + Ln, Ha = rt(Va), Ka = rt(_), Ya = rt(m), Ga = rt(x), qa = rt(T), Xa = rt(E), Ja = rt(es), Qa = rt(Vo), Za = rt(en), Un = rt(vr), Lo = rt(({
    idx: I,
    rowIdx: M
  }) => {
    vr({
      rowIdx: Ye + M - 1,
      idx: I
    });
  });
  ur(() => {
    if (!Wn || ao(K, br.current)) {
      br.current = K;
      return;
    }
    br.current = K, K.idx === -1 && (f.current.focus({
      preventScroll: !0
    }), hn(f.current));
  }), ur(() => {
    O.current && (O.current = !1, Yo());
  }), ys(t, () => ({
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
  const Hn = mn((I) => {
    Bn(I), Xr.current = I;
  }, []);
  function es(I) {
    if (!v) return;
    io(a);
    const M = new Set(d);
    for (const G of n) {
      if ((h == null ? void 0 : h(G)) === !0) continue;
      const J = a(G);
      I.checked ? M.add(J) : M.delete(J);
    }
    v(M);
  }
  function Vo(I) {
    if (!v) return;
    io(a);
    const {
      row: M,
      checked: G,
      isShiftClick: J
    } = I;
    if ((h == null ? void 0 : h(M)) === !0) return;
    const de = new Set(d), Se = a(M), Pe = Jr.current, _e = n.indexOf(M);
    if (Jr.current = _e, G ? de.add(Se) : de.delete(Se), J && Pe !== -1 && Pe !== _e && Pe < n.length) {
      const tt = Nd(_e - Pe);
      for (let Qe = Pe + tt; Qe !== _e; Qe += tt) {
        const yt = n[Qe];
        (h == null ? void 0 : h(yt)) !== !0 && (G ? de.add(a(yt)) : de.delete(a(yt)));
      }
    }
    v(de);
  }
  function ts(I) {
    var _e;
    const {
      idx: M,
      rowIdx: G,
      mode: J
    } = K;
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
    const de = I.target.closest(".rdg-cell") !== null, Se = L && I.target === f.current;
    if (!de && !Se) return;
    const {
      keyCode: Pe
    } = I;
    if (Zr && ($ != null || l != null) && vo(I)) {
      if (Pe === 67) {
        if (((_e = window.getSelection()) == null ? void 0 : _e.isCollapsed) === !1) return;
        ns();
        return;
      }
      if (Pe === 86) {
        os();
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
        Ko(I);
        break;
      default:
        is(I);
        break;
    }
  }
  function rs(I) {
    const {
      scrollTop: M,
      scrollLeft: G
    } = I.currentTarget;
    yn(() => {
      Ve(M), qe(Fd(G));
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
  function Wo() {
    K.mode === "EDIT" && en(Be[K.idx], K.rowIdx, K.row);
  }
  function ns() {
    const {
      idx: I,
      rowIdx: M
    } = K, G = n[M], J = Be[I].key;
    Lt({
      row: G,
      columnKey: J
    }), l == null || l({
      sourceRow: G,
      sourceColumnKey: J
    });
  }
  function os() {
    if (!$ || !s || te === null || !tn(K))
      return;
    const {
      idx: I,
      rowIdx: M
    } = K, G = Be[I], J = n[M], de = $({
      sourceRow: te.row,
      sourceColumnKey: te.columnKey,
      targetRow: J,
      targetColumnKey: G.key
    });
    en(G, M, de);
  }
  function is(I) {
    if (!Zr) return;
    const M = n[K.rowIdx], {
      key: G,
      shiftKey: J
    } = I;
    if (ce && J && G === " ") {
      io(a);
      const de = a(M);
      Vo({
        row: M,
        checked: !d.has(de),
        isShiftClick: !1
      }), I.preventDefault();
      return;
    }
    tn(K) && Td(I) && Dt(({
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
  function Uo(I) {
    return I >= Wa && I <= Qt;
  }
  function Zt(I) {
    return I >= 0 && I < n.length;
  }
  function Kn({
    idx: I,
    rowIdx: M
  }) {
    return M >= Ye && M <= mt && Uo(I);
  }
  function as({
    idx: I,
    rowIdx: M
  }) {
    return Zt(M) && I >= 0 && I <= Qt;
  }
  function Ho({
    idx: I,
    rowIdx: M
  }) {
    return Zt(M) && Uo(I);
  }
  function tn(I) {
    return as(I) && Id({
      columns: Be,
      rows: n,
      selectedPosition: I
    });
  }
  function vr(I, M) {
    if (!Kn(I)) return;
    Wo();
    const G = n[I.rowIdx], J = ao(K, I);
    M && tn(I) ? Dt({
      ...I,
      mode: "EDIT",
      row: G,
      originalRow: G
    }) : J ? hn(zi(_t.current)) : (O.current = !0, Dt({
      ...I,
      mode: "SELECT"
    })), y && !J && y({
      rowIdx: I.rowIdx,
      row: G,
      column: Be[I.idx]
    });
  }
  function ss(I, M, G) {
    const {
      idx: J,
      rowIdx: de
    } = K, Se = Wn && J === -1;
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
      case ke:
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
        if (K.rowIdx === Ye) return K;
        const Pe = Qr(de) + Ba(de) - pe;
        return {
          idx: J,
          rowIdx: Pe > 0 ? Bo(Pe) : 0
        };
      }
      case "PageDown": {
        if (K.rowIdx >= n.length) return K;
        const Pe = Qr(de) + pe;
        return {
          idx: J,
          rowIdx: Pe < Ht ? Bo(Pe) : n.length - 1
        };
      }
      default:
        return K;
    }
  }
  function Ko(I) {
    const {
      key: M,
      shiftKey: G
    } = I;
    let J = "NONE";
    if (M === "Tab") {
      if (_d({
        shiftKey: G,
        maxColIdx: Qt,
        minRowIdx: Ye,
        maxRowIdx: mt,
        selectedPosition: K
      })) {
        Wo();
        return;
      }
      J = "CHANGE_ROW";
    }
    I.preventDefault();
    const de = vo(I), Se = ss(M, de, G);
    if (ao(K, Se)) return;
    const Pe = Ad({
      moveUp: M === "ArrowUp",
      moveNext: M === ke || M === "Tab" && !G,
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
      currentPosition: K,
      nextPosition: Se,
      isCellWithinBounds: Kn
    });
    vr(Pe);
  }
  function ls(I) {
    if (lt === void 0) return;
    const {
      rowIdx: M
    } = K;
    return (M < lt ? M < I && I <= lt : M > I && I >= lt) ? K.idx : void 0;
  }
  function Yo() {
    const I = zi(_t.current);
    if (I === null) return;
    hn(I), (I.querySelector('[tabindex="0"]') ?? I).focus({
      preventScroll: !0
    });
  }
  function cs() {
    if (j == null || K.mode === "EDIT" || !Ho(K))
      return;
    const {
      idx: I,
      rowIdx: M
    } = K, G = Be[I];
    if (G.renderEditCell == null || G.editable === !1)
      return;
    const J = qt(G);
    return /* @__PURE__ */ B.jsx(cf, {
      gridRowStart: $t + M + 1,
      rows: n,
      column: G,
      columnWidth: J,
      maxColIdx: Qt,
      isLastRow: M === mt,
      selectedPosition: K,
      isCellEditable: tn,
      latestDraggedOverRowIdx: Xr,
      onRowsChange: s,
      onClick: Yo,
      onFill: j,
      setDragging: Wt,
      setDraggedOverRowIdx: Hn
    });
  }
  function us(I) {
    if (K.rowIdx !== I || K.mode === "SELECT") return;
    const {
      idx: M,
      row: G
    } = K, J = Be[M], de = dt(J, Xe, {
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
    }, Pe = (_e, tt, Qe) => {
      tt ? yn(() => {
        en(J, K.rowIdx, _e), Se(Qe);
      }) : Dt((yt) => ({
        ...yt,
        row: _e
      }));
    };
    return n[K.rowIdx] !== K.originalRow && Se(!1), /* @__PURE__ */ B.jsx(df, {
      column: J,
      colSpan: de,
      row: G,
      rowIdx: I,
      onRowChange: Pe,
      closeEditor: Se,
      onKeyDown: w,
      navigate: Ko
    }, J.key);
  }
  function Cr(I) {
    const M = K.idx === -1 ? void 0 : Be[K.idx];
    return M !== void 0 && K.rowIdx === I && !jt.includes(M) ? K.idx > Rt ? [...jt, M] : [...jt.slice(0, Xe + 1), M, ...jt.slice(Xe + 1)] : jt;
  }
  function ds() {
    const I = [], {
      idx: M,
      rowIdx: G
    } = K, J = Zr && G < et ? et - 1 : et, de = Zr && G > Fe ? Fe + 1 : Fe;
    for (let Se = J; Se <= de; Se++) {
      const Pe = Se === et - 1 || Se === Fe + 1, _e = Pe ? G : Se;
      let tt = jt;
      const Qe = M === -1 ? void 0 : Be[M];
      Qe !== void 0 && (Pe ? tt = [Qe] : tt = Cr(_e));
      const yt = n[_e], fs = $t + _e + 1;
      let Yn = _e, Gn = !1;
      typeof a == "function" && (Yn = a(yt), Gn = (d == null ? void 0 : d.has(Yn)) ?? !1), I.push(ee(Yn, {
        "aria-rowindex": $t + _e + 1,
        "aria-selected": ce ? Gn : void 0,
        rowIdx: _e,
        row: yt,
        viewportColumns: tt,
        isRowSelectionDisabled: (h == null ? void 0 : h(yt)) ?? !1,
        isRowSelected: Gn,
        onCellClick: Ga,
        onCellDoubleClick: qa,
        onCellContextMenu: Xa,
        rowClass: ie,
        gridRowStart: fs,
        copiedCellIdx: te !== null && te.row === yt ? Be.findIndex((ps) => ps.key === te.columnKey) : void 0,
        selectedCellIdx: G === _e ? M : void 0,
        draggedOverCellIdx: ls(_e),
        setDraggedOverRowIdx: Vt ? Hn : void 0,
        lastFrozenColumnIndex: Xe,
        onRowChange: Za,
        selectCell: Un,
        selectedCellEditor: us(_e)
      }));
    }
    return I;
  }
  (K.idx > Qt || K.rowIdx > mt) && (Dt({
    idx: -1,
    rowIdx: Ye - 1,
    mode: "SELECT"
  }), Hn(void 0));
  let rn = `repeat(${gt}, ${N}px)`;
  Ut > 0 && (rn += ` repeat(${Ut}, ${W}px)`), n.length > 0 && (rn += Vn), Tt > 0 && (rn += ` repeat(${Tt}, ${W}px)`);
  const Go = K.idx === -1 && K.rowIdx !== Ye - 1;
  return /* @__PURE__ */ B.jsxs("div", {
    role: ae,
    "aria-label": le,
    "aria-labelledby": A,
    "aria-describedby": z,
    "aria-multiselectable": ce ? !0 : void 0,
    "aria-colcount": Be.length,
    "aria-rowcount": Ie,
    className: xe(ep, H, Vt && rp),
    style: {
      ...q,
      scrollPaddingInlineStart: K.idx > Xe || (pt == null ? void 0 : pt.idx) !== void 0 ? `${Gr}px` : void 0,
      scrollPaddingBlock: Zt(K.rowIdx) || (pt == null ? void 0 : pt.rowIdx) !== void 0 ? `${re + Ut * W}px ${Tt * W}px` : void 0,
      gridTemplateColumns: La,
      gridTemplateRows: rn,
      "--rdg-header-row-height": `${N}px`,
      "--rdg-scroll-height": `${Ua}px`,
      ...yr
    },
    dir: U,
    ref: _t,
    onScroll: rs,
    onKeyDown: ts,
    "data-testid": oe,
    children: [/* @__PURE__ */ B.jsxs(Wd, {
      value: Je,
      children: [/* @__PURE__ */ B.jsx(Jd, {
        value: Ja,
        children: /* @__PURE__ */ B.jsxs(qd, {
          value: Mt,
          children: [Array.from({
            length: Xt
          }, (I, M) => /* @__PURE__ */ B.jsx(Nf, {
            rowIdx: M + 1,
            level: -Xt + M,
            columns: Cr(Ye + M),
            selectedCellIdx: K.rowIdx === Ye + M ? K.idx : void 0,
            selectCell: Lo
          }, M)), /* @__PURE__ */ B.jsx(Mf, {
            rowIdx: gt,
            columns: Cr(Jt),
            onColumnResize: Ha,
            onColumnsReorder: Ka,
            sortColumns: C,
            onSortColumnsChange: Ya,
            lastFrozenColumnIndex: Xe,
            selectedCellIdx: K.rowIdx === Jt ? K.idx : void 0,
            selectCell: Lo,
            shouldFocusGrid: !Wn,
            direction: U
          })]
        })
      }), n.length === 0 && F ? F : /* @__PURE__ */ B.jsxs(B.Fragment, {
        children: [o == null ? void 0 : o.map((I, M) => {
          const G = gt + 1 + M, J = Jt + 1 + M, de = K.rowIdx === J, Se = re + W * M;
          return /* @__PURE__ */ B.jsx(Fi, {
            "aria-rowindex": G,
            rowIdx: J,
            gridRowStart: G,
            row: I,
            top: Se,
            bottom: void 0,
            viewportColumns: Cr(J),
            lastFrozenColumnIndex: Xe,
            selectedCellIdx: de ? K.idx : void 0,
            isTop: !0,
            selectCell: Un
          }, M);
        }), /* @__PURE__ */ B.jsx(Yd, {
          value: Qa,
          children: ds()
        }), i == null ? void 0 : i.map((I, M) => {
          const G = $t + n.length + M + 1, J = n.length + M, de = K.rowIdx === J, Se = pe > Ht ? Hr - W * (i.length - M) : void 0, Pe = Se === void 0 ? W * (i.length - 1 - M) : void 0;
          return /* @__PURE__ */ B.jsx(Fi, {
            "aria-rowindex": Ie - Tt + M + 1,
            rowIdx: J,
            gridRowStart: G,
            row: I,
            top: Se,
            bottom: Pe,
            viewportColumns: Cr(J),
            lastFrozenColumnIndex: Xe,
            selectedCellIdx: de ? K.idx : void 0,
            isTop: !1,
            selectCell: Un
          }, M);
        })]
      })]
    }), cs(), Od(jt), L && /* @__PURE__ */ B.jsx("div", {
      ref: f,
      tabIndex: Go ? 0 : -1,
      className: xe(np, Go && [Of, Xe !== -1 && If], !Zt(K.rowIdx) && op),
      style: {
        gridRowStart: K.rowIdx + $t + 1
      }
    }), pt !== null && /* @__PURE__ */ B.jsx(Yf, {
      scrollToPosition: pt,
      setScrollToCellPosition: hr,
      gridElement: _t.current
    })]
  });
}
function zi(e) {
  return e.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function ao(e, t) {
  return e.idx === t.idx && e.rowIdx === t.rowIdx;
}
const pp = /* @__PURE__ */ Co(fp), gp = {
  "--rdg-color": Te.gray800,
  "--rdg-header-color": Te.gray700,
  "--rdg-border-color": Te.gray400,
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
}, hp = St.div`
  width: 100%;
  position: relative;
  height: 100%;

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${Te.primary500};
    border-radius: 8px;
    border: none;
  }

  *::-webkit-scrollbar-track {
    background-color: ${Te.gray100};
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color${Te.primary500};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${Te.gray200};
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
`, mp = St.div`
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    min-width: 24px;

    div {
        position: absolute;
        top: 50%;
        width: 4px; // 13px
        height: 4px; // 13px
        transform: translateY(-50%);
        border-radius: 50%;
        background: ${Te.gray900};
        ${({ $color: e, theme: t }) => {
  switch (e) {
    case "primary":
      return `background: ${Te.gray100};`;
    case "secondary":
      return `background: ${Te.primary500};`;
    case "error":
      return `background: ${Te.red500};`;
    default:
      return `background: ${Te.gray800};`;
  }
}}
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1) {
        left: calc(8px / 3);
        animation: lds-ellipsis1 0.6s infinite;
    }

    div:nth-child(2) {
        left: calc(8px / 3);
        animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(3) {
        left: calc(32px / 3);
        animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(4) {
        left: calc(56px / 3);
        animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
        0% {
            transform: translateY(-50%) scale(0);
        }
        100% {
            transform: translateY(-50%) scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: translateY(-50%) scale(1);
        }
        100% {
            transform: translateY(-50%) scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, -50%);
        }
        100% {
            transform: translate(calc(24px / 3), -50%);
        }
    }
`, yp = It.memo(({ color: e }) => /* @__PURE__ */ B.jsxs(mp, { $color: e, children: [
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {})
] })), bp = St.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${Te.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`, Np = It.memo(({ theme: e, loading: t, ...r }) => {
  const n = mn(
    (o, i) => i === 0 ? "first-row" : i === r.rows.length - 1 ? "last-row" : "",
    [r.rows]
  );
  return /* @__PURE__ */ B.jsxs(hp, { children: [
    /* @__PURE__ */ B.jsx(
      pp,
      {
        ...r,
        rowClass: n,
        rowHeight: 50,
        style: { ...gp, ...e ?? {} }
      }
    ),
    t ? /* @__PURE__ */ B.jsxs(bp, { children: [
      /* @__PURE__ */ B.jsx("div", {}),
      /* @__PURE__ */ B.jsx(yp, { color: "secondary" })
    ] }) : null
  ] });
});
function vp(e) {
  return Gt("MuiIconButton", e);
}
const Cp = pr("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), wp = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${Q(n)}`, o && `edge${Q(o)}`, `size${Q(i)}`]
  };
  return Br(a, vp, t);
}, xp = Et(Mr, {
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
  [`&.${Cp.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Fa = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: g = "medium",
    ...d
  } = n, h = {
    ...n,
    edge: o,
    color: s,
    disabled: c,
    disableFocusRipple: u,
    size: g
  }, v = wp(h);
  return /* @__PURE__ */ B.jsx(xp, {
    className: xe(v.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r,
    ...d,
    ownerState: h,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (Fa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: pa(b.node, (e) => Y.Children.toArray(e.children).some((r) => /* @__PURE__ */ Y.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const Fp = St(Fa, {
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
        background: ${({ $hoverBackground: e }) => e ?? Te.gray300};
    }

    &:active {
        background: ${({ $activeBackground: e }) => e ?? Te.gray400};
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
function Sp(e) {
  return Gt("MuiSvgIcon", e);
}
pr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ep = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Q(t)}`, `fontSize${Q(r)}`]
  };
  return Br(o, Sp, n);
}, Rp = Et("svg", {
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
  var t, r, n, o, i, a, s, c, u, g, d, h, v, C;
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
          fontSize: ((c = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : c.call(s, 24)) || "1.5rem"
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
})), Nr = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: g = !1,
    titleAccess: d,
    viewBox: h = "0 0 24 24",
    ...v
  } = n, C = /* @__PURE__ */ Y.isValidElement(o) && o.type === "svg", m = {
    ...n,
    color: a,
    component: s,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: g,
    viewBox: h,
    hasSvgAsChild: C
  }, p = {};
  g || (p.viewBox = h);
  const x = Ep(m);
  return /* @__PURE__ */ B.jsxs(Rp, {
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
    children: [C ? o.props.children : o, d ? /* @__PURE__ */ B.jsx("title", {
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
function zo(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ B.jsx(Nr, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Nr.muiName, /* @__PURE__ */ Y.memo(/* @__PURE__ */ Y.forwardRef(r));
}
const Tp = zo(/* @__PURE__ */ B.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), $p = St(Ta)`
    border: 1px solid ${Te.red600};
    background: ${Te.red50};
    color: ${Te.red600};
`, zp = (e) => /* @__PURE__ */ B.jsx($p, { ...e, startIcon: /* @__PURE__ */ B.jsx(Tp, {}) }), kp = zo(/* @__PURE__ */ B.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
}), "AddCircle"), Bp = (e) => /* @__PURE__ */ B.jsx(Ta, { $level: "secondary", ...e, startIcon: /* @__PURE__ */ B.jsx(kp, {}) }), Op = zo(/* @__PURE__ */ B.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Ip(e) {
  return Gt("MuiChip", e);
}
const ue = pr("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Pp = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: i,
    onDelete: a,
    clickable: s,
    variant: c
  } = e, u = {
    root: ["root", c, r && "disabled", `size${Q(n)}`, `color${Q(o)}`, s && "clickable", s && `clickableColor${Q(o)}`, a && "deletable", a && `deletableColor${Q(o)}`, `${c}${Q(o)}`],
    label: ["label", `label${Q(n)}`],
    avatar: ["avatar", `avatar${Q(n)}`, `avatarColor${Q(o)}`],
    icon: ["icon", `icon${Q(n)}`, `iconColor${Q(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${Q(n)}`, `deleteIconColor${Q(o)}`, `deleteIcon${Q(c)}Color${Q(o)}`]
  };
  return Br(u, Ip, t);
}, Ap = Et("div", {
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
      variant: c
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
      [`& .${ue.deleteIcon}`]: t[`deleteIcon${Q(c)}Color${Q(n)}`]
    }, t.root, t[`size${Q(s)}`], t[`color${Q(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${Q(n)})`], a && t.deletable, a && n !== "default" && t[`deletableColor${Q(n)}`], t[c], t[`${c}${Q(n)}`]];
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
})), _p = Et("span", {
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
function Bi(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const za = /* @__PURE__ */ Y.forwardRef(function(t, r) {
  const n = gr({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: a,
    color: s = "default",
    component: c,
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
  } = n, k = Y.useRef(null), S = ho(k, r), _ = (le) => {
    le.stopPropagation(), C && C(le);
  }, j = (le) => {
    le.currentTarget === le.target && Bi(le) && le.preventDefault(), m && m(le);
  }, l = (le) => {
    le.currentTarget === le.target && C && Bi(le) && C(le), p && p(le);
  }, $ = a !== !1 && v ? !0 : a, D = $ || C ? Mr : c || "div", P = {
    ...n,
    component: D,
    disabled: g,
    size: x,
    color: s,
    iconColor: /* @__PURE__ */ Y.isValidElement(d) && d.props.color || s,
    onDelete: !!C,
    clickable: $,
    variant: T
  }, H = Pp(P), q = D === Mr ? {
    component: c || "div",
    focusVisibleClassName: H.focusVisible,
    ...C && {
      disableRipple: !0
    }
  } : {};
  let ie = null;
  C && (ie = u && /* @__PURE__ */ Y.isValidElement(u) ? /* @__PURE__ */ Y.cloneElement(u, {
    className: xe(u.props.className, H.deleteIcon),
    onClick: _
  }) : /* @__PURE__ */ B.jsx(Op, {
    className: xe(H.deleteIcon),
    onClick: _
  }));
  let ge = null;
  o && /* @__PURE__ */ Y.isValidElement(o) && (ge = /* @__PURE__ */ Y.cloneElement(o, {
    className: xe(H.avatar, o.props.className)
  }));
  let we = null;
  return d && /* @__PURE__ */ Y.isValidElement(d) && (we = /* @__PURE__ */ Y.cloneElement(d, {
    className: xe(H.icon, d.props.className)
  })), process.env.NODE_ENV !== "production" && ge && we && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ B.jsxs(Ap, {
    as: D,
    className: xe(H.root, i),
    disabled: $ && g ? !0 : void 0,
    onClick: v,
    onKeyDown: j,
    onKeyUp: l,
    ref: S,
    tabIndex: w && g ? -1 : E,
    ownerState: P,
    ...q,
    ...y,
    children: [ge || we, /* @__PURE__ */ B.jsx(_p, {
      className: xe(H.label),
      ownerState: P,
      children: h
    }), ie]
  });
});
process.env.NODE_ENV !== "production" && (za.propTypes = {
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
  children: nu,
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
const Lp = St(za)`
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
    color: ${Te.primary50};
`;
export {
  Bp as AddButton,
  Ta as Button,
  Lp as Chip,
  Np as DataGrid,
  zp as DeleteButton,
  Fp as IconButton,
  yp as Loader,
  $p as StyledButton,
  mp as StyledLoader,
  Te as taktikTheme
};
